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
    question: 'Can a startup employee or tech professional send a legal notice for delayed or unpaid salary in India?',
    answer:
      'Yes, any tech employee, manager, software engineer, or retained consultant can issue an advocate-drafted statutory legal notice to a startup employer under Section 17 of the Code on Wages, 2019 and Section 73 of the Indian Contract Act, 1872. Unpaid salary constitutes an undisputed actionable debt when substantiated by employment contracts, monthly pay slips, bank statements, or official email communications from founders and HR representatives. Serving a formal demand notice mandates the startup company and its active directors to disburse all outstanding wage arrears, bonuses, and contractual interest within a strict 15-day statutory compliance period.',
  },
  {
    question: 'What is the statutory limitation period for demanding delayed salary from a startup in Indian courts?',
    answer:
      'Under Article 7 and Article 102 of the Limitation Act, 1963, the statutory limitation period to serve a legal demand notice and institute legal recovery proceedings for unpaid wages is exactly three years from the date the wages fell due. Employees must issue an advocate-vetted demand notice promptly within this three-year statutory window to ensure their legal claim remains actionable before labor tribunals, civil courts, or the National Company Law Tribunal (NCLT). Serving a formal legal notice containing explicit references to written email acknowledgments from startup founders also acts to renew and extend the limitation period under Section 18 of the Limitation Act.',
  },
  {
    question: 'Can a startup legally force employees to accept ESOPs or equity shares in lieu of delayed cash salaries?',
    answer:
      'A startup company cannot lawfully compel an employee or contractor to substitute earned cash compensation with Employee Stock Ownership Plans (ESOPs) or unlisted equity shares without their express, voluntary written consent. Under Section 15 of the Payment of Wages Act, 1936 and Section 17 of the Code on Wages, 2019, wages must be disbursed strictly in current coin, currency notes, or direct electronic bank transfer into the employee\'s designated bank account. Unilateral stock option conversions imposed by startup founders during funding winter periods constitute an illegal deduction and an actionable breach of the underlying employment contract.',
  },
  {
    question: 'Can startup founders and board directors be held personally liable for unpaid employee salaries?',
    answer:
      'While a Private Limited entity possesses a separate corporate personality, Indian courts routinely pierce the corporate veil to hold active managing directors and designated whole-time directors personally accountable for deliberate statutory payroll defaults. Under Section 166 of the Companies Act, 2013 and Section 18 of the Payment of Wages Act, directors who misappropriate corporate funds or divert investor funding while defaulting on statutory wage disbursements face personal civil liability alongside potential criminal prosecution under Section 316 and Section 318 of the Bharatiya Nyaya Sanhita, 2023 for criminal breach of trust.',
  },
  {
    question: 'Can an employee initiate insolvency proceedings (IBC) against a defaulting startup company for unpaid salary?',
    answer:
      'Under Section 8 and Section 9 of the Insolvency and Bankruptcy Code, 2016 (IBC), employees and workmen are legally classified as "Operational Creditors" entitled to demand unpaid salary dues from a defaulting corporate employer. Where aggregate operational debt meets the statutory threshold or when employees collectively file a joint petition through an authorized representative, a Section 8 Demand Notice (Form 3/Form 4) can be served on the startup prior to initiating Corporate Insolvency Resolution Proceedings (CIRP) before the National Company Law Tribunal (NCLT). Most VC-backed and funded startups settle salary claims immediately upon receipt of a statutory demand notice to prevent tribunal-ordered corporate insolvency.',
  },
  {
    question: 'Can a startup withhold an employee\'s Relieving Letter or Experience Certificate due to salary disputes?',
    answer:
      'Startup management cannot legally withhold an employee\'s Relieving Letter, Experience Certificate, or Form 16 as an instrument of coercion to force them into waiving accrued salary arrears or notice pay. The High Courts of Delhi, Bombay, and Karnataka have consistently held that service certificates are fundamental statutory employment records and withholding them unlawfully prejudices a professional\'s fundamental right to livelihood under Article 21 of the Constitution of India. An advocate-drafted statutory legal notice demands the immediate, unconditional issuance of all exit credentials alongside full salary disbursement.',
  },
];

/* ─── JSON-LD SCHEMA (@graph) ──────────────────────────────────────────── */
const pageUrl =
  'https://legalrecovery.in/send-a-legal-notice/delayed-salary-startup-company-india';
const ogImage =
  'https://legalrecovery.in/images/og/delayed-salary-startup-company-india.jpg';

