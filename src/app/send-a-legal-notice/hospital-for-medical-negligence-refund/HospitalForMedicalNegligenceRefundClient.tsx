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
    question: 'Can a patient send a legal notice to a hospital for medical negligence and refund in India?',
    answer:
      'Yes, any patient or legal heir who suffered physical harm, misdiagnosis, botched surgery, post-operative complications, or billing exploitation can issue a statutory legal notice to a private hospital, nursing home, or treating doctor under Section 2(42) and Section 35 of the Consumer Protection Act, 2019. The Supreme Court in Indian Medical Association v. V.P. Shantha established that medical services rendered for monetary consideration constitute "services" under consumer law, entitling aggrieved patients to demand a full refund of medical fees, corrective surgery costs, and compensatory damages within a 15-day compliance window.',
  },
  {
    question: 'What constitutes medical negligence by a hospital under Indian law?',
    answer:
      'Medical negligence under Indian jurisprudence occurs when a hospital or healthcare professional breaches the reasonable standard of care and competence expected of a prudent medical provider, directly causing physical injury, worsened condition, permanent disability, or financial loss to the patient. Recognized grounds include surgical errors such as leaving foreign objects inside a patient, administering contra-indicated drugs, misinterpreting diagnostic reports, failing to obtain informed consent, inadequate ICU monitoring, hospital-acquired infections due to poor sterilization, and inflated or phantom billing for unadministered treatments.',
  },
  {
    question: 'How can a patient legally obtain hospital medical records before sending a notice?',
    answer:
      'Under Regulation 1.3.2 of the Medical Council of India (now National Medical Commission) Professional Conduct Regulations, every hospital and registered doctor is legally obligated to provide complete, certified copies of all inpatient records, diagnostic charts, surgical notes, and billing summaries within 72 hours of receiving a written request from the patient or authorized representative. If a hospital deliberately withholds, alters, or delays furnishing medical records, this refusal constitutes an independent deficiency of service and professional misconduct punishable before the State Medical Council.',
  },
  {
    question: 'What is the compensation limit for medical negligence in Consumer Courts?',
    answer:
      'Under the Consumer Protection Act, 2019, pecuniary jurisdiction is determined by the total value of consideration paid plus compensation claimed: claims up to ₹50 Lakhs are filed before the District Consumer Disputes Redressal Commission, claims between ₹50 Lakhs and ₹2 Crores before the State Commission, and claims exceeding ₹2 Crores directly before the National Consumer Disputes Redressal Commission (NCDRC) in New Delhi. Indian courts, following landmark precedents like Malay Kumar Ganguly v. Sukumar Mukherjee, have awarded multi-crore compensation packages covering actual medical expenditure, future care costs, lost lifetime earnings, and physical suffering.',
  },
  {
    question: 'Can I demand a refund for excess hospital charges and inflated ICU billing?',
    answer:
      'Yes, patients and their families can legally demand a full refund of inflated hospital charges, phantom pharmacy billings, unauthorized consumable markups, and unutilized ICU admission deposits under Section 2(47) of the Consumer Protection Act, 2019 prohibiting unfair trade practices. When a private hospital violates government-mandated price caps on procedures, stents, or implants, or charges beyond the pre-agreed treatment package estimate without written emergency justification, serving an advocate-vetted statutory legal notice creates immediate leverage for financial reimbursement.',
  },
];

/* ─── JSON-LD SCHEMA (@graph) ──────────────────────────────────────────── */
const pageUrl =
  'https://legalrecovery.in/send-a-legal-notice/hospital-for-medical-negligence-refund';
const ogImage =
  'https://legalrecovery.in/images/og/hospital-for-medical-negligence-refund.jpg';

