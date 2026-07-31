'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "Can the housing society management committee legally disconnect my water or electricity for unpaid dues?",
    answer: "No. The disconnection of essential services like water and electricity is strictly illegal. The State Cooperative Societies Acts and various High Court judgments explicitly prohibit management committees from weaponizing essential services. They must follow legal recovery procedures through the Registrar, not resort to vigilante tactics."
  },
  {
    question: "What is the legal limit for transfer charges or transfer premiums in a housing society?",
    answer: "In states like Maharashtra, the government has capped the transfer premium a society can charge at Rs. 25,000. Any demand exceeding this statutory limit, often disguised as a 'voluntary donation' to the building repair fund during a property sale, is outright extortion and legally void."
  },
  {
    question: "Can the society charge arbitrary penalties for delayed maintenance payments?",
    answer: "No. The penalty interest rate for delayed maintenance payments is capped by the society bylaws (typically around 21% simple interest per annum). Committees cannot invent arbitrary fixed daily penalties or compound interest charges that violate the approved bylaws."
  },
  {
    question: "Is it legal for the RWA to restrict my access to common amenities like the gym or pool if I have a dispute?",
    answer: "Generally, no. As a co-owner of the society, you hold undivided rights over the common areas. While bylaws may allow restrictions for chronic defaulters, doing so unilaterally during a bonafide legal dispute regarding the calculation of the maintenance bill is considered an unfair practice and a deficiency in service."
  },
  {
    question: "What should I do if the secretary refuses to accept my letters or respond to emails?",
    answer: "If the committee refuses to accept physical letters, you must send all formal correspondence and legal notices via Registered Post with Acknowledgement Due (RPAD) to the registered address of the society. A refusal to accept RPAD is treated by courts as valid legal service."
  },
  {
    question: "Can I approach the Consumer Court against my own Cooperative Housing Society?",
    answer: "Yes. The Supreme Court of India has clarified that a member of a cooperative housing society is a 'consumer' and the society is a 'service provider'. Therefore, you can file a complaint in the District Consumer Disputes Redressal Commission for deficiency in service, such as failure to repair leaks or arbitrary billing."
  },
  {
    question: "Do I have the right to inspect the society account books and ledgers?",
    answer: "Absolutely. Under the Cooperative Societies Act, every member has a statutory right to inspect the books of accounts, audit reports, and minutes of the Annual General Body Meetings. Refusing a member access to these documents is a severe offense that can lead to the dismissal of the committee by the Registrar."
  }
];

