'use client';

import { useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import { PaymentModal } from '@/components/PaymentModal';

/* ─── FAQ DATA (Exactly 1 paragraph of 2-3 self-contained sentences each) ──── */
const faqs = [
  {
    question: 'Can an employer legally deduct salary while an employee is serving their notice period in India?',
    answer:
      'An employer cannot make arbitrary or punitive salary deductions while an employee actively works during their contractual notice period under Section 7 of the Payment of Wages Act, 1936 and Section 18 of the Code on Wages, 2019. Deductions are strictly restricted to statutory taxes, authorized PF contributions, or recovery of actual unserved days calculated proportionally on basic pay. Any unilateral wage cuts, retention forfeitures, or penalty withholdings during active service constitute an illegal deduction punishable with up to ten times compensation before the Labour Authority.',
  },
  {
    question: 'What legal options are available if an employer deducts salary for notice period shortfall despite an agreed early release?',
    answer:
      'If an employer agreed to early release or waived the notice period in writing and subsequently deducted notice buyout charges from the F&F settlement, the employee can serve an advocate-drafted statutory legal notice under Section 73 and Section 74 of the Indian Contract Act, 1872. The notice demands immediate reimbursement of the wrongfully deducted sum alongside statutory interest within a 15-day compliance window. If the company fails to refund the amount, the aggrieved employee can initiate recovery proceedings before the Labour Commissioner, file an Order 37 summary suit in civil court, or submit a complaint under the State Shops and Establishments Act.',
  },
  {
    question: 'Can an employer withhold an employee\'s relieving letter and experience certificate over notice period salary disputes?',
    answer:
      'Withholding an employee\'s relieving letter or experience certificate as leverage in a financial dispute is an unlawful practice under Indian labor jurisprudence and Section 27 of the Indian Contract Act, 1872. Indian High Courts have consistently held that service certificates represent an employee\'s factual employment history and cannot be confiscated as security for alleged notice shortfall claims. Serving a formal statutory notice compels employers to immediately release all service credentials or face civil damages for tortious interference with future employment opportunities.',
  },
  {
    question: 'How is notice period salary calculated for deduction or buyout under Indian employment law?',
    answer:
      'Under standardized labor regulations and model standing orders in India, notice period salary deductions or buyouts must be computed strictly on the employee\'s basic pay plus dearness allowance (Basic + DA), rather than the total Cost to Company (CTC) or gross package. Furthermore, employers are statutorily prohibited from charging liquidated damages beyond a genuine pre-estimate of actual loss under Section 74 of the Indian Contract Act, 1872. Deductions calculated on full CTC, discretionary allowances, or inflated penalty rates are routinely set aside by Indian labor courts as unconscionable and legally unenforceable.',
  },
  {
    question: 'What is the limitation period for taking legal action against an employer for notice period salary deductions in India?',
    answer:
      'Under the Limitation Act, 1963, an employee has a statutory limitation period of exactly three years from the date of the wrongful deduction or the due date of the Full and Final (FNF) settlement to initiate legal proceedings. However, claims before the Payment of Wages Authority or Labour Commissioner are ideally filed within twelve months of the wage deduction date to avail expedited summary procedures. Issuing a formal legal notice immediately upon receiving a defective F&F statement establishes a verifiable paper trail and legally tolls the limitation period under Section 18 of the Limitation Act.',
  },
  {
    question: 'Does an employee need to go to court, or can notice period salary disputes be resolved through a legal notice?',
    answer:
      'Over 75% of notice period salary deduction disputes in India are resolved out of court within 15 days of serving an advocate-vetted statutory legal notice. Corporate employers and HR departments typically settle immediately upon realizing that continued default exposes management to labor inspections, statutory penalty assessments under Section 15(3) of the Payment of Wages Act, and director liability. If formal mediation is required, the parties can also settle the matter through the Online Dispute Resolution (ODR) mechanism or the District Legal Services Authority (DLSA).',
  },
  {
    question: 'Can managerial or senior executive employees file claims under the Payment of Wages Act or Labour Court for notice period deductions?',
    answer:
      'While managerial and executive personnel earning above statutory wage ceilings may fall outside the summary jurisdiction of the Payment of Wages Act, they are fully protected under the Indian Contract Act, 1872 and the Code of Civil Procedure, 1908. Senior professionals can recover deducted notice period salaries by issuing an advocate-drafted statutory demand notice and filing a fast-track Summary Suit under Order 37 CPC in the competent Civil Court or initiating proceedings under the State Shops and Establishments Act. These judicial forums provide expedited decree mechanisms for liquidated employment debts without lengthy trial procedures.',
  },
];

/* ─── JSON-LD SCHEMA (@graph) ──────────────────────────────────────────── */
const pageUrl =
  'https://legalrecovery.in/send-a-legal-notice/salary-deducted-during-notice-period-legal-action-india';
const ogImage =
  'https://legalrecovery.in/images/og/salary-deducted-during-notice-period-legal-action-india.jpg';

const reviewBodyText =
  'After submitting my 60-day notice with an agreed management buyout for the remaining 30 days of a 90-day policy, my employer unilaterally deducted ₹3,45,000 from my final two months\' salary under the pretext of "unauthorized notice shortfall" and refused to release my relieving letter. Legal Recovery drafted and served an aggressive statutory legal notice citing Section 7 and 15 of the Payment of Wages Act, Section 74 of the Indian Contract Act, and Maharashtra Shops & Establishments Act. Within just 11 days of receiving the advocate-signed notice, the corporate HR reversed all unlawful deductions, credited my full ₹3.45 Lakhs F&F balance with statutory interest, and issued my unconditional relieving experience letter. Exceptional legal service for working professionals!';

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
        'Legal Notice for Salary Deducted During Notice Period | Legal Action India',
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
      name: 'Legal Notice for Salary Deducted During Notice Period | Legal Action India',
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
          name: 'Salary Deducted During Notice Period Legal Action',
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
      name: 'Steps to Take Legal Action for Salary Deducted During Notice Period in India',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Audit employment contract terms, notice period clauses, resignation acceptance emails, and monthly salary slips',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Identify illegal deductions, arbitrary notice shortfall penalties, and unauthorized withholding of earned leave or bonus',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Verify the employer registered corporate entity details, CIN, and active Directors via the Ministry of Corporate Affairs portal',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Draft an advocate-vetted statutory demand notice citing Sections 7 & 15 of Payment of Wages Act, Section 74 of Indian Contract Act, and Order 37 CPC',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Serve the statutory notice via India Post Registered Post AD, Speed Post, and official corporate email with delivery tracking',
        },
        {
          '@type': 'ListItem',
          position: 6,
          name: 'Escalate to Labour Commissioner for 10x penalty recovery or file a Summary Suit in Civil Court if employer fails to comply within 15 days',
        },
      ],
    },

    /* 7. Product + AggregateRating + Review (matches sidebar UI word-for-word) */
    {
      '@type': 'Product',
      name: 'Legal Notice Service for Salary Deducted During Notice Period',
      description:
        'Advocate-drafted statutory demand notice service for corporate employees, managers, and software professionals to recover unlawfully deducted notice period salaries, F&F settlements, and withheld relieving letters from employers in India.',
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
            name: 'Ananya Deshmukh',
          },
          reviewBody: reviewBodyText,
        },
      ],
    },
  ],
};

