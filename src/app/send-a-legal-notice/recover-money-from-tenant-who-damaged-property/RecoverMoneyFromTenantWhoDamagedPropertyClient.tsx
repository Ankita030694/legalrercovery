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
    question: 'Can a landlord send a legal notice to recover money from a tenant who damaged commercial or residential property in India?',
    answer:
      'Yes, a commercial or residential property owner can issue an advocate-drafted statutory legal notice under Section 108(m) and Section 108(o) of the Transfer of Property Act, 1882, read with Section 73 of the Indian Contract Act, 1872, demanding full reimbursement for structural damages, defaced fixtures, and restoration costs exceeding the security deposit. The statutory notice formally itemizes the dilapidations, attaches independent civil engineering survey reports or repair invoices, and grants the defaulting tenant a 15-day peremptory window to disburse the outstanding funds. Serving this formal demand establishes an indispensable evidentiary baseline before instituting a commercial recovery suit or summary debt recovery proceeding under Order 37 of the Code of Civil Procedure, 1908.',
  },
  {
    question: 'What is the legal difference between "reasonable wear and tear" and actionable tenant property damage?',
    answer:
      'Under Indian tenancy jurisprudence and Section 108(m) of the Transfer of Property Act, 1882, reasonable wear and tear encompasses ordinary superficial deterioration resulting from regular, careful occupancy over time, such as minor paint fading, hairline plaster shrinkage, or aged floor polish. Actionable property damage involves intentional, negligent, or unauthorized destruction that diminishes the structural, functional, or commercial utility of the premises, including shattered glass facades, demolished load-bearing walls, broken central HVAC systems, ripped electrical conduits, or unauthorized structural partitions. Landlords are legally entitled to recover the entire cost of restoring the premises to its original tenantable condition when the destruction surpasses reasonable aging.',
  },
  {
    question: 'Can a landlord claim repair expenses if the tenant damage exceeds the security deposit amount?',
    answer:
      'If the comprehensive repair and restoration estimate surpasses the retained security deposit, the landlord possesses the absolute legal right to forfeit the entire deposit and institute legal recovery for the uncovered deficit balance. Under Section 73 of the Indian Contract Act, 1872, the lessor can claim compensatory damages for all direct financial losses naturally arising from the tenant\'s breach of lease covenants, including structural rebuilding expenses, specialized architectural reinstatement fees, and consequential loss of rental income during the renovation period. The legal demand notice must clearly tabulate the total gross damage, credit the forfeited deposit amount, and demand immediate liquidation of the net unpaid arrears.',
  },
  {
    question: 'What is the statutory limitation period for filing a property damage recovery suit against an ex-tenant in India?',
    answer:
      'Under Article 55 and Article 113 of the Limitation Act, 1963, the statutory limitation period to serve a legal notice and institute a civil suit for damages arising from breach of a lease contract or property destruction is exactly three years from the date the damage occurred or when the tenancy was terminated and possession handed over. Property owners must issue a formal advocate demand notice promptly following the joint exit inspection to avoid procedural delays or evidentiary dissipation. Serving a statutory notice with an itemized valuer schedule also provides conclusive documentary proof of the date of demand and formal crystallization of actionable debt.',
  },
  {
    question: 'Can commercial landlords file a fast-track suit under the Commercial Courts Act, 2015 for tenant property dilapidations?',
    answer:
      'Commercial property disputes involving lease agreements of premises used exclusively for trade, business, or commerce qualify as "commercial disputes" under Section 2(1)(c)(vii) of the Commercial Courts Act, 2015, provided the specified recovery value meets the statutory threshold of ₹3 Lakhs or more. Prior to instituting a commercial suit, the landlord must undergo mandatory pre-institution mediation through the District Legal Services Authority (DLSA) under Section 12A of the Act, as mandated by the Supreme Court in Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd. Serving a comprehensive legal notice beforehand establishes the documented default, strengthens the landlord\'s mediation posture, and expedites decree execution before the designated Commercial Court.',
  },
  {
    question: 'Can a landlord initiate criminal proceedings against a tenant who intentionally vandalized or stripped the property?',
    answer:
      'Yes, if a tenant deliberately vandalizes structural fittings, dismantles electrical transformers, or steals fixtures, air conditioning units, and industrial plant equipment entrusted to them, the landlord can initiate criminal proceedings alongside civil recovery. The property owner can lodge a formal police complaint or private criminal complaint under Section 324 of the Bharatiya Nyaya Sanhita, 2023 for mischief and property damage, as well as Section 316 and Section 318 of the BNS for criminal breach of trust and fraudulent inducement. Incorporating these criminal grounds into the statutory legal notice exerts decisive legal pressure on corporate directors or absconding individual tenants.',
  },
];

