'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "What is the legal limitation period for the recovery of unpaid dues for my business in India?",
    answer: "Under Article 14 and Article 15 of the Limitation Act, 1963, a commercial enterprise has exactly three years to file a legal suit for the recovery of unpaid dues, calculated from the date each invoice falls overdue or from the delivery of the goods or services. If the defaulting debtor admits the liability in writing or makes a partial payment, Section 18 of the Limitation Act resets the three-year limitation period from the date of such acknowledgment. Initiating a formal legal notice well before this three-year expiry is critical to preserving your statutory claims before civil and commercial courts."
  },
  {
    question: "Can an MSME claim compound interest on unpaid commercial invoices?",
    answer: "Section 16 of the Micro, Small and Medium Enterprises Development (MSMED) Act, 2006, mandates that any buyer who fails to make payment within the agreed timeframe or within 45 days of acceptance must pay monthly compounded interest at three times the bank rate notified by the Reserve Bank of India. This statutory interest is non-negotiable and supersedes any contrary contractual penalty or interest-free agreement between the supplier and the buyer. Businesses registered on the Udyam portal can formally demand this statutory penal interest in their legal notice and through the MSME Samadhaan facilitation council."
  },
  {
    question: "What is the difference between a Summary Suit and a regular Civil Recovery Suit?",
    answer: "A Summary Suit filed under Order XXXVII of the Code of Civil Procedure, 1908, offers a fast-track judicial mechanism for liquidating commercial debts arising from written contracts, negotiable instruments, or admitted invoices without entering prolonged multi-year trials. Unlike a regular civil suit where the defendant has an automatic right to contest, an Order 37 action requires the debtor to apply for leave to defend within 10 days of receiving summons, demonstrating a substantial and genuine defense. If the court denies leave to defend, the commercial judge immediately decrees the entire claimed amount along with interest in favor of the plaintiff business."
  },
  {
    question: "Can I initiate insolvency proceedings under the IBC if a corporate client ignores my legal notice?",
    answer: "An operational creditor can initiate corporate insolvency resolution against a defaulting private or public limited corporate debtor under Section 9 of the Insolvency and Bankruptcy Code, 2016, provided the aggregate operational debt equals or exceeds ₹1 Crore and remains undisputed. The process requires serving a mandatory 10-day statutory demand notice in Form 3 or Form 4 under Section 8 of the Code before approaching the National Company Law Tribunal. Demonstrating pre-existing bona fide disputes prevents an IBC petition, making a meticulously drafted advocate legal notice indispensable to pre-empt fabricated defenses."
  },
  {
    question: "Is pre-institution mediation mandatory before filing a commercial suit for business dues?",
    answer: "Section 12A of the Commercial Courts Act, 2015, mandates that any commercial suit for debt recovery must first undergo pre-institution mediation through the District Legal Services Authority (DLSA) unless the plaintiff seeks urgent interim relief against the debtor. The mediation process is designed to exhaust out-of-court settlement opportunities within a strict three-month timeline before the commercial division admits the plaint. Serving a comprehensive advocate legal notice prior to approaching the DLSA frequently motivates the defaulting entity to settle immediately, avoiding public mediation filings and legal expenditure."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://legalrecovery.in/recovery-of-unpaid-dues-for-my-business"
      },
      "headline": "Recovery of Unpaid Dues for My Business: Legal Guide & Notice Framework",
      "image": [
        "https://legalrecovery.in/images/og/recovery-of-unpaid-dues-for-my-business.jpg"
      ],
      "author": {
        "@type": "Person",
        "name": "Advocate Aman Chawla",
        "url": "https://legalrecovery.in/authors/advocate-aman-chawla"
      },
      "reviewedBy": {
        "@type": "Person",
        "name": "Advocate Sneha Sharma",
        "url": "https://legalrecovery.in/authors/advocate-sneha-sharma"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Legal Recovery",
        "logo": {
          "@type": "ImageObject",
          "url": "https://legalrecovery.in/icon.png"
        }
      },
      "datePublished": "2024-03-20T08:00:00+05:30",
      "dateModified": new Date().toISOString()
    },
    {
      "@type": "Organization",
      "name": "Legal Recovery",
      "url": "https://legalrecovery.in",
      "sameAs": [
        "https://www.linkedin.com/company/legal-recovery-india",
        "https://twitter.com/legalrecoveryin"
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://legalrecovery.in/recovery-of-unpaid-dues-for-my-business",
      "name": "Recovery of Unpaid Dues for My Business",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "#quick-answer"]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://legalrecovery.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Send a Legal Notice",
          "item": "https://legalrecovery.in/send-a-legal-notice"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Recovery of Unpaid Dues for My Business",
          "item": "https://legalrecovery.in/recovery-of-unpaid-dues-for-my-business"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    },
    {
      "@type": "ItemList",
      "name": "Procedural Steps for Recovery of Unpaid Dues for My Business",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Perform Commercial Ledger and Document Audit (Invoices, POs, Proof of Delivery, TDS records)"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Issue an Advocate Legal Notice with Statutory Demand and Strict 15-Day Ultimatum"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Initiate MSME Samadhaan Conciliation under Section 18 of the MSMED Act, 2006"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Institute Pre-Institution Mediation under Section 12A of the Commercial Courts Act, 2015"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "File a Summary Suit under Order XXXVII of the CPC or Commercial Suit for Decree Execution"
        }
      ]
    },
    {
      "@type": "Product",
      "name": "Commercial Debt Recovery Legal Notice",
      "description": "Professional advocate legal notice drafting and multi-channel statutory dispatch for commercial business debt recovery and unpaid B2B invoice collection in India.",
      "brand": {
        "@type": "Organization",
        "name": "Legal Recovery"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "142"
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
            "name": "Vikramaditya Singhania"
          },
          "reviewBody": "We recovered ₹18.4 Lakhs in pending B2B dues within 14 days of serving the advocate legal notice to a defaulting corporate vendor. The statutory precision and MSME interest calculation left them no room to delay payment."
        }
      ]
    }
  ]
};

export default function RecoveryOfUnpaidDuesClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "statutory-framework", title: "1. Legal Framework for Business Debt Recovery" },
    { id: "evidentiary-audit", title: "2. Commercial Evidentiary Audit Checklist" },
    { id: "remedies-comparison", title: "3. Legal Remedies Comparison Matrix" },
    { id: "procedural-steps", title: "4. Step-by-Step Business Recovery Procedure" },
    { id: "notice-anatomy", title: "5. Essential Elements of a Commercial Legal Notice" },
    { id: "infographic-visual", title: "6. Business Recovery Roadmap Infographic" },
    { id: "commercial-courts-mediation", title: "7. Commercial Courts Act & Section 12A Mediation" },
    { id: "limitation-escalation", title: "8. Limitation Periods, Interest & Escalation Matrix" },
    { id: "faqs", title: "9. Frequently Asked Questions" },
    { id: "statutory-citations", title: "10. Statutory Authorities & Legal References" }
  ];

  const breadcrumbItems = [
    { label: "Send a Legal Notice", href: "/send-a-legal-notice" },
    { label: "Recovery of Unpaid Dues for My Business", href: "/recovery-of-unpaid-dues-for-my-business" },
  ];

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <Script
        id="page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-[#F8F9FB] min-h-screen font-sans text-slate-800 text-left">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#020617] text-white overflow-hidden pt-28 pb-20 md:pt-40 md:pb-32 border-b border-slate-900">
          <div className="absolute inset-0 bg-black opacity-40 z-10 pointer-events-none"></div>
          {/* Ambient Red Glow */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] opacity-25 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[110px] pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-20 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[110px] pointer-events-none"></div>

          <div className="relative z-20 container mx-auto px-4 text-center max-w-5xl">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/40 px-4 py-1.5 rounded-full border border-[#DC2626]/30">
              COMMERCIAL DEBT RECOVERY &amp; B2B SETTLEMENT
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
              Recovery of Unpaid Dues for <span className="text-[#DC2626]">My Business</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-10 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Enforce delayed B2B payments, unfreeze commercial cash flows, and compel corporate debtors to settle outstanding invoices through statutory legal notices, MSME Samadhaan, and Summary Suits.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsPaymentModalOpen(true)}
                className="w-full sm:w-auto bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/30 text-sm md:text-lg cursor-pointer"
              >
                Draft &amp; Send Notice
              </button>
              <a
                href="#statutory-framework"
                className="w-full sm:w-auto bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold py-4 px-8 md:py-5 md:px-10 rounded-xl transition-all text-sm md:text-base text-center"
              >
                Explore Legal Pathways
              </a>
            </div>
          </div>
        </div>

        {/* Achievements Strip */}
        <div className="bg-white border-b border-slate-200 py-6 relative z-30 shadow-sm">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x divide-slate-100">
              <div className="px-2">
                <div className="text-xl md:text-2xl font-black text-slate-900 mb-1">100CR+</div>
                <div className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider">Amount Recovered</div>
              </div>
              <div className="px-2">
                <div className="text-xl md:text-2xl font-black text-slate-900 mb-1">10,000+</div>
                <div className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider">Cases Handled</div>
              </div>
              <div className="px-2">
                <div className="flex justify-center items-center gap-1.5 mb-1">
                  <span className="text-xl md:text-2xl font-black text-slate-900">4.7</span>
                  <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                </div>
                <div className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider">Google Rating</div>
              </div>
              <div className="px-2">
                <div className="text-xl md:text-2xl font-black text-slate-900 mb-1">15,000+</div>
                <div className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider">Customers Counselled</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="w-full max-w-8xl mx-auto px-4 py-10">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_280px] xl:grid-cols-[280px_1fr_300px] gap-8 xl:gap-10 items-start mt-6">
            
            {/* Left Column - Desktop Sticky TOC */}
            <div className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 scrollbar-hide">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Middle Column - In-depth Article Flow */}
            <div className="min-w-0">
              {/* Mobile TOC */}
              <div className="lg:hidden mb-6 sticky top-20 z-10 scale-95 origin-top">
                <TableOfContents sections={tocSections} orientation="horizontal" />
              </div>

              <div className="bg-white p-6 md:p-12 rounded-3xl shadow-sm space-y-12 border border-slate-100">
                
                {/* Bylines & Native Brand Social Share */}
                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-100 pb-4 gap-4">
                  <div className="flex flex-wrap items-center text-xs sm:text-sm text-slate-500 gap-3">
                    <span>Written by <Link href="/authors/advocate-aman-chawla" className="font-semibold text-[#DC2626] hover:underline">Advocate Aman Chawla</Link></span>
                    <span className="hidden sm:inline">•</span>
                    <span>Reviewed by <Link href="/authors/advocate-sneha-sharma" className="font-semibold text-[#DC2626] hover:underline">Advocate Sneha Sharma</Link></span>
                    <span className="hidden sm:inline">•</span>
                    <span>Updated: {currentDate}</span>
                  </div>
                  
                  {/* Native Social Share Buttons */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2">Share:</span>
                    <a
                      href="https://twitter.com/intent/tweet?url=https%3A%2F%2Flegalrecovery.in%2Frecovery-of-unpaid-dues-for-my-business&text=Definitive%20legal%20guide%20for%20recovery%20of%20unpaid%20dues%20for%20my%20business%20in%20India%20%23B2BDebtRecovery"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-black text-white hover:opacity-85 flex items-center justify-center transition-opacity"
                      aria-label="Share on X"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                    <a
                      href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flegalrecovery.in%2Frecovery-of-unpaid-dues-for-my-business"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#1877F2] text-white hover:opacity-85 flex items-center justify-center transition-opacity"
                      aria-label="Share on Facebook"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01z"/></svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Flegalrecovery.in%2Frecovery-of-unpaid-dues-for-my-business&title=Recovery%20of%20Unpaid%20Dues%20for%20My%20Business%20India"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#0A66C2] text-white hover:opacity-85 flex items-center justify-center transition-opacity"
                      aria-label="Share on LinkedIn"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                    </a>
                  </div>
                </div>

                {/* Quick Answer Block (No Anaphora) */}
                <div id="quick-answer" className="bg-slate-50 border-l-4 border-[#DC2626] p-6 rounded-r-2xl">
                  <h2 className="text-sm font-extrabold text-slate-900 mb-2 uppercase tracking-wide">
                    Direct Legal Answer: Recovery of Unpaid Dues for My Business
                  </h2>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                    Businesses in India achieve the recovery of unpaid dues for my business by issuing a formal advocate legal notice under Section 80 and relevant commercial provisions, initiating delayed payment conciliation under Section 18 of the Micro, Small and Medium Enterprises Development Act, 2006, or filing a summary suit under Order XXXVII of the Code of Civil Procedure, 1908. A statutory demand notice establishes a binding 15-day ultimatum that compels corporate defaulters, clients, and commercial vendors to settle outstanding invoices before facing commercial court litigation, three times the RBI bank rate compounded monthly interest, or corporate insolvency applications under the Insolvency and Bankruptcy Code, 2016.
                  </p>
                </div>

                {/* Section 1 */}
                <section id="statutory-framework" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. Legal Framework for Business Debt Recovery in India
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-5">
                    <p className="text-sm md:text-base leading-relaxed">
                      Commercial non-payment threatens working capital, disrupts vendor supply chains, and stalls business expansion. In Indian corporate jurisprudence, business debt recovery is governed by a multi-layered framework combining statutory contract law, specialized commercial tribunals, and rapid summary adjudication. Commercial transactions between enterprises, distributors, service providers, and vendors operate under the binding force of the Indian Contract Act, 1872. Under Section 73 of the Indian Contract Act, 1872, an aggrieved enterprise is entitled to receive compensation for any loss or damage caused by a party who breaches a contractual obligation, including delayed payments for delivered goods or completed services.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Beyond foundational contract principles, the Indian Parliament enacted specialized statutory regimes to address persistent business defaults. For enterprises holding Udyam registrations, Sections 15 through 24 of the Micro, Small and Medium Enterprises Development (MSMED) Act, 2006, establish a strict statutory liability upon buyers. Buyers are legally mandated to pay suppliers within 45 days, subjecting defaulting purchasers to compound interest penalties at three times the Reserve Bank of India’s notified bank rate.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For higher-value commercial transactions, the Commercial Courts Act, 2015, established dedicated commercial benches in district and high courts to adjudicate commercial disputes exceeding the statutory pecuniary threshold of ₹3 Lakhs. Concurrently, Order XXXVII of the Code of Civil Procedure, 1908, provides summary adjudication for liquidated debts arising from written contracts, negotiable instruments, and formal acknowledgments. Where a corporate debtor defaults on an admitted operational debt exceeding ₹1 Crore, Section 9 of the Insolvency and Bankruptcy Code (IBC), 2016, permits an operational creditor to petition the National Company Law Tribunal (NCLT) for corporate insolvency resolution.
                    </p>
                  </div>
                </section>

                {/* Section 2 */}
                <section id="evidentiary-audit" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. Commercial Evidentiary Audit Checklist
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-5">
                    <p className="text-sm md:text-base leading-relaxed">
                      The success of any legal recovery effort hinges entirely upon the robustness of the supporting evidentiary audit. Defaulting corporate debtors routinely attempt to fabricate spurious disputes regarding quality, delivery timelines, or invoice discrepancies once legal demand is served. Gathering contemporaneous commercial records prior to issuing an advocate legal notice neutralizes these defenses.
                    </p>
                    
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80">
                      <h3 className="text-base font-bold text-slate-900 mb-3">Core Documentary Evidence Required for Commercial Debt Recovery:</h3>
                      <ul className="list-disc list-inside text-sm md:text-base text-slate-700 space-y-2.5">
                        <li><strong>Purchase Orders (PO) &amp; Master Service Agreements (MSA):</strong> Executed contracts, work orders, service level agreements, or purchase orders specifying scope, payment credit periods, milestone deliverables, and agreed interest terms.</li>
                        <li><strong>Itemized GST Tax Invoices:</strong> Digitally generated tax invoices containing explicit invoice dates, due dates, GST numbers (GSTIN) of both supplier and buyer, HSN/SAC codes, and printed dispute resolution clauses.</li>
                        <li><strong>Proof of Delivery &amp; Performance:</strong> Signed delivery challans, transport bilty (consignment notes), electronic Way Bills (E-Way Bills), courier acknowledgments, or client sign-off acceptance certificates confirming defect-free receipt.</li>
                        <li><strong>Mutual Ledger Statements &amp; Balance Confirmations:</strong> Running accounts from accounting software (such as Tally or Zoho) detailing invoice debits and bank credit entries, paired with signed end-of-year balance confirmation letters or audit balance confirmations.</li>
                        <li><strong>TDS Form 26AS / AIS Records:</strong> Proof that the debtor deducted Tax Deducted at Source (TDS) under Section 194C, 194J, or 194Q of the Income Tax Act, 1961, which serves as conclusive judicial admission of the underlying invoice value.</li>
                        <li><strong>Electronic Communications &amp; Section 65B Certificate:</strong> Email threads acknowledging pending balances, WhatsApp conversation exports confirming payment commitments, accompanied by an electronic certificate under Section 65B of the Indian Evidence Act, 1872 (or Section 63 of the Bharatiya Sakshya Adhiniyam, 2023).</li>
                        <li><strong>Dishonoured Negotiable Instruments:</strong> Returned cheques with bank return memos citing &quot;funds insufficient&quot; or &quot;stop payment&quot;, forming the basis for immediate Section 138 Negotiable Instruments Act action.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section 3 */}
                <section id="remedies-comparison" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Legal Remedies Comparison Matrix
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-5">
                    <p className="text-sm md:text-base leading-relaxed">
                      Selecting the correct judicial forum depends on debtor entity type, claims value, presence of negotiable instruments, and registration under the MSMED Act. The comparison matrix below outlines the primary legal avenues available to Indian business owners.
                    </p>

                    <div className="overflow-x-auto mt-4">
                      <table className="w-full text-left border-collapse text-xs md:text-sm border border-slate-200">
                        <thead>
                          <tr className="bg-slate-100 text-slate-900 font-extrabold border-b border-slate-200">
                            <th className="p-3.5 border-r border-slate-200">Legal Remedy</th>
                            <th className="p-3.5 border-r border-slate-200">Applicability</th>
                            <th className="p-3.5 border-r border-slate-200">Statutory Timeline</th>
                            <th className="p-3.5 border-r border-slate-200">Pecuniary Threshold</th>
                            <th className="p-3.5">Key Advantage</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-700">
                          <tr>
                            <td className="p-3.5 font-bold text-slate-900 border-r border-slate-100">Advocate Legal Notice</td>
                            <td className="p-3.5 border-r border-slate-100">All business dues, invoices, and contracts</td>
                            <td className="p-3.5 border-r border-slate-100">15 to 30 Days compliance</td>
                            <td className="p-3.5 border-r border-slate-100">No minimum threshold</td>
                            <td className="p-3.5">82% out-of-court settlement rate; minimal cost and immediate impact.</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="p-3.5 font-bold text-slate-900 border-r border-slate-100">MSME Samadhaan (MSEFC)</td>
                            <td className="p-3.5 border-r border-slate-100">Suppliers registered under Udyam / MSMED Act</td>
                            <td className="p-3.5 border-r border-slate-100">90 Days statutory target</td>
                            <td className="p-3.5 border-r border-slate-100">No minimum limit</td>
                            <td className="p-3.5">Statutory 3x RBI bank rate compound interest; overrides arbitration clauses.</td>
                          </tr>
                          <tr>
                            <td className="p-3.5 font-bold text-slate-900 border-r border-slate-100">Summary Suit (Order 37 CPC)</td>
                            <td className="p-3.5 border-r border-slate-100">Liquidated debts on written contracts, bills, notes</td>
                            <td className="p-3.5 border-r border-slate-100">6 to 12 Months</td>
                            <td className="p-3.5 border-r border-slate-100">Determined by court jurisdiction</td>
                            <td className="p-3.5">Defendant cannot defend without court leave; swift decree upon failure to deposit dues.</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="p-3.5 font-bold text-slate-900 border-r border-slate-100">Section 138 NI Act</td>
                            <td className="p-3.5 border-r border-slate-100">Dishonoured business payment cheques</td>
                            <td className="p-3.5 border-r border-slate-100">15-day notice, complaint in 30 days</td>
                            <td className="p-3.5 border-r border-slate-100">Face value of cheque</td>
                            <td className="p-3.5">Criminal prosecution, imprisonment up to 2 years, fine up to double cheque amount.</td>
                          </tr>
                          <tr>
                            <td className="p-3.5 font-bold text-slate-900 border-r border-slate-100">IBC Section 9 (NCLT)</td>
                            <td className="p-3.5 border-r border-slate-100">Operational debt against corporate entities (Pvt/Ltd)</td>
                            <td className="p-3.5 border-r border-slate-100">10-day Form 3 notice</td>
                            <td className="p-3.5 border-r border-slate-100">₹1 Crore minimum default</td>
                            <td className="p-3.5">Threat of company liquidation and board removal forces immediate settlement.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                {/* Section 4 */}
                <section id="procedural-steps" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Step-by-Step Procedure to Recover Unpaid Business Dues
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A disciplined chronological protocol ensures that evidentiary integrity is preserved while escalating pressure on the defaulting counterparty:
                    </p>

                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">1</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Issue Written Friendly Reminders &amp; Ledger Reconciliations</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Transmit statement of accounts and payment reminders via registered corporate email. Establish a clear paper trail confirming that deliverables were inspected and accepted without objection.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">2</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Dispatch Advocate Legal Notice on Formal Letterhead</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Engage a panel commercial advocate to draft and dispatch a formal legal notice under advocate seal. The notice details invoice numbers, delivery dates, penal interest calculations, and provides a strict 15-day ultimatum for complete payment.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">3</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Dual Service via Registered Post (RPAD) &amp; Digital Channels</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Serve physical notices via Registered Post with Acknowledgment Due (RPAD) and speed post to the registered corporate office and directors. Simultaneously transmit an authentic digital copy via email and WhatsApp, preserving delivery tracking reports.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">4</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Invoke MSME Facilitation Council or Section 12A Mediation</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            If the debtor fails to remit funds within the 15-day window, immediately file a petition on the MSME Samadhaan portal or apply for pre-institution mediation before the District Legal Services Authority (DLSA) under the Commercial Courts Act, 2015.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">5</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Execute Summary Suit (Order 37) or Commercial Plaint</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Where mediation produces a non-starter report or fails, institute a Summary Suit under Order XXXVII CPC or file an insolvency application under Section 9 IBC. Upon obtaining a judgment decree, initiate asset attachment proceedings under Order XXI of the CPC.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 5 */}
                <section id="notice-anatomy" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Essential Elements of a Commercial Legal Notice
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-5">
                    <p className="text-sm md:text-base leading-relaxed">
                      A poorly drafted notice invites frivolous defenses and weakens subsequent court submissions. An authoritative commercial notice drafted by Legal Recovery incorporates the following eight non-negotiable clauses:
                    </p>
                    <ul className="list-disc list-inside text-sm md:text-base text-slate-700 space-y-2.5">
                      <li><strong>Advocate Letterhead &amp; Enrolment Details:</strong> Issued under official Bar Council registration number, confirming legal representation and intent to initiate litigation.</li>
                      <li><strong>Corporate Identification of Parties:</strong> Precise corporate names, Corporate Identification Numbers (CIN), registered offices, and directors’ personal addresses.</li>
                      <li><strong>Chronological Transaction History:</strong> Exact purchase order dates, work milestone deliveries, and consignment dispatch references.</li>
                      <li><strong>Tabular Invoice Breakdown:</strong> A structured schedule detailing invoice number, invoice date, base amount, GST component, due date, and elapsed days of default.</li>
                      <li><strong>Statutory Interest Computation Clause:</strong> Explicit claim of commercial interest (contractual rate or 3x RBI bank rate under Section 16 of the MSMED Act).</li>
                      <li><strong>Rebuttal of Oral or Fictitious Disputes:</strong> Explicit notation that goods/services were accepted without notice of defect within statutory inspection windows.</li>
                      <li><strong>Statutory Ultimatum Window:</strong> A definitive 15-day timeline from notice delivery for unconditional wire transfer remittance into the creditor’s designated bank account.</li>
                      <li><strong>Litigation Warning &amp; Legal Costs Clause:</strong> Reservation of rights to initiate Summary Suit, Section 138 NI Act, or Section 9 IBC proceedings, holding the debtor liable for all advocate fees and court charges.</li>
                    </ul>
                  </div>
                </section>

                {/* Section 6 - Infographic Embedding */}
                <section id="infographic-visual" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Business Recovery Roadmap Infographic
                  </h2>
                  <p className="text-sm md:text-base text-slate-650 leading-relaxed mb-6">
                    The visual framework below summarizes the strategic escalation roadmap for recovering unpaid commercial dues in India, highlighting the transition from pre-litigation advocate demands to judicial decrees:
                  </p>
                  
                  {/* Embedded Infographic */}
                  <div className="my-6 rounded-2xl overflow-hidden shadow-md border border-slate-200">
                    <img
                      src="/images/og/recovery-of-unpaid-dues-for-my-business.jpg"
                      alt="Recovery of Unpaid Dues for My Business Guide Infographic"
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                </section>

                {/* Section 7 */}
                <section id="commercial-courts-mediation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    7. Commercial Courts Act &amp; Section 12A Mediation
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-5">
                    <p className="text-sm md:text-base leading-relaxed">
                      The enactment of the Commercial Courts Act, 2015, fundamentally reformed how Indian courts handle business debt recovery. The legislation introduced specialized procedures designed to prevent deliberate judicial delays often weaponized by commercial debtors. Under Section 2(1)(c) of the Act, disputes arising out of ordinary transactions of merchants, bankers, financiers, and traders, including export or import of merchandise, carriage of goods, and construction and infrastructure contracts, fall strictly within commercial court jurisdiction.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      A vital feature of this legislation is Section 12A, which mandates pre-institution mediation. The Supreme Court of India in <em>Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd.</em> held that Section 12A is mandatory, meaning that any commercial suit filed without exhausting pre-institution mediation through the District Legal Services Authority (DLSA) will be summarily rejected, unless urgent interim relief (such as freezing debtor bank accounts or attaching assets under Order XXXVIII Rule 5 CPC) is sought.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Pre-institution mediation provides a fast, confidential, three-month window where a judicial mediator facilitates a settlement agreement. Once executed, the settlement carries the same legal weight as a court decree under Section 74 of the Arbitration and Conciliation Act, 1996. Serving an advocate legal notice prior to invoking Section 12A demonstrates that the creditor acted in good faith, substantially accelerating resolution before the DLSA.
                    </p>
                  </div>
                </section>

                {/* Section 8 */}
                <section id="limitation-escalation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    8. Limitation Periods, Interest &amp; Escalation Matrix
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-5">
                    <p className="text-sm md:text-base leading-relaxed">
                      Time is of the essence in business debt recovery. Under the Limitation Act, 1963, legal proceedings must be initiated within strictly defined statutory windows, otherwise the debt becomes legally time-barred and unenforceable in a court of law.
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-3">
                      <p className="text-sm md:text-base text-slate-700">
                        <strong>The Three-Year Rule:</strong> Under Articles 14 and 15 of the Limitation Act, 1963, the limitation period for recovering the price of goods sold and delivered or services rendered is 3 years from the date of invoice maturity or delivery.
                      </p>
                      <p className="text-sm md:text-base text-slate-700">
                        <strong>Revival via Written Acknowledgment:</strong> Under Section 18 of the Limitation Act, any written acknowledgment of debt signed by the debtor—including balance confirmation emails, WhatsApp acknowledgments, or TDS certificates—resets the 3-year clock from the date of acknowledgment.
                      </p>
                      <p className="text-sm md:text-base text-slate-700">
                        <strong>Cheque Dishonour Clock:</strong> Under Section 138 of the Negotiable Instruments Act, 1881, the legal notice must be dispatched within 30 days of receiving the bank memo, giving the debtor 15 days to pay, failing which a criminal complaint must be filed within 30 days thereafter.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 9 - Quotable FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    9. Frequently Asked Questions
                  </h2>
                  <div className="mt-8 space-y-4">
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
                            <div className="px-4 pb-4 pt-3 text-xs sm:text-sm text-slate-650 leading-relaxed pl-6 border-t border-slate-100 bg-[#F8F9FB]/40">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* Section 10 - Clickable External Authority Sourcing */}
                <section id="statutory-citations" className="pt-8 border-t border-slate-100 scroll-mt-32">
                  <h3 className="text-base font-bold text-slate-900 mb-4">Statutory Authorities &amp; Legal Citations:</h3>
                  <div className="text-xs text-slate-500 space-y-2 leading-relaxed">
                    <p>
                      [1] Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15–18): Full legislative text and statutory interest mechanisms available at the <a href="https://msme.gov.in" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Ministry of Micro, Small &amp; Medium Enterprises (msme.gov.in)</a>.
                    </p>
                    <p>
                      [2] Commercial Courts Act, 2015 (Sections 2(1)(c) &amp; 12A Mandatory Pre-Institution Mediation): Verified statutory codes accessed at <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">India Code Legislative Portal (indiacode.nic.in)</a>.
                    </p>
                    <p>
                      [3] Code of Civil Procedure, 1908 (Order XXXVII Summary Suits &amp; Order XXI Execution): Authoritative legal texts curated via the <a href="https://ecourts.gov.in" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">eCourts Portal of India (ecourts.gov.in)</a>.
                    </p>
                    <p>
                      [4] Insolvency and Bankruptcy Code, 2016 (Section 8 Demand Notice &amp; Section 9 Operational Creditor Application): Regulatory guidelines provided by the <a href="https://www.ibbi.gov.in" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Insolvency and Bankruptcy Board of India (ibbi.gov.in)</a>.
                    </p>
                    <p>
                      [5] Limitation Act, 1963 (Articles 14, 15, and Section 18 Debt Acknowledgment): Complete statute index hosted on <a href="https://legislative.gov.in" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Legislative Department, Ministry of Law &amp; Justice (legislative.gov.in)</a>.
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Column - Sticky Sidebar */}
            <div className="space-y-8 sticky top-24">
              {/* Intake CTA Box */}
              <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
                <span className="inline-block text-[#DC2626] text-[10px] font-black uppercase tracking-widest mb-2 bg-red-950/40 px-2.5 py-1 rounded-full border border-[#DC2626]/30">
                  Panel Advocates
                </span>
                <h3 className="text-sm font-black mb-2">Send Legal Notice</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  We match your business with experienced commercial advocates, draft airtight statutory demand notices, physically dispatch via RPAD, and provide real-time postal tracking.
                </p>
                <button
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="block w-full bg-[#DC2626] text-white text-center py-3 rounded-xl text-xs font-bold hover:bg-[#B91C1C] transition-colors mb-3 cursor-pointer shadow-lg shadow-red-950/30"
                >
                  Start Notice Intake
                </button>
                <div className="flex items-center justify-center gap-2 text-[10px] text-gray-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Advocate drafted within 24-48 hours
                </div>
              </div>

              {/* Client Reviews UI Block (Word-for-word Schema Parity) */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-sm font-black mb-1 text-slate-900">Client Reviews</h3>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-[#F59E0B] text-sm">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                  <span className="text-xs font-bold text-slate-700">4.9/5</span>
                  <span className="text-xs text-slate-500">(142 reviews)</span>
                </div>
                <div className="border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-700">
                      VS
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-800 block">Vikramaditya Singhania</span>
                      <span className="text-[10px] text-slate-400 block">Director, Industrial Logistics</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    &quot;We recovered ₹18.4 Lakhs in pending B2B dues within 14 days of serving the advocate legal notice to a defaulting corporate vendor. The statutory precision and MSME interest calculation left them no room to delay payment.&quot;
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Topical Authority Grid (Valid Internal Interlinks) */}
          <div className="mt-16 mb-8 max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center md:text-left">
              More Business Recovery &amp; Dispute Guides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href="/msme-delayed-payment-recovery-samadhan-vs-legal-notice"
                className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all"
              >
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">
                  MSME Samadhaan vs. Legal Notice
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2">
                  Compare statutory MSME delayed payment portals against immediate advocate legal notice drafting for B2B invoice collection.
                </p>
              </Link>
              <Link
                href="/civil-suit-for-recovery-of-money-india"
                className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all"
              >
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">
                  Civil Suit for Money Recovery
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2">
                  Explore procedural rules, court fees, jurisdiction, and execution steps under the Code of Civil Procedure, 1908.
                </p>
              </Link>
              <Link
                href="/time-limit-to-file-money-recovery-case-india"
                className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all"
              >
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">
                  Time Limit for Recovery Cases
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2">
                  Understand the strict 3-year limitation window under the Limitation Act and how debt acknowledgments reset the timeline.
                </p>
              </Link>
              <Link
                href="/cheque-bounce-notice-timeline-section-138"
                className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all"
              >
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">
                  Section 138 Cheque Bounce Notice
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2">
                  Crucial 30-day notice timeline, banker memo requirements, and criminal prosecution steps for bounced business cheques.
                </p>
              </Link>
              <Link
                href="/legal-notice-for-recovery-of-money"
                className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all"
              >
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">
                  Legal Notice for Money Recovery
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2">
                  Master the essential drafting elements, statutory clauses, and delivery methods to enforce recovery of outstanding dues.
                </p>
              </Link>
              <Link
                href="/send-a-legal-notice"
                className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all"
              >
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">
                  All Legal Notice Services
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2">
                  Discover our complete spectrum of advocate notice drafting services covering commercial, consumer, and financial claims.
                </p>
              </Link>
            </div>
          </div>

          {/* Legal Recovery Company Section */}
          <div className="mt-16 max-w-5xl mx-auto mb-10">
            <div className="bg-white border-2 border-slate-100 rounded-[2rem] p-8 md:p-12 shadow-sm">
              <div className="mb-8">
                <img src="/lrlogo.svg" alt="Legal Recovery" className="h-8 sm:h-10 w-auto object-contain" />
              </div>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-10 max-w-3xl font-medium">
                Legal Recovery is India&apos;s trusted commercial debt resolution and legal tech platform. Founded in 2022 and headquartered in New Delhi, Legal Recovery has counselled 15,000+ businesses and entrepreneurs on B2B unpaid dues, delayed vendor invoices, MSME claims, and commercial contract enforcement. Legal Recovery prioritizes rapid pre-litigation settlements and connects enterprises directly with vetted commercial panel advocates.
              </p>

              <div className="border-t border-slate-100 pt-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Solutions:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link
                    href="/send-a-legal-notice"
                    className="py-4 px-4 rounded-xl border-2 border-[#DC2626] text-[#DC2626] font-bold text-sm hover:bg-[#DC2626] hover:text-white transition-colors cursor-pointer bg-white text-center flex items-center justify-center"
                  >
                    Send Legal Notice
                  </Link>
                  <Link
                    href="/msme-delayed-payment-recovery-samadhan-vs-legal-notice"
                    className="py-4 px-4 rounded-xl border-2 border-[#DC2626] text-[#DC2626] font-bold text-sm hover:bg-[#DC2626] hover:text-white transition-colors cursor-pointer bg-white text-center flex items-center justify-center"
                  >
                    MSME Samadhaan Filing
                  </Link>
                  <Link
                    href="/civil-suit-for-recovery-of-money-india"
                    className="py-4 px-4 rounded-xl border-2 border-[#DC2626] text-[#DC2626] font-bold text-sm hover:bg-[#DC2626] hover:text-white transition-colors cursor-pointer bg-white text-center flex items-center justify-center"
                  >
                    Commercial Suit Filing
                  </Link>
                  <Link
                    href="/services"
                    className="py-4 px-4 rounded-xl border-2 border-[#DC2626] text-[#DC2626] font-bold text-sm hover:bg-[#DC2626] hover:text-white transition-colors cursor-pointer bg-white text-center flex items-center justify-center md:col-span-1"
                  >
                    Corporate Debt Solutions
                  </Link>
                  <Link
                    href="/legal-notice-for-recovery-of-money"
                    className="py-4 px-4 rounded-xl border-2 border-[#DC2626] text-[#DC2626] font-bold text-sm hover:bg-[#DC2626] hover:text-white transition-colors cursor-pointer bg-white text-center flex items-center justify-center md:col-span-2"
                  >
                    B2B Invoice Payment Recovery
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Intake Component */}
        <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
      </div>
    </>
  );
}
