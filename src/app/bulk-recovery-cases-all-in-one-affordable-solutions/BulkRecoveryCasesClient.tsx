'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "How does a business initiate bulk recovery of unpaid dues from multiple defaulting clients?",
    answer: "A business initiates bulk recovery of unpaid dues by aggregating delinquent invoices, verifying delivery acknowledgments, and dispatching advocate-drafted demand notices simultaneously across all defaulting entities. Each formal notice establishes a strict 15-day settlement deadline and warns of statutory compound interest under the MSMED Act or commercial summary suits. This coordinated multi-debtor workflow standardizes legal costs and resolves over 75% of commercial payment defaults prior to court intervention."
  },
  {
    question: "Can MSMEs claim compound interest on bulk unpaid invoices under Indian law?",
    answer: "Registered MSMEs are legally entitled to compound interest with monthly rests at three times the Reserve Bank of India repo rate under Section 16 of the MSMED Act, 2006, for all delayed payments exceeding 45 days. The buyer's liability to pay this statutory penal interest is mandatory and cannot be waived through private commercial agreements or purchase order terms. Businesses can enforce this accrued interest both in pre-litigation advocate legal notices and in conciliation petitions before the Micro and Small Enterprise Facilitation Council."
  },
  {
    question: "What is the statutory limitation period for recovering unpaid business invoices in India?",
    answer: "The statutory limitation period for filing a commercial suit for the recovery of unpaid business dues is three years from the date the invoice fell due or when the cause of action arose under Article 14 and Article 15 of the Limitation Act, 1963. Any written acknowledgment of debt, partial electronic ledger payment, or confirmation of balance signed by the debtor resets the three-year clock under Section 18 and Section 19 of the Act. Prompt dispatch of a formal legal notice establishes an undeniable evidentiary paper trail before this statutory limitation window expires."
  },
  {
    question: "How do all-in-one bulk recovery solutions reduce commercial legal costs?",
    answer: "All-in-one bulk recovery solutions lower commercial legal expenses by automating portfolio ingestion, standardizing advocate drafting templates, and consolidating India Post Registered Post dispatches at scale. By replacing fragmented lawyer retainers and ad-hoc filings with a centralized legal operations workflow, enterprises achieve cost savings between 70% and 85% per defaulting counterparty. This economic efficiency allows businesses to pursue smaller unpaid invoices that were previously uneconomical to litigate individually."
  },
  {
    question: "Are digital legal notices sent via WhatsApp and Email legally valid in Indian courts?",
    answer: "Indian commercial courts and tribunals recognize electronic delivery of legal notices via registered email and WhatsApp under Section 65B of the Indian Evidence Act, 1872, and Section 63 of the Bharatiya Sakshya Adhiniyam, 2023. Sending digital notices concurrently with India Post Registered Post with Acknowledgment Due provides instant time-stamped proof of delivery and prevents corporate debtors from evading service. Electronic delivery receipts accompanied by double-blue-tick delivery proofs or SMTP server transmission logs serve as admissible evidentiary exhibits in summary suits and arbitration."
  },
  {
    question: "What legal action follows if a debtor ignores a bulk commercial recovery legal notice?",
    answer: "If a debtor fails to settle within the statutory 15-day window stipulated in the legal notice, the business can immediately initiate summary proceedings under Order 37 of the Code of Civil Procedure, 1908, or file for conciliation under the MSME Samadhaan portal. For dishonored cheques accompanying the debt, the creditor can file a criminal complaint under Section 138 of the Negotiable Instruments Act within 30 days of the notice period expiry. For undisputed debts against corporate entities exceeding the statutory threshold, the creditor can also issue a demand notice under Section 9 of the Insolvency and Bankruptcy Code, 2016."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://legalrecovery.in/bulk-recovery-cases-all-in-one-affordable-solutions"
      },
      "headline": "Bulk Recovery Cases: All-in-One Affordable Solutions for Business Dues",
      "image": [
        "https://legalrecovery.in/images/og/bulk-recovery-cases-all-in-one-affordable-solutions.jpg"
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
          "url": "https://legalrecovery.in/lrlogo.svg"
        }
      },
      "datePublished": "2024-04-10T08:00:00+05:30",
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
      "@id": "https://legalrecovery.in/bulk-recovery-cases-all-in-one-affordable-solutions",
      "name": "Bulk Recovery Cases: All-in-One Affordable Solutions for Business Dues",
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
          "name": "Bulk Recovery Cases",
          "item": "https://legalrecovery.in/bulk-recovery-cases-all-in-one-affordable-solutions"
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
      "name": "Steps to Execute Bulk Recovery of Unpaid Business Dues",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Audit and categorize accounts receivable ledger by aging buckets"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Validate proof of delivery, purchase orders, and tax invoices"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Draft customized advocate statutory demand notices with compound interest"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Execute omnichannel dispatch via RPAD and digital channels"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Manage structured out-of-court commercial settlement negotiations"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Escalate non-compliant debtors to MSME Samadhaan, Section 138 NI Act, or Order 37 CPC"
        }
      ]
    },
    {
      "@type": "Product",
      "name": "Bulk Business Debt Recovery Solutions",
      "description": "All-in-one legal notice drafting, physical dispatch, and multi-debtor commercial payment recovery services for businesses across India.",
      "brand": {
        "@type": "Organization",
        "name": "Legal Recovery"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "184"
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
            "name": "Vikramaditya Mehta"
          },
          "reviewBody": "We had 38 defaulting B2B distributors owing over ₹64 lakhs. Legal Recovery handled the entire bulk legal notice dispatch in 48 hours. Within 30 days, we recovered 72% of our outstanding dues without stepping into a courtroom."
        }
      ]
    }
  ]
};

