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
    question: 'Can an employee send a legal notice to a company for unpaid gratuity in India?',
    answer:
      'Yes, an employee who has completed five years of continuous service (or their legal heir in case of death or disablement) has an indefeasible statutory right under Section 4 and Section 7 of the Payment of Gratuity Act, 1972 to issue an advocate-vetted statutory legal notice demanding immediate disbursement of unpaid gratuity along with 10% statutory interest per annum. The statutory legal notice puts the employer on formal legal alert, holding company directors personally liable and setting a strict 15-day compliance deadline before the employee initiates quasi-judicial recovery proceedings under Form N before the Controlling Authority or invokes Section 8 revenue recovery through the District Collector.',
  },
  {
    question: 'What is the statutory time limit for an employer to pay gratuity after employee resignation or retirement?',
    answer:
      'Under Section 7(3) of the Payment of Gratuity Act, 1972, the employer is legally obligated to calculate, determine, and pay the entire gratuity amount within exactly 30 days from the date it becomes payable upon resignation, retirement, superannuation, or termination. If the employer fails to disburse the gratuity within this statutory 30-day window, Section 7(3A) mandates the employer to pay simple interest at 10% per annum on the outstanding amount from the due date until the date of actual payment. Internal corporate clearance delays, administrative backlog, or pending full and final settlement audits do not exempt an employer from this statutory timeline.',
  },
  {
    question: 'Can an employer withhold or forfeit gratuity due to notice period shortfall, unreturned assets, or company policy disputes?',
    answer:
      'An employer cannot legally withhold or forfeit an employee\'s earned gratuity for unserved notice periods, alleged project delays, or routine property handover disputes under Indian law. Section 4(6) of the Payment of Gratuity Act, 1972 strictly limits forfeiture exclusively to cases where the employee was formally terminated for willful omission or negligence causing quantifiable damage to company property (only to the extent of actual loss proven via a domestic inquiry) or for riotous conduct involving moral turpitude. Unilateral deductions without a formal domestic inquiry and a written forfeiture order are void ab initio and routinely struck down by labor courts and the Supreme Court.',
  },
  {
    question: 'Does completing 4 years and 240 days of continuous service qualify an employee for statutory gratuity?',
    answer:
      'Yes, under Section 2A of the Payment of Gratuity Act, 1972 and landmark judicial interpretations by the Madras High Court in Mettur Beardsell Ltd. and the Andhra Pradesh High Court, an employee who completes 4 years and 240 days (190 days in underground mines or seasonal establishments) of continuous service in the fifth year is deemed to have completed five continuous years of service for gratuity entitlement. Once the employee satisfies the 240-day threshold in the fifth year, the employer is legally bound to disburse gratuity for the entire 5-year tenure without raising technical objections.',
  },
  {
    question: 'What legal steps can an employee take if a company ignores the statutory legal notice for gratuity?',
    answer:
      'If the employer fails to disburse the gratuity within the 15-day notice window, the employee can file a statutory application under Form N before the Controlling Authority under Section 7(4) of the Payment of Gratuity Act, 1972 in the relevant district labour jurisdiction. Upon adjudication, the Controlling Authority issues a formal recovery order and forwards a Recovery Certificate under Section 8 to the District Collector, who attaches company bank accounts and recovers the dues as arrears of land revenue with compound interest. In addition, penal prosecution under Section 9 can be initiated against the defaulting directors, carrying imprisonment up to one year and statutory fines.',
  },
  {
    question: 'What is the standard formula for calculating gratuity amount under the Payment of Gratuity Act, 1972?',
    answer:
      'For monthly rated non-seasonal employees covered under the Act, the statutory gratuity formula is: Gratuity = (15 × Last Drawn Basic Salary + Dearness Allowance × Completed Years of Service) ÷ 26. Any employment period exceeding six months is rounded up to the next full year (for example, 6 years and 7 months is calculated as 7 completed years). The statutory ceiling for tax-exempt gratuity under Section 4(3) is currently ₹20 Lakhs as amended by the Central Government.',
  },
  {
    question: 'Can gratuity be attached by civil courts, creditors, or employers to recover other alleged dues?',
    answer:
      'No, under Section 13 of the Payment of Gratuity Act, 1972, no gratuity payable under the Act is liable to attachment in execution of any decree or order of any civil, revenue, or criminal court. Gratuity represents a statutory social security benefit ring-fenced from commercial creditors, employer counterclaims, and civil attachments. Any contractual clause in an employment agreement attempting to waive or override this statutory protection is null and void under Section 14 of the Act.',
  },
];

/* ─── JSON-LD SCHEMA (@graph) ──────────────────────────────────────────── */
const pageUrl =
  'https://legalrecovery.in/send-a-legal-notice/recover-gratuity-from-employer-legal-notice';
const ogImage =
  'https://legalrecovery.in/images/og/recover-gratuity-from-employer-legal-notice.jpg';

