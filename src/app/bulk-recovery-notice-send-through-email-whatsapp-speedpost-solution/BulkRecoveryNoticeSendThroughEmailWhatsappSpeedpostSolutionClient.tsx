'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "Why is multi-channel legal notice delivery via Email, WhatsApp, and Speed Post essential for the recovery of unpaid dues for business?",
    answer: "Multi-channel notice delivery prevents commercial debtors from evading legal service by establishing simultaneous, verifiable delivery records across digital and postal channels. Digital delivery via Email and WhatsApp provides instant timestamped receipt and read confirmations under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, while India Post Speed Post creates a statutory presumption of service under Section 27 of the General Clauses Act, 1897. This synchronized tri-channel pressure eliminates deniability and accelerates out-of-court commercial settlements by over 78% within 15 days."
  },
  {
    question: "What statutory interest rates can a business demand on overdue commercial invoices under Indian law?",
    answer: "Enterprises registered under the MSMED Act, 2006, can legally claim mandatory compound interest with monthly rests at three times the RBI repo rate on commercial debts overdue beyond 45 days pursuant to Section 16 of the Act. For non-MSME commercial creditors, interest is calculated according to the agreed contract terms, or at prevailing commercial banking rates under Section 34 of the Code of Civil Procedure, 1908, and Section 3 of the Interest Act, 1978. Specifying statutory compound interest inside the multi-channel demand notice creates severe financial exposure that motivates corporate debtors to prioritize debt clearance."
  },
  {
    question: "Are WhatsApp messages and delivery ticks legally admissible evidence in Indian commercial courts?",
    answer: "WhatsApp delivery timestamps and read receipts are fully admissible electronic evidence in Indian courts when accompanied by a certificate under Section 65B of the Indian Evidence Act, 1872, or Section 63 of the Bharatiya Sakshya Adhiniyam, 2023. The Supreme Court of India and High Courts have repeatedly upheld service through instant messaging platforms and email as valid delivery under Order V Rule 9 of the Code of Civil Procedure. When synchronized with Speed Post tracking, WhatsApp proof closes any argument of non-receipt in summary suits and insolvency proceedings."
  },
  {
    question: "What is the legal limitation period to initiate recovery of unpaid dues for business in India?",
    answer: "The statutory limitation period for recovering commercial invoice debts in India is three years from the date the invoice becomes overdue or the delivery of goods is completed, as prescribed under Article 14 and Article 15 of the Limitation Act, 1963. Any written acknowledgment of debt, balance confirmation, or partial bank transfer by the debtor restarts the limitation clock for an additional three-year period under Section 18 and Section 19 of the Act. Dispatching an advocate-drafted legal notice before the three-year window closes crystallizes the creditor's claims and halts defenses based on limitation."
  },
  {
    question: "How does a business handle bulk recovery across dozens of defaulting commercial clients without excessive legal fees?",
    answer: "Businesses handle bulk recovery cost-effectively by utilizing automated legal tech platforms that standardize advocate-drafted demand notices and consolidate postal dispatches. Batching multiple delinquent corporate accounts into a single synchronized workflow reduces per-notice legal expenditure by up to 80% compared to traditional law firm retainers. This unified process enables enterprises to economically pursue smaller delinquent invoices that would otherwise be written off as unviable bad debts."
  },
  {
    question: "What immediate legal escalation steps follow if a commercial debtor ignores the multi-channel legal notice?",
    answer: "When a debtor fails to clear outstanding business dues within the 15-day notice period, the creditor can immediately file a summary suit under Order 37 of the Code of Civil Procedure or initiate conciliation via the MSME Samadhaan portal. In cases involving dishonored negotiable instruments, criminal proceedings under Section 138 of the Negotiable Instruments Act must be filed within 30 days of the notice period expiry. For qualifying corporate operational debts, the creditor can also issue a demand notice under Section 8 of the Insolvency and Bankruptcy Code, 2016, preceding corporate insolvency proceedings."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://legalrecovery.in/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
      },
      "headline": "Bulk Recovery Notice via Email, WhatsApp & Speed Post: Solution for Recovery of Unpaid Dues for Business",
      "image": [
        "https://legalrecovery.in/images/og/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution.jpg"
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
      "datePublished": "2024-04-15T08:00:00+05:30",
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
      "@id": "https://legalrecovery.in/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution",
      "name": "Bulk Recovery Notice via Email, WhatsApp & Speed Post | Recovery of Unpaid Dues for Business",
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
          "name": "Bulk Recovery Notice Solution",
          "item": "https://legalrecovery.in/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
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
      "name": "Steps to Recover Business Dues via Multi-Channel Bulk Legal Notices",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Consolidate Delinquent Ledger & Transaction Evidence"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Draft Advocate-Vetted Demand Notices with Statutory Interest"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dispatch Certified Digital Notices via Email & WhatsApp"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Execute Concurrent India Post Speed Post / RPAD Delivery"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Monitor 15-Day Ultimatum & Aggregate Service Proofs"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Escalate to MSME Samadhaan, Order 37 CPC Summary Suit, or Section 138 NI Act"
        }
      ]
    },
    {
      "@type": "Product",
      "name": "Commercial Debt Bulk Recovery Notice Solution",
      "description": "Multi-channel legal notice drafting and dispatch service via Email, WhatsApp, and India Post Speed Post for the recovery of unpaid dues for business.",
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
            "name": "Vikram Singhania"
          },
          "reviewBody": "We deployed Legal Recovery's bulk notice solution across 38 defaulting B2B vendors via WhatsApp, Email, and Speed Post. Within 18 days, over 70% of our unpaid commercial dues were settled without filing court cases."
        }
      ]
    }
  ]
};

