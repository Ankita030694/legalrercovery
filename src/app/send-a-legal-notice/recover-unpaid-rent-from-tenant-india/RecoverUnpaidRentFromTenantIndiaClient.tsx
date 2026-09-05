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
    question: 'Can a landlord send a legal notice to a tenant for not paying rent in India?',
    answer:
      'Yes, any landlord or property owner whose tenant has defaulted on monthly rent can issue an advocate-drafted statutory legal notice demanding payment of all arrears within a fixed compliance period. Under Section 106 of the Transfer of Property Act, 1882, a valid notice to quit is a legal prerequisite before initiating eviction proceedings, and a combined rent-recovery-cum-eviction notice simultaneously satisfies this mandatory statutory requirement while creating an enforceable documentary record of the default. Serving the notice through a qualified advocate on official legal letterhead significantly elevates the psychological and legal pressure on a defaulting tenant.',
  },
  {
    question: 'What are the legal grounds for eviction of a non-paying tenant in India?',
    answer:
      'Non-payment of rent is the single strongest statutory ground for eviction recognized across all state Rent Control Acts in India, including the Delhi Rent Control Act, the Maharashtra Rent Control Act, 1999, the Karnataka Rent Act, 2001, and the Model Tenancy Act, 2021. A landlord must typically issue a formal demand notice specifying the exact unpaid amount and give the tenant a statutory opportunity to cure the default—usually 15 days under the Model Tenancy Act—before approaching the Rent Authority or Civil Court for an eviction decree. Combining the demand for arrears with an eviction notice in a single advocate-drafted document is the most efficient pre-litigation strategy.',
  },
  {
    question: 'How much rent arrears must a tenant owe before a legal notice can be sent?',
    answer:
      'Indian law does not impose any minimum threshold of arrears before a landlord can issue a formal legal notice to a defaulting tenant; even a single month of unpaid rent entitles the landlord to serve a statutory demand notice. However, most experienced property advocates recommend allowing at least two to three consecutive months of non-payment to accumulate before proceeding, as multiple months of default strengthens eviction petitions before Rent Authority tribunals and demonstrates a deliberate pattern of conduct rather than an isolated administrative delay. The legal notice must precisely quantify each month of arrears, the applicable rent rate, any outstanding utility charges, and accrued interest.',
  },
  {
    question: 'What happens if the tenant ignores the legal notice for unpaid rent?',
    answer:
      'If a defaulting tenant fails to pay the demanded arrears within the 15-day or 30-day compliance period specified in the legal notice, the landlord can immediately initiate a multi-pronged legal action, including filing an eviction petition before the designated Rent Authority or Civil Court under the applicable State Rent Control Act, filing a summary civil suit for recovery of rent arrears under Order XXXVII of the Code of Civil Procedure, 1908, and—where applicable—lodging a police complaint if the tenant has caused deliberate property damage. The legal notice itself becomes the foundational evidentiary document in all these proceedings, evidencing the landlords good-faith attempt at pre-litigation resolution.',
  },
  {
    question: 'Is a rent agreement mandatory to send a legal notice to a tenant?',
    answer:
      'A registered rent agreement is the strongest evidentiary anchor for a legal notice, but Indian courts and Rent Authorities have consistently adjudicated tenancy disputes even in the absence of a formal written lease if oral tenancy and the landlord-tenant relationship can be established through bank transfer records, money order receipts, WhatsApp acknowledgments, or witnessed oral agreements. Under Section 107 of the Transfer of Property Act, 1882, leases of immovable property for a period exceeding one year must be made by a registered instrument, but month-to-month tenancies are recognized without registration. An advocate can draft a high-impact notice that establishes the tenancy relationship through documentary evidence even where no formal written agreement exists.',
  },
];

/* ─── JSON-LD SCHEMA (@graph) ──────────────────────────────────────────── */
const pageUrl =
  'https://legalrecovery.in/send-a-legal-notice/recover-unpaid-rent-from-tenant-india';
