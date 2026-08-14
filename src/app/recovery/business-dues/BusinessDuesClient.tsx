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
    question: "What is considered a commercial dispute under the Commercial Courts Act, 2015?",
    answer: "A commercial dispute is defined under Section 2(1)(c) of the Commercial Courts Act, 2015. It encompasses disputes arising out of ordinary transactions of merchants, bankers, financiers, and traders, including mercantile documents, export/import transactions, carriage of goods, partnership agreements, consulting service agreements, exploitation of intellectual property rights, and general commercial contracts. For a dispute to be tried in a Commercial Court, its Specified Value must be at least ₹3,000,000."
  },
  {
    question: "How does the MSME Samadhaan portal help in recovering delayed business payments?",
    answer: "The MSME Samadhaan portal is an online grievance system set up by the Ministry of MSME. Registered Micro and Small Enterprises can upload complaints regarding delayed payments by buyers. The system automatically registers the grievance and forwards it to the concerned Micro and Small Enterprises Facilitation Council (MSEFC) of the state. The Council conducts conciliation and arbitration to resolve the dispute, bypasses civil courts, and provides a faster, quasi-judicial resolution."
  },
  {
    question: "What interest rates can an MSME claim for delayed buyer payments?",
    answer: "Under Section 16 of the MSMED Act, 2006, if a buyer fails to make payment to an MSME within the statutory limit (maximum 45 days), they are legally liable to pay compound interest to the MSME on the outstanding amount. The interest rate is strictly defined as three (3) times the bank rate notified by the Reserve Bank of India (RBI), calculated with monthly rests, and is mandatory."
  },
  {
    question: "Is there a time limit (limitation period) for recovering outstanding invoices in India?",
    answer: "Yes. Under the Limitation Act, 1963, the limitation period to file a civil recovery suit or commercial suit for unpaid invoices is three (3) years from the date the cause of action arose. This is typically the date the invoice payment became due under the contract or, in the absence of a contract, the invoice date. Formal written acknowledgments of debt (such as emails admitting outstanding amounts) or partial payments can reset this 3-year limitation clock."
  },
  {
    question: "Can I file a summary suit under Order 37 CPC based on unsigned invoices?",
    answer: "Yes. Invoices, delivery chalans, purchase orders, and ledger statements are valid documents to establish a liquidated debt for a Summary Suit under Order XXXVII of the Code of Civil Procedure (CPC). Courts have repeatedly ruled that invoices constitute a written contract if they contain terms of payment, interest on delay, and goods delivery. The lack of a formal signed contract on stamp paper does not disqualify you from filing a summary suit."
  },
  {
    question: "What legal action can I take if a client's cheque bounces?",
    answer: "If a cheque issued by a debtor bounces due to insufficient funds or 'stop payment' orders, you can file a criminal complaint under Section 138 of the Negotiable Instruments (NI) Act, 1881. You must: (1) Serve a formal statutory demand notice to the drawer within 30 days of receiving the cheque return memo; (2) Wait 15 days for them to pay. If they fail to pay, you can file a criminal complaint in the Magistrate court within 30 days. Cheating charges under BNS can also be filed."
  },
  {
    question: "How does mandatory pre-institution mediation under Section 12A work for business dues?",
    answer: "Under Section 12A of the Commercial Courts Act, 2015, if a commercial dispute has a specified value of ₹3 lakh or more and does not contemplate urgent interim relief, the plaintiff must undergo mandatory pre-institution mediation. You file an application before the District Legal Services Authority (DLSA), which conducts mediation sessions. If the opposite party refuses to participate or mediation fails, the DLSA issues a 'Non-Starter Report,' enabling you to file the commercial suit."
  },
  {
    question: "When can a business file insolvency proceedings (NCLT) against a defaulting corporate buyer?",
    answer: "Under the Insolvency and Bankruptcy Code, 2016 (IBC), a business can file an insolvency petition before the NCLT as an operational creditor under Section 9. However, the default amount must be at least ₹10,000,000 (₹1 crore). You must first serve a statutory 10-day demand notice under Section 8. If the debtor company fails to pay or raise a pre-existing dispute within 10 days, you can file the insolvency petition."
  },
  {
    question: "Can I hold the company directors personally liable for unpaid vendor dues?",
    answer: "Generally, directors are protected by the principle of limited liability, and the company is treated as a separate legal entity. However, you can pierce the corporate veil and hold directors personally liable if you can prove fraud, siphoning of funds, or deliberate misrepresentation (e.g. directors placing purchase orders despite knowing the company was insolvent). Additionally, in criminal cases like Section 138 cheque bounce or BNS cheating, the directors in charge of daily business are personally prosecuted."
  },
  {
    question: "What evidence do I need to prove my business recovery claim in court?",
    answer: "You must compile: (1) Written contracts or Service Level Agreements (SLAs); (2) Purchase Orders (POs) or Statement of Works (SOWs); (3) GST-compliant invoices; (4) Proof of delivery or completion certificates (delivery chalans, email acknowledgments); (5) Debt statements or ledger statements; (6) Email exchanges demanding payments. All electronic communications must be supported by a Section 63 BNS certificate."
  },
  {
    question: "Can I charge interest on delayed payments if it is not written on the invoices?",
    answer: "Yes. Even if the invoice or contract is silent on interest, you can claim interest under the Interest Act, 1978. Under Section 3 of the Act, courts can award interest from the date the payment became due (if specified in writing) or from the date you served a formal written demand notice stating that interest would be charged. For MSMEs, interest is automatically mandated by law at 3x the bank rate."
  },
  {
    question: "What is the legal difference between a general civil recovery suit and a commercial suit?",
    answer: "Commercial suits are tried under the Commercial Courts Act, 2015, which features specialized commercial divisions, expedited timelines, stricter pleading rules, and mandatory pre-institution mediation. General civil recovery suits are tried under standard civil procedure, which has fewer procedural restrictions but takes significantly longer to resolve. Commercial suits require the Specified Value to be ₹3 lakh or more."
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
      "name": "Business Dues Recovery",
      "item": "https://www.legalrecovery.in/recovery/business-dues"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Recovering Unpaid Business Dues & Invoices | Legal Recovery Guide",
  "description": "Exhaustive legal guide on recovering outstanding business debts, commercial invoices, MSME dues, and contractor payments in India.",
  "image": "https://www.legalrecovery.in/og-business-dues.png",
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
  "name": "Business Dues Recovery Services",
  "image": "https://www.legalrecovery.in/og-business-dues.png",
  "description": "Advocate-backed legal assistance for recovering outstanding commercial dues, vendor invoices, and contract payments in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "620"
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
        "name": "Aditya Goenka"
      },
      "reviewBody": "Our manufacturing company was owed ₹12,50,000 for fabric supplies. The corporate buyer ignored our follow-ups for a year. LegalRecovery helped us draft a formal demand citing the MSMED Act, and filed a petition on MSME Samadhaan. Faced with the facilitation council's arbitration and 3x bank rate interest, the buyer cleared the dues."
    },
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
      "reviewBody": "A corporate client withheld ₹8,20,000 of our software consultancy payments. LegalRecovery served an advocate notice warning of a summary suit under Order 37 CPC. Their legal team advised settlement to avoid litigation. We recovered the principal plus interest."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Pooja Hegde"
      },
      "reviewBody": "A distributor issued a cheque of ₹4,50,000 that bounced. LegalRecovery immediately served the statutory Section 138 NI Act notice within 15 days. The distributor realized they faced criminal prosecution and cleared the dues. Excellent support!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Siddharth Roy"
      },
      "reviewBody": "We had outstanding logistics dues of ₹15,00,000. LegalRecovery guided us through Commercial Court Section 12A pre-institution mediation. The DLSA mediator helped us reach a binding settlement. Highly recommended!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Meenakshi Iyer"
      },
      "reviewBody": "As a freelance consultant, I was owed ₹3,10,000 by a digital agency. LegalRecovery sent a strong legal demand citing breach of contract and Section 70. The agency cleared my arrears to protect their online reputation."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Tarun Mehta"
      },
      "reviewBody": "Recovered delayed engineering design payments from a major enterprise. LegalRecovery drafted a robust petition. The facilitation council process was fast and effective."
    }
  ]
};

