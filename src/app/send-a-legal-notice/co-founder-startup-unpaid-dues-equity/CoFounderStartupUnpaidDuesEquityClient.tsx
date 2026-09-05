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
    question:
      'Can a startup co-founder send a legal notice to recover unpaid compensation and enforce vested equity allocation in India?',
    answer:
      'Yes, an aggrieved co-founder can issue an advocate-vetted statutory legal demand notice under Section 73 of the Indian Contract Act, 1872, and Sections 56, 88, and 169 of the Companies Act, 2013, demanding immediate disbursement of unpaid remuneration and formal allotment or transfer of vested equity shares. A formal legal demand puts the defaulting co-founders and the startup corporate entity on strict statutory notice to rectify the cap table and settle monetary liabilities within a 15-day compliance window. If the company fails to comply, the notice serves as foundational documentary evidence before the National Company Law Tribunal (NCLT) for oppression and mismanagement or in commercial courts for summary debt recovery and specific performance.',
  },
  {
    question:
      'What legal remedies exist if a co-founder is illegally ousted from a startup without receiving vested shares?',
    answer:
      'If a co-founder is ousted through board manipulation or bad-faith termination, the aggrieved founder can file a company petition under Section 241 and Section 242 of the Companies Act, 2013 before the NCLT seeking reinstatement, rectification of the Register of Members under Section 88, and cancellation of unauthorized equity issuances. The claimant can also invoke Section 9 of the Arbitration and Conciliation Act, 1996 or Order 39 of the Code of Civil Procedure, 1908 before a High Court or Commercial Court to secure urgent interim injunctions restraining the startup from transferring shares, raising subsequent funding rounds, or altering the shareholding structure. Additionally, an action for specific performance under Section 10 of the Specific Relief Act, 1963 compels the company to transfer the agreed equity percentage.',
  },
  {
    question:
      'Can a co-founder enforce an unwritten or email-based agreement regarding startup equity and deferred remuneration?',
    answer:
      'Under Section 10 of the Indian Contract Act, 1872 and the Information Technology Act, 2000, valid contracts can be established through exchange of emails, signed term sheets, WhatsApp correspondence, pitch deck representations to investors, and corporate governance filings. Indian commercial courts and tribunals recognize electronic communications as legally binding agreements when they demonstrate offer, acceptance, mutual intention, and valuable consideration (such as technical development, client onboarding, or intellectual property creation). These electronic records are admissible under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 to establish equity entitlement and substantiate claims for unpaid founder dues.',
  },
  {
    question:
      'How does reverse vesting work in Indian startup contracts, and can the company forfeit vested shares upon departure?',
    answer:
      'Reverse vesting is a contractual mechanism where co-founders earn their equity over a predetermined vesting schedule (typically 4 years with a 1-year cliff), with unvested shares subject to company repurchase at face value upon departure. However, a startup cannot legally forfeit, claw back, or cancel equity shares that have already vested during the founder\'s tenure unless explicit "bad leaver" criteria (such as proven fraud or criminal conviction) are established through due process. Arbitrary declarations of a founder as a "bad leaver" without formal board inquiry or independent forensic audit are routinely set aside by Indian courts as unlawful breaches of contract.',
  },
  {
    question:
      'What is the statutory limitation period for instituting legal proceedings against a co-founder for unpaid startup dues and equity disputes?',
    answer:
      'Under Articles 55 and 113 of the Limitation Act, 1963, the statutory limitation period for filing a commercial suit for breach of contract, recovery of unpaid founder salary, or specific performance of equity transfer is exactly three years from the date the breach occurred or when remuneration became payable. For petitions before the NCLT under Section 241 of the Companies Act, 2013, the period of limitation is three years from the continuous act of oppression or illegal cap table alteration under Article 137. Serving a formal statutory legal notice promptly interrupts the timeline of default, demands documentary disclosure, and preserves the claimant\'s rights within the prescribed statutory limitation period.',
  },
  {
    question:
      'Can personal criminal liability be attached to a co-founder for cheating, forged cap table alterations, or misappropriation of startup funds?',
    answer:
      'Yes, if a managing co-founder dishonestly diverts company capital, fabricates board meeting resolutions, submits forged corporate filings to the Registrar of Companies (ROC), or induces a founder to contribute sweat equity under false pretenses, criminal complaints can be initiated. Under Section 316 (criminal breach of trust), Section 318 (cheating and dishonestly inducing delivery of property), and Section 336 (forgery of valuable security) of the Bharatiya Nyaya Sanhita, 2023, defaulting directors and co-founders face non-bailable criminal prosecution. Serving an advocate-vetted statutory notice detailing these criminal liabilities frequently accelerates out-of-court commercial settlement before police FIR registration.',
  },
];

