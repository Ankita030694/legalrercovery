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
    question: "Can a coaching institute legally enforce a 'fees once paid are non-refundable' clause?",
    answer: "No, not unconditionally. Consumer commissions across India have repeatedly held that blanket 'no-refund' clauses in coaching contracts are unfair contract terms under Section 2(46) of the Consumer Protection Act, 2019. The CCPA Guidelines for the Coaching Sector (2024) further mandate that coaching centres must provide pro-rata refunds for the unutilised portion of the course. These clauses are considered one-sided, unconscionable, and opposed to public policy—especially when the student is a minor or a young adult with limited bargaining power against a large commercial entity."
  },
  {
    question: "What are the CCPA Guidelines for the Coaching Sector and how do they help me?",
    answer: "The Central Consumer Protection Authority (CCPA) issued comprehensive Guidelines for the Coaching Sector in 2024. These guidelines mandate that coaching centres must: provide pro-rata refunds for the unutilised course period within 10 days of a refund application; refrain from increasing fees during an ongoing course; not use misleading advertisements such as '100% guaranteed selection' or 'guaranteed ranks'; employ tutors with a minimum qualification of graduation; and maintain proper infrastructure including minimum space requirements and access to counselling services. If your coaching institute violates any of these guidelines, it strengthens your refund claim significantly."
  },
  {
    question: "How is the pro-rata refund amount calculated for a coaching course?",
    answer: "The pro-rata refund is calculated by dividing the total course fee by the total duration of the course (in months or sessions), then multiplying the per-unit rate by the number of remaining unused months or sessions. For example, if you paid ₹1,20,000 for a 12-month NEET preparation course and withdrew after 4 months, your pro-rata refund would be (₹1,20,000 ÷ 12) × 8 = ₹80,000. The institute may deduct a small administrative charge (typically ₹500–₹1,000) from this amount, but any deduction beyond a reasonable processing fee is legally contestable."
  },
  {
    question: "I joined an online coaching platform (edtech) and want a refund. Are the rules the same?",
    answer: "Yes. Online coaching platforms and edtech companies like BYJU's, Unacademy, Physics Wallah, Vedantu, and similar platforms are classified as 'service providers' under the Consumer Protection Act, 2019. They are subject to the same consumer protection rules as physical coaching centres. Multiple consumer commissions—including forums in Thiruvananthapuram, Chandigarh, and Delhi—have ordered edtech companies to issue refunds and pay compensation for deficiency in service. If you purchased the course through a loan or BNPL (Buy Now, Pay Later) arrangement, you should also notify the lending NBFC about your cancellation request."
  },
  {
    question: "The coaching institute promised '100% guaranteed selection' but failed to deliver. Can I get a full refund?",
    answer: "A guarantee of selection in competitive examinations is inherently misleading because no coaching institute can guarantee a specific result. Under the CCPA Guidelines, such claims constitute a 'misleading advertisement' and an 'unfair trade practice' under Section 2(47) of the Consumer Protection Act. If you enrolled based on such a promise, you have a very strong case for a full refund—not just a pro-rata refund—because the very basis of your contract (the guarantee) was fraudulent. You can also report the institute to the CCPA for misleading advertising, which can attract penalties up to ₹50 lakh."
  },
  {
    question: "Can I get a refund if the coaching centre changed the faculty or batch timing after I enrolled?",
    answer: "Yes. When you enrolled, you entered into a service contract based on specific terms—including the faculty who would teach, the batch schedule, and the course structure. If the coaching centre unilaterally changes these material terms (e.g., replacing a well-known faculty member with a junior teacher, shifting your batch from morning to evening, or reducing the number of sessions), it constitutes a deficiency in service. You can demand either the restoration of the original terms or a pro-rata refund for the remaining course period. Documentary evidence such as the original batch schedule, admission brochure, or website screenshots showing the promised faculty is crucial."
  },
  {
    question: "My child is a minor. Does that affect the refund claim?",
    answer: "Yes, and it strengthens your claim. Under the Indian Contract Act, 1872, a contract with a minor (below 18 years) is void ab initio—meaning it is treated as if it never existed. This means any 'no-refund' clause signed by a minor or presented to a minor for agreement has no legal force. Even if a parent or guardian co-signed the agreement, consumer commissions give additional weight to claims involving minors, as the student had limited capacity to understand the implications of the contract terms."
  },
  {
    question: "What evidence should I collect before requesting a refund?",
    answer: "You should gather: (1) the original admission form, prospectus, or enrollment confirmation; (2) all fee receipts and bank statements showing payments; (3) brochures, website screenshots, or WhatsApp messages showing the promises made during the admission process (faculty names, guaranteed results, facility descriptions); (4) the course schedule or batch details provided at the time of enrollment; (5) any communication (emails, SMS, WhatsApp chats) where you requested cancellation or complained about service quality; (6) photos or videos documenting poor infrastructure, overcrowded classrooms, or absent faculty; and (7) any medical certificates if health is your reason for withdrawal."
  },
  {
    question: "Is there a time limit for filing a consumer complaint against a coaching institute?",
    answer: "Under the Consumer Protection Act, 2019, the limitation period for filing a consumer complaint is two years from the date the cause of action arose—typically the date you first demanded a refund and were refused. The Consumer Commission has discretion to condone delays if you can show 'sufficient cause' for the late filing, but it is always advisable to act promptly. For CCPA complaints regarding misleading advertisements, there is no strict limitation, but the sooner you file, the stronger your evidence and claim."
  },
  {
    question: "Can I file a joint complaint with other students against the same coaching institute?",
    answer: "Yes. Under Section 35(1)(c) of the Consumer Protection Act, 2019, one or more consumers having the same interest can file a joint complaint. This is especially effective against large coaching chains where hundreds of students face the same issue—such as sudden branch closure, mass faculty exits, or discontinuation of a course. A joint complaint reduces individual litigation costs, increases the quantum of the claim, and creates greater pressure on the institute to settle."
  },
  {
    question: "The coaching institute is asking me to sign a 'no-objection certificate' or settlement waiver before giving a partial refund. Should I sign it?",
    answer: "Be extremely cautious. Many coaching institutes present 'NOC' or 'settlement and waiver' documents that require you to give up all further claims—including your right to file a consumer complaint—in exchange for a partial refund that is significantly less than what you are owed. Once signed, these waivers can weaken your legal position. If the amount offered is far below the pro-rata refund you are entitled to, reject the waiver and proceed through formal legal channels. At LegalRecovery, we review all proposed settlement documents before our clients sign anything."
  },
  {
    question: "What happens if the coaching institute shuts down completely?",
    answer: "If the coaching institute ceases operations, you can still pursue your refund. File a complaint against the institute's directors and proprietors personally, as they cannot hide behind the company's closure. Under consumer law, directors of a company are personally liable for deficiency in service. If the institute was a franchise, you can also file against the franchisor (the brand parent). Additionally, if the institute collected fees and then absconded without providing services, it may constitute criminal cheating under Section 420 of the IPC (now BNS Section 318), and you can file an FIR alongside the consumer complaint."
  },
  {
    question: "Can I claim compensation beyond the refund amount?",
    answer: "Absolutely. In addition to the pro-rata refund, consumer commissions routinely award: interest on the withheld amount (typically 9–12% per annum from the date of the refund request); compensation for mental agony and harassment (₹5,000 to ₹50,000 depending on the severity); and costs of litigation including advocate fees, travel expenses, and documentation costs. In cases involving misleading advertisements or particularly egregious conduct, the CCPA can impose penalties up to ₹10 lakh on the institute and up to ₹50 lakh for repeat offenders."
  },
  {
    question: "I financed the coaching fee through a student loan or EMI plan. What happens to my loan if I get a refund?",
    answer: "If you financed the coaching fee through a loan from an NBFC or a BNPL platform, you should immediately notify the lender in writing about your cancellation request and the service deficiency. Request that the lender put your EMI payments on hold pending resolution. If the coaching institute refunds the money, it should ideally be credited directly to the lender to close the outstanding principal. If the lender continues to demand EMI payments despite your complaint, you can escalate the matter to the RBI Integrated Ombudsman. In your consumer complaint, name both the coaching institute and the lending NBFC as opposite parties."
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
      "name": "Coaching Institute Fee Refund",
      "item": "https://www.legalrecovery.in/recovery/coaching-institute-fees"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Coaching Institute Not Refunding Fees? Your Legal Rights and How to Recover Tuition in India",
  "description": "Comprehensive guide on recovering coaching institute and edtech platform tuition fees in India. Learn about CCPA guidelines, consumer rights, unfair trade practices, legal notice procedures, and consumer court remedies.",
  "image": "https://www.legalrecovery.in/og-coaching-refund.png",
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
  "name": "Coaching Institute Fee Recovery Services",
  "image": "https://www.legalrecovery.in/og-coaching-refund.png",
  "description": "Expert legal assistance for recovering coaching institute and edtech platform tuition fees through consumer court and legal notices in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "520"
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
        "name": "Priya Sharma"
      },
      "reviewBody": "My son's IIT coaching centre in Kota shut down mid-session. LegalRecovery served a notice to the directors and we recovered ₹1.85 lakh within 20 days. Lifesaver for our family!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Arjun Nair"
      },
      "reviewBody": "BYJU's refused to refund my ₹72,000 despite multiple requests. LegalRecovery filed a consumer complaint and I received full refund plus ₹15,000 compensation. Highly recommended."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Neha Gupta"
      },
      "reviewBody": "The UPSC coaching institute changed the entire faculty after we enrolled. LegalRecovery helped 12 of us file a joint complaint. We all got pro-rata refunds within a month."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Siddharth Joshi"
      },
      "reviewBody": "An online edtech platform locked me into a 3-year EMI plan and then stopped updating course content. LegalRecovery helped me get both the refund AND the EMI loan cancelled."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4"
      },
      "author": {
        "@type": "Person",
        "name": "Kavita Reddy"
      },
      "reviewBody": "My daughter had a medical emergency and could not continue her NEET coaching. The institute refused to refund even a rupee. LegalRecovery's legal notice got us ₹95,000 back in 25 days."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Mohammed Irfan"
      },
      "reviewBody": "Professional team that understands consumer law inside out. Recovered my CA coaching fees when the institute shifted to a location 30 km away. Transparent pricing and zero drama."
    }
  ]
};