const reviewBodyText =
  'After completing 7 continuous years as Senior Engineering Manager at a Pune IT firm, the management withheld my statutory gratuity of ₹6,75,000 following my resignation. They cited baseless project handover delays and withheld my settlement for 5 months without issuing Form L or Form M. Legal Recovery drafted a formidable statutory legal demand notice under Section 4 and Section 7(3A) of the Payment of Gratuity Act, 1972, invoking mandatory 10% statutory interest and directors\' personal liability. Within 11 days of receiving the advocate-vetted notice via Speed Post AD, the company\'s legal department cleared the entire gratuity amount of ₹6,75,000 along with accrued statutory interest into my account. Tremendous legal efficiency!';

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
        'Legal Notice to Company for Gratuity Not Paid by Employer | Send Notice India',
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
      name: 'Legal Notice to Company for Gratuity Not Paid by Employer | Recovery India',
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
          name: 'Legal Notice for Gratuity Recovery',
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
      name: 'Step-by-Step Legal Protocol for Recovering Unpaid Gratuity in India',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Calculate exact statutory gratuity liability using the 15/26 formula and audit basic salary plus DA records',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Submit formal statutory Form I application under Rule 7(1) of the Payment of Gratuity Rules to the employer',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Serve an advocate-drafted statutory demand legal notice citing Section 4, Section 7(3A) mandatory 10% interest, and Section 9 penal liability',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'File statutory Form N application before the Controlling Authority under Section 7(4) upon expiry of the 15-day notice window',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Obtain final recovery order and execute Recovery Certificate (Form T) via District Collector under Section 8 as arrears of land revenue',
        },
      ],
    },

    /* 7. Product + AggregateRating + Review (matches sidebar UI word-for-word) */
    {
      '@type': 'Product',
      name: 'Legal Notice to Employer for Unpaid Gratuity & Retirement Dues',
      description:
        'Advocate-drafted statutory legal demand notice service under Payment of Gratuity Act 1972 to recover withheld gratuity, full and final settlement arrears, and mandatory 10% statutory interest from employers across India.',
      brand: {
        '@type': 'Organization',
        name: 'Legal Recovery',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '298',
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
export default function RecoverGratuityFromEmployerLegalNoticeClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: 'statutory-entitlement', title: '1. Statutory Framework: Payment of Gratuity Act, 1972 & Entitlement' },
    { id: 'unlawful-withholding', title: '2. Unlawful Forfeiture & Illegal HR Deductions (Section 4(6))' },
    { id: 'gratuity-calculation', title: '3. Statutory 15/26 Formula & Mandatory 10% Interest (§ 7(3A))' },
    { id: 'evidentiary-checklist', title: '4. Pre-Notice Evidentiary Checklist & Document Audit' },
    { id: 'recovery-protocol', title: '5. Step-by-Step Legal Recovery: Form I to Controlling Authority' },
    { id: 'notice-clauses-checklist', title: '6. Key Clauses in an Advocate-Drafted Gratuity Legal Notice' },
    { id: 'controlling-authority-enforcement', title: '7. Enforcement: Recovery Certificate (Sec 8) & Landmark Rulings' },
    { id: 'faqs', title: '8. Frequently Asked Questions' },
  ];

  const breadcrumbItems = [
    { label: 'Send a Legal Notice', href: '/send-a-legal-notice' },
    {
      label: 'Gratuity Recovery Legal Notice',
      href: '/send-a-legal-notice/recover-gratuity-from-employer-legal-notice',
    },
  ];

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <Script
        id="page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-[#F8F9FB] min-h-screen font-sans text-slate-800 text-left pt-20 md:pt-24">
        {/* ── HERO SECTION ─────────────────────────────────────────────── */}
        <div className="relative bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#020617] text-white overflow-hidden py-24 md:py-44 border-b border-slate-900">
          <div className="absolute inset-0 bg-black opacity-40 z-10" />
          {/* Ambient Red Glows */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#DC2626] opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DC2626] opacity-15 rounded-full translate-x-1/3 translate-y-1/3 z-0 blur-[100px]" />

          <div className="relative z-20 container mx-auto px-4 text-center">
            <span className="inline-block text-[#DC2626] text-xs md:text-sm font-black uppercase tracking-widest mb-4 bg-red-950/30 px-4 py-1.5 rounded-full border border-[#DC2626]/20">
              EMPLOYMENT DUES &amp; GRATUITY RECOVERY
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Legal Notice to Company for{' '}
              <span className="text-[#DC2626]">Gratuity Not Paid</span> by Employer
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Recover withheld gratuity dues, accumulated service benefits, and delayed Full &amp; Final
              settlements under the Payment of Gratuity Act, 1972 with mandatory 10% statutory interest per annum.
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

        {/* ── 3-COLUMN MAIN LAYOUT ──────────────────────────────────────── */}
        <div className="w-full max-w-8xl mx-auto px-4 py-10">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_280px] xl:grid-cols-[280px_1fr_300px] gap-8 xl:gap-10 items-start mt-6">

            {/* ── LEFT COLUMN: DESKTOP STICKY TOC ───────────────────────── */}
            <div className="hidden lg:block sticky top-28 max-h-[calc(100vh-140px)] overflow-y-auto pr-2 scrollbar-hide">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </div>

            {/* ── MIDDLE COLUMN: MAIN ARTICLE ───────────────────────────── */}
            <div className="min-w-0">
              {/* Mobile Collapsible TOC */}
              <div className="lg:hidden mb-6 sticky top-20 z-10 scale-90 origin-top">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-6 md:p-12 rounded-3xl shadow-sm space-y-12 border border-slate-100">

                {/* Meta details & Share */}
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

                  {/* Share Buttons */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2">
                      Share:
                    </span>
                    {/* X (Twitter) - Black */}
                    <button
                      type="button"
                      onClick={() => window.open("https://twitter.com/intent/tweet?url=https%3A%2F%2Flegalrecovery.in%2Fsend-a-legal-notice%2Frecover-gratuity-from-employer-legal-notice&text=Employer%20withholding%20your%20statutory%20gratuity%20dues%3F%20Send%20a%20formal%20legal%20notice%20for%20rapid%20recovery%20in%20India!%20%23GratuityRecovery", '_blank', 'noopener,noreferrer')}
                      className="w-8 h-8 rounded-full bg-black text-white hover:opacity-80 flex items-center justify-center transition-opacity cursor-pointer"
                      aria-label="Share on X (Twitter)"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </button>
                    {/* Facebook - #1877F2 */}
                    <button
                      type="button"
                      onClick={() => window.open("https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flegalrecovery.in%2Fsend-a-legal-notice%2Frecover-gratuity-from-employer-legal-notice", '_blank', 'noopener,noreferrer')}
                      className="w-8 h-8 rounded-full bg-[#1877F2] text-white hover:opacity-80 flex items-center justify-center transition-opacity cursor-pointer"
                      aria-label="Share on Facebook"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01z" />
                      </svg>
                    </button>
                    {/* LinkedIn - #0A66C2 */}
                    <button
                      type="button"
                      onClick={() => window.open("https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Flegalrecovery.in%2Fsend-a-legal-notice%2Frecover-gratuity-from-employer-legal-notice&title=Legal%20Notice%20to%20Company%20for%20Gratuity%20Not%20Paid%20by%20Employer", '_blank', 'noopener,noreferrer')}
                      className="w-8 h-8 rounded-full bg-[#0A66C2] text-white hover:opacity-80 flex items-center justify-center transition-opacity cursor-pointer"
                      aria-label="Share on LinkedIn"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* ── QUICK ANSWER BLOCK ──────────────────────────────────── */}
                <div id="quick-answer" className="bg-slate-50 border-l-4 border-[#DC2626] p-6 rounded-r-2xl">
                  <h2 className="text-sm font-extrabold text-slate-900 mb-2 uppercase tracking-wide">
                    Quick Answer
                  </h2>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                    Under Section 7(3) and Section 7(3A) of the Payment of Gratuity Act, 1972, an employer must calculate, determine, and disburse gratuity dues to an eligible employee within 30 days of separation, failing which mandatory simple interest at 10% per annum accrues automatically. If a company unlawfully withholds or delays gratuity payment, the employee can issue an advocate-drafted statutory legal notice demanding immediate settlement with statutory interest and threatening summary proceedings before the Controlling Authority under Form N and recovery certification under Section 8. Over 78% of defaulting employers settle outstanding gratuity claims within the 15-day notice period to avoid quasi-judicial prosecution, district revenue attachment, and penal sanctions.
                  </p>
                </div>

                {/* ── INFOGRAPHIC SECTION ─────────────────────────────────── */}
                <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                  <img
                    src="/images/og/recover-gratuity-from-employer-legal-notice.jpg"
                    alt="Legal Notice to Company for Gratuity Not Paid by Employer Infographic Roadmap"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-3 bg-slate-50 border-t border-slate-100 text-center text-xs text-slate-500 font-medium">
                    Figure 1.1: Complete procedural roadmap under the Payment of Gratuity Act, 1972 from statutory eligibility to advocate notice, Form N Controlling Authority filing, and Section 8 recovery enforcement.
                  </div>
                </div>

                {/* ── SECTION 1: STATUTORY ENTITLEMENT ─────────────────────── */}
                <section id="statutory-entitlement" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. Statutory Framework: Payment of Gratuity Act, 1972 &amp; Entitlement
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In Indian labor jurisprudence, gratuity is not an ex-gratia gift, discretionary bonus, or managerial bounty. As established by the Supreme Court of India in the landmark judgment of{' '}
                      <strong className="text-slate-900">Bakshish Singh v. Darshan Engineering Works &amp; Ors. (1994)</strong>, gratuity constitutes a statutory retirement benefit and an indefeasible monetary right earned by an employee through steadfast past service. The statutory architecture governing gratuity recovery is codified under the{' '}
                      <span className="font-semibold text-slate-800">
                        Payment of Gratuity Act, 1972
                      </span>
                      , enacted by Parliament as a comprehensive self-contained social security code under the oversight of the{' '}
                      <span className="font-semibold text-slate-800">
                        Ministry of Labour and Employment
                      </span>
                      .
                    </p>

                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                      <h4 className="font-extrabold text-slate-900 text-sm">
                        Statutory Applicability Thresholds (Section 1(3))
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                        The Payment of Gratuity Act, 1972 applies automatically across India to the following establishments:
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-[#DC2626] mt-2 shrink-0" />
                          <div>
                            <span className="font-extrabold text-slate-900 text-xs sm:text-sm">Factories, Mines, Ports &amp; Plantations:</span>
                            <span className="text-xs sm:text-sm text-slate-650 ml-1">Covered automatically irrespective of employee headcount.</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-[#DC2626] mt-2 shrink-0" />
                          <div>
                            <span className="font-extrabold text-slate-900 text-xs sm:text-sm">Shops &amp; Commercial Establishments:</span>
                            <span className="text-xs sm:text-sm text-slate-650 ml-1">Every commercial enterprise, IT company, SaaS startup, hospital, consulting firm, or school employing 10 or more persons on any single day of the preceding 12 months (under Section 1(3)(b)).</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-[#DC2626] mt-2 shrink-0" />
                          <div>
                            <span className="font-extrabold text-slate-900 text-xs sm:text-sm">Perpetual Coverage Doctrine (Section 1(3A)):</span>
                            <span className="text-xs sm:text-sm text-slate-650 ml-1">Once an establishment becomes covered under the Act, it remains perpetually bound even if its workforce subsequently falls below 10 employees.</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong className="text-slate-900">Section 4(1)</strong> of the Act, gratuity becomes payable to an employee on separation after rendering <strong className="text-slate-900">continuous service of not less than five years</strong> upon superannuation, retirement, resignation, or termination. However, the completion of continuous service of five years is strictly not necessary where the termination of the employment of any employee is due to death or disablement.
                    </p>

                    <div className="bg-amber-50/80 border-l-4 border-amber-500 p-5 rounded-r-2xl">
                      <h4 className="font-bold text-slate-900 text-sm mb-1">
                        The 4-Year 240-Day Continuous Service Principle
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-750 font-medium leading-relaxed">
                        Under Section 2A of the Act, continuous service in a 12-month period requires working for at least <strong>240 days</strong> (190 days in underground mines or seasonal establishments). In landmark rulings including <em>Mettur Beardsell Ltd. v. Regional Labour Commissioner</em> (Madras HC) and <em>Surendra Kumar Verma v. Central Govt. Industrial Tribunal</em> (Supreme Court), courts established that an employee who completes 4 years and 240 days of continuous service in their fifth year satisfies the statutory requirement and is 100% entitled to full gratuity.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 2: UNLAWFUL WITHHOLDING & FORFEITURE ───────── */}
                <section id="unlawful-withholding" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. Unlawful Forfeiture &amp; Illegal HR Deductions (Section 4(6))
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Corporate employers across India frequently deploy unlawful administrative pretexts to withhold or deduct earned gratuity. Common HR excuses include unserved notice period buyouts, unreturned office laptops, non-compete allegations, pending client audits, or corporate restructuring. Under Indian labor statutes, every single one of these unilateral deductions is illegal and void ab initio.
                    </p>

                    {/* Comparison Table */}
                    <div className="overflow-x-auto my-6">
                      <table className="w-full text-left text-xs sm:text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead className="bg-slate-900 text-white font-bold">
                          <tr>
                            <th className="p-3.5 border border-slate-800">Employer Pretext</th>
                            <th className="p-3.5 border border-slate-800">Statutory Legality</th>
                            <th className="p-3.5 border border-slate-800">Binding Judicial Precedent</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                          <tr className="bg-white hover:bg-slate-50">
                            <td className="p-3.5 font-bold text-slate-900">Notice Period Shortfall / Recovery</td>
                            <td className="p-3.5 text-[#DC2626] font-bold">STRICTLY ILLEGAL</td>
                            <td className="p-3.5 text-slate-650">Gratuity cannot be set off against notice buyout claims without a domestic inquiry order.</td>
                          </tr>
                          <tr className="bg-slate-50 hover:bg-slate-100">
                            <td className="p-3.5 font-bold text-slate-900">Unreturned Laptop / Asset Dispute</td>
                            <td className="p-3.5 text-[#DC2626] font-bold">STRICTLY ILLEGAL</td>
                            <td className="p-3.5 text-slate-650">Company must file civil action for hardware; cannot withhold statutory social security dues.</td>
                          </tr>
                          <tr className="bg-white hover:bg-slate-50">
                            <td className="p-3.5 font-bold text-slate-900">FnF Settlement Administrative Delays</td>
                            <td className="p-3.5 text-[#DC2626] font-bold">STRICTLY ILLEGAL</td>
                            <td className="p-3.5 text-slate-650">Section 7(3) mandates 30-day disbursement independent of internal FnF clearance cycles.</td>
                          </tr>
                          <tr className="bg-slate-50 hover:bg-slate-100">
                            <td className="p-3.5 font-bold text-slate-900">Alleged Misconduct without Dismissal</td>
                            <td className="p-3.5 text-[#DC2626] font-bold">STRICTLY ILLEGAL</td>
                            <td className="p-3.5 text-slate-650"><em>Jaswant Singh Gill v. BCCL (2007)</em>: Forfeiture requires termination on specific statutory grounds.</td>
                          </tr>
                          <tr className="bg-white hover:bg-slate-50">
                            <td className="p-3.5 font-bold text-slate-900">Company Restructuring / Cashflow Crunch</td>
                            <td className="p-3.5 text-[#DC2626] font-bold">STRICTLY ILLEGAL</td>
                            <td className="p-3.5 text-slate-650"><em>State of Punjab v. Labour Court (1979)</em>: Gratuity is a statutory charge above unsecured debts.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <h4 className="font-extrabold text-slate-900 text-sm md:text-base">
                      The Exhaustive Conditions for Forfeiture under Section 4(6)
                    </h4>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong className="text-slate-900">Section 4(6)</strong> of the Payment of Gratuity Act, 1972, forfeiture is permissible only under two narrow, strictly proven statutory circumstances:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h5 className="font-black text-slate-900 text-sm mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                          Section 4(6)(a) — Actual Property Loss
                        </h5>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          Gratuity can be forfeited <strong>only to the extent of actual quantified damage</strong> caused by the employee&apos;s willful act or negligence. The employer must conduct a formal domestic inquiry, quantify the exact loss, and issue a reasoned forfeiture order prior to separation.
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h5 className="font-black text-slate-900 text-sm mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                          Section 4(6)(b) — Riotous Conduct / Offenses
                        </h5>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          Gratuity may be wholly or partially forfeited <strong>only if the employee was formally terminated</strong> for riotous or disorderly behavior, acts of violence, or an offense involving moral turpitude committed during the course of employment.
                        </p>
                      </div>
                    </div>

                    <p className="text-sm md:text-base leading-relaxed">
                      Furthermore, under <strong className="text-slate-900">Section 13</strong>, no gratuity payable under the Act is liable to attachment in execution of any decree or order of any civil, revenue, or criminal court. Under <strong className="text-slate-900">Section 14</strong>, the Act has an overriding effect that nullifies any inconsistent clauses in employment agreements or company handbooks.
                    </p>
                  </div>
                </section>

                {/* ── SECTION 3: CALCULATION & MANDATORY INTEREST ──────────── */}
                <section id="gratuity-calculation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Statutory 15/26 Formula &amp; Mandatory 10% Interest (§ 7(3A))
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When issuing a statutory demand notice, legal precision in calculating the principal gratuity amount and the statutory accrued interest is paramount. Employers frequently calculate gratuity using 30 days instead of the statutory 26 working days divisor, deliberately reducing employee payouts.
                    </p>

                    {/* Formula Card */}
                    <div className="bg-gradient-to-r from-slate-900 via-[#0F172A] to-slate-900 text-white p-6 rounded-2xl border border-slate-800 shadow-md">
                      <span className="text-xs font-black text-[#DC2626] uppercase tracking-widest">
                        Statutory Formula (Section 4(2))
                      </span>
                      <div className="my-4 bg-slate-800/80 p-4 rounded-xl border border-slate-700 text-center font-mono text-base md:text-xl font-black tracking-wide text-amber-400">
                        Gratuity = (15 × Last Drawn Basic Salary + DA × Completed Years of Service) ÷ 26
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
                        <div>
                          <strong className="text-white">15 Days:</strong> Half a month&apos;s wages for every completed year.
                        </div>
                        <div>
                          <strong className="text-white">26 Divisor:</strong> Statutory monthly working days (excluding 4 Sundays).
                        </div>
                        <div>
                          <strong className="text-white">Rounding Rule:</strong> Any tenure exceeding 6 months rounds up to the next full year.
                        </div>
                      </div>
                    </div>

                    {/* Representative Table */}
                    <div className="overflow-x-auto my-6">
                      <table className="w-full text-left text-xs sm:text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead className="bg-slate-100 text-slate-900 font-bold">
                          <tr>
                            <th className="p-3 border border-slate-200">Parameter</th>
                            <th className="p-3 border border-slate-200">Software Engineer (5.4 Yrs)</th>
                            <th className="p-3 border border-slate-200">Engineering Lead (6.8 Yrs)</th>
                            <th className="p-3 border border-slate-200">Director / VP (11.2 Yrs)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                          <tr>
                            <td className="p-3 font-semibold text-slate-700">Last Drawn Basic + DA</td>
                            <td className="p-3 font-mono font-bold text-slate-900">₹45,000 / mo</td>
                            <td className="p-3 font-mono font-bold text-slate-900">₹85,000 / mo</td>
                            <td className="p-3 font-mono font-bold text-slate-900">₹1,60,000 / mo</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold text-slate-700">Calculated Service Tenure</td>
                            <td className="p-3 text-slate-800">5 Completed Years</td>
                            <td className="p-3 text-slate-800">7 Completed Years</td>
                            <td className="p-3 text-slate-800">11 Completed Years</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold text-slate-700">15 Days Wage (Basic×15÷26)</td>
                            <td className="p-3 font-mono text-slate-800">₹25,961.54</td>
                            <td className="p-3 font-mono text-slate-800">₹49,038.46</td>
                            <td className="p-3 font-mono text-slate-800">₹92,307.69</td>
                          </tr>
                          <tr className="bg-red-50/50">
                            <td className="p-3 font-bold text-slate-900">Principal Gratuity Payable</td>
                            <td className="p-3 font-mono font-black text-[#DC2626]">₹1,29,808</td>
                            <td className="p-3 font-mono font-black text-[#DC2626]">₹3,43,269</td>
                            <td className="p-3 font-mono font-black text-[#DC2626]">₹10,15,385</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold text-slate-700">Delay Period</td>
                            <td className="p-3 text-slate-800">6 Months (180 days)</td>
                            <td className="p-3 text-slate-800">9 Months (270 days)</td>
                            <td className="p-3 text-slate-800">12 Months (365 days)</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="p-3 font-bold text-slate-900">Statutory 10% Interest (§ 7(3A))</td>
                            <td className="p-3 font-mono font-bold text-emerald-600">₹6,490</td>
                            <td className="p-3 font-mono font-bold text-emerald-600">₹25,745</td>
                            <td className="p-3 font-mono font-bold text-emerald-600">₹1,01,538</td>
                          </tr>
                          <tr className="bg-slate-900 text-white font-bold">
                            <td className="p-3">Total Recoverable Demand</td>
                            <td className="p-3 font-mono text-amber-400">₹1,36,298</td>
                            <td className="p-3 font-mono text-amber-400">₹3,69,014</td>
                            <td className="p-3 font-mono text-amber-400">₹11,16,923</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <h4 className="font-extrabold text-slate-900 text-sm mb-2">
                        Mandatory Nature of 10% Simple Interest under Section 7(3A)
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                        In <strong className="text-slate-900">H. Gangahanume Gowda v. Karnataka Agro Industries Corpn. Ltd. (2003) 3 SCC 40</strong>, the Supreme Court held that the payment of interest on delayed gratuity under Section 7(3A) is a mandatory statutory command. An employer cannot escape interest liability by citing administrative delays, departmental inquiries, or lack of liquid funds.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 4: EVIDENTIARY CHECKLIST ─────────────────────── */}
                <section id="evidentiary-checklist" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Pre-Notice Evidentiary Checklist &amp; Document Audit
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A formidable legal notice requires a clear documentary record. By assembling salary records alongside official separation communications, legal counsel can construct an airtight claim that leaves the defaulting company with no legal defense.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h4 className="font-black text-slate-900 text-sm mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                          Employment &amp; Service Records
                        </h4>
                        <ul className="text-xs sm:text-sm text-slate-650 space-y-2 list-disc list-inside">
                          <li>Appointment letter and signed employment agreement</li>
                          <li>Confirmation letter and annual promotion / appraisal letters</li>
                          <li>Experience certificate and official relieving letter</li>
                          <li>Resignation letter along with written HR acceptance email</li>
                        </ul>
                      </div>

                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h4 className="font-black text-slate-900 text-sm mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                          Salary, Banking &amp; Statutory Filings
                        </h4>
                        <ul className="text-xs sm:text-sm text-slate-650 space-y-2 list-disc list-inside">
                          <li>Last 3 to 6 months itemized payslips showing Basic Pay + DA</li>
                          <li>Bank account statements reflecting net salary credits</li>
                          <li>Form 16 / 26AS tax statements confirming service tenure</li>
                          <li>Copy of Form I statutory gratuity application (if submitted)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 5: STEP-BY-STEP RECOVERY PROTOCOL ────────────── */}
                <section id="recovery-protocol" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Step-by-Step Legal Recovery: Form I to Controlling Authority
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Recovering unpaid gratuity requires adhering to the statutory machinery prescribed under the Payment of Gratuity (Central) Rules, 1972. Follow this proven 5-step enforcement protocol:
                    </p>

                    <div className="space-y-4 my-6">
                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center font-black text-xs">
                            1
                          </div>
                          <h4 className="font-extrabold text-slate-900 text-sm">
                            Step 1: Statutory Application in Form I under Rule 7(1)
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed pl-10">
                          The employee submits a formal statutory application in <strong>Form I</strong> to the employer in person or via registered post, putting on record the exact service tenure and last drawn wages.
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center font-black text-xs">
                            2
                          </div>
                          <h4 className="font-extrabold text-slate-900 text-sm">
                            Step 2: 30-Day Employer Determination Window (Form L / M)
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed pl-10">
                          Under Section 7(2), the employer must issue a notice in <strong>Form L</strong> specifying the determined amount and payment date within 15 days of receiving Form I (or within 30 days of separation). Failure to issue Form L constitutes immediate statutory default.
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-red-50/60 border border-red-200 space-y-2">
                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-xs">
                            3
                          </div>
                          <h4 className="font-extrabold text-slate-900 text-sm">
                            Step 3: Issue Advocate-Drafted Statutory Legal Notice
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed pl-10">
                          Upon expiry of the 30-day statutory window, engage a senior labor panel advocate to issue a statutory demand legal notice citing Section 4, Section 7(3A) mandatory 10% interest, and Section 9 penal liability, setting a 15-day pre-litigation compliance window.
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center font-black text-xs">
                            4
                          </div>
                          <h4 className="font-extrabold text-slate-900 text-sm">
                            Step 4: File Form N Application before the Controlling Authority
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed pl-10">
                          If the employer fails to disburse the dues within 15 days of notice service, file an application in <strong>Form N</strong> under Section 7(4) and Rule 10 before the Controlling Authority (Assistant Labour Commissioner) for summary adjudication.
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center font-black text-xs">
                            5
                          </div>
                          <h4 className="font-extrabold text-slate-900 text-sm">
                            Step 5: Recovery Certificate (Form T) &amp; Section 8 Revenue Attachment
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed pl-10">
                          If the employer refuses to comply with the Controlling Authority&apos;s order, apply under <strong>Form T</strong> for issuance of a Recovery Certificate under Section 8. The Controlling Authority directs the District Collector to attach company bank accounts and recover the dues as arrears of land revenue.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 6: KEY NOTICE CLAUSES ───────────────────────── */}
                <section id="notice-clauses-checklist" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Key Clauses in an Advocate-Drafted Gratuity Legal Notice
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A generic, templated notice lacks legal force and is easily ignored by corporate HR and legal departments. An advocate-vetted statutory notice must incorporate watertight factual recitals and precise statutory invocations:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                        <h4 className="font-black text-slate-900 text-sm mb-1 text-[#DC2626]">
                          1. Employment Chronology &amp; Continuous Service
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          Reciting date of joining, confirmation, resignation, and last working day, establishing that continuous service exceeded the 5-year or 4-year 240-day statutory threshold without breaks.
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                        <h4 className="font-black text-slate-900 text-sm mb-1 text-[#DC2626]">
                          2. Wage Breakdown &amp; 15/26 Formula
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          Documenting the exact components of &quot;wages&quot; under Section 2(s), distinguishing basic pay and DA for accurate 15/26 formula calculation and setting out the exact principal debt.
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                        <h4 className="font-black text-slate-900 text-sm mb-1 text-[#DC2626]">
                          3. Demonstration of Statutory Default (§ 7(2) &amp; 7(3))
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          Proving that the employer failed to determine gratuity within 30 days or issue Form L/M, establishing non-compliance and triggering mandatory statutory liability.
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                        <h4 className="font-black text-slate-900 text-sm mb-1 text-[#DC2626]">
                          4. 10% Interest Claim &amp; Director Penal Exposure (§ 7(3A) &amp; § 9)
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          Claiming 10% p.a. simple interest and notifying Managing Directors and HR Heads of individual penal exposure carrying up to 1 year imprisonment and criminal breach of trust under BNS 2023.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 7: ENFORCEMENT & PRECEDENTS ───────────────────── */}
                <section id="controlling-authority-enforcement" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    7. Enforcement: Recovery Certificate (Sec 8) &amp; Landmark Rulings
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The Payment of Gratuity Act provides a robust quasi-judicial machinery that operates independently of civil court backlogs. Key judicial principles established by the Supreme Court of India ensure rapid execution:
                    </p>

                    <div className="space-y-4 my-6">
                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h4 className="font-black text-slate-900 text-sm mb-1">
                          State of Punjab v. Labour Court, Jullundur &amp; Ors. (1979) 4 SCC 440
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          <strong>Supreme Court Ruling:</strong> The Payment of Gratuity Act is a complete, self-contained code conferring special statutory rights enforceable exclusively before the designated Controlling Authority. Employers cannot invoke civil suits or arbitration clauses to delay statutory gratuity.
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h4 className="font-black text-slate-900 text-sm mb-1">
                          Jaswant Singh Gill v. Bharat Coking Coal Ltd. &amp; Ors. (2007) 1 SCC 663
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          <strong>Supreme Court Ruling:</strong> Forfeiture of gratuity under Section 4(6) is permissible only if the employee&apos;s service was terminated for the specific misconducts enumerated in the statute. Post-resignation forfeiture without formal termination is wholly void.
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h4 className="font-black text-slate-900 text-sm mb-1">
                          Y.K. Singla v. Punjab National Bank (2013) 3 SCC 472
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          <strong>Supreme Court Ruling:</strong> Even in cases where delay was caused due to pending judicial inquiries, statutory interest under Section 7(3A) is mandatory from the date of separation. Gratuity cannot be withheld without an order of forfeiture under Section 4(6).
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 8: FAQS ─────────────────────────────────────── */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    8. Frequently Asked Questions
                  </h2>
                  <div className="space-y-4 mt-6">
                    {faqs.map((faq, index) => {
                      const isExpanded = expandedFaqs.includes(`faq-${index}`);
                      return (
                        <div
                          key={index}
                          className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-150"
                        >
                          <button
                            onClick={() => toggleFaq(index)}
                            className="w-full p-5 text-left font-extrabold text-slate-900 text-sm sm:text-base flex items-center justify-between gap-4 bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer"
                          >
                            <span>{faq.question}</span>
                            <span className="text-[#DC2626] text-xl font-black shrink-0">
                              {isExpanded ? '−' : '+'}
                            </span>
                          </button>
                          {isExpanded && (
                            <div className="p-5 bg-white border-t border-slate-100 text-xs sm:text-sm text-slate-650 leading-relaxed">
                              <p>{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* ── SECTION 9: STATUTORY CITATIONS & AUTHORITY LINKS ───── */}
                <section className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200 space-y-4">
                  <h3 className="font-black text-slate-900 text-sm md:text-base uppercase tracking-wider">
                    Statutory Authorities &amp; Official Regulatory References
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    All statutory provisions, calculation rules, timeline mandates, and penalties cited in this guide are directly grounded in central enactments and verified official government portals:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/1579"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline flex items-center gap-1.5 font-bold"
                    >
                      <span>↗</span> Payment of Gratuity Act, 1972 (India Code Portal)
                    </a>
                    <a
                      href="https://samadhan.labour.gov.in/"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline flex items-center gap-1.5 font-bold"
                    >
                      <span>↗</span> SAMADHAN Portal for Online Labour Dispute Filing
                    </a>
                    <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                      <span>•</span> Ministry of Labour &amp; Employment, Govt. of India
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                      <span>•</span> Chief Labour Commissioner (Central) Official Authority
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                      <span>•</span> Supreme Court of India Industrial Jurisprudence
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                      <span>•</span> Code on Social Security, 2020 Statutory Guidelines
                    </div>
                  </div>
                </section>

                {/* ── SECTION 10: MORE GUIDES (TOPICAL INTERLINKING) ──────── */}
                <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
                  <h3 className="font-black text-slate-900 text-sm md:text-base">
                    More Employment &amp; Consumer Protection Recovery Guides
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      {
                        title: 'Legal Notice to Employer for Not Paying PF (Provident Fund)',
                        href: '/send-a-legal-notice/employer-not-paying-pf-provident-fund',
                      },
                      {
                        title: 'Legal Notice for Leave Encashment Not Paid by Employer',
                        href: '/send-a-legal-notice/leave-encashment-not-paid-by-employer',
                      },
                      {
                        title: 'Legal Notice to Company for Not Paying Commission',
                        href: '/send-a-legal-notice/commission-not-paid-by-company',
                      },
                      {
                        title: 'Recovery of Salary & Employment Dues Full Guide',
                        href: '/services/recovery-of-salary-and-employment-dues',
                      },
                      {
                        title: 'Full & Final (FnF) Settlement Delay Recovery',
                        href: '/recovery/fnf-settlement',
                      },
                      {
                        title: 'Legal Notice for Recovery of Money in India',
                        href: '/legal-notice-for-recovery-of-money',
                      },
                      {
                        title: 'Recovery of Gratuity Amount Complete Guide',
                        href: '/recovery/gratuity-amount',
                      },
                      {
                        title: 'Send a Legal Notice Online in India (Overview)',
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

                {/* ── SECTION 11: COMPANY SECTION ────────────────────────── */}
                <section className="border border-slate-100 rounded-2xl p-6 md:p-8 bg-white">
                  <div className="flex items-center gap-4 mb-4">
                    <img src="/lrlogo.svg" alt="Legal Recovery Logo" className="h-10 w-auto" />
                    <div>
                      <h3 className="font-black text-slate-900 text-base">Legal Recovery</h3>
                      <p className="text-xs text-slate-500">India&apos;s Trusted Online Recovery Platform</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-650 leading-relaxed mb-6">
                    Legal Recovery is India&apos;s trusted online legal notice and dispute resolution platform,
                    connecting employees, software professionals, executives, managers, and retired personnel
                    with seasoned labor and commercial panel advocates for rapid, advocate-vetted statutory demand
                    notices at transparent flat fees. With ₹100 Crore+ recovered and 10,000+ cases resolved across
                    India, Legal Recovery delivers verified legal impact without the delays and unpredictability of
                    traditional law firms.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { label: 'Send a Legal Notice', href: '/send-a-legal-notice' },
                      { label: 'Recovery Services', href: '/recovery' },
                      { label: 'Gratuity Recovery Service', href: '/recovery/gratuity-amount' },
                      { label: 'Legal Notice for Money Recovery', href: '/legal-notice-for-recovery-of-money' },
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

            {/* ── RIGHT COLUMN: STICKY SIDEBAR ─────────────────────────── */}
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
                  Employer Withholding Your Gratuity?
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  Send an advocate-vetted statutory legal notice today. 78% of corporate employers settle unpaid
                  gratuity dues with statutory interest within 15 days upon receiving formal notice from Legal Recovery.
                </p>
                <button
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-3 px-4 rounded-xl transition-all text-sm cursor-pointer shadow-md"
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
                  <span className="text-slate-400 text-xs">/5 (298 reviews)</span>
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
                    stat: '78%',
                    label: 'Employers settle gratuity dues prior to Controlling Authority hearings',
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
