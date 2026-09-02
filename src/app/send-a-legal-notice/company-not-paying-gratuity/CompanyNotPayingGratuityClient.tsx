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
    question: 'Can an employee send a formal legal notice to a company for not paying earned gratuity in India?',
    answer:
      'Yes, an employee who has completed continuous qualifying service (or their nominee in case of death or disablement) has an absolute statutory right under Section 4 and Section 7 of the Payment of Gratuity Act, 1972 to issue an advocate-drafted statutory legal notice demanding immediate disbursement of unpaid gratuity along with 10% statutory interest per annum. The notice establishes conclusive documentary evidence of employer default, holds corporate directors personally liable, and provides a strict 15-day compliance window before initiating quasi-judicial recovery under Form N before the Controlling Authority or seeking bank attachment through the District Collector under Section 8.',
  },
  {
    question: 'What is the mandatory statutory timeframe for a company to calculate and disburse gratuity after resignation or termination?',
    answer:
      'Under Section 7(3) of the Payment of Gratuity Act, 1972, the employer is statutorily mandated to determine and disburse the entire gratuity amount within exactly 30 days from the date it becomes payable upon resignation, retirement, superannuation, or termination. If the company fails to disburse the gratuity within this statutory 30-day window, Section 7(3A) obligates the employer to pay simple interest at 10% per annum from the expiration of the 30 days until the date of actual realization. Corporate administrative delays, audit cycles, or pending full and final settlement clearances do not suspend this mandatory interest liability.',
  },
  {
    question: 'Can an employer withhold or forfeit gratuity due to notice period shortfall, unreturned assets, or pending client handovers?',
    answer:
      'No, an employer cannot legally forfeit or withhold statutory gratuity on grounds of unserved notice period, alleged project handover delays, or routine property disputes under Indian labor jurisprudence. Under Section 4(6) of the Payment of Gratuity Act, 1972, forfeiture is strictly restricted to situations where an employee was formally terminated for willful omission causing quantifiable financial damage to property (limited exclusively to the proven loss) or for riotous conduct involving moral turpitude after a domestic inquiry and criminal conviction. Any unilateral deduction without a formal domestic inquiry and speaking forfeiture order is void ab initio and punishable under Section 9.',
  },
  {
    question: 'How does the 4 years and 240 days rule qualify an employee for statutory gratuity under Indian law?',
    answer:
      'Under Section 2A of the Payment of Gratuity Act, 1972, read alongside binding precedents from the Supreme Court of India and various High Courts including the Madras High Court in Mettur Beardsell Ltd., an employee who works for at least 240 days (or 190 days in mining/seasonal establishments) during their fifth year of service is deemed to have completed continuous service for that fifth year. Consequently, completing 4 years and 240 days satisfies the statutory 5-year eligibility threshold, entitling the employee to full statutory gratuity computed on all 5 completed years without lawful corporate objection.',
  },
  {
    question: 'What legal steps can an employee take if the company fails to respond to the statutory legal notice for gratuity?',
    answer:
      'If the employer fails to disburse the gratuity within the 15-day peremptory notice window, the employee can file a statutory claim petition under Form N before the Controlling Authority under Section 7(4) of the Payment of Gratuity Act, 1972 in the jurisdictional Labour Court. Upon verifying the claim, the Controlling Authority issues a formal recovery order and forwards a Section 8 Recovery Certificate to the District Collector, who attaches company bank assets to recover the dues as arrears of land revenue with compound penal interest. Furthermore, penal proceedings under Section 9 can be instituted against defaulting company officers, punishable with up to one year imprisonment and statutory fines.',
  },
  {
    question: 'What is the standard statutory formula to calculate gratuity for monthly rated private sector employees?',
    answer:
      'For monthly rated non-seasonal employees covered under the Payment of Gratuity Act, 1972, the statutory gratuity formula is: Gratuity = (15 × Last Drawn Basic Salary + Dearness Allowance × Completed Years of Service) ÷ 26. Any employment tenure exceeding six months in the terminal year is rounded up to the next full year (for example, 7 years and 7 months is calculated as 8 completed years). The statutory ceiling for tax-exempt gratuity under Section 4(3) is currently ₹20,00,000 as notified by the Central Government.',
  },
  {
    question: 'Can gratuity be attached by civil court decrees, commercial creditors, or employer counterclaims?',
    answer:
      'No, under Section 13 of the Payment of Gratuity Act, 1972, no gratuity payable under the Act is liable to attachment in execution of any decree or order of any civil, revenue, or criminal court. Gratuity is a protected statutory social welfare benefit ring-fenced against third-party debt recoveries, corporate offsets, and employer damages claims. Under Section 14, the provisions of the Act have overriding effect notwithstanding anything inconsistent contained in any employment contract, bond, or corporate HR policy.',
  },
];

/* ─── JSON-LD SCHEMA (@graph) ──────────────────────────────────────────── */
const pageUrl =
  'https://legalrecovery.in/send-a-legal-notice/company-not-paying-gratuity';
const ogImage =
  'https://legalrecovery.in/images/og/company-not-paying-gratuity.jpg';