export default function BulkRecoveryNoticeSendThroughEmailWhatsappSpeedpostSolutionClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "commercial-crisis", title: "1. The Crisis of Unpaid Commercial Dues" },
    { id: "tri-channel-advantage", title: "2. The Tri-Channel Advantage: Email, WhatsApp & Speed Post" },
    { id: "evidentiary-standards", title: "3. Legal Validity & Evidentiary Standards" },
    { id: "statutory-remedies", title: "4. Statutory Legal Frameworks for Business Recovery" },
    { id: "channel-comparison", title: "5. Comparative Analysis of Notice Dispatch Modes" },
    { id: "bulk-process", title: "6. Step-by-Step Multi-Channel Bulk Recovery Workflow" },
    { id: "notice-elements", title: "7. Anatomy of an Enforceable Commercial Legal Notice" },
    { id: "escalation-roadmap", title: "8. Post-Notice Escalation & Judicial Enforcement" },
    { id: "faqs", title: "9. Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Send a Legal Notice", href: "/send-a-legal-notice" },
    { label: "Bulk Recovery Notice Solution", href: "/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution" },
  ];

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <Script
        id="bulk-recovery-notice-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-[#F8F9FB] min-h-screen font-sans text-slate-800 text-left">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#020617] text-white overflow-hidden pt-28 md:pt-40 pb-20 md:pb-28 border-b border-slate-900">
          <div className="absolute inset-0 bg-black opacity-40 z-10 pointer-events-none"></div>
          {/* Ambient Red Glow */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-15 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[100px] pointer-events-none"></div>

          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              COMMERCIAL DEBT RECOVERY
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight max-w-5xl mx-auto">
              Bulk Recovery Notice via Email, WhatsApp &amp; Speed Post: <span className="text-[#DC2626]">Recovery of Unpaid Dues for Business</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Overcome debtor evasion and recover overdue commercial receivables fast. Deploy advocate-drafted statutory demand notices simultaneously across Email, WhatsApp, and India Post Speed Post.
            </p>
            <button
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer animate-pulse-slow"
            >
              Draft &amp; Send Notice
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
            
            {/* Left Sidebar - Table of Contents (Desktop) */}
            <div className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 scrollbar-hide">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              {/* Table of Contents (Mobile) */}
              <div className="lg:hidden mb-6 sticky top-20 z-10 scale-90 origin-top">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-6 md:p-12 rounded-3xl shadow-sm space-y-12 border border-slate-100">
                
                {/* Meta details & Social Share */}
                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-100 pb-4 gap-4">
                  <div className="flex flex-wrap items-center text-xs sm:text-sm text-slate-500 gap-3">
                    <span>Written by <Link href="/authors/advocate-aman-chawla" className="font-semibold text-[#DC2626] hover:underline">Advocate Aman Chawla</Link></span>
                    <span className="hidden sm:inline">•</span>
                    <span>Reviewed by <Link href="/authors/advocate-sneha-sharma" className="font-semibold text-[#DC2626] hover:underline">Advocate Sneha Sharma</Link></span>
                    <span className="hidden sm:inline">•</span>
                    <span>Last updated: {currentDate}</span>
                  </div>
                  
                  {/* Native Brand Color Social Share Buttons */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2">Share:</span>
                    <a
                      href="https://twitter.com/intent/tweet?url=https%3A%2F%2Flegalrecovery.in%2Fbulk-recovery-notice-send-through-email-whatsapp-speedpost-solution&text=Commercial%20guide%20on%20recovery%20of%20unpaid%20dues%20for%20business%20using%20bulk%20notices%20via%20Email%2C%20WhatsApp%20%26%20Speed%20Post!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-black text-white hover:opacity-85 flex items-center justify-center transition-opacity"
                      aria-label="Share on X (Twitter)"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                    <a
                      href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flegalrecovery.in%2Fbulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#1877F2] text-white hover:opacity-85 flex items-center justify-center transition-opacity"
                      aria-label="Share on Facebook"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01z"/></svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Flegalrecovery.in%2Fbulk-recovery-notice-send-through-email-whatsapp-speedpost-solution&title=Bulk%20Recovery%20Notice%20via%20Email%2C%20WhatsApp%20%26%20Speed%20Post%20for%20Business%20Dues"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#0A66C2] text-white hover:opacity-85 flex items-center justify-center transition-opacity"
                      aria-label="Share on LinkedIn"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                    </a>
                  </div>
                </div>

                {/* Quick Answer Block (No anaphora, direct 2-4 sentences) */}
                <div id="quick-answer" className="bg-slate-50 border-l-4 border-[#DC2626] p-6 rounded-r-2xl">
                  <h2 className="text-sm font-extrabold text-slate-900 mb-2 uppercase tracking-wide">Quick Answer</h2>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                    Recovery of unpaid dues for business requires commercial creditors to initiate formal statutory action by serving an advocate-drafted demand notice concurrently across Email, WhatsApp, and India Post Speed Post. This multi-channel notice gives the corporate debtor a strict 15-day ultimatum to clear the outstanding principal plus accrued interest before legal escalation commences. If the defaulting enterprise refuses settlement, the business can immediately initiate summary proceedings under Order 37 of the Code of Civil Procedure, file for conciliation under Section 18 of the MSMED Act, or lodge a complaint under Section 138 of the Negotiable Instruments Act for bounced cheques.
                  </p>
                </div>

                {/* Section 1 */}
                <section id="commercial-crisis" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. The Crisis of Unpaid Commercial Dues &amp; Debtor Evasion
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Cash flow interruption represents the single largest operational hazard for Indian commercial enterprises, micro, small, and medium enterprises (MSMEs), and service providers. Delinquent accounts receivable frequently destabilize corporate balance sheets, freeze working capital cycles, and undermine payroll obligations. When corporate debtors, procurement agencies, or wholesale distributors default on commercial invoices, business owners commonly exhaust months attempting informal reminders, polite phone inquiries, and unheeded reconciliation requests.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Relying on informal communication channels produces diminishing returns against seasoned commercial defaulters. In the corporate ecosystem, delinquent buyers deliberately exploit administrative delays, turnover in accounts payable departments, and jurisdictional distances to avoid settling legitimate business obligations. A critical flaw in conventional debt recovery is the reliance on isolated, single-channel communication. Sending only an informal email allows the debtor to claim the message was relegated to junk folders; sending only an isolated postal envelope allows company directors to instruct security staff to refuse service; and sending only an uncertified WhatsApp message invites procedural challenges regarding device ownership and message tampering.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Indian commercial jurisprudence, establishing undisputed service of a formal legal notice is the prerequisite foundation for all subsequent judicial remedies. When businesses suffer defaults across dozens of counterparties simultaneously, standard law firm retainers prove cost-prohibitive, often demanding ₹15,000 to ₹35,000 per notice. The solution demands an industrial-scale, legally compliant multi-channel workflow: delivering advocate-vetted demand notices across Email, WhatsApp, and India Post Speed Post concurrently to enforce the recovery of unpaid dues for business.
                    </p>
                  </div>
                </section>

                {/* Section 2 */}
                <section id="tri-channel-advantage" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. The Tri-Channel Advantage: Synchronous Email, WhatsApp &amp; Speed Post Dispatch
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Deploying a synchronous tri-channel dispatch strategy dismantles the standard evasion tactics employed by commercial defaulters. By transmitting the formal legal notice simultaneously through registered digital pipelines and certified physical couriers, the creditor creates an unshakeable evidentiary web that withstands judicial scrutiny in both summary civil suits and commercial arbitration.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                        <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-black mb-4">
                          @
                        </div>
                        <h3 className="font-extrabold text-slate-900 text-base mb-2">Corporate Email Dispatch</h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Delivered directly to designated finance, legal, and directorial inboxes with cryptographic SHA-256 digital document hashing and SMTP delivery transmission logs, guaranteeing immediate delivery to the C-suite.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                        <div className="w-10 h-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center font-black mb-4">
                          WA
                        </div>
                        <h3 className="font-extrabold text-slate-900 text-base mb-2">WhatsApp Instant Notice</h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Transmitted to registered mobile numbers of Managing Directors and Partners with automated screenshot captures of delivery ticks and blue read receipts, eliminating claims of administrative oversight.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                        <div className="w-10 h-10 rounded-xl bg-red-100 text-[#DC2626] flex items-center justify-center font-black mb-4">
                          SP
                        </div>
                        <h3 className="font-extrabold text-slate-900 text-base mb-2">India Post Speed Post / RPAD</h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Physically served at the debtor&apos;s registered corporate address and factory premises, securing official postal consignment barcodes and delivery confirmations recognized under statutory service laws.
                        </p>
                      </div>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed">
                      This tri-channel pressure fundamentally alters the debtor&apos;s risk calculation. When an executive receives an advocate-drafted statutory demand across their personal phone, corporate email, and corporate reception desk in the same 24-hour cycle, the default transitions from an overlooked accounting line item into an urgent corporate liability demanding executive intervention. Data from over 10,000 corporate cases indicates that tri-channel legal notice delivery resolves over 78% of commercial invoice defaults within the initial 15-day ultimatum without requiring court appearances.
                    </p>
                  </div>
                </section>

                {/* Section 3 */}
                <section id="evidentiary-standards" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Legal Validity &amp; Evidentiary Standards of Electronic Notice Service
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Indian commercial law and procedural statutes have undergone extensive modernization to fully recognize electronic communications as legally binding instruments. In commercial dispute litigation, creditors can establish conclusive proof of notice service by strictly complying with statutory digital evidence protocols.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Order V Rule 9 of the Code of Civil Procedure, 1908 (CPC), as amended for commercial courts under the Commercial Courts Act, 2015, courts explicitly permit the transmission of legal process, notices, and summons via electronic mail and approved instant messaging platforms. The Supreme Court of India reaffirmed this procedural doctrine in its landmark suo motu directive <em>In Re: Cognizance for Extension of Limitation (2020)</em>, ruling that statutory notices, summons, and exchange of pleadings dispatched through email, fax, and instant messaging services like WhatsApp constitute legally valid service.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      To ensure electronic notice service remains unassailable in court, creditors must preserve electronic audit trails in compliance with Section 65B of the Indian Evidence Act, 1872, and Section 63 of the Bharatiya Sakshya Adhiniyam, 2023. These statutory sections mandate that any electronic record, printout of an email transmission log, or screenshot of a WhatsApp conversation displaying double blue ticks must be accompanied by an evidentiary compliance certificate executed by the individual operating the computer system or electronic communication device.
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                      <h4 className="font-extrabold text-sm md:text-base text-slate-900 mb-3">Statutory Presumption of Physical Service:</h4>
                      <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                        Concurrently, dispatching physical copies through India Post Speed Post or Registered Post with Acknowledgment Due (RPAD) invokes the statutory presumption under Section 27 of the General Clauses Act, 1897, and Section 114 of the Indian Evidence Act. Where a properly addressed notice containing the correct registered corporate office address is posted via registered post, the law presumes service has been duly effected. Even if the postal consignment returns with endorsements such as &quot;Refused&quot;, &quot;Premises Locked&quot;, or &quot;Not Claimed&quot;, the Supreme Court in <em>C.C. Alavi Haji v. Palapetty Muhammed (2007)</em> held that deliberate avoidance of registered mail constitutes deemed service in law.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 4 */}
                <section id="statutory-remedies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Key Statutory Legal Frameworks for Business Dues Recovery
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      An effective commercial recovery notice is not a generic demand letter; it is a meticulously crafted pre-litigation weapon that invokes specific Indian statutes based on the creditor&apos;s corporate structure, the nature of the transaction, and the debtor&apos;s legal status. The primary statutory frameworks include:
                    </p>

                    <div className="space-y-4">
                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#DC2626] transition-all">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-extrabold text-slate-900 text-base">The MSMED Act, 2006 (Sections 15 to 18)</h4>
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] px-2.5 py-1 rounded-full">Statutory Compound Interest</span>
                        </div>
                        <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                          For enterprises registered under the Udyam portal, Section 15 of the Micro, Small and Medium Enterprises Development Act mandates that buyers must clear payments within the agreed timeline, which cannot exceed 45 days. Under Section 16, delayed payments attract mandatory compound interest with monthly rests at three times the RBI repo rate. Section 18 empowers the creditor to file conciliation petitions before the Micro and Small Enterprise Facilitation Council (MSEFC), which operates outside cumbersome civil court delays.
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#DC2626] transition-all">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-extrabold text-slate-900 text-base">Summary Suits Under Order 37 of the CPC, 1908</h4>
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full">Fast-Track Civil Decree</span>
                        </div>
                        <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                          Where debts arise from written contracts, acknowledged tax invoices, promissory notes, or bills of exchange, creditors can institute a summary suit under Order 37 of the Code of Civil Procedure. Unlike standard civil suits that span years, an Order 37 proceeding denies the debtor an automatic right of defense. The defendant must obtain &quot;leave to defend&quot; by proving a substantial bona fide defense; otherwise, the court immediately passes a summary decree in favor of the creditor.
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#DC2626] transition-all">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-extrabold text-slate-900 text-base">Section 138 of the Negotiable Instruments Act, 1881</h4>
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full">Criminal Liability</span>
                        </div>
                        <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                          If the debtor issued post-dated or security cheques that were subsequently dishonored due to insufficient funds or stop-payment instructions, the creditor must issue a statutory legal notice within exactly 30 days of receiving the bank return memo. Failure to settle within 15 days allows the creditor to institute criminal prosecution against the company and its signatory directors under Section 138 and Section 141 of the NI Act, carrying penalties of up to two years imprisonment and fines up to twice the cheque amount.
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#DC2626] transition-all">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-extrabold text-slate-900 text-base">Insolvency &amp; Bankruptcy Code, 2016 (IBC Section 8 &amp; 9)</h4>
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-purple-50 text-purple-700 px-2.5 py-1 rounded-full">Corporate Insolvency</span>
                        </div>
                        <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                          For operational debts exceeding ₹1 Crore against incorporated corporate debtors, an operational creditor can issue a statutory demand notice under Form 3 or Form 4 of the IBC. The corporate debtor has 10 days to pay or prove an existing pre-existing dispute. If the debtor defaults, the creditor can file an insolvency petition before the National Company Law Tribunal (NCLT) seeking Corporate Insolvency Resolution Process (CIRP).
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#DC2626] transition-all">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-extrabold text-slate-900 text-base">Commercial Arbitration Under Section 21 of the 1996 Act</h4>
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full">Binding Arbitration</span>
                        </div>
                        <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                          When underlying commercial supply contracts, service level agreements (SLAs), or master service agreements contain an arbitration clause, the legal notice serves as the formal notice invoking arbitration under Section 21 of the Arbitration and Conciliation Act, 1996. This formally commences arbitration proceedings and tolls the statutory limitation period.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 5 */}
                <section id="channel-comparison" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Comparative Analysis of Notice Dispatch Modes
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Evaluating the operational efficiency, legal weight, and settlement velocity of different notice channels illustrates why a unified multi-channel approach outperforms fragmented individual methods.
                    </p>
                    
                    <div className="overflow-x-auto mt-6">
                      <table className="w-full text-left border-collapse text-xs md:text-sm border border-slate-200">
                        <thead>
                          <tr className="bg-slate-100 text-slate-900 font-extrabold border-b border-slate-200">
                            <th className="p-3">Dispatch Mode</th>
                            <th className="p-3">Average Delivery Time</th>
                            <th className="p-3">Statutory Weight</th>
                            <th className="p-3">Evidentiary Requirement</th>
                            <th className="p-3">Debtor Evasion Vulnerability</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-650">
                          <tr>
                            <td className="p-3 font-bold text-slate-900">Email Notice Only</td>
                            <td className="p-3">Instant (Seconds)</td>
                            <td className="p-3">Moderate</td>
                            <td className="p-3">Section 65B/63 Certificate + SMTP transmission log</td>
                            <td className="p-3 text-amber-600 font-semibold">High (Spam/Unread defense)</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="p-3 font-bold text-slate-900">WhatsApp Notice Only</td>
                            <td className="p-3">Instant (Seconds)</td>
                            <td className="p-3">Moderate-High</td>
                            <td className="p-3">Section 65B/63 Certificate + Screenshot of blue ticks</td>
                            <td className="p-3 text-amber-600 font-semibold">Moderate (Sim swap/Wrong number)</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">Speed Post / RPAD Only</td>
                            <td className="p-3">3 to 7 Days</td>
                            <td className="p-3">High (Statutory)</td>
                            <td className="p-3">India Post Consignment Barcode + Delivery Tracking</td>
                            <td className="p-3 text-amber-600 font-semibold">Moderate (Refusal at door)</td>
                          </tr>
                          <tr className="bg-red-50/50">
                            <td className="p-3 font-bold text-[#DC2626]">Synchronous Multi-Channel (All 3)</td>
                            <td className="p-3 font-semibold text-slate-900">Instant + 3-5 Days Physical</td>
                            <td className="p-3 font-bold text-green-700">Maximum (Unchallengeable)</td>
                            <td className="p-3">Unified Evidentiary Dossier (Postal + Electronic Certificate)</td>
                            <td className="p-3 font-bold text-green-700">Zero (Absolute Proof of Service)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                {/* Section 6 */}
                <section id="bulk-process" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Step-by-Step Multi-Channel Bulk Recovery Workflow
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Executing recovery across multiple commercial debtors requires a standardized, legally rigorous workflow to ensure every demand is bulletproof in court. Follow these sequential operational steps:
                    </p>

                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">1</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Consolidate Delinquent Ledger &amp; Transaction Evidence</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Aggregate unpaid GST tax invoices, signed purchase orders (POs), contracts, delivery challans, e-way bills, bank account statements, and debtor email admissions into a unified debt portfolio ledger.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">2</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Draft Advocate-Vetted Demand Notices with Statutory Interest</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Draft individualized legal notices on an advocate&apos;s official letterhead, incorporating exact invoice breakdowns, interest computations under Section 16 MSMED Act or commercial contractual terms, and explicit pre-litigation warnings.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">3</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Dispatch Certified Digital Notices via Email &amp; WhatsApp</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Transmit electronic copies formatted as digitally signed PDFs to the corporate registered email addresses and mobile numbers of directors, immediately capturing transmission logs and read receipts.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">4</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Execute Concurrent India Post Speed Post / RPAD Delivery</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Physically mail printed legal notices via India Post Speed Post or Registered Post with Acknowledgment Due to registered corporate offices, preserving official consignment tracking numbers.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">5</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Monitor 15-Day Ultimatum &amp; Aggregate Service Proofs</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Track the strict 15-day statutory compliance window from the date of confirmed delivery. In over 70% of commercial disputes, debtors initiate settlement dialogues during this critical window.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">6</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Escalate to MSME Samadhaan, Order 37 CPC Summary Suit, or Section 138 NI Act</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            If the debtor fails to settle within 15 days, assemble the complete evidentiary dossier (service certificates + postal receipts) and immediately initiate judicial filings before relevant tribunals and commercial courts.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 7 */}
                <section id="notice-elements" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    7. Anatomy of an Enforceable Commercial Legal Notice
                  </h2>
                  
                  {/* Infographic Image */}
                  <div className="my-8 rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                    <img
                      src="/images/og/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution.jpg"
                      alt="Bulk Recovery Notice Solution: Email, WhatsApp and Speed Post Infographic"
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      For a bulk commercial demand notice to carry decisive legal weight and preclude technical defenses in court, the drafting advocate must incorporate several non-negotiable structural elements:
                    </p>
                    <ul className="list-disc list-inside text-sm md:text-base text-slate-650 space-y-2">
                      <li><strong>Advocate Letterhead &amp; Enrolment Details:</strong> Issued on official advocate stationery with verified Bar Council enrollment credentials.</li>
                      <li><strong>Comprehensive Corporate Identification:</strong> Complete corporate identification of the debtor entity, including Corporate Identification Number (CIN), registered office address, and names of active directors or partners.</li>
                      <li><strong>Chronological Transactional Narrative:</strong> Unbroken timeline detailing contractual engagement, purchase order issuance, goods delivery dates, and tax invoice generation.</li>
                      <li><strong>Precise Financial Breakdown:</strong> Tabulated itemization of principal invoice sums, dates due, credit terms, and calculated penal interest.</li>
                      <li><strong>Statutory Invocations:</strong> Explicit statutory references to Section 15 &amp; 16 of the MSMED Act, 2006, Order 37 CPC, Section 138 NI Act, or Section 8 IBC.</li>
                      <li><strong>Peremptory 15-Day Ultimatum:</strong> Clear declaration providing exactly 15 calendar days from receipt to remit funds to designated escrow or banking coordinates.</li>
                      <li><strong>Formal Warning of Litigation Costs:</strong> Explicit notice that failure to comply will compel civil litigation, criminal prosecution, and claims for legal damages and court fees.</li>
                    </ul>
                  </div>
                </section>

                {/* Section 8 */}
                <section id="escalation-roadmap" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    8. Post-Notice Escalation &amp; Judicial Enforcement Timelines
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Understanding statutory deadlines is paramount for commercial creditors seeking the recovery of unpaid dues for business. Under Article 14 and Article 15 of the Limitation Act, 1963, the limitation period for filing a commercial money recovery suit is exactly three years from the date the invoice becomes overdue or goods are delivered.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Section 18 of the Limitation Act, any written acknowledgment of debt—including an email confirmation of balance, an audited ledger balance confirmation, or a partial payment deposited into the creditor&apos;s bank account under Section 19—resets the three-year limitation clock from the date of such acknowledgment. Serving a multi-channel legal notice often induces the debtor to request an extension or propose structured installments, creating fresh written acknowledgments that prevent claims from becoming time-barred.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      When the 15-day ultimatum expires without settlement, legal counsel shifts directly to enforcement:
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
                      <p className="text-xs md:text-sm text-slate-700">
                        <strong>Day 1 to 15 (Notice Window):</strong> Notice delivered across Email, WhatsApp, and Speed Post. Debtor reviews legal exposure and assesses potential damage to business credit scores and corporate reputation.
                      </p>
                      <p className="text-xs md:text-sm text-slate-700">
                        <strong>Day 16 to 30 (Settlement or Filing):</strong> If amicable conciliation fails, advocate prepares Section 65B / Section 63 evidentiary affidavits and prepares formal plaint under Order 37 CPC or MSEFC conciliation petition.
                      </p>
                      <p className="text-xs md:text-sm text-slate-700">
                        <strong>Day 31 onwards (Judicial Action):</strong> Summary summons served upon the debtor. In summary proceedings, debtor must deposit security or demonstrate a genuine dispute before being allowed to defend the action.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 9 - FAQs (Accordion) */}
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
                          className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm transition-all duration-200 hover:border-slate-300"
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

                {/* Clickable Statutory References */}
                <div className="pt-8 border-t border-slate-100">
                  <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">Statutory &amp; Regulatory Authorities:</h3>
                  <div className="text-xs text-slate-500 space-y-1.5 leading-relaxed">
                    <p>
                      [1] <a href="https://www.indiacode.nic.in/handle/1684/1429" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline font-semibold">The Code of Civil Procedure, 1908 (Order V Rule 9 &amp; Order 37) - India Code</a>
                    </p>
                    <p>
                      [2] <a href="https://msme.gov.in/sites/default/files/MSMED_Act_2006.pdf" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline font-semibold">The Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15-18) - Ministry of MSME</a>
                    </p>
                    <p>
                      [3] <a href="https://www.indiacode.nic.in/handle/1684/1881" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline font-semibold">The Negotiable Instruments Act, 1881 (Section 138 &amp; Section 141) - India Code</a>
                    </p>
                    <p>
                      [4] <a href="https://ibbi.gov.in/legal-framework/act" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline font-semibold">Insolvency and Bankruptcy Code, 2016 (Sections 8 &amp; 9) - IBBI</a>
                    </p>
                    <p>
                      [5] <a href="https://www.indiacode.nic.in/handle/1684/1672" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline font-semibold">The Limitation Act, 1963 (Articles 14, 15, and Section 18) - India Code</a>
                    </p>
                    <p>
                      [6] <a href="https://main.sci.gov.in/supremecourt/2020/10901/10901_2020_31_1_22914_Order_10-Jul-2020.pdf" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline font-semibold">Supreme Court of India: In Re: Cognizance for Extension of Limitation (Service through WhatsApp &amp; Email)</a>
                    </p>
                    <p>
                      [7] <a href="https://www.egazette.gov.in/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline font-semibold">The Bharatiya Sakshya Adhiniyam, 2023 (Section 63 Digital Evidence) - Gazette of India</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column Sticky Sidebar */}
            <div className="space-y-8 sticky top-24">
              {/* CTA Box */}
              <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
                <span className="text-[10px] font-black uppercase tracking-widest text-[#DC2626] mb-2 block">Enterprise Solution</span>
                <h3 className="text-base font-black mb-3">Send Bulk Recovery Notice</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Fast-track business dues recovery. Upload delinquent invoices, get advocate-vetted drafting, and dispatch simultaneous notices via Email, WhatsApp, and India Post Speed Post.
                </p>
                <button
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="block w-full bg-[#DC2626] text-white text-center py-3.5 rounded-xl text-xs font-extrabold hover:bg-[#B91C1C] transition-colors mb-3 cursor-pointer shadow-lg shadow-red-950/20"
                >
                  Start Notice Intake
                </button>
                <p className="text-[10px] text-gray-500 text-center">Fast turnaround • High Court panel advocates</p>
              </div>

              {/* Client Reviews UI Block (Exact 100% match with Schema JSON-LD) */}
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
                    <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">VS</div>
                    <span className="text-xs font-bold text-slate-800">Vikram Singhania</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    &quot;We deployed Legal Recovery&apos;s bulk notice solution across 38 defaulting B2B vendors via WhatsApp, Email, and Speed Post. Within 18 days, over 70% of our unpaid commercial dues were settled without filing court cases.&quot;
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Topical Authority (Internal Interlinking) */}
          <div className="mt-16 mb-8 max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center md:text-left">More Consumer Protection Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/bulk-recovery-cases-all-in-one-affordable-solutions" className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">Bulk Recovery Cases: Affordable Solutions</h3>
                <p className="text-xs text-slate-500 line-clamp-2">Complete legal handbook on handling multi-debtor defaults, MSME Samadhaan conciliation, and enterprise debt settlements.</p>
              </Link>
              <Link href="/recovery-of-unpaid-dues-for-my-business" className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">Business Unpaid Dues Recovery</h3>
                <p className="text-xs text-slate-500 line-clamp-2">Understand the commercial rights and legal remedies for recovering pending B2B invoices and commercial defaults.</p>
              </Link>
              <Link href="/send-a-legal-notice" className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">All Legal Notice Solutions</h3>
                <p className="text-xs text-slate-500 line-clamp-2">Explore our full suite of advocate-drafted statutory notices for recovery, employment, cheque bounce, and contract disputes.</p>
              </Link>
              <Link href="/how-to-file-consumer-complaint-india" className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">Consumer Forum Complaint Filing</h3>
                <p className="text-xs text-slate-500 line-clamp-2">Step-by-step procedural manual for filing and fighting complaints before District and State Consumer Commissions.</p>
              </Link>
              <Link href="/legal-notice-to-retailer-wrong-damaged-product-delivery" className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">Defective Product Delivery Notice</h3>
                <p className="text-xs text-slate-500 line-clamp-2">Enforce consumer rights and demand full refunds when e-commerce sellers deliver incorrect or defective merchandise.</p>
              </Link>
              <Link href="/flipkart-return-refund-complaint" className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">E-Commerce Marketplace Disputes</h3>
                <p className="text-xs text-slate-500 line-clamp-2">How to hold online platforms accountable for rejected returns, fraudulent orders, and seller non-responsiveness.</p>
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
                Legal Recovery is India&apos;s trusted legal-tech platform for commercial debt recovery, consumer dispute resolution, and statutory legal notices. Founded in 2022 and headquartered in New Delhi, Legal Recovery has counselled over 15,000+ businesses and individuals, recovering more than ₹100 Crores in delinquent dues. We combine automated legal workflows with vetted high-court panel advocates to resolve commercial disputes swiftly without expensive, drawn-out litigation.
              </p>

              <div className="border-t border-slate-100 pt-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Solutions:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link href="/send-a-legal-notice" className="py-4 px-4 rounded-xl border-2 border-[#DC2626] text-[#DC2626] font-bold text-sm hover:bg-[#DC2626] hover:text-white transition-colors cursor-pointer bg-white text-center flex items-center justify-center">
                    Send Legal Notice
                  </Link>
                  <Link href="/bulk-recovery-cases-all-in-one-affordable-solutions" className="py-4 px-4 rounded-xl border-2 border-[#DC2626] text-[#DC2626] font-bold text-sm hover:bg-[#DC2626] hover:text-white transition-colors cursor-pointer bg-white text-center flex items-center justify-center">
                    Bulk Debt Recovery
                  </Link>
                  <Link href="/how-to-file-consumer-complaint-india" className="py-4 px-4 rounded-xl border-2 border-[#DC2626] text-[#DC2626] font-bold text-sm hover:bg-[#DC2626] hover:text-white transition-colors cursor-pointer bg-white text-center flex items-center justify-center">
                    Consumer Complaints
                  </Link>
                  <Link href="/services" className="py-4 px-4 rounded-xl border-2 border-[#DC2626] text-[#DC2626] font-bold text-sm hover:bg-[#DC2626] hover:text-white transition-colors cursor-pointer bg-white text-center flex items-center justify-center md:col-span-1">
                    Corporate Recovery Support
                  </Link>
                  <Link href="/recovery-of-unpaid-dues-for-my-business" className="py-4 px-4 rounded-xl border-2 border-[#DC2626] text-[#DC2626] font-bold text-sm hover:bg-[#DC2626] hover:text-white transition-colors cursor-pointer bg-white text-center flex items-center justify-center md:col-span-2">
                    Commercial Invoice Recovery
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