const ogImage =
  'https://legalrecovery.in/images/og/recover-unpaid-rent-from-tenant-india.jpg';

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
      headline: 'Legal Notice to Tenant for Not Paying Rent | Recover Unpaid Rent India',
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
      datePublished: '2024-07-10T08:00:00+05:30',
      dateModified: new Date().toISOString(),
    },

    /* 2. WebPage with SpeakableSpecification */
    {
      '@type': 'WebPage',
      '@id': pageUrl,
      name: 'Legal Notice to Tenant for Not Paying Rent | Recover Unpaid Rent India',
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
          name: 'Recover Unpaid Rent from Tenant India',
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
      name: 'Steps to Send a Legal Notice to Tenant for Not Paying Rent',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Compile all rent-payment records: bank receipts, UPI transfers, and the registered/notarized rent agreement',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Calculate total rent arrears month-wise, including any agreed escalation clause and penalty interest',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Engage an advocate to draft a statutory demand notice citing TPA Section 106, applicable State Rent Control Act, and CPC Order XXXVII',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: "Dispatch the notice via Registered Post AD and Speed Post to the tenant's rental address and permanent address",
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'If unpaid within 15 days, file an eviction petition before the Rent Authority or Civil Court and a summary suit for rent recovery',
        },
      ],
    },

    /* 7. Product + AggregateRating + Review (must match sidebar UI word-for-word) */
    {
      '@type': 'Product',
      name: 'Legal Notice to Tenant for Not Paying Rent',
      description:
        'Advocate-drafted statutory demand notice service for landlords to recover unpaid rent arrears, serve a combined eviction cum rent-recovery notice, and initiate Rent Authority proceedings against defaulting tenants across India.',
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
            name: 'Rajesh Mehta',
          },
          reviewBody:
            'My tenant had not paid rent for 6 months totalling ₹1.8 Lakhs and was refusing all calls. Legal Recovery drafted a hard-hitting eviction cum rent recovery notice citing TPA Section 106 and Delhi Rent Control Act. The tenant paid the entire arrears within 9 days of receiving the notice to avoid eviction proceedings. Highly professional and fast service.',
        },
      ],
    },
  ],
};

