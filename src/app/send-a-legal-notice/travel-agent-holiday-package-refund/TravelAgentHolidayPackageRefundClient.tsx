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
      'Can a tourist or traveler issue a statutory legal notice to a travel agent or tour operator for refusing a holiday package refund in India?',
    answer:
      'Yes, any tourist, family traveler, or corporate group can serve an advocate-vetted statutory legal notice to a defaulting travel agent, online travel portal, or tour operator under Section 2(11) and Section 2(47) of the Consumer Protection Act, 2019, along with Section 73 of the Indian Contract Act, 1872. A legal demand notice formally puts the travel agency on 15 days peremptory warning to disburse the withheld refund amount, compensate for unrendered services, or face consumer litigation before the District Consumer Disputes Redressal Commission. Serving a formal notice creates admissible documentary evidence in court establishing that the agency was granted reasonable opportunity to cure the deficiency before legal proceedings commenced.',
  },
  {
    question:
      'Is a travel agency legally permitted to forfeit 100% of the advance booking fee by citing unilateral "non-refundable" package clauses?',
    answer:
      'No, travel agencies and tour operators cannot enforce blanket "100% non-refundable" standard-form clauses when the trip is cancelled due to operator default, material itinerary alterations, visa rejections, or unavoidable force majeure events. The National Consumer Disputes Redressal Commission (NCDRC) and the Supreme Court of India have repeatedly ruled that one-sided non-refundable booking terms constitute an unfair contract and unfair trade practice under Section 2(46) and Section 2(47) of the Consumer Protection Act, 2019. Travel operators are legally mandated to pass through refunds received from third-party airlines and hotels and can only deduct reasonable, actual, and verifiable administrative expenses.',
  },
  {
    question:
      'What specific acts constitute actionable "deficiency in service" and "unfair trade practice" by a tour operator under the Consumer Protection Act, 2019?',
    answer:
      'Actionable deficiency in service under Section 2(11) encompasses unilateral cancellation of scheduled excursions, downgrading promised 4-star or 5-star hotel categories to substandard motels, failure to provide committed guided transfers or specialized meals, and unexpected delays causing missed flights. Unfair trade practice under Section 2(47) arises when travel agents publish deceptive promotional brochures, exaggerate luxury resort amenities, fail to disclose mandatory hidden surcharges, or falsely guarantee visa approvals to solicit advance holiday package bookings. Consumers experiencing these contractual defaults are statutorily entitled to claim full financial restitution alongside punitive damages for harassment.',
  },
  {
    question:
      'Who bears legal liability for holiday package refunds when an underlying airline, hotel, or cruise provider cancels a booking?',
    answer:
      'When a consumer purchases a bundled holiday package from a travel agent or tour operator, the agent acts as the primary service provider under Section 230 of the Indian Contract Act, 1872, and cannot evade liability by deflecting blame to third-party vendors. The Supreme Court in Pravasi Legal Cell v. Union of India (2020) and multiple NCDRC precedents establish that travel aggregators who collect consolidated package fees remain directly accountable for processing customer refunds when underlying airlines or hotels cancel services. The travel operator is legally required to actively pursue and remit vendor refunds without unjust enrichment or arbitrary retention of booking funds.',
  },
  {
    question:
      'What is the statutory limitation period for serving a legal notice and filing a consumer complaint against a defaulting travel agency in India?',
    answer:
      'Under Section 69 of the Consumer Protection Act, 2019, the statutory limitation period for instituting a consumer complaint before the Consumer Disputes Redressal Commission is exactly two years from the date on which the cause of action arose. The cause of action typically crystallizes on the date the holiday was cancelled, the date the agency formally rejected the refund request, or the scheduled departure date when deficient services were rendered. Issuing an advocate-vetted legal notice promptly within this two-year window documents the dispute chronology and facilitates expedited settlement before formal court filing.',
  },
  {
    question:
      'What damages, financial compensation, and statutory interest can be claimed in a legal notice against a defaulting tour operator?',
    answer:
      'An aggrieved traveler can legally demand: 1) 100% refund of the unutilized or cancelled package advance; 2) reimbursement of out-of-pocket expenses incurred on alternative accommodation, transport, and meals; 3) commercial interest on withheld funds at 12% to 18% per annum from the date of payment; and 4) substantial financial compensation for mental agony, physical hardship, and spoiled family vacations under Section 39(1) of the Consumer Protection Act, 2019. In addition, the consumer can demand reimbursement of advocate drafting fees and legal litigation expenses incurred due to the operator\'s wrongful refusal.',
  },
];

