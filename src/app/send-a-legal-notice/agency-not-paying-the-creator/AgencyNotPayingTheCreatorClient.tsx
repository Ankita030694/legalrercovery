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
    question: 'Can a content creator or influencer send a legal notice to an agency for unpaid brand campaign deliverables in India?',
    answer:
      'Yes, a digital content creator, influencer, UGC artist, or freelance media professional can issue an advocate-drafted statutory legal notice under Section 70 and Section 73 of the Indian Contract Act, 1872, demanding immediate liquidation of outstanding campaign fees, production reimbursements, and applicable statutory interest. The legal notice formally establishes the agency’s contractual default, itemizes delivered milestones and published social media assets, and provides a strict 15-day peremptory timeline before initiating legal recovery under Order 37 of the Code of Civil Procedure, 1908 or filing an MSEFC petition under the MSMED Act, 2006. Serving this statutory demand creates an indispensable evidentiary foundation and triggers personal legal liability for agency proprietors and managing directors.',
  },
  {
    question: 'Can an influencer marketing agency legally withhold creator payments claiming that the end-client or brand has not cleared the invoice?',
    answer:
      'No, under Indian contract law, an advertising or influencer marketing agency is an independent contracting principal in relation to the creator unless an explicit, valid "pay-when-paid" clause was bilaterally executed prior to campaign commencement. Under Section 70 of the Indian Contract Act, 1872, once the creator completes the agreed deliverables and the agency accepts and exploits the creative output, the agency is unconditionally bound to make compensation regardless of third-party brand receivables. The Delhi High Court and various commercial tribunals have repeatedly ruled that back-to-back payment dependencies cannot be unilaterally imposed on individual service providers without express, unambiguous written covenants.',
  },
  {
    question: 'Can an unpaid creator revoke content usage rights and sue the agency or brand for copyright infringement?',
    answer:
      'Under Section 19(1) and Section 19(3) of the Copyright Act, 1957, any assignment or commercial license of intellectual property rights is legally contingent upon the actual payment of agreed royalties and consideration. If an agency defaults on payment, the commercial license automatically lapses or becomes revocable, rendering the continued broadcasting, whitelisting, or commercial utilization of the content by either the agency or the end-brand an actionable infringement under Section 51 of the Copyright Act. An advocate-drafted statutory legal notice can incorporate an immediate Cease-and-Desist demand, compelling both agency and corporate brand to take down the assets or face statutory damages and interim injunctions under Section 55.',
  },
  {
    question: 'How can Udyam-registered creators leverage the MSME Samadhaan portal against defaulting marketing agencies?',
    answer:
      'Creators holding an Udyam Registration Certificate under the MSMED Act, 2006 can utilize Section 15 to enforce a statutory payment deadline of 45 days from the date of deliverable acceptance. If the agency fails to disburse payment within 45 days, Section 16 mandates payment of compound interest with monthly rests at three times the Reserve Bank of India (RBI) benchmark rate. The creator can file an online petition before the Micro and Small Enterprises Facilitation Council (MSEFC) through the MSME Samadhaan portal, initiating mandatory conciliation and binding statutory arbitration that results in an enforceable arbitral award executable as a court decree.',
  },
  {
    question: 'What is the statutory limitation period for recovering unpaid influencer and digital creator dues in India?',
    answer:
      'Under Article 18 and Article 55 of the Schedule to the Limitation Act, 1963, the statutory limitation period to initiate legal recovery proceedings for unpaid service invoices or breach of contract is exactly three years from the date the payment fell due or the breach occurred. Serving a formal advocate legal notice within this three-year window serves as an authoritative demand that crystallizes the default and establishes conclusive documentary evidence of pre-litigation notice. Furthermore, any written acknowledgment of the debt by the agency over WhatsApp, email, or Slack resets the three-year limitation clock under Section 18 of the Limitation Act.',
  },
  {
    question: 'Can a creator initiate criminal proceedings against an agency for cheating or criminal breach of trust?',
    answer:
      'Yes, if an advertising agency collected the campaign remuneration directly from the brand client on behalf of the creator but deliberately misappropriated or diverted those designated funds, the creator can initiate criminal proceedings alongside civil recovery. The creator can file a formal police complaint under Section 316 of the Bharatiya Nyaya Sanhita, 2023 (BNS) for criminal breach of trust and Section 318 of the BNS for cheating and dishonest inducement of work. Highlighting these criminal implications in the formal legal notice significantly accelerates out-of-court dispute resolution by holding corporate directors and agency founders personally accountable.',
  },
];

