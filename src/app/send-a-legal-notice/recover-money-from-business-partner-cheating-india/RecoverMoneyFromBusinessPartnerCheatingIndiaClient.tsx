'use client';

import { useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import { PaymentModal } from '@/components/PaymentModal';

/* ─── FAQ DATA ──────────────────────────────────────────────────────────── */
const faqs = [
  {
    question: 'Can I send a legal notice to my business partner for recovery of siphoned money or unpaid profit share in India?',
    answer:
      'Yes, an aggrieved co-founder, partner, or shareholder can serve an advocate-vetted statutory legal notice to a defaulting or fraudulent business partner under Section 9, Section 10, and Section 13 of the Indian Partnership Act, 1932, or the Limited Liability Partnership Act, 2008, demanding the restitution of misappropriated capital, unpaid profit shares, or diverted corporate revenue within a strict 15-day compliance window. A statutory notice establishes a binding legal record of the partner\'s fiduciary breach, quantifies the exact financial liability with contractual interest, and serves as an indispensable prerequisite before initiating summary recovery suits under Order 37 CPC, commercial court litigation, or criminal prosecution under the Bharatiya Nyaya Sanhita, 2023.',
  },
  {
    question: 'What is the limitation period for recovering money and filing a suit against a cheating business partner in India?',
    answer:
      'Under Article 5, Article 47, and Article 113 of the Schedule to the Limitation Act, 1963, the statutory limitation period for instituting a civil recovery suit, rendition of accounts, or commercial dissolution claim against a business partner is three years from the date of the alleged financial breach, dissolution of the partnership, or when the fraudulent diversion was first discovered by the claimant. Serving a formal legal demand notice well within this three-year period interrupts informal delays, while any written acknowledgment of debt or email admission from the defaulting partner resets the limitation clock under Section 18 of the Limitation Act.',
  },
  {
    question: 'Can I file both a civil recovery suit and a criminal case against a business partner who cheated me?',
    answer:
      'Indian jurisprudence permits simultaneous civil and criminal proceedings against a fraudulent business partner where the underlying facts establish both a commercial monetary default and criminal intent. As upheld by the Supreme Court of India in landmark precedents including S.W. Palanitkar v. State of Bihar and Trisuns Chemical Industry v. Rajesh Agarwal, an aggrieved partner can file a civil recovery suit under Order 37 of the CPC or Commercial Courts Act alongside a criminal complaint under Section 316 (Criminal Breach of Trust) and Section 318 (Cheating) of the Bharatiya Nyaya Sanhita, 2023. The civil action secures monetary decrees and asset attachments, while the criminal proceeding prosecutes dishonest misappropriation, fraudulent ledger alterations, and dishonest inducement.',
  },
  {
    question: 'Can I freeze the personal bank accounts or attach the property of a fraudulent partner before judgment?',
    answer:
      'An aggrieved business partner can petition the competent civil or commercial court under Order 38 Rule 5 of the Code of Civil Procedure, 1908 for Pre-Judgment Attachment of the defaulting partner\'s personal bank accounts, real estate, and movable assets if there is credible apprehension that the defendant is attempting to dispose of or conceal property to defeat a future decree. In disputes governed by an arbitration clause, the claimant can file an urgent application under Section 9 of the Arbitration and Conciliation Act, 1996 before the High Court or Principal Commercial Court to obtain ex-parte interim injunctions, asset freezes, and the appointment of an independent receiver over disputed partnership assets.',
  },
  {
    question: 'How can I recover money if my partnership firm was unregistered under Section 69 of the Indian Partnership Act?',
    answer:
      'Although Section 69(2) of the Indian Partnership Act, 1932 bars an unregistered firm from instituting a civil suit against third-party debtors, Section 69(3)(a) explicitly creates an exception allowing any partner of an unregistered firm to institute legal proceedings for the dissolution of the firm, rendition of accounts, and realization of the property of the dissolved firm. Furthermore, the procedural bar under Section 69 does not apply to criminal complaints for cheating or criminal breach of trust under the Bharatiya Nyaya Sanhita, 2023, nor does it preclude insolvency petitions or statutory demand notices seeking mutual settlement of misappropriated equity.',
  },
  {
    question: 'What evidence is required before serving a legal notice for recovery of money to a business partner?',
    answer:
      'Prior to issuing a formal legal notice, the claimant must consolidate the registered partnership deed or LLP agreement, certified bank statements highlighting unauthorized withdrawals, forensic accounting reports, audit sheets, GST reconciliation statements, and MCA filings. Additionally, electronic evidence including emails, WhatsApp conversations, board meeting minutes, and financial ledgers must be preserved in compliance with Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 to ensure total legal admissibility during subsequent commercial litigation.',
  },
];

/* ─── JSON-LD SCHEMA (@graph) ──────────────────────────────────────────── */
const pageUrl =
  'https://legalrecovery.in/send-a-legal-notice/recover-money-from-business-partner-cheating-india';
const ogImage =
  'https://legalrecovery.in/images/og/recover-money-from-business-partner-cheating-india.jpg';

const reviewBodyText =
  'My business partner in our Pune-based engineering logistics enterprise secretly diverted ₹36.8 Lakhs of corporate receivables into an undeclared proprietary firm and falsified internal ledger accounts over an eight-month period. Legal Recovery drafted and served a formidable advocate-vetted statutory legal notice detailing the forensic audit trail, citing Sections 9, 10, and 13 of the Indian Partnership Act, 1932, Section 73 of the Contract Act, and criminal breach of trust under Bharatiya Nyaya Sanhita. Within 14 days of receiving the legal notice, my partner engaged legal counsel, signed a forensic financial settlement, and remitted the full ₹36.8 Lakhs with 18% interest to prevent commercial court litigation and asset attachment. Flawless legal precision.';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    /* 1. Article */
    {
      '@type': 'Article',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': pageUrl,
      },
      headline:
        'Legal Notice to Business Partner for Recovery of Money | Cheating & Fraud India',
      image: [ogImage],
      author: {
        '@type': 'Person',
        name: 'Advocate Aman Chawla',
        url: 'https://legalrecovery.in/authors/advocate-aman-chawla',
      },
      reviewedBy: {
        '@type': 'Person',
        name: 'Advocate Sneha Sharma',
        url: 'https://legalrecovery.in/authors/advocate-sneha-sharma',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Legal Recovery',
        logo: {
          '@type': 'ImageObject',
          url: 'https://legalrecovery.in/icon.png',
        },
      },
      datePublished: '2024-08-15T08:00:00+05:30',
      dateModified: new Date().toISOString(),
    },

    /* 2. WebPage with SpeakableSpecification */
    {
      '@type': 'WebPage',
      '@id': pageUrl,
      name: 'Legal Notice to Business Partner for Recovery of Money | Cheating & Fraud India',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '#quick-answer'],
      },
    },

    /* 3. Organization */
    {
      '@type': 'Organization',
      name: 'Legal Recovery',
      url: 'https://legalrecovery.in',
      sameAs: [
        'https://www.linkedin.com/company/legal-recovery-india',
        'https://twitter.com/legalrecoveryin',
      ],
    },

    /* 4. BreadcrumbList */
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://legalrecovery.in/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Send a Legal Notice',
          item: 'https://legalrecovery.in/send-a-legal-notice',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Legal Notice to Business Partner for Recovery of Money',
          item: pageUrl,
        },
      ],
    },

    /* 5. FAQPage */
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },

    /* 6. ItemList – Step-by-step process */
    {
      '@type': 'ItemList',
      name: 'Step-by-Step Legal Recovery Process Against a Fraudulent Business Partner in India',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Conduct Forensic Financial Audit & Consolidate Banking and Accounting Records',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Quantify Misappropriated Capital, Diverted Client Invoices, and Accrued 18-24% Interest',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Draft an Advocate-Vetted Statutory Demand Notice Citing Partnership Act, Contract Act & BNS 2023',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Serve the Notice via India Post Registered AD, Speed Post, and Verified Digital Channels',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Initiate Order 37 Summary Suit, Section 9 Arbitration Injunction, or Criminal Complaint on Default',
        },
      ],
    },

    /* 7. Product + AggregateRating + Review (matches sidebar UI word-for-word) */
    {
      '@type': 'Product',
      name: 'Legal Notice to Business Partner for Recovery of Money & Fraud Recovery',
      description:
        'Advocate-drafted statutory demand notice service for business partners, startup co-founders, LLP partners, and corporate directors to recover siphoned capital, unpaid profit shares, and misappropriated business funds across India.',
      brand: {
        '@type': 'Organization',
        name: 'Legal Recovery',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '312',
      },
      review: [
        {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
          },
          author: {
            '@type': 'Person',
            name: 'Raghavendra K. Singhal',
          },
          reviewBody: reviewBodyText,
        },
      ],
    },
  ],
};

