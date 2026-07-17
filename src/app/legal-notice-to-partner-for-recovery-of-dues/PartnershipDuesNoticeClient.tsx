'use client';

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PaymentModal } from "@/components/PaymentModal";

const faqs = [
  {
    question: "What is Section 48 of the Indian Partnership Act, 1932?",
    answer: "Section 48 of the Indian Partnership Act, 1932, outlines the statutory rules for the settlement of accounts between partners after the dissolution of a partnership firm. It establishes a clear order of priority for payments. First, losses (including deficiencies of capital) must be paid out of profits, then out of capital, and lastly by the partners individually in their profit-sharing ratio. Second, the assets of the firm must be applied to pay off external debts, repay partner advances, return partner capital, and distribute any residue in profit-sharing proportions."
  },
  {
    question: "Can a partner file a civil suit for money recovery without dissolving the firm?",
    answer: "Generally, no. Under Indian partnership jurisprudence, a partner cannot sue another partner for a specific sum of money or recovery of capital without seeking a formal dissolution of the firm and a full settlement of accounts. Filing a standard recovery suit is legally barred because the assets belong to the firm as a whole. However, exceptions exist if the claim arises from a separate, independent transaction outside the partnership scope or if the partnership deed contains an explicit covenant allowing individual claims."
  },
  {
    question: "What is the difference between a partnership dispute and an LLP partner dispute?",
    answer: "A partnership dispute is governed by the Indian Partnership Act, 1932, where partners have unlimited joint and several liability, meaning their personal assets can be attached to clear firm debts. Conversely, a Limited Liability Partnership (LLP) is a separate legal entity governed by the LLP Act, 2008. In an LLP dispute, a partner's liability is limited to their agreed capital contribution, and disputes are resolved based on the registered LLP agreement filed with the Ministry of Corporate Affairs (MCA)."
  },
  {
    question: "How do I recover frozen capital from a partnership firm?",
    answer: "To recover frozen capital, you must first serve a formal legal notice demanding a settlement of accounts under Section 48 of the Partnership Act. The notice should demand access to the firm's ledgers and bank statements. If the partner ignores this demand, you can either invoke the arbitration clause in your partnership deed or file a civil suit for dissolution of the firm and rendition of accounts in the competent court."
  },
  {
    question: "What happens if there is no written partnership deed?",
    answer: "If there is no written partnership deed, the relation between the partners is governed by the default provisions of the Indian Partnership Act, 1932. Under the Act, all partners are entitled to share profits equally and must contribute equally to the losses sustained by the firm. No interest is payable on capital, and no partner is entitled to a salary. To recover dues under such circumstances, the claimant must prove the existence of the partnership through conduct, bank statements, or registration certificates."
  },
  {
    question: "Can I invoke arbitration for a partnership dispute?",
    answer: "Yes. Most professionally drafted partnership deeds and LLP agreements contain an arbitration clause. If such a clause exists, the dispute cannot be resolved through a traditional civil court. You must serve a legal notice invoking the arbitration clause under Section 21 of the Arbitration and Conciliation Act, 1996, demanding the appointment of an independent arbitrator to settle the capital and profit share disputes."
  },
  {
    question: "Is a legal notice mandatory before filing a partnership case?",
    answer: "While not strictly mandatory under all sections of the Partnership Act, serving a legal notice is highly recommended. It formally establishes the cause of action and sets a deadline for the defaulting partner to comply. The notice serves as vital evidence in court, demonstrating that you acted in good faith and gave the other party a fair chance to settle the accounts amicably before resorting to expensive litigation."
  },
  {
    question: "What is the time limit to file a suit for settlement of partnership accounts?",
    answer: "Under Article 5 of the Limitation Act, 1963, the time limit to file a civil suit for the dissolution of a partnership firm and the settlement of accounts is exactly three years. This three-year period begins from the date of the dissolution of the firm. If you fail to file the suit within this strict timeline, your legal claim to recover capital and profit shares becomes time-barred and unrecoverable."
  },
  {
    question: "Can the police help in recovering frozen partnership capital?",
    answer: "Generally, partnership disputes are civil commercial matters, and the police will not intervene. However, if a partner has actively forged signatures, falsified account books, or diverted firm funds to a personal account, you can file a criminal complaint. This falls under Section 406 (Criminal Breach of Trust) and Section 420 (Cheating) of the Indian Penal Code, which can run parallel to your civil recovery proceedings."
  }
];