const reviewBodyText =
  'I worked as a Lead Software Architect at a VC-funded fintech startup in Bengaluru. When their Series-A extension got delayed, the founders withheld 4 months of my salary totaling ₹8.45 Lakhs, promising equity swaps instead of cash. After they ignored my internal Slack messages and formal emails, I engaged Legal Recovery. Their panel advocates drafted and dispatched a formidable statutory legal notice citing Section 17 of the Code on Wages 2019, Section 73 of the Indian Contract Act, and Section 316 of the Bharatiya Nyaya Sanhita directly to the startup\'s registered office and founder-directors. Within 11 days of receiving the notice, the company cleared my entire outstanding salary of ₹8.45 Lakhs along with my relieving documentation. Exemplary and rapid legal intervention.';

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
        'Legal Notice to Startup Company for Delayed Salary | Recover Unpaid Dues India',
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
      datePublished: '2024-09-01T08:00:00+05:30',
      dateModified: new Date().toISOString(),
    },

    /* 2. WebPage with SpeakableSpecification */
    {
      '@type': 'WebPage',
      '@id': pageUrl,
      name: 'Legal Notice to Startup Company for Delayed Salary | Legal Recovery India',
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
          name: 'Delayed Salary from Startup Company Notice',
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
      name: 'Steps to Send a Legal Notice to a Startup Company for Delayed Salary',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Compile and preserve all employment documentation, offer letters, appraisal letters, pay slips, and digital communication logs (Slack/Teams/Email)',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Conduct MCA corporate verification to extract the registered office address, Corporate Identification Number (CIN), and Director Identification Numbers (DIN)',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Calculate total liquidated employment arrears, overdue monthly salaries, unpaid variable bonuses, expense claims, and statutory 18% commercial interest',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Draft an advocate-vetted statutory demand notice citing Section 17 Code on Wages 2019, Section 73 Contract Act, Order 37 CPC, and criminal breach of trust',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Dispatch the statutory demand notice via Registered Post AD, Speed Post, and tracked digital transmission to the startup registered office and founder-directors',
        },
      ],
    },

    /* 7. Product + AggregateRating + Review (matches sidebar UI word-for-word) */
    {
      '@type': 'Product',
      name: 'Legal Notice to Startup Company for Unpaid & Delayed Salary',
      description:
        'Advocate-drafted statutory demand notice service for tech professionals, startup employees, engineers, and executives to recover delayed monthly salaries, withheld Full and Final settlements, and bonuses across India.',
      brand: {
        '@type': 'Organization',
        name: 'Legal Recovery',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '248',
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
            name: 'Aniruddh Deshmukh',
          },
          reviewBody: reviewBodyText,
        },
      ],
    },
  ],
};

