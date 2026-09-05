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
    question: 'Can a commercial property buyer legally recover token or earnest money if the seller or developer backs out?',
    answer:
      'Commercial property buyers can recover the full token or advance amount alongside statutory interest under Section 70, Section 73, and Section 74 of the Indian Contract Act, 1872. If a builder, landlord, or seller fails to execute the registered agreement for sale, deliver clear title documents, or obtain statutory sanctions, unilateral forfeiture of earnest money is unlawful under the landmark Supreme Court ruling in Kailash Nath Associates v. DDA. Issuing an advocate-drafted statutory legal notice creates an evidentiary demand, mandates refund within a 15-day peremptory window, and paves the way for summary recovery suits under Order 37 of the CPC or commercial litigation under the Commercial Courts Act, 2015.',
  },
  {
    question: 'Does RERA apply to commercial real estate projects, retail shops, and office spaces in India?',
    answer:
      'The Real Estate (Regulation and Development) Act, 2016 (RERA) governs both commercial and residential real estate projects where the land area exceeds 500 square meters or contains more than eight units. Under Section 18 of RERA, if a commercial promoter fails to hand over possession of an office space, IT suite, or retail shop by the date agreed upon in the registered agreement, the commercial allottee is entitled to demand an unconditional full refund of all amounts paid with interest at the State Bank of India highest Marginal Cost of Funds Based Lending Rate (MCLR) plus 2%. Commercial buyers can enforce this remedy simultaneously or prior to initiating commercial court proceedings.',
  },
  {
    question: 'Can a seller or developer forfeit 100% of the booking deposit if a commercial sale agreement is cancelled?',
    answer:
      'A developer or property vendor cannot forfeit earnest money or token deposits unless the seller produces demonstrable documentary evidence of actual financial loss suffered due to the buyer’s breach. Under Section 74 of the Indian Contract Act, 1872, any clause permitting arbitrary, full forfeiture is classified as a punitive penalty and held void by Indian courts. The Supreme Court of India has affirmed that earnest money forfeiture must be reasonable, proportionate, and strictly limited to actual damages, compelling defaulting sellers to return advance amounts when the transaction falls through due to regulatory defects or mutual disagreement.',
  },
  {
    question: 'How does the Commercial Courts Act, 2015 accelerate the recovery of stuck commercial property money?',
    answer:
      'Under Section 2(1)(c)(vii) of the Commercial Courts Act, 2015, all disputes arising out of agreements relating to immovable property used exclusively in trade or commerce qualify as commercial disputes with fast-tracked adjudication. For claims with a specified value of ₹3 Lakhs and above, the statute mandates Pre-Institution Mediation and Settlement (PIMS) under Section 12A through the District Legal Services Authority (DLSA) to facilitate rapid out-of-court recovery within three to five months. If mediation fails, the dedicated Commercial Court resolves the dispute under stringent procedural timelines, strict disclosure rules, and summary judgment provisions under Order XIII-A of the CPC.',
  },
  {
    question: 'What is the statutory limitation period for filing a legal recovery notice for stuck property funds?',
    answer:
      'Under Article 47 and Article 55 of the Schedule to the Limitation Act, 1963, the statutory limitation period to initiate legal recovery proceedings for unpaid advances, refund of earnest money, or breach of contract is exactly three years from the date the consideration failed or the agreed execution date expired. Serving a formal advocate legal notice within this three-year period establishes a concrete date of demand and preserves critical pre-litigation proof. Any subsequent written acknowledgment of the debt by the seller over email, letter, or WhatsApp resets the limitation period under Section 18 of the Limitation Act.',
  },
  {
    question: 'Can criminal proceedings for cheating or criminal breach of trust be filed against fraudulent real estate developers?',
    answer:
      'When a developer dishonestly induces a commercial buyer to deposit funds for unauthorized layouts, sells mortgaged property without disclosure, or diverts escrow funds, the aggrieved buyer can initiate criminal proceedings alongside civil recovery. Criminal complaints can be registered under Section 316 of the Bharatiya Nyaya Sanhita, 2023 (BNS) for criminal breach of trust and Section 318 of the BNS for cheating and dishonest inducement. Citing these statutory penal provisions in an advocate-drafted legal notice holds company directors and partners personally liable, creating intense legal leverage that often results in swift out-of-court settlements.',
  },
];

/* ─── JSON-LD SCHEMA (@graph) ──────────────────────────────────────────── */
const pageUrl =
  'https://legalrecovery.in/send-a-legal-notice/property-dispute-money-stuck';
const ogImage =
  'https://legalrecovery.in/images/og/property-dispute-money-stuck.jpg';

