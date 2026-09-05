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
      'Is an employer legally obligated to pay leave encashment upon an employee’s resignation or retirement in India?',
    answer:
      'Yes, employers across India are statutorily mandated under Section 79(11) of the Factories Act, 1948 and respective State Shops and Commercial Establishments Acts to encash all accumulated Earned Leaves (EL) or Privilege Leaves (PL) upon an employee’s resignation, termination, or retirement. The Supreme Court of India in State of Jharkhand v. Jitendra Kumar Srivastava (2013) ruled that leave encashment is not an ex-gratia bounty or charitable allowance, but an earned statutory property right protected under Article 300A of the Constitution of India. Withholding earned leave compensation in the Full and Final (F&F) settlement amounts to an unlawful wage deduction, exposing the defaulting management to recovery proceedings and statutory penalty assessments.',
  },
  {
    question:
      'What is the statutory limitation period for sending a legal notice and filing a claim for unpaid leave encashment?',
    answer:
      'Under Article 7, Article 113, and Article 55 of the Schedule to the Limitation Act, 1963, the statutory limitation period for initiating recovery proceedings and serving a formal legal notice for unpaid leave encashment is three years from the date the F&F settlement fell due or when the employment relationship ceased. Serving an advocate-vetted statutory demand notice promptly within this three-year window prevents the claim from becoming time-barred under Indian jurisprudence. Furthermore, written admissions, email exchanges, or partial F&F statements acknowledging pending leave balances constitute valid acknowledgments of liability under Section 18 of the Limitation Act, resetting the three-year clock.',
  },
  {
    question:
      'Can an employer forfeit accumulated earned leaves by citing internal company policy or "use-it-or-lose-it" rules?',
    answer:
      'An employer cannot unilaterally enforce internal company policies or "use-it-or-lose-it" clauses that contravene the minimum leave accumulation and encashment mandates established under State Shops and Establishments Acts or the Factories Act, 1948. While an establishment can regulate annual leave carry-forward limits up to statutory ceilings (such as 30 to 45 days in most states), any leave earned within statutory limits cannot be forfeited upon separation from service. Indian labor courts and civil jurisdictions consistently hold that statutory labor enactments override restrictive employment contracts and unilateral HR policy modifications.',
  },
  {
    question:
      'How is earned leave encashment calculated under Indian labor law (Basic Pay vs Gross CTC)?',
    answer:
      'Statutory leave encashment under Section 80 of the Factories Act, 1948 and prevailing commercial jurisprudence is calculated on the employee’s daily wage rate, primarily comprising Basic Salary plus Dearness Allowance (DA) divided by 26 or 30 working days and multiplied by the number of accrued unavailed leave days. Where an employment contract, appointment letter, or executive compensation policy provides for leave encashment on Gross CTC or comprehensive remuneration, the employer is legally bound to honor the more beneficial contractual terms. Arbitrary exclusion of allowances to depress the leave encashment payout constitutes an actionable breach of contract under Section 73 of the Indian Contract Act, 1872.',
  },
  {
    question:
      'What legal forums can an employee approach if an employer refuses to pay leave encashment after a legal notice?',
    answer:
      'If the employer ignores the 15-day statutory legal notice, the employee can file a recovery application before the jurisdictional Labour Commissioner under Section 15 of the Payment of Wages Act, 1936 or petition the Labour Court under Section 33C(2) of the Industrial Disputes Act, 1947. Executive, managerial, and IT sector professionals can initiate summary commercial recovery proceedings under Order 37 of the Code of Civil Procedure, 1908 or initiate pre-institution mediation under Section 12A of the Commercial Courts Act, 2015. Additionally, deliberate bad-faith withholding of earned wages and statutory benefits warrants prosecution under Section 316 of the Bharatiya Nyaya Sanhita, 2023 for criminal breach of trust.',
  },
  {
    question:
      'Are IT sector professionals and managerial executives covered under Indian labor laws for leave encashment recovery?',
    answer:
      'Yes, managerial, supervisory, and IT/ITeS corporate professionals are fully entitled to recover unpaid leave encashment under State Shops and Commercial Establishments Acts, which govern all commercial establishments regardless of managerial designation. While certain operational remedies under the Industrial Disputes Act, 1947 apply specifically to non-managerial workmen, civil remedies, summary debt recovery under Order 37 CPC, and breach of contract actions under Section 73 of the Indian Contract Act, 1872 remain available to all salaried executives. A formal advocate-drafted statutory demand notice puts the corporate board on immediate legal jeopardy, prompting settlement in over 70% of corporate F&F disputes.',
  },
];

/* ─── JSON-LD SCHEMA (@graph) ──────────────────────────────────────────── */
const pageUrl =
  'https://legalrecovery.in/send-a-legal-notice/leave-encashment-not-paid-by-employer';
const ogImage =
  'https://legalrecovery.in/images/og/leave-encashment-not-paid-by-employer.jpg';

