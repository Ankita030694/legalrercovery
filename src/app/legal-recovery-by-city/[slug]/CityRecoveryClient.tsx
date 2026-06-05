'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

// FAQ data
const faqs = [
  {
    question: "What is the Legal Recovery notice platform?",
    answer: "Legal Recovery is a professional digital platform that helps you recover unpaid salary, freelancer payments, rental deposits, or vendor invoices. We specialize in drafting and sending advocate legal notices, handling escalations, and providing police/criminal complaint drafts to resolve disputes for a flat fee of ₹999."
  },
  {
    question: "How does the 3-stage notice escalation process work?",
    answer: "Our process creates continuous legal pressure. We start by drafting and sending a formal advocate demand notice. If ignored, we escalate with subsequent legal demands. Finally, if the debtor still fails to pay, we provide formal police and criminal complaint drafts (e.g., for cheating/breach of trust) to compel resolution."
  },
  {
    question: "What documents do I need to start my notice flow?",
    answer: "You only need basic proof of the transaction, relationship, or outstanding dues. This includes invoices, agreements, employment letters, bank statements, or even written communication like email and WhatsApp logs acknowledging the dues."
  },
  {
    question: "Does the ₹999 notice flow work for personal loans?",
    answer: "Yes. If you gave a personal loan to a friend, colleague, or relative and have written proof (chat history, bank transfer receipts, or a promissory note acknowledging the debt), our advocates can draft and send a recovery notice on your behalf."
  },
  {
    question: "How does the platform handle unpaid salary and FNF recovery?",
    answer: "Under Indian labor laws, employers are legally obligated to clear all FNF/salary dues. We send a formal advocate notice under the Payment of Wages Act. If the employer does not respond, we escalate the notice and provide drafts for labor/police complaints to secure payment."
  },
  {
    question: "How long does the recovery notice process take?",
    answer: "Once you submit details on our platform, the first advocate-drafted notice is sent within 48 hours. The debtor is given 15 days to pay. If they ignore it, we proceed with notice escalations and complaint drafting over the next 2-3 weeks."
  },
  {
    question: "Are there any hidden costs beyond the ₹999 flat rate?",
    answer: "No, there are zero hidden fees. The ₹999 flat fee covers the complete 3-stage notice escalation flow, advocate review, dispatch via registered post, digital copies (WhatsApp/email), and police complaint drafts."
  },
  {
    question: "Can I recover my rental security deposit using the platform?",
    answer: "Yes. Landlords cannot legally withhold security deposits without proof of damage. Our platform drafts and dispatches advocate demand notices demanding a refund, backed by the threat of criminal breach of trust complaints, which resolves most deposit disputes quickly."
  },
  {
    question: "Do you provide court representation or litigation services?",
    answer: "Our ₹999 package is focused on notice-based resolution and complaint drafting, which resolves over 75% of cases. If court litigation is eventually required, we can refer you to our partner advocates for representation, but court cases are not included in the ₹999 notice flow."
  },
  {
    question: "Is the entire recovery notice process online?",
    answer: "Yes, the process is 100% digital. You submit details of your dispute, upload documents, track notice delivery, and download your escalated complaint drafts directly from your online dashboard without visiting any offices."
  }
];

interface Location {
  slug: string;
  name: string;
  title: string;
  description: string;
}

interface CityRecoveryClientProps {
  location: Location;
}

