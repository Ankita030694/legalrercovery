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
    question: "Can a freelancer or independent consultant in India legally register as an MSME?",
    answer: "Yes, freelancers, independent consultants, and software developers can legally register as a Micro Enterprise under the MSME category. By obtaining a free Udyam Registration online using their Aadhaar and PAN, they are officially recognized as a service-provider micro-enterprise under the MSMED Act, 2006, unlocking full delayed payment protections."
  },
  {
    question: "What is the official government portal for freelancers to file delayed payment cases?",
    answer: "The official government portal is the MSME Samadhaan portal (samadhaan.msme.gov.in). Registered freelancers who hold an active Udyam certificate can log in with their registration details and file an online complaint against defaulting clients. The portal routes the dispute to the local Micro and Small Enterprise Facilitation Council (MSEFC) for mediation and arbitration."
  },
  {
    question: "What is the maximum payment timeline allowed under Section 15 of the MSMED Act?",
    answer: "Under Section 15 of the MSMED Act, the payment timeline agreed upon in writing between a freelancer (supplier) and a client (buyer) cannot exceed forty-five (45) days from the date of work acceptance. If there is no written contract, the payment must be made within fifteen (15) days. Any contract clause attempting to specify a payment window longer than 45 days is legally void."
  },
  {
    question: "How is the delayed payment interest calculated under Section 16 of the MSMED Act?",
    answer: "Section 16 mandates that if a buyer delays payment beyond the 45-day statutory limit, they must pay compound interest with monthly rests on the outstanding principal. The interest rate is fixed at exactly three times the bank rate notified by the Reserve Bank of India (RBI). In practice, this punitive rate ranges from 18% to 22% per annum, starting automatically from the day of default."
  },
  {
    question: "Is the MSME interest paid by the client tax-deductible for them?",
    answer: "No. Under Section 23 of the MSMED Act, 2006, any interest paid by a buyer to a supplier for delayed payments is strictly non-deductible under the Income Tax Act, 1961. This means the client cannot claim the interest payment as a business expense to reduce their tax liability, creating a double financial penalty that forces them to settle."
  },
  {
    question: "Can I file an MSME complaint retrospectively if I got my Udyam registration after completing the work?",
    answer: "No. The Supreme Court of India in landmark rulings (like Silpi Industries) has held that the benefits of the MSMED Act are prospective. A freelancer must hold an active Udyam Registration at the time of executing the contract or delivering the services to be eligible to file a complaint on the Samadhaan portal. Retrospective registrations for past completed projects are generally not accepted."
  },
  {
    question: "What happens if a corporate client refuses to attend the MSEFC conciliation meetings?",
    answer: "If the client ignores the MSEFC summons or refuses to participate in conciliation, the conciliation is declared failed. The Council does not dismiss the case; instead, under Section 18(3) of the Act, it automatically terminates conciliation and initiates arbitration. The Council will either arbitrate the dispute itself or refer it to an institutional arbitration center to pass a binding award."
  },
  {
    question: "How does Section 19 prevent clients from delaying the execution of an MSEFC award?",
    answer: "Section 19 of the MSMED Act mandates that no court shall entertain an appeal or application to set aside an MSEFC award unless the buyer (the client) first deposits seventy-five percent (75%) of the awarded amount in court. This strict deposit requirement prevents corporate clients from filing frivolous appeals to tie up the freelancer's money in court for years."
  },
  {
    question: "Are individual clients (retail consumers) subject to the MSME delayed payment rules?",
    answer: "No, the MSMED Act delayed payment provisions apply only to 'buyers' who purchase goods or services from MSEs in a commercial context. Retail consumers availing of services in their personal capacity (e.g., hiring a freelance wedding photographer) are not classified as commercial buyers under the Act. MSME Samadhaan is designed exclusively for B2B invoice recovery."
  },
  {
    question: "Does LegalRecovery help freelancers manage their MSME Samadhaan complaints?",
    answer: "Yes, LegalRecovery guides freelancers through the entire process. We review your invoices and Udyam details to verify compliance, draft formal MSME-compliant legal notices (which often lead to settlements before filing), calculate the compound interest under Section 16, and assist you in filing your claim on the Samadhaan portal."
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
      "name": "Guides",
      "item": "https://www.legalrecovery.in/guides"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "MSME Act Freelancer Guide",
      "item": "https://www.legalrecovery.in/how-does-the-micro-small-and-medium-enterprises-act-help-freelancers-recover-overdue-payments-in-india"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How the MSME Act Helps Freelancers Recover Overdue Payments in India",
  "description": "Understand the power of the MSMED Act, 2006 for freelancers in India. Learn about Udyam registration, 45-day payment limits, 3x RBI interest, and the MSME Samadhaan portal.",
  "image": "https://www.legalrecovery.in/og-freelancer-msme.png",
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
  "name": "Freelancer MSME Recovery & Facilitation Council Notices",
  "image": "https://www.legalrecovery.in/og-freelancer-msme.png",
  "description": "Expert legal notices and MSME Samadhaan portal filing support for Udyam-registered freelancers and gig workers in India.",
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

export default function FreelancerMSMEClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "msmed-act-legislative-framework", title: "1. Legislative Shield" },
    { id: "udyam-registration-prerequisites", title: "2. Udyam Registration" },
    { id: "section-15-payment-timelines", title: "3. The 45-Day Payment Limit" },
    { id: "section-16-compound-interest", title: "4. 3x RBI Compound Interest" },
    { id: "msme-samadhaan-filing-process", title: "5. Samadhaan Online Filing" },
    { id: "msefc-conciliation-and-arbitration", title: "6. MSEFC Facilitation Process" },
    { id: "section-19-appeal-restrictions", title: "7. Appeal Restrictions" },
    { id: "legalrecovery-msme-integration", title: "8. Automated MSME Recovery" },
    { id: "faqs", title: "FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Guides", href: "/guides" },
    { label: "MSME Act Freelancer Guide", href: "/how-does-the-micro-small-and-medium-enterprises-act-help-freelancers-recover-overdue-payments-in-india" }
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
              MSME Protection for Gig Workers in India
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              How the MSME Act Protects <span className="text-[#DC2626]">Freelancers from Delayed Payments</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              A comprehensive guide for Indian freelancers on leveraging the MSMED Act, 2006, Udyam Registration, and the MSME Samadhaan portal to recover unpaid commercial invoices.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer"
            >
              Start Recovery Now
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
                
                {/* Section 1 */}
                <section id="msmed-act-legislative-framework" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. The Statutory Shield: Understanding the MSMED Act, 2006 for Independent Contractors
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      The gig economy in India has seen exponential growth over the past decade, yet freelancers and independent contractors continue to operate in a structural vacuum, lacking the labor protections enjoyed by formal employees. If a client defaults on payment, a freelancer cannot approach the Labour Commissioner or file a complaint under labor laws. However, many freelancers are unaware that they possess a powerful statutory shield that matches or exceeds traditional labor protections: the <strong>Micro, Small and Medium Enterprises Development (MSMED) Act, 2006</strong>. This Act was designed specifically by the Parliament of India to protect small suppliers of goods and services from the financial dominance and delayed payment habits of large corporate buyers.
                    </p>
                    <p>
                      Under the MSMED Act, the government classifies businesses based on their investment and turnover. To qualify for the protective provisions of the Act, a freelancer or independent consultant can register as a <strong>Micro Enterprise</strong> in the service sector. The revised guidelines define a Micro Enterprise as any entity with an investment in plant, machinery, or equipment <strong>not exceeding ₹1 Crore</strong> and an annual turnover <strong>not exceeding ₹5 Crore</strong>. Since almost all individual freelancers, software developers, writers, and graphic designers operate well within these financial limits, they are perfectly eligible to seek classification as a Micro Enterprise. By obtaining this status, they are no longer viewed in the eyes of the law as vulnerable individuals, but as registered commercial suppliers holding valuable statutory rights.
                    </p>
                    <p>
                      The core strength of the MSMED Act lies in its definition of a <strong>&quot;Supplier&quot;</strong> under <strong>Section 2(n)</strong>. The Act states that a supplier means any micro or small enterprise which has filed a memorandum with the authority (which is now the Udyam Registration). When a registered freelancer enters into an agreement with a corporate client, the relationship is legally treated as a transaction between a protected MSME Supplier and a commercial Buyer. If the buyer defaults on their payment obligations, the MSMED Act overrides standard contract law. It establishes a specialized, fast-track dispute resolution council and mandates severe financial penalties that bypass the slow, costly procedures of traditional civil courts.
                    </p>
                    <p>
                      Independent contractors must understand that the MSMED Act was enacted to address the systemic issue of delayed payments, which frequently causes cash-flow crises for small businesses. By organizing your freelance practice under this statutory framework, you gain access to the government's official debt recovery machinery. Corporate clients who are accustomed to ignoring freelancer follow-up emails are forced to respond when confronted with the statutory provisions of the MSMED Act, making this registration one of the most important administrative steps an Indian freelancer can take to protect their livelihood.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;Freelancers in India are not legally defenseless. By registering as a Micro Enterprise under the MSMED Act, 2006, independent contractors gain access to powerful government portal recoveries, strict 45-day payment caps, and monthly compounded interest penalties at three times the RBI bank rate.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 2 */}
                <section id="udyam-registration-prerequisites" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. Udyam Registration: Structuring the Freelancer's Digital Identity
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      To claim the benefits of the MSMED Act, a freelancer must possess a valid registration. The Ministry of MSME has simplified this process by introducing the <strong>Udyam Registration Portal</strong>. The Udyam registration is a completely online, paperless, and free process that provides a unique Udyam Registration Number (URN) and a digital Udyam Certificate. To register, an individual freelancer only needs an Aadhaar card, a PAN card, and a bank account. For sole proprietors, the Aadhaar must belong to the proprietor. The system is linked to the databases of the Income Tax and GST portals, automatically verifying your business turnover and investment details.
                    </p>
                    <p>
                      During the Udyam registration process, freelancers must pay close attention to the <strong>NIC (National Industrial Classification) Codes</strong>. These codes classify your business activities. As a freelancer, you must select the codes that match your professional services. For example, software developers and IT consultants should select codes under Division 62 (Computer programming, consultancy, and related activities). Graphic designers, copywriters, and marketing consultants should select codes under Division 73 (Advertising and market research) or Division 74 (Other professional, scientific, and technical activities). Choosing the correct NIC codes is vital, as it establishes your identity as a service-provider micro-enterprise in the eyes of the Facilitation Council.
                    </p>
                    <p>
                      A critical legal limitation that freelancers must keep in mind is the <strong>timing of the registration</strong>. The Supreme Court of India, in a series of landmark judgments (most notably in <em>Silpi Industries v. Kerala State Road Transport Corporation</em>), has ruled that the provisions of the MSMED Act apply prospectively. This means that a freelancer must hold an active Udyam Registration <strong>at the time the contract was executed or when the services were rendered</strong> to claim the benefits of the Act. If you deliver a project, experience a payment default, and then apply for an Udyam certificate to file a complaint, the MSEFC will reject your application for that specific dispute. You cannot apply the registration retrospectively.
                    </p>
                    <p>
                      This makes it imperative for all gig workers in India to secure their Udyam registration at the very start of their freelance career, before taking on clients. Even if you operate as an unregistered individual, obtaining an Udyam certificate takes less than 30 minutes and does not require a formal office space; you can register using your home address as the unit location. Having this digital certificate ready is the foundation of your legal safety net, ensuring that every project you undertake from that day forward is protected by the strict payment rules of the MSMED Act.
                    </p>
                  </div>
                </section>

                {/* Section 3 */}
                <section id="section-15-payment-timelines" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. The Forty-Five Day Mandate: Analyzing Section 15 Payment Deadlines
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      Once a freelancer is registered on the Udyam portal, all their commercial transactions with business clients are governed by the strict statutory timelines laid down under <strong>Section 15 of the MSMED Act, 2006</strong>. In standard freelance agreements, corporate clients frequently insert payment terms like &quot;Net 60,&quot; &quot;Net 90,&quot; or even &quot;Payment upon client approval of subsequent project phases.&quot; These clauses allow corporate buyers to delay payments for months, using the freelancer as an interest-free source of working capital. Section 15 of the MSMED Act completely neutralizes these exploitative clauses.
                    </p>
                    <p>
                      The statutory mandate of Section 15 is absolute. It states that where any supplier supplies any goods or renders any services to any buyer, the buyer shall make payment therefor on or before the date agreed upon between him and the supplier in writing. Crucially, the section adds a strict proviso: <strong>provided that in no case shall the period of agreement agreed upon in writing between the supplier and the buyer exceed forty-five (45) days</strong> from the day of acceptance or the day of deemed acceptance.
                    </p>
                    <p>
                      This means that even if a freelancer signs a contract that explicitly states payments will be made in 90 days, that clause is <strong>legally void</strong> under Section 15. The contract terms are overridden by the statute, and the payment window is automatically capped at <strong>45 days</strong>. If the contract is silent on the payment timeline, or if the agreement was oral, the statutory payment window is even shorter: the buyer must clear the dues within exactly <strong>fifteen (15) days</strong> from the date of work delivery.
                    </p>
                    <p>
                      To establish the exact start date of this 45-day window, the Act defines the <strong>&quot;Day of Acceptance&quot;</strong> and the <strong>&quot;Day of Deemed Acceptance&quot;</strong>. The day of acceptance is the day when the buyer receives the goods or services and acknowledges them without objection. If the client has objections regarding the quality of the work, they must communicate those objections in writing within <strong>15 days</strong> of receiving the deliverables. If they fail to raise any written objection within 15 days, the work is legally treated as accepted. The date of delivery becomes the &quot;Day of Deemed Acceptance,&quot; and the 45-day countdown begins. This prevents clients from raising vague, retrospective quality issues months later as a pretext to avoid paying.
                    </p>
                  </div>
                </section>

                {/* Section 4 */}
                <section id="section-16-compound-interest" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Punitive Interest Penalties: Section 16 Interest at Three Times RBI Rate
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      The most lethal mechanism of the MSMED Act is the interest penalty governed by <strong>Section 16</strong>. If a client fails to clear a registered freelancer's invoice within the statutory 45-day (or 15-day) window, they do not just owe the principal amount. Section 16 imposes a highly punitive interest liability that accrues automatically, overriding any contract terms or simple interest rates that might have been agreed upon in the contract.
                    </p>
                    <p>
                      The statutory interest under Section 16 has three unique characteristics that make it exceptionally severe for defaulting buyers:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-650">
                      <li>
                        <strong>Three Times the RBI Rate:</strong> The interest rate is fixed at exactly <strong>three times the bank rate</strong> notified by the Reserve Bank of India (RBI). The RBI bank rate is generally higher than standard savings or commercial lending rates. Consequently, three times this rate usually amounts to between <strong>18% and 22% per annum</strong>.
                      </li>
                      <li>
                        <strong>Compound Interest with Monthly Rests:</strong> Unlike civil courts that typically award simple interest at the end of a multi-year trial, Section 16 mandates <strong>compound interest calculated with monthly rests</strong>. This means that at the end of every 30 days, the unpaid interest is added to the principal, and the next month's interest is calculated on this cumulative amount, causing the debt to grow exponentially.
                      </li>
                      <li>
                        <strong>Automatic Accrual:</strong> The interest starts accruing automatically from the day immediately following the statutory payment deadline (i.e., on the 46th day after work delivery), without requiring the freelancer to send a separate demand notice.
                      </li>
                    </ul>
                    <p>
                      This penalty is reinforced by <strong>Section 23 of the MSMED Act</strong>. Under this provision, any interest paid by a buyer to an MSME supplier for delayed payments is strictly <strong>non-deductible</strong> under the Income Tax Act, 1961. This means the client cannot show the interest paid as a business expense to reduce their corporate tax liability. For corporate clients and private limited companies, this double financial penalty—the high compound interest rate combined with the tax non-deductibility—creates an enormous financial liability that their auditors and CFOs will strongly advise them to avoid, giving freelancers massive leverage during settlement negotiations.
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse border border-slate-200">
                        <thead>
                          <tr className="bg-slate-50 text-slate-900 font-extrabold text-xs uppercase tracking-wider">
                            <th className="border border-slate-200 p-3">Recovery Forum</th>
                            <th className="border border-slate-200 p-3">Interest Calculation Method</th>
                            <th className="border border-slate-200 p-3">Income Tax Deductibility</th>
                          </tr>
                        </thead>
                        <tbody className="text-xs sm:text-sm text-slate-650 font-medium">
                          <tr>
                            <td className="border border-slate-200 p-3 font-bold text-slate-900">Civil Court (CPC Order 37)</td>
                            <td className="border border-slate-200 p-3">Simple Interest (typically 6% - 12% per annum at court's discretion)</td>
                            <td className="border border-slate-200 p-3 text-red-700 font-bold">Tax-deductible for the buyer</td>
                          </tr>
                          <tr>
                            <td className="border border-slate-200 p-3 font-bold text-slate-900">MSME Facilitation Council (MSEFC)</td>
                            <td className="border border-slate-200 p-3 text-emerald-700 font-bold">Compound Interest with monthly rests at 3x RBI Bank Rate (18% - 22%)</td>
                            <td className="border border-slate-200 p-3 text-emerald-700 font-bold">Strictly Non-deductible under Section 23</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                {/* Section 5 */}
                <section id="msme-samadhaan-filing-process" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Filing on MSME Samadhaan: The Step-by-Step Online Complaint Process
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      If a client fails to clear your invoices within the 45-day window, you can initiate formal recovery through the government's official <strong>MSME Samadhaan Portal (samadhaan.msme.gov.in)</strong>. This is a centralized, online delayed payment monitoring system managed by the Ministry of MSME. The portal allows registered freelancers to bypass the complex filing procedures of civil courts, submitting their claims directly from their digital dashboard.
                    </p>
                    <p>
                      Before logging into the portal, you must compile your <strong>claim files</strong>. Gather your active Udyam Certificate, the unpaid invoices, the written agreement or purchase order, and clear proof of work delivery (such as email transmission logs or git commit histories). You must also prepare a detailed <strong>interest calculation sheet</strong> showing the principal invoice amounts, the dates of default, the RBI bank rates for the relevant months, and the compounded interest accrued up to the date of filing.
                    </p>
                    <p>
                      The filing process on the Samadhaan portal involves five key steps:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-650">
                      <li>
                        <strong>Login:</strong> Log in to the Samadhaan portal using your Udyam Registration Number and the mobile number associated with your Aadhaar card (requires OTP verification).
                      </li>
                      <li>
                        <strong>Buyer Details:</strong> Enter the complete details of the defaulting buyer, including their company name, PAN, GSTIN, registered office address, and contact information.
                      </li>
                      <li>
                        <strong>Upload Invoices:</strong> Upload PDF copies of the unpaid invoices (up to 5 invoices can be uploaded in a single application) along with the contract files and delivery receipts.
                      </li>
                      <li>
                        <strong>Claim Value:</strong> Enter the exact principal amount and the calculated compound interest under Section 16.
                      </li>
                      <li>
                        <strong>Submit:</strong> Review and submit the application. The portal will automatically generate a case number.
                      </li>
                    </ul>
                    <p>
                      Once the application is submitted, the Samadhaan portal automatically dispatches an email and SMS notification to the defaulting client (buyer), informing them that a delayed payment complaint has been registered against them. This notice acts as a significant warning. The client is given <strong>15 days</strong> to respond or settle the matter directly with the freelancer. The client can view the details of the claim and the rising compound interest liability. In many cases, the threat of being reported on a public government database prompts corporate clients to clear the principal dues immediately, resolving the dispute before it escalates to a formal council hearing.
                    </p>
                  </div>
                </section>

                {/* Section 6 */}
                <section id="msefc-conciliation-and-arbitration" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. The MSEFC Tribunal: Navigating Conciliation and Arbitration Proceedings
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      If the client ignores the initial Samadhaan notice or fails to settle the dues within 15 days, the application is reviewed by the local <strong>Micro and Small Enterprise Facilitation Council (MSEFC)</strong>. The MSEFC is a quasi-judicial tribunal established in every state and union territory, holding the powers of an arbitrator. Once the Council admits the application, the complaint is converted into an active case, and the Council initiates a structured two-stage dispute resolution process.
                    </p>
                    <p>
                      The first stage is <strong>Conciliation</strong>, governed by <strong>Section 18(2) of the MSMED Act</strong>. The Council summons both the freelancer and the client to attend conciliation meetings (which are frequently conducted online). The goal of conciliation is to help the parties reach a mutual, amicable settlement. The Council reviews the invoices, tax logs, and delivery receipts. If the client admits the debt, the Council facilitates a structured payment schedule. If a settlement is reached, a binding conciliation agreement is signed, and the client must pay accordingly.
                    </p>
                    <p>
                      If the client fails to attend the meetings, or if the conciliation fails because the client raises frivolous quality disputes, the Council does not dismiss the case. Under <strong>Section 18(3)</strong>, the Council terminates the conciliation and automatically enters the <strong>Arbitration</strong> stage. The Council will either act as the arbitrator itself or refer the dispute to an institutional arbitration center (such as the Delhi International Arbitration Centre or the Bangalore International Mediation Centre).
                    </p>
                    <p>
                      The arbitration proceedings are conducted under the Arbitration and Conciliation Act, 1996. Both the freelancer and the client's legal team must present their formal statements of claim and defense. The arbitrator evaluates the contract, work delivery proofs, and tax records. At the end of the proceedings, the arbitrator passes a formal <strong>Arbitral Award</strong>. This award has the same legal status as a decree passed by a civil court, meaning it is legally binding and can be executed directly through local civil courts to attach the client's bank accounts or business assets.
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
                      <h4 className="font-extrabold text-sm text-slate-900 uppercase tracking-wider text-[#DC2626]">
                        Step-by-Step MSEFC Dispute Resolution Workflow
                      </h4>
                      <ol className="list-decimal pl-6 space-y-2 text-xs sm:text-sm text-slate-650">
                        <li>
                          <strong>Online Filing:</strong> Freelancer uploads invoices and contract trail on the Samadhaan portal.
                        </li>
                        <li>
                          <strong>15-Day Evasion Notice:</strong> Portal dispatches automated notices to the client to settle the dues.
                        </li>
                        <li>
                          <strong>MSEFC Admission:</strong> Council reviews the case files and admits the application as an active dispute.
                        </li>
                        <li>
                          <strong>Conciliation:</strong> Mediation meetings conducted by the Council to explore amicable settlement.
                        </li>
                        <li>
                          <strong>Arbitration:</strong> Fast-track commercial arbitration initiated under the Arbitration Act, 1996.
                        </li>
                        <li>
                          <strong>Binding Award:</strong> Arbitrator passes a decree for the principal amount plus 3x RBI compound interest.
                        </li>
                      </ol>
                    </div>
                  </div>
                </section>

                {/* Section 7 */}
                <section id="section-19-appeal-restrictions" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    7. Defeating Buyer Evasion: Section 19 and the 75% Deposit Requirement
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      In traditional civil litigation, corporate defendants often use a common evasion tactic: if they lose a case in the lower court, they file an appeal in the High Court, delaying the execution of the decree for years while the freelancer's funds remain stuck. The MSMED Act contains a highly effective provision designed specifically to defeat this tactic: <strong>Section 19</strong>.
                    </p>
                    <p>
                      Section 19 mandates that no court shall entertain any application or appeal to set aside any decree, award, or order passed by the MSEFC unless the buyer (the client) <strong>first deposits seventy-five percent (75%) of the awarded amount</strong> in the court's registry. The awarded amount includes the principal debt plus the compounded interest calculated under Section 16.
                    </p>
                    <p>
                      This 75% deposit requirement is a massive financial barrier. For example, if the MSEFC passes an award for a principal amount of ₹10,00,000 along with accrued interest of ₹5,00,000 (total ₹15,00,000), the client must deposit ₹11,25,000 in cash in court before they can even file an appeal. The Supreme Court of India has ruled that this provision is mandatory and that courts have no power to waive or reduce this deposit. This prevents clients from filing frivolous appeals to delay payment, as they must lock up their own working capital in court, forcing them to settle the matter.
                    </p>
                    <p>
                      Once the award is passed and the appeal window expires, the freelancer can file an execution petition in the local civil court where the client carries on business. The civil court will execute the award by issuing warrants to freeze the client's bank accounts, attach their office properties, or order the sale of their commercial assets to clear the outstanding dues. This makes the MSEFC award an exceptionally strong legal instrument for freelancers seeking to enforce their commercial rights.
                    </p>
                  </div>
                </section>

                {/* Section 8 */}
                <section id="legalrecovery-msme-integration" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    8. Maximizing MSME Recovery: How LegalRecovery Simplifies Facilitation Claims
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6 text-sm md:text-base leading-relaxed">
                    <p>
                      While the MSMED Act provides freelancers with powerful legal rights, navigating the Udyam portal, calculating compound interest, and preparing claims for the Facilitation Council can be complex. Corporate clients often rely on experienced lawyers to challenge MSME complaints on technical grounds—arguing that the registration was retrospective, that the invoice format was incorrect, or that the digital evidence lacks certification. To ensure your recovery action is successful, you must prepare your case with absolute precision.
                    </p>
                    <p>
                      This is where <strong>LegalRecovery</strong> provides tech-enabled, professional support. Our platform is designed specifically to assist freelancers in leveraging the MSMED Act:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-xs sm:text-sm text-slate-650">
                      <li>
                        <strong>Document Audit:</strong> We review your Udyam certificate, contract trails, and invoices to verify that your case meets the statutory requirements of the MSMED Act, identifying any technical issues before filing.
                      </li>
                      <li>
                        <strong>Pre-Suit Notice Dispatch:</strong> We draft and dispatch a formal advocate-backed pre-suit legal notice citing Section 15 and 16 of the MSMED Act, served via physical Speed Post and digital channels with verified tracking. In most cases, this notice is sufficient to secure a prompt settlement.
                      </li>
                      <li>
                        <strong>Interest Calculations:</strong> We calculate the compound interest under Section 16 based on the official RBI bank rates, ensuring that your claim includes every rupee of interest you are legally entitled to.
                      </li>
                      <li>
                        <strong>Samadhaan Filing Support:</strong> We assist you in compiling your statement of claim, preparing the required Section 63 BSA certificates for your digital logs, and filing your complaint on the Samadhaan portal, avoiding procedural delays.
                      </li>
                    </ul>
                    <p>
                      By partnering with LegalRecovery, you combine the protective power of the MSMED Act with expert legal oversight. We handle the administrative and legal complexities, allowing you to focus on your freelance practice. If you are struggling with outstanding client invoices and hold an active Udyam registration, use our automated platform today to calculate your dues and initiate your MSME payment recovery.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;The MSME Samadhaan portal is a highly effective recovery tool, but its success depends on presenting an airtight case. Meticulous document audits, precise compound interest calculations, and certified digital evidence are essential to secure a binding award. Partnering with a dedicated legal platform maximizes your chances of recovery.&quot;
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
                <h3 className="text-sm font-black mb-3">Recover Freelance Payments</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Leverage the MSMED Act, 2006 to recover unpaid invoices with compound interest penalties.
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