/* ─── COMPONENT ─────────────────────────────────────────────────────────── */
export default function RecoverUnpaidRentFromTenantIndiaClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: 'legal-framework', title: '1. Statutory Framework: Landlord Rights & Tenant Default' },
    { id: 'grounds-eviction', title: '2. Legal Grounds for Eviction of Non-Paying Tenant' },
    { id: 'document-checklist', title: '3. Document Checklist Before Sending the Notice' },
    { id: 'forum-comparison', title: '4. Forum Comparison: Rent Authority vs Civil Court' },
    { id: 'step-by-step', title: '5. Step-by-Step Notice Drafting & Dispatch Process' },
    { id: 'notice-clauses', title: '6. Essential Clauses in an Effective Rent Recovery Notice' },
    { id: 'after-notice', title: '7. What Happens After Notice: Escalation & Enforcement' },
    { id: 'faqs', title: '8. Frequently Asked Questions' },
  ];

  const breadcrumbItems = [
    { label: 'Send a Legal Notice', href: '/send-a-legal-notice' },
    {
      label: 'Recover Unpaid Rent from Tenant',
      href: '/send-a-legal-notice/recover-unpaid-rent-from-tenant-india',
    },
  ];

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const shareUrl = encodeURIComponent(pageUrl);
  const shareText = encodeURIComponent(
    'Tenant not paying rent? Send a legal notice to recover unpaid rent & initiate eviction in India! #RentRecovery #LegalNotice'
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
              RENTAL DUES &amp; EVICTION NOTICE
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Legal Notice to Tenant for{' '}
              <span className="text-[#DC2626]">Not Paying Rent</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Recover unpaid rent arrears, serve a combined eviction cum rent-recovery notice, and
              initiate Rent Authority proceedings against defaulting tenants — across India.
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
                  {/* Social Share */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2">
                      Share:
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        window.open(
                          `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`,
                          '_blank',
                          'noopener,noreferrer,width=600,height=400'
                        )
                      }
                      className="w-8 h-8 rounded-full bg-black text-white hover:opacity-80 flex items-center justify-center transition-opacity cursor-pointer"
                      aria-label="Share on X (Twitter)"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        window.open(
                          `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
                          '_blank',
                          'noopener,noreferrer,width=600,height=400'
                        )
                      }
                      className="w-8 h-8 rounded-full bg-[#1877F2] text-white hover:opacity-80 flex items-center justify-center transition-opacity cursor-pointer"
                      aria-label="Share on Facebook"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01z" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        window.open(
                          `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${encodeURIComponent('Legal Notice to Tenant for Not Paying Rent | Recover Unpaid Rent India')}`,
                          '_blank',
                          'noopener,noreferrer,width=600,height=400'
                        )
                      }
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
                    A landlord can send an advocate-drafted statutory legal notice to a tenant for
                    not paying rent under <strong className="text-slate-900 font-semibold">Section 106 of the Transfer of Property Act, 1882</strong> and the applicable state Rent Control Act, demanding full payment of all rent
                    arrears within 15 days. The notice simultaneously satisfies the mandatory
                    statutory notice-to-quit requirement and creates a formal evidentiary record
                    of default, empowering the landlord to file an eviction petition and a summary
                    civil suit for rent recovery if the tenant fails to comply. Non-payment of rent
                    for two or more consecutive months is the strongest recognized ground for
                    eviction under all major Indian Rent Control statutes, including the <strong className="text-slate-900 font-semibold">Delhi Rent Control Act, 1958</strong>, the Maharashtra Rent Control Act, 1999, and the Model Tenancy Act, 2021.
                  </p>
                </div>

                {/* ── SECTION 1: STATUTORY FRAMEWORK ────────────────────── */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. Statutory Framework: Landlord Rights &amp; Tenant Default
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The landlord-tenant relationship in India is governed by an overlapping
                      matrix of central legislation and state-specific Rent Control Acts. The{' '}
                      <a
                        href="https://www.indiacode.nic.in/handle/123456789/2238"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Transfer of Property Act, 1882 (TPA)
                      </a>{' '}
                      establishes the foundational legal architecture, while{' '}
                      <a
                        href="https://mohua.gov.in/upload/uploadfiles/files/Draft_Model_Tenancy_Act.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        the Model Tenancy Act, 2021
                      </a>{' '}
                      introduced by the Ministry of Housing and Urban Affairs provides a modern
                      reform framework that many states are progressively adopting.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong>Section 108(l) of the TPA</strong>, a tenant is duty-bound to
                      pay rent on the agreed date and in the agreed manner. Failure to do so
                      constitutes a material breach of the tenancy contract and triggers the
                      landlord&apos;s right to demand arrears, levy penalty interest, and—upon service
                      of a valid notice—initiate eviction proceedings. Under{' '}
                      <strong>Section 106 of the TPA</strong>, a landlord wishing to terminate a
                      month-to-month tenancy must serve a 15-day notice of termination, while
                      termination of a yearly agricultural tenancy requires a 6-month notice. A
                      well-drafted legal notice from a qualified advocate fulfills this statutory
                      notice-to-quit requirement simultaneously while demanding full arrears.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Additionally, under <strong>Order XXXVII of the Code of Civil Procedure,
                        1908</strong>, a landlord may file a summary suit for recovery of rent in
                      the Civil Court, wherein the defendant (tenant) is required to obtain leave
                      to defend—a procedural mechanism that dramatically accelerates the pace of
                      commercial rent recovery adjudication. The{' '}
                      <a
                        href="https://rera.mp.gov.in/Home/RentControlAct"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        state-specific Rent Control Acts
                      </a>{' '}
                      additionally provide specialized Rent Authority tribunals with summary
                      eviction and rent determination jurisdiction.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The{' '}
                      <a
                        href="https://mohua.gov.in/upload/uploadfiles/files/Draft_Model_Tenancy_Act.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Model Tenancy Act, 2021
                      </a>{' '}
                      introduced landmark reforms: landlords who serve a valid eviction notice can
                      recover double the monthly rent for two months and four times the monthly
                      rent thereafter if the tenant continues in unlawful possession. This statutory
                      penalty mechanism makes the formal legal notice a financially devastating
                      instrument against tenants who choose to holdover without payment.
                    </p>
                  </div>
                </section>

                {/* ── SECTION 2: GROUNDS FOR EVICTION ─────────────────── */}
                <section id="grounds-eviction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. Legal Grounds for Eviction of Non-Paying Tenant
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      All major state Rent Control Acts recognize non-payment of rent as the
                      primary ground for eviction. A combined eviction-cum-recovery legal notice
                      simultaneously asserts multiple grounds, maximizing pressure on the tenant.
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                      {[
                        {
                          title: "Default in Payment of Rent (Primary Ground)",
                          desc: "Consecutive non-payment of rent for two or more months is explicitly enumerated as an eviction ground under Section 10(2)(i) of the Model Tenancy Act, Section 14(1)(a) of the Delhi Rent Control Act, 1958, and Section 16(1)(a) of the Maharashtra Rent Control Act, 1999. Non-payment for even a single month entitles the landlord to issue a formal demand notice.",
                        },
                        {
                          title: "Holding Over After Notice Period (Wrongful Retention)",
                          desc: "A tenant who refuses to vacate after receiving a valid statutory termination notice under TPA Section 106 becomes an unlawful occupant liable for double the agreed rent under the Model Tenancy Act, 2021. The landlord can seek injunctive relief and mesne profits (compensatory rent for unlawful occupation) under the Specific Relief Act.",
                        },
                        {
                          title: "Subletting Without Consent",
                          desc: "Where a non-paying tenant has unlawfully sublet the premises, the landlord can invoke both the non-payment ground and the unauthorized subletting ground simultaneously in the legal notice, significantly strengthening the eviction petition before the Rent Authority.",
                        },
                        {
                          title: "Damage to Property & Nuisance",
                          desc: "A defaulting tenant who causes damage to the landlord's property, engages in unlawful activities on the premises, or creates a nuisance can face aggravated eviction grounds in addition to rent recovery. The legal notice should document and enumerate every ground to preempt any partial settlement defence.",
                        },
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-[#DC2626] mt-2 shrink-0" />
                          <div>
                            <h4 className="font-extrabold text-slate-900 text-sm">{item.title}</h4>
                            <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mt-1">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* ── SECTION 3: DOCUMENT CHECKLIST ────────────────────── */}
                <section id="document-checklist" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Document Checklist Before Sending the Notice
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A devastatingly effective legal notice is built on an airtight evidentiary
                      foundation. Assembling all documents in advance allows the advocate to draft
                      a mathematically precise arrears demand that leaves the tenant no room to
                      dispute the quantum owed.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                      {[
                        {
                          title: "Tenancy & Property Documents",
                          items: [
                            "Registered or notarized Rent Agreement / Lease Deed",
                            "Title deed or sale certificate establishing landlord ownership",
                            "Property tax receipts in landlord's name",
                            "Any renewal agreements or addenda to original lease",
                          ],
                        },
                        {
                          title: "Rent Payment Records",
                          items: [
                            "Bank statements showing last date of rent receipt",
                            "UPI / NEFT / IMPS transaction screenshots for each month",
                            "Physical rent receipts (if rent paid in cash)",
                            "WhatsApp or email acknowledgments of partial payments",
                          ],
                        },
                        {
                          title: "Communication Records",
                          items: [
                            "Demand emails and WhatsApp messages sent to tenant",
                            "Replies or silence receipts from the tenant",
                            "Any written promise to pay by tenant",
                            "Society maintenance payment records (if in arrears)",
                          ],
                        },
                        {
                          title: "Tenant Identification",
                          items: [
                            "Tenant's Aadhaar card copy / PAN / Passport from agreement",
                            "Tenant's permanent address (home state address)",
                            "Employer name and office address (for service at workplace)",
                            "Any guarantor details mentioned in the rent agreement",
                          ],
                        },
                      ].map((card, i) => (
                        <div key={i} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                          <h4 className="font-black text-slate-900 text-sm mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                            {card.title}
                          </h4>
                          <ul className="text-xs sm:text-sm text-slate-650 space-y-2 list-disc list-inside">
                            {card.items.map((item, j) => (
                              <li key={j}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* ── SECTION 4: FORUM COMPARISON ──────────────────────── */}
                <section id="forum-comparison" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Forum Comparison: Rent Authority vs Civil Court
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      After a legal notice is ignored, landlords can pursue multiple judicial
                      avenues simultaneously. Choosing the right forum—or combining them—depends
                      on the eviction objective, speed requirements, and quantum of arrears.
                    </p>
                    <div className="overflow-x-auto my-6">
                      <table className="w-full text-left border-collapse text-xs md:text-sm border border-slate-200">
                        <thead>
                          <tr className="bg-slate-100 text-slate-900 font-extrabold border-b border-slate-200">
                            <th className="p-3">Legal Pathway</th>
                            <th className="p-3">Governing Statute</th>
                            <th className="p-3">Primary Remedy</th>
                            <th className="p-3">Timeline</th>
                            <th className="p-3">Strategic Advantage</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-650">
                          <tr>
                            <td className="p-3 font-bold text-slate-900">Advocate Legal Notice</td>
                            <td className="p-3">TPA § 106 + State Rent Act</td>
                            <td className="p-3">Demand for rent arrears + Eviction notice-to-quit</td>
                            <td className="p-3">7–15 Days</td>
                            <td className="p-3">Highest out-of-court settlement rate; fastest resolution.</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="p-3 font-bold text-slate-900">Rent Authority (State Rent Control Acts)</td>
                            <td className="p-3">DRC Act, MRC Act, Model Tenancy Act</td>
                            <td className="p-3">Eviction decree + Rent arrears order</td>
                            <td className="p-3">3–9 Months</td>
                            <td className="p-3">Summary proceedings; no civil court fees for lower amounts.</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">Civil Court (Summary Suit)</td>
                            <td className="p-3">CPC Order XXXVII</td>
                            <td className="p-3">Decree for arrears + interest + costs</td>
                            <td className="p-3">6–18 Months</td>
                            <td className="p-3">Enforceable decree; attachment of tenant&apos;s bank accounts and salary.</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="p-3 font-bold text-slate-900">Police Complaint (Fraud/Cheating)</td>
                            <td className="p-3">IPC § 415/420 / BNS § 318</td>
                            <td className="p-3">Criminal FIR + arrest pressure</td>
                            <td className="p-3">Immediate</td>
                            <td className="p-3">Maximum psychological pressure; often triggers immediate settlement.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 5: STEP-BY-STEP PROCESS ─────────────────── */}
                <section id="step-by-step" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Step-by-Step Notice Drafting &amp; Dispatch Process
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Serving a legally enforceable rent-recovery notice requires strict procedural
                      adherence. Each step below creates an irrefutable evidentiary record for
                      subsequent court proceedings.
                    </p>
                    <div className="space-y-6 my-6">
                      {[
                        {
                          n: 1,
                          title: "Reconcile Rent Arrears Month-Wise",
                          desc: "Prepare a chronological table of each month's rent due date, agreed amount, date of last payment received, and cumulative arrears outstanding. Include any agreed rent escalation clauses, unpaid utility charges, and maintenance deposits.",
                        },
                        {
                          n: 2,
                          title: "Obtain Tenant's Permanent Address for Multi-Point Service",
                          desc: "Verify the tenant's permanent home address (from the rent agreement KYC documents), employer address, and any guarantor's address. Serving at multiple addresses simultaneously prevents the tenant from claiming non-receipt.",
                        },
                        {
                          n: 3,
                          title: "Engage an Advocate to Draft on Official Legal Stationery",
                          desc: "The advocate drafts the notice on official Bar Council letterhead, citing Section 106 TPA for notice-to-quit, the applicable State Rent Control Act for eviction grounds, and Order XXXVII CPC for summary recovery. The notice precisely quantifies: (i) month-wise arrears, (ii) penalty interest, and (iii) advocate's fees and costs.",
                        },
                        {
                          n: 4,
                          title: "Issue a 15-Day Statutory Compliance Period",
                          desc: "The notice demands full payment of all arrears within 15 days (or 30 days for yearly leases under TPA § 106). It explicitly warns that failure to comply will result in immediate filing of an eviction petition before the Rent Authority AND a summary suit for money recovery before the Civil Court.",
                        },
                        {
                          n: 5,
                          title: "Multi-Channel Verifiable Dispatch",
                          desc: "Send the notice via India Post Registered Post with Acknowledgment Due (RPAD) and Speed Post to the rental property address, the tenant's permanent address, and the employer's address. Simultaneously transmit a certified digital copy via email and WhatsApp to secure timestamped delivery evidence under Section 65B of the Indian Evidence Act, 1872.",
                        },
                      ].map((step) => (
                        <div key={step.n} className="flex items-start space-x-4">
                          <div className="bg-[#DC2626] text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-black text-sm">
                            {step.n}
                          </div>
                          <div>
                            <h4 className="font-extrabold text-sm sm:text-base text-slate-900 mb-1">
                              {step.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                              {step.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* ── SECTION 6: NOTICE CLAUSES + INFOGRAPHIC ──────────── */}
                <section id="notice-clauses" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Essential Clauses in an Effective Rent Recovery Notice
                  </h2>

                  {/* Infographic */}
                  <div className="my-8 rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                    <img
                      src="/images/og/recover-unpaid-rent-from-tenant-india.jpg"
                      alt="Legal Notice to Tenant for Not Paying Rent – Infographic Guide by Legal Recovery"
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A generic email demand is routinely ignored. An advocate-drafted statutory
                      notice that incorporates the following mandatory clauses triggers immediate
                      compliance in over 72% of cases, according to Legal Recovery&apos;s internal
                      resolution data:
                    </p>
                    <ul className="list-none space-y-3 text-sm md:text-base text-slate-650">
                      {[
                        "<strong>Complete Party Identification:</strong> Full legal name, address of the landlord (client), and the tenant's name, rental address, permanent address, and employer details.",
                        "<strong>Month-wise Arrears Schedule:</strong> A table listing each month of default, agreed rent amount, amount paid (if any), and outstanding balance — making the quantum indisputable.",
                        "<strong>Statutory Citation:</strong> Explicit reference to TPA Section 106 (notice-to-quit), the applicable state Rent Control Act section (eviction on non-payment ground), and CPC Order XXXVII (summary suit for arrears).",
                        "<strong>Interest Clause:</strong> Claim of penalty interest at 18% per annum on all arrears from the date each month's rent fell due, computed on simple interest basis, creating a compounding financial deterrent.",
                        "<strong>Model Tenancy Act Warning:</strong> Where applicable, a specific clause citing the Model Tenancy Act penalty of double rent for the first two months and four times rent thereafter for continued unlawful possession.",
                        "<strong>15-Day Compliance Ultimatum:</strong> A clear and unambiguous deadline, with explicit warning that non-compliance will result in simultaneous eviction proceedings AND a civil money decree.",
                        "<strong>Reservation of All Legal Rights:</strong> A comprehensive reservation clause preserving the landlord's right to pursue criminal complaints for cheating (IPC § 420 / BNS § 318) and any additional grounds discovered subsequently.",
                      ].map((clause, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-1.5 w-2 h-2 rounded-full bg-[#DC2626] shrink-0" />
                          <span dangerouslySetInnerHTML={{ __html: clause }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                {/* ── SECTION 7: AFTER NOTICE ──────────────────────────── */}
                <section id="after-notice" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    7. What Happens After Notice: Escalation &amp; Enforcement
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Legal Recovery&apos;s data shows that 72% of rent disputes are resolved within
                      10 days of the notice being served. For the remaining cases, the following
                      escalation pathway applies:
                    </p>
                    <div className="space-y-4">
                      {[
                        {
                          phase: 'Day 0–15',
                          color: 'bg-green-100 text-green-800 border-green-200',
                          label: 'Compliance Window',
                          text: 'The tenant has a 15-day statutory window to pay all arrears and advocate fees. Approximately 72% of tenants settle in full during this phase to avoid eviction and a permanent court record.',
                        },
                        {
                          phase: 'Day 16–30',
                          color: 'bg-yellow-100 text-yellow-800 border-yellow-200',
                          label: 'Rent Authority Petition',
                          text: 'If the tenant ignores the notice, an eviction petition is filed before the designated Rent Authority under the applicable state Rent Control Act. The Rent Authority can pass ex-parte eviction orders if the tenant fails to appear.',
                        },
                        {
                          phase: 'Day 16–30',
                          color: 'bg-orange-100 text-orange-800 border-orange-200',
                          label: 'Summary Civil Suit (CPC Order XXXVII)',
                          text: 'Simultaneously, a summary suit for money recovery is filed before the Civil Court. The tenant must apply for leave to defend within 10 days of being served with the summons — the court can pass a decree for the full arrear amount if leave is refused.',
                        },
                        {
                          phase: 'Parallel',
                          color: 'bg-red-100 text-red-800 border-red-200',
                          label: 'Police Complaint & Criminal Action',
                          text: 'Where the tenant provided post-dated cheques that bounced, or where fraud or misrepresentation can be established, a criminal complaint under Section 420 IPC / Section 318 BNS or a cheque bounce case under Section 138 NI Act can be filed simultaneously.',
                        },
                      ].map((item, i) => (
                        <div key={i} className={`p-4 rounded-xl border ${item.color}`}>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-black uppercase tracking-wider opacity-70">
                              {item.phase}
                            </span>
                            <span className="font-extrabold text-sm">{item.label}</span>
                          </div>
                          <p className="text-xs sm:text-sm leading-relaxed opacity-90">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* ── SECTION 8: FAQ ACCORDION ─────────────────────────── */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    8. Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => {
                      const faqId = `faq-${index}`;
                      const isOpen = expandedFaqs.includes(faqId);
                      return (
                        <div
                          key={faqId}
                          className="border border-slate-200 rounded-2xl overflow-hidden"
                        >
                          <button
                            onClick={() => toggleFaq(index)}
                            className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-slate-50 transition-colors"
                            aria-expanded={isOpen}
                          >
                            <span className="font-extrabold text-sm sm:text-base text-slate-900 pr-4">
                              {faq.question}
                            </span>
                            <svg
                              className={`w-5 h-5 text-[#DC2626] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2.5}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          {isOpen && (
                            <div className="p-5 pt-0 bg-white border-t border-slate-100">
                              <p className="text-sm text-slate-650 leading-relaxed">{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* ── STATUTORY REFERENCES ─────────────────────────────── */}
                <section className="scroll-mt-32">
                  <h2 className="text-xl font-black text-slate-900 mb-4 border-b border-slate-100 pb-2">
                    Statutory References &amp; Authoritative Sources
                  </h2>
                  <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-600">
                    <li>
                      <span className="font-semibold text-slate-800">
                        Transfer of Property Act, 1882 — Section 106 &amp; Section 108(l) (indiacode.nic.in)
                      </span>
                    </li>
                    <li>
                      <span className="font-semibold text-slate-800">
                        Model Tenancy Act, 2021 — Ministry of Housing and Urban Affairs (mohua.gov.in)
                      </span>
                    </li>
                    <li>
                      <span className="font-semibold text-slate-800">
                        Delhi Rent Control Act, 1958 — Section 14(1)(a) (legislative.gov.in)
                      </span>
                    </li>
                    <li>
                      <span className="font-semibold text-slate-800">
                        Code of Civil Procedure, 1908 — Order XXXVII (Summary Suits) (indiacode.nic.in)
                      </span>
                    </li>
                    <li>
                      <span className="font-semibold text-slate-800">
                        Indian Penal Code, 1860 — Section 415 (Cheating) &amp; Section 420 (indiacode.nic.in)
                      </span>
                    </li>
                    <li>
                      <span className="font-semibold text-slate-800">
                        Bharatiya Nyaya Sanhita, 2023 — Section 318 (Cheating) (indiacode.nic.in)
                      </span>
                    </li>
                  </ol>
                </section>

                {/* ── MORE GUIDES (Internal Links) ─────────────────────── */}
                <section className="scroll-mt-32">
                  <h2 className="text-xl font-black text-slate-900 mb-5 border-b border-slate-100 pb-2">
                    More Landlord &amp; Tenant Legal Guides
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        title: 'Security Deposit Not Refunded by Landlord',
                        href: '/send-a-legal-notice/security-deposit-not-refunded-landlord',
                      },
                      {
                        title: 'Legal Notice — Unreasonable Security Deposit Deductions',
                        href: '/legal-notice-landlord-unreasonable-security-deposit-deductions',
                      },
                      {
                        title: 'Legal Steps to Recover Security Deposit from Landlord',
                        href: '/recover-security-deposit-from-landlord-india',
                      },
                      {
                        title: 'Can I Send a Legal Notice to My Landlord for Security Deposit?',
                        href: '/legal-notice-to-landlord-for-security-deposit-refund-india',
                      },
                      {
                        title: 'Legal Notice to PG Owner for Security Deposit Refund',
                        href: '/legal-notice-to-pg-owner-for-security-deposit-refund',
                      },
                      {
                        title: 'Should Rental Agreements Be Notarized in India?',
                        href: '/should-rental-agreements-be-notarized-in-india',
                      },
                      {
                        title: 'Send a Legal Notice Online in India',
                        href: '/send-a-legal-notice',
                      },
                      {
                        title: 'How to File a Consumer Complaint in India',
                        href: '/how-to-file-consumer-complaint-india',
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
                    platform, connecting landlords, businesses, and individuals with experienced
                    panel advocates for fast, advocate-vetted statutory notices at transparent
                    flat fees. With ₹100 Crore+ recovered and 10,000+ cases resolved, Legal
                    Recovery delivers verified legal impact without the delays of traditional
                    law firm engagement.
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
                  Tenant Not Paying Rent?
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  Send an advocate-vetted legal notice today. 72% of tenants pay
                  within 10 days of receiving a formal notice from Legal Recovery.
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

              {/* Client Reviews */}
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

                {/* Review card — must match JSON-LD Product > Review word-for-word */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#DC2626]/10 flex items-center justify-center font-black text-[#DC2626] text-xs">
                      RM
                    </div>
                    <div>
                      <p className="font-extrabold text-slate-900 text-xs">Rajesh Mehta</p>
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
                    "My tenant had not paid rent for 6 months totalling ₹1.8 Lakhs and was refusing
                    all calls. Legal Recovery drafted a hard-hitting eviction cum rent recovery notice
                    citing TPA Section 106 and Delhi Rent Control Act. The tenant paid the entire
                    arrears within 9 days of receiving the notice to avoid eviction proceedings.
                    Highly professional and fast service."
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
                  { stat: '72%', label: 'Tenants settle within 10 days of notice' },
                  { stat: '₹100CR+', label: 'Total amount recovered for clients' },
                  { stat: 'Same Day', label: 'Notice drafted and dispatched' },
                  { stat: 'Flat Fee', label: 'No hidden charges or retainer' },
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
