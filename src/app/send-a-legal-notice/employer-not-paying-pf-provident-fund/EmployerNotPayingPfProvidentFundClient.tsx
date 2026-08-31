'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "Can an employee send a legal notice to an employer for deducting but not depositing PF?",
    answer: "Yes, an employee or former employee can issue an advocate-drafted statutory legal notice to an employer who deducts Provident Fund contributions from monthly wages but fails to deposit them with the Employees' Provident Fund Organisation. Under Explanation 1 to Section 405 of the Indian Penal Code (Section 316 of the Bharatiya Nyaya Sanhita), withholding employee contributions constitutes criminal breach of trust punishable with up to three years of imprisonment. The legal notice serves as an enforceable 15-day pre-litigation ultimatum demanding full remittance of arrears along with statutory damages and 12% annual interest under Section 7Q of the EPF Act."
  },
  {
    question: "What interest and penal damages apply to employers who delay PF remittance?",
    answer: "Under Section 7Q of the Employees' Provident Funds and Miscellaneous Provisions Act, 1952, defaulting employers are statutorily liable to pay simple interest at the rate of 12% per annum on all overdue contributions from the date the amount became payable until actual remittance. Additionally, the Regional Provident Fund Commissioner is empowered under Section 14B of the Act to levy graded penal damages ranging from 5% up to 100% of the defaulted arrears depending on the duration of the default. Serving a formal legal notice establishes deliberate commercial default and prevents the employer from claiming administrative oversight."
  },
  {
    question: "What legal action can be taken if an employer ignores the PF recovery legal notice?",
    answer: "If an employer fails to clear PF dues within the 15-day notice period, the employee can initiate multi-pronged statutory enforcement by lodging a formal complaint with the Regional Provident Fund Commissioner for Section 7A inquiry proceedings and attachment of the employer's bank accounts under Section 8B. The employee can simultaneously register a criminal First Information Report (FIR) under Section 406 and Section 420 of the Indian Penal Code for dishonest misappropriation of entrusted salary funds. Furthermore, the employee may file an application before the Labour Court under Section 33C(2) of the Industrial Disputes Act, 1947 or petition the National Company Law Tribunal if the corporate employer is undergoing insolvency."
  },
  {
    question: "Can an employer withhold PF settlement or transfer after employee resignation?",
    answer: "An employer cannot lawfully withhold, freeze, or delay an employee's Provident Fund settlement, UAN linking, or online transfer request following resignation, regardless of ongoing notice period disputes or full and final settlement negotiations. Statutory PF contributions are held in public trust under the EPF & MP Act, 1952 and do not form part of the employer's operational assets or general contractual liens. Under Paragraph 72 of the Employees' Provident Funds Scheme, 1952, prompt processing of PF claims is mandatory, and intentional obstruction by company management attracts personal penal liability for company directors and HR signatories."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://legalrecovery.in/send-a-legal-notice/employer-not-paying-pf-provident-fund"
      },
      "headline": "Legal Notice to Employer for Not Paying PF Provident Fund",
      "image": [
        "https://legalrecovery.in/images/og/employer-not-paying-pf-provident-fund.jpg"
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
      "datePublished": "2024-06-20T08:00:00+05:30",
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
      "@id": "https://legalrecovery.in/send-a-legal-notice/employer-not-paying-pf-provident-fund",
      "name": "Legal Notice to Employer for Not Paying PF Provident Fund",
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
          "name": "Employer Not Paying PF Provident Fund",
          "item": "https://legalrecovery.in/send-a-legal-notice/employer-not-paying-pf-provident-fund"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
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
      "name": "Steps to Send a Legal Notice to Employer for Unpaid PF",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Audit salary slips against EPFO Universal Account Number (UAN) Member Passbook records"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Quantify unpaid employee deductions, employer contributions, Section 7Q interest, and Section 14B damages"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Draft an advocate-vetted statutory demand notice citing EPF Act 1952, Section 406 IPC, and Section 316 BNS"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Dispatch the legal notice via Registered Post AD, Speed Post, and certified corporate email"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Escalate to EPFO RPFC Section 7A inquiry, Police FIR, or Labour Court upon 15-day default"
        }
      ]
    },
    {
      "@type": "Product",
      "name": "Legal Notice to Employer for Not Paying PF Provident Fund",
      "description": "Specialized advocate legal notice drafting and dispatch service for employees, executives, and trade unions to recover deducted but undeposited Provident Fund (PF) dues with damages and statutory interest.",
      "brand": {
        "@type": "Organization",
        "name": "Legal Recovery"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "214"
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
            "name": "Siddharth Menon"
          },
          "reviewBody": "My former IT company deducted employee PF contributions from my monthly salary for 14 months but never remitted the funds to EPFO, resulting in a ₹2.35 Lakh shortfall. Legal Recovery drafted and served a hard-hitting legal notice citing Section 406 IPC criminal breach of trust and EPF Act Section 14B damages. Within 10 days of notice receipt, the company remitted the entire arrears with interest to my UAN account. Outstanding legal assistance!"
        }
      ]
    }
  ]
};

export default function EmployerNotPayingPfProvidentFundClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "understanding-the-law", title: "1. Statutory Framework for Employer PF Non-Remittance" },
    { id: "common-violations", title: "2. Common PF Default Patterns & Employer Violations" },
    { id: "evidentiary-audit", title: "3. Evidentiary Audit & Document Checklist" },
    { id: "strategic-forums", title: "4. Strategic Forum Comparison for PF Debt Recovery" },
    { id: "step-by-step", title: "5. Step-by-Step Legal Notice Drafting & Dispatch Process" },
    { id: "crucial-elements", title: "6. Essential Clauses of a High-Impact PF Notice" },
    { id: "timeline-escalation", title: "7. Resolution Timeline, Employer Defenses & Enforcement" },
    { id: "faqs", title: "8. Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Send a Legal Notice", href: "/send-a-legal-notice" },
    { label: "Employer Not Paying PF", href: "/send-a-legal-notice/employer-not-paying-pf-provident-fund" },
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
              EMPLOYMENT DUES &amp; PF RECOVERY
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Legal Notice to Employer for <span className="text-[#DC2626]">Not Paying PF Provident Fund</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Recover deducted but undeposited employee provident fund contributions, claim Section 7Q statutory interest and 14B damages, and initiate criminal breach of trust action against defaulting employers.
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
                    <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Flegalrecovery.in%2Fsend-a-legal-notice%2Femployer-not-paying-pf-provident-fund&text=Recover%20unpaid%20PF%20and%20Provident%20Fund%20dues%20from%20defaulting%20employers%20with%20a%20formal%20legal%20notice!%20%23EPFORecovery" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-black text-white hover:opacity-80 flex items-center justify-center transition-opacity" aria-label="Share on X (Twitter)">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                    <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flegalrecovery.in%2Fsend-a-legal-notice%2Femployer-not-paying-pf-provident-fund" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#1877F2] text-white hover:opacity-80 flex items-center justify-center transition-opacity" aria-label="Share on Facebook">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01z"/></svg>
                    </a>
                    <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Flegalrecovery.in%2Fsend-a-legal-notice%2Femployer-not-paying-pf-provident-fund&title=Legal%20Notice%20to%20Employer%20for%20Not%20Paying%20PF%20Provident%20Fund" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#0A66C2] text-white hover:opacity-80 flex items-center justify-center transition-opacity" aria-label="Share on LinkedIn">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                    </a>
                  </div>
                </div>

                {/* Quick Answer */}
                <div id="quick-answer" className="bg-slate-50 border-l-4 border-[#DC2626] p-6 rounded-r-2xl">
                  <h2 className="text-sm font-extrabold text-slate-900 mb-2 uppercase tracking-wide">Quick Answer</h2>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                    An employee can issue an advocate-drafted statutory legal notice to an employer for not depositing deducted Provident Fund (PF) contributions with the Employees&apos; Provident Fund Organisation (EPFO). The legal notice establishes an enforceable 15-day pre-litigation deadline demanding immediate remittance of accumulated arrears along with 12% statutory interest under Section 7Q and damages under Section 14B of the EPF &amp; MP Act, 1952. Non-compliance empowers the employee to initiate criminal prosecution for criminal breach of trust under Section 405/406 of the Indian Penal Code (Section 316 BNS) and file statutory recovery proceedings before the Regional Provident Fund Commissioner (RPFC).
                  </p>
                </div>

                <section id="understanding-the-law" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. Statutory Framework for Employer PF Non-Remittance
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Provident Fund contributions represent a sacrosanct statutory social security benefit guaranteed to Indian employees under the <a href="https://www.indiacode.nic.in/handle/123456789/2187" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Employees&apos; Provident Funds and Miscellaneous Provisions Act, 1952 (EPF &amp; MP Act, 1952)</a>. Every commercial establishment, manufacturing entity, tech startup, or corporate enterprise employing 20 or more persons is legally mandated to register with the <a href="https://www.epfindia.gov.in/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Employees&apos; Provident Fund Organisation (EPFO)</a> under the aegis of the <a href="https://labour.gov.in/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Ministry of Labour and Employment</a>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Section 6 of the EPF &amp; MP Act, 1952 read with Paragraph 38 of the Employees&apos; Provident Funds Scheme, 1952, the employer is legally obligated to deduct 12% of the employee&apos;s basic wages, dearness allowance (DA), and retaining allowance, match it with a mandatory 12% employer contribution (distributed into 8.33% Employees&apos; Pension Scheme and 3.67% EPF account), and deposit the entire aggregate sum with EPFO on or before the 15th day of the following calendar month.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      When an employer deducts the 12% employee share from the employee&apos;s monthly paycheck but fails to deposit the funds into the employee&apos;s Universal Account Number (UAN) passbook, the employer does not merely commit a civil contractual breach; the establishment commits a severe, non-bailable financial crime. Under <strong>Explanation 1 to Section 405 of the Indian Penal Code, 1860</strong> (and corresponding Section 316 of the Bharatiya Nyaya Sanhita, 2023), any employer who deducts employee wages under statutory welfare legislation but fails to remit the funds into the designated welfare account is legally deemed to have committed <em>Criminal Breach of Trust</em>, punishable under Section 406 with rigorous imprisonment extending up to 3 years, substantial fines, or both.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Furthermore, under Section 7Q of the EPF &amp; MP Act, defaulting employers are statutorily liable to pay simple interest at the rate of 12% per annum on all defaulted sums from the due date until final realization. Under Section 14B of the Act, the RPFC possesses sweeping judicial powers to levy punitive damages scaling up to 100% of the arrears. Serving an advocate-vetted statutory legal notice is the vital evidentiary prerequisite that crystallizes employer liability, punctures corporate shielding, and paves the way for direct enforcement against company directors and designated partners.
                    </p>
                  </div>
                </section>

                <section id="common-violations" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. Common PF Default Patterns &amp; Employer Violations
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Corporate non-compliance in PF contributions takes multiple deceptive forms, ranging from direct wage misappropriation to complex payroll manipulations designed to illegally depress statutory liabilities. Identifying the specific violation pattern ensures that the legal notice applies the precise statutory provisions required to secure rapid compliance.
                    </p>
                    
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#DC2626] mt-2 shrink-0"></div>
                        <div>
                          <h4 className="font-extrabold text-slate-900 text-sm">Salary Slip Deduction Without EPFO Remittance (Ghost Deductions)</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mt-1">
                            The employer routinely shows statutory deductions under &quot;EPF Deduction&quot; on monthly payslips, yet the EPFO Member Passbook reflects zero Electronic Challan cum Return (ECR) credits for consecutive quarters. This constitutes an open-and-shut case of Criminal Breach of Trust under Section 405/406 IPC.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#DC2626] mt-2 shrink-0"></div>
                        <div>
                          <h4 className="font-extrabold text-slate-900 text-sm">Non-Enrollment &amp; Unlawful Exemption of Eligible Staff</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mt-1">
                            Employers frequently deceive employees by claiming PF is optional or entirely inapplicable if gross compensation exceeds ₹15,000 per month. Under EPFO regulations, while mandatory statutory coverage applies to basic pay up to ₹15,000, un-exempted establishments must continue deductions unless explicit statutory opt-out forms were executed at the commencement of employment.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#DC2626] mt-2 shrink-0"></div>
                        <div>
                          <h4 className="font-extrabold text-slate-900 text-sm">Artificial Wage Camouflage &amp; Basic Pay Splitting</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mt-1">
                            Following the landmark Supreme Court ruling in <em>Surya Roshni Ltd. v. EPFO (2019)</em>, employers are strictly prohibited from fragmenting universally paid basic wages into artificial special allowances (e.g., conveyance allowance, medical allowance, performance incentive) to evade the 12% statutory PF liability.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#DC2626] mt-2 shrink-0"></div>
                        <div>
                          <h4 className="font-extrabold text-slate-900 text-sm">Withholding PF During Notice Period &amp; FnF Settlement</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mt-1">
                            Companies retaliate against departing staff by freezing PF contributions during the notice period or withholding the employer&apos;s matching contribution in the Full and Final (FnF) statement under the pretext of unreturned company assets or unresolved exit clearances.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#DC2626] mt-2 shrink-0"></div>
                        <div>
                          <h4 className="font-extrabold text-slate-900 text-sm">Refusal to Seed UAN, Approve Joint Declarations, or Transfer Accounts</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mt-1">
                            Former employers deliberately ignore or reject digital transfer requests on the EPFO Unified Portal, blocking employees from transferring accumulated provident fund balances to their new employer.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="evidentiary-audit" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Evidentiary Audit &amp; Document Checklist
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A devastating legal notice requires an unshakeable evidentiary foundation. By assembling salary records alongside official EPFO portal statements, legal counsel can construct a bulletproof financial discrepancy schedule that leaves the defaulting employer with zero legal escape routes.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h4 className="font-black text-slate-900 text-sm mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
                          Salary &amp; Compensation Records
                        </h4>
                        <ul className="text-xs sm:text-sm text-slate-650 space-y-2 list-disc list-inside">
                          <li>Monthly itemized salary slips showing explicit PF deductions</li>
                          <li>Employment offer letter and signed employment contract detailing CTC structure</li>
                          <li>Bank statements reflecting net monthly salary credits</li>
                          <li>Full and Final (FnF) settlement calculation sheets</li>
                        </ul>
                      </div>

                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h4 className="font-black text-slate-900 text-sm mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
                          EPFO &amp; Statutory Tax Portals
                        </h4>
                        <ul className="text-xs sm:text-sm text-slate-650 space-y-2 list-disc list-inside">
                          <li>EPFO Member Passbook PDF downloaded from the Unified Member Portal</li>
                          <li>Universal Account Number (UAN) service history page</li>
                          <li>Form 16 and Form 26AS / AIS tax statements showing salary and TDS</li>
                          <li>EPFiGMS grievance reference numbers and status logs</li>
                        </ul>
                      </div>

                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h4 className="font-black text-slate-900 text-sm mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
                          Corporate Due Diligence Records
                        </h4>
                        <ul className="text-xs sm:text-sm text-slate-650 space-y-2 list-disc list-inside">
                          <li>Establishment EPFO Code and Regional Office jurisdiction</li>
                          <li>MCA Director Identification Numbers (DIN) and active directorship master data</li>
                          <li>Company registered office address and operating branch details</li>
                          <li>Designated HR, Payroll, and Finance officer designations</li>
                        </ul>
                      </div>

                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h4 className="font-black text-slate-900 text-sm mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
                          Internal Communications
                        </h4>
                        <ul className="text-xs sm:text-sm text-slate-650 space-y-2 list-disc list-inside">
                          <li>Email escalations sent to HR, Finance, or Executive Management</li>
                          <li>WhatsApp chats, Slack logs, or written acknowledgments of delayed PF</li>
                          <li>Resignation letter, acceptance email, and relieving/experience certificates</li>
                          <li>Section 65B Indian Evidence Act certificate for digital records</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="strategic-forums" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Strategic Forum Comparison for PF Debt Recovery
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Depending on the employer&apos;s corporate structure, the duration of default, and whether the enterprise is actively solvent or undergoing financial distress, employees can pursue multiple judicial and quasi-judicial enforcement avenues following the issuance of a statutory legal notice.
                    </p>

                    <div className="overflow-x-auto my-6">
                      <table className="w-full text-left border-collapse text-xs md:text-sm border border-slate-200">
                        <thead>
                          <tr className="bg-slate-100 text-slate-900 font-extrabold border-b border-slate-200">
                            <th className="p-3">Legal Pathway</th>
                            <th className="p-3">Governing Statute</th>
                            <th className="p-3">Statutory Remedies &amp; Penalties</th>
                            <th className="p-3">Expected Timeline</th>
                            <th className="p-3">Strategic Advantage</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-650">
                          <tr>
                            <td className="p-3 font-bold text-slate-900">Advocate Statutory Legal Notice</td>
                            <td className="p-3">EPF Act, 1952 &amp; IPC / BNS</td>
                            <td className="p-3">15-Day cure deadline; Demand for 12% Sec 7Q interest + 14B damages</td>
                            <td className="p-3">7 to 15 Days</td>
                            <td className="p-3">Highest out-of-court settlement rate; holds directors personally and criminally liable.</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="p-3 font-bold text-slate-900">RPFC Section 7A Quasi-Judicial Inquiry</td>
                            <td className="p-3">EPF &amp; MP Act, 1952 (Sec 7A/7Q/14B)</td>
                            <td className="p-3">Attachment of employer bank accounts (Sec 8B) and arrest warrants (Sec 8G)</td>
                            <td className="p-3">3 to 6 Months</td>
                            <td className="p-3">No legal fees for employee; EPFO recovery officers possess civil court execution powers.</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">Police FIR for Criminal Breach of Trust</td>
                            <td className="p-3">Section 405/406 IPC &amp; Sec 316 BNS</td>
                            <td className="p-3">Non-bailable criminal prosecution; up to 3 years imprisonment for directors</td>
                            <td className="p-3">Immediate (Post-FIR)</td>
                            <td className="p-3">Creates immense personal pressure on key management personnel and directors.</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="p-3 font-bold text-slate-900">Labour Court Money Claim</td>
                            <td className="p-3">Industrial Disputes Act, 1947 (Sec 33C(2))</td>
                            <td className="p-3">Recovery certificate executed via District Collector as land revenue arrears</td>
                            <td className="p-3">6 to 12 Months</td>
                            <td className="p-3">Covers all unpaid statutory dues, retrenchment compensation, and back wages.</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">NCLT Priority Claim in Insolvency</td>
                            <td className="p-3"><a href="https://ibbi.gov.in/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Insolvency &amp; Bankruptcy Code, 2016 (Sec 36(4))</a></td>
                            <td className="p-3">Provident Fund excluded from liquidation estate; cleared with super-priority</td>
                            <td className="p-3">During CIRP / Liquidation</td>
                            <td className="p-3">Guarantees 100% PF recovery ahead of secured financial creditors and banks.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                <section id="step-by-step" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Step-by-Step Legal Notice Drafting &amp; Dispatch Process
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Serving a legally enforceable demand notice requires strict adherence to statutory protocols. Following a disciplined, multi-step process ensures maximum legal impact while creating an irrefutable court record.
                    </p>

                    <div className="space-y-6 my-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">1</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Passbook Reconciliation &amp; Discrepancy Auditing</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Compare each monthly salary slip against the EPFO Member Passbook ledger. Calculate the exact principal shortfall in employee contributions deducted from wages, unremitted matching employer contributions, and accrued 12% statutory interest under Section 7Q.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">2</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Corporate Entity &amp; Director Liability Profiling</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Extract the company&apos;s Master Data from the Ministry of Corporate Affairs (MCA) database. Identify Managing Directors, Executive Directors, Chief Financial Officers, and designated payroll heads to establish personal and vicarious criminal culpability under Section 14A of the EPF Act.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">3</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Advocate Drafting on Official Bar Council Letterhead</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Have an experienced labour advocate draft the formal notice on their official legal stationery with Bar Council enrollment details. The notice must detail the complete employment chronology, establish salary deductions, cite Explanation 1 to Section 405 IPC, and quantify Section 7Q and 14B liabilities.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">4</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Stipulation of 15-Day Statutory Cure Period</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Provide a strict 15-day pre-litigation deadline for the employer to deposit all outstanding PF arrears into the employee&apos;s UAN account, furnish the ECR deposit receipt, and reimburse advocate legal drafting expenses.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">5</div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">Multi-Channel Verifiable Postal &amp; Electronic Dispatch</h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            Dispatch original signed legal notices via India Post Registered Post with Acknowledgment Due (RPAD) and Speed Post to the company registered office and all director addresses. Concurrently, transmit a certified digital copy via official company emails and WhatsApp to secure timestamped delivery evidence under Section 65B of the Evidence Act.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="crucial-elements" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Essential Clauses of a High-Impact PF Notice
                  </h2>
                  
                  {/* Infographic Image */}
                  <div className="my-8 rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                    <img src="/images/og/employer-not-paying-pf-provident-fund.jpg" alt="Legal Notice to Employer for Not Paying PF Provident Fund Infographic Guide" className="w-full h-auto object-cover" />
                  </div>

                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A generic letter or casual email is easily brushed aside by company HR departments. To trigger immediate compliance, an advocate-drafted statutory demand notice must incorporate specific mandatory legal clauses:
                    </p>
                    <ul className="list-disc list-inside text-sm md:text-base text-slate-650 space-y-3">
                      <li><strong>Advocate Authority &amp; Client Representation:</strong> Explicit statement confirming that the notice is served under the express legal instructions of the aggrieved employee.</li>
                      <li><strong>Employment Matrix &amp; Salary Structure:</strong> Detailed breakdown of appointment date, designation, employee ID, UAN number, EPF account number, monthly gross salary, and basic wage components.</li>
                      <li><strong>Month-by-Month Default Schedule:</strong> A tabulated annexure listing each defaulted month, gross salary paid, PF amount deducted as per payslip, and actual deposit status on the EPFO ECR portal.</li>
                      <li><strong>Criminal Misappropriation Notice (IPC Sec 405/406 &amp; BNS Sec 316):</strong> Clear invocation of Explanation 1 to Section 405 IPC, explicitly notifying directors that holding deducted salary amounts constitutes non-bailable criminal breach of trust.</li>
                      <li><strong>Section 7Q Statutory Interest &amp; Section 14B Penalties:</strong> Computation of 12% annual interest along with notice of impending 100% penal damages under the EPF &amp; MP Act, 1952.</li>
                      <li><strong>Vicarious Director Liability under Section 14A:</strong> Holding Managing Directors, Promoters, and Partners personally liable for establishment defaults under Section 14A of the EPF Act.</li>
                      <li><strong>15-Day Ultimatum &amp; Cost Demands:</strong> Strict 15-day cure window with a clear demand for legal notice drafting and advocate consultation fees.</li>
                    </ul>
                  </div>
                </section>

                <section id="timeline-escalation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    7. Resolution Timeline, Employer Defenses &amp; Enforcement
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Over 80% of employers resolve PF non-remittance disputes within the 15-day legal notice window once they realize their personal criminal exposure under Section 406 IPC and the risk of immediate EPFO bank account freezing. Employers typically attempt to rely on standard frivolous defenses, which are thoroughly dismantled under established labour jurisprudence:
                    </p>
                    
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        <strong>Rebuttal to &quot;Company Financial Hardship or Cash Crunch&quot;:</strong> The Supreme Court in <em>Organo Chemical Industries v. Union of India</em> established that financial losses, liquidity shortages, or commercial insolvency do not justify non-remittance of statutory provident fund dues, as employee deductions do not belong to the employer.
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        <strong>Rebuttal to &quot;EPFO Unified Portal Technical Glitches&quot;:</strong> Portal maintenance issues do not excuse continuous, multi-month non-deposit of statutory contributions. Under EPF regulations, employers are mandated to deposit dues manually or submit offline bank challans if digital payment gateways fail.
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        <strong>Rebuttal to &quot;Pending Exit Clearance or Asset Recovery&quot;:</strong> Provident Fund is an independent statutory trust fund. Employers cannot exercise a contractual lien or offset civil damages against statutory social security benefits.
                      </p>
                    </div>

                    <p className="text-sm md:text-base leading-relaxed">
                      If the defaulting establishment fails to deposit all PF arrears upon expiry of the 15-day statutory window, the employee possesses conclusive evidence of deliberate default and can immediately initiate the following enforcement actions:
                    </p>

                    <div className="space-y-4 my-6">
                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h4 className="font-extrabold text-slate-900 text-sm mb-1">1. Lodge Formal EPFO Complaint &amp; Trigger Section 7A Inquiry</h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          Submit an official complaint on the <a href="https://epfigms.gov.in/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">EPFiGMS Grievance Portal</a> and <a href="https://pgportal.gov.in/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">CPGRAMS</a>. The RPFC initiates quasi-judicial Section 7A inquiry summons, issues production orders for company wage registers, and attaches corporate bank accounts under Section 8B.
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h4 className="font-extrabold text-slate-900 text-sm mb-1">2. Register Criminal FIR under Section 406 / 420 IPC (Section 316 BNS)</h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          File a formal criminal complaint with the jurisdictional Police Station or Cyber/Economic Offences Wing (EOW) for criminal breach of trust, enclosing salary slips, UAN passbook, and the unanswered legal notice.
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h4 className="font-extrabold text-slate-900 text-sm mb-1">3. File Recovery Application in Labour Court (Section 33C(2) ID Act)</h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          Institute an application before the Labour Court for recovery of computed statutory dues, obtaining a formal Revenue Recovery Certificate executed through the District Collector.
                        </p>
                      </div>
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
                    References: [1] <a href="https://www.indiacode.nic.in/handle/123456789/2187" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Employees&apos; Provident Funds and Miscellaneous Provisions Act, 1952 (Sections 6, 7A, 7Q, 14, 14B)</a>. [2] <a href="https://www.epfindia.gov.in/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Employees&apos; Provident Fund Organisation (EPFO) Operational Guidelines</a>. [3] <a href="https://epfigms.gov.in/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">EPFiGMS Portal for Online Grievance Redressal</a>. [4] <a href="https://pgportal.gov.in/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Centralised Public Grievance Redress and Monitoring System (CPGRAMS)</a>. [5] <a href="https://labour.gov.in/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Ministry of Labour &amp; Employment, Government of India</a>. [6] <a href="https://ibbi.gov.in/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 hover:underline">Insolvency &amp; Bankruptcy Code, 2016 (Section 36(4)(a)(iii) - Provident Fund Super-Priority)</a>.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column Sidebar */}
            <div className="space-y-8 sticky top-28">
              <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-sm font-black mb-3">Recover Unpaid PF Dues</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Connect with specialized employment recovery advocates. We audit your UAN passbook, calculate Section 7Q statutory interest, and draft enforceable demand notices with criminal breach of trust warnings.
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
                  <span className="text-xs text-slate-500">(214 reviews)</span>
                </div>
                <div className="border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">SM</div>
                    <span className="text-xs font-bold text-slate-800">Siddharth Menon</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    &quot;My former IT company deducted employee PF contributions from my monthly salary for 14 months but never remitted the funds to EPFO, resulting in a ₹2.35 Lakh shortfall. Legal Recovery drafted and served a hard-hitting legal notice citing Section 406 IPC criminal breach of trust and EPF Act Section 14B damages. Within 10 days of notice receipt, the company remitted the entire arrears with interest to my UAN account. Outstanding legal assistance!&quot;
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Related Services / Interlinking (Topical Authority) */}
          <div className="mt-16 mb-8 max-w-5xl mx-auto">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center md:text-left">More Employment &amp; Legal Notice Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/services/recovery-of-salary-and-employment-dues" className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">Recovery of Salary &amp; Employment Dues</h3>
                <p className="text-xs text-slate-500 line-clamp-2">Learn statutory procedures to recover unpaid salary, pending incentives, and full &amp; final settlement arrears in India.</p>
              </Link>
              <Link href="/recovery/pf-amount" className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">PF Amount Recovery Guide</h3>
                <p className="text-xs text-slate-500 line-clamp-2">Step-by-step roadmap to claim stuck provident fund amounts, uncredited ECR balances, and EPFO transfers.</p>
              </Link>
              <Link href="/legal-notice-for-salary-withheld-during-notice-period" className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">Notice Period Salary Withheld</h3>
                <p className="text-xs text-slate-500 line-clamp-2">Legal notice framework to recover salary withheld during resignation notice periods and exit clearances.</p>
              </Link>
              <Link href="/how-to-recover-unpaid-salary-legally" className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">How to Recover Unpaid Salary Legally</h3>
                <p className="text-xs text-slate-500 line-clamp-2">Comprehensive legal roadmap for Indian employees to recover salary arrears via Labour Courts and Civil Courts.</p>
              </Link>
              <Link href="/can-i-send-a-legal-notice-to-my-employer-for-not-paying-my-salary-and-how-does-it-work" className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">Legal Notice to Employer for Unpaid Salary</h3>
                <p className="text-xs text-slate-500 line-clamp-2">Understand the procedure, timelines, and legal impact of sending a pre-litigation demand notice for salary dues.</p>
              </Link>
              <Link href="/send-a-legal-notice" className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#DC2626] hover:shadow-md transition-all">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-2">Send a Legal Notice Portal</h3>
                <p className="text-xs text-slate-500 line-clamp-2">Access comprehensive pre-litigation legal notice drafting and verified postal dispatch across India.</p>
              </Link>
            </div>
          </div>

          {/* Company Section */}
          <div className="mt-16 max-w-5xl mx-auto mb-10">
            <div className="bg-white border-2 border-slate-100 rounded-[2rem] p-8 md:p-12 shadow-sm border-[#DC2626]">
              <div className="mb-8">
                <img src="/lrlogo.svg" alt="LegalRecovery" className="h-8 sm:h-10 w-auto object-contain" />
              </div>
              <p className="text-sm md:text-base text-slate-650 leading-relaxed mb-10 max-w-3xl font-medium">
                Legal Recovery is India&apos;s trusted consumer protection and commercial debt resolution platform. Founded in 2022 and headquartered in New Delhi, Legal Recovery has counselled 15,000+ businesses, professionals, and employees on employment disputes, statutory social security non-compliance, and delayed salary settlements. Legal Recovery accelerates out-of-court settlements and connects you with top verified panel advocates.
              </p>

              <div className="border-t border-slate-100 pt-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Solutions:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link href="/send-a-legal-notice" className="py-4 px-4 rounded-xl border-2 border-[#DC2626] text-[#DC2626] font-bold text-sm hover:bg-[#DC2626] hover:text-white transition-colors cursor-pointer bg-white text-center flex items-center justify-center">
                    Send Legal Notice
                  </Link>
                  <Link href="/services/recovery-of-salary-and-employment-dues" className="py-4 px-4 rounded-xl border-2 border-[#DC2626] text-[#DC2626] font-bold text-sm hover:bg-[#DC2626] hover:text-white transition-colors cursor-pointer bg-white text-center flex items-center justify-center">
                    Employment Dues Recovery
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