const reviewBodyText =
  'I booked a 1,850 sq. ft. commercial office suite in an upcoming IT tower and deposited ₹38,50,000 as token booking advance. When the developer failed to furnish municipal layout approvals and fire safety NOCs within the committed 6-month timeline, I requested an immediate cancellation and full refund. The developer abruptly refused, citing a one-sided "non-refundable earnest money" clause in their draft MOU. Legal Recovery assigned a senior property advocate who drafted and served a formidable statutory legal demand notice under Sections 73 and 74 of the Indian Contract Act, Section 18 of RERA, and the Commercial Courts Act, citing the landmark Supreme Court ruling in Kailash Nath Associates v. DDA. Faced with the threat of RERA escalation and freezing of commercial project bank accounts, the developer agreed to a full settlement and disbursed the entire ₹38,50,000 plus 12% p.a. interest within 14 days of notice service. Truly outstanding and professional legal service!';

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
        'Legal Notice for Property Dispute Money Stuck | Commercial Real Estate Recovery India',
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
      datePublished: '2024-09-02T08:00:00+05:30',
      dateModified: new Date().toISOString(),
    },

    /* 2. WebPage with SpeakableSpecification */
    {
      '@type': 'WebPage',
      '@id': pageUrl,
      name: 'Legal Notice for Property Dispute Money Stuck | Commercial Real Estate Recovery India',
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
          name: 'Legal Notice for Property Dispute Money Stuck Recovery',
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
      name: '5-Step Legal Roadmap to Recover Stuck Commercial Property Money in India',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Collate Property Transaction Dossier: Bank transaction receipts, MoU / Agreement to Sell, token receipts, WhatsApp negotiations, and RERA project disclosures under Section 63 BSA',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Conduct Legal Title & Regulatory Audit: Verify municipal building sanction plans, Encumbrance Certificate (EC), commencement certificates, and developer RERA compliance filings',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Draft Comprehensive Advocate Statutory Legal Notice: Incorporate Section 73/74 Contract Act, Section 18 RERA, Commercial Courts Act, and penal provisions under Section 316/318 BNS',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Dispatch Notice Simultaneously via Speed Post AD, Registered Email, and WhatsApp with Real-Time Postal Tracking and Section 63 BSA Delivery Proof',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Execute Multi-Forum Legal Escalation: Initiate Section 12A PIMS Mediation, file RERA refund complaint, Order 37 Summary Suit, or Section 7/9 IBC Corporate Insolvency Petition upon notice default',
        },
      ],
    },

    /* 7. Product + AggregateRating + Review (matches sidebar UI word-for-word) */
    {
      '@type': 'Product',
      name: 'Legal Notice for Commercial Property Dispute & Stuck Money Recovery',
      description:
        'Advocate-drafted statutory demand notice service for commercial property investors, buyers, business owners, and allottees to recover stuck token money, advance booking deposits, and delayed possession refunds from developers and property vendors across India.',
      brand: {
        '@type': 'Organization',
        name: 'Legal Recovery',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '389',
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
            name: 'Siddharth Kulkarni',
          },
          reviewBody: reviewBodyText,
        },
      ],
    },
  ],
};

