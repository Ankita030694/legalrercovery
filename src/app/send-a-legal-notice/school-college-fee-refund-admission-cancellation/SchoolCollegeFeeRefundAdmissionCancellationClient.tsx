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
    question: 'Can a school, college, or private university refuse to refund fees after admission cancellation in India?',
    answer:
      'No, educational institutions in India cannot legally refuse to refund tuition, admission, or hostel fees when a student cancels admission or withdraws their seat. Under mandatory University Grants Commission (UGC) Fee Refund Guidelines and All India Council for Technical Education (AICTE) norms, institutions must process fee refunds on a tiered percentage basis, refunding 100% of the aggregate fee with a maximum processing deduction of ₹1,000 if cancellation occurs before the notified commencement date. Arbitrary "non-refundable fee" clauses in admission brochures are declared null and void as unfair trade practices under Section 2(47) of the Consumer Protection Act, 2019.',
  },
  {
    question: 'What is the statutory timeline and percentage deduction for fee refund under UGC and AICTE guidelines?',
    answer:
      'Under the University Grants Commission Fee Refund Policy, students cancelling admission 15 days or more prior to the formally notified last date of admission are entitled to a 100% refund after deducting a maximum processing charge of ₹1,000. For cancellations made less than 15 days before the last date, institutions must refund 90%; for withdrawals within 15 days after the last date, an 80% refund is mandated; and for cancellations between 16 and 30 days after the last date, a 50% refund is legally enforceable. If the vacated seat is subsequently filled by another waitlisted candidate before the admission closure cutoff, the institution cannot retain any unearned semester tuition fees.',
  },
  {
    question: 'Can an educational institution legally hold original mark sheets, transfer certificates, or migration documents as collateral?',
    answer:
      'Institutions are strictly prohibited from retaining original academic certificates, school leaving certificates, migration certificates, or degree parchments as leverage to coerce fee payments or deter admission cancellation. Both the University Grants Commission (UGC) and Ministry of Education circulars mandate that schools and colleges may only physically inspect original documents at the time of admission and must immediately return them to the candidate. Wrongful withholding of original student credentials constitutes an illegal act and criminal breach of trust under Section 316 of the Bharatiya Nyaya Sanhita, 2023.',
  },
  {
    question: 'What legal action can parents take if a private school or coaching institute refuses to refund advance annual fees?',
    answer:
      'Parents can serve an advocate-vetted statutory legal notice demanding a full refund of unavailed annual tuition, bus charges, and activity fees within a strict 15-day compliance window. If the private school or coaching institute fails to comply, parents can file a consumer complaint before the District Consumer Disputes Redressal Commission (DCDRC) under Section 35 of the Consumer Protection Act, 2019 for deficiency in service, unfair trade practices, and mental agony. In cases involving private coaching institutes charging multi-year advance fees, the National Consumer Disputes Redressal Commission (NCDRC) routinely orders immediate pro-rata refunds alongside punitive damages and litigation costs.',
  },
  {
    question: 'What is the limitation period for serving a legal notice and filing a consumer complaint for school or college fee refund?',
    answer:
      'Under Section 69 of the Consumer Protection Act, 2019, the statutory limitation period for serving a legal demand notice and instituting a consumer complaint for non-refund of educational fees is exactly two years from the date on which the cause of action arose. The cause of action crystallizes on the date the parent or student formally submitted the admission cancellation or seat withdrawal application to the institution. Serving a formal legal notice promptly interrupts arbitrary administrative delays, documents formal non-compliance, and establishes irrefutable evidence of refusal before the Consumer Commission.',
  },
  {
    question: 'Does the Supreme Court of India allow educational institutions to charge advance fees for the entire multi-year course?',
    answer:
      'The Supreme Court of India in the landmark eleven-judge Constitution Bench judgment in TMA Pai Foundation and subsequently in Islamic Academy of Education v. State of Karnataka (2003) 6 SCC 697 strictly prohibited educational institutions from collecting fees in advance for the entire multi-year duration of a course. Institutions are legally entitled to collect fees only for the current semester or ongoing academic year. Charging upfront fees for future uncommenced semesters or forfeiting full course fees upon early withdrawal constitutes unlawful commercialization and profiteering punishable under Indian consumer law.',
  },
];