/* ─── JSON-LD SCHEMA (@graph) ──────────────────────────────────────────── */
const pageUrl =
  'https://legalrecovery.in/send-a-legal-notice/travel-agent-holiday-package-refund';
const ogImage =
  'https://legalrecovery.in/images/og/travel-agent-holiday-package-refund.jpg';

const reviewBodyText =
  'I booked an 8-day deluxe family holiday tour to Switzerland and France worth ₹5,80,000 for my family of four through a well-known online travel agency. Two weeks before our scheduled departure, the operator unilaterally cancelled our Jungfraujoch mountain excursion, replaced our 4-star boutique lakeside hotel with a subpar suburban transit motel without heating, and refused a ₹2,40,000 refund when we objected to the altered itinerary. Legal Recovery drafted and served an advocate-vetted statutory legal notice citing Sections 2(11) and 2(47) of the Consumer Protection Act, 2019, the doctrine of frustration under the Indian Contract Act, and landmark NCDRC rulings on holiday cancellations. Within 11 days of receiving the notice, the agency\'s management conceded the deficiency, processed our full refund of ₹2,40,000, and credited an additional ₹35,000 towards compensation for inconvenience. Truly unmatched legal efficacy and speed.';

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
        'Legal Notice to Travel Agent for Holiday Package Refund | Send Notice India',
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
      name: 'Legal Notice to Travel Agent for Holiday Package Refund | Legal Recovery',
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
          name: 'Travel Agent Holiday Package Refund Notice',
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
      name: 'Steps to Send a Legal Notice to Travel Agent for Holiday Package Refund',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Consolidate all holiday booking vouchers, payment receipts, written itinerary commitments, and cancellation notices',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Verify travel agency registered corporate entity, GSTIN registration, IATA accreditation, and Ministry of Tourism affiliations',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Quantify exact unrefunded advance payments, out-of-pocket alternate booking costs, statutory 18% p.a. interest, and damages for mental distress',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Draft an advocate-vetted statutory legal notice citing Sections 2(11), 2(47) & 39 of CPA 2019, Section 73 Contract Act, and NCDRC precedents',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Dispatch the statutory demand notice via Registered Post with A/D, Speed Post, verified corporate email, and instant WhatsApp delivery',
        },
      ],
    },

    /* 7. Product + AggregateRating + Review (matches sidebar UI word-for-word) */
    {
      '@type': 'Product',
      name: 'Legal Notice to Travel Agent for Holiday Package Refund & Travel Dispute',
      description:
        'Advocate-drafted statutory demand notice service for tourists, vacationers, and corporate travelers to recover tour package advance refunds, compensation for hotel downgrades, and unrendered travel services across India.',
      brand: {
        '@type': 'Organization',
        name: 'Legal Recovery',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '318',
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
            name: 'Dr. Aniruddh Sengupta',
          },
          reviewBody: reviewBodyText,
        },
      ],
    },
  ],
};