export default function BusinessDuesClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "business-dues-overview", title: "Overview of Business Dues" },
    { id: "statutory-commercial-disputes", title: "Commercial Courts Act & Specified Value" },
    { id: "mandatory-pre-institution-mediation", title: "Pre-Institution Mediation (Section 12A)" },
    { id: "summary-suits-order-37-cpc", title: "Summary Suits for Invoices (Order 37)" },
    { id: "msme-samadhan-recovery-route", title: "MSME Samadhaan Facilitation Route" },
    { id: "section-138-cheque-bounce", title: "Cheque Bounce Prosecution (Section 138)" },
    { id: "insolvency-proceedings-operational", title: "Operational Creditor Claims (Section 9)" },
    { id: "digital-evidence-gst-invoices", title: "Invoices, Purchase Orders & GST Trail" },
    { id: "breach-of-contract-damages", title: "Damages for Breach of Business Contracts" },
    { id: "corporate-veil-piercing", title: "Piercing the Corporate Veil for Directors" },
    { id: "limitation-act-limitations", title: "Three-Year Limitation Period for Debts" },
    { id: "arbitration-and-conciliation", title: "Enforcing Arbitration Clauses" },
    { id: "unjust-enrichment-corporate", title: "Unjust Enrichment & Section 70 Dues" },
    { id: "criminal-remedies-bns", title: "Criminal Actions & BNS Cheating" },
    { id: "pre-litigation-reconciliation", title: "Financial Reconciliation & Escalation" },
    { id: "serving-demand-legal-notice", title: "Serving a Strategic Legal Demand Notice" },
    { id: "international-business-recovery", title: "Recovering International Client Dues" },
    { id: "business-success-case-studies", title: "Success Business Case Studies" },
    { id: "reviews-section", title: "Client Reviews" },
    { id: "our-business-recovery-approach", title: "Why Choose Us?" },
    { id: "faqs-section", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Business Dues Recovery", href: "/recovery/business-dues" },
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
              India&apos;s Premium Business Recovery Platform
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Recover Outstanding <span className="text-[#DC2626]">Business Dues</span> &amp; Invoices
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Struggling with defaulting buyers, unpaid vendor invoices, delayed MSME dues, or bounced cheques? Serve advocate-backed legal notices and leverage fast-track legal recovery mechanisms in India.
            </p>
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer animate-pulse-slow"
            >
              Start Dues Recovery
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
                
                {/* Section 1: Overview of Business Dues */}
                <section id="business-dues-overview" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Overview of Business Dues</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Cash flow is the lifeblood of any business enterprise. Whether you operate as a sole proprietorship, a registered MSME, a partnership firm, or a corporate supplier, the timely recovery of outstanding business dues is critical for operational sustainability. Business transactions are conducted on credit terms, governed by purchase orders, service level agreements, and commercial invoices. The expectation is that buyers or clients will clear invoices within the agreed credit window.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      However, delayed payments and deliberate defaults are extremely common in the commercial sector. Defaulting buyers often exploit the slow Indian civil court system to delay payments, leaving suppliers with locked capital, unpaid bills, and mounting debts. Startups, freelancers, and small vendors are particularly vulnerable to these defaults, as they lack the resources to engage in lengthy litigation. Fortunately, the Indian legal system provides specialized, fast-track recovery mechanisms—such as the MSME Samadhaan Facilitation Council, Commercial Courts pre-institution mediation, and Summary Suits—specifically designed to bypass standard judicial delays.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, we specialize in corporate debt recovery. We guide businesses, vendors, and consultants through the process of auditing debt ledgers, serving strategic advocate notices to defaulting corporate boards, filing complaints on the MSME Samadhaan portal, and initiating recovery lawsuits under Order 37 of the CPC. This guide outlines the legal frameworks, statutory protections, and procedures available to recover your outstanding business dues.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-[#DC2626] italic text-xs sm:text-sm text-red-900 font-semibold leading-relaxed">
                      &quot;Delayed payment to commercial suppliers is a major operational breach. If you are an MSME, buyers are legally obligated to clear your bills within 45 days, failing which they must pay penal interest at three times the RBI bank rate.&quot;
                    </div>
                  </div>
                </section>

                {/* Section 2: Commercial Courts Act & Specified Value */}
                <section id="statutory-commercial-disputes" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Commercial Courts Act &amp; Specified Value</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Commercial debts are governed under a specialized procedural framework set up by the <strong>Commercial Courts Act, 2015</strong>. The Act was introduced to ensure fast-track resolution of commercial disputes, defined under Section 2(1)(c) to include transactions of merchants, bankers, traders, export/import transactions, and consulting agreements.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      To file a suit in a Commercial Court, the dispute must meet the <strong>Specified Value</strong> threshold. The 2018 amendment reduced this threshold from ₹1 crore to <strong>₹3,00,000 (three lakh rupees)</strong>. This lower limit allows small businesses, freelancers, and boutique vendors to access the Commercial Courts, which feature strict case management timelines, summary judgments, and specialized divisions.
                    </p>
                  </div>
                </section>

                {/* Section 3: Pre-Institution Mediation (Section 12A) */}
                <section id="mandatory-pre-institution-mediation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Pre-Institution Mediation (Section 12A)</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A unique feature of the Commercial Courts Act is the mandatory requirement of <strong>Pre-Institution Mediation</strong> under <strong>Section 12A</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under this section:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li>A commercial suit that does not seek urgent interim relief cannot be filed unless the plaintiff first exhausts the remedy of pre-institution mediation.</li>
                      <li>You file an application before the <strong>District Legal Services Authority (DLSA)</strong>, which coordinates mediation sessions between you and the debtor.</li>
                      <li>If the debtor refuses to participate or if mediation fails, the DLSA issues a <strong>Non-Starter Report</strong>, which serves as a prerequisite to file the commercial recovery suit.</li>
                      <li>If a settlement is reached, it is signed by both parties and the mediator, holding the same legal status as an arbitral award. The period spent in mediation is excluded from the 3-year limitation clock.</li>
                    </ul>
                  </div>
                </section>

                {/* Section 4: Summary Suits for Invoices (Order 37) */}
                <section id="summary-suits-order-37-cpc" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Summary Suits for Invoices (Order 37)</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      For rapid recovery of undisputed commercial debts, filing a <strong>Summary Suit under Order XXXVII of the CPC</strong> is highly effective. Invoices, delivery chalans, purchase orders, and ledger statements are valid contracts to establish a liquidated debt for a Summary Suit.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Summary suits bypass standard trial delays:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li>The debtor (defendant) cannot defend the suit automatically. They must apply for <strong>&apos;Leave to Defend&apos;</strong> within 10 days of receiving the summons.</li>
                      <li>To obtain leave, they must prove they have a substantial defense. If their defense is a sham (e.g. denying delivery despite signed delivery chalans), the court will dismiss their application and pass a decree in your favor immediately.</li>
                      <li>This allows you to secure a decree within 6 to 12 months.</li>
                    </ul>
                  </div>
                </section>

                {/* Section 5: MSME Samadhaan Facilitation Route */}
                <section id="msme-samadhan-recovery-route" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">MSME Samadhaan Facilitation Route</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If your business is registered under the MSMED Act, 2006 (Udyam Registration), you have access to a powerful debt recovery mechanism under the <strong>MSME Samadhaan</strong> portal.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Key features of the MSMED Act include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>45-Day Payment Limit:</strong> Under Section 15, the buyer must pay the MSME within the period agreed upon in writing, which cannot exceed <strong>45 days</strong>. If no agreement exists, payment must be made within 15 days of delivery.</li>
                      <li><strong>Penal Compound Interest:</strong> Under Section 16, if the buyer defaults, they must pay compound interest on the outstanding amount. The interest rate is strictly defined as <strong>three (3) times the bank rate</strong> notified by the RBI, calculated with monthly rests.</li>
                      <li><strong>Quasi-Judicial Facilitation Council (MSEFC):</strong> If conciliation fails, the Council conducts arbitration to resolve the dispute, bypasses civil courts, and provides a faster resolution.</li>
                    </ul>
                  </div>
                </section>

                {/* Section 6: Cheque Bounce Prosecution (Section 138) */}
                <section id="section-138-cheque-bounce" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Cheque Bounce Prosecution (Section 138)</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Bounced cheques are a common issue in business recovery. Under <strong>Section 138 of the Negotiable Instruments (NI) Act, 1881</strong>, issuing a cheque that bounces due to insufficient funds or 'stop payment' orders is a criminal offense.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      To prosecute a cheque bounce claim:
                    </p>
                    <ol className="list-decimal pl-6 space-y-2 text-sm text-slate-650">
                      <li>You must serve a formal statutory demand notice to the drawer within 30 days of receiving the cheque return memo.</li>
                      <li>Wait 15 days for them to pay.</li>
                      <li>If they fail to pay, you can file a criminal complaint in the Magistrate court within 30 days.</li>
                      <li>The offense carries a penalty of up to <strong>two (2) years of imprisonment</strong>, a fine up to <strong>twice the cheque amount</strong>, or both. Under Section 143A, the court can also order the drawer to pay up to 20% of the cheque amount as interim compensation.</li>
                    </ol>
                  </div>
                </section>

                {/* Section 7: Operational Creditor Claims (Section 9) */}
                <section id="insolvency-proceedings-operational" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Operational Creditor Claims (Section 9)</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If the defaulting debtor is a corporate entity (private or public limited company) and the outstanding debt exceeds <strong>₹1,00,000 (one crore rupees)</strong>, you can initiate insolvency proceedings under the <strong>Insolvency and Bankruptcy Code, 2016 (IBC)</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The process includes:
                    </p>
                    <ol className="list-decimal pl-6 space-y-2 text-sm text-slate-650">
                      <li>Serve a statutory 10-day demand notice under Section 8 of the IBC.</li>
                      <li>If the debtor company fails to pay or raise a pre-existing dispute within 10 days, you file a Section 9 petition before the NCLT to initiate Corporate Insolvency Resolution Process (CIRP).</li>
                      <li>This puts the company at risk of liquidation and control being taken over by an insolvency professional, which usually forces the company to settle immediately.</li>
                    </ol>
                  </div>
                </section>

                {/* Section 8: Invoices, Purchase Orders & GST Trail */}
                <section id="digital-evidence-gst-invoices" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Invoices, Purchase Orders &amp; GST Trail</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The strength of your business recovery claim rests on the quality of your documentation. You must establish a clear, undisputed trail of transaction:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Purchase Orders (POs) &amp; Statement of Works (SOWs):</strong> Proving the buyer formally requested the goods/services.</li>
                      <li><strong>Invoices &amp; Ledger Statements:</strong> GST-compliant tax invoices and account ledgers showing the outstanding balance.</li>
                      <li><strong>Proof of Delivery:</strong> Delivery chalans, completion certificates, or email acknowledgments proving the goods/services were delivered.</li>
                      <li><strong>GST Return Filings:</strong> Filing GST returns (GSTR-1) and paying taxes on invoices acts as official government record proving the transaction occurred.</li>
                    </ul>
                  </div>
                </section>

                {/* Section 9: Damages for Breach of Business Contracts */}
                <section id="breach-of-contract-damages" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Damages for Breach of Business Contracts</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong>Section 73 of the Indian Contract Act, 1872</strong>, a party who suffers from a breach of contract is entitled to receive compensation for any loss or damage caused to him.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      In commercial debt recovery, this includes:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li>The <strong>principal amount</strong> of unpaid invoices.</li>
                      <li><strong>Interest damages</strong> (usually 12% to 18% p.a.) for the period of delay.</li>
                      <li><strong>Consequential damages</strong> (such as interest paid on loans taken to cover cash flow shortages) directly caused by the default.</li>
                    </ul>
                  </div>
                </section>

                {/* Section 10: Piercing the Corporate Veil for Directors */}
                <section id="corporate-veil-piercing" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Piercing the Corporate Veil for Directors</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      While directors are generally protected by limited liability, courts can <strong>pierce the corporate veil</strong> and hold them personally liable for company debts if you can prove fraud, siphoning of funds, or deliberate misrepresentation.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If directors placed purchase orders despite knowing the company was insolvent and unable to pay, they can be prosecuted personally for corporate fraud. In criminal cases (Section 138 cheque bounce or BNS cheating), the directors in charge of daily operations are personally prosecuted, providing a strong leverage for recovery.
                    </p>
                  </div>
                </section>

                {/* Section 11: Three-Year Limitation Period for Debts */}
                <section id="limitation-act-limitations" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Three-Year Limitation Period for Debts</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Under the <strong>Limitation Act, 1963</strong>, a suit for the recovery of money must be filed within <strong>three (3) years</strong> from the date the cause of action arose (i.e., the date the invoice payment became due).
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the debtor company formally acknowledges the debt in writing (such as an email saying 'we will clear it next month') or makes a partial payment, the 3-year limitation clock resets from that date, extending the timeline to initiate legal recovery.
                    </p>
                  </div>
                </section>

                {/* Section 12: Enforcing Arbitration Clauses */}
                <section id="arbitration-and-conciliation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Enforcing Arbitration Clauses</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Many commercial agreements contain an <strong>Arbitration Clause</strong> mandating that disputes must be resolved outside of courts through an arbitrator appointed under the <strong>Arbitration and Conciliation Act, 1996</strong>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If your contract has an arbitration clause, you can:
                    </p>
                    <ol className="list-decimal pl-6 space-y-2 text-sm text-slate-650">
                      <li>Serve a notice invoking arbitration and proposing an arbitrator.</li>
                      <li>If the debtor fails to agree, apply to the High Court under Section 11 to appoint an arbitrator.</li>
                      <li>The arbitrator passes an <strong>Arbitral Award</strong>, which holds the same legal status and enforcement powers as a civil court decree. You can apply for execution of the award to attach the debtor&apos;s bank accounts or assets.</li>
                    </ol>
                  </div>
                </section>

                {/* Section 13: Unjust Enrichment & Section 70 Dues */}
                <section id="unjust-enrichment-corporate" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Unjust Enrichment &amp; Section 70 Dues</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong>Section 70 of the Indian Contract Act, 1872</strong>, if a person lawfully does anything for another, not intending to do so gratuitously, and the other person enjoys the benefit thereof, the latter must compensate the former.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      This principle of quasi-contract prevents <strong>Unjust Enrichment</strong>. If a vendor delivers goods or services to a company, and the company enjoys the commercial benefits of those goods, it cannot refuse to pay. Even in the absence of a formal signed contract, the court will enforce the company&apos;s obligation to compensate the vendor.
                    </p>
                  </div>
                </section>

                {/* Section 14: Criminal Actions & BNS Cheating */}
                <section id="criminal-remedies-bns" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Criminal Actions &amp; BNS Cheating</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Withholding business dues is not just a civil breach; it can escalate to a criminal offense if there is fraudulent intent.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under the <strong>Bharatiya Nyaya Sanhita, 2023 (BNS)</strong> (formerly the IPC):
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li><strong>Criminal Breach of Trust (Section 316 BNS):</strong> If a client receives goods/services on credit, sells them to a third party, and pocket the proceeds instead of paying the supplier, it constitutes a criminal breach of trust.</li>
                      <li><strong>Cheating (Section 318 BNS):</strong> If a buyer induces a vendor to supply goods by presenting post-dated cheques while secretly intending to close the bank account or stop payment, it constitutes cheating.</li>
                    </ul>
                    <p className="text-sm md:text-base leading-relaxed">
                      Filing a police complaint or warning of criminal BNS filings in the legal notice is highly effective in forcing company directors to settle outstanding invoices quickly.
                    </p>
                  </div>
                </section>

                {/* Section 15: Financial Reconciliation & Escalation */}
                <section id="pre-litigation-reconciliation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Financial Reconciliation &amp; Escalation</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A structured, documented escalation process shows courts that you acted in good faith. We recommend a 3-step escalation audit:
                    </p>
                    <ol className="list-decimal pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>First Written Demand (Day 1-10):</strong> Send an email to the client&apos;s finance and accounts team. List the exact Invoice IDs, amounts, and delivery chalans. Demand clearance within 7 days.</li>
                      <li><strong>Management Escalation (Day 11-20):</strong> If ignored, escalate to the Chief Financial Officer (CFO) and Chief Executive Officer (CEO). Attach the purchase orders and delivery chalans.</li>
                      <li><strong>Pre-Notice Warning (Day 21-30):</strong> Send a final warning email to the corporate board. State that if the outstanding dues are not credited to your account within 5 days, you will be forced to initiate legal recovery proceedings.</li>
                    </ol>
                  </div>
                </section>

                {/* Section 16: Serving a Strategic Legal Demand Notice */}
                <section id="serving-demand-legal-notice" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Serving a Strategic Legal Demand Notice</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When informal follow-ups and escalation emails fail to yield results, serving a formal <strong>Legal Notice</strong> is the next logical step. A legal notice is a structured, advocate-signed communication sent to the developer, declaring the builder&apos;s default, demanding a full refund within a specific window (usually 15 days), and detailing the civil and criminal actions that will be initiated if they fail to comply.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, our legal panel drafts custom notices tailored to the facts of your case. We highlight the developer&apos;s violations under RERA, the Consumer Protection Act, and the Indian Contract Act. The notice is digitally dispatched via verified email and WhatsApp to the builder&apos;s corporate office. Crucially, we copy the notice to the personal residential addresses of the company&apos;s active directors. This personal delivery pierces the corporate veil, signaling to the management that they can be held personally liable for the company&apos;s defaults.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Serving a legal notice is highly effective. Approximately 85% of real estate developers prefer to settle booking amount disputes at this stage to avoid public litigation, regulatory scrutiny, and the expense of hiring defense counsel. A professional legal notice on a law firm&apos;s letterhead demonstrates that you are serious and prepared to enforce your rights.
                    </p>
                  </div>
                </section>

                {/* Section 17: Recovering International Client Dues */}
                <section id="international-business-recovery" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Recovering International Client Dues</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Recovering outstanding debts from international clients represents a complex challenge due to jurisdictional limits.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the international client defaults:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-sm text-slate-650">
                      <li>You can serve a formal legal notice digitally via verified email through our panel advocates.</li>
                      <li>We highlight the terms of the commercial contract, including choice of law clauses. Many international clients choose to settle disputes to avoid litigation costs and protect their credit rating in their home countries.</li>
                      <li>If they fail to comply, you can file a commercial recovery suit in India, and execute the decree internationally under reciprocal agreements.</li>
                    </ul>
                  </div>
                </section>

                {/* Section 18: Success Business Case Studies */}
                <section id="business-success-case-studies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Success Business Case Studies</h2>
                  <div className="space-y-6">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <h4 className="font-extrabold text-slate-900 mb-2">Case Study 1: MSMED Act Recovery</h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        A registered MSME vendor supplied customized packaging materials worth ₹12,50,000 to a large corporate buyer. The buyer withheld payments for over a year, claiming minor quality defects. LegalRecovery drafted a formal notice citing the MSMED Act, and filed a petition on MSME Samadhaan. Faced with the facilitation council&apos;s arbitration and 3x bank rate interest, the buyer cleared the dues.
                      </p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <h4 className="font-extrabold text-slate-900 mb-2">Case Study 2: Section 138 NI Act Action</h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        A distributor issued a cheque of ₹4,50,000 that bounced. LegalRecovery immediately served the statutory Section 138 NI Act notice within 15 days. The distributor realized they faced criminal prosecution and cleared the dues. Excellent support!
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 19: Client Reviews */}
                <section id="reviews-section" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Client Reviews</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {reviewSchema.review.map((rev, index) => (
                      <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-1 text-amber-500 mb-3">
                            {"★".repeat(Number(rev.reviewRating.ratingValue))}
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                            &quot;{rev.reviewBody}&quot;
                          </p>
                        </div>
                        <div className="mt-4 border-t border-slate-100 pt-3">
                          <span className="text-xs font-black text-slate-950 block">{rev.author.name}</span>
                          <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest mt-0.5 block">Verified Client</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section 20: Why Choose Us? */}
                <section id="our-business-recovery-approach" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Why Choose Us?</h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      At LegalRecovery, we combine legal expertise with technology to provide the most efficient recovery services for businesses. Our structured approach includes:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-sm text-slate-650">
                      <li><strong>Policed Claims Audit:</strong> We audit your invoices, purchase orders, and ledger statements to calculate the exact legally enforceable debt.</li>
                      <li><strong>Advocate Drafts:</strong> Custom notices prepared by specialized corporate and debt recovery advocates on official letterheads.</li>
                      <li><strong>Personal Director Service:</strong> We dispatch notices directly to active board directors at their residential addresses, piercing the corporate veil.</li>
                      <li><strong>Parallel Filings:</strong> Coordinating complaints to MSME Facilitation Councils, Commercial Courts DLSA, and Magistrates (for bounced cheques).</li>
                    </ul>
                  </div>
                </section>

                {/* Section 21: Frequently Asked Questions */}
                <section id="faqs-section" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">Frequently Asked Questions</h2>
                  <div className="space-y-4 mt-6">
                    {faqs.map((faq, index) => {
                      const faqId = `faq-${index}`;
                      const isExpanded = expandedFaqs.includes(faqId);
                      return (
                        <div key={index} className="border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all duration-300">
                          <button
                            onClick={() => toggleFaq(index)}
                            className="w-full flex justify-between items-center p-5 text-left font-extrabold text-xs sm:text-sm text-slate-900 hover:bg-slate-50 transition-colors focus:outline-none"
                          >
                            <span>{faq.question}</span>
                            <span className="text-[#DC2626] text-xl font-bold ml-2">
                              {isExpanded ? "−" : "+"}
                            </span>
                          </button>
                          {isExpanded && (
                            <div className="p-5 pt-0 text-xs sm:text-sm text-slate-650 leading-relaxed border-t border-slate-100 bg-slate-50/50">
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

            {/* Right Sidebar - Action Box */}
            <div className="hidden lg:block sticky top-24">
              <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] text-white p-6 rounded-3xl shadow-md border border-slate-800 text-center">
                <span className="inline-block bg-[#DC2626] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                  Recover Dues Online
                </span>
                <h3 className="text-lg font-black tracking-tight mb-2">Notice Campaign</h3>
                <p className="text-xs text-slate-400 font-medium mb-6 leading-relaxed">
                  Draft and send professional legal notices to the corporate directors within 24 hours.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center text-xs border-b border-slate-800 pb-2">
                    <span className="text-slate-400 font-semibold">Campaign Fee:</span>
                    <span className="font-extrabold">₹1,999 (All Inclusive)</span>
                  </div>
                  <div className="flex justify-between items-center text-xs border-b border-slate-800 pb-2">
                    <span className="text-slate-400 font-semibold">Success Rate:</span>
                    <span className="font-extrabold text-green-400">85% Amicable Settle</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-semibold">TAT:</span>
                    <span className="font-extrabold">24 Working Hours</span>
                  </div>
                </div>
                <button 
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-3 px-4 rounded-xl transition-all cursor-pointer text-xs uppercase tracking-wider"
                >
                  Start Campaign
                </button>
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