/* ─── JSON-LD SCHEMA (@graph) ──────────────────────────────────────────── */
const pageUrl =
  'https://legalrecovery.in/send-a-legal-notice/school-college-fee-refund-admission-cancellation';
const ogImage =
  'https://legalrecovery.in/images/og/school-college-fee-refund-admission-cancellation.jpg';

const reviewBodyText =
  'My son cancelled his B.Tech admission at a prominent private engineering college in Pune three weeks before classes started after securing a seat in an NIT. The college administration flatly refused to refund the ₹3.25 Lakhs advance tuition and hostel fee, pointing to a "no refund under any circumstance" clause in their admission prospectus. Legal Recovery drafted and dispatched a high-impact advocate legal notice citing UGC Fee Refund Regulations, AICTE norms, and Section 2(47) of the Consumer Protection Act 2019. Within 10 days of notice delivery, the college registrar reached out, processed the 100% refund deducting only ₹1,000 processing fee, and returned his original migration certificate. Highly effective legal service for students and parents.';

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
        'Legal Notice to School or College for Fee Refund on Admission Cancellation | Draft & Send Notice India',
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
      name: 'Legal Notice to School or College Fee Refund Admission Cancellation | Legal Recovery India',
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
          name: 'School / College Fee Refund Notice',
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
      name: 'Steps to Send a Legal Notice to School or College for Fee Refund on Admission Cancellation',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Collate admission receipts, bank transfer proofs, provisional allotment letters, and written cancellation timestamps',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Map the cancellation date against UGC / AICTE statutory refund percentage slabs and notified academic cutoff deadlines',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Quantify exact refundable tuition fees, security caution deposits, hostel dues, statutory interest at 18% p.a., and damages',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Draft an advocate-vetted statutory demand notice citing UGC Refund Guidelines, AICTE Handbooks, Consumer Protection Act 2019, and Supreme Court rulings',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Serve the statutory demand notice via Registered Post AD, Speed Post, and tracked institutional email to the Principal, Registrar, and Management Board',
        },
      ],
    },

    /* 7. Product + AggregateRating + Review (matches sidebar UI word-for-word) */
    {
      '@type': 'Product',
      name: 'Legal Notice to School or College for Fee Refund on Admission Cancellation',
      description:
        'Advocate-drafted statutory demand notice service for students and parents to recover unrefunded tuition fees, capitation deposits, and hostel charges from private schools, universities, and colleges across India.',
      brand: {
        '@type': 'Organization',
        name: 'Legal Recovery',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '342',
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
            name: 'Dr. Arvind Deshmukh',
          },
          reviewBody: reviewBodyText,
        },
      ],
    },
  ],
};