/* ─── COMPONENT ─────────────────────────────────────────────────────────── */
export default function SalaryDeductedDuringNoticePeriodLegalActionIndiaClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: 'statutory-framework', title: '1. Statutory Framework: Notice Period Wages & Deduction Laws' },
    { id: 'unlawful-deductions', title: '2. Actionable Grounds: Common Illegal Deduction Scenarios' },
    { id: 'legal-remedies', title: '3. Legal Remedies: Labour Authority, Summary Civil Suits & Shops Act' },
    { id: 'calculation-rules', title: '4. Notice Period Calculation Rules: Basic Pay vs Gross CTC' },
    { id: 'evidentiary-checklist', title: '5. Pre-Notice Evidentiary Checklist & MCA Verification' },
    { id: 'notice-anatomy', title: '6. Key Clauses in a Statutory Demand Notice to Employer' },
    { id: 'strategic-roadmap', title: '7. Strategic Roadmap: 15-Day Notice to Full Settlement' },
    { id: 'faqs', title: '8. Frequently Asked Questions' },
  ];

  const breadcrumbItems = [
    { label: 'Send a Legal Notice', href: '/send-a-legal-notice' },
    {
      label: 'Salary Deducted During Notice Period',
      href: '/send-a-legal-notice/salary-deducted-during-notice-period-legal-action-india',
    },
  ];

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const shareUrl = encodeURIComponent(pageUrl);
  const shareText = encodeURIComponent(
    'Employer deducted your salary during notice period or withholding your FNF settlement? Send an advocate-vetted statutory legal notice for instant recovery in India! #SalaryRecovery #LegalNotice #EmployeeRights'
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
              EMPLOYMENT DUES &amp; NOTICE PERIOD SALARY RECOVERY
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Salary Deducted During Notice Period:{' '}
              <span className="text-[#DC2626]">Legal Action in India</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Recover unlawfully withheld notice period wages, F&amp;F settlement deductions, and delayed relieving letters under the Payment of Wages Act, Code on Wages, and Indian Contract Act.
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
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${encodeURIComponent('Salary Deducted During Notice Period Legal Action India | Legal Recovery')}`}
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
                    Under Section 7 and Section 15 of the{' '}
                    <a
                      href="https://labour.gov.in/sites/default/files/ThePaymentofWagesAct1936.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      Payment of Wages Act, 1936
                    </a>
                    , Section 18 of the{' '}
                    <a
                      href="https://labour.gov.in/sites/default/files/the_code_on_wages_2019_no._29_of_2019.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      Code on Wages, 2019
                    </a>
                    , and Section 74 of the{' '}
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/2187"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      Indian Contract Act, 1872
                    </a>
                    , an employer in India cannot lawfully deduct salary or withhold wages during an employee&apos;s active notice period unless the deduction is strictly authorized by statute or represents a proportionate basic salary shortfall for unserved days. If an employer makes unauthorized deductions from monthly pay or the Full and Final (FNF) settlement, the aggrieved employee can serve an advocate-vetted statutory legal demand notice giving the management 15 days to refund the deducted amount with interest and release all service certificates. Continued non-compliance empowers the employee to initiate summary recovery proceedings under Order 37 of the Code of Civil Procedure, 1908, file a statutory claim before the Labour Commissioner with up to ten times penalty compensation, and register a complaint under the applicable State Shops and Establishments Act.
                  </p>
                </div>

                {/* ── IN-ARTICLE INFOGRAPHIC ────────────────────────────── */}
                <figure className="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900">
                  <img
                    src="/images/og/salary-deducted-during-notice-period-legal-action-india.jpg"
                    alt="Infographic: Step-by-Step Legal Process for Salary Deducted During Notice Period in India"
                    className="w-full h-auto object-cover max-h-[500px]"
                    loading="lazy"
                  />
                  <figcaption className="p-3.5 text-center text-xs text-slate-650 font-semibold bg-white border-t border-slate-100 flex items-center justify-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#DC2626]" />
                    <span>Figure 1: Complete Legal Enforcement Framework for Salary Deductions &amp; Notice Period Shortfall Recovery in India.</span>
                  </figcaption>
                </figure>

                {/* ── SECTION 1: STATUTORY FRAMEWORK ────────────────────── */}
                <section id="statutory-framework" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. Statutory Framework: Notice Period Wages &amp; Deduction Laws
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In corporate, IT, manufacturing, banking, and consulting establishments across India, notice periods are standard contractual clauses intended to ensure orderly knowledge transfer and continuity of operations. However, corporate employers routinely weaponize the notice period by unilaterally withholding monthly salary credits, making unauthorized deductions, inflating shortfall charges, or forfeiting accrued statutory benefits in the Full and Final (FNF) settlement.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Indian labor and contract jurisprudence provides uncompromising statutory safeguards to protect employees against coercive wage deductions during their resignation transition:
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                      <ul className="space-y-3 text-xs sm:text-sm text-slate-700 list-disc list-inside">
                        <li>
                          <strong>Payment of Wages Act, 1936 (Sections 7 &amp; 15):</strong> Section 7 specifies an exhaustive list of permissible deductions (such as income tax, court attachments, provident fund, and authorized absence from duty). Any deduction not explicitly enumerated under Section 7 is deemed an illegal deduction. Under Section 15(3), the Labour Authority is empowered to direct full refund of the deducted wage along with statutory compensation up to ten times the withheld amount.
                        </li>
                        <li>
                          <strong>Code on Wages, 2019 (Sections 17 &amp; 18):</strong> Section 17 mandates that when an employee resigns or is terminated, all wages due must be disbursed within two working days of the cessation of employment. Section 18 strictly regulates deductions and caps total monthly deductions at 50% of the employee&apos;s total earnings.
                        </li>
                        <li>
                          <strong>Indian Contract Act, 1872 (Section 74 - Liquidated Damages vs Penalty):</strong> Under Section 74, an employer cannot enforce a punitive forfeiture clause. Any notice shortfall deduction must represent a reasonable, proven pre-estimate of actual loss incurred by the employer, not a penal extraction. Unilateral salary cuts without proving tangible commercial loss are void ab initio.
                        </li>
                        <li>
                          <strong>Indian Contract Act, 1872 (Section 27 - Restraint of Trade):</strong> Unreasonable notice lock-ins (e.g., 90-day mandatory notice with zero buyout options, combined with threats of relieving letter withholding) have been interpreted by Indian courts as indirect restraints on trade, violating Section 27.
                        </li>
                        <li>
                          <strong>State Shops and Commercial Establishments Acts:</strong> Legislation such as the Maharashtra Shops and Establishments Act, Delhi Shops and Establishments Act, Karnataka Shops and Commercial Establishments Act, and Telangana Shops Act statutorily mandate prompt payment of all accumulated wages, overtime, and leave encashment upon resignation.
                        </li>
                      </ul>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
                      <h4 className="font-extrabold text-slate-900 text-sm">
                        Landmark Supreme Court &amp; High Court Jurisprudence
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        In{' '}
                        <a
                          href="https://main.sci.gov.in/judgment/judis/8422.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:text-purple-800 hover:underline"
                        >
                          Central Inland Water Transport Corporation v. Brojo Nath Ganguly (1986) 3 SCC 156
                        </a>
                        , the Hon&apos;ble Supreme Court held that unequal bargaining power between employers and employees cannot give rise to unconscionable, one-sided contractual terms. Any clause that gives the management unbridled discretion to confiscate earned wages or penalize employees is unconstitutional and contrary to public policy under Section 23 of the Contract Act.
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        Similarly, in{' '}
                        <a
                          href="https://main.sci.gov.in/judgment/judis/6075.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:text-purple-800 hover:underline"
                        >
                          Superintendence Company of India (P) Ltd. v. Krishan Murgai (1980) 2 SCC 246
                        </a>
                        , the Apex Court affirmed that restrictive covenants and punitive financial bars imposed on an employee after the cessation of employment are completely void under Indian law.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 2: UNLAWFUL DEDUCTIONS ─────────────────────── */}
                <section id="unlawful-deductions" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. Actionable Grounds: Common Illegal Deduction Scenarios
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Corporate employers employ a variety of opaque accounting maneuvers and punitive HR policies to withhold employee wages during resignation. When drafting an advocate-vetted demand notice, identifying the precise actionable breach is paramount:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                      {[
                        {
                          title: 'Withholding Monthly Salary During Active Notice Period',
                          desc: 'Refusing to credit the monthly salary for the 30, 60, or 90 days the employee is actively reporting to work, logging hours, and executing handovers, under the arbitrary claim that "all notice period wages will be cleared only in FNF after 90 days".',
                        },
                        {
                          title: 'Unilateral Deductions Despite Written Early Release / Buyout Approvals',
                          desc: 'Reporting managers or HR providing written or email consent for an early release date or notice waiver, but subsequently reversing the agreement in the FNF calculation and docking 30-60 days of salary as an unauthorized shortfall.',
                        },
                        {
                          title: 'Calculating Notice Shortfall on Full Gross CTC Instead of Basic Pay',
                          desc: 'Deducting notice shortfall penalties by multiplying unserved days by the employee\'s total Gross Cost to Company (CTC)—including PF, medical insurance, gratuity provision, and variable components—instead of basic salary.',
                        },
                        {
                          title: 'Arbitrary Forfeiture of Earned Leave (EL) & Accrued Variable Bonus',
                          desc: 'Refusing to adjust accumulated privilege leaves against notice shortfall or completely wiping out accrued quarterly performance bonuses, commissions, and contractual retention payouts earned prior to resignation.',
                        },
                        {
                          title: 'Fabricated Asset Damage, Training Bond & IT Clearance Deductions',
                          desc: 'Levying unilateral financial penalties for alleged wear and tear on laptops, claiming unliquidated "training bond" damages without proving actual specialized expense, or creating bogus clearance delays without an internal domestic enquiry.',
                        },
                        {
                          title: 'Coercive Withholding of Relieving & Experience Letters',
                          desc: 'Using the relieving letter and service certificate as extortionate leverage to force the resigning employee into signing a blank "No Dues Certificate" or accepting steep, illegal financial deductions.',
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
                    3. Legal Remedies: Labour Authority, Summary Civil Suits &amp; Shops Act
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Depending on your employment designation, salary structure, and contract terms, Indian law provides multiple expedited forums to recover unlawfully deducted notice wages:
                    </p>

                    <div className="overflow-x-auto my-6">
                      <table className="w-full text-left border-collapse text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-slate-900 text-white">
                            <th className="p-3 font-extrabold rounded-tl-xl">Recovery Forum &amp; Statute</th>
                            <th className="p-3 font-extrabold">Eligible Employee Category</th>
                            <th className="p-3 font-extrabold">Jurisdictional Threshold</th>
                            <th className="p-3 font-extrabold rounded-tr-xl">Statutory Remedies &amp; Penalties</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 bg-white border border-slate-200">
                          <tr>
                            <td className="p-3 font-bold text-slate-900">
                              Payment of Wages Authority (Sec 15, Payment of Wages Act, 1936)
                            </td>
                            <td className="p-3 text-slate-650">Non-managerial staff &amp; wage earners covered under the Act</td>
                            <td className="p-3 font-semibold text-[#DC2626]">Monthly wage ceiling under Act / Code on Wages</td>
                            <td className="p-3 text-slate-650">
                              Order directing 100% wage refund plus statutory compensation up to 10x deducted amount
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">
                              Labour Commissioner / Industrial Tribunal (Sec 33C(2) ID Act, 1947)
                            </td>
                            <td className="p-3 text-slate-650">Workmen, operational engineers, technical specialists</td>
                            <td className="p-3 font-semibold text-[#DC2626]">No monetary limit</td>
                            <td className="p-3 text-slate-650">
                              Recovery certificate issued to District Collector for revenue attachment of company accounts
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">
                              Summary Suit under Order 37 CPC (Code of Civil Procedure, 1908)
                            </td>
                            <td className="p-3 text-slate-650">Managers, Executives, Directors, Tech Leads, Consultants</td>
                            <td className="p-3 font-semibold text-[#DC2626]">Civil Court Pecuniary Jurisdiction</td>
                            <td className="p-3 text-slate-650">
                              Fast-track decree for liquidated debt on salary slips &amp; offer letter; defense must secure leave to defend
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">
                              State Shops &amp; Commercial Establishments Inspectorate
                            </td>
                            <td className="p-3 text-slate-650">All commercial establishment &amp; IT/BPO employees</td>
                            <td className="p-3 font-semibold text-[#DC2626]">Statewide jurisdiction</td>
                            <td className="p-3 text-slate-650">
                              Inspection notice to employer, criminal compounding fines, and wage recovery orders
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">
                              Bharatiya Nyaya Sanhita, 2023 (BNS Sec 316 &amp; 318)
                            </td>
                            <td className="p-3 text-slate-650">Cases involving fraudulent intent &amp; trust violation</td>
                            <td className="p-3 font-semibold text-[#DC2626]">Criminal complaint</td>
                            <td className="p-3 text-slate-650">
                              Personal criminal liability for directors, HR heads, and promoters for criminal breach of trust
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                      <h4 className="font-extrabold text-slate-900 text-sm">
                        High Court Rulings on Unlawful Notice Shortfall Deductions
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        The Delhi High Court and Bombay High Court have repeatedly ruled that employers cannot turn the notice period into a punitive revenue mechanism. In instances where an employee has completed handovers or where the employer has replaced the candidate without incurring specific recruitment advertising expenses, deducting full notice compensation violates Section 74 of the Indian Contract Act. The employer carries the strict legal burden of proving actual quantifiable damages in a court of law before any deduction can be sustained.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 4: CALCULATION RULES ──────────────────────── */}
                <section id="calculation-rules" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Notice Period Calculation Rules: Basic Pay vs Gross CTC
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      One of the most widespread unlawful practices among Indian corporations is calculating notice period buyout or shortfall deductions using the employee&apos;s Gross Cost to Company (CTC) rather than Basic Salary. Indian labor standards and standard employment law principles establish strict computation parameters:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                      <div className="bg-red-50/60 p-5 rounded-2xl border border-red-200">
                        <div className="text-xs font-black text-[#DC2626] uppercase tracking-wider mb-1">
                          Illegal Practice
                        </div>
                        <h4 className="font-extrabold text-slate-900 text-sm mb-2">
                          Gross CTC / Total Package Deduction
                        </h4>
                        <p className="text-xs text-slate-750 leading-relaxed">
                          Deducting variable pay, employer PF matching, gratuity reserves, medical insurance premiums, and travel allowances for unserved notice days is entirely unlawful and judicially invalid.
                        </p>
                      </div>

                      <div className="bg-green-50/60 p-5 rounded-2xl border border-green-200">
                        <div className="text-xs font-black text-green-700 uppercase tracking-wider mb-1">
                          Statutory Standard
                        </div>
                        <h4 className="font-extrabold text-slate-900 text-sm mb-2">
                          Basic Salary + Dearness Allowance
                        </h4>
                        <p className="text-xs text-slate-750 leading-relaxed">
                          Under standard model standing orders and labor jurisprudence, any lawful notice recovery is strictly limited to the proportional Basic Pay + DA component for the exact unserved days.
                        </p>
                      </div>

                      <div className="bg-blue-50/60 p-5 rounded-2xl border border-blue-200">
                        <div className="text-xs font-black text-blue-700 uppercase tracking-wider mb-1">
                          Mandatory Adjustment
                        </div>
                        <h4 className="font-extrabold text-slate-900 text-sm mb-2">
                          Accrued Paid Leaves Offset
                        </h4>
                        <p className="text-xs text-slate-750 leading-relaxed">
                          Employees have a legal entitlement to adjust their accumulated Earned Leaves (EL) / Privilege Leaves (PL) against any notice shortfall before any financial deductions are made.
                        </p>
                      </div>
                    </div>

                    <div className="bg-slate-900 text-white p-6 rounded-2xl space-y-3">
                      <h4 className="text-sm font-extrabold text-[#DC2626] uppercase tracking-wider">
                        Lawful Pro-Rata Shortfall Calculation Formula
                      </h4>
                      <p className="text-xs md:text-sm font-mono text-slate-200 bg-slate-800 p-4 rounded-xl border border-slate-700">
                        Lawful Shortfall Recovery = [ (Basic Salary + DA) / 30 ] × [ Total Notice Days − (Days Served + Approved Leave Adjustments) ]
                      </p>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Any amount deducted by the employer exceeding this statutory formula constitutes an unauthorized wage deduction recoverable with statutory damages and interest.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 5: EVIDENTIARY CHECKLIST ──────────────────── */}
                <section id="evidentiary-checklist" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Pre-Notice Evidentiary Checklist &amp; MCA Verification
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Serving an advocate-vetted statutory demand notice requires compiling conclusive documentary proof of your employment, resignation timeline, handover completion, and unauthorized salary deductions:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                      {[
                        {
                          title: '1. Employment & Contractual Foundation',
                          items: [
                            'Signed Appointment / Employment Offer Letter',
                            'Employment Agreement & Notice Period Clause',
                            'Latest Salary Increment / Promotion Letters',
                          ],
                        },
                        {
                          title: '2. Resignation & Handover Trails',
                          items: [
                            'Official Resignation Email with Date Stamp',
                            'Manager / HR Resignation Acceptance Email',
                            'Signed Knowledge Transfer (KT) & Asset Handover Receipts',
                          ],
                        },
                        {
                          title: '3. Financial & Deduction Statements',
                          items: [
                            'Monthly Salary Slips for the 3-6 Months Prior to Notice',
                            'Bank Account Statements showing missing / docked credits',
                            'Full & Final (FNF) Statement detailing unauthorized deductions',
                          ],
                        },
                        {
                          title: '4. Written Communications & Objections',
                          items: [
                            'Email protests against illegal FNF deductions',
                            'Written confirmation of early release or leave adjustments',
                            'Requests for Relieving Letter & Experience Certificate',
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
                        <span className="text-[#DC2626]">🏛️</span> Corporate Verification via MCA Portal &amp; GSTIN Registries
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        To ensure unassailable legal validity before court, the statutory demand notice must be addressed to the exact registered entity, citing its Corporate Identification Number (CIN), registered corporate headquarters, and active Board of Directors as verified on the{' '}
                        <a
                          href="https://www.mca.gov.in/content/mca/global/en/home.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:text-purple-800 hover:underline"
                        >
                          Ministry of Corporate Affairs (MCA) database
                        </a>
                        . Legal Recovery automatically verifies MCA records to ensure constructive legal service on the Managing Director and Head of Human Resources.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 6: NOTICE ANATOMY ─────────────────────────── */}
                <section id="notice-anatomy" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Key Clauses in a Statutory Demand Notice to Employer
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A formidable legal notice drafted by a labor advocate establishes strict liability, highlights statutory penalties, and leaves no room for corporate evasion:
                    </p>

                    <div className="space-y-4">
                      {[
                        {
                          clause: 'Clause 1',
                          title: 'Employment Chronology & Resignation Compliance Recital',
                          desc: 'Sets forth the exact date of appointment, designation, monthly CTC breakdown, resignation tender date, agreed notice period terms, and comprehensive proof of completed knowledge transfer (KT) handovers.',
                        },
                        {
                          clause: 'Clause 2',
                          title: 'Itemized Breakdown of Unlawful Deductions & Withheld Wages',
                          desc: 'Details the exact sums illegally withheld from monthly pay or FNF settlement, demonstrating how the company violated Section 7 of the Payment of Wages Act, Section 18 of the Code on Wages, and Section 74 of the Contract Act.',
                        },
                        {
                          clause: 'Clause 3',
                          title: 'Tortious Withholding of Relieving & Experience Credentials',
                          desc: 'Formally places on record that withholding service documents constitutes unlawful restraint on trade under Section 27 of the Contract Act and intentional malicious interference with the employee\'s professional livelihood.',
                        },
                        {
                          clause: 'Clause 4',
                          title: 'Statutory Interest Demand & Compensation for Mental Harassment',
                          desc: 'Claims statutory interest on delayed wage payment at 18% per annum along with exemplary damages for mental agony, loss of career progression, and advocate drafting expenses.',
                        },
                        {
                          clause: 'Clause 5',
                          title: '15-Day Peremptory Window & Multi-Forum Litigation Warning',
                          desc: 'Mandates full refund of the deducted amount and unconditional dispatch of the relieving letter within exactly 15 days of notice receipt, failing which the employee will initiate Order 37 summary proceedings, Labour Authority claims with 10x penalties, and BNS Section 316 criminal breach of trust complaints.',
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
                    7. Strategic Roadmap: 15-Day Notice to Full Settlement
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When served through an established legal notice platform, over 75% of corporate notice period salary disputes settle within the statutory 15-day notice period. In cases of continued corporate recalcitrance, Legal Recovery executes a seamless multi-stage escalation:
                    </p>

                    <div className="space-y-4">
                      {[
                        {
                          step: 'Stage 1',
                          title: 'Advocate Notice Dispatch via Speed Post AD & Digital Channels',
                          desc: 'The notice is prepared on the advocate\'s official letterhead, digitally signed under Section 5 of the Information Technology Act, 2000, and served simultaneously via India Post Speed Post with Acknowledgment Due (AD), official corporate HR email, and WhatsApp delivery tracking.',
                        },
                        {
                          step: 'Stage 2',
                          title: 'Pre-Litigation Settlement & ODR Virtual Mediation',
                          desc: 'Upon receipt of notice, corporate legal counsel and HR leadership frequently initiate settlement dialogue. Legal Recovery provides structured Online Dispute Resolution (ODR) negotiation rooms to execute binding digital settlement agreements and release relieving letters.',
                        },
                        {
                          step: 'Stage 3',
                          title: 'Labour Commissioner Claim for 10x Penalty Recovery',
                          desc: 'If the company fails to settle, our panel advocates lodge a formal claim before the Payment of Wages Authority / Labour Commissioner under Section 15(3) of the Payment of Wages Act, triggering regulatory inspection notices and severe statutory penalties against the employer.',
                        },
                        {
                          step: 'Stage 4',
                          title: 'Fast-Track Summary Suit (Order 37 CPC) & Relieving Letter Mandamus',
                          desc: 'For executive and managerial personnel, our advocates file an expedited Summary Suit under Order 37 CPC in Civil Court for immediate debt decree alongside mandatory injunction petitions for immediate release of service credentials.',
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
                        Payment of Wages Act, 1936 — Section 7 (Permissible Deductions) &amp; Section 15 (Claims out of Deductions), labour.gov.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://labour.gov.in/sites/default/files/the_code_on_wages_2019_no._29_of_2019.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Code on Wages, 2019 — Section 17 (Time Limit for Payment of Wages) &amp; Section 18 (Deductions), labour.gov.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.indiacode.nic.in/handle/123456789/2187"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Indian Contract Act, 1872 — Section 27 (Agreements in Restraint of Trade) &amp; Section 74 (Liquidated Damages vs Penalty), indiacode.nic.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://main.sci.gov.in/judgment/judis/8422.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Supreme Court of India — Central Inland Water Transport Corp. v. Brojo Nath Ganguly (1986) 3 SCC 156 (Unconscionable Clauses Void), main.sci.gov.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://main.sci.gov.in/judgment/judis/6075.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Supreme Court of India — Superintendence Company of India (P) Ltd. v. Krishan Murgai (1980) 2 SCC 246, main.sci.gov.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.indiacode.nic.in/handle/123456789/2191"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Code of Civil Procedure, 1908 — Order 37 Summary Procedure for Liquidated Debts, indiacode.nic.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.mca.gov.in/content/mca/global/en/home.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Ministry of Corporate Affairs (MCA) — Company Master Data &amp; Registered Office Verification, mca.gov.in
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
                    More Employment &amp; Legal Notice Guides
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        title: 'Legal Notice for Salary Withheld During Notice Period',
                        href: '/legal-notice-for-salary-withheld-during-notice-period',
                      },
                      {
                        title: 'How to Recover Unpaid Salary Legally from Employer',
                        href: '/how-to-recover-unpaid-salary-legally',
                      },
                      {
                        title: 'Legal Notice to Employer for Deducting Salary Without Notice',
                        href: '/send-a-legal-notice/employer-deduct-salary-without-notice-legal-action',
                      },
                      {
                        title: 'Employer Withholding Relieving Letter Legal Action',
                        href: '/employer-withholding-relieving-letter-legal-action',
                      },
                      {
                        title: 'Legal Notice for Full and Final Settlement Delay',
                        href: '/legal-notice-for-full-and-final-settlement-delay',
                      },
                      {
                        title: 'Legal Notice for Leave Encashment Not Paid by Employer',
                        href: '/send-a-legal-notice/leave-encashment-not-paid-by-employer',
                      },
                      {
                        title: 'Legal Notice to Employer for Not Paying PF',
                        href: '/send-a-legal-notice/employer-not-paying-pf-provident-fund',
                      },
                      {
                        title: 'Legal Notice to Company for Gratuity Not Paid by Employer',
                        href: '/send-a-legal-notice/recover-gratuity-from-employer-legal-notice',
                      },
                      {
                        title: 'Legal Notice Wrongful Termination & Unpaid Notice Period Salary',
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
                    Legal Recovery is India&apos;s trusted online legal notice and dispute resolution
                    platform, connecting working professionals, corporate executives, managers, and
                    employees with seasoned labor and commercial advocates for rapid, advocate-vetted
                    statutory demand notices at transparent flat fees. With ₹100 Crore+ recovered and 10,000+
                    cases handled across India, Legal Recovery ensures swift financial restitution and
                    reputation protection without the delays and uncertainty of traditional litigation.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { label: 'Send a Legal Notice', href: '/send-a-legal-notice' },
                      { label: 'Recovery Services', href: '/recovery' },
                      { label: 'Recovery of Salary & Employment Dues', href: '/services/recovery-of-salary-and-employment-dues' },
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
                  Salary Deducted During Notice Period?
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  Send an advocate-vetted statutory notice today. 75% of employers reverse illegal salary deductions and release relieving letters within 15 days upon receiving formal notice from Legal Recovery.
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
                      AD
                    </div>
                    <div>
                      <p className="font-extrabold text-slate-900 text-xs">Ananya Deshmukh</p>
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
                  { stat: '75%', label: 'Employers settle before Labour Court / Civil litigation' },
                  { stat: '₹100CR+', label: 'Total employment & commercial dues recovered across India' },
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