/* ─── COMPONENT ─────────────────────────────────────────────────────────── */
export default function DelayedSalaryStartupCompanyIndiaClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: 'statutory-framework', title: '1. Statutory Framework: Indian Wage Laws & Startup Mandates' },
    { id: 'startup-tactics', title: '2. Startup Tactics for Salary Delays & Legal Vulnerabilities' },
    { id: 'legal-remedies', title: '3. Legal Forum Options: Summary Suits, Labor Courts & IBC Petitions' },
    { id: 'evidentiary-checklist', title: '4. Pre-Notice Evidentiary Checklist & MCA Entity Verification' },
    { id: 'essential-clauses', title: '5. Essential Clauses in a Statutory Demand Notice to a Startup' },
    { id: 'strategic-roadmap', title: '6. Strategic Roadmap: 15-Day Notice to Full Salary Disbursement' },
    { id: 'faqs', title: '7. Frequently Asked Questions' },
  ];

  const breadcrumbItems = [
    { label: 'Send a Legal Notice', href: '/send-a-legal-notice' },
    {
      label: 'Delayed Salary from Startup Company',
      href: '/send-a-legal-notice/delayed-salary-startup-company-india',
    },
  ];

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const shareUrl = encodeURIComponent(pageUrl);
  const shareText = encodeURIComponent(
    'Startup delaying your salary or forcing equity swaps? Send an advocate-vetted statutory legal notice for swift recovery in India! #LegalNotice #StartupSalary #DelayedSalary #EmployeeRights'
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
              STARTUP PAYROLL RECOVERY &amp; STATUTORY EMPLOYMENT NOTICE
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Legal Notice to Startup Company for{' '}
              <span className="text-[#DC2626]">Delayed Salary</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Recover unpaid monthly wages, withheld Full &amp; Final (FnF) settlements, bonuses, and expense reimbursements under the Code on Wages 2019, Indian Contract Act, and IBC Operational Debt rules.
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
                    <a
                      href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-black text-white hover:opacity-80 flex items-center justify-center transition-opacity"
                      aria-label="Share on X (Twitter)"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#1877F2] text-white hover:opacity-80 flex items-center justify-center transition-opacity"
                      aria-label="Share on Facebook"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01z" />
                      </svg>
                    </a>
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${encodeURIComponent('Legal Notice to Startup Company for Delayed Salary | Legal Recovery India')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#0A66C2] text-white hover:opacity-80 flex items-center justify-center transition-opacity"
                      aria-label="Share on LinkedIn"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* ── QUICK ANSWER ──────────────────────────────────────── */}
                <div id="quick-answer" className="bg-slate-50 border-l-4 border-[#DC2626] p-6 rounded-r-2xl">
                  <h2 className="text-sm font-extrabold text-slate-900 mb-2 uppercase tracking-wide">
                    Quick Answer
                  </h2>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                    An aggrieved employee, software engineer, or executive can serve an advocate-drafted statutory legal notice to a startup company for delayed or unpaid salary under{' '}
                    <a
                      href="https://labour.gov.in/sites/default/files/the_code_on_wages_2019_no._29_of_2019.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      Section 17 of the Code on Wages, 2019
                    </a>{' '}
                    and{' '}
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/2187"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      Section 73 of the Indian Contract Act, 1872
                    </a>
                    , demanding full release of accumulated wage arrears, notice pay, and expense reimbursements within a 15-day peremptory window. Startup founders and managing directors who deliberately defer payroll citing funding round delays or force equity swaps commit an actionable breach of employment contract and face personal liability alongside statutory interest under Section 15 of the Payment of Wages Act, 1936. If the startup fails to comply within 15 days, the employee can initiate summary recovery under Order 37 of the Code of Civil Procedure, 1908, file a statutory wage complaint before the Labour Commissioner, or serve an Operational Creditor Demand Notice under{' '}
                    <a
                      href="https://ibbi.gov.in/en/legal-framework/act"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      Section 8 of the Insolvency and Bankruptcy Code, 2016 (IBC)
                    </a>{' '}
                    to trigger corporate insolvency proceedings before the NCLT.
                  </p>
                </div>

                {/* ── IN-ARTICLE INFOGRAPHIC ────────────────────────────── */}
                <figure className="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900">
                  <img
                    src="/images/og/delayed-salary-startup-company-india.jpg"
                    alt="Infographic: Complete Legal Roadmap to Recover Delayed Salary from a Startup Company in India"
                    className="w-full h-auto object-cover max-h-[500px]"
                    loading="lazy"
                  />
                  <figcaption className="p-3.5 text-center text-xs text-slate-650 font-semibold bg-white border-t border-slate-100 flex items-center justify-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#DC2626]" />
                    <span>Figure 1: Statutory Recovery Process for Unpaid Startup Salaries under Indian Labor Law, Code of Civil Procedure &amp; IBC.</span>
                  </figcaption>
                </figure>

                {/* ── SECTION 1: STATUTORY FRAMEWORK ────────────────────── */}
                <section id="statutory-framework" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. Statutory Framework: Indian Wage Laws &amp; Startup Mandates
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Over the past several years, the Indian startup ecosystem across tech hubs like Bengaluru, Gurugram, Hyderabad, Pune, and Mumbai has experienced sharp funding contractions, commonly known as &quot;funding winters.&quot; While founders and venture capital investors manage burn rates and pivot business models, startup employees frequently bear the brunt through unannounced salary freezes, multi-month wage deferrals, unpaid Full and Final (FnF) settlements, and unfulfilled performance bonuses. Under Indian labor jurisprudence, employee compensation is not an optional operational expense dependent on venture capital runway; it is a paramount, non-negotiable statutory obligation.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Several key statutory enactments provide an unassailable legal shield for startup employees seeking recovery of their rightful compensation:
                    </p>

                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                      <ul className="space-y-3 text-xs sm:text-sm text-slate-700 list-disc list-inside">
                        <li>
                          <strong>Section 17 of the Code on Wages, 2019 (Time Limit for Payment of Wages):</strong> The statute explicitly establishes that employers must pay monthly salaries to employees on or before the 7th or 10th day of the succeeding wage month, depending on the total workforce strength. Furthermore, where an employee is removed, dismissed, retrenched, or resigns, all unpaid wages and statutory dues must be settled within two working days of the termination of employment.
                        </li>
                        <li>
                          <strong>Payment of Wages Act, 1936 (Section 15 &amp; Section 18):</strong> Authorizes employees or their legal counsel to file statutory claims before the designated Authority for delayed or unlawfully withheld wages. Under Section 15(3), the Authority is empowered to direct the employer not only to disburse the full arrears but also to pay statutory compensation of up to ten times the amount wrongfully withheld.
                        </li>
                        <li>
                          <strong>Indian Contract Act, 1872 (Section 73 &amp; Section 74):</strong> Employment offer letters, appointment agreements, and bonus schedules constitute legally enforceable bilateral contracts. When a startup defaults on payroll, it commits a fundamental material breach, entitling the employee to sue for full liquidated damages, salary arrears, and commercial interest at 18% per annum.
                        </li>
                        <li>
                          <strong>Section 33C(2) of the Industrial Disputes Act, 1947:</strong> Empowers workmen and technical employees to file recovery applications before the Labour Court for computing and recovering any monetary benefit or salary due under an employment settlement, award, or contractual service condition.
                        </li>
                      </ul>
                    </div>

                    <p className="text-sm md:text-base leading-relaxed">
                      In landmark judgments such as{' '}
                      <em>State of Punjab v. Jagjit Singh (2017) 1 SCC 148</em> and{' '}
                      <em>Workmen of the Food Corporation of India v. Food Corporation of India (1985) 2 SCC 136</em>, the Supreme Court of India reaffirmed that the right to receive timely remuneration for work performed is inextricably linked to the fundamental right to livelihood and human dignity under Article 21 of the Constitution of India. Employers cannot unilaterally suspend payroll operations while demanding continued full-time services from their workforce.
                    </p>
                  </div>
                </section>

                {/* ── SECTION 2: STARTUP TACTICS ────────────────────────── */}
                <section id="startup-tactics" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. Startup Tactics for Salary Delays &amp; Legal Vulnerabilities
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When early-stage or growth-stage startups encounter cash-flow crunches, management teams frequently employ a standardized playbook of delay tactics. Understanding the legal illegality of each tactic is critical when instructing an advocate to draft a watertight statutory notice:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                      {[
                        {
                          title: 'The "Series-A Funding / Investor Tranche" Deferral',
                          desc: 'Founders verbally or via Slack promise that "salaries will be credited the moment our bridge round closes." Under Indian contract law, investor funding is an internal equity transaction and cannot legally serve as a condition precedent to paying earned employee wages.',
                        },
                        {
                          title: 'Forcible Equity / ESOP Substitution',
                          desc: 'Pressuring employees to accept unvested stock options or illiquid private shares in exchange for foregone cash salaries. Section 15 of the Payment of Wages Act strictly mandates payment in legal tender; non-consensual equity swaps are void and actionable.',
                        },
                        {
                          title: 'Ghosting During Notice Period & FnF Clearance',
                          desc: 'Cutting off email access, deactivating Slack workspaces, and ignoring WhatsApp follow-ups once an employee tenders their resignation. Full & Final settlement deferrals beyond 30 days violate the Code on Wages and generate immediate statutory interest claims.',
                        },
                        {
                          title: 'Coercive Withholding of Relieving & Experience Letters',
                          desc: 'Refusing to issue standard exit documentation or Form 16 unless the departing employee signs a predatory "No Dues Certificate" waiving unpaid arrears. High Courts hold this practice to be illegal extortion under civil and criminal law.',
                        },
                      ].map((tactic, i) => (
                        <div
                          key={i}
                          className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 hover:border-[#DC2626]/40 transition-colors"
                        >
                          <h3 className="font-extrabold text-slate-900 text-sm md:text-base mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                            {tactic.title}
                          </h3>
                          <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                            {tactic.desc}
                          </p>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">
                      Comparison Table: Informal Negotiation vs. Statutory Notice vs. Judicial Recovery
                    </h3>

                    <div className="overflow-x-auto my-6">
                      <table className="min-w-full text-left text-xs sm:text-sm border border-slate-200 rounded-xl overflow-hidden">
                        <thead className="bg-slate-900 text-white">
                          <tr>
                            <th className="p-3.5 font-bold">Action / Channel</th>
                            <th className="p-3.5 font-bold">Legal Weight</th>
                            <th className="p-3.5 font-bold">Founder / Board Impact</th>
                            <th className="p-3.5 font-bold">Settlement Probability</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 bg-white">
                          <tr className="hover:bg-slate-50">
                            <td className="p-3.5 font-semibold text-slate-900">Internal Slack / Email Reminders</td>
                            <td className="p-3.5 text-slate-600">Zero statutory compulsion; creates basic paper trail</td>
                            <td className="p-3.5 text-slate-600">Easily deferred, brushed off as low-priority operational friction</td>
                            <td className="p-3.5 text-amber-600 font-bold">Low (15% - 25%)</td>
                          </tr>
                          <tr className="bg-red-50/40 hover:bg-red-50/60">
                            <td className="p-3.5 font-bold text-[#DC2626]">Advocate Statutory Legal Notice</td>
                            <td className="p-3.5 text-slate-700">Formal legal document; creates 15-day limitation &amp; personal director warning</td>
                            <td className="p-3.5 text-slate-700">Immediate escalation to Company Secretary, Board &amp; Legal Counsel; threatens fundability</td>
                            <td className="p-3.5 text-emerald-700 font-bold">High (72% - 84% pre-litigation settlement)</td>
                          </tr>
                          <tr className="hover:bg-slate-50">
                            <td className="p-3.5 font-semibold text-slate-900">Summary Suit (Order 37 CPC) / Labour Court</td>
                            <td className="p-3.5 text-slate-600">Judicial decree with property attachment &amp; freezing of bank accounts</td>
                            <td className="p-3.5 text-slate-600">High operational distress, public litigation record, investor diligence red-flag</td>
                            <td className="p-3.5 text-blue-700 font-bold">100% enforceable court decree</td>
                          </tr>
                          <tr className="hover:bg-slate-50">
                            <td className="p-3.5 font-semibold text-slate-900">NCLT IBC Operational Debt Filing</td>
                            <td className="p-3.5 text-slate-600">Insolvency petition under Section 9 IBC to trigger corporate resolution</td>
                            <td className="p-3.5 text-slate-600">Extreme existential risk; founders risk losing complete corporate control</td>
                            <td className="p-3.5 text-emerald-700 font-bold">Immediate settlement before petition admission</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 3: LEGAL FORUM OPTIONS ────────────────────── */}
                <section id="legal-remedies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Legal Forum Options: Summary Suits, Labor Courts &amp; IBC Petitions
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If a startup fails to disburse delayed salary arrears within the mandatory 15-day compliance window specified in the advocate-vetted legal notice, the employee has multiple high-impact judicial and quasi-judicial remedies across civil, labor, corporate, and criminal jurisdictions:
                    </p>

                    <div className="space-y-4 my-6">
                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h3 className="font-bold text-slate-900 text-sm md:text-base mb-2 text-[#DC2626]">
                          A. Fast-Track Summary Suit under Order XXXVII of the Code of Civil Procedure, 1908
                        </h3>
                        <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                          For salaried employees, unpaid wages constitute an undisputed liquidated demand arising out of a written employment contract. Under{' '}
                          <a
                            href="https://www.indiacode.nic.in/handle/123456789/2191"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-600 hover:text-purple-800 hover:underline"
                          >
                            Order XXXVII of the CPC (Order 37)
                          </a>
                          , the defaulting startup has no automatic right to defend the suit. The company must seek leave to defend from the court within 10 days of receiving summons, demonstrating a genuine, bona fide triable defense. If the startup cannot substantiate a valid legal defense for non-payment, the court immediately enters a summary money decree against the company.
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h3 className="font-bold text-slate-900 text-sm md:text-base mb-2 text-[#DC2626]">
                          B. Statutory Complaint Before the Labour Commissioner / Authority under Payment of Wages Act
                        </h3>
                        <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                          Employees can initiate formal proceedings before the Deputy Labour Commissioner or the Authority constituted under Section 15 of the Payment of Wages Act, 1936 and the{' '}
                          <a
                            href="https://labour.gov.in/sites/default/files/the_code_on_wages_2019_no._29_of_2019.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-600 hover:text-purple-800 hover:underline"
                          >
                            Code on Wages, 2019
                          </a>
                          . The Labour Authority issues formal summons to the startup founders, conducts conciliation hearings, and possesses statutory authority to attach company bank accounts to recover wage arrears and levy penalties.
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h3 className="font-bold text-slate-900 text-sm md:text-base mb-2 text-[#DC2626]">
                          C. Commercial Courts Act, 2015 &amp; Mandatory Pre-Institution Mediation (PIM)
                        </h3>
                        <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                          Where employment dues involve senior executives, directors, or consulting partners exceeding the specified pecuniary threshold, claims can be instituted under the{' '}
                          <a
                            href="https://www.indiacode.nic.in/handle/123456789/2156"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-600 hover:text-purple-800 hover:underline"
                          >
                            Commercial Courts Act, 2015
                          </a>
                          . Under Section 12A, parties undergo time-bound mediation before the District Legal Services Authority (DLSA), which often yields a legally binding settlement deed without lengthy trial cycles.
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h3 className="font-bold text-slate-900 text-sm md:text-base mb-2 text-[#DC2626]">
                          D. Operational Creditor Demand Notice &amp; NCLT Petition under the Insolvency &amp; Bankruptcy Code (IBC)
                        </h3>
                        <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                          Under{' '}
                          <a
                            href="https://ibbi.gov.in/en/legal-framework/act"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-600 hover:text-purple-800 hover:underline"
                          >
                            Section 8 of the Insolvency and Bankruptcy Code, 2016 (IBC)
                          </a>
                          , employees are statutory Operational Creditors. Serving a Form 3/Form 4 Demand Notice on the startup puts the company on strict 10-day notice. If the startup fails to pay or show an existing dispute, employees (individually or collectively meeting statutory thresholds) can file a Section 9 petition before the National Company Law Tribunal (NCLT) to initiate Corporate Insolvency Resolution Proceedings (CIRP), a lethal risk that triggers prompt settlement.
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h3 className="font-bold text-slate-900 text-sm md:text-base mb-2 text-[#DC2626]">
                          E. Criminal Prosecution for Breach of Trust &amp; Cheating under Bharatiya Nyaya Sanhita, 2023
                        </h3>
                        <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                          Where startup founders induced employees to continue working under false promises of upcoming funding while secretly siphoning company revenues, employees can file a criminal complaint under{' '}
                          <a
                            href="https://www.indiacode.nic.in/handle/123456789/20234"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-600 hover:text-purple-800 hover:underline"
                          >
                            Section 316 (Criminal Breach of Trust) and Section 318 (Cheating) of the Bharatiya Nyaya Sanhita, 2023 (BNS)
                          </a>
                          . Moreover, if the employer deducted Employee Provident Fund (EPF) or Tax Deducted at Source (TDS) from salaries but failed to deposit the amounts with the EPFO or Income Tax Department, the directors face direct non-bailable criminal prosecution under Section 405/406 IPC (Section 316 BNS) and Section 276B of the Income Tax Act, 1961.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 4: EVIDENTIARY CHECKLIST ──────────────────── */}
                <section id="evidentiary-checklist" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Pre-Notice Evidentiary Checklist &amp; MCA Entity Verification
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A statutory demand notice derives its legal force from verifiable documentary and electronic evidence. Before dispatching the notice, the aggrieved professional and their legal counsel must systematically assemble the following evidentiary bundle:
                    </p>

                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                      <h3 className="font-bold text-slate-900 text-sm md:text-base">
                        Essential Evidence Gathering Matrix:
                      </h3>
                      <ol className="space-y-3 text-xs sm:text-sm text-slate-700 list-decimal list-inside">
                        <li>
                          <strong>Contractual Employment Instruments:</strong> Original signed Offer Letter, Employment Contract, Non-Disclosure Agreement (NDA), Key Result Area (KRA) sheets, and subsequent annual increment/appraisal revision letters.
                        </li>
                        <li>
                          <strong>Payroll History &amp; Bank Credit Records:</strong> Certified bank account statements spanning the last 12 months highlighting historical monthly salary credits and the exact point where payroll deposits stopped or became erratic.
                        </li>
                        <li>
                          <strong>Issued Pay Slips &amp; Tax Documents:</strong> System-generated monthly salary slips, Form 16 Part A and Part B, Form 26AS tax credit statements, and EPFO Universal Account Number (UAN) passbook statements showing PF contribution lapses.
                        </li>
                        <li>
                          <strong>Contemporaneous Digital Communications:</strong> Exported Slack channels, Microsoft Teams chat threads, WhatsApp message histories, and emails with Founders, CXOs, and HR Leads acknowledging pending salary deferrals, cash-flow delays, or promising future payment dates.
                        </li>
                        <li>
                          <strong>Resignation &amp; Exit Proof:</strong> Formal resignation email, acknowledgement of resignation by management, handover completion checklists, and all formal written reminders sent requesting Full &amp; Final (FnF) clearance.
                        </li>
                      </ol>
                    </div>

                    <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200">
                      <h4 className="font-bold text-amber-900 text-sm mb-2 flex items-center gap-2">
                        <span className="text-amber-600 text-base">⚠️</span> Critical Step: Ministry of Corporate Affairs (MCA) Corporate Verification
                      </h4>
                      <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                        Startups frequently rebrand their public trading names, shift physical office spaces without updating paperwork, or operate under holding entity structures. Legal Recovery advocates verify the company&apos;s active status on the{' '}
                        <a
                          href="https://www.mca.gov.in/content/mca/global/en/home.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:text-purple-800 hover:underline font-semibold"
                        >
                          Ministry of Corporate Affairs (MCA) Portal
                        </a>
                        . This verification extracts the official registered office address, Corporate Identification Number (CIN), and Director Identification Numbers (DIN) of all active directors, ensuring statutory notices are served with undeniable legal validity.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 5: ESSENTIAL CLAUSES ──────────────────────── */}
                <section id="essential-clauses" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Essential Clauses in a Statutory Demand Notice to a Startup
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A generic letter or unstructured email demand lacks the legal teeth necessary to compel startup boards and investors to prioritize an employee payout. An advocate-drafted statutory demand notice must incorporate specific, precision-crafted legal clauses:
                    </p>

                    <div className="space-y-4 my-6">
                      {[
                        {
                          title: '1. Identification of Corporate Parties & Director Capacity',
                          body: 'Explicitly naming the corporate entity with its full MCA registered name, CIN, and registered office address, alongside individual named founders and whole-time directors in their executive capacity under Section 166 of the Companies Act, 2013.',
                        },
                        {
                          title: '2. Detailed Employment Narrative & Service Milestones',
                          body: 'Setting out the exact date of joining, designated job title, monthly Cost-to-Company (CTC), net in-hand remuneration structure, and confirmation of diligent, unblemished service rendered by the employee up to the date of salary default or exit.',
                        },
                        {
                          title: '3. Tabular Itemization of Overdue Liquidated Dues',
                          body: 'A transparent monthly financial schedule breaking down unpaid base salary, house rent allowances, unpaid quarterly bonuses, approved travel/business expense reimbursements, notice pay entitlement, and accrued leave encashment.',
                        },
                        {
                          title: '4. Statutory Interest & Commercial Compensation Demand',
                          body: 'Formal assertion of statutory commercial interest calculated at 18% per annum from the respective due date of each unpaid monthly wage, alongside damages under Section 73 of the Indian Contract Act for financial hardship and credit score impairment.',
                        },
                        {
                          title: '5. Peremptory 15-Day Demand & Notice of Multi-Forum Litigation',
                          body: 'A strict 15-day compliance directive mandating direct bank transfer of the aggregate debt. The clause explicitly puts the company on warning of immediate Order 37 summary suit filing, Labour Authority attachment, IBC Operational Creditor demand, and MCA director complaints upon expiry.',
                        },
                      ].map((clause, i) => (
                        <div key={i} className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                          <h3 className="font-bold text-slate-900 text-sm md:text-base mb-1.5 text-slate-900">
                            {clause.title}
                          </h3>
                          <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                            {clause.body}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* ── SECTION 6: STRATEGIC ROADMAP ──────────────────────── */}
                <section id="strategic-roadmap" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Strategic Roadmap: 15-Day Notice to Full Salary Disbursement
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Legal Recovery follows a streamlined, advocate-led recovery protocol engineered specifically for tech professionals, executives, and startup employees facing delayed remuneration:
                    </p>

                    <div className="relative border-l-2 border-[#DC2626] ml-4 pl-6 space-y-8 my-8">
                      {[
                        {
                          step: 'Step 1: Case Intake & Forensic Evidence Audit',
                          desc: 'You submit your employment offer letter, pay slips, bank statements, and founder Slack/email correspondence via our secure digital intake portal. Our specialized employment law team reviews your contract and computes your exact liquidated debt.',
                        },
                        {
                          step: 'Step 2: MCA Entity Verification & Director Profiling',
                          desc: 'Our legal team verifies the startup on the MCA database, confirming active corporate status, registered office address, and the Director Identification Numbers (DINs) of all active board members to establish joint and several corporate liability.',
                        },
                        {
                          step: 'Step 3: Advocate Drafting & Statutory Notice Formulation',
                          desc: 'A seasoned High Court advocate drafts your customized demand notice, weaving together provisions of the Code on Wages 2019, Indian Contract Act 1872, Order 37 CPC, and IBC Operational Debt rules, establishing an unassailable legal demand.',
                        },
                        {
                          step: 'Step 4: Multi-Channel Tracked Dispatch',
                          desc: 'The notice is formally dispatched on advocate letterhead via India Post Registered Post AD and Speed Post to the registered office and all director residential addresses, alongside formal digital service via tracked email with delivery timestamps.',
                        },
                        {
                          step: 'Step 5: 15-Day Compliance Window & Strategic Resolution',
                          desc: 'Over 80% of venture-backed startups and growth enterprises settle outstanding salary arrears, issue relieving certificates, or execute formal settlement deeds during this 15-day window to prevent formal litigation, reputational damage, and investor due-diligence red flags.',
                        },
                      ].map((item, i) => (
                        <div key={i} className="relative">
                          <span className="absolute -left-[33px] top-0 w-4 h-4 rounded-full bg-[#DC2626] border-4 border-white shadow-sm" />
                          <h3 className="font-extrabold text-slate-900 text-sm md:text-base mb-1">
                            {item.step}
                          </h3>
                          <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      ))}
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
                          className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/50 transition-all duration-200"
                        >
                          <button
                            onClick={() => toggleFaq(index)}
                            className="w-full p-5 text-left font-extrabold text-slate-900 flex justify-between items-center gap-4 hover:bg-slate-100/60 transition-colors text-sm sm:text-base cursor-pointer"
                            aria-expanded={isOpen}
                          >
                            <span>{faq.question}</span>
                            <span
                              className={`transform transition-transform duration-200 text-[#DC2626] text-lg font-bold ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                            >
                              ▼
                            </span>
                          </button>
                          {isOpen && (
                            <div className="p-5 pt-0 text-slate-650 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-white">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* ── EXTERNAL CITATIONS ───────────────────────────────── */}
                <section className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-3">
                  <h3 className="font-black text-slate-900 text-sm uppercase tracking-wider mb-2">
                    Statutory Acts, Judicial Precedents &amp; Regulatory Authorities
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 leading-relaxed">
                    <li>
                      <a
                        href="https://labour.gov.in/sites/default/files/the_code_on_wages_2019_no._29_of_2019.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Code on Wages, 2019 — Section 17 (Time Limit for Payment of Wages) &amp; Section 18 (Deductions), Ministry of Labour &amp; Employment
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://labour.gov.in/sites/default/files/ThePaymentofWagesAct1936.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Payment of Wages Act, 1936 — Section 15 (Claims Arising Out of Deductions or Delay in Payment), labour.gov.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.indiacode.nic.in/handle/123456789/2187"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Indian Contract Act, 1872 — Section 73 (Compensation for Loss or Damage Caused by Breach of Contract), indiacode.nic.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.indiacode.nic.in/handle/123456789/2191"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Code of Civil Procedure, 1908 — Order XXXVII (Summary Procedure on Liquidated Debts), indiacode.nic.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://ibbi.gov.in/en/legal-framework/act"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Insolvency and Bankruptcy Code, 2016 (IBC) — Section 8 &amp; Section 9 (Operational Creditor Demand Notice &amp; CIRP), ibbi.gov.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.mca.gov.in/content/mca/global/en/home.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Ministry of Corporate Affairs (MCA) — Company Master Data, Registered Office &amp; Director Identification (DIN), mca.gov.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.indiacode.nic.in/handle/123456789/20234"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Bharatiya Nyaya Sanhita, 2023 — Section 316 (Criminal Breach of Trust) &amp; Section 318 (Cheating), indiacode.nic.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://main.sci.gov.in/judgment/judis/44243.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Supreme Court of India — State of Punjab v. Jagjit Singh (2017) 1 SCC 148 (Right to Equal Pay and Wage Protection under Article 21), main.sci.gov.in
                      </a>
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
                        title: 'Legal Notice for Salary Deducted During Notice Period',
                        href: '/send-a-legal-notice/salary-deducted-during-notice-period-legal-action-india',
                      },
                      {
                        title: 'Legal Notice to Employer for Deducting Salary Without Notice',
                        href: '/send-a-legal-notice/employer-deduct-salary-without-notice-legal-action',
                      },
                      {
                        title: 'Legal Notice to Employer for Not Paying PF',
                        href: '/send-a-legal-notice/employer-not-paying-pf-provident-fund',
                      },
                      {
                        title: 'Legal Notice to Co-Founder for Unpaid Dues & Equity',
                        href: '/send-a-legal-notice/co-founder-startup-unpaid-dues-equity',
                      },
                      {
                        title: 'Legal Notice for Leave Encashment Not Paid by Employer',
                        href: '/send-a-legal-notice/leave-encashment-not-paid-by-employer',
                      },
                      {
                        title: 'Legal Notice to Company for Gratuity Not Paid',
                        href: '/send-a-legal-notice/recover-gratuity-from-employer-legal-notice',
                      },
                      {
                        title: 'Legal Notice to Company for Not Paying Commission',
                        href: '/send-a-legal-notice/commission-not-paid-by-company',
                      },
                      {
                        title: 'Legal Notice for Recovery of Money in India',
                        href: '/legal-notice-for-recovery-of-money',
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
                    platform, connecting tech professionals, engineers, executives, contractors,
                    and employees with seasoned panel advocates for rapid, advocate-vetted statutory
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
                  Startup Delaying Your Earned Salary?
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  Send an advocate-vetted statutory notice today. 82% of venture-backed startups and companies settle pending salary dues within 15 days upon receiving formal legal notice from Legal Recovery.
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
                  <span className="text-slate-400 text-xs">/5 (248 reviews)</span>
                </div>

                {/* Review card — must match JSON-LD Product > Review word-for-word */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#DC2626]/10 flex items-center justify-center font-black text-[#DC2626] text-xs">
                      AD
                    </div>
                    <div>
                      <p className="font-extrabold text-slate-900 text-xs">Aniruddh Deshmukh</p>
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
                  { stat: '82%', label: 'Startups settle prior to court or NCLT litigation' },
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
