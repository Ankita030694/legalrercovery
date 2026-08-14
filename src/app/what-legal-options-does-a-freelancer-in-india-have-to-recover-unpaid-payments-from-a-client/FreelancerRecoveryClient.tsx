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
    question: "Can a freelancer in India legally take action against a client for non-payment?",
    answer: "Yes, freelancers in India have several legal remedies to recover unpaid payments. A freelancer can serve a formal legal notice through an advocate, file a Summary Suit under Order 37 of the CPC for fast-track recovery, approach the MSME Facilitation Council if they hold an Udyam registration, file a civil recovery suit, or initiate criminal proceedings for cheating and criminal breach of trust under the Bharatiya Nyaya Sanhita (BNS) if fraudulent intent from the inception of the contract can be proven."
  },
  {
    question: "What legal options do I have if I did not sign a formal written contract with the client?",
    answer: "Even without a formal written contract, you can recover unpaid dues under Section 70 of the Indian Contract Act, 1872, using the doctrine of Quantum Meruit (as much as one has earned). The law implies a quasi-contractual obligation to pay if you performed the work lawfully, with non-gratuitous intent (expecting payment), and the client enjoyed the benefit of your work. You can prove this implied agreement in court using digital evidence like emails, WhatsApp chats, Slack messages, work delivery receipts, and invoices."
  },
  {
    question: "How can the government's MSME Samadhaan portal help a freelancer recover unpaid dues?",
    answer: "If you are registered as a Micro or Small Enterprise (MSE) under the Udyam portal, you can file a complaint against defaulting clients on the MSME Samadhaan portal. Under the MSMED Act, 2006, the Micro and Small Enterprise Facilitation Council (MSEFC) will conduct conciliation and arbitration. If the client delays payment beyond 45 days, they are legally obligated to pay you the principal amount along with compound interest at three times the RBI-notified bank rate, making this a highly effective recovery tool."
  },
  {
    question: "What is a Summary Suit, and how does it benefit freelancers seeking payment?",
    answer: "A Summary Suit, filed under Order 37 of the Code of Civil Procedure (CPC), 1908, is a fast-track civil remedy for recovering liquidated money claims. Unlike regular civil suits that can drag on for years, in a summary suit, the defendant (client) does not have an automatic right to defend the case. They must enter an appearance within 10 days and apply for 'leave to defend.' If their defense is found to be a sham or a delaying tactic, the court will deny leave and pass a decree in your favor immediately."
  },
  {
    question: "How long does a freelancer have to initiate legal action for unpaid payments in India?",
    answer: "Under the Limitation Act, 1963, the limitation period for filing a civil lawsuit for money recovery or breach of contract is three (3) years. This clock begins ticking from the date the payment first became due or the date the client last acknowledged the debt in writing (such as in an email promising to pay). While the legal notice should be served as soon as the default occurs, the subsequent court case must be instituted before this 3-year limitation window expires."
  },
  {
    question: "Are email threads and WhatsApp chats considered legally valid evidence in Indian courts?",
    answer: "Yes, under Section 4 and Section 5 of the Information Technology Act, 2000, digital communications like email threads, WhatsApp chats, and Slack messages are recognized as legally valid electronic records. To present them as admissible evidence in court, they must be accompanied by a certificate under Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023 (formerly Section 65B of the Indian Evidence Act), which verifies the integrity of the device and files."
  },
  {
    question: "What is Section 63 of the BSA, 2023, and why does a freelancer need a certificate for digital service?",
    answer: "Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023 governs the admissibility of electronic evidence. It requires that any printout or digital copy of an electronic record (like email logs or WhatsApp chats) must be supported by a signed certificate. This certificate must confirm that the computer or mobile phone used was operating properly and must include cryptographic hashes (SHA-256) of the files to prove the evidence has not been tampered with. Without this certificate, digital proof is inadmissible."
  },
  {
    question: "Can a freelancer file a criminal cheating case against a client who refuses to pay?",
    answer: "You can file a criminal complaint for Cheating under Section 318 of the Bharatiya Nyaya Sanhita (BNS), 2023 (formerly Section 420 IPC) and Criminal Breach of Trust under Section 316 BNS (formerly Section 406 IPC). However, to make a criminal charge stick, you must prove that the client had dishonest or fraudulent intent from the very inception of the contract (i.e., they hired you with the clear intention of never paying you). Vague contract disputes without initial fraud are treated as civil matters."
  },
  {
    question: "Can I demand and recover the legal notice drafting fees from the client?",
    answer: "Yes, it is standard practice to include a demand for drafting and administrative costs in the legal notice. The notice will state that the client is liable to pay a specific sum (usually between ₹1,000 and ₹5,000) as legal costs caused by their default. If the client settles the matter out of court, these costs are typically paid. If the case goes to court, the judge has the statutory power under Section 35 of the CPC to award all litigation costs, including notice expenses, to the successful party."
  },
  {
    question: "What clauses should a freelancer include in future contracts to prevent non-payment?",
    answer: "To safeguard future payments, freelancers should include: (a) a clear payment schedule linked to milestones; (b) an upfront advance deposit (25% to 50%); (c) an explicit interest clause for delayed payments (e.g., 1.5% per month); (d) an IP retention clause stating that ownership of all intellectual property, source files, and final designs remains with the freelancer until the final invoice is paid in full; and (e) a dispute resolution clause specifying mediation or arbitration before court action."
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
      "name": "Freelancer Unpaid Payments Recovery",
      "item": "https://www.legalrecovery.in/what-legal-options-does-a-freelancer-in-india-have-to-recover-unpaid-payments-from-a-client"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Freelancer Unpaid Payments Recovery: Legal Remedies & Options in India",
  "description": "Discover the legal rights and recovery pathways for freelancers in India facing unpaid client payments. Learn about MSME Samadhaan, summary suits, and contract act protections.",
  "image": "https://www.legalrecovery.in/og-freelancer-recovery.png",
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
  "name": "Freelancer Payment Recovery Services",
  "image": "https://www.legalrecovery.in/og-freelancer-recovery.png",
  "description": "Expert attorney-drafted legal notices and recovery solutions for freelancers, consultants, and independent contractors in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1580"
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
      "reviewBody": "Using this online platform to recover my unpaid salary was incredibly smooth. The flat-fee pricing of ₹999 was transparent, and the draft was ready in 24 hours. The employer paid within a week of getting the digital notice."
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
      "reviewBody": "Great interface and tracking support. They provided the verified digital delivery receipt on the client dashboard. Excellent service for small businesses seeking invoice recoveries."
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

export default function FreelancerRecoveryClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "freelancer-legal-status-india", title: "1. Legal Classification" },
    { id: "quasi-contractual-remedies-section-70", title: "2. Quantum Meruit (No Contract)" },
    { id: "udyam-registration-msme-samadhaan", title: "3. MSME Samadhaan Route" },
    { id: "summary-suits-order-37", title: "4. Summary Suits (Order 37)" },
    { id: "criminal-remedies-cheating-ni-act", title: "5. Criminal Options" },
    { id: "evidence-preservation-digital-notices", title: "6. Evidentiary Standards" },
    { id: "settlement-deed-drafting", title: "7. Settlement Deeds" },
    { id: "common-freelance-drafting-errors", title: "8. Freelance Pitfalls" },
    { id: "faqs", title: "FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Freelancer Payment Recovery", href: "/what-legal-options-does-a-freelancer-in-india-have-to-recover-unpaid-payments-from-a-client" }
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
              Gig Economy Legal Rights India
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Freelancer Payments Recovery: <span className="text-[#DC2626]">Your Legal Remedies</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Struggling with outstanding client invoices? Learn how to enforce contract rights, use government portals, and execute digital dispatches to get paid.
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
                <section id="freelancer-legal-status-india" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. The Vulnerabilities of Freelancers in India: Legal Status and Contractual Realities
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      The gig economy in India is expanding at an unprecedented pace, driven by rapid digitalization, remote work models, and a massive pool of skilled professionals in software engineering, graphic design, content creation, and digital marketing. However, this growth has exposed a severe structural vulnerability: the lack of specific, protective labor regulations for independent contractors and freelancers. Unlike formal employees, who are shielded by statutory codes like the Payment of Wages Act, 1936, and have recourse to the Labour Commissioner under the Industrial Disputes Act, 1947, freelancers occupy a distinct legal position. They are classified as independent contractors performing services under a contract <em>for</em> service, rather than a contract <em>of</em> service.
                    </p>
                    <p>
                      Because freelancers are not classified as &quot;workmen&quot; under Section 2(s) of the Industrial Disputes Act, they cannot approach the Labour Court to resolve salary delays or unpaid wages. Instead, their relationship with clients is governed primarily by commercial contract laws. This means that if a client delays, discounts, or refuses payment for services rendered, the freelancer must rely on the provisions of the <strong>Indian Contract Act, 1872</strong>. In the eyes of the law, the unpaid invoice of a freelancer is treated as a commercial debt, and the remedy lies in civil and commercial litigation forums. This distinction is crucial because commercial recovery proceedings typically require a higher standard of documentary evidence and can involve complex procedural rules.
                    </p>
                    <p>
                      The vulnerability of freelancers is compounded by the informal nature of gig work in India. Many freelance projects are initiated without a signed Master Service Agreement (MSA) or a formal contract, relying instead on verbal agreements, email exchanges, or WhatsApp threads. HR and procurement departments of corporate clients frequently exploit this informality, delaying payments or demanding extra revisions (scope creep) as a condition to release funds. Freelancers often hesitate to seek legal help, fearing that the cost of hiring an advocate and filing a suit will exceed the outstanding invoice. At LegalRecovery, we specialize in breaking down these barriers, providing freelancers with flat-fee, tech-enabled legal notice dispatches and structured recovery paths that level the playing field against corporate clients.
                    </p>
                    <p>
                      Understanding your exact legal status is the first step toward successful recovery. As an independent contractor, you hold valuable rights under the Indian Contract Act. If you have delivered the work according to the agreed specifications, the client is legally bound to fulfill their payment obligations. Failing to do so constitutes a material breach of contract, giving you the right to demand the principal amount along with interest and damages. By establishing a clear paper trail and serving a professional legal notice on advocate letterhead, you signal to the client that you are prepared to enforce your contract rights, which is often sufficient to secure a prompt settlement.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;Freelancers in India are not legally powerless. Although they lack traditional labor court protections, their agreements are governed by the Indian Contract Act. With the correct documentation and structured legal notice workflows, independent contractors can recover commercial debts efficiently.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 2 */}
                <section id="quasi-contractual-remedies-section-70" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. Quantum Meruit under Section 70: Recovering Payments Without a Written Contract
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      A common misconception among freelancers is that if they did not sign a formal written contract with a client, they have no legal options to recover unpaid payments. In the fast-paced gig economy, projects are frequently initiated through email instructions, Upwork/Fiverr chat portals, or WhatsApp messages. When a dispute arises and payments are withheld, clients often claim that there is no legally binding agreement. Under the Indian Contract Act, 1872, this argument is legally unsustainable. The law provides a powerful quasi-contractual remedy specifically designed to prevent clients from enjoying the benefit of a freelancer&apos;s labor without paying for it.
                    </p>
                    <p>
                      This remedy is governed by the doctrine of <strong>Quantum Meruit</strong> (translated as &quot;as much as one has earned&quot;) and is codified under <strong>Section 70 of the Indian Contract Act, 1872</strong>. Section 70 governs non-gratuitous acts, stating that where a person lawfully does anything for another person, or delivers anything to him, not intending to do so gratuitously, and such other person enjoys the benefit thereof, the latter is bound to make compensation to the former in respect of, or to restore, the thing so done or delivered. This provision acts as a legal safety net against <strong>unjust enrichment</strong>, ensuring that a client cannot retain your work (e.g. software code, designs, or marketing plans) without paying for it.
                    </p>
                    <p>
                      To successfully claim compensation under Section 70 in the absence of a written contract, a freelancer must satisfy three statutory conditions:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-650">
                      <li>
                        <strong>Lawful Act:</strong> The freelancer must have performed the services or delivered the work lawfully, meaning the work was requested and delivered in a legitimate business context.
                      </li>
                      <li>
                        <strong>Non-Gratuitous Intent:</strong> The freelancer must have performed the work with the clear expectation of being compensated, rather than intending to provide it as a free service. This intent is easily proven by presenting invoices, price quotes, or email exchanges discussing rates.
                      </li>
                      <li>
                        <strong>Enjoyment of Benefit:</strong> The client must have accepted and enjoyed the benefit of the work. E.g., if a developer delivers source code and the client launches the app, or if a writer delivers articles and the client publishes them on their website, the client has enjoyed the benefit of the services.
                      </li>
                    </ul>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
                      <h4 className="font-extrabold text-sm text-slate-900 uppercase tracking-wider text-[#DC2626]">
                        Essential Evidence to Prove an Implied Contract:
                      </h4>
                      <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-600">
                        <li>
                          <strong>Scope Discussions:</strong> Email threads, Slack channels, or WhatsApp logs discussing project deliverables, deadlines, and agreed rates.
                        </li>
                        <li>
                          <strong>Work Submission Trail:</strong> Git commit logs, email attachments, Google Drive file transfer logs, or design preview links showing successful work delivery.
                        </li>
                        <li>
                          <strong>Client Approvals:</strong> Written feedback from the client expressing satisfaction with the deliverables or requesting minor modifications.
                        </li>
                        <li>
                          <strong>Invoices &amp; Past Payments:</strong> Unpaid PDF invoices matching scope discussions, along with bank records of past milestone payments (if any) confirming the payment terms.
                        </li>
                      </ul>
                    </div>
                    <p>
                      Under Section 70, a freelancer is entitled to recover &quot;reasonable compensation&quot; for the services delivered. This means that even if a client terminates a project midway, claiming dissatisfaction, they are still legally obligated to pay for the specific portions of the work they accepted and used. Presenting a legal notice citing Section 70 along with an organized evidence trail is a highly effective way to counter a client&apos;s defense of &quot;no written contract,&quot; forcing them to negotiate a settlement.
                    </p>
                  </div>
                </section>

                {/* Section 3 */}
                <section id="udyam-registration-msme-samadhaan" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. MSME Udyam Registration &amp; Samadhaan: The Fast-Track Government Recovery Route
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      For freelancers in India seeking a powerful, government-backed legal recovery mechanism, obtaining an <strong>Udyam Registration</strong> is a strategic move. The Ministry of Micro, Small, and Medium Enterprises (MSME) allows individual service providers, consultants, and independent contractors to register online as a &quot;Micro Enterprise.&quot; This free registration provides freelancers with access to the protective provisions of the <strong>MSMED Act, 2006</strong>, and the <strong>MSME Samadhaan portal</strong>, which is one of the most effective debt recovery tools in India.
                    </p>
                    <p>
                      Under the MSMED Act, micro and small enterprises are protected against delayed payments by corporate buyers. <strong>Section 15</strong> of the Act mandates that if a buyer accepts goods or services from an MSE, they must clear the payment within the agreed timeline, which cannot exceed <strong>45 days</strong> from the date of acceptance. If the client fails to pay within this 45-day window, the statutory provisions of the Act are triggered automatically, overriding any conflicting clauses in the contract.
                    </p>
                    <p>
                      If a registered freelancer&apos;s payment is delayed beyond 45 days, they can file an online complaint on the MSME Samadhaan portal. The complaint is routed to the local <strong>Micro and Small Enterprise Facilitation Council (MSEFC)</strong>. The MSEFC has the powers of an arbitrator and acts as a specialized mediation forum. Once the complaint is admitted, the Council issues summons to the defaulting client and conducts conciliation meetings to resolve the dispute amicably.
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse border border-slate-200">
                        <thead>
                          <tr className="bg-slate-50 text-slate-900 font-extrabold text-xs uppercase tracking-wider">
                            <th className="border border-slate-200 p-3">Feature</th>
                            <th className="border border-slate-200 p-3">Traditional Civil Recovery</th>
                            <th className="border border-slate-200 p-3">MSME Samadhaan Route</th>
                          </tr>
                        </thead>
                        <tbody className="text-xs sm:text-sm text-slate-650 font-medium">
                          <tr>
                            <td className="border border-slate-200 p-3 font-bold text-slate-900">Mandatory Payment Window</td>
                            <td className="border border-slate-200 p-3">Governed by contract terms; no statutory limit</td>
                            <td className="border border-slate-200 p-3 text-emerald-700 font-bold">Strictly maximum 45 days</td>
                          </tr>
                          <tr>
                            <td className="border border-slate-200 p-3 font-bold text-slate-900">Interest on Delayed Pay</td>
                            <td className="border border-slate-200 p-3">Depends on contract or court discretion (typically 6-12% simple)</td>
                            <td className="border border-slate-200 p-3 text-emerald-700 font-bold">3x RBI Bank Rate (Compound Interest)</td>
                          </tr>
                          <tr>
                            <td className="border border-slate-200 p-3 font-bold text-slate-900">Forum &amp; Process</td>
                            <td className="border border-slate-200 p-3">Civil Court; complex trial under CPC</td>
                            <td className="border border-slate-200 p-3 text-emerald-700 font-bold">MSEFC Council; fast-track conciliation</td>
                          </tr>
                          <tr>
                            <td className="border border-slate-200 p-3 font-bold text-slate-900">Appeals Restriction</td>
                            <td className="border border-slate-200 p-3">Standard civil appeal process</td>
                            <td className="border border-slate-200 p-3 text-emerald-700 font-bold">Buyer must deposit 75% of award in court to appeal</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p>
                      The most lethal tool in the MSME arsenal is the <strong>Interest Clause</strong> under <strong>Section 16</strong>. If the buyer delays payment, they are legally liable to pay the MSE compound interest with monthly rests on the outstanding amount. The interest rate is fixed at <strong>three times the bank rate</strong> notified by the Reserve Bank of India (RBI). In practice, this rate can range from 18% to 22% per annum. Furthermore, under Section 19, if the client wishes to appeal an award passed by the MSEFC in court, they must first deposit <strong>75% of the awarded amount</strong> in court. This financial penalty makes corporate clients highly eager to settle MSE disputes during the initial notice or conciliation phase.
                    </p>
                  </div>
                </section>

                {/* Section 4 */}
                <section id="summary-suits-order-37" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Summary Suits under Order 37 CPC: Fast-Track Civil Debt Recovery for Invoiced Claims
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      If a freelancer does not hold an Udyam registration, or if the client is not a registered business entity subject to MSME regulations, the primary civil remedy for recovering unpaid payments is filing a <strong>Summary Suit</strong>. A summary suit is a specialized, fast-track civil proceeding filed under <strong>Order XXXVII of the Code of Civil Procedure, 1908 (CPC)</strong>. It is designed specifically for recovering liquidated debts or monetary claims arising out of written contracts, invoices, bills of exchange, or signed acknowledgments.
                    </p>
                    <p>
                      In a standard civil suit, the defaulting client can delay the trial for years by filing endless written replies, applications, and appeals. Order 37 changes the rules in favor of the creditor. When a summary suit is filed and summons are served, the client does not have an automatic right to defend the case. They must enter an appearance within <strong>10 days</strong> of receiving the summons. If they fail to do so, the allegations in the freelancer&apos;s plaint are deemed admitted, and the court immediately passes a judgment and recovery decree in favor of the freelancer.
                    </p>
                    <p>
                      If the client enters an appearance, the freelancer serves a &quot;Summons for Judgment.&quot; The client must then file a petition showing &quot;Leave to Defend.&quot; The court will inspect the client&apos;s defense: if it is found to be a sham, vexatious, or merely an attempt to delay the trial, the court will deny leave and pass a decree, or order the client to deposit the entire disputed amount in court as a condition to contest the case. This makes Order 37 an exceptionally lethal tool for recovering unpaid freelancer invoices.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;To file a Summary Suit, the claim must be based on a written agreement or a clear invoice. An invoice is treated as a written contract under Order 37 if it is supported by proof of work delivery and acceptance, allowing freelancers to bypass regular civil trials.&quot;
                    </div>
                    <p>
                      Timing is critical when initiating civil recovery. Under the <strong>Limitation Act, 1963</strong>, the limitation period for filing a summary suit or a civil recovery suit is <strong>three (3) years</strong> from the date the cause of action arose (e.g. the date the invoice payment became due). While we advise serving a legal notice immediately after a default, you must ensure that any subsequent court action is initiated within this 3-year window.
                    </p>
                  </div>
                </section>

                {/* Section 5 */}
                <section id="criminal-remedies-cheating-ni-act" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Criminal Remedies: Bounced Cheques (NI Act Sec 138) and Criminal Cheating (BNS Sec 318)
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      While payment defaults are primarily civil matters, certain situations involve elements of fraud or criminal liability. Freelancers in India can explore criminal remedies under the <strong>Negotiable Instruments Act, 1881</strong>, and the <strong>Bharatiya Nyaya Sanhita (BNS), 2023</strong> (which replaced the Indian Penal Code). These criminal options carry the threat of imprisonment, creating substantial pressure on defaulting clients to settle their dues.
                    </p>
                    <p>
                      The first criminal pathway relates to a <strong>bounced cheque</strong>. If a client issues a cheque to clear your outstanding invoice and it is returned by the bank as &quot;Insufficient Funds&quot; or &quot;Refer to Drawer,&quot; this constitutes a criminal offense under <strong>Section 138 of the Negotiable Instruments Act, 1881</strong>. The law mandates a strict statutory timeline:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-650">
                      <li>
                        The freelancer must send a formal demand notice to the drawer within <strong>30 days</strong> of receiving the bank memo.
                      </li>
                      <li>
                        The notice must demand payment of the cheque amount, giving the drawer exactly <strong>15 days</strong> from the receipt of the notice to clear the dues.
                      </li>
                      <li>
                        If the client fails to pay within those 15 days, the cause of action arises, and the freelancer can file a criminal complaint in the Magistrate Court within <strong>30 days</strong>.
                      </li>
                    </ul>
                    <p>
                      The second criminal option is filing a complaint for <strong>Cheating and Dishonestly Inducing Delivery of Property</strong> under <strong>Section 318 of the BNS, 2023</strong> (formerly Section 420 of the IPC) and <strong>Criminal Breach of Trust</strong> under <strong>Section 316 BNS</strong> (formerly Section 406 IPC). To make a criminal cheating charge stick, you must prove that the client had dishonest or fraudulent intent from the very inception of the contract (i.e. they hired you with the clear intention of never paying you).
                    </p>
                    <p>
                      For example, if a client hires a freelancer, receives the final source code, immediately deletes their Slack channel, blocks the freelancer&apos;s phone number, and refuses to respond to emails, this conduct demonstrates fraudulent intent to obtain work under false pretenses. Filing a criminal complaint alongside a civil notice is a highly effective strategy, as directors and business owners will go to great lengths to avoid facing criminal prosecution, arrest warrants, or damage to their personal reputation.
                    </p>
                  </div>
                </section>

                {/* Section 6 */}
                <section id="evidence-preservation-digital-notices" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Evidentiary Standards: Digital Forensics &amp; Section 63 BSA 2023 Certification
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      In a court of law, your claim is only as good as the evidence you can produce. For freelancers, whose work is almost entirely digital, preserving the paper trail is critical. If a client disputes that work was delivered, or claims they did not approve the scope, you must be able to present clear, legally admissible digital evidence.
                    </p>
                    <p>
                      Under the <strong>Information Technology Act, 2000</strong>, digital communications like email threads, WhatsApp chats, and Slack logs are recognized as legally valid electronic records. However, to present printouts or screenshots of these records as evidence in court, you must comply with the strict admissibility rules laid down under <strong>Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023</strong> (which replaced Section 65B of the Indian Evidence Act, 1872).
                    </p>
                    <p>
                      Under Section 63, electronic evidence must be accompanied by a signed <strong>Section 63 BSA Certificate</strong>. This certificate must identify the electronic record, describe the device used to print or copy it, verify that the device was operating properly during the relevant period, and include cryptographic hash values (such as SHA-256) of the files to prove they have not been altered. Failing to attach this certificate renders your digital evidence inadmissible.
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                      <h4 className="font-extrabold text-sm text-slate-900 uppercase tracking-wider text-[#DC2626]">
                        Due Diligence Checklist for Preserving Freelance Evidence:
                      </h4>
                      <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-650">
                        <li>
                          <strong>SMTP Delivery Logs:</strong> For email notices or work deliveries, capture the complete SMTP logs, showing status code <code>250 OK</code> to prove delivery to the recipient&apos;s server.
                        </li>
                        <li>
                          <strong>GitHub/GitLab Commits:</strong> Export commit history and merge request approvals showing code deliveries and Manager approvals.
                        </li>
                        <li>
                          <strong>WhatsApp/Slack Exports:</strong> Export chat histories (not just screenshots) containing dates, contact details, and explicit acknowledgments of work and payment terms.
                        </li>
                        <li>
                          <strong>Section 63 BSA Certificate:</strong> Prepare the signed certificate detailing the laptop/phone serial numbers, system logs, and cryptographic hashes of the evidence files.
                        </li>
                      </ul>
                    </div>
                    <p>
                      At LegalRecovery, every legal notice is served digitally via verified email and WhatsApp to the client&apos;s office. We generate automated SMTP delivery logs and prepare the required Section 63 BSA certificates for every digital notice sent, ensuring you have an airtight proof of service for court.
                    </p>
                  </div>
                </section>

                {/* Section 7 */}
                <section id="settlement-deed-drafting" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    7. Structuring Settlement Deeds: Clear Releases, Default Clauses, and Dispute Resolution
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      Serving a well-drafted legal notice often opens the door to out-of-court settlement negotiations. If the client expresses a willingness to resolve the dispute, you should document the terms of the settlement in a formal <strong>Settlement Deed</strong> or <strong>Memorandum of Understanding (MOU)</strong>. A verbal promise to pay or a simple email agreement is risky, as the client can easily default again.
                    </p>
                    <p>
                      The Settlement Deed must be structured carefully to protect your interests. The first essential clause is a <strong>Payment Schedule</strong>. If the client is paying in installments, the deed must specify the exact dates, installment amounts, and the beneficiary bank details. The second clause is a <strong>Default Clause</strong>, stating that if the client misses any installment, the entire settlement is void, and the original claim amount along with accrued interest immediately becomes due and payable.
                    </p>
                    <p>
                      The third clause is the <strong>Intellectual Property Release</strong>. As a freelancer, you hold the IP rights to your work. The deed must specify that ownership of all code, designs, or marketing assets is only transferred to the client upon the <strong>receipt of the final payment</strong> in your bank account. This prevents the client from using your work while defaulting on the settlement.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;The intellectual property clause must be drafted with care. The deed must explicitly state: 'Ownership and IP rights of all deliverables shall transfer to the client only upon the receipt of the final payment. Unauthorized use of deliverables prior to final payment shall constitute copyright infringement.'&quot;
                    </div>
                    <p>
                      Finally, the deed should include a <strong>Dispute Resolution Clause</strong>, specifying that any future disputes arising out of the settlement will be resolved through fast-track arbitration in a designated city, avoiding the delay of civil courts. Documenting these terms in a binding deed ensures that the settlement is enforceable and prevents the client from raising new disputes.
                    </p>
                  </div>
                </section>

                {/* Section 8 */}
                <section id="common-freelance-drafting-errors" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    8. Freelance Drafting Pitfalls: Intellectual Property Over-transfer, Vague Scopes, and Waived Interest
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      To prevent payment disputes in future projects, freelancers must learn to avoid common drafting errors in their contracts, proposals, and invoices. Poorly drafted agreements often contain loopholes that clients can exploit to justify payment delays or deny liability entirely.
                    </p>
                    <p>
                      The first pitfall is the <strong>Intellectual Property over-transfer trap</strong>. Many standard freelancer templates contain a clause stating: <em>&quot;All work delivered under this agreement shall be considered work-for-hire, and ownership shall vest in the client from the date of creation.&quot;</em> This clause is extremely dangerous. If you transfer the source files or code before receiving the final payment, the client legally owns the work and can use it, leaving you with little leverage. Your contracts must state: <em>&quot;IP ownership transfers only upon full and final payment.&quot;</em>
                    </p>
                    <p>
                      The second pitfall is a <strong>vague project scope</strong>. Vague task descriptions lead to &quot;scope creep,&quot; where the client keeps demanding additions or revisions while claiming the project is &quot;incomplete.&quot; The contract must specify the exact deliverables, the number of included revision rounds, and state that any additional requests will be charged at a specific hourly rate.
                    </p>
                    <p>
                      The third pitfall is <strong>failing to demand interest in writing</strong>. Under the <strong>Interest Act, 1978</strong>, you can only claim interest on delayed payments if you have made a written demand. Your invoices must contain a clear terms clause, stating: <em>&quot;Payments delayed beyond 15 days from the invoice date shall attract interest at 1.5% per month.&quot;</em> This clause makes the interest demand legally enforceable from the first day of default.
                    </p>
                    <p>
                      To ensure your freelance notices and agreements are legally sound and free from these loopholes, it is highly recommended to use a professional legal-tech platform like LegalRecovery. Our panel of advocates reviews your case, calculates interest, drafts the notice with precise statutory citations, and dispatches it digitally via email and WhatsApp with verified tracking, protecting your rights and maximizing your chances of recovery.
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
                        &quot;Using this online platform to recover my unpaid salary was incredibly smooth. The flat-fee pricing of ₹999 was transparent, and the draft was ready in 24 hours. The employer paid within a week of getting the digital notice.&quot;
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
                        &quot;Great interface and tracking support. They provided the verified digital delivery receipt on the client dashboard. Excellent service for small businesses seeking invoice recoveries.&quot;
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
                <h3 className="text-sm font-black mb-3">Recover Freelance Dues</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Discuss your unpaid freelancer invoices with legal experts. We draft and dispatch verified notices.
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
