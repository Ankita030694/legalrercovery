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
    question: "Can I send a legal notice to my landlord for withholding my security deposit?",
    answer: "Yes, you can legally send a formal pre-suit legal notice to your landlord if they fail to refund your security deposit after you vacate the property. The notice must be drafted by an advocate on their official letterhead, detailing the terms of your lease, the handover date, and giving the landlord exactly fifteen (15) days to refund the amount, failing which you will initiate civil or Rent Tribunal proceedings."
  },
  {
    question: "How long after vacating the property should I wait before sending a legal notice?",
    answer: "You should wait for the refund period specified in your lease agreement to expire (typically 7 to 30 days after vacating). If the agreement is silent, the Model Tenancy Act, 2021, mandates a 30-day refund window. If this period passes and the landlord continues to stall or make arbitrary deductions, you should immediately issue the formal legal notice to prevent further delays."
  },
  {
    question: "Can I claim interest on the withheld security deposit in the legal notice?",
    answer: "Yes, you can legally claim interest on the withheld amount. Under the Interest Act, 1978, you can demand interest (usually between 12% and 18% per annum) starting from the date the deposit became due or from the date the legal notice is served. Demanding interest creates additional financial pressure on the landlord to settle the dispute out of court."
  },
  {
    question: "What happens if the landlord refuses to accept the physical legal notice?",
    answer: "If the landlord intentionally evades service, the law treats this as 'deemed service' under Section 27 of the General Clauses Act, 1897. A digital delivery report backed by a BSA certificate is accepted by courts as proof that the landlord was served, preventing them from claiming they were unaware of your legal demands."
  },
  {
    question: "Do I need a registered rental agreement to send a valid legal notice?",
    answer: "No, a registered agreement is not required to send a legal notice. While unregistered agreements exceeding 12 months are inadmissible as leases, they are fully admissible in court to prove the collateral transaction of Leave and License or the payment of a security deposit. You can use your unregistered 11-month agreement, receipt logs, and WhatsApp chats to send a valid notice."
  },
  {
    question: "Can I draft and send the legal notice myself without hiring an advocate?",
    answer: "While you can send a personal demand letter or notice yourself, it is strongly advised to have the legal notice drafted and signed by an enrolled advocate. Notices served on an advocate's official letterhead carry significant statutory weight, signal your readiness to enter court, and are highly respected by Rent Authorities and civil judges, resulting in a much higher success rate."
  },
  {
    question: "What are the common deductions a landlord can legally make from the deposit?",
    answer: "A landlord can only deduct expenses that are explicitly specified in the rental agreement or caused by the tenant's negligence. This includes unpaid rent, outstanding utility bills (electricity, water, maintenance), and the cost of repairing actual physical damage (like broken doors or windows). Deductions for regular wear and tear (like faded paint or scuffed floors) are strictly illegal."
  },
  {
    question: "Can I serve a legal notice to a landlord digitally via WhatsApp and email?",
    answer: "Yes, you can serve a legal notice digitally. Digital notices served via email and WhatsApp are legally valid under the IT Act, 2000, provided they are accompanied by a Section 63 BSA Certificate (formerly Section 65B of the Evidence Act) to be admissible in court."
  },
  {
    question: "What is the limitation period for initiating legal action for a rental deposit refund?",
    answer: "Under the Limitation Act, 1963, the limitation period for filing a civil recovery suit or Rent Tribunal petition to recover your security deposit is exactly three (3) years. This clock starts ticking from the date you vacated the premises and the refund first became due. You must send the notice and file the suit before this 3-year window expires."
  },
  {
    question: "How does LegalRecovery help in serving a legal notice to my landlord?",
    answer: "LegalRecovery simplifies the entire process. We review your rental agreement and invoice logs, calculate applicable interest, connect you with our panel of advocates to draft the notice, and dispatch it digitally via verified email and WhatsApp with delivery logs and Section 63 BSA compliance, maximizing your chances of an out-of-court refund."
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
      "name": "Send Legal Notice to Landlord",
      "item": "https://www.legalrecovery.in/legal-notice-to-landlord-for-security-deposit-refund-india"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Can I Send a Legal Notice to My Landlord for Security Deposit?",
  "description": "Learn the legal steps to serve a formal legal notice to a landlord for not refunding your security deposit. Understand your rights, drafting rules, and escalation paths in India.",
  "image": "https://www.legalrecovery.in/og-landlord-notice.png",
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
  "name": "Landlord Legal Notices & Deposit Recovery Services",
  "image": "https://www.legalrecovery.in/og-landlord-notice.png",
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

export default function LandlordNoticeClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "legal-notice-statutory-basis", title: "1. Statutory Basis" },
    { id: "essential-elements-drafting", title: "2. Drafting Checklist" },
    { id: "advocate-vs-diy-notices", title: "3. Advocate vs. DIY Notices" },
    { id: "delivery-protocols-evidence", title: "4. Proof of Service" },
    { id: "landlord-defense-evaluation", title: "5. Countering Landlord Defenses" },
    { id: "lock-in-and-termination-disputes", title: "6. Lock-In & Notice Disputes" },
    { id: "post-notice-escalation-options", title: "7. Post-Notice Legal Paths" },
    { id: "legalrecovery-notice-workflow", title: "8. Automated Notice Workflow" },
    { id: "faqs", title: "FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Send Notice to Landlord", href: "/legal-notice-to-landlord-for-security-deposit-refund-india" }
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
              Tenancy Dispute Resolution India
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Can I Send a Legal Notice <span className="text-[#DC2626]">to My Landlord for the Deposit?</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Understand the legal framework, drafting prerequisites, and delivery rules to serve an advocate-backed legal notice to a landlord withholding your rental security deposit.
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
                <section id="legal-notice-statutory-basis" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. Why Demand Notices Precede Rental Recovery
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      When a landlord refuses to return a security deposit after a tenant has vacated the property, the tenant enters a stressful phase of chasing and negotiations. Landlords often stall, claiming financial difficulties, or raise arbitrary, undocumented damage claims. In such situations, verbal demands and informal messages are frequently ignored. To transition the dispute from a personal disagreement to a formal legal matter, the tenant must serve a <strong>Pre-Suit Legal Notice</strong>. Under Indian civil jurisprudence, a legal notice is not just a warning letter; it is a formal court-admissible document that establishes your cause of action and serves as a mandatory precursor to civil litigation.
                    </p>
                    <p>
                      The statutory basis of a rental recovery notice is rooted in the general principles of the <strong>Indian Contract Act, 1872</strong> and the <strong>Transfer of Property Act, 1882</strong>. Section 106 of the Transfer of Property Act governs the termination of leases, stating that in the absence of a written contract, a lease of residential property is deemed to be a lease from month to month, terminable by a 15-day notice. When a tenant serves a valid termination notice and vacates the premises, the landlord's obligation to return the deposit is triggered. If the landlord fails to refund the deposit within the agreed timeline (usually 30 days or as per the contract), they commit a material breach of the lease contract.
                    </p>
                    <p>
                      Serving a legal notice is highly recommended because it locks in your legal claims. Under the <strong>Interest Act, 1978</strong>, a creditor can claim interest on a debt only if they have made a written demand for payment, giving notice to the debtor that interest will be charged. By dispatching a formal legal notice, you establish your right to claim penal interest (usually between <strong>12% and 18% per annum</strong>) starting from the date the notice is served until the date the deposit is refunded. This interest demand creates an escalating financial penalty that forces the landlord to take your claim seriously.
                    </p>
                    <p>
                      Furthermore, the legal notice acts as a vital dispute filter. In over 75% of security deposit recovery cases, a professional legal notice drafted by an advocate is sufficient to secure a refund. Landlords are commercial property owners who value their public reputation and want to avoid the expenses, court visits, and public records associated with active litigation. Receiving a formal notice on advocate letterhead signals that the tenant is serious and prepared to enter court, which immediately encourages the landlord to negotiate an out-of-court settlement.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;A legal notice is a formal court-admissible document that establishes your cause of action. Under the Interest Act, 1978, serving this notice is a mandatory step to claim penal interest on the withheld deposit. In most cases, a professional notice is sufficient to secure a refund without court intervention.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 2 */}
                <section id="essential-elements-drafting" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. Essential Clauses in a Rental Refund Notice
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      To be effective and admissible in court, a legal notice must be drafted with absolute precision. A poorly drafted notice that contains factual errors, vague demands, or incorrect dates can be easily challenged by the landlord's counsel, weakening your position in subsequent litigation. Freelancers and tenants must ensure that their legal notice complies with a strict drafting checklist, leaving no loopholes for the landlord to exploit.
                    </p>
                    <p>
                      The first non-negotiable element is the <strong>accurate identification of the parties</strong>. The notice must state the complete name, father's name, and permanent address of both the tenant (the sender) and the landlord (the recipient). If the property is owned by multiple co-owners, the notice should be addressed to all co-owners. The second element is the <strong>details of the tenancy contract</strong>. Cite the exact execution date of the rental or Leave and License agreement, the deposit amount paid, the monthly rent, the duration of the lease, and the details of the rental property (address, flat number).
                    </p>
                    <p>
                      The third element is proving <strong>tenant compliance</strong>. You must establish that you fulfilled all your contractual obligations before vacating. The notice must specify:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-650">
                      <li>
                        The date the notice to vacate was served on the landlord and the date of termination.
                      </li>
                      <li>
                        That the tenant cleared all outstanding utility bills (electricity, water, society maintenance) up to the date of vacating, supported by payment receipts.
                      </li>
                      <li>
                        That the physical keys to the property were handed over to the landlord or their authorized representative, defining the exact date of handover.
                      </li>
                      <li>
                        That the property was left in the same condition as received, barring normal wear and tear.
                      </li>
                    </ul>
                    <p>
                      The fourth element is the <strong>explicit financial demand</strong>. Present a clear table detailing the principal deposit amount, the interest claimed, and the advocate's legal notice drafting fees. Finally, the notice must contain a <strong>15-day compliance deadline</strong> and a statement of consequences, declaring that if the landlord fails to refund the amount within 15 days, the tenant will initiate civil, criminal, or Rent Tribunal proceedings, and that the landlord will be held liable for all subsequent court fees and advocate costs.
                    </p>
                  </div>
                </section>

                {/* Section 3 */}
                <section id="advocate-vs-diy-notices" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Advocate Letterhead vs Personal Demands
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      A common question among tenants facing deposit disputes is whether they can draft and send the legal notice themselves (a DIY notice) to save costs. Under Indian civil law, any individual has the right to send a written demand or notice. However, in practice, a self-sent notice is far less effective and carries significantly less weight than a notice served on the <strong>official letterhead of an enrolled advocate</strong>. Understanding the strategic and legal differences between these two approaches is vital for a successful recovery.
                    </p>
                    <p>
                      The primary difference lies in the <strong>psychology of dispute escalation</strong>. When a landlord receives a personal email or a self-sent notice from a tenant, they often perceive it as a continuation of the informal dispute. They assume that the tenant is merely venting frustration and lacks the resources, legal knowledge, or intent to file a court case. Consequently, self-sent notices are frequently ignored or met with evasive replies. In contrast, receiving a formal document on an advocate's letterhead, complete with the advocate's signature, registration number, and stamp, changes the landlord's perception. It signals that the tenant has already invested in legal representation, obtained professional counsel, and is prepared to file a suit immediately.
                    </p>
                    <p>
                      Legally, an advocate notice is drafted with precise statutory citations, referencing the Model Tenancy Act, the state Rent Control Act, the Interest Act, 1978, and the Code of Civil Procedure. Advocates are trained to present the facts in a structured, court-admissible manner, avoiding emotional arguments and focusing strictly on the contractual breach. This structure makes the advocate notice an excellent piece of evidence in subsequent litigation, as it clearly defines your cause of action from day one.
                    </p>
                    <p>
                      While hiring a traditional senior advocate can be expensive, modern tech-enabled legal platforms like LegalRecovery have democratized access to legal dispatches. We connect tenants with a panel of qualified advocates who review your case and draft professional notices on their letterhead for a transparent, flat fee. This approach provides tenants with the full strategic weight of a professional advocate notice at a fraction of the cost, making it the most efficient way to initiate your rental deposit recovery.
                    </p>
                  </div>
                </section>

                {/* Section 4 */}
                <section id="delivery-protocols-evidence" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Proof of Service: Digital Dispatch via Email and WhatsApp
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      In court, your legal notice is only as good as your ability to prove that the landlord received it. If a landlord can claim they never received the notice, your case can face significant procedural delays, as courts will not entertain recovery suits without proof that the defendant was given a reasonable opportunity to comply. Therefore, tenants must follow strict delivery protocols to establish an undeniable <strong>Proof of Service</strong>.
                    </p>
                    <p>
                      The primary delivery channel is digital dispatch via <strong>verified email and WhatsApp</strong>. You must keep the delivery reports. Once the notice is delivered, preserve the read receipts showing &quot;Read.&quot; If the landlord intentionally evades service, do not worry. Under the law, if a notice is addressed correctly, it is legally deemed as served. The digital tracking report is accepted by courts as proof of service, and the landlord cannot claim ignorance.
                    </p>
                    <p>
                      To ensure absolute service, the notice should also be served digitally via email and WhatsApp. Digital service is recognized under Section 4 and 5 of the Information Technology Act, 2000. However, to present digital notices as evidence in court, you must comply with the strict rules of the <strong>Bharatiya Sakshya Adhiniyam (BSA), 2023</strong>. Any printout or screenshot of an email sent or a WhatsApp chat showing double blue ticks must be accompanied by a signed <strong>Section 63 BSA Certificate</strong>.
                    </p>
                    <p>
                      The Section 63 BSA Certificate is a mandatory declaration confirming the integrity of the electronic record. It must detail the specifications of the device used (laptop/phone), attest that it was working properly, and include the cryptographic SHA-256 hash values of the screenshots or files. At LegalRecovery, we handle this entire workflow: we serve the digital notice with verified email/WhatsApp tracking, and automatically generate the pre-certified Section 63 BSA Certificate for our clients, creating an airtight proof of service for court.
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
                      <h4 className="font-extrabold text-sm text-slate-900 uppercase tracking-wider text-[#DC2626]">
                        Legal Service Delivery Checklist
                      </h4>
                      <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-600">
                        <li>
                          <strong>Digital Delivery Logs:</strong> Preserve the email read receipts and WhatsApp delivery logs generated by our platform.
                        </li>
                        <li>
                          <strong>Digital Delivery Report:</strong> Print the digital tracking status showing successful delivery.
                        </li>
                        <li>
                          <strong>SMTP Email logs:</strong> Verify that the email notice did not bounce and was delivered.
                        </li>
                        <li>
                          <strong>WhatsApp Read Receipts:</strong> Take timestamped screenshots showing the double blue ticks.
                        </li>
                        <li>
                          <strong>Section 63 BSA Compliance:</strong> Accompany all digital proofs with a signed system certificate and SHA-256 file hashes.
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section 5 */}
                <section id="landlord-defense-evaluation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Countering Wear &amp; Tear Repainting Claims
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      Once the landlord receives the legal notice, they will typically consult their own legal counsel or respond directly with a series of objections to justify withholding the deposit. The most common defenses raised by landlords are claiming deductions for repainting the property, professional deep cleaning, or repairing alleged damages. Tenants must be prepared to counter these defenses with clear, legally backed arguments, preventing the landlord from making arbitrary deductions.
                    </p>
                    <p>
                      The first defense is the <strong>mandatory painting charge</strong>. Many landlords automatically deduct one month's rent or a fixed sum (e.g., ₹20,000) for repainting the flat, claiming that the tenant left the walls dirty. Under Indian tenancy laws, wall painting is classified as <strong>normal wear and tear</strong> resulting from regular, reasonable usage. Maintenance and periodic painting of the property are the landlord's statutory duties. A landlord cannot deduct painting charges from your security deposit unless the rental agreement explicitly contains a clause stating that a specific painting charge will be deducted upon vacating, or the tenant has caused actual damage (like deep stains, drawings, or major wall damage). If the contract is silent, you must reject this deduction.
                    </p>
                    <p>
                      The second defense is <strong>undocumented property damage</strong>. Landlords often claim that fixtures, appliances, or tiles were damaged by the tenant and deduct large sums without providing any proof. To counter this, you must demand that the landlord present an <strong>itemized list of damages</strong> along with <strong>actual tax invoices and repair bills</strong>. Under civil law, a landlord cannot make deductions based on arbitrary estimates. If they claim a door was broken, they must provide the invoice for the new door and the carpenter's receipt. Furthermore, you can present your move-out photos and videos to prove that the property was handed over in good condition, defeating their false claims.
                    </p>
                    <p>
                      The legal notice serves as a highly effective tool to counter these defenses. It locks the landlord into a specific position. If the landlord responds to the notice with a series of vague, unverified damage claims, their reply acts as an admission that they are withholding the deposit. If they cannot produce actual repair bills in court to support these claims, the judge will treat the deductions as arbitrary and illegal, allowing the tenant to secure a quick recovery decree.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;Landlords cannot make arbitrary deductions for painting or cleaning without a contract clause. Painting is classified as normal wear and tear under tenancy laws. In your legal notice, you must demand that the landlord justify any deductions with actual tax invoices, failing which the deductions are legally void.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 6 */}
                <section id="lock-in-and-termination-disputes" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Lock-In Clauses &amp; Notice Period Penalties
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      Another frequent source of conflict in security deposit disputes relates to lease terminations before the contract period ends. Landlords often attempt to forfeit the entire security deposit, claiming that the tenant violated the <strong>Lock-In Period Clause</strong> or failed to serve the <strong>Notice Period Clause</strong> correctly. To protect your deposit, you must understand your contract terms and maintain a clear, documented record of your termination process.
                    </p>
                    <p>
                      A lock-in period is a contract clause stating that neither the landlord nor the tenant can terminate the agreement for a minimum duration (e.g., 6 months). If a tenant terminates the contract and vacates during the lock-in period, the agreement may specify that the security deposit will be forfeited as a penalty. However, under Section 73 and 74 of the Indian Contract Act, 1872, a landlord cannot claim a penalty that exceeds the actual loss they suffered. If the agreement is terminated mutually, or if the landlord commits a material breach (such as failing to maintain basic amenities or harassing the tenant), the lock-in clause is waived, and the landlord has no right to forfeit the deposit.
                    </p>
                    <p>
                      Similarly, the tenant must strictly comply with the <strong>Notice Period Clause</strong>. If the agreement requires a 1-month written notice to terminate, the tenant must serve this notice in writing (via email or WhatsApp) and preserve the record showing the landlord's receipt. If you serve the notice on May 1st and vacate on May 31st, you have complied with the contract. If you vacate early, the landlord is entitled to deduct rent only for the remaining notice days from the deposit. They cannot forfeit the entire deposit if the outstanding rent is less than the deposit value.
                    </p>
                    <p>
                      In your legal notice, you must present the complete chronological proof of your notice compliance. Attach the email or WhatsApp chat where you served the notice to vacate and the landlord's acknowledgment. Show that you vacated on the correct date and handed over the keys. This documentation defeats the landlord's defense of contractual violation, establishing that you are legally entitled to the full refund of the remaining deposit.
                    </p>
                  </div>
                </section>

                {/* Section 7 */}
                <section id="post-notice-escalation-options" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    7. Rent Tribunals vs Order 37 Summary Suits
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      If the 15-day notice period expires and the landlord refuses to refund the security deposit or ignores the notice entirely, you must proceed to the next stage of escalation: initiating formal judicial action. Depending on your location and the nature of your rental agreement, you have two primary judicial pathways: approaching the specialized <strong>Rent Authority / Rent Court</strong> under tenancy laws, or filing a <strong>Summary Suit</strong> in the civil court.
                    </p>
                    <p>
                      If the property is located in a state that has implemented the <strong>Model Tenancy Act, 2021</strong> (such as Uttar Pradesh, Tamil Nadu, Andhra Pradesh, and others), the correct forum is the local <strong>Rent Authority</strong>. Filing a complaint before the Rent Authority is a fast-track process. The Authority will issue summons, conduct summary hearings, and pass an order directing the landlord to refund the deposit with interest. Under the MTA, appeals from the Rent Authority are heard by the <strong>Rent Tribunal (Rent Court)</strong>, which is legally mandated to dispose of cases within <strong>sixty (60) days</strong>. This makes Rent Tribunals the fastest and most cost-effective recovery forum for tenants.
                    </p>
                    <p>
                      If your state does not follow the MTA, or if your rental is a commercial property that falls outside Rent Control Acts, the primary civil remedy is filing a <strong>Summary Suit</strong> under <strong>Order XXXVII (Order 37) of the Code of Civil Procedure, 1908 (CPC)</strong>. A summary suit is a fast-track civil recovery proceeding designed for liquidated money claims arising out of written agreements. A signed Leave and License agreement satisfies the Order 37 requirement of a written contract.
                    </p>
                    <p>
                      In a Summary Suit, the landlord does not have an automatic right to defend the case. They must enter an appearance within <strong>10 days</strong> of receiving the summons, failing which the court immediately passes a judgment in favor of the tenant. If they appear, they must show a genuine, triable defense to get &quot;leave to defend.&quot; If their deductions are arbitrary and lack repair bills, the court will deny leave and pass a recovery decree immediately. While civil suits require paying ad valorem court fees, the court has the statutory power under Section 35 CPC to award these costs to the successful tenant.
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse border border-slate-200">
                        <thead>
                          <tr className="bg-slate-50 text-slate-900 font-extrabold text-xs uppercase tracking-wider">
                            <th className="border border-slate-200 p-3">Statutory Feature</th>
                            <th className="border border-slate-200 p-3">Rent Authority (Model Tenancy Act)</th>
                            <th className="border border-slate-200 p-3">Civil Court (CPC Order 37 Summary Suit)</th>
                          </tr>
                        </thead>
                        <tbody className="text-xs sm:text-sm text-slate-650 font-medium">
                          <tr>
                            <td className="border border-slate-200 p-3 font-bold text-slate-900">Timeline for Disposal</td>
                            <td className="border border-slate-200 p-3 text-emerald-700 font-bold">MTA mandates disposal within 60 days of filing</td>
                            <td className="border border-slate-200 p-3">Summary procedure (usually decided in 6-12 months)</td>
                          </tr>
                          <tr>
                            <td className="border border-slate-200 p-3 font-bold text-slate-900">Filing Costs</td>
                            <td className="border border-slate-200 p-3 text-emerald-700 font-bold">Nominal filing fees</td>
                            <td className="border border-slate-200 p-3">Ad valorem court fees (varies from 1% to 10% by state)</td>
                          </tr>
                          <tr>
                            <td className="border border-slate-200 p-3 font-bold text-slate-900">Agreement Requirement</td>
                            <td className="border border-slate-200 p-3 text-emerald-700 font-bold">Requires written agreement registered with Authority</td>
                            <td className="border border-slate-200 p-3">Accepts unregistered 11-month Leave & License agreements</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                {/* Section 8 */}
                <section id="legalrecovery-notice-workflow" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    8. Rapid Rental Deposit Notice Dispatches
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      While the law provides tenants with powerful rights to recover their security deposits, drafting a legal notice, calculating interest under the Interest Act, and proving service can be complicated. Landlords often ignore informal notices, assuming that tenants will not follow through with court action. To ensure your recovery action is successful, you must prepare and serve your notice with absolute legal precision. This is where <strong>LegalRecovery</strong> provides tech-enabled, professional support.
                    </p>
                    <p>
                      Our platform is designed specifically to simplify the legal notice workflow for tenants:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-650">
                      <li>
                        <strong>Agreement Audit:</strong> We review your Leave and License agreement, bank receipts, and notice logs to verify that your case is legally sound and free from loopholes.
                      </li>
                      <li>
                        <strong>Advocate Drafting:</strong> We connect you with our panel of qualified advocates who draft a professional legal notice on their letterhead, citing the Model Tenancy Act, the Interest Act, 1978, and civil procedures.
                      </li>
                      <li>
                        <strong>Digital Delivery Dispatch:</strong> We serve the notice digitally via verified email and WhatsApp to the landlord with verified tracking logs.
                      </li>
                      <li>
                        <strong>Section 63 BSA Compliance:</strong> We prepare the required Section 63 BSA Certificate for all digital dispatches, ensuring your digital proof of service is immediately admissible in court.
                      </li>
                    </ul>
                    <p>
                      By partnering with LegalRecovery, you combine professional legal expertise with advanced tracking technology. We handle the administrative and legal complexities, allowing you to recover your security deposit securely and without the stress of direct landlord confrontation. If your landlord is refusing to return your security deposit, use our automated platform today to draft your legal notice and secure your refund.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;Serving a legal notice via LegalRecovery ensures that your demand is backed by professional advocate letterheads, precise interest calculations, and verified tracking dispatches. By maintaining an airtight legal file, you maximize your chances of securing an immediate refund.&quot;
                    </div>
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
                      <h4 className="font-extrabold text-xs text-slate-900">— Rashmi Sen (Bangalore)</h4>
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
                            <div className="px-4 pb-4 pt-0 text-xs sm:text-sm text-slate-650 leading-relaxed pl-6 border-t border-slate-100 pt-3 bg-[#F8F9FB]/40 text-left">
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
              <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-slate-800 relative overflow-hidden text-left">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-sm font-black mb-3">Recover Rental Deposit</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Serve a formal advocate-backed legal notice to your landlord for withholding your security deposit.
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
