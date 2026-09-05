'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "Can an NBFC send a legal notice to recover unpaid loan dues and bounced EMIs?",
    answer: "Yes, Non-Banking Financial Companies (NBFCs) and digital lending institutions can issue an advocate-vetted statutory legal notice to recover overdue loans, unpaid EMIs, and defaulted credit facilities under the Indian Contract Act, 1872 and the Negotiable Instruments Act, 1881. The formal legal demand notice gives the defaulting borrower and co-guarantor a strict 15-day pre-litigation deadline to clear the outstanding principal, penal interest, and incidental recovery charges. If the borrower fails to comply within the stipulated notice period, the NBFC can proceed with asset attachment under the SARFAESI Act, 2002, file an Original Application before the Debt Recovery Tribunal (DRT), or initiate criminal prosecution for cheque and NACH mandate dishonor."
  },
  {
    question: "What is the mandatory notice period under Section 13(2) of the SARFAESI Act for NBFC loan recovery?",
    answer: "Under Section 13(2) of the SARFAESI Act, 2002, qualifying NBFCs notified by the Ministry of Finance must serve a mandatory 60-day statutory demand notice to borrowers once a secured loan account is classified as a Non-Performing Asset (NPA). The notice requires the borrower and personal guarantors to discharge their full liabilities within 60 days from the date of notice receipt. If the borrower fails to satisfy the demand or raise valid objections under Section 13(3A), the NBFC is legally empowered under Section 13(4) to take physical possession of the mortgaged property, assume management of the secured assets, or appoint an asset receiver without civil court intervention."
  },
  {
    question: "Can an NBFC file criminal cases for bounced NACH mandates or dishonored cheques?",
    answer: "When a borrower's electronic National Automated Clearing House (NACH) mandate fails due to insufficient funds, the lending NBFC can initiate criminal prosecution under Section 25 of the Payment and Settlement Systems Act, 2007, which carries penal provisions identical to cheque bounce offenses. Similarly, if physical repayment cheques or post-dated security cheques are dishonored, the NBFC can serve a statutory demand notice within 30 days of receiving the bank memo and subsequently file a criminal complaint under Section 138 of the Negotiable Instruments Act, 1881. Conviction under these financial criminal statutes entails imprisonment up to two years, a monetary fine up to twice the dishonored instrument amount, or both."
  },
  {
    question: "What legal actions can an NBFC take if an unsecured business loan or personal loan is defaulted?",
    answer: "For unsecured loans where physical collateral is not mortgaged, the NBFC can issue an advocate-drafted demand notice and initiate fast-track arbitration under the Arbitration and Conciliation Act, 1996 if the loan agreement contains an arbitration clause. The NBFC can concurrently institute a Summary Suit under Order XXXVII of the Code of Civil Procedure, 1908 in the competent Commercial Court to obtain an expedited decree without protracted trial delays. For corporate borrowers with defaulted credit facilities exceeding one crore rupees, the NBFC can also file an insolvency application under Section 7 of the Insolvency and Bankruptcy Code, 2016 before the National Company Law Tribunal (NCLT)."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://legalrecovery.in/send-a-legal-notice/for-nbfc-to-recover-their-unpaid-dues"
      },
      "headline": "Legal Notice for NBFC to Recover Their Unpaid Dues",
      "image": [
        "https://legalrecovery.in/images/og/for-nbfc-to-recover-their-unpaid-dues.jpg"
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
      "datePublished": "2024-06-12T08:00:00+05:30",
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
      "@id": "https://legalrecovery.in/send-a-legal-notice/for-nbfc-to-recover-their-unpaid-dues",
      "name": "Legal Notice for NBFC to Recover Their Unpaid Dues",
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
          "name": "NBFC Recovery Notice",
          "item": "https://legalrecovery.in/send-a-legal-notice/for-nbfc-to-recover-their-unpaid-dues"
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
      "name": "Step-by-Step Process for NBFC to Send Legal Notice for Debt Recovery",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Conduct loan ledger audit, NPA classification, and calculate penal interest"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Collate dishonored NACH mandates, bounced cheque memos, and sanction agreements"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Draft an advocate-vetted statutory legal notice under SARFAESI, NI Act, or RDB Act"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Serve the legal demand notice via Registered Post AD, Speed Post, and certified email"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Escalate to DRT Original Application, Section 138 filing, or SARFAESI Section 13(4) possession"
        }
      ]
    },
    {
      "@type": "Product",
      "name": "Legal Notice for NBFC Debt Recovery",
      "description": "Specialized legal notice drafting and statutory dispatch service for Non-Banking Financial Companies (NBFCs), fintech lenders, and microfinance institutions to recover unpaid loan dues and dishonored EMIs.",
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
            "name": "Siddharth Mathur"
          },
          "reviewBody": "As an NBFC portfolio recovery manager handling unsecured MSME business loan defaults across North India, serving legally airtight demand notices was a major operational bottleneck. Legal Recovery streamlined our pre-litigation process with advocate-signed demand notices citing Section 25 PSSA and SARFAESI provisions. Over 68% of our chronic 90+ DPD defaulting borrowers approached us for restructuring and one-time settlement within 14 days of notice delivery. Outstanding turnaround time and institutional compliance."
        }
      ]
    }
  ]
};

