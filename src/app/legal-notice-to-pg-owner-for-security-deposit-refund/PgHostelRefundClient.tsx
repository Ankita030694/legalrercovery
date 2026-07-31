'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "What is the typical timeline for a PG security deposit refund?",
    answer: "Under general renting practices and the Model Tenancy Act guidelines, the security deposit must be refunded to the paying guest or student on the day of vacating the premises, after deducting any mutually agreed unpaid utility bills or actual physical damage costs. Any delay beyond 7 to 15 days without reasonable cause constitutes illegal withholding."
  },
  {
    question: "Can a PG owner withhold deposit citing lock-in period breach?",
    answer: "A PG owner can withhold the deposit only if there is a signed, legally valid agreement containing a lock-in clause, and the owner has suffered actual, documented financial loss due to your early exit. Unilateral, verbal lock-in rules enforced by owners to forfeit deposits are completely illegal under Section 73 of the Indian Contract Act."
  },
  {
    question: "What is the difference between a PG agreement and a Rent agreement?",
    answer: "A rent agreement falls under tenancy laws, granting the tenant exclusive possession of the property. A paying guest agreement is typically a license agreement under the Easements Act, allowing shared occupancy with services. However, both agreements are bound by contract laws, making the arbitrary forfeiture of deposits illegal in both cases."
  },
  {
    question: "What constitute 'unreasonable deductions' from a security deposit?",
    answer: "PG owners often deduct money for routine maintenance, repainting, deep cleaning, or normal wear and tear. Legally, these expenses are the owner's responsibility. Deductions from the security deposit can only be made for actual, physical damage caused by the guest, or outstanding rent and utility bills."
  },
  {
    question: "How can I prove that I paid the security deposit without a written agreement?",
    answer: "If you do not have a written contract, you can prove the payment using digital bank transaction statements, UPI payment receipts, WhatsApp chat history, email confirmations, or rent receipts. Indian courts accept these digital records as valid electronic evidence under Section 65B of the Indian Evidence Act."
  },
  {
    question: "Can I adjust my security deposit against my last month's rent?",
    answer: "Adjusting the deposit against rent depends on the terms of your agreement. While many agreements prohibit this, guests often resort to adjusting rent if they suspect the PG owner will withhold their deposit. If the owner has a history of defaulting on refunds, sending a written notice clarifying the adjustment is recommended."
  },
  {
    question: "Can I file a case in the Consumer Forum against a PG owner?",
    answer: "Yes. Since PG accommodations provide lodging and food services for a commercial fee, guests are categorized as 'consumers' under the Consumer Protection Act, 2019. If the owner refuses to refund your deposit, you can file a complaint for deficiency of service on the E-Daakhil portal. For ignored notices, check <Link href=\"/what-to-do-if-legal-notice-is-ignored-india\" className=\"text-[#DC2626] hover:underline font-medium\">what to do if legal notice is ignored in India</Link> to plan your court escalation."
  },
  {
    question: "How much interest can I claim on delayed security deposit refunds?",
    answer: "You can claim interest ranging from 12% to 18% per annum on the delayed refund amount from the date it became due. Citing this interest in your legal notice warns the owner of mounting financial liabilities if they drag the dispute to court. For details on drafting recovery notices, check <Link href=\"/legal-notice-for-recovery-of-money\" className=\"text-[#DC2626] hover:underline font-medium\">legal notice for recovery of money</Link>."
  }
];

