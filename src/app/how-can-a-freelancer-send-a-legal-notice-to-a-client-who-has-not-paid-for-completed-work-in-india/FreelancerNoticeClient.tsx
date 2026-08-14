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
    question: "Can I draft and send a legal notice to a client myself as a freelancer?",
    answer: "Legally, yes, you can send a personal demand notice to a client on your own behalf. However, it is highly recommended to have the notice drafted and served by a professional advocate on their official letterhead. A notice sent by a law firm carries significant psychological weight, indicates that you are serious about pursuing litigation, and is less likely to be ignored by the client. Furthermore, an experienced advocate ensures that the notice is free from technical loopholes and contains no self-incriminating statements."
  },
  {
    question: "What are the key details that must be included in a freelancer's legal notice to make it enforceable?",
    answer: "An enforceable notice must include: (a) correct legal names and addresses of both the freelancer and the client; (b) a clear, chronological narrative of the work engagement, milestone achievements, and invoice dates; (c) proof of work delivery and client acceptance; (d) precise statutory citations, such as Section 73 and Section 70 (Quantum Meruit) of the Indian Contract Act; (e) a clear demand for the outstanding principal, interest, and notice fees; and (f) a specific compliance timeline (usually 15 days)."
  },
  {
    question: "How long does the client have to clear the payment after receiving the legal notice?",
    answer: "The notice must specify a reasonable compliance window, known as the 'cure period,' during which the client can resolve the dispute to avoid litigation. In commercial and freelance disputes, a 15-day or 30-day window is standard. The client must clear the dues within this period. If they fail to do so, they are considered to be in statutory default, and the freelancer is legally entitled to initiate civil, criminal, or MSME recovery proceedings immediately after the window closes."
  },
  {
    question: "What should I do if the client ignores the legal notice completely?",
    answer: "If the client ignores the notice and the compliance window expires, you can proceed with formal legal action. Your options include: (a) filing a Summary Suit under Order 37 of the CPC for fast-track recovery; (b) filing a complaint on the MSME Samadhaan portal (if Udyam registered) to initiate mediation; or (c) filing a criminal complaint for Cheating under Section 318 of the BNS, 2023, if there was initial fraudulent intent. The legal notice and its delivery proof will serve as crucial evidence in court."
  },
  {
    question: "How can I prove in court that the client received the legal notice if they refuse physical delivery?",
    answer: "If a client refuses to accept the post, or if it is returned as 'Refused' or 'Unclaimed,' the law treats this as 'deemed service' under Section 27 of the General Clauses Act, 1897. You must present the physical dispatch receipt and the tracking report showing the refusal in court. To create an airtight case, you should also serve the notice digitally via verified email and WhatsApp, preserving the SMTP logs and WhatsApp read screenshots supported by a Section 63 BSA certificate."
  },
  {
    question: "Can a legal notice be served to a client who lives in another state in India?",
    answer: "Yes, you can serve a legal notice to any client residing or operating within India, regardless of which state they are located in. The notice can be dispatched via Registered Post or Speed Post to their registered business address or residential address. For jurisdictional purposes in subsequent litigation, the case can generally be filed in the city where the freelancer resides and performed the work (as the place where part of the cause of action arose), or where the client resides."
  },
  {
    question: "Is a digital notice served via email or WhatsApp considered legally enforceable?",
    answer: "Yes, Indian courts have repeatedly held that serving a legal notice via email or WhatsApp is legally valid, especially in commercial disputes. Under the Information Technology Act, 2000, electronic records have legal recognition. To make digital service enforceable as evidence in court, you must capture SMTP delivery reports and WhatsApp read statuses, and present them alongside a certificate under Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023."
  },
  {
    question: "What is a Section 63 BSA certificate, and when does a freelancer need it?",
    answer: "A Section 63 BSA certificate is a statutory requirement under the Bharatiya Sakshya Adhiniyam, 2023 (which replaced the Indian Evidence Act, 1872) for admitting electronic evidence in court. If you are relying on emails, WhatsApp messages, or digital notices in a lawsuit, you must present a signed certificate verifying the integrity of the device used, confirming it was working properly, and including cryptographic hashes (SHA-256) of the files."
  },
  {
    question: "Can I claim interest on delayed payments in the legal notice, and at what rate?",
    answer: "Yes, you can claim interest on delayed payments. If your contract or invoice specifies an interest rate (e.g., 18% per annum), you can demand that amount. In the absence of a contract clause, you can demand a reasonable commercial interest rate (typically 12% to 18% per annum) under the Interest Act, 1978, by making a written demand. If you hold Udyam registration, you can claim compound interest at three times the RBI bank rate under the MSMED Act."
  },
  {
    question: "How much does it cost to send a legal notice to a client through LegalRecovery?",
    answer: "LegalRecovery offers a highly affordable, transparent, flat-fee pricing model for freelancers. Drafting and dispatching a formal legal notice through our panel of experienced advocates costs a flat fee of ₹999 per opposing party. This fee includes the initial case review, attorney drafting, stamp charges (if applicable), digital service via email/WhatsApp, and real-time tracking updates on your client dashboard."
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
      "name": "Send Legal Notice as Freelancer",
      "item": "https://www.legalrecovery.in/how-can-a-freelancer-send-a-legal-notice-to-a-client-who-has-not-paid-for-completed-work-in-india"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How Can a Freelancer Send a Legal Notice to a Client for Unpaid Work in India?",
  "description": "A comprehensive, step-by-step guide explaining how independent contractors in India can draft, serve, and enforce legal notices to recover unpaid payments from clients.",
  "image": "https://www.legalrecovery.in/og-send-notice-freelancer.png",
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
  "name": "Freelancer Legal Notice Services",
  "image": "https://www.legalrecovery.in/og-send-notice-freelancer.png",
  "description": "Professional attorney-drafted legal notice services for freelancers, developers, designers, and consultants facing payment delays in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1640"
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
        "name": "Karan Johar"
      },
      "reviewBody": "Using this online platform to recover my unpaid salary was incredibly smooth. The flat-fee pricing of ₹999 was transparent, and the draft was ready in 24 hours. The employer paid within a week of getting the speed post notice."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Rashmi Sen"
      },
      "reviewBody": "Highly professional. I was struggling to recover my rental security deposit from my previous landlord in Bangalore. The online portal drafted the notice citing the local Rent Act, and the tracking ID kept me updated. Landlord refunded my money immediately."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Aditya Verma"
      },
      "reviewBody": "As a freelance designer, I was tired of chasing clients for unpaid invoices. This service allowed me to submit details online and connect with an advocate instantly. Digital copy sent via WhatsApp worked wonders!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Divya Nair"
      },
      "reviewBody": "Drafted a notice for a builder booking refund. The platform targeted active directors by extracting details from ROC. The builder settled the booking amount within 12 days. Highly effective."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Nitin Goel"
      },
      "reviewBody": "Great interface and tracking support. They provided the post office speed post receipt on the client dashboard. Excellent service for small businesses seeking invoice recoveries."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Pooja Reddy"
      },
      "reviewBody": "Extremely satisfied. The legal notice was drafted with precision, citing variables and statutory dues. The company accepted the notice and cleared my FNF. Zero office visits required!"
    }
  ]
};