export default function ForNbfcToRecoverTheirUnpaidDuesClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "statutory-framework", title: "1. Statutory & Regulatory Architecture for NBFC Recovery" },
    { id: "credit-portfolios", title: "2. Types of Defaults & Credit Portfolios Handled" },
    { id: "evidence-checklist", title: "3. Pre-Notice Evidence & Account Dossier Checklist" },
    { id: "forum-comparison", title: "4. Strategic Recovery Forum Comparison Matrix" },
    { id: "step-by-step", title: "5. Step-by-Step Notice Drafting & Service Protocol" },
    { id: "essential-elements", title: "6. Anatomy of an Airtight NBFC Demand Notice" },
    { id: "post-notice-escalation", title: "7. Borrower Response Windows & Post-Notice Enforcement" },
    { id: "faqs", title: "8. Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Send a Legal Notice", href: "/send-a-legal-notice" },
    { label: "NBFC Recovery Notice", href: "/send-a-legal-notice/for-nbfc-to-recover-their-unpaid-dues" },
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
              COMMERCIAL LOAN &amp; DEBT RECOVERY
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Legal Notice for NBFC to <span className="text-[#DC2626]">Recover Unpaid Dues</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Recover defaulted commercial loans, unsecured business debt, LAP, and bounced EMIs with an advocate-drafted statutory legal notice backed by SARFAESI, DRT, and Section 138 NI Act provisions.
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
                    <button
                      type="button"
                      onClick={() => window.open('https://twitter.com/intent/tweet?url=https%3A%2F%2Flegalrecovery.in%2Fsend-a-legal-notice%2Ffor-nbfc-to-recover-their-unpaid-dues&text=Recover%20unpaid%20NBFC%20dues%20and%20defaulted%20loans%20with%20a%20statutory%20legal%20notice!%20%23DebtRecovery%20%23NBFC', '_blank', 'noopener,noreferrer')}
                      className="w-8 h-8 rounded-full bg-black text-white hover:opacity-80 flex items-center justify-center transition-opacity cursor-pointer"
                      aria-label="Share on X (Twitter)"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </button>
                    <button
                      type="button"
                      onClick={() => window.open('https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flegalrecovery.in%2Fsend-a-legal-notice%2Ffor-nbfc-to-recover-their-unpaid-dues', '_blank', 'noopener,noreferrer')}
                      className="w-8 h-8 rounded-full bg-[#1877F2] text-white hover:opacity-80 flex items-center justify-center transition-opacity cursor-pointer"
                      aria-label="Share on Facebook"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01z"/></svg>
                    </button>
                    <button
                      type="button"
                      onClick={() => window.open('https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Flegalrecovery.in%2Fsend-a-legal-notice%2Ffor-nbfc-to-recover-their-unpaid-dues&title=Legal%20Notice%20for%20NBFC%20Recovery%20of%20Unpaid%20Dues', '_blank', 'noopener,noreferrer')}
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
                    Non-Banking Financial Companies (NBFCs) and institutional lenders can issue an advocate-drafted statutory legal notice to recover defaulted loans, outstanding credit facilities, and bounced EMIs from defaulting borrowers and co-guarantors. The legal notice serves as an enforceable pre-litigation demand granting the debtor a mandatory 15-day cure window (or 60 days under SARFAESI Section 13(2)) to settle the outstanding principal, contractual interest, and penal charges. Failure to discharge the debt empowers the NBFC to initiate attachment of mortgaged assets without court intervention, lodge criminal complaints under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and Settlement Systems Act, and institute recovery proceedings before the Debt Recovery Tribunal.
                  </p>
                </div>

                <section id="statutory-framework" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. Statutory &amp; Regulatory Architecture for NBFC Recovery
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Non-Banking Financial Companies (NBFCs) and digital lending platforms form a foundational pillar of India&apos;s credit architecture, servicing retail consumers, Micro, Small, and Medium Enterprises (MSMEs), and infrastructure corporations. When borrowers default on credit facilities, loan EMIs, or trade lines, NBFCs require rigorous, multi-tiered statutory legal remedies to recover outstanding dues while adhering strictly to regulatory guidelines issued by the <span className="font-semibold text-slate-800">Reserve Bank of India (RBI)</span>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The primary statutory mechanism for secured credit recovery is the <span className="font-semibold text-slate-800">Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002</span>. Qualifying NBFCs notified by the Ministry of Finance (NBFCs having asset sizes of ₹100 Crore and above, for loan debts of ₹20 Lakhs and above) are legally empowered to enforce security interests without the intervention of a civil court. Under Section 13(2) of the SARFAESI Act, once an account is classified as a Non-Performing Asset (NPA) in accordance with RBI prudential norms, the lender must serve a 60-day statutory demand notice calling upon the borrower and guarantors to discharge their full liabilities.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      For unsecured business loans, consumer credit lines, and bounced repayment installments, NBFCs possess dual civil and criminal remedies. Under Section 138 of the <span className="font-semibold text-slate-800">Negotiable Instruments Act, 1881</span>, the dishonor of repayment cheques triggers criminal liability. Similarly, Section 25 of the <span className="font-semibold text-slate-800">Payment and Settlement Systems Act, 2007 (PSSA)</span> accords identical criminal status to dishonored electronic NACH (National Automated Clearing House) mandates and automated debit instructions.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Furthermore, where outstanding dues exceed ₹20 Lakhs, notified NBFCs can institute recovery proceedings before the <span className="font-semibold text-slate-800">Debt Recovery Tribunal (DRT)</span> under the Recovery of Debts and Bankruptcy Act, 1993 (RDB Act). For corporate debtors with default quantum exceeding ₹1 Crore, Section 7 of the <span className="font-semibold text-slate-800">Insolvency and Bankruptcy Code, 2016 (IBC)</span> permits NBFCs as financial creditors to initiate Corporate Insolvency Resolution Processes (CIRP). Serving a formal advocate-drafted demand notice is the mandatory pre-litigation cornerstone establishing an uncontroverted record of default.
                    </p>
                  </div>
                </section>

                <section id="credit-portfolios" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. Types of Defaults &amp; Credit Portfolios Handled
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      NBFC recovery strategies differ fundamentally based on asset backing, collateral nature, borrower legal constitution, and loan tenure. A tailored legal notice must target the specific credit agreement breach and trigger the corresponding statutory consequences.
                    </p>
                    
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#DC2626] mt-2 shrink-0"></div>
                        <div>
                          <h4 className="font-extrabold text-slate-900 text-sm">Loan Against Property (LAP) &amp; Mortgage Defaults</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mt-1">
                            Secured loans backed by equitable or registered mortgages over residential, commercial, or industrial real estate. Defaults beyond 90 days trigger NPA classification, enabling SARFAESI Section 13(2) 60-day demand notices followed by Section 13(4) physical possession through District Magistrate orders under Section 14.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#DC2626] mt-2 shrink-0"></div>
                        <div>
                          <h4 className="font-extrabold text-slate-900 text-sm">Unsecured MSME &amp; Business Working Capital Loans</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mt-1">
                            High-yield term loans or line-of-credit facilities extended to proprietary firms, LLPs, and private limited companies without immovable collateral. Remedies focus on NACH bounce prosecutions under Section 25 PSSA, personal guarantor liability enforcement, institutional arbitration, and Commercial Court Summary Suits under Order 37 CPC.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#DC2626] mt-2 shrink-0"></div>
                        <div>
                          <h4 className="font-extrabold text-slate-900 text-sm">Vehicle &amp; Commercial Equipment Financing</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mt-1">
                            Asset-backed financing where vehicles, construction equipment, or commercial fleets are hypothecated to the NBFC. The legal notice demands immediate regularization of arrears or surrender of the hypothecated asset, paving the way for Section 9 interim measures under the Arbitration Act for repossession and sale.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#DC2626] mt-2 shrink-0"></div>
                        <div>
                          <h4 className="font-extrabold text-slate-900 text-sm">Digital Lending &amp; Fintech Consumer Credit</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mt-1">
                            App-based short-term personal loans and Buy-Now-Pay-Later (BNPL) credit facilities. In full compliance with the <span className="font-semibold text-slate-800">RBI Digital Lending Guidelines</span>, recovery notices must be served through verified digital and postal channels without unlawful harassment, detailing exact overdue breakdowns and credit bureau reporting ramifications.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="evidence-checklist" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Pre-Notice Evidence &amp; Account Dossier Checklist
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To ensure that a recovery notice withstands judicial challenges in DRT, NCLT, or magistrate courts, NBFC credit operations must assemble an airtight documentary dossier under the <span className="font-semibold text-slate-800">Indian Contract Act, 1872</span> and Bankers&apos; Books Evidence Act principles.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h4 className="font-black text-slate-900 text-sm mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
                          Loan Sanction &amp; Contract Execution
                        </h4>
                        <ul className="text-xs sm:text-sm text-slate-650 space-y-2 list-disc list-inside">
                          <li>Sanction Letter accepted and signed by borrower</li>
                          <li>Duly executed Master Loan Agreement with schedule</li>
                          <li>Personal &amp; Corporate Guarantee Deeds</li>
                          <li>Hypothecation Deed or Title Deed Deposit Memorandum</li>
                        </ul>
                      </div>

                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h4 className="font-black text-slate-900 text-sm mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
                          Repayment Instrument Dishonor Records
                        </h4>
                        <ul className="text-xs sm:text-sm text-slate-650 space-y-2 list-disc list-inside">
                          <li>NACH e-mandate registration and authorization logs</li>
                          <li>Bank Return Memos for failed NACH / ECS transactions</li>
                          <li>Original dishonored cheques with CTS-2010 return slips</li>
                          <li>NPCI transaction failure reason codes (e.g., &quot;01 - Insufficient Funds&quot;)</li>
                        </ul>
                      </div>

                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h4 className="font-black text-slate-900 text-sm mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
                          Certified Financial Statements &amp; Ledger
                        </h4>
                        <ul className="text-xs sm:text-sm text-slate-650 space-y-2 list-disc list-inside">
                          <li>Certified statement of running loan account</li>
                          <li>Section 65B Indian Evidence Act electronic certificate</li>
                          <li>NPA classification date record in core banking system</li>
                          <li>Itemized breakup of principal, normal interest, and penal charges</li>
                        </ul>
                      </div>

                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h4 className="font-black text-slate-900 text-sm mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
                          Borrower Identification &amp; KYC
                        </h4>
                        <ul className="text-xs sm:text-sm text-slate-650 space-y-2 list-disc list-inside">
                          <li>Aadhaar, PAN, and registered office utility bills</li>
                          <li>MCA Master Data showing active DINs and directors</li>
                          <li>CIBIL/Experian credit bureau default reporting log</li>
                          <li>Digital delivery logs of previous loan recall intimation letters</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="forum-comparison" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Strategic Recovery Forum Comparison Matrix
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Selecting the optimum legal forum post-notice depends on whether the loan is secured or unsecured, the debt quantum, the borrower&apos;s corporate structure, and whether criminal offenses under the NI Act or PSSA have occurred.
                    </p>

                    <div className="overflow-x-auto my-6">
                      <table className="w-full text-left border-collapse text-xs md:text-sm border border-slate-200">
                        <thead>
                          <tr className="bg-slate-100 text-slate-900 font-extrabold border-b border-slate-200">
                            <th className="p-3">Legal Pathway</th>
                            <th className="p-3">Governing Law</th>
                            <th className="p-3">Threshold / Applicability</th>
                            <th className="p-3">Average Timeline</th>
                            <th className="p-3">Key Strategic Advantage</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-650">
                          <tr>
                            <td className="p-3 font-bold text-slate-900">SARFAESI Enforcement</td>
                            <td className="p-3">SARFAESI Act, 2002 (Sec 13)</td>
                            <td className="p-3">Secured debt &ge; ₹20 Lakhs; NBFC asset &ge; ₹100 Cr</td>
                            <td className="p-3">3 to 6 Months</td>
                            <td className="p-3">Direct possession and auction of mortgaged asset without court decree.</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="p-3 font-bold text-slate-900">DRT Original Application (OA)</td>
                            <td className="p-3">RDB Act, 1993 (Sec 19)</td>
                            <td className="p-3">Secured or unsecured debt &ge; ₹20 Lakhs</td>
                            <td className="p-3">12 to 24 Months</td>
                            <td className="p-3">Issuance of Recovery Certificate; attachment of bank accounts, salary, and personal assets.</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">Section 138 / PSSA Sec 25</td>
                            <td className="p-3">NI Act, 1881 &amp; PSSA, 2007</td>
                            <td className="p-3">Any dishonored cheque or failed NACH debit</td>
                            <td className="p-3">6 to 18 Months</td>
                            <td className="p-3">Criminal liability with imprisonment up to 2 years and fine up to 2x bounced amount.</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="p-3 font-bold text-slate-900">Commercial Summary Suit</td>
                            <td className="p-3">Order 37 CPC / Commercial Courts Act</td>
                            <td className="p-3">Liquidated loan debts &ge; ₹3 Lakhs</td>
                            <td className="p-3">6 to 12 Months</td>
                            <td className="p-3">Defendant must obtain leave to defend; instant decree if defense is frivolous.</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">Insolvency Petition (IBC Sec 7)</td>
                            <td className="p-3">Insolvency &amp; Bankruptcy Code, 2016</td>
                            <td className="p-3">Corporate default &ge; ₹1 Crore</td>
                            <td className="p-3">6 to 14 Months</td>
                            <td className="p-3">Triggers Corporate Insolvency (CIRP); replaces defaulting promoter management.</td>
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
                      Serving an NBFC debt recovery notice requires strict compliance with statutory timeframes and service protocols. Following a standardized workflow guarantees evidentiary admissibility in subsequent legal actions.
                    </p>

                    <div className="space-y-6 my-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">1</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Loan Account Audit &amp; NPA Classification</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Audit the defaulting loan account to calculate the exact overdue principal, accrued contractual interest, penal interest, and bounce charges. Confirm the exact NPA classification date according to RBI Master Directions.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">2</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Corporate &amp; Guarantor Entity Verification</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Verify borrower and guarantor corporate filings via the <span className="font-semibold text-slate-800">Ministry of Corporate Affairs (MCA)</span> portal, confirm property title search reports for secured loans, and cross-check active residential and workplace addresses.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">3</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Advocate Drafting on Formal Letterhead</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Engage an advocate to draft the statutory notice on official letterhead, reciting the credit sanction history, specific loan agreement clauses breached, NACH/cheque return particulars, and explicit statutory enforcement provisions under SARFAESI, DRT, and NI Act.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">4</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Stipulation of Statutory Cure Timelines</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Grant the borrower the mandatory statutory timeline: exactly 15 days for standard commercial loan demands and Section 138/PSSA notices, or mandatory 60 days for Section 13(2) SARFAESI notices, to remit full dues into the NBFC collection account.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">5</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Multi-Channel Verifiable Dispatch &amp; Tracking</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Dispatch signed notices via India Post Registered Post with Acknowledgment Due (RPAD) and Speed Post to all registered addresses of borrowers, co-borrowers, and guarantors. Concurrently transmit digitally signed PDF copies via registered email and WhatsApp with delivery confirmation certificates.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="essential-elements" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Anatomy of an Airtight NBFC Demand Notice
                  </h2>
                  
                  {/* Infographic Image */}
                  <div className="my-8 rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                    <img src="/images/og/for-nbfc-to-recover-their-unpaid-dues.jpg" alt="Legal Notice for NBFC Loan Recovery Process Infographic" className="w-full h-auto object-cover" />
                  </div>

                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A poorly structured demand notice creates loopholes that borrowers exploit to stall litigation or obtain stay orders. An enforceable NBFC recovery notice must include the following structural components:
                    </p>
                    <ul className="list-disc list-inside text-sm md:text-base text-slate-650 space-y-3">
                      <li><strong>Advocate Authority &amp; Power of Attorney:</strong> Clear declaration that the notice is issued under the express instructions and legal retainer of the authorized officer of the NBFC.</li>
                      <li><strong>Sanction &amp; Disbursement History:</strong> Specific recital of loan application date, sanction letter number, loan account number, sanctioned facility amount, interest rate structure, and disbursement dates.</li>
                      <li><strong>Itemized Default Matrix:</strong> Tabular breakdown specifying the number of defaulted EMIs, overdue principal, normal contractual interest, penal interest, bounce charges, and total recall amount as of the notice date.</li>
                      <li><strong>Instrument Dishonor Particulars:</strong> Explicit details of dishonored cheques or NACH mandates including mandate ID, cheque numbers, presentation dates, return dates, and bank return reason memos.</li>
                      <li><strong>Joint &amp; Several Guarantor Liability:</strong> Explicit clause invoking the co-extensive liability of personal and corporate guarantors under Section 128 of the Indian Contract Act.</li>
                      <li><strong>Statutory Escalation Warning:</strong> Unambiguous warning specifying imminent SARFAESI Section 13(4) asset attachment, DRT Original Application filing, Section 138/Section 25 criminal prosecution, and negative reporting to credit bureaus (CIBIL, Experian, CRIF High Mark).</li>
                    </ul>
                  </div>
                </section>

                <section id="post-notice-escalation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    7. Borrower Response Windows &amp; Post-Notice Enforcement
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Upon receipt of a formal advocate notice, delinquent borrowers typically enter into structured settlement negotiations within 10 to 14 days to prevent public asset auctions, criminal summons, or corporate insolvency filings. Over 65% of NBFC defaults are resolved through one-time settlements (OTS) or loan restructuring during this pre-litigation window.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      If the borrower ignores the demand notice or sends a frivolous denial upon expiry of the statutory cure period, the NBFC possesses conclusive proof of pre-litigation service and can execute the following multi-pronged judicial measures:
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        <strong>1. Section 13(4) SARFAESI Enforcement:</strong> Issue possession notices, take symbolic or physical possession of mortgaged immovable property, and file an application under Section 14 before the Chief Metropolitan Magistrate (CMM) or District Magistrate (DM) for police assistance to take physical handover.
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        <strong>2. Section 138 NI Act / Section 25 PSSA Criminal Filing:</strong> Institute criminal complaints before the designated Judicial Magistrate or Metropolitan Magistrate Court within 30 days of the notice cure window expiry, securing bailable or non-bailable warrants against defaulting signatories.
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        <strong>3. Debt Recovery Tribunal (DRT) Original Application:</strong> File an Original Application (OA) under Section 19 of the RDB Act, obtaining interim injunctions restraining the borrower from alienating personal or corporate assets pending final recovery certificate issuance.
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        <strong>4. Section 7 IBC Corporate Insolvency Application:</strong> For defaulting corporate borrowers with claims exceeding ₹1 Crore, initiate insolvency proceedings before the National Company Law Tribunal (NCLT) to dissolve the defaulting board and recover financial debts through resolution.
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
                    References: [1] <a href="https://www.rbi.org.in/" target="_blank" rel="nofollow noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Reserve Bank of India Master Directions on Non-Banking Financial Companies &amp; Fair Practices Code</a>. [2] <a href="https://www.indiacode.nic.in/handle/123456789/2006" target="_blank" rel="nofollow noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002</a>. [3] <span className="text-slate-600">Recovery of Debts and Bankruptcy Act, 1993 (Debt Recovery Tribunal Procedures)</span>. [4] <span className="text-slate-600">Negotiable Instruments Act, 1881 (Section 138 Dishonor of Cheque)</span>. [5] <span className="text-slate-600">Payment and Settlement Systems Act, 2007 (Section 25 Electronic NACH Mandate Dishonor)</span>. [6] <span className="text-slate-600">Insolvency and Bankruptcy Code, 2016 (Section 7 Financial Creditor Applications)</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column Sidebar */}
            <div className="space-y-8 sticky top-28">
              <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-sm font-black mb-3">Recover NBFC &amp; Fintech Dues</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Partner with senior debt recovery advocates. We draft institutional demand notices, calculate compound &amp; penal interest, execute verified multi-channel dispatch, and handle SARFAESI/DRT escalations.
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
                    <span className="text-xs font-bold text-slate-800">Siddharth Mathur</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    &quot;As an NBFC portfolio recovery manager handling unsecured MSME business loan defaults across North India, serving legally airtight demand notices was a major operational bottleneck. Legal Recovery streamlined our pre-litigation process with advocate-signed demand notices citing Section 25 PSSA and SARFAESI provisions. Over 68% of our chronic 90+ DPD defaulting borrowers approached us for restructuring and one-time settlement within 14 days of notice delivery. Outstanding turnaround time and institutional compliance.&quot;
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
              <Link href="/recovery/cheque-bounce-amount" className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">Cheque Bounce Recovery</h3>
                <p className="text-xs text-slate-500 line-clamp-2">Step-by-step roadmap to recover dishonored cheques and bounced loan EMIs under Section 138 NI Act.</p>
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