/* ─── JSON-LD SCHEMA (@graph) ──────────────────────────────────────────── */
const pageUrl =
  'https://legalrecovery.in/send-a-legal-notice/agency-not-paying-the-creator';
const ogImage =
  'https://legalrecovery.in/images/og/agency-not-paying-the-creator.jpg';

const reviewBodyText =
  'When a prominent digital marketing agency hired me for a 4-deliverable festive tech campaign across Instagram and YouTube with a total invoice value of ₹4,85,000, they went completely silent after the content went live and delivered 1.2M+ organic impressions. For over four months, the agency repeatedly gave excuses like "client payment is pending" and refused to honor the Net-30 credit terms in our Scope of Work. Legal Recovery drafted a formidable statutory legal notice under Section 70 and Section 73 of the Indian Contract Act, Section 19 of the Copyright Act, and the MSMED Act, giving them 15 days to settle the dues or face copyright revocation and MSEFC recovery. Within 10 days of service via Speed Post and email, the agency directors panicked about the copyright infringement claim and disbursed the entire ₹4,85,000 plus 18% p.a. interest. Outstanding legal support for digital creators!';

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
        'Legal Notice to Agency for Unpaid Creator Payment | Recover Dues India',
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
      name: 'Legal Notice to Agency for Unpaid Creator Payment | Recover Dues India',
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
          name: 'Agency Not Paying Creator Payment Recovery',
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
      name: 'Step-by-Step Legal Recovery Roadmap for Creators Against Marketing Agencies in India',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Compile Campaign Evidence Chain: Scope of Work (SOW), deliverables approval emails, live post URLs, engagement metrics, and acknowledged invoices under Section 63 BSA',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Issue Final Formal Demand Letter & Intimation of Commercial License Revocation under Section 19 of the Copyright Act',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Engage Panel Advocate to Draft Comprehensive Statutory Legal Demand Notice incorporating Indian Contract Act, MSMED Act, and BNS provisions',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Dispatch Notice Simultaneously via India Post Speed Post AD, Registered Email, and WhatsApp with Delivery Tracking',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Execute Legal Escalation upon Notice Expiry: File MSEFC Samadhaan petition, Order 37 Summary Suit, Commercial Injunction, or Criminal Complaint under Section 316/318 BNS',
        },
      ],
    },

    /* 7. Product + AggregateRating + Review (matches sidebar UI word-for-word) */
    {
      '@type': 'Product',
      name: 'Legal Notice to Agency for Creator & Influencer Payment Recovery',
      description:
        'Advocate-drafted statutory demand notice service for content creators, influencers, media artists, and freelance talent to recover unpaid brand campaign dues, usage rights fees, and production retainers from marketing agencies across India.',
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
            name: 'Ananya Deshmukh',
          },
          reviewBody: reviewBodyText,
        },
      ],
    },
  ],
};

