'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "Can a private school legally enforce a 'fees once paid are non-refundable' clause?",
    answer: "Not in absolute terms. Consumer commissions and High Courts across India have consistently held that blanket 'non-refundable' clauses in school admission forms are one-sided, unconscionable, and often unenforceable—particularly when the student never actually attended, withdrew before the academic session began, or left mid-session due to genuine reasons like relocation or medical emergency. The key legal principle is that a school cannot retain fees for a service it has not rendered. If the seat is subsequently filled by another student, retaining the original parent's full fees constitutes unjust enrichment. Courts require the school to demonstrate actual, provable financial loss to justify any retention beyond a nominal administrative charge."
  },
  {
    question: "Is a private school a 'service provider' under the Consumer Protection Act, 2019?",
    answer: "The question of whether educational institutions fall under the Consumer Protection Act has been debated in Indian courts for decades. While the Supreme Court in certain judgments held that education per se is not a 'commodity,' consumer commissions and several High Courts have increasingly taken the view that when a private school engages in commercial activity—collecting admission fees, caution deposits, development charges, activity fees, and transport fees—it is acting as a service provider and the parent is a consumer. Many District Consumer Commissions have accepted jurisdiction over private school fee disputes, especially where the grievance relates to refusal to refund fees for services not rendered, arbitrary fee hikes, or withholding of caution deposits. At LegalRecovery, we have successfully filed consumer complaints against private schools and obtained refund orders."
  },
  {
    question: "What is a capitation fee and why is it illegal?",
    answer: "A capitation fee is any payment collected by a school beyond its officially notified or approved fee structure—whether called a 'donation,' 'building fund contribution,' 'society membership,' 'management quota consideration,' or any other name. Under Section 13 of the Right to Education (RTE) Act, 2009, no school—whether government-aided or private unaided—is permitted to collect a capitation fee or subject a child to any screening procedure for admission. Schools found guilty of collecting capitation fees can be penalised with a fine of up to ten times the amount of the capitation fee collected. If you were coerced into paying any such amount as a condition of admission, you are entitled to a full refund plus the statutory penalty. The burden of proving that the payment was voluntary lies entirely with the school."
  },
  {
    question: "My child got a better school. Can I get a refund from the first school when withdrawing before classes started?",
    answer: "Yes, this is one of the strongest grounds for a refund. If admission was cancelled before the academic session commenced—meaning no classes were attended and no educational services were consumed—most consumer commissions hold that the school has no legitimate basis to retain the tuition fee. The school can deduct a reasonable administrative or processing charge (courts have accepted amounts between ₹500 and ₹2,000), but retaining thousands or lakhs as 'non-refundable admission fee' when no service was provided is unjust enrichment. The critical factor is the timing of your withdrawal relative to when the school could still fill the seat. If you withdrew early enough for the school to admit another student, the legal case for a full or substantial refund is very strong."
  },
  {
    question: "The school is refusing to issue the Transfer Certificate unless we pay pending fees. Is this legal?",
    answer: "No. The withholding of a Transfer Certificate (TC) to coerce parents into paying disputed fees is illegal and has been condemned by numerous High Courts and the Supreme Court. A TC is a fundamental academic document essential for a child's continued education, and withholding it effectively denies the child's right to education guaranteed under Article 21-A of the Constitution. Courts have held that even if there are genuine fee disputes, the school cannot hold the TC hostage. You can demand the TC through a formal written request citing the RTE Act, approach the District Education Officer (DEO) for intervention, or file a writ petition in the High Court for immediate relief. Schools that persist in withholding TCs after being formally notified risk contempt of court proceedings."
  },
  {
    question: "What is a caution deposit and must the school refund it?",
    answer: "A caution deposit (sometimes called a security deposit) is a refundable sum collected by the school at the time of admission, typically ranging from ₹2,000 to ₹20,000 or more, intended to cover any damage to school property or outstanding dues at the time of the student's departure. By its very nature, a caution deposit is meant to be refunded at the end of the academic relationship, subject to any legitimate deductions. Schools that refuse to refund caution deposits when a student leaves—claiming it is 'forfeited' due to mid-session withdrawal—are acting without legal basis. Consumer commissions have consistently ordered the refund of caution deposits along with interest for the period of wrongful retention."
  },
  {
    question: "Can I claim a refund of the annual development fee or building fund charged by the school?",
    answer: "Development fees and building fund contributions are among the most contested components of private school billing. While courts have permitted schools to collect such charges for genuine infrastructure development, they have also held that if a student leaves mid-session, a pro-rata adjustment of the development fee is equitable. Furthermore, if the school collected a lump-sum annual development fee but the student attended for only a fraction of the year, retaining the entire amount is disproportionate. If the school never actually spent these funds on the promised infrastructure, or if the development charge was charged without proper State Fee Regulatory Committee approval, you have additional grounds for a full refund."
  },
  {
    question: "What role do State Fee Regulatory Committees play in school fee disputes?",
    answer: "State Fee Regulatory Committees (FRCs) or Fee Regulatory Authorities are quasi-judicial bodies established under state-specific education legislation in states like Tamil Nadu, Karnataka, Maharashtra, Rajasthan, and others. They are empowered to examine proposed school fee structures, approve or reject fee hikes, and hear complaints from parents about arbitrary or excessive charges. If your school raised fees without FRC approval, collected development charges beyond the approved limit, or charged fees under categories not sanctioned by the FRC, you can file a complaint directly with the FRC. The FRC has the authority to direct refunds of excess fees and impose penalties on non-compliant schools. Parallel complaints to both the FRC and the consumer commission are often the most effective strategy."
  },
  {
    question: "My child's school shut down mid-year. Can I get a refund for the remaining months?",
    answer: "Absolutely—and this is the strongest possible ground for a school fee refund. When a school shuts down mid-year, it has fundamentally breached its obligation to provide education for the full period for which fees were collected. You are entitled to a full pro-rata refund for every month of the academic session that was paid for but not delivered. In such cases, we file complaints against both the school management and the individual trustees or directors, who cannot hide behind the school's closure to escape personal liability. The consumer commission can issue execution orders to attach the school's movable and immovable property to recover the dues, and in cases of fraudulent closure, an FIR for criminal breach of trust is also an appropriate remedy."
  },
  {
    question: "What documents should I preserve when seeking a school fee refund?",
    answer: "You must compile a comprehensive documentary file: the original admission form signed by both parties; all fee receipts, bank statements, and UPI/NEFT confirmation screenshots showing every payment made; the school's fee structure brochure or circular for the academic year; the prospectus, website screenshots, or marketing material showing the promised infrastructure and facilities; the student's attendance records showing the period actually attended; your written withdrawal or cancellation letter to the school principal along with proof of delivery (email read receipt, registered post AD card, or WhatsApp delivery confirmation); any response from the school management; and the student's Transfer Certificate (if issued). If the withdrawal was due to medical reasons, include medical certificates. If it was due to relocation, include the new employment letter, house lease agreement, or official transfer order."
  },
  {
    question: "Can I file a consumer complaint if the school is a trust or a society?",
    answer: "Yes. Many private schools in India operate as educational trusts, registered societies, or Section 8 companies. The legal structure of the school does not affect your right to file a consumer complaint. Consumer commissions look at the substance of the transaction—fees were paid, services were either not rendered or were deficient, and a refund was demanded and refused—not the legal form of the school's organizational structure. Moreover, when filing the complaint, you should name both the school institution and the individual trustees or managing committee members as opposite parties, as they are personally accountable for the decisions of the trust."
  },
  {
    question: "The school offered only a partial refund after deducting 'administrative charges' of 50% of my fees. Is that acceptable?",
    answer: "No, a deduction of 50% of the fees paid as 'administrative charges' is grossly disproportionate and almost certainly illegal. Courts have accepted administrative or processing fee deductions of a few hundred to a maximum of a few thousand rupees—not 50% of a lakh-rupee admission fee. If the school is offering you a derisory partial refund with an unreasonably large deduction, reject it and proceed through formal legal channels. At LegalRecovery, we assess every settlement offer against the benchmark established by consumer court precedents and advise our clients accordingly. Accepting an inadequate settlement often requires signing a waiver of further claims, which could permanently bar you from seeking the full amount you are owed."
  },
  {
    question: "Can multiple parents file a joint complaint against the same school?",
    answer: "Yes. Under Section 35(1)(c) of the Consumer Protection Act, 2019, one or more consumers with the same or similar interest can file a representative complaint. If multiple parents in your child's school are facing the same fee refusal—whether due to sudden closure, illegal capitation charges, or unauthorized fee hikes—a joint complaint is significantly more effective. It reduces individual costs, creates a larger claim quantum, and generates far greater institutional and reputational pressure on the school management. At LegalRecovery, we coordinate joint parent actions and have successfully brought collective complaints that recovered fees for dozens of families simultaneously."
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
      "name": "School Fee Refund",
      "item": "https://www.legalrecovery.in/recovery/school-fee-refund"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Private School Not Refunding Fees? Your Legal Rights and How to Recover Your Money in India",
  "description": "Comprehensive guide on recovering private school fees, caution deposits, capitation charges, and development fees in India. Learn about RTE Act protections, State Fee Regulatory Committees, Transfer Certificate rights, and consumer court remedies.",
  "image": "https://www.legalrecovery.in/og-school-fee-refund.png",
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
  "name": "School Fee Refund Recovery Services",
  "image": "https://www.legalrecovery.in/og-school-fee-refund.png",
  "description": "Expert legal assistance for recovering private school admission fees, caution deposits, capitation charges, and development fees through consumer court and legal notices in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "410"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Deepa Krishnamurthy" },
      "reviewBody": "The school withheld my daughter's TC and refused to refund ₹68,000 in fees when we relocated to Pune. LegalRecovery's legal notice got us the TC and full refund within 18 days. Absolutely brilliant service."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Rajesh Agarwal" },
      "reviewBody": "A private school in Delhi collected ₹1.5 lakh as 'building fund donation' from us. LegalRecovery identified this as an illegal capitation fee and filed a consumer complaint. We got the full amount back plus ₹25,000 compensation."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Sunita Mehta" },
      "reviewBody": "My son's school shut down in March after collecting annual fees in April. LegalRecovery joined us with 15 other parents in a joint complaint. All of us recovered our proportionate fees within 6 weeks."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Vikram Choudhary" },
      "reviewBody": "The school deducted 60% as 'admin charges' when I withdrew my son before classes began. LegalRecovery challenged this in the consumer forum and I received 95% of the fees back. Their knowledge of consumer law is exceptional."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "4" },
      "author": { "@type": "Person", "name": "Anjali Singh" },
      "reviewBody": "Recovered my caution deposit of ₹20,000 that the school had been sitting on for two years after my child left. LegalRecovery sent one legal notice and the school immediately transferred the amount with interest."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Harish Nambiar" },
      "reviewBody": "My daughter had a serious illness and could not continue school mid-session. The management showed zero empathy and refused any refund. LegalRecovery recovered ₹82,000 for the unused semester plus mental harassment compensation."
    }
  ]
};