export default function CityRecoveryClient({ location }: CityRecoveryClientProps) {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const locationName = location.name;
  const pageTitle = location.title;

  // Schema Markup
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.legalrecovery.in" },
      { "@type": "ListItem", "position": 2, "name": "Legal Recovery by City", "item": "https://www.legalrecovery.in/legal-recovery-by-city" },
      { "@type": "ListItem", "position": 3, "name": `Legal Recovery in ${locationName}`, "item": `https://www.legalrecovery.in/legal-recovery-by-city/${location.slug}` }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `Best Legal Recovery Services in ${locationName}`,
    "description": location.description,
    "image": "https://www.legalrecovery.in/services/3.png",
    "author": {
      "@type": "Organization",
      "name": "Legal Recovery",
      "url": "https://www.legalrecovery.in"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Legal Recovery",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.legalrecovery.in/lrlogo.svg"
      }
    },
    "datePublished": "2024-01-15",
    "dateModified": "2025-12-02"
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
    "name": `Legal Recovery Services in ${locationName}`,
    "image": "https://www.legalrecovery.in/services/3.png",
    "description": `Expert legal recovery services in ${locationName}, India.`,
    "brand": {
      "@type": "Brand",
      "name": "Legal Recovery"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1250"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "author": { "@type": "Person", "name": "Rahul Sharma" },
        "reviewBody": "I was struggling to get my security deposit back from my landlord in Delhi. Legal Recovery drafted and sent a legal notice, and I got my refund in just 10 days!"
      },
      {
        "@type": "Review",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "author": { "@type": "Person", "name": "Priya Malhotra" },
        "reviewBody": "My employer delayed my salary for 3 months. Legal Recovery helped me recover my full dues within weeks. Highly professional."
      }
    ]
  };

  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-recovery", title: "What is Legal Recovery?" },
    { id: "when-to-consider", title: "When to Consider?" },
    { id: "pros-and-cons", title: "Pros & Cons" },
    { id: "legal-framework", title: "Legal Framework" },
    { id: "process", title: "Our Process" },
    { id: "documents", title: "Documents Required" },
    { id: "types-of-recoveries", title: "Types of Recoveries" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Legal Recovery by City", href: "/legal-recovery-by-city" },
    { label: `${locationName}`, href: `/legal-recovery-by-city/${location.slug}` },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div className="absolute inset-0 bg-cover bg-center z-0" style={{ background: "black" }}></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              {pageTitle}
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Recover unpaid salary, freelancer fees, rental deposits, or business invoices in <strong>{locationName}</strong> using our 3-stage notice escalation platform. Send advocate-drafted demand notices and police complaint drafts starting at a flat rate of just ₹999.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg cursor-pointer"
            >
              Start Your Recovery Flow (₹999 Only)
            </button>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              {/* TOC (Mobile) */}
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-3 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">

                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Legal Recovery Services in {locationName}</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Are you struggling to recover unpaid dues in <strong>{locationName}</strong>? You are not alone. Whether you are facing a corporate client refusing to clear invoices, an employer withholding your salary, or a landlord holding onto your rental security deposit, getting stuck with unpaid money is incredibly stressful. Fortunately, recovering your dues doesn&apos;t require expensive advocate retainers or years spent in court.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    <strong>Legal Recovery</strong> is a modern, digital-first unpaid dues notice platform serving <strong>{locationName}</strong>. We help you resolve payment defaults through a structured 3-stage notice escalation workflow combined with professional police/criminal complaint drafts. For a flat fee of just ₹999, we ensure the defaulting party feels the full weight of legal obligation, driving them to settle quickly.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    Our platform is backed by a verified panel of recovery advocates practicing in {locationName}. We handle the entire process of notice drafting, delivery tracking, and escalation documentation, enabling you to secure your funds completely online without leaving your desk.
                  </p>
                </section>

                {/* What is Legal Recovery */}
                <section id="what-is-recovery" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">What is the Legal Recovery Platform?</h2>
                  <div className="bg-red-50 border-l-4 border-[#DC2626] p-4 md:p-6 mb-4 md:mb-8 rounded-r-lg">
                    <p className="text-sm md:text-lg text-red-900 italic">
                      &quot;Legal Recovery is a professional unpaid dues notice platform that enables you to send advocate-drafted demand notices, track dispatch, and escalate to criminal/police complaint drafts for a flat fee of ₹999, resolving defaults without complex litigation.&quot;
                    </p>
                  </div>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Instead of academic legal battles and long-drawn-out suits, the platform focuses on notice-based pressure. When a party fails to pay your salary, invoices, or deposits in {locationName}, our platform drafts and dispatches a formal advocate notice giving the debtor a strict 15-day ultimatum. This establishes a legally binding demand and signals clear intent.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    If the debtor ignores the notice, our platform doesn&apos;t stop. We escalate the dispute through subsequent warnings and provide draft police/criminal complaints (under relevant sections for cheating or criminal breach of trust). Showing this level of readiness forces the defaulting party to take immediate action, resolving over 75% of claims without going to court.
                  </p>
                </section>

                {/* When to Consider */}
                <section id="when-to-consider" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">When Should You Consider Legal Recovery in {locationName}?</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    You should initiate a legal recovery claim if you have documented evidence of defaults, such as:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-[#DC2626] rounded-full flex items-center justify-center mr-3 mt-1">💼</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Withheld Salary & FNF</h4>
                        <p className="text-gray-600 text-sm">Your employer in {locationName} has terminated you or accepted your resignation but refuses to pay your salary or Full & Final settlement.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-[#DC2626] rounded-full flex items-center justify-center mr-3 mt-1">👨‍💻</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Unpaid Freelancer Fees</h4>
                        <p className="text-gray-600 text-sm">You have delivered freelance services or client work, but the client ignores your invoices or refuses to pay.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-[#DC2626] rounded-full flex items-center justify-center mr-3 mt-1">🏠</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Withheld Security Deposits</h4>
                        <p className="text-gray-600 text-sm">Your landlord holds your rental security deposit illegally without any justifiable property damage claims.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-[#DC2626] rounded-full flex items-center justify-center mr-3 mt-1">🧾</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Unpaid Vendor Invoices</h4>
                        <p className="text-gray-600 text-sm">Your business has supplied goods or services to another company, but the vendor invoices remain unpaid past the credit period.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Pros and Cons */}
                <section id="pros-and-cons" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Pros and Cons of Legal Recovery Services</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    Understanding the benefits and limitations of legal recovery helps you set realistic expectations:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="p-4 text-left border-b border-gray-200 text-green-700 w-1/2">Advantages (Pros)</th>
                          <th className="p-4 text-left border-b border-gray-200 text-[#DC2626] w-1/2">Disadvantages (Cons)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="p-4 align-top">
                            <ul className="list-disc pl-4 space-y-2 text-gray-700 text-sm">
                              <li><strong>High Resolution:</strong> Over 75% of cases are resolved post advocate-drafted notice.</li>
                              <li><strong>Official Stance:</strong> Establishes a legally binding demand, documenting the default.</li>
                              <li><strong>No Direct Confrontation:</strong> Advocates handle communications with the debtor.</li>
                              <li><strong>Low Initial Cost:</strong> Starting at just ₹999 for complete notice drafting and dispatch.</li>
                            </ul>
                          </td>
                          <td className="p-4 align-top bg-gray-50">
                            <ul className="list-disc pl-4 space-y-2 text-gray-700 text-sm">
                              <li><strong>Dependent on Evidence:</strong> Requires written documentation (emails, chats, bank transactions).</li>
                              <li><strong>Time Frame:</strong> Debtor has a mandatory 15-day window to respond.</li>
                              <li><strong>Insolvent Debtors:</strong> Cannot recover money if the debtor is officially declared bankrupt.</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">How Our 3-Stage Notice Escalation Framework Resolves Disputes</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Our recovery strategy is built on standard legal notice protocols that carry maximum impact under Indian laws. We leverage the following statutory frameworks to compel debtors in {locationName} to clear their liabilities:
                  </p>
                  <h3 className="text-lg md:text-2xl font-semibold text-gray-900 mb-4">Statutory Leverage & Pressure Points</h3>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                    <div className="bg-gray-50 p-4 md:p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-base md:text-lg mb-2 text-[#DC2626]">Advocate Demand Notices</h4>
                      <p className="text-gray-600 text-sm">An official demand drafted by our advocate panel, detailing the contractual default and establishing the 15-day pre-litigation deadline.</p>
                    </div>
                    <div className="bg-gray-50 p-4 md:p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-base md:text-lg mb-2 text-[#DC2626]">Escalation Warnings</h4>
                      <p className="text-gray-600 text-sm">Subsequent notices sent if the initial deadline is ignored, signaling that you are actively moving toward filing formal complaints.</p>
                    </div>
                    <div className="bg-gray-50 p-4 md:p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-base md:text-lg mb-2 text-[#DC2626]">Police/Criminal Complaint Drafts</h4>
                      <p className="text-gray-600 text-sm">Draft complaints alleging cheating (Section 420) or criminal breach of trust (Section 406), presenting the debtor with real criminal liability risks.</p>
                    </div>
                    <div className="bg-gray-50 p-4 md:p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-base md:text-lg mb-2 text-[#DC2626]">Cheque Bounce (Sec 138 NI Act)</h4>
                      <p className="text-gray-600 text-sm">If a cheque given by the debtor bounces, our platform drafts the mandatory 30-day statutory notice required to launch criminal prosecution.</p>
                    </div>
                  </div>
                </section>

                {/* Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Our 3-Stage Notice Escalation Process in {locationName}</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-8 text-gray-700">
                    We have digitized the recovery notice cycle into four straightforward steps, starting at a flat ₹999 rate:
                  </p>
                  <div className="space-y-6 md:space-y-8">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                      <div className="flex-shrink-0 w-14 md:w-16 h-14 md:h-16 bg-[#DC2626] rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Start Notice Flow & Review</h3>
                        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                          Submit your dispute details online and upload evidence (invoices, emails, WhatsApp logs, agreements). Our legal team reviews your materials to frame the notice.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                      <div className="flex-shrink-0 w-14 md:w-16 h-14 md:h-16 bg-[#DC2626] rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Advocate Demand Notice Dispatch</h3>
                        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                          A certified panel advocate drafts the formal legal demand notice setting a 15-day payment deadline. We dispatch it via Registered Post and digital copies (email/WhatsApp).
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                      <div className="flex-shrink-0 w-14 md:w-16 h-14 md:h-16 bg-[#DC2626] rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Notice Escalation & Pressure</h3>
                        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                          If the debtor fails to reply or settle within the deadline, our platform automatically drafts subsequent escalation warnings and demand revisions to keep up legal pressure.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                      <div className="flex-shrink-0 w-14 md:w-16 h-14 md:h-16 bg-[#DC2626] rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Police/Criminal Complaint Drafts & Settlement</h3>
                        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                          If non-payment persists, we draft a formal criminal/police complaint for cheating/breach of trust. With the draft in hand, debtors typically settle immediately, and funds are paid directly to your bank account.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Documents Required */}
                <section id="documents" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Documents Required for Legal Recovery in {locationName}</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    To draft an effective legal notice and establish a strong case, we require the following documents:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4">
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg"><span className="text-[#DC2626] mr-3">✓</span> KYC Documents (Aadhar or PAN card)</li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg"><span className="text-[#DC2626] mr-3">✓</span> Invoices or Billing Ledgers</li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg"><span className="text-[#DC2626] mr-3">✓</span> Written Agreement / Service Contract</li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg"><span className="text-[#DC2626] mr-3">✓</span> Bank Account Statements showing non-payment</li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg"><span className="text-[#DC2626] mr-3">✓</span> Communications (Emails, WhatsApp chats, Letters)</li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg"><span className="text-[#DC2626] mr-3">✓</span> Work Completion / Delivery proof</li>
                  </ul>
                </section>

                {/* Types of Recoveries */}
                <section id="types-of-recoveries" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Recoveries We Support in {locationName}</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-8 text-gray-700">
                    Our panel advocates specialize in a wide range of debt recovery scenarios under civil and corporate laws:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-base md:text-xl font-bold text-[#DC2626] mb-2 md:mb-3">Employment Dues & Salary</h3>
                      <p className="text-gray-700 text-xs md:text-base">Recovery of unpaid salaries, commissions, bonuses, and gratuity/Full & Final settlements from employers who default on payments.</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-base md:text-xl font-bold text-[#DC2626] mb-2 md:mb-3">Freelancer & Service Fees</h3>
                      <p className="text-gray-700 text-xs md:text-base">Helps designers, developers, consultants, and writers recover pending payments from clients who vanish or refuse to clear dues.</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-base md:text-xl font-bold text-[#DC2626] mb-2 md:mb-3">Rental Security Deposits</h3>
                      <p className="text-gray-700 text-xs md:text-base">For residential and commercial tenants. Recovers security deposits from landlords withholding funds without cause.</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-base md:text-xl font-bold text-[#DC2626] mb-2 md:mb-3">B2B Vendor Invoices</h3>
                      <p className="text-gray-700 text-xs md:text-base">Designed for MSMEs and corporate entities. Recovers outstanding invoice balances from business clients failing to meet payment schedules.</p>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Why Choose Legal Recovery in {locationName}?</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-8 text-gray-700">
                    Legal Recovery is a cutting-edge legaltech platform backed by a top-tier network of independent recovery advocates. Here is why clients in {locationName} trust us:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 md:gap-6 text-center">
                    <div className="p-4 md:p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-3xl md:text-4xl mb-3 md:mb-4">⚖️</div>
                      <h3 className="font-bold text-lg md:text-xl mb-2">Advocate Network</h3>
                      <p className="text-gray-600 text-sm">Our platform leverages a network of certified recovery advocates with extensive local expertise in {locationName}.</p>
                    </div>
                    <div className="p-4 md:p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-3xl md:text-4xl mb-3 md:mb-4">🛡️</div>
                      <h3 className="font-bold text-lg md:text-xl mb-2">End-to-End Tracking</h3>
                      <p className="text-gray-600 text-sm">Upload documentation and track notices, post dispatches, and notice escalation status in real time.</p>
                    </div>
                    <div className="p-4 md:p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-3xl md:text-4xl mb-3 md:mb-4">🤝</div>
                      <h3 className="font-bold text-lg md:text-xl mb-2">Transparent Flat Pricing</h3>
                      <p className="text-gray-600 text-sm">No hourly billing or high retainer fees. Flat rates starting at ₹999/case with zero hidden charges.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-8">Client Success Stories</h2>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                    <div className="bg-gray-50 p-4 md:p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#DC2626] absolute top-4 left-4 opacity-20">&quot;</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm md:text-base">
                        &quot;I was struggling to get my security deposit back from my landlord in Delhi. Legal Recovery drafted and sent a legal notice, and I got my refund in just 10 days! The platform is very easy to use.&quot;
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">R</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Rahul Sharma</p>
                          <p className="text-xs text-gray-500">IT Professional, Bangalore</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 md:p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#DC2626] absolute top-4 left-4 opacity-20">&quot;</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm md:text-base">
                        &quot;My employer delayed my salary for 3 months. Legal Recovery helped me recover my full dues within weeks. The experts at Legal Recovery guided me legally and negotiated a fair settlement.&quot;
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">P</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Priya Malhotra</p>
                          <p className="text-xs text-gray-500">Entrepreneur, Delhi</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-8">Frequently Asked Questions About Legal Recovery in {locationName}</h2>
                  <div className="space-y-4 md:space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-4 md:pb-6 last:border-0">
                        <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-3 flex items-start">
                          <span className="text-[#DC2626] mr-2 md:mr-3">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-6 md:pl-8 text-sm md:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-xl md:rounded-3xl p-6 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6">Don&apos;t Let Unpaid Dues Control Your Life in {locationName}</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
                      Take the first step towards recovering your money. Start your 3-stage notice escalation flow today for a flat rate of just ₹999.
                    </p>
                    <div className="flex justify-center">
                      <button 
                        onClick={() => setIsPaymentModalOpen(true)}
                        className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto cursor-pointer"
                      >
                        Start Notice Flow (₹999 Only)
                      </button>
                    </div>
                    <p className="mt-4 md:mt-8 text-xs md:text-sm opacity-70">
                      Confidential • 100% Online • Trackable
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24">
              {/* Contact Card */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Recover Your Dues</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Initiate your 3-stage advocate notice and police complaint draft escalation in {locationName} today.
                </p>
                <button
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="block w-full bg-[#DC2626] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#B91C1C] transition-colors cursor-pointer"
                >
                  Start Notice Flow (₹999)
                </button>
              </div>

              {/* Quick Links */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Related Services</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/services/recovery-of-salary-and-employment-dues" className="text-gray-600 hover:text-[#DC2626] flex items-center">
                      <span className="mr-2">›</span> Salary Recovery
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/recovery-of-freelancer-and-client-payments" className="text-gray-600 hover:text-[#DC2626] flex items-center">
                      <span className="mr-2">›</span> Freelancer Payments
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/security-deposits-and-rental-recoveries" className="text-gray-600 hover:text-[#DC2626] flex items-center">
                      <span className="mr-2">›</span> Security Deposits
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/vendor-and-invoice-recoveries" className="text-gray-600 hover:text-[#DC2626] flex items-center">
                      <span className="mr-2">›</span> Vendor Invoices
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Recovery Services Grid */}
          <div className="mt-16">
            <section className="my-10">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
                Our Legal Recovery Dispute Areas
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { name: "Salary Recovery", href: "/services/recovery-of-salary-and-employment-dues" },
                  { name: "Freelancer Fees", href: "/services/recovery-of-freelancer-and-client-payments" },
                  { name: "Rental Deposits", href: "/services/security-deposits-and-rental-recoveries" },
                  { name: "Vendor Invoices", href: "/services/vendor-and-invoice-recoveries" },
                  { name: "Consumer Refunds", href: "/services/refunds-and-consumer-complaints" },
                  { name: "Travel & Airlines", href: "/services/airline-and-travel-recoveries" },
                  { name: "Property Disputes", href: "/services/property-and-builder-disputes" },
                  { name: "Money from Friend", href: "/services/recovery-of-money-from-a-friend" },
                ].map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#DC2626]/20 hover:border-[#DC2626]/30 hover:bg-[#DC2626]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#DC2626]/30 focus:ring-offset-2"
                  >
                    <span className="text-gray-800 font-bold text-base leading-tight block">{service.name}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-sm md:text-lg text-gray-700">
                  Our legal recovery services in {locationName} cover all major dispute categories under Indian laws
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
    </>
  );
}