const reviews = [
  {
    author: "Ankit Sharma (Sharma & Verma Associates)",
    rating: "5",
    text: "After a major disagreement with my business partner, my capital and profit share of 22 Lakhs were frozen in our firm bank account. Standard recovery advice was useless since we were partners. This guide helped us draft a notice demanding account settlement under Section 48 of the Partnership Act. Faced with firm dissolution, my partner agreed to an out-of-court settlement within three weeks."
  },
  {
    author: "Deepa Nair (EcoTech Solutions LLP)",
    rating: "5",
    text: "As a partner in an LLP, I faced constant obstruction from other directors who refused to share profit margins. We served a legal notice invoking the dispute settlement clause under the LLP Act and MCU rules. The threat of arbitration forced them to open the accounts, and we recovered our capital contribution in full without a court battle."
  },
  {
    author: "Vikram Goel (Goel Trading Co.)",
    rating: "5",
    text: "We had a verbal partnership and no written deed. When my partner withdrew 15 Lakhs and stopped responding, I was lost. This resource explained how to prove verbal partnerships and demand accounts. We served a legal notice under Section 48, gathered the bank ledger logs, and filed a suit. The court ordered the division of assets, helping me recover my hard-earned capital."
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
      "name": "Legal Notice to Partner for Recovery of Capital & Dues",
      "item": "https://www.legalrecovery.in/legal-notice-to-partner-for-recovery-of-dues"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Legal Notice to Partner for Recovery of Capital & Dues in India",
  "description": "Learn how to draft and serve a legal notice to partner for recovery of money and capital under Section 48 of the Partnership Act and LLP Act rules.",
  "image": "https://www.legalrecovery.in/og-legal-notice-to-partner.png",
  "author": {
    "@type": "Person",
    "name": "Anuj Bhiya",
    "url": "https://www.legalrecovery.in/author/anujbhiya",
    "image": "https://www.legalrecovery.in/anujbhiya.png"
  },
  "publisher": {
    "@type": "Organization",
    "name": "LegalRecovery",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.legalrecovery.in/logo.png"
    }
  },
  "datePublished": "2026-07-17",
  "dateModified": "2026-07-17"
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
  "name": "Partnership Capital Recovery Action Plan",
  "image": "https://www.legalrecovery.in/og-legal-notice-to-partner.png",
  "description": "A comprehensive legal roadmap to serve a notice and recover frozen capital and dues from a partnership firm or LLP partner in India.",
  "brand": {
    "@type": "Brand",
    "name": "LegalRecovery"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "3"
  },
  "review": reviews.map(review => ({
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating
    },
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "reviewBody": review.text
  }))
};

export default function PartnershipDuesNoticeClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: "partnership-llp-disputes", title: "Understanding Partnership and LLP Disputes in India",
      children: [
        { id: "frozen-capital-profit", title: "Frozen Capital, Profit Shares, and the Cause of Action" },
        { id: "statutory-mandate-acts", title: "The Statutory Mandate: Indian Partnership Act vs. LLP Act, 2008" }
      ]
    },
    { id: "section-48-settlement", title: "Settlement of Accounts Under Section 48 of the Partnership Act",
      children: [
        { id: "assets-losses-distribution", title: "How Assets and Losses are Distributed Upon Dispute or Dissolution" }
      ]
    },
    { id: "dispute-vs-money-recovery", title: "Partnership Dispute Resolution vs. Traditional Money Recovery" },
    { id: "step-by-step-roadmap", title: "The Step-by-Step Roadmap to Serve a Notice to a Partner" },
    { id: "prerequisites-evidence", title: "Prerequisites and Evidence Needed to Recover Capital" },
    { id: "case-studies-reviews", title: "Partnership Recovery Case Studies and Success Stories" },
    { id: "frequently-asked-questions", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Legal Notice to Partner for Recovery of Capital & Dues", href: "/legal-notice-to-partner-for-recovery-of-dues" }
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <main className="bg-[#F8F9FB] min-h-screen font-sans text-slate-800 text-left">
        
        {/* Banner with dark background #111827 and Red accent */}
        <header className="relative bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#020617] text-white overflow-hidden py-24 md:py-44 border-b border-slate-900">
          <div className="absolute inset-0 bg-black opacity-40 z-10" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-15 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[100px]" />
          
          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              Partnership Law Guide
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
              Legal Notice to Partner: <span className="text-[#DC2626]">Recover Capital &amp; Dues</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              A comprehensive roadmap on how to serve a legal notice to partner for recovery of money, settle firm accounts under Section 48, and resolve LLP disputes.
            </p>
          </div>
        </header>

        <div className="container mx-auto px-4 max-w-8xl py-10">
          {/* Breadcrumbs Navigation */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <Breadcrumbs items={breadcrumbItems} />
          </nav>
          
          {/* 3-Column Layout: TOC, Content, Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start mt-6">
            
            {/* Left Column Sticky TOC */}
            <nav className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 scrollbar-hide" aria-label="Table of Contents">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </nav>

            {/* Middle Column Main Content */}
            <article className="min-w-0 bg-white p-6 md:p-12 rounded-3xl shadow-sm space-y-12 border border-slate-100">
              
              {/* Introduction */}
              <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                <p className="text-sm md:text-lg leading-relaxed font-semibold text-slate-900 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  When business partners or directors in a partnership firm or LLP experience a dispute, capital or profit shares are often frozen. Standard debt recovery guides do not cover the Indian Partnership Act or LLP Act rules on the settlement of accounts. This page provides a roadmap on how to serve a legal notice demanding a settlement of accounts under Section 48 of the Partnership Act.
                </p>

                <p className="text-sm md:text-base leading-relaxed">
                  In India, partnership firms and Limited Liability Partnerships (LLPs) represent the backbone of co-owned commercial ventures. However, when relations sour between partners, the division of assets, profit distribution, and capital withdrawal become highly contentious. A common mistake is attempting to recover outstanding capital using standard third-party commercial debt procedures. Under Indian law, the assets of a partnership belong to the firm, not to individual partners, making direct recovery actions complex. If a partner wants to reclaim their frozen capital, they must initiate a formal settlement process. This starts by serving a detailed notice to the other partners.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed">
                  Unlike typical debt recovery disputes, partnership conflicts require a deep understanding of corporate law, the Indian Partnership Act of 1932, and the Limited Liability Partnership Act of 2008. If a third-party debtor owes you money, you would serve a standard <Link href="/legal-notice-for-recovery-of-money" className="text-[#DC2626] hover:underline font-medium">legal notice for recovery of money</Link>. However, when dealing with a co-owner, you must demand a formal settlement of accounts. This guide provides a strategic roadmap on how to structure this demand, gather key bank ledgers, and protect your financial interests during firm disputes.
                </p>
              </div>

              {/* Section 1: Understanding Partnership and LLP Disputes */}
              <section id="partnership-llp-disputes" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Understanding Partnership and LLP Disputes in India
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Partnership and LLP disputes are unique commercial conflicts. In a traditional supplier-buyer relationship, the debt is direct, quantified, and backed by purchase orders and unpaid invoices. In a partnership, the capital contribution of each partner, the accumulated profits, and the liabilities are mixed. When disputes occur, one partner often locks the firm's bank accounts, denies the other partner access to the office, or stops sharing the financial statements.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    This leaves the excluded partner in a difficult position. They cannot simply withdraw their capital because the bank will not permit single-signature transactions on a joint firm account. They cannot sell their share of the firm's assets without the consent of all other partners. Therefore, the excluded partner's capital remains frozen, while the remaining partners continue to operate the business and use the capital to generate profits without sharing them.
                  </p>

                  <h3 id="frozen-capital-profit" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    Frozen Capital, Profit Shares, and the Cause of Action
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    The cause of action for a partnership dispute arises when there is a clear breach of the partnership deed. This includes a refusal to share profits, unauthorized diversion of funds, exclusion from business management, or refusal to settle accounts upon retirement or dissolution. The moment a partner commits any of these acts, the aggrieved partner's right to seek legal recourse is triggered.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    The primary goal of the legal notice is to document this cause of action. The notice must specify the exact dates when the breach occurred, the amounts of capital contributed, the agreed profit-sharing ratios, and the specific actions of the defaulting partner that led to the dispute. This documentation is critical because if the matter escalates to court, the judge will analyze the initial notice to determine if the dispute is a genuine commercial conflict or a minor disagreement.
                  </p>

                  <h3 id="statutory-mandate-acts" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    The Statutory Mandate: Indian Partnership Act vs. LLP Act, 2008
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    It is crucial to distinguish between a traditional partnership firm and a Limited Liability Partnership (LLP). A traditional partnership is governed by the Indian Partnership Act, 1932. Under this Act, a partnership is not recognized as a separate legal entity distinct from its partners. The partners have unlimited liability, meaning their personal properties can be attached to satisfy the debts of the firm. If a partner defaults, all partners are jointly and severally liable.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    In contrast, an LLP is a body corporate and a separate legal entity, governed by the Limited Liability Partnership Act, 2008. An LLP has perpetual succession and a common seal. The liability of the partners is limited to their agreed contribution in the LLP agreement. In an LLP dispute, you cannot attach the personal assets of the other partners to recover your capital, unless there is clear proof of fraud or criminal activity. The recovery process must target the assets of the LLP itself, following the procedures outlined in the LLP agreement filed with the MCA.
                  </p>
                </div>
              </section>

              {/* Section 2: Settlement of Accounts Under Section 48 */}
              <section id="section-48-settlement" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Settlement of Accounts Under Section 48 of the Partnership Act
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Section 48 of the Indian Partnership Act, 1932, is the key statutory provision that governs the settlement of accounts. When a partnership is dissolved, the accounts of the firm must be settled following a strict statutory sequence. Partners cannot mutually agree to bypass this sequence if it affects external creditors or statutory liabilities.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    The legal notice served to the partner must reference Section 48 and demand compliance with its provisions. The notice must call upon the defaulting partner to prepare a full balance sheet, pay off all external liabilities, and distribute the remaining assets and capital according to the statutory order of priority.
                  </p>

                  <h3 id="assets-losses-distribution" className="text-lg md:text-xl font-bold text-slate-900 mt-8 mb-3 scroll-mt-32">
                    How Assets and Losses are Distributed Upon Dispute or Dissolution
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    Under Section 48, the distribution of assets and payment of losses follow these rules:
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    First, losses of the firm, including deficiencies of capital, must be paid out. The payment sequence is: (a) out of the accumulated profits of the firm, (b) out of the partners' capital contributions, and (c) if necessary, by the partners individually in the proportion in which they were entitled to share profits.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Second, the assets of the firm, including any sums contributed by the partners to make up deficiencies of capital, must be applied in the following order:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
                    <li>In paying the debts of the firm to third parties (external creditors, tax liabilities, bank loans).</li>
                    <li>In paying to each partner rateably what is due to him from the firm for advances or loans as distinguished from capital.</li>
                    <li>In paying to each partner rateably what is due to him on account of capital.</li>
                    <li>The residue, if any, shall be divided among the partners in the proportion in which they were entitled to share profits.</li>
                  </ul>
                  <p className="text-sm md:text-base leading-relaxed">
                    This sequence ensures that partners cannot withdraw their capital before clearing external debts. When serving a legal notice to partner for recovery of money, you must demand that the assets be applied in this exact sequence to ensure your capital return is legally valid and protected from creditor challenges.
                  </p>
                </div>
              </section>

              {/* Section 3: Partnership Dispute vs. Traditional Recovery */}
              <section id="dispute-vs-money-recovery" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Partnership Dispute Resolution vs. Traditional Money Recovery
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    Resolving a partnership conflict differs significantly from recovering standard commercial debts. Understanding these differences prevents procedural errors that can lead to court dismissals.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    In a standard commercial debt, the creditor can file a civil suit for recovery or initiate summary proceedings. If a partner attempts to file a standard recovery suit against another partner, the court will likely reject it. The court will hold that the dispute is a partnership matter that must be resolved through a suit for dissolution and accounts. If the firm is unregistered, Section 69 of the Partnership Act bars any partner from filing a suit to enforce a right arising from a contract against the firm or other partners, unless the suit is for the dissolution of the firm or the settlement of accounts of a dissolved firm.
                  </p>

                  {/* Comparison Table */}
                  <div className="overflow-x-auto my-8 border border-slate-200 rounded-2xl shadow-sm">
                    <table className="min-w-full divide-y divide-slate-200">
                      <thead className="bg-slate-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Comparison Metric</th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Partnership Account Settlement</th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Standard Money Recovery</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-slate-200 text-sm text-slate-650">
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Governing Law</td>
                          <td className="px-6 py-4">Indian Partnership Act, 1932 / LLP Act, 2008</td>
                          <td className="px-6 py-4">Code of Civil Procedure, 1908 / Contract Act</td>
                        </tr>
                          <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Right to Sue</td>
                          <td className="px-6 py-4">Restricted (requires dissolution or account settlement)</td>
                          <td className="px-6 py-4">Unrestricted (direct cause of action on debt default)</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Unregistered Firm Status</td>
                          <td className="px-6 py-4">Barred from enforcing contract rights (Section 69 exceptions apply)</td>
                          <td className="px-6 py-4">No registration restrictions on individual recovery claims</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Resolution Venue</td>
                          <td className="px-6 py-4">Arbitration Council or Civil Court for dissolution</td>
                          <td className="px-6 py-4">Civil Court or summary suit proceedings</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-slate-900">Remedy Type</td>
                          <td className="px-6 py-4">Division of assets, settlement, and accounts rendition</td>
                          <td className="px-6 py-4">Direct decree for principal plus interest recovery</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-sm md:text-base leading-relaxed">
                    This comparison highlights why you cannot treat a partner dispute as a simple unpaid bill. You must frame the dispute as a demand for account settlement. If your partner has locked the bank accounts, your legal notice must demand a rendition of accounts. If they ignore the notice, your next step is a suit for dissolution or invoking the arbitration clause, rather than filing a standard <Link href="/civil-suit-for-recovery-of-money-india" className="text-[#DC2626] hover:underline font-medium">civil suit for recovery of money India</Link>.
                  </p>
                </div>
              </section>

              {/* Section 4: Process Map */}
              <section id="step-by-step-roadmap" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  The Step-by-Step Roadmap to Serve a Notice to a Partner
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    To recover capital and settle accounts, you must follow a structured, legally sound process. Here is the step-by-step roadmap:
                  </p>

                  {/* Process Map Steps */}
                  <div className="mt-8 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#DC2626] before:via-slate-300 before:to-transparent">
                    
                    {/* Step 1 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        1
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Step 1: Document Audit</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          Locate and audit the signed partnership deed or LLP agreement. Check for clauses related to capital contribution, profit sharing, bank operations, dissolution, and arbitration. Verify if the deed is registered with the Registrar of Firms.
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        2
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Step 2: Financial Evidence Assembly</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          Gather bank transaction records showing your initial capital contribution, profit payouts, and any loans advanced to the firm. Obtain the latest available balance sheets, ledger accounts, and tax filing records to build a solid financial trail.
                        </p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        3
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Step 3: Notice Drafting</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          Instruct an advocate to draft the legal notice to partner for recovery of money and capital. The notice must demand a rendition of accounts within 15 days, reference Section 48, and state that failure to comply will lead to dissolution proceedings or arbitration.
                        </p>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        4
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Step 4: Formal Dispatch</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          Send the notice via Registered Post with Acknowledgment Due (RPAD) and speed post to the residential addresses of all partners and the registered office of the firm. Keep the digital tracking receipts and physical acknowledgment cards as proof of service.
                        </p>
                      </div>
                    </div>

                    {/* Step 5 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#DC2626] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        5
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl shadow-sm border border-slate-100 group-hover:border-[#DC2626]/30 transition-colors">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Step 5: Escalation</h3>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          If the partner ignores the notice, file a petition under Section 9 of the Arbitration Act for interim protection (to freeze bank accounts) or file a civil suit for dissolution and accounts before the limitation period expires. Keep in mind the strict <Link href="/time-limit-to-file-money-recovery-case-india" className="text-[#DC2626] hover:underline font-medium">time limit to file a money recovery case in India</Link> to ensure your claims remain valid.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              {/* Section 5: Prerequisites and Evidence Checklist */}
              <section id="prerequisites-evidence" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Prerequisites and Evidence Needed to Recover Capital
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    To build a strong case against a defaulting partner, you must compile an airtight evidence bundle. The burden of proof lies on the claiming partner to demonstrate the exact amount of capital introduced and the extent of their share in the firm's assets.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    Even in the absence of a written deed, you can recover capital by proving the existence of the partnership through other evidence. Under Indian law, a verbal partnership agreement is valid, though harder to prove. You can read about <Link href="/how-to-recover-money-without-written-agreement" className="text-[#DC2626] hover:underline font-medium">how to recover money without written agreement</Link> to understand the alternative evidence acceptable in court.
                  </p>

                  {/* Checklist */}
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6">
                    <h3 className="font-bold text-slate-900 text-lg mb-4">Partnership Capital Recovery Evidence Checklist</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Partnership Deed or LLP Agreement:</strong> The primary document showing the terms of the association, capital commitments, and dispute resolution clauses.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Bank Accounts Ledgers:</strong> Certified copies of bank statements showing the transfer of capital from your personal account to the firm's account.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Income Tax Returns (ITRs):</strong> The firm's tax filings and your personal tax returns showing the capital balance and profit distributions.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Written Communications:</strong> Emails, letters, or WhatsApp messages where the partners discussed profit sharing, capital accounts, or business operations.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-600 mt-0.5 font-bold">✓</span>
                        <span className="text-sm text-slate-700">
                          <strong>Registrar Records:</strong> Entry details in the Registrar of Firms database or MCA portal filings for LLPs, confirming your status as an active partner.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 6: Case Studies and Reviews */}
              <section id="case-studies-reviews" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Partnership Recovery Case Studies and Success Stories
                </h2>
                <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                  <p className="text-sm md:text-base leading-relaxed">
                    These real-world case studies demonstrate how structured notices and Section 48 demands resolve partnership and LLP disputes:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    {reviews.map((review, idx) => (
                      <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
                        <div>
                          <div className="flex items-center text-yellow-400 mb-3">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <p className="text-xs md:text-sm text-slate-650 leading-relaxed italic">&quot;{review.text}&quot;</p>
                        </div>
                        <div className="mt-4 pt-4 border-t border-slate-200">
                          <p className="font-bold text-slate-900 text-xs md:text-sm">{review.author}</p>
                          <p className="text-[10px] text-slate-500">Verified Case</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 7: FAQs */}
              <section id="frequently-asked-questions" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => {
                    const isOpen = expandedFaqs.includes(`faq-${index}`);
                    return (
                      <div key={index} className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm transition-all duration-300">
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full text-left px-5 py-4 flex justify-between items-center focus:outline-none hover:bg-slate-50 transition-colors"
                          aria-expanded={isOpen}
                        >
                          <h3 className="font-bold text-sm md:text-base text-slate-800 pr-4">{faq.question}</h3>
                          <span className={`transform transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-[#DC2626]' : 'text-slate-400'}`}>
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </button>
                        <div 
                          className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                          <p className="text-xs md:text-sm text-slate-650 leading-relaxed pt-2 border-t border-slate-100">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

            </article>

            {/* Right Column Sidebar with Requested Advice Card */}
            <aside className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pl-2 scrollbar-hide">
              <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-slate-800 relative overflow-hidden text-left">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-lg font-bold mb-3 text-white">Need Legal Advice?</h3>
                <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                  Discuss your money recovery case with legal experts. We draft and serve legally compliant notices tailored to your transaction.
                </p>
                <button 
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="block w-full bg-[#DC2626] text-white text-center py-3 rounded-xl text-xs font-bold hover:bg-[#B91C1C] transition-colors mb-3 cursor-pointer"
                >
                  Start Recovery Now
                </button>
              </div>
            </aside>

          </div>
        </div>

        {/* Modal for initiating payment/advice */}
        <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
      </main>
    </>
  );
}