/* ─── COMPONENT ─────────────────────────────────────────────────────────── */
export default function AgencyNotPayingTheCreatorClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: 'statutory-framework', title: '1. Statutory Framework: Contract, Copyright & MSME Laws' },
    { id: 'agency-liability-defense', title: '2. The "Client Hasn\'t Paid Us" Fallacy: Strict Agency Liability' },
    { id: 'copyright-revocation', title: '3. Intellectual Property Leverage: Revoking Commercial Licenses' },
    { id: 'evidentiary-checklist', title: '4. Pre-Notice Evidentiary Checklist & Section 63 BSA Records' },
    { id: 'essential-clauses', title: '5. Key Clauses in a Statutory Demand Notice to Agencies' },
    { id: 'legal-remedies-table', title: '6. Multi-Forum Remedies: MSME, Summary Suit & BNS Action' },
    { id: 'action-roadmap', title: '7. Step-by-Step Roadmap to Recover Unpaid Creator Dues' },
    { id: 'faqs', title: '8. Frequently Asked Questions' },
  ];

  const breadcrumbItems = [
    { label: 'Send a Legal Notice', href: '/send-a-legal-notice' },
    {
      label: 'Agency Not Paying Creator Payment Recovery',
      href: '/send-a-legal-notice/agency-not-paying-the-creator',
    },
  ];

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const shareUrl = encodeURIComponent(pageUrl);
  const shareText = encodeURIComponent(
    'Marketing agency not paying for completed creator campaigns, reels, or deliverables? Send an advocate-vetted legal notice under Indian Contract Act, Copyright Act & MSMED Act! #CreatorEconomy #InfluencerRights #PaymentRecovery'
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
              DIGITAL CREATOR &amp; INFLUENCER PAYMENT RECOVERY
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Legal Notice to Agency for{' '}
              <span className="text-[#DC2626]">Unpaid Creator Payment</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Recover unpaid influencer fees, UGC campaign invoices, video production retainers, and 18% statutory interest from defaulting marketing agencies under the Indian Contract Act, Copyright Act, and MSMED Act.
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
                      onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${encodeURIComponent('Legal Notice to Agency for Unpaid Creator Payment Recovery | Legal Recovery India')}`, '_blank', 'noopener,noreferrer')}
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
                    A digital content creator, influencer, or video producer can serve an advocate-vetted statutory legal notice to an advertising or talent management agency under{' '}
                    <span className="font-semibold text-slate-800">
                      Section 70 and Section 73 of the Indian Contract Act, 1872
                    </span>{' '}
                    and{' '}
                    <span className="font-semibold text-slate-800">
                      Section 19 of the Copyright Act, 1957
                    </span>
                    , demanding immediate disbursement of unpaid campaign invoices, late payment interest, and revoking commercial licensing rights within 15 days. Under Indian contract jurisprudence, an agency remains strictly liable to compensate the creator once deliverables are approved and published, regardless of whether the third-party brand client has cleared the agency’s internal invoice. If the agency fails to settle the dues within the stipulated 15-day window, the creator can initiate fast-track recovery through the{' '}
                    <span className="font-semibold text-slate-800">
                      MSME Samadhaan MSEFC Portal
                    </span>{' '}
                    (yielding 3× RBI compound interest under the MSMED Act, 2006), institute a summary suit under{' '}
                    <span className="font-semibold text-slate-800">
                      Order 37 of the Code of Civil Procedure, 1908
                    </span>
                    , or file a criminal complaint for criminal breach of trust under{' '}
                    <span className="font-semibold text-slate-800">
                      Section 316 and Section 318 of the Bharatiya Nyaya Sanhita, 2023 (BNS)
                    </span>
                    .
                  </p>
                </div>

                {/* ── INFOGRAPHIC IMAGE EMBED ───────────────────────────── */}
                <div className="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white">
                  <img
                    src="/images/og/agency-not-paying-the-creator.jpg"
                    alt="Legal Recovery Workflow Infographic for Content Creators and Influencers in India"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 bg-slate-50 border-t border-slate-100 text-xs text-slate-500 font-medium text-center">
                    Figure 1: Statutory Roadmap for Indian Creators and Influencers to Recover Unpaid Brand Campaign Dues from Marketing Agencies.
                  </div>
                </div>

                {/* ── SECTION 1: STATUTORY FRAMEWORK ───────────────────── */}
                <section id="statutory-framework" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                    1. Statutory Framework: Contract, Copyright &amp; MSME Creator Laws
                  </h2>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    The rapid expansion of India&apos;s digital creator economy has witnessed thousands of lifestyle influencers, YouTube filmmakers, podcast hosts, and user-generated content (UGC) specialists executing high-value brand endorsements through intermediary influencer marketing and media buying agencies. However, payment defaults, indefinite credit extensions (Net-90, Net-120 days), and arbitrary fee deductions have become systemic issues. Under Indian jurisprudence, digital creators are not defenseless freelance workers; they are specialized commercial service providers protected by a robust statutory framework spanning the Indian Contract Act, the Copyright Act, and the Micro, Small and Medium Enterprises Development (MSMED) Act.
                  </p>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    When an agency engages a creator via a formal Scope of Work (SOW), master service agreement, digital contract, or even written WhatsApp/email communication, a legally binding contract is established. When the agency withholds payment after accepting and commercializing the creator&apos;s output, multiple legal grounds are triggered simultaneously:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                      <div className="flex items-center gap-2 mb-2 font-black text-slate-900 text-sm md:text-base">
                        <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">
                          §
                        </span>
                        Indian Contract Act, 1872
                      </div>
                      <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                        <strong>Section 70:</strong> Obligation of person enjoying benefit of non-gratuitous act. As affirmed by the Supreme Court in{' '}
                        <span className="font-semibold text-slate-800">
                          State of West Bengal v. B.K. Mondal &amp; Sons (AIR 1962 SC 779)
                        </span>
                        , where a party receives and retains the benefit of creative work, they are legally bound to pay compensation. Furthermore,{' '}
                        <strong>Section 73</strong> grants right to liquidated damages and loss of commercial earnings.
                      </p>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                      <div className="flex items-center gap-2 mb-2 font-black text-slate-900 text-sm md:text-base">
                        <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">
                          ©
                        </span>
                        Copyright Act, 1957
                      </div>
                      <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                        <strong>Section 14 &amp; Section 19(3):</strong> The author is the first owner of copyright in artistic and cinematographic works. Any commercial assignment or broadcasting license is statutorily conditional upon payment of agreed consideration. Non-payment automatically invalidates the license, transforming ongoing usage into actionable copyright infringement under{' '}
                        <span className="font-semibold text-slate-800">
                          Section 51 of the Copyright Act, 1957
                        </span>
                        .
                      </p>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                      <div className="flex items-center gap-2 mb-2 font-black text-slate-900 text-sm md:text-base">
                        <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">
                          M
                        </span>
                        MSMED Act, 2006 (Udyam Creators)
                      </div>
                      <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                        <strong>Section 15 &amp; Section 16:</strong> Mandates payment within 45 days maximum. Delayed settlement attracts mandatory compound interest with monthly rests at 3× the RBI bank rate. Creators registered on Udyam can file direct recovery claims through the{' '}
                        <span className="font-semibold text-slate-800">
                          MSME Samadhaan Portal
                        </span>
                        .
                      </p>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                      <div className="flex items-center gap-2 mb-2 font-black text-slate-900 text-sm md:text-base">
                        <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">
                          ⚖
                        </span>
                        Bharatiya Nyaya Sanhita, 2023 (BNS)
                      </div>
                      <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                        <strong>Section 316 &amp; Section 318:</strong> Replaces IPC 406 &amp; 420. If an agency collected brand sponsorship payments specifically ear-marked for the creator but diverted or siphoned those funds for internal operational cash flow, agency founders face criminal liability for criminal breach of trust and cheating.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 2: THE "CLIENT HASN'T PAID US" FALLACY ──── */}
                <section id="agency-liability-defense" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                    2. The &quot;Client Hasn&apos;t Paid Us&quot; Fallacy: Strict Agency Liability
                  </h2>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    The single most prevalent defense raised by influencer marketing agencies and media buying houses is: <em>&quot;We are waiting for the brand client to clear our master campaign invoice. As soon as the brand pays us, we will disburse your creator fees.&quot;</em>
                  </p>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    Under Indian commercial contract law, this justification is legally invalid and legally unenforceable unless an express, explicit &quot;pay-when-paid&quot; or &quot;contingent contract&quot; clause (under Section 31 of the Indian Contract Act) was mutually drafted, understood, and signed prior to the execution of the deliverables. Here is why the agency remains strictly and independently liable:
                  </p>

                  <div className="space-y-4">
                    <div className="border-l-4 border-[#DC2626] pl-4 py-1">
                      <h3 className="font-extrabold text-slate-900 text-sm md:text-base mb-1">
                        A. Doctrine of Privity of Contract
                      </h3>
                      <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                        The legal contract exists strictly between the creator and the agency. The creator has no direct contractual privity with the end-brand. Therefore, third-party operational bottlenecks, vendor billing delays, or commercial disputes between the agency and the corporate brand cannot be transferred onto the creator as an excuse for non-payment.
                      </p>
                    </div>

                    <div className="border-l-4 border-[#DC2626] pl-4 py-1">
                      <h3 className="font-extrabold text-slate-900 text-sm md:text-base mb-1">
                        B. Acceptance of Unconditional Deliverables
                      </h3>
                      <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                        Once the agency reviews the creator&apos;s draft script, approves the video reel, instructs the creator to publish the content, or takes delivery of raw video footage, the contract transitions from executory to executed on the creator&apos;s part. The agency has enjoyed the full economic utility of the creator&apos;s work and cannot withhold remuneration on unstated contingencies.
                      </p>
                    </div>

                    <div className="border-l-4 border-[#DC2626] pl-4 py-1">
                      <h3 className="font-extrabold text-slate-900 text-sm md:text-base mb-1">
                        C. Unilateral Credit Term Expansion Is an Actionable Breach
                      </h3>
                      <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                        Agencies frequently issue purchase orders with Net-30 or Net-45 credit terms but unilaterally drag payouts to 120 or 180 days. Such arbitrary delays constitute a material breach under{' '}
                        <span className="font-semibold text-slate-800">
                          Section 73 of the Indian Contract Act, 1872
                        </span>
                        , entitling the creator to sue for the principal amount plus commercial interest from the exact date of default.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 3: COPYRIGHT REVOCATION & IP LEVERAGE ────── */}
                <section id="copyright-revocation" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                    3. Intellectual Property Leverage: Revoking Commercial Licenses
                  </h2>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    One of the most potent legal levers available to creators against recalcitrant agencies is intellectual property revocation under the{' '}
                    <span className="font-semibold text-slate-800">
                      Copyright Act, 1957
                    </span>
                    . Under Indian intellectual property laws, the creator is the author and first owner of the copyright in their original creative work (scripts, voiceovers, video recordings, graphics, photographs, and performance).
                  </p>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    When a brand campaign is launched, the creator merely grants a limited commercial usage license (or conditional assignment) to the agency and brand to publish, broadcast, boost, or whitelist the content. This grant of rights is legally dependent upon full payment of the agreed consideration:
                  </p>

                  <div className="bg-red-50/70 border border-red-200 p-6 rounded-2xl space-y-4">
                    <h3 className="font-extrabold text-red-950 text-base flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#DC2626]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      The Three-Pronged IP Enforcement Mechanism in Legal Notices:
                    </h3>
                    <ul className="space-y-3 text-xs md:text-sm text-slate-800 list-disc list-inside">
                      <li>
                        <strong>Statutory Revocation under Section 19(3):</strong> The notice explicitly declares that due to the agency&apos;s total failure of consideration, all commercial broadcasting licenses, whitelisting permissions, and digital distribution rights are immediately terminated and revoked.
                      </li>
                      <li>
                        <strong>Cease-and-Desist Injunction Notice to Agency and End-Brand:</strong> The notice notifies both the marketing agency and the ultimate corporate advertiser that any continued streaming, performance, paid ad boosting (Meta Ads, Google Ads), or archiving of the creator&apos;s likeness constitutes willful copyright infringement under Section 51 of the Copyright Act.
                      </li>
                      <li>
                        <strong>Civil Damages &amp; Injunctions under Section 55:</strong> The notice warns of immediate proceedings before the High Court or Commercial District Court for interim ex-parte injunctions, statutory damages, and rendition of accounts for all commercial profits generated during the unauthorized broadcast period.
                      </li>
                    </ul>
                  </div>
                  <p className="text-slate-650 text-xs md:text-sm italic">
                    *Note: Copying the end-brand&apos;s legal and compliance team on the statutory notice creates immediate urgency. Major corporate brands will instantly pressure the agency to liquidate the creator&apos;s invoice to prevent public copyright litigation or brand reputational damage.*
                  </p>
                </section>

                {/* ── SECTION 4: EVIDENTIARY CHECKLIST UNDER SECTION 63 BSA ─ */}
                <section id="evidentiary-checklist" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                    4. Pre-Notice Evidentiary Checklist &amp; Section 63 BSA Records
                  </h2>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    Under modern Indian evidence law, electronic communications are fully admissible in court. The{' '}
                    <span className="font-semibold text-slate-800">
                      Bharatiya Sakshya Adhiniyam, 2023 (BSA)
                    </span>{' '}
                    under Section 63 (which replaces Section 65B of the Indian Evidence Act, 1872) governs the admissibility of digital records. Prior to drafting a statutory legal notice, creators must consolidate and preserve the following evidentiary chain:
                  </p>

                  <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                    <div className="bg-slate-900 text-white p-4 font-extrabold text-sm uppercase tracking-wide">
                      Creator Evidence Matrix for Legal Notice
                    </div>
                    <div className="divide-y divide-slate-100 text-xs md:text-sm">
                      <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-2">
                        <div className="font-black text-slate-900">1. Offer &amp; Scope of Work (SOW)</div>
                        <div className="md:col-span-2 text-slate-650">
                          Agency campaign brief, rate card acceptance, signed contract, master service agreement, or WhatsApp/Email chat confirming deliverables, timelines, and commercial fee.
                        </div>
                      </div>
                      <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-2">
                        <div className="font-black text-slate-900">2. Deliverables Acceptance Proof</div>
                        <div className="md:col-span-2 text-slate-650">
                          Email or WhatsApp confirmations from agency managers stating &quot;Script approved&quot;, &quot;Video approved for live posting&quot;, or &quot;Content looks great, please publish&quot;.
                        </div>
                      </div>
                      <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-2">
                        <div className="font-black text-slate-900">3. Live Content Proof &amp; Analytics</div>
                        <div className="md:col-span-2 text-slate-650">
                          Live URLs of Instagram Reels, YouTube videos, LinkedIn posts, along with timestamped screenshots of engagement analytics, views, impressions, and collaborative tagging.
                        </div>
                      </div>
                      <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-2">
                        <div className="font-black text-slate-900">4. Formally Delivered Invoice</div>
                        <div className="md:col-span-2 text-slate-650">
                          Tax invoice with GSTIN (if registered) or PAN, bank details, invoice number, issue date, and stated payment terms (e.g., Net 15/30), delivered via email with delivery receipt.
                        </div>
                      </div>
                      <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-2">
                        <div className="font-black text-slate-900">5. Follow-Up Trail &amp; Debt Acknowledgment</div>
                        <div className="md:col-span-2 text-slate-650">
                          WhatsApp chats, emails, or call recordings where agency executives acknowledge pending dues (e.g., &quot;Processing this week&quot;, &quot;Checking with accounts team&quot;). Serves as admission of liability under Section 18 of the Limitation Act.
                        </div>
                      </div>
                      <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-2">
                        <div className="font-black text-slate-900">6. Section 63 BSA Electronic Certificate</div>
                        <div className="md:col-span-2 text-slate-650">
                          Statutory electronic evidence certificate confirming that phone/laptop screenshots, PDFs, and message logs were produced from devices operating under regular custody without tampering.
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 5: ESSENTIAL CLAUSES IN STATUTORY NOTICE ──── */}
                <section id="essential-clauses" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                    5. Key Clauses in a Statutory Demand Notice to Agencies
                  </h2>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    A boilerplate or amateur demand letter is routinely disregarded by agency legal desks. An effective statutory legal notice must be issued on an advocate&apos;s official legal stationery, citing precise statutory enactments, quantifying exact principal and interest liabilities, and setting an uncompromised 15-day compliance deadline.
                  </p>

                  <div className="space-y-4">
                    <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                      <h3 className="font-black text-slate-900 text-sm md:text-base mb-2">
                        Clause 1: Parties &amp; Contractual Engagement Details
                      </h3>
                      <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                        Establishes the identity of the digital creator and the marketing agency, detailing the exact campaign name, brand represented, date of engagement, agreed deliverables (e.g., 2 Instagram Reels, 1 YouTube Integration), and contracted commercial remuneration.
                      </p>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                      <h3 className="font-black text-slate-900 text-sm md:text-base mb-2">
                        Clause 2: Complete Performance &amp; Acceptance by Agency
                      </h3>
                      <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                        Explicitly records that the creator fulfilled all creative milestones strictly per specifications, secured written pre-approval, published the content on scheduled dates, and delivered verified viewership numbers without any defect or delay.
                      </p>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                      <h3 className="font-black text-slate-900 text-sm md:text-base mb-2">
                        Clause 3: Invoice Delivery &amp; Unlawful Withholding
                      </h3>
                      <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                        Itemizes the formal invoice numbers, amounts, due dates, and cites repeated dishonored reminders. Emphasizes that third-party client payment delays cannot legally discharge or suspend the agency&apos;s direct obligation under Section 70 and 73 of the Contract Act.
                      </p>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                      <h3 className="font-black text-slate-900 text-sm md:text-base mb-2">
                        Clause 4: Intellectual Property &amp; License Revocation Notice
                      </h3>
                      <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                        Formally revokes all copyright licenses granted under Section 19 of the Copyright Act, 1957. Commands the agency and its corporate brand client to forthwith cease and desist from broadcasting, running paid advertisements, or using the creator&apos;s likeness.
                      </p>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                      <h3 className="font-black text-slate-900 text-sm md:text-base mb-2">
                        Clause 5: Statutory Peremptory Demand &amp; Multi-Forum Warning
                      </h3>
                      <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                        Grants a strict 15-day window from receipt of notice to transfer the entire principal sum plus 18% p.a. interest and legal drafting fees. Warns of immediate filing before the MSEFC Samadhaan council, Order 37 summary recovery, and Section 316/318 BNS criminal proceedings.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 6: LEGAL REMEDIES COMPARISON TABLE ─────────── */}
                <section id="legal-remedies-table" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                    6. Multi-Forum Remedies: MSME, Summary Suit &amp; BNS Action
                  </h2>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    If the marketing agency ignores or fails to comply with the statutory legal demand notice within the 15-day period, the creator can initiate legal action across various specialized forums depending on the claim amount and registration status:
                  </p>

                  <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-sm bg-white">
                    <table className="w-full text-left text-xs md:text-sm">
                      <thead className="bg-slate-900 text-white font-black uppercase text-[11px] tracking-wider">
                        <tr>
                          <th className="p-3.5 md:p-4">Legal Forum / Remedy</th>
                          <th className="p-3.5 md:p-4">Statutory Basis</th>
                          <th className="p-3.5 md:p-4">Interest &amp; Penalty</th>
                          <th className="p-3.5 md:p-4">Resolution Timeline</th>
                          <th className="p-3.5 md:p-4">Suitability</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-700">
                        <tr className="hover:bg-slate-50">
                          <td className="p-3.5 md:p-4 font-bold text-slate-900">
                            MSME Samadhaan (MSEFC)
                          </td>
                          <td className="p-3.5 md:p-4">
                            MSMED Act, 2006 (Sec 15–18)
                          </td>
                          <td className="p-3.5 md:p-4 font-semibold text-[#DC2626]">
                            Compound interest at 3× RBI bank rate
                          </td>
                          <td className="p-3.5 md:p-4">90 – 180 Days</td>
                          <td className="p-3.5 md:p-4">
                            Udyam-registered creators &amp; small media production firms.
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-3.5 md:p-4 font-bold text-slate-900">
                            Summary Suit (Order 37 CPC)
                          </td>
                          <td className="p-3.5 md:p-4">
                            Code of Civil Procedure, 1908
                          </td>
                          <td className="p-3.5 md:p-4">
                            Court-awarded interest (6%–18% p.a.) + costs
                          </td>
                          <td className="p-3.5 md:p-4">6 – 12 Months</td>
                          <td className="p-3.5 md:p-4">
                            Claims based on signed contracts, admitted invoices, or written debt admissions.
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-3.5 md:p-4 font-bold text-slate-900">
                            Commercial Court Suit
                          </td>
                          <td className="p-3.5 md:p-4">
                            Commercial Courts Act, 2015 (Sec 2(1)(c))
                          </td>
                          <td className="p-3.5 md:p-4">
                            Full commercial damages + loss of revenue
                          </td>
                          <td className="p-3.5 md:p-4">6 – 14 Months</td>
                          <td className="p-3.5 md:p-4">
                            High-value agency retainer disputes exceeding ₹3 Lakhs.
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-3.5 md:p-4 font-bold text-slate-900">
                            Copyright Infringement Action
                          </td>
                          <td className="p-3.5 md:p-4">
                            Copyright Act, 1957 (Sec 51, 55)
                          </td>
                          <td className="p-3.5 md:p-4">
                            Statutory damages, profits disgorgement &amp; ad injunction
                          </td>
                          <td className="p-3.5 md:p-4">Immediate (Interim Order in 15–30 Days)</td>
                          <td className="p-3.5 md:p-4">
                            Cases where agency/brand continues running creator video ads without payment.
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-3.5 md:p-4 font-bold text-slate-900">
                            Criminal Complaint (BNS 316/318)
                          </td>
                          <td className="p-3.5 md:p-4">
                            Bharatiya Nyaya Sanhita, 2023
                          </td>
                          <td className="p-3.5 md:p-4 font-semibold text-slate-900">
                            Non-bailable warrant risk &amp; director prosecution
                          </td>
                          <td className="p-3.5 md:p-4">Immediate Police Intimation</td>
                          <td className="p-3.5 md:p-4">
                            Agencies that collected brand funds and misappropriated or ghosted creator.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* ── SECTION 7: STEP-BY-STEP ROADMAP ───────────────────── */}
                <section id="action-roadmap" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                    7. Step-by-Step Roadmap to Recover Unpaid Creator Dues
                  </h2>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    Executing a systematic legal recovery strategy ensures maximum recovery rate while minimizing procedural delays. Here is the exact five-stage process followed by Legal Recovery advocates:
                  </p>

                  <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-2xl bg-[#DC2626] text-white flex-shrink-0 flex items-center justify-center font-black text-base shadow-md">
                        1
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-extrabold text-slate-900 text-base">
                          Stage 1: Complete Case Audit &amp; Electronic Evidence Collation
                        </h3>
                        <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                          Consolidate all digital communications including campaign agreements, SOWs, brief decks, WhatsApp chat logs, script approvals, live social media links, and unpaid invoices into an immutable evidentiary folder supported by Section 63 BSA compliance.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-2xl bg-[#DC2626] text-white flex-shrink-0 flex items-center justify-center font-black text-base shadow-md">
                        2
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-extrabold text-slate-900 text-base">
                          Stage 2: Formal Advocate Legal Notice Drafting
                        </h3>
                        <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                          A seasoned panel advocate drafts a customized statutory legal demand notice itemizing every breach under the Indian Contract Act, invoking copyright license revocation under Section 19 of the Copyright Act, calculating 18% p.a. interest, and establishing a strict 15-day peremptory ultimatum.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-2xl bg-[#DC2626] text-white flex-shrink-0 flex items-center justify-center font-black text-base shadow-md">
                        3
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-extrabold text-slate-900 text-base">
                          Stage 3: Multi-Channel Statutory Dispatch &amp; Tracking
                        </h3>
                        <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                          The notice is dispatched simultaneously via India Post Speed Post with Acknowledgment Due (AD) to the agency&apos;s registered corporate address, and electronically served via tracked email and WhatsApp to agency directors and accounts heads, creating undisputed proof of delivery.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-2xl bg-[#DC2626] text-white flex-shrink-0 flex items-center justify-center font-black text-base shadow-md">
                        4
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-extrabold text-slate-900 text-base">
                          Stage 4: Advocate-Led Out-of-Court Settlement Negotiation
                        </h3>
                        <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                          Over 78% of marketing agencies settle the full principal amount within the 15-day notice period to protect their agency reputation, avoid copyright take-down notices to end-clients, and escape compounding MSME statutory interest.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-2xl bg-[#DC2626] text-white flex-shrink-0 flex items-center justify-center font-black text-base shadow-md">
                        5
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-extrabold text-slate-900 text-base">
                          Stage 5: Judicial Escalation &amp; Enforcement
                        </h3>
                        <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                          If the agency fails to settle within 15 days, our advocates initiate immediate escalation by filing an MSEFC Samadhaan petition, an Order 37 summary recovery suit, an intellectual property injunction application, or a Section 316/318 BNS criminal complaint.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 8: FAQS ACCORDION ─────────────────────────── */}
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
                          className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/50 transition-all"
                        >
                          <button
                            onClick={() => toggleFaq(index)}
                            className="w-full text-left p-5 md:p-6 font-extrabold text-slate-900 flex justify-between items-center text-sm md:text-base gap-4 cursor-pointer hover:bg-slate-50"
                            aria-expanded={isOpen}
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
                      href="https://www.indiacode.nic.in/handle/123456789/2187"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      Indian Contract Act, 1872 (India Code)
                    </a>
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/1367"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      Copyright Act, 1957 (India Code)
                    </a>
                    <span className="text-slate-500">
                      MSME Samadhaan Portal (Ministry of MSME)
                    </span>
                    <span className="text-slate-500">
                      Code of Civil Procedure, 1908 (Order 37)
                    </span>
                    <span className="text-slate-500">
                      Commercial Courts Act, 2015
                    </span>
                    <span className="text-slate-500">
                      Limitation Act, 1963
                    </span>
                    <span className="text-slate-500">
                      Supreme Court of India Official Judgments
                    </span>
                  </div>
                </section>

                {/* ── TOPICAL AUTHORITY (INTERNAL INTERLINKING) ──────────── */}
                <section className="border-t border-slate-200 pt-8 space-y-6">
                  <h2 className="text-xl md:text-2xl font-black text-slate-900">
                    More Payment &amp; Freelancer Protection Guides
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        title: 'Complete Freelancer Payment Recovery Guide India',
                        href: '/freelancer-payment-recovery-guide',
                      },
                      {
                        title: 'How a Freelancer Can Send a Legal Notice to Client',
                        href: '/how-freelancer-can-send-legal-notice-to-client-india',
                      },
                      {
                        title: 'MSME Act for Freelancer Payment Recovery',
                        href: '/msme-act-freelancer-payment-recovery',
                      },
                      {
                        title: 'What Evidence Should a Freelancer Collect for Recovery',
                        href: '/freelancer-evidence-checklist-payment-recovery-india',
                      },
                      {
                        title: 'Legal Notice to Company for Unpaid Commission',
                        href: '/send-a-legal-notice/commission-not-paid-by-company',
                      },
                      {
                        title: 'Legal Notice for Unpaid B2B Invoices',
                        href: '/send-a-legal-notice/b2b-invoice-not-recieved',
                      },
                      {
                        title: 'Can WhatsApp Chats Be Used as Evidence in Court?',
                        href: '/can-whatsapp-chat-be-used-as-evidence-in-money-recovery-case',
                      },
                      {
                        title: 'How to Recover Money Without a Written Agreement',
                        href: '/how-to-recover-money-without-written-agreement',
                      },
                      {
                        title: 'What Legal Options Does a Freelancer Have for Unpaid Dues?',
                        href: '/freelancer-payment-recovery-legal-options-india',
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
                    platform, connecting content creators, influencers, media professionals, and digital
                    agencies with seasoned panel advocates for rapid, advocate-vetted statutory demand notices
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
                  Agency Withholding Your Creator Payment?
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  Send an advocate-vetted statutory notice today. Over 78% of marketing agencies settle unpaid campaign invoices within 15 days of notice service.
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
                  { stat: '78%', label: 'Defaulting agencies settle before judicial escalation' },
                  { stat: '₹4.2CR+', label: 'Total amount recovered for creators & businesses' },
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
