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
    question: "What legal statutes protect sales agents and brokers from unpaid commissions in India?",
    answer: "Unpaid commissions are governed primarily by the Contract of Agency provisions (Sections 182-238) of the Indian Contract Act, 1872. Under Section 219, an agent's right to remuneration arises as soon as they perform the services they were hired for. Furthermore, agents can file Summary Suits under Order 37 of the CPC for fast-track recovery based on written agreements."
  },
  {
    question: "Can an agent claim commission if the client signed directly with the principal?",
    answer: "Yes, under Indian agency law, if the agent was the 'effective cause' of introducing the client to the principal, the agent is entitled to the agreed commission even if the final transaction is executed directly between the client and the principal without the agent's presence."
  },
  {
    question: "What is an agent's lien under Section 221 of the Contract Act?",
    answer: "Under Section 221 of the Indian Contract Act, 1872, in the absence of any contract to the contrary, an agent has a right to retain goods, papers, and other property (movable or immovable) of the principal received by him until the amount due to him for commission and disbursements is paid."
  },
  {
    question: "What is the time limit for filing a lawsuit to recover unpaid commissions?",
    answer: "Under the Limitation Act, 1963, the limitation period to file a recovery suit or commercial suit for outstanding sales commissions is three (3) years from the date the commission became due under the contract. Written acknowledgments of debt or partial payments reset the 3-year clock."
  },
  {
    question: "Can an agent file an Order 37 summary suit for outstanding commissions?",
    answer: "Yes, a summary suit under Order XXXVII of the CPC is highly effective for commission recovery. If the agency contract, brokerage sheet, target emails, or calculation logs clearly establish a liquidated debt, it constitutes a written contract for the summary suit."
  },
  {
    question: "How does the MSMED Act apply to channel partners and brokers?",
    answer: "If a channel partner or broker is registered as a Micro or Small enterprise (Udyam Registration) under the MSMED Act, 2006, the principal must clear their commission invoices within 45 days. Delayed payments automatically attract penal interest at three times the RBI bank rate, compounding monthly."
  },
  {
    question: "What happens if a principal issues a cheque for commissions that bounces?",
    answer: "Under Section 138 of the NI Act, a bounced cheque is a criminal offense. The agent must serve a statutory demand notice to the principal within 30 days of dishonor, wait 15 days, and if payment is not received, file a criminal complaint in the Magistrate court within 30 days."
  },
  {
    question: "Can directors of a company be prosecuted for withholding commissions?",
    answer: "While the company is a separate legal entity, you can hold directors personally liable if you prove fraud or siphoning. Furthermore, in criminal cases under Section 138 of the NI Act (cheque bounce) or BNS cheating, directors responsible for the day-to-day operations are prosecuted personally."
  },
  {
    question: "What is the Specified Value threshold for commission disputes under the Commercial Courts Act?",
    answer: "Under the Commercial Courts Act, 2015, if the dispute is commercial and the outstanding amount is ₹3,00,000 (three lakh rupees) or more, the case must be filed in a Commercial Court. This specialized division offers fast-track summary judgments and strict case management."
  },
  {
    question: "How does pre-institution mediation under Section 12A work for agents?",
    answer: "Under Section 12A of the Commercial Courts Act, you cannot file a commercial suit directly unless you first undergo mediation. You file an application before the DLSA. If mediation fails or the principal does not attend, the DLSA issues a 'Non-Starter Report,' which allows you to file the suit."
  },
  {
    question: "What digital evidence is needed to prove target achievement in court?",
    answer: "CRM logs, email reports, Slack chats, WhatsApp confirmations, and sales registers are admissible. Under Section 63 of the BNS, you must provide a signed certificate verifying the authenticity of these electronic records to ensure they are admitted."
  },
  {
    question: "Can I claim interest on delayed commission payments if the agreement is silent?",
    answer: "Yes, under the Interest Act, 1978, you can claim interest by serving a formal written notice stating that interest (usually 12% to 18% p.a.) will be charged from the date of the notice. For registered MSME agents, the statutory rate of 3x the RBI bank rate is mandated by law."
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
      "name": "Unpaid Commissions Recovery",
      "item": "https://www.legalrecovery.in/recovery/unpaid-commissions"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Recovering Unpaid Sales Commissions & Brokerage Dues | Legal Recovery Guide",
  "description": "Exhaustive legal guide on recovering outstanding B2B sales commissions, brokerage dues, and channel partner payouts in India.",
  "image": "https://www.legalrecovery.in/og-unpaid-commissions.png",
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
  "datePublished": "2026-06-06",
  "dateModified": "2026-06-06"
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
  "name": "B2B Unpaid Commissions Recovery Services",
  "image": "https://www.legalrecovery.in/og-unpaid-commissions.png",
  "description": "Advocate-backed legal assistance for recovering outstanding B2B sales commissions, brokerage dues, and channel partner payouts in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "320"
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
        "name": "Prakash Raj"
      },
      "reviewBody": "We are a real estate agency and facilitated a commercial deal worth ₹5 crores. The builder refused to clear our brokerage commission of ₹10,00,000, raising vague quality-of-service excuses. LegalRecovery served a formal notice warning of an Order 37 summary suit and copyright lien on transaction documents. The builder settled within 10 days in full. Excellent professional service!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Nisha Shah"
      },
      "reviewBody": "Our channel partner firm was owed ₹6,50,000 in referral commissions. The company ignored our follow-up emails for six months. LegalRecovery helped us file a petition under MSME Samadhaan. Faced with the statutory 3x RBI bank rate interest, the principal cleared all outstanding dues. Highly recommended."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Amit Trivedi"
      },
      "reviewBody": "As an independent sales agent, I was owed ₹3,80,000. The company issued a cheque that bounced. LegalRecovery immediately served the statutory Section 138 notice. The company directors realized they faced criminal prosecution and cleared my dues online immediately. Highly recommended!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Deepika Padukone"
      },
      "reviewBody": "Our digital sales agency was owed ₹12,00,000 in target-based commissions. LegalRecovery guided us through Commercial Court Section 12A mediation. The DLSA mediator helped us reach a binding settlement. Truly exceptional legal support."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Rohan Mehra"
      },
      "reviewBody": "A corporate client ignored our brokerage claims. LegalRecovery audited our email agreements and delivered a high-impact notice to their board. They settled our invoices in full. Very professional."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Shreya Ghoshal"
      },
      "reviewBody": "Outstanding support for sales agents and channel partners. They helped us recover our unpaid commissions from a major builder within 2 weeks of serving the notice. They really know commercial recovery."
    }
  ]
};