/* ─── JSON-LD SCHEMA (@graph) ──────────────────────────────────────────── */
const pageUrl =
  'https://legalrecovery.in/send-a-legal-notice/co-founder-startup-unpaid-dues-equity';
const ogImage =
  'https://legalrecovery.in/images/og/co-founder-startup-unpaid-dues-equity.jpg';

const reviewBodyText =
  'As a technical co-founder of a Bengaluru-based AI logistics startup, I dedicated 18 months bootstrapping the MVP with an agreed deferred compensation of ₹38.5 Lakhs and 22.5% equity vesting over 4 years. Right after closing a $1.5M institutional funding round, the managing co-founder unlawfully altered company records on the MCA portal, refused to file Form PAS-3 for my vested share allotment, and blocked my remuneration. Legal Recovery immediately drafted a rigorous, advocate-vetted statutory demand notice citing Sections 88, 169, and 241/242 of the Companies Act 2013, Section 73 of the Indian Contract Act, and Section 10 of the Specific Relief Act. Within 14 days of service, the company\'s legal counsel convened an emergency board meeting, agreed to our settlement terms, issued my 22.5% equity shares, and disbursed the entire ₹38.5 Lakhs in unpaid dues with interest. Their commercial dispute prowess is unmatched.';

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
        'Legal Notice to Co-Founder for Unpaid Startup Dues & Equity | Legal Recovery India',
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
      datePublished: '2024-09-05T08:00:00+05:30',
      dateModified: new Date().toISOString(),
    },

    /* 2. WebPage with SpeakableSpecification */
    {
      '@type': 'WebPage',
      '@id': pageUrl,
      name: 'Legal Notice to Co-Founder for Unpaid Startup Dues & Equity',
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
          name: 'Co-Founder Unpaid Dues & Equity Notice',
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
      name: 'Steps to Send a Legal Notice to Co-Founder for Unpaid Startup Dues & Equity',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Audit and consolidate Founders Agreement, SHA, Term Sheets, Vesting Schedules, IP assignment deeds, and email correspondence',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Perform MCA portal compliance audit to verify Corporate Identification Number (CIN), authorized share capital, Form PAS-3, and Register of Members',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Quantify accrued unpaid founder salary, consulting remuneration, milestone sweat equity percentage, and commercial interest at 18% p.a.',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Draft an advocate-vetted statutory legal notice citing Companies Act 2013 (Sec 88, 169, 241/242), Indian Contract Act (Sec 73), and Specific Relief Act (Sec 10)',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Serve the notice via India Post Speed Post with AD, registered corporate email, and tracked digital channels with Section 63 BSA certificate',
        },
      ],
    },

    /* 7. Product + AggregateRating + Review (matches sidebar UI word-for-word) */
    {
      '@type': 'Product',
      name: 'Legal Notice to Co-Founder for Unpaid Startup Dues & Equity',
      description:
        'Advocate-drafted statutory demand notice service for startup founders, CTOs, early executives, and partners to recover unpaid salary dues, deferred compensation, and enforce vested equity allocation in India.',
      brand: {
        '@type': 'Organization',
        name: 'Legal Recovery',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '294',
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
            name: 'Vikramaditya Singhania',
          },
          reviewBody: reviewBodyText,
        },
      ],
    },
  ],
};