export default function SchoolFeeRefundClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs(prev =>
      prev.includes(faqId) ? prev.filter(id => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "introduction",            title: "Introduction" },
    { id: "parents-legal-standing",  title: "Parents' Legal Standing" },
    { id: "fee-anatomy",             title: "Fee Anatomy & Refundable Components" },
    { id: "capitation-rte",          title: "Capitation Fees & RTE Act" },
    { id: "tc-hostage",              title: "Transfer Certificate Rights" },
    { id: "fee-regulatory-bodies",   title: "Fee Regulatory Authorities" },
    { id: "legal-notice-and-forum",  title: "Legal Notice & Consumer Forum" },
    { id: "case-studies",            title: "Success Stories" },
    { id: "testimonials",            title: "Client Reviews" },
    { id: "why-choose-us",           title: "Why Choose Us?" },
    { id: "faqs",                    title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "School Fee Refund", href: "/recovery/school-fee-refund" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-[#F8F9FB] min-h-screen font-sans text-slate-800 text-left">

        {/* Hero */}
        <div className="relative bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#020617] text-white overflow-hidden py-24 md:py-44 border-b border-slate-900">
          <div className="absolute inset-0 bg-black opacity-40 z-10" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-15 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[100px]" />

          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              India&apos;s Largest Legal Recovery Platform
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Private School <span className="text-[#DC2626]">Refusing</span> to Refund Your Fees?
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Don&apos;t let school management pocket your admission fees, caution deposits, or capitation money. Get expert legal representation to recover every rupee, release a withheld Transfer Certificate, and hold the management accountable under the RTE Act and consumer law.
            </p>
            <button
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer animate-pulse-slow"
            >
              Recover School Fees Now
            </button>
          </div>
        </div>

        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 xl:px-12 py-10">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_280px] xl:grid-cols-[280px_1fr_300px] gap-8 xl:gap-10 items-start mt-6">

            {/* Left TOC – Desktop */}
            <div className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 scrollbar-hide">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </div>

            {/* Main Content */}
            <div className="min-w-0">
              {/* TOC Mobile */}
              <div className="lg:hidden mb-6 sticky top-20 z-10 scale-90 origin-top">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-6 md:p-12 rounded-3xl shadow-sm space-y-12 border border-slate-100">

                {/* ── Introduction ── */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Introduction</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In a country where a child&apos;s school is often chosen before they are born—where parents research rankings, visit campuses, attend open days, and join waiting lists years in advance—the act of paying school admission fees is rarely a casual transaction. For millions of Indian families, a single year&apos;s fees at a reputed private school can represent a month&apos;s salary, a family&apos;s fixed deposit, or the liquidation of savings that took years to accumulate. The payment is made in an atmosphere of hope, aspiration, and trust: trust that the school will deliver the quality of education it advertised, trust that the facilities shown during the campus tour will actually be functional, and trust that if circumstances change, the management will deal with the family fairly and humanely. <strong>That trust is broken—shockingly often—when a school management responds to a fee refund request with a rigid, unfeeling, and frequently illegal &quot;fees once paid are non-refundable.&quot;</strong>
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The triggers for a school fee refund dispute are as varied as the families who face them. A military officer receives a posting order to another state two weeks after paying his daughter&apos;s annual fees at a top CBSE school in Pune—the school refuses to refund even the caution deposit. A family in Bangalore discovers that their son, who was enrolled in an &quot;IB curriculum&quot; school, is being taught using a photocopy of a textbook because the promised internationally-accredited material never arrived—the management insists the fees are non-refundable. A single mother in Delhi pays ₹1.8 lakh in advance for the academic year, her child falls severely ill in October and a doctor certifies that continued schooling is impossible for six months—the school offers to &quot;carry forward&quot; the balance to next year but categorically refuses a cash refund, knowing fully well that the mother cannot afford the next year&apos;s fees. A family withdraws their child from a school before the session starts because a better option became available—the school retains ₹60,000 as &quot;administrative charges&quot; despite the child never having sat in a single class.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Each of these families was told the same thing: &quot;You signed the admission form. The fee structure clearly states non-refundable. There is nothing we can do.&quot; Each of these families came to LegalRecovery believing they had no recourse. Each of them was wrong—because <strong>Indian law provides parents with multiple powerful mechanisms to challenge arbitrary fee retention, recover their money, and hold school managements personally accountable.</strong> The Right to Education Act, 2009; the Consumer Protection Act, 2019; state-level Fee Regulatory Committee legislation; High Court writ jurisdiction; and the consumer forum system together form a comprehensive legal shield that private school managements routinely count on parents not knowing about. At LegalRecovery, our mission is to close that knowledge gap and transform it into decisive legal action.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;Education is a constitutional right and a public trust. A private school that wraps itself in the language of commercial contract to justify keeping money it has not earned is abusing its position. The law will not permit it—and we will make sure of it.&quot;
                    </div>
                  </div>
                </section>

                {/* ── Parents' Legal Standing ── */}
                <section id="parents-legal-standing" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Parents&apos; Legal Standing</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      One of the most persistent myths that private school managements exploit is the idea that education is categorically outside the reach of consumer protection law—that a parent cannot be a &quot;consumer&quot; in a dispute with a school because education is a &quot;noble&quot; endeavour, not a commercial transaction. This argument, however convenient for school management, does not accurately reflect the current state of Indian law.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The debate traces back to early rulings where some consumer commissions declined jurisdiction over educational disputes, relying on the idea that &quot;deficiency in service&quot; could not apply to education. However, the legal landscape has shifted dramatically. Consumer commissions and High Courts in recent years have drawn a critical distinction: <strong>the provision of education as a constitutional right is different from the commercial transaction through which a private school collects fees for specific, promised services.</strong> When a private school collects an admission fee, caution deposit, development charge, transport fee, activity fee, and annual maintenance charge—it is engaging in a commercial transaction. The parent has paid a defined consideration for a defined set of services. If those services are not rendered, or if the school retains money for services it never provided, consumer law applies with full force.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong>Section 2(7) of the Consumer Protection Act, 2019</strong>, a &quot;consumer&quot; is any person who buys goods or hires services for a consideration that has been paid or promised, for personal use and not for any commercial purpose. A parent who pays school fees is unambiguously hiring a service—education, infrastructure, extracurricular facilities, transport—for the personal benefit of their child. The school is the service provider. When the service is not rendered, or when the school refuses to refund money for services not consumed, the parent has a cause of action for <strong>deficiency in service</strong> under Section 2(11) and for <strong>unfair trade practice</strong> under Section 2(47) of the Act. Multiple District Consumer Commissions—in Delhi, Mumbai, Chandigarh, Chennai, and Hyderabad—have exercised jurisdiction and passed refund orders against private schools in precisely such circumstances.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Parallel to consumer law, parents have standing under <strong>Article 21-A of the Constitution of India</strong>, which guarantees every child the right to free and compulsory elementary education. While this provision is more directly applicable to state action, courts have used its underlying principle to hold that any action—including the retention of academic documents by a school—that obstructs a child&apos;s access to education is constitutionally impermissible. The <strong>Right to Education Act, 2009</strong> further reinforces this by providing parents with concrete statutory rights: the right to enroll their child in a neighbourhood school, the right to be free from arbitrary screening processes, and the right against the collection of capitation fees. When a school violates these statutory rights, parents can approach not just consumer forums but also statutory authorities under the RTE Act, the District Education Officer, and even High Courts through writ petitions.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      It is also important to understand that the admission form or parent-school agreement is a <strong>contract of adhesion</strong>—a take-it-or-leave-it document prepared entirely by the school, with no scope for negotiation by the parent. Indian courts apply heightened scrutiny to such contracts. Under <strong>Section 2(46) of the Consumer Protection Act, 2019</strong>, terms in such contracts that are one-sided, unconscionable, or that significantly disadvantage the consumer without corresponding obligations on the service provider can be declared void. A &quot;fees are non-refundable under all circumstances&quot; clause in an admission form is a textbook example of an unconscionable term in a contract of adhesion, and consumer commissions have repeatedly invalidated it.
                    </p>
                  </div>
                </section>

                {/* ── Fee Anatomy ── */}
                <section id="fee-anatomy" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Fee Anatomy &amp; Refundable Components</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To mount an effective refund claim, you must first understand exactly what you paid and the legal nature of each component. Private school billing in India is notoriously opaque—the fee structure often includes a dozen or more line items, each with a different name and a different legal status. School managements exploit this opacity to argue that different components have different refund policies, when in reality most of these charges are either refundable by law or refundable in proportion to the services actually rendered.
                    </p>
                    <div className="space-y-5">
                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">1. Tuition Fee (Core Component)</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          Tuition fee is the primary consideration paid for the provision of teaching and curriculum delivery. It is typically charged on an annual or quarterly basis. If a student withdraws mid-year, the tuition fee for the months the student did not attend is refundable on a pro-rata basis. CBSE Bye-laws state that in the event of a student&apos;s migration or discontinuation, the school may collect dues only up to the month of the student&apos;s departure, not for the entire academic year. Schools that charge the full annual tuition fee upfront and then refuse to refund the remaining months&apos; portion are acting contrary to CBSE guidelines and consumer law principles.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">2. Caution Deposit / Security Deposit</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          By its own definition, a caution or security deposit is a refundable amount held by the school as a security against damage or outstanding dues. It must be returned when the student leaves the school, subject to legitimate deductions for actual damage or verified outstanding dues. Schools that &quot;forfeit&quot; caution deposits as a penalty for mid-session withdrawal have no legal basis for doing so. Consumer commissions routinely order refunds of caution deposits with interest for the period of wrongful retention—courts have applied interest rates between 9% and 12% per annum. If the deposit has been outstanding for several years, the interest alone can amount to a significant sum.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">3. Development Fee / Building Fund</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          Development fees are charges ostensibly meant for infrastructure development and maintenance. While courts have permitted such charges in principle, they require that: the fee must be approved by the relevant state authority (Fee Regulatory Committee or Director of Education); it must be spent exclusively on the school&apos;s development; and a clear account of its utilisation must be available for audit. If the school raised the development fee without regulatory approval, or if you can demonstrate that the promised infrastructure (library, laboratory, sports facility, auditorium) was never built or is in a state of severe disrepair, you have grounds to demand a refund of the development fee. For withdrawing students, a pro-rata refund of the development component is equitable and has been ordered by consumer commissions.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">4. Admission / Registration Fee</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          The admission or registration fee is typically a one-time charge for processing the application and securing the seat. Courts have permitted schools to retain a small, reasonable portion of this fee (typically ₹500–₹2,000) as a genuine administrative charge. However, when schools charge ₹20,000–₹50,000 as a &quot;non-refundable registration fee&quot; for a seat that was never occupied because the student withdrew before classes began—and then fill that same seat with the next student on the waiting list—this is unjust enrichment. The school suffers no actual financial loss; it profits from the double-collection. Consumer commissions have ordered refunds of admission fees in such cases, allowing only a nominal administrative deduction.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">5. Activity, Lab, and Technology Fees</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          Many schools charge separate fees for sports activities, science laboratories, computer labs, smart classroom technology, and extracurricular programmes. These are service-specific charges—you pay for actual usage of specific facilities. If a student withdraws mid-year, they are entitled to a pro-rata refund of these charges for the unused portion. Additionally, if the promised facilities were never operational—if the &quot;fully-equipped computer lab&quot; had outdated machines with no internet connectivity, or the &quot;Olympic swimming pool&quot; remained under construction throughout the year—the charges for these facilities must be refunded in full, as the service contracted for was never provided.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ── Capitation Fees & RTE ── */}
                <section id="capitation-rte" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Capitation Fees &amp; the RTE Act</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Among all forms of school fee exploitation, capitation fees represent the most egregious—and the most legally vulnerable—category. A capitation fee is any payment demanded by a school beyond its officially notified or approved fee structure, as a condition (explicit or implicit) for securing admission. It is collected under any number of euphemistic headings: &quot;voluntary donation to the school development fund,&quot; &quot;society membership fee,&quot; &quot;sports infrastructure contribution,&quot; &quot;library endowment,&quot; &quot;alumni association fee,&quot; or simply an undisclosed cash payment handed to an intermediary. The unifying feature is that the payment is a prerequisite for admission, and its amount bears no relation to the actual cost of the educational service to be provided—it is, in essence, a bribe for a seat.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      <strong>Section 13 of the Right to Education Act, 2009</strong> addresses this directly and unambiguously. It states that no school or person shall collect any capitation fee for admission of a child, or subject the child or their parents to any screening procedure. Any school or person contravening this provision shall be liable to a penalty which may extend to <strong>ten times the capitation fee charged</strong>. This is not a civil remedy—it is a statutory penalty that can be imposed by the designated authority under the RTE Act, which is typically the District Collector or the State Education Department. The penalty creates a powerful deterrent, but in practice many schools continue to collect capitation fees because they know most parents are either unaware of their rights or too afraid of jeopardising the child&apos;s admission to complain.
                    </p>

                    <div className="bg-red-50/40 p-6 rounded-2xl border border-red-150">
                      <h3 className="text-base md:text-lg font-black text-red-950 mb-2">Supreme Court: Profiteering in Education is Impermissible</h3>
                      <p className="text-sm text-red-900 leading-relaxed">
                        In the landmark case of <strong>T.M.A. Pai Foundation v. State of Karnataka (2002)</strong>, the Supreme Court of India, while acknowledging that private unaided schools have autonomy to set their fee structures, drew a firm and unambiguous line: schools may generate a <strong>&quot;reasonable surplus&quot;</strong> for growth and development, but they are <strong>strictly prohibited from profiteering or collecting capitation fees</strong>. The Court held that the commercialisation of education—treating admission seats as commodities to be auctioned to the highest bidder—is fundamentally at odds with the constitutional character of education as a public good. Subsequent Supreme Court rulings, including <strong>Islamic Academy of Education v. State of Karnataka (2003)</strong> and <strong>Modern Dental College and Research Centre v. State of Madhya Pradesh (2016)</strong>, have reinforced this principle, holding that any fee structure must be demonstrably linked to the actual cost of providing education, with a reasonable component for development. Any excess is capitation, and capitation is illegal.
                      </p>
                    </div>

                    <p className="text-sm md:text-base leading-relaxed">
                      The practical challenge in recovering capitation fees is evidentiary: since these payments are typically made in cash and are deliberately undocumented, proving the payment occurred requires creative evidence gathering. Bank withdrawal slips showing a cash withdrawal of the exact amount requested by the school, WhatsApp messages or emails from school intermediaries specifying the &quot;donation&quot; amount, testimony from other parents who paid similar amounts, and the fact that admission was conditional on the payment are all forms of circumstantial evidence that consumer commissions and education authorities have accepted. At LegalRecovery, we advise clients to preserve every scrap of communication—including voice recordings of conversations with school management (which are admissible as electronic evidence under the Bharatiya Sakshya Adhiniyam, 2023)—that can establish the nexus between the payment and the admission.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      When filing a capitation fee recovery claim, we simultaneously pursue two channels: a complaint to the <strong>State Designated Authority under the RTE Act</strong> for the statutory 10x penalty, and a consumer complaint for refund and compensation. The RTE complaint creates regulatory pressure on the school&apos;s licence and standing, while the consumer complaint directly targets the money you paid. This dual-track approach is far more effective than either channel in isolation, because the school faces both financial penalties and reputational damage that can affect its ability to attract new admissions in future years.
                    </p>
                  </div>
                </section>

                {/* ── TC Rights ── */}
                <section id="tc-hostage" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Transfer Certificate Rights</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Of all the coercive tactics employed by private school managements in fee disputes, the most cruel—because its primary victim is the child, not the parent—is the deliberate withholding of the Transfer Certificate (TC). A TC is the foundational document of a child&apos;s academic continuity: it is what the next school needs to process admission, confirm the child&apos;s class standing, and verify academic history. Without a TC, a child cannot be admitted to any recognised school. The school that withholds the TC is therefore not inconveniencing the parent—it is effectively barring the child from receiving education entirely. It is using a child&apos;s right to education as a bargaining chip in a financial dispute that exists entirely between adults.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The legal position on TC withholding is unequivocal. Numerous High Courts—including the Delhi High Court, the Bombay High Court, the Madras High Court, and the Kerala High Court—have held in clear terms that <strong>a school cannot withhold a Transfer Certificate as a means of enforcing payment of disputed fees.</strong> The right of a child to receive a TC upon leaving a school is not conditional on the settlement of any financial dispute. If there are genuinely outstanding dues that the parent disputes, the school must resolve that dispute through legal means—filing a civil suit for the amount, approaching the Fee Regulatory Committee, or invoking the dispute resolution mechanism in the admission contract. What the school cannot do, under any circumstances, is hold the TC hostage and thereby deny the child access to another school.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The constitutional basis for this position is <strong>Article 21-A of the Constitution</strong>, read with the Right to Education Act, 2009. Article 21-A guarantees every child between the ages of 6 and 14 the fundamental right to free and compulsory elementary education. The Supreme Court has interpreted &quot;right to education&quot; broadly to include everything necessary to make that right meaningful—including the freedom from administrative barriers that prevent a child from changing schools. A TC withheld over a fee dispute is precisely such a barrier, and courts have not hesitated to treat its withholding as a violation of the child&apos;s fundamental rights.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, we treat TC disputes as emergency situations requiring the fastest possible legal intervention. The protocol is as follows: on day one, we send a <strong>formal legal notice</strong> to the school principal and the management trust, demanding the immediate release of the TC and citing the specific High Court judgments that prohibit TC withholding. On the same day, we file a written complaint with the <strong>District Education Officer (DEO)</strong> of the relevant district, who has statutory authority under the RTE Act to direct schools to comply. The DEO can issue a direction within days, and most schools—faced with the threat of regulatory action from the DEO and a legal notice from our advocates—release the TC within 48 to 72 hours. If the school persists, we file a <strong>writ petition in the relevant High Court</strong> under Article 226 of the Constitution, seeking an order of mandamus directing the school to release the TC forthwith. High Courts have a strong and consistent track record of granting such relief quickly, often within the first hearing.
                    </p>
                  </div>
                </section>

                {/* ── Fee Regulatory Bodies ── */}
                <section id="fee-regulatory-bodies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Fee Regulatory Authorities</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Beyond consumer forums and High Courts, parents in most Indian states have access to specialised regulatory bodies that were specifically created to address private school fee abuses. Understanding the structure and powers of these bodies—and how to use them in conjunction with consumer law remedies—can significantly accelerate the resolution of your dispute and increase the total recovery.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      <strong>State Fee Regulatory Committees (FRCs)</strong> are quasi-judicial bodies established under state-specific education legislation. States that have enacted dedicated fee regulation laws include Tamil Nadu (Schools (Regulation of Collection of Fee) Act, 2009), Karnataka (Karnataka Educational Institutions (Prohibition of Capitation Fee) Act, 1984, as amended), Maharashtra (Maharashtra Educational Institutions (Prohibition of Capitation Fees) Act, 1987), Rajasthan (Rajasthan Schools (Regulation of Fee) Act, 2016), and several other states. Each FRC is empowered to: examine and approve proposed fee structures submitted by private schools; assess whether fees charged are commensurate with the school&apos;s actual infrastructure, faculty costs, and operating expenses; hear complaints from parents about fee hikes that exceeded the approved limit; and direct refunds of fees collected in excess of the approved structure.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Filing a complaint with the FRC is entirely separate from—and complementary to—filing a consumer complaint. The FRC operates under education law and focuses on the systemic pattern of fee practices across the school, whereas the consumer commission focuses on the individual parent&apos;s refund claim. An FRC finding that a school has been charging unapproved or excessive fees significantly strengthens your consumer complaint, because it establishes the unlawfulness of the charge with the backing of a regulatory authority. Conversely, a consumer commission order directing a refund can be cited before the FRC to demonstrate the school&apos;s pattern of exploitative conduct.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The <strong>District Education Officer (DEO)</strong> is another critically important authority. The DEO is the primary government officer responsible for overseeing the functioning of private schools in the district. They have the power to: inspect school premises and records; issue directives to school managements on fee-related matters; direct the release of Transfer Certificates; and initiate proceedings against schools that violate the terms of their recognition certificate. A complaint to the DEO is typically free, fast, and effective for TC-related emergencies. Many schools that would ignore a parent&apos;s direct request immediately comply when a DEO notice arrives, because non-compliance with a DEO directive can put their school&apos;s recognition at risk.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For CBSE-affiliated schools, the <strong>Central Board of Secondary Education</strong> itself has Bye-laws and Affiliation Bye-laws that regulate school conduct. CBSE Bye-law 13 specifies that affiliated schools must not collect fees beyond their approved structure, must not engage in commercialisation of education, and must issue TCs promptly upon request. Complaints to the CBSE&apos;s Grievance Portal can result in the Board directing the school to comply, and persistent non-compliance can lead to the suspension or termination of the school&apos;s CBSE affiliation—the most existential threat available to parents of children in CBSE schools. At LegalRecovery, we advise a coordinated, multi-forum approach: simultaneous complaints to the DEO, the FRC, the CBSE (if applicable), and the consumer commission. This approach, coordinated through our legal panel, maximises pressure across all regulatory fronts and leaves the school management with nowhere to hide.
                    </p>
                  </div>
                </section>

                {/* ── Legal Notice & Consumer Forum ── */}
                <section id="legal-notice-and-forum" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Legal Notice &amp; Consumer Forum</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When administrative channels—written requests to the school principal, DEO complaints, CBSE grievance filings—fail to produce a satisfactory result, the formal legal machinery offers two powerful parallel routes: the legal notice and the consumer complaint. These are not sequential; they can be initiated simultaneously to create maximum pressure from multiple directions.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A <strong>legal notice from LegalRecovery</strong> is a document drafted and signed by an advocate—not a template letter printable from the internet. It is a precisely crafted legal instrument that serves several critical functions simultaneously. It establishes a formal record of your demand and the school&apos;s obligation to respond. It cites the specific statutory provisions being violated: Section 13 of the RTE Act (if capitation fees are involved), the applicable state fee regulation legislation, CBSE Bye-laws, and the Consumer Protection Act, 2019. It quantifies the total demand with forensic precision: the principal fee amount sought, interest calculated at a stated rate from the date of the refund request, a defined compensation claim for mental harassment and professional inconvenience, and the cost of issuing the notice. The notice is served via registered post with AD to the school&apos;s registered business address and the personal residential addresses of all trustees and managing committee members—creating individual, personal accountability that cannot be deflected by corporate organisational structure. It demands a response within a defined period (typically 15 days) and specifies that failure to respond will be treated as an admission of the claim.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Our data across hundreds of school fee refund cases shows that <strong>approximately 65–75% of disputes are resolved within 20 to 30 days of the legal notice being served</strong>. School managements—particularly those affiliated with reputed boards like CBSE or ICSE—are acutely sensitive to reputational risk. A formal legal notice signals that the matter will become public record if it reaches a consumer commission, and the prospect of newspaper coverage of a consumer court order against the school is a powerful motivator for settlement. In our experience, schools affiliated with reputed chains or operating in competitive educational markets settle almost universally at the legal notice stage.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For cases that proceed to the consumer commission, the <strong>e-Daakhil portal (edaakhil.nic.in)</strong> enables fully online filing without a physical court visit. The complaint is drafted in the prescribed format and uploaded with all supporting documents: admission form, all fee receipts, correspondence with the school, legal notice and its postal AD card, DEO complaint copy, and any regulatory authority correspondence. The court fee is minimal—₹200 for claims up to ₹5 lakh. Once admitted, the commission issues notice to the school management and requires a written response within 30 days. If the school fails to respond, the commission can pass an <strong>ex parte</strong> order based on your evidence alone. The consumer commission&apos;s order can include: direction to refund the principal amount with interest; compensation for mental agony (courts have awarded ₹10,000 to ₹50,000 in school fee cases); litigation costs; and in cases involving TC withholding, a direction to release the TC immediately. Non-compliance with the order opens the school to execution proceedings including attachment of property and, in extreme cases, detention of trustees in civil prison.
                    </p>
                  </div>
                </section>

                {/* ── Case Studies ── */}
                <section id="case-studies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Success Stories</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Our legal panel has recovered school fees, caution deposits, and capitation charges for families across India—from metropolitan CBSE schools to state-board institutions in tier-2 cities. Below are representative examples of recoveries coordinated by our team:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case Study 1: Pre-Session Withdrawal</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹1.15 Lakh from a CBSE School in Gurugram</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          A family paid ₹1.2 lakh in total fees (admission fee + first quarter tuition + caution deposit + development charge) at a reputed CBSE school in Gurugram in March. In April—two weeks before classes were due to begin—the family&apos;s father received a central government transfer posting to Kolkata. The family immediately requested a refund with supporting documentation. The school offered to refund only the caution deposit (₹10,000), retaining ₹1.1 lakh as &quot;non-refundable.&quot; We served a legal notice to all three trustees. Within 17 days, the school refunded ₹1.15 lakh, deducting only ₹5,000 as processing charges, and waived all further claims.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case Study 2: Illegal Capitation Fee</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹2.0 Lakh + Penalty from a Mumbai School</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Parents of a Class 1 student in a well-known ICSE school in South Mumbai were asked to pay ₹2 lakh as a &quot;mandatory building development contribution&quot; in cash before the admission letter was issued. After the child was admitted and the family realised the payment was illegal under the RTE Act, they came to us. We filed a complaint with the Maharashtra fee regulatory authority and a consumer complaint simultaneously. The regulatory authority imposed a statutory penalty and directed a refund. The total recovery—including the principal ₹2 lakh and a portion of the statutory penalty—amounted to ₹2.85 lakh.
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
                      { text: "The school withheld my daughter's TC and refused to refund ₹68,000 in fees when we relocated to Pune. LegalRecovery's legal notice got us the TC and full refund within 18 days. Absolutely brilliant service.", name: "Deepa Krishnamurthy" },
                      { text: "A private school in Delhi collected ₹1.5 lakh as 'building fund donation' from us. LegalRecovery identified this as an illegal capitation fee and filed a consumer complaint. We got the full amount back plus ₹25,000 compensation.", name: "Rajesh Agarwal" },
                      { text: "My son's school shut down in March after collecting annual fees in April. LegalRecovery joined us with 15 other parents in a joint complaint. All of us recovered our proportionate fees within 6 weeks.", name: "Sunita Mehta" },
                      { text: "The school deducted 60% as 'admin charges' when I withdrew my son before classes began. LegalRecovery challenged this in the consumer forum and I received 95% of the fees back. Their knowledge of consumer law is exceptional.", name: "Vikram Choudhary" },
                      { text: "Recovered my caution deposit of ₹20,000 that the school had been sitting on for two years after my child left. LegalRecovery sent one legal notice and the school immediately transferred the amount with interest.", name: "Anjali Singh" },
                      { text: "My daughter had a serious illness and could not continue school mid-session. The management showed zero empathy and refused any refund. LegalRecovery recovered ₹82,000 for the unused semester plus mental harassment compensation.", name: "Harish Nambiar" },
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
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery is India&apos;s leading tech-enabled recovery platform. We combine the legal authority of veteran consumer and education law advocates with advanced workflow automation to deliver unmatched speed, precision, and resolution rates for school fee disputes. Here is what makes us different:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Multi-Forum Strategy:</strong> We do not send one letter and hope. We simultaneously target the DEO, the CBSE Grievance Portal (where applicable), the State Fee Regulatory Committee, and the consumer commission—a coordinated multi-front approach that leaves no regulatory avenue unexplored.</li>
                      <li><strong>RTE Act Expertise:</strong> Our legal panel is deeply familiar with the Right to Education Act and state-level capitation fee legislation. We invoke Section 13 of the RTE Act aggressively in capitation fee cases, unlocking the 10x penalty mechanism that most parents don&apos;t know exists.</li>
                      <li><strong>TC Emergency Protocol:</strong> TC withholding is treated as a legal emergency with a defined 72-hour response protocol involving simultaneous DEO complaint and legal notice, followed by High Court writ petition if necessary.</li>
                      <li><strong>Joint Parent Action:</strong> We coordinate group complaints for families affected by the same school&apos;s illegal practices, reducing costs and multiplying pressure on the management.</li>
                      <li><strong>Transparent Flat Pricing:</strong> One flat fee covering everything—no hourly billing, no retainer surprises. You know your cost upfront, before a single letter is sent.</li>
                    </ul>
                  </div>
                </section>

                {/* ── FAQs ── */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">FAQs</h2>
                  <div className="space-y-4">
                    {faqs.map((faq, idx) => {
                      const faqId = `faq-${idx}`;
                      const isExpanded = expandedFaqs.includes(faqId);
                      return (
                        <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm transition-all duration-200 hover:border-slate-350">
                          <button
                            onClick={() => toggleFaq(idx)}
                            className="flex justify-between items-center w-full text-left p-4 font-bold text-sm text-slate-900 hover:bg-slate-50/50 focus:outline-none transition-colors cursor-pointer"
                          >
                            <span>{faq.question}</span>
                            <span className={`transform transition-transform duration-205 shrink-0 ml-3 text-slate-400 ${isExpanded ? 'rotate-180' : ''}`}>▼</span>
                          </button>
                          {isExpanded && (
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
                  Discuss your school fee refund case with consumer and education law experts. We serve verified notices with full compliance support.
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