export default function CoachingInstituteFeesClient() {
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
    { id: "ccpa-regulatory-framework", title: "CCPA & Regulatory Framework" },
    { id: "valid-refund-grounds", title: "Valid Refund Grounds" },
    { id: "edtech-and-online-coaching", title: "EdTech & Online Coaching" },
    { id: "step-by-step-recovery", title: "Step-by-Step Recovery" },
    { id: "consumer-forum-filing", title: "Consumer Forum Filing" },
    { id: "misleading-advertising", title: "Misleading Advertising" },
    { id: "case-studies", title: "Success Stories" },
    { id: "testimonials", title: "Client Reviews" },
    { id: "why-choose-us", title: "Why Choose Us?" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Coaching Institute Fee Refund", href: "/recovery/coaching-institute-fees" },
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
              Coaching Institute <span className="text-[#DC2626]">Not Refunding</span> Your Fees?
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Don&apos;t let coaching centres or edtech platforms pocket your tuition money. Get expert legal representation to recover your fees, challenge misleading advertisements, and hold institutes accountable under CCPA guidelines and consumer law.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer animate-pulse-slow"
            >
              Recover Coaching Fees Now
            </button>
          </div>
        </div>

        <div className="mx-auto px-4 max-w-8xl py-10">
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
                      India&apos;s coaching industry is a behemoth—a sprawling, multi-billion-rupee ecosystem that stretches from the dusty lanes of Kota, Rajasthan, to the sleek digital dashboards of Bangalore-based edtech startups. Every year, millions of students and their families pour their life savings, educational loans, and emotional hopes into coaching programmes that promise to crack the country&apos;s most fiercely competitive examinations: IIT-JEE, NEET-UG, UPSC Civil Services, CA, CLAT, CAT, and a growing list of state-level entrance tests. The coaching centre—whether a cramped classroom above a Karol Bagh bookshop or a venture-capital-funded mobile application with millions of downloads—occupies a uniquely powerful position in the Indian educational landscape. It is simultaneously a beacon of aspiration and, for far too many families, a source of devastating financial exploitation. At LegalRecovery, the single most heartbreaking category of consumer complaints we handle involves <strong>coaching institutes and edtech platforms that refuse to refund tuition fees when students have every legal and moral right to demand their money back.</strong>
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The pattern is painfully predictable. A student or parent walks into an institute—or downloads an app—lured by glossy advertisements featuring &quot;100% guaranteed selection,&quot; celebrity faculty with sky-high YouTube subscriber counts, and testimonials from supposed toppers. The sales pitch is relentless: &quot;Enrol today, fees will increase tomorrow,&quot; &quot;Only 5 seats left in the Star batch,&quot; &quot;This scholarship is valid only for the next two hours.&quot; Under this engineered urgency, the family signs an admission form buried in dense, jargon-laden fine print and transfers a sum that can range from ₹30,000 to over ₹5,00,000—often in a single lump-sum payment or through a BNPL (Buy Now, Pay Later) loan that the institute&apos;s sales executive helpfully facilitates on the spot. A few weeks or months later, the cracks appear. The star faculty member who was the entire reason for enrolling is replaced by a junior assistant. The &quot;personalised mentoring&quot; promised in the brochure turns out to be a generic WhatsApp group with 500 students and one moderator. The batch timings are shifted without notice. The physical classroom is overcrowded, poorly ventilated, and lacks basic fire safety. Or, in the case of edtech platforms, the app&apos;s content is stale, the live classes are pre-recorded reruns, and the &quot;doubt-clearing sessions&quot; have wait times measured in days, not minutes.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      When the student or parent requests a cancellation and refund, they are met with the industry&apos;s most heavily weaponised clause: <strong>&quot;FEES ONCE PAID ARE STRICTLY NON-REFUNDABLE UNDER ANY CIRCUMSTANCES.&quot;</strong> The institute manager produces the signed admission form, points to the clause, and shrugs. The customer support chatbot loops endlessly. The helpline number goes unanswered. The family, already stretched thin financially, feels powerless—trapped between a service they can no longer use and a contract that seems to have locked their money away permanently. <strong>This is the precise moment where most families give up, assuming that a signed contract is the end of the road. That assumption is legally wrong.</strong>
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Indian law does not permit coaching institutes to keep your money for services they have failed to deliver. The <strong>Consumer Protection Act, 2019</strong>, the <strong>CCPA Guidelines for the Coaching Sector (2024)</strong>, and decades of consumer court jurisprudence have established a clear and powerful principle: a coaching institute is a service provider, a student is a consumer, and a &quot;no-refund&quot; clause is not a magic shield that absolves the institute of its contractual obligations. Consumer commissions across Delhi, Chandigarh, Hyderabad, Mumbai, and Jaipur have consistently struck down these clauses, ordered pro-rata refunds with interest, and awarded substantial compensation for the mental harassment inflicted on students and their families. At LegalRecovery, we have recovered crores of rupees in coaching fees from national chains, local institutes, and edtech platforms alike, and our experience is unequivocal: <strong>when a student presents the right legal arguments backed by proper documentation, the law stands firmly with the student.</strong>
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;Education is a service, not a charity. A coaching institute that accepts payment for tuition, mentoring, and facilities, and then fails to deliver what was promised, cannot invoke a contractual clause to retain the entire fee. Such a clause is not enforceable—it is an instrument of unjust enrichment that the law will not tolerate.&quot;
                    </div>
                  </div>
                </section>

                {/* CCPA & Regulatory Framework */}
                <section id="ccpa-regulatory-framework" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">CCPA &amp; Regulatory Framework</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The legal framework protecting students against exploitative coaching practices in India has undergone a dramatic transformation in recent years. What was once a largely unregulated Wild West—where coaching centres operated with near-complete impunity—is now governed by a multi-layered regulatory architecture that gives students and parents powerful tools to demand accountability, transparency, and fair refunds.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      <strong>The Consumer Protection Act, 2019</strong> is the foundational statute. Under Section 2(7), a student who pays fees for coaching is unambiguously classified as a &quot;consumer,&quot; and the coaching institute as a &quot;service provider.&quot; This classification was confirmed by the landmark ruling in <strong>FIITJEE Ltd. v. Dr. (Mrs.) Minathi Rath</strong>, where the consumer commission held that coaching institutes are commercial entities providing services for consideration and are therefore fully subject to the Consumer Protection Act. Once this classification is established, the entire protective machinery of the Act—including provisions against unfair trade practices, deficiency in service, and unfair contract terms—becomes available to the student.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      <strong>Section 2(46) of the Act</strong> defines an &quot;unfair contract&quot; as one that contains terms that cause a significant change in the rights of the consumer, including clauses that require manifestly excessive security deposits or penalties for breach, clauses that impose obligations on the consumer that are not reasonably necessary for the performance of the contract, and clauses that permit the service provider to unilaterally terminate the contract without an equivalent right for the consumer. When a coaching institute charges the entire two-year course fee upfront and then includes a clause that forfeits 100% of the fee if the student cancels after 7 days, that clause is a textbook example of an unfair contract term. Consumer commissions have the power under <strong>Section 49</strong> to examine such contracts, declare the offending terms void, and order appropriate relief—including a full or pro-rata refund with interest and compensation.
                    </p>

                    <div className="bg-red-50/40 p-6 rounded-2xl border border-red-150">
                      <h3 className="text-base md:text-lg font-black text-red-950 mb-2">CCPA Guidelines for the Coaching Sector, 2024</h3>
                      <p className="text-sm text-red-900 leading-relaxed mb-3">
                        In 2024, the Government of India issued dedicated guidelines for the coaching sector through the Central Consumer Protection Authority (CCPA) and the Ministry of Education. These guidelines represent the most significant regulatory intervention in the history of India&apos;s coaching industry. The key mandates include:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-sm text-red-900">
                        <li><strong>Mandatory Pro-Rata Refunds:</strong> If a student withdraws mid-course, the institute must refund the fees for the unutilised portion on a pro-rata basis. The refund must be processed within <strong>10 days</strong> of the refund application.</li>
                        <li><strong>No Fee Escalation Mid-Course:</strong> Coaching centres are prohibited from increasing fees during an ongoing course without the student&apos;s written consent.</li>
                        <li><strong>Tutor Qualifications:</strong> All tutors must hold a minimum qualification of graduation. Institutes cannot employ unqualified teachers.</li>
                        <li><strong>Minimum Age for Enrollment:</strong> Students must be at least 16 years old and have completed their Class 10 examination before enrolling in a coaching programme.</li>
                        <li><strong>Mental Health Support:</strong> Coaching centres must appoint trained counsellors or establish referral linkages with mental health professionals. This addresses the deeply troubling rise in student suicides linked to academic pressure at coaching hubs like Kota.</li>
                        <li><strong>Infrastructure Standards:</strong> Minimum space requirements (at least one square metre per student), adherence to fire and safety codes, proper ventilation, and access to medical or first-aid facilities are mandatory.</li>
                        <li><strong>Registration:</strong> All coaching centres must register with the relevant government authority.</li>
                      </ul>
                    </div>

                    <p className="text-sm md:text-base leading-relaxed">
                      Beyond these specific guidelines, the <strong>CCPA Guidelines for Prevention of Misleading Advertisement in the Coaching Sector, 2024</strong> add another layer of protection. These guidelines explicitly prohibit coaching centres from making false or exaggerated claims such as &quot;100% selection guaranteed,&quot; &quot;guaranteed AIR rank,&quot; or using specific students&apos; photographs and results without their verified consent. Violations attract penalties of up to <strong>₹10 lakh for the first offence</strong> and up to <strong>₹50 lakh for subsequent offences</strong>, along with potential legal action against the institute&apos;s directors. At LegalRecovery, we systematically invoke both the Consumer Protection Act and the CCPA guidelines in every coaching fee refund notice we draft, constructing a multi-layered legal challenge that leaves the institute with virtually no defensible ground.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Additionally, the <strong>Indian Contract Act, 1872</strong> provides supplementary ammunition. Under <strong>Section 56</strong> (the doctrine of frustration), when the performance of a contract becomes impossible due to circumstances beyond the control of both parties—such as a student&apos;s medical emergency or the institute&apos;s sudden closure—the obligation to perform ceases, and any money paid in advance must be restored. Under <strong>Section 23</strong>, any agreement whose consideration is opposed to public policy is void. Courts have held that a clause permitting a coaching institute to retain ₹3,00,000 for a two-year course when the student attended only 2 weeks is opposed to the basic principles of equity, and is therefore void and unenforceable.
                    </p>
                  </div>
                </section>

                {/* Valid Refund Grounds */}
                <section id="valid-refund-grounds" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Valid Refund Grounds</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The strength of your individual refund claim depends on the specific circumstances that necessitated your withdrawal. Based on our extensive case history at LegalRecovery—spanning hundreds of coaching fee disputes against both physical institutes and digital platforms—we have categorised the most common and legally powerful grounds for demanding a coaching fee refund. Understanding where your situation falls allows us to craft the most effective legal strategy for your specific case.
                    </p>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">1. Faculty Changes and Batch Restructuring</h3>
                        <p className="text-sm text-slate-650 leading-relaxed mb-3">
                          This is one of the most frequently cited grounds in coaching fee disputes, and it carries significant legal weight. When you enrolled, you entered into a service contract that was implicitly—and often explicitly—premised on specific faculty members teaching your batch. The promotional material featured these faculty members by name and photograph, the sales pitch highlighted their credentials and track record, and your decision to pay a premium fee was directly influenced by the promise that these specific educators would teach you. When the institute subsequently replaces the headline faculty with junior or unqualified substitutes—without prior notice and without offering you the option to cancel—it constitutes a fundamental alteration of the service contracted for.
                        </p>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          Consumer commissions have treated such unilateral changes as a <strong>deficiency in service</strong> because the service actually delivered is materially different from the service that was sold. Similarly, arbitrary changes to batch timings—shifting a morning batch to late evening, compressing a 6-day schedule into 3 days, or merging two batches to create an overcrowded classroom—change the fundamental nature of the learning experience. In each of these scenarios, the student is entitled to a pro-rata refund for the remaining course period. Documentary evidence is critical: preserve the original admission brochure, website screenshots showing the promised faculty, the batch allocation confirmation, and any communication from the institute about the change.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">2. Institute Closure, Relocation, or Branch Shutdown</h3>
                        <p className="text-sm text-slate-650 leading-relaxed mb-3">
                          When a coaching centre permanently closes a branch, shuts down its operations entirely, or relocates to a location that is unreasonably distant from your residence, the service contract has been breached in the most fundamental way possible. You paid to attend classes at a specific location, and the institute has unilaterally rendered that impossible. This ground has the highest success rate in consumer forums and typically results in a full refund of the unused period plus interest and compensation.
                        </p>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          In cases involving franchise operations—where a local operator runs the branch under a national brand&apos;s name—both the franchise operator and the franchisor (the brand parent) are jointly liable. The franchisor cannot disclaim responsibility by arguing that the local operator was an independent entity: if the admission was taken under the franchisor&apos;s brand name, using the franchisor&apos;s marketing materials, and promising the franchisor&apos;s curriculum, the franchisor shares the liability. At LegalRecovery, we name both parties as opposite parties in every franchise coaching refund case, ensuring there is no gap in accountability.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">3. Medical Incapacity and Health Emergencies</h3>
                        <p className="text-sm text-slate-650 leading-relaxed mb-3">
                          If a medical condition prevents the student from attending classes or continuing the course—whether it is a serious injury, surgical procedure, chronic illness, mental health crisis, or a condition like severe anxiety or depression triggered by the academic pressure itself—this constitutes a supervening impossibility under <strong>Section 56 of the Indian Contract Act</strong>. The student physically cannot use the service, and the law does not require them to continue paying for something they cannot use.
                        </p>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          A detailed medical certificate from a registered medical practitioner, clearly stating the nature of the condition, the period of incapacity, and an explicit recommendation against attending coaching classes, is essential evidence. Consumer commissions give significant weight to medical evidence and have consistently overruled coaching institutes that argue the illness is &quot;not their problem.&quot; The law is clear: when performance of a contract becomes impossible due to a supervening event not caused by either party, the consideration must be refunded.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">4. Misrepresentation and False Promises</h3>
                        <p className="text-sm text-slate-650 leading-relaxed mb-3">
                          Coaching institutes are notorious for making inflated, unverifiable, and sometimes outright fraudulent promises during the admission cycle. Claims like &quot;100% selection guaranteed,&quot; &quot;our students secured 500 of the top 1000 ranks,&quot; &quot;personal mentoring by IIT alumni,&quot; and &quot;study material designed by NEET toppers&quot; are commonplace in brochures, advertisements, and verbal sales pitches. When these promises turn out to be false—when the &quot;IIT alumni mentor&quot; is actually a third-year undergraduate, when the &quot;study material&quot; is a poorly photocopied compilation, or when the &quot;guaranteed selection&quot; is not backed by any refund clause—the entire contract is vitiated by misrepresentation.
                        </p>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          Under <strong>Section 18 of the Indian Contract Act</strong>, a contract induced by misrepresentation is voidable at the option of the consumer. This means you can choose to treat the contract as void and demand a full refund—not just a pro-rata refund—because the very basis of your enrollment was false. The CCPA&apos;s advertising guidelines further strengthen this ground by making misleading claims a punishable offence. We advise clients to preserve every piece of promotional material—screenshots of social media advertisements, copies of brochures, WhatsApp messages from sales executives, and recordings of verbal promises made during the admission consultation.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">5. Deficiency in Infrastructure and Safety Violations</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          The CCPA guidelines mandate that coaching centres must maintain minimum infrastructure standards, including a space allocation of at least one square metre per student, proper ventilation, fire safety compliance, access to drinking water and clean washrooms, and medical or first-aid facilities. When a coaching centre packs 200 students into a room designed for 80, operates in a building without fire extinguishers or emergency exits, or fails to maintain basic sanitation in its washrooms, it is in direct violation of the guidelines. These are not minor complaints—they are safety hazards that endanger the physical well-being of students, many of whom are minors. Documentary evidence (photographs, videos, dated complaints to the management) of these violations creates a powerful basis for both a refund claim and a regulatory complaint to the CCPA, which has the power to shut down non-compliant centres and impose financial penalties.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* EdTech & Online Coaching */}
                <section id="edtech-and-online-coaching" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">EdTech &amp; Online Coaching</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The explosion of educational technology in India has created an entirely new—and deeply problematic—frontier for coaching fee disputes. Platforms like BYJU&apos;s, Unacademy, Vedantu, Physics Wallah, Toppr, and dozens of smaller edtech startups have amassed tens of millions of subscribers by selling online courses, tablet-based learning packages, and hybrid (online + offline) programmes. While the delivery mechanism is digital, the consumer rights are identical. Online coaching platforms are unambiguously classified as service providers under the Consumer Protection Act, 2019, and students are consumers. The geographical reach of e-commerce has not created a legal vacuum—it has actually expanded the consumer&apos;s right to seek redressal in the consumer commission of their own city, regardless of where the edtech company is headquartered.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      However, edtech refund disputes carry unique complexities that require specialised legal strategies. The most pervasive issue is the <strong>BNPL (Buy Now, Pay Later) loan trap</strong>. Edtech sales executives routinely facilitate third-party loans—through NBFCs (Non-Banking Financial Companies) like Bajaj Finserv, ZestMoney, or the platform&apos;s own financing arm—to enable students to &quot;afford&quot; expensive multi-year course packages. The loan is disbursed directly to the edtech company, and the student is left with an EMI obligation that persists even if they cancel the course. When the student requests a refund, the edtech company passes the buck to the NBFC (&quot;we already received the money from the lender, you need to deal with them&quot;), and the NBFC refuses to stop EMI collections because &quot;the loan was for a third-party purchase, and we are not responsible for the service.&quot; The student is caught in a Kafkaesque loop, paying EMIs for a service they no longer receive.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, we have developed a highly effective strategy for breaking this loop. We name <strong>both the edtech company and the lending NBFC as opposite parties</strong> in the consumer complaint. The legal basis is clear: the loan was facilitated by the edtech company&apos;s sales process, the student&apos;s consent to the loan was directly tied to the service contract, and the NBFC knew (or ought to have known) that the loan was for a specific educational service. When that service is deficient or cancelled, the NBFC cannot continue to extract EMI payments as if the underlying transaction is unaffected. Consumer commissions in Thiruvananthapuram, Chandigarh, and Delhi have ordered both edtech companies and their lending partners to refund fees, cancel outstanding loan balances, and compensate students for the harassment of persistent collection calls.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Another recurring edtech issue is the <strong>content staleness problem</strong>. A student purchases a &quot;2-year comprehensive NEET preparation&quot; package, only to discover that the video lectures are recordings from two or three years ago, the question banks have not been updated to reflect the latest syllabus changes, and the &quot;live doubt sessions&quot; are pre-recorded FAQ compilations. This is a textbook case of deficiency in service. The student paid for a current, dynamic educational experience, and the platform delivered a static, outdated archive. The gap between the advertised service and the actual service constitutes both an unfair trade practice and a deficiency in service, entitling the student to a pro-rata refund and compensation.
                    </p>
                  </div>
                </section>

                {/* Step-by-Step Recovery */}
                <section id="step-by-step-recovery" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Step-by-Step Recovery</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Recovering coaching fees requires a disciplined, documented, and strategically escalated approach. At LegalRecovery, we have refined this process over hundreds of successful recoveries into a systematic protocol that maximises both the speed and the quantum of recovery while building an airtight evidentiary record for court if negotiation fails.
                    </p>
                    <ol className="list-decimal pl-6 space-y-4 text-sm text-slate-650">
                      <li><strong>Day 1-5 (Formal Written Cancellation and Refund Demand):</strong> Submit a formal, written cancellation and refund request to the coaching institute. This should be done both physically (hand-delivered letter with an acknowledgment copy) and electronically (email to the institute&apos;s official customer support address, the branch head, and the corporate office). The letter must clearly state: your enrollment date, the total fee paid, the payment method, the specific reason for withdrawal (faculty change, service deficiency, medical grounds, misleading promises, etc.), and a demand for a pro-rata refund of the unused course period. Critically, cite the <strong>CCPA Guidelines for the Coaching Sector (2024)</strong> mandating pro-rata refunds within 10 days, and the <strong>Consumer Protection Act, 2019</strong> provisions on unfair contracts and deficiency in service. Send a copy of this letter via <strong>email</strong> to the institute&apos;s registered business address.</li>
                      <li><strong>Day 6-15 (Evidence Compilation and Documentation):</strong> While awaiting a response, systematically compile your entire documentary file. Download and save: the admission form and enrollment confirmation, all fee receipts and bank or credit card statements showing the debits, the course brochure, prospectus, or website screenshots showing the services and faculty promised at the time of enrollment, the batch schedule or timetable provided at admission, any communications (emails, SMS, WhatsApp chats) where you complained about service quality or requested a cancellation, photographs or videos documenting poor infrastructure (if applicable), medical certificates (if health is the reason for withdrawal), and your employment offer letter or lease agreement (if relocation is the reason). If you financed the course through a BNPL loan, download your loan agreement and EMI schedule, and send a separate written notice to the lending NBFC informing them of the cancellation request.</li>
                      <li><strong>Day 10-20 (National Consumer Helpline Escalation):</strong> If the institute has not responded positively, escalate to the <strong>National Consumer Helpline (NCH)</strong> by calling <strong>1915</strong> or visiting consumerhelpline.gov.in. File a detailed grievance with all your supporting documents attached. You will receive a docket number. The NCH team will contact the institute and attempt mediation. This pre-litigation step has proven remarkably effective—the Department of Consumer Affairs has publicly stated that thousands of coaching fee refunds have been secured through the NCH mechanism without court intervention. Even if the institute does not settle at this stage, the NCH docket creates an official government record of your complaint, which is valuable evidence in any subsequent court proceedings.</li>
                      <li><strong>Day 15-30 (Professional Legal Notice):</strong> If the NCH mediation fails or yields an inadequate offer, it is time to escalate to a formal legal notice. At LegalRecovery, our panel advocates draft a custom notice—not a generic template—tailored to the specific facts of your case. The notice cites the precise CCPA guideline provisions violated, the Consumer Protection Act sections applicable (Sections 2(7), 2(11), 2(46), 2(47), and 35), and relevant consumer court precedents. It quantifies the exact demand: the pro-rata refund amount, interest at a specified rate from the date of the refund request, a specific compensation amount for mental harassment, and litigation costs. The notice is dispatched digitally via verified email and WhatsApp to the institute&apos;s registered office, all active directors&apos; personal residential addresses, and—in the case of franchise operations—the franchisor&apos;s corporate office. In our experience, <strong>approximately 70-75% of coaching fee disputes are resolved within 15-30 days of serving a professional legal notice.</strong></li>
                    </ol>
                  </div>
                </section>

                {/* Consumer Forum Filing */}
                <section id="consumer-forum-filing" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Consumer Forum Filing</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When a legal notice fails to produce a satisfactory resolution—either because the institute ignores it, responds with a flat rejection, or makes a counter-offer that falls far short of what you are owed—the next step is to file a formal consumer complaint before the appropriate Consumer Disputes Redressal Commission. India&apos;s consumer forum system is a three-tier quasi-judicial mechanism specifically designed to deliver accessible, affordable, and expeditious justice to consumers—and it is particularly well-suited for coaching fee disputes because the facts are typically straightforward and the evidence is documentary.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For most coaching fee cases, the complaint is filed before the <strong>District Consumer Disputes Redressal Commission (DCDRC)</strong>, which has jurisdiction over claims up to ₹1 crore. The complaint can be filed at the commission having jurisdiction over the institute&apos;s registered business address <strong>or</strong> at the commission where the student resides or studies—the choice is the student&apos;s. This is a significant advantage: if you enrolled at a coaching centre in Kota but are now back home in Chennai, you can file the complaint in Chennai without needing to travel to Rajasthan. The complaint can be filed entirely online through the <strong>e-Daakhil portal (edaakhil.nic.in)</strong>, which eliminates the need to physically visit the court registry. You upload the complaint in the prescribed format, attach all supporting documents, and pay the nominal court fee online. The fee structure is remarkably affordable: ₹200 for claims up to ₹5 lakhs, ₹400 for claims between ₹5 and ₹10 lakhs, and ₹500 for claims between ₹10 and ₹20 lakhs.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Once the complaint is admitted, the commission issues notice to the coaching institute (the &quot;opposite party&quot;), directing them to file their written response within 30 days. If the institute fails to respond within this period, the commission can proceed <strong>ex parte</strong>—meaning it can pass an order in your favour based solely on your evidence, without the institute having any opportunity to present its defence. This is a powerful deterrent: coaching institutes that ignore consumer court notices risk having a binding monetary order passed against them without any hearing. If the institute does respond, the matter proceeds to arguments and evidence. Consumer commissions are mandated under the Consumer Protection Act to dispose of cases within <strong>3 to 5 months</strong> from the date of admission, making them one of the fastest legal remedies in the Indian judicial system.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The commission&apos;s order can include: a direction to refund the pro-rata (or full) fee with interest from the date of the refund request; compensation for deficiency in service and mental harassment; costs of litigation; and in cases of wilful default or egregious conduct, punitive damages. If the institute fails to comply with the commission&apos;s order, <strong>Section 72 of the Consumer Protection Act, 2019</strong> empowers the commission to initiate execution proceedings, including the power to attach and sell the institute&apos;s movable and immovable property, arrest the proprietor or directors and detain them in civil prison, and appoint a receiver to manage the institute&apos;s assets. Under <strong>Section 35(1)(c)</strong>, multiple students can file a joint complaint if they share the same grievance, which reduces costs and amplifies the pressure on the institute.
                    </p>
                  </div>
                </section>

                {/* Misleading Advertising */}
                <section id="misleading-advertising" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Misleading Advertising</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Misleading advertising is the lifeblood of the exploitative coaching industry, and the CCPA has taken unprecedented steps to regulate it. The <strong>CCPA Guidelines for Prevention of Misleading Advertisement in the Coaching Sector, 2024</strong> represent the government&apos;s most direct intervention against the false promises and manufactured urgency that drive millions of Indian families to invest their savings in coaching programmes. Understanding these guidelines—and how to use them in your refund claim—can significantly strengthen your legal position.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The guidelines explicitly prohibit the following advertising practices by coaching centres: making claims of <strong>&quot;100% guaranteed selection&quot;</strong> or &quot;guaranteed ranks&quot; in competitive examinations, as no coaching institute can guarantee a specific outcome; publishing results or using students&apos; names, photographs, or testimonials in advertisements <strong>without the verified written consent</strong> of the student and their parent or guardian; claiming credit for a student&apos;s success without disclosing whether the student was a regular, correspondence, or test-series-only member; showing <strong>aggregate results</strong> that misleadingly include the results of students from different batches, years, or programmes; and creating <strong>artificial urgency</strong> through false statements like &quot;only 3 seats left,&quot; &quot;offer expires in 2 hours,&quot; or &quot;scholarship valid only for walk-in registrations today.&quot;
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      When a coaching institute violates these guidelines, it creates a dual legal exposure. First, the student who enrolled based on the misleading advertisement has a strong claim under <strong>Section 2(47) of the Consumer Protection Act</strong> for unfair trade practice. The contract was induced by false information, making it voidable at the student&apos;s option under Section 18 of the Indian Contract Act, 1872. This means the student can seek a <strong>full refund</strong>—not just a pro-rata refund—because the entire basis of the enrollment was fraudulent. Second, the CCPA can take suo motu action against the institute, imposing penalties of <strong>up to ₹10 lakh for the first offence</strong> and <strong>up to ₹50 lakh for subsequent offences</strong>, along with directions to issue corrective advertisements, compensate affected consumers, and cease the misleading practice immediately.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, we routinely file parallel complaints: a consumer complaint for the individual student&apos;s refund and a CCPA complaint for the misleading advertisement. The CCPA complaint creates institutional pressure on the coaching chain&apos;s management—beyond the individual refund at stake—because it puts the institute&apos;s advertising practices across all centres under regulatory scrutiny. This dual-track strategy has proven highly effective in securing faster settlements and larger compensation amounts.
                    </p>
                  </div>
                </section>

                {/* Success Stories */}
                <section id="case-studies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Success Stories</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Over the years, our legal panel has successfully recovered coaching and edtech platform tuition fees across India—from national IIT-JEE and NEET coaching chains to local UPSC and CA institutes. Our structured approach of documentation, CCPA citation, legal notice, and consumer court escalation has consistently delivered results. Below are representative examples of cases handled by our team:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case Study 1: Faculty Replacement</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹1.85 Lakh from a National IIT Coaching Chain</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          A Class 11 student in Kota enrolled in a ₹2.4 lakh two-year IIT-JEE programme specifically because a nationally renowned physics faculty was the batch head. Three months in, the faculty left for a rival institute, and the replacement was a recent BTech graduate with no competitive exam teaching experience. The parents requested a pro-rata refund, which the institute denied. We served a legal notice citing the CCPA guidelines and the specific promise made during admission. Within 22 days, the institute agreed to refund ₹1,85,000 (the unused portion) and issued a formal apology letter. No court filing was necessary.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case Study 2: EdTech BNPL Loan Trap</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹72,000 + Loan Cancellation from an EdTech Platform</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          A first-generation college student in Hyderabad was sold a ₹72,000 NEET preparation tablet package through a door-to-door sales agent who facilitated a 24-month BNPL loan on the spot. The content was outdated, the &quot;live classes&quot; were pre-recorded, and the doubt-clearing chatbot was non-functional. We filed a consumer complaint against both the edtech platform and the lending NBFC. The District Consumer Commission ordered a full refund, cancellation of the outstanding loan balance, and ₹15,000 in compensation. Total recovery: ₹87,000.
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
                        &quot;My son&apos;s IIT coaching centre in Kota shut down mid-session. LegalRecovery served a notice to the directors and we recovered ₹1.85 lakh within 20 days. Lifesaver for our family!&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Priya Sharma</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;BYJU&apos;s refused to refund my ₹72,000 despite multiple requests. LegalRecovery filed a consumer complaint and I received full refund plus ₹15,000 compensation. Highly recommended.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Arjun Nair</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;The UPSC coaching institute changed the entire faculty after we enrolled. LegalRecovery helped 12 of us file a joint complaint. We all got pro-rata refunds within a month.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Neha Gupta</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;An online edtech platform locked me into a 3-year EMI plan and then stopped updating course content. LegalRecovery helped me get both the refund AND the EMI loan cancelled.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Siddharth Joshi</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;My daughter had a medical emergency and could not continue her NEET coaching. The institute refused to refund even a rupee. LegalRecovery&apos;s legal notice got us ₹95,000 back in 25 days.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Kavita Reddy</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Professional team that understands consumer law inside out. Recovered my CA coaching fees when the institute shifted to a location 30 km away. Transparent pricing and zero drama.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Mohammed Irfan</h4>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us? */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Why Choose Us?</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery is India&apos;s leading tech-enabled recovery platform. We combine the legal authority of veteran consumer advocates with advanced workflow automation to deliver unmatched speed, transparency, and resolution rates for coaching institute and edtech fee disputes. Here is what sets us apart:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Education Sector Specialists:</strong> Our legal panel includes advocates who have handled hundreds of coaching and edtech fee disputes—from Kota IIT factories to Bangalore edtech unicorns. They know the CCPA guidelines by heart, the consumer court precedents that win cases, and the exact statutory arguments that force institutes to settle.</li>
                      <li><strong>Dual-Track Strategy:</strong> We do not just send a notice to the coaching centre. Where applicable, we file a parallel CCPA complaint for misleading advertising, creating regulatory pressure that goes beyond the individual refund dispute and threatens the institute&apos;s operating licence.</li>
                      <li><strong>BNPL Loan Intervention:</strong> For students trapped in edtech loan arrangements, we name both the platform and the lending NBFC as opposite parties, ensuring the loan obligation is cancelled alongside the refund—not left hanging for the student to deal with separately.</li>
                      <li><strong>Joint Complaint Coordination:</strong> When multiple students from the same institute approach us, we coordinate joint complaints that reduce individual costs and amplify the collective claim—making it far more expensive for the institute to resist than to settle.</li>
                      <li><strong>Transparent Flat Pricing:</strong> No hourly bills, no retainer surprises. You pay a single transparent flat fee that covers everything from drafting and dispatch of the legal notice to follow-up negotiations with the institute&apos;s legal team.</li>
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
                  Discuss your coaching fee refund case with consumer law experts. We serve verified notices with full compliance support.
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