/* ─── COMPONENT ─────────────────────────────────────────────────────────── */
export default function CoFounderStartupUnpaidDuesEquityClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: 'statutory-framework', title: '1. Statutory Framework: Founder Rights, Equity Vesting & MCA Laws' },
    { id: 'actionable-grounds', title: '2. Actionable Grounds: Dilution, Forced Ouster & Unpaid Dues' },
    { id: 'legal-remedies', title: '3. Legal Remedies: NCLT Petitions, Commercial Suits & Injunctions' },
    { id: 'judicial-precedents', title: '4. Landmark Judicial Precedents on Founder Equity & Oppression' },
    { id: 'evidentiary-checklist', title: '5. Pre-Notice Evidentiary Checklist & MCA Register Verification' },
    { id: 'essential-clauses', title: '6. Key Clauses in a Co-Founder Statutory Demand Notice' },
    { id: 'strategic-roadmap', title: '7. Strategic Roadmap: 15-Day Demand to NCLT / Court Enforcement' },
    { id: 'faqs', title: '8. Frequently Asked Questions' },
  ];

  const breadcrumbItems = [
    { label: 'Send a Legal Notice', href: '/send-a-legal-notice' },
    {
      label: 'Co-Founder Unpaid Dues & Equity Notice',
      href: '/send-a-legal-notice/co-founder-startup-unpaid-dues-equity',
    },
  ];

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const shareUrl = encodeURIComponent(pageUrl);
  const shareText = encodeURIComponent(
    'Co-founder withholding your startup equity, unpaid salary dues, or sweat equity? Issue an advocate-vetted statutory legal notice for rapid recovery in India! #StartupDispute #CoFounderNotice #EquityRecovery #LegalNotice'
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
              STARTUP FOUNDER &amp; COMMERCIAL EQUITY DISPUTES
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Legal Notice to Co-Founder for{' '}
              <span className="text-[#DC2626]">Unpaid Dues &amp; Equity</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Recover unpaid founder salary, deferred sweat equity compensation, and enforce vested shareholding under the Companies Act 2013, Indian Contract Act 1872, Specific Relief Act, and NCLT oppression provisions.
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
                      onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${encodeURIComponent('Legal Notice to Co-Founder for Unpaid Startup Dues & Equity | Legal Recovery India')}`, '_blank', 'noopener,noreferrer')}
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
                    A startup founder, technical architect, or early partner can serve an advocate-drafted statutory legal notice to a defaulting co-founder and company under{' '}
                    <span className="font-semibold text-slate-800">
                      Section 73 of the Indian Contract Act, 1872
                    </span>{' '}
                    and{' '}
                    <span className="font-semibold text-slate-800">
                      Sections 56, 88, 169, and 241 of the Companies Act, 2013
                    </span>
                    , demanding immediate release of unpaid compensation, sweat equity remuneration, and formal allotment of vested equity shares within 15 days. If the co-founders fail to comply, the claimant can initiate oppression and mismanagement proceedings before the National Company Law Tribunal (NCLT) or file a commercial suit for specific performance under{' '}
                    <span className="font-semibold text-slate-800">
                      Section 10 of the Specific Relief Act, 1963
                    </span>{' '}
                    alongside emergency interim injunctions to freeze cap table alterations and share transfers.
                  </p>
                </div>

                {/* ── IN-ARTICLE INFOGRAPHIC ────────────────────────────── */}
                <figure className="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900">
                  <img
                    src="/images/og/co-founder-startup-unpaid-dues-equity.jpg"
                    alt="Infographic: Step-by-Step Legal Process to Recover Unpaid Co-Founder Dues, Salary and Startup Equity in India"
                    className="w-full h-auto object-cover max-h-[500px]"
                    loading="lazy"
                  />
                  <figcaption className="p-3.5 text-center text-xs text-slate-600 font-semibold bg-white border-t border-slate-100 flex items-center justify-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#DC2626]" />
                    <span>Figure 1: Statutory Recovery Roadmap for Co-Founder Dues, Deferred Compensation &amp; Vested Startup Equity under Companies Act 2013 &amp; Indian Contract Act 1872.</span>
                  </figcaption>
                </figure>

                {/* ── SECTION 1: STATUTORY FRAMEWORK ────────────────────── */}
                <section id="statutory-framework" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. Statutory Framework: Founder Rights, Equity Vesting &amp; MCA Laws
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In the Indian startup ecosystem, early founders often bootstrap technological architecture, product development, operations, and business development in exchange for equity ownership, sweat equity allotments, or deferred salary disbursements. When commercial traction accelerates or external venture capital rounds materialize, disputes frequently erupt where controlling co-founders unlawfully dilute early contributors, freeze unpaid remuneration, or refuse to formalize share allotments.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The substantive rights of co-founders in private limited companies and corporate entities are anchored across several interlocking statutory frameworks:
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                      <ul className="space-y-3 text-xs sm:text-sm text-slate-700 list-disc list-inside">
                        <li>
                          <strong>Companies Act, 2013 — Section 88 &amp; Section 56 (Register of Members &amp; Share Transfer):</strong> Every corporate entity is statutorily mandated to maintain an accurate Register of Members under Section 88. Refusal to enter a lawful shareholder&apos;s name or executing share transfers without proper instrument compliance under Section 56 constitutes a punishable corporate default.
                        </li>
                        <li>
                          <strong>Companies Act, 2013 — Section 169 (Removal of Directors):</strong> Controlling shareholders cannot arbitrarily remove a founder-director without issuing special notice, affording reasonable opportunity of representation, and adhering to strict statutory board voting procedures.
                        </li>
                        <li>
                          <strong>Companies Act, 2013 — Sections 241 &amp; 242 (Oppression and Mismanagement):</strong> Any member holding at least 10% of issued share capital (or 1/10th of total members) can petition the National Company Law Tribunal (NCLT) against oppressive actions, illegal dilution, or exclusion from management affairs.
                        </li>
                        <li>
                          <strong>Indian Contract Act, 1872 — Section 73 &amp; Section 74 (Breach of Founders&apos; Agreement):</strong> Breach of express covenants in a Founders&apos; Agreement, Shareholder Agreement (SHA), or Term Sheet entitles the aggrieved founder to recover actual monetary damages, lost salary, and liquidated compensation.
                        </li>
                        <li>
                          <strong>Specific Relief Act, 1963 — Section 10 (Specific Performance of Share Contracts):</strong> Following the 2018 amendment, specific performance is mandatory for commercial contracts. Courts are obligated to direct specific performance of equity transfer agreements where monetary damages cannot adequately compensate loss of unique equity shareholding.
                        </li>
                      </ul>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed">
                      Furthermore, founder remuneration agreements executed through board resolutions or employment contracts constitute enforceable liquidated debts. Under Section 2(y) of the{' '}
                      <span className="font-semibold text-slate-800">
                        Code on Wages, 2019
                      </span>
                      , accrued founder salary and performance bonuses form part of statutory wages, prohibiting unauthorized deductions or indefinite deferrals once agreed company milestones have been attained.
                    </p>
                  </div>
                </section>

                {/* ── SECTION 2: ACTIONABLE GROUNDS ─────────────────────── */}
                <section id="actionable-grounds" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. Actionable Grounds: Dilution, Forced Ouster &amp; Unpaid Dues
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A robust statutory demand notice must specify the exact factual defaults, corporate law breaches, and bad-faith conduct committed by the defaulting co-founders. Indian tribunals and commercial courts recognize several distinct grounds for legal intervention:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                      {[
                        {
                          title: 'Unlawful Dilution & Unnotified Rights Issues',
                          desc: 'Managing founders increasing authorized share capital or issuing preferential shares/convertible notes to third parties or themselves without serving statutory notice under Section 62(1)(a) of Companies Act 2013 to wipe out a co-founder’s equity.',
                        },
                        {
                          title: 'Non-Allotment of Vested Equity & MCA Non-Filing',
                          desc: 'Failing to execute Board resolutions, omit filing Form PAS-3 (Return of Allotment) with the Registrar of Companies (ROC), or refusing to deliver stamped share certificates under Section 56(4) after vesting milestones are completed.',
                        },
                        {
                          title: 'Withholding Agreed Founder Salary & Deferred Compensation',
                          desc: 'Refusing to disburse accrued monthly compensation, consultancy fees, or deferred sweat equity payments agreed during bootstrapping phases after the startup secures external angel, VC, or grant funding.',
                        },
                        {
                          title: 'Illegal Director Removal & Board Lockouts',
                          desc: 'Revoking executive access, locking email/code repositories, and passing fraudulent board resolutions to remove the co-founder as director without complying with Section 169 special notice requirements.',
                        },
                        {
                          title: 'Bad-Faith "Bad Leaver" Characterization',
                          desc: 'Fabricating baseless performance allegations or manufactured disciplinary charges to trigger bad-leaver clauses and confiscate 100% of the founder\'s vested shares at nominal or zero valuation.',
                        },
                        {
                          title: 'Siphoning Intellectual Property & Corporate Opportunity',
                          desc: 'Incorporating a parallel shell company or transferring core proprietary algorithms, trademarks, and client contracts to an entity owned exclusively by the defaulting co-founder in breach of fiduciary duties.',
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
                    3. Legal Remedies: NCLT Petitions, Commercial Suits &amp; Injunctions
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Depending on the shareholding percentage, existence of an arbitration clause in the Founders&apos; Agreement, and the nature of the claim (equity restoration vs. monetary debt), Indian law provides powerful multi-tier judicial forums:
                    </p>

                    <div className="overflow-x-auto my-6">
                      <table className="w-full text-left border-collapse text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-slate-900 text-white">
                            <th className="p-3 font-extrabold rounded-tl-xl">Judicial Forum &amp; Statutory Authority</th>
                            <th className="p-3 font-extrabold">Applicable Legal Section</th>
                            <th className="p-3 font-extrabold">Primary Relief Sought</th>
                            <th className="p-3 font-extrabold rounded-tr-xl">Strategic Impact</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 bg-white border border-slate-200">
                          <tr>
                            <td className="p-3 font-bold text-slate-900">
                              National Company Law Tribunal (NCLT)
                            </td>
                            <td className="p-3 text-slate-650">Companies Act, 2013 — Sec 241, 242 &amp; 59</td>
                            <td className="p-3 font-semibold text-[#DC2626]">Rectification of Register of Members; setting aside illegal dilution</td>
                            <td className="p-3 text-slate-650">
                              Directs independent forensic audit, appoints administrator, freezes board powers
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">
                              High Court / Commercial Court (Arbitration)
                            </td>
                            <td className="p-3 text-slate-650">Arbitration &amp; Conciliation Act, 1996 — Sec 9 &amp; 11</td>
                            <td className="p-3 font-semibold text-[#DC2626]">Urgent interim injunction restraining share transfer or VC funding</td>
                            <td className="p-3 text-slate-650">
                              Prevents third-party investor rights from crystallizing over disputed shares
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">
                              Commercial Court Summary Suit
                            </td>
                            <td className="p-3 text-slate-650">Commercial Courts Act, 2015 &amp; Order 37 CPC</td>
                            <td className="p-3 font-semibold text-[#DC2626]">Liquidated recovery of unpaid founder salary &amp; consulting dues</td>
                            <td className="p-3 text-slate-650">
                              Expedited money decree with pre-institution mediation under Sec 12A
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">
                              Civil Court (Specific Performance)
                            </td>
                            <td className="p-3 text-slate-650">Specific Relief Act, 1963 — Section 10</td>
                            <td className="p-3 font-semibold text-[#DC2626]">Mandatory order directing issuance of equity share certificates</td>
                            <td className="p-3 text-slate-650">
                              Forces startup entity to issue shares without monetary substitution
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">
                              Magistrate Court / Police Cyber Cell
                            </td>
                            <td className="p-3 text-slate-650">Bharatiya Nyaya Sanhita, 2023 — Sec 316, 318, 336</td>
                            <td className="p-3 font-semibold text-[#DC2626]">Criminal prosecution for fraud, forgery &amp; breach of trust</td>
                            <td className="p-3 text-slate-650">
                              Creates direct personal liability and reputational risk for defaulting founders
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
                        Under the authoritative ruling of the Supreme Court of India in{' '}
                        <span className="font-semibold text-slate-800">
                          Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd. (2022) 10 SCC 1
                        </span>
                        , commercial suits concerning founder agreements, shareholder dues, and executive contracts must undergo mandatory pre-institution mediation through the District Legal Services Authority (DLSA) unless urgent interim relief is claimed. Serving a comprehensive statutory legal notice satisfies evidentiary conditions, defines the exact dispute scope, and accelerates commercial settlement during the mediation window.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 4: JUDICIAL PRECEDENTS ────────────────────── */}
                <section id="judicial-precedents" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Landmark Judicial Precedents on Founder Equity &amp; Oppression
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Indian company law jurisprudence firmly protects founder rights, equitable participation, and legitimate expectations in quasi-partnership startups. Key Supreme Court and NCLAT authorities include:
                    </p>

                    <div className="space-y-4">
                      {[
                        {
                          case: 'Tata Consultancy Services Ltd. v. Cyrus Investments Pvt. Ltd. (2021) 9 SCC 449',
                          court: 'Supreme Court of India',
                          principle: 'Quasi-Partnership Principle & Oppression Thresholds',
                          desc: 'The Supreme Court affirmed that closely held companies and startups operating on mutual trust and personal relationships are akin to quasi-partnerships. When controlling shareholders breach underlying founder agreements or exclude key partners from governance in bad faith, NCLT holds broad remedial jurisdiction under Section 242.',
                          link: 'https://main.sci.gov.in',
                        },
                        {
                          case: 'Dale & Carrington Invt. P. Ltd. v. P.K. Prathapan (2005) 1 SCC 212',
                          court: 'Supreme Court of India',
                          principle: 'Fiduciary Duty of Directors in Equity Allotment',
                          desc: 'The Supreme Court ruled that directors act in a fiduciary capacity on behalf of all shareholders. Issuing additional shares solely to reduce a co-founder into a minority or consolidate personal control is an abuse of fiduciary power, rendering the entire allotment illegal and void ab initio.',
                          link: 'https://main.sci.gov.in',
                        },
                        {
                          case: 'Needle Industries (India) Ltd. v. Needle Industries Newey (India) Holding Ltd. (1981) 3 SCC 333',
                          court: 'Supreme Court of India',
                          principle: 'Oppression through Unfair Share Issuances',
                          desc: 'Established that an illegal share issue that prejudicially affects a shareholder’s voting rights or financial interest amounts to oppression under corporate law, entitling the aggrieved party to statutory rectification.',
                          link: 'https://main.sci.gov.in',
                        },
                        {
                          case: 'Sangramsinh P. Gaekwad v. Shantadevi P. Gaekwad (2005) 11 SCC 314',
                          court: 'Supreme Court of India',
                          principle: 'Protection of Pre-Emptive Rights & Legitimate Expectations',
                          desc: 'Held that failure to adhere strictly to statutory provisions regarding share transfers and disregard of pre-emptive rights embedded in corporate constitutional documents constitutes actionable oppression.',
                          link: 'https://main.sci.gov.in',
                        },
                      ].map((item, idx) => (
                        <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span className="text-xs font-black text-[#DC2626] uppercase tracking-wider">
                              {item.court}
                            </span>
                            <span className="text-xs font-semibold text-slate-500">
                              {item.principle}
                            </span>
                          </div>
                          <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-purple-600 hover:text-purple-800 hover:underline"
                            >
                              {item.case}
                            </a>
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* ── SECTION 5: EVIDENTIARY CHECKLIST ──────────────────── */}
                <section id="evidentiary-checklist" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Pre-Notice Evidentiary Checklist &amp; MCA Register Verification
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To establish an unassailable legal foundation before drafting the demand notice, consolidate all documentary evidence establishing equity promises, milestone fulfillment, and financial liabilities:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                      {[
                        {
                          title: 'Foundational Agreements',
                          items: [
                            'Executed Founders\' Agreement & SHA',
                            'Vesting Schedule & Cliff Specifications',
                            'Board Resolutions on Remuneration',
                          ],
                        },
                        {
                          title: 'Milestone & IP Proof',
                          items: [
                            'Intellectual Property Assignment Deeds',
                            'GitHub / Source Code Commit Logs',
                            'Product Roadmap & MVP Sign-Offs',
                          ],
                        },
                        {
                          title: 'Financial & Banking Trails',
                          items: [
                            'Bank statements showing deferred salary',
                            'Form 26AS / AIS tax deduction records',
                            'Expense reimbursement ledgers & invoices',
                          ],
                        },
                        {
                          title: 'Digital Admissions & Chat Logs',
                          items: [
                            'Slack / WhatsApp chats promising equity',
                            'Pitch Decks shared with VC investors',
                            'Emails detailing cap table breakdown',
                          ],
                        },
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
                        <span className="text-[#DC2626]">🏛️</span> Statutory MCA Portal Audit &amp; Cap Table Verification
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        Before dispatching the notice, our legal team conducts a forensic audit on the{' '}
                        <span className="font-semibold text-slate-800">
                          Ministry of Corporate Affairs (MCA) portal
                        </span>
                        . We extract the company&apos;s Master Data, verify authorized share capital, inspect filed Form MGT-7 (Annual Return), Form PAS-3 (Return of Allotment), and Form DIR-12 (Director Appointments/Resignations). This ensures the statutory notice is served on all current directors at the exact registered office, eliminating procedural service defects in court.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 6: ESSENTIAL CLAUSES ──────────────────────── */}
                <section id="essential-clauses" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Key Clauses in a Co-Founder Statutory Demand Notice
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      An advocate-drafted statutory demand notice must balance assertive commercial demands with clinical statutory precision:
                    </p>

                    <div className="space-y-4">
                      {[
                        {
                          clause: 'Clause 1',
                          title: 'Recital of Incorporation, Founding Roles & Equity Covenants',
                          desc: 'Articulate the inception date of the venture, initial equity split agreements, reverse vesting schedules, executive designations, and reciprocal obligations undertaken by each co-founder.',
                        },
                        {
                          clause: 'Clause 2',
                          title: 'Itemized Milestone Delivery & Sweat Equity Contribution',
                          desc: 'Set out a comprehensive record of technological milestones achieved, product code deployed, revenue generated, and sweat equity contributed during the bootstrapping tenure.',
                        },
                        {
                          clause: 'Clause 3',
                          title: 'Breach of Fiduciary Duties, Unlawful Dilution & Default Narration',
                          desc: 'Detail the defaulting co-founder\'s unlawful actions, including unnotified share issuances, failure to execute Form PAS-3, unauthorized cap table modifications, and wrongful cessation of founder compensation.',
                        },
                        {
                          clause: 'Clause 4',
                          title: 'Quantified Liquidated Debt & Commercial Interest Computation',
                          desc: 'Formally demand payment of exact unpaid salary, consulting remuneration, out-of-pocket expenses, and statutory interest calculated at 18% per annum under Section 73 of the Contract Act.',
                        },
                        {
                          clause: 'Clause 5',
                          title: 'Peremptory 15-Day Demand & Litigation Escalation Warning',
                          desc: 'Mandate immediate rectification of the Register of Members, delivery of stamped share certificates, and payment of dues within 15 days, failing which the claimant will institute NCLT Section 241/242 petitions, Section 9 High Court injunctions, and BNS criminal complaints at the defaulting founders’ sole cost and peril.',
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

                {/* ── SECTION 7: STRATEGIC ROADMAP ──────────────────────── */}
                <section id="strategic-roadmap" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    7. Strategic Roadmap: 15-Day Demand to NCLT / Court Enforcement
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Serving an advocate-vetted statutory notice through Legal Recovery resolves over 72% of founder equity disputes out of court. If the defaulting founders remain recalcitrant, our structured multi-stage escalation protocol protects your startup rights:
                    </p>

                    <div className="space-y-4">
                      {[
                        {
                          step: 'Stage 1',
                          title: 'Advocate Demand Notice Served via Multi-Channel Hybrid Dispatch',
                          desc: 'The notice is issued on official advocate letterhead, digitally signed under Section 5 of the Information Technology Act, 2000, and delivered simultaneously via Speed Post AD, verified corporate emails, and tracked WhatsApp channels.',
                        },
                        {
                          step: 'Stage 2',
                          title: 'Virtual ODR Mediation & Settlement Deed Execution',
                          desc: 'Upon receiving notice, startups frequently seek confidential settlement to protect upcoming funding rounds. Legal Recovery facilitates structured Online Dispute Resolution (ODR) to execute legally binding e-signed Settlement Deeds and cap table restructuring agreements.',
                        },
                        {
                          step: 'Stage 3',
                          title: 'Emergency Section 9 High Court / Commercial Court Injunction',
                          desc: 'If the company attempts to close an investment round or transfer IP during the dispute, our panel counsels file an urgent petition under Section 9 of the Arbitration Act or Order 39 CPC to freeze share transfers.',
                        },
                        {
                          step: 'Stage 4',
                          title: 'NCLT Company Petition (Sec 241/242) & ROC Rectification',
                          desc: 'Our corporate litigators institute formal oppression and mismanagement proceedings before the designated NCLT bench, seeking mandatory rectification of the Register of Members under Section 59 and monetary recovery decrees.',
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

                {/* ── SECTION 8: FAQS (ACCORDION) ───────────────────────── */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-6 border-b-2 border-[#DC2626] pb-2 inline-block">
                    8. Frequently Asked Questions
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
                    Authoritative Statutory &amp; Judicial References:
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 text-xs text-slate-600">
                    <li>
                      <a
                        href="https://www.indiacode.nic.in/handle/123456789/2114"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Companies Act, 2013 — Sections 56, 62, 88, 169, 241 &amp; 242, indiacode.nic.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.indiacode.nic.in/handle/123456789/2187"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Indian Contract Act, 1872 — Sections 73 &amp; 74 (Breach of Contract &amp; Compensation), indiacode.nic.in
                      </a>
                    </li>
                    <li>
                      Specific Relief Act, 1963 — Section 10 (Mandatory Specific Performance of Contracts), indiacode.nic.in
                    </li>
                    <li>
                      Commercial Courts Act, 2015 — Section 12A Mandatory Pre-Institution Mediation, indiacode.nic.in
                    </li>
                    <li>
                      Supreme Court of India — Tata Consultancy Services Ltd. v. Cyrus Investments Pvt. Ltd. (2021) 9 SCC 449, main.sci.gov.in
                    </li>
                    <li>
                      National Company Law Tribunal (NCLT) Rules &amp; Company Petition Procedures, nclt.gov.in
                    </li>
                    <li>
                      Ministry of Corporate Affairs (MCA) — Company Master Data &amp; Form PAS-3 / MGT-7 Audit, mca.gov.in
                    </li>
                    <li>
                      Bharatiya Nyaya Sanhita, 2023 — Sections 316 (Breach of Trust) &amp; 318 (Cheating), indiacode.nic.in
                    </li>
                  </ol>
                </section>

                {/* ── MORE GUIDES (Internal Links) ─────────────────────── */}
                <section className="scroll-mt-32">
                  <h2 className="text-xl font-black text-slate-900 mb-5 border-b border-slate-100 pb-2">
                    More Corporate &amp; Commercial Dispute Guides
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        title: 'Legal Notice to Business Partner for Recovery of Dues',
                        href: '/send-a-legal-notice/recover-money-from-business-partner-cheating-india',
                      },
                      {
                        title: 'Legal Notice to Company for Unpaid Commission',
                        href: '/send-a-legal-notice/commission-not-paid-by-company',
                      },
                      {
                        title: 'Legal Notice for B2B Invoice Not Received',
                        href: '/send-a-legal-notice/b2b-invoice-not-recieved',
                      },
                      {
                        title: 'Legal Notice for Business Recovery of Unpaid Dues',
                        href: '/send-a-legal-notice/for-business-to-recover-their-unpaid-dues',
                      },
                      {
                        title: 'Legal Notice for Full and Final Settlement Delay',
                        href: '/recovery/fnf-settlement',
                      },
                      {
                        title: 'Legal Notice for Recovery of Money in India',
                        href: '/legal-notice-for-recovery-of-money',
                      },
                      {
                        title: 'MSME Samadhaan vs Legal Notice for Delayed Payment',
                        href: '/recovery/delayed-payment-interest-under-msme',
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
                    Legal Recovery is India&apos;s premier corporate dispute resolution and debt recovery platform, empowering startup founders, early executives, technology architects, and commercial partners to resolve cap table conflicts, enforce equity allocations, and recover unpaid dues through seasoned corporate panel advocates. Backed by ₹100 Crore+ recovered and 10,000+ disputes resolved across India, we deliver prompt, advocate-vetted statutory notices with verified legal impact.
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
                  Co-Founder Withholding Dues or Equity?
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  Send an advocate-vetted statutory demand notice today. Over 72% of startup founder and equity disputes settle within 15 days upon notice service from Legal Recovery.
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
                  <span className="text-slate-400 text-xs">/5 (294 reviews)</span>
                </div>

                {/* Review card — matches JSON-LD Product > Review word-for-word */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#DC2626]/10 flex items-center justify-center font-black text-[#DC2626] text-xs">
                      VS
                    </div>
                    <div>
                      <p className="font-extrabold text-slate-900 text-xs">Vikramaditya Singhania</p>
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
                  { stat: '72%', label: 'Founder disputes settled out-of-court during notice period' },
                  { stat: '₹100CR+', label: 'Total commercial debt & startup claims recovered' },
                  { stat: 'Same Day', label: 'Advocate notice drafted and dispatched with tracking' },
                  { stat: 'Flat Fee', label: 'Transparent pricing with no hidden equity commissions' },
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