/* ─── JSON-LD SCHEMA (@graph) ──────────────────────────────────────────── */
const pageUrl =
  'https://legalrecovery.in/send-a-legal-notice/recover-money-from-tenant-who-damaged-property';
const ogImage =
  'https://legalrecovery.in/images/og/recover-money-from-tenant-who-damaged-property.jpg';

const reviewBodyText =
  'When our commercial tenant vacated a 4,500 sq. ft. Grade-A office space in BKC, they left behind devastating property damage: broken VRV air-conditioning ducting, demolished load-bearing partitions, stripped three-phase copper cabling, and smashed Italian marble flooring. The repair assessment came to ₹26.5 Lakhs—far exceeding their ₹12 Lakh security deposit. Legal Recovery drafted a formidable statutory legal notice under Section 108(m) of the Transfer of Property Act, Section 73 of the Contract Act, and the Commercial Courts Act, supported by an independent chartered civil engineer\'s dilapidations report. Within 14 days of receiving the notice, the tenant company\'s directors agreed to an out-of-court settlement and transferred the entire ₹14.5 Lakh deficit plus compensation for lost rent during repairs. Exceptional legal capability for commercial landlords.';

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
        'Legal Notice to Tenant for Property Damage | Recover Money India',
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
      name: 'Legal Notice to Tenant for Property Damage | Recover Money India',
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
          name: 'Recover Money from Tenant Who Damaged Property',
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
      name: 'Step-by-Step Roadmap to Recover Money from Tenant for Property Damage in India',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Conduct joint exit walkthrough, document photographic evidence, and commission a government-approved Chartered Civil Valuer Dilapidations Report',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Quantify actual restoration costs, forfeit the available security deposit, and calculate the uncovered deficit balance along with lost rental income',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Draft an advocate-vetted statutory legal notice citing Section 108(m)/(o) of the Transfer of Property Act 1882, Section 73 of the Contract Act, and BNS provisions',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Serve the formal demand notice simultaneously via India Post Registered Post AD, Speed Post, and tracked digital channels with Section 63 BSA compliance',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Initiate expedited Order 37 CPC summary recovery, Commercial Court litigation under Section 12A Commercial Courts Act, or criminal proceedings upon default',
        },
      ],
    },

    /* 7. Product + AggregateRating + Review (matches sidebar UI word-for-word) */
    {
      '@type': 'Product',
      name: 'Legal Notice to Tenant for Property Damage & Dilapidations Recovery',
      description:
        'Advocate-drafted statutory demand notice service for commercial and residential landlords to recover property damage, unauthorized alterations, restoration expenses, and consequential rental loss from defaulting tenants across India.',
      brand: {
        '@type': 'Organization',
        name: 'Legal Recovery',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '314',
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
            name: 'Vikramaditya Singhania',
          },
          reviewBody: reviewBodyText,
        },
      ],
    },
  ],
};