const reviewBodyText =
  'When I resigned as Principal Software Architect after 8 continuous years of service at a Bengaluru fintech firm, the management withheld my earned gratuity of ₹9,45,000 for six months. They cited vague pending client transition clearances and internal corporate restructuring after an overseas buyout. Legal Recovery drafted a formidable statutory legal demand notice under Section 4, Section 7(3A), and Section 8 of the Payment of Gratuity Act, 1972, demanding the principal amount plus 10% statutory interest and warning of director personal liability. Within 12 days of serving the notice via Speed Post AD and email to the board of directors, the company\'s legal counsel intervened and disbursed the full ₹9,45,000 along with accrued statutory interest directly into my bank account. Truly exceptional legal expertise!';

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
        'Send Legal Notice to Company for Not Paying Gratuity | Recovery India',
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
      name: 'Send Legal Notice to Company for Not Paying Gratuity | Recovery India',
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
          name: 'Company Not Paying Gratuity Recovery',
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

    /* 6. ItemList – Step-by-Step Recovery Process */
    {
      '@type': 'ItemList',
      name: 'Step-by-Step Statutory Roadmap to Recover Unpaid Gratuity from Employer in India',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Continuous Service & Eligibility Verification: Calculate qualifying service tenure, verify 240-day rule for the 5th year under Section 2A, and compute statutory dues with DA.',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Issue Form I Statutory Employee Demand: Submit formal written application to employer under Rule 7 of Payment of Gratuity (Central) Rules, 1972 triggering 30-day clock.',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Draft Advocate Statutory Legal Notice: Issue formal demand under Section 4, 7(3A) and Section 8 demanding 10% statutory interest and establishing personal director liability.',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Dispatch via Speed Post AD, Registered Email, and WhatsApp with Section 63 BSA Delivery Proof.',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Quasi-Judicial Escalation: File Form N Claim Petition before Controlling Authority (Labour Commissioner) under Section 7(4) within district jurisdiction.',
        },
        {
          '@type': 'ListItem',
          position: 6,
          name: 'Execute Section 8 Recovery Certificate: Direct District Collector to attach company bank accounts and recover dues as arrears of land revenue with penal interest.',
        },
      ],
    },

    /* 7. Product + AggregateRating + Review (matches sidebar UI word-for-word) */
    {
      '@type': 'Product',
      name: 'Legal Notice to Company for Unpaid Gratuity Recovery',
      description:
        'Advocate-drafted statutory demand notice service for corporate employees, managers, and executives to recover unpaid gratuity dues and 10% statutory interest from employers across India under the Payment of Gratuity Act, 1972.',
      brand: {
        '@type': 'Organization',
        name: 'Legal Recovery',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '418',
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
            name: 'Vikramaditya Rao',
          },
          reviewBody: reviewBodyText,
        },
      ],
    },
  ],
};