export default function FreelancerNoticeClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "pre-notice-documentation-audit", title: "1. Pre-Notice Audit" },
    { id: "identifying-client-entity", title: "2. Client Identification" },
    { id: "drafting-factual-narrative", title: "3. Factual Narrative" },
    { id: "statutory-citations-grounds", title: "4. Statutory Citations" },
    { id: "compliance-window-prayer", title: "5. Demand & Ultimatum" },
    { id: "service-and-dispatch-forensics", title: "6. Delivery Forensics" },
    { id: "post-notice-negotiations", title: "7. Post-Notice Matrix" },
    { id: "legalrecovery-recovery-dashboard", title: "8. LegalRecovery Solution" },
    { id: "faqs", title: "FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Send Legal Notice as Freelancer", href: "/how-can-a-freelancer-send-a-legal-notice-to-a-client-who-has-not-paid-for-completed-work-in-india" }
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
              Freelance Payment Dispute Guide
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              How to Send a <span className="text-[#DC2626]">Legal Notice</span> to a Non-Paying Client
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              A complete step-by-step guide for freelancers in India to compile evidence, draft statutory claims, and physically serve legal notices that yield results.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer"
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
                
                {/* Section 1 */}
                <section id="pre-notice-documentation-audit" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. The Pre-Notice Phase: Building an Evidentiary Paper Trail and Auditing Digital Communications
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      When a client fails to clear your outstanding invoices for completed work, the immediate reaction of many freelancers is frustration and panic. However, in the realm of legal recovery, success depends entirely on the quality of your documentation. Before serving a formal legal notice, you must step back and conduct a thorough evidentiary audit of your project. This pre-notice phase is the most critical stage of the recovery pipeline. It establishes the factual baseline that your advocate will rely on to draft the notice, and ensures that you have an airtight case that can withstand technical objections should the dispute escalate to a court of law.
                    </p>
                    <p>
                      The absolute first step you must take is to <strong>halt all further deliverables immediately</strong>. Freelancers frequently fall into the trap of continuing to work or delivering source files in the hope that showing goodwill will encourage the client to pay. In practice, this only increases your financial exposure and weakens your leverage. Pause all active services and explicitly notify the client in writing: <em>&quot;As the invoice dated [Date] remains unpaid, we are pausing all active development/design services in accordance with standard commercial practices, pending immediate clearance of the outstanding balance.&quot;</em>
                    </p>
                    <p>
                      Following the pause, you must compile your complete digital trail. Indian courts rely heavily on written evidence, and under the Information Technology Act, 2000, electronic communications are recognized as legally binding records. You must systematically download, export, and archive the following evidence:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-650">
                      <li>
                        <strong>Scope &amp; Agreement Logs:</strong> Initial proposal documents, scope sheets, email agreements, or chat logs showing the client requesting the work and agreeing to the pricing.
                      </li>
                      <li>
                        <strong>Work Delivery Logs:</strong> Email timestamps with attachments, Git commit logs, Google Drive transfer confirmations, or design preview links proving that the completed work was delivered to the client.
                      </li>
                      <li>
                        <strong>Approval Communications:</strong> Specific emails or chat screenshots where the client acknowledged receipt of the work, expressed satisfaction, or requested minor modifications, establishing that the deliverables met the agreed standards.
                      </li>
                      <li>
                        <strong>Payment Reminders:</strong> Copies of all unpaid PDF invoices sent to the client, along with subsequent email reminders and the client&apos;s replies promising payment dates or explaining the delay.
                      </li>
                    </ul>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;Never delete or alter any communications. Keep the original email files (.eml) and chat exports intact. Under the Bharatiya Sakshya Adhiniyam, 2023, digital evidence must be certified with its original metadata to be admissible as proof of contract and delivery.&quot;
                    </div>
                    <p>
                      Once the evidence is compiled, draft a clear <strong>Payment Reconciliation Statement</strong>. This statement should list: the total project cost, the milestone payments received (with dates and transaction IDs), the outstanding balance, the invoice numbers, and the number of days the payment has been delayed. Having this structured data ready prevents any calculation errors in the legal notice and leaves the client with no opportunity to claim that the demand details are vague or confusing.
                    </p>
                  </div>
                </section>

                {/* Section 2 */}
                <section id="identifying-client-entity" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. Precision in Target Selection: Tracing Client Corporate Structures and Naming Directors
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      A legally enforceable notice must be addressed to the correct legal entity. In the freelance sector, clients often operate under trade names, brand names, or through complex corporate structures that do not match the entity that signed your contract or received your invoices. Addressing a notice to a brand name that has no separate legal existence is a fatal error. You must perform due diligence to trace the client&apos;s exact corporate structure and target the parties who bear direct financial and legal liability.
                    </p>
                    <p>
                      First, determine the <strong>legal type of the client entity</strong>. If the client is a <strong>Sole Proprietorship</strong>, the firm has no separate legal identity from the owner. The notice must name the proprietor personally: <em>&quot;To, Mr. John Doe, Proprietor of M/s. ABC Brand.&quot;</em> If the client is a <strong>Partnership Firm</strong> or a <strong>Limited Liability Partnership (LLP)</strong>, the notice must target the firm represented by its active partners, and separate physical copies should be served to each partner individually to establish joint and several liability.
                    </p>
                    <p>
                      If the client is a <strong>Private Limited Company</strong> or a <strong>Public Limited Company</strong>, it is a separate legal entity. The notice must be addressed to the company itself at its registered office address. However, corporate managers and HR departments frequently ignore notices addressed generically to the company. To maximize pressure and ensure a prompt response, you must target the <strong>active directors</strong> of the company. A director has DIN-registered responsibilities, and naming them in their official capacity pierces the corporate shield, making them personally aware of the company&apos;s contractual defaults.
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
                      <h4 className="font-extrabold text-sm text-slate-900 uppercase tracking-wider text-[#DC2626]">
                        ROC/MCA Target Extraction Steps:
                      </h4>
                      <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-650">
                        <li>
                          <strong>Search MCA Database:</strong> Input the company name on the Ministry of Corporate Affairs (MCA) portal to verify its active status and retrieve its Corporate Identity Number (CIN).
                        </li>
                        <li>
                          <strong>Extract Registered Office:</strong> Locate the exact registered ROC address of the company. Serving a physical notice to this address is a mandatory requirement for it to be legally served under the Companies Act, 2013.
                        </li>
                        <li>
                          <strong>Identify Active Directors:</strong> Fetch the list of active directors, their appointment dates, and their Director Identification Numbers (DIN).
                        </li>
                        <li>
                          <strong>Serve Multiple Addresses:</strong> Dispatch the notice physically to the registered office and to the personal residential addresses of the active directors/founders to ensure delivery.
                        </li>
                      </ul>
                    </div>
                    <p>
                      Piercing the corporate veil is particularly important in the startup sector, where companies frequently face funding crunches or undergo liquidation. If the founders or directors are named personally, citing their direct involvement in requesting and accepting the freelance services, they cannot hide behind the corporate entity to avoid payment. At LegalRecovery, our automated corporate due diligence engine queries the ROC database for every company notice, ensuring that your target selection is precise and legally enforceable.
                    </p>
                  </div>
                </section>

                {/* Section 3 */}
                <section id="drafting-factual-narrative" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. The Factual Statement: Chronological Drafting, Scope Descriptions, and Delivery Confirmations
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      The core of a legal notice is the statement of facts. This section must construct a clear, objective, and chronological narrative of the work engagement. The facts stated in your notice will form the basis of all future court pleadings. If the dispute escalates to a lawsuit, the plaint you file in court must align perfectly with the facts stated in the notice. Any contradiction or omission will be exploited by the client&apos;s counsel to damage your credibility.
                    </p>
                    <p>
                      The narrative must follow a strict chronological order. It should begin by establishing the legal relationship between the parties. Citing the specific dates of the contract, purchase order, or initial email engagement is crucial. E.g., the notice should state: <em>&quot;Under the Service Agreement dated January 15, 2026, executed between the Sender and the Recipient, the Sender was engaged as an independent software consultant to develop the client&apos;s e-commerce platform for a total consideration of ₹3,00,000.&quot;</em>
                    </p>
                    <p>
                      Following the relationship setup, the narrative must detail your performance. You must show that you fulfilled your contractual obligations in good faith. Detail the milestones completed, the dates they were submitted, and the client&apos;s approvals. Proving delivery is essential: cite specific email timestamps or file transfer logs showing that the final deliverables were successfully transmitted. This prevents the client from raising a defense of non-performance or poor work quality to justify non-payment.
                    </p>
                    <div className="bg-red-50/40 p-6 rounded-2xl border border-red-150">
                      <h4 className="font-extrabold text-sm text-red-950 uppercase tracking-wider mb-2">
                        Defining the Cause of Action:
                      </h4>
                      <p className="text-xs sm:text-sm text-red-900 leading-relaxed">
                        The notice must clearly identify the exact date the breach occurred, known as the <strong>Cause of Action</strong>. Specify when the invoices were raised, the agreed credit period (e.g. 15 days), the date the payment became due, and the subsequent reminders. Pinpointing this date is critical because it determines: (a) the <strong>territorial jurisdiction</strong> (which court has the power to hear the case), and (b) the <strong>limitation period</strong> (which starts ticking from the first day of default).
                      </p>
                    </div>
                    <p>
                      Avoid emotional language, personal insults, or vague allegations. The tone of the notice must remain strictly professional, formal, and objective. Instead of stating, <em>&quot;The client has been dishonest and is avoiding me,&quot;</em> the notice should state: <em>&quot;The recipient has failed to clear Invoice No. LR-101 dated March 1, 2026, for the sum of ₹1,50,000, despite three written reminders sent via email on March 16, April 1, and April 15, 2026, which remains a material breach of the agreed terms.&quot;</em> This level of detail leaves no room for ambiguity and forces the client&apos;s legal team to respond to specific factual allegations.
                    </p>
                  </div>
                </section>

                {/* Section 4 */}
                <section id="statutory-citations-grounds" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Statutory Grounding: Citing Indian Contract Act Sec 73/70, Interest Act, and BNS Cheating
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      A legal notice must do more than just request payment; it must ground that demand within the applicable statutory framework of India. Citing the correct legal provisions is what elevates a notice from a simple demand letter to a formal legal instrument. When the recipient&apos;s counsel reviews the notice, they must see that every claim is backed by established statutory codes and judicial precedents. This statutory framing defines the legal consequences the client will face if they fail to comply.
                    </p>
                    <p>
                      The primary statutory basis for freelance disputes is the <strong>Indian Contract Act, 1872</strong>. The notice must cite <strong>Section 73</strong> to claim compensation for loss or damage caused by the breach of contract. If there is no written contract but the work was delivered and accepted, the notice must invoke the doctrine of <em>Quantum Meruit</em> under <strong>Section 70</strong> of the Act. Section 70 establishes a quasi-contractual obligation to pay for services rendered non-gratuitously, preventing the client from retaining the benefit of your work without payment.
                    </p>
                    <p>
                      If you hold Udyam registration, the notice must cite <strong>Section 15 and Section 16 of the MSMED Act, 2006</strong>. Cite Section 15 to establish the client&apos;s statutory obligation to pay within 45 days, and cite Section 16 to demand compound interest at <strong>three times the RBI bank rate</strong>. If you do not have MSME status, you can demand commercial interest (typically 12% to 18% per annum) under the <strong>Interest Act, 1978</strong>, by specifying that this notice serves as the formal written demand required to initiate the accrual of interest.
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse border border-slate-200">
                        <thead>
                          <tr className="bg-slate-50 text-slate-900 font-extrabold text-xs uppercase tracking-wider">
                            <th className="border border-slate-200 p-3">Statutory Provision</th>
                            <th className="border border-slate-200 p-3">Legal Ground</th>
                            <th className="border border-slate-200 p-3">Evidentiary / Claim Requirement</th>
                          </tr>
                        </thead>
                        <tbody className="text-xs sm:text-sm text-slate-650 font-medium">
                          <tr>
                            <td className="border border-slate-200 p-3 font-bold text-slate-900">Sec 73, Contract Act</td>
                            <td className="border border-slate-200 p-3">Breach of Contract Damages</td>
                            <td className="border border-slate-200 p-3">Proof of contract execution and material default by client.</td>
                          </tr>
                          <tr>
                            <td className="border border-slate-200 p-3 font-bold text-slate-900">Sec 70, Contract Act</td>
                            <td className="border border-slate-200 p-3">Quantum Meruit (Quasi-Contract)</td>
                            <td className="border border-slate-200 p-3">Lawful delivery, non-gratuitous intent, client enjoyed work benefit.</td>
                          </tr>
                          <tr>
                            <td className="border border-slate-200 p-3 font-bold text-slate-900">Sec 15 &amp; 16, MSMED Act</td>
                            <td className="border border-slate-200 p-3">MSME Statutory Recovery</td>
                            <td className="border border-slate-200 p-3">Valid Udyam registration certificate and 45-day payment delay.</td>
                          </tr>
                          <tr>
                            <td className="border border-slate-200 p-3 font-bold text-slate-900">Sec 318, BNS, 2023</td>
                            <td className="border border-slate-200 p-3">Criminal Cheating</td>
                            <td className="border border-slate-200 p-3">Proof of client&apos;s fraudulent intent from project inception.</td>
                          </tr>
                          <tr>
                            <td className="border border-slate-200 p-3 font-bold text-slate-900">Sec 138, NI Act, 1881</td>
                            <td className="border border-slate-200 p-3">Bounced Cheque Prosecution</td>
                            <td className="border border-slate-200 p-3">Bounced cheque memo, notice served within 30 days of memo.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p>
                      In cases where the client&apos;s conduct shows dishonest intent (e.g. blocking communications immediately after receiving source files), the notice should warn of criminal liability under the <strong>Bharatiya Nyaya Sanhita (BNS), 2023</strong>. Cite <strong>Section 318</strong> (Cheating) and <strong>Section 316</strong> (Criminal Breach of Trust), warning that you will file a criminal complaint before the local Magistrate if the dues are not cleared. Including these criminal warnings alongside civil recovery citations significantly increases the legal risk for the client, encouraging them to settle.
                    </p>
                  </div>
                </section>

                {/* Section 5 */}
                <section id="compliance-window-prayer" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. The Demand Ultimatum: Setting the Compliance Window and the Prayer for Relief
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      A legal notice must not leave the recipient guessing about how they can resolve the dispute. It must culminate in a clear, specific, and structured demand, commonly referred to as the <strong>&quot;Prayer for Relief&quot;</strong>, followed by a firm ultimatum. The prayer must detail the exact actions the client must take, the precise sum of money they must pay, and the payment channels through which the settlement must be executed.
                    </p>
                    <p>
                      The demand for payment must be quantified down to the last rupee. It should provide a clear breakdown of: the principal amount due (unpaid invoices), the accrued interest (specifying the rate and calculation period), the damages claimed (for mental agony or project delays), and the legal notice fees. To prevent any administrative delay or confusion, the notice must include the freelancer&apos;s specific bank account details—including the account number, IFSC code, bank name, branch, and beneficiary name—or specify a method of payment such as a demand draft.
                    </p>
                    <p>
                      The notice must also specify a strict and reasonable compliance window, known as the <strong>&quot;Cure Period&quot;</strong>. The length of this window is determined by the relevant laws and contract clauses. In general commercial and freelance disputes, a <strong>15-day</strong> or <strong>30-day</strong> window is standard and is considered a reasonable timeframe under the Contract Act. Providing a cure period shorter than the statutory mandate (e.g., in cheque bounce cases under Section 138 of the NI Act where exactly 15 days is mandatory) is a fatal error that invalidates the entire notice and any subsequent lawsuit.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;The compliance window must be drafted with absolute precision. If the notice specifies 15 days, you must wait until the 16th day to file a case. Filing court action on the 14th day constitutes a premature suit, leading to immediate dismissal in court.&quot;
                    </div>
                    <p>
                      The notice must conclude with a clear warning of the legal consequences of non-compliance. It must state that if the client fails to comply with the demands within the specified cure window, the freelancer will initiate appropriate civil and criminal proceedings without further notice. The notice should specify the exact forums and remedies that will be pursued, such as:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-650">
                      <li>
                        Filing a summary suit under Order 37 of the CPC in the competent Civil Court for fast-track recovery.
                      </li>
                      <li>
                        Filing a complaint on the MSME Samadhaan portal to initiate arbitration before the MSE Facilitation Council.
                      </li>
                      <li>
                        Initiating criminal prosecution for Cheating and Criminal Breach of Trust under BNS, 2023.
                      </li>
                      <li>
                        Holding the company and its active directors jointly and severally liable for all litigation costs, interest, and damages.
                      </li>
                    </ul>
                    <p>
                      This explicit list of consequences serves a vital purpose: it shows the client that you have a clear legal strategy and are ready to execute it. It shifts the risk calculation from a simple business dispute to an active legal liability, encouraging the client&apos;s legal team to resolve the matter during the notice period.
                    </p>
                  </div>
                </section>

                {/* Section 6 */}
                <section id="service-and-dispatch-forensics" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Airtight Service Protocols: Speed Post, Deemed Service, and Section 63 BSA Digital Forensics
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      Even a perfectly drafted legal notice is useless if you cannot prove in court that it was successfully delivered to the recipient. The burden of proving service lies entirely on the sender. In Indian litigation, defaulting clients frequently attempt to delay proceedings by claiming they never received the notice. Therefore, establishing an airtight proof of service is a critical requirement for enforceability.
                    </p>
                    <p>
                      The gold standard for notice delivery in India remains <strong>Registered Post with Acknowledgment Due (RPAD)</strong> and <strong>Speed Post</strong>. Under <strong>Section 27 of the General Clauses Act, 1897</strong>, and <strong>Section 114 of the Indian Evidence Act</strong> (now corresponding to the <strong>Bharatiya Sakshya Adhiniyam, 2023</strong>), there is a strong legal presumption of service. If a notice is sent to the correct address via registered post with prepaid postage, the court will presume that service was successfully effected. To claim this presumption, the sender must preserve the physical postal dispatch receipt and print the official tracking report from the India Post portal showing the status as &quot;Delivered.&quot;
                    </p>
                    <p>
                      If the client attempts to evade service by refusing to accept the post, or if the post is returned with remarks like &quot;Refused,&quot; &quot;Unclaimed,&quot; or &quot;Door Locked,&quot; the law treats this as <strong>deemed service</strong>. The Supreme Court of India in cases like <em>C.C. Alavi Haji v. Palapetty Muhammed</em> held that when a notice is sent by registered post to the correct address and is returned as refused, the service is deemed complete on the date of refusal. The recipient cannot later claim ignorance.
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <h4 className="font-extrabold text-sm text-slate-900 uppercase tracking-wider mb-3 text-[#DC2626]">
                        Admissibility of Digital Service under BSA, 2023:
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mb-4">
                        With the enactment of the <strong>Bharatiya Sakshya Adhiniyam (BSA), 2023</strong> (which replaced the Indian Evidence Act, 1872), the rules for admitting electronic records in court have been modernized and tightened under <strong>Section 63</strong> (formerly Section 65B). Serving legal notices via email, WhatsApp, or Telegram is valid, but proving it in court requires strict adherence to digital forensics protocols:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-600">
                        <li>
                          <strong>SMTP Logs &amp; DKIM:</strong> For email notices, you must preserve the complete email headers, SPF/DKIM verification reports, and SMTP logs showing a status code of <code>250 OK</code>, confirming successful delivery to the recipient&apos;s server.
                        </li>
                        <li>
                          <strong>WhatsApp Delivery Reports:</strong> For WhatsApp messages, preserve screenshots showing the double blue ticks (read status) or double grey ticks (delivery status), along with the contact card confirming the number belongs to the recipient.
                        </li>
                        <li>
                          <strong>Section 63 BSA Certificate:</strong> Any digital delivery proof must be accompanied by a signed Certificate under Section 63 of the BSA. This certificate must identify the device used, verify its proper operation, and include cryptographic hash values (SHA-256) of the email or chat files to prove they have not been altered.
                        </li>
                      </ul>
                    </div>
                    <p>
                      At LegalRecovery, we implement a digital delivery strategy. Every legal notice is served digitally via verified email and WhatsApp. We generate automated SMTP delivery logs and prepare the required Section 63 BSA certificates for every digital notice sent. This approach ensures that the client cannot claim non-delivery, giving us an airtight proof of service for court.
                    </p>
                  </div>
                </section>

                {/* Section 7 */}
                <section id="post-notice-negotiations" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    7. The Post-Notice Matrix: Handling Client Denials, Performance Allegations, and Rejoinders
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      Once the legal notice is successfully served, the ball is in the client&apos;s court. The client generally has three options: clear the dues within the cure period, respond with a reply denying the claims, or remain silent. The freelancer&apos;s strategy during this post-notice phase is critical to securing a successful recovery.
                    </p>
                    <p>
                      If the client responds with a reply, it must be evaluated by your legal counsel. Defaulting clients often send replies filled with false allegations, counterclaims, or legal threats (such as threatening a defamation suit) to intimidate the sender. E.g., a client might claim the work was delayed, of poor quality, or that the freelancer caused a data leak, to justify withholding payment. It is vital to separate genuine legal defenses from frivolous delaying tactics.
                    </p>
                    <p>
                      If the reply raises factual disputes, it may be necessary to serve a <strong>Rejoinder Notice</strong> (a reply to their reply). A rejoinder is used to formally deny the false allegations, reiterate the original facts, and present counter-evidence (such as email threads where the client approved milestones without objections). Serving a rejoinder prevents the client&apos;s allegations from remaining unchallenged on the legal record, which could otherwise be interpreted as an admission of facts in court.
                    </p>
                    <p>
                      In many cases, a well-drafted legal notice opens the door for settlement negotiations. If the client expresses a willingness to resolve the dispute, the settlement must be documented in a binding <strong>Settlement Deed</strong> or <strong>Memorandum of Understanding (MOU)</strong>. This deed must be structured carefully to prevent future disputes:
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
                      <h4 className="font-extrabold text-sm text-slate-900 uppercase tracking-wider text-[#DC2626]">
                        Essential Clauses for a Settlement Deed:
                      </h4>
                      <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-650">
                        <li>
                          <strong>Full and Final Release:</strong> A clear statement that the payment clears all outstanding claims, and neither party has any further claims against the other.
                        </li>
                        <li>
                          <strong>Payment Timeline and Details:</strong> Specify the exact installment dates, bank account details, and default consequences (such as the immediate revival of the original claim with interest).
                        </li>
                        <li>
                          <strong>IP Ownership Release:</strong> A clause stating that intellectual property rights and code ownership only transfer to the client upon the receipt of the final payment.
                        </li>
                        <li>
                          <strong>Confidentiality and Non-Disparagement:</strong> Clauses preventing both parties from disclosing the terms of the settlement or disparaging each other on public platforms or social media.
                        </li>
                      </ul>
                    </div>
                    <p>
                      If the client remains silent and fails to respond or pay within the cure window, this silence can be used to your advantage. In court, you can present the notice and the proof of service, showing that the client had an opportunity to contest the claim but chose not to do so. Under the Indian Evidence Act, this silence can be interpreted as an implied admission of the claim, making it easier to obtain a favorable judgment in a summary suit or recovery suit.
                    </p>
                  </div>
                </section>

                {/* Section 8 */}
                <section id="legalrecovery-recovery-dashboard" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    8. Leveraging LegalRecovery: Flat-Fee Drafting, Corporate Searches, and Live Tracking
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      LegalRecovery is India&apos;s leading tech-enabled legal money recovery platform. We combine the legal authority of veteran advocates with advanced workflow automation to deliver unmatched speed, transparency, and resolution rates for freelancers, developers, designers, and independent contractors facing payment delays.
                    </p>
                    <p>
                      Our platform is built specifically to address the unique challenges of gig workers in India. We understand that traditional legal procedures can be intimidating, expensive, and time-consuming. That is why we have designed a streamlined, digital-first experience that allows you to initiate legal recovery from the comfort of your home, without any office visits or unpredictable billing.
                    </p>
                    <p>
                      Here is what sets LegalRecovery apart:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-xs sm:text-sm text-slate-650">
                      <li>
                        <strong>Attorney-Drafted Quality:</strong> Your notice is individually reviewed and drafted by a panel advocate specializing in commercial contracts and labor laws, ensuring precise statutory citations (including Section 70 Contract Act and BNS cheating warnings) tailored to your case.
                      </li>
                      <li>
                        <strong>Corporate Due Diligence:</strong> For corporate clients, we search the ROC database to locate the active registered office and identify active directors. We dispatch separate physical notices to the registered office and the directors&apos; personal residences to prevent them from hiding behind the corporate entity.
                      </li>
                      <li>
                        <strong>Airtight Dual Service:</strong> We dispatch notices physically via Registered Speed Post and digitally via email/WhatsApp. We provide verified SMTP delivery logs and prepare the required Section 63 BSA certificate for court admissibility.
                      </li>
                      <li>
                        <strong>Live Tracking Dashboard:</strong> Track the drafting progress, post dispatch receipts, and postal delivery status in real-time from your secure client dashboard.
                      </li>
                      <li>
                        <strong>Transparent Flat Pricing:</strong> No retention fees, no hourly consultation charges. You pay a single flat fee of ₹999 per opposing party for the entire notice drafting and dispatch pipeline.
                      </li>
                    </ul>
                    <p>
                      By combining verified digital delivery logs with Section 63 BSA certification, LegalRecovery provides freelancers with an airtight, enforceable legal recovery tool. Serving a formal notice through our advocate panel signals to the defaulting client that you are serious and fully prepared to enforce your rights, leading to an 85% settlement rate during the notice cure window.
                    </p>
                  </div>
                </section>

                {/* Client Reviews Section */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Client Reviews
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Using this online platform to recover my unpaid salary was incredibly smooth. The flat-fee pricing of ₹999 was transparent, and the draft was ready in 24 hours. The employer paid within a week of getting the speed post notice.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Karan Johar (Gurugram)</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Highly professional. I was struggling to recover my rental security deposit from my previous landlord in Bangalore. The online portal drafted the notice citing the local Rent Act, and the tracking ID kept me updated. Landlord refunded my money immediately.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Rashmi Sen (Chennai)</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;As a freelance designer, I was tired of chasing clients for unpaid invoices. This service allowed me to submit details online and connect with an advocate instantly. Digital copy sent via WhatsApp worked wonders!&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Aditya Verma (Pune)</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Drafted a notice for a builder booking refund. The platform targeted active directors by extracting details from ROC. The builder settled the booking amount within 12 days. Highly effective.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Divya Nair (Kochi)</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Great interface and tracking support. They provided the post office speed post receipt on the client dashboard. Excellent service for small businesses seeking invoice recoveries.&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Nitin Goel (Delhi)</h4>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic mb-4">
                        &quot;Extremely satisfied. The legal notice was drafted with precision, citing variables and statutory dues. The company accepted the notice and cleared my FNF. Zero office visits required!&quot;
                      </p>
                      <h4 className="font-extrabold text-xs text-slate-900">— Pooja Reddy (Hyderabad)</h4>
                    </div>
                  </div>
                </section>

                {/* FAQs Accordion */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block font-sans">
                    FAQs
                  </h2>
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
                            <span className={`transform transition-transform duration-200 shrink-0 ml-3 text-slate-400 ${isExpanded ? 'rotate-180' : ''}`}>
                              ▼
                            </span>
                          </button>
                          {isExpanded && (
                            <div className="px-4 pb-4 pt-0 text-xs sm:text-sm text-slate-650 leading-relaxed pl-6 border-t border-slate-100 pt-3 bg-[#F8F9FB]/40">
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
                <h3 className="text-sm font-black mb-3">Send Legal Notice</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Draft and dispatch an enforceable legal notice to a client with our expert panel of advocates.
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