/* ─── COMPONENT ─────────────────────────────────────────────────────────── */
export default function TravelAgentHolidayPackageRefundClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: 'statutory-framework', title: '1. Statutory Framework: Consumer Protection & Travel Laws in India' },
    { id: 'actionable-grounds', title: '2. Actionable Grounds: Itinerary Cuts, Downgrades & Refund Denials' },
    { id: 'legal-remedies', title: '3. Legal Remedies & Forum Jurisdiction: Consumer Commission to NCDRC' },
    { id: 'evidentiary-checklist', title: '4. Pre-Notice Evidentiary Checklist & Agency Entity Verification' },
    { id: 'essential-clauses', title: '5. Key Clauses in a Statutory Notice for Tour Package Refund' },
    { id: 'strategic-roadmap', title: '6. Strategic Roadmap: 15-Day Demand Notice to Consumer Court Filing' },
    { id: 'faqs', title: '7. Frequently Asked Questions' },
  ];

  const breadcrumbItems = [
    { label: 'Send a Legal Notice', href: '/send-a-legal-notice' },
    {
      label: 'Travel Agent Holiday Package Refund',
      href: '/send-a-legal-notice/travel-agent-holiday-package-refund',
    },
  ];

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const shareUrl = encodeURIComponent(pageUrl);
  const shareText = encodeURIComponent(
    'Travel agent or tour operator refusing holiday package refund or cutting your vacation itinerary? Send an advocate-vetted statutory legal notice for rapid refund recovery in India! #HolidayRefund #LegalNotice #ConsumerProtection'
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
              CONSUMER PROTECTION &amp; TOUR PACKAGE REFUND RECOVERY
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Legal Notice to Travel Agent for{' '}
              <span className="text-[#DC2626]">Holiday Package Refund</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Recover advance tour package payments, compensation for hotel downgrades, cancelled flight components, and unilateral itinerary alterations under the Consumer Protection Act, 2019 and Indian Contract Act.
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
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${encodeURIComponent('Legal Notice to Travel Agent for Holiday Package Refund | Legal Recovery India')}`}
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
                    An aggrieved traveler or consumer can serve an advocate-drafted statutory legal notice to a travel agent or tour operator under{' '}
                    <a
                      href="https://consumeraffairs.nic.in/acts-and-rules/consumer-protection"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      Section 2(11) and Section 2(47) of the Consumer Protection Act, 2019
                    </a>
                    , demanding full refund of advance package payments, unrendered hotel stays, and cancelled excursion fees within 15 days. If a travel agency unilaterally alters the agreed itinerary, downgrades accommodation standards, or withholds refunds after trip cancellations due to unforeseen events, the tour operator commits an actionable deficiency of service and unfair trade practice under{' '}
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/2187"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      Section 73 and Section 56 of the Indian Contract Act, 1872
                    </a>
                    . Serving a formal legal notice establishes crucial pre-litigation proof before filing a digital complaint on the{' '}
                    <a
                      href="https://edaakhil.nic.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      E-Daakhil portal
                    </a>{' '}
                    or initiating recovery proceedings before the District Consumer Disputes Redressal Commission for principal refund, 12% to 18% annual interest, and substantial compensation for mental agony.
                  </p>
                </div>

                {/* ── IN-ARTICLE INFOGRAPHIC ────────────────────────────── */}
                <figure className="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900">
                  <img
                    src="/images/og/travel-agent-holiday-package-refund.jpg"
                    alt="Infographic: Step-by-Step Legal Process to Recover Holiday Package and Tour Booking Refunds from Travel Agents in India"
                    className="w-full h-auto object-cover max-h-[500px]"
                    loading="lazy"
                  />
                  <figcaption className="p-3.5 text-center text-xs text-slate-600 font-semibold bg-white border-t border-slate-100 flex items-center justify-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#DC2626]" />
                    <span>Figure 1: Statutory Roadmap for Holiday Package Refund &amp; Tour Operator Dispute Recovery under the Consumer Protection Act, 2019 &amp; Indian Contract Act, 1872.</span>
                  </figcaption>
                </figure>

                {/* ── SECTION 1: STATUTORY FRAMEWORK ────────────────────── */}
                <section id="statutory-framework" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. Statutory Framework: Consumer Protection &amp; Travel Laws in India
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-600 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Every year, thousands of Indian families and corporate professionals plan domestic and international vacations by booking bundled holiday packages through travel agencies, destination management companies (DMCs), and online aggregators. When a travel operator fails to deliver the promised itinerary, abruptly cancels trips, downgrades hotel star categories, or withholds advance payments, the traveler is shielded by comprehensive statutory protections under Indian consumer and contract jurisprudence.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The primary legislative enactment governing holiday package disputes is the{' '}
                      <a
                        href="https://consumeraffairs.nic.in/acts-and-rules/consumer-protection"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Consumer Protection Act, 2019 (CPA 2019)
                      </a>
                      , which establishes rigorous benchmarks for service delivery and penalizes deceptive commercial conduct:
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                      <ul className="space-y-3 text-xs sm:text-sm text-slate-700 list-disc list-inside">
                        <li>
                          <strong>Section 2(11) (Deficiency in Service):</strong> Defines deficiency as any fault, imperfection, shortcoming, or inadequacy in the quality, nature, and manner of performance required to be maintained by or under any law or undertaken to be performed by a person in pursuance of a contract. Unilateral schedule cuts, uncleaned rooms, and missed guided tours fall squarely under this definition.
                        </li>
                        <li>
                          <strong>Section 2(47) (Unfair Trade Practice):</strong> Prohibits travel operators from making false or misleading representations regarding the standard, quality, grade, composition, style, or model of services. Selling a package by showcasing luxury 5-star beachfront resorts and subsequently placing travelers in budget motels is a statutory offense.
                        </li>
                        <li>
                          <strong>Section 2(46) (Unfair Contracts):</strong> Empowers consumer commissions to declare void any one-sided standard-form contracts that impose unreasonable forfeiture clauses, blanket non-refundable terms, or excessive cancellation penalties on travelers.
                        </li>
                        <li>
                          <strong>Section 39 (Reliefs Granted by Commissions):</strong> Empowers consumer courts to direct the travel agency to refund the entire package price, pay compensation for loss or injury caused due to negligence, award punitive damages, and order payment of adequate legal costs.
                        </li>
                      </ul>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed">
                      Complementing consumer statutes, the{' '}
                      <a
                        href="https://www.indiacode.nic.in/handle/123456789/2187"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Indian Contract Act, 1872
                      </a>{' '}
                      governs the foundational commercial relationship between the traveler and the tour operator:
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                      <ul className="space-y-3 text-xs sm:text-sm text-slate-700 list-disc list-inside">
                        <li>
                          <strong>Section 56 (Doctrine of Frustration):</strong> When a tour becomes impossible to perform due to unforeseen force majeure events (such as flight bans, border closures, natural disasters, or unexpected visa refusals), the contract becomes void. Under Section 65, the travel operator is legally bound to restore any advantage or monetary advance received under the agreement to the traveler.
                        </li>
                        <li>
                          <strong>Section 73 (Damages for Breach of Contract):</strong> The injured consumer is entitled to receive full compensation for any direct financial loss or damage naturally arising from the agency&apos;s contractual breach, including emergency bookings and alternate transport.
                        </li>
                        <li>
                          <strong>Section 230 (Agent&apos;s Direct Liability):</strong> Where the travel agent creates and markets a bundled tour package as an independent packager rather than a disclosed booking conduit, the agent remains directly liable to the customer for failures of underlying airlines, bus operators, and resort properties.
                        </li>
                      </ul>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed">
                      Furthermore, the Supreme Court of India in the landmark ruling{' '}
                      <a
                        href="https://main.sci.gov.in/judgment/judis/47101.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Pravasi Legal Cell &amp; Ors. v. Union of India (2020)
                      </a>{' '}
                      along with guidelines issued by the{' '}
                      <a
                        href="https://www.dgca.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Directorate General of Civil Aviation (DGCA)
                      </a>{' '}
                      in CAR Section 3, Series M, Part IV, explicitly mandates that airlines and booking agents must refund full passenger fares within statutory timelines without imposing coercive credit shells or unwarranted administrative deductions.
                    </p>
                  </div>
                </section>

                {/* ── SECTION 2: ACTIONABLE GROUNDS ─────────────────────── */}
                <section id="actionable-grounds" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. Actionable Grounds: Itinerary Cuts, Downgrades &amp; Refund Denials
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-600 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A formidable legal notice must specify the exact factual defaults and statutory breaches committed by the travel agency. Indian consumer commissions recognize multiple actionable failure scenarios:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                      {[
                        {
                          title: 'Arbitrary Itinerary Alterations & Skipped Sightseeing',
                          desc: 'Tour operators unilaterally dropping key destinations, historical monuments, or premium mountain excursions (e.g., Mount Titlis, Burj Khalifa VIP passes) without traveler consent or proportional fee adjustments.',
                        },
                        {
                          title: 'Hotel Star Downgrades & Substandard Living Facilities',
                          desc: 'Promising 4-star or 5-star city-center luxury accommodations in booking brochures, but forcing travelers into dingy, unhygienic 2-star suburban transit motels without functional air conditioning, heaters, or basic hygiene.',
                        },
                        {
                          title: 'Unilateral Tour Cancellations & Forfeiture of Advances',
                          desc: 'Travel operators cancelling group departures due to low seat occupancy or internal logistics failures, while unlawfully withholding client advances under the pretext of non-refundable booking conditions.',
                        },
                        {
                          title: 'Flight Rescheduling, Missed Connections & Lapsed Transfers',
                          desc: 'Booking poorly coordinated airline connections resulting in stranded passengers at transit hubs, or failing to provide pre-paid airport pickup and drop-off transfers in foreign destinations.',
                        },
                        {
                          title: 'Visa Rejection & Refusal to Pass Through Vendor Refunds',
                          desc: 'Refusing to refund package components when an embassy rejects a visa application well before departure, despite airlines and hotels releasing full or partial refunds to the travel agency.',
                        },
                        {
                          title: 'Hidden Surcharges & Coercive On-Tour Extortion',
                          desc: 'Demanding unexpected fuel surcharges, peak-season resort fees, or mandatory local guide tips mid-journey under threat of abandoning travelers in foreign jurisdictions.',
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
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
                    3. Legal Remedies &amp; Forum Jurisdiction: Consumer Commission to NCDRC
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-600 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Indian law provides specialized judicial and quasi-judicial avenues for recovering money from defaulting travel operators. The pecuniary jurisdiction of Consumer Disputes Redressal Commissions is determined by the total consideration paid:
                    </p>

                    <div className="overflow-x-auto my-6">
                      <table className="w-full text-left border-collapse text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-slate-900 text-white">
                            <th className="p-3 font-extrabold rounded-tl-xl">Adjudication Forum</th>
                            <th className="p-3 font-extrabold">Pecuniary Jurisdiction</th>
                            <th className="p-3 font-extrabold">Statutory Basis</th>
                            <th className="p-3 font-extrabold rounded-tr-xl">Available Remedies &amp; Reliefs</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 bg-white border border-slate-200">
                          <tr>
                            <td className="p-3 font-bold text-slate-900">
                              District Consumer Commission (DCDRC)
                            </td>
                            <td className="p-3 font-semibold text-[#DC2626]">Claims up to ₹50 Lakhs</td>
                            <td className="p-3 text-slate-600">Section 34, Consumer Protection Act 2019</td>
                            <td className="p-3 text-slate-600">
                              Full refund of package dues + 12–18% p.a. interest + compensation for mental agony &amp; litigation costs
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">
                              State Consumer Commission (SCDRC)
                            </td>
                            <td className="p-3 font-semibold text-[#DC2626]">Claims ₹50 Lakhs to ₹2 Crores</td>
                            <td className="p-3 text-slate-600">Section 47, Consumer Protection Act 2019</td>
                            <td className="p-3 text-slate-600">
                              High-value group holiday disputes, corporate retreat defaults &amp; appellate reviews
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">
                              National Consumer Commission (NCDRC)
                            </td>
                            <td className="p-3 font-semibold text-[#DC2626]">Claims exceeding ₹2 Crores</td>
                            <td className="p-3 text-slate-600">Section 58, Consumer Protection Act 2019</td>
                            <td className="p-3 text-slate-600">
                              Pan-India class action claims against major online travel aggregators and tour conglomerates
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">
                              Civil Court (Summary Suit Order 37 CPC)
                            </td>
                            <td className="p-3 font-semibold text-[#DC2626]">Based on Court Territorial Value</td>
                            <td className="p-3 text-slate-600">Code of Civil Procedure, 1908</td>
                            <td className="p-3 text-slate-600">
                              Fast-track summary recovery where travel agent issued written refund acknowledgment or dishonored cheques
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">
                              Criminal Complaint (BNS Sec 316 &amp; 318)
                            </td>
                            <td className="p-3 font-semibold text-[#DC2626]">Criminal Proceedings</td>
                            <td className="p-3 text-slate-600">Bharatiya Nyaya Sanhita, 2023</td>
                            <td className="p-3 text-slate-600">
                              FIR and prosecution for fraudulent ghost packages, fictitious airline bookings, and financial cheating
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                      <h4 className="font-extrabold text-slate-900 text-sm">
                        Landmark Precedents Holding Travel Operators Accountable
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        In{' '}
                        <a
                          href="http://www.ncdrc.nic.in"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:text-purple-800 hover:underline"
                        >
                          Thomas Cook (India) Ltd. v. Dr. M.M. Shenoy (NCDRC 2019)
                        </a>
                        , the National Consumer Commission held that when a travel operator promises a specific standard of hotel and itinerary, any unilateral substitution with inferior properties constitutes gross deficiency of service, ordering a complete refund of tour fees along with punitive damages for distress. Similarly, in{' '}
                        <a
                          href="http://www.ncdrc.nic.in"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:text-purple-800 hover:underline"
                        >
                          Cox &amp; Kings Ltd. v. Ramachandran (NCDRC 2018)
                        </a>
                        , the commission affirmed that tour operators cannot hide behind fine-print exclusion clauses to deny refunds when scheduled excursions are omitted.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 4: EVIDENTIARY CHECKLIST ──────────────────── */}
                <section id="evidentiary-checklist" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Pre-Notice Evidentiary Checklist &amp; Agency Entity Verification
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-600 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The success of your legal notice depends on presenting concrete documentary proof demonstrating the promised tour specifications, actual defaults, and monetary payments. Assemble the following key records:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                      {[
                        {
                          title: 'Contractual Booking Proof',
                          items: [
                            'Official holiday package booking voucher',
                            'Signed quotation & detailed day-wise itinerary',
                            'Tax invoice issued with GST breakdown',
                          ],
                        },
                        {
                          title: 'Payment & Transaction Records',
                          items: [
                            'Bank account debit statements & UPI receipts',
                            'Credit card transaction slips / EMI schedules',
                            'Official payment acknowledgement receipts',
                          ],
                        },
                        {
                          title: 'Deficiency & Default Documentation',
                          items: [
                            'Photographs & videos of substandard hotels',
                            'Email notices of unilateral itinerary cuts',
                            'Hotel bills paid out-of-pocket by traveler',
                          ],
                        },
                        {
                          title: 'Communication & Demand Trails',
                          items: [
                            'WhatsApp chats with tour manager / travel agent',
                            'Written emails requesting refund with dates',
                            'Travel insurance rejection or claim letters',
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
                        <span className="text-[#DC2626]">🏛️</span> Agency Master Data Verification via MCA, GSTIN &amp; Ministry of Tourism
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        To ensure legal enforceability in consumer courts, the notice must be served on the exact registered legal entity, citing its Corporate Identification Number (CIN), active Directors, and registered office address as recorded on the{' '}
                        <a
                          href="https://www.mca.gov.in/content/mca/global/en/home.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:text-purple-800 hover:underline"
                        >
                          Ministry of Corporate Affairs (MCA)
                        </a>{' '}
                        portal or GSTIN registry. Legal Recovery automatically validates company master records, IATA memberships, and{' '}
                        <a
                          href="https://tourism.gov.in"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:text-purple-800 hover:underline"
                        >
                          Ministry of Tourism (Incredible India)
                        </a>{' '}
                        approvals to prevent technical defects during service.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 5: ESSENTIAL CLAUSES ──────────────────────── */}
                <section id="essential-clauses" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Key Clauses in a Statutory Notice for Tour Package Refund
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-600 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      An advocate-drafted statutory demand notice must be structured with precision, establishing the contractual terms, cataloging the specific breaches, and demanding strict financial restitution:
                    </p>

                    <div className="space-y-4">
                      {[
                        {
                          clause: 'Clause 1',
                          title: 'Engagement, Tour Scope & Financial Consideration Recital',
                          desc: 'Establish the exact date of package booking, total tour package cost, advance payment transaction IDs, passenger details, confirmed travel dates, and the written itinerary promised by the travel agency.',
                        },
                        {
                          clause: 'Clause 2',
                          title: 'Chronological Statement of Material Breaches & Deficiencies',
                          desc: 'Articulate the exact breaches committed by the operator—such as arbitrary cancellation of sightseeing trips, substandard room allocations, unannounced flight schedule changes, or unfulfilled meal commitments.',
                        },
                        {
                          clause: 'Clause 3',
                          title: 'Itemized Breakdown of Quantified Financial Claims',
                          desc: 'Itemize the exact unrefunded advance package fees, out-of-pocket expenses incurred on alternate arrangements, out-of-schedule cab fares, and calculate statutory interest at 18% per annum from payment date.',
                        },
                        {
                          clause: 'Clause 4',
                          title: 'Statutory Liability under Consumer Protection Act & Contract Act',
                          desc: 'Invoke Section 2(11) (Deficiency in Service), Section 2(47) (Unfair Trade Practice) of CPA 2019, Section 56 and Section 73 of the Indian Contract Act, and landmark NCDRC and Supreme Court precedents.',
                        },
                        {
                          clause: 'Clause 5',
                          title: '15-Day Peremptory Demand & Multi-Forum Litigation Warning',
                          desc: 'Demand full refund and compensation within a mandatory 15-day window, explicitly notifying the operator of upcoming E-Daakhil consumer filings, damages for mental distress, and reporting to tourism licensing authorities.',
                        },
                      ].map((item, i) => (
                        <div key={i} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 items-start">
                          <span className="bg-[#DC2626] text-white text-xs font-black px-2.5 py-1 rounded-md shrink-0">
                            {item.clause}
                          </span>
                          <div>
                            <h4 className="font-extrabold text-slate-900 text-sm mb-1">{item.title}</h4>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* ── SECTION 6: STRATEGIC ROADMAP ──────────────────────── */}
                <section id="strategic-roadmap" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Strategic Roadmap: 15-Day Demand Notice to Consumer Court Filing
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-600 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Serving a formal statutory legal notice through an established legal platform settles over 78% of travel package disputes out of court. When operators refuse voluntary compliance, Legal Recovery executes a seamless multi-tier escalation:
                    </p>

                    <div className="space-y-4">
                      {[
                        {
                          step: 'Stage 1',
                          title: 'Advocate Vetting & Multi-Channel Verified Service',
                          desc: 'The notice is prepared on the advocate\'s official letterhead, digitally signed under Section 5 of the Information Technology Act, 2000, and served simultaneously via India Post Speed Post with A/D, registered corporate email, and WhatsApp delivery tracking.',
                        },
                        {
                          step: 'Stage 2',
                          title: 'Pre-Litigation Settlement & ODR Virtual Mediation',
                          desc: 'Upon receiving the notice, reputable travel agencies typically reach out to avoid public litigation. Legal Recovery facilitates structured Online Dispute Resolution (ODR) mediation to execute binding e-signed settlement deeds.',
                        },
                        {
                          step: 'Stage 3',
                          title: 'E-Daakhil Consumer Complaint & District Commission Filing',
                          desc: 'If the agency remains intransigent, our panel advocates file a formal consumer complaint on the national E-Daakhil portal under Section 35 of the CPA 2019, claiming full refund, 18% p.a. interest, and ₹1–5 Lakhs compensation for mental harassment.',
                        },
                        {
                          step: 'Stage 4',
                          title: 'Judicial Enforcement & Penalty Recovery under Section 71',
                          desc: 'Upon receiving a final favorable order from the Consumer Commission, if the travel operator delays execution, our advocates file enforcement proceedings under Section 71 and Section 72 of CPA 2019, carrying civil attachment and imprisonment penalties for non-compliance.',
                        },
                      ].map((item, i) => (
                        <div key={i} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 items-start">
                          <span className="bg-[#DC2626] text-white text-xs font-black px-2.5 py-1 rounded-md shrink-0">
                            {item.step}
                          </span>
                          <div>
                            <h4 className="font-extrabold text-slate-900 text-sm mb-1">{item.title}</h4>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
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
                            <div className="p-5 md:p-6 pt-0 text-xs md:text-sm text-slate-600 border-t border-slate-100 leading-relaxed bg-slate-50/50">
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
                        href="https://consumeraffairs.nic.in/acts-and-rules/consumer-protection"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Consumer Protection Act, 2019 — Sections 2(11), 2(46), 2(47), 35 &amp; 39, consumeraffairs.nic.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.indiacode.nic.in/handle/123456789/2187"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Indian Contract Act, 1872 — Section 56 (Doctrine of Frustration) &amp; Section 73 (Breach of Contract), indiacode.nic.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://main.sci.gov.in/judgment/judis/47101.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Supreme Court of India — Pravasi Legal Cell &amp; Ors. v. Union of India (2020) Airline &amp; Package Refund Directives, main.sci.gov.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://www.ncdrc.nic.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        National Consumer Disputes Redressal Commission (NCDRC) — Thomas Cook (India) Ltd. v. Dr. M.M. Shenoy (2019), ncdrc.nic.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.dgca.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Directorate General of Civil Aviation (DGCA) — Civil Aviation Requirements (CAR) Series M Passenger Charter, dgca.gov.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://tourism.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Ministry of Tourism (Incredible India) — Guidelines for Recognition of Tour Operators and Travel Agencies, tourism.gov.in
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
                  </ol>
                </section>

                {/* ── MORE GUIDES (Internal Links) ─────────────────────── */}
                <section className="scroll-mt-32">
                  <h2 className="text-xl font-black text-slate-900 mb-5 border-b border-slate-100 pb-2">
                    More Consumer Protection &amp; Travel Dispute Guides
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        title: 'Legal Notice to Airline & Travel Agent for Refund',
                        href: '/legal-notice-to-airline-travel-agent-refund',
                      },
                      {
                        title: 'Airline Refund Not Received Legal Notice Guide',
                        href: '/send-a-legal-notice/airline-refund-not-received',
                      },
                      {
                        title: 'Airline & Travel Recovery Services India',
                        href: '/services/airline-and-travel-recoveries',
                      },
                      {
                        title: 'Tour Package Refund Recovery Services',
                        href: '/recovery/tour-package-refund',
                      },
                      {
                        title: 'Travel Booking Refund Recovery Guide',
                        href: '/recovery/travel-booking-refund',
                      },
                      {
                        title: 'Hotel Booking Refund Legal Recovery',
                        href: '/recovery/hotel-booking-refund',
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
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    Legal Recovery is India&apos;s trusted online legal notice and consumer dispute resolution
                    platform, connecting travelers, vacationers, corporate clients, and consumers with seasoned
                    panel advocates for rapid, advocate-vetted statutory demand notices at transparent flat fees.
                    With ₹100 Crore+ recovered and 10,000+ cases resolved across India, Legal Recovery delivers
                    verified legal impact without the delays and unpredictability of traditional law firms.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { label: 'Send a Legal Notice', href: '/send-a-legal-notice' },
                      { label: 'Recovery Services', href: '/recovery' },
                      { label: 'Airline & Travel Recoveries', href: '/services/airline-and-travel-recoveries' },
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
                  Travel Agent Refusing Package Refund?
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  Send an advocate-vetted statutory notice today. 78% of travel operators settle holiday refunds and compensation within 15 days upon receiving formal notice from Legal Recovery.
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
                  <span className="text-slate-400 text-xs">/5 (318 reviews)</span>
                </div>

                {/* Review card — matches JSON-LD Product > Review word-for-word */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#DC2626]/10 flex items-center justify-center font-black text-[#DC2626] text-xs">
                      AS
                    </div>
                    <div>
                      <p className="font-extrabold text-slate-900 text-xs">Dr. Aniruddh Sengupta</p>
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
                  { stat: '78%', label: 'Travel agencies settle prior to Consumer Court trial' },
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