/* ─── COMPONENT ─────────────────────────────────────────────────────────── */
export default function PropertyDisputeMoneyStuckClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: 'statutory-framework', title: '1. Statutory Framework: Contract, RERA & Commercial Courts' },
    { id: 'earnest-money-forfeiture', title: '2. The "Non-Refundable Token" Myth: Supreme Court Jurisprudence' },
    { id: 'stuck-money-scenarios', title: '3. Common Scenarios of Stuck Commercial Property Funds' },
    { id: 'evidentiary-checklist', title: '4. Evidentiary Checklist & Section 63 BSA Digital Records' },
    { id: 'essential-clauses', title: '5. Key Clauses in a Statutory Demand Notice to Builders & Sellers' },
    { id: 'legal-remedies-table', title: '6. Multi-Forum Remedies: RERA, Commercial Court, CPC & BNS' },
    { id: 'action-roadmap', title: '7. Step-by-Step Legal Roadmap to Reclaim Stuck Property Funds' },
    { id: 'faqs', title: '8. Frequently Asked Questions' },
  ];

  const breadcrumbItems = [
    { label: 'Send a Legal Notice', href: '/send-a-legal-notice' },
    {
      label: 'Property Dispute Money Stuck Recovery',
      href: '/send-a-legal-notice/property-dispute-money-stuck',
    },
  ];

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const shareUrl = encodeURIComponent(pageUrl);
  const shareText = encodeURIComponent(
    'Commercial property token money, earnest deposit, or booking advance stuck with a developer or seller? Send an advocate-drafted statutory legal notice under Contract Act, RERA & Commercial Courts Act! #RealEstateRecovery #PropertyDispute #LegalNotice'
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
              COMMERCIAL REAL ESTATE &amp; ADVANCE MONEY RECOVERY
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Legal Notice for Property Dispute{' '}
              <span className="text-[#DC2626]">Money Stuck</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Recover stuck token deposits, earnest money, commercial booking advances, delayed project refunds, and statutory interest from defaulting builders, property vendors, and commercial landlords across India.
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
                      onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${encodeURIComponent('Legal Notice for Property Dispute Money Stuck Recovery | Legal Recovery India')}`, '_blank', 'noopener,noreferrer')}
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
                    Commercial buyers, investors, and business allottees can serve an advocate-vetted statutory legal notice to defaulting property developers, vendors, or commercial landlords under{' '}
                    <span className="font-semibold text-slate-800">
                      Sections 70, 73, and 74 of the Indian Contract Act, 1872
                    </span>{' '}
                    and{' '}
                    <span className="font-semibold text-slate-800">
                      Section 18 of the Real Estate (Regulation and Development) Act, 2016 (RERA)
                    </span>
                    , demanding immediate refund of stuck token money, earnest booking advances, and accrued statutory interest within a mandatory 15-day window. Under settled Supreme Court jurisprudence, a seller cannot arbitrarily forfeit commercial booking deposits without proving actual financial damage. Serving a formal statutory notice crystallizes the developer’s breach, establishes an indisputable pre-litigation record, and unlocks fast-track commercial remedies including{' '}
                    <span className="font-semibold text-slate-800">
                      Section 12A Pre-Institution Mediation under the Commercial Courts Act, 2015
                    </span>
                    , Order 37 summary recovery suits, and corporate insolvency petitions under the Insolvency and Bankruptcy Code, 2016.
                  </p>
                </div>

                {/* ── INFOGRAPHIC EMBED ──────────────────────────────────── */}
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/og/property-dispute-money-stuck.jpg"
                    alt="Legal Notice for Property Dispute Money Stuck Recovery Flowchart in India"
                    className="w-full h-auto object-cover"
                  />
                  <div className="bg-slate-900 text-slate-300 text-xs px-4 py-2.5 flex justify-between items-center">
                    <span>
                      <strong>Figure 1.0:</strong> Multi-Stage Statutory Recovery Workflow for Stuck Commercial Property Advances &amp; Builder Disputes.
                    </span>
                    <span className="text-red-400 font-bold uppercase tracking-wider text-[10px]">
                      Legal Recovery Framework
                    </span>
                  </div>
                </div>

                {/* ── SECTION 1: STATUTORY FRAMEWORK ─────────────────────── */}
                <section id="statutory-framework" className="space-y-6 scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    1. Statutory Framework: Contract Act, RERA &amp; Commercial Courts Act
                  </h2>
                  <p className="text-base text-slate-650 leading-relaxed font-normal">
                    Commercial real estate transactions in India involve substantial capital outlay, complex deal structuring, and tight business timelines. When a transaction for an office floor, retail showroom, commercial plot, IT park suite, or co-working development stalls due to developer defaults, regulatory non-compliance, or title defects, the buyer’s capital becomes severely jeopardized. The Indian legal architecture provides robust statutory mechanisms across civil, commercial, and regulatory forums to compel defaulting counterparties to disgorge retained funds with commercial interest:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
                      <div className="w-9 h-9 rounded-xl bg-red-100 flex items-center justify-center font-black text-[#DC2626] text-sm">
                        01
                      </div>
                      <h3 className="font-extrabold text-slate-900 text-base">
                        Indian Contract Act, 1872 (Sections 70, 73 &amp; 74)
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Under Section 73, any party suffering financial harm from a breach of contract is entitled to direct compensatory damages. Section 74 explicitly regulates penalty clauses and earnest money forfeiture, prohibiting arbitrary retention of advances. Section 70 enforces the doctrine of quantum meruit and unjust enrichment, mandating restitution when an unperformed commercial deal falls through.
                      </p>
                      <a
                        href="https://www.indiacode.nic.in/handle/123456789/2187"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="inline-block text-xs font-bold text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Read Indian Contract Act, 1872 (India Code) →
                      </a>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
                      <div className="w-9 h-9 rounded-xl bg-red-100 flex items-center justify-center font-black text-[#DC2626] text-sm">
                        02
                      </div>
                      <h3 className="font-extrabold text-slate-900 text-base">
                        RERA Act, 2016 (Sections 12, 13 &amp; 18)
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Under Section 18 of RERA, if a commercial promoter fails to hand over possession in accordance with the terms of the agreement for sale or abandons the project, the buyer possesses an unconditional statutory right to withdraw from the project and demand a full refund of all amounts paid alongside prescribed SBI MCLR + 2% compound interest.
                      </p>
                      <a
                        href="https://www.indiacode.nic.in/handle/123456789/2158"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="inline-block text-xs font-bold text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Read RERA Act, 2016 Provisions (India Code) →
                      </a>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
                      <div className="w-9 h-9 rounded-xl bg-red-100 flex items-center justify-center font-black text-[#DC2626] text-sm">
                        03
                      </div>
                      <h3 className="font-extrabold text-slate-900 text-base">
                        Commercial Courts Act, 2015 (Section 2(1)(c)(vii) &amp; 12A)
                      </h3>
                      <p className="text-xs text-slate-650 leading-relaxed">
                        Agreements relating to immovable property used exclusively in trade or commerce are categorized as &quot;Commercial Disputes.&quot; Under Section 12A, mandatory Pre-Institution Mediation and Settlement (PIMS) through the District Legal Services Authority (DLSA) expedites recovery without prolonged trial cycles, backed by specialized commercial benches.
                      </p>
                      <span className="inline-block text-xs font-bold text-slate-700">
                        Governed under Commercial Courts Act, 2015 (Pre-Institution Mediation)
                      </span>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
                      <div className="w-9 h-9 rounded-xl bg-red-100 flex items-center justify-center font-black text-[#DC2626] text-sm">
                        04
                      </div>
                      <h3 className="font-extrabold text-slate-900 text-base">
                        Specific Relief Act, 1963 (Sections 10, 20 &amp; 22)
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Empowers commercial buyers to enforce specific performance of contracts or seek substituted performance alongside statutory claims for refund of earnest money and substantial compensatory damages under Section 21 and Section 22 whenever the vendor defaults on execution.
                      </p>
                      <span className="inline-block text-xs font-bold text-slate-700">
                        Governed under Specific Relief Act, 1963 (Sections 10, 20 &amp; 22)
                      </span>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 2: FORFEITURE OF EARNEST MONEY MYTH ─────────── */}
                <section id="earnest-money-forfeiture" className="space-y-6 scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    2. The &quot;Non-Refundable Token&quot; Myth: Supreme Court Jurisprudence
                  </h2>
                  <p className="text-base text-slate-650 leading-relaxed font-normal">
                    One of the most ubiquitous defenses deployed by commercial property developers, brokers, and private sellers is that the token advance, booking fee, or earnest money deposit is strictly &quot;non-refundable&quot; under unilateral booking forms or preliminary Memorandums of Understanding (MoU). Under Indian contract jurisprudence, this claim is legally untenable and has been repeatedly struck down by the Supreme Court of India.
                  </p>

                  <div className="bg-red-50 border-l-4 border-[#DC2626] p-6 rounded-r-2xl space-y-3">
                    <h3 className="font-black text-slate-900 text-base">
                      Landmark Precedent: Kailash Nath Associates v. Delhi Development Authority (2015) 4 SCC 136
                    </h3>
                    <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-medium">
                      The Supreme Court of India held that Section 74 of the Indian Contract Act, 1872 applies squarely to the forfeiture of earnest money deposits. The Apex Court ruled that a vendor or statutory authority cannot forfeit earnest money arbitrarily unless the party asserting the forfeiture produces concrete, demonstrable evidence of actual financial damage or loss suffered. If no actual loss is proven, or if the loss is negligible, forfeiting the deposit constitutes an unlawful penalty, and the entire advance must be refunded to the buyer.
                    </p>
                    <div className="pt-2">
                      <span className="text-xs font-extrabold text-[#DC2626]">
                        Precedent: Kailash Nath Associates v. DDA (Supreme Court of India)
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-black text-slate-900">
                      Key Judicial Principles Governing Commercial Property Deposit Refunds
                    </h3>
                    <ul className="space-y-3 text-sm text-slate-700">
                      <li className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-black flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>
                          <strong>Prohibition on Indefinite Delays:</strong> In{' '}
                          <em>Pioneer Urban Land &amp; Infrastructure Ltd. v. Govindan Raghavan (2019) 5 SCC 725</em> and{' '}
                          <em>Fortune Infrastructure v. Trevor D&apos;Lima (2018) 5 SCC 442</em>, the Supreme Court established that an allottee or buyer cannot be forced to wait indefinitely for possession or sanction clearance and is unconditionally entitled to a refund with compensation.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-black flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>
                          <strong>One-Sided Clauses Void:</strong> Standard boilerplate contracts where the seller charges 18% interest for buyer delays but offers nominal or zero penalty for project delays are classified as unfair trade practices and declared null and void.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-black flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>
                          <strong>Concurrent Remedies Permitted:</strong> In{' '}
                          <em>Imperia Structures Ltd. v. Anil Patni (2020) 10 SCC 783</em>, the Supreme Court clarified that remedies under RERA are in addition to, and not in derogation of, other civil, commercial, and consumer protection laws.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* ── SECTION 3: STUCK MONEY SCENARIOS ─────────────────────── */}
                <section id="stuck-money-scenarios" className="space-y-6 scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    3. Common Scenarios of Stuck Commercial Property Funds
                  </h2>
                  <p className="text-base text-slate-650 leading-relaxed font-normal">
                    Commercial transactions break down across several predictable factual patterns. Identifying the precise breach is essential to craft an airtight statutory demand notice that preempts procedural defenses:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs">
                        A
                      </div>
                      <h3 className="font-extrabold text-slate-900 text-sm">
                        Pre-Agreement Token Money Default
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Buyer deposits earnest token money against an MoU or expression of interest (EOI). The transaction collapses prior to signing the formal Agreement for Sale due to defective title search, unauthorized zoning, or lack of environmental NOCs. Seller unlawfully withholds token funds.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 font-bold flex items-center justify-center text-xs">
                        B
                      </div>
                      <h3 className="font-extrabold text-slate-900 text-sm">
                        Commercial Builder Construction Stoppage
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Commercial office or retail mall promoter halts construction for years, fails to deliver fit-outs, or diverts construction capital into other projects. Commercial buyers who invested 30% to 90% of unit value are left with stranded capital and no possession.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 font-bold flex items-center justify-center text-xs">
                        C
                      </div>
                      <h3 className="font-extrabold text-slate-900 text-sm">
                        Undisclosed Mortgages &amp; Defective Titles
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Seller conceals existing bank hypothecations, pending litigation, SARFAESI attachment notices, or joint ownership encumbrances on commercial plots or retail buildings, rendering peaceful ownership and mutation legally impossible.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                      <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 font-bold flex items-center justify-center text-xs">
                        D
                      </div>
                      <h3 className="font-extrabold text-slate-900 text-sm">
                        Commercial Lease Security Deposit Withholding
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Corporate landlords refuse to refund substantial commercial security deposits (often running into ₹20 Lakhs to ₹1 Crore) upon expiration or termination of commercial leases, inventing arbitrary dilapidation charges without architectural survey backing.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                      <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 font-bold flex items-center justify-center text-xs">
                        E
                      </div>
                      <h3 className="font-extrabold text-slate-900 text-sm">
                        Material Alteration of Sanctioned Commercial Plans
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Developer unilaterally alters the layout, reduces super built-up to carpet ratio, eliminates dedicated parking bays, or converts retail anchor zones into common corridors without statutory consent under Section 14 of RERA.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 4: EVIDENTIARY CHECKLIST ─────────────────────── */}
                <section id="evidentiary-checklist" className="space-y-6 scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    4. Evidentiary Checklist &amp; Section 63 BSA Digital Records
                  </h2>
                  <p className="text-base text-slate-650 leading-relaxed font-normal">
                    Under the <span className="font-semibold text-slate-800">Bharatiya Sakshya Adhiniyam, 2023 (BSA)</span>, electronic records, banking logs, and digital communications carry primary evidentiary value when certified under Section 63 (formerly Section 65B of the Indian Evidence Act). Before serving the statutory notice, assemble the following evidentiary dossier:
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs md:text-sm border-collapse bg-slate-50 rounded-2xl overflow-hidden">
                      <thead>
                        <tr className="bg-slate-900 text-white">
                          <th className="p-4 font-black">Document / Evidence Type</th>
                          <th className="p-4 font-black">Statutory Purpose</th>
                          <th className="p-4 font-black">Evidentiary Value under BSA 2023</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        <tr>
                          <td className="p-4 font-bold text-slate-900">
                            Bank Statements &amp; RTGS/NEFT Transaction Slips
                          </td>
                          <td className="p-4 text-slate-650">
                            Proves exact quantum of consideration transferred, date of remittance, and recipient corporate account.
                          </td>
                          <td className="p-4 text-emerald-700 font-semibold">
                            Primary documentary proof of payment under Section 61 BSA.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-slate-900">
                            Memorandum of Understanding (MoU) / Allotment Letter
                          </td>
                          <td className="p-4 text-slate-650">
                            Establishes commercial terms, agreed milestone timelines, possession dates, and refund contingencies.
                          </td>
                          <td className="p-4 text-emerald-700 font-semibold">
                            Substantive written contract defining contractual obligations.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-slate-900">
                            WhatsApp Communications &amp; Email Trails
                          </td>
                          <td className="p-4 text-slate-650">
                            Evidences seller acknowledgments, promises to refund, delay admissions, and pre-litigation correspondence.
                          </td>
                          <td className="p-4 text-emerald-700 font-semibold">
                            Admissible electronic evidence under Section 63 BSA certificate.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-slate-900">
                            RERA Project Registration &amp; Quarterly Progress Reports
                          </td>
                          <td className="p-4 text-slate-650">
                            Demonstrates developer construction defaults, lapsed completion dates, or failure to register commercial unit.
                          </td>
                          <td className="p-4 text-emerald-700 font-semibold">
                            Public statutory record admissible without formal witness proof.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-slate-900">
                            Advocate Title Search &amp; Encumbrance Certificate (EC)
                          </td>
                          <td className="p-4 text-slate-650">
                            Demonstrates undisclosed mortgages, bank charges, litigation attachments, or defect in vendor ownership.
                          </td>
                          <td className="p-4 text-emerald-700 font-semibold">
                            Conclusive proof of fraudulent inducement and title failure.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* ── SECTION 5: ESSENTIAL CLAUSES ─────────────────────────── */}
                <section id="essential-clauses" className="space-y-6 scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    5. Key Clauses in a Statutory Demand Notice to Builders &amp; Sellers
                  </h2>
                  <p className="text-base text-slate-650 leading-relaxed font-normal">
                    A boilerplate or generic demand notice fails to trigger institutional urgency in commercial counterparties. An advocate-drafted statutory notice must be custom-engineered to incorporate specific legal covenants, statutory citations, and multi-tier litigation warnings:
                  </p>

                  <div className="space-y-4">
                    <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50 space-y-2">
                      <h3 className="font-extrabold text-slate-900 text-sm md:text-base flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">
                          1
                        </span>
                        Factual Chronology of Transaction &amp; Consideration Remittance
                      </h3>
                      <p className="text-xs text-slate-650 leading-relaxed">
                        Itemizes the date of booking, description of the commercial immovable property (unit number, floor, super area, carpet area, municipal survey number), exact bank reference numbers (UTR), and total quantum of advance capital disbursed.
                      </p>
                    </div>

                    <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50 space-y-2">
                      <h3 className="font-extrabold text-slate-900 text-sm md:text-base flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">
                          2
                        </span>
                        Specific Covenants of Default &amp; Breach of Contract
                      </h3>
                      <p className="text-xs text-slate-650 leading-relaxed">
                        Details the counterparty’s failure to deliver sanction plans, obtain Commencement Certificate (CC), complete construction within agreed timelines, execute registered agreement for sale under RERA Section 13, or produce unencumbered title deeds.
                      </p>
                    </div>

                    <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50 space-y-2">
                      <h3 className="font-extrabold text-slate-900 text-sm md:text-base flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">
                          3
                        </span>
                        Rebuttal of Forfeiture &amp; Invocation of Kailash Nath Doctrine
                      </h3>
                      <p className="text-xs text-slate-650 leading-relaxed">
                        Formally rebuts any unilateral forfeiture clauses by citing Section 74 of the Contract Act and Supreme Court precedents, demanding that the vendor substantiate actual financial damages or immediately refund the deposit in full.
                      </p>
                    </div>

                    <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50 space-y-2">
                      <h3 className="font-extrabold text-slate-900 text-sm md:text-base flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">
                          4
                        </span>
                        Peremptory 15-Day Demand with Prescribed Commercial Interest
                      </h3>
                      <p className="text-xs text-slate-650 leading-relaxed">
                        Provides a strict 15-day peremptory deadline for the direct bank transfer of the principal advance plus compound interest calculated at SBI MCLR + 2% per annum under RERA rules or 18% commercial rate under contract law.
                      </p>
                    </div>

                    <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50 space-y-2">
                      <h3 className="font-extrabold text-slate-900 text-sm md:text-base flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">
                          5
                        </span>
                        Multi-Forum Judicial Escalation &amp; Director Liability Notice
                      </h3>
                      <p className="text-xs text-slate-650 leading-relaxed">
                        Puts company directors, partners, and managing promoters on notice that failure to comply will trigger Section 12A Commercial Mediation, RERA Section 18 complaints, Order 37 summary recovery suits, NCLT insolvency petitions, and criminal prosecution under Section 316/318 of the Bharatiya Nyaya Sanhita, 2023.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 6: LEGAL REMEDIES TABLE ──────────────────────── */}
                <section id="legal-remedies-table" className="space-y-6 scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    6. Multi-Forum Remedies: RERA, Commercial Court, CPC &amp; BNS
                  </h2>
                  <p className="text-base text-slate-650 leading-relaxed font-normal">
                    When the counterparty fails to comply with the statutory demand notice, the commercial buyer can select from several potent judicial forums based on the quantum of claim and corporate structure of the defaulting entity:
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs md:text-sm border-collapse bg-slate-50 rounded-2xl overflow-hidden">
                      <thead>
                        <tr className="bg-slate-900 text-white">
                          <th className="p-4 font-black">Judicial Forum / Remedy</th>
                          <th className="p-4 font-black">Statutory Ground</th>
                          <th className="p-4 font-black">Typical Resolution Timeline</th>
                          <th className="p-4 font-black">Key Strategic Advantage</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        <tr>
                          <td className="p-4 font-bold text-slate-900">
                            RERA Authority / Adjudicating Officer
                          </td>
                          <td className="p-4 text-slate-650">
                            Section 18 &amp; 31 of RERA Act, 2016 for project delays and failure of delivery.
                          </td>
                          <td className="p-4 font-semibold text-slate-800">4 – 8 Months</td>
                          <td className="p-4 text-slate-650">
                            Mandatory statutory interest (SBI MCLR + 2%) and power to attach project bank accounts.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-slate-900">
                            Commercial Court / Section 12A Mediation
                          </td>
                          <td className="p-4 text-slate-650">
                            Section 2(1)(c)(vii) &amp; Section 12A Commercial Courts Act, 2015 (Claims &ge; ₹3 Lakhs).
                          </td>
                          <td className="p-4 font-semibold text-slate-800">3 – 6 Months (PIMS)</td>
                          <td className="p-4 text-slate-650">
                            Fast-track mediation with summary judgment provisions under Order XIII-A CPC.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-slate-900">
                            Civil Court Summary Suit (Order 37 CPC)
                          </td>
                          <td className="p-4 text-slate-650">
                            Order 37 Code of Civil Procedure, 1908 for liquidated debts based on written MoUs/cheques.
                          </td>
                          <td className="p-4 font-semibold text-slate-800">6 – 12 Months</td>
                          <td className="p-4 text-slate-650">
                            Defendant must obtain leave to defend; failure results in immediate decree execution.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-slate-900">
                            National Company Law Tribunal (NCLT)
                          </td>
                          <td className="p-4 text-slate-650">
                            Section 7 or Section 9 of Insolvency and Bankruptcy Code, 2016 (IBC).
                          </td>
                          <td className="p-4 font-semibold text-slate-800">6 – 12 Months</td>
                          <td className="p-4 text-slate-650">
                            Threat of Corporate Insolvency Resolution Process (CIRP) ousting existing promoter management.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-slate-900">
                            Criminal Complaint under BNS 2023
                          </td>
                          <td className="p-4 text-slate-650">
                            Section 316 (Criminal Breach of Trust) &amp; Section 318 (Cheating) of Bharatiya Nyaya Sanhita.
                          </td>
                          <td className="p-4 font-semibold text-slate-800">2 – 6 Months</td>
                          <td className="p-4 text-slate-650">
                            Personal non-bailable exposure for company directors and managing promoters.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* ── SECTION 7: ACTION ROADMAP ────────────────────────────── */}
                <section id="action-roadmap" className="space-y-6 scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    7. Step-by-Step Legal Roadmap to Reclaim Stuck Property Funds
                  </h2>
                  <p className="text-base text-slate-650 leading-relaxed font-normal">
                    Legal Recovery executes a battle-tested 5-step operational protocol to maximize recovery speed while maintaining comprehensive judicial readiness:
                  </p>

                  <div className="relative border-l-2 border-red-200 ml-4 pl-6 space-y-8 my-8">
                    <div className="relative">
                      <div className="absolute -left-[35px] top-0 w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-xs ring-4 ring-red-100">
                        1
                      </div>
                      <h3 className="font-extrabold text-slate-900 text-base mb-1">
                        Dossier Compilation &amp; Financial Reconciliation
                      </h3>
                      <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                        Gather all transaction receipts, bank UTR numbers, booking application forms, draft agreements, email correspondence, and WhatsApp chats. Prepare a detailed calculation statement showing the principal advance and accrued statutory interest.
                      </p>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-[35px] top-0 w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-xs ring-4 ring-red-100">
                        2
                      </div>
                      <h3 className="font-extrabold text-slate-900 text-base mb-1">
                        Advocate Drafting &amp; Statutory Legal Notice Formulation
                      </h3>
                      <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                        A specialized real estate panel advocate drafts the formal statutory legal demand notice on legal letterhead, incorporating specific sections of the Indian Contract Act, RERA, Commercial Courts Act, and Bharatiya Nyaya Sanhita.
                      </p>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-[35px] top-0 w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-xs ring-4 ring-red-100">
                        3
                      </div>
                      <h3 className="font-extrabold text-slate-900 text-base mb-1">
                        Multi-Channel Service with Section 63 BSA Digital Tracking
                      </h3>
                      <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                        The notice is dispatched simultaneously via India Post Registered Speed Post with Acknowledgment Due (AD), official company email with read receipts, and verified WhatsApp with timestamped delivery tracking under Section 63 BSA.
                      </p>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-[35px] top-0 w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-xs ring-4 ring-red-100">
                        4
                      </div>
                      <h3 className="font-extrabold text-slate-900 text-base mb-1">
                        Pre-Litigation Settlement Negotiations &amp; Conciliation
                      </h3>
                      <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                        Over 78% of defaulting builders and property vendors initiate settlement discussions during the 15-day notice window to avoid public RERA filings, freezing of escrow accounts, or commercial court injunctions.
                      </p>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-[35px] top-0 w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-xs ring-4 ring-red-100">
                        5
                      </div>
                      <h3 className="font-extrabold text-slate-900 text-base mb-1">
                        Immediate Judicial Escalation upon Notice Expiry
                      </h3>
                      <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                        If the counterparty fails to settle the dues within the stipulated 15 days, our panel advocates immediately transition the matter into RERA Section 18 recovery proceedings, Section 12A commercial mediation, or Order 37 summary recovery suits.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 8: FAQS ──────────────────────────────────────── */}
                <section id="faqs" className="space-y-6 scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    8. Frequently Asked Questions
                  </h2>
                  <p className="text-sm text-slate-500">
                    Clear, authoritative answers to critical questions regarding commercial property disputes, advance refunds, and legal notice procedures in India.
                  </p>

                  <div className="space-y-4">
                    {faqs.map((faq, index) => {
                      const isExpanded = expandedFaqs.includes(`faq-${index}`);
                      return (
                        <div
                          key={index}
                          className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-white shadow-sm"
                        >
                          <button
                            onClick={() => toggleFaq(index)}
                            className="w-full text-left p-5 md:p-6 font-extrabold text-slate-900 flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors cursor-pointer text-sm md:text-base"
                            aria-expanded={isExpanded}
                          >
                            <span>{faq.question}</span>
                            <span
                              className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 transition-transform ${
                                isExpanded ? 'rotate-180 bg-red-100 text-[#DC2626]' : 'text-slate-500'
                              }`}
                            >
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                              </svg>
                            </span>
                          </button>
                          {isExpanded && (
                            <div className="px-5 pb-5 md:px-6 md:pb-6 text-xs md:text-sm text-slate-650 leading-relaxed border-t border-slate-100 pt-4 font-normal">
                              <p>{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* ── INTERNAL INTERLINKING GUIDES GRID ─────────────────────── */}
                <section className="border-t border-slate-100 pt-10 space-y-6">
                  <h3 className="text-xl font-black text-slate-900">
                    Related Real Estate &amp; Commercial Dispute Recovery Guides
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      {
                        title: 'Tenant Damaged Property Recovery',
                        href: '/send-a-legal-notice/recover-money-from-tenant-who-damaged-property',
                        desc: 'Recover repair damages and unpaid repair costs from defaulting tenants.',
                      },
                      {
                        title: 'Security Deposit Refund from Landlord',
                        href: '/send-a-legal-notice/security-deposit-not-refunded-landlord',
                        desc: 'Reclaim commercial and residential rental security deposits unlawfully withheld.',
                      },
                      {
                        title: 'Recover Unpaid Rent from Tenant',
                        href: '/send-a-legal-notice/recover-unpaid-rent-from-tenant-india',
                        desc: 'Statutory demand notice and eviction proceedings under the Transfer of Property Act.',
                      },
                      {
                        title: 'Business Unpaid Dues Recovery',
                        href: '/send-a-legal-notice/for-business-to-recover-their-unpaid-dues',
                        desc: 'Fast-track recovery for corporate vendors, suppliers, and B2B commercial dues.',
                      },
                      {
                        title: 'B2B Pending Invoice Recovery',
                        href: '/send-a-legal-notice/b2b-invoice-not-recieved',
                        desc: 'Enforce MSMED Act 45-day payment statutory deadlines with compound interest.',
                      },
                      {
                        title: 'Business Partner Cheating & Dues',
                        href: '/send-a-legal-notice/recover-money-from-business-partner-cheating-india',
                        desc: 'Recover diverted commercial partnership profits and misappropriated capital.',
                      },
                    ].map((guide, i) => (
                      <Link
                        key={i}
                        href={guide.href}
                        className="p-4 rounded-xl border border-slate-200 bg-white hover:border-[#DC2626] transition-all group block shadow-xs"
                      >
                        <h4 className="font-extrabold text-xs md:text-sm text-slate-900 group-hover:text-[#DC2626] mb-1">
                          {guide.title}
                        </h4>
                        <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                          {guide.desc}
                        </p>
                      </Link>
                    ))}
                  </div>
                </section>

                {/* ── LEGAL RECOVERY COMPANY FOOTER SECTION ─────────────────── */}
                <section className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100">
                  <div className="flex items-center gap-3 mb-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/lrlogo.svg" alt="Legal Recovery Logo" className="h-8 w-auto" />
                    <div>
                      <h3 className="font-black text-slate-900 text-base">Legal Recovery</h3>
                      <p className="text-xs text-slate-500">India&apos;s Trusted Recovery Platform</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-650 leading-relaxed mb-6">
                    Legal Recovery is India&apos;s premier online legal notice and commercial dispute resolution platform, connecting property buyers, real estate investors, corporate tenants, and commercial allottees with seasoned panel advocates for rapid, advocate-vetted statutory demand notices at transparent flat fees. With ₹100 Crore+ recovered and 10,000+ disputes resolved across India, Legal Recovery delivers verified legal impact without the delays and unpredictability of traditional law firms.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { label: 'Send a Legal Notice', href: '/send-a-legal-notice' },
                      { label: 'Property & Builder Dispute Services', href: '/services/property-and-builder-disputes' },
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
                  Property Money Stuck with Builder or Seller?
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  Send an advocate-vetted statutory notice today. Over 78% of developers and property vendors settle refund claims within 15 days of notice service.
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
                  <span className="text-slate-400 text-xs">/5 (389 reviews)</span>
                </div>

                {/* Review card — must match JSON-LD Product > Review word-for-word */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#DC2626]/10 flex items-center justify-center font-black text-[#DC2626] text-xs">
                      SK
                    </div>
                    <div>
                      <p className="font-extrabold text-slate-900 text-xs">Siddharth Kulkarni</p>
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
                  { stat: '78%', label: 'Defaulting developers & sellers settle before litigation' },
                  { stat: '₹100CR+', label: 'Total amount recovered across real estate & commercial disputes' },
                  { stat: 'Same Day', label: 'Advocate notice drafted and dispatched' },
                  { stat: 'Flat Fee', label: 'Transparent pricing with zero hidden commissions' },
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