/* ─── COMPONENT ─────────────────────────────────────────────────────────── */
export default function CompanyNotPayingGratuityClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: 'statutory-framework', title: '1. Statutory Framework: Payment of Gratuity Act & Employee Rights' },
    { id: 'unlawful-forfeitures', title: '2. Debunking Corporate Excuses: Handover Delays & Unlawful Forfeitures' },
    { id: 'calculation-and-240-days', title: '3. Gratuity Calculation Matrix & The 4 Years 240 Days Rule' },
    { id: 'evidentiary-checklist', title: '4. Pre-Notice Evidentiary Checklist & Section 63 BSA Records' },
    { id: 'essential-clauses', title: '5. Critical Clauses in a Legal Notice to Company for Gratuity' },
    { id: 'controlling-authority-form-n', title: '6. Controlling Authority (Form N), Section 8 & Criminal Sanctions' },
    { id: 'step-by-step-roadmap', title: '7. Step-by-Step Strategic Recovery Roadmap' },
    { id: 'faqs', title: '8. Frequently Asked Questions' },
  ];

  const breadcrumbItems = [
    { label: 'Send a Legal Notice', href: '/send-a-legal-notice' },
    {
      label: 'Company Not Paying Gratuity Recovery',
      href: '/send-a-legal-notice/company-not-paying-gratuity',
    },
  ];

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const shareUrl = encodeURIComponent(pageUrl);
  const shareText = encodeURIComponent(
    'Company or employer not paying your earned gratuity after resignation or retirement? Send an advocate-vetted legal notice under Section 4, 7(3A) & 8 of the Payment of Gratuity Act, 1972 with 10% statutory interest! #GratuityRecovery #EmployeeRights #LegalNoticeIndia'
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
              EMPLOYMENT DUES &amp; STATUTORY SOCIAL SECURITY RECOVERY
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Send a Legal Notice to Company for{' '}
              <span className="text-[#DC2626]">Not Paying Gratuity</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Recover your withheld gratuity amount, 10% mandatory statutory interest, and enforce personal director liability against defaulting employers under the Payment of Gratuity Act, 1972.
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
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${encodeURIComponent('Send Legal Notice to Company for Not Paying Gratuity | Recovery India')}`}
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
                    Under{' '}
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/1544"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      Section 4 and Section 7(3) of the Payment of Gratuity Act, 1972
                    </a>
                    , an employee who has completed five years of continuous service (or 4 years and 240 days) is legally entitled to full gratuity payment within 30 days of resignation, retirement, or termination. If an employer withholds or delays gratuity, serving an advocate-drafted statutory legal notice under{' '}
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/1544"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      Section 7(3A)
                    </a>{' '}
                    demands immediate clearance of the principal amount along with mandatory 10% per annum statutory interest and puts company directors on personal legal notice. If the company fails to settle the dues within the stipulated 15-day notice window, the employee can initiate recovery proceedings under Form N before the{' '}
                    <a
                      href="https://clc.gov.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      Controlling Authority (Labour Commissioner)
                    </a>{' '}
                    and obtain a Section 8 Recovery Certificate to attach company bank accounts through the District Collector as arrears of land revenue.
                  </p>
                </div>

                {/* ── INFOGRAPHIC IMAGE EMBED ───────────────────────────── */}
                <div className="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white">
                  <img
                    src="/images/og/company-not-paying-gratuity.jpg"
                    alt="Legal Process Infographic for Recovering Unpaid Gratuity from Company in India"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 bg-slate-50 border-t border-slate-100 text-xs text-slate-500 font-medium text-center">
                    Figure 1: Statutory Roadmap for Indian Employees to Recover Withheld Gratuity from Defaulting Companies under the Payment of Gratuity Act, 1972.
                  </div>
                </div>

                {/* ── SECTION 1: STATUTORY FRAMEWORK ───────────────────── */}
                <section id="statutory-framework" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                    1. Statutory Framework: Payment of Gratuity Act, 1972 &amp; Non-Negotiable Employee Rights
                  </h2>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    In the Indian corporate ecosystem, gratuity is frequently mischaracterized by human resource departments as a discretionary retirement bonus or an ex-gratia incentive tied to management satisfaction. In reality, gratuity is a strictly codified statutory retiral benefit governed by the{' '}
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/1544"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline font-medium"
                    >
                      Payment of Gratuity Act, 1972
                    </a>
                    . The Act applies mandatorily to every factory, mine, oilfield, plantation, port, railway company, shop, and commercial establishment in which ten or more persons are employed or were employed on any day of the preceding twelve months. Once an establishment crosses this threshold of 10 employees, the Act continues to govern the entity perpetually, regardless of subsequent workforce reductions.
                  </p>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    As unequivocally held by the Supreme Court of India in the landmark judgment{' '}
                    <a
                      href="https://main.sci.gov.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline font-medium"
                    >
                      Jaswant Singh Gill v. Bharat Coking Coal Ltd. (2007) 1 SCC 663
                    </a>
                    , gratuity is not a bounty, gratuitous gift, or discretionary reward distributed at the employer&apos;s whim. It represents a vested property right earned through dedicated, long-standing service. Withholding, delaying, or arbitrarily deducting earned gratuity constitutes a direct violation of statutory welfare law and triggers severe legal repercussions against both the corporate entity and its principal officers:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                      <div className="flex items-center gap-2 mb-2 font-black text-slate-900 text-sm md:text-base">
                        <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">
                          §4
                        </span>
                        Mandatory Payment Obligation
                      </div>
                      <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                        <strong>Section 4(1):</strong> Gratuity shall be payable to an employee on the termination of employment after rendering continuous service for not less than five years upon superannuation, retirement, resignation, death, or disablement. In cases of death or disablement, the 5-year condition is statutorily waived.
                      </p>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                      <div className="flex items-center gap-2 mb-2 font-black text-slate-900 text-sm md:text-base">
                        <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">
                          §7
                        </span>
                        30-Day Window &amp; 10% Interest
                      </div>
                      <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                        <strong>Section 7(3) &amp; Section 7(3A):</strong> The employer must determine and disburse gratuity within 30 days. Delay beyond 30 days incurs mandatory statutory simple interest at 10% per annum under Central Government Notification (S.O. 874(E)), as reaffirmed in{' '}
                        <a
                          href="https://main.sci.gov.in/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:text-purple-800 hover:underline font-medium"
                        >
                          Y.K. Singla v. Punjab National Bank (2013) 3 SCC 472
                        </a>
                        .
                      </p>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                      <div className="flex items-center gap-2 mb-2 font-black text-slate-900 text-sm md:text-base">
                        <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">
                          §13
                        </span>
                        Immunity from Court Attachment
                      </div>
                      <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                        <strong>Section 13:</strong> No gratuity payable under the Act shall be liable to attachment in execution of any decree or order of any civil, revenue, or criminal court. Gratuity cannot be offset against internal corporate loans, third-party vendor liabilities, or arbitrary company recovery claims.
                      </p>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                      <div className="flex items-center gap-2 mb-2 font-black text-slate-900 text-sm md:text-base">
                        <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">
                          §14
                        </span>
                        Overriding Effect Over Contracts
                      </div>
                      <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                        <strong>Section 14:</strong> The provisions of the Act have overriding effect notwithstanding anything inconsistent contained in any enactment, employment agreement, employment bond, company handbook, or HR settlement policy. Any employment clause restricting gratuity is null and void ab initio.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 2: UNLAWFUL FORFEITURES & CORPORATE EXCUSES ─ */}
                <section id="unlawful-forfeitures" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                    2. Debunking Corporate Excuses: Handover Delays, Notice Buyouts &amp; Section 4(6) Protections
                  </h2>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    When employees resign after years of meritorious contribution, defaulting employers and startup founders routinely concoct administrative pretexts to stall or deduct gratuity payouts during Full and Final (FnF) settlements. It is essential to recognize that virtually all standard corporate justifications for withholding gratuity are completely unlawful under Indian jurisprudence.
                  </p>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    Under the Payment of Gratuity Act, the circumstances under which an employer can lawfully forfeit gratuity are exhaustive, strictly construed, and governed exclusively by <strong>Section 4(6)</strong>:
                  </p>

                  <div className="space-y-4 my-6">
                    <div className="border-l-4 border-[#DC2626] bg-red-50/50 p-5 rounded-r-2xl">
                      <h3 className="font-extrabold text-red-950 text-sm md:text-base mb-2">
                        Exhaustive Statutory Grounds for Forfeiture under Section 4(6):
                      </h3>
                      <ul className="space-y-2 text-xs md:text-sm text-slate-800 list-disc list-inside">
                        <li>
                          <strong>Section 4(6)(a) — Damage to Property:</strong> Gratuity may be forfeited only to the extent of actual, quantifiable financial damage or loss caused to the employer&apos;s property by the employee&apos;s willful omission or negligence, provided the employee was formally terminated for such act after a strict domestic inquiry establishing exact pecuniary liability.
                        </li>
                        <li>
                          <strong>Section 4(6)(b) — Riotous Conduct or Moral Turpitude:</strong> Gratuity may be wholly or partially forfeited only if the employee&apos;s services were terminated for riotous, disorderly behavior, violence, or an offense involving moral turpitude committed during employment, provided the employee has been convicted by a court of competent jurisdiction.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    As settled by the Supreme Court in{' '}
                    <a
                      href="https://main.sci.gov.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline font-medium"
                    >
                      Union of India v. C.G. Ajay Babu (2018) 8 SCC 529
                    </a>
                    , forfeiture of gratuity cannot be sustained merely on an allegation of administrative misconduct or internal disciplinary censure unless there is an express termination order premised on moral turpitude with independent court conviction or quantified physical property loss.
                  </p>

                  {/* Comparison Table: Lawful vs Unlawful Withholding */}
                  <div className="my-6 overflow-x-auto">
                    <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm text-xs md:text-sm">
                      <thead>
                        <tr className="bg-slate-900 text-white">
                          <th className="p-3.5 font-bold uppercase tracking-wider">Corporate Pretext / Reason</th>
                          <th className="p-3.5 font-bold uppercase tracking-wider">Legal Status</th>
                          <th className="p-3.5 font-bold uppercase tracking-wider">Statutory / Judicial Position</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr className="hover:bg-slate-50">
                          <td className="p-3.5 font-semibold text-slate-900">Unserved Notice Period / Shortfall Buyout</td>
                          <td className="p-3.5 text-red-600 font-bold">STRICTLY UNLAWFUL</td>
                          <td className="p-3.5 text-slate-650">Section 14 overrides employment contracts. Gratuity cannot be set off against notice period pay.</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-3.5 font-semibold text-slate-900">Pending Project Handover or Client Sign-Off</td>
                          <td className="p-3.5 text-red-600 font-bold">STRICTLY UNLAWFUL</td>
                          <td className="p-3.5 text-slate-650">Handover delays do not constitute termination under Section 4(6). 30-day payment rule remains absolute.</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-3.5 font-semibold text-slate-900">Pending Return of Laptop / ID Card / Company Assets</td>
                          <td className="p-3.5 text-red-600 font-bold">STRICTLY UNLAWFUL</td>
                          <td className="p-3.5 text-slate-650">Asset recovery must follow independent civil process; Section 13 bars attaching or withholding gratuity.</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-3.5 font-semibold text-slate-900">Company Facing Cash Flow Crunch or Restructuring</td>
                          <td className="p-3.5 text-red-600 font-bold">STRICTLY UNLAWFUL</td>
                          <td className="p-3.5 text-slate-650">Financial constraints do not exempt statutory welfare liability; delay incurs 10% compound recovery.</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-3.5 font-semibold text-slate-900">Formal Termination for Quantified Theft with Domestic Inquiry</td>
                          <td className="p-3.5 text-emerald-600 font-bold">PERMITTED (PRO-RATA)</td>
                          <td className="p-3.5 text-slate-650">Only to the exact extent of proven pecuniary loss under Section 4(6)(a). Remainder must be paid.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* ── SECTION 3: CALCULATION & 240 DAYS RULE ───────────── */}
                <section id="calculation-and-240-days" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                    3. Gratuity Calculation Matrix &amp; The Landmark 4 Years 240 Days Service Rule
                  </h2>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    Accurately calculating your statutory gratuity entitlement is critical before issuing a formal legal notice. Under <strong>Section 4(2)</strong> of the Payment of Gratuity Act, 1972, for every completed year of service or part thereof in excess of six months, the employer is statutorily bound to pay gratuity at the rate of fifteen days&apos; wages based on the rate of wages last drawn by the employee.
                  </p>

                  <div className="bg-slate-900 text-white p-6 rounded-2xl space-y-4">
                    <div className="text-xs font-black uppercase tracking-widest text-[#DC2626]">
                      Standard Statutory Gratuity Formula (Monthly Rated Employees)
                    </div>
                    <div className="bg-slate-800/80 p-4 rounded-xl font-mono text-sm md:text-base border border-slate-700 text-center">
                      Gratuity = (15 × Last Drawn [Basic Salary + Dearness Allowance] × Completed Service Years) ÷ 26
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-slate-300">
                      <div>
                        <strong>Factor 15:</strong> Represents 15 days of wages for each completed working year.
                      </div>
                      <div>
                        <strong>Divisor 26:</strong> Standard working days in a calendar month (excluding 4 Sundays).
                      </div>
                      <div>
                        <strong>Service Rounding:</strong> Any period &gt;6 months counts as 1 full year (e.g., 5 yrs 7 mos = 6 yrs).
                      </div>
                    </div>
                  </div>

                  <h3 className="font-extrabold text-slate-900 text-lg md:text-xl mt-6">
                    The 4 Years and 240 Days Continuous Service Rule Explained
                  </h3>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    One of the most frequently contested legal issues is whether an employee who resigns before completing five full calendar years is entitled to gratuity. Employers routinely reject claims for employees who worked 4 years and 8 months, citing a strict 5-year literal barrier.
                  </p>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    This corporate defense has been decisively rejected by the judiciary. Under <strong>Section 2A(2)(a)(ii)</strong> of the Payment of Gratuity Act, 1972, an employee is deemed to be in continuous service for a period of one year if they have actually worked under the employer for not less than <strong>240 days</strong> in the preceding twelve calendar months (or 190 days in underground mines or seasonal operations).
                  </p>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    In landmark decisions such as{' '}
                    <a
                      href="https://main.sci.gov.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline font-medium"
                    >
                      Mettur Beardsell Ltd. v. Regional Labour Commissioner (Madras High Court)
                    </a>{' '}
                    and rulings by the Supreme Court of India, it has been settled that once an employee completes 4 full years of continuous service and completes at least 240 working days in the fifth year (equivalent to roughly 4 years and 240 days / ~4.8 years), the employee has legally completed five years of continuous service and is entitled to full statutory gratuity for all 5 years.
                  </p>

                  {/* Calculation Example Card */}
                  <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-3">
                    <h4 className="font-extrabold text-slate-900 text-sm md:text-base">
                      Real-World Calculation Example:
                    </h4>
                    <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                      Consider an employee who worked for <strong>7 years and 8 months</strong> with a last drawn Basic Salary of <strong>₹85,000</strong> and Dearness Allowance (DA) of <strong>₹15,000</strong> (Total qualifying monthly wage = ₹1,00,000):
                    </p>
                    <ul className="text-xs md:text-sm text-slate-800 space-y-1.5 list-disc list-inside bg-white p-4 rounded-xl border border-slate-100">
                      <li>Total Completed Service: 7 years 8 months = <strong>8 Completed Years</strong> (rounded up).</li>
                      <li>Per-Day Wage Calculation: ₹1,00,000 ÷ 26 = <strong>₹3,846.15</strong></li>
                      <li>15 Days Wage: ₹3,846.15 × 15 = <strong>₹57,692.30</strong></li>
                      <li>Total Gratuity Payable: ₹57,692.30 × 8 = <strong>₹4,61,538.46</strong></li>
                      <li>Statutory Interest if delayed 6 months @ 10% p.a. (Section 7(3A)): <strong>₹23,076.92</strong></li>
                      <li><strong>Total Enforceable Recovery Claim: ₹4,84,615.38</strong></li>
                    </ul>
                  </div>
                </section>

                {/* ── SECTION 4: EVIDENTIARY CHECKLIST UNDER SECTION 63 BSA ─ */}
                <section id="evidentiary-checklist" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                    4. Pre-Notice Evidentiary Checklist &amp; Electronic Records under Section 63 BSA
                  </h2>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    Under Indian procedural law, electronic evidence plays a decisive role in establishing employment tenure, salary structure, and employer default. The{' '}
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/2187"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline font-medium"
                    >
                      Bharatiya Sakshya Adhiniyam, 2023 (BSA)
                    </a>{' '}
                    under Section 63 (which replaces Section 65B of the Indian Evidence Act, 1872) governs the admissibility of digital communications. Prior to issuing a formal legal notice, you must consolidate and secure the following documentation:
                  </p>

                  <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                    <div className="bg-slate-900 text-white p-4 font-extrabold text-sm uppercase tracking-wide">
                      Essential Evidentiary Records for Gratuity Legal Notice
                    </div>
                    <div className="p-5 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border border-slate-100 p-3.5 rounded-xl bg-slate-50">
                          <h4 className="font-extrabold text-slate-900 text-xs md:text-sm mb-1">
                            1. Employment Tenure Records
                          </h4>
                          <p className="text-xs text-slate-650 leading-relaxed">
                            Original Appointment Letter, Promotion Letters, Salary Revision Addendums, Employee ID Card, and Relieving / Experience Certificate verifying start and end dates.
                          </p>
                        </div>
                        <div className="border border-slate-100 p-3.5 rounded-xl bg-slate-50">
                          <h4 className="font-extrabold text-slate-900 text-xs md:text-sm mb-1">
                            2. Last Drawn Salary Slips &amp; Form 16
                          </h4>
                          <p className="text-xs text-slate-650 leading-relaxed">
                            Salary slips for the last 3-6 months preceding separation clearly itemizing Basic Salary and Dearness Allowance (DA), along with Form 16 Part A and Part B.
                          </p>
                        </div>
                        <div className="border border-slate-100 p-3.5 rounded-xl bg-slate-50">
                          <h4 className="font-extrabold text-slate-900 text-xs md:text-sm mb-1">
                            3. Resignation &amp; Acceptance Trail
                          </h4>
                          <p className="text-xs text-slate-650 leading-relaxed">
                            Resignation email sent to management/HR, official acknowledgment and acceptance email, approved last working day (LWD) confirmation, and no-dues clearance sign-offs.
                          </p>
                        </div>
                        <div className="border border-slate-100 p-3.5 rounded-xl bg-slate-50">
                          <h4 className="font-extrabold text-slate-900 text-xs md:text-sm mb-1">
                            4. Form I Statutory Application Copy
                          </h4>
                          <p className="text-xs text-slate-650 leading-relaxed">
                            Copy of statutory Form I (Application for Gratuity by Employee) served via email or registered post, along with proof of receipt or tracking reports.
                          </p>
                        </div>
                        <div className="border border-slate-100 p-3.5 rounded-xl bg-slate-50">
                          <h4 className="font-extrabold text-slate-900 text-xs md:text-sm mb-1">
                            5. Written Demands &amp; Email Refusals
                          </h4>
                          <p className="text-xs text-slate-650 leading-relaxed">
                            Complete email thread with HR, Finance, or Managing Directors demanding gratuity, detailing 30-day default, and any evasive responses or unlawful deduction threats.
                          </p>
                        </div>
                        <div className="border border-slate-100 p-3.5 rounded-xl bg-slate-50">
                          <h4 className="font-extrabold text-slate-900 text-xs md:text-sm mb-1">
                            6. Bank Account Statements
                          </h4>
                          <p className="text-xs text-slate-650 leading-relaxed">
                            Certified bank statements for the salary credit account demonstrating historical salary deposits and confirming the total absence of gratuity credit post-separation.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 5: CRITICAL STATUTORY CLAUSES IN NOTICE ─── */}
                <section id="essential-clauses" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                    5. Critical Statutory Clauses in a Legal Notice to Company for Withheld Gratuity
                  </h2>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    A generic demand letter drafted without statutory rigor will often be ignored by corporate legal counsel. A formidable advocate-drafted statutory legal notice under the Payment of Gratuity Act, 1972 must incorporate precise legal assertions that pin liability directly upon the company and its board of directors:
                  </p>

                  <div className="space-y-4">
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                      <div className="font-extrabold text-slate-900 text-sm md:text-base mb-1">
                        Clause 1: Crystallization of Continuous Service &amp; Establishment Applicability
                      </div>
                      <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                        Explicitly details the employee&apos;s date of joining, confirmed separation date, total continuous service tenure (citing Section 2A and the 240-day rule), last drawn basic wage, and establishes that the employer establishment falls within the mandatory scope of Section 1(3) of the Act.
                      </p>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                      <div className="font-extrabold text-slate-900 text-sm md:text-base mb-1">
                        Clause 2: Statutory Default under Section 7(2) &amp; Section 7(3)
                      </div>
                      <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                        Highlights the employer&apos;s failure to issue Form L (Notice of Determination of Gratuity) or Form M (Notice Rejecting Claim) and records the expiration of the mandatory 30-day statutory settlement window following separation.
                      </p>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                      <div className="font-extrabold text-slate-900 text-sm md:text-base mb-1">
                        Clause 3: Invocation of Mandatory 10% Statutory Interest under Section 7(3A)
                      </div>
                      <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                        Demands simple interest at 10% per annum on the principal gratuity amount from the due date until the date of actual payment, citing binding Central Government notifications and Supreme Court precedents.
                      </p>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                      <div className="font-extrabold text-slate-900 text-sm md:text-base mb-1">
                        Clause 4: Personal Legal &amp; Penal Liability of Company Directors (Section 9)
                      </div>
                      <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                        Puts managing directors, key managerial personnel (KMP), and HR heads on personal legal notice that non-payment of gratuity constitutes a cognizable statutory offense under Section 9, punishable with imprisonment up to one year and compounding fines.
                      </p>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                      <div className="font-extrabold text-slate-900 text-sm md:text-base mb-1">
                        Clause 5: Notice of Imminent Quasi-Judicial Petition under Form N &amp; Section 8 Attachment
                      </div>
                      <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                        Sets a peremptory 15-day deadline for full settlement, failing which an application under Form N will be filed before the Controlling Authority seeking a Section 8 Recovery Certificate for the District Collector to attach company bank accounts as arrears of land revenue.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 6: CONTROLLING AUTHORITY, SEC 8 & CRIMINAL RECOURSE ─ */}
                <section id="controlling-authority-form-n" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                    6. Quasi-Judicial &amp; Judicial Escalation: Controlling Authority (Form N), Section 8 &amp; BNS Sanctions
                  </h2>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    Serving an advocate-vetted statutory legal notice resolves the vast majority of gratuity disputes out of court because corporate management understands that statutory non-compliance exposes them to administrative enforcement and personal liability. If a recalcitrant employer fails to comply within the 15-day notice period, the law provides robust multi-tiered remedies:
                  </p>

                  <div className="space-y-6">
                    {/* Tier 1: Form N */}
                    <div className="bg-white border-2 border-slate-200 p-6 rounded-2xl shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-sm">
                          1
                        </span>
                        <h3 className="font-black text-slate-900 text-base md:text-lg">
                          Filing Form N Application before the Controlling Authority (Section 7(4))
                        </h3>
                      </div>
                      <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                        Under Rule 10 of the Payment of Gratuity (Central) Rules, 1972, the employee files a formal petition in <strong>Form N</strong> before the designated Controlling Authority (Assistant Labour Commissioner or Regional Labour Commissioner) in the jurisdictional district. The Controlling Authority issues statutory summons to the employer, conducts summary proceedings, directs production of wage records, and delivers a binding judicial determination specifying the exact gratuity amount and accrued 10% statutory interest.
                      </p>
                    </div>

                    {/* Tier 2: Section 8 Recovery Certificate */}
                    <div className="bg-white border-2 border-slate-200 p-6 rounded-2xl shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-sm">
                          2
                        </span>
                        <h3 className="font-black text-slate-900 text-base md:text-lg">
                          Issuance of Section 8 Recovery Certificate to District Collector
                        </h3>
                      </div>
                      <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                        If the employer fails to deposit the adjudicated gratuity within 30 days of the Controlling Authority&apos;s order, Section 8 empowers the Authority to issue a formal <strong>Recovery Certificate</strong> to the District Collector. The Collector executes the certificate as <strong>arrears of land revenue</strong>, issuing bank attachment notices directly to the company&apos;s bankers, freezing operational bank accounts, and recovering the dues along with compound penal interest.
                      </p>
                    </div>

                    {/* Tier 3: Penal Prosecution & Criminal Complaint */}
                    <div className="bg-white border-2 border-slate-200 p-6 rounded-2xl shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-sm">
                          3
                        </span>
                        <h3 className="font-black text-slate-900 text-base md:text-lg">
                          Penal Prosecution under Section 9 &amp; Criminal Complaint under BNS
                        </h3>
                      </div>
                      <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                        Under <strong>Section 9</strong> of the Act, non-payment of statutory gratuity is an offence punishable with imprisonment for a term up to one year and statutory fines. Furthermore, if the company maintained an internal gratuity trust or made accounting deductions from employee cost-to-company (CTC) structures but diverted those reserved funds for operational cash flow, criminal proceedings can be initiated against directors for criminal breach of trust under{' '}
                        <a
                          href="https://www.indiacode.nic.in/handle/123456789/2187"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:text-purple-800 hover:underline font-medium"
                        >
                          Section 316 and Section 318 of the Bharatiya Nyaya Sanhita, 2023 (BNS)
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 7: STEP-BY-STEP RECOVERY ROADMAP ─────────── */}
                <section id="step-by-step-roadmap" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                    7. Step-by-Step Strategic Roadmap from Legal Notice to Bank Account Attachment
                  </h2>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    Executing a disciplined, evidence-backed legal strategy ensures rapid recovery of your withheld gratuity while minimizing procedural delays. Here is the proven 6-step recovery workflow:
                  </p>

                  <div className="space-y-4 my-6">
                    {[
                      {
                        step: 'Step 1: Continuous Service Audit & Gratuity Calculation',
                        desc: 'Verify exact dates of joining and relieving. Calculate completed continuous service, apply the 240-day rule for the terminal year if applicable, and determine statutory gratuity plus 10% interest.',
                      },
                      {
                        step: 'Step 2: Submit Statutory Form I Employee Demand',
                        desc: 'Serve a formal application under Form I to the employer pursuant to Rule 7 of the Payment of Gratuity Rules. This formally triggers the statutory 30-day employer settlement window.',
                      },
                      {
                        step: 'Step 3: Issue Advocate-Drafted Statutory Legal Notice',
                        desc: 'Engage panel advocates to draft a comprehensive statutory demand notice citing Section 4, 7(3A), 8, and 14 of the Payment of Gratuity Act, holding company directors personally liable.',
                      },
                      {
                        step: 'Step 4: Simultaneous Dispatch via Speed Post AD, Registered Email & WhatsApp',
                        desc: 'Serve the notice upon the company’s registered office, managing directors, and HR leadership with India Post Speed Post tracking and Section 63 BSA electronic certificates.',
                      },
                      {
                        step: 'Step 5: File Form N Claim Petition before Controlling Authority',
                        desc: 'If the company fails to disburse payment within the 15-day notice window, file Form N before the Assistant Labour Commissioner to secure a formal judicial determination.',
                      },
                      {
                        step: 'Step 6: Execute Section 8 Bank Account Attachment through Collector',
                        desc: 'Upon failure to pay the determined amount, enforce the Section 8 Recovery Certificate through the District Collector to attach company bank accounts as arrears of land revenue.',
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-[#DC2626]/30 transition-all shadow-sm"
                      >
                        <span className="w-8 h-8 rounded-full bg-slate-900 text-[#DC2626] font-black text-sm flex-shrink-0 flex items-center justify-center border border-slate-700">
                          {idx + 1}
                        </span>
                        <div>
                          <h3 className="font-extrabold text-slate-900 text-sm md:text-base mb-1">
                            {item.step}
                          </h3>
                          <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ── SECTION 8: FAQS ──────────────────────────────────── */}
                <section id="faqs" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
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
                            className="w-full text-left p-5 md:p-6 font-black text-slate-900 text-sm md:text-base flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors"
                          >
                            <span>{faq.question}</span>
                            <span className="w-7 h-7 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center font-black text-xs text-slate-700">
                              {isOpen ? '−' : '+'}
                            </span>
                          </button>
                          {isOpen && (
                            <div className="px-5 pb-5 md:px-6 md:pb-6 text-xs md:text-sm text-slate-650 leading-relaxed border-t border-slate-100 pt-4">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* ── EXTERNAL AUTHORITY CITATIONS ───────────────────────── */}
                <section className="border-t border-slate-200 pt-8 space-y-4">
                  <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider">
                    Statutory Authorities &amp; Legal Citations:
                  </h3>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/1544"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      Payment of Gratuity Act, 1972 (India Code)
                    </a>
                    <a
                      href="https://clc.gov.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      Chief Labour Commissioner (Central) - Controlling Authority
                    </a>
                    <a
                      href="https://labour.gov.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      Ministry of Labour &amp; Employment Official Portal
                    </a>
                    <a
                      href="https://main.sci.gov.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      Supreme Court of India Official Judgments
                    </a>
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/2187"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      Bharatiya Nyaya Sanhita, 2023 (BNS)
                    </a>
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/2191"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      Code of Civil Procedure, 1908 (Order 37)
                    </a>
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/1785"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      Limitation Act, 1963
                    </a>
                  </div>
                </section>

                {/* ── TOPICAL AUTHORITY (INTERNAL INTERLINKING) ──────────── */}
                <section className="border-t border-slate-200 pt-8 space-y-6">
                  <h2 className="text-xl md:text-2xl font-black text-slate-900">
                    More Employment &amp; Salary Recovery Guides
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        title: 'Legal Notice for Full and Final Settlement Delay',
                        href: '/legal-notice-for-full-and-final-settlement-delay',
                      },
                      {
                        title: 'How to Recover Full and Final Settlement from Employer',
                        href: '/how-to-recover-full-and-final-settlement-from-employer',
                      },
                      {
                        title: 'Legal Notice for Salary Deducted During Notice Period',
                        href: '/send-a-legal-notice/salary-deducted-during-notice-period-legal-action-india',
                      },
                      {
                        title: 'Legal Notice for Leave Encashment Not Paid by Employer',
                        href: '/send-a-legal-notice/leave-encashment-not-paid-by-employer',
                      },
                      {
                        title: 'Legal Notice to Employer for Not Paying PF (Provident Fund)',
                        href: '/send-a-legal-notice/employer-not-paying-pf-provident-fund',
                      },
                      {
                        title: 'Legal Notice to Employer for Deducting Salary Without Notice',
                        href: '/send-a-legal-notice/employer-deduct-salary-without-notice-legal-action',
                      },
                      {
                        title: 'Legal Notice for Delayed Salary from Startup Company',
                        href: '/send-a-legal-notice/delayed-salary-startup-company-india',
                      },
                      {
                        title: 'Legal Notice for Wrongful Termination & Unpaid Notice Pay',
                        href: '/legal-notice-wrongful-termination-unpaid-notice-period-salary',
                      },
                      {
                        title: 'Legal Steps to Recover Unpaid Salary from Employer in India',
                        href: '/what-are-the-legal-steps-to-recover-unpaid-salary-from-an-employer-in-india',
                      },
                      {
                        title: 'Send a Legal Notice Online in India',
                        href: '/send-a-legal-notice',
                      },
                    ].map((link, idx) => (
                      <Link
                        key={idx}
                        href={link.href}
                        className="group flex items-center p-3.5 rounded-xl border border-slate-100 hover:border-[#DC2626]/30 hover:bg-slate-50 transition-all duration-150"
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
                    platform, connecting corporate employees, managers, professionals, and gig workers with seasoned panel advocates for rapid, advocate-vetted statutory demand notices
                    at transparent flat fees. With ₹100 Crore+ recovered and 10,000+ cases resolved across India,
                    Legal Recovery delivers verified legal impact without the delays and unpredictability of
                    traditional law firms.
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
                  Company Withholding Your Earned Gratuity?
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  Send an advocate-vetted statutory notice today. Over 82% of companies disburse withheld gratuity and FnF dues within 15 days of notice service.
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
                  <span className="text-slate-400 text-xs">/5 (418 reviews)</span>
                </div>

                {/* Review card — must match JSON-LD Product > Review word-for-word */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#DC2626]/10 flex items-center justify-center font-black text-[#DC2626] text-xs">
                      VR
                    </div>
                    <div>
                      <p className="font-extrabold text-slate-900 text-xs">Vikramaditya Rao</p>
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
                  { stat: '82%', label: 'Companies settle gratuity dues within 15 days of notice' },
                  { stat: '10% p.a.', label: 'Mandatory statutory interest claimed under Section 7(3A)' },
                  { stat: 'Same Day', label: 'Advocate notice drafted and dispatched' },
                  { stat: 'Flat Fee', label: 'Transparent pricing with no hidden commissions' },
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
