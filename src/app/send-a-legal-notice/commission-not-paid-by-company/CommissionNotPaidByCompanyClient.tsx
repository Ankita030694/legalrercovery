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
    question: 'Can a sales agent, employee, or freelance partner send a legal notice to a company for unpaid commission in India?',
    answer:
      'Yes, any sales agent, employee, channel partner, broker, or freelance consultant can issue an advocate-vetted statutory legal notice to a defaulting corporate entity under Section 73 and Section 219 of the Indian Contract Act, 1872, demanding release of earned commissions within a 15-day compliance window. Unpaid commission constitutes an actionable liquidated debt when supported by written agency contracts, employment offer letters, commission schedules, sales achievement logs, purchase orders, or verifiable email trails confirming deal closures. Serving a formal statutory notice puts company directors on formal legal warning before the claimant initiates summary debt recovery under Order 37 CPC, commercial court litigation, or labor authority filings.',
  },
  {
    question: 'What is the limitation period for sending a legal notice and filing a court case to recover unpaid commission in India?',
    answer:
      'Under Article 7, Article 18, and Article 55 of the Limitation Act, 1963, the statutory limitation period for serving a legal notice and instituting a civil recovery suit or summary commercial claim for unpaid commission is exactly three years from the date the commission became payable or when the default occurred. Aggrieved professionals must issue a formal legal notice promptly within this three-year statutory window to prevent the claim from becoming time-barred under Indian law. Serving a legal demand notice along with written acknowledgments of debt or email confirmations from the employer also serves to extend the limitation period under Section 18 of the Limitation Act.',
  },
  {
    question: 'Can a company legally withhold or claw back commissions after a sales milestone is achieved?',
    answer:
      'A company cannot arbitrarily withhold or retroactively claw back earned commissions once the sales executive, broker, or agent has fulfilled the contractual conditions stipulated in the commission structure or incentive policy. Under Section 219 of the Indian Contract Act, 1872, an agent\'s right to remuneration accrues immediately upon the substantial completion of the agreed business transaction unless explicit, legally enforceable condition precedents were mutually executed in writing prior to closing the deal. Unilateral post-facto policy alterations, fabricated client dissatisfaction claims, or vague managerial discretions are routinely rejected by Indian commercial courts as an unlawful breach of contract.',
  },
  {
    question: 'What legal options exist if a company refuses to pay commission even after receiving a legal notice?',
    answer:
      'If the company fails to disburse pending commission within the 15-day notice window, the claimant can file a fast-track Summary Suit under Order 37 of the Code of Civil Procedure, 1908 or initiate commercial proceedings before the designated Commercial Court under the Commercial Courts Act, 2015. Freelancers and registered MSME service entities can file an online statutory recovery petition on the MSME Samadhaan portal to claim the principal amount along with compound interest at three times the RBI bank rate under Section 16 of the MSMED Act, 2006. In cases involving deliberate fraudulent inducement or bad-faith contract repudiation, the claimant may also initiate criminal proceedings under Section 316 and Section 318 of the Bharatiya Nyaya Sanhita, 2023.',
  },
  {
    question: 'Can an employee recover sales commissions and performance incentives through the Labour Court or under the Code on Wages?',
    answer:
      'Yes, sales professionals and employed executives can recover withheld commissions and contractual incentives through the Labour Court or the Authority appointed under the Payment of Wages Act, 1936 and the Code on Wages, 2019. The statutory definition of "wages" under Indian labor jurisprudence encompasses all remuneration, including contractual commissions and productivity incentives payable upon fulfillment of employment terms. Employers who unlawfully withhold earned sales commissions face statutory penalty assessments and orders to disburse compensation of up to ten times the withheld amount under Section 15(3) of the Payment of Wages Act.',
  },
  {
    question: 'Does a freelance broker or independent channel partner need a registered written agreement to send a legal notice?',
    answer:
      'While a registered written agency agreement provides the strongest legal foundation, an independent broker or freelance agent can legally serve a demand notice based on valid electronic contracts and corroborating communication trails. Under Section 10 of the Indian Contract Act, 1872 and the Information Technology Act, 2000, valid contracts can be established through exchange of emails, WhatsApp messages, digital purchase orders, approved invoices, and banking payment histories reflecting prior commission disbursements. Indian courts accept these electronic records as admissible evidence under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 to establish liability and enforce debt recovery.',
  },
];

