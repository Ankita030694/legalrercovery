'use client';

import { useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import { PaymentModal } from '@/components/PaymentModal';

/* ─── FAQ DATA (Exactly 1 paragraph, 2-3 self-contained sentences each) ──── */
const faqs = [
  {
    question: 'Can a gym, yoga studio, or fitness club legally enforce a "No Refund Under Any Circumstances" policy in India?',
    answer:
      'No, a blanket "No Refund" or "Non-Transferable" clause printed on gym receipts or membership forms is legally unenforceable and void ab initio under Section 2(46) and Section 2(47) of the Consumer Protection Act, 2019. The National Consumer Disputes Redressal Commission (NCDRC) and Central Consumer Protection Authority (CCPA) have repeatedly ruled that one-sided non-negotiable clauses imposing disproportionate financial forfeiture on consumers constitute an "Unfair Contract" and "Unfair Trade Practice". When a fitness club fails to deliver promised services, closes down facilities, changes trainers, or when a member suffers a medical disability, the consumer is legally entitled to a full prorated refund of all unutilized subscription fees along with statutory interest.',
  },
  {
    question: 'What legal options exist if a gym or fitness center abruptly shuts down, relocates, or undergoes indefinite renovation?',
    answer:
      'If a gym, yoga studio, or sports club closes its premises, relocates beyond a reasonable commuting distance, or suspends key facilities without providing equivalent alternative access, the service provider commits a fundamental breach of contract under Section 73 and triggers the Doctrine of Frustration under Section 56 of the Indian Contract Act, 1872. Aggrieved members should immediately issue an advocate-vetted statutory legal notice demanding a 100% prorated refund of advance fees within 15 days of receipt. If the management fails to comply, consumers can initiate summary proceedings before the District Consumer Disputes Redressal Commission (DCDRC) via the e-Daakhil portal or file a formal complaint with the Central Consumer Protection Authority (CCPA) for predatory trade practices.',
  },
  {
    question: 'Can I legally cancel my annual gym membership and claim a prorated refund on medical grounds or job relocation?',
    answer:
      'Yes, consumers who suffer severe medical conditions, orthopedic injuries, spinal issues, or unexpected employment relocation to another city can terminate their fitness club subscription and demand a prorated refund backed by valid documentary proof. Under Section 56 of the Indian Contract Act, 1872, unforeseen physical incapacity or geographical impossibility discharges the consumer from ongoing contractual obligations and prohibits the fitness business from unjust enrichment. State Consumer Commissions across India have consistently held that retaining advance fees for unutilized membership months after receiving medical certification or relocation proof amounts to deficiency in service under Section 2(11) of the Consumer Protection Act, 2019.',
  },
  {
    question: 'What constitutes "deficiency in service" by a fitness club or yoga studio under the Consumer Protection Act, 2019?',
    answer:
      'Deficiency in service under Section 2(11) of the Consumer Protection Act, 2019 encompasses broken or unmaintained exercise equipment, abrupt departure of dedicated personal trainers without qualified replacements, overcrowding exceeding safe studio capacity, unhygienic washrooms or steam rooms, non-functional air conditioning, unilateral cancellation of group class schedules, and false promises of customized diet coaching. When a fitness center fails to maintain the operational standards, trainer certifications, or luxury amenities advertised during member onboarding, the consumer is legally entitled to rescission of the contract. Serving a formal legal notice establishes statutory proof of deficiency and forms the evidentiary foundation for punitive damages before consumer tribunals.',
  },
  {
    question: 'How much time does a gym or fitness chain have to respond to a statutory legal demand notice in India?',
    answer:
      'A statutory legal notice issued by an advocate provides the defaulting gym management a mandatory 15-day compliance window from the verified date of delivery via India Post Registered Post AD, Speed Post, and tracked digital transmission. During this period, the fitness establishment must either release the full prorated refund amount or furnish a formal legal reply explaining their position. Failure to respond or rectify the grievance within the stipulated 15-day timeline empowers the consumer to approach the District Consumer Forum (DCDRC) or file an action under the Bharatiya Nyaya Sanhita, 2023 for cheating and criminal breach of trust.',
  },
  {
    question: 'Can a gym continue recurring auto-debit deductions via credit card or e-mandate after a membership cancellation request?',
    answer:
      'A gym or fitness app has no legal authority to execute recurring auto-debit deductions via credit cards, debit cards, or NPCI e-mandates once a member has formally communicated their cancellation in writing. Under Reserve Bank of India (RBI) circulars on recurring e-mandates and Section 2(47) of the Consumer Protection Act, 2019, unauthorized post-cancellation debits constitute illegal extraction of consumer funds and an actionable unfair trade practice. Aggrieved consumers should instruct their issuing bank to cancel the mandate immediately, serve a statutory legal notice demanding full restitution of unauthorized debits with 18% annual interest, and lodge a banking ombudsman complaint if deductions persist.',
  },
];

/* ─── JSON-LD SCHEMA (@graph) ──────────────────────────────────────────── */
const pageUrl =
  'https://legalrecovery.in/send-a-legal-notice/gym-yoga-club-membership-fee-refund';
const ogImage =
  'https://legalrecovery.in/images/og/gym-yoga-club-membership-fee-refund.jpg';

const reviewBodyText =
  'I paid ₹52,000 for an annual premium all-access gym, yoga, and personal training package at a luxury fitness center in Indiranagar, Bengaluru. Within eight weeks, my assigned personal trainer resigned without any replacement, the steam room and pool were shut for indefinite repairs, and morning yoga batches were arbitrarily cancelled. When I requested a prorated refund for the remaining ten months, the center manager refused, pointing to their "Strict Non-Refundable Fee Policy" on the back of the receipt. Legal Recovery drafted and served a formidable advocate-vetted statutory legal notice citing Section 2(46) Unfair Contracts under the Consumer Protection Act 2019, CCPA guidelines, and Section 56 of the Indian Contract Act. Within 10 days of notice delivery, the club headquarters contacted me, apologized in writing, and credited a full prorated refund of ₹43,300 straight to my bank account. Exemplary legal service for consumer rights!';

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
        'Legal Notice to Gym, Yoga & Fitness Club for Membership Fee Refund | Legal Recovery India',
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
      name: 'Legal Notice to Gym, Yoga & Fitness Club for Membership Fee Refund | Draft Notice India',
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
          name: 'Gym & Yoga Club Membership Fee Refund Notice',
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
      name: 'Steps to Send a Legal Notice to Gym or Yoga Club for Membership Fee Refund',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Audit subscription agreement, enrollment receipt, payment invoices, and written cancellation requests',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Collate factual evidence of deficiency in service, medical certificates, trainer abandonment, or center closure photos',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Quantify exact unutilized prorated subscription fee, personal training balances, and statutory interest at 18% p.a.',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Draft an advocate-vetted statutory notice citing Consumer Protection Act 2019 Sections 2(11), 2(46), 2(47) & Indian Contract Act 1872',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Serve statutory legal notice via Speed Post with AD, registered business email, and tracked digital delivery with a 15-day compliance window',
        },
      ],
    },

    /* 7. Product + AggregateRating + Review (Matches sidebar UI word-for-word) */
    {
      '@type': 'Product',
      name: 'Legal Notice to Gym, Yoga & Fitness Club for Membership Fee Refund',
      description:
        'Advocate-drafted statutory demand notice service for gym members, yoga practitioners, and fitness club subscribers to recover advance membership fees, personal training dues, and auto-debit amounts from defaulting fitness centers across India.',
      brand: {
        '@type': 'Organization',
        name: 'Legal Recovery',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '278',
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
            name: 'Aditya Kulkarni',
          },
          reviewBody: reviewBodyText,
        },
      ],
    },
  ],
};