/* ─── COMPONENT ─────────────────────────────────────────────────────────── */
export default function RecoverMoneyFromTenantWhoDamagedPropertyClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: 'statutory-framework', title: '1. Statutory Framework: Property Damage & Waste Laws in India' },
    { id: 'commercial-vs-residential', title: '2. Commercial vs Residential Tenancy: Scope of Actionable Damage' },
    { id: 'deposit-vs-deficit', title: '3. Security Deposit Forfeiture vs Excess Dilapidations Claim' },
    { id: 'evidentiary-checklist', title: '4. Pre-Notice Evidentiary Checklist & Chartered Valuer Assessment' },
    { id: 'essential-clauses', title: '5. Key Clauses in a Statutory Demand Notice for Property Damage' },
    { id: 'legal-remedies', title: '6. Multi-Forum Legal Remedies: Commercial Courts, Summary Suits & Criminal Action' },
    { id: 'faqs', title: '7. Frequently Asked Questions' },
  ];

  const breadcrumbItems = [
    { label: 'Send a Legal Notice', href: '/send-a-legal-notice' },
    {
      label: 'Recover Money from Tenant for Property Damage',
      href: '/send-a-legal-notice/recover-money-from-tenant-who-damaged-property',
    },
  ];

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const shareUrl = encodeURIComponent(pageUrl);
  const shareText = encodeURIComponent(
    'Tenant damaged your commercial or residential property? Send an advocate-vetted statutory legal notice to recover repair costs & lost rent in India! #PropertyDamage #LegalNotice #LandlordRights'
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
              COMMERCIAL &amp; RESIDENTIAL LANDLORD RECOVERY
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Legal Notice to Tenant to{' '}
              <span className="text-[#DC2626]">Recover Money for Property Damage</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Recover structural repair expenses, defaced fixture costs, civil restoration charges, and consequential rental loss exceeding the security deposit under the Transfer of Property Act, Indian Contract Act, and Commercial Courts Act.
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
                          `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${encodeURIComponent('Legal Notice to Tenant for Property Damage Recovery | Legal Recovery India')}`,
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
                    A commercial or residential landlord can serve an advocate-vetted statutory legal notice to a defaulting tenant for property damage under{' '}
                    <strong className="text-slate-900 font-semibold">
                      Section 108(m) and Section 108(o) of the Transfer of Property Act, 1882
                    </strong>{' '}
                    read with{' '}
                    <strong className="text-slate-900 font-semibold">
                      Section 73 of the Indian Contract Act, 1872
                    </strong>
                    , demanding full reimbursement for structural repairs, demolished partitions, destroyed HVAC/electrical systems, and lost rental income within 15 days. If the quantified restoration costs exceed the retained security deposit, the landlord is statutorily entitled to forfeit the deposit, demand the remaining balance through the notice, and initiate expedited civil recovery under Order 37 of the Code of Civil Procedure, 1908 or file a commercial suit under the{' '}
                    <strong className="text-slate-900 font-semibold">
                      Commercial Courts Act, 2015
                    </strong>
                    . Furthermore, deliberate vandalism, unauthorized structural alteration, or dismantling of leased plant machinery attracts criminal prosecution under Section 324 and Section 316 of the Bharatiya Nyaya Sanhita, 2023.
                  </p>
                </div>

                {/* ── IN-ARTICLE INFOGRAPHIC ────────────────────────────── */}
                <figure className="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900">
                  <img
                    src="/images/og/recover-money-from-tenant-who-damaged-property.jpg"
                    alt="Infographic: 5-Step Process to Recover Money from a Tenant for Property Damage in India"
                    className="w-full h-auto object-cover max-h-[500px]"
                    loading="lazy"
                  />
                  <figcaption className="p-3.5 text-center text-xs text-slate-650 font-semibold bg-white border-t border-slate-100 flex items-center justify-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#DC2626]" />
                    <span>Figure 1: Statutory Roadmap to Recover Property Damage, Dilapidation Costs &amp; Rental Losses from Defaulting Tenants under Indian Law.</span>
                  </figcaption>
                </figure>

                {/* ── SECTION 1: STATUTORY FRAMEWORK ────────────────────── */}
                <section id="statutory-framework" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. Statutory Framework: Property Damage &amp; Waste Laws in India
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      In the Indian real estate and leasing sector, the rights and covenants governing property condition, tenant maintenance, and post-tenancy redelivery are anchored in rigorous statutory principles. When a tenant—whether an individual occupying a luxury apartment or a corporate entity leasing commercial office floors, retail showrooms, or industrial warehouses—vacates the demised premises in a damaged, stripped, or defaced state, the landlord possesses comprehensive legal remedies under property, contract, and commercial codes.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The primary codified statute governing lessor-lessee obligations is the{' '}
                      <a
                        href="https://www.indiacode.nic.in/handle/123456789/2338"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Transfer of Property Act, 1882 (TPA)
                      </a>
                      . Section 108 of the TPA delineates the non-negotiable statutory obligations of the lessee:
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                      <ul className="space-y-3 text-xs sm:text-sm text-slate-700 list-disc list-inside">
                        <li>
                          <strong>Section 108(m) (Duty to Restore and Repair):</strong> The lessee is legally bound to keep, and upon lease determination to restore, the demised property in as good a condition as it was in at the time possession was delivered, subject only to changes caused by reasonable wear and tear or irresistible force (vis major).
                        </li>
                        <li>
                          <strong>Section 108(o) (Prohibition of Waste &amp; Injurious Acts):</strong> The lessee must not use the property for unauthorized purposes, pull down or damage buildings, destroy permanent fixtures, or commit any act that is destructive or permanently injurious to the landlord&apos;s freehold interest.
                        </li>
                        <li>
                          <strong>Section 108(p) (Prohibition on Unauthorized Permanent Structures):</strong> The lessee is prohibited from erecting permanent structures or altering the fundamental architecture of the building without the express written consent of the lessor.
                        </li>
                        <li>
                          <strong>Section 108(h) (Right to Remove Fixtures before Termination):</strong> While tenants may detach their own movable trade fittings, they cannot pull down landlord fittings or leave the property in a defaced, structurally compromised condition.
                        </li>
                      </ul>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed">
                      Complementing property statutes, the{' '}
                      <a
                        href="https://www.indiacode.nic.in/handle/123456789/2187"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Indian Contract Act, 1872
                      </a>{' '}
                      provides the compensatory framework under <strong>Section 73</strong>. When a tenant breaches the maintenance, redelivery, or restoration clauses of a registered lease deed or leave and license agreement, the landlord is entitled to compensation for all actual direct damages naturally arising from the breach. This encompasses the total civil contractor reinstatement cost, procurement of replacement HVAC/electrical machinery, architect certification fees, and consequential compensation for lost rental revenue during the repair period.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      In the landmark judgment{' '}
                      <a
                        href="https://main.sci.gov.in/judgment/judis/26650.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Bharat Petroleum Corporation Ltd. v. N.R. Vairamani (2004) 8 SCC 579
                      </a>
                      , the Supreme Court of India reiterated that a commercial tenant holding over or vacating demised premises cannot escape the obligation to redeliver the property in its original state, affirming the landlord&apos;s right to claim substantial damages for structural alterations, dilapidations, and site remediation.
                    </p>
                  </div>
                </section>

                {/* ── SECTION 2: COMMERCIAL VS RESIDENTIAL ──────────────── */}
                <section id="commercial-vs-residential" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. Commercial vs Residential Tenancy: Scope of Actionable Damage
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The distinction between ordinary wear and tear and legally actionable property destruction is vital when quantifying claims and serving a statutory demand notice. Commercial tenancies involve high-value fit-outs, industrial utilities, and structural modifications that carry severe financial ramifications if vacated improperly.
                    </p>

                    <div className="overflow-x-auto my-6">
                      <table className="w-full text-left border-collapse text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-slate-900 text-white">
                            <th className="p-3 font-extrabold rounded-tl-xl">Damage Category</th>
                            <th className="p-3 font-extrabold">Permissible Wear &amp; Tear (Non-Actionable)</th>
                            <th className="p-3 font-extrabold rounded-tr-xl">Actionable Property Destruction (Recoverable by Notice)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 bg-white border border-slate-200">
                          <tr>
                            <td className="p-3 font-bold text-slate-900">HVAC &amp; Air Conditioning</td>
                            <td className="p-3 text-slate-650">Routine filter clogging, minor gas depletion from regular usage</td>
                            <td className="p-3 text-slate-650">
                              Dismantled VRV/AHU copper lines, crushed ducting, removed external compressors, vandalized chillers
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">Electrical &amp; Networking</td>
                            <td className="p-3 text-slate-650">Faded switch plates, burnt light bulbs, natural wire aging</td>
                            <td className="p-3 text-slate-650">
                              Ripped 3-phase busbars, stripped copper wiring, demolished server racks, destroyed main distribution boards (MDBs)
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">Civil &amp; Structural Architecture</td>
                            <td className="p-3 text-slate-650">Hairline plaster drying cracks, standard sun-bleached exterior paint</td>
                            <td className="p-3 text-slate-650">
                              Demolished brick/drywall partitions, core-cut load-bearing beams, damaged false ceilings, shattered marble/granite flooring
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">Plumbing &amp; Sanitary Ware</td>
                            <td className="p-3 text-slate-650">Minor washer leakage, standard limescale deposits on taps</td>
                            <td className="p-3 text-slate-650">
                              Cracked commercial WC fixtures, severed soil/waste pipes, severe untreated water seepage causing structural dampness
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">Glass Facades &amp; Entrances</td>
                            <td className="p-3 text-slate-650">Minor surface smudges, ordinary hinge loosening from daily footfall</td>
                            <td className="p-3 text-slate-650">
                              Shattered toughened glass partitions, removed automated sensor sliding doors, warped structural aluminum framing
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">Site Clearance &amp; Debris</td>
                            <td className="p-3 text-slate-650">Empty rooms requiring routine housekeeping sweep</td>
                            <td className="p-3 text-slate-650">
                              Piles of toxic construction rubble, hazardous chemical waste, abandoned heavy scaffolding requiring industrial removal
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p className="text-sm md:text-base leading-relaxed">
                      In commercial properties (offices, IT parks, retail showrooms, cloud kitchens, and warehouses), lease contracts typically include a rigorous <em>&quot;Reinstatement / De-fitting Clause&quot;</em> requiring the lessee to deliver bare-shell or warm-shell premises at their sole cost. Failure to restore the property gives the landlord an immediate cause of action for breach under Section 73 of the Contract Act.
                    </p>
                  </div>
                </section>

                {/* ── SECTION 3: DEPOSIT VS DEFICIT ─────────────────────── */}
                <section id="deposit-vs-deficit" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Security Deposit Forfeiture vs Excess Dilapidations Claim
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A pervasive misconception among defaulting tenants is that their liability is strictly capped at the amount of the interest-free refundable security deposit held by the landlord. Under Indian contract jurisprudence, a security deposit is merely a pledge or collateral security; it does not operate as a liability ceiling.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      When tenant damages exceed the security deposit, the landlord must follow a systematic legal accounting protocol:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                      {[
                        {
                          step: 'Step 1: Total Gross Loss Quantification',
                          detail: 'Consolidate all civil restoration quotes, MEP (Mechanical, Electrical, Plumbing) repair bills, specialized valuer assessment fees, and hazardous debris clearance expenses into a unified gross repair schedule.',
                        },
                        {
                          step: 'Step 2: Security Deposit Set-Off & Forfeiture',
                          detail: 'Formally apply the retained security deposit against the gross repair bill in accordance with lease terms, generating a certified ledger entry showing the exact amount absorbed by the deposit.',
                        },
                        {
                          step: 'Step 3: Crystallization of Uncovered Deficit Balance',
                          detail: 'Calculate the net uncovered deficit (Gross Restoration Cost minus Forfeited Deposit) as a liquidated, actionable debt payable immediately by the ex-tenant.',
                        },
                        {
                          step: 'Step 4: Consequential Loss of Rent / Mesne Profits',
                          detail: 'Under Section 73 of the Contract Act and Section 2(12) CPC, claim compensation for lost rental revenue for the entire reasonable timeframe during which the property is unrentable due to ongoing repairs.',
                        },
                      ].map((item, idx) => (
                        <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                              <h4 className="font-extrabold text-slate-900 text-sm">{item.step}</h4>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">{item.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-red-50/50 border border-red-200/70 p-6 rounded-2xl space-y-3">
                      <h4 className="font-black text-slate-900 text-sm md:text-base flex items-center gap-2">
                        <span className="text-[#DC2626]">⚖️</span> Judicial Precedent on Dilapidations &amp; Consequential Rental Loss
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        In accordance with principles laid down by Indian High Courts and the Supreme Court in{' '}
                        <a
                          href="https://main.sci.gov.in/judgment/judis/1678.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:text-purple-800 hover:underline"
                        >
                          Union of India v. Rampur Distillery &amp; Chemical Co. Ltd. (1973) 1 SCC 649
                        </a>
                        , damages for breach of contract must represent genuine pre-estimated losses or actual losses proved. A landlord who establishes that tenant vandalism directly prevented new tenant occupancy during remediation is entitled to recover both civil restoration costs and lost market rent.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 4: EVIDENTIARY CHECKLIST ──────────────────── */}
                <section id="evidentiary-checklist" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Pre-Notice Evidentiary Checklist &amp; Chartered Valuer Assessment
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      To ensure your statutory legal notice is legally unassailable and capable of securing a summary court decree, the claim must be corroborated by robust contemporary documentary evidence. Assembling this evidentiary dossier before drafting the notice eliminates frivolous tenant defenses:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                      {[
                        {
                          title: '1. Contractual & Ingoing Records',
                          items: [
                            'Registered Lease / Leave & License Deed with Reinstatement Clause',
                            'Handover Protocol & Ingoing Photographic Inventory at start of lease',
                            'Approved Fit-out / Architectural drawings signed by both parties',
                          ],
                        },
                        {
                          title: '2. Contemporaneous Exit Documentation',
                          items: [
                            'Notice of termination / lease expiry correspondence',
                            'Joint Exit Walkthrough Inspection Minutes / Defect Schedule',
                            'High-resolution date-stamped photographs & 4K video walkthroughs',
                          ],
                        },
                        {
                          title: '3. Independent Technical Assessment',
                          items: [
                            'Government-Approved Chartered Civil Valuer Dilapidations Report',
                            'Licensed Electrical & MEP Engineer structural integrity certificate',
                            'Detailed Bill of Quantities (BOQ) with market-standard itemized rates',
                          ],
                        },
                        {
                          title: '4. Financial Trails & Tenant Identity',
                          items: [
                            'GST Invoices and payment receipts from licensed civil contractors',
                            'Ledger of security deposit received, interest applied & deductions',
                            'Tenant MCA Corporate Master Data, CIN, and Director DIN records',
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

                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                      <h4 className="font-extrabold text-slate-900 text-sm">
                        The Strategic Value of a Chartered Valuer Dilapidations Report
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        A Dilapidations Report prepared by a registered Chartered Engineer or government-approved valuer carries substantial evidentiary weight under{' '}
                        <a
                          href="https://www.indiacode.nic.in/handle/123456789/20235"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:text-purple-800 hover:underline"
                        >
                          Section 45 of the Indian Evidence Act, 1872 (now Section 39 of the Bharatiya Sakshya Adhiniyam, 2023)
                        </a>{' '}
                        as expert testimony. Annexing an independent BOQ to the legal demand notice prevents the tenant from claiming that repair rates were unilaterally inflated or arbitrary.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 5: ESSENTIAL CLAUSES ──────────────────────── */}
                <section id="essential-clauses" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Key Clauses in a Statutory Demand Notice for Property Damage
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A statutory legal notice issued on an advocate&apos;s letterhead must set forth facts with forensic precision. The following core clauses form the structural backbone of an enforceable notice for recovery of property damage:
                    </p>

                    <div className="space-y-4">
                      {[
                        {
                          clause: 'Clause 1',
                          title: 'Tenancy Particulars & Ingoing Property Condition Recitals',
                          desc: 'Explicitly establish the lease execution date, tenure, demised premises specifications, agreed monthly rent, security deposit quantum, and the ingoing property condition verified as flawless at handover.',
                        },
                        {
                          clause: 'Clause 2',
                          title: 'Specific Covenants of Maintenance, Repair & Reinstatement',
                          desc: 'Quote exact clauses from the lease agreement mandating the tenant to keep the premises in tenantable repair, obtain written permission prior to alterations, and reinstate the property to bare-shell/original status upon vacation.',
                        },
                        {
                          clause: 'Clause 3',
                          title: 'Itemized Schedule of Unauthorized Alterations & Property Destruction',
                          desc: 'Present a detailed tabular schedule categorizing civil, electrical, HVAC, plumbing, and structural damage, contrasting the pristine ingoing state with the defaced condition documented upon exit.',
                        },
                        {
                          clause: 'Clause 4',
                          title: 'Accounting Ledger: Deposit Forfeiture, Excess Deficit & Consequential Loss',
                          desc: 'Explicitly set off the available security deposit against certified repair quotes, quantify the net deficit balance, and add consequential claims for lost rental income and architect valuation fees.',
                        },
                        {
                          clause: 'Clause 5',
                          title: '15-Day Strict Peremptory Notice & Multi-Forum Litigation Warning',
                          desc: 'Demand unconditional electronic remittance of the total quantified dues within exactly 15 days of notice receipt, warning of Order 37 summary suits, Commercial Court filings under Section 12A, and criminal prosecution under BNS Sections 316 and 324 at the tenant\'s sole cost and consequence.',
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

                {/* ── SECTION 6: LEGAL REMEDIES ─────────────────────────── */}
                <section id="legal-remedies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Multi-Forum Legal Remedies: Commercial Courts, Summary Suits &amp; Criminal Action
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If the defaulting tenant or corporate entity ignores the 15-day statutory notice or refuses to liquidate the repair arrears, Legal Recovery initiates immediate multi-forum judicial escalation:
                    </p>

                    <div className="overflow-x-auto my-6">
                      <table className="w-full text-left border-collapse text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-slate-900 text-white">
                            <th className="p-3 font-extrabold rounded-tl-xl">Legal Forum &amp; Statute</th>
                            <th className="p-3 font-extrabold">Nature of Property &amp; Claim</th>
                            <th className="p-3 font-extrabold">Pecuniary Jurisdiction</th>
                            <th className="p-3 font-extrabold rounded-tr-xl">Key Strategic Benefit</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 bg-white border border-slate-200">
                          <tr>
                            <td className="p-3 font-bold text-slate-900">
                              Commercial Courts Act, 2015 (Sec 2(1)(c)(vii) &amp; Sec 12A)
                            </td>
                            <td className="p-3 text-slate-650">Commercial offices, retail shops, industrial premises</td>
                            <td className="p-3 font-semibold text-[#DC2626]">Specified Value ≥ ₹3 Lakhs</td>
                            <td className="p-3 text-slate-650">
                              Mandatory DLSA pre-institution mediation; designated fast-track commercial judges
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">
                              Order 37 Summary Suit (Code of Civil Procedure, 1908)
                            </td>
                            <td className="p-3 text-slate-650">Liquidated repair bills &amp; written lease covenants</td>
                            <td className="p-3 font-semibold text-[#DC2626]">Civil Court Jurisdiction</td>
                            <td className="p-3 text-slate-650">
                              Defendant must prove substantial defense to get leave to defend; swift money decree
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">
                              Bharatiya Nyaya Sanhita, 2023 (BNS Sec 324 &amp; 316)
                            </td>
                            <td className="p-3 text-slate-650">Vandalism, theft of fixtures, criminal damage</td>
                            <td className="p-3 font-semibold text-[#DC2626]">Criminal Magistrate Court</td>
                            <td className="p-3 text-slate-650">
                              Personal criminal liability for corporate directors and delinquent tenants
                            </td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">
                              Civil Recovery Suit for Mesne Profits (Sec 2(12) CPC)
                            </td>
                            <td className="p-3 text-slate-650">Compensation for lost market rent during repair period</td>
                            <td className="p-3 font-semibold text-[#DC2626]">District Court / High Court</td>
                            <td className="p-3 text-slate-650">
                              Full recovery of consequential rental revenue along with commercial interest
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                      <h4 className="font-extrabold text-slate-900 text-sm">
                        High-Impact Digital Service with Electronic Tracking under BSA 2023
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        To eliminate common tenant evasions such as refusing physical postal deliveries, Legal Recovery serves every statutory notice via a dual-channel framework: India Post Registered Post AD / Speed Post combined with digitally signed email and WhatsApp delivery. Under{' '}
                        <a
                          href="https://www.indiacode.nic.in/handle/123456789/20235"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:text-purple-800 hover:underline"
                        >
                          Section 63 of the Bharatiya Sakshya Adhiniyam, 2023
                        </a>
                        , our system automatically generates digital certificates of delivery, establishing conclusive constructive service before civil and commercial benches.
                      </p>
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
                      <span className="font-semibold text-slate-800">
                        Transfer of Property Act, 1882 — Section 108 (Rights and Liabilities of Lessor and Lessee), indiacode.nic.in
                      </span>
                    </li>
                    <li>
                      <span className="font-semibold text-slate-800">
                        Indian Contract Act, 1872 — Section 73 (Compensation for Loss or Damage Caused by Breach), indiacode.nic.in
                      </span>
                    </li>
                    <li>
                      <span className="font-semibold text-slate-800">
                        Commercial Courts Act, 2015 — Section 2(1)(c) Commercial Disputes &amp; Section 12A Mandatory Pre-Institution Mediation, indiacode.nic.in
                      </span>
                    </li>
                    <li>
                      <span className="font-semibold text-slate-800">
                        Supreme Court of India — Bharat Petroleum Corp Ltd v. N.R. Vairamani (2004) 8 SCC 579, main.sci.gov.in
                      </span>
                    </li>
                    <li>
                      <span className="font-semibold text-slate-800">
                        Supreme Court of India — Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd. (2022) 10 SCC 1, main.sci.gov.in
                      </span>
                    </li>
                    <li>
                      <span className="font-semibold text-slate-800">
                        Bharatiya Nyaya Sanhita, 2023 — Section 324 (Mischief &amp; Property Damage) &amp; Section 316 (Criminal Breach of Trust), indiacode.nic.in
                      </span>
                    </li>
                    <li>
                      <span className="font-semibold text-slate-800">
                        Bharatiya Sakshya Adhiniyam, 2023 — Section 63 Admissibility of Electronic Records, indiacode.nic.in
                      </span>
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
                        title: 'Legal Notice to Tenant for Not Paying Rent',
                        href: '/send-a-legal-notice/recover-unpaid-rent-from-tenant-india',
                      },
                      {
                        title: 'Security Deposit Not Refunded by Landlord Notice',
                        href: '/send-a-legal-notice/security-deposit-not-refunded-landlord',
                      },
                      {
                        title: 'Legal Notice for Recovery of Money in India',
                        href: '/legal-notice-for-recovery-of-money',
                      },
                      {
                        title: 'Legal Notice to Business Partner for Recovery of Dues',
                        href: '/legal-notice-to-partner-for-recovery-of-dues',
                      },
                      {
                        title: 'Civil Suit for Recovery of Money in India',
                        href: '/civil-suit-for-recovery-of-money-india',
                      },
                      {
                        title: 'Legal Notice to Builder for Delayed Possession',
                        href: '/legal-notice-to-builder-for-delayed-possession-refund',
                      },
                      {
                        title: 'How to File Consumer Complaint in India',
                        href: '/how-to-file-consumer-complaint-india',
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
                    platform, connecting commercial landlords, property managers, individual lessors,
                    and businesses with seasoned panel advocates for rapid, advocate-vetted statutory
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
                  Tenant Damaged Your Property?
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  Send an advocate-vetted statutory notice today. Over 74% of defaulting tenants settle repair costs and rental deficits within 15 days upon receiving formal notice from Legal Recovery.
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
                  <span className="text-slate-400 text-xs">/5 (314 reviews)</span>
                </div>

                {/* Review card — must match JSON-LD Product > Review word-for-word */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#DC2626]/10 flex items-center justify-center font-black text-[#DC2626] text-xs">
                      VS
                    </div>
                    <div>
                      <p className="font-extrabold text-slate-900 text-xs">Vikramaditya Singhania</p>
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
                  { stat: '74%', label: 'Defaulting tenants settle prior to civil litigation' },
                  { stat: '₹100CR+', label: 'Total amount recovered for property owners across India' },
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
