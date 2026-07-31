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
    question: "Can a gym legally enforce a 'no-refund' policy in India?",
    answer: "Not unconditionally. Consumer commissions across India have repeatedly held that blanket 'no-refund' clauses are unfair contract terms under Section 2(46) of the Consumer Protection Act, 2019. If you are unable to continue the membership due to a genuine reason—such as medical incapacity, relocation, or the gym's own failure to provide promised facilities—the gym is legally obligated to issue a pro-rata refund for the unused period. The clause may remain enforceable only if you voluntarily quit without any valid reason and the contract was freely negotiated."
  },
  {
    question: "How do I calculate the pro-rata refund I am owed?",
    answer: "The pro-rata refund is calculated by dividing the total membership fee by the total months of the plan, then multiplying the monthly rate by the number of unused months remaining. For example, if you paid ₹24,000 for a 12-month plan and used only 4 months, your unused portion is (₹24,000 ÷ 12) × 8 = ₹16,000. If you paid an additional registration or joining fee, those are typically non-refundable unless the gym itself cancelled the contract."
  },
  {
    question: "What if the gym shut down or relocated without notice?",
    answer: "If the gym closes permanently or relocates to an area that makes it unreasonable for you to commute, this is a textbook case of 'deficiency in service' under the Consumer Protection Act. You are entitled to a full refund of the unused membership period, plus compensation for the inconvenience and mental harassment. Consumer courts in Chandigarh and Hyderabad have consistently awarded both refunds and additional damages in such scenarios."
  },
  {
    question: "Can I get a refund if I have a medical condition preventing me from exercising?",
    answer: "Yes. Medical reasons are among the strongest grounds for securing a gym membership refund. If a doctor certifies that you are unfit to engage in physical exercise—due to surgery, pregnancy, chronic injury, or a newly diagnosed condition—you have a legitimate right to cancel and claim a pro-rata refund. Keep the medical certificate, doctor's prescription, and any communication with the gym as evidence."
  },
  {
    question: "The gym is deducting money from my account via auto-debit even after I cancelled. What can I do?",
    answer: "Under the RBI's e-mandate framework, any recurring auto-debit requires your explicit, revocable consent and a mandatory 24-hour pre-debit notification. If the gym is debiting your account after you have formally requested cancellation, contact your bank immediately to revoke the mandate and raise a chargeback for all unauthorized debits. You can also lodge a complaint with the RBI Integrated Ombudsman (cms.rbi.org.in) if the bank does not act."
  },
  {
    question: "Is there a time limit for filing a consumer complaint for a gym refund?",
    answer: "Yes. Under the Consumer Protection Act, 2019, the limitation period for filing a consumer complaint is two years from the date the cause of action arose—typically the date you first demanded a refund and were denied. The Commission has discretion to condone delays if sufficient cause is shown, but it is always advisable to initiate action as quickly as possible to preserve evidence and strengthen your case."
  },
  {
    question: "Do I need a lawyer to file a consumer complaint?",
    answer: "No. One of the primary advantages of the consumer forum is that it is designed to be accessible to individuals without legal representation. You can draft and file the complaint yourself, either physically at the District Consumer Commission or online through the e-Daakhil portal (edaakhil.nic.in). However, having a legal professional draft the complaint significantly increases the precision of your claims and the likelihood of a favourable outcome."
  },
  {
    question: "Can I claim compensation beyond just the refund amount?",
    answer: "Absolutely. In addition to the pro-rata refund, you can claim interest on the withheld amount (typically 9-12% per annum), compensation for mental agony and harassment, and the litigation costs you incurred in pursuing the complaint. Consumer commissions routinely award ₹5,000 to ₹25,000 as additional compensation in gym refund cases, depending on the severity of the gym's conduct."
  },
  {
    question: "What if the gym offered me a 'membership freeze' or 'extension' instead of a refund?",
    answer: "A gym cannot unilaterally impose a freeze or extension as a substitute for a cash refund if you have expressly demanded monetary restitution. If you accepted the freeze voluntarily, it may be considered a settlement. However, if the gym forced a freeze without your written consent or if the freeze period has expired without adequate service resumption, you retain the right to demand a cash refund for the unused period."
  },
  {
    question: "What evidence do I need to collect before filing a case?",
    answer: "You should gather: (1) the original membership agreement or receipt, (2) proof of payment (bank statements, UPI screenshots, credit card bills), (3) any written communication requesting cancellation (emails, WhatsApp chats, registered letters), (4) medical certificates if health is your reason, (5) photos or videos documenting poor facilities if deficiency in service is your claim, and (6) screenshots of the gym's website or social media showing the services they promised versus what they delivered."
  },
  {
    question: "Can I get a refund if I simply changed my mind or stopped going to the gym?",
    answer: "This is the weakest ground for a refund. If you voluntarily stopped attending without any medical, relocation, or service-deficiency reason, the gym's no-refund clause is more likely to be upheld. However, if the contract was presented as a 'take it or leave it' agreement with no room for negotiation, you may still argue it was an unfair contract. The outcome depends heavily on the specific facts and the consumer commission's discretion."
  },
  {
    question: "What is the National Consumer Helpline and how does it help?",
    answer: "The National Consumer Helpline (NCH), reachable at toll-free number 1915 or via their website (consumerhelpline.gov.in), is a government-run grievance redressal mechanism. When you file a complaint, you receive a docket number. The NCH team mediates between you and the gym. While not a judicial body, many gyms settle complaints at this stage to avoid escalation. If the gym does not respond or refuses to comply, the NCH docket serves as documentary evidence when you escalate to the Consumer Commission."
  },
  {
    question: "How long does a consumer court case for a gym refund typically take?",
    answer: "While the Consumer Protection Act, 2019 mandates that cases should be disposed of within 3 to 5 months from the date of admission, actual timelines vary by jurisdiction. District Commissions in metro cities with heavy caseloads may take 6-12 months. However, since gym refund cases are typically straightforward—involving clear documentary evidence—they are often resolved faster than complex product liability or medical negligence matters."
  },
  {
    question: "Can the gym counter-sue me for defamation if I post negative reviews online?",
    answer: "Posting a truthful, factual account of your experience is protected expression. However, making false, exaggerated, or malicious statements could theoretically expose you to a defamation claim. The best approach is to stick to verifiable facts, avoid personal attacks on individual staff members, and keep your tone professional. If you have already filed a legal complaint, focus on the legal channel rather than social media campaigns."
  },
  {
    question: "What if the gym is a franchise—who do I sue?",
    answer: "You can file a complaint against both the franchise operator (the local entity that runs the branch) and the franchisor (the brand owner). Under consumer law, both parties are jointly liable for deficiency in service. If the franchise agreement between them limits liability, that is an internal matter between the two businesses and does not affect your rights as a consumer."
  },
  {
    question: "Can I recover a gym membership refund through a legal notice without going to court?",
    answer: "Yes, and this is often the most efficient route. A well-drafted legal notice from a law firm citing the Consumer Protection Act and relevant consumer court precedents puts the gym on formal notice that litigation is imminent. In our experience at LegalRecovery, approximately 70-80% of gym refund disputes are resolved within 15-30 days of serving a professional legal notice, as most gyms prefer settling over facing the cost and reputational damage of a consumer court proceeding."
  },
  {
    question: "What is the e-Daakhil portal and how do I use it?",
    answer: "e-Daakhil (edaakhil.nic.in) is the government's online portal for filing consumer complaints electronically. You can create an account, upload your complaint, supporting documents, and pay the court fee online. The complaint is then forwarded to the appropriate District or State Consumer Commission based on jurisdiction. This eliminates the need to physically visit the court for filing, making it especially convenient for consumers in remote areas."
  },
  {
    question: "What if I paid the gym membership through a credit card EMI—can I still get a refund?",
    answer: "Yes, your payment method does not affect your right to a refund. However, the refund process involves an additional step: once the gym agrees to refund (or is ordered by the court), the refund amount is credited back to your credit card. You should also contact your credit card issuer to stop any remaining EMI debits and request a reversal of finance charges accrued on the disputed amount."
  },
  {
    question: "Are personal trainers and add-on services covered under the same refund claim?",
    answer: "If personal training sessions or add-on services (spa, diet consultation, swimming pool access) were part of a bundled package, they form part of the overall contract and are covered under the same refund claim. If they were purchased separately under a different invoice, you may need to file a separate claim or include them as an additional head in your complaint."
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
      "name": "Gym Membership Refund",
      "item": "https://www.legalrecovery.in/recovery/gym-membership-refund"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Gym Membership Refund Not Received? Your Legal Rights and How to Recover Your Money in India",
  "description": "Comprehensive guide on recovering gym and fitness centre membership refunds in India. Learn about consumer rights, unfair contract clauses, legal notice procedures, and consumer court remedies.",
  "image": "https://www.legalrecovery.in/og-gym-refund.png",
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
  "name": "Gym Membership Refund Recovery Services",
  "image": "https://www.legalrecovery.in/og-gym-refund.png",
  "description": "Expert legal assistance for recovering gym and fitness centre membership refunds through consumer court and legal notices in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "340"
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
        "name": "Megha Kapoor"
      },
      "reviewBody": "My gym in Noida shut down overnight without any notice. LegalRecovery sent a consumer legal notice and I got my ₹35,000 annual membership refund within 3 weeks. Exceptional service!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Rahul Deshmukh"
      },
      "reviewBody": "The gym kept auto-debiting my account even after I cancelled. LegalRecovery helped me get a full reversal and additional compensation. Professional and efficient team."
    }
  ]
};

