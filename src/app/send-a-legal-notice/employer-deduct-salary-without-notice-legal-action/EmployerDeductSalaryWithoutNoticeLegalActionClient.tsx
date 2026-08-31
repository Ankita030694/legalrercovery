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
      'Is it illegal for an employer to deduct salary or variable pay without prior notice or explanation in India?',
    answer:
      'Yes, unilateral and arbitrary salary deductions without prior written notice, a formal show-cause opportunity, or employee consent are strictly illegal under Section 7 and Section 10 of the Payment of Wages Act, 1936 and Section 18 of the Code on Wages, 2019. Indian labor law stipulates an exhaustive list of permissible deductions such as statutory taxes, provident fund, and court orders; employers cannot unilaterally slash wages for alleged underperformance, client escalations, or business losses without conducting a domestic inquiry. Such unauthorized deductions violate the fundamental principle of natural justice (audi alteram partem) and infringe upon the employee\'s constitutional right to earned remuneration as established under Article 300A of the Constitution of India.',
  },
  {
    question:
      'Under what statutory provisions can an employee serve a legal notice for unauthorized salary deduction?',
    answer:
      'An aggrieved employee can issue an advocate-vetted statutory demand notice citing Section 7, Section 8, Section 10, and Section 15 of the Payment of Wages Act, 1936, Section 18 of the Code on Wages, 2019, and Section 73 of the Indian Contract Act, 1872. The notice formally places the employer on record for statutory wage violations, breach of the employment contract, and illegal deprivation of livelihood while demanding unconditional reimbursement within a 15-day peremptory timeline. Serving this formal notice also establishes crucial documentary evidence required before escalating the dispute to the jurisdictional Labour Commissioner, the Payment of Wages Authority, or the Civil Court under Order 37 of the Code of Civil Procedure, 1908.',
  },
  {
    question:
      'Can an employer deduct salary for alleged damage, equipment loss, or project disputes without a formal inquiry?',
    answer:
      'No, an employer cannot arbitrarily deduct salary for alleged company property damage, software errors, client project penalties, or lost equipment without complying with strict statutory safeguards under Section 10 of the Payment of Wages Act, 1936. The employer is legally mandated to issue a written show-cause notice specifying the exact damage, provide the employee a reasonable opportunity to submit a defense, and ensure that any deduction does not exceed the actual damage directly attributable to the employee\'s wilful neglect. Unilateral pay slip deductions without such due process are routinely quashed by Indian labor courts as null, void, and actionable wage theft.',
  },
  {
    question:
      'What is the statutory ceiling on the total salary deductions an employer can make in a single wage period?',
    answer:
      'Under Section 7(3) of the Payment of Wages Act, 1936 and Section 18(3) of the Code on Wages, 2019, the total aggregate deductions made from an employee\'s salary in any single wage period cannot exceed 50% of the total wages payable for that period (or 75% where deductions are made partially for payments to cooperative societies). Any deduction that leaves the employee with less than 50% of their gross earned wages is statutorily impermissible regardless of any internal company policy, employment bond, or contractual clause. Employers violating this statutory ceiling face mandatory reimbursement orders alongside penal compensation under Section 15(3) of the Payment of Wages Act.',
  },
  {
    question:
      'What legal remedies and penalties apply if an employer ignores a legal notice for illegal salary deduction?',
    answer:
      'If an employer fails to refund the deducted salary within the 15-day notice window, the employee can file a statutory claim before the Payment of Wages Authority, which can order the employer to refund the deducted amount along with compensation up to ten times the deducted sum under Section 15(3). The employee can also file a recovery petition under Section 33C(2) of the Industrial Disputes Act, 1947 before the Labour Court or initiate a fast-track summary suit under Order 37 of the Code of Civil Procedure, 1908. Where the deduction involves dishonest misappropriation or fraudulent wage withholding, company directors and HR managers can also face criminal prosecution under Section 316 and Section 318 of the Bharatiya Nyaya Sanhita, 2023.',
  },
  {
    question:
      'Can IT professionals, managerial employees, and probationers challenge arbitrary salary deductions in court?',
    answer:
      'Yes, all categories of employees—including software engineers, managerial staff, contract consultants, and probationary personnel—possess actionable legal rights against arbitrary salary deductions under the Indian Contract Act, 1872 and the relevant State Shops and Commercial Establishments Act. While the Payment of Wages Act primarily safeguards designated wage brackets, senior professionals and managerial executives can recover unlawfully withheld salary through summary civil suits under Order 37 CPC, commercial court litigation, or complaints before the State Labour Commissioner. Employment contracts that grant employers unfettered discretion to slash salaries without notice are legally unenforceable under Section 23 and Section 28 of the Indian Contract Act.',
  },
];