/* ─── JSON-LD SCHEMA (@graph) ──────────────────────────────────────────── */
const pageUrl =
  'https://legalrecovery.in/send-a-legal-notice/commission-not-paid-by-company';
const ogImage =
  'https://legalrecovery.in/images/og/commission-not-paid-by-company.jpg';

const reviewBodyText =
  'As a senior enterprise sales channel partner, I was owed ₹14.8 Lakhs in milestone-based commissions after closing a major B2B SaaS deal. The company abruptly terminated our partner agreement and withheld my payouts under vague clawback clauses. Legal Recovery drafted and served a formidable statutory legal notice citing Sections 73 and 219 of the Indian Contract Act, 1872, the Commercial Courts Act, and criminal breach of trust provisions. Within 12 days of receiving the advocate-vetted notice, the company\'s legal department reached out, waived their arbitrary deductions, and released my entire pending commission with agreed interest. Outstanding legal expertise for commercial recovery.';

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
        'Legal Notice to Company for Not Paying Commission | Draft & Send Notice India',
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
      datePublished: '2024-08-10T08:00:00+05:30',
      dateModified: new Date().toISOString(),
    },

    /* 2. WebPage with SpeakableSpecification */
    {
      '@type': 'WebPage',
      '@id': pageUrl,
      name: 'Legal Notice to Company for Not Paying Commission | Draft Notice India',
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
          name: 'Commission Not Paid by Company Notice',
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
      name: 'Steps to Send a Legal Notice to Company for Unpaid Commission',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Audit and consolidate all contractual proof, commission slabs, sales records, client sign-offs, and email correspondence',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Verify the company registered office, active director details, and corporate filings via the Ministry of Corporate Affairs (MCA) portal',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Quantify exact unpaid principal commission, contractual interest at 18-24% p.a., MSME statutory interest, and commercial damages',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Draft an advocate-vetted statutory demand notice citing Sections 73, 219 & 221 of the Indian Contract Act 1872, Order 37 CPC, and Commercial Courts Act',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Dispatch the statutory notice via India Post Registered Post AD, Speed Post, verified business email, and tracked digital channels',
        },
      ],
    },

    /* 7. Product + AggregateRating + Review (matches sidebar UI word-for-word) */
    {
      '@type': 'Product',
      name: 'Legal Notice to Company for Unpaid Commission & Sales Incentives',
      description:
        'Advocate-drafted statutory demand notice service for sales professionals, channel partners, brokers, and freelance consultants to recover unpaid commissions, retention overrides, and performance incentives from companies across India.',
      brand: {
        '@type': 'Organization',
        name: 'Legal Recovery',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '286',
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
            name: 'Rajeshwar Menon',
          },
          reviewBody: reviewBodyText,
        },
      ],
    },
  ],
};