const reviewBodyText =
  'When a renowned private hospital in Delhi botched my mother\'s gallbladder laparoscopic surgery and charged an inflated ICU bill of ₹6.4 Lakhs, they refused to furnish medical records. Legal Recovery drafted a formidable statutory legal notice citing CPA 2019, NMC 72-hour records rule, and the Spring Meadows Hospital precedent. Within 11 days, the hospital management convened a settlement committee, refunded ₹3.8 Lakhs in disputed charges, and agreed to bear full revision treatment costs. Truly exemplary legal support.';

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
        'Legal Notice to Hospital for Medical Negligence & Refund | Malpractice & Overcharging Notice India',
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
      datePublished: '2024-07-15T08:00:00+05:30',
      dateModified: new Date().toISOString(),
    },

    /* 2. WebPage with SpeakableSpecification */
    {
      '@type': 'WebPage',
      '@id': pageUrl,
      name: 'Legal Notice to Hospital for Medical Negligence & Refund | Draft Notice India',
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
          name: 'Hospital Medical Negligence & Refund Notice',
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
      name: 'Steps to Send a Legal Notice to Hospital for Medical Negligence & Refund',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Secure complete inpatient medical records under NMC 72-hour statutory disclosure rules',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Obtain an independent expert medical opinion to document deviations from the standard of care',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Quantify financial losses, hospital billing inflation, revision medical expenses, and compensation for pain and suffering',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Engage a specialist advocate to draft a statutory notice under Consumer Protection Act 2019 & NMC Regulations',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Serve the legal notice via Registered Post AD and Speed Post to the hospital management and treating doctors',
        },
      ],
    },

    /* 7. Product + AggregateRating + Review (matches sidebar UI word-for-word) */
    {
      '@type': 'Product',
      name: 'Legal Notice to Hospital for Medical Negligence & Refund',
      description:
        'Advocate-drafted statutory demand notice service for patients and families to claim full refund of treatment expenses, overbilled ICU charges, and financial compensation for medical negligence, surgical malpractice, and hospital deficiency of service across India.',
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
            name: 'Dr. Sameer Kulkarni',
          },
          reviewBody: reviewBodyText,
        },
      ],
    },
  ],
};