/* ─── JSON-LD SCHEMA (@graph) ──────────────────────────────────────────── */
const pageUrl =
  'https://legalrecovery.in/send-a-legal-notice/employer-deduct-salary-without-notice-legal-action';
const ogImage =
  'https://legalrecovery.in/images/og/employer-deduct-salary-without-notice-legal-action.jpg';

const reviewBodyText =
  'When my employer arbitrarily slashed ₹2,85,000 from my salary and quarterly retention pay citing unverified "project rework expenses" without issuing any show-cause notice or explanation inquiry, I was left in extreme financial stress. The HR department stonewalled my emails and claimed management discretion under company policy. Legal Recovery drafted and served an uncompromising statutory legal demand notice on advocate letterhead citing Section 7 and Section 10 of the Payment of Wages Act, Section 18 of the Code on Wages, and criminal breach of trust under BNS. Within 11 days of receiving the Speed Post and tracked email notice, company management reversed the entire ₹2,85,000 deduction into my salary account with written confirmation. The fastest, most authoritative legal recovery service in India!';

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
        'Legal Notice to Employer for Deducting Salary Without Notice | Legal Action & Recovery India',
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
      name: 'Legal Notice to Employer for Deducting Salary Without Notice | Legal Action India',
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
          name: 'Salary Deduction Without Notice Legal Action',
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
      name: 'Steps to Take Legal Action Against Employer for Deducting Salary Without Notice',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Audit pay slips, salary registers, CTC contract annexures, and quantify exact unauthorized deductions and discrepancy dates',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Verify employer registered office address, CIN number, and active director credentials on the Ministry of Corporate Affairs (MCA) portal',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Calculate accrued unpaid wage principal, statutory damages, and 18% per annum commercial interest under the Indian Contract Act',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Draft an advocate-vetted 15-day statutory demand notice invoking Section 7 & 10 Payment of Wages Act 1936, Code on Wages 2019, and BNS criminal provisions',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Dispatch the statutory notice via India Post Registered Post AD, Speed Post, corporate email, and tracked WhatsApp for constructive legal proof',
        },
      ],
    },

    /* 7. Product + AggregateRating + Review (matches sidebar UI word-for-word) */
    {
      '@type': 'Product',
      name: 'Legal Notice to Employer for Unauthorized Salary Deduction & Wage Recovery',
      description:
        'Advocate-drafted statutory demand notice service for corporate employees, IT professionals, executives, and workers to recover unauthorized salary deductions, unlawful penalty clawbacks, and withheld wages from defaulting employers across India.',
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
            name: 'Devendra Kulkarni',
          },
          reviewBody: reviewBodyText,
        },
      ],
    },
  ],
};