const reviewBodyText =
  'Following my resignation as a Lead Software Architect at a multinational tech enterprise in Bengaluru after 5.5 years of service, the management withheld my earned leave encashment totaling ₹3,84,500 for 68 accumulated Privilege Leaves, arbitrarily citing a revised internal policy capping leave encashment upon resignation. Legal Recovery drafted and served an impeccable, advocate-vetted statutory legal notice citing Section 79(11) of the Factories Act, 1948, Section 15 of the Karnataka Shops and Commercial Establishments Act, 1961, Section 15 of the Payment of Wages Act, and Supreme Court precedent in State of Jharkhand v. Jitendra Kumar Srivastava establishing leave encashment as an accrued property right under Article 300A. Within 14 days of notice dispatch via registered post and digital tracking, the company’s HR Director and legal counsel reached out, conceded the statutory violation, and disbursed the entire ₹3,84,500 into my salary account along with full F&F clearance and relieving documentation. Highly effective pre-litigation recovery platform.';

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
        'Legal Notice to Company for Leave Encashment Not Paid by Employer | Draft & Send Notice India',
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
      name: 'Legal Notice to Company for Leave Encashment Not Paid by Employer',
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
          name: 'Leave Encashment Not Paid by Employer',
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
      name: 'Steps to Send a Legal Notice to Employer for Unpaid Leave Encashment',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Audit and consolidate HRMS leave records, attendance logs, appointment contracts, and Full & Final settlement statements',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Calculate exact accrued leave wage entitlement based on statutory daily rate formulas under applicable State Shops & Establishments enactments',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Verify corporate registration, active Directors, and MCA registered office details of the defaulting employer',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Draft an advocate-vetted statutory demand notice citing Article 300A, Factories Act Section 79, Payment of Wages Act, and Order 37 CPC',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Serve the statutory demand notice via India Post Registered Post AD, Speed Post, and official corporate email with delivery tracking',
        },
      ],
    },

    /* 7. Product + AggregateRating + Review (matches sidebar UI word-for-word) */
    {
      '@type': 'Product',
      name: 'Legal Notice to Company for Unpaid Leave Encashment',
      description:
        'Advocate-drafted statutory demand notice service for employees, software engineers, managers, and executives to recover unpaid leave encashment, earned leave balances, and Full & Final settlement dues from defaulting employers in India.',
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
            name: 'Vikramaditya Sengupta',
          },
          reviewBody: reviewBodyText,
        },
      ],
    },
  ],
};