/* ─── COMPONENT ─────────────────────────────────────────────────────────── */
export default function SchoolCollegeFeeRefundAdmissionCancellationClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: 'statutory-framework', title: '1. Regulatory Mandates: UGC, AICTE & School Fee Refund Laws' },
    { id: 'actionable-grounds', title: '2. Actionable Grounds: Unlawful Forfeiture & Unfair Trade Practices' },
    { id: 'refund-slabs', title: '3. Statutory Refund Percentage Slabs & Cutoff Timelines' },
    { id: 'evidentiary-checklist', title: '4. Pre-Notice Evidentiary Checklist for Parents & Students' },
    { id: 'essential-clauses', title: '5. Crucial Clauses in a Statutory Educational Fee Refund Notice' },
    { id: 'strategic-roadmap', title: '6. Multi-Tier Escalation Roadmap: 15-Day Notice to Consumer Commission' },
    { id: 'faqs', title: '7. Frequently Asked Questions' },
  ];

  const breadcrumbItems = [
    { label: 'Send a Legal Notice', href: '/send-a-legal-notice' },
    {
      label: 'School / College Fee Refund Notice',
      href: '/send-a-legal-notice/school-college-fee-refund-admission-cancellation',
    },
  ];

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const shareUrl = encodeURIComponent(pageUrl);
  const shareText = encodeURIComponent(
    'School or college refusing to refund fees after admission cancellation? Send an advocate-drafted statutory legal notice under UGC Guidelines & Consumer Protection Act! #FeeRefund #LegalNotice #StudentRights'
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
              EDUCATION CONSUMER PROTECTION &amp; FEE RECOVERY
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Legal Notice to School or College for{' '}
              <span className="text-[#DC2626]">Fee Refund on Admission Cancellation</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Recover unrefunded tuition fees, capitation deposits, annual developmental charges, and hostel fees from schools, colleges, and deemed universities under UGC Guidelines, AICTE Norms, and Consumer Protection Act 2019.
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
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${encodeURIComponent('Legal Notice to School or College Fee Refund Admission Cancellation | Legal Recovery India')}`}
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
                    A parent or student can serve an advocate-vetted statutory legal notice to any school, college, or private university demanding a full refund of tuition, capitation, admission, hostel, or caution fees upon admission cancellation under{' '}
                    <a
                      href="https://www.ugc.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      University Grants Commission (UGC) Fee Refund Norms
                    </a>
                    ,{' '}
                    <a
                      href="https://www.aicte-india.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      AICTE Approval Process Handbook
                    </a>
                    , and{' '}
                    <a
                      href="https://consumeraffairs.nic.in/acts-and-rules/consumer-protection-act-2019"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      Section 2(47) of the Consumer Protection Act, 2019
                    </a>
                    . Educational institutions in India are legally prohibited from enforcing non-refundable clauses or retaining unearned fees for unavailed academic semesters when a seat is surrendered before or near the commencement cutoff. If the institution fails to disburse the refund within 15 days of receiving the legal notice, the claimant can initiate summary recovery before the District Consumer Disputes Redressal Commission (DCDRC), claim 18% per annum statutory interest, and report the management to regulatory bodies for de-recognition and punitive penalties.
                  </p>
                </div>

                {/* ── IN-ARTICLE INFOGRAPHIC ────────────────────────────── */}
                <figure className="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900">
                  <img
                    src="/images/og/school-college-fee-refund-admission-cancellation.jpg"
                    alt="Infographic: Step-by-Step Legal Process to Recover School or College Fees on Admission Cancellation in India"
                    className="w-full h-auto object-cover max-h-[500px]"
                    loading="lazy"
                  />
                  <figcaption className="p-3.5 text-center text-xs text-slate-650 font-semibold bg-white border-t border-slate-100 flex items-center justify-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#DC2626]" />
                    <span>Figure 1: Comprehensive Statutory Protocol for School &amp; College Admission Cancellation Fee Refund under UGC, AICTE &amp; Consumer Protection Laws.</span>
                  </figcaption>
                </figure>

                {/* ── SECTION 1: REGULATORY MANDATES ────────────────────── */}
                <section id="statutory-framework" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. Regulatory Mandates: UGC, AICTE &amp; School Fee Refund Laws
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Every academic year, thousands of students across India secure multiple admission offers or change career streams, necessitating the cancellation of provisional admissions at schools, coaching academies, engineering colleges, medical universities, and private institutions. In response, many institutions unlawfully withhold lakhs of rupees in advance tuition, development charges, and security deposits under the guise of internal &quot;no-refund&quot; policies. Under Indian jurisprudence, these unilateral forfeiture clauses are legally untenable, unenforceable, and constitute actionable unfair trade practices.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Statutory regulatory bodies and the apex judiciary have established rigid, binding guidelines governing educational fee refunds in India:
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                      <ul className="space-y-3 text-xs sm:text-sm text-slate-700 list-disc list-inside">
                        <li>
                          <strong>UGC Fee Refund &amp; Document Retention Regulations:</strong> The{' '}
                          <a
                            href="https://www.ugc.gov.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-600 hover:text-purple-800 hover:underline"
                          >
                            University Grants Commission (UGC)
                          </a>{' '}
                          mandates that all Higher Educational Institutions (HEIs), deemed universities, and affiliated colleges must refund 100% of fees charged (with a maximum processing deduction of ₹1,000) if the candidate withdraws 15 days or more prior to the formally notified last date of admission. UGC explicitly prohibits universities from retaining original academic credentials.
                        </li>
                        <li>
                          <strong>AICTE Approval Process Handbook (APH) Norms:</strong> The{' '}
                          <a
                            href="https://www.aicte-india.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-600 hover:text-purple-800 hover:underline"
                          >
                            All India Council for Technical Education (AICTE)
                          </a>{' '}
                          stipulates that technical and management institutes must refund complete tuition and security deposits after deducting a maximum processing fee of ₹1,000 if the seat vacated by the student is filled by another candidate before the cutoff date.
                        </li>
                        <li>
                          <strong>Consumer Protection Act, 2019 (CPA):</strong> Under{' '}
                          <a
                            href="https://consumeraffairs.nic.in/acts-and-rules/consumer-protection-act-2019"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-600 hover:text-purple-800 hover:underline"
                          >
                            Section 2(47) and Section 2(11) of the CPA 2019
                          </a>
                          , educational institutions providing services for consideration fall squarely within the ambit of consumer law. Refusing refunds for unavailed educational services constitutes both an &quot;unfair trade practice&quot; and &quot;deficiency in service&quot;.
                        </li>
                        <li>
                          <strong>Right to Education Act, 2009 (RTE Sec 13):</strong> Prohibits schools from receiving capitation fees or subjecting children and parents to screening procedures, rendering any non-refundable donation or capitation levy completely illegal under{' '}
                          <a
                            href="https://www.indiacode.nic.in/handle/123456789/2086"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-600 hover:text-purple-800 hover:underline"
                          >
                            Section 13 of the RTE Act, 2009
                          </a>
                          .
                        </li>
                      </ul>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed">
                      In the landmark Supreme Court ruling in{' '}
                      <a
                        href="https://main.sci.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Islamic Academy of Education v. State of Karnataka (2003) 6 SCC 697
                      </a>
                      , the apex court ruled that educational institutions cannot charge advance fees for the entire multi-year course duration and cannot retain fees for unavailed semesters if a student leaves mid-way. Retaining fees without delivering academic instruction amounts to unjust enrichment and profiteering under Indian contract and consumer laws.
                    </p>
                  </div>
                </section>

                {/* ── SECTION 2: ACTIONABLE GROUNDS ─────────────────────── */}
                <section id="actionable-grounds" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. Actionable Grounds: Unlawful Forfeiture &amp; Unfair Trade Practices
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      An advocate-drafted statutory demand notice must clearly articulate the specific statutory violations and administrative malpractices committed by the school, college, or coaching institute. Common actionable grounds recognized by consumer courts include:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                      {[
                        {
                          title: 'Enforcement of Void "No-Refund" Clauses in Admission Prospectus',
                          desc: 'Institutions relying on boilerplate prospectus disclaimers claiming fees once paid will not be refunded under any circumstances. National Consumer Commission (NCDRC) has repeatedly struck down such clauses as unconscionable and void.',
                        },
                        {
                          title: 'Forfeiture of Full-Course Fees for Early Admission Withdrawal',
                          desc: 'Withholding complete annual tuition, laboratory, library, and development fees when the student withdrew seat weeks before the academic session commenced or during early counseling rounds.',
                        },
                        {
                          title: 'Hostage-Taking of Original Mark Sheets & Migration Certificates',
                          desc: 'Illegally holding class 10th/12th mark sheets, transfer certificates (TC), or migration records to coerce students into forfeiting fee refunds or paying remaining unavailed semester installments.',
                        },
                        {
                          title: 'Unlawful Retention of Caution Money & Security Deposits',
                          desc: 'Refusing to release refundable library, laboratory, hostel, and mess caution deposits long after the student has formally vacated the seat and obtained no-dues clearance.',
                        },
                        {
                          title: 'Unjust Enrichment on Filled / Re-Allotted Vacated Seats',
                          desc: 'Collecting full tuition from the outgoing candidate while simultaneously admitting a waitlisted candidate against the same vacated seat, generating double revenue on a single student desk.',
                        },
                        {
                          title: 'Misleading Affiliation Claims & Substandard Infrastructure',
                          desc: 'Inducing admission by misrepresenting UGC/AICTE approvals, NAAC accreditations, or faculty qualifications, forcing the student to cancel admission due to institutional fraud.',
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

                {/* ── SECTION 3: REFUND SLABS & PERCENTAGES ──────────────── */}
                <section id="refund-slabs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Statutory Refund Percentage Slabs &amp; Cutoff Timelines
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The University Grants Commission (UGC) and All India Council for Technical Education (AICTE) have laid down standardized 5-tier fee refund percentage slabs that bind all universities, deemed institutions, autonomous colleges, and polytechnics across India:
                    </p>

                    <div className="overflow-x-auto my-6">
                      <table className="w-full text-left border-collapse text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-slate-900 text-white">
                            <th className="p-3 font-extrabold rounded-tl-xl">Tier / Timeline of Notice Submission</th>
                            <th className="p-3 font-extrabold">Statutory Refund %</th>
                            <th className="p-3 font-extrabold">Max Deduction Allowed</th>
                            <th className="p-3 font-extrabold rounded-tr-xl">Applicable Statutory Regulatory Authority</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 bg-white border border-slate-200">
                          <tr>
                            <td className="p-3 font-bold text-slate-900">
                              15 days or more before formally notified last date of admission
                            </td>
                            <td className="p-3 font-black text-emerald-600">100% Refund</td>
                            <td className="p-3 font-semibold text-slate-600">Max ₹1,000 processing fee</td>
                            <td className="p-3 text-slate-650">UGC Fee Refund Norms &amp; AICTE APH</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">
                              Less than 15 days before formally notified last date of admission
                            </td>
                            <td className="p-3 font-black text-emerald-600">90% Refund</td>
                            <td className="p-3 font-semibold text-slate-600">10% of aggregate fees</td>
                            <td className="p-3 text-slate-650">UGC Fee Refund Policy</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">
                              15 days or less after formally notified last date of admission
                            </td>
                            <td className="p-3 font-black text-blue-600">80% Refund</td>
                            <td className="p-3 font-semibold text-slate-600">20% of aggregate fees</td>
                            <td className="p-3 text-slate-650">UGC Standard Operating Guidelines</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">
                              Between 16 and 30 days after formally notified last date of admission
                            </td>
                            <td className="p-3 font-black text-amber-600">50% Refund</td>
                            <td className="p-3 font-semibold text-slate-600">50% of aggregate fees</td>
                            <td className="p-3 text-slate-650">UGC Regulatory Notification</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">
                              Vacated seat filled by waitlisted candidate before admission cutoff
                            </td>
                            <td className="p-3 font-black text-emerald-600">100% (Less ₹1,000)</td>
                            <td className="p-3 font-semibold text-slate-600">Max ₹1,000 processing fee</td>
                            <td className="p-3 text-slate-650">AICTE Handbook &amp; NCDRC Case Law</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">
                              Caution Money / Security Deposits (Library, Lab, Hostel)
                            </td>
                            <td className="p-3 font-black text-emerald-600">100% Full Refund</td>
                            <td className="p-3 font-semibold text-slate-600">Zero deductions allowed</td>
                            <td className="p-3 text-slate-650">Consumer Protection Act 2019</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                      <h4 className="font-extrabold text-slate-900 text-sm">
                        Special Protection for Private Coaching Institutes &amp; Ed-Tech Platforms
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        Under the landmark NCDRC ruling in{' '}
                        <a
                          href="https://ncdrc.nic.in"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:text-purple-800 hover:underline"
                        >
                          FIITJEE Ltd. v. Dr. Minathi Rath (2012)
                        </a>{' '}
                        and Ministry of Consumer Affairs guidelines for coaching centres, coaching institutes cannot collect lump-sum advance fees for two, three, or four-year foundation programs. If a student leaves coaching mid-stream due to illness, relocation, or dissatisfaction, the coaching institute is legally bound to refund the unexpired term fees on a pro-rata basis within 10 days.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 4: EVIDENTIARY CHECKLIST ──────────────────── */}
                <section id="evidentiary-checklist" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Pre-Notice Evidentiary Checklist for Parents &amp; Students
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To ensure maximum legal potency and eliminate bureaucratic excuses, your statutory demand notice must be backed by comprehensive documentary evidence establishing seat allocation, fee transfer, and timely cancellation notification:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                      {[
                        { title: 'Admission & Fee Payment Records', items: ['Provisional Seat Allotment Letter', 'Official Fee Receipts / Invoices Issued', 'Bank Account Statement / NEFT / UPI UTR'] },
                        { title: 'Cancellation Communication Trail', items: ['Formal Written Seat Withdrawal Letter', 'Sent Email with Delivery Timestamp', 'Portal Cancellation Acknowledgement Slip'] },
                        { title: 'Prospectus & Admission Schedule', items: ['Institution Information Brochure / Prospectus', 'Official Academic Calendar & Cutoff Dates', 'Document Acknowledgment Receipt'] },
                        { title: 'Institutional Non-Compliance Proof', items: ['Rejection Emails from Accounts/Registrar', 'Written Refusal Citing "No Refund Policy"', 'Speed Post Tracking of Prior Follow-up'] },
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
                        <span className="text-[#DC2626]">🎓</span> Serving Notice on Key Management &amp; Trust Trustees
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        To guarantee legal validity in court and regulatory accountability, the statutory notice must be addressed jointly to the Principal/Dean, Registrar, Chairman of the Governing Body, and the registered Educational Trust/Society managing the institution. Legal Recovery automatically verifies registered society records, university affiliations, and official addresses to ensure flawless service across all key decision-makers.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 5: ESSENTIAL CLAUSES ──────────────────────── */}
                <section id="essential-clauses" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Crucial Clauses in a Statutory Educational Fee Refund Notice
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A formidable, advocate-vetted statutory demand notice must be structured with precision, setting out chronological facts, statutory provisions, and non-negotiable legal consequences:
                    </p>

                    <div className="space-y-4">
                      {[
                        {
                          clause: 'Clause 1',
                          title: 'Identity of Student, Enrolled Course & Fee Remittance Specifics',
                          desc: 'Detail the candidate’s full name, roll number/application ID, course applied for, total fee demanded, date of payment, mode of remittance (UTR/cheque number), and official receipt references.',
                        },
                        {
                          clause: 'Clause 2',
                          title: 'Date of Admission Cancellation & Timely Seat Relinquishment',
                          desc: 'Establish the exact date and mode of admission withdrawal, demonstrating compliance with UGC/AICTE timeline slabs prior to or near the academic cutoff date, allowing the institution to re-allocate the seat.',
                        },
                        {
                          clause: 'Clause 3',
                          title: 'Statutory Recital of UGC Norms, AICTE Handbook & CPA 2019',
                          desc: 'Explicitly cite binding UGC Fee Refund Notifications, AICTE Approval Process Handbook regulations, Section 2(47) of the Consumer Protection Act 2019, and apex court precedents prohibiting fee forfeiture.',
                        },
                        {
                          clause: 'Clause 4',
                          title: 'Demand for Release of Original Academic Credentials & Deposits',
                          desc: 'Strictly mandate the immediate unconditional return of all original mark sheets, transfer certificates, migration records, caution deposits, and hostel fees without arbitrary administrative deductions.',
                        },
                        {
                          clause: 'Clause 5',
                          title: 'Quantified Financial Claim with 18% p.a. Interest & Damages',
                          desc: 'Set out the exact principal refund due, commercial interest at 18% per annum from the date of cancellation application, compensation for mental harassment, and legal drafting costs.',
                        },
                        {
                          clause: 'Clause 6',
                          title: '15-Day Peremptory Compliance Window & Multi-Forum Warning',
                          desc: 'Give the management 15 days to credit the refunded funds to the parent’s bank account, failing which immediate consumer litigation before DCDRC, UGC portal complaints, and BNS criminal proceedings will commence.',
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
                    6. Multi-Tier Escalation Roadmap: 15-Day Notice to Consumer Commission
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Serving an advocate legal notice through an established legal platform resolves over 78% of school, college, and coaching fee refund disputes within 15 days. When institutions fail to comply, Legal Recovery executes a swift multi-pronged escalation strategy:
                    </p>

                    <div className="space-y-4">
                      {[
                        {
                          step: 'Stage 1',
                          title: 'Advocate Statutory Demand Notice Served on Official Letterhead',
                          desc: 'The notice is prepared by specialized education consumer advocates, signed under Section 5 of the IT Act 2000, and served simultaneously via India Post Registered Post AD, Speed Post, and tracked official email to the Principal and Trust Board.',
                        },
                        {
                          step: 'Stage 2',
                          title: 'UGC e-Samadhan & AICTE Grievance Portal Escalation',
                          desc: 'If the college delays refund, an official statutory complaint is lodged on the UGC e-Samadhan portal and AICTE Centralized Grievance Redressal System, triggering regulatory inquiry and potential loss of funding/approval for the institution.',
                        },
                        {
                          step: 'Stage 3',
                          title: 'Consumer Complaint Filing before DCDRC (e-Daakhil Portal)',
                          desc: 'Upon expiry of the 15-day notice window, a formal consumer complaint is filed before the District Consumer Disputes Redressal Commission claiming full refund, 18% p.a. interest, ₹1 Lakh+ compensation for harassment, and litigation costs.',
                        },
                        {
                          step: 'Stage 4',
                          title: 'Criminal Complaint for Document Hostage & Unlawful Detention',
                          desc: 'In instances where the institution refuses to surrender original mark sheets or TC, a formal police complaint and Magistrate petition under Section 316 of the Bharatiya Nyaya Sanhita, 2023 for criminal breach of trust are initiated.',
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
                        href="https://www.ugc.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        University Grants Commission (UGC) — Notification on Fee Refund Policy and Document Retention Norms, ugc.gov.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.aicte-india.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        All India Council for Technical Education (AICTE) — Approval Process Handbook (APH) Fee Refund Guidelines, aicte-india.org
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://consumeraffairs.nic.in/acts-and-rules/consumer-protection-act-2019"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Consumer Protection Act, 2019 — Section 2(47) (Unfair Trade Practice) &amp; Section 35 (Complaint Filing), consumeraffairs.nic.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://ncdrc.nic.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        National Consumer Disputes Redressal Commission (NCDRC) — FIITJEE Ltd. v. Dr. Minathi Rath &amp; Educational Refund Precedents, ncdrc.nic.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://main.sci.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Supreme Court of India — Islamic Academy of Education v. State of Karnataka (2003) 6 SCC 697, main.sci.gov.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.indiacode.nic.in/handle/123456789/2086"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Right to Education Act, 2009 — Section 13 (Prohibition of Capitation Fee &amp; Screening), indiacode.nic.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.indiacode.nic.in/handle/123456789/2187"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Indian Contract Act, 1872 — Section 73 (Breach of Contract) &amp; Section 74 (Unreasonable Penalties), indiacode.nic.in
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
                        title: 'Fee Refund Legal Notice to Coaching Institute & College',
                        href: '/legal-notice-to-coaching-institute-college-fee-refund',
                      },
                      {
                        title: 'How to File a Consumer Complaint in India Complete Guide',
                        href: '/how-to-file-consumer-complaint-india',
                      },
                      {
                        title: 'Legal Notice for Recovery of Money in India',
                        href: '/legal-notice-for-recovery-of-money',
                      },
                      {
                        title: 'Legal Notice to Company Refusing Refund',
                        href: '/send-a-legal-notice/company-refusing-refund',
                      },
                      {
                        title: 'Legal Notice for Unfair Trade Practice Complaint',
                        href: '/send-a-legal-notice/unfair-trade-practice-complaint',
                      },
                      {
                        title: 'Legal Notice to Gym for Subscription Fee Refund',
                        href: '/legal-notice-to-gym-subscription-fee-refund',
                      },
                      {
                        title: 'Legal Notice to Retailer for Wrong or Damaged Product Delivery',
                        href: '/legal-notice-to-retailer-wrong-damaged-product-delivery',
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
                    platform, connecting students, parents, consumers, and professionals with seasoned
                    panel advocates for rapid, advocate-vetted statutory demand notices at transparent flat
                    fees. With ₹100 Crore+ recovered and 10,000+ cases resolved across India, Legal
                    Recovery delivers verified legal impact without the delays and unpredictability of
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
                  School or College Withholding Your Fee?
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  Send an advocate-vetted statutory notice today. 78% of educational institutions refund fees
                  and return original documents within 15 days of receiving formal notice from Legal Recovery.
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
                  <span className="text-slate-400 text-xs">/5 (342 reviews)</span>
                </div>

                {/* Review card — must match JSON-LD Product > Review word-for-word */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#DC2626]/10 flex items-center justify-center font-black text-[#DC2626] text-xs">
                      AD
                    </div>
                    <div>
                      <p className="font-extrabold text-slate-900 text-xs">Dr. Arvind Deshmukh</p>
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
                  { stat: '78%', label: 'Institutions settle and refund fees before consumer court filing' },
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
