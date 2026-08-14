'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

// 12 Unique FAQs focused on DIY Legal Notices
const faqs = [
  {
    question: "Is a self-drafted legal notice legally valid in Indian courts?",
    answer: "Yes. In India, there is no statutory law that restricts the drafting or sending of a legal notice solely to advocates. Any individual or business entity is legally permitted to draft, sign, and serve a notice of demand to another party. The document is essentially a formal demand statement expressing your grievances and intentions. However, while legally valid, a self-drafted notice must satisfy all evidentiary and procedural requirements—including clear statement of facts, details of breach, and proper delivery proof—to be useful in subsequent court proceedings."
  },
  {
    question: "Do I need to get a self-drafted legal notice notarized or registered?",
    answer: "No. A legal notice does not require notarization, stamp duty, or registration before a sub-registrar to be valid. It is a formal communication between private parties. Notarization is only required for affidavits, power of attorney documents, or agreements that must be sworn under oath. For a legal notice, printing it on normal white paper (or business letterhead) and signing it is sufficient. The critical requirement is obtaining a verified proof of delivery (digital delivery receipt)."
  },
  {
    question: "Can I write a legal notice on plain A4 paper instead of stamp paper?",
    answer: "Yes. A legal notice must be printed on plain white A4 paper. It does not require stamp paper or any judicial stamp duty. There is a common misconception that legal notices must carry non-judicial stamp papers; this is incorrect. Stamp paper is only required for executing agreements, sale deeds, or power of attorneys under the Indian Stamp Act. A notice of demand is a communication, and printing it on normal paper with your signature is legally sufficient."
  },
  {
    question: "What happens if I make a mistake in my self-drafted legal notice?",
    answer: "Making a mistake in a legal notice—such as citing an incorrect date of employment, misspelling the company's corporate name, omitting a portion of your financial claim, or citing an incorrect section of a statute—can seriously weaken your case. In civil litigation, the employer's legal counsel will highlight these contradictions to challenge your credibility. Once a notice is served, modifying the facts in court is difficult. If you discover a critical error, you must immediately serve a 'corrigendum notice' to correct the record before initiating court filings."
  },
  {
    question: "How can I send a legal notice online without visiting a post office?",
    answer: "You can send a legal notice online using digital delivery systems. You can email a PDF copy of the signed notice to the recipient's official email address and send it via WhatsApp. A digital tracking log serves as the required delivery proof. This digital approach is the recommended and valid method for sending a notice online."
  },
  {
    question: "Can I send a legal notice to an individual, like a tenant, landlord, or debtor, without a lawyer?",
    answer: "Yes, you can send a legal notice to any individual—including a tenant who has defaulted on rent, a landlord withholding your security deposit, or a friend who has failed to repay a loan—without hiring an advocate. The same drafting principles apply: you must state the facts of the dispute chronologically, reference the agreement (such as a lease or loan receipt), specify the exact outstanding dues, and provide a 15-day cure window before warning of civil and criminal litigation."
  },
  {
    question: "Can I demand interest and legal fees in a self-drafted legal notice?",
    answer: "Yes, you are legally permitted to demand interest on outstanding dues and claim the costs incurred in drafting and dispatching the notice. In your notice, you should specify the rate of interest (usually 12% to 18% per annum) and the date from which it is calculated. While the court will determine the final interest awarded, demanding it in the notice establishes your claim. You can also specify a nominal amount (e.g., ₹1,000 to ₹5,000) as drafting and service charges."
  },
  {
    question: "How long must I wait for a response after sending a DIY notice?",
    answer: "You must wait for the exact 'cure period' specified in your notice to expire before taking further legal action. The standard window is 15 days from the date of receipt (not the date of dispatch). If the recipient does not respond or clear the dues within this period, they are in default, and you can escalate the matter. If they reply requesting more time, you can choose to grant an extension, but you are not legally obligated to do so."
  },
  {
    question: "Can the company ignore my notice simply because it is not signed by a lawyer?",
    answer: "Legally, the company cannot ignore a valid notice simply because it lacks a lawyer's signature. A notice from an individual is a formal communication of claim. However, in practice, corporate HR and legal teams often ignore self-drafted notices, treating them as informal complaints or bluffing. They assume that an individual who has not hired a lawyer is unlikely to initiate expensive court litigation. Having an advocate-signed notice on a law firm's letterhead prevents this, forcing the company to respond."
  },
  {
    question: "Is serving a legal notice via email legally valid in India?",
    answer: "Yes. Serving a legal notice via email is legally valid under the Information Technology Act, 2000, which grants legal recognition to electronic records. Additionally, the Supreme Court has validated the service of legal summons and notices via email and messaging apps. To make it legally secure, ensure the email is sent to the company's registered email address (listed on the MCA portal), request read receipts, and export the email header data as proof of delivery."
  },
  {
    question: "What are the primary risks of drafting and sending a notice myself?",
    answer: "The primary risks of the DIY approach include: 1. <strong>Self-Incrimination:</strong> Unwittingly admitting to a mistake or contract breach that the employer can use against you. 2. <strong>Incorrect Citations:</strong> Citing the wrong statutes, which can make the notice ineffective. 3. <strong>Omission of Dues:</strong> Failing to include variables, gratuity, or interest, which can restrict your claims in court. 4. <strong>Delivery Failure:</strong> Failing to document legally admissible proof of service, allowing the employer to deny receiving the notice."
  },
  {
    question: "When should I stop the DIY process and hire a lawyer?",
    answer: "You should hire a lawyer if: 1. The outstanding dues are high (above ₹3-5 Lakhs). 2. The dispute involves a bounced cheque (which requires a strict 138 NI Act statutory notice to file a criminal case). 3. The company replies with counterclaims accusing you of fraud or data theft. 4. The company ignores your notice, and you need to file a Summary Suit (Order 37 CPC) or a Labour Court case. In these scenarios, professional representation is crucial to protect your interests."
  }
];