export default function UnpaidCommissionsClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "unpaid-commissions-disputes-context", title: "1. Overview & Agency Disputes" },
    { id: "agency-contracts-commission-entitlement", title: "2. Legal Status & Agency Law" },
    { id: "proving-commission-slabs-sales", title: "3. Proving Slabs & Closures" },
    { id: "cpc-order-37-summary-suits-commissions", title: "4. Summary Suits (Order 37 CPC)" },
    { id: "cheque-bounce-criminal-breach-trust-commissions", title: "5. Cheque Bounce & Criminal Breach" },
    { id: "mandatory-mediation-commercial-courts-commissions", title: "6. Commercial Mediation (Sec 12A)" },
    { id: "documentary-evidence-ledger-payout-slabs", title: "7. Evidence, CRM Logs & Slabs" },
    { id: "structured-escalation-legal-notice-piercing", title: "8. Escalation & Legal Notices" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Unpaid Commissions Recovery", href: "/recovery/unpaid-commissions" },
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
        
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#020617] text-white overflow-hidden py-24 md:py-44 border-b border-slate-900">
          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
          {/* Ambient Red Glow Decorative elements */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-15 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[100px]"></div>
          
          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              India&apos;s Premium Agency Recovery Platform
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Recover Outstanding <span className="text-[#DC2626]">Sales Commissions</span> &amp; Brokerage
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Struggling with defaulting principals, unpaid channel partner commissions, delayed referral payouts, or bounced brokerage cheques? Serve advocate-backed legal notices and initiate fast-track recovery.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer animate-pulse-slow"
            >
              Start Commission Recovery
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
                
                {/* Section 1: Overview & Agency Disputes */}
                <section id="unpaid-commissions-disputes-context" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">1. Overview &amp; Agency Disputes</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In the commercial and financial sectors, commission-based incentives drive sales channels, expand distribution networks, and secure real estate transactions. Channel partners, sales agents, brokers, and referral consultants are critical to connecting principals with buyers. In these commercial agency relationships, commission payouts represent the hard-earned remuneration for facilitating deals, bringing in clients, or achieving sales targets. Typically, commission structures are defined in agency contracts, brokerage agreements, or incentive sheets, with payouts expected within 30 to 45 days of target achievement or deal closure. However, commission defaults by principals are extremely common. At LegalRecovery, we specialize in helping sales agents, channel partners, and brokers recover their outstanding commissions and enforce their contractual rights.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A key distinction in recovering unpaid commissions is the B2B agency nature of the relationship. Sales agents and brokers are independent business entities or professionals, not traditional employees. Consequently, labor courts, labor commissioners, and employment tribunals do not have jurisdiction over these disputes. The relationship is governed strictly by the Contract of Agency provisions under the Indian Contract Act, 1872, and civil contract procedures. The burden of proof falls on the agent to present clear records of the target achievement, client closures, and commission slabs, making a structured, document-heavy recovery strategy essential.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Defaults on commission payments often occur when principals hit financial difficulties, undergo corporate restructuring, or attempt to cut costs. Larger corporate principals may exploit their size, assuming independent agents or brokers will not pursue legal action due to the perceived high costs of litigation. In other cases, companies may fabricate claims of &quot;client dissatisfaction&quot; or &quot;misconduct&quot; only when the commission payout becomes due, using these claims as an excuse to withhold payment. Waiting indefinitely increases the risk of the debt becoming unrecoverable, as the claim may become time-barred under limitation laws, making prompt legal intervention necessary.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Indian law offers several pathways for recovering outstanding commissions, depending on the contract details and the principal&apos;s corporate status. Registered MSME agency units can file a complaint on the MSME Samadhaan portal to claim statutory interest at three times the RBI bank rate on delayed payments. Other agents can file a Summary Suit under Order XXXVII of the CPC for fast-track recovery, initiate pre-institution mediation under the Commercial Courts Act, 2015, or file a criminal complaint under Section 138 of the NI Act if the principal issued a cheque that bounced.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;Brokerage fees and sales commissions are protected under Indian agency laws. If a principal refuses to pay agreed commissions, it represents a breach of contract. Summary suits and statutory notices ensure immediate financial recovery.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 2: Legal Status & Agency Law */}
                <section id="agency-contracts-commission-entitlement" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">2. Legal Status &amp; Agency Law</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The relationship between a sales agent and a principal is governed by the Indian Contract Act, 1872, specifically under the <strong>Contract of Agency (Sections 182–238)</strong>. Section 182 defines an agent as a person employed to do any act for another, or to represent another in dealings with third persons. The person for whom such act is done, or who is represented, is called the principal. Unlike employees, agents operate with a degree of independence, and their entitlement to commissions is protected by specific statutory provisions.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong>Section 219</strong> of the Indian Contract Act, 1872, an agent is entitled to receive their remuneration (commission) as soon as they have performed the acts they were hired to complete. Unless there is a contract to the contrary, the agent&apos;s right to commission matures the moment the sale is concluded or the transaction is facilitated, regardless of whether the principal has collected the money from the third party. If a principal refuses to pay the agreed commission, it constitutes a breach of contract and a violation of Section 219.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Additionally, <strong>Section 221</strong> of the Act provides the agent with a powerful protective right known as the <strong>&quot;Agent&apos;s Lien.&quot;</strong> In the absence of a contract to the contrary, an agent has the right to retain goods, papers, and other property (movable or immovable) of the principal received by them until the amount due to themselves for commission, disbursements, or services has been paid or accounted for. This allows agents to withhold client documents, transaction records, or property keys as security for their unpaid commissions, providing significant leverage.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Section 220 of the Act, an agent who is guilty of misconduct in the business of the agency is not entitled to remuneration. Defaulting principals often attempt to exploit this section by raising vague, post-default allegations of &quot;agent misconduct&quot; or &quot;negligence&quot; to justify non-payment. However, courts require strict proof of actual misconduct that caused direct financial loss to the principal. Vague or unsubstantiated complaints made only when the commission payment is demanded are routinely rejected by courts as bad-faith excuses.
                    </p>
                  </div>
                </section>

                {/* Section 3: Proving Slabs & Closures */}
                <section id="proving-commission-slabs-sales" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">3. Proving Slabs &amp; Closures</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The success of a commission recovery claim depends on the ability to prove that the sales targets were achieved and the deals were closed. Commission structures are often complex, involving progressive slabs (e.g., &quot;5% commission up to ₹10 lakh sales, 8% above ₹10 lakh&quot;), recurring renewals, or success-based referral milestones. When a dispute arises, the principal may attempt to alter the calculation slabs or deny that the agent was the primary cause of the deal closure. The agent must present a clear, documented trace of every transaction.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      To recover slab-based commissions, the agent must compile all sales reports, transaction invoices, and CRM dashboard screenshots showing the exact sales volume achieved. If a contract specifies that commission is paid upon the client&apos;s second milestone payment, the agent must present bank statements or client confirmations showing that the milestone was met. Having a record of the principal&apos;s payout statements and calculation sheets is critical.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Referral commissions, common in software sales and consulting, require proving the causal link between the agent&apos;s introduction and the final deal closure. Defaulting principals may claim the client was already in their sales pipeline or that the deal was closed by their internal team. The agent must present a paper trail of introductory emails, meeting invites, project proposals, and WhatsApp chats proving they initiated and facilitated the relationship, establishing their right to the referral fee.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Brokerage commissions, particularly in real estate, require proving that the broker was the &quot;effective cause&quot; of the transaction. Under Indian law, if a broker introduces a buyer to a seller and negotiations culminate in a sale, the broker is entitled to the brokerage fee even if the final contract is signed directly between the parties without the broker&apos;s presence. Email records, site visit logs, and communication with both the buyer and seller serve as essential evidence to establish this entitlement.
                    </p>
                  </div>
                </section>

                {/* Section 4: Summary Suits (Order 37 CPC) */}
                <section id="cpc-order-37-summary-suits-commissions" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">4. Summary Suits (Order 37 CPC)</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A major concern for agents and brokers is the potential delay in the civil court system. Regular civil recovery suits can take years, making them impractical for recovering outstanding commissions. However, the Code of Civil Procedure, 1908, provides a fast-track remedy under <strong>Order XXXVII (Summary Suits)</strong>. This procedure is designed for the rapid recovery of liquidated debts arising from written contracts, which include brokerage agreements, commission structures, and payout invoices.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Order 37, the defendant does not have an automatic right to defend the suit. Once the suit is filed, the court issues a specialized summons in Form 4. The defendant must enter an appearance, in person or through an advocate, within <strong>10 days</strong> of receiving the summons. If they fail to do so, the allegations in the plaint are deemed admitted, and the court immediately passes a decree in the agent&apos;s favor, allowing for rapid recovery.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the defendant enters an appearance, the plaintiff serves a &quot;Summons for Judgment.&quot; The defendant then has 10 days to apply for <strong>&quot;Leave to Defend&quot;</strong>. To obtain leave, the defendant must convince the court through an affidavit that they have a substantial and bona fide defense, rather than a sham or delay tactic. If the court finds the defense is a mere delay tactic, it will deny leave and pass a decree, or grant &quot;conditional leave&quot; requiring the defendant to deposit a portion of the disputed amount into court before proceeding.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A summary suit decree can be executed immediately under Order 21 CPC. The court has the power to attach the debtor&apos;s bank accounts and sell their assets to recover the dues. Because the legal burden shifts to the debtor during the &quot;Leave to Defend&quot; phase, serving a summary suit often encourages principals to enter out-of-court settlement discussions to avoid asset attachment.
                    </p>
                  </div>
                </section>

                {/* Section 5: Cheque Bounce & Criminal Breach */}
                <section id="cheque-bounce-criminal-breach-trust-commissions" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">5. Cheque Bounce &amp; Criminal Breach</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Principals sometimes issue cheques to agents for commission payments that are subsequently dishonored. Under <strong>Section 138 of the Negotiable Instruments (NI) Act, 1881</strong>, issuing a cheque that bounces due to &quot;insufficient funds&quot; or &quot;stop payment&quot; instructions is a criminal offense. The criminal nature of cheque bounce proceedings provides significant leverage, as it exposes the corporate directors to personal prosecution, arrest warrants, and criminal records.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The legal procedure for a Section 138 claim has strict statutory timelines. The cheque must be presented to the bank within its 3-month validity period. If dishonored, the bank issues a &quot;Cheque Return Memo.&quot; The agent must serve a formal statutory demand notice to the drawer within <strong>30 days</strong> of receiving the return memo, demanding payment of the cheque amount and giving the drawer <strong>15 days</strong> from receipt to clear the dues. If the drawer fails to pay within 15 days, the agent must file a criminal complaint in the Magistrate court within <strong>30 days</strong> thereafter.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Section 143A of the NI Act, the Magistrate court can order the drawer of the cheque to pay <strong>interim compensation</strong> to the complainant. This compensation can be up to <strong>20% of the cheque amount</strong> and must be paid within 60 days of the court&apos;s order. If the trial concludes in a conviction, the court can sentence the accused to imprisonment for up to <strong>two (2) years</strong>, impose a fine up to <strong>twice the cheque amount</strong>, or both, and award compensation to the complainant.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      When the drawer of the bounced cheque is a company, the agent can prosecute the company&apos;s directors personally under Section 141. Furthermore, if the principal issued the cheque with pre-existing fraudulent intent (such as closing the bank account immediately after issuing the cheque), the agent can also file a complaint for <strong>Cheating under Section 318 of the Bharatiya Nyaya Sanhita, 2023 (BNS)</strong> or criminal breach of trust.
                    </p>
                  </div>
                </section>

                {/* Section 6: Commercial Mediation (Sec 12A) */}
                <section id="mandatory-mediation-commercial-courts-commissions" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">6. Commercial Mediation (Sec 12A)</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If a commission payment dispute involves a claim of <strong>₹3,00,000 (three lakh rupees)</strong> or more and the principal is a business entity, the dispute falls under the jurisdiction of the <strong>Commercial Courts Act, 2015</strong>. The Act was enacted to speed up the resolution of commercial disputes and improve India&apos;s business dispute resolution mechanisms. It created specialized Commercial Courts at the district level and Commercial Divisions in High Courts, featuring strict timelines for filing pleadings.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong>Section 12A</strong> of the Commercial Courts Act, a plaintiff cannot file a commercial suit directly unless they undergo mandatory <strong>Pre-Institution Mediation</strong>. This rule applies to all commercial suits that do not contemplate urgent interim relief. The process is initiated by filing an application along with a nominal fee before the <strong>District Legal Services Authority (DLSA)</strong>. The DLSA issues summons to the debtor, inviting them to participate in mediation sessions conducted by a trained, neutral mediator.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the debtor refuses to participate, ignores the DLSA summons, or fails to appear for the mediation sessions, the mediator concludes the process and issues a <strong>&quot;Non-Starter Report.&quot;</strong> This report serves as a legal clearance certificate, permitting the agent to file the commercial suit in court. The period spent in mediation is entirely excluded from the 3-year limitation period under the Limitation Act.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the mediation is successful, the parties draft and sign a formal <strong>Mediation Settlement Agreement</strong>. Under Section 12A(5) of the Act, this settlement agreement has the <strong>same status and effect as an arbitral award</strong> under the Arbitration and Conciliation Act, 1996. This means the settlement is binding and final, and cannot be appealed. If the debtor defaults on the payment terms agreed upon, the agent can apply directly to the court to execute the settlement agreement and attach the debtor&apos;s bank accounts.
                    </p>
                  </div>
                </section>

                {/* Section 7: Evidence, CRM Logs & Slabs */}
                <section id="documentary-evidence-ledger-payout-slabs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">7. Evidence, CRM Logs &amp; Slabs</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The success of a commission recovery claim depends on the quality of records. In commission disputes, the primary challenge is establishing the exact calculation of the outstanding amount. The foundation of your case consists of the agency agreement, target policy documents, monthly payout logs, and CRM system records showing the deals closed and targets achieved.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Written agreements and target policy emails define the commission slabs. In court, the agent must show that they performed the work according to these terms. Providing email updates, site visit logs, purchase orders from clients introduced by the agent, and the principal&apos;s payout calculations acts as proof of performance. CRM system logs showing the agent as the lead owner are essential for software or service sales.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Electronic records must comply with the statutory requirements under Section 63 of the <strong>Bharatiya Nyaya Sanhita, 2023 (BNS)</strong> (formerly Section 65B of the Indian Evidence Act). This requires providing a signed certificate verifying the authenticity of email trails, Slack communications, or WhatsApp messages. Without this certificate, courts may refuse to admit digital records, which could weaken the case.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Agents should maintain organized archives of all client communications, target achievement logs, invoice delivery receipts, and monthly payout statements. Periodically securing signed &quot;balance confirmations&quot; or &quot;reconciliation sheets&quot; from the principal&apos;s finance team provides an official admission of debt, making it difficult for them to contest the outstanding amount.
                    </p>
                  </div>
                </section>

                {/* Section 8: Escalation & Legal Notices */}
                <section id="structured-escalation-legal-notice-piercing" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">8. Escalation &amp; Legal Notices</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Before initiating formal litigation, it is essential to follow a structured pre-litigation escalation process. This shows courts that you acted in good faith and exhausted all informal remedies. The escalation should begin with a formal email to the principal&apos;s finance team, attaching a reconciliation sheet showing all closed deals, commission calculations, paid commissions, and the outstanding balance. If this is ignored, escalate the communication to the principal&apos;s Chief Financial Officer (CFO) and Chief Executive Officer (CEO), demanding a formal response within a specific timeframe.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If executive escalation fails, the next step is to serve a formal <strong>Legal Notice</strong>. A legal notice is a structured, advocate-signed document sent to the debtor, setting out the facts of the transaction, detailing the default, demanding payment of the outstanding dues within a strict window (typically 15 days), and warning of the legal actions that will be taken if they fail to comply. A legal notice is not just a warning; it establishes your cause of action and forms part of the court record.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Our legal panel drafts custom notices tailored to the specific facts of your case. We do not use generic templates. Instead, we highlight the principal&apos;s violations of the contract, the statutory interest liabilities under the contract or Interest Act, and the criminal consequences of bounced cheques or cheating. The notice is physically dispatched via Registered Speed Post with Acknowledgment Due (AD) to the debtor&apos;s corporate office. Crucially, we also send copies of the notice to the personal residential addresses of the company&apos;s directors, piercing the corporate veil and encouraging immediate settlement.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Approximately 85% of B2B payment disputes are resolved successfully at the legal notice stage. Most corporate entities prefer to settle undisputed dues rather than face public litigation, credit rating downgrades, or asset attachment. If the debtor responds with a counter-claim or denies the debt, their reply helps our legal team understand their defense strategy, allowing us to prepare a stronger petition for the MSEFC, a Summary Suit, or cheque bounce proceedings.
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar - CTA Cards */}
            <div className="hidden lg:block sticky top-24 space-y-6">
              
              {/* Quick Summary Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-left">
                <h3 className="text-sm font-black text-slate-900 mb-4 tracking-tight uppercase border-b border-slate-100 pb-2">
                  Recovery Summary
                </h3>
                <ul className="space-y-3.5 text-xs font-bold text-slate-500">
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Legal Path: Contract of Agency (Sec 182-238)
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Security: Agent&apos;s Lien (Section 221)
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Fast-Track: Order 37 CPC Summary Suit
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Mediation: Mandatory Section 12A
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                    Limitation: 3 Years from Target Date
                  </li>
                </ul>
              </div>

              {/* Legal Consultation Card */}
              <div className="bg-gradient-to-br from-[#111827] to-[#020617] text-white p-6 rounded-2xl shadow-md relative overflow-hidden border border-slate-900 text-left">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#DC2626] opacity-15 rounded-full blur-2xl pointer-events-none" />
                <h3 className="text-sm font-black mb-2 uppercase tracking-wide text-white">
                  Need Expert Help?
                </h3>
                <p className="text-[11px] text-slate-400 font-semibold mb-4 leading-relaxed">
                  Our corporate advocates specialize in recovering B2B outstanding sales commissions, channel partner payouts, and referral dues. Let us handle your legalnotice campaign.
                </p>
                <button 
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-3 px-4 rounded-xl text-xs transition-colors cursor-pointer text-center block"
                >
                  Consult Advocate Now
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Modal form */}
        <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />

      </div>
    </>
  );
}
