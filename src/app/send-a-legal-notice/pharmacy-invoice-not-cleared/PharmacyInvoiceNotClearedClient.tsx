'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "Can I send a legal notice for an unpaid pharmacy invoice or medical supply bill?",
    answer: "Yes, pharmaceutical distributors, manufacturers, and stockists can issue a formal advocate-vetted legal notice to recover unpaid pharmacy invoices under the Indian Contract Act, 1872 and the MSMED Act, 2006. The statutory legal notice serves as an enforceable pre-litigation demand granting the defaulting retail chemist, pharmacy chain, or hospital a strict 15-day deadline to clear outstanding dues along with statutory interest. If the debtor fails to settle the dues within the notice period, the supplier can initiate summary recovery proceedings in commercial courts or file an application before the Micro and Small Enterprise Facilitation Council."
  },
  {
    question: "What interest rate can be claimed on overdue pharmacy invoices under Indian law?",
    answer: "Suppliers registered under the Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 are legally entitled to claim compound interest calculated at three times the Reserve Bank of India bank rate with monthly rests under Section 16 of the Act. For non-MSME commercial suppliers, interest can be claimed as agreed in the tax invoice terms or at standard commercial lending rates of 18% per annum under the Interest Act, 1978. The legal notice explicitly calculates this compound interest from the agreed credit period cutoff date until final realization."
  },
  {
    question: "Can a pharmacy refuse invoice payment by citing expired medicine batches or unsold stock?",
    answer: "A pharmacy or hospital retailer cannot legally withhold invoice clearance for accepted medicine deliveries by arbitrarily citing unsold inventory or near-expiry batches unless a clear sale-or-return contract was executed prior to dispatch. Under Section 41 and 42 of the Sale of Goods Act, 1930, retaining goods beyond a reasonable inspection period without timely written intimation of defects constitutes deemed commercial acceptance. If the chemist availed GST Input Tax Credit on the supply invoice, their legal defense of non-liability or non-acceptance collapses in court."
  },
  {
    question: "What legal actions can be taken if a chemist or hospital ignores the pharmacy invoice legal notice?",
    answer: "If the defaulting pharmacy ignores the 15-day legal notice, the creditor can immediately file a recovery application before the MSEFC on the MSME Samadhaan portal or institute a Summary Suit under Order XXXVII of the Code of Civil Procedure in the competent Commercial Court. If post-dated security cheques were dishonored, the creditor can concurrently file criminal proceedings under Section 138 of the Negotiable Instruments Act within 30 days of the statutory demand. Additionally, corporate pharmacy entities with defaulted operational debts exceeding the statutory threshold can be subjected to insolvency proceedings under Section 9 of the Insolvency and Bankruptcy Code."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://legalrecovery.in/send-a-legal-notice/pharmacy-invoice-not-cleared"
      },
      "headline": "Send a Legal Notice for Pharmacy Invoice Not Cleared",
      "image": [
        "https://legalrecovery.in/images/og/pharmacy-invoice-not-cleared.jpg"
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
      "datePublished": "2024-05-15T08:00:00+05:30",
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
      "@id": "https://legalrecovery.in/send-a-legal-notice/pharmacy-invoice-not-cleared",
      "name": "Send a Legal Notice for Pharmacy Invoice Not Cleared",
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
          "name": "Pharmacy Invoice Not Cleared",
          "item": "https://legalrecovery.in/send-a-legal-notice/pharmacy-invoice-not-cleared"
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
      "name": "Steps to Send a Legal Notice for Unpaid Pharmacy Invoice",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Reconcile pharmaceutical tax invoices, delivery challans, and GST E-Way bills"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Verify GSTR-2B Input Tax Credit claims and drug batch dispatch logs"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Draft an advocate-vetted demand notice citing the MSMED Act and Commercial Courts Act"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Dispatch the legal notice via Registered Post AD, Speed Post, and official email"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Escalate to MSEFC Samadhaan or Commercial Court Summary Suit upon 15-day expiry"
        }
      ]
    },
    {
      "@type": "Product",
      "name": "Legal Notice for Pharmacy Invoice Not Cleared",
      "description": "Specialized legal notice drafting and dispatch service for pharmaceutical distributors, PCD franchises, and medical wholesalers to recover overdue pharmacy and hospital invoices.",
      "brand": {
        "@type": "Organization",
        "name": "Legal Recovery"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "182"
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
            "name": "Rajesh Singhania"
          },
          "reviewBody": "A multi-speciality hospital pharmacy had blocked our pharma distribution invoices worth ₹14.8 Lakhs for over 7 months citing auditing delays. Legal Recovery drafted and served a formal MSME-backed legal notice with compound interest calculations. The hospital management cleared the entire outstanding balance within 11 days of receiving the notice. Highly professional and effective legal intervention."
        }
      ]
    }
  ]
};

export default function PharmacyInvoiceNotClearedClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "understanding-the-law", title: "1. Legal Framework for Unpaid Pharmacy Invoices" },
    { id: "common-disputes", title: "2. Common Grounds for Pharmacy Payment Defaults" },
    { id: "documentary-evidence", title: "3. Crucial Evidence Checklist for Debt Recovery" },
    { id: "statutory-remedies", title: "4. Strategic Forum Comparison for Commercial Recovery" },
    { id: "step-by-step", title: "5. Step-by-Step Process to Send a Legal Notice" },
    { id: "crucial-elements", title: "6. Crucial Elements of a High-Impact Notice" },
    { id: "timeline-escalation", title: "7. Resolution Timeline & Post-Notice Enforcement" },
    { id: "faqs", title: "8. Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Send a Legal Notice", href: "/send-a-legal-notice" },
    { label: "Pharmacy Invoice Not Cleared", href: "/send-a-legal-notice/pharmacy-invoice-not-cleared" },
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
              COMMERCIAL DEBT RECOVERY
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Legal Notice for <span className="text-[#DC2626]">Pharmacy Invoice Not Cleared</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Recover unpaid pharmaceutical supplies, overdue chemist invoices, and hospital credit balances with an advocate-drafted statutory demand notice backed by MSMED Act 3x compound interest.
            </p>
            <button
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer"
            >
              Draft &amp; Send Legal Notice
            </button>
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
                    <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Flegalrecovery.in%2Fsend-a-legal-notice%2Fpharmacy-invoice-not-cleared&text=Recover%20unpaid%20pharmacy%20and%20medical%20store%20invoices%20with%20a%20formal%20legal%20notice!%20%23CommercialRecovery" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-black text-white hover:opacity-80 flex items-center justify-center transition-opacity" aria-label="Share on X (Twitter)">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                    <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flegalrecovery.in%2Fsend-a-legal-notice%2Fpharmacy-invoice-not-cleared" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#1877F2] text-white hover:opacity-80 flex items-center justify-center transition-opacity" aria-label="Share on Facebook">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01z"/></svg>
                    </a>
                    <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Flegalrecovery.in%2Fsend-a-legal-notice%2Fpharmacy-invoice-not-cleared&title=Legal%20Notice%20for%20Pharmacy%20Invoice%20Not%20Cleared" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#0A66C2] text-white hover:opacity-80 flex items-center justify-center transition-opacity" aria-label="Share on LinkedIn">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                    </a>
                  </div>
                </div>

                {/* Quick Answer */}
                <div id="quick-answer" className="bg-slate-50 border-l-4 border-[#DC2626] p-6 rounded-r-2xl">
                  <h2 className="text-sm font-extrabold text-slate-900 mb-2 uppercase tracking-wide">Quick Answer</h2>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                    Pharmaceutical distributors, wholesalers, and manufacturers can issue a formal advocate-vetted legal notice to recover unpaid pharmacy invoices from defaulting retail chemists, pharmacy chains, or hospitals. The legal notice establishes an enforceable 15-day pre-litigation ultimatum demanding the principal invoice amount along with statutory compound interest under the Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 or commercial contractual terms. Non-compliance empowers the supplier to initiate expedited summary recovery proceedings in commercial courts or file an insolvency petition for operational debt.
                  </p>
                </div>

                <section id="understanding-the-law" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. Legal Framework for Unpaid Pharmacy Invoices
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The pharmaceutical distribution ecosystem operates on high-volume, credit-intensive turnover involving carrying and forwarding (C&amp;F) agents, super stockists, distributors, PCD pharma franchise owners, and retail pharmacies. When a retail chemist, corporate pharmacy chain, or private hospital withholds invoice clearance, it triggers catastrophic working capital paralysis across the entire pharmaceutical supply chain. Indian commercial law provides robust, multi-layered statutory protections to enforce prompt payment and deter mala fide payment withholding.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Section 15 of the <a href="https://samadhaan.msme.gov.in/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Micro, Small and Medium Enterprises Development (MSMED) Act, 2006</a>, any buyer purchasing pharmaceutical goods or healthcare supplies from an enterprise registered with an Udyam certificate is legally bound to clear payment within the mutually agreed period, which cannot exceed 45 calendar days from the date of delivery. If no formal credit duration is agreed upon in writing, the statutory payment ceiling is strictly capped at 15 days from the date of goods acceptance.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Where a pharmacy or hospital fails to settle the dues within the statutory period, Section 16 of the MSMED Act mandates that the buyer is unconditionally liable to pay compound interest with monthly rests on the outstanding amount at three times the bank rate notified by the Reserve Bank of India (RBI). Furthermore, under Section 73 of the <a href="https://www.indiacode.nic.in/handle/123456789/2187" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Indian Contract Act, 1872</a>, the supplier is entitled to full compensation for any direct financial loss resulting from the breach of contract, while Section 12A of the <a href="https://www.indiacode.nic.in/handle/123456789/1362" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Commercial Courts Act, 2015</a> governs pre-institution mediation and fast-track commercial suit procedures.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Additionally, the <a href="https://www.indiacode.nic.in/handle/123456789/2398" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Sale of Goods Act, 1930</a> (Sections 45 to 55) establishes the rights of an unpaid seller to exercise a lien over goods, stop consignments in transit, and sue the defaulting buyer for the price of goods delivered and accepted. Serving a formal advocate-drafted legal notice is the indispensable first legal step that creates conclusive documentary proof of commercial default before invoking judicial remedies.
                    </p>
                  </div>
                </section>

                <section id="common-disputes" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. Common Grounds for Pharmacy Payment Defaults
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Commercial disputes in medicine distribution typically arise when debtors fabricate post-facto excuses to prolong payment cycles or offset unverified losses against valid supply invoices. Understanding these dispute vectors allows legal counsel to dismantle the debtor&apos;s defense in the initial demand notice.
                    </p>
                    
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#DC2626] mt-2 shrink-0"></div>
                        <div>
                          <h4 className="font-extrabold text-slate-900 text-sm">Expired and Near-Expiry Medicine Deductions</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mt-1">
                            Retail chemists frequently withhold payments for active fast-moving batches by asserting that older inventory batches have expired. Unless a specific written expiry-replacement agreement exists specifying physical return timelines and credit note protocols, withholding payment on delivered and consumed drug consignments is legally impermissible.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#DC2626] mt-2 shrink-0"></div>
                        <div>
                          <h4 className="font-extrabold text-slate-900 text-sm">Unsigned Delivery Challans vs Digital E-Way Bills</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mt-1">
                            Debtors often claim non-receipt of medicine cartons due to missing physical signatures on physical delivery challans. However, the generation and acceptance of <a href="https://einvoice1.gst.gov.in/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">GST E-Invoices</a> and matched E-Way bills (Form GST EWB-01) create a statutory presumption of physical delivery under the Central Goods and Services Tax Act.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#DC2626] mt-2 shrink-0"></div>
                        <div>
                          <h4 className="font-extrabold text-slate-900 text-sm">Hospital Credit Cycle &amp; Third-Party Administrator (TPA) Delays</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mt-1">
                            Institutional and in-house hospital pharmacies often delay distributor payments claiming pending insurance reimbursements from TPAs. In commercial law, privity of contract exists strictly between the supplier and the hospital; insurance settlement delays do not absolve the healthcare institution from its statutory payment obligations.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#DC2626] mt-2 shrink-0"></div>
                        <div>
                          <h4 className="font-extrabold text-slate-900 text-sm">Dishonored Post-Dated Cheques (PDC)</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mt-1">
                            Pharmacies routinely issue post-dated cheques to maintain continuous credit lines. When these cheques bounce with bank remarks such as &quot;Funds Insufficient&quot; or &quot;Account Closed,&quot; the supplier obtains an immediate dual remedy under civil recovery law and criminal law under Section 138 of the <a href="https://www.indiacode.nic.in/handle/123456789/2189" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Negotiable Instruments Act, 1881</a>.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="documentary-evidence" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Crucial Evidence Checklist for Debt Recovery
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A robust legal notice must be accompanied by an airtight evidentiary dossier that demonstrates an uncontroverted debt. In pharmaceutical debt recovery, regulatory compliance records maintained under the <a href="https://cdsco.gov.in/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Drugs and Cosmetics Rules, 1945</a> serve as decisive statutory evidence.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h4 className="font-black text-slate-900 text-sm mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
                          GST &amp; Invoicing Records
                        </h4>
                        <ul className="text-xs sm:text-sm text-slate-650 space-y-2 list-disc list-inside">
                          <li>GST Tax Invoices with valid IRN and QR codes</li>
                          <li>Generated E-Way Bills (Part A and Part B)</li>
                          <li>GSTR-1 filing records of the supplier</li>
                          <li>GSTR-2B Input Tax Credit reconciliation showing buyer availing tax credits</li>
                        </ul>
                      </div>

                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h4 className="font-black text-slate-900 text-sm mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
                          Drug Licensing &amp; Logistics
                        </h4>
                        <ul className="text-xs sm:text-sm text-slate-650 space-y-2 list-disc list-inside">
                          <li>Wholesale Drug License copies (Form 20B/21B)</li>
                          <li>Batch manufacturing and expiry logs</li>
                          <li>Proof of dispatch via courier or transporter LR receipts</li>
                          <li>Physical or digital stock receipt acknowledgments</li>
                        </ul>
                      </div>

                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h4 className="font-black text-slate-900 text-sm mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
                          Financial &amp; Ledger Records
                        </h4>
                        <ul className="text-xs sm:text-sm text-slate-650 space-y-2 list-disc list-inside">
                          <li>Certified statement of running ledger account</li>
                          <li>Bank account statements reflecting partial payments</li>
                          <li>Original dishonored cheques with return memos</li>
                          <li>Udyam Registration Certificate for MSME interest</li>
                        </ul>
                      </div>

                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h4 className="font-black text-slate-900 text-sm mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
                          Commercial Correspondence
                        </h4>
                        <ul className="text-xs sm:text-sm text-slate-650 space-y-2 list-disc list-inside">
                          <li>Purchase Orders (PO) or stock indents</li>
                          <li>WhatsApp and email payment reminders</li>
                          <li>Written admissions of liability or balance confirmations</li>
                          <li>Section 65B Indian Evidence Act electronic certificates</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="statutory-remedies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Strategic Forum Comparison for Commercial Recovery
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Selecting the appropriate judicial forum post-notice depends on the creditor&apos;s MSME registration status, debt quantum, business constitution of the defaulting pharmacy, and whether negotiable instruments were dishonored.
                    </p>

                    <div className="overflow-x-auto my-6">
                      <table className="w-full text-left border-collapse text-xs md:text-sm border border-slate-200">
                        <thead>
                          <tr className="bg-slate-100 text-slate-900 font-extrabold border-b border-slate-200">
                            <th className="p-3">Legal Pathway</th>
                            <th className="p-3">Governing Law</th>
                            <th className="p-3">Statutory Interest Rate</th>
                            <th className="p-3">Average Timeline</th>
                            <th className="p-3">Key Strategic Advantage</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-650">
                          <tr>
                            <td className="p-3 font-bold text-slate-900">MSEFC Samadhaan Filing</td>
                            <td className="p-3">MSMED Act, 2006 (Sec 18)</td>
                            <td className="p-3">3x RBI Bank Rate (Compounded monthly)</td>
                            <td className="p-3">3 to 6 Months</td>
                            <td className="p-3">No court fees; statutory 75% pre-deposit mandatory for buyer to appeal award.</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="p-3 font-bold text-slate-900">Summary Suit (Order 37 CPC)</td>
                            <td className="p-3">Code of Civil Procedure, 1908</td>
                            <td className="p-3">Contractual rate / 18% p.a.</td>
                            <td className="p-3">6 to 12 Months</td>
                            <td className="p-3">Defendant must obtain leave to defend; instant decree if defense is sham.</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">Section 138 NI Act Complaint</td>
                            <td className="p-3">Negotiable Instruments Act, 1881</td>
                            <td className="p-3">Up to 20% interim compensation (Sec 143A)</td>
                            <td className="p-3">6 to 18 Months</td>
                            <td className="p-3">Criminal liability with imprisonment up to 2 years and fine up to 2x cheque amount.</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="p-3 font-bold text-slate-900">Insolvency Petition (IBC Sec 9)</td>
                            <td className="p-3"><a href="https://ibbi.gov.in/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Insolvency &amp; Bankruptcy Code, 2016</a></td>
                            <td className="p-3">Principal + agreed commercial interest</td>
                            <td className="p-3">6 to 14 Months</td>
                            <td className="p-3">Applicable for corporate debts over ₹1 Crore; triggers Corporate Insolvency (CIRP).</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                <section id="step-by-step" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Step-by-Step Process to Send a Legal Notice
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Issuing a commercial recovery notice requires adherence to strict procedural protocols. A standardized process ensures maximum compliance from the debtor pharmacy while building an unassailable court record.
                    </p>

                    <div className="space-y-6 my-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">1</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Ledger Reconciliation &amp; Invoice Ageing Analysis</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Perform an exhaustive audit of all unpaid pharmaceutical invoices, cross-referencing debit notes, credit notes, returned medicine logs, and partial bank receipts. Establish the exact principal amount overdue beyond the agreed credit window.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">2</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Corporate &amp; Licensing Entity Due Diligence</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Verify the legal constitution of the debtor (Sole Proprietorship, Partnership Firm, LLP, or Private Limited Company) via the Ministry of Corporate Affairs (MCA) database and verify their retail drug license (Form 20/21) numbers. Identify all active directors, partners, or proprietors for personal and vicarious liability.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">3</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Advocate Drafting on Official Legal Letterhead</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Engage an advocate to structure the formal demand on their official letterhead with Bar Council enrollment details. The notice must chronologically articulate the transaction history, cite statutory MSMED Act compounding interest, and set out consequences under the Commercial Courts Act and NI Act.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">4</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Stipulation of 15-Day Statutory Cure Period</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Grant the defaulting pharmacy exactly 15 business days from the date of notice receipt to remit the full principal amount, accrued compound interest, and legal drafting costs into the creditor&apos;s designated bank account.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">5</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Multi-Channel Verifiable Dispatch</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Dispatch the signed original notice via India Post Registered Post with Acknowledgment Due (RPAD) and Speed Post to ensure a legally conclusive tracking receipt. Simultaneously, transmit a certified digital copy via registered business email and WhatsApp to secure timestamped delivery evidence under Section 65B of the Evidence Act.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="crucial-elements" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Crucial Elements of a High-Impact Notice
                  </h2>
                  
                  {/* Infographic Image */}
                  <div className="my-8 rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                    <img src="/images/og/pharmacy-invoice-not-cleared.jpg" alt="Pharmacy Invoice and Debt Recovery Legal Notice Process Infographic" className="w-full h-auto object-cover" />
                  </div>

                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A poorly structured notice often leads to protracted evasive replies or dismissal in pre-institution mediation. To create overwhelming legal pressure, an effective pharmacy invoice recovery notice must incorporate the following foundational components:
                    </p>
                    <ul className="list-disc list-inside text-sm md:text-base text-slate-650 space-y-3">
                      <li><strong>Advocate Credentials &amp; Power of Attorney:</strong> Clear statement that the notice is served under the express instructions and legal retainer of the pharmaceutical supplier.</li>
                      <li><strong>Itemized Transaction Matrix:</strong> A tabulated annexure listing each invoice number, invoice date, delivery challan reference, E-Way bill number, medicine batch numbers, total invoice value, payments received, and outstanding balance.</li>
                      <li><strong>MSME Compounding Interest Calculation:</strong> Explicit calculation of monthly compounding interest at 3x RBI repo rate under Section 16 of the MSMED Act, 2006.</li>
                      <li><strong>GSTR-2B Tax Credit Estoppel Clause:</strong> Explicit reference to the debtor&apos;s GST filings confirming they availed tax input credit on the disputed invoices, legally barring them from denying goods receipt.</li>
                      <li><strong>Vicarious Director &amp; Partner Liability:</strong> Holding corporate directors or partners individually and jointly liable for commercial deceit and inducement under Section 141 of the NI Act and civil contract principles.</li>
                      <li><strong>Cost of Legal Notice:</strong> Specific demand for reimbursement of legal notice drafting and advocate consultation expenses.</li>
                    </ul>
                  </div>
                </section>

                <section id="timeline-escalation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    7. Resolution Timeline &amp; Post-Notice Enforcement
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Upon physical delivery of the legal notice, commercial debtors in the healthcare sector typically respond within 7 to 10 days to avoid business disruption, drug licensing scrutiny, or frozen banking credit facilities. Over 75% of pharmaceutical invoice disputes are resolved during this statutory 15-day window through structured settlement agreements or immediate RTGS/NEFT transfers.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the debtor pharmacy remains non-responsive or sends an evasive refusal after the 15-day period lapses, the creditor possesses an unassailable record of pre-litigation compliance. The creditor can immediately execute the following judicial enforcement steps:
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        <strong>1. Online MSEFC Samadhaan Case Initiation:</strong> File the registered case online on the MSME Samadhaan portal. The council initiates statutory conciliation and, upon failure, conducts arbitration to pass a final executable decree within 90 days.
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        <strong>2. Commercial Court Summary Suit Filing:</strong> File a Summary Suit under Order XXXVII of the Code of Civil Procedure in the designated District Commercial Court, preventing the debtor from dragging proceedings unless they deposit security in court.
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        <strong>3. Dishonored Cheque Criminal Prosecution:</strong> File a criminal complaint under Section 138 of the Negotiable Instruments Act within 30 days of the notice period expiry in the competent Metropolitan Magistrate or Judicial Magistrate Court.
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        <strong>4. Drug Licensing Authority Intimation:</strong> In cases of fraudulent non-payment involving unreturned scheduled drugs or unauthorized diversion, notify the State Drugs Control Department regarding non-compliance with drug maintenance and purchase records under the Drugs and Cosmetics Act.
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
                    References: [1] <a href="https://samadhaan.msme.gov.in/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15-18)</a>. [2] <a href="https://www.indiacode.nic.in/handle/123456789/1362" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Commercial Courts Act, 2015 (Pre-Institution Mediation &amp; Summary Procedures)</a>. [3] <a href="https://www.indiacode.nic.in/handle/123456789/2189" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Negotiable Instruments Act, 1881 (Section 138)</a>. [4] <a href="https://cdsco.gov.in/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Drugs and Cosmetics Rules, 1945</a>. [5] <a href="https://einvoice1.gst.gov.in/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">GST E-Invoice System &amp; E-Way Bill Portal</a>.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column Sidebar */}
            <div className="space-y-8 sticky top-28">
              <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-sm font-black mb-3">Recover Pharmacy Dues</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Connect with experienced commercial recovery advocates. We draft customized statutory demand notices, calculate MSME compound interest, and execute verified postal dispatch.
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
                  <span className="text-xs text-slate-500">(182 reviews)</span>
                </div>
                <div className="border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">RS</div>
                    <span className="text-xs font-bold text-slate-800">Rajesh Singhania</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    &quot;A multi-speciality hospital pharmacy had blocked our pharma distribution invoices worth ₹14.8 Lakhs for over 7 months citing auditing delays. Legal Recovery drafted and served a formal MSME-backed legal notice with compound interest calculations. The hospital management cleared the entire outstanding balance within 11 days of receiving the notice. Highly professional and effective legal intervention.&quot;
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