export default function BulkRecoveryCasesClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "commercial-debt-crisis", title: "1. The B2B Unpaid Dues Challenge" },
    { id: "statutory-framework", title: "2. Indian Commercial Statutory Framework" },
    { id: "why-single-litigation-fails", title: "3. Limitations of Single-Case Litigation" },
    { id: "all-in-one-solution-architecture", title: "4. All-in-One Bulk Recovery Architecture" },
    { id: "comparative-matrix", title: "5. Strategic Comparative Matrix" },
    { id: "evidentiary-audit-checklist", title: "6. Commercial Evidentiary Audit Checklist" },
    { id: "step-by-step-process", title: "7. Step-by-Step Bulk Recovery Workflow" },
    { id: "infographic-overview", title: "8. Bulk Recovery Lifecycle Infographic" },
    { id: "notice-anatomy", title: "9. Essential Elements of Commercial Notice" },
    { id: "multi-track-escalation", title: "10. Multi-Track Judicial Escalation Pathways" },
    { id: "aging-matrix-table", title: "11. Debt Aging, Interest & Limitation Matrix" },
    { id: "faqs", title: "12. Frequently Asked Questions" },
    { id: "statutory-citations", title: "13. Statutory Authorities & References" }
  ];

  const breadcrumbItems = [
    { label: "Send a Legal Notice", href: "/send-a-legal-notice" },
    { label: "Bulk Recovery Cases", href: "/bulk-recovery-cases-all-in-one-affordable-solutions" },
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
        {/* Dark Hero Section */}
        <div className="relative bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#020617] text-white overflow-hidden pt-28 pb-20 md:pt-40 md:pb-32 border-b border-slate-900">
          <div className="absolute inset-0 bg-black opacity-40 z-10 pointer-events-none"></div>
          {/* Ambient Red Glow */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] opacity-25 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[110px] pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-20 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[110px] pointer-events-none"></div>

          <div className="relative z-20 container mx-auto px-4 text-center max-w-5xl">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/40 px-4 py-1.5 rounded-full border border-[#DC2626]/30">
              B2B COMMERCIAL DEBT REDRESSAL &amp; BULK SETTLEMENT
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
              Bulk Recovery Cases: <span className="text-[#DC2626]">All-in-One Affordable Solutions</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Recover unpaid commercial dues, unfreeze working capital, and resolve multiple delinquent corporate accounts simultaneously through advocate-drafted bulk legal notices, statutory MSME enforcement, and summary recovery.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsPaymentModalOpen(true)}
                className="w-full sm:w-auto bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/30 text-sm md:text-lg cursor-pointer"
              >
                Draft &amp; Send Notice
              </button>
              <a
                href="#commercial-debt-crisis"
                className="w-full sm:w-auto bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold py-4 px-8 md:py-5 md:px-10 rounded-xl transition-all text-sm md:text-base text-center"
              >
                View Legal Framework
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
                  <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
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
            
            {/* Left Column Sidebar - Sticky Table of Contents (Desktop) */}
            <div className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 scrollbar-hide">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </div>

            {/* Middle Main Content Area */}
            <div className="min-w-0">
              {/* Table of Contents (Mobile View) */}
              <div className="lg:hidden mb-6 sticky top-20 z-10 scale-90 origin-top">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-6 md:p-12 rounded-3xl shadow-sm space-y-12 border border-slate-100">
                
                {/* Bylines & Native Social Share Buttons */}
                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-100 pb-4 gap-4">
                  <div className="flex flex-wrap items-center text-xs sm:text-sm text-slate-500 gap-3">
                    <span>Written by <Link href="/authors/advocate-aman-chawla" className="font-semibold text-[#DC2626] hover:underline">Advocate Aman Chawla</Link></span>
                    <span className="hidden sm:inline">•</span>
                    <span>Reviewed by <Link href="/authors/advocate-sneha-sharma" className="font-semibold text-[#DC2626] hover:underline">Advocate Sneha Sharma</Link></span>
                    <span className="hidden sm:inline">•</span>
                    <span>Last updated: {currentDate}</span>
                  </div>
                  
                  {/* Social Share Buttons with Native Brand Colors by Default */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2">Share:</span>
                    <a
                      href="https://twitter.com/intent/tweet?url=https%3A%2F%2Flegalrecovery.in%2Fbulk-recovery-cases-all-in-one-affordable-solutions&text=Complete%20Commercial%20Guide%20to%20Bulk%20Recovery%20of%20Unpaid%20Dues%20for%20Business%20in%20India.%20%23B2BDebtRecovery%20%23CommercialLaw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-black text-white hover:opacity-80 flex items-center justify-center transition-opacity"
                      aria-label="Share on X (formerly Twitter)"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    <a
                      href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flegalrecovery.in%2Fbulk-recovery-cases-all-in-one-affordable-solutions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#1877F2] text-white hover:opacity-80 flex items-center justify-center transition-opacity"
                      aria-label="Share on Facebook"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01z"/>
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Flegalrecovery.in%2Fbulk-recovery-cases-all-in-one-affordable-solutions&title=Bulk%20Recovery%20Cases%3A%20All-in-One%20Affordable%20Solutions%20for%20Business%20Dues"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#0A66C2] text-white hover:opacity-80 flex items-center justify-center transition-opacity"
                      aria-label="Share on LinkedIn"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Quick Answer Block */}
                <div id="quick-answer" className="bg-slate-50 border-l-4 border-[#DC2626] p-6 rounded-r-2xl">
                  <h2 className="text-sm font-extrabold text-slate-900 mb-2 uppercase tracking-wide">Quick Answer</h2>
                  <p className="text-sm md:text-base text-slate-700 font-medium leading-relaxed">
                    Recovery of unpaid dues for business across multiple defaulting debtors is achieved through a structured bulk legal notice framework supported by statutory enforcement under Indian commercial statutes. Creditors issue advocate-drafted statutory demand notices simultaneously to defaulting buyers, establishing a strict 15-day compliance window and invoking compound interest under Section 16 of the MSMED Act, 2006, summary suits under Order 37 of the Code of Civil Procedure, 1908, or criminal prosecution under Section 138 of the Negotiable Instruments Act, 1881. Consolidating multi-debtor commercial claims into an all-in-one recovery system lowers legal costs by up to 85% and prompts rapid out-of-court settlements without protracted trial litigation.
                  </p>
                </div>

                {/* Section 1 */}
                <section id="commercial-debt-crisis" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. The B2B Unpaid Dues Challenge in Indian Commerce
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-4">
                    <p className="text-sm md:text-base leading-relaxed">
                      Delinquent accounts receivable threaten commercial solvency, cash velocity, and working capital. In India&apos;s B2B ecosystem, suppliers, distributors, manufacturers, and agencies face systemic defaults. Unlike single consumer disputes, commercial creditors face portfolio delinquency—managing dozens of overdue invoices across diverse jurisdictions.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      When debtors defer payments beyond agreed credit windows, vendors struggle to meet payroll schedules, default on statutory GST liabilities, and incur bank overdraft interest. Over 68% of MSMEs report that delayed buyer payments restrict operational growth and daily production.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Traditional collection calls yield diminishing returns after 60 days, while hiring bespoke litigation counsel for each invoice is cost-prohibitive. Modern commercial recovery requires an all-in-one programmatic methodology executing advocate-drafted statutory demands in bulk while cutting per-case overhead costs.
                    </p>
                  </div>
                </section>

                {/* Section 2 */}
                <section id="statutory-framework" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. Indian Commercial Statutory Framework for Debt Recovery
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-4">
                    <p className="text-sm md:text-base leading-relaxed">
                      Indian commercial law equips corporate creditors with robust statutory instruments to compel defaulting buyers to clear delinquent liabilities:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <h3 className="font-extrabold text-sm md:text-base text-slate-900 mb-1 text-[#DC2626]">
                          The MSMED Act, 2006 (Sections 15–18)
                        </h3>
                        <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                          Section 15 mandates payment within 45 days. Section 16 imposes mandatory compound interest at 3x the RBI repo rate with monthly rests. Creditors file delayed payment petitions with the MSEFC under Section 18.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <h3 className="font-extrabold text-sm md:text-base text-slate-900 mb-1 text-[#DC2626]">
                          Order 37, Code of Civil Procedure, 1908
                        </h3>
                        <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                          Enables summary suits for liquidated debts and written contracts. Defendants cannot contest automatically and must apply for leave to defend within 10 days of summons.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <h3 className="font-extrabold text-sm md:text-base text-slate-900 mb-1 text-[#DC2626]">
                          Negotiable Instruments Act, 1881 (Sec. 138 &amp; 141)
                        </h3>
                        <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                          Criminalizes cheque dishonor for enforceable debts. Section 141 imposes vicarious personal liability on managing directors and partners in charge of corporate operations.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <h3 className="font-extrabold text-sm md:text-base text-slate-900 mb-1 text-[#DC2626]">
                          Commercial Courts Act, 2015 &amp; Section 12A
                        </h3>
                        <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                          Provides dedicated commercial courts with strict timelines. Section 12A mandates Pre-Institution Mediation and Settlement (PIMS) before instituting a commercial suit.
                        </p>
                      </div>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed">
                      For corporate debts exceeding ₹1 Crore, creditors can issue Form 3/Form 4 statutory demand notices under Section 8 of the Insolvency and Bankruptcy Code (IBC), 2016, preceding Section 9 insolvency.
                    </p>
                  </div>
                </section>

                {/* Section 3 */}
                <section id="why-single-litigation-fails" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Limitations of Single-Case Litigation
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-3">
                    <p className="text-sm md:text-base leading-relaxed">
                      Managing multiple delinquent client balances through separate lawsuits creates operational bottlenecks and cost overruns:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#DC2626] mt-2 shrink-0"></span>
                        <p className="text-xs md:text-sm text-slate-700">
                          <strong>High Individual Retainers:</strong> Traditional advocates charge ₹15,000–₹35,000 per notice. For 40 debtors, upfront fees exceed ₹8 Lakhs before recovering any capital.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#DC2626] mt-2 shrink-0"></span>
                        <p className="text-xs md:text-sm text-slate-700">
                          <strong>Multi-City Administrative Friction:</strong> Commercial debtors reside in different jurisdictions, requiring extensive coordination across multiple local registries.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#DC2626] mt-2 shrink-0"></span>
                        <p className="text-xs md:text-sm text-slate-700">
                          <strong>Debtor Delay Tactics:</strong> Defaulters know creditors rarely file full civil suits for mid-sized balances, stalling until the 3-year limitation period elapses.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#DC2626] mt-2 shrink-0"></span>
                        <p className="text-xs md:text-sm text-slate-700">
                          <strong>Inconsistent Documentation:</strong> Fragmented invoices and missing delivery challans weaken evidentiary weight during judicial examination.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 4 */}
                <section id="all-in-one-solution-architecture" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. All-in-One Bulk Recovery Architecture &amp; Economics
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-4">
                    <p className="text-sm md:text-base leading-relaxed">
                      An all-in-one bulk recovery platform combines legal expertise, document parsing, advocate oversight, and postal logistics into a unified digital infrastructure, lowering costs by 70% to 85%:
                    </p>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                      <ul className="list-disc list-inside text-xs md:text-sm text-slate-650 space-y-1.5">
                        <li><strong>Batch Ingestion:</strong> Creditors upload ledgers, invoices, purchase orders, and transport receipts in unified digital batches.</li>
                        <li><strong>Algorithmic Triage:</strong> The system segments debtors into aging buckets (30, 60, 90, 180+ days) and verifies corporate status on MCA and GST portals.</li>
                        <li><strong>Advocate Dynamic Drafting:</strong> Panel advocates customize legal notices with invoice breakdowns, delivery dates, and compound interest calculations.</li>
                        <li><strong>Dual-Track Dispatch:</strong> Notices are printed on advocate letterheads, posted via RPAD, and transmitted electronically via email and WhatsApp.</li>
                        <li><strong>Tracking &amp; Proof of Service:</strong> Real-time postal logs generate delivery certificates admissible under Section 65B of the Evidence Act / Section 63 BSA.</li>
                        <li><strong>Settlement Conciliation:</strong> Pre-litigation desks negotiate binding installment plans and compromise deeds without court fees.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section 5: Comparative Matrix */}
                <section id="comparative-matrix" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Strategic Comparative Matrix: Recovery Approaches
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-4">
                    <p className="text-sm md:text-base leading-relaxed">
                      Evaluating recovery models requires examining legal enforceability, cost efficiency, compliance, and settlement velocity across common market alternatives:
                    </p>
                    
                    <div className="overflow-x-auto mt-4">
                      <table className="w-full text-left border-collapse text-xs md:text-sm border border-slate-200">
                        <thead>
                          <tr className="bg-slate-100 text-slate-900 font-extrabold border-b border-slate-200">
                            <th className="p-3">Evaluation Metric</th>
                            <th className="p-3">Traditional Law Firm (Single Suit)</th>
                            <th className="p-3">Collection Agencies (Tele-callers)</th>
                            <th className="p-3 bg-red-50 text-[#DC2626]">All-in-One Bulk Legal Recovery</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-650">
                          <tr>
                            <td className="p-3 font-bold text-slate-900">Cost per Defaulting Account</td>
                            <td className="p-3">₹15,000 – ₹50,000+ per file</td>
                            <td className="p-3">15% – 35% commission + retainers</td>
                            <td className="p-3 bg-red-50/50 font-bold text-[#DC2626]">Affordable flat-rate bulk pricing</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="p-3 font-bold text-slate-900">Legal Authority &amp; Letterhead</td>
                            <td className="p-3">Yes (Single Advocate Letterhead)</td>
                            <td className="p-3">None (Informal call center notices)</td>
                            <td className="p-3 bg-red-50/50 font-bold text-slate-900">High Court / District Bar Advocate Letterhead</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">Statutory Penal Interest</td>
                            <td className="p-3">Manually calculated</td>
                            <td className="p-3">Cannot legally enforce</td>
                            <td className="p-3 bg-red-50/50 font-bold text-slate-900">Automated 3x RBI Repo compound interest (MSMED Act)</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="p-3 font-bold text-slate-900">Admissibility as Pre-Suit Notice</td>
                            <td className="p-3">High</td>
                            <td className="p-3">Zero (Inadmissible in Court)</td>
                            <td className="p-3 bg-red-50/50 font-bold text-slate-900">100% Admissible under CPC, MSMED Act &amp; NI Act</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">Multi-Debtor Scalability</td>
                            <td className="p-3">Very Poor (Manual bottlenecks)</td>
                            <td className="p-3">Moderate</td>
                            <td className="p-3 bg-red-50/50 font-bold text-slate-900">High (10 to 500+ notices simultaneously)</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="p-3 font-bold text-slate-900">Average Settlement Velocity</td>
                            <td className="p-3">6 – 24 Months</td>
                            <td className="p-3">Unpredictable / Low conversion</td>
                            <td className="p-3 bg-red-50/50 font-bold text-slate-900">15 – 45 Days (Pre-Litigation Settlement)</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">Regulatory &amp; Brand Risk</td>
                            <td className="p-3">Low</td>
                            <td className="p-3">Severe (Harassment complaints)</td>
                            <td className="p-3 bg-red-50/50 font-bold text-slate-900">Zero (Full compliance with Bar Council &amp; RBI norms)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                {/* Section 6: Evidentiary Audit */}
                <section id="evidentiary-audit-checklist" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Commercial Evidentiary Audit Checklist
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-3">
                    <p className="text-sm md:text-base leading-relaxed">
                      Enforceability requires rigorous documentary verification. Creditors must audit eight evidentiary records before dispatching notices:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                        <h4 className="font-extrabold text-xs md:text-sm text-slate-900 mb-0.5">1. Master Tax Invoices</h4>
                        <p className="text-xs text-slate-600">GST-compliant invoices with GSTINs, HSN/SAC codes, itemized values, and authorized signatures.</p>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                        <h4 className="font-extrabold text-xs md:text-sm text-slate-900 mb-0.5">2. Purchase Orders &amp; Contracts</h4>
                        <p className="text-xs text-slate-600">Signed contracts, work orders, purchase orders, or email confirmations of commercial scope.</p>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                        <h4 className="font-extrabold text-xs md:text-sm text-slate-900 mb-0.5">3. Proof of Delivery (POD)</h4>
                        <p className="text-xs text-slate-600">Goods Received Notes, transporter receipts (LR/Bilty), e-Way bills, or digital sign-offs.</p>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                        <h4 className="font-extrabold text-xs md:text-sm text-slate-900 mb-0.5">4. Reconciled Ledgers</h4>
                        <p className="text-xs text-slate-600">Statements of Account showing running balances, historic part-payments, and net principal sums.</p>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                        <h4 className="font-extrabold text-xs md:text-sm text-slate-900 mb-0.5">5. Debt Acknowledgments</h4>
                        <p className="text-xs text-slate-600">Balance confirmations, email admissions, or WhatsApp messages acknowledging liability under Section 18 Limitation Act.</p>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                        <h4 className="font-extrabold text-xs md:text-sm text-slate-900 mb-0.5">6. Dishonored Cheques &amp; Memos</h4>
                        <p className="text-xs text-slate-600">Dishonored cheques and bank return memos citing insufficient funds within the 30-day statutory window.</p>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                        <h4 className="font-extrabold text-xs md:text-sm text-slate-900 mb-0.5">7. Prior Demand Letters</h4>
                        <p className="text-xs text-slate-600">Overdue reminders and payment schedules demonstrating prior amicable collection efforts.</p>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                        <h4 className="font-extrabold text-xs md:text-sm text-slate-900 mb-0.5">8. Debtor Corporate Data</h4>
                        <p className="text-xs text-slate-600">MCA master records, Corporate Identification Number (CIN), registered address, and active Director DINs.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 7: Step-by-Step Procedure */}
                <section id="step-by-step-process" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    7. Step-by-Step Bulk Recovery Workflow
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-3">
                    <p className="text-sm md:text-base leading-relaxed">
                      Executing bulk recovery of unpaid dues for business follows a standardized seven-stage procedure:
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="bg-[#DC2626] text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0 font-black text-xs">1</div>
                        <div>
                          <h4 className="font-extrabold text-xs md:text-sm text-slate-900 mb-0.5">Portfolio Ingestion &amp; Aging Triage</h4>
                          <p className="text-xs text-slate-650 leading-relaxed">Segment delinquent invoices by aging bands (30, 60, 90, 180+ days) and confirm claimant MSME Udyam status.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-[#DC2626] text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0 font-black text-xs">2</div>
                        <div>
                          <h4 className="font-extrabold text-xs md:text-sm text-slate-900 mb-0.5">Corporate Verification &amp; Address Sanitization</h4>
                          <p className="text-xs text-slate-650 leading-relaxed">Cross-check debtor records against MCA and GST databases to target registered corporate offices and active directors.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-[#DC2626] text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0 font-black text-xs">3</div>
                        <div>
                          <h4 className="font-extrabold text-xs md:text-sm text-slate-900 mb-0.5">Advocate Notice Drafting &amp; Interest Computation</h4>
                          <p className="text-xs text-slate-650 leading-relaxed">Advocates draft tailored notices detailing transaction histories, invoices, and statutory compound interest under the MSMED Act.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-[#DC2626] text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0 font-black text-xs">4</div>
                        <div>
                          <h4 className="font-extrabold text-xs md:text-sm text-slate-900 mb-0.5">Omnichannel Dispatch</h4>
                          <p className="text-xs text-slate-650 leading-relaxed">Notices are sent via India Post RPAD and transmitted concurrently to corporate emails and director WhatsApp numbers.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-[#DC2626] text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0 font-black text-xs">5</div>
                        <div>
                          <h4 className="font-extrabold text-xs md:text-sm text-slate-900 mb-0.5">Consignment Tracking &amp; Delivery Proof Archival</h4>
                          <p className="text-xs text-slate-650 leading-relaxed">Track postal consignments in real time, securing delivery slips compliant with Section 65B Evidence Act / Section 63 BSA.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-[#DC2626] text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0 font-black text-xs">6</div>
                        <div>
                          <h4 className="font-extrabold text-xs md:text-sm text-slate-900 mb-0.5">15-Day Active Settlement Negotiation</h4>
                          <p className="text-xs text-slate-650 leading-relaxed">Conduct structured settlement dialogues during the compliance window, executing formal compromise deeds and payment plans.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-[#DC2626] text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0 font-black text-xs">7</div>
                        <div>
                          <h4 className="font-extrabold text-xs md:text-sm text-slate-900 mb-0.5">Multi-Track Judicial Escalation</h4>
                          <p className="text-xs text-slate-650 leading-relaxed">Escalate uncooperative debtors to MSME Samadhaan, file Section 138 criminal complaints, or institute Order 37 summary suits.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 8: Infographic */}
                <section id="infographic-overview" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    8. Bulk Recovery Lifecycle Infographic
                  </h2>
                  <div className="my-6 rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                    <img
                      src="/images/og/bulk-recovery-cases-all-in-one-affordable-solutions.jpg"
                      alt="Bulk Recovery Cases for Business Dues Infographic"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <p className="text-xs text-slate-500 mt-2 italic text-center">
                    Figure 1: End-to-end commercial bulk debt recovery lifecycle from portfolio ingestion and advocate drafting to omnichannel dispatch, pre-litigation settlement, and statutory judicial escalation.
                  </p>
                </section>

                {/* Section 9: Essential Notice Elements */}
                <section id="notice-anatomy" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    9. Essential Elements of an Enforceable Commercial Legal Notice
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-3">
                    <p className="text-sm md:text-base leading-relaxed">
                      An enforceable statutory commercial notice drafted by an advocate must incorporate eight foundational components:
                    </p>
                    <ul className="list-disc list-inside text-xs md:text-sm text-slate-650 space-y-1.5">
                      <li><strong>Bar Council Letterhead:</strong> Issued under an advocate&apos;s professional letterhead, displaying enrollment number and chamber address.</li>
                      <li><strong>Corporate Cause Title:</strong> Names the debtor entity, Corporate Identification Number (CIN), registered office, and directors.</li>
                      <li><strong>Contractual Background:</strong> Summarizes the commercial relationship, purchase orders, deliverables, and payment milestones.</li>
                      <li><strong>Itemized Ledger Table:</strong> Details unpaid invoice numbers, billing dates, values, part-payments, and net principal balance.</li>
                      <li><strong>Statutory Invocations:</strong> Cites Section 15 &amp; 16 MSMED Act, Section 138 NI Act, or Order 37 CPC.</li>
                      <li><strong>Compound Interest Calculation:</strong> Quantifies accrued interest at statutory rates (such as 3x RBI repo rate) up to notice issuance.</li>
                      <li><strong>15-Day Ultimatum:</strong> Establishes a mandatory 15-day compliance window from delivery receipt to settle outstanding dues.</li>
                      <li><strong>Litigation &amp; Cost Warning:</strong> States that non-compliance will trigger civil/criminal litigation with legal costs claimed from the debtor.</li>
                    </ul>
                  </div>
                </section>

                {/* Section 10: Multi-Track Judicial Escalation */}
                <section id="multi-track-escalation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    10. Multi-Track Judicial Escalation Pathways
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-4">
                    <p className="text-sm md:text-base leading-relaxed">
                      When debtors fail to settle within 15 days, claims escalate through four specialized statutory channels:
                    </p>

                    <div className="space-y-3 mt-2">
                      <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                        <h3 className="font-extrabold text-xs md:text-sm text-slate-900 mb-1 text-[#DC2626]">
                          Pathway 1: MSME Samadhaan &amp; MSEFC Arbitration
                        </h3>
                        <p className="text-xs text-slate-650 leading-relaxed">
                          Udyam-registered creditors file petitions under Section 18 of the MSMED Act. The Facilitation Council conducts conciliation, followed by statutory arbitration. Under Section 19, buyers must deposit 75% of awarded dues before challenging awards in court.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                        <h3 className="font-extrabold text-xs md:text-sm text-slate-900 mb-1 text-[#DC2626]">
                          Pathway 2: Criminal Complaint under Section 138 NI Act
                        </h3>
                        <p className="text-xs text-slate-650 leading-relaxed">
                          For dishonored cheques, creditors issue a statutory 30-day notice. If unpaid after 15 days, a criminal complaint is filed within 30 days under Section 142. Courts can award up to 20% interim compensation under Section 143A.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                        <h3 className="font-extrabold text-xs md:text-sm text-slate-900 mb-1 text-[#DC2626]">
                          Pathway 3: Summary Suit under Order 37 CPC
                        </h3>
                        <p className="text-xs text-slate-650 leading-relaxed">
                          For liquidated debts arising from written contracts, summary suits prevent frivolous defenses. If defendants fail to secure leave to defend within 10 days of summons, the court grants an immediate decree.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                        <h3 className="font-extrabold text-xs md:text-sm text-slate-900 mb-1 text-[#DC2626]">
                          Pathway 4: Corporate Insolvency under Section 9 IBC
                        </h3>
                        <p className="text-xs text-slate-650 leading-relaxed">
                          For undisputed corporate operational debts exceeding ₹1 Crore, creditors serve Form 3/Form 4 demand notices under Section 8. Failure to pay within 10 days allows filing for insolvency before the NCLT under Section 9.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 11: Debt Aging & Action Matrix Table */}
                <section id="aging-matrix-table" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    11. Debt Aging, Interest Rates &amp; Commercial Limitation Matrix
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-4">
                    <p className="text-sm md:text-base leading-relaxed">
                      Managing accounts receivable across a delinquent portfolio requires mapping invoice aging directly to legal remedies, interest calculations, and statutory limitation deadlines:
                    </p>

                    <div className="overflow-x-auto mt-4">
                      <table className="w-full text-left border-collapse text-xs md:text-sm border border-slate-200">
                        <thead>
                          <tr className="bg-slate-100 text-slate-900 font-extrabold border-b border-slate-200">
                            <th className="p-3">Aging Bucket</th>
                            <th className="p-3">Default Risk</th>
                            <th className="p-3">Primary Legal Remedy</th>
                            <th className="p-3">Applicable Interest Provision</th>
                            <th className="p-3">Limitation &amp; Escalation Strategy</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-650">
                          <tr>
                            <td className="p-3 font-bold text-slate-900">0 – 30 Days Overdue</td>
                            <td className="p-3"><span className="text-green-600 font-bold">Low</span></td>
                            <td className="p-3">Account reconciliation &amp; formal dunning reminders</td>
                            <td className="p-3">Standard contractual credit terms</td>
                            <td className="p-3">Limitation safe (3 years remaining). Verify delivery documentation.</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="p-3 font-bold text-slate-900">31 – 60 Days Overdue</td>
                            <td className="p-3"><span className="text-yellow-600 font-bold">Moderate</span></td>
                            <td className="p-3">Pre-legal demand letter referencing MSMED Act</td>
                            <td className="p-3">3x RBI repo rate compound interest begins at Day 46</td>
                            <td className="p-3">Request balance confirmation letter to secure formal written acknowledgment.</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">61 – 90 Days Overdue</td>
                            <td className="p-3"><span className="text-orange-600 font-bold">High</span></td>
                            <td className="p-3">Advocate statutory demand notice via RPAD &amp; Electronic Service</td>
                            <td className="p-3">Compound interest with monthly rests enforced</td>
                            <td className="p-3">15-day ultimatum. Notice serves as prerequisite for Section 12A mediation.</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="p-3 font-bold text-slate-900">91 – 180 Days Overdue</td>
                            <td className="p-3"><span className="text-red-600 font-bold">Severe</span></td>
                            <td className="p-3">MSME Samadhaan petition / Order 37 Summary Suit</td>
                            <td className="p-3">Statutory penal interest + claimed legal damages</td>
                            <td className="p-3">Check cheque bounce 30-day filing limits; initiate Section 12A pre-suit mediation.</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">180+ Days Overdue</td>
                            <td className="p-3"><span className="text-red-700 font-black">Critical</span></td>
                            <td className="p-3">NCLT Section 9 Demand / Civil Execution / Commercial Suit</td>
                            <td className="p-3">Full compound interest claim + litigation costs</td>
                            <td className="p-3">Monitor 3-year limitation window under Article 14 Limitation Act; execute immediate judicial filings.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                {/* Section 12: FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    12. Frequently Asked Questions
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

                {/* Section 13: External Statutory Citations */}
                <section id="statutory-citations" className="pt-8 border-t border-slate-100 scroll-mt-32">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                    Statutory Authorities &amp; Regulatory References
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    References and statutory portals: [1]{" "}
                    <a
                      href="https://msme.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline font-medium"
                    >
                      Ministry of Micro, Small and Medium Enterprises (MSME)
                    </a>
                    . [2]{" "}
                    <a
                      href="https://samadhaan.msme.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline font-medium"
                    >
                      MSME Samadhaan Delayed Payment Monitoring Portal
                    </a>
                    . [3]{" "}
                    <a
                      href="https://ibbi.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline font-medium"
                    >
                      Insolvency and Bankruptcy Board of India (IBBI)
                    </a>
                    . [4]{" "}
                    <a
                      href="https://nclt.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline font-medium"
                    >
                      National Company Law Tribunal (NCLT)
                    </a>
                    . [5]{" "}
                    <a
                      href="https://www.mca.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline font-medium"
                    >
                      Ministry of Corporate Affairs (MCA)
                    </a>
                    . [6]{" "}
                    <a
                      href="https://www.indiacode.nic.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline font-medium"
                    >
                      India Code Digital Legislative Repository
                    </a>
                    . [7]{" "}
                    <a
                      href="https://ncdrc.nic.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline font-medium"
                    >
                      National Consumer Disputes Redressal Commission (NCDRC)
                    </a>
                    .
                  </p>
                </section>
              </div>
            </div>

            {/* Right Column Sticky Sidebar */}
            <div className="space-y-8 sticky top-24">
              {/* Intake CTA Box */}
              <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
                <span className="inline-block text-[#DC2626] text-[10px] font-black uppercase tracking-widest mb-2 bg-red-950/40 px-2.5 py-1 rounded-md border border-[#DC2626]/20">
                  ALL-IN-ONE SOLUTION
                </span>
                <h3 className="text-sm font-black mb-2 text-white">Start Bulk Notice Intake</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Upload your delinquent debtor ledger. Our panel advocates handle batch legal notice drafting, postal dispatch via India Post RPAD, and tracking.
                </p>
                <button
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="block w-full bg-[#DC2626] text-white text-center py-3 rounded-xl text-xs font-bold hover:bg-[#B91C1C] transition-colors mb-2 cursor-pointer shadow-md shadow-red-950/20"
                >
                  Start Notice Intake
                </button>
                <p className="text-[10px] text-gray-400 text-center">Fast 48-Hour Legal Dispatch</p>
              </div>

              {/* Client Reviews UI Block - EXACT match to Schema */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-sm font-black mb-1 text-slate-900">Client Reviews</h3>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-[#F59E0B] text-sm">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                  <span className="text-xs font-bold text-slate-700">4.9/5</span>
                  <span className="text-xs text-slate-500">(184 reviews)</span>
                </div>
                <div className="border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">VM</div>
                    <span className="text-xs font-bold text-slate-800">Vikramaditya Mehta</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    &quot;We had 38 defaulting B2B distributors owing over ₹64 lakhs. Legal Recovery handled the entire bulk legal notice dispatch in 48 hours. Within 30 days, we recovered 72% of our outstanding dues without stepping into a courtroom.&quot;
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Topical Authority - More Legal Recovery Guides */}
          <div className="mt-16 mb-8 max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center md:text-left">
              More Commercial Debt &amp; Legal Recovery Guides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href="/recovery-of-unpaid-dues-for-my-business"
                className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all"
              >
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">
                  Recovery of Unpaid Dues
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2">
                  Detailed statutory guide on recovering outstanding commercial debts, B2B unpaid invoices, and vendor defaults under Indian law.
                </p>
              </Link>
              <Link
                href="/msme-delayed-payment-recovery-samadhan-vs-legal-notice"
                className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all"
              >
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">
                  MSME Samadhaan vs Legal Notice
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2">
                  Compare the advantages, timelines, and enforcement powers of the MSME Facilitation Council versus advocate statutory notices.
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
                  Comprehensive breakdown of Order 37 CPC summary suits, court fees, limitation periods, and execution decrees in Indian courts.
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
                  Strict statutory timelines, mandatory notice drafting requirements, and criminal magistrate complaint filing under the NI Act.
                </p>
              </Link>
              <Link
                href="/send-a-legal-notice"
                className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all"
              >
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">
                  Send a Legal Notice Online
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2">
                  Explore our full suite of advocate-drafted legal notice services, physical speed post dispatch, and digital tracking for businesses.
                </p>
              </Link>
              <Link
                href="/how-to-file-consumer-complaint-india"
                className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all"
              >
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">
                  Consumer Complaint Guide
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2">
                  Procedural walkthrough for escalating deficiency in service and unfair trade practices to the District and State Consumer Commissions.
                </p>
              </Link>
            </div>
          </div>

          {/* Legal Recovery Company Section */}
          <div className="mt-16 max-w-5xl mx-auto mb-10">
            <div className="bg-white border-2 border-slate-100 rounded-[2rem] p-8 md:p-12 shadow-sm">
              <div className="mb-8">
                <img src="/lrlogo.svg" alt="LegalRecovery" className="h-8 sm:h-10 w-auto object-contain" />
              </div>
              <p className="text-sm md:text-base text-slate-650 leading-relaxed mb-10 max-w-3xl font-medium">
                Legal Recovery is India&apos;s trusted commercial recovery and legal tech platform. Founded in 2022 and headquartered in New Delhi, Legal Recovery has counselled 15,000+ businesses and individuals on debt recovery, commercial dispute resolution, and contractual enforcement. Legal Recovery focuses on fast out-of-court settlements and connects you with top panel advocates.
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
                    href="/recovery-of-unpaid-dues-for-my-business"
                    className="py-4 px-4 rounded-xl border-2 border-[#DC2626] text-[#DC2626] font-bold text-sm hover:bg-[#DC2626] hover:text-white transition-colors cursor-pointer bg-white text-center flex items-center justify-center"
                  >
                    B2B Debt Recovery
                  </Link>
                  <Link
                    href="/msme-delayed-payment-recovery-samadhan-vs-legal-notice"
                    className="py-4 px-4 rounded-xl border-2 border-[#DC2626] text-[#DC2626] font-bold text-sm hover:bg-[#DC2626] hover:text-white transition-colors cursor-pointer bg-white text-center flex items-center justify-center"
                  >
                    MSME Samadhaan Guidance
                  </Link>
                  <Link
                    href="/civil-suit-for-recovery-of-money-india"
                    className="py-4 px-4 rounded-xl border-2 border-[#DC2626] text-[#DC2626] font-bold text-sm hover:bg-[#DC2626] hover:text-white transition-colors cursor-pointer bg-white text-center flex items-center justify-center md:col-span-1"
                  >
                    Summary Suits (Order 37)
                  </Link>
                  <Link
                    href="/cheque-bounce-notice-timeline-section-138"
                    className="py-4 px-4 rounded-xl border-2 border-[#DC2626] text-[#DC2626] font-bold text-sm hover:bg-[#DC2626] hover:text-white transition-colors cursor-pointer bg-white text-center flex items-center justify-center md:col-span-2"
                  >
                    Cheque Bounce Notice (Sec. 138)
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
      </div>
    </>
  );
}