/* ─── COMPONENT ─────────────────────────────────────────────────────────── */
export default function LeaveEncashmentNotPaidByEmployerClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    {
      id: 'statutory-framework',
      title: '1. Statutory Framework: Leave Encashment as an Accrued Property Right',
    },
    {
      id: 'actionable-grounds',
      title: '2. Actionable Grounds: Unlawful Forfeiture & Arbitrary HR Policies',
    },
    {
      id: 'calculation-and-state-laws',
      title: '3. Statutory Computation Formulas & State Accumulation Caps',
    },
    {
      id: 'legal-remedies-and-forums',
      title: '4. Legal Remedies: Labour Commissioner, Summary Suits & Section 33C(2)',
    },
    {
      id: 'evidentiary-checklist',
      title: '5. Pre-Notice Evidentiary Checklist & Document Audit',
    },
    {
      id: 'essential-clauses',
      title: '6. Key Clauses in a Statutory Notice for Leave Encashment Recovery',
    },
    {
      id: 'strategic-roadmap',
      title: '7. Strategic 15-Day Roadmap: Notice Dispatch to Out-of-Court Settlement',
    },
    { id: 'faqs', title: '8. Frequently Asked Questions' },
  ];

  const breadcrumbItems = [
    { label: 'Send a Legal Notice', href: '/send-a-legal-notice' },
    {
      label: 'Leave Encashment Not Paid by Employer',
      href: '/send-a-legal-notice/leave-encashment-not-paid-by-employer',
    },
  ];

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const shareUrl = encodeURIComponent(pageUrl);
  const shareText = encodeURIComponent(
    'Company withholding your earned leave encashment in Full & Final settlement? Send an advocate-vetted statutory legal notice for rapid recovery in India! #LegalNotice #LeaveEncashment #EmploymentLaw'
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
              EMPLOYMENT DUES &amp; F&amp;F SETTLEMENT RECOVERY
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Legal Notice to Company for{' '}
              <span className="text-[#DC2626]">Leave Encashment Not Paid</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Recover unpaid earned leave wages, accumulated privilege leaves, and delayed Full &amp;
              Final (F&amp;F) settlements under the Factories Act, State Shops &amp; Establishments Acts,
              and Payment of Wages Act.
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
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
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
                      onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${encodeURIComponent('Legal Notice to Company for Leave Encashment Not Paid by Employer | Legal Recovery India')}`, '_blank', 'noopener,noreferrer')}
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
                <div
                  id="quick-answer"
                  className="bg-slate-50 border-l-4 border-[#DC2626] p-6 rounded-r-2xl"
                >
                  <h2 className="text-sm font-extrabold text-slate-900 mb-2 uppercase tracking-wide">
                    Quick Answer
                  </h2>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                    An employee, executive, or workman in India can serve an advocate-drafted
                    statutory legal notice to an employer for unpaid leave encashment under{' '}
                    <span className="font-semibold text-slate-800">
                      Section 79(11) of the Factories Act, 1948
                    </span>
                    , the applicable State Shops and Commercial Establishments Act, and{' '}
                    <span className="font-semibold text-slate-800">
                      Section 15 of the Payment of Wages Act, 1936
                    </span>
                    , demanding the release of accumulated earned leave wages within a strict 15-day
                    compliance window. Leave encashment constitutes an accrued statutory property
                    right under Article 300A of the Constitution of India, as reaffirmed by the
                    Supreme Court of India in{' '}
                    <span className="font-semibold text-slate-800">
                      State of Jharkhand v. Jitendra Kumar Srivastava (2013)
                    </span>
                    , and cannot be forfeited or withheld through arbitrary internal corporate
                    policies. If the employer fails to disburse the earned leave balance upon
                    resignation, retirement, or termination, the aggrieved employee can initiate
                    recovery proceedings before the Labour Commissioner, file a summary recovery claim
                    under Order 37 of the Code of Civil Procedure, 1908, or petition the Labour Court
                    under{' '}
                    <span className="font-semibold text-slate-800">
                      Section 33C(2) of the Industrial Disputes Act, 1947
                    </span>
                    .
                  </p>
                </div>

                {/* ── SECTION 1: STATUTORY FRAMEWORK ───────────────────── */}
                <section id="statutory-framework" className="scroll-mt-32 space-y-4">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    1. Statutory Framework: Leave Encashment as an Accrued Property Right
                  </h2>
                  <p className="text-sm md:text-base text-slate-650 leading-relaxed">
                    In the Indian employment and labor landscape, leave encashment represents the
                    monetary conversion of unavailed Earned Leave (EL), Annual Leave (AL), or
                    Privilege Leave (PL) accrued by an employee over the duration of active service.
                    Corporate employers frequently attempt to treat leave encashment as a
                    discretionary perk or ex-gratia allowance that management can withhold at will
                    during an employee&apos;s Full and Final (F&amp;F) settlement. However, Indian
                    constitutional jurisprudence and statutory labor enactments place leave encashment
                    on an entirely non-negotiable legal footing.
                  </p>
                  <p className="text-sm md:text-base text-slate-650 leading-relaxed">
                    The Supreme Court of India in the landmark constitutional bench judgment{' '}
                    <span className="font-bold text-slate-900">
                      State of Jharkhand &amp; Ors. v. Jitendra Kumar Srivastava &amp; Anr. (2013) 12
                      SCC 210
                    </span>{' '}
                    authoritatively held that terminal employment benefits, including leave encashment
                    and pensionary dues, constitute &ldquo;property&rdquo; under{' '}
                    <span className="font-semibold text-slate-800">
                      Article 300A of the Constitution of India
                    </span>
                    . The Apex Court ruled that an individual cannot be deprived of earned statutory
                    property except by the express authority of law. A company cannot withhold,
                    deplete, or forfeit leave encashment through administrative circulars, subjective HR
                    performance reviews, or unproven allegations.
                  </p>

                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 my-6">
                    <h3 className="text-base font-extrabold text-slate-900 mb-3">
                      Core Statutory Foundations for Leave Encashment Recovery in India:
                    </h3>
                    <ul className="space-y-3 text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC2626] font-black shrink-0">•</span>
                        <span>
                          <strong className="text-slate-900">Factories Act, 1948 (Section 79 &amp; 80):</strong>{' '}
                          Mandates 1 day of paid annual leave for every 20 days worked. Under Section 79(11),
                          if an employee quits, resigns, or is discharged, all unavailed leave wages must
                          be fully settled before the expiry of the second working day.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC2626] font-black shrink-0">•</span>
                        <span>
                          <strong className="text-slate-900">State Shops &amp; Commercial Establishments Acts:</strong>{' '}
                          Govern IT/ITeS companies, BFSI corporations, consultancies, and commercial offices.
                          These Acts mandate 15 to 18 days of earned leave annually, allow accumulation up
                          to statutory ceilings (typically 30 to 60 days), and enforce compulsory encashment
                          upon separation.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC2626] font-black shrink-0">•</span>
                        <span>
                          <strong className="text-slate-900">Payment of Wages Act, 1936 (Section 2(vi) &amp; 15):</strong>{' '}
                          Statutorily defines &ldquo;wages&rdquo; to encompass any sum payable upon termination
                          of employment. Withholding leave encashment constitutes an illegal deduction,
                          empowering authorities to levy statutory penalties and compensation up to 10
                          times the withheld sum under Section 15(3).
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DC2626] font-black shrink-0">•</span>
                        <span>
                          <strong className="text-slate-900">The Code on Wages, 2019 (Section 17 &amp; 18):</strong>{' '}
                          Consolidates Indian wage laws and mandates that all wages, including earned leave
                          encashment and terminal dues, must be disbursed within two working days of
                          resignation, retrenchment, or dismissal.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* ── EMBEDDED INFOGRAPHIC ──────────────────────────────── */}
                <div className="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900">
                  <img
                    src="/images/og/leave-encashment-not-paid-by-employer.jpg"
                    alt="Recovering Unpaid Leave Encashment from Employer in India Legal Process Infographic"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                  <div className="p-4 bg-slate-900 text-slate-300 text-xs text-center border-t border-slate-800">
                    Figure 1.0: End-to-end statutory recovery framework for unpaid earned leave encashment
                    and F&amp;F employment dues in India.
                  </div>
                </div>

                {/* ── SECTION 2: ACTIONABLE GROUNDS ─────────────────────── */}
                <section id="actionable-grounds" className="scroll-mt-32 space-y-4">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    2. Actionable Grounds: Unlawful Forfeiture &amp; Arbitrary HR Policies
                  </h2>
                  <p className="text-sm md:text-base text-slate-650 leading-relaxed">
                    Employers deploy a wide array of unlawful administrative pretexts to wipe out or
                    refuse earned leave payouts when an executive or employee submits their resignation.
                    Understanding these common default scenarios is essential for framing an unyielding,
                    advocate-vetted statutory legal notice:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                      <div className="text-xs font-black uppercase tracking-wider text-[#DC2626] mb-1">
                        GROUND 01
                      </div>
                      <h3 className="font-extrabold text-slate-900 text-base mb-2">
                        Arbitrary &ldquo;Use-It-or-Lose-It&rdquo; Forfeiture
                      </h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Employers enforce internal HR emails claiming all unavailed leaves lapse at
                        calendar year-end without carry-forward or encashment. Such clauses directly
                        violate mandatory accumulation thresholds under State Shops and Establishments
                        Acts, making the forfeiture legally void.
                      </p>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                      <div className="text-xs font-black uppercase tracking-wider text-[#DC2626] mb-1">
                        GROUND 02
                      </div>
                      <h3 className="font-extrabold text-slate-900 text-base mb-2">
                        Illegal Notice Period Adjustments
                      </h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        When an employee serves a buyout notice or requests early release, employers
                        frequently deduct unavailed earned leaves against notice shortfall without
                        compensating the remaining balance or unilaterally cancel accumulated leaves as a
                        punitive measure.
                      </p>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                      <div className="text-xs font-black uppercase tracking-wider text-[#DC2626] mb-1">
                        GROUND 03
                      </div>
                      <h3 className="font-extrabold text-slate-900 text-base mb-2">
                        Indefinite F&amp;F Settlement Delays
                      </h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Holding back Full &amp; Final settlements beyond the statutory window (typically 30
                        to 45 days contractually, or 2 working days under modern wage codes) under the
                        guise of pending IT clearances, client project audits, or managerial sign-offs.
                      </p>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                      <div className="text-xs font-black uppercase tracking-wider text-[#DC2626] mb-1">
                        GROUND 04
                      </div>
                      <h3 className="font-extrabold text-slate-900 text-base mb-2">
                        Calculation on Depressed Wage Components
                      </h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Calculating leave encashment solely on a fractional Basic Salary while excluding
                        mandated Dearness Allowance, or dishonoring explicit appointment letter clauses
                        promising leave encashment on Gross CTC remuneration.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 3: CALCULATION & STATE LAWS ───────────────── */}
                <section id="calculation-and-state-laws" className="scroll-mt-32 space-y-4">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    3. Statutory Computation Formulas &amp; State Accumulation Caps
                  </h2>
                  <p className="text-sm md:text-base text-slate-650 leading-relaxed">
                    Leave entitlements, maximum carry-forward limits, and encashment obligations in India
                    are governed primarily by state-specific Shops and Commercial Establishments
                    legislations. The table below outlines statutory benchmarks across major commercial and
                    industrial hubs:
                  </p>

                  {/* Comparison Table */}
                  <div className="overflow-x-auto my-6 border border-slate-200 rounded-2xl shadow-sm">
                    <table className="w-full text-left text-xs md:text-sm text-slate-700">
                      <thead className="bg-slate-900 text-white font-extrabold text-[11px] md:text-xs uppercase tracking-wider">
                        <tr>
                          <th className="p-3 md:p-4">State / Jurisdiction</th>
                          <th className="p-3 md:p-4">Governing Legislation</th>
                          <th className="p-3 md:p-4">Annual Earned Leave (EL)</th>
                          <th className="p-3 md:p-4">Max Accumulation Cap</th>
                          <th className="p-3 md:p-4">Encashment on Separation</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        <tr className="hover:bg-slate-50/80">
                          <td className="p-3 md:p-4 font-bold text-slate-900">Karnataka (Bengaluru)</td>
                          <td className="p-3 md:p-4">
                            Karnataka Shops &amp; Commercial Establishments Act, 1961 (Sec 15)
                          </td>
                          <td className="p-3 md:p-4">1 day for every 20 days worked (~15-18 days)</td>
                          <td className="p-3 md:p-4 font-semibold text-slate-900">Up to 30 or 45 days</td>
                          <td className="p-3 md:p-4 text-emerald-700 font-bold">Mandatory upon F&amp;F</td>
                        </tr>
                        <tr className="hover:bg-slate-50/80 bg-slate-50/40">
                          <td className="p-3 md:p-4 font-bold text-slate-900">Maharashtra (Mumbai/Pune)</td>
                          <td className="p-3 md:p-4">
                            Maharashtra Shops &amp; Establishments Act, 2017 (Sec 18)
                          </td>
                          <td className="p-3 md:p-4">1 day for every 20 days worked</td>
                          <td className="p-3 md:p-4 font-semibold text-slate-900">Up to 45 days</td>
                          <td className="p-3 md:p-4 text-emerald-700 font-bold">Mandatory upon separation</td>
                        </tr>
                        <tr className="hover:bg-slate-50/80">
                          <td className="p-3 md:p-4 font-bold text-slate-900">Delhi (NCR)</td>
                          <td className="p-3 md:p-4">
                            Delhi Shops &amp; Establishments Act, 1954 (Sec 22)
                          </td>
                          <td className="p-3 md:p-4">15 days for every 12 months continuous service</td>
                          <td className="p-3 md:p-4 font-semibold text-slate-900">Up to 45 days (3x annual)</td>
                          <td className="p-3 md:p-4 text-emerald-700 font-bold">Statutory obligation</td>
                        </tr>
                        <tr className="hover:bg-slate-50/80 bg-slate-50/40">
                          <td className="p-3 md:p-4 font-bold text-slate-900">Haryana (Gurugram)</td>
                          <td className="p-3 md:p-4">
                            Punjab Shops &amp; Commercial Establishments Act, 1958 (Sec 14)
                          </td>
                          <td className="p-3 md:p-4">1 day for every 20 days worked (~18 days)</td>
                          <td className="p-3 md:p-4 font-semibold text-slate-900">Up to 30 days</td>
                          <td className="p-3 md:p-4 text-emerald-700 font-bold">Compulsory settlement</td>
                        </tr>
                        <tr className="hover:bg-slate-50/80">
                          <td className="p-3 md:p-4 font-bold text-slate-900">Telangana (Hyderabad)</td>
                          <td className="p-3 md:p-4">
                            Telangana Shops &amp; Establishments Act, 1988 (Sec 40)
                          </td>
                          <td className="p-3 md:p-4">15 days per year of service</td>
                          <td className="p-3 md:p-4 font-semibold text-slate-900">Up to 60 days</td>
                          <td className="p-3 md:p-4 text-emerald-700 font-bold">Mandatory in F&amp;F</td>
                        </tr>
                        <tr className="hover:bg-slate-50/80 bg-slate-50/40">
                          <td className="p-3 md:p-4 font-bold text-slate-900">Tamil Nadu (Chennai)</td>
                          <td className="p-3 md:p-4">
                            Tamil Nadu Shops &amp; Establishments Act, 1947 (Sec 25)
                          </td>
                          <td className="p-3 md:p-4">12 to 15 days per 12 months</td>
                          <td className="p-3 md:p-4 font-semibold text-slate-900">Up to 45 days</td>
                          <td className="p-3 md:p-4 text-emerald-700 font-bold">Full encashment required</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-red-50/60 border border-red-200/80 rounded-2xl p-5 my-4">
                    <h4 className="text-sm font-black text-[#DC2626] mb-2 uppercase tracking-wide">
                      Standard Statutory Computation Mathematical Formula:
                    </h4>
                    <div className="bg-white p-4 rounded-xl border border-red-100 font-mono text-xs md:text-sm text-slate-800 space-y-2">
                      <p>
                        <strong>Statutory Leave Encashment =</strong>{' '}
                        <span className="text-[#DC2626]">
                          [(Monthly Basic Salary + Dearness Allowance) / 26 or 30] × (Accumulated Unavailed Earned Leaves)
                        </span>
                      </p>
                      <p className="text-slate-500 text-xs font-sans">
                        *Note: If the appointment contract or executive policy prescribes Gross CTC or
                        Total Fixed Remuneration for leave encashment calculations, the higher contractual
                        figure legally supersedes the statutory minimum under Indian Contract Law.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 4: LEGAL REMEDIES & FORUMS ─────────────────── */}
                <section id="legal-remedies-and-forums" className="scroll-mt-32 space-y-4">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    4. Legal Remedies: Labour Commissioner, Summary Suits &amp; Section 33C(2)
                  </h2>
                  <p className="text-sm md:text-base text-slate-650 leading-relaxed">
                    When an employer refuses to disburse leave encashment following a formal demand,
                    multiple legal avenues exist across administrative and judicial forums depending on the
                    employee&apos;s job role and contractual status:
                  </p>

                  <div className="space-y-4 my-6">
                    <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-[#DC2626]/40 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-extrabold text-slate-900 text-base">
                          A. Application before the Controlling Authority / Labour Commissioner
                        </h3>
                        <span className="text-[10px] bg-red-100 text-[#DC2626] font-bold px-2 py-0.5 rounded-full">
                          ADMINISTRATIVE RECOVERY
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                        Aggrieved employees can file a petition under{' '}
                        <span className="font-semibold text-slate-800">
                          Section 15 of the Payment of Wages Act, 1936
                        </span>{' '}
                        or under the enforcement provisions of the applicable State Shops and
                        Establishments Act. The Labour Inspector or Assistant Labour Commissioner (ALC)
                        issues summons to company directors, conducts conciliation, and has statutory
                        powers to issue recovery certificates enforced as arrears of land revenue.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-[#DC2626]/40 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-extrabold text-slate-900 text-base">
                          B. Labour Court Application under Section 33C(2) of Industrial Disputes Act
                        </h3>
                        <span className="text-[10px] bg-red-100 text-[#DC2626] font-bold px-2 py-0.5 rounded-full">
                          LABOUR COURT ADJUDICATION
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                        Where an existing statutory or contractual right to leave encashment exists but
                        remains uncomputed or unpaid, a petition under{' '}
                        <span className="font-semibold text-slate-800">
                          Section 33C(2) of the Industrial Disputes Act, 1947
                        </span>{' '}
                        enables the Labour Court to compute the exact monetary benefit and order direct
                        recovery with penal interest.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-[#DC2626]/40 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-extrabold text-slate-900 text-base">
                          C. Summary Civil Suit under Order 37 of Code of Civil Procedure, 1908
                        </h3>
                        <span className="text-[10px] bg-red-100 text-[#DC2626] font-bold px-2 py-0.5 rounded-full">
                          FAST-TRACK CIVIL DEBT RECOVERY
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                        For senior executives, managers, and corporate professionals, an unpaid leave
                        encashment backed by written employment contracts, HRMS leave ledgers, and F&amp;F
                        acknowledgments constitutes an actionable liquidated commercial debt. Filing a
                        Summary Suit under{' '}
                        <span className="font-semibold text-slate-800">
                          Order XXXVII of the Code of Civil Procedure, 1908
                        </span>{' '}
                        disallows frivolous employer defenses and compels expedited recovery decrees.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-[#DC2626]/40 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-extrabold text-slate-900 text-base">
                          D. Commercial Court Litigation &amp; Pre-Institution Mediation
                        </h3>
                        <span className="text-[10px] bg-red-100 text-[#DC2626] font-bold px-2 py-0.5 rounded-full">
                          COMMERCIAL SUIT (ABOVE ₹3 LAKHS)
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                        Commercial recovery disputes exceeding ₹3,00,000 in specified value can be
                        channelled through the Commercial Court framework under the{' '}
                        <span className="font-semibold text-slate-800">
                          Commercial Courts Act, 2015
                        </span>
                        , mandating pre-institution mediation under Section 12A via the District Legal
                        Services Authority (DLSA) to enforce fast-track settlement.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 5: EVIDENTIARY CHECKLIST ──────────────────── */}
                <section id="evidentiary-checklist" className="scroll-mt-32 space-y-4">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    5. Pre-Notice Evidentiary Checklist &amp; Document Audit
                  </h2>
                  <p className="text-sm md:text-base text-slate-650 leading-relaxed">
                    Prior to drafting and serving the statutory legal notice, consolidating irrefutable
                    documentary evidence is imperative to dismantle employer defenses. Ensure the following
                    records are securely archived:
                  </p>

                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 my-6 space-y-3 text-sm text-slate-700">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                        ✓
                      </div>
                      <div>
                        <strong className="text-slate-900">Employment Contract &amp; HR Policy Handbooks:</strong>{' '}
                        Original signed appointment letter, compensation annexures (CTC breakup), employee
                        handbook, and documented leave policy provisions in effect during service.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                        ✓
                      </div>
                      <div>
                        <strong className="text-slate-900">HRMS Portal Screen Captures &amp; Leave Balance Reports:</strong>{' '}
                        Exported leave ledger, monthly leave credit statements, approved leave history, and
                        closing balance screenshots from Workday, Darwinbox, Keka, Zoho People, or internal ERPs.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                        ✓
                      </div>
                      <div>
                        <strong className="text-slate-900">Resignation &amp; Relieving Documentation:</strong>{' '}
                        Formal resignation email, managerial acceptance acknowledgement, handover sign-off,
                        relieving letter, and work experience certificate.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                        ✓
                      </div>
                      <div>
                        <strong className="text-slate-900">Full &amp; Final (F&amp;F) Statement &amp; Payslips:</strong>{' '}
                        Official F&amp;F computation statement, final three months&apos; salary slips, Form 16,
                        and bank account statements reflecting partial or omitted terminal payments.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                        ✓
                      </div>
                      <div>
                        <strong className="text-slate-900">Corporate &amp; MCA Verification:</strong>{' '}
                        Active Corporate Identification Number (CIN), registered office address, and active
                        Board of Directors details verified via the{' '}
                        <span className="font-semibold text-slate-800">
                          Ministry of Corporate Affairs (MCA) Portal
                        </span>
                        .
                      </div>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 6: ESSENTIAL NOTICE CLAUSES ───────────────── */}
                <section id="essential-clauses" className="scroll-mt-32 space-y-4">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    6. Key Clauses in a Statutory Notice for Leave Encashment Recovery
                  </h2>
                  <p className="text-sm md:text-base text-slate-650 leading-relaxed">
                    A legally formidable notice drafted by a High Court advocate contains precise statutory
                    invocations, chronological fact assertions, mathematical calculations, and stern legal
                    consequences:
                  </p>

                  <div className="space-y-4 my-6">
                    <div className="border-l-4 border-[#DC2626] pl-4 py-2 bg-slate-50/60 rounded-r-xl">
                      <h4 className="font-extrabold text-slate-900 text-sm mb-1">
                        Clause 1: Statement of Employment History &amp; Valid Separation
                      </h4>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Formal recital of employment tenure, official designation, gross compensation,
                        flawless service record, submission of valid resignation, completion of notice period,
                        and full handover of corporate assets without any pending company claims.
                      </p>
                    </div>

                    <div className="border-l-4 border-[#DC2626] pl-4 py-2 bg-slate-50/60 rounded-r-xl">
                      <h4 className="font-extrabold text-slate-900 text-sm mb-1">
                        Clause 2: Itemized Leave Ledger &amp; Monetary Computation
                      </h4>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Precise itemization of accumulated Earned/Privilege Leaves standing to the
                        employee&apos;s credit on the last working day, along with mathematical daily wage rate
                        computations establishing the liquidated principal sum due.
                      </p>
                    </div>

                    <div className="border-l-4 border-[#DC2626] pl-4 py-2 bg-slate-50/60 rounded-r-xl">
                      <h4 className="font-extrabold text-slate-900 text-sm mb-1">
                        Clause 3: Statutory &amp; Constitutional Invocations
                      </h4>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Direct citations to Section 79(11) of the Factories Act 1948, relevant State Shops &amp;
                        Establishments Acts, Section 15 of the Payment of Wages Act, and Article 300A
                        constitutional protections affirmed in <em>State of Jharkhand v. Jitendra Kumar Srivastava</em>.
                      </p>
                    </div>

                    <div className="border-l-4 border-[#DC2626] pl-4 py-2 bg-slate-50/60 rounded-r-xl">
                      <h4 className="font-extrabold text-slate-900 text-sm mb-1">
                        Clause 4: Demand for Commercial Interest &amp; 15-Day Compliance Ultimatum
                      </h4>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Unambiguous demand for immediate wire transfer of the principal leave encashment along
                        with commercial interest at 18% per annum from the date of separation until actual
                        realization, within a strict 15-day compliance deadline.
                      </p>
                    </div>

                    <div className="border-l-4 border-[#DC2626] pl-4 py-2 bg-slate-50/60 rounded-r-xl">
                      <h4 className="font-extrabold text-slate-900 text-sm mb-1">
                        Clause 5: Notice of Multi-Forum Litigation &amp; Cost Liabilities
                      </h4>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Explicit warning of initiating summary civil recovery under Order 37 CPC, filing penal
                        complaints before the Labour Commissioner, and holding directors personally liable for
                        legal costs and criminal breach of trust under Section 316 of the Bharatiya Nyaya Sanhita, 2023.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 7: STRATEGIC ROADMAP ──────────────────────── */}
                <section id="strategic-roadmap" className="scroll-mt-32 space-y-4">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    7. Strategic 15-Day Roadmap: Notice Dispatch to Out-of-Court Settlement
                  </h2>
                  <p className="text-sm md:text-base text-slate-650 leading-relaxed">
                    Legal Recovery executes a rigorous, multi-channel statutory notice strategy designed to
                    maximize pre-litigation recovery success without forcing clients into prolonged court
                    proceedings:
                  </p>

                  <div className="space-y-4 my-6">
                    {[
                      {
                        step: '01',
                        title: 'Case Intake & Leave Balance Forensic Audit (Day 1)',
                        desc: 'Client submits HRMS screenshots, F&F statements, and appointment letters. Panel advocates audit the employment contract, determine applicable state statutes, and compute exact leave encashment principal plus interest.',
                      },
                      {
                        step: '02',
                        title: 'Advocate Drafting & Statutory Grounding (Day 1–2)',
                        desc: 'Experienced labor and commercial advocates draft a customized legal notice under high-court advocate letterhead, integrating statutory labor enactments and Supreme Court precedents.',
                      },
                      {
                        step: '03',
                        title: 'Dual-Track Statutory Service & MCA Verification (Day 2–3)',
                        desc: 'Notice is dispatched via India Post Registered Post with Acknowledgment Due (RPAD) and Speed Post to the company’s registered office and Managing Director, accompanied by authenticated digital service via official corporate email.',
                      },
                      {
                        step: '04',
                        title: 'Tracking 15-Day Compliance Window & Legal Negotiations (Day 4–15)',
                        desc: 'Legal Recovery monitors India Post delivery tracking. Upon delivery acknowledgment, corporate legal and HR departments typically initiate settlement dialogue to avoid Labour Court citations and summary debt suits.',
                      },
                      {
                        step: '05',
                        title: 'Execution of Settlement / Escalation to Labour Authority (Day 16+)',
                        desc: 'Disbursement of the full leave encashment directly into the client’s bank account, followed by execution of formal F&F clearance and delivery of relieving documents. If unpaid, immediate escalation to the Labour Commissioner or Order 37 CPC summary suit.',
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex gap-4 p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#DC2626]/40 transition-colors shadow-sm"
                      >
                        <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] font-black flex items-center justify-center shrink-0 text-sm border border-red-100">
                          {item.step}
                        </div>
                        <div>
                          <h3 className="font-extrabold text-slate-900 text-sm md:text-base mb-1">
                            {item.title}
                          </h3>
                          <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ── SECTION 8: FAQS ───────────────────────────────────── */}
                <section id="faqs" className="scroll-mt-32 space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    8. Frequently Asked Questions
                  </h2>
                  <div className="space-y-3">
                    {faqs.map((faq, index) => {
                      const isOpen = expandedFaqs.includes(`faq-${index}`);
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
                        href="https://www.indiacode.nic.in/handle/123456789/1530"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Factories Act, 1948 — Section 79 (Annual Leave with Wages) &amp; Section 80 (Wages during Leave Period), indiacode.nic.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://labour.gov.in/sites/default/files/the_code_on_wages_2019_no._29_of_2019.pdf"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Ministry of Labour &amp; Employment — The Code on Wages, 2019 (Act No. 29 of 2019), labour.gov.in
                      </a>
                    </li>
                    <li>
                      Supreme Court of India — State of Jharkhand &amp; Ors. v. Jitendra Kumar Srivastava (2013) 12 SCC 210 (Leave Encashment as Property under Article 300A)
                    </li>
                    <li>
                      Payment of Wages Act, 1936 — Section 2(vi) Definition of Wages &amp; Section 15 Claims Arising Out of Deductions
                    </li>
                    <li>
                      Industrial Disputes Act, 1947 — Section 33C(2) Recovery of Money Due from Employer
                    </li>
                    <li>
                      Code of Civil Procedure, 1908 — Order XXXVII Summary Suits for Liquidated Debts
                    </li>
                    <li>
                      Ministry of Corporate Affairs (MCA) — Company Master Data &amp; Registered Office Verification
                    </li>
                    <li>
                      Bharatiya Nyaya Sanhita, 2023 — Section 316 (Criminal Breach of Trust) &amp; Section 318 (Cheating)
                    </li>
                  </ol>
                </section>

                {/* ── MORE GUIDES (Internal Links) ─────────────────────── */}
                <section className="scroll-mt-32">
                  <h2 className="text-xl font-black text-slate-900 mb-5 border-b border-slate-100 pb-2">
                    More Employment &amp; Consumer Dispute Guides
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        title: 'How to Recover Full and Final Settlement from Employer',
                        href: '/how-to-recover-full-and-final-settlement-from-employer',
                      },
                      {
                        title: 'How to Recover Unpaid Salary Legally from Employer',
                        href: '/how-to-recover-unpaid-salary-legally',
                      },
                      {
                        title: 'Legal Notice to Employer for Not Paying PF',
                        href: '/send-a-legal-notice/employer-not-paying-pf-provident-fund',
                      },
                      {
                        title: 'Legal Notice for Salary Withheld During Notice Period',
                        href: '/legal-notice-for-salary-withheld-during-notice-period',
                      },
                      {
                        title: 'Wrongful Termination & Unpaid Notice Period Salary Notice',
                        href: '/legal-notice-wrongful-termination-unpaid-notice-period-salary',
                      },
                      {
                        title: 'Employer Withholding Relieving Letter Legal Action',
                        href: '/employer-withholding-relieving-letter-legal-action',
                      },
                      {
                        title: 'Legal Notice to Company for Not Paying Commission',
                        href: '/send-a-legal-notice/commission-not-paid-by-company',
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
                    platform, connecting employees, software engineers, corporate managers, and
                    professionals with experienced panel advocates for fast, advocate-vetted statutory
                    demand notices at transparent flat fees. With ₹100 Crore+ recovered and 10,000+
                    disputes resolved across India, Legal Recovery delivers authoritative legal impact
                    without the delays and unpredictability of traditional law firms.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { label: 'Send a Legal Notice', href: '/send-a-legal-notice' },
                      {
                        label: 'Salary & Employment Recoveries',
                        href: '/services/recovery-of-salary-and-employment-dues',
                      },
                      {
                        label: 'Legal Notice for Recovery of Money',
                        href: '/legal-notice-for-recovery-of-money',
                      },
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
                  <svg
                    className="w-5 h-5 text-[#DC2626]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-black text-base mb-2 leading-snug">
                  Employer Withholding Your Leave Encashment?
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  Send an advocate-vetted statutory legal notice today. 76% of employers settle unpaid
                  earned leave wages and F&amp;F dues within 15 days of notice service.
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
                      <svg
                        key={s}
                        className="w-4 h-4 text-amber-400 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <span className="font-black text-slate-900 text-sm">4.9</span>
                  <span className="text-slate-400 text-xs">/5 (294 reviews)</span>
                </div>

                {/* Review card — must match JSON-LD Product > Review word-for-word */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#DC2626]/10 flex items-center justify-center font-black text-[#DC2626] text-xs">
                      VS
                    </div>
                    <div>
                      <p className="font-extrabold text-slate-900 text-xs">Vikramaditya Sengupta</p>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <svg
                            key={s}
                            className="w-3 h-3 text-amber-400 fill-current"
                            viewBox="0 0 24 24"
                          >
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
                  {
                    stat: '76%',
                    label: 'Employers settle F&F dues prior to Labour Court litigation',
                  },
                  {
                    stat: '₹100CR+',
                    label: 'Total employment & commercial dues recovered across India',
                  },
                  { stat: 'Same Day', label: 'Advocate notice drafted and dispatched' },
                  { stat: 'Flat Fee', label: 'Transparent pricing with no hidden legal fees' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0"
                  >
                    <span className="font-black text-[#DC2626] text-sm">{item.stat}</span>
                    <span className="text-xs text-slate-500 text-right max-w-[60%]">
                      {item.label}
                    </span>
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