/* ─── COMPONENT ─────────────────────────────────────────────────────────── */
export default function GymYogaClubMembershipFeeRefundClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: 'statutory-framework', title: '1. Statutory Framework: Consumer Rights & Fitness Membership Laws in India' },
    { id: 'actionable-grounds', title: '2. Actionable Grounds: Unfair "No Refund" Clauses, Substandard Facilities & Closures' },
    { id: 'legal-remedies', title: '3. Legal Remedies: Statutory Demand Notice, DCDRC Consumer Complaints & CCPA Action' },
    { id: 'evidentiary-checklist', title: '4. Pre-Notice Evidentiary Checklist & Fitness Center Verification' },
    { id: 'essential-clauses', title: '5. Key Clauses in a Statutory Notice for Gym Fee Refund' },
    { id: 'strategic-roadmap', title: '6. Strategic Roadmap: From 15-Day Notice to Rapid Financial Redressal' },
    { id: 'faqs', title: '7. Frequently Asked Questions' },
  ];

  const breadcrumbItems = [
    { label: 'Send a Legal Notice', href: '/send-a-legal-notice' },
    {
      label: 'Gym & Yoga Club Fee Refund',
      href: '/send-a-legal-notice/gym-yoga-club-membership-fee-refund',
    },
  ];

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const shareUrl = encodeURIComponent(pageUrl);
  const shareText = encodeURIComponent(
    'Gym or fitness club refusing advance membership fee refund? Send an advocate-vetted statutory legal notice for rapid refund in India! #LegalNotice #GymRefund #ConsumerRights #LegalRecovery'
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
              CONSUMER PROTECTION &amp; FITNESS MEMBERSHIP DISPUTES
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Legal Notice to Gym &amp; Yoga Club for{' '}
              <span className="text-[#DC2626]">Membership Fee Refund</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Recover advance annual gym subscriptions, personal training fees, and unauthorized auto-debits under the Consumer Protection Act 2019, CCPA Unfair Trade Practice Rules, and Indian Contract Act.
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
                      onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${encodeURIComponent('Legal Notice to Gym, Yoga & Fitness Club for Membership Fee Refund | Legal Recovery India')}`, '_blank', 'noopener,noreferrer')}
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
                    A consumer can serve an advocate-vetted statutory legal notice to a gym, yoga studio, or fitness club demanding a full prorated refund of unutilized membership fees under{' '}
                    <span className="font-semibold text-slate-800">
                      Section 2(11), Section 2(46), and Section 2(47) of the Consumer Protection Act, 2019
                    </span>
                    , rendering unilateral &quot;No Refund&quot; boilerplate clauses legally void as unfair trade practices and unfair contracts. When a fitness establishment suffers service deficiencies, closes down, changes certified trainers, or when the consumer experiences medical incapacity, the consumer has the statutory right to contract rescission and restitution under{' '}
                    <span className="font-semibold text-slate-800">
                      Section 56 and Section 73 of the Indian Contract Act, 1872
                    </span>
                    . Serving a formal 15-day statutory demand notice places fitness center directors on strict notice before initiating fast-track proceedings before the{' '}
                    <span className="font-semibold text-slate-800">
                      District Consumer Disputes Redressal Commission (DCDRC)
                    </span>{' '}
                    or invoking criminal liability under Section 316 and Section 318 of the Bharatiya Nyaya Sanhita, 2023 for cheating and criminal breach of trust.
                  </p>
                </div>

                {/* ── IN-ARTICLE INFOGRAPHIC ────────────────────────────── */}
                <figure className="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900">
                  <img
                    src="/images/og/gym-yoga-club-membership-fee-refund.jpg"
                    alt="Infographic: Step-by-Step Legal Process to Recover Gym and Yoga Club Membership Fee Refunds in India"
                    className="w-full h-auto object-cover max-h-[500px]"
                    loading="lazy"
                  />
                  <figcaption className="p-3.5 text-center text-xs text-slate-600 font-semibold bg-white border-t border-slate-100 flex items-center justify-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#DC2626]" />
                    <span>Figure 1: Comprehensive Statutory Roadmap for Gym, Yoga, and Fitness Club Membership Fee Recovery under Consumer Protection Act 2019 &amp; Contract Act.</span>
                  </figcaption>
                </figure>

                {/* ── SECTION 1: STATUTORY FRAMEWORK ────────────────────── */}
                <section id="statutory-framework" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. Statutory Framework: Consumer Rights &amp; Gym Membership Laws
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The Indian fitness, yoga, and wellness industry has expanded rapidly with modern chains, boutique crossfit boxes, pilates studios, and premium luxury health clubs offering annual, multi-year, and lifetime subscription packages. To secure cash flows, many fitness operators extract large upfront payments ranging from ₹20,000 to ₹1,50,000 while inserting oppressive, non-negotiable clauses such as <em>&quot;Fees once paid will not be refunded or transferred under any circumstances whatsoever&quot;</em>.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under Indian consumer jurisprudence, these adhesive boilerplate terms have zero legal validity. The{' '}
                      <span className="font-semibold text-slate-800">
                        Consumer Protection Act, 2019 (CPA 2019)
                      </span>{' '}
                      and established common law principles provide comprehensive statutory remedies against fitness centers engaging in predatory retention of unearned consumer capital.
                    </p>

                    {/* Key Statutory Pillars Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                        <h4 className="text-sm font-black text-slate-900 mb-2 text-[#DC2626]">
                          Section 2(46) — Unfair Contract Doctrine
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          CPA 2019 explicitly defines an &quot;Unfair Contract&quot; as any contract between a service provider and a consumer that imposes unreasonable charge, penalty, or disproportionate disadvantage. A clause preventing refunds when services are deficient or terminated early is declared null and void.
                        </p>
                      </div>
                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                        <h4 className="text-sm font-black text-slate-900 mb-2 text-[#DC2626]">
                          Section 2(11) — Deficiency in Service
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          Any fault, imperfection, shortcoming, or inadequacy in the quality, nature, and manner of performance of gym facilities, equipment maintenance, trainer availability, or hygiene standards constitutes an actionable statutory deficiency.
                        </p>
                      </div>
                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                        <h4 className="text-sm font-black text-slate-900 mb-2 text-[#DC2626]">
                          Section 2(47) — Unfair Trade Practices
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          Making false claims about state-of-the-art machinery, personal trainers, operating hours, sauna/steam facilities, or guaranteed fitness transformations violates consumer standards and invites severe statutory penalties under Section 89 of CPA 2019.
                        </p>
                      </div>
                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                        <h4 className="text-sm font-black text-slate-900 mb-2 text-[#DC2626]">
                          Section 56 ICA 1872 — Frustration of Contract
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          Under the{' '}
                          <span className="font-semibold text-slate-800">
                            Indian Contract Act, 1872
                          </span>
                          , unforeseen impossibility—such as gym location closure, relocation of member, or debilitating medical ailment certified by a physician—frustrates the contract, mandating restitution of advance fees.
                        </p>
                      </div>
                    </div>

                    {/* Landmark Table: Unfair Terms vs Consumer Rights */}
                    <div className="overflow-x-auto my-8">
                      <table className="min-w-full text-xs sm:text-sm border border-slate-200 rounded-xl overflow-hidden">
                        <thead className="bg-slate-900 text-white">
                          <tr>
                            <th className="py-3.5 px-4 text-left font-bold uppercase tracking-wider">Gym &apos;No Refund&apos; Boilerplate</th>
                            <th className="py-3.5 px-4 text-left font-bold uppercase tracking-wider">Statutory Consumer Law Position</th>
                            <th className="py-3.5 px-4 text-left font-bold uppercase tracking-wider">Legal Consequence / Enforceability</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 bg-white">
                          <tr className="hover:bg-slate-50">
                            <td className="py-3 px-4 font-semibold text-red-600">&quot;Fees once paid are non-refundable under any circumstances.&quot;</td>
                            <td className="py-3 px-4 text-slate-700">Violates CPA 2019 Section 2(46) (Unfair Contract) and Section 23 ICA 1872.</td>
                            <td className="py-3 px-4 font-bold text-slate-900">Void Ab Initio; Prorated refund mandatory.</td>
                          </tr>
                          <tr className="hover:bg-slate-50">
                            <td className="py-3 px-4 font-semibold text-red-600">&quot;Memberships cannot be frozen, cancelled, or transferred upon illness.&quot;</td>
                            <td className="py-3 px-4 text-slate-700">Repugnant to Section 56 of Indian Contract Act (Doctrine of Frustration).</td>
                            <td className="py-3 px-4 font-bold text-slate-900">Unenforceable; Medical certificate justifies full prorated refund.</td>
                          </tr>
                          <tr className="hover:bg-slate-50">
                            <td className="py-3 px-4 font-semibold text-red-600">&quot;Gym management reserves unilateral right to alter timings or trainers.&quot;</td>
                            <td className="py-3 px-4 text-slate-700">Constitutes Deficiency in Service under Section 2(11) &amp; Misleading Ads under Section 89.</td>
                            <td className="py-3 px-4 font-bold text-slate-900">Entitles member to contract cancellation with damages.</td>
                          </tr>
                          <tr className="hover:bg-slate-50">
                            <td className="py-3 px-4 font-semibold text-red-600">&quot;Auto-debit mandates cannot be revoked before the annual term ends.&quot;</td>
                            <td className="py-3 px-4 text-slate-700">Direct violation of RBI e-Mandate Circulars &amp; Consumer Protection Rules.</td>
                            <td className="py-3 px-4 font-bold text-slate-900">Illegal debit; Reversal plus penal interest at 18% p.a.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 2: ACTIONABLE GROUNDS ─────────────────────── */}
                <section id="actionable-grounds" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. Actionable Grounds: &quot;No Refund&quot; Clauses &amp; Facility Closures
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Consumers enrolled in gyms, yoga centers, crossfit studios, or martial arts clubs are not helpless when facing arbitrary corporate misconduct. Indian courts and consumer commissions have categorized several specific operational and contractual breaches as legitimate grounds for serving a statutory legal notice:
                    </p>

                    <div className="space-y-4">
                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h3 className="text-base font-extrabold text-slate-900 mb-2 flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-red-100 text-[#DC2626] flex items-center justify-center text-xs font-black">1</span>
                          Abrupt Center Shutdown, Indefinite Renovation, or Relocation
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          When a gym branch shutters unexpectedly, undergoes prolonged &quot;renovation&quot; spanning weeks without service, or moves to a distant location inaccessible to the subscriber, the establishment commits a total failure of consideration. The member is entitled to immediate reimbursement of 100% of the unexpired subscription value.
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h3 className="text-base font-extrabold text-slate-900 mb-2 flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-red-100 text-[#DC2626] flex items-center justify-center text-xs font-black">2</span>
                          Bait-and-Switch Personal Training &amp; Trainer Desertion
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          Many fitness clubs upsell high-ticket &quot;Personal Training (PT)&quot; packages costing ₹30,000 to ₹1,00,000 based on specific celebrity trainers, certified nutritionists, or master yoga instructors. When the allocated trainer resigns and the gym fails to provide a trainer of equivalent credentials, or allots inexperienced interns, the consumer has the lawful right to an instant refund of unutilized PT sessions.
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h3 className="text-base font-extrabold text-slate-900 mb-2 flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-red-100 text-[#DC2626] flex items-center justify-center text-xs font-black">3</span>
                          Broken Machinery, Hazardous Equipment &amp; Deficient Hygiene
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          Persistent equipment downtime (e.g., treadmills out of order, broken cables, damaged weights), hazardous electrical wiring, non-functional HVAC air conditioning, black mold in steam rooms, or filthy shower stalls constitute statutory health hazards and gross deficiency in service under Section 2(11) of CPA 2019.
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h3 className="text-base font-extrabold text-slate-900 mb-2 flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-red-100 text-[#DC2626] flex items-center justify-center text-xs font-black">4</span>
                          Medical Incapacity, Orthopedic Injury &amp; Physical Disability
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          When a subscriber develops a lumbar spine disc herniation, cardiovascular complication, ligament tear, surgery requirement, or pregnancy where strenuous workouts are medically contraindicated, the contract becomes physically impossible to execute under Section 56 of the Indian Contract Act. Retaining money for workouts the consumer cannot medically perform constitutes unjust enrichment.
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                        <h3 className="text-base font-extrabold text-slate-900 mb-2 flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-red-100 text-[#DC2626] flex items-center justify-center text-xs font-black">5</span>
                          Unauthorized Auto-Debit Recurring Deductions &amp; Hidden Charges
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          Fitness chains leveraging digital payment gateways often enroll consumers in recurring credit card auto-debits without explicit consent or refuse to honor written cancellation notices. Under the{' '}
                          <span className="font-semibold text-slate-800">
                            Reserve Bank of India (RBI) e-Mandate Framework
                          </span>
                          , unauthorized auto-debits warrant immediate reversal, bank chargeback, and penal damages.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 3: LEGAL REMEDIES ─────────────────────────── */}
                <section id="legal-remedies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Legal Remedies: Demand Notice, DCDRC &amp; CCPA Action
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Securing a refund from an intransigent gym management requires a structured, escalating legal strategy. The legal avenues available to Indian fitness consumers include:
                    </p>

                    {/* Step-by-Step Multi-Tier Hierarchy */}
                    <div className="space-y-4 my-6">
                      <div className="border border-slate-200 rounded-2xl p-5 bg-gradient-to-r from-slate-50 to-white">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="bg-[#DC2626] text-white text-xs font-black px-2.5 py-1 rounded-md">TIER 1</span>
                          <h4 className="font-extrabold text-slate-900 text-sm md:text-base">
                            Advocate-Drafted Statutory Demand Notice (15-Day Compliance Window)
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          The most rapid and cost-effective remedy. An advocate-vetted legal notice served on the fitness center&apos;s registered office and head directors shatters corporate resistance. It formally demands refund of unutilized principal subscription fees, interest at 18% p.a., and legal expenses within 15 days, warning of imminent consumer court and criminal litigation. Over 70% of fitness fee disputes settle in Tier 1.
                        </p>
                      </div>

                      <div className="border border-slate-200 rounded-2xl p-5 bg-gradient-to-r from-slate-50 to-white">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="bg-[#DC2626] text-white text-xs font-black px-2.5 py-1 rounded-md">TIER 2</span>
                          <h4 className="font-extrabold text-slate-900 text-sm md:text-base">
                            District Consumer Disputes Redressal Commission (DCDRC) via e-Daakhil
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          If the gym fails to refund the amount within 15 days, a formal consumer complaint can be filed under Section 35 of the CPA 2019 before the District Commission via{' '}
                          <a
                            href="https://edaakhil.nic.in"
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            className="text-purple-600 hover:text-purple-800 hover:underline font-semibold"
                          >
                            e-Daakhil Online Filing Portal (edaakhil.nic.in)
                          </a>
                          . The consumer can claim full refund, interest, compensation for mental harassment (ranging from ₹25,000 to ₹1,00,000), and litigation costs.
                        </p>
                      </div>

                      <div className="border border-slate-200 rounded-2xl p-5 bg-gradient-to-r from-slate-50 to-white">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="bg-[#DC2626] text-white text-xs font-black px-2.5 py-1 rounded-md">TIER 3</span>
                          <h4 className="font-extrabold text-slate-900 text-sm md:text-base">
                            CCPA Regulatory Intervention &amp; Class Action Complaints
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          CCPA regulatory complaints can be submitted via the <span className="font-semibold text-slate-800">Central Consumer Protection Authority (CCPA)</span>. For systematic fraud, criminal complaints are maintainable under <span className="font-semibold text-slate-800">Section 316 and Section 318 of Bharatiya Nyaya Sanhita, 2023 (BNS)</span>.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 4: EVIDENTIARY CHECKLIST ──────────────────── */}
                <section id="evidentiary-checklist" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Pre-Notice Evidentiary Checklist &amp; Fitness Center Verification
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Serving a legally watertight notice requires compiling conclusive documentary and digital proof establishing payment, terms promised, and the fitness center&apos;s subsequent breach. Before drafting the statutory notice, ensure the following evidentiary records are secured:
                    </p>

                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                      <h4 className="text-sm font-black text-slate-900 uppercase tracking-wide">
                        Mandatory Evidentiary Records Checklist:
                      </h4>
                      <ol className="space-y-3 text-xs sm:text-sm text-slate-700 list-decimal list-inside leading-relaxed">
                        <li>
                          <strong>Membership Agreement / Registration Form:</strong> Physical receipt, digital onboarding confirmation, or terms sent via email/app displaying the membership period and fees paid.
                        </li>
                        <li>
                          <strong>Financial Proof of Payment:</strong> Bank statement, credit card transaction receipt, UPI reference ID, or GST tax invoice confirming the exact consideration transferred to the gym entity.
                        </li>
                        <li>
                          <strong>Communications Trail:</strong> WhatsApp chats, emails, or written letters sent to center management requesting membership cancellation, personal trainer change, or fee refund.
                        </li>
                        <li>
                          <strong>Deficiency Evidence:</strong> Date-stamped photographs or videos of broken exercise machinery, out-of-order steam rooms, filthy facilities, closed center shutters, or renovation notices.
                        </li>
                        <li>
                          <strong>Medical / Relocation Records:</strong> Registered medical practitioner&apos;s prescription/fitness certificate or employer transfer letter explaining inability to continue workouts.
                        </li>
                        <li>
                          <strong>Corporate Verification via MCA:</strong> For corporate gym chains (e.g., Private Limited companies), verify the exact registered corporate office address and Director Identification Numbers (DIN) via the{' '}
                          <a
                            href="https://www.mca.gov.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-600 hover:text-purple-800 hover:underline"
                          >
                            Ministry of Corporate Affairs (MCA) Portal
                          </a>
                          .
                        </li>
                      </ol>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 5: ESSENTIAL CLAUSES ──────────────────────── */}
                <section id="essential-clauses" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Key Clauses in a Statutory Notice for Gym Fee Refund
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A statutory legal notice issued by an advocate must be drafted with precision to withstand judicial scrutiny before consumer commissions. It must contain the following core structural components:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl border border-slate-200 bg-white">
                        <span className="text-xs font-black text-[#DC2626] uppercase tracking-wider block mb-1">Clause I</span>
                        <h4 className="font-extrabold text-slate-900 text-sm mb-1">Parties Identification &amp; Enrollment Facts</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Full particulars of the consumer and gym legal entity (Proprietorship, Partnership, or Pvt Ltd), membership ID, date of joining, duration, and total consideration paid.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl border border-slate-200 bg-white">
                        <span className="text-xs font-black text-[#DC2626] uppercase tracking-wider block mb-1">Clause II</span>
                        <h4 className="font-extrabold text-slate-900 text-sm mb-1">Chronological Narration of Deficiency</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Exact dates of facility closure, trainer resignation, machine breakdown, unhygienic conditions, or submission of medical/relocation cancellation requests.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl border border-slate-200 bg-white">
                        <span className="text-xs font-black text-[#DC2626] uppercase tracking-wider block mb-1">Clause III</span>
                        <h4 className="font-extrabold text-slate-900 text-sm mb-1">Repudiation of &apos;No Refund&apos; Terms</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Specific legal repudiation of one-sided boilerplate terms under Section 2(46) of the Consumer Protection Act 2019, CCPA guidelines, and Section 23 of the Indian Contract Act 1872.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl border border-slate-200 bg-white">
                        <span className="text-xs font-black text-[#DC2626] uppercase tracking-wider block mb-1">Clause IV</span>
                        <h4 className="font-extrabold text-slate-900 text-sm mb-1">Quantified Monetary Demand &amp; 15-Day Deadline</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Explicit demand for the unutilized prorated fee, personal training dues, interest at 18% p.a., legal drafting charges, and compensation within a mandatory 15-day compliance window.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 6: STRATEGIC ROADMAP ──────────────────────── */}
                <section id="strategic-roadmap" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Strategic Roadmap: From 15-Day Notice to Refund Redressal
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Recovering stuck gym fees through Legal Recovery follows a proven four-stage legal protocol designed to maximize speed, compliance, and recovery percentages:
                    </p>

                    <div className="space-y-4">
                      {[
                        {
                          step: 'Stage 1',
                          title: 'Advocate-Drafted Notice Served via Multi-Channel Hybrid Dispatch',
                          desc: 'The notice is prepared on the advocate’s official letterhead, digitally signed under Section 5 of the Information Technology Act 2000, and served simultaneously via India Post Speed Post with AD, registered gym email, and tracked WhatsApp delivery to center owners.',
                        },
                        {
                          step: 'Stage 2',
                          title: 'Pre-Litigation Negotiation & ODR Settlement Facilitation',
                          desc: 'Upon receiving formal notice, fitness center management typically initiates amicable settlement talks to avoid public reputational damage and regulatory scrutiny. Legal Recovery provides secure Online Dispute Resolution (ODR) rooms to execute binding refund settlements.',
                        },
                        {
                          step: 'Stage 3',
                          title: 'e-Daakhil Consumer Forum Complaint Filing (DCDRC)',
                          desc: 'If the gym ignores the 15-day notice, our panel advocates file a formal complaint before the District Consumer Disputes Redressal Commission claiming full refund, 18% annual interest, mental agony compensation, and legal costs.',
                        },
                        {
                          step: 'Stage 4',
                          title: 'CCPA Regulatory Escalation & Bank Chargeback Enforcement',
                          desc: 'Simultaneously, formal petitions are submitted to the Central Consumer Protection Authority for misleading advertisements and unfair trade practices, alongside bank chargeback escalation for unauthorized recurring debits.',
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
                        href="https://www.indiacode.nic.in/handle/123456789/15256"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Consumer Protection Act, 2019 — Section 2(11) (Deficiency), Section 2(46) (Unfair Contract) &amp; Section 2(47) (Unfair Trade Practice), indiacode.nic.in
                      </a>
                    </li>
                    <li>
                      Central Consumer Protection Authority (CCPA) — Guidelines on Prevention of Misleading Advertisements &amp; Unfair Contract Terms
                    </li>
                    <li>
                      Indian Contract Act, 1872 — Section 23 (Unlawful Object), Section 56 (Frustration of Contract) &amp; Section 73 (Breach Damages)
                    </li>
                    <li>
                      National Consumer Disputes Redressal Commission (NCDRC) — Precedents on Non-Refundable Subscription Clauses
                    </li>
                    <li>
                      National Consumer Commission Online Portal — e-Daakhil Consumer Complaint Filing System (edaakhil.nic.in)
                    </li>
                    <li>
                      Ministry of Corporate Affairs (MCA) — Verification of Corporate Fitness Franchises &amp; Directors
                    </li>
                    <li>
                      Bharatiya Nyaya Sanhita, 2023 — Section 316 (Criminal Breach of Trust) &amp; Section 318 (Cheating)
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
                        title: 'Legal Notice to Gym for Subscription Fee Refund',
                        href: '/legal-notice-to-gym-subscription-fee-refund',
                      },
                      {
                        title: 'How to File a Consumer Complaint in India',
                        href: '/how-to-file-consumer-complaint-india',
                      },
                      {
                        title: 'Legal Notice for Unfair Trade Practice Complaint',
                        href: '/send-a-legal-notice/unfair-trade-practice-complaint',
                      },
                      {
                        title: 'Legal Notice to Company Refusing Refund',
                        href: '/send-a-legal-notice/company-refusing-refund',
                      },
                      {
                        title: 'Legal Notice for School / College Fee Refund',
                        href: '/send-a-legal-notice/school-college-fee-refund-admission-cancellation',
                      },
                      {
                        title: 'Legal Notice for Defective Product Refund',
                        href: '/send-a-legal-notice/defective-product-refund',
                      },
                      {
                        title: 'Legal Notice for Travel Agent / Package Refund',
                        href: '/send-a-legal-notice/travel-agent-holiday-package-refund',
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
                    platform, connecting gym members, yoga practitioners, consumers, businesses,
                    and professionals with seasoned panel advocates for rapid, advocate-vetted statutory
                    demand notices at transparent flat fees. With ₹100 Crore+ recovered and 10,000+
                    cases resolved across India, Legal Recovery delivers verified legal impact
                    without the delays and unpredictability of traditional law firms.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { label: 'Send a Legal Notice', href: '/send-a-legal-notice' },
                      { label: 'Recovery Services', href: '/recovery' },
                      { label: 'Consumer Complaint Guide', href: '/how-to-file-consumer-complaint-india' },
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
                  Gym Refusing Your Fee Refund?
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  Send an advocate-vetted statutory notice today. 74% of gyms and fitness clubs settle advance fee disputes within 15 days upon receiving a formal legal notice from Legal Recovery.
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
                  <span className="text-slate-400 text-xs">/5 (278 reviews)</span>
                </div>

                {/* Review card — must match JSON-LD Product > Review word-for-word */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#DC2626]/10 flex items-center justify-center font-black text-[#DC2626] text-xs">
                      AK
                    </div>
                    <div>
                      <p className="font-extrabold text-slate-900 text-xs">Aditya Kulkarni</p>
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
                  { stat: '74%', label: 'Fitness centers settle prior to consumer court litigation' },
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