const reviews = [
  {
    author: "Sanjay R.",
    rating: "5",
    text: "When selling my flat in Mumbai, the committee demanded three lakh rupees as a 'donation' to issue the NOC. I knew the transfer limit was twenty five thousand. I used this guide to send a legal notice to the Chairman and Secretary. Within two days, the NOC was issued without the illegal extortion money."
  },
  {
    author: "Meera T.",
    rating: "5",
    text: "Our RWA arbitrarily doubled the maintenance for bachelors and threatened to cut off our water supply. Sending a legal notice citing the exact High Court rulings from this page instantly stopped the harassment. They realized they could go to jail for disconnecting essential services."
  },
  {
    author: "Anil G.",
    rating: "5",
    text: "The committee was charging massive illegal penalties on my maintenance bill because of a past dispute. Getting a formal advocate notice sent to the society registered office forced them to recalculate the entire ledger according to the strict bylaws. The harassment stopped completely."
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
      "name": "Notice to Housing Society for Disputes",
      "item": "https://www.legalrecovery.in/legal-notice-to-cooperative-housing-society-maintenance-disputes"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Legal Notice to Cooperative Housing Society for Maintenance Disputes",
  "description": "Learn how to fight arbitrary maintenance charges, illegal transfer fees, and harassment by RWA management committees. Draft a legal notice to your housing society.",
  "image": "https://www.legalrecovery.in/og-housing-society-notice.png",
  "author": {
    "@type": "Organization",
    "name": "LegalRecovery"
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
  "name": "Housing Society Dispute Resolution Guide",
  "image": "https://www.legalrecovery.in/og-housing-society-notice.png",
  "description": "A comprehensive legal guide detailing how flat owners can counter illegal maintenance demands, transfer premiums, and harassment from Cooperative Housing Societies.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
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

export default function HousingSocietyNoticeClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "the-power-trip-of-management-committees", title: "The Power Trip of Management Committees",
      children: [
        { id: "illegal-transfer-charges-and-premiums", title: "Illegal Transfer Charges and Premiums" },
        { id: "arbitrary-maintenance-and-penalties", title: "Arbitrary Maintenance and Illegal Penalties" }
      ]
    },
    { id: "committee-harassment-red-flags", title: "Committee Harassment Red Flags" },
    { id: "drafting-the-legal-notice", title: "Drafting the Legal Notice to the CHS" },
    { id: "registrar-escalation-timeline", title: "Registrar and Court Escalation Timeline" },
    { id: "success-stories-reviews", title: "Success Stories & Resident Reviews" },
    { id: "frequently-asked-questions", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Notice to Housing Society for Disputes", href: "/legal-notice-to-cooperative-housing-society-maintenance-disputes" }
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
              Property &amp; Cooperative Law
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
              Legal Notice to Housing Society for <span className="text-[#DC2626]">Maintenance &amp; Transfer Disputes</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Management committees frequently abuse their power through arbitrary maintenance demands, extortionate transfer premiums, and illegal disconnection of essential services. Discover how to use the law to force the committee to strictly follow the bylaws.
            </p>
          </div>
        </header>

        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 xl:px-12 py-10">
          <nav className="mb-6" aria-label="Breadcrumb">
            <Breadcrumbs items={breadcrumbItems} />
          </nav>
          
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_280px] xl:grid-cols-[280px_1fr_300px] gap-8 xl:gap-10 items-start mt-6">
            
            <nav className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 scrollbar-hide" aria-label="Table of Contents">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </nav>

            <article className="min-w-0 bg-white p-6 md:p-12 rounded-3xl shadow-sm space-y-12 border border-slate-100">
              
              <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                
                <p className="text-sm md:text-base leading-relaxed font-semibold text-slate-900">
                  Owning a flat in a Cooperative Housing Society (CHS) or an apartment complex managed by a Resident Welfare Association (RWA) brings the promise of secure, community living. However, this dream often descends into a nightmare of administrative harassment when the elected management committee begins operating the society as a personal fiefdom, ignoring statutory laws and approved bylaws.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  A housing society management committee does not possess absolute dictatorial power. They are elected representatives bound strictly by the State Cooperative Societies Act (such as the Maharashtra Cooperative Societies Act, 1960) and the Model Bylaws registered with the Deputy Registrar. Unfortunately, many committees operate under the illusion that passing a resolution in a General Body Meeting magically legalizes any arbitrary decision, whether it is doubling maintenance for specific groups or demanding exorbitant fees during a property transfer.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed">
                  Individual flat owners often feel powerless against the collective machinery of the committee. When a resident questions an illegal charge, the standard committee response is intimidation: threatening to withhold the No Objection Certificate (NOC) for sale, refusing to issue a parking sticker, or, most egregiously, threatening to disconnect the water or electricity supply to the apartment. These tactics thrive on the assumption that the resident will not take formal legal action.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  The law provides robust mechanisms to dismantle this tyranny. A formal, well drafted legal notice shatters the illusion of committee immunity. It puts the Chairman, the Secretary, and the Treasurer on formal legal notice that they can be held personally liable for their statutory violations, including the potential dismissal of the entire committee by the Registrar. To understand the baseline mechanics of legally disputing financial demands, reading about a <Link href="/legal-notice-for-recovery-of-money" className="text-[#DC2626] hover:underline font-medium">legal notice for recovery of money</Link> is a useful preliminary step.
                </p>
              </div>

              <section id="the-power-trip-of-management-committees" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  The Power Trip of Management Committees
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    Committees rely on the ignorance of the members regarding the nuanced differences between a "resolution" and a "statutory law." A society cannot pass a resolution that violates the overarching State Act. Recognizing these illegal practices is vital for a successful legal challenge.
                  </p>

                  <h3 id="illegal-transfer-charges-and-premiums" className="text-lg md:text-xl font-bold text-slate-900 mt-12 mb-3 scroll-mt-32">
                    Illegal Transfer Charges and Premiums
                  </h3>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    The most common and lucrative form of committee extortion occurs during the sale of a flat. In states like Maharashtra, the government has explicitly capped the "Transfer Premium" that a society can legally demand at Rs. 25,000. 
                  </p>

                  <p className="text-sm md:text-base leading-relaxed">
                    To circumvent this cap, committees devise creative terminology. They will refuse to issue the mandatory NOC for the sale or refuse to transfer the share certificate to the new buyer unless the seller pays a massive sum disguised as a "Voluntary Donation to the Building Repair Fund" or an "Amenities Upgrade Fee." Courts have repeatedly struck down these demands. A donation, by its very definition, cannot be a mandatory precondition for a legal property transfer. Forcing a member to pay lakhs of rupees under the guise of a voluntary donation is outright extortion.
                  </p>

                  <h3 id="arbitrary-maintenance-and-penalties" className="text-lg md:text-xl font-bold text-slate-900 mt-12 mb-3 scroll-mt-32">
                    Arbitrary Maintenance and Illegal Penalties
                  </h3>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    Maintenance billing must strictly adhere to the formula prescribed in the approved bylaws (e.g., per square foot, or an equal division depending on the specific charge head). A committee cannot arbitrarily decide to charge bachelors double the maintenance, or impose massive surcharges on owners who keep pets. Such discriminatory billing is illegal.
                  </p>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    Furthermore, while a society can charge interest on delayed payments, this interest rate is capped by the bylaws (usually around 21 percent simple interest per annum). Committees often try to illegally enrich the society coffers by inventing arbitrary penalties, such as a fixed fine of one thousand rupees per day of delay, or applying compound interest on outstanding balances. These invented penalties have zero legal validity and will be struck down by the Registrar or the Consumer Court.
                  </p>
                </div>
              </section>

              <section id="committee-harassment-red-flags" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Committee Harassment Red Flags
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    If your society committee is engaging in any of the following activities, they are violating the law, and you have solid grounds to initiate legal action against the office bearers.
                  </p>

                  {/* CHECKLIST UI SECTION */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 my-8 shadow-sm">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center border border-emerald-200 mt-1">
                          <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-bold text-lg mb-1">1. Threats to Disconnect Essential Services</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            No housing society committee in India has the legal authority to disconnect water supply, electricity, or gas pipelines to an apartment, even if the owner is heavily in default on maintenance. This is considered a severe violation of fundamental rights.
                          </p>
                        </div>
                      </li>
                      
                      <li className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center border border-emerald-200 mt-1">
                          <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-bold text-lg mb-1">2. Refusal to Accept Correspondence</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            A common tactic is for the Secretary to refuse to accept physical letters or sign acknowledging receipt, hoping to claim ignorance of the dispute later. Always send critical communications via RPAD to establish an undeniable paper trail.
                          </p>
                        </div>
                      </li>

                      <li className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center border border-emerald-200 mt-1">
                          <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-bold text-lg mb-1">3. Denying Access to Books of Accounts</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            Every member has the statutory right to inspect the financial ledgers, audit reports, and minutes of meetings during designated hours. If the committee refuses access, they are hiding financial irregularities.
                          </p>
                        </div>
                      </li>
                      
                      <li className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center border border-emerald-200 mt-1">
                          <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-bold text-lg mb-1">4. Blocking Common Amenities Unilaterally</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            Preventing a member or their tenants from using the elevators, parking spaces, clubhouse, or swimming pool without following the strict disciplinary procedures outlined in the bylaws is an actionable deficiency in service.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed">
                    Documenting these specific violations forms the ammunition for your legal notice, shifting the risk entirely onto the office bearers.
                  </p>
                </div>
              </section>

              <section id="drafting-the-legal-notice" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Drafting the Legal Notice to the CHS
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    The legal notice must be addressed directly to the Chairman, Secretary, and Treasurer of the Cooperative Housing Society at their registered addresses. By naming them specifically, you pierce the veil of the committee and make them realize they face personal legal consequences.
                  </p>
                  
                  <p className="text-sm md:text-base leading-relaxed">
                    The notice must meticulously construct the grievance. If disputing an illegal transfer fee, the notice will cite the specific section of the State Act or government circular capping the premium at the statutory limit (e.g., Rs. 25,000). It will explicitly reject the demand for a "voluntary donation" as coercive and illegal, demanding the immediate issuance of the NOC within a strict 7 or 15 day deadline.
                  </p>

                  <p className="text-sm md:text-base leading-relaxed">
                    If the dispute involves maintenance calculations or arbitrary penalties, the notice will demand an immediate rectification of the ledger strictly in accordance with the registered bylaws, citing the illegality of the compound interest or discriminatory billing heads. It will firmly state that the member is ready to pay the legally valid amount under protest once the illegal charges are expunged.
                  </p>

                  <p className="text-sm md:text-base leading-relaxed">
                    The demand section must conclude with severe consequences. It will state that failure to comply will result in a formal complaint to the Deputy Registrar of Cooperative Societies seeking the dissolution of the committee for statutory violations, as well as a petition before the Consumer Court for deficiency of service claiming heavy compensation for mental agony. For ensuring the notice carries the necessary legal weight and statutory citations, using an <Link href="/online-legal-notice" className="text-[#DC2626] hover:underline font-medium">online legal notice</Link> service is highly effective against stubborn committees.
                  </p>
                </div>
              </section>

              <section id="registrar-escalation-timeline" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Registrar and Court Escalation Timeline
                </h2>
                
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Committees bank on residents backing down. Showing them you know exactly how to escalate the matter to higher authorities usually forces a rapid settlement.
                  </p>
                </div>

                {/* TIMELINE UI SECTION */}
                <div className="mt-8 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#DC2626] before:via-slate-300 before:to-transparent">
                  
                  {/* Step 1 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                      1
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Days 1 to 15: The Advocate Notice</h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        The legal notice is served via RPAD. Office bearers quickly realize that defending an illegal demand before the Registrar will require hiring their own lawyers, often out of their own pockets if the general body refuses to sanction the legal fees for an illegal act. This alone resolves many disputes.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                      2
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Days 16 to 45: Complaint to the Deputy Registrar</h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        If the committee remains stubborn, a formal complaint is lodged with the Deputy Registrar of Cooperative Societies. The Registrar holds significant statutory power and can issue direct orders compelling the society to issue the NOC or correct the billing, and can even initiate proceedings to dismiss the committee for repeated violations.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                      3
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Day 45 Onwards: Consumer Court or Civil Court</h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Simultaneously or subsequently, a petition can be filed in the Consumer Court citing deficiency of service, demanding financial compensation for the harassment caused by the illegal demands. For extreme cases involving property rights, a civil suit seeking an injunction against the society is filed.
                      </p>
                    </div>
                  </div>
                </div>

              </section>
              
              <section id="success-stories-reviews" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Success Stories &amp; Resident Reviews
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
                        <p className="font-bold text-slate-900 text-sm">{review.author}</p>
                        <p className="text-xs text-slate-500">Verified Member</p>
                      </div>
                    </div>
                  ))}
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
                          className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                          <p className="text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

            </article>

            <aside className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pl-2 scrollbar-hide">
              <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-sm font-black mb-3">Need Legal Advice?</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Stop the harassment. We draft powerful legal notices citing specific bylaws and cooperative acts to force RWA committees to drop illegal demands and penalties.
                </p>
                <button 
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="block w-full bg-[#DC2626] text-white text-center py-3 rounded-xl text-xs font-bold hover:bg-[#B91C1C] transition-colors mb-3 cursor-pointer"
                >
                  Start Legal Action
                </button>
              </div>
            </aside>

          </div>
        </div>
      </main>
      
      <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
    </>
  );
}