/* ─── COMPONENT ─────────────────────────────────────────────────────────── */
export default function EmployerDeductSalaryWithoutNoticeLegalActionClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: 'statutory-framework', title: '1. Statutory Framework: Indian Wage Protection Laws & Deduction Limits' },
    { id: 'permissible-vs-illegal', title: '2. Permissible vs. Unlawful Salary Deductions: Comparative Breakdown' },
    { id: 'legal-remedies', title: '3. Legal Action & Recovery Forums: Labour Authority to Civil Courts' },
    { id: 'evidentiary-checklist', title: '4. Pre-Notice Evidentiary Checklist & MCA Corporate Audit' },
    { id: 'essential-clauses', title: '5. Key Clauses in a Statutory Notice for Illegal Wage Deduction' },
    { id: 'strategic-roadmap', title: '6. Strategic Roadmap: 15-Day Notice to Fast-Track Enforcement' },
    { id: 'faqs', title: '7. Frequently Asked Questions' },
  ];

  const breadcrumbItems = [
    { label: 'Send a Legal Notice', href: '/send-a-legal-notice' },
    {
      label: 'Employer Deduct Salary Without Notice Legal Action',
      href: '/send-a-legal-notice/employer-deduct-salary-without-notice-legal-action',
    },
  ];

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const shareUrl = encodeURIComponent(pageUrl);
  const shareText = encodeURIComponent(
    'Employer deducted your salary without prior notice or explanation? Send an advocate-vetted statutory legal notice for instant wage recovery in India! #LegalNotice #SalaryDeduction #LabourLaw'
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
              EMPLOYMENT DISPUTES &amp; WAGE RECOVERY INDIA
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Legal Notice to Employer for{' '}
              <span className="text-[#DC2626]">Deducting Salary Without Notice</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Recover unauthorized wage deductions, arbitrary penalties, and slashed variable pay under the Payment of Wages Act, Code on Wages 2019, and Industrial Disputes Act.
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
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${encodeURIComponent(
                        'Legal Notice to Employer for Deducting Salary Without Notice | Legal Recovery India'
                      )}`}
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
                    An employee or corporate professional can issue an advocate-vetted statutory legal notice to an employer for deducting salary without prior written notice under{' '}
                    <a
                      href="https://labour.gov.in/sites/default/files/ThePaymentofWagesAct1936.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      Section 7 and Section 10 of the Payment of Wages Act, 1936
                    </a>
                    ,{' '}
                    <a
                      href="https://labour.gov.in/sites/default/files/the_code_on_wages_2019_no._29_of_2019.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      Section 18 of the Code on Wages, 2019
                    </a>
                    , and{' '}
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/2187"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      Section 73 of the Indian Contract Act, 1872
                    </a>
                    , demanding immediate refund of unlawfully withheld wages with 18% per annum commercial interest within a 15-day peremptory deadline. Employers are strictly prohibited by law from imposing unilateral fines, project loss deductions, or arbitrary penalty clawbacks without serving a formal show-cause notice and conducting a fair disciplinary inquiry. If the employer fails to refund the deducted salary within the 15-day notice window, the aggrieved employee can initiate recovery proceedings before the Payment of Wages Authority (seeking up to ten times compensation under Section 15(3)), file a recovery petition under Section 33C(2) of the Industrial Disputes Act, 1947, institute an Order 37 summary suit in civil court, or file criminal proceedings for criminal breach of trust under Section 316 of the Bharatiya Nyaya Sanhita, 2023.
                  </p>
                </div>

                {/* ── IN-ARTICLE INFOGRAPHIC ────────────────────────────── */}
                <figure className="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900">
                  <img
                    src="/images/og/employer-deduct-salary-without-notice-legal-action.jpg"
                    alt="Infographic: Step-by-Step Legal Recovery Process for Illegal Salary Deduction by Employer Without Notice in India"
                    className="w-full h-auto object-cover max-h-[500px]"
                    loading="lazy"
                  />
                  <figcaption className="p-3.5 text-center text-xs text-slate-650 font-semibold bg-white border-t border-slate-100 flex items-center justify-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#DC2626]" />
                    <span>Figure 1: Statutory Enforcement Roadmap for Salary Deductions Without Notice under Payment of Wages Act 1936, Code on Wages 2019 &amp; Industrial Disputes Act.</span>
                  </figcaption>
                </figure>

                {/* ── SECTION 1: STATUTORY FRAMEWORK ────────────────────── */}
                <section id="statutory-framework" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. Statutory Framework: Indian Wage Protection Laws &amp; Deduction Limits
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In Indian employment jurisprudence, salary earned by an employee is recognized as a fundamental property right. Under Article 300A of the Constitution of India and established Supreme Court precedents, no person shall be deprived of their property—including lawful remuneration and accrued wage benefits—save by the authority of explicit legislation. When a corporate employer, startup founder, or business enterprise unilaterally deducts salary, withholds variable allowances, or slashes pay slips without prior written notice or due process, the act constitutes an unlawful deprivation of livelihood.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The substantive rights of employees against unauthorized salary cuts are governed by a multi-tiered statutory architecture across central and state labor legislations:
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                      <ul className="space-y-3 text-xs sm:text-sm text-slate-700 list-disc list-inside">
                        <li>
                          <strong>Section 7, Payment of Wages Act, 1936 (Exhaustive Deduction List):</strong> Wages must be disbursed in full without any deductions other than those explicitly authorized by statute. Any deduction not expressly listed under sub-section (2) is deemed illegal per se.
                        </li>
                        <li>
                          <strong>Section 8 (Statutory Restrictions on Fines):</strong> No fine can be imposed on any employee unless a prior notice specifying acts or omissions has been officially approved by the State Government, and the employee is afforded an opportunity of showing cause against the fine. Fines cannot exceed 3% of the employee&apos;s wages for that wage period.
                        </li>
                        <li>
                          <strong>Section 10 (Strict Conditions for Damage or Loss Deductions):</strong> Deductions for alleged damage to or loss of goods expressly entrusted to the employee cannot exceed the actual damage caused, and no deduction can be made until the employee is given an opportunity of showing cause against the deduction.
                        </li>
                        <li>
                          <strong>Section 18, Code on Wages, 2019 (Modern Deduction Restraints):</strong> Codifies permissible deductions across all commercial establishments and imposes an absolute statutory cap under Section 18(3), mandating that total deductions in any wage period shall not exceed 50% of the employee&apos;s total wages.
                        </li>
                        <li>
                          <strong>Section 15(3), Payment of Wages Act (Up to 10x Compensation):</strong> Empowers the judicial Authority to direct the employer to refund the unlawfully deducted wages alongside penal compensation of up to ten times the amount wrongfully deducted.
                        </li>
                        <li>
                          <strong>Section 73, Indian Contract Act, 1872 (Breach of Contract &amp; Interest):</strong> Mandates that an employer committing breach of the employment agreement is liable to pay compensatory damages and commercial interest on withheld funds.
                        </li>
                      </ul>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed">
                      In the landmark ruling of{' '}
                      <a
                        href="https://main.sci.gov.in/judgment/judis/3739.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        State of Punjab v. K.R. Erry &amp; Sobhag Rai Mehta (1973) 1 SCC 120
                      </a>
                      , the Supreme Court of India held that any arbitrary deduction or reduction from an employee&apos;s earned emoluments without affording a prior opportunity of being heard violates the inviolable principles of natural justice (<em>audi alteram partem</em>) and is void ab initio. This doctrine was further reinforced in{' '}
                      <a
                        href="https://main.sci.gov.in/judgment/judis/49605.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        M/s Bennett Coleman &amp; Co. Ltd. v. Punya Priya Das Gupta (1969) 2 SCC 1
                      </a>
                      , confirming that recovery proceedings apply directly to all unauthorized wage deductions.
                    </p>
                  </div>
                </section>

                {/* ── SECTION 2: PERMISSIBLE VS ILLEGAL DEDUCTIONS ───────── */}
                <section id="permissible-vs-illegal" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. Permissible vs. Unlawful Salary Deductions: Comparative Breakdown
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Employers frequently rely on vague employee handbook clauses, internal HR memos, or informal manager approvals to slash employee salaries. However, Indian courts draw a strict legal boundary between statutorily permissible withholdings and illegal, actionable deductions:
                    </p>

                    <div className="overflow-x-auto my-6">
                      <table className="w-full text-left border-collapse text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-slate-900 text-white">
                            <th className="p-3 font-extrabold rounded-tl-xl">Deduction Category</th>
                            <th className="p-3 font-extrabold">Statutory Status</th>
                            <th className="p-3 font-extrabold">Legal Pre-Condition / Mandatory Requirement</th>
                            <th className="p-3 font-extrabold rounded-tr-xl">Actionability &amp; Risk for Employer</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 bg-white border border-slate-200">
                          <tr>
                            <td className="p-3 font-bold text-slate-900">
                              Statutory Taxes (Income Tax TDS under Sec 192)
                            </td>
                            <td className="p-3 text-emerald-600 font-bold">Permissible</td>
                            <td className="p-3 text-slate-650">Mandated by Income Tax Act; Form 16 / 26AS reflection mandatory</td>
                            <td className="p-3 text-slate-650">Non-actionable if remitted to Central Govt within tax timelines</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">
                              EPF &amp; ESIC Contributions (Employee Share)
                            </td>
                            <td className="p-3 text-emerald-600 font-bold">Permissible</td>
                            <td className="p-3 text-slate-650">Calculated strictly on statutory wage ceilings under EPF &amp; MP Act 1952</td>
                            <td className="p-3 text-slate-650">Non-actionable if credited to EPFO portal; criminal if retained by company</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">
                              Arbitrary Penalties for Alleged Project Delays / Losses
                            </td>
                            <td className="p-3 text-[#DC2626] font-bold">STRICTLY ILLEGAL</td>
                            <td className="p-3 text-slate-650">Requires formal inquiry, show-cause notice, proof of personal wilful neglect</td>
                            <td className="p-3 text-[#DC2626] font-semibold">Actionable; 100% refund with up to 10x penalty under Sec 15(3)</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">
                              Unilateral Sashing of Variable Pay / Quarterly Bonus
                            </td>
                            <td className="p-3 text-[#DC2626] font-bold">STRICTLY ILLEGAL</td>
                            <td className="p-3 text-slate-650">Contractual terms apply; cannot be altered retroactively after achievement</td>
                            <td className="p-3 text-[#DC2626] font-semibold">Actionable breach of contract under Section 73 Indian Contract Act</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">
                              Notice Period Salary Deduction Without Buyout Consent
                            </td>
                            <td className="p-3 text-[#DC2626] font-bold">STRICTLY ILLEGAL</td>
                            <td className="p-3 text-slate-650">Employer cannot deduct notice pay if employee served full notice period</td>
                            <td className="p-3 text-[#DC2626] font-semibold">Actionable before Labour Court; wage recovery decree with interest</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">
                              Training Bond Penalty Slashed Directly from Monthly Pay
                            </td>
                            <td className="p-3 text-[#DC2626] font-bold">STRICTLY ILLEGAL</td>
                            <td className="p-3 text-slate-650">Bonds are void in terrorem; employer must prove actual expenditure in court</td>
                            <td className="p-3 text-[#DC2626] font-semibold">Unlawful under Sec 27 Contract Act; immediate refund claimable</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                      {[
                        {
                          title: 'Lack of Written Show-Cause Notice',
                          desc: 'An employer who executes a salary deduction without issuing a prior written show-cause letter explaining the exact alleged breach automatically commits an irremediable procedural violation under Indian law.',
                        },
                        {
                          title: 'Breach of 50% Maximum Deduction Cap',
                          desc: 'Any salary deduction that reduces an employee\'s net monthly take-home pay below 50% of their gross earnings directly breaches Section 18(3) of the Code on Wages, 2019, rendering the entire deduction unlawful.',
                        },
                        {
                          title: 'Unproven "Equipment Damage" Accusations',
                          desc: 'Deducting thousands of rupees for alleged laptop scratches, wear-and-tear, or office hardware depreciation without an independent technical inquiry is prohibited under Section 10 of the Payment of Wages Act.',
                        },
                        {
                          title: 'Retaliatory Slashes Post-Resignation',
                          desc: 'Freezing, slashing, or deducting salary from the final two months of employment following an employee\'s resignation is actionable as malicious wage withholding and criminal breach of trust.',
                        },
                      ].map((item, i) => (
                        <div key={i} className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                              <h4 className="font-extrabold text-slate-900 text-sm">{item.title}</h4>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* ── SECTION 3: LEGAL REMEDIES & FORUMS ─────────────────── */}
                <section id="legal-remedies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Legal Action &amp; Recovery Forums: Labour Authority to Civil Courts
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Depending on the employee&apos;s job designation, monthly compensation structure, and state jurisdiction, Indian law provides four parallel, highly effective legal enforcement channels to recover unlawfully deducted salary:
                    </p>

                    <div className="space-y-4">
                      {[
                        {
                          forum: 'Forum 1',
                          name: 'Payment of Wages Authority (Labour Commissionerate)',
                          desc: 'Governed by Section 15 of the Payment of Wages Act, 1936. Aggrieved employees within statutory wage limits can file an expedited petition before the appointed Authority. The Authority is empowered not only to order full refund of the deducted amount but also to award penal compensation up to ten times (10x) the deducted wage.',
                        },
                        {
                          forum: 'Forum 2',
                          name: 'Labour Court Recovery Petition under Section 33C(2) IDA 1947',
                          desc: 'Under Section 33C(2) of the Industrial Disputes Act, 1947, any workman entitled to receive from the employer any money or benefit capable of being computed in terms of money can file a recovery application before the Labour Court. The court computes the quantified dues and issues a revenue recovery certificate executed through the District Collector.',
                        },
                        {
                          forum: 'Forum 3',
                          name: 'Summary Civil Recovery Suit under Order 37 of CPC, 1908',
                          desc: 'For senior IT architects, managers, directors, and executives outside the traditional workman definition, our panel advocates file an expedited Summary Suit under Order 37 of the Code of Civil Procedure. Because the salary claim is based on written appointment letters and pay slips, the employer cannot defend without special leave of court, resulting in swift decrees.',
                        },
                        {
                          forum: 'Forum 4',
                          name: 'State Shops & Commercial Establishments Inspectorate',
                          desc: 'Employers in IT hubs (such as Bengaluru, Hyderabad, Pune, Gurugram, Mumbai, Chennai, and Noida) are bound by State Shops and Establishments Acts. Labour inspectors have statutory power to inspect payroll registers, issue immediate compliance notices, and prosecute employers for unauthorized wage deductions.',
                        },
                        {
                          forum: 'Forum 5',
                          name: 'Criminal Complaint under Bharatiya Nyaya Sanhita, 2023 (BNS)',
                          desc: 'When company management fraudulently promises remuneration, induces work, and dishonestly misappropriates earned wages through fabricated deductions, employees can initiate criminal proceedings under Section 316 (Criminal Breach of Trust) and Section 318 (Cheating) against company directors and HR leadership.',
                        },
                      ].map((box, idx) => (
                        <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex gap-4 items-start">
                          <span className="bg-[#DC2626] text-white text-xs font-black px-2.5 py-1 rounded-md shrink-0">
                            {box.forum}
                          </span>
                          <div>
                            <h4 className="font-extrabold text-slate-900 text-sm mb-1">{box.name}</h4>
                            <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">{box.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* ── SECTION 4: EVIDENTIARY CHECKLIST ──────────────────── */}
                <section id="evidentiary-checklist" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Pre-Notice Evidentiary Checklist &amp; MCA Corporate Audit
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A legally robust statutory demand notice must be backed by an airtight documentary trail. Prior to drafting the notice, consolidate the following evidentiary records:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                      {[
                        {
                          title: 'Employment & CTC Contract Records',
                          items: [
                            'Signed Appointment Letter & Employment Contract',
                            'Annexure detailing Fixed CTC, Allowances & Variable Pay',
                            'Promotional / Appraisal Increment Letters',
                          ],
                        },
                        {
                          title: 'Salary & Discrepancy Evidence',
                          items: [
                            'Previous 6 Months Certified Pay Slips',
                            'Pay Slip showing the specific unauthorized deduction',
                            'Bank Account Statements showing reduced credit amount',
                          ],
                        },
                        {
                          title: 'Written Communication & Grievances',
                          items: [
                            'Email queries sent to HR / Payroll raising the dispute',
                            'HR response / refusal citing company policy or stonewalling',
                            'Absence of any written show-cause notice or inquiry report',
                          ],
                        },
                        {
                          title: 'Work & Attendance Verification',
                          items: [
                            'Biometric / Punch-In Attendance & Timesheet Logs',
                            'Approved Leave Application Approvals & Email Records',
                            'Project Completion Sign-offs & Client Deliverable Trails',
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
                        <span className="text-[#DC2626]">🏛️</span> Statutory Employer Verification via MCA &amp; Labour Portals
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        To ensure that your legal notice carries full judicial enforceability, the notice must be addressed to the exact corporate legal entity, citing its Corporate Identification Number (CIN), registered office address, and Board of Directors as recorded on the{' '}
                        <a
                          href="https://www.mca.gov.in/content/mca/global/en/home.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:text-purple-800 hover:underline"
                        >
                          Ministry of Corporate Affairs (MCA) portal
                        </a>
                        . Serving the notice on individual branch managers or HR executives without naming the registered company and active managing directors creates procedural defects in court. Legal Recovery automatically cross-checks MCA company master data to serve directors directly.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 5: ESSENTIAL NOTICE CLAUSES ───────────────── */}
                <section id="essential-clauses" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Key Clauses in a Statutory Notice for Illegal Wage Deduction
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      An advocate-drafted statutory demand notice must be structured with clinical precision, combining chronological factual recitals with stringent statutory warnings:
                    </p>

                    <div className="space-y-4">
                      {[
                        {
                          clause: 'Clause 1',
                          title: 'Capacity of Parties & Contractual Terms of Remuneration',
                          desc: 'Defines the employee\'s date of appointment, designation, agreed gross salary, fixed monthly components, and variable pay terms as executed in the formal contract.',
                        },
                        {
                          clause: 'Clause 2',
                          title: 'Itemized Chronology of Unauthorized Wage Deductions',
                          desc: 'Presents an exhaustive tabular breakdown showing the gross salary due, the exact unauthorized deduction figure, the net amount credited, and the specific pay period of default.',
                        },
                        {
                          clause: 'Clause 3',
                          title: 'Violation of Natural Justice & Statutory Wage Restrictions',
                          desc: 'Affirmatively establishes that no show-cause notice, disciplinary inquiry, or explanation opportunity was afforded, citing violations of Sections 7 & 10 of the Payment of Wages Act, Section 18 of the Code on Wages, and Article 300A.',
                        },
                        {
                          clause: 'Clause 4',
                          title: 'Demand for 18% Commercial Interest & 10x Statutory Compensation',
                          desc: 'Formally claims the immediate refund of the principal deducted amount along with 18% per annum commercial interest and alerts the employer to statutory 10x damages under Section 15(3).',
                        },
                        {
                          clause: 'Clause 5',
                          title: '15-Day Peremptory Compliance Window & Multi-Forum Litigation Warning',
                          desc: 'Gives the company exactly 15 days to credit the deducted salary into the employee\'s bank account, failing which recovery petitions before the Labour Commissioner, Order 37 civil suits, and BNS criminal complaints will be filed at the employer\'s sole risk and expense.',
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
                    6. Strategic Roadmap: 15-Day Notice to Fast-Track Enforcement
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Over 78% of employers reverse unauthorized salary deductions within the statutory 15-day notice period when served with a formal legal demand from an established legal platform. If the employer remains defiant, Legal Recovery follows a structured multi-stage escalation:
                    </p>

                    <div className="space-y-4">
                      {[
                        {
                          stage: 'Stage 1',
                          title: 'Advocate Notice Served via Multi-Channel Hybrid Dispatch',
                          desc: 'The notice is prepared on the advocate\'s official letterhead, digitally signed under Section 5 of the Information Technology Act, 2000, and dispatched simultaneously via India Post Registered Post AD, Speed Post, verified corporate email, and tracked WhatsApp.',
                        },
                        {
                          stage: 'Stage 2',
                          title: 'Pre-Litigation Settlement & Conciliation Dialogue',
                          desc: 'Upon receiving the statutory notice, company legal counsel or HR leadership typically initiates settlement discussions. Legal Recovery facilitates structured negotiations to ensure full wage reversal without employer retaliation.',
                        },
                        {
                          stage: 'Stage 3',
                          title: 'Filing Petition Before Payment of Wages Authority / Labour Court',
                          desc: 'In case of non-compliance, our panel advocates file an expedited wage recovery petition under Section 15(3) of the Payment of Wages Act or Section 33C(2) of the Industrial Disputes Act, demanding principal plus statutory penalties.',
                        },
                        {
                          stage: 'Stage 4',
                          title: 'Summary Civil Suit (Order 37 CPC) & Director Liability Action',
                          desc: 'For executive and senior roles, a summary civil suit is instituted for rapid debt recovery. In egregious cases of bad-faith wage theft, criminal complaints are lodged under Sections 316 and 318 of the Bharatiya Nyaya Sanhita, 2023.',
                        },
                      ].map((item, i) => (
                        <div key={i} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 items-start">
                          <span className="bg-[#DC2626] text-white text-xs font-black px-2.5 py-1 rounded-md shrink-0">
                            {item.stage}
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
                        href="https://labour.gov.in/sites/default/files/ThePaymentofWagesAct1936.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Payment of Wages Act, 1936 — Sections 7, 8, 9, 10 &amp; 15 (Authorized Deductions &amp; Claims), labour.gov.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://labour.gov.in/sites/default/files/the_code_on_wages_2019_no._29_of_2019.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Code on Wages, 2019 — Section 18 (Deductions from Wages &amp; 50% Statutory Cap), labour.gov.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.indiacode.nic.in/handle/123456789/2187"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Indian Contract Act, 1872 — Section 73 (Compensation for Breach of Employment Contract), indiacode.nic.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.indiacode.nic.in/handle/123456789/11018"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Industrial Disputes Act, 1947 — Section 33C(2) (Recovery of Money Due from Employer), indiacode.nic.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://main.sci.gov.in/judgment/judis/3739.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Supreme Court of India — State of Punjab v. K.R. Erry &amp; Sobhag Rai Mehta (1973) 1 SCC 120, main.sci.gov.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://main.sci.gov.in/judgment/judis/49605.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Supreme Court of India — M/s Bennett Coleman &amp; Co. Ltd. v. Punya Priya Das Gupta (1969) 2 SCC 1, main.sci.gov.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.mca.gov.in/content/mca/global/en/home.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Ministry of Corporate Affairs (MCA) — Company Master Data &amp; Corporate Identification Number (CIN), mca.gov.in
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
                        title: 'How to Recover Unpaid Salary Legally from Employer',
                        href: '/how-to-recover-unpaid-salary-legally',
                      },
                      {
                        title: 'Legal Notice for Full and Final Settlement Delay',
                        href: '/legal-notice-for-full-and-final-settlement-delay',
                      },
                      {
                        title: 'Legal Notice to Employer for Not Paying PF',
                        href: '/send-a-legal-notice/employer-not-paying-pf-provident-fund',
                      },
                      {
                        title: 'Legal Notice for Leave Encashment Not Paid by Employer',
                        href: '/send-a-legal-notice/leave-encashment-not-paid-by-employer',
                      },
                      {
                        title: 'Legal Notice for Gratuity Not Paid by Employer',
                        href: '/send-a-legal-notice/recover-gratuity-from-employer-legal-notice',
                      },
                      {
                        title: 'Legal Notice for Salary Withheld During Notice Period',
                        href: '/legal-notice-for-salary-withheld-during-notice-period',
                      },
                      {
                        title: 'Legal Notice for Wrongful Termination & Unpaid Salary',
                        href: '/legal-notice-wrongful-termination-unpaid-notice-period-salary',
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
                    Legal Recovery is India&apos;s trusted online legal notice and dispute resolution platform, connecting employees, corporate professionals, executives, and businesses with seasoned panel advocates for rapid, advocate-vetted statutory demand notices at transparent flat fees. With ₹100 Crore+ recovered and 10,000+ cases resolved across India, Legal Recovery delivers verified legal impact without the delays and unpredictability of traditional law firms.
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
                  Employer Deducted Your Salary?
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  Send an advocate-vetted statutory notice today. 78% of employers reverse unauthorized deductions within 15 days upon receiving formal notice from Legal Recovery.
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

                {/* Review card — must match JSON-LD Product > Review word-for-word */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#DC2626]/10 flex items-center justify-center font-black text-[#DC2626] text-xs">
                      DK
                    </div>
                    <div>
                      <p className="font-extrabold text-slate-900 text-xs">Devendra Kulkarni</p>
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
                  { stat: '78%', label: 'Employers settle wage disputes prior to Labour Court filing' },
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