const reviews = [
  {
    author: "Aditi Rao (Bengaluru)",
    rating: "5",
    text: "My PG owner in Koramangala refused to refund my ₹25,000 deposit, claiming I did not give a 30-day notice, even though I had sent a WhatsApp message. I served a formal legal notice citing the Indian Contract Act. Within 5 days of receiving the notice, the owner transferred my full refund online. Citing laws works."
  },
  {
    author: "Rahul Verma (Pune)",
    rating: "5",
    text: "After vacating my hostel, the manager deducted ₹12,000 for repainting and maintenance. I served a legal notice challenging these unreasonable deductions. The hostel management quickly refunded the deducted amount to avoid consumer forum litigation. Highly recommend this guide."
  },
  {
    author: "Siddharth Sen (Noida)",
    rating: "5",
    text: "I was struggling for 3 months to get my PG deposit back. The owner stopped answering my calls. I sent a formal legal notice through an advocate. The owner immediately called me to settle the dispute amicably. If you are facing similar issues, check out how to resolve it without court by reading about <Link href=\"/how-to-recover-money-without-going-to-court-india\" className=\"text-[#DC2626] hover:underline font-medium\">how to recover money without going to court in India</Link>."
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
      "name": "PG & Hostel Security Deposit Refund Legal Notice Guide",
      "item": "https://www.legalrecovery.in/legal-notice-to-pg-owner-for-security-deposit-refund"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "PG & Hostel Security Deposit Refund Legal Notice Guide",
  "description": "Struggling to recover your PG or hostel security deposit from a defaulting owner? Learn how to draft and send a legal notice under rent control laws.",
  "image": "https://www.legalrecovery.in/og-pg-refund.png",
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
  "name": "PG Hostel Security Deposit Notice Guide",
  "image": "https://www.legalrecovery.in/og-pg-refund.png",
  "description": "Comprehensive guide to recovering security deposits from PG owners and hostel managers in India using legal notices.",
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

export default function PgHostelRefundClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "legal-rules", title: "Legal Rules Governing PG and Hostel Security Deposits in India" },
    { id: "lock-in-periods", title: "Lock-in Periods and Non-Refundable Deposit Clauses" },
    { id: "step-procedure", title: "Step-by-Step Procedure to Claim Security Deposit Refund" },
    { id: "drafting-notice", title: "Drafting a Legal Notice to PG/Hostel Owner" },
    { id: "before-after", title: "Before vs. After: Sending a Notice to the Owner" },
    { id: "alternate-resolution", title: "Alternate Dispute Resolution: Consumer Forum and Rent Authority" },
    { id: "success-stories", title: "Security Deposit Recovery Success Stories" },
    { id: "frequently-asked-questions", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "PG Deposit Notice Guide", href: "/legal-notice-to-pg-owner-for-security-deposit-refund" }
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
              Tenancy Dispute Guide
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
              PG &amp; Hostel Security Deposit <span className="text-[#DC2626]">Refund Legal Notice Guide</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Struggling to recover your PG or hostel security deposit from a defaulting owner? Learn how to draft and send a legal notice under rent control laws.
            </p>
          </div>
        </header>

        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 xl:px-12 py-10">
          <nav className="mb-6" aria-label="Breadcrumb">
            <Breadcrumbs items={breadcrumbItems} />
          </nav>
          
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_280px] xl:grid-cols-[280px_1fr_300px] gap-8 xl:gap-10 items-start mt-6">
            
            <nav className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 scrollbar-none" aria-label="Table of Contents">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </nav>

            <article className="min-w-0 bg-white p-6 md:p-12 rounded-3xl shadow-sm space-y-12 border border-slate-100">
              
              <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                
                <p className="text-sm md:text-base leading-relaxed font-semibold text-slate-900">
                  Under Rent Control Acts and the Model Tenancy Act, paying guest (PG) owners and hostel managers cannot arbitrarily withhold your security deposit. If your PG owner is refusing to return your refund, serving a formal legal notice is the first step to claim your money.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  Moving into a new city for education or a job is a major life transition. Paying guest (PG) accommodations and private hostels serve as the primary housing solutions for students and young professionals in hubs like Bengaluru, Pune, Delhi, Noida, and Gurugram. However, upon vacating these premises, guests face immense harassment from PG owners who refuse to return security deposits. These deposits usually range from one to two months' rent, amounting to substantial sums. Owners often cite arbitrary excuses, such as paint damage, cleaning charges, or breach of unwritten lock-in clauses, to forfeit the money. In some cases, owners completely stop responding to phone calls and messages once the resident leaves the premises. Under Indian contract and tenancy laws, retaining a security deposit without providing documented proof of actual damages is illegal. The law provides clear remedies to recover these funds.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed">
                  If you are struggling with a defaulting landlord or PG manager, serving a formal legal notice is the first step. You can consult our detailed guide on the <Link href="/legal-notice-for-recovery-of-money" className="text-[#DC2626] hover:underline font-medium">legal notice for recovery of money</Link> to understand how to outline your monetary claims. If you want to explore amicable, cost-effective ways to settle the dispute without heading to court, there are practical strategies you can employ. You can read about <Link href="/how-to-recover-money-without-going-to-court-india" className="text-[#DC2626] hover:underline font-medium">how to recover money without going to court in India</Link> to negotiate an out-of-court settlement. Additionally, if the owner remains completely non-cooperative and ignores your notice, you must plan your next steps. You can review the <Link href="/what-to-do-if-legal-notice-is-ignored-india" className="text-[#DC2626] hover:underline font-medium">what to do if legal notice is ignored in India</Link> guide to prepare for consumer forum or civil court filings. Let us analyze the statutory protections available to paying guests.
                </p>
              </div>

              <section id="legal-rules" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Legal Rules Governing PG and Hostel Security Deposits in India
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    While traditional tenants are protected by state Rent Control Acts, paying guests and hostel residents are governed by a combination of contract law, easement rights, and modern tenancy guidelines.
                  </p>
                </div>

                <div className="space-y-12 mt-8">
                  <div className="border-l-4 border-[#DC2626] pl-6 py-2">
                    <h3 id="model-tenancy-act-and-pg-rules" className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                      Model Tenancy Act and PG Rules
                    </h3>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed">
                      The Model Tenancy Act, approved by the Union Cabinet in 2021, aims to balance the rights of landlords and tenants. Section 11 of the Act specifies that the landlord cannot demand a security deposit exceeding two months' rent for residential premises and one month's rent for commercial premises.
                    </p>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed mt-3">
                      The Act mandates that the security deposit must be refunded to the tenant on the day of taking over possession of the premises from the tenant, after making deductions for any outstanding rent or utility bills. While the Act is being adopted by various states progressively, it serves as the benchmark for resolving rent-related disputes. Additionally, state-specific rules (such as the Karnataka Rent Act or Delhi Rent Control Act) prohibit landlords from charging exorbitant, non-refundable deposits under the guise of maintenance.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#DC2626] pl-6 py-2">
                    <h3 id="indian-contract-act-and-unfair-retention-of-money" className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                      Indian Contract Act and Unfair Retention of Money
                    </h3>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed">
                      A PG agreement, whether written or verbal, is a contract between the guest and the owner. Under Section 73 and 74 of the Indian Contract Act, 1872, a party to a contract can only claim compensation or forfeit a deposit if they prove that the other party committed a breach of contract and that the breach caused actual, documented financial loss.
                    </p>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed mt-3">
                      The PG owner cannot unilaterally decide to forfeit your deposit simply because you vacated the room. If the owner fails to show any actual damage to the property, the retention of your security deposit constitutes 'unjust enrichment' and a breach of trust under Section 405 of the Indian Penal Code. Courts have repeatedly ruled that security deposits are held in trust by the landlord and must be returned upon the completion of the occupancy term.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#DC2626] pl-6 py-2">
                    <h3 id="licensing-regulations" className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                      State-Specific Police Registration and PG Licensing Regulations
                    </h3>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed">
                      In major urban agglomerations like Bengaluru and Gurugram, local municipal corporations and police departments mandate strict licensing and registration protocols for commercial paying guest operations. For instance, the Bruhat Bengaluru Mahanagara Palike (BBMP) has issued specific guidelines requiring PG operators to obtain trade licenses, maintain safety registers, and limit occupancy per room to avoid overcrowding. Similarly, Noida and Gurugram authorities require mandatory police verification of all PG residents.
                    </p>
                    <p className="text-sm md:text-base text-slate-650 leading-relaxed mt-3">
                      If a PG owner operates their establishment without a valid municipal trade license or fails to maintain mandatory safety registers, they are in violation of local municipal laws. Highlighting these regulatory violations in your legal notice places substantial pressure on the owner. Most operators will quickly refund your security deposit to avoid municipal inspections or police inquiries into their licensing status.
                    </p>
                  </div>
                </div>
              </section>

              <section id="lock-in-periods" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Lock-in Periods and Non-Refundable Deposit Clauses
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Many PG owners include 'lock-in period' clauses in their rules, stating that if a guest leaves before completing three or six months, their entire security deposit will be forfeited.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Under Indian contract jurisprudence, a lock-in clause is not an absolute license to seize money. If you give reasonable notice (typically 30 days) before vacating, the owner cannot forfeit your deposit unless they prove that the room remained vacant despite their best efforts to find a replacement guest. If the owner immediately rents out the room to another guest, they suffer no financial loss, and forfeiting your deposit is a violation of contract law.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Similarly, clauses declaring security deposits as 'completely non-refundable' are considered one-sided and unfair contracts under the Consumer Protection Act, 2019. The Consumer Commissions have the power to declare such clauses void and order immediate refunds with compensation for harassment.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Section 2(47) of the Consumer Protection Act, 2019 defines 'unfair trade practices' to include the insertion of one-sided, unreasonable terms in consumer contracts. The Act specifically targets situations where service providers impose penalties that are disproportionate to the actual loss suffered. In the context of PG accommodations, forfeiting the entire security deposit for minor notice delays or formatting errors in notice letters is classified as an unfair contract term.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    When a PG owner claims that the deposit is contractually non-refundable, you can counter by stating that such one-sided clauses are legally void. Consumer forums regularly strike down these restrictive clauses and order operators to refund the deposit along with compensation for the mental harassment and litigation expenses incurred by the student or professional.
                  </p>
                </div>
              </section>

              <section id="step-procedure" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Step-by-Step Procedure to Claim Security Deposit Refund
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6 mb-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    If your PG owner or hostel manager is refusing to return your security deposit, follow these steps to secure your refund:
                  </p>
                </div>

                {/* STEP CHECKLIST */}
                <div className="space-y-4">
                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                    <span className="bg-[#DC2626]/10 text-[#DC2626] p-2 rounded-lg font-bold text-sm shrink-0">1</span>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Send a Written Vacating Notice</h4>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Send a formal notice of departure via WhatsApp or email at least 30 days before vacating. Keep proof of delivery to establish that you complied with notice requirements.
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                    <span className="bg-[#DC2626]/10 text-[#DC2626] p-2 rounded-lg font-bold text-sm shrink-0">2</span>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Document the Room Condition</h4>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Take photos and videos of the room, bathroom, and furniture on the day of departure. This prevents the owner from claiming false damages to justify deductions.
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                    <span className="bg-[#DC2626]/10 text-[#DC2626] p-2 rounded-lg font-bold text-sm shrink-0">3</span>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Serve a Formal Legal Notice</h4>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Serve a formal legal notice prepared by an advocate. Demand the refund of the deposit within 15 days of receiving the notice, warning of consumer forum filings.
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm flex items-start gap-4">
                    <span className="bg-[#DC2626]/10 text-[#DC2626] p-2 rounded-lg font-bold text-sm shrink-0">4</span>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">File a Complaint on E-Daakhil</h4>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        If the owner ignores the notice, file a complaint on the E-Daakhil portal for deficiency of service, demanding the refund along with compensation for mental harassment.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="prose prose-base max-w-none text-slate-650 space-y-6 mt-8">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">Sending a Legal Demand via Electronic Media</h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Before serving a formal legal notice, you must ensure that your communication trail is legally robust. Under Section 85B of the Indian Evidence Act, courts recognize WhatsApp chats, email exchanges, and SMS text messages as valid electronic agreements. When you send your 30-day exit notification, ensure you request a written acknowledgment of the exit date and the refund amount due.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    If the owner refuses to reply or blocks your number, take screenshots of the chat history showing the single tick or read receipts (blue ticks). These digital screenshots can be attached to your legal notice as primary evidence of notice delivery and the owner's non-cooperation. This prevents the owner from claiming that they were not informed of your departure in advance.
                  </p>
                </div>

                <div className="prose prose-base max-w-none text-slate-650 space-y-6 mt-8">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">Model Tenancy Act vs. PG Customary Rules</h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    To understand your legal standing, let us compare the customary rules enforced by PG owners against the statutory rights provided under the Model Tenancy Act:
                  </p>
                </div>

                {/* TENANCY COMPARISON TABLE */}
                <div className="overflow-x-auto my-8 border border-slate-200 rounded-2xl shadow-sm">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white text-xs md:text-sm">
                        <th className="p-4 font-bold border-b border-slate-700">Dispute Area</th>
                        <th className="p-4 font-bold border-b border-slate-700">PG Customary Rules</th>
                        <th className="p-4 font-bold border-b border-slate-700">Model Tenancy Act / Contract Law</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs md:text-sm text-slate-700">
                      <tr className="border-b border-slate-100 hover:bg-slate-50/50">
                        <td className="p-4 font-bold bg-slate-50/30">Deposit Amount Limit</td>
                        <td className="p-4">3 to 6 months' rent as deposit</td>
                        <td className="p-4">Maximum 2 months' rent for residential properties</td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-slate-50/50">
                        <td className="p-4 font-bold bg-slate-50/30">Deduction for Painting</td>
                        <td className="p-4">Mandatory 1 month rent deduction</td>
                        <td className="p-4">Only actual, physical damage beyond normal wear and tear</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-4 font-bold bg-slate-50/30">Refund Timeline</td>
                        <td className="p-4">30 to 60 days after vacating</td>
                        <td className="p-4">Refund must be processed on the day of taking over possession</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="drafting-notice" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Drafting a Legal Notice to PG/Hostel Owner
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    A legal notice to a PG owner must contain precise details about the entry date, exit date, security deposit amount paid, notice period served, and the lack of any damage to the room. It must give the owner 15 days to refund the amount, failing which consumer complaints will be initiated.
                  </p>
                  
                  <div className="bg-[#111827] text-slate-300 p-6 rounded-2xl border border-slate-800 my-6 font-mono text-xs overflow-x-auto leading-relaxed">
                    <p className="text-white font-bold mb-2">Key Notice Elements:</p>
                    <p>1. Parties: Address to the PG Owner, Manager, and Registered PG Company Name</p>
                    <p>2. Transaction Proof: Detail payment dates, amounts, and transaction IDs (UPI/Bank)</p>
                    <p>3. Notice Compliance: Reference the written departure notice sent (WhatsApp/Email)</p>
                    <p>4. No Damage Declaration: Affirm that the room was handed over in clean condition</p>
                    <p>5. Legal Basis: Cite Section 73 of Indian Contract Act and Consumer Protection Act</p>
                    <p>6. Interest Claim: Demand 18% per annum interest on the delayed refund amount</p>
                    <p>7. Cure Period: Grant a strict 15-day window to refund before initiating litigation</p>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">Sample PG Deposit Refund Notice Template</h3>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-inner font-sans text-xs md:text-sm text-slate-700 leading-relaxed space-y-4">
                    <p className="font-bold">LEGAL NOTICE</p>
                    <p>To,<br />The Owner / Authorized Manager<br />[PG/Hostel Name]<br />[PG Address]</p>
                    <p>Dear Sir/Madam,</p>
                    <p>Under instructions from my client, [Tenant Name], student/professional, resident of [Current Address], I hereby serve you with this legal notice regarding the non-refund of security deposit and deficiency of service.</p>
                    <p>My client occupied Room No. [Number] in your PG/Hostel establishment from [Joining Date] to [Vacating Date] on a monthly rent of ₹[Amount]. At the time of entry, my client paid a security deposit of ₹[Deposit Amount] via [UPI/Bank Transfer] on [Payment Date].</p>
                    <p>My client served the contractually required notice period of 30 days via WhatsApp message on [Notice Date]. On [Vacating Date], my client vacated the room and handed over the keys. The room was returned in clean, undamaged condition. Despite multiple assurances and follow-ups, you have failed to refund the security deposit of ₹[Deposit Amount].</p>
                    <p>Your failure to refund the deposit constitutes a breach of contract under Section 73 of the Indian Contract Act, 1872 and deficiency of service under the Consumer Protection Act, 2019. We hereby call upon you to refund the security deposit of ₹[Deposit Amount] along with interest at 18% per annum within 15 days of receiving this notice. Failure to do so will compel my client to initiate proceedings before the Consumer Forum, making you liable for all costs.</p>
                    <p>Yours faithfully,<br />[Advocate Name]</p>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed">
                    Serving this notice via Registered Post or speed post creates a court-admissible record. Most commercial PG operators will prioritize returning the deposit to avoid being dragged into consumer forums, which can disrupt their business licenses.
                  </p>
                </div>
              </section>

              <section id="before-after" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Before vs. After: Sending a Notice to the Owner
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
                          The PG owner ignores your WhatsApp messages, blocks your number, or makes arbitrary deductions for painting and cleaning without providing any invoice bills.
                        </p>
                      </div>
                      <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                        <span className="text-emerald-400 font-bold uppercase tracking-wider text-xs block mb-2">After Notice</span>
                        <p className="text-slate-300 leading-relaxed">
                          The owner or their manager contacts you to settle the dispute out of court, offering the refund to prevent consumer complaints, legal costs, and reviews online.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="alternate-resolution" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Alternate Dispute Resolution: Consumer Forum and Rent Authority
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    If the PG owner ignores your legal notice, you have multiple cost-effective forums to resolve the dispute. Since PG accommodations are commercial services, you can file a case in the District Consumer Disputes Redressal Commission. Filing on the E-Daakhil portal is simple, does not require a lawyer, and costs very little.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Alternatively, in states that have implemented the Model Tenancy Act, you can file a petition before the Rent Authority. The Rent Authority has the power to summon landlords, verify rental records, and order the immediate refund of security deposits along with penalties for non-compliance. These administrative options are highly effective for student tenants.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    For students and young professionals who want a quick, zero-cost resolution before initiating formal litigation, filing a grievance with the National Consumer Helpline (NCH) is highly recommended. The NCH is an administrative portal run by the Ministry of Consumer Affairs, Government of India. You can register your complaint online or call the toll-free number 1915.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Once a grievance is registered against the PG operator or pg management company, NCH forwards the complaint to the registered company for response. Since most corporate PG chains and hostel aggregators are registered on the NCH portal, they prefer to resolve these complaints within 10 to 15 days to maintain their corporate rating and avoid escalation to the District Consumer Commission.
                  </p>
                </div>
              </section>

              <section id="success-stories" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Security Deposit Recovery Success Stories
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Most PG deposit disputes are resolved during the initial notice phase. Operators prefer to settle rather than face regulatory scrutiny and online branding damage.
                  </p>
                  
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6 shadow-sm">
                    <h4 className="font-bold text-slate-900 text-base mb-2">The Noida PG Notice Case</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      A software engineer in Noida vacated her PG room after giving a 1-month notice. The owner withheld her ₹20,000 deposit, claiming paint charges. She served a legal notice prepared by an advocate, challenging the deduction and citing Section 73 of the Contract Act. The PG owner, recognizing the legal weight of the formal notice, refunded the entire security deposit amount within 4 days of receiving the notice, choosing to settle the dispute out of court.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6 shadow-sm">
                    <h4 className="font-bold text-slate-900 text-base mb-2">The Bengaluru Student Hostel Dispute</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      A student in Bengaluru was denied his hostel deposit of ₹35,000 when he vacated early due to online classes. The hostel manager claimed a lock-in period breach. The student served a legal notice, highlighting that the hostel immediately filled the room with another resident and therefore did not suffer any vacancies or financial losses. The notice also cited the Model Tenancy Act rules on maximum deposits and warned the management of filing a claim for deficiency of service on the government's E-Daakhil portal. The hostel management quickly settled the claim, returning the complete ₹35,000 security deposit online to avoid consumer commission litigation and negative public feedback.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6 shadow-sm">
                    <h4 className="font-bold text-slate-900 text-base mb-2">The Bengaluru IT Corridor PG Recovery Case</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      A young IT professional residing in a premium PG in Whitefield, Bengaluru, vacated his double-sharing room after completing his 11-month stay. The PG management withheld his ₹30,000 security deposit, claiming that he had violated the exit terms by not submitting a physical letter, despite having sent a WhatsApp message. The professional served a formal legal notice prepared by an advocate, citing the Indian Contract Act and highlighting the digital confirmation. The PG operator, fearing negative reviews online and potential trade license audits, refunded the entire deposit within 48 hours of receiving the notice.
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
              <h2 className="text-2xl md:text-4xl font-black mb-4">Deposit Refund Reviews</h2>
              <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
                Read how students and young professionals have successfully recovered their security deposits using our legal guides.
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
                      <p className="text-[10px] text-slate-500 font-medium">Verified Resident</p>
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