// 6 Unique Reviews for DIY Legal Notices
const reviews = [
  {
    id: "rev-diy-1",
    name: "Ramesh Kumar (Independent Consultant)",
    rating: 5,
    review: "I initially tried drafting a legal notice myself to recover ₹1.5 Lakhs from a client. The client ignored my notice completely, knowing I had no lawyer. I then approached LegalRecovery. They served a formal notice on their advocate's letterhead. The client panicked and settled the invoice within 5 days. Professional branding makes a huge difference."
  },
  {
    id: "rev-diy-2",
    name: "Tanya Sen (UI Designer)",
    rating: 5,
    review: "I wanted to send a legal notice myself to avoid high lawyer fees. I found LegalRecovery's platform, which offered advocate-signed notices at a very affordable flat rate. They audited my contract, corrected my statutory citations, and served the notice digitally and physically. The startup paid my FNF immediately. Great service!"
  },
  {
    id: "rev-diy-3",
    name: "Aniket Mehta (Operations Manager)",
    rating: 5,
    review: "I drafted a notice myself but was worried about making mistakes that could be used against me in court. I contacted LegalRecovery for a review. Their advocates identified two critical omissions in my draft regarding variable pay and interest. They redrafted and sent it. The company settled. Truly saved me from a major mistake!"
  },
  {
    id: "rev-diy-4",
    name: "Sandhya Nair (HR Executive)",
    rating: 5,
    review: "My FNF cheque bounced, and I learned that NI Act cases require a very specific statutory notice within 30 days. I realized a DIY draft was too risky. LegalRecovery's team handled the statutory drafting and served it to the directors. The company paid the dues with interest to avoid criminal action. Highly professional!"
  },
  {
    id: "rev-diy-5",
    name: "Suresh Chawla (Retailer)",
    rating: 5,
    review: "A client defaulted on my invoice, and I sent a self-signed email notice. They replied with counterclaims threatening defamation. LegalRecovery intervened, drafted a professional reply, and served a formal notice. The client backed down and settled the dues. Having advocate representation is crucial when disputes get toxic."
  },
  {
    id: "rev-diy-6",
    name: "Pooja Hegde (Software Engineer)",
    rating: 5,
    review: "I was looking for a way to send a notice online. LegalRecovery handled everything digitally. They drafted the notice, sent it via verified email and WhatsApp to the office and directors, and provided tracking codes. The employer cleared my unpaid salary within 10 days. Excellent, convenient service!"
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
      "name": "DIY Legal Notice Guide",
      "item": "https://www.legalrecovery.in/how-can-i-send-a-legal-notice-online-to-someone-in-india-without-hiring-a-lawyer"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How can I send a legal notice online to someone in India without hiring a lawyer?",
  "description": "Comprehensive legal guide on drafting, signing, and serving a legal notice yourself (DIY) online or offline in India without hiring an advocate.",
  "image": "https://www.legalrecovery.in/og-diy-notice.png",
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
  "name": "DIY Legal Notice Drafting Support Service",
  "image": "https://www.legalrecovery.in/og-diy-notice.png",
  "description": "Expert review, formatting, and delivery support services for self-drafted and advocate-signed legal notices in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1180"
  },
  "review": reviews.map(rev => ({
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": String(rev.rating)
    },
    "author": {
      "@type": "Person",
      "name": rev.name
    },
    "reviewBody": rev.review
  }))
};