export default function GymMembershipRefundClient() {
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
    { id: "consumer-rights", title: "Your Consumer Rights" },
    { id: "unfair-contracts", title: "Unfair Contract Terms" },
    { id: "grounds-for-refund", title: "Grounds for Refund" },
    { id: "pre-legal-resolution", title: "Pre-Legal Resolution" },
    { id: "legal-notice", title: "Legal Notice" },
    { id: "consumer-court", title: "Consumer Court" },
    { id: "auto-debit-protection", title: "Auto-Debit Protection" },
    { id: "case-studies", title: "Success Stories" },
    { id: "testimonials", title: "Client Reviews" },
    { id: "why-choose-us", title: "Why Choose Us?" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Gym Membership Refund", href: "/recovery/gym-membership-refund" },
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
              Gym <span className="text-[#DC2626]">Not Refunding</span> Your Membership Fee?
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Don&apos;t let gyms hide behind unfair &quot;no-refund&quot; clauses. Get expert legal representation to recover your membership fee, fight unauthorized auto-debits, and hold fitness centres accountable under consumer law.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer animate-pulse-slow"
            >
              Recover Membership Fee Now
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
                      The Indian fitness industry has experienced explosive growth over the past decade, evolving from a handful of neighbourhood gyms into a multi-billion-rupee ecosystem of boutique studios, international franchise chains, and technology-enabled fitness platforms. From the premium high-rises of Gurugram and South Mumbai to the bustling commercial centres of Bangalore and Pune, fitness memberships have become as commonplace as mobile phone recharges. But along with this rapid expansion has come a deeply troubling pattern of consumer exploitation—one that LegalRecovery witnesses on a daily basis: <strong>gyms and fitness centres refusing to refund membership fees when consumers have every legal right to demand their money back.</strong>
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The typical scenario unfolds like this: you sign up for an annual or multi-year membership, often under pressure from aggressive sales executives who promise state-of-the-art equipment, personal trainers, steam rooms, and swimming pools. You pay a substantial sum—anywhere from ₹15,000 to over ₹1,00,000—either upfront or through credit card EMIs. A few weeks or months later, reality sets in. Perhaps the gym abruptly shuts down its nearest branch, forcing you to commute an extra 10 kilometres to a location that no longer fits your routine. Perhaps the &quot;Olympic-sized swimming pool&quot; promised in the glossy brochure turns out to be permanently &quot;under maintenance.&quot; Perhaps you suffered a sports injury, underwent surgery, or were diagnosed with a chronic condition that makes physical exercise medically inadvisable. Or perhaps you relocated to another city for a new job—a perfectly foreseeable life event that the gym&apos;s contract conveniently ignores.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      When you approach the front desk seeking a cancellation and refund, you are met with the industry&apos;s favourite weapon: a pre-printed membership agreement containing a bold, capitalized clause that reads <strong>&quot;MEMBERSHIP FEE IS STRICTLY NON-REFUNDABLE UNDER ALL CIRCUMSTANCES.&quot;</strong> The front desk manager shrugs, the customer care email goes unanswered, and you are left with the sinking feeling that your hard-earned money has vanished into a corporate black hole. This is the precise moment where most consumers give up, assuming that a signed contract means they have no legal recourse. <strong>That assumption is legally incorrect.</strong>
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Indian consumer protection law does not give businesses an unrestricted licence to keep your money for services they have not rendered. The Consumer Protection Act, 2019—India&apos;s most powerful consumer-facing legislation—contains specific provisions that strike down one-sided &quot;no-refund&quot; clauses as <strong>unfair contract terms</strong>. Consumer commissions across Delhi, Mumbai, Chandigarh, Hyderabad, and Bangalore have repeatedly ordered gyms to issue pro-rata refunds, pay interest on withheld amounts, and compensate consumers for the mental harassment caused by their stonewalling tactics. At LegalRecovery, we have handled hundreds of gym and fitness centre refund disputes, and our experience is clear: when you present the right legal arguments backed by proper documentation, <strong>the law is firmly on the consumer&apos;s side.</strong>
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;A service provider cannot accept payment for a defined period of service, fail to deliver that service, and then hide behind a contractual clause to retain the money. Such a clause is not a shield—it is an instrument of unjust enrichment, and the law does not permit it.&quot;
                    </div>
                  </div>
                </section>

                {/* Your Consumer Rights */}
                <section id="consumer-rights" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Your Consumer Rights</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      As a gym member who has paid for a service, you are a &quot;consumer&quot; as defined under <strong>Section 2(7) of the Consumer Protection Act, 2019</strong>. This means you are entitled to a comprehensive set of rights that no membership agreement—regardless of how intimidating its fine print may appear—can lawfully override. Understanding these rights is the foundation upon which every successful gym refund recovery is built.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      <strong>The Right to Refund for Undelivered Services:</strong> The most fundamental principle of consumer law is that you pay for a service, and the provider must deliver it. A gym membership is a contract for the provision of fitness facilities over a defined period. If the gym fails to provide those facilities—whether due to closure, relocation, deterioration in quality, or any reason attributable to the gym—you have an absolute right to a refund for the period during which the service was not available. This is not a matter of the gym&apos;s &quot;goodwill&quot; or &quot;internal policy&quot;; it is a legal entitlement. The consumer commissions have held that once a service provider accepts payment, the obligation to render that service is non-negotiable, and any failure constitutes a <strong>deficiency in service</strong> under Section 2(11) of the Act.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      <strong>The Right against Unfair Trade Practices:</strong> Under <strong>Section 2(47)</strong> of the Act, an unfair trade practice includes any practice that, for the purpose of promoting the sale or use of any goods or service, adopts any deceptive method. Gyms frequently engage in unfair trade practices by overpromising facilities during the sales pitch (showing a model gym or under-construction facilities), hiding restrictive cancellation terms in pages of fine print, and pressuring consumers into signing up on the spot with &quot;limited time offers&quot; that are actually perpetual. When a gym sells a membership based on promises it does not intend to keep, it is not just a contractual issue—it is an actionable unfair trade practice that attracts both compensatory and punitive remedies under the Act.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      <strong>The Right to be Heard and to Seek Redressal:</strong> Under <strong>Section 2(9)</strong> of the Act, every consumer has the right to seek redressal against unfair trade practices, restrictive trade practices, and unscrupulous exploitation. This includes the right to file complaints before the District Consumer Commission for claims up to ₹1 crore, the State Consumer Commission for claims between ₹1 crore and ₹10 crore, and the National Consumer Disputes Redressal Commission (NCDRC) for claims exceeding ₹10 crore. The beauty of the consumer forum is its accessibility: the filing fees are minimal (₹200 for claims up to ₹5 lakhs), no advocate is mandatory, and the proceedings are far less formal than civil courts. Consumer commissions are mandated to dispose of cases within 3 to 5 months from the date of admission, making them one of the fastest legal remedies available in India.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      <strong>The Right to Compensation:</strong> Beyond the refund itself, you can claim <strong>interest</strong> on the amount withheld from the date of your refund request (typically 9-12% per annum), <strong>compensation for mental agony and harassment</strong> caused by the gym&apos;s refusal to cooperate, and <strong>costs of litigation</strong> including advocate fees, travel, and documentation expenses. Consumer commissions routinely award these additional heads of compensation—especially when the gym has been found to have acted in bad faith, ignored legal notices, or failed to appear before the commission despite summons.
                    </p>
                  </div>
                </section>

                {/* Unfair Contract Terms */}
                <section id="unfair-contracts" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Unfair Contract Terms</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The Consumer Protection Act, 2019 introduced a groundbreaking provision that specifically targets the kind of one-sided agreements that gyms and fitness centres routinely impose on their members. <strong>Section 2(46)</strong> of the Act defines an &quot;unfair contract&quot; as a contract between a manufacturer, trader, or service provider on one hand, and a consumer on the other, that contains terms which cause a significant change in the rights of the consumer, including the right to terminate the agreement and the right to a reasonable refund policy. This was a deliberate legislative response to the widespread industry practice of burying exploitative clauses in lengthy, jargon-filled membership agreements.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The Act identifies several specific types of unfair terms that consumer commissions can declare void. These include: clauses that <strong>require manifestly excessive security deposits or penalties</strong> for breach (such as forfeiting the entire annual fee if you cancel after one month); clauses that <strong>impose any obligation on the consumer that is not reasonably necessary</strong> for the performance of the contract (such as requiring you to pay a &quot;transfer fee&quot; to shift your membership to a family member); clauses that <strong>limit or exclude the liability of the service provider</strong> for injuries, accidents, or theft on their premises; and crucially, clauses that <strong>permit the service provider to unilaterally terminate the contract without an equivalent right for the consumer.</strong>
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The practical significance of this provision cannot be overstated. When a gym hands you a pre-printed agreement that says &quot;no refund under any circumstances,&quot; that clause is not automatically enforceable merely because you signed it. The consumer commission has the power under <strong>Section 49</strong> of the Act to examine the contract, determine whether it contains unfair terms, and declare those terms void—effectively striking them out as if they never existed. The commission will look at the bargaining power of both parties (a consumer dealing with a large chain has virtually no negotiating power), whether the consumer was given adequate time to read and understand the terms, and whether the terms are so one-sided that they effectively deprive the consumer of the benefit of the contract.
                    </p>

                    <div className="bg-red-50/40 p-6 rounded-2xl border border-red-150">
                      <h3 className="text-base md:text-lg font-black text-red-950 mb-2">Key Judicial Precedent: Chandigarh Consumer Commission</h3>
                      <p className="text-sm text-red-900 leading-relaxed">
                        In a landmark ruling, the District Consumer Disputes Redressal Commission, Chandigarh, directed a well-known national fitness chain to refund a consumer&apos;s annual membership fee along with compensation, holding that the gym&apos;s &quot;no refund, no cancellation&quot; clause was a <strong>manifestly one-sided and unfair contract term</strong>. The commission observed that the consumer had joined under the promise of specific facilities—including dedicated parking, an Olympic pool, and certified trainers—none of which were fully operational. The commission further noted that the contract gave the gym the right to relocate, modify facilities, and change operating hours without any corresponding right for the consumer to cancel and obtain a refund, making the entire agreement unconscionably one-sided.
                      </p>
                    </div>

                    <p className="text-sm md:text-base leading-relaxed">
                      Beyond the Consumer Protection Act, the <strong>Indian Contract Act, 1872</strong> provides additional ammunition. Under <strong>Section 23</strong>, any agreement whose object or consideration is unlawful—including agreements that are opposed to public policy—is void. Courts have held that a contract term that permits one party to retain the entire consideration (your membership fee) while simultaneously absolving itself of all obligations to provide the service is opposed to the basic principles of equity and fair dealing, and is therefore void under Section 23. Similarly, <strong>Section 16</strong> of the Contract Act deals with &quot;undue influence&quot;—if the gym used high-pressure sales tactics, created artificial urgency (&quot;this offer expires in 30 minutes&quot;), or exploited your trust to secure a long-term commitment, the contract itself may be voidable at your option. At LegalRecovery, our legal notices systematically invoke both the Consumer Protection Act and the Indian Contract Act to construct a multi-layered legal challenge that leaves the gym with very little legal ground to stand on.
                    </p>
                  </div>
                </section>

                {/* Grounds for Refund */}
                <section id="grounds-for-refund" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Grounds for Refund</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      While the legal framework provides the foundation, the strength of your individual refund claim depends on the specific ground or reason that necessitated your cancellation. Based on our extensive case history at LegalRecovery, we have categorized the most common—and legally strongest—grounds for demanding a gym membership refund. Understanding where your situation falls helps us craft the most effective legal strategy.
                    </p>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">1. Gym Closure, Relocation, or Branch Shutdown</h3>
                        <p className="text-sm text-slate-650 leading-relaxed mb-3">
                          This is the strongest possible ground for a refund and has the highest success rate in consumer forums. When a gym permanently closes a branch, shuts down its business entirely, or relocates to a location that is unreasonably far from your residence or workplace, it has fundamentally breached the service agreement. You contracted to use a specific facility at a specific location, and the gym has unilaterally made that impossible. Consumer commissions treat this as a clear-cut case of <strong>deficiency in service</strong> and typically order a full refund of the unused membership period along with interest and compensation.
                        </p>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          Notable cases include the <strong>Code Fitness matter in Chandigarh</strong>, where a group of members was awarded both refunds and additional compensation after the gym relocated without providing adequate alternative arrangements. Similarly, the <strong>Talwalkar Fitness Centre ruling in Hyderabad</strong> established that a gym cannot shift the financial burden of its business decisions (such as lease termination or financial distress) onto its members—the risk of business continuity is the gym&apos;s to bear, not the consumer&apos;s.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">2. Medical Incapacity or Health Emergency</h3>
                        <p className="text-sm text-slate-650 leading-relaxed mb-3">
                          If a medical condition prevents you from exercising—whether it is a surgical procedure, a musculoskeletal injury, pregnancy, a cardiac condition, or a newly diagnosed chronic illness—this constitutes a <strong>supervening impossibility</strong> that makes it physically unsafe for you to use the gym&apos;s services. Under <strong>Section 56 of the Indian Contract Act</strong> (the doctrine of frustration), when an agreement becomes impossible to perform due to an event beyond the control of both parties, the obligation to perform ceases, and any money paid in advance for future performance must be restored.
                        </p>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          To invoke this ground, you should obtain a detailed medical certificate from a registered medical practitioner clearly stating the nature of the condition, the period of incapacity, and an explicit recommendation against physical exercise. In our experience, consumer commissions give significant weight to medical evidence. Even if the gym argues that you could use &quot;low-impact&quot; or &quot;yoga&quot; facilities, a doctor&apos;s categorical advice against all physical activity trumps the gym&apos;s layperson opinion on what is medically safe.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">3. Relocation to Another City or Country</h3>
                        <p className="text-sm text-slate-650 leading-relaxed mb-3">
                          Job transfers, career changes, higher education admissions, or family relocations are perfectly foreseeable life events that a reasonable contract should accommodate. If you relocate to a city where the gym does not have a branch—or even if it does, but the branch is at an impractical distance from your new residence—you have a strong basis for cancellation and a pro-rata refund.
                        </p>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          For chain gyms with multi-city presence, the gym may argue that you can &quot;transfer&quot; your membership to the nearest branch. However, if the transfer involves a significant additional fee, a downgrade in facilities, or a location that does not serve your daily commute, the transfer option is not a genuine remedy and you retain the right to a cash refund. Documentary support for this ground includes your new employment offer letter, property lease agreement, university admission letter, or a flight/travel ticket showing permanent relocation.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">4. Deficiency in Service and Misrepresentation</h3>
                        <p className="text-sm text-slate-650 leading-relaxed mb-3">
                          This ground covers a wide spectrum of complaints: broken or outdated equipment that is never repaired, overcrowded facilities during peak hours despite promises of &quot;limited memberships,&quot; unhygienic locker rooms and washrooms, absence of promised amenities (swimming pool, sauna, steam room, spa, cafeteria), unqualified or frequently absent personal trainers, and erratic operating hours that do not match the schedule advertised during the sales pitch.
                        </p>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          To build a strong deficiency case, we advise clients to document the gap between what was promised and what was delivered. Photograph broken equipment, record timestamped videos of overcrowded floors, save screenshots of the gym&apos;s website or promotional material showing promised facilities, and maintain a written log of incidents (e.g., &quot;Steam room closed for the 5th consecutive week, manager has no timeline for repair&quot;). Consumer commissions have ordered full refunds with compensation when the gap between the promised and actual service is material enough to fundamentally alter the nature of the contract.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">5. COVID-19 and Force Majeure Closures</h3>
                        <p className="text-sm text-slate-650 leading-relaxed mb-3">
                          The pandemic-era gym closures created a massive wave of membership refund disputes. During state-mandated lockdowns, gyms were physically barred from operating. Many gyms offered &quot;membership extensions&quot; equivalent to the closure period, but not all consumers found this acceptable—particularly those who had relocated, changed their fitness routines, or simply could not use the delayed extension.
                        </p>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          Consumer commissions have taken a nuanced approach: if the gym offered a genuine, no-strings-attached extension of equal duration, and the consumer had the option to use it, the extension may be considered adequate. However, if the extension was conditional (requiring the consumer to sign a new contract), came with altered terms (reduced operating hours, closed amenities), or was offered for a period that did not align with the consumer&apos;s availability, the consumer retains the right to a pro-rata cash refund. The principle is clear: you paid for a service during a specific period, and if that service was not available during that period—regardless of the reason—you are entitled to monetary restitution.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Pre-Legal Resolution */}
                <section id="pre-legal-resolution" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Pre-Legal Resolution</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Before escalating to formal legal proceedings, a structured, documented administrative approach maximises your chances of an amicable settlement and simultaneously builds an unimpeachable evidentiary trail for court. At LegalRecovery, we recommend a 30-day pre-litigation protocol that systematically closes every escape route available to the gym&apos;s management.
                    </p>
                    <ol className="list-decimal pl-6 space-y-4 text-sm text-slate-650">
                      <li><strong>Day 1-3 (Formal Written Cancellation Request):</strong> Visit the gym in person and submit a <strong>written cancellation and refund request</strong>. Do not rely on verbal conversations. Hand-deliver a typed letter to the front desk manager and insist on an acknowledgment copy with their signature, date, and stamp. If personal delivery is not possible, send the request via registered speed post with acknowledgment due (AD) to the gym&apos;s registered business address. Simultaneously, send an email to every official email address you can find—the branch manager, the customer care team, and the company&apos;s corporate office. In the email, clearly state: your membership ID, the date of joining, the total amount paid, the reason for cancellation, and a demand for a pro-rata refund of the unused period. Cite your rights under the Consumer Protection Act, 2019 and mention that you are prepared to escalate the matter if the refund is not processed within 15 days.</li>
                      <li><strong>Day 4-10 (Evidence Compilation and Follow-Up):</strong> While waiting for a response, use this time to compile your documentary evidence. Download and save your membership agreement, all payment receipts, bank statements showing the debit, and any promotional material (brochures, website screenshots) that the gym used to advertise its services. If your cancellation is medical, obtain the medical certificate. If it is relocation, gather your new employment letter or lease agreement. Send a polite but firm follow-up email to the gym referencing your original request and asking for a specific timeline for the refund.</li>
                      <li><strong>Day 11-15 (National Consumer Helpline Complaint):</strong> If the gym has not responded or has refused the refund, escalate to the <strong>National Consumer Helpline (NCH)</strong> by calling 1915 or visiting consumerhelpline.gov.in. File a detailed grievance with all your supporting documents. You will receive a docket number. The NCH team will contact the gym and attempt to mediate. Many smaller gyms and local franchise operators settle at this stage to avoid further escalation. Even if they do not, the NCH docket creates an official government record of your complaint—valuable evidence for any future court proceedings.</li>
                      <li><strong>Day 16-30 (Final Intimation Before Legal Action):</strong> Send a final, strongly worded email and registered letter to the gym stating that you have exhausted all amicable avenues, that your NCH complaint (cite the docket number) has gone unresolved, and that you will now proceed to serve a formal legal notice through your advocates and initiate consumer court proceedings. Specify that in addition to the refund, you will claim interest at 18% per annum and compensation for mental harassment and litigation costs. This &quot;last chance&quot; communication is strategically important: it demonstrates to the consumer commission that you acted reasonably and gave the gym every opportunity to settle before dragging them into litigation.</li>
                    </ol>
                  </div>
                </section>

                {/* Legal Notice */}
                <section id="legal-notice" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Legal Notice</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A legal notice is the formal bridge between administrative complaints and courtroom litigation. It is a document drafted and signed by your advocate, served via registered post to the gym&apos;s registered office, that puts the gym on record that legal proceedings will be initiated if your demands are not met within a specified window (typically 15 days from the date of receipt). While a legal notice is not a mandatory prerequisite for filing a consumer complaint, it serves multiple critical strategic purposes.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      <strong>First, it establishes seriousness.</strong> A complaint email from a consumer is easy for a gym to ignore. A formal legal notice on a law firm&apos;s letterhead, citing specific statutory provisions and consumer court precedents, signals that the consumer is legally informed, represented by professionals, and fully prepared to follow through with litigation. In our experience at LegalRecovery, the mere receipt of a legal notice triggers an internal escalation within the gym&apos;s management—from the branch manager to the regional head, from the regional head to the corporate legal team, and from the legal team to the directors. Most corporate entities have a policy of settling consumer disputes at the legal notice stage rather than risking an adverse order from a consumer commission, which becomes a public record and a reputational liability.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      <strong>Second, it creates a legally admissible paper trail.</strong> The notice formally records your version of events: when you joined, how much you paid, what was promised, what went wrong, when you first requested a refund, and how the gym responded (or failed to respond). This chronological narrative becomes a critical piece of evidence if the matter proceeds to the consumer commission. Any inconsistencies or contradictions in the gym&apos;s subsequent defence can be highlighted by contrasting their position with the facts laid out in the notice.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      <strong>Third, it quantifies the demand.</strong> Our legal notices do not simply say &quot;refund my money.&quot; They provide a precise, itemised calculation: the pro-rata refund amount for the unused membership period, interest at a specified rate from the date of the refund request, a specific compensation amount for mental agony and harassment, and litigation costs. This forces the gym&apos;s legal team to respond to exact numbers rather than vaguely dismissing a general complaint. In cases involving franchise gyms, we serve the notice on both the franchise operator (the local business entity) and the franchisor (the brand parent company), holding both jointly and severally liable. We also copy the notice to the personal addresses of all active directors to establish their personal accountability and to pierce the corporate veil if necessary.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Our data over hundreds of gym refund cases shows that <strong>approximately 70-80% of disputes are successfully resolved within 15 to 30 days of serving a professional legal notice</strong>. The remaining cases—typically involving defunct companies, wilfully defiant operators, or complex franchise disputes—are escalated to the consumer commission, where we have an equally strong track record of securing favourable orders.
                    </p>
                  </div>
                </section>

                {/* Consumer Court */}
                <section id="consumer-court" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Consumer Court</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When a legal notice fails to produce a satisfactory resolution—either because the gym ignores it, responds with a rejection, or makes an inadequate counter-offer—the next step is to file a formal consumer complaint before the appropriate Consumer Disputes Redressal Commission. The consumer forum system in India is a three-tier quasi-judicial mechanism designed specifically to provide accessible, affordable, and expeditious justice to consumers.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For most gym membership refund cases, the complaint is filed before the <strong>District Consumer Disputes Redressal Commission (DCDRC)</strong>, which has jurisdiction over claims up to ₹1 crore. The complaint can be filed either at the commission having jurisdiction over the gym&apos;s registered business address or at the commission where the consumer resides or works—the choice is the consumer&apos;s, not the gym&apos;s. This jurisdictional flexibility is a significant advantage for consumers, especially those who have relocated to another city and do not want to travel back to the gym&apos;s location for court hearings.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The complaint can be filed online through the <strong>e-Daakhil portal (edaakhil.nic.in)</strong>, which eliminates the need to physically visit the court registry. You upload the complaint in the prescribed format, attach all supporting documents (membership agreement, payment receipts, cancellation requests, legal notice, gym&apos;s response or non-response, medical certificates if applicable, and NCH docket), and pay the nominal court fee online. The court fee is remarkably affordable: ₹200 for claims up to ₹5 lakhs, ₹400 for claims between ₹5 and ₹10 lakhs, and ₹500 for claims between ₹10 and ₹20 lakhs.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Once the complaint is admitted, the commission issues notice to the gym (the &quot;opposite party&quot;), directing them to file their written response within 30 days. If the gym fails to respond, the commission can proceed <strong>ex parte</strong>—meaning it can pass an order in your favour based solely on your evidence, without the gym having any opportunity to present its defence. If the gym does respond, the matter proceeds to a hearing where both sides present their arguments and evidence. The commission then passes a final order, which may include: direction to refund the pro-rata membership fee with interest, compensation for deficiency in service and mental harassment, costs of litigation, and in cases of wilful default, punitive damages.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the gym fails to comply with the commission&apos;s order within the stipulated time, the commission has the power under <strong>Section 72 of the Consumer Protection Act, 2019</strong> to initiate execution proceedings. This includes the power to attach and sell the gym&apos;s movable and immovable property, arrest the directors or proprietor and detain them in civil prison, and appoint a receiver to manage the gym&apos;s assets. In practice, the threat of execution proceedings—particularly the possibility of arrest—compels most gym operators to comply with the commission&apos;s order promptly.
                    </p>
                  </div>
                </section>

                {/* Auto-Debit Protection */}
                <section id="auto-debit-protection" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Auto-Debit Protection</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      One of the most insidious practices in the fitness industry is the use of <strong>recurring auto-debit mandates</strong>—UPI autopay, NACH (National Automated Clearing House) mandates, credit card standing instructions, or e-mandates—to continue extracting money from your bank account long after you have decided to cancel your membership. This practice exploits a simple asymmetry: setting up an auto-debit is quick and seamless during the signup process, but cancelling it often requires navigating bureaucratic obstacles that the gym has no incentive to make easy.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The Reserve Bank of India (RBI) has established a robust regulatory framework to protect consumers from unauthorized recurring debits. Under the <strong>RBI&apos;s Framework on Processing of e-Mandates for Recurring Transactions</strong>, every auto-debit must comply with the following safeguards: the consumer must provide explicit, one-time consent for the mandate through a secure authentication process (OTP, biometric, or netbanking); the service provider must send a <strong>mandatory pre-debit notification at least 24 hours before each debit</strong>, giving the consumer the opportunity to opt out; the consumer has the <strong>unconditional right to modify, pause, or revoke the mandate at any time</strong> through their bank&apos;s mobile or internet banking interface; and for individual transactions exceeding ₹15,000, additional factor authentication (re-authentication via OTP) is required for each debit.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If your gym is debiting your account without sending pre-debit notifications, or continues to debit after you have formally requested cancellation, you have multiple remedies. <strong>First, revoke the mandate immediately</strong> through your bank&apos;s UPI app, internet banking portal, or by visiting the branch. Most banks allow you to view and manage all active mandates from their app. <strong>Second, raise a chargeback</strong> with your bank for every unauthorized debit, citing the RBI e-mandate framework and your cancellation request as evidence. Banks are required to process chargebacks for unauthorized transactions. <strong>Third, file a complaint with the RBI Integrated Ombudsman</strong> at cms.rbi.org.in if the bank does not cooperate or if the gym&apos;s payment processor continues to initiate debits despite the revoked mandate.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, we treat unauthorized auto-debits as a separate and independent cause of action. In our legal notices, we demand not only the refund of the original membership fee but also the <strong>reversal of every post-cancellation debit with interest</strong>, compensation for the financial inconvenience (such as overdraft charges or NSF penalties that may have been triggered by the unexpected debit), and a written confirmation that the mandate has been permanently revoked. This comprehensive approach ensures that the gym cannot continue to extract money from your account while the refund dispute is being resolved.
                    </p>
                  </div>
                </section>

                {/* Success Stories */}
                <section id="case-studies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Success Stories</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Over the years, our legal panel has successfully recovered gym and fitness centre membership refunds across India—from national chains to neighbourhood studios. Our structured approach of documentation, legal notice, and consumer court escalation has consistently delivered results. Below are representative examples of cases handled by our team:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case Study 1: Branch Closure</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹42,000 from a Premium Fitness Chain in Noida</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          A software professional paid ₹48,000 for a 2-year membership at a premium gym in Noida Sector 62. Eight months in, the gym abruptly shut down the branch, citing &quot;lease issues,&quot; and offered to transfer her membership to a branch 15 kilometres away. The consumer refused and demanded a pro-rata refund, which the gym denied citing their no-refund policy. We served a legal notice to the gym&apos;s corporate office and all three directors. Within 18 days, the gym&apos;s legal team contacted us and agreed to refund ₹42,000 (the unused portion plus partial interest) via NEFT. No court filing was necessary.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="text-[#DC2626] text-xs font-black uppercase tracking-wider">Case Study 2: Medical Emergency</span>
                        <h4 className="font-extrabold text-sm text-slate-900 mt-2 mb-3">Recovered ₹28,500 + ₹10,000 Compensation in Pune</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          A 34-year-old marketing manager in Pune suffered a serious knee ligament tear during a trekking accident, making gym-based exercises medically inadvisable for at least 18 months. Despite submitting a detailed orthopaedic certificate, the gym refused a refund, arguing that the injury was not gym-related. We filed a consumer complaint with the District Consumer Commission, Pune, and presented the medical evidence alongside the membership agreement. The commission ordered a refund of ₹28,500 for the unused period plus ₹10,000 compensation for mental harassment and litigation costs—total recovery of ₹38,500.
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
                        &quot;My gym in Noida shut down overnight without any notice. LegalRecovery sent a consumer legal notice and I got my ₹35,000 annual membership refund within 3 weeks. Exceptional service!&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Megha Kapoor</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;The gym kept auto-debiting my account even after I cancelled. LegalRecovery helped me get a full reversal and additional compensation. Professional and efficient team.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Rahul Deshmukh</h4>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us? */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Why Choose Us?</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery is India&apos;s leading tech-enabled recovery platform. We combine the legal authority of veteran consumer advocates with advanced workflow automation to deliver unmatched speed, transparency, and resolution rates for gym and fitness centre refund disputes. Here is what sets us apart:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Consumer Law Specialists:</strong> Our legal panel includes advocates who have handled hundreds of consumer commission cases specifically involving gym memberships, fitness chains, and subscription-based service providers. They know the precedents, the arguments, and the exact statutory provisions that move the needle.</li>
                      <li><strong>Multi-Party Notice Strategy:</strong> We do not just serve notice on the gym branch. We target the franchise operator, the brand parent company, and all active directors simultaneously—maximising pressure and closing off escape routes.</li>
                      <li><strong>E-Daakhil Filing Assistance:</strong> If your case needs to go to the consumer commission, we handle the entire e-filing process—drafting the complaint in the prescribed format, uploading documents, and managing the court fee payment—so you do not have to navigate the portal yourself.</li>
                      <li><strong>Transparent Flat Pricing:</strong> No hourly bills, no retainer surprises. You pay a single transparent flat fee that covers everything from drafting and dispatch of the legal notice to follow-up negotiations with the gym&apos;s legal team.</li>
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
                  Discuss your gym membership refund case with consumer law experts. We serve verified notices with full compliance support.
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
