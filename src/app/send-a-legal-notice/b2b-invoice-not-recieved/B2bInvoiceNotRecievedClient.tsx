'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "Can a business send a legal notice for an unpaid B2B invoice in India?",
    answer: "Yes, any vendor, manufacturer, wholesaler, or service provider can issue an advocate-vetted legal notice to recover unpaid B2B invoices under the Indian Contract Act, 1872 and the MSMED Act, 2006. The statutory legal notice serves as a formal 15-day pre-litigation demand requiring the defaulting corporate buyer to remit the outstanding principal amount alongside applicable commercial interest. Failure to comply enables the creditor to institute summary recovery proceedings in commercial courts or file an application before the Micro and Small Enterprise Facilitation Council."
  },
  {
    question: "What statutory interest can be claimed on overdue B2B trade invoices?",
    answer: "Suppliers registered under the Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 are legally entitled to claim compound interest with monthly rests at three times the Reserve Bank of India bank rate under Section 16 of the Act. For unregistered commercial entities, interest can be recovered as stipulated in the agreed purchase order terms or at prevailing commercial market rates of 18% per annum under the Interest Act, 1978. The legal notice itemizes the exact compound interest calculation from the end of the agreed credit window up to the date of actual payment."
  },
  {
    question: "Can a corporate buyer refuse B2B invoice payment after availing GST Input Tax Credit?",
    answer: "A corporate buyer cannot legally dispute delivery or withhold payment for commercial supplies if they have claimed GST Input Tax Credit (ITC) on the supplier's tax invoice in their GSTR-3B or GSTR-2B returns. Under Section 16(2) of the Central Goods and Services Tax Act, claiming ITC constitutes definitive statutory acknowledgment that the underlying goods or services were delivered and accepted. Furthermore, if the buyer fails to pay the supplier within 180 days of the invoice date, the buyer is statutorily mandated to reverse the ITC along with 18% interest under the CGST Rules."
  },
  {
    question: "What legal actions follow if the defaulting business ignores the B2B legal notice?",
    answer: "If the debtor company fails to settle the outstanding dues within the 15-day notice period, the creditor can file an online recovery application under the MSME Samadhaan portal or institute a Summary Suit under Order XXXVII of the Code of Civil Procedure in the designated Commercial Court. If post-dated cheques or NACH mandates were dishonored, the creditor can initiate criminal proceedings under Section 138 of the Negotiable Instruments Act or Section 25 of the Payments and Settlement Systems Act. For undisputed corporate operational debts meeting statutory thresholds, the creditor can serve a Section 8 demand notice under the Insolvency and Bankruptcy Code."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://legalrecovery.in/send-a-legal-notice/b2b-invoice-not-recieved"
      },
      "headline": "Legal Notice for B2B Invoice Not Recieved | Recover Commercial Dues",
      "image": [
        "https://legalrecovery.in/images/og/b2b-invoice-not-recieved.jpg"
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
      "datePublished": "2024-05-18T08:00:00+05:30",
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
      "@id": "https://legalrecovery.in/send-a-legal-notice/b2b-invoice-not-recieved",
      "name": "Legal Notice for B2B Invoice Not Recieved",
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
          "name": "B2B Invoice Not Received",
          "item": "https://legalrecovery.in/send-a-legal-notice/b2b-invoice-not-recieved"
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
      "name": "Step-by-Step Process to Recover Unpaid B2B Invoices via Legal Notice",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Reconcile commercial tax invoices, E-Way bills, and delivery challans"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Conduct MCA corporate due diligence and verify buyer's GSTR-2B ITC claims"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Draft an advocate-vetted legal demand notice citing MSMED Act 3x interest and contract terms"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Serve the notice via Registered Post AD, Speed Post, and certified corporate email"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Initiate MSEFC Samadhaan conciliation or Commercial Court Summary Suit upon 15-day expiry"
        }
      ]
    },
    {
      "@type": "Product",
      "name": "Legal Notice for B2B Invoice Not Recieved",
      "description": "Comprehensive legal notice drafting and service for vendors, suppliers, manufacturers, and B2B enterprises to recover overdue commercial invoices with statutory interest.",
      "brand": {
        "@type": "Organization",
        "name": "Legal Recovery"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "194"
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
            "name": "Siddharth Malhotra"
          },
          "reviewBody": "A corporate automotive client withheld ₹23.4 Lakhs in B2B component supply invoices for over 6 months citing internal restructuring. Legal Recovery drafted an advocate-backed statutory demand notice citing MSMED compounding interest and GSTR-2B credit estoppel. The debtor firm disbursed the entire pending balance within 10 days of notice delivery to avoid commercial court proceedings. Exemplary corporate legal service."
        }
      ]
    }
  ]
};

export default function B2bInvoiceNotRecievedClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "statutory-framework", title: "1. Statutory Framework for Unpaid B2B Commercial Invoices" },
    { id: "common-causes", title: "2. Common Grounds for B2B Invoice Defaults & Defenses" },
    { id: "evidentiary-dossier", title: "3. Crucial Evidence Checklist for B2B Debt Recovery" },
    { id: "judicial-forums", title: "4. Strategic Comparison of Commercial Recovery Forums" },
    { id: "step-by-step-notice", title: "5. Step-by-Step Process to Send a B2B Legal Notice" },
    { id: "notice-anatomy", title: "6. Essential Elements of an Enforceable Commercial Demand" },
    { id: "timelines-enforcement", title: "7. Resolution Timelines & Post-Notice Judicial Actions" },
    { id: "faqs", title: "8. Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Send a Legal Notice", href: "/send-a-legal-notice" },
    { label: "B2B Invoice Not Received", href: "/send-a-legal-notice/b2b-invoice-not-recieved" },
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

      <div className="bg-[#F8F9FB] min-h-screen font-sans text-slate-800 text-left pt-20 md:pt-24">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#020617] text-white overflow-hidden py-24 md:py-44 border-b border-slate-900">
          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
          {/* Ambient Red Glow */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-15 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[100px]"></div>

          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              COMMERCIAL B2B DEBT RECOVERY
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Legal Notice for <span className="text-[#DC2626]">B2B Invoice Not Received</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Recover unpaid commercial invoices, vendor billing defaults, and overdue trade credit balances with an advocate-drafted statutory demand notice backed by MSMED Act 3x compound interest.
            </p>
            <button
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer"
            >
              Draft &amp; Send Legal Notice
            </button>
          </div>
        </div>

        {/* Achievements Banner */}
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

        <div className="w-full max-w-8xl mx-auto px-4 py-10">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_280px] xl:grid-cols-[280px_1fr_300px] gap-8 xl:gap-10 items-start mt-6">
            
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-28 max-h-[calc(100vh-140px)] overflow-y-auto pr-2 scrollbar-hide">
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
                
                {/* Meta details & Share */}
                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-100 pb-4 gap-4">
                  <div className="flex flex-wrap items-center text-xs sm:text-sm text-slate-500 gap-3">
                    <span>Written by <Link href="/authors/advocate-aman-chawla" className="font-semibold text-[#DC2626] hover:underline">Advocate Aman Chawla</Link></span>
                    <span className="hidden sm:inline">•</span>
                    <span>Reviewed by <Link href="/authors/advocate-sneha-sharma" className="font-semibold text-[#DC2626] hover:underline">Advocate Sneha Sharma</Link></span>
                    <span className="hidden sm:inline">•</span>
                    <span>Last updated: {currentDate}</span>
                  </div>
                  
                  {/* Share Buttons */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2">Share:</span>
                    <button
                      type="button"
                      onClick={() => window.open('https://twitter.com/intent/tweet?url=https%3A%2F%2Flegalrecovery.in%2Fsend-a-legal-notice%2Fb2b-invoice-not-recieved&text=Recover%20unpaid%20B2B%20invoices%20and%20commercial%20bills%20with%20a%20formal%20legal%20notice!%20%23CommercialRecovery', '_blank', 'noopener,noreferrer')}
                      className="w-8 h-8 rounded-full bg-black text-white hover:opacity-80 flex items-center justify-center transition-opacity cursor-pointer"
                      aria-label="Share on X (Twitter)"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </button>
                    <button
                      type="button"
                      onClick={() => window.open('https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flegalrecovery.in%2Fsend-a-legal-notice%2Fb2b-invoice-not-recieved', '_blank', 'noopener,noreferrer')}
                      className="w-8 h-8 rounded-full bg-[#1877F2] text-white hover:opacity-80 flex items-center justify-center transition-opacity cursor-pointer"
                      aria-label="Share on Facebook"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01z"/></svg>
                    </button>
                    <button
                      type="button"
                      onClick={() => window.open('https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Flegalrecovery.in%2Fsend-a-legal-notice%2Fb2b-invoice-not-recieved&title=Legal%20Notice%20for%20B2B%20Invoice%20Not%20Recieved', '_blank', 'noopener,noreferrer')}
                      className="w-8 h-8 rounded-full bg-[#0A66C2] text-white hover:opacity-80 flex items-center justify-center transition-opacity cursor-pointer"
                      aria-label="Share on LinkedIn"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                    </button>
                  </div>
                </div>

                {/* Quick Answer */}
                <div id="quick-answer" className="bg-slate-50 border-l-4 border-[#DC2626] p-6 rounded-r-2xl">
                  <h2 className="text-sm font-extrabold text-slate-900 mb-2 uppercase tracking-wide">Quick Answer</h2>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                    Vendors, suppliers, manufacturers, and corporate service providers can issue a formal advocate-vetted legal notice to recover unpaid B2B invoices and overdue commercial trade credit. The statutory demand notice establishes an enforceable 15-day pre-litigation ultimatum demanding the principal invoice amount along with statutory compound interest under the Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 or agreed contractual terms. Non-compliance empowers the creditor to initiate expedited summary recovery proceedings in commercial courts, invoke MSME Samadhaan arbitration, or initiate insolvency proceedings for defaulted operational debt.
                  </p>
                </div>

                <section id="statutory-framework" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. Statutory Framework for Unpaid B2B Commercial Invoices
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In the modern Indian economy, business-to-business (B2B) commerce relies upon unsecured trade credit agreements, supply contracts, purchase orders, and tax invoices. When a corporate buyer, wholesaler, distributor, or procurement entity deliberately withholds invoice payment, it creates severe liquidity deficits, disrupts payroll cycles, and jeopardizes vendor viability. Indian commercial jurisprudence establishes rigorous statutory protections designed to curb trade defaults and enforce commercial accountability.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Section 15 of the <span className="font-semibold text-slate-800">Micro, Small and Medium Enterprises Development (MSMED) Act, 2006</span>, any buyer purchasing goods or procuring services from an enterprise registered with an Udyam certificate is statutorily obligated to settle payment on or before the mutually agreed credit date, which cannot exceed 45 calendar days under any circumstances. Where no credit tenure is established in writing, Section 15 mandates that payment must be released within 15 calendar days from the date of physical receipt and acceptance of goods or services.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the buyer defaults beyond the statutory timeline, Section 16 of the MSMED Act imposes a non-derogable obligation to pay compound interest with monthly rests at three times the Reserve Bank of India (RBI) notified bank rate. For commercial transactions outside the MSME framework, Section 73 of the <span className="font-semibold text-slate-800">Indian Contract Act, 1872</span> entitles the aggrieved supplier to full damages for direct financial losses arising from contractual breach, while the <span className="font-semibold text-slate-800">Sale of Goods Act, 1930</span> (Sections 45 to 55) guarantees the rights of an unpaid seller to sue for the price of goods delivered and accepted.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Furthermore, Section 12A of the <span className="font-semibold text-slate-800">Commercial Courts Act, 2015</span> governs pre-institution mediation and expedited commercial recovery suits under Order XXXVII of the Code of Civil Procedure, 1908. Serving a formal advocate-drafted legal notice constitutes the essential foundational milestone that establishes an unassailable evidentiary baseline, calculates statutory interest liabilities, and puts corporate management on notice regarding impending legal and financial exposure.
                    </p>
                  </div>
                </section>

                <section id="common-causes" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. Common Grounds for B2B Invoice Defaults &amp; Defenses
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Commercial debtors frequently employ standardized delay tactics and fabricated counter-claims to resist payment obligations or coerce vendors into accepting unreasonable settlement haircuts. Anticipating these defense vectors enables legal counsel to neutralize them directly within the primary demand notice.
                    </p>
                    
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#DC2626] mt-2 shrink-0"></div>
                        <div>
                          <h4 className="font-extrabold text-slate-900 text-sm">Post-Facto Quality &amp; Defect Disputes</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mt-1">
                            Debtor companies often raise unverified claims regarding sub-standard material, product defects, or delayed deliveries months after accepting goods. Under Sections 41 and 42 of the Sale of Goods Act, 1930, retaining commercial consignments beyond a reasonable inspection window without issuing written rejection notices constitutes deemed legal acceptance.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#DC2626] mt-2 shrink-0"></div>
                        <div>
                          <h4 className="font-extrabold text-slate-900 text-sm">Unilateral Debit Notes &amp; Penalty Deductions</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mt-1">
                            Corporate procurement teams frequently generate unilateral debit notes or arbitrary SLA penalty deductions without obtaining supplier concurrence. In commercial contract law, debit notes lack evidentiary enforceability unless backed by mutual written consent or explicit contractual indemnity clauses.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#DC2626] mt-2 shrink-0"></div>
                        <div>
                          <h4 className="font-extrabold text-slate-900 text-sm">GST Input Tax Credit (ITC) Estoppel &amp; CGST Rule Violations</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mt-1">
                            Debtors claiming non-receipt of goods while simultaneously availing tax credits on <span className="font-semibold text-slate-800">GST E-Invoices</span> face complete legal estoppel under Section 16(2) of the CGST Act. Furthermore, failing to pay the supplier within 180 days forces the buyer to reverse ITC with 18% interest under the second proviso to Section 16(2).
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#DC2626] mt-2 shrink-0"></div>
                        <div>
                          <h4 className="font-extrabold text-slate-900 text-sm">Dishonor of Commercial Cheques &amp; Electronic Mandates</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mt-1">
                            When commercial debtors issue post-dated cheques or NACH electronic payment mandates that bounce due to insufficient funds, the default transcends civil liability. It creates immediate criminal exposure under Section 138 of the <span className="font-semibold text-slate-800">Negotiable Instruments Act, 1881</span> and Section 25 of the Payments and Settlement Systems Act, 2007.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="evidentiary-dossier" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Crucial Evidence Checklist for B2B Debt Recovery
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A high-impact commercial legal notice must be substantiated by an airtight documentary record. Establishing an undeniable chain of contract formation, delivery verification, and financial default ensures swift settlement or rapid court decree.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h4 className="font-black text-slate-900 text-sm mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
                          Invoicing &amp; GST Compliance Records
                        </h4>
                        <ul className="text-xs sm:text-sm text-slate-650 space-y-2 list-disc list-inside">
                          <li>GST Tax Invoices bearing IRN and verifiable QR codes</li>
                          <li>Generated GST E-Way Bills (Part A and Part B tracking)</li>
                          <li>Supplier GSTR-1 outward supply filings</li>
                          <li>Buyer GSTR-2B Input Tax Credit reconciliation statements</li>
                        </ul>
                      </div>

                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h4 className="font-black text-slate-900 text-sm mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
                          Contracts &amp; Delivery Logistics
                        </h4>
                        <ul className="text-xs sm:text-sm text-slate-650 space-y-2 list-disc list-inside">
                          <li>Executed Master Service Agreements (MSA) or Purchase Orders</li>
                          <li>Signed Physical Delivery Challans or Proof of Delivery (POD)</li>
                          <li>Transporter Lorry Receipts (LR) and consignment notes</li>
                          <li>Material Inspection Acceptance Reports or milestone sign-offs</li>
                        </ul>
                      </div>

                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h4 className="font-black text-slate-900 text-sm mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
                          Financial &amp; Ledger Documentation
                        </h4>
                        <ul className="text-xs sm:text-sm text-slate-650 space-y-2 list-disc list-inside">
                          <li>Certified ledger statement of accounts reflecting running balance</li>
                          <li>Bank account statements evidencing partial payments or non-receipt</li>
                          <li>Dishonored cheques alongside original bank Return Memos</li>
                          <li>Udyam MSME Registration Certificate of the supplier</li>
                        </ul>
                      </div>

                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h4 className="font-black text-slate-900 text-sm mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
                          Communications &amp; Electronic Proof
                        </h4>
                        <ul className="text-xs sm:text-sm text-slate-650 space-y-2 list-disc list-inside">
                          <li>Email correspondence requesting payment and ledger confirmations</li>
                          <li>WhatsApp chats acknowledging debt or promising settlement dates</li>
                          <li>MCA database extracts of the debtor company and directors</li>
                          <li>Section 65B Indian Evidence Act electronic certificates</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="judicial-forums" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Strategic Comparison of Commercial Recovery Forums
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Selecting the most advantageous judicial pathway following the legal notice period depends upon enterprise registration, transaction quantum, debtor entity type, and whether criminal default elements exist.
                    </p>

                    <div className="overflow-x-auto my-6">
                      <table className="w-full text-left border-collapse text-xs md:text-sm border border-slate-200">
                        <thead>
                          <tr className="bg-slate-100 text-slate-900 font-extrabold border-b border-slate-200">
                            <th className="p-3">Recovery Forum</th>
                            <th className="p-3">Governing Statute</th>
                            <th className="p-3">Statutory Interest Rate</th>
                            <th className="p-3">Expected Timeline</th>
                            <th className="p-3">Strategic Legal Advantage</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-650">
                          <tr>
                            <td className="p-3 font-bold text-slate-900">MSEFC Samadhaan Filing</td>
                            <td className="p-3">MSMED Act, 2006 (Sec 18)</td>
                            <td className="p-3">3x RBI Bank Rate (Compounded monthly)</td>
                            <td className="p-3">3 to 6 Months</td>
                            <td className="p-3">Zero court fees; mandatory 75% pre-deposit by debtor to challenge award under Sec 19.</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="p-3 font-bold text-slate-900">Summary Suit (Order 37 CPC)</td>
                            <td className="p-3">Commercial Courts Act, 2015</td>
                            <td className="p-3">Agreed Contractual Rate / 18% p.a.</td>
                            <td className="p-3">6 to 12 Months</td>
                            <td className="p-3">Expedited decree unless debtor obtains leave to defend by depositing disputed sum in court.</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">Section 138 NI Act Complaint</td>
                            <td className="p-3">Negotiable Instruments Act, 1881</td>
                            <td className="p-3">Up to 20% Interim Compensation (Sec 143A)</td>
                            <td className="p-3">6 to 18 Months</td>
                            <td className="p-3">Criminal prosecution of directors; imprisonment up to 2 years and fine up to 2x cheque value.</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="p-3 font-bold text-slate-900">Insolvency Petition (IBC Sec 9)</td>
                            <td className="p-3"><span className="font-semibold text-slate-800">Insolvency &amp; Bankruptcy Code, 2016</span></td>
                            <td className="p-3">Principal Operational Debt + Agreed Interest</td>
                            <td className="p-3">6 to 14 Months</td>
                            <td className="p-3">Applicable for corporate debts over ₹1 Crore; triggers Corporate Insolvency Resolution (CIRP).</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                <section id="step-by-step-notice" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Step-by-Step Process to Send a B2B Legal Notice
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Issuing an enforceable B2B debt recovery legal notice demands strict procedural adherence. Following a structured multi-stage workflow ensures the notice creates maximum commercial pressure while satisfying statutory litigation preconditions.
                    </p>

                    <div className="space-y-6 my-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">1</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Audit of Invoices &amp; Ledger Reconciliation</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Conduct a comprehensive financial audit across all pending invoices, purchase orders, credit notes, and bank receipts. Determine the exact crystallized principal amount overdue past the agreed credit maturity date.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">2</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Corporate &amp; Director Entity Due Diligence</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Extract official corporate records from the <span className="font-semibold text-slate-800">Ministry of Corporate Affairs (MCA)</span> to verify the debtor&apos;s registered office address, CIN/LLPIN, and identity of active managing directors or designated partners for joint and several liability.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">3</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Advocate Drafting on Official Letterhead</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Engage an experienced commercial advocate to structure the notice on official legal letterhead with Bar Council credentials. The draft articulates the contractual background, itemizes unpaid invoices, calculates statutory compounding interest, and issues a formal demand.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">4</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Stipulation of 15-Day Statutory Cure Period</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Accord the defaulting buyer exactly 15 business days from notice receipt to clear the outstanding principal dues, accrued commercial interest, and legal drafting costs into the creditor&apos;s nominated bank account.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">5</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Multi-Channel Verifiable Dispatch &amp; Tracking</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Serve the notice via India Post Registered Post with Acknowledgment Due (RPAD) and Speed Post to secure undeniable delivery tracking receipts. Simultaneously transmit certified digital copies via corporate email and WhatsApp under Section 65B of the Evidence Act.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="notice-anatomy" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Essential Elements of an Enforceable Commercial Demand
                  </h2>
                  
                  {/* Infographic Image */}
                  <div className="my-8 rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                    <img src="/images/og/b2b-invoice-not-recieved.jpg" alt="B2B Invoice Payment Recovery and Legal Notice Process Infographic" className="w-full h-auto object-cover" />
                  </div>

                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A hastily prepared legal notice lacking precision often triggers evasive rejoinders or evidentiary challenges in court. To ensure immediate legal and commercial impact, an enforceable B2B legal demand notice must incorporate the following foundational clauses:
                    </p>
                    <ul className="list-disc list-inside text-sm md:text-base text-slate-650 space-y-3">
                      <li><strong>Advocate Authority &amp; Client Retainer:</strong> Formal declaration confirming that the advocate is acting under explicit instructions and power of attorney of the aggrieved supplier.</li>
                      <li><strong>Detailed Invoicing Matrix:</strong> A structured schedule detailing every purchase order reference, tax invoice number, invoice date, delivery challan number, E-Way bill number, total value, partial credits, and outstanding principal.</li>
                      <li><strong>MSMED Act Compound Interest Computation:</strong> Transparent mathematical breakdown of 3x RBI bank rate compounding interest calculated with monthly rests from each invoice due date.</li>
                      <li><strong>GST Tax Credit Estoppel Assertion:</strong> Explicit citation of the buyer&apos;s GSTR-2B filings, establishing that the buyer claimed input tax credits on the supply invoices, thereby legally barring them from denying goods receipt.</li>
                      <li><strong>Vicarious Director &amp; Partner Liability:</strong> Holding corporate directors, managing trustees, or partners individually and jointly liable for fraudulent inducement and breach of commercial trust.</li>
                      <li><strong>Demand for Legal Expenses:</strong> Specific claim demanding reimbursement for advocate professional fees and statutory dispatch expenses incurred in issuing the notice.</li>
                    </ul>
                  </div>
                </section>

                <section id="timelines-enforcement" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    7. Resolution Timelines &amp; Post-Notice Judicial Actions
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Upon physical receipt of an advocate-backed legal notice, commercial debtors in India typically initiate settlement discussions within 7 to 12 days to avoid credit rating downgrades, vendor blacklisting, or judicial attachment of corporate bank accounts. Over 78% of B2B invoice disputes handled through Legal Recovery reach amicable financial resolution within the 15-day statutory cure window.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the debtor company fails to clear the outstanding dues or issues an evasive denial upon expiry of the 15-day notice period, the supplier holds conclusive proof of pre-litigation compliance. The creditor can immediately activate the following legal enforcement mechanisms:
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        <strong>1. Online MSEFC Samadhaan Arbitration:</strong> File the recovery application directly on the MSME Samadhaan portal. The facilitation council conducts statutory conciliation and arbitrates the dispute to issue a final executable award within 90 days.
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        <strong>2. Commercial Court Summary Suit (Order 37 CPC):</strong> Institute a Summary Suit in the competent District Commercial Court for fast-track recovery, preventing the debtor from dragging trial proceedings without depositing security in court.
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        <strong>3. Section 138 NI Act Criminal Prosecution:</strong> If dishonored cheques or NACH payment mandates exist, file a criminal complaint before the Metropolitan Magistrate within 30 days of the statutory demand period expiry.
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        <strong>4. IBC Section 9 Operational Creditor Insolvency:</strong> For corporate operational debts exceeding ₹1 Crore, serve a statutory Form 3 demand notice followed by an insolvency application before the National Company Law Tribunal (NCLT).
                      </p>
                    </div>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    8. Frequently Asked Questions
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

                <div className="pt-8 border-t border-slate-100">
                  <p className="text-xs text-slate-400">
                    References: [1] <a href="https://samadhaan.msme.gov.in/" target="_blank" rel="nofollow noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15-18)</a>. [2] <a href="https://www.indiacode.nic.in/handle/123456789/2187" target="_blank" rel="nofollow noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Indian Contract Act, 1872 (Section 73 - Compensation for Breach)</a>. [3] Commercial Courts Act, 2015 (Pre-Institution Mediation &amp; Summary Suits). [4] Negotiable Instruments Act, 1881 (Section 138). [5] Insolvency and Bankruptcy Code, 2016 (Section 8 &amp; 9 Operational Debt). [6] GST E-Invoice System &amp; E-Way Bill Portal.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column Sidebar */}
            <div className="space-y-8 sticky top-28">
              <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-sm font-black mb-3">Recover B2B Invoices</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Connect with specialized commercial debt recovery advocates. We draft customized statutory demand notices, calculate MSME 3x compound interest, and execute verified postal dispatch.
                </p>
                <button
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="block w-full bg-[#DC2626] text-white text-center py-3 rounded-xl text-xs font-bold hover:bg-[#B91C1C] transition-colors mb-3 cursor-pointer"
                >
                  Start Notice Intake
                </button>
              </div>

              {/* Client Reviews */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-sm font-black mb-1 text-slate-900">Client Reviews</h3>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-[#F59E0B] text-sm">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                  <span className="text-xs font-bold text-slate-700">4.9/5</span>
                  <span className="text-xs text-slate-500">(194 reviews)</span>
                </div>
                <div className="border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">SM</div>
                    <span className="text-xs font-bold text-slate-800">Siddharth Malhotra</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    &quot;A corporate automotive client withheld ₹23.4 Lakhs in B2B component supply invoices for over 6 months citing internal restructuring. Legal Recovery drafted an advocate-backed statutory demand notice citing MSMED compounding interest and GSTR-2B credit estoppel. The debtor firm disbursed the entire pending balance within 10 days of notice delivery to avoid commercial court proceedings. Exemplary corporate legal service.&quot;
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Related Services / Interlinking (Topical Authority) */}
          <div className="mt-16 mb-8 max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center md:text-left">More Commercial &amp; Debt Recovery Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/services/vendor-and-invoice-recoveries" className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">Vendor &amp; Invoice Recoveries</h3>
                <p className="text-xs text-slate-500 line-clamp-2">Learn statutory procedures to recover delayed commercial invoices and unpaid B2B supplier dues in India.</p>
              </Link>
              <Link href="/recovery/unpaid-invoices" className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">Unpaid Business Invoices</h3>
                <p className="text-xs text-slate-500 line-clamp-2">Step-by-step roadmap to recover corporate and retailer pending bills through legal channels.</p>
              </Link>
              <Link href="/recovery/msme-samadhan" className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">MSME Samadhaan Recovery</h3>
                <p className="text-xs text-slate-500 line-clamp-2">Claim 3x compound interest on delayed payments for registered MSME suppliers and enterprises.</p>
              </Link>
            </div>
          </div>

          {/* Company Section */}
          <div className="mt-16 max-w-5xl mx-auto mb-10">
            <div className="bg-white border-2 border-slate-100 rounded-[2rem] p-8 md:p-12 shadow-sm border-[#DC2626]">
              <div className="mb-8">
                <img src="/lrlogo.svg" alt="LegalRecovery" className="h-8 sm:h-10 w-auto object-contain" />
              </div>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-10 max-w-3xl font-medium">
                Legal Recovery is India&apos;s trusted consumer protection and commercial debt resolution platform. Founded in 2022 and headquartered in New Delhi, Legal Recovery has counselled 15,000+ businesses and consumers on financial disputes, commercial contract breaches, and delayed invoices. Legal Recovery accelerates out-of-court settlements and connects you with top verified panel advocates.
              </p>

              <div className="border-t border-slate-100 pt-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Solutions:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link href="/send-a-legal-notice" className="py-4 px-4 rounded-xl border-2 border-[#DC2626] text-[#DC2626] font-bold text-sm hover:bg-[#DC2626] hover:text-white transition-colors cursor-pointer bg-white text-center flex items-center justify-center">
                    Send Legal Notice
                  </Link>
                  <Link href="/services/vendor-and-invoice-recoveries" className="py-4 px-4 rounded-xl border-2 border-[#DC2626] text-[#DC2626] font-bold text-sm hover:bg-[#DC2626] hover:text-white transition-colors cursor-pointer bg-white text-center flex items-center justify-center">
                    Vendor Invoice Recovery
                  </Link>
                  <Link href="/how-to-file-consumer-complaint-india" className="py-4 px-4 rounded-xl border-2 border-[#DC2626] text-[#DC2626] font-bold text-sm hover:bg-[#DC2626] hover:text-white transition-colors cursor-pointer bg-white text-center flex items-center justify-center">
                    Consumer Complaints
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {isPaymentModalOpen && (
        <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
      )}
    </>
  );
}
