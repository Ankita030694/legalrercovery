'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "Can a business send a legal notice to recover unpaid B2B invoices and overdue client dues in India?",
    answer: "Yes, businesses operating as private limited companies, LLPs, partnership firms, or sole proprietorships in India can issue an advocate-drafted statutory legal notice to recover outstanding commercial invoices, delayed client retainers, and unpaid contractor dues under the Indian Contract Act, 1872, the MSMED Act, 2006, and Order XXXVII of the Code of Civil Procedure, 1908. The formal legal demand notice gives defaulting commercial buyers, corporate clients, or distributors a mandatory 15-day statutory cure window to settle the outstanding principal alongside contractual or statutory interest. If the debtor fails to discharge the liability within the stipulated timeframe, the business is legally entitled to file a summary recovery suit, initiate fast-track arbitration, lodge a complaint before the MSME Facilitation Council, or file an insolvency petition before the NCLT."
  },
  {
    question: "What is the statutory payment timeline and compound interest rate for registered MSME businesses under the MSMED Act?",
    answer: "Under Section 15 of the Micro, Small and Medium Enterprises Development (MSMED) Act, 2006, buyers must make payment for supplied goods or rendered services within the agreed credit period, which cannot exceed a statutory maximum of 45 days from the date of delivery or acceptance. If a buyer fails to pay within this mandatory window, Section 16 of the MSMED Act mandates that the buyer is liable to pay compound interest with monthly rests at three times the Reserve Bank of India (RBI) Bank Rate from the appointed due date. An advocate demand notice citing MSMED Act provisions serves as an essential pre-litigation step before filing a recovery claim on the MSME Samadhaan portal."
  },
  {
    question: "What legal actions can a business take if a client's payment cheque bounces or electronic NACH debit fails?",
    answer: "When a commercial client's repayment cheque is dishonored due to insufficient funds or stopped payment instructions, the creditor business can issue a statutory demand notice within 30 days of receiving the cheque return memo and subsequently file a criminal complaint under Section 138 of the Negotiable Instruments Act, 1881. For failed electronic National Automated Clearing House (NACH) mandates or recurring e-mandates, identical criminal prosecution can be initiated under Section 25 of the Payment and Settlement Systems Act, 2007. Conviction under these financial penal statutes carries imprisonment for up to two years, monetary penalties up to twice the dishonored instrument amount, or both."
  },
  {
    question: "How can a business recover unpaid dues if there is no formal written agreement with the buyer?",
    answer: "Even in the absence of a comprehensive master service contract, a business can establish an enforceable commercial liability through purchase orders, GST tax invoices, delivery challans, transport bilty receipts, and written email or WhatsApp acknowledgments under the Indian Contract Act, 1872 and the Commercial Courts Act, 2015. Certified bank statements reflecting prior partial payments and ledger statements audited under the Bankers' Books Evidence Act serve as admissible secondary proof of debt. An advocate-drafted legal notice consolidates these contemporaneous business records to demand immediate payment and crystallize the cause of action before initiating a Commercial Summary Suit."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://legalrecovery.in/send-a-legal-notice/for-business-to-recover-their-unpaid-dues"
      },
      "headline": "Legal Notice for Business to Recover Their Unpaid Dues",
      "image": [
        "https://legalrecovery.in/images/og/for-business-to-recover-their-unpaid-dues.jpg"
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
      "datePublished": "2024-06-15T08:00:00+05:30",
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
      "@id": "https://legalrecovery.in/send-a-legal-notice/for-business-to-recover-their-unpaid-dues",
      "name": "Legal Notice for Business to Recover Their Unpaid Dues",
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
          "name": "Legal Notice for Business Unpaid Dues",
          "item": "https://legalrecovery.in/send-a-legal-notice/for-business-to-recover-their-unpaid-dues"
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
      "name": "Step-by-Step Process for Businesses to Send a Legal Notice for Unpaid Dues",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Audit invoice ledgers, purchase orders, and calculate statutory 3x compound interest"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Collate proof of delivery, e-way bills, e-invoices, and debtor communication logs"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Draft an advocate-vetted statutory demand notice under MSMED Act, Order 37 CPC, or NI Act"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Serve the formal demand notice via Speed Post AD, Registered Post, and certified email"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Initiate MSEFC Samadhaan conciliation, Commercial Summary Suit, or Section 138 criminal complaint"
        }
      ]
    },
    {
      "@type": "Product",
      "name": "Legal Notice for Business Debt Recovery",
      "description": "Specialized advocate-drafted statutory legal notice service for businesses, enterprises, MSMEs, and vendors to recover unpaid commercial invoices, client retainers, and overdue contract dues.",
      "brand": {
        "@type": "Organization",
        "name": "Legal Recovery"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "245"
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
          "reviewBody": "As an engineering equipment manufacturer, we had over ₹48 Lakhs locked in overdue commercial invoices across two corporate clients who stopped responding to follow-ups. Legal Recovery drafted and served rigorous statutory demand notices citing the MSMED Act Section 16 interest clauses and Order 37 CPC. Both corporate debtors cleared 100% of the principal alongside negotiated delayed interest within 18 days of receiving the Speed Post notice. The speed, legal precision, and professional service exceeded our expectations."
        }
      ]
    }
  ]
};