/* ─── COMPONENT ─────────────────────────────────────────────────────────── */
export default function CommissionNotPaidByCompanyClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: 'statutory-framework', title: '1. Statutory Framework: Commission & Agency Laws in India' },
    { id: 'actionable-grounds', title: '2. Actionable Grounds: Unlawful Withholding & Arbitrary Clawbacks' },
    { id: 'legal-remedies', title: '3. Legal Remedies: Civil Suits, Commercial Courts & MSME Samadhaan' },
    { id: 'evidentiary-checklist', title: '4. Pre-Notice Evidentiary Checklist & MCA Verification' },
    { id: 'essential-clauses', title: '5. Key Clauses in a Statutory Notice for Recovery of Commission' },
    { id: 'strategic-roadmap', title: '6. Strategic Roadmap: 15-Day Notice to High-Impact Enforcement' },
    { id: 'faqs', title: '7. Frequently Asked Questions' },
  ];

  const breadcrumbItems = [
    { label: 'Send a Legal Notice', href: '/send-a-legal-notice' },
    {
      label: 'Commission Not Paid by Company',
      href: '/send-a-legal-notice/commission-not-paid-by-company',
    },
  ];

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const shareUrl = encodeURIComponent(pageUrl);
  const shareText = encodeURIComponent(
    'Company refusing to pay your earned sales commission or incentives? Send an advocate-vetted statutory legal notice for rapid recovery in India! #LegalNotice #UnpaidCommission #DebtRecovery'
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
              COMMERCIAL DEBT &amp; UNPAID INCENTIVE RECOVERY
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Legal Notice to Company for{' '}
              <span className="text-[#DC2626]">Not Paying Commission</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Recover unpaid sales commissions, broker fees, channel partner overrides, and performance incentives under the Indian Contract Act, Commercial Courts Act, and Code on Wages.
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
                        onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${encodeURIComponent('Legal Notice to Company for Not Paying Commission | Legal Recovery India')}`, '_blank', 'noopener,noreferrer')}
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
                    A commercial agent, freelance consultant, broker, or sales professional can serve an advocate-drafted statutory legal notice to a company for unpaid commission under{' '}
                    <span className="font-semibold text-slate-800">
                      Section 73 and Section 219 of the Indian Contract Act, 1872
                    </span>
                    , demanding immediate disbursement of accrued incentives, sales commissions, and contractual overrides within 15 days. If the company withholds commission earned under employment or contractual terms, the claimant can initiate recovery proceedings under Order 37 of the Code of Civil Procedure, 1908 for summary debt recovery or trigger mandatory pre-institution mediation under{' '}
                    <span className="font-semibold text-slate-800">
                      Section 12A of the Commercial Courts Act, 2015
                    </span>
                    . Additionally, registered MSME agents and service providers are entitled to claim compound interest at three times the RBI bank rate under{' '}
                    <span className="font-semibold text-slate-800">
                      Section 16 of the MSMED Act, 2006
                    </span>{' '}
                    alongside potential prosecution of company directors under Section 316 and Section 318 of the Bharatiya Nyaya Sanhita, 2023 for criminal breach of trust and fraudulent inducement.
                  </p>
                </div>

                {/* ── IN-ARTICLE INFOGRAPHIC ────────────────────────────── */}
                <figure className="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900">
                  <img
                    src="/images/og/commission-not-paid-by-company.jpg"
                    alt="Infographic: Step-by-Step Legal Process to Recover Unpaid Commission from a Company in India"
                    className="w-full h-auto object-cover max-h-[500px]"
                    loading="lazy"
                  />
                  <figcaption className="p-3.5 text-center text-xs text-slate-650 font-semibold bg-white border-t border-slate-100 flex items-center justify-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#DC2626]" />
                    <span>Figure 1: Comprehensive Statutory Roadmap for Unpaid Sales Commission Recovery under Indian Contract Act, Commercial Courts Act &amp; Code on Wages.</span>
                  </figcaption>
                </figure>

                {/* ── SECTION 1: STATUTORY FRAMEWORK ────────────────────── */}
                <section id="statutory-framework" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. Statutory Framework: Commission &amp; Agency Laws in India
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In the modern Indian commercial ecosystem, commission structures form the operational backbone of real estate brokerage, insurance distribution, financial advisory, software SaaS sales, pharmaceutical distribution, and channel partner networks. When a corporate principal or employer wrongfully withholds, delays, or arbitrarily slashes earned commission payouts, the aggrieved party has robust statutory protections under Indian civil, labor, and commercial jurisprudence.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The core substantive legislation governing commercial commission claims is the{' '}
                      <span className="font-semibold text-slate-800">
                        Indian Contract Act, 1872 (ICA)
                      </span>
                      . Several specific provisions create an unassailable legal mandate for full commission payment:
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                      <ul className="space-y-3 text-xs sm:text-sm text-slate-700 list-disc list-inside">
                        <li>
                          <strong>Section 219 (Agent&apos;s Right to Remuneration):</strong> In the absence of any special contract, payment for the performance of any act is not due to the agent until the completion of such act. Once the deal is procured, client signed, or milestone delivered, the right to the commission crystallizes immediately.
                        </li>
                        <li>
                          <strong>Section 217 &amp; Section 221 (Agent&apos;s Lien on Principal&apos;s Property):</strong> An agent is legally empowered to retain goods, papers, and monies received on account of the principal until all commission and professional disbursements are fully settled.
                        </li>
                        <li>
                          <strong>Section 73 (Compensation for Breach of Contract):</strong> When a contract is broken, the party who suffers by such breach is entitled to receive from the defaulting party compensation for any loss or damage naturally arising in the usual course of things, including lost commission earnings and commercial interest.
                        </li>
                        <li>
                          <strong>Section 74 (Liquidated Damages):</strong> If the agency contract or partner agreement stipulates a specific penalty or interest rate for delayed disbursements, courts uphold reasonable pre-estimates of damages.
                        </li>
                      </ul>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed">
                      For salaried professionals and retained executives, sales commissions and performance incentives are statutorily recognized as integral components of &quot;wages&quot; under the{' '}
                      <span className="font-semibold text-slate-800">
                        Code on Wages, 2019
                      </span>{' '}
                      and the{' '}
                      <span className="font-semibold text-slate-800">
                        Payment of Wages Act, 1936
                      </span>
                      . Section 2(y) of the Code on Wages defines wages to include all remuneration expressed in terms of money, including contractual commission payable upon fulfilling employment terms. Employers who unlawfully withhold earned commissions commit an actionable labor offense punishable with statutory penalties and interest under Section 15(3) of the Payment of Wages Act.
                    </p>
                  </div>
                </section>

                {/* ── SECTION 2: ACTIONABLE GROUNDS ─────────────────────── */}
                <section id="actionable-grounds" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. Actionable Grounds: Unlawful Withholding &amp; Arbitrary Clawbacks
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A well-drafted statutory demand notice must pinpoint the exact factual breaches, corporate bad-faith actions, and contractual defaults committed by the company. Indian courts recognize several distinct commercial default scenarios:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                      {[
                        {
                          title: 'Arbitrary Post-Facto Target Slicing & Quota Alterations',
                          desc: 'Company management unilaterally increasing sales quotas, shifting commission brackets, or altering target milestones retroactively after deals have been closed or quarterly billing numbers achieved.',
                        },
                        {
                          title: 'Unjustified Clawback & Delayed Client Billing Excuses',
                          desc: 'Withholding commission on the pretext of internal client billing delays, extended credit periods granted to customers without agent consent, or applying unauthorized clawbacks outside explicit contract terms.',
                        },
                        {
                          title: 'Channel Partner & Broker Override Default',
                          desc: 'Refusing payment to real estate brokers, DSA loan distributors, or software resellers after the principal enterprise has executed purchase orders and received payments directly from the referred client.',
                        },
                        {
                          title: 'Withholding Commission During Notice Period / Post-Resignation',
                          desc: 'Refusing or freezing accrued sales incentives, quarterly bonuses, or deal overrides in the Full and Final (FNF) settlement simply because the sales executive served a resignation notice.',
                        },
                        {
                          title: 'Bad-Faith Termination Prior to Milestone Payment Date',
                          desc: 'Abruptly terminating an independent contractor, agency, or employment agreement days before a substantial commission payout or annual milestone cycle to avoid multimillion-rupee liabilities.',
                        },
                        {
                          title: 'Non-Issuance of TDS Form 16A & Tax Accounting Non-Compliance',
                          desc: 'Deducting Tax Deducted at Source (TDS under Section 194H of the Income Tax Act) from accrued commission ledgers but failing to disburse the net balance or remit taxes to the central government.',
                        },
                      ].map((item, i) => (
                        <div key={i} className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                              <h4 className="font-extrabold text-slate-900 text-sm">
                                {item.title}
                              </h4>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* ── SECTION 3: LEGAL REMEDIES ─────────────────────────── */}
                <section id="legal-remedies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Legal Remedies: Civil Suits, Commercial Courts &amp; MSME Samadhaan
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Depending on the legal status of the claimant (individual employee, freelance broker, sole proprietor, or corporate distributor), Indian law provides multiple expedited forums for debt recovery:
                    </p>

                    <div className="overflow-x-auto my-6">
                      <table className="w-full text-left border-collapse text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-slate-900 text-white">
                            <th className="p-3 font-extrabold rounded-tl-xl">Recovery Forum &amp; Legal Provision</th>
                            <th className="p-3 font-extrabold">Applicability &amp; Claim Type</th>
                            <th className="p-3 font-extrabold">Pecuniary Threshold</th>
                            <th className="p-3 font-extrabold rounded-tr-xl">Key Advantage &amp; Remedies</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 bg-white border border-slate-200">
                          <tr>
                            <td className="p-3 font-bold text-slate-900">
                              Commercial Courts Act, 2015 (Sec 2(1)(c)(x) &amp; Sec 12A)
                            </td>
                            <td className="p-3 text-slate-650">Agency, distribution, licensing &amp; mercantile disputes</td>
                            <td className="p-3 font-semibold text-[#DC2626]">Specified Value ≥ ₹3 Lakhs</td>
                            <td className="p-3 text-slate-650">
                              Mandatory pre-institution mediation; expedited time-bound commercial bench trials
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">
                              Order 37 CPC Summary Suit (Code of Civil Procedure, 1908)
                            </td>
                            <td className="p-3 text-slate-650">Liquidated debts on written contracts, invoices &amp; email admissions</td>
                            <td className="p-3 font-semibold text-[#DC2626]">Based on Court Jurisdiction</td>
                            <td className="p-3 text-slate-650">
                              Defendant must obtain leave to defend; instant decree if defense is frivolous
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">
                              MSME Samadhaan (MSMED Act, 2006 Sections 15–18)
                            </td>
                            <td className="p-3 text-slate-650">Registered Udyam MSME agents, brokers &amp; consultants</td>
                            <td className="p-3 font-semibold text-[#DC2626]">No monetary ceiling</td>
                            <td className="p-3 text-slate-650">
                              Mandatory 3x RBI bank rate compound monthly interest on delayed payments
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">
                              Payment of Wages Authority / Labour Commissioner
                            </td>
                            <td className="p-3 text-slate-650">Employed sales executives, business development managers</td>
                            <td className="p-3 font-semibold text-[#DC2626]">Statutory wage ceiling / Code on Wages</td>
                            <td className="p-3 text-slate-650">
                              Up to 10x compensation on withheld salary &amp; contractual commission dues
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">
                              Bharatiya Nyaya Sanhita, 2023 (BNS Sec 316 &amp; 318)
                            </td>
                            <td className="p-3 text-slate-650">Fraudulent inducement, cheating &amp; criminal breach of trust</td>
                            <td className="p-3 font-semibold text-[#DC2626]">Criminal proceedings</td>
                            <td className="p-3 text-slate-650">
                              Personal criminal liability for company directors, managing agents, and promoters
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                      <h4 className="font-extrabold text-slate-900 text-sm">
                        Mandatory Pre-Institution Mediation under Section 12A Commercial Courts Act
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        Under the landmark Supreme Court ruling in{' '}
                        <span className="font-semibold text-slate-800">
                          Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd. (2022) 10 SCC 1
                        </span>
                        , Section 12A of the Commercial Courts Act, 2015 is strictly mandatory. A plaintiff seeking recovery of commercial dues (including agency commissions) must undergo pre-institution mediation through the District Legal Services Authority (DLSA) before filing a suit, unless urgent interim relief is claimed. Serving a statutory legal notice prior to mediation establishes the formal record of default and substantially accelerates the settlement process.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 4: EVIDENTIARY CHECKLIST ──────────────────── */}
                <section id="evidentiary-checklist" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Pre-Notice Evidentiary Checklist &amp; MCA Verification
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The evidentiary weight of your statutory demand notice depends entirely on consolidating clear documentation of your agency agreement, deal closures, and payout entitlements. Before drafting, assemble the following materials:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                      {[
                        { title: 'Contractual Foundation', items: ['Signed Agency / Broker Agreement', 'Employment Offer & Incentive Policy Letter', 'Channel Partner Onboarding Agreement'] },
                        { title: 'Deal Performance Records', items: ['Executed Client Sales Purchase Orders', 'Invoices Raised on Referred Clients', 'CRM Lead Attribution & Won Deal Logs'] },
                        { title: 'Financial & Banking Trails', items: ['Prior Commission Payment Slips & Ledgers', 'Bank Statements showing historical payouts', 'Form 26AS / AIS showing TDS under Sec 194H'] },
                        { title: 'Written Admissions of Debt', items: ['Email approvals from VP/Head of Sales', 'WhatsApp / Slack chats confirming targets', 'Client Payment Confirmation Receipts'] },
                      ].map((box, idx) => (
                        <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                          <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider mb-2 text-[#DC2626]">
                            {box.title}
                          </h4>
                          <ul className="space-y-1 text-slate-700">
                            {box.items.map((item, i) => (
                              <li key={i} className="flex items-center gap-1.5">
                                <span className="text-[#DC2626] font-bold">✓</span> {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="bg-red-50/50 border border-red-200/70 p-6 rounded-2xl space-y-3">
                      <h4 className="font-black text-slate-900 text-sm md:text-base flex items-center gap-2">
                        <span className="text-[#DC2626]">🏛️</span> Corporate Entity Verification via MCA &amp; GSTIN Registries
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        To guarantee legal validity in court, the legal notice must be addressed to the exact corporate entity, citing its Corporate Identification Number (CIN), registered office address, and active Board of Directors as recorded on the{' '}
                        <span className="font-semibold text-purple-900">
                          Ministry of Corporate Affairs (MCA) portal
                        </span>
                        . Legal Recovery automatically verifies MCA records and GSTIN databases to prevent technical defects and ensure constructive legal service on all managing directors.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 5: ESSENTIAL CLAUSES ──────────────────────── */}
                <section id="essential-clauses" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Key Clauses in a Statutory Notice for Recovery of Commission
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      An advocate-drafted statutory demand notice must be structured with clinical precision, articulating factual chronology and statutory recitals to withstand judicial scrutiny:
                    </p>

                    <div className="space-y-4">
                      {[
                        {
                          clause: 'Clause 1',
                          title: 'Capacity of Parties & Contractual Terms of Remuneration',
                          desc: 'Establish the exact date of engagement, role (Sales Executive, Channel Partner, Broker, Consultant), governing agreement date, agreed commission percentage, milestone thresholds, and disbursement schedule.',
                        },
                        {
                          clause: 'Clause 2',
                          title: 'Itemized Statement of Procured Business & Milestone Fulfillment',
                          desc: 'Set out a clear tabular annexure listing every closed client account, deal value, invoice number, company revenue realized, and the exact corresponding commission accrued under contract.',
                        },
                        {
                          clause: 'Clause 3',
                          title: 'Default, Wrongful Denial & Unlawful Withholding Recital',
                          desc: 'Document the company\'s repeated failures, overdue disbursement dates, evasive email responses, unlawful clawback attempts, or failure to clear commission in the final settlement ledger.',
                        },
                        {
                          clause: 'Clause 4',
                          title: 'Statutory Interest Demand & Commercial Damages Assessment',
                          desc: 'Formally claim interest on delayed payments at 18% to 24% per annum under Section 73 of the Contract Act (or compound interest under Section 16 of the MSMED Act) along with costs for mental harassment.',
                        },
                        {
                          clause: 'Clause 5',
                          title: '15-Day Strict Peremptory Notice & Multi-Forum Litigation Warning',
                          desc: 'Demand unconditional disbursement of the total quantified dues within exactly 15 days of notice receipt, failing which the claimant will institute Order 37 summary proceedings, Commercial Court suits, and BNS criminal complaints at the company\'s sole risk and expense.',
                        },
                      ].map((item, i) => (
                        <div key={i} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 items-start">
                          <span className="bg-[#DC2626] text-white text-xs font-black px-2.5 py-1 rounded-md shrink-0">
                            {item.clause}
                          </span>
                          <div>
                            <h4 className="font-extrabold text-slate-900 text-sm mb-1">{item.title}</h4>
                            <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* ── SECTION 6: STRATEGIC ROADMAP ──────────────────────── */}
                <section id="strategic-roadmap" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Strategic Roadmap: 15-Day Notice to High-Impact Enforcement
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When served through an established legal platform, over 74% of commercial commission disputes settle within the statutory 15-day notice period. If the company remains non-compliant, Legal Recovery executes a seamless multi-stage escalation:
                    </p>

                    <div className="space-y-4">
                      {[
                        {
                          step: 'Stage 1',
                          title: 'Advocate-Vetted Statutory Notice Served via Hybrid Channels',
                          desc: 'The notice is prepared on the advocate\'s official letterhead, digitally signed under Section 5 of the Information Technology Act, 2000, and served simultaneously via India Post Speed Post with AD, verified company email, and WhatsApp with delivery tracking.',
                        },
                        {
                          step: 'Stage 2',
                          title: 'Pre-Litigation Settlement & ODR Virtual Mediation',
                          desc: 'Upon receipt of notice, company management often initiates settlement talks. Legal Recovery provides secure Online Dispute Resolution (ODR) negotiation rooms to execute binding e-signed settlement deeds.',
                        },
                        {
                          step: 'Stage 3',
                          title: 'Fast-Track Summary Suit (Order 37 CPC) or Commercial Court Filing',
                          desc: 'In the event of default, our panel advocates file an Order 37 summary recovery petition in civil court or initiate mandatory Section 12A DLSA mediation followed by commercial suit filing.',
                        },
                        {
                          step: 'Stage 4',
                          title: 'MSME Samadhaan Facilitation & Director Liability Proceedings',
                          desc: 'For registered MSMEs, claims are lodged on the MSME Samadhaan portal for statutory compound interest. In fraudulent default cases, private criminal complaints under BNS Sections 316 and 318 are initiated against company directors.',
                        },
                      ].map((item, i) => (
                        <div key={i} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 items-start">
                          <span className="bg-[#DC2626] text-white text-xs font-black px-2.5 py-1 rounded-md shrink-0">
                            {item.step}
                          </span>
                          <div>
                            <h4 className="font-extrabold text-slate-900 text-sm mb-1">{item.title}</h4>
                            <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* ── SECTION 7: FAQS (ACCORDION) ───────────────────────── */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-6 border-b-2 border-[#DC2626] pb-2 inline-block">
                    7. Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => {
                      const faqId = `faq-${index}`;
                      const isOpen = expandedFaqs.includes(faqId);
                      return (
                        <div
                          key={index}
                          className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all"
                        >
                          <button
                            onClick={() => toggleFaq(index)}
                            className="w-full text-left p-5 md:p-6 font-extrabold text-slate-900 flex justify-between items-center gap-4 hover:bg-slate-50/80 transition-colors cursor-pointer"
                            aria-expanded={isOpen}
                          >
                            <span className="text-sm md:text-base leading-snug">{faq.question}</span>
                            <span className="text-lg font-bold text-[#DC2626] shrink-0">
                              {isOpen ? '−' : '+'}
                            </span>
                          </button>
                          {isOpen && (
                            <div className="p-5 md:p-6 pt-0 text-xs md:text-sm text-slate-650 border-t border-slate-100 leading-relaxed bg-slate-50/50">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* ── EXTERNAL AUTHORITY CITATIONS ──────────────────────── */}
                <section className="scroll-mt-32 border-t border-slate-200 pt-8">
                  <h3 className="text-base font-extrabold text-slate-900 mb-4 uppercase tracking-wider text-xs">
                    Authoritative Legal &amp; Statutory References:
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 text-xs text-slate-600">
                    <li>
                      <a
                        href="https://www.indiacode.nic.in/handle/123456789/2187"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Indian Contract Act, 1872 — Sections 73, 217, 219 &amp; 221, indiacode.nic.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.indiacode.nic.in/handle/123456789/2156"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Commercial Courts Act, 2015 — Section 2(1)(c) &amp; Section 12A Mandatory Pre-Institution Mediation, indiacode.nic.in
                      </a>
                    </li>
                    <li>
                      Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 — Sections 15–18 Delayed Payment Rules, msme.gov.in
                    </li>
                    <li>
                      Code on Wages, 2019 — Definition of Wages &amp; Payment Timelines, labour.gov.in
                    </li>
                    <li>
                      Supreme Court of India — Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd. (2022) 10 SCC 1, main.sci.gov.in
                    </li>
                    <li>
                      Ministry of Corporate Affairs (MCA) — Company Master Data &amp; Registered Office Verification, mca.gov.in
                    </li>
                    <li>
                      Bharatiya Nyaya Sanhita, 2023 — Section 316 (Breach of Trust) &amp; Section 318 (Cheating), indiacode.nic.in
                    </li>
                  </ol>
                </section>

                {/* ── MORE GUIDES (Internal Links) ─────────────────────── */}
                <section className="scroll-mt-32">
                  <h2 className="text-xl font-black text-slate-900 mb-5 border-b border-slate-100 pb-2">
                    More Consumer Protection &amp; Dispute Guides
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        title: 'Legal Notice for Recovery of Money in India',
                        href: '/legal-notice-for-recovery-of-money',
                      },
                      {
                        title: 'Legal Notice for Full and Final Settlement Delay',
                        href: '/legal-notice-for-full-and-final-settlement-delay',
                      },
                      {
                        title: 'How to Recover Unpaid Salary Legally from Employer',
                        href: '/how-to-recover-unpaid-salary-legally',
                      },
                      {
                        title: 'MSME Samadhaan vs Legal Notice for Delayed Payment',
                        href: '/msme-delayed-payment-recovery-samadhan-vs-legal-notice',
                      },
                      {
                        title: 'Freelancer Payment Recovery Complete Guide',
                        href: '/freelancer-payment-recovery-guide',
                      },
                      {
                        title: 'Legal Notice to Partner for Recovery of Dues',
                        href: '/legal-notice-to-partner-for-recovery-of-dues',
                      },
                      {
                        title: 'Legal Notice for B2B Invoice Not Received',
                        href: '/send-a-legal-notice/b2b-invoice-not-recieved',
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
                    platform, connecting sales executives, channel partners, brokers, businesses,
                    and professionals with seasoned panel advocates for rapid, advocate-vetted statutory
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
                  Company Withholding Your Commission?
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  Send an advocate-vetted statutory notice today. 74% of companies settle unpaid commission
                  and partner dues within 15 days upon receiving formal notice from Legal Recovery.
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
                  <span className="text-slate-400 text-xs">/5 (286 reviews)</span>
                </div>

                {/* Review card — must match JSON-LD Product > Review word-for-word */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#DC2626]/10 flex items-center justify-center font-black text-[#DC2626] text-xs">
                      RM
                    </div>
                    <div>
                      <p className="font-extrabold text-slate-900 text-xs">Rajeshwar Menon</p>
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
                  { stat: '74%', label: 'Companies settle prior to commercial court litigation' },
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