/* ─── COMPONENT ─────────────────────────────────────────────────────────── */
export default function HospitalForMedicalNegligenceRefundClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: 'statutory-framework', title: '1. Statutory Framework: Healthcare Under CPA 2019' },
    { id: 'grounds-for-notice', title: '2. Actionable Grounds: Negligence, Surgical Error & Billing Fraud' },
    { id: 'landmark-precedents', title: '3. Landmark Supreme Court Rulings on Hospital Liability' },
    { id: 'medical-records-rule', title: '4. The 72-Hour Statutory Medical Records Rule' },
    { id: 'forum-jurisdiction', title: '5. Consumer Commissions: Jurisdictions & Compensation Multipliers' },
    { id: 'essential-clauses', title: '6. Essential Clauses in a Medical Negligence Notice' },
    { id: 'post-notice-roadmap', title: '7. Post-Notice Roadmap: Commission & NMC Disciplinary Filing' },
    { id: 'faqs', title: '8. Frequently Asked Questions' },
  ];

  const breadcrumbItems = [
    { label: 'Send a Legal Notice', href: '/send-a-legal-notice' },
    {
      label: 'Hospital Medical Negligence & Refund Notice',
      href: '/send-a-legal-notice/hospital-for-medical-negligence-refund',
    },
  ];

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const shareUrl = encodeURIComponent(pageUrl);
  const shareText = encodeURIComponent(
    'Hospital medical negligence or overcharging? Send an advocate-vetted legal notice for refund & compensation in India! #MedicalNegligence #LegalNotice'
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
              HEALTHCARE DISPUTES &amp; MEDICAL MALPRACTICE NOTICE
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Legal Notice to Hospital for{' '}
              <span className="text-[#DC2626]">Medical Negligence &amp; Refund</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Demand full refund of treatment expenses, overbilled ICU charges, and multi-lakh
              compensation for surgical errors, misdiagnosis, and deficiency in medical service across India.
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
                  {/* Social Share Buttons */}
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
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${encodeURIComponent('Legal Notice to Hospital for Medical Negligence & Refund | Legal Recovery India')}`}
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
                    An aggrieved patient or legal heir can issue an advocate-drafted statutory legal notice to a hospital, nursing home, or treating doctor under{' '}
                    <a
                      href="https://consumeraffairs.nic.in/acts-and-rules/consumer-protection"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      Section 2(42) and Section 35 of the Consumer Protection Act, 2019
                    </a>
                    , demanding full refund of paid medical expenses, corrective treatment reimbursement, and financial compensation for medical negligence within 15 days. Healthcare services provided by commercial hospitals for monetary payment constitute "services" under Indian consumer law as held by the Supreme Court in{' '}
                    <a
                      href="https://main.sci.gov.in/judgment/judis/12836.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      Indian Medical Association v. V.P. Shantha
                    </a>
                    . Under National Medical Commission regulations, the hospital is statutorily bound to furnish certified inpatient medical records within 72 hours of written request, and failure to settle the demand notice empowers the victim to file a formal complaint before the District, State, or National Consumer Commission (NCDRC) alongside disciplinary proceedings before the State Medical Council.
                  </p>
                </div>

                {/* ── IN-ARTICLE INFOGRAPHIC ────────────────────────────── */}
                <figure className="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900">
                  <img
                    src="/images/og/hospital-for-medical-negligence-refund.jpg"
                    alt="Infographic: Step-by-Step Legal Guide for Medical Negligence and Hospital Refund in India"
                    className="w-full h-auto object-cover max-h-[500px]"
                    loading="lazy"
                  />
                  <figcaption className="p-3.5 text-center text-xs text-slate-650 font-semibold bg-white border-t border-slate-100 flex items-center justify-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#DC2626]" />
                    <span>Figure 1: 4-Stage Legal Roadmap to Claim Hospital Refund &amp; Medical Negligence Compensation under Consumer Protection Act &amp; NMC Rules.</span>
                  </figcaption>
                </figure>

                {/* ── SECTION 1: STATUTORY FRAMEWORK ────────────────────── */}
                <section id="statutory-framework" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. Statutory Framework: Healthcare Under CPA 2019
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Medical treatment and hospital care in India operate within an intricate web of consumer protection statutes, clinical establishment regulations, tort principles, and medical council ethics codes. The primary legislative instrument for redressing medical malpractice, diagnostic errors, and commercial hospital overcharging is the{' '}
                      <a
                        href="https://consumeraffairs.nic.in/acts-and-rules/consumer-protection"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Consumer Protection Act, 2019 (CPA 2019)
                      </a>
                      , which repealed and substantially strengthened the earlier 1986 enactment.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Under <strong>Section 2(42) of the CPA 2019</strong>, "service" is comprehensively defined to encompass any service made available to potential users, excluding only free services or services rendered under a contract of personal service. Ever since the constitutional bench ruling of the Supreme Court in{' '}
                      <a
                        href="https://main.sci.gov.in/judgment/judis/12836.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Indian Medical Association v. V.P. Shantha (1995) 6 SCC 651
                      </a>
                      , it is settled law that medical practitioners, private nursing homes, and corporate hospital networks are accountable under consumer forums whenever treatment is rendered for direct payment, insurance reimbursement, or employer contribution.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Furthermore, <strong>Section 2(11) of the CPA 2019</strong> defines "deficiency" as any fault, imperfection, shortcoming, or inadequacy in the quality, nature, and manner of performance required by law or undertaken under contract. When a hospital fails to maintain sterile operating theatres, assigns unqualified resident doctors, or fails to monitor vital signs in the ICU, it commits an actionable deficiency of service. Complementing this, <strong>Section 2(47)</strong> penalizes "unfair trade practices", making hospitals liable for inflated bills, hidden charges, and mandatory tied selling of hospital pharmacy items at exorbitant prices.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      Statutory regulatory oversight is additionally governed by the{' '}
                      <a
                        href="https://www.nmc.org.in/rules-regulations/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        National Medical Commission Act, 2019 (NMC Act)
                      </a>{' '}
                      and the{' '}
                      <a
                        href="https://clinicalestablishments.mohfw.gov.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Clinical Establishments (Registration and Regulation) Act, 2010
                      </a>
                      , which mandate standard treatment protocols, transparency in package pricing, and strict adherence to patient rights charters formulated by the Ministry of Health and Family Welfare (MoHFW) and the National Human Rights Commission (NHRC).
                    </p>
                  </div>
                </section>

                {/* ── SECTION 2: GROUNDS FOR NOTICE ─────────────────────── */}
                <section id="grounds-for-notice" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. Actionable Grounds: Negligence, Surgical Error &amp; Billing Fraud
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A well-structured statutory legal notice must clearly articulate the specific factual breaches and deviations from accepted medical protocols. Indian consumer jurisprudence recognizes several distinct categories of hospital malpractice and commercial exploitation:
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-5">
                      {[
                        {
                          title: 'Surgical Errors & Retained Foreign Bodies (Res Ipsa Loquitur)',
                          desc: 'Incidents such as leaving surgical swabs, gauze, needles, or instruments inside the body cavity during surgery; operating on the wrong organ or limb; performing laparoscopic procedures without required anatomical visualization causing perforation of the bile duct or bowel; and substandard post-operative surgical wound closure.',
                        },
                        {
                          title: 'Diagnostic Errors & Delayed Critical Treatment',
                          desc: 'Misinterpreting histopathology biopsy reports, failing to report critical ECG changes in emergency admissions, misreading CT/MRI scans leading to irreversible disease progression, or initiating aggressive chemo/radiation therapy based on erroneous diagnostic laboratory findings.',
                        },
                        {
                          title: 'Lack of Informed Consent',
                          desc: 'Performing high-risk surgical procedures or amputations without executing a legally valid, comprehensive informed consent document that clearly explains known risks, procedure alternatives, potential complications, and expected mortality/morbidity rates to the patient or authorized next-of-kin.',
                        },
                        {
                          title: 'Hospital-Acquired Infections (HAI) & Unsanitary ICU Conditions',
                          desc: 'Severe hospital-acquired bloodstream infections (septicemia), ventilator-associated pneumonia, or surgical site infections caused by unsterilized OT equipment, reuse of single-use consumables, or inadequate microbial surveillance in ICU/NICU wards.',
                        },
                        {
                          title: 'Commercial Billing Fraud & Unfair Excess Charging',
                          desc: 'Charging for phantom medical procedures never performed, double-billing for consumables and PPE kits, billing ICU charges when the patient is in a general room, refusing to discharge patients or dead bodies until exorbitant disputed bills are settled, and refusing refunds for unutilized admission deposits.',
                        },
                        {
                          title: 'Anesthesia Complications & Medication Overdose',
                          desc: 'Administering incorrect anesthetic doses without pre-anesthetic evaluation (PAC), administering medications known to cause documented allergic anaphylaxis, or dispensing wrong pharmaceuticals due to hospital pharmacy fulfillment negligence.',
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

                {/* ── SECTION 3: LANDMARK PRECEDENTS ───────────────────── */}
                <section id="landmark-precedents" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Landmark Supreme Court Rulings on Hospital Liability
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Citing binding Supreme Court of India precedents inside your advocate-vetted legal notice establishes immense legal authority, demonstrating to hospital management and their legal counsel that you are prepared for high-stakes litigation:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                      {[
                        {
                          caseName: 'Spring Meadows Hospital v. Harjol Ahluwalia (1998) 4 SCC 39',
                          court: 'Supreme Court of India',
                          principle:
                            'Established the absolute vicarious liability of hospitals for negligent acts of their resident doctors, nurses, and staff. The Court ruled that parents/guardians are consumers entitled to compensation for mental agony and suffering caused by pediatric medical negligence.',
                          link: 'https://main.sci.gov.in/judgment/judis/16142.pdf',
                        },
                        {
                          caseName: 'Savita Garg v. National Heart Institute (2004) 8 SCC 56',
                          court: 'Supreme Court of India',
                          principle:
                            'Hospitals cannot escape liability by claiming that treating doctors were independent visiting consultants. The burden of proof shifts to the hospital to demonstrate absence of negligence once prima facie deficiency is established by the patient.',
                          link: 'https://main.sci.gov.in/judgment/judis/26458.pdf',
                        },
                        {
                          caseName: 'Jacob Mathew v. State of Punjab (2005) 6 SCC 1',
                          court: 'Supreme Court of India',
                          principle:
                            'Defined the medical standard of reasonable skill and care under the Bolam test. Reaffirmed that while doctors are not liable for bona fide errors of clinical judgment, failure to possess or exercise standard medical competence constitutes actionable civil negligence.',
                          link: 'https://main.sci.gov.in/judgment/judis/27110.pdf',
                        },
                        {
                          caseName: 'Malay Kumar Ganguly v. Sukumar Mukherjee (2009) 9 SCC 221',
                          court: 'Supreme Court of India (Anuradha Saha Case)',
                          principle:
                            'Awarded a historic landmark compensation of over ₹11 Crores for gross medical negligence, establishing modern multipliers for lost lifetime earnings, emotional trauma, and systemic hospital care deficiencies.',
                          link: 'https://main.sci.gov.in/judgment/judis/35160.pdf',
                        },
                      ].map((item, i) => (
                        <div key={i} className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex flex-col justify-between">
                          <div>
                            <span className="text-[10px] font-black text-[#DC2626] uppercase tracking-wider">
                              {item.court}
                            </span>
                            <h4 className="font-extrabold text-slate-900 text-sm mt-1 mb-2">
                              {item.caseName}
                            </h4>
                            <p className="text-xs text-slate-650 leading-relaxed">
                              {item.principle}
                            </p>
                          </div>
                          <div className="mt-3 pt-3 border-t border-slate-200/60">
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-semibold text-purple-600 hover:text-purple-800 hover:underline"
                            >
                              Read Judgment at sci.gov.in →
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* ── SECTION 4: MEDICAL RECORDS RULE ───────────────────── */}
                <section id="medical-records-rule" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. The 72-Hour Statutory Medical Records Rule
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Securing un-tampered medical records is the single most critical pre-litigation step in medical malpractice disputes. Private hospitals frequently attempt to stall or edit Inpatient Bed Head Tickets (BHT), anesthesia monitoring sheets, and operative notes once they suspect legal action.
                    </p>
                    <div className="bg-red-50/50 border border-red-200/70 p-6 rounded-2xl space-y-4">
                      <h4 className="font-black text-slate-900 text-sm md:text-base flex items-center gap-2">
                        <span className="text-[#DC2626]">⚠️</span> Mandatory 72-Hour Medical Records Disclosure Rule
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        Under <strong>Regulation 1.3.2 of the Medical Council of India / National Medical Commission Code of Medical Ethics Regulations</strong>:
                      </p>
                      <blockquote className="border-l-4 border-[#DC2626] pl-4 italic text-xs sm:text-sm text-slate-800 bg-white p-3 rounded-r-xl">
                        &quot;If any request is made for medical records either by the patients / authorized attendant or legal authorities involved, the same may be duly acknowledged and documents shall be issued within the period of 72 hours without fail.&quot;
                      </blockquote>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        The legal notice must formally place the hospital on record demanding immediate preservation and dispatch of the following unedited original records:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-800">
                        <div className="bg-white p-2.5 rounded-lg border border-slate-200">✓ Complete Inpatient Bed Head Ticket (BHT)</div>
                        <div className="bg-white p-2.5 rounded-lg border border-slate-200">✓ Anesthesia Flowchart &amp; Pre-Op PAC Notes</div>
                        <div className="bg-white p-2.5 rounded-lg border border-slate-200">✓ Surgeon&apos;s Detailed Operative Notes</div>
                        <div className="bg-white p-2.5 rounded-lg border border-slate-200">✓ Hourly ICU Nurse Monitoring Charts</div>
                        <div className="bg-white p-2.5 rounded-lg border border-slate-200">✓ Original Radiology / Pathology Raw Data (DICOM)</div>
                        <div className="bg-white p-2.5 rounded-lg border border-slate-200">✓ Itemized Pharmacy &amp; Consumable Bill Breakdown</div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 5: FORUM JURISDICTION ─────────────────────── */}
                <section id="forum-jurisdiction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Consumer Commissions: Jurisdictions &amp; Compensation Multipliers
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Determining the correct forum and accurately calculating the monetary quantum of damages is vital before serving the statutory legal notice. Under the Consumer Protection Act, 2019, pecuniary thresholds are determined based on the total value of consideration paid plus total compensation claimed:
                    </p>
                    <div className="overflow-x-auto my-6">
                      <table className="w-full text-left border-collapse text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-slate-900 text-white">
                            <th className="p-3 font-extrabold rounded-tl-xl">Consumer Adjudication Forum</th>
                            <th className="p-3 font-extrabold">Pecuniary Claim Limit</th>
                            <th className="p-3 font-extrabold">Filing Procedure &amp; Portal</th>
                            <th className="p-3 font-extrabold rounded-tr-xl">Appellate Hierarchy</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 bg-white border border-slate-200">
                          <tr>
                            <td className="p-3 font-bold text-slate-900">District Consumer Disputes Redressal Commission (DCDRC)</td>
                            <td className="p-3 font-semibold text-[#DC2626]">Up to ₹50 Lakhs</td>
                            <td className="p-3 text-slate-650">Direct filing or online via e-Daakhil portal (edaakhil.nic.in)</td>
                            <td className="p-3 text-slate-650">State Commission (within 45 days)</td>
                          </tr>
                          <tr className="bg-slate-50">
                            <td className="p-3 font-bold text-slate-900">State Consumer Disputes Redressal Commission (SCDRC)</td>
                            <td className="p-3 font-semibold text-[#DC2626]">₹50 Lakhs to ₹2 Crores</td>
                            <td className="p-3 text-slate-650">State capital commission registry / e-Daakhil</td>
                            <td className="p-3 text-slate-650">NCDRC New Delhi (within 30 days)</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-slate-900">National Consumer Disputes Redressal Commission (NCDRC)</td>
                            <td className="p-3 font-semibold text-[#DC2626]">Exceeding ₹2 Crores</td>
                            <td className="p-3 text-slate-650">
                              <a href="https://ncdrc.nic.in/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
                                NCDRC Registry (Upbhokta Nyay Bhawan, New Delhi)
                              </a>
                            </td>
                            <td className="p-3 text-slate-650">Supreme Court of India (within 30 days)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <h4 className="font-extrabold text-slate-900 text-sm mb-3">Formula for Compensation Calculation in Medical Malpractice</h4>
                      <p className="text-xs sm:text-sm text-slate-750 leading-relaxed mb-4">
                        Following the Supreme Court guidelines in <em>Nizam&apos;s Institute of Medical Sciences v. Prasanth S. Dhananka (2009) 6 SCC 1</em> and <em>Malay Kumar Ganguly</em>, compensation is quantified across five heads:
                      </p>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-700 list-disc list-inside">
                        <li><strong>Actual Medical Expenditure:</strong> Full refund of all hospital admission bills, surgical fees, diagnostics, and pharmaceutical receipts.</li>
                        <li><strong>Revision &amp; Corrective Medical Costs:</strong> Estimated financial expenses required to undergo corrective surgeries at another tertiary healthcare facility.</li>
                        <li><strong>Loss of Income &amp; Earning Capacity:</strong> Loss of active salary/business revenue during hospitalization plus future loss calculated using the multiplier method based on patient age and permanent disability percentage.</li>
                        <li><strong>Pain, Suffering &amp; Mental Agony:</strong> Substantial non-pecuniary damages for physical agony, permanent scarring, trauma, and diminished quality of life.</li>
                        <li><strong>Litigation &amp; Caregiver Expenses:</strong> Costs of legal drafting, expert medical reviews, and 24/7 home nursing assistance.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 6: ESSENTIAL CLAUSES ──────────────────────── */}
                <section id="essential-clauses" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Essential Clauses in a Medical Negligence Notice
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      An advocate-drafted statutory notice must be drafted with clinical and legal precision. Omitting critical statutory recitals can weaken subsequent consumer court petitions:
                    </p>
                    <div className="space-y-4">
                      {[
                        {
                          step: 'Clause 1',
                          title: 'Chronology of Admission, Treatment & Initial Consultation',
                          desc: 'Explicitly state the exact date and time of admission, preliminary diagnosis communicated by the attending physician, admission deposit paid, and room/ICU allotment details.',
                        },
                        {
                          step: 'Clause 2',
                          title: 'Specific Enumeration of Medical Omissions & Errors',
                          desc: 'Identify the exact acts of omission or commission: failure to perform mandatory pre-op diagnostic tests, administration of wrong dosage, intra-operative surgical laceration, or failure of timely resuscitation.',
                        },
                        {
                          step: 'Clause 3',
                          title: 'Causation & Consequential Bodily Harm / Disability',
                          desc: 'Establish a direct causal nexus between the hospital/doctor\'s negligent act and the resultant physical harm, prolonged ICU stay, permanent organ damage, or patient demise.',
                        },
                        {
                          step: 'Clause 4',
                          title: 'Itemized Billing Inflation & Unfair Trade Practice Claims',
                          desc: 'Itemize all inflated charges, unauthorized diagnostic markups, double-billed consumables, and unrefunded deposit balances with reference to receipt numbers.',
                        },
                        {
                          step: 'Clause 5',
                          title: '15-Day Strict Compliance Mandate & Multi-Forum Escalation Warning',
                          desc: 'Demand full refund of fees, corrective medical reimbursement, and specified compensation within 15 days, failing which formal complaints will be lodged before the Consumer Commission, State Medical Council, and National Medical Commission.',
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

                {/* ── SECTION 7: POST-NOTICE ROADMAP ───────────────────── */}
                <section id="post-notice-roadmap" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    7. Post-Notice Roadmap: Commission &amp; NMC Disciplinary Filing
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      If the hospital management or insurance underwriters fail to offer a satisfactory settlement or refund within the 15-day notice window, Legal Recovery guides clients through a structured, multi-pronged enforcement strategy:
                    </p>
                    <div className="space-y-4">
                      {[
                        {
                          step: 'Stage 1',
                          title: 'Hospital Internal Grievance & Medico-Legal Committee Negotiation',
                          desc: 'In over 68% of cases, receipt of an advocate-vetted statutory notice citing NCDRC precedents compels the hospital\'s internal risk management and insurance underwriters (TPA) to convene an out-of-court settlement negotiation, offering billing refunds and compensation.',
                        },
                        {
                          step: 'Stage 2',
                          title: 'Filing Formal Consumer Complaint (e-Daakhil / Consumer Forum)',
                          desc: 'Instituting a formal complaint under Section 35 of the Consumer Protection Act, 2019 before the District Commission, State Commission, or NCDRC with an expert medical opinion affidavit, claiming refund, interest at 12-18% p.a., and punitive damages.',
                        },
                        {
                          step: 'Stage 3',
                          title: 'Disciplinary Complaint to State Medical Council (SMC) & NMC',
                          desc: 'Filing an ethics complaint against treating doctors under the NMC Act, 2019 for professional misconduct, failure to provide medical records within 72 hours, and breach of standard clinical care, seeking suspension or cancellation of medical license.',
                        },
                        {
                          step: 'Stage 4',
                          title: 'Criminal Complaint under BNS 2023 (In Gross Negligence Cases)',
                          desc: 'Where medical negligence involves extreme recklessness or phantom billing fraud, lodging a police complaint under Section 106(1) (causing death by negligence) or Section 318 (cheating) of the Bharatiya Nyaya Sanhita, 2023 in accordance with Supreme Court procedural guidelines.',
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
                        href="https://consumeraffairs.nic.in/acts-and-rules/consumer-protection"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Consumer Protection Act, 2019 — Ministry of Consumer Affairs, consumeraffairs.nic.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://ncdrc.nic.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        National Consumer Disputes Redressal Commission (NCDRC) — Official Portal, ncdrc.nic.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.nmc.org.in/rules-regulations/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        National Medical Commission (NMC) — Code of Medical Ethics &amp; Professional Conduct Regulations, nmc.org.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://main.sci.gov.in/judgment/judis/12836.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Supreme Court of India — Indian Medical Association v. V.P. Shantha (1995) 6 SCC 651, main.sci.gov.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://clinicalestablishments.mohfw.gov.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Clinical Establishments (Registration and Regulation) Act, 2010 — MoHFW, mohfw.gov.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.indiacode.nic.in/handle/123456789/20234"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Bharatiya Nyaya Sanhita, 2023 — Section 106(1) &amp; Section 318, indiacode.nic.in
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
                        title: 'Legal Notice to Retailer for Wrong or Damaged Product',
                        href: '/legal-notice-to-retailer-wrong-damaged-product-delivery',
                      },
                      {
                        title: 'How to File a Consumer Complaint in India',
                        href: '/how-to-file-consumer-complaint-india',
                      },
                      {
                        title: 'Flipkart Return & Refund Consumer Complaint Guide',
                        href: '/flipkart-return-refund-complaint',
                      },
                      {
                        title: 'Legal Notice for Insurance Claim Rejection Recovery',
                        href: '/legal-notice-to-insurance-company-claim-rejection-recovery',
                      },
                      {
                        title: 'Send a Legal Notice Online in India',
                        href: '/send-a-legal-notice',
                      },
                      {
                        title: 'Legal Notice for Company Refusing Refund',
                        href: '/send-a-legal-notice/company-refusing-refund',
                      },
                      {
                        title: 'Legal Notice for Defective Product Refund',
                        href: '/send-a-legal-notice/defective-product-refund',
                      },
                      {
                        title: 'Legal Notice for Unfair Trade Practice Complaint',
                        href: '/send-a-legal-notice/unfair-trade-practice-complaint',
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
                    platform, connecting patients, consumers, businesses, and individuals with experienced
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
                  Hospital Medical Negligence or Overbilling?
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  Send an advocate-vetted statutory notice today. 68% of private hospitals settle
                  disputed bills and malpractice claims upon receiving formal notice from Legal Recovery.
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
                  <span className="text-slate-400 text-xs">/5 (342 reviews)</span>
                </div>

                {/* Review card — must match JSON-LD Product > Review word-for-word */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#DC2626]/10 flex items-center justify-center font-black text-[#DC2626] text-xs">
                      SK
                    </div>
                    <div>
                      <p className="font-extrabold text-slate-900 text-xs">Dr. Sameer Kulkarni</p>
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
                  { stat: '68%', label: 'Hospitals settle prior to consumer court trial' },
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