export default function ForBusinessToRecoverTheirUnpaidDuesClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "statutory-framework", title: "1. Statutory & Legal Architecture for Business Debt Recovery" },
    { id: "credit-portfolios", title: "2. Commercial Credit Categories & Default Scenarios" },
    { id: "evidence-checklist", title: "3. Pre-Notice Evidentiary Dossier & Document Audit" },
    { id: "forum-comparison", title: "4. Strategic Commercial Recovery Forum Comparison Matrix" },
    { id: "step-by-step", title: "5. Step-by-Step Notice Drafting & Service Protocol" },
    { id: "essential-elements", title: "6. Anatomy of an Enforceable Business Demand Notice" },
    { id: "post-notice-escalation", title: "7. Debtor Response Windows & Post-Notice Judicial Action" },
    { id: "faqs", title: "8. Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Send a Legal Notice", href: "/send-a-legal-notice" },
    { label: "Business Unpaid Dues Notice", href: "/send-a-legal-notice/for-business-to-recover-their-unpaid-dues" },
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
              COMMERCIAL DEBT &amp; B2B INVOICE RECOVERY
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Legal Notice for Business to <span className="text-[#DC2626]">Recover Their Unpaid Dues</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Recover overdue B2B invoices, delayed client retainers, contractor balances, and supply chain dues with an advocate-drafted statutory legal notice backed by MSMED Act, Order 37 CPC, and Section 138 NI Act.
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
                    <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Flegalrecovery.in%2Fsend-a-legal-notice%2Ffor-business-to-recover-their-unpaid-dues&text=Recover%20unpaid%20business%20dues%20and%20overdue%20B2B%20invoices%20with%20a%20statutory%20legal%20notice!%20%23BusinessRecovery%20%23DebtRecovery" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-black text-white hover:opacity-80 flex items-center justify-center transition-opacity" aria-label="Share on X (Twitter)">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                    <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flegalrecovery.in%2Fsend-a-legal-notice%2Ffor-business-to-recover-their-unpaid-dues" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#1877F2] text-white hover:opacity-80 flex items-center justify-center transition-opacity" aria-label="Share on Facebook">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01z"/></svg>
                    </a>
                    <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Flegalrecovery.in%2Fsend-a-legal-notice%2Ffor-business-to-recover-their-unpaid-dues&title=Legal%20Notice%20for%20Business%20to%20Recover%20Their%20Unpaid%20Dues" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#0A66C2] text-white hover:opacity-80 flex items-center justify-center transition-opacity" aria-label="Share on LinkedIn">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                    </a>
                  </div>
                </div>

                {/* Quick Answer */}
                <div id="quick-answer" className="bg-slate-50 border-l-4 border-[#DC2626] p-6 rounded-r-2xl">
                  <h2 className="text-sm font-extrabold text-slate-900 mb-2 uppercase tracking-wide">Quick Answer</h2>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                    A legal notice for a business to recover unpaid dues is an advocate-drafted statutory demand letter served on defaulting buyers, corporate clients, or commercial debtors who fail to pay for supplied goods or rendered services. The legal notice formally sets out the contractual transaction history, itemizes overdue GST invoices and statutory compound interest, and grants the debtor a mandatory 15-day cure window to discharge the outstanding liability in full. Failure to settle the dues within the notice period enables the creditor business to initiate an expedited Commercial Summary Suit under Order XXXVII of the Code of Civil Procedure, file for statutory recovery under Section 18 of the MSMED Act, 2006, prosecute dishonored cheques under Section 138 of the Negotiable Instruments Act, or trigger Corporate Insolvency Resolution under the Insolvency and Bankruptcy Code.
                  </p>
                </div>

                <section id="statutory-framework" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. Statutory &amp; Legal Architecture for Business Debt Recovery
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Commercial cash flows represent the lifeblood of Indian enterprises, manufacturing firms, MSMEs, IT agencies, and professional service providers. When corporate buyers or commercial clients default on invoiced credit terms, Indian statutory law provides robust pre-litigation and judicial remedies to enforce prompt payment and deter bad-faith withholding of operational funds.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For registered micro, small, and medium enterprises holding a valid Udyam Registration, the primary statutory shield is the <a href="https://msme.gov.in/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Micro, Small and Medium Enterprises Development (MSMED) Act, 2006</a>. Under Section 15 of the MSMED Act, buyers are bound by a statutory mandate to clear payments within the agreed credit window, which cannot exceed 45 days under any circumstances. In the event of default, Section 16 imposes a mandatory penal interest rate calculated as compound interest with monthly rests at three times the <a href="https://www.rbi.org.in/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Reserve Bank of India (RBI)</a> Bank Rate. Creditors can file statutory recovery references before the Micro and Small Enterprise Facilitation Council (MSEFC) through the <a href="https://samadhaan.msme.gov.in/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">MSME Samadhaan Portal</a>, where council arbitral awards hold the executable force of a civil court decree.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For corporate and general commercial debts, creditors utilize the fast-track mechanism of a Commercial Summary Suit under Order XXXVII of the <a href="https://www.indiacode.nic.in/handle/123456789/2191" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Code of Civil Procedure, 1908 (CPC)</a>. Governed by the <a href="https://www.indiacode.nic.in/handle/123456789/2156" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Commercial Courts Act, 2015</a>, summary suits apply to liquidated debts arising from written contracts, purchase orders, bills of exchange, or unpaid invoices. Under Order XXXVII, the defendant debtor does not possess an automatic right to defend the suit; they must obtain leave to defend from the court by demonstrating a bona fide, non-frivolous triable defense. If the court denies leave or the debtor defaults, the court enters an immediate money decree in favor of the creditor business.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Where defaulting buyers attempt to discharge commercial debts through negotiable instruments that subsequent bounce, Section 138 of the <a href="https://www.indiacode.nic.in/handle/123456789/2189" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Negotiable Instruments Act, 1881</a> and Section 25 of the <a href="https://www.indiacode.nic.in/handle/123456789/2070" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Payment and Settlement Systems Act, 2007</a> establish strict criminal liability. In cases of corporate debtor default exceeding ₹1 Crore, operational creditors can serve a mandatory Form 3 or Form 4 demand notice under Section 8 of the <a href="https://ibbi.gov.in/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Insolvency and Bankruptcy Code, 2016 (IBC)</a> and initiate Corporate Insolvency Resolution Processes (CIRP) under Section 9 before the National Company Law Tribunal (NCLT). Serving a formal advocate legal demand notice is the mandatory pre-condition that establishes the uncontroverted record of commercial default across all these forums.
                    </p>
                  </div>
                </section>

                <section id="credit-portfolios" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. Commercial Credit Categories &amp; Default Scenarios
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Commercial transactions encompass diverse business models, contractual milestones, and supply chain arrangements. An enforceable legal notice for business debt recovery must be tailored to the specific credit architecture and documentary evidence underpinning the transaction.
                    </p>
                    
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#DC2626] mt-2 shrink-0"></div>
                        <div>
                          <h4 className="font-extrabold text-slate-900 text-sm">Unpaid B2B Supply of Goods &amp; Raw Material Invoices</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mt-1">
                            Manufacturers, raw material suppliers, distributors, and wholesalers supplying goods on agreed 15, 30, or 45-day credit terms. Defaults occur when buyers accept delivery without raising quality objections within the inspection window but subsequently withhold invoice payments. Notices enforce the unpaid seller&apos;s rights under the <a href="https://www.indiacode.nic.in/handle/123456789/2390" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Sale of Goods Act, 1930</a> alongside GST e-invoice and e-way bill records.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#DC2626] mt-2 shrink-0"></div>
                        <div>
                          <h4 className="font-extrabold text-slate-900 text-sm">Service Retainers, IT Development &amp; Consulting Milestone Defaults</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mt-1">
                            Software development agencies, marketing firms, management consultants, and professional service providers executing deliverables under Master Service Agreements (MSAs) or Statements of Work (SOWs). Defaults occur when clients deploy software code or approved deliverables but refuse to release sign-off milestone retainers. Notices demand immediate release of dues under Section 70 of the <a href="https://www.indiacode.nic.in/handle/123456789/2187" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Indian Contract Act, 1872</a>.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#DC2626] mt-2 shrink-0"></div>
                        <div>
                          <h4 className="font-extrabold text-slate-900 text-sm">Construction Subcontractor, EPC &amp; Vendor Contractual Balances</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mt-1">
                            Engineering, procurement, and construction (EPC) contractors and specialized trade subcontractors facing withheld running account (RA) bills, unreleased retention money, or unpaid variation orders. Notices invoke contractual payment certificates, site measurement sheets, and statutory interest for unjustified cash retention.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#DC2626] mt-2 shrink-0"></div>
                        <div>
                          <h4 className="font-extrabold text-slate-900 text-sm">Distributor, Super-Stockist &amp; Franchise Debit Balances</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mt-1">
                            FMCG, consumer durables, and pharmaceutical brand owners whose regional distributors, super-stockists, or franchise partners accumulate substantial ledger debit balances following product dispatch, stock reconciliation, or dealership termination. Notices demand immediate settlement of reconciled ledgers backed by security cheques.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#DC2626] mt-2 shrink-0"></div>
                        <div>
                          <h4 className="font-extrabold text-slate-900 text-sm">Commercial Advance Payment Non-Refund &amp; Breach of Procurement</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mt-1">
                            Businesses that remitted upfront advance procurement payments or supplier security deposits where the vendor failed to supply the agreed goods or render contracted services and refused to refund the advance consideration. Notices demand full refund with 18% commercial interest under Sections 73 and 74 of the Indian Contract Act.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="evidence-checklist" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Pre-Notice Evidentiary Dossier &amp; Document Audit
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To establish an unassailable legal claim and prevent debtors from manufacturing sham counterclaims or dispute defenses, businesses must compile a certified evidentiary dossier before issuing a statutory recovery notice.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h4 className="font-black text-slate-900 text-sm mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
                          Contractual &amp; Order Placement Records
                        </h4>
                        <ul className="text-xs sm:text-sm text-slate-650 space-y-2 list-disc list-inside">
                          <li>Purchase Orders (PO), Work Orders, or Signed Quotations</li>
                          <li>Master Service Agreements (MSA) and Statements of Work (SOW)</li>
                          <li>Vendor onboarding forms and agreed credit policy agreements</li>
                          <li>Email exchange confirming commercial pricing and delivery timelines</li>
                        </ul>
                      </div>

                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h4 className="font-black text-slate-900 text-sm mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
                          Statutory Tax Invoices &amp; Delivery Proofs
                        </h4>
                        <ul className="text-xs sm:text-sm text-slate-650 space-y-2 list-disc list-inside">
                          <li>GST Tax Invoices with IRN QR codes and GSTR-1 filing proof</li>
                          <li>E-Way Bills generated on the GST portal matching invoice values</li>
                          <li>Delivery Challans, Goods Receipt Notes (GRN), or Lorry Receipts (LR)</li>
                          <li>Physical receiver stamps, gate passes, or courier delivery tracking</li>
                        </ul>
                      </div>

                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h4 className="font-black text-slate-900 text-sm mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
                          Financial Ledgers &amp; Payment History
                        </h4>
                        <ul className="text-xs sm:text-sm text-slate-650 space-y-2 list-disc list-inside">
                          <li>Mutually confirmed Ledger Accounts or Balance Confirmation letters</li>
                          <li>Bank account statements showing prior partial payments / RTGS receipts</li>
                          <li>Itemized interest computation sheet (contractual or 3x RBI Bank Rate)</li>
                          <li>Certificate under Bankers&apos; Books Evidence Act and Section 65B</li>
                        </ul>
                      </div>

                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h4 className="font-black text-slate-900 text-sm mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
                          Acknowledgment of Debt &amp; Corporate Data
                        </h4>
                        <ul className="text-xs sm:text-sm text-slate-650 space-y-2 list-disc list-inside">
                          <li>Email threads and WhatsApp communications admitting liability</li>
                          <li>Dishonored cheques with Bank Return Memos (CTS return codes)</li>
                          <li>Valid Udyam Registration Certificate for MSMED Act statutory claims</li>
                          <li><a href="https://www.mca.gov.in/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">MCA Company Master Data</a>, DIN details, and registered office address</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="forum-comparison" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Strategic Commercial Recovery Forum Comparison Matrix
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Selecting the appropriate statutory enforcement channel after the legal demand notice period expires depends on the creditor&apos;s MSME registration status, debt quantum, corporate nature of the debtor, and the availability of dishonored financial instruments.
                    </p>

                    <div className="overflow-x-auto my-6">
                      <table className="w-full text-left border-collapse text-xs md:text-sm border border-slate-200">
                        <thead>
                          <tr className="bg-slate-100 text-slate-900 font-extrabold border-b border-slate-200">
                            <th className="p-3">Recovery Channel</th>
                            <th className="p-3">Governing Statute</th>
                            <th className="p-3">Threshold / Applicability</th>
                            <th className="p-3">Average Timeline</th>
                            <th className="p-3">Key Strategic Advantage</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-650">
                          <tr>
                            <td className="p-3 font-bold text-slate-900">MSME Samadhaan (MSEFC)</td>
                            <td className="p-3">MSMED Act, 2006 (Sec 18)</td>
                            <td className="p-3">Registered Micro/Small enterprises; Any overdue amount</td>
                            <td className="p-3">3 to 6 Months</td>
                            <td className="p-3">Mandatory 3x compound interest; Buyer must deposit 75% award amount to appeal in court.</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="p-3 font-bold text-slate-900">Commercial Summary Suit</td>
                            <td className="p-3">Order 37 CPC / Commercial Courts Act</td>
                            <td className="p-3">Liquidated commercial claims &ge; ₹3 Lakhs</td>
                            <td className="p-3">6 to 12 Months</td>
                            <td className="p-3">Debtor must demonstrate substantial defense to obtain leave; rapid decree without full trial delays.</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">Section 138 Cheque Dishonor</td>
                            <td className="p-3">Negotiable Instruments Act, 1881</td>
                            <td className="p-3">Any dishonored commercial payment cheque</td>
                            <td className="p-3">6 to 18 Months</td>
                            <td className="p-3">Criminal prosecution with imprisonment up to 2 years, interim compensation up to 20%, and 2x fines.</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="p-3 font-bold text-slate-900">Commercial Arbitration</td>
                            <td className="p-3">Arbitration &amp; Conciliation Act, 1996</td>
                            <td className="p-3">Disputes with explicit arbitration clause in agreement</td>
                            <td className="p-3">6 to 12 Months</td>
                            <td className="p-3">Private, fast-track arbitral award enforceable as a direct decree of the civil court under Section 36.</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">Insolvency Petition (IBC Sec 9)</td>
                            <td className="p-3">Insolvency &amp; Bankruptcy Code, 2016</td>
                            <td className="p-3">Corporate debtor operational default &ge; ₹1 Crore</td>
                            <td className="p-3">6 to 14 Months</td>
                            <td className="p-3">High-pressure remedy; risks replacing debtor&apos;s board of directors with an Interim Resolution Professional.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                <section id="step-by-step" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Step-by-Step Notice Drafting &amp; Service Protocol
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Issuing a commercial recovery notice requires precision to avoid procedural defects that could weaken subsequent court proceedings. Following this standardized 5-stage protocol ensures airtight legal admissibility.
                    </p>

                    <div className="space-y-6 my-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">1</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Ledger Audit &amp; Statutory Interest Calculation</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Audit outstanding invoice ledgers to isolate principal dues, adjust credit notes or partial receipts, and compute contractual or MSME statutory compound interest up to the exact date of notice dispatch.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">2</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Entity Verification &amp; Address Confirmation</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Verify the defaulting entity&apos;s legal status via MCA Company Master Data, GST portal filings, and MSME Udyam database. Identify all managing directors, designated partners, or proprietors along with registered office and factory addresses.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">3</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Advocate Drafting on Formal Legal Letterhead</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Engage a commercial recovery advocate to draft the statutory notice on official letterhead, reciting the transaction timeline, delivery acknowledgments, explicit invoice terms, default details, and statutory legal consequences.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">4</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Stipulation of 15-Day Mandatory Cure Period</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Grant the debtor exactly 15 days from the date of notice receipt to remit the full outstanding amount alongside advocate drafting charges into the designated corporate bank account.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">5</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Verifiable Multi-Channel Dispatch &amp; Tracking</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Dispatch signed physical copies via India Post Speed Post with Acknowledgment Due (RPAD) to the registered office and operating branches. Concurrently transmit digitally signed PDF notices via registered corporate email and WhatsApp with delivery confirmation certificates.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="essential-elements" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Anatomy of an Enforceable Business Demand Notice
                  </h2>
                  
                  {/* Infographic Image */}
                  <div className="my-8 rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                    <img src="/images/og/for-business-to-recover-their-unpaid-dues.jpg" alt="Legal Notice for Business to Recover Unpaid Dues Infographic" className="w-full h-auto object-cover" />
                  </div>

                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A poorly constructed demand notice can provide the defaulting buyer an opportunity to construct frivolous defenses or allege pre-existing disputes in subsequent judicial proceedings. An enforceable business recovery notice must incorporate the following foundational components:
                    </p>
                    <ul className="list-disc list-inside text-sm md:text-base text-slate-650 space-y-3">
                      <li><strong>Counsel Authorization &amp; Client Particulars:</strong> Clear statement declaring that the advocate is instructed and authorized by the creditor entity (Private Limited Company, LLP, MSME, or Sole Proprietor) to issue the statutory demand.</li>
                      <li><strong>Commercial Transaction Recital:</strong> Chronological overview of purchase orders, contracts, quotations, supply dates, delivery challan numbers, and transport records proving flawless execution of obligations.</li>
                      <li><strong>Tabular Invoice &amp; Default Breakdown:</strong> Itemized schedule specifying invoice numbers, invoice dates, total billed values, partial payments credited, overdue balance amounts, and statutory interest calculated up to the notice date.</li>
                      <li><strong>Absence of Dispute or Quality Rejection:</strong> Explicit recitation that the debtor accepted goods or services without raising any written dispute or rejection notice within the contractual inspection period.</li>
                      <li><strong>Strict 15-Day Demand Window &amp; Payment Details:</strong> Demand requiring the debtor to deposit full principal and interest into the creditor&apos;s designated corporate bank account within 15 days of notice receipt.</li>
                      <li><strong>Judicial Escalation &amp; Cost Warning:</strong> Formal warning that failure to pay will trigger immediate legal proceedings under Order 37 CPC, Section 18 MSMED Act, Section 138 NI Act, or Section 9 IBC, holding the debtor liable for all legal costs, damages, and litigation expenses.</li>
                    </ul>
                  </div>
                </section>

                <section id="post-notice-escalation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    7. Debtor Response Windows &amp; Post-Notice Judicial Action
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In commercial debt recovery, serving a formal advocate demand notice shifts the psychological dynamic. Over 70% of defaulting commercial debtors initiate settlement discussions within 7 to 10 days of notice service to avoid reputational damage, vendor credit blacklisting, or commercial court injunctions.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the debtor fails to discharge the liability or attempts to deflect payment with baseless excuses, the creditor business possesses unassailable evidentiary proof of pre-litigation notice and can execute the following multi-tiered legal actions:
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        <strong>1. MSME Samadhaan Reference (MSEFC Conciliation &amp; Arbitration):</strong> Registered MSMEs file an online reference under Section 18 of the MSMED Act. The council conducts conciliation, and if unresolved, initiates arbitration yielding an executable arbitral award for 100% principal plus 3x compound interest.
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        <strong>2. Commercial Summary Suit (Order XXXVII CPC):</strong> File a summary money suit in the competent Commercial Court via the <a href="https://ecourts.gov.in/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">e-Courts Commercial Portal</a>. The debtor must demonstrate a genuine defense to defend the suit, enabling creditors to obtain swift money decrees without protracted multi-year trials.
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        <strong>3. Section 138 NI Act Criminal Prosecution:</strong> If payment cheques bounce, file a criminal complaint before the Judicial Magistrate within 30 days of notice expiry, seeking 20% interim compensation under Section 143A and imprisonment of signatory directors.
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        <strong>4. Section 9 IBC Corporate Insolvency Petition:</strong> For corporate defaults exceeding ₹1 Crore, file an operational debt insolvency petition before the NCLT following Section 8 notice service, compelling corporate debtors to settle immediately to prevent insolvency liquidation.
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
                    References: [1] <a href="https://msme.gov.in/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15-18)</a>. [2] <a href="https://www.indiacode.nic.in/handle/123456789/2191" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Code of Civil Procedure, 1908 (Order XXXVII Commercial Summary Suits)</a>. [3] <a href="https://www.indiacode.nic.in/handle/123456789/2156" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Commercial Courts Act, 2015 (Pre-Institution Mediation and Commercial Jurisdiction)</a>. [4] <a href="https://www.indiacode.nic.in/handle/123456789/2189" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Negotiable Instruments Act, 1881 (Section 138 Cheque Dishonor)</a>. [5] <a href="https://ibbi.gov.in/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Insolvency and Bankruptcy Code, 2016 (Sections 8 &amp; 9 Operational Creditor Demands)</a>. [6] <a href="https://www.indiacode.nic.in/handle/123456789/2187" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Indian Contract Act, 1872 (Breach of Contract &amp; Quantum Meruit)</a>. [7] <a href="https://samadhaan.msme.gov.in/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">MSME Samadhaan Portal for Delayed Payment Recovery</a>.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column Sidebar */}
            <div className="space-y-8 sticky top-28">
              <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-sm font-black mb-3">Recover Business &amp; B2B Dues</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Partner with senior commercial recovery advocates. We draft institutional demand notices, calculate statutory 3x compound interest, execute verified multi-channel dispatch, and handle MSEFC/Court filings.
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
                  <span className="text-xs text-slate-500">(245 reviews)</span>
                </div>
                <div className="border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">VS</div>
                    <span className="text-xs font-bold text-slate-800">Vikramaditya Singhania</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    &quot;As an engineering equipment manufacturer, we had over ₹48 Lakhs locked in overdue commercial invoices across two corporate clients who stopped responding to follow-ups. Legal Recovery drafted and served rigorous statutory demand notices citing the MSMED Act Section 16 interest clauses and Order 37 CPC. Both corporate debtors cleared 100% of the principal alongside negotiated delayed interest within 18 days of receiving the Speed Post notice. The speed, legal precision, and professional service exceeded our expectations.&quot;
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Related Services / Interlinking (Topical Authority) */}
          <div className="mt-16 mb-8 max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center md:text-left">More Commercial &amp; Debt Recovery Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/send-a-legal-notice/b2b-invoice-not-recieved" className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">B2B Invoice Legal Notice</h3>
                <p className="text-xs text-slate-500 line-clamp-2">Complete legal roadmap to draft and send notice for unpaid commercial and trade invoices in India.</p>
              </Link>
              <Link href="/services/vendor-and-invoice-recoveries" className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">Vendor &amp; Invoice Recoveries</h3>
                <p className="text-xs text-slate-500 line-clamp-2">Learn statutory procedures to recover delayed commercial invoices and unpaid supplier dues.</p>
              </Link>
              <Link href="/recovery/msme-samadhan" className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">MSME Samadhaan Recovery</h3>
                <p className="text-xs text-slate-500 line-clamp-2">Claim 3x compound interest on delayed payments for registered MSME suppliers and enterprises.</p>
              </Link>
            </div>
          </div>

          {/* Legal Recovery Company Section */}
          <div className="mt-16 max-w-5xl mx-auto mb-10">
            <div className="bg-white border-2 border-slate-100 rounded-[2rem] p-8 md:p-12 shadow-sm border-[#DC2626]">
              <div className="mb-8">
                <img src="/lrlogo.svg" alt="LegalRecovery" className="h-8 sm:h-10 w-auto object-contain" />
              </div>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-10 max-w-3xl font-medium">
                Legal Recovery is India&apos;s trusted consumer protection and commercial debt resolution platform. Founded in 2022 and headquartered in New Delhi, Legal Recovery has counselled 15,000+ businesses, financial institutions, and consumers on debt recovery, commercial contract breaches, and loan defaults. Legal Recovery accelerates out-of-court settlements and connects you with top verified panel advocates.
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