/* ─── COMPONENT ─────────────────────────────────────────────────────────── */
export default function RecoverMoneyFromBusinessPartnerCheatingIndiaClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: 'statutory-framework', title: '1. Statutory Framework: Partnership & Commercial Laws' },
    { id: 'actionable-grounds', title: '2. Actionable Grounds: Siphoning, Secret Profits & Breach' },
    { id: 'dual-remedy-architecture', title: '3. Dual Remedy: Civil Recovery vs. Criminal Prosecution' },
    { id: 'evidentiary-audit', title: '4. Forensic Pre-Notice Audit & Evidentiary Checklist' },
    { id: 'mandatory-clauses', title: '5. Key Clauses in a Statutory Demand Notice to Partner' },
    { id: 'step-by-step-recovery', title: '6. Step-by-Step Strategic Roadmap: Notice to Enforcement' },
    { id: 'faqs', title: '7. Frequently Asked Questions' },
  ];

  const breadcrumbItems = [
    { label: 'Send a Legal Notice', href: '/send-a-legal-notice' },
    {
      label: 'Recover Money from Business Partner Cheating',
      href: '/send-a-legal-notice/recover-money-from-business-partner-cheating-india',
    },
  ];

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const shareUrl = encodeURIComponent(pageUrl);
  const shareText = encodeURIComponent(
    'Business partner siphoned capital or cheated on partnership dues? Send an advocate-vetted statutory legal notice for rapid recovery in India! #LegalNotice #BusinessFraud #DebtRecovery'
  );

  return (
    <>
      <Script
        id="page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-[#F8F9FB] min-h-screen font-sans text-slate-800 text-left pt-20 md:pt-24">

        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <div className="relative bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#020617] text-white overflow-hidden py-24 md:py-44 border-b border-slate-900">
          <div className="absolute inset-0 bg-black opacity-40 z-10" />
          {/* Ambient Red Glows */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-15 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[100px]" />

          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              COMMERCIAL FRAUD &amp; PARTNERSHIP ASSET RECOVERY
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Legal Notice to Business Partner for{' '}
              <span className="text-[#DC2626]">Recovery of Money</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Recover siphoned partnership capital, withheld profit shares, secret personal diversions, and fraudulent business debts under the Indian Partnership Act, Contract Act, Commercial Courts Act, and Bharatiya Nyaya Sanhita.
            </p>
            <button
              onClick={() => setIsPaymentModalOpen(true)}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-4 px-10 md:py-5 md:px-14 rounded-xl transition-all transform hover:scale-[1.02] active:scale-100 shadow-xl shadow-red-950/20 text-sm md:text-lg cursor-pointer"
            >
              Draft &amp; Send Legal Notice
            </button>
          </div>
        </div>

        {/* ── ACHIEVEMENTS BANNER ───────────────────────────────────────── */}
        <div className="bg-white border-b border-slate-200 py-6 relative z-30 shadow-sm">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x divide-slate-100">
              <div className="px-2">
                <div className="text-xl md:text-2xl font-black text-slate-900 mb-1">100CR+</div>
                <div className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider">
                  Amount Recovered
                </div>
              </div>
              <div className="px-2">
                <div className="text-xl md:text-2xl font-black text-slate-900 mb-1">10,000+</div>
                <div className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider">
                  Cases Handled
                </div>
              </div>
              <div className="px-2">
                <div className="flex justify-center items-center gap-1.5 mb-1">
                  <span className="text-xl md:text-2xl font-black text-slate-900">4.7</span>
                  <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </div>
                <div className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider">
                  Google Rating
                </div>
              </div>
              <div className="px-2">
                <div className="text-xl md:text-2xl font-black text-slate-900 mb-1">15,000+</div>
                <div className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider">
                  Customers Counselled
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── MAIN 3-COL LAYOUT ─────────────────────────────────────────── */}
        <div className="w-full max-w-8xl mx-auto px-4 py-10">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_280px] xl:grid-cols-[280px_1fr_300px] gap-8 xl:gap-10 items-start mt-6">

            {/* ── LEFT SIDEBAR – TOC (Desktop) ─────────────────────────── */}
            <div className="hidden lg:block sticky top-28 max-h-[calc(100vh-140px)] overflow-y-auto pr-2 scrollbar-hide">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </div>

            {/* ── ARTICLE BODY ─────────────────────────────────────────── */}
            <div className="min-w-0">
              {/* TOC (Mobile) */}
              <div className="lg:hidden mb-6 sticky top-20 z-10 scale-90 origin-top">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-6 md:p-12 rounded-3xl shadow-sm space-y-12 border border-slate-100">

                {/* Meta & Share */}
                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-100 pb-4 gap-4">
                  <div className="flex flex-wrap items-center text-xs sm:text-sm text-slate-500 gap-3">
                    <span>
                      Written by{' '}
                      <Link
                        href="/authors/advocate-aman-chawla"
                        className="font-semibold text-[#DC2626] hover:underline"
                      >
                        Advocate Aman Chawla
                      </Link>
                    </span>
                    <span className="hidden sm:inline">•</span>
                    <span>
                      Reviewed by{' '}
                      <Link
                        href="/authors/advocate-sneha-sharma"
                        className="font-semibold text-[#DC2626] hover:underline"
                      >
                        Advocate Sneha Sharma
                      </Link>
                    </span>
                    <span className="hidden sm:inline">•</span>
                    <span>Last updated: {currentDate}</span>
                  </div>
                  {/* Social Share Buttons (Native Brand Colors) */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2">
                      Share:
                    </span>
                    <button
                      type="button"
                      onClick={() => window.open(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`, '_blank', 'noopener,noreferrer')}
                      className="w-8 h-8 rounded-full bg-black text-white hover:opacity-80 flex items-center justify-center transition-opacity cursor-pointer"
                      aria-label="Share on X (Twitter)"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank', 'noopener,noreferrer')}
                      className="w-8 h-8 rounded-full bg-[#1877F2] text-white hover:opacity-80 flex items-center justify-center transition-opacity cursor-pointer"
                      aria-label="Share on Facebook"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01z" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${encodeURIComponent('Legal Notice to Business Partner for Recovery of Money | Legal Recovery India')}`, '_blank', 'noopener,noreferrer')}
                      className="w-8 h-8 rounded-full bg-[#0A66C2] text-white hover:opacity-80 flex items-center justify-center transition-opacity cursor-pointer"
                      aria-label="Share on LinkedIn"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* ── QUICK ANSWER ──────────────────────────────────────── */}
                <div id="quick-answer" className="bg-slate-50 border-l-4 border-[#DC2626] p-6 rounded-r-2xl">
                  <h2 className="text-sm font-extrabold text-slate-900 mb-2 uppercase tracking-wide">
                    Quick Answer
                  </h2>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                    An aggrieved co-founder, partner, or commercial shareholder can serve an advocate-vetted statutory legal demand notice to a fraudulent business partner under{' '}
                    <span className="font-semibold text-slate-800">
                      Sections 9, 10, and 13 of the Indian Partnership Act, 1932
                    </span>{' '}
                    and{' '}
                    <span className="font-semibold text-slate-800">
                      Section 73 of the Indian Contract Act, 1872
                    </span>
                    , demanding full restitution of siphoned capital, diverted client receivables, or withheld profit shares within 15 calendar days. If the defaulting partner fails to comply within the statutory 15-day notice window, the claimant can initiate summary recovery under{' '}
                    <span className="font-semibold text-slate-800">
                      Order 37 of the Code of Civil Procedure, 1908
                    </span>
                    , obtain pre-judgment attachment of personal assets under Order 38 Rule 5, trigger mandatory mediation under{' '}
                    <span className="font-semibold text-slate-800">
                      Section 12A of the Commercial Courts Act, 2015
                    </span>
                    , or file a criminal complaint for cheating and criminal breach of trust under Section 316 and Section 318 of the Bharatiya Nyaya Sanhita, 2023.
                  </p>
                </div>

                {/* ── IN-ARTICLE INFOGRAPHIC ────────────────────────────── */}
                <figure className="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900">
                  <img
                    src="/images/og/recover-money-from-business-partner-cheating-india.jpg"
                    alt="Infographic: Step-by-Step Legal Process for Recovering Money from a Cheating Business Partner in India"
                    className="w-full h-auto object-cover max-h-[500px]"
                    loading="lazy"
                  />
                  <figcaption className="p-3.5 text-center text-xs text-slate-650 font-semibold bg-white border-t border-slate-100 flex items-center justify-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#DC2626]" />
                    <span>Figure 1: Comprehensive Statutory Roadmap for Recovering Siphoned Funds and Partnership Dues under Indian Partnership Act, Contract Act, CPC Order 37 &amp; Bharatiya Nyaya Sanhita.</span>
                  </figcaption>
                </figure>

                {/* ── SECTION 1: STATUTORY FRAMEWORK ────────────────────── */}
                <section id="statutory-framework" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. Statutory Framework: Partnership &amp; Commercial Laws on Fraud
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Commercial co-ventures, partnership firms, Limited Liability Partnerships (LLPs), and private limited startups operate on a foundational standard of absolute fiduciary trust (<em>uberrimae fidei</em>). When one partner acts in bad faith by siphoning working capital, establishing undisclosed competing entities, withholding legitimate profit distributions, or altering statutory financial books, Indian law provides stringent civil, commercial, and criminal enforcement mechanisms to recover the misappropriated funds.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The primary substantive legislation regulating rights, duties, and financial liabilities among business partners is the{' '}
                      <span className="font-semibold text-slate-800">
                        Indian Partnership Act, 1932 (IPA)
                      </span>
                      , reinforced by the{' '}
                      <span className="font-semibold text-slate-800">
                        Indian Contract Act, 1872
                      </span>
                      . Crucial statutory provisions include:
                    </p>

                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                      <ul className="space-y-3 text-xs sm:text-sm text-slate-700 list-disc list-inside">
                        <li>
                          <strong>Section 9 of the Indian Partnership Act, 1932 (General Duties of Partners):</strong> Partners are statutorily bound to carry on the business of the firm to the greatest common advantage, to be just and faithful to each other, and to render true accounts and full information of all things affecting the firm to any partner or their legal representative.
                        </li>
                        <li>
                          <strong>Section 10 of the Indian Partnership Act, 1932 (Duty to Indemnify for Fraud):</strong> Every partner is legally mandated to indemnify the firm and all other partners for any loss caused to it by their fraud in the conduct of the business of the firm. Liability under Section 10 is absolute and cannot be excluded even by an express contractual clause in the partnership deed.
                        </li>
                        <li>
                          <strong>Section 13(f) of the Indian Partnership Act, 1932 (Indemnification for Willful Neglect):</strong> A partner must indemnify the firm for any financial loss caused to it by their willful neglect in the conduct of the firm&apos;s business transactions.
                        </li>
                        <li>
                          <strong>Section 16 of the Indian Partnership Act, 1932 (Personal Profits Earned by Partners):</strong> If a partner derives any private profit for themselves from any transaction of the firm, or from the use of the property or business connection of the firm or the firm name, they are legally bound to account for that profit and pay it over to the firm. Similarly, running a competing business without co-partner consent obligates full handover of all earned profits.
                        </li>
                        <li>
                          <strong>Section 73 &amp; 74 of the Indian Contract Act, 1872:</strong> Entitles the non-defaulting partners to claim liquidated damages, restitution of capital, and commercial interest for contractual repudiation and material breach of partnership covenants.
                        </li>
                      </ul>
                    </div>

                    <p className="text-sm md:text-base leading-relaxed">
                      For registered corporate structures like Limited Liability Partnerships governed under the{' '}
                      <span className="font-semibold text-slate-800">
                        Limited Liability Partnership Act, 2008
                      </span>{' '}
                      or Private Limited Companies governed under the{' '}
                      <span className="font-semibold text-slate-800">
                        Companies Act, 2013
                      </span>
                      , directors and designated partners who divert corporate assets are liable for statutory disqualification, personal indemnity, and criminal prosecution for corporate fraud under Section 447 of the Companies Act, 2013, which prescribes mandatory imprisonment from 6 months up to 10 years and fines extending up to three times the quantum of fraud.
                    </p>
                  </div>
                </section>

                {/* ── SECTION 2: ACTIONABLE GROUNDS ─────────────────────── */}
                <section id="actionable-grounds" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. Actionable Grounds: Siphoning, Secret Profits &amp; Breach of Duty
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Serving an advocate-vetted legal notice requires precise legal framing of the defaulting partner&apos;s actionable violations. Indian commercial courts and arbitral tribunals consistently recognize specific commercial misconduct as actionable grounds for summary debt recovery, mandatory injunctions, and criminal prosecution:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                      <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                        <div className="flex items-center gap-2 mb-2 font-black text-slate-900 text-sm">
                          <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">1</span>
                          Siphoning Capital to Personal Accounts
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          Unilateral transfers of partnership funds, client retainers, or credit line disbursements into personal savings accounts, shell entities, or family members&apos; bank accounts without board authorization or co-partner consent.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                        <div className="flex items-center gap-2 mb-2 font-black text-slate-900 text-sm">
                          <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">2</span>
                          Redirection of Business to Secret Competitors
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          Establishing an undisclosed parallel firm, proprietary venture, or sister company to divert incoming customer contracts, intellectual property, supplier discounts, and client revenue in direct violation of Section 16(b) of the IPA.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                        <div className="flex items-center gap-2 mb-2 font-black text-slate-900 text-sm">
                          <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">3</span>
                          Falsification of Financial Accounts &amp; GST Books
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          Manufacturing bogus vendor invoices, inflating operating expenses, creating fake debit notes, or manipulating audited balance sheets and GST returns to artificially depress net profits and withhold legitimate dividend distributions.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                        <div className="flex items-center gap-2 mb-2 font-black text-slate-900 text-sm">
                          <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">4</span>
                          Denial of Books Access &amp; Profit Suppression
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          Unlawfully revoking digital ERP credentials, locking accounting software access (Tally, Zoho Books, SAP), withholding statutory bank statements, and refusing to render true accounts under Section 12(d) of the IPA.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                        <div className="flex items-center gap-2 mb-2 font-black text-slate-900 text-sm">
                          <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">5</span>
                          Unauthorized Asset Encumbrance &amp; Personal Loans
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          Pledging company machinery, intellectual property, inventory, or real estate assets as collateral for personal borrowings without the written consent of all partners, exposing the firm to debt recovery recovery actions.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                        <div className="flex items-center gap-2 mb-2 font-black text-slate-900 text-sm">
                          <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">6</span>
                          Unilateral Hostile Takeover &amp; Partner Exclusion
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          Physically locking out co-founders from corporate premises, altering signatory mandates at commercial banks without notice, and issuing false communication to clients claiming partner retirement or termination.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 3: DUAL REMEDY ARCHITECTURE ────────────────── */}
                <section id="dual-remedy-architecture" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Dual Remedies: Civil Recovery vs Criminal Prosecution
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When a partner commits commercial fraud, the claimant is not restricted to choosing between civil restitution and criminal justice. The Supreme Court of India, in landmark decisions including{' '}
                      <em>Velji Raghavji Patel v. State of Maharashtra (AIR 1965 SC 1433)</em>,{' '}
                      <em>S.W. Palanitkar v. State of Bihar (2002) 1 SCC 241</em>, and{' '}
                      <em>Indian Oil Corporation v. NEPC India Ltd. (2006) 6 SCC 736</em>, has settled that civil suits for recovery and criminal complaints for fraud can proceed simultaneously when the allegations establish deliberate dishonest inducement from inception.
                    </p>

                    {/* Comparison Table */}
                    <div className="overflow-x-auto my-6">
                      <table className="min-w-full text-xs sm:text-sm text-left border-collapse border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                        <thead className="bg-slate-900 text-white">
                          <tr>
                            <th className="p-3.5 border border-slate-800 font-extrabold">Legal Forum / Pathway</th>
                            <th className="p-3.5 border border-slate-800 font-extrabold">Governing Statute &amp; Section</th>
                            <th className="p-3.5 border border-slate-800 font-extrabold">Primary Relief / Outcome</th>
                            <th className="p-3.5 border border-slate-800 font-extrabold">Standard Timeline</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-slate-200">
                          <tr className="hover:bg-slate-50">
                            <td className="p-3 border border-slate-200 font-bold text-slate-900">Summary Civil Suit</td>
                            <td className="p-3 border border-slate-200 font-semibold text-slate-800">
                              Order 37, Code of Civil Procedure, 1908
                            </td>
                            <td className="p-3 border border-slate-200 text-slate-650">
                              Fast-track money decree for liquidated debt without prolonged trial unless defendant obtains leave to defend.
                            </td>
                            <td className="p-3 border border-slate-200 font-semibold text-slate-800">6 – 12 Months</td>
                          </tr>
                          <tr className="hover:bg-slate-50">
                            <td className="p-3 border border-slate-200 font-bold text-slate-900">Commercial Court Claim</td>
                            <td className="p-3 border border-slate-200 font-semibold text-slate-800">
                              Commercial Courts Act, 2015 (Sec 12A)
                            </td>
                            <td className="p-3 border border-slate-200 text-slate-650">
                              Mandatory pre-institution mediation followed by expedited commercial trial and summary judgment under Order 13A.
                            </td>
                            <td className="p-3 border border-slate-200 font-semibold text-slate-800">9 – 15 Months</td>
                          </tr>
                          <tr className="hover:bg-slate-50">
                            <td className="p-3 border border-slate-200 font-bold text-slate-900">Pre-Judgment Asset Attachment</td>
                            <td className="p-3 border border-slate-200 font-semibold text-slate-800">
                              Order 38 Rule 5, CPC 1908
                            </td>
                            <td className="p-3 border border-slate-200 text-slate-650">
                              Injunction freezing partner&apos;s personal bank accounts, luxury vehicles, and real estate properties before final judgment.
                            </td>
                            <td className="p-3 border border-slate-200 font-semibold text-slate-800">15 – 45 Days</td>
                          </tr>
                          <tr className="hover:bg-slate-50">
                            <td className="p-3 border border-slate-200 font-bold text-slate-900">Arbitration Interim Relief</td>
                            <td className="p-3 border border-slate-200 font-semibold text-slate-800">
                              Section 9, Arbitration &amp; Conciliation Act, 1996
                            </td>
                            <td className="p-3 border border-slate-200 text-slate-650">
                              Emergency High Court interim orders appointing a court receiver, sealing premises, and freezing disputed revenues.
                            </td>
                            <td className="p-3 border border-slate-200 font-semibold text-slate-800">20 – 60 Days</td>
                          </tr>
                          <tr className="hover:bg-slate-50">
                            <td className="p-3 border border-slate-200 font-bold text-slate-900">Criminal Prosecution</td>
                            <td className="p-3 border border-slate-200">
                              Sections 316, 318, 336, 61 BNS, 2023 (Sec 406, 420, 477A IPC)
                            </td>
                            <td className="p-3 border border-slate-200 text-slate-650">
                              Police FIR / Section 175 BNSS (Sec 156(3) CrPC) Magistrate direction for criminal investigation, arrest, and passport seizure.
                            </td>
                            <td className="p-3 border border-slate-200 font-semibold text-slate-800">30 – 90 Days (FIR)</td>
                          </tr>
                          <tr className="hover:bg-slate-50">
                            <td className="p-3 border border-slate-200 font-bold text-slate-900">NCLT Oppression &amp; Mismanagement</td>
                            <td className="p-3 border border-slate-200">
                              Sections 241, 242, 244 &amp; 447, Companies Act, 2013
                            </td>
                            <td className="p-3 border border-slate-200 text-slate-650">
                              Tribunal orders removing fraudulent directors, freezing shareholding, ordering forensic SFIO investigation, and capital refund.
                            </td>
                            <td className="p-3 border border-slate-200 font-semibold text-slate-800">6 – 18 Months</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="bg-red-50 border-l-4 border-[#DC2626] p-4 rounded-r-xl">
                      <p className="text-xs sm:text-sm text-red-950 font-medium leading-relaxed">
                        <strong>Strategic Synergy:</strong> Serving an advocate-vetted statutory legal notice detailing both the civil liquidated debt liability (with 18-24% contractual interest) and the criminal penal consequences creates immense legal pressure. In practice, over 76% of defaulting partners opt for mutual settlement and fund restitution during the 15-day notice window to avoid public criminal prosecution and commercial freezing orders.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 4: EVIDENTIARY AUDIT ──────────────────────── */}
                <section id="evidentiary-audit" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Forensic Pre-Notice Audit &amp; Evidentiary Checklist
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A devastating legal notice is built upon an unshakeable evidentiary foundation. Prior to drafting the statutory demand, the aggrieved partner must methodically audit and preserve key financial, electronic, and regulatory records:
                    </p>

                    <div className="space-y-4">
                      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                        <h3 className="font-extrabold text-slate-900 text-sm sm:text-base mb-2 text-[#DC2626]">
                          A. Constitutional &amp; Contractual Proof
                        </h3>
                        <ul className="text-xs sm:text-sm text-slate-700 space-y-2 list-disc list-inside">
                          <li>Certified true copy of the Partnership Deed / LLP Agreement / Shareholders&apos; Agreement (SHA) with profit-sharing ratios, capital contribution schedules, and dispute resolution/arbitration clauses.</li>
                          <li>Registrar of Firms (RoF) registration certificate or Ministry of Corporate Affairs (MCA) incorporation certificate and Form 3/LLP Form 4 filings.</li>
                          <li>Original bank account opening forms and board resolutions specifying joint signatory mandates.</li>
                        </ul>
                      </div>

                      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                        <h3 className="font-extrabold text-slate-900 text-sm sm:text-base mb-2 text-[#DC2626]">
                          B. Forensic Financial &amp; Banking Trail
                        </h3>
                        <ul className="text-xs sm:text-sm text-slate-700 space-y-2 list-disc list-inside">
                          <li>Certified bank account statements (under Bankers&apos; Books Evidence Act / Section 65B of Evidence Act / Section 63 of BSA 2023) highlighting suspicious NEFT, RTGS, IMPS, or cash withdrawals.</li>
                          <li>Audited annual balance sheets, profit &amp; loss statements, and Form 3CD tax audit reports for the disputed financial years.</li>
                          <li>GSTR-1, GSTR-3B, and GSTR-9 annual reconciliation statements showing differences between declared customer billing and realized firm receipts.</li>
                        </ul>
                      </div>

                      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                        <h3 className="font-extrabold text-slate-900 text-sm sm:text-base mb-2 text-[#DC2626]">
                          C. Admissible Electronic &amp; Written Admissions
                        </h3>
                        <ul className="text-xs sm:text-sm text-slate-700 space-y-2 list-disc list-inside">
                          <li>Exported email communications, WhatsApp message chains, and SMS records containing financial admissions, fund requests, or acknowledgments of debt under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023.</li>
                          <li>Internal minutes of meetings (MoM), board resolutions, audit committee queries, and written demand letters sent prior to legal escalation.</li>
                          <li>Vendor communications, customer purchase orders, and client payment confirmations confirming direct remittances into the rogue partner&apos;s secret accounts.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 5: MANDATORY CLAUSES ──────────────────────── */}
                <section id="mandatory-clauses" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Crucial Statutory Clauses in a Legal Demand Notice to Partner
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A boilerplate notice easily gets ignored by seasoned commercial defaulters. To ensure immediate compliance and withstand judicial scrutiny in subsequent summary suits, an advocate-drafted notice must incorporate these essential statutory clauses:
                    </p>

                    <div className="space-y-4 my-6">
                      <div className="bg-slate-50 p-5 rounded-xl border-l-4 border-slate-900">
                        <h4 className="font-bold text-slate-900 text-sm mb-1">1. Fiduciary Relationship &amp; Capital Contribution Recital</h4>
                        <p className="text-xs sm:text-sm text-slate-600">
                          Recites the exact date of partnership constitution, registered capital infused by the claimant, equity/profit sharing ratio, and the statutory fiduciary obligations under Sections 9, 10, and 12 of the Indian Partnership Act, 1932.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-5 rounded-xl border-l-4 border-slate-900">
                        <h4 className="font-bold text-slate-900 text-sm mb-1">2. Granular Chronology of Fraud &amp; Financial Misappropriation</h4>
                        <p className="text-xs sm:text-sm text-slate-600">
                          Itemizes dates, transaction IDs, beneficiary accounts, diverted customer invoices, and fabricated ledger entries, establishing an unassailable pattern of intentional financial breach and illicit profit generation under Section 16 of the IPA.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-5 rounded-xl border-l-4 border-slate-900">
                        <h4 className="font-bold text-slate-900 text-sm mb-1">3. Liquidated Monetary Quantification &amp; Interest Claim</h4>
                        <p className="text-xs sm:text-sm text-slate-600">
                          Demands the exact crystallized principal amount owed, accrued commercial interest calculated at 18% to 24% per annum under Section 73 of the Contract Act and Interest Act, 1978, and professional legal notice drafting costs.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-5 rounded-xl border-l-4 border-slate-900">
                        <h4 className="font-bold text-slate-900 text-sm mb-1">4. 15-Day Statutory Compliance &amp; Curing Window</h4>
                        <p className="text-xs sm:text-sm text-slate-600">
                          Provides a strict 15-day timeline from date of notice receipt for full electronic bank refund and execution of a formal reconciliation deed, failing which immediate judicial proceedings will be instituted.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-5 rounded-xl border-l-4 border-slate-900">
                        <h4 className="font-bold text-slate-900 text-sm mb-1">5. Pre-Judgment Asset Attachment &amp; Criminal Prosecution Warning</h4>
                        <p className="text-xs sm:text-sm text-slate-600">
                          Expressly cautions the defaulting partner regarding imminent applications under Order 38 Rule 5 CPC for freezing personal assets, commercial court summary actions under Order 37, and filing criminal complaints under Sections 316, 318, and 336 of the Bharatiya Nyaya Sanhita, 2023 for criminal breach of trust, cheating, and falsification of accounts.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 6: STEP-BY-STEP RECOVERY ──────────────────── */}
                <section id="step-by-step-recovery" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Step-by-Step Strategic Roadmap: Notice to Enforcement
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Legal Recovery employs a proven five-stage structured protocol that accelerates fund recovery and forces settlement while safeguarding the claimant&apos;s commercial interests:
                    </p>

                    <div className="relative border-l-2 border-slate-200 ml-4 pl-6 space-y-8 my-6">
                      <div className="relative">
                        <span className="absolute -left-[33px] top-0 w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black ring-4 ring-white">
                          1
                        </span>
                        <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                          Stage 1: Evidence Consolidation &amp; Forensic Financial Reconciliation (Day 1 – 2)
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          Our senior commercial advocates review the partnership deed, bank statements, GST invoices, and communication logs to isolate the exact quantum of misappropriated funds and establish joint/several personal liability.
                        </p>
                      </div>

                      <div className="relative">
                        <span className="absolute -left-[33px] top-0 w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black ring-4 ring-white">
                          2
                        </span>
                        <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                          Stage 2: Advocate Drafting &amp; Multi-Channel Statutory Dispatch (Day 2 – 3)
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          A high-impact legal notice is drafted on senior advocate letterhead, citing relevant High Court &amp; Supreme Court precedents. Dispatched simultaneously via India Post Registered AD, Speed Post, and tracked digital channels (registered business email and WhatsApp).
                        </p>
                      </div>

                      <div className="relative">
                        <span className="absolute -left-[33px] top-0 w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black ring-4 ring-white">
                          3
                        </span>
                        <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                          Stage 3: 15-Day Negotiation &amp; Formal Settlement Escrow (Day 4 – 18)
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          Upon receipt, the defaulting partner usually engages counsel to avoid public litigation. Our team supervises the execution of a legally binding Settlement Agreement, repayment schedule, and bank escrow releases.
                        </p>
                      </div>

                      <div className="relative">
                        <span className="absolute -left-[33px] top-0 w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black ring-4 ring-white">
                          4
                        </span>
                        <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                          Stage 4: Summary Civil Action &amp; Emergency Asset Freezing (Day 19+)
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          If the partner refuses compliance, we institute an Order 37 CPC Summary Suit or Commercial Court petition alongside an urgent Order 38 Rule 5 application to attach the defendant&apos;s personal bank accounts and properties.
                        </p>
                      </div>

                      <div className="relative">
                        <span className="absolute -left-[33px] top-0 w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black ring-4 ring-white">
                          5
                        </span>
                        <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                          Stage 5: Parallel Criminal Complaint &amp; Decree Execution
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          Simultaneously file a criminal complaint before the jurisdictional Magistrate or Economic Offences Wing (EOW) under Sections 316 and 318 of BNS, 2023, while executing the civil money decree through court-ordered asset auctions.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 7: FAQS ───────────────────────────────────── */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-6 border-b-2 border-[#DC2626] pb-2 inline-block">
                    7. Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => {
                      const isOpen = expandedFaqs.includes(`faq-${index}`);
                      return (
                        <div
                          key={index}
                          className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-200"
                        >
                          <button
                            onClick={() => toggleFaq(index)}
                            className="w-full p-5 text-left font-extrabold text-slate-900 text-sm sm:text-base flex justify-between items-center hover:bg-slate-50 transition-colors gap-4"
                          >
                            <span>{faq.question}</span>
                            <span
                              className={`w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[#DC2626] font-black shrink-0 transition-transform duration-200 ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                            >
                              ↓
                            </span>
                          </button>
                          {isOpen && (
                            <div className="p-5 pt-0 text-xs sm:text-sm text-slate-650 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                              <p>{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* ── AUTHORITY CITATIONS ──────────────────────────────── */}
                <section className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  <h3 className="font-black text-slate-900 text-sm mb-3">Statutory References &amp; Authoritative Sources</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
                    <div>
                      •{' '}
                      <a
                        href="https://www.indiacode.nic.in/handle/123456789/2387"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline font-medium"
                      >
                        Indian Partnership Act, 1932 (India Code)
                      </a>
                    </div>
                    <div>
                      •{' '}
                      <a
                        href="https://www.mca.gov.in"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline font-medium"
                      >
                        Ministry of Corporate Affairs – Companies Act &amp; LLP Act
                      </a>
                    </div>
                    <div>• Indian Contract Act, 1872 (Section 73 &amp; 74)</div>
                    <div>• Code of Civil Procedure, 1908 (Order 37 &amp; Order 38)</div>
                    <div>• Commercial Courts Act, 2015 (Pre-Institution Mediation)</div>
                    <div>• Supreme Court of India Commercial Bench Precedents</div>
                  </div>
                </section>

                {/* ── MORE GUIDES (Internal Links) ─────────────────────── */}
                <section className="scroll-mt-32">
                  <h2 className="text-xl font-black text-slate-900 mb-5 border-b border-slate-100 pb-2">
                    More Commercial &amp; Financial Dispute Guides
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        title: 'Legal Notice for Recovery of Money in India',
                        href: '/legal-notice-for-recovery-of-money',
                      },
                      {
                        title: 'Legal Notice to Partner for Recovery of Dues',
                        href: '/legal-notice-to-partner-for-recovery-of-dues',
                      },
                      {
                        title: 'Legal Notice for Business Recovery of Unpaid Dues',
                        href: '/send-a-legal-notice/for-business-to-recover-their-unpaid-dues',
                      },
                      {
                        title: 'Legal Notice for Unpaid Sales Commission & Overrides',
                        href: '/send-a-legal-notice/commission-not-paid-by-company',
                      },
                      {
                        title: 'Legal Notice for B2B Invoice Not Received',
                        href: '/send-a-legal-notice/b2b-invoice-not-recieved',
                      },
                      {
                        title: 'MSME Samadhaan vs Legal Notice for Delayed Payment',
                        href: '/msme-delayed-payment-recovery-samadhan-vs-legal-notice',
                      },
                      {
                        title: 'How to Send a Legal Notice for Money Recovery',
                        href: '/how-to-send-a-legal-notice-for-recovery-of-money-in-india',
                      },
                      {
                        title: 'Send a Legal Notice Online in India',
                        href: '/send-a-legal-notice',
                      },
                    ].map((link, i) => (
                      <Link
                        key={i}
                        href={link.href}
                        className="bg-slate-50 p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:shadow-sm transition-all duration-150 flex items-center group"
                      >
                        <span className="text-slate-300 group-hover:text-[#DC2626] mr-2.5 transition-colors">
                          →
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-700 group-hover:text-[#DC2626] transition-colors leading-snug">
                          {link.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </section>

                {/* ── COMPANY SECTION ──────────────────────────────────── */}
                <section className="border border-slate-100 rounded-2xl p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <img src="/lrlogo.svg" alt="Legal Recovery Logo" className="h-10 w-auto" />
                    <div>
                      <h3 className="font-black text-slate-900 text-base">Legal Recovery</h3>
                      <p className="text-xs text-slate-500">India&apos;s Trusted Recovery Platform</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-650 leading-relaxed mb-6">
                    Legal Recovery is India&apos;s trusted online legal notice and dispute resolution
                    platform, connecting business partners, startup founders, commercial enterprises,
                    and corporate directors with seasoned panel advocates for rapid, advocate-vetted statutory
                    demand notices at transparent flat fees. With ₹100 Crore+ recovered and 10,000+
                    cases resolved across India, Legal Recovery delivers verified legal impact
                    without the delays and unpredictability of traditional law firms.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { label: 'Send a Legal Notice', href: '/send-a-legal-notice' },
                      { label: 'Recovery Services', href: '/recovery' },
                      { label: 'Legal Notice for Recovery of Money', href: '/legal-notice-for-recovery-of-money' },
                      { label: 'How It Works', href: '/how-it-works' },
                      { label: 'Contact Us', href: '/contact' },
                    ].map((btn, i) => (
                      <Link
                        key={i}
                        href={btn.href}
                        className="px-4 py-2 rounded-lg border border-[#DC2626] text-[#DC2626] hover:bg-[#DC2626] hover:text-white text-xs font-extrabold transition-all duration-150"
                      >
                        {btn.label}
                      </Link>
                    ))}
                  </div>
                </section>

              </div>
            </div>

            {/* ── RIGHT SIDEBAR ────────────────────────────────────────── */}
            <div className="hidden lg:flex flex-col gap-6 sticky top-28">

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#020617] text-white p-6 rounded-2xl shadow-lg border border-slate-800">
                <div className="w-10 h-10 bg-[#DC2626]/20 rounded-xl flex items-center justify-center mb-4 border border-[#DC2626]/30">
                  <svg className="w-5 h-5 text-[#DC2626]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-black text-base mb-2 leading-snug">
                  Partner Cheated or Siphoned Capital?
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  Send an advocate-vetted statutory notice today. Over 76% of defaulting partners settle financial claims within 15 days of receiving formal notice from Legal Recovery.
                </p>
                <button
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-3 px-4 rounded-xl transition-all text-sm cursor-pointer"
                >
                  Draft &amp; Send Notice Now
                </button>
                <p className="text-center text-slate-400 text-[10px] mt-3">
                  Flat fee • Advocate-drafted • Sent same day
                </p>
              </div>

              {/* Client Reviews (Product + Review exact match with Schema) */}
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="font-black text-slate-900 text-sm mb-1">Client Reviews</h3>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg key={s} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <span className="font-black text-slate-900 text-sm">4.9</span>
                  <span className="text-slate-400 text-xs">/5 (312 reviews)</span>
                </div>

                {/* Review card — must match JSON-LD Product > Review word-for-word */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#DC2626]/10 flex items-center justify-center font-black text-[#DC2626] text-xs">
                      RS
                    </div>
                    <div>
                      <p className="font-extrabold text-slate-900 text-xs">Raghavendra K. Singhal</p>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <svg key={s} className="w-3 h-3 text-amber-400 fill-current" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    &quot;{reviewBodyText}&quot;
                  </p>
                </div>

                <button
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="w-full mt-4 border border-[#DC2626] text-[#DC2626] hover:bg-[#DC2626] hover:text-white font-extrabold py-2.5 px-4 rounded-xl transition-all text-xs cursor-pointer"
                >
                  Start Your Case
                </button>
              </div>

              {/* Quick Stats */}
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 space-y-3">
                <h3 className="font-black text-slate-900 text-sm mb-3">Why Legal Recovery?</h3>
                {[
                  { stat: '76%', label: 'Partners settle prior to commercial court litigation' },
                  { stat: '₹100CR+', label: 'Total amount recovered for clients across India' },
                  { stat: 'Same Day', label: 'Advocate notice drafted and dispatched' },
                  { stat: 'Flat Fee', label: 'Transparent pricing with no hidden charges' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
                    <span className="font-black text-[#DC2626] text-sm">{item.stat}</span>
                    <span className="text-xs text-slate-500 text-right max-w-[60%]">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
      </div>
    </>
  );
}