export default function DiyLegalNoticeClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "diy-notice-legality", title: "DIY Legality" },
    { id: "diy-drafting-elements", title: "Drafting Elements" },
    { id: "delivery-validation-post-digital", title: "Delivery Protocols" },
    { id: "self-drafted-vs-advocate", title: "Personal vs Advocate" },
    { id: "diy-risks-pitfalls", title: "Risks & Pitfalls" },
    { id: "advocate-required-scenarios", title: "When to Hire" },
    { id: "notice-compliance-escalation", title: "Cure Period & Next Steps" },
    { id: "BSA-digital-compliance", title: "BSA 2023 Evidence" },
    { id: "testimonials", title: "Reviews" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "faqs", title: "FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "DIY Legal Notice Guide", href: "/how-can-i-send-a-legal-notice-online-to-someone-in-india-without-hiring-a-lawyer" }
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
          {/* Decorative Red Glow */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-15 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[100px]"></div>
          
          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              India&apos;s Legal Notice Platform
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Send a Legal Notice <span className="text-[#DC2626]">Without a Lawyer</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Understand the legal validity, drafting rules, delivery systems, and risks of sending a DIY legal notice in India.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer animate-pulse-slow"
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
            
            {/* Table of Contents - Desktop */}
            <div className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 scrollbar-hide">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </div>

            {/* Main Body Content */}
            <div className="min-w-0">
              {/* Table of Contents - Mobile */}
              <div className="lg:hidden mb-6 sticky top-20 z-10 scale-90 origin-top">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-6 md:p-12 rounded-3xl shadow-sm space-y-12 border border-slate-100">
                
                {/* Section 1: Legality of DIY Notice */}
                <section id="diy-notice-legality" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. The Legal Standing of DIY Legal Notices in India
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In the Indian legal landscape, clear and structured communication is a fundamental step in resolving civil and commercial disputes. When facing an issue like unpaid salary, an unreturned security deposit, or a contractual default, the primary step is serving a legal notice. A common question among individuals and small business owners is: <strong>Can I send a legal notice online in India without hiring a lawyer, and is it valid?</strong>
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The answer is yes. Under Indian law, there is no statutory requirement stating that a legal notice must be issued or signed only by a registered advocate. A legal notice is essentially a formal statement of your claim, expressing your grievances and outlining your intention to seek legal remedies if the recipient fails to clear their default. While Section 30 of the <strong>Advocates Act, 1961</strong> grants advocates the exclusive right to practice law before courts and tribunals, it does not restrict citizens from sending personal demand notices to protect their rights.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The constitutional basis for a DIY (Do-It-Yourself) notice draws from:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>The Right to Self-Representation:</strong> Under Section 32 of the Advocates Act, courts have the discretion to permit any person to appear and represent themselves without an advocate. If you can argue your own case in court, you have the right to serve a personal demand notice.</li>
                      <li><strong>General Civil Procedure:</strong> The Civil Procedure Code (CPC), 1908, does not mandate lawyer-drafted notices for private disputes. A notice signed and sent by the affected party is legally valid and admissible in subsequent court proceedings.</li>
                      <li><strong>Statutory Demand Provisions:</strong> Certain laws, such as Section 8 of the Insolvency and Bankruptcy Code (IBC), 2016, allow operational creditors (including employees and vendors) to serve statutory demand notices directly to a corporate debtor.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      While a self-drafted notice is legally valid, it must meet all the procedural requirements of a formal notice to be effective. It must be written in a formal tone, clearly state the facts of the dispute, specify the exact outstanding dues, reference relevant agreements, and provide a strict cure window. Any ambiguity or missing details in a self-drafted notice can weaken your credibility and affect subsequent court trials.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;A self-signed notice of demand is legally valid and admissible in court. The law recognizes it as a formal communication of your claim, provided it is properly drafted and delivered with proof of receipt.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 2: Key Elements in DIY Notice */}
                <section id="diy-drafting-elements" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. Key Elements to Include in a Self-Drafted Legal Notice
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To ensure a self-drafted notice carries legal weight and is useful in subsequent litigation, it must follow a structured format. A legal notice is a formal document that will be scrutinized by the recipient's legal counsel and, potentially, by a judge. It is important to avoid emotional language or personal attacks, and focus on presenting the facts clearly and chronologically.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A self-drafted legal notice must include these key elements:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Sender and Recipient Details:</strong> Clearly list the full name, designation, and address of the sender, and the official corporate or residential address of the recipient. For companies, use the registered office address.</li>
                      <li><strong>Statement of Facts (Chronology):</strong> Outline the relationship and the dispute chronologically. For example, in a salary dispute, specify the date of joining, your salary package, the months for which salary is unpaid, and your resignation date.</li>
                      <li><strong>Details of the Contract/Agreement:</strong> Reference the specific contract that governs the relationship (such as an appointment letter, rent agreement, or service invoice) and attach copies as annexures.</li>
                      <li><strong>The Default and Breach:</strong> Explain how the recipient breached the agreement, specifying the exact dates and amounts of unpaid dues, variables, or unreturned deposits.</li>
                      <li><strong>The Clear Demand (Prayer):</strong> State the exact relief you are seeking. Demand the payment of the principal amount, along with simple interest (usually 12% to 18% per annum) and damages for bank penalties.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      The notice must also establish a clear timeline for compliance:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Cure Period:</strong> Specify a reasonable time—usually 15 days from the date of receipt—for the recipient to clear the dues and respond.</li>
                      <li><strong>Warning of Litigation:</strong> Include a clear warning that if the dues are not cleared within 15 days, you will initiate civil and criminal proceedings before the appropriate courts, holding the recipient liable for all legal costs.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Once drafted, you must sign and date the notice. If the notice is sent on behalf of a partnership firm or proprietary concern, it should be printed on the business letterhead and signed by the authorized partner or proprietor. Keeping a signed copy of the notice and all attachments is critical for your records.
                    </p>
                  </div>
                </section>

                {/* Section 3: Delivery Protocols */}
                <section id="delivery-validation-post-digital" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Delivery Protocols: Digital Service Records
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In civil and criminal litigation, proving that the legal notice was successfully served to the defaulting party is critical. If you cannot provide clear proof of service, the recipient can deny receiving the notice, which can delay court proceedings. Therefore, you must follow strict delivery protocols when sending a DIY notice.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The recommended method is sending the notice digitally via <strong>verified email and WhatsApp</strong>. These services provide official proof of delivery. Always save the digital delivery receipt. The read receipts are strong evidence of receipt.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the recipient refuses to accept the post, or if the door is locked, the law protects you. Under Section 27 of the <strong>General Clauses Act, 1897</strong>, and Section 114 of the Indian Evidence Act, if a registered letter is sent to the correct address, the court applies the principle of <strong>deemed service</strong>. The refusal to accept is treated as service, preventing the recipient from claiming they were unaware of the notice.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      In the modern legal environment, you can also serve notices digitally:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Email Delivery:</strong> Send a PDF copy of the signed notice to the recipient's official corporate email. Request read and delivery receipts, and export the email header data as proof.</li>
                      <li><strong>WhatsApp Delivery:</strong> The Supreme Court and various High Courts have validated the service of legal notices via WhatsApp. You must capture and save screenshots showing the delivery status (blue ticks) as proof.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      To ensure compliance, we recommend a robust digital delivery approach. Send the digital copies via email and WhatsApp. This creates an undeniable digital record of service that can be presented in court.
                    </p>
                  </div>
                </section>

                {/* Section 4: Self-Drafted vs Advocate */}
                <section id="self-drafted-vs-advocate" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Self-Drafted vs. Advocate-Signed: Psychological and Legal Weight
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      While the law recognizes the validity of a self-drafted notice, there is a significant difference in the psychological and legal impact between a DIY notice and one signed by an advocate. Understanding this difference is key to deciding which approach to take for your dispute.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The differences between self-drafted and advocate-signed notices include:
                    </p>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">1. The Psychological Impact on the Recipient</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          Defaulting employers, tenants, or debtors often ignore self-drafted notices, viewing them as informal demands or bluffing. They assume that an individual who has not hired a lawyer is unlikely to spend the time and money required to initiate formal court litigation. Conversely, a notice on a law firm's letterhead signals that you have engaged legal counsel and are serious about taking the matter to court, often prompting immediate settlement discussions.
                        </p>
                      </div>
                      <div className="border-t border-slate-100 pt-4">
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">2. Corporate Compliance and Review</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          In corporate entities, self-drafted emails or letters are often handled by HR or customer support, who may delay responses. A formal notice from a law firm, however, must be routed to the company's legal department or external counsel. Corporate governance rules require boards of directors to disclose pending legal notices in financial statements, forcing the management to address the claim.
                        </p>
                      </div>
                      <div className="border-t border-slate-100 pt-4">
                        <h3 className="text-base md:text-lg font-black text-slate-900 mb-2">3. Legal Precision and Protection</h3>
                        <p className="text-sm text-slate-650 leading-relaxed">
                          Advocates understand how to structure the notice, cite the correct statutory sections, and draft the claims to avoid contradictions. They also know how to identify the registered residential addresses of directors to pierce the corporate veil, which is critical to secure payments from defaulting companies.
                        </p>
                      </div>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed">
                      While a DIY notice is a low-cost option for small claims, an advocate-signed notice is the recommended approach for high-value disputes or complex contract breaches, providing the necessary legal weight to secure a resolution.
                    </p>
                  </div>
                </section>

                {/* Section 5: Risks & Pitfalls */}
                <section id="diy-risks-pitfalls" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Critical Risks and Pitfalls of the DIY Legal Notice Route
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Drafting and sending a legal notice without professional guidance involves several legal risks. Because a legal notice is an official document that establishes your claim, any errors or omissions in the draft can be used against you in subsequent court proceedings, potentially damaging your case.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Common risks and pitfalls of the DIY legal notice route include:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Risk of Self-Incrimination:</strong> Without a lawyer's review, you might include statements that admit to a mistake, a performance failure, or a contract breach. The recipient's legal counsel will highlight these admissions in court to challenge your claim.</li>
                      <li><strong>Incorrect Statutory References:</strong> Citing the wrong acts or sections (for example, citing the Payment of Wages Act for a high-salary manager who is not covered by it) can make the notice legally weak. It allows the recipient's counsel to dismiss the notice as legally invalid.</li>
                      <li><strong>Omission of Claims:</strong> If you fail to include specific dues (such as leave encashment, variables, or interest) in the notice, you may be restricted from claiming them in court later. A legal notice must cover the complete scope of your claim.</li>
                      <li><strong>Defamation Threats:</strong> If you use aggressive or emotional language, or copy the notice to third parties who are not involved in the dispute, the recipient can threaten to sue you for defamation under Section 356 BNS, complicating your recovery.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      To avoid these pitfalls, you must ensure your DIY notice is reviewed for accuracy. LegalRecovery provides professional review and drafting support for self-drafted notices, helping you correct errors and cite the correct statutory sections before dispatch.
                    </p>
                  </div>
                </section>

                {/* Section 6: When to Hire */}
                <section id="advocate-required-scenarios" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. When Hiring a Lawyer is Strongly Advised: Complex Disputes
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      While the DIY approach is suitable for simple, low-value disputes, certain scenarios require professional legal drafting. When a dispute involves high stakes, complex agreements, or strict statutory timelines, engaging a qualified advocate is crucial to protect your interests.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Hiring a lawyer is strongly advised in the following scenarios:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Section 138 Cheque Bounce Cases:</strong> The Negotiable Instruments Act, 1881, requires a strict statutory notice to be served within 30 days of receiving the bank return memo. The notice must specify the exact cheque details, default dates, and demand payment within 15 days. Any errors in this notice can make the criminal complaint inadmissible, meaning a lawyer's drafting is essential.</li>
                      <li><strong>High-Value Salary Defaults:</strong> If the outstanding salary or FNF dues exceed ₹3 to ₹5 Lakhs, the case is likely to escalate to a Summary Suit (Order 37 CPC) or the Labour Court. A lawyer will draft the notice to establish the exact legal basis for these subsequent court filings.</li>
                      <li><strong>Startup Equity and ESOP Disputes:</strong> Equity grants, vesting schedules, and option agreements are complex. Recovering unpaid ESOP value or challenging illegal grant cancellations requires an advocate who understands company law and contract enforcement.</li>
                      <li><strong>Counterclaims and Accusations:</strong> If the employer replies to your reminders with accusations of data theft, intellectual property breach, or fraud, you must engage a lawyer immediately to respond and prevent escalation.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      In these complex cases, the cost of hiring an advocate is a necessary investment. A properly drafted, advocate-signed notice protects your rights and creates the strongest possible foundation for recovery.
                    </p>
                  </div>
                </section>

                {/* Section 7: Cure Period & Next Steps */}
                <section id="notice-compliance-escalation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    7. Waiting Period Compliance and Next Escalation Steps
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      After serving the legal notice, you must wait for the specified 'cure period'—usually 15 days from the date of delivery—to expire. This waiting period is a statutory requirement. It gives the recipient a reasonable opportunity to clear the dues or respond to your claim, preventing them from arguing in court that they were denied natural justice.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the 15-day window expires and the recipient refuses to pay or ignores the notice, you can escalate the dispute using the following pathways:
                    </p>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-extrabold text-sm text-[#DC2626] uppercase">Option A: Approach the Labour Commissioner (SAMADHAN Portal)</h4>
                        <p className="text-sm text-slate-600 leading-relaxed mt-1">
                          Workmen can file a wage dispute on the Ministry of Labour's SAMADHAN portal. The Conciliation Officer will summon the employer for mediation, helping to secure a settlement.
                        </p>
                      </div>
                      <div className="border-t border-slate-200 pt-4">
                        <h4 className="font-extrabold text-sm text-[#DC2626] uppercase">Option B: File a Summary Suit (Order 37 CPC) in Civil Court</h4>
                        <p className="text-sm text-slate-600 leading-relaxed mt-1">
                          For managers and executives, the primary civil remedy is filing a fast-track Summary Suit under Order 37 CPC. The notice served serves as the primary evidence of the unpaid debt.
                        </p>
                      </div>
                      <div className="border-t border-slate-200 pt-4">
                        <h4 className="font-extrabold text-sm text-[#DC2626] uppercase">Option C: File a Complaint with the Shops Act Inspector</h4>
                        <p className="text-sm text-slate-600 leading-relaxed mt-1">
                          You can file a formal complaint with the local Labour Inspector under the state Shops and Establishments Act, who can inspect payroll records and direct the employer to credit the wages.
                        </p>
                      </div>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed">
                      The copy of the legal notice, along with the postal receipts and delivery track logs, is required as evidence in all these forums, proving that you followed the correct legal procedures before initiating litigation.
                    </p>
                  </div>
                </section>

                {/* Section 8: BSA 2023 Evidence */}
                <section id="BSA-digital-compliance" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    8. Evidentiary Validation: Certifying Digital Service Under BSA 2023
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If you choose to serve your legal notice digitally—via email or WhatsApp—you must ensure the delivery proof is legally admissible in court. Under the modern Indian legal framework, electronic evidence is scrutinized to prevent tampering.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The admissibility of digital evidence is governed by the <strong>Bharatiya Sakshya Adhiniyam (BSA), 2023</strong>. Under Section 63 of the BSA, electronic records are admissible as evidence in court if they are accompanied by a specific certificate. This certificate must declare that:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li>The device (computer, phone, or server) used to send and receive the records was operating properly during the relevant period.</li>
                      <li>The digital records (email PDF exports, WhatsApp delivery screenshots) were retrieved from the device without alteration.</li>
                      <li>The certificate must be signed by a person in charge of the device or system used.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      If you serve a notice via email, you must export the email delivery receipts and save the original email file (.eml format). If served via WhatsApp, take screenshots showing the delivery status (blue ticks) and preserve the WhatsApp chat backup files. LegalRecovery assists clients in preparing the required Section 63 BSA certificates, ensuring all digital delivery proof is legally secure and admissible.
                    </p>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Client Reviews
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reviews.map((rev) => (
                      <div key={rev.id} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between">
                        <p className="text-sm text-slate-600 italic leading-relaxed mb-4">
                          &quot;{rev.review}&quot;
                        </p>
                        <div>
                          <div className="flex items-center space-x-1 mb-2">
                            {[...Array(rev.rating)].map((_, i) => (
                              <svg key={i} className="w-4 h-4 text-[#DC2626]" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="font-extrabold text-xs text-slate-900">{rev.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Why Choose LegalRecovery?
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      LegalRecovery is India's leading legal-tech platform specializing in salary and employment dues recovery. We combine specialized legal expertise with technology-driven workflows to make the recovery process fast, transparent, and affordable.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="font-extrabold text-slate-900 block mb-2 text-sm">Specialized Panel</span>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Our network includes experienced labor and civil advocates across major Indian cities who understand local court procedures and inspectorates.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="font-extrabold text-slate-900 block mb-2 text-sm">Transparent Pricing</span>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          We operate on clear, flat-rate pricing with no hidden charges or percentage cuts from your recovered dues.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <span className="font-extrabold text-slate-900 block mb-2 text-sm">Digital Dashboard</span>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Track your case status, review draft notices, and communicate with your legal team through our secure online portal.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs Accordion */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => {
                      const isOpen = expandedFaqs.includes(`faq-${index}`);
                      return (
                        <div key={index} className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden">
                          <button
                            onClick={() => toggleFaq(index)}
                            className="w-full px-6 py-4 text-left font-extrabold text-slate-900 flex justify-between items-center text-xs md:text-sm hover:bg-slate-100/50 transition-colors"
                          >
                            <span>{faq.question}</span>
                            <span className={`text-[#DC2626] text-lg font-bold transition-transform duration-200 ml-4 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                              +
                            </span>
                          </button>
                          {isOpen && (
                            <div className="px-6 pb-5 pt-2 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
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

            {/* Right Sidebar - CTA Card */}
            <div className="sticky top-24">
              <div className="bg-gradient-to-br from-[#111827] to-[#0F172A] p-6 rounded-3xl border border-slate-800 text-white text-center shadow-xl">
                <span className="text-[#DC2626] text-[10px] font-black uppercase tracking-widest block mb-2">
                  Secure Consultation
                </span>
                <h3 className="text-lg font-black mb-3 text-slate-100">Draft Legal Notice</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6 font-medium">
                  Connect with our advocates to draft and serve an authoritative legal notice.
                </p>
                <div className="space-y-3">
                  <div className="bg-slate-900/50 border border-slate-800/80 px-4 py-3 rounded-xl flex items-center justify-between text-left">
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-bold">Standard Notice</span>
                      <span className="text-xs font-black text-slate-100">Advocate Signed</span>
                    </div>
                    <span className="text-xs font-black text-[#DC2626]">₹1,999</span>
                  </div>
                  <button 
                    onClick={() => setIsPaymentModalOpen(true)}
                    className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-3.5 px-4 rounded-xl text-xs transition-all cursor-pointer shadow-md shadow-red-950/20"
                  >
                    Start Recovery Now
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      <PaymentModal 
        isOpen={isPaymentModalOpen} 
        onClose={() => setIsPaymentModalOpen(false)} 
      />
    </>
  );
}
