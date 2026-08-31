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
      'What is the mandatory statutory timeline for an insurance company to settle a claim in India?',
    answer:
      'Under Regulation 15 of the IRDAI (Protection of Policyholders’ Interests) Regulations, 2017 and the IRDAI Master Circular, an insurer must appoint a surveyor within 72 hours of claim intimation, and the surveyor must submit the survey report within 30 days. Upon receipt of the survey report or final clarifying document, the insurer is legally mandated to either accept, offer settlement, or repudiate the claim within a strict 30-day window. If the settlement offer is accepted by the policyholder, the insurance company must disburse the funds within 7 days, failing which it is liable to pay penal interest at 2% above the prevailing bank rate.',
  },
  {
    question:
      'Can a policyholder demand penal interest from the insurance company for delayed claim settlement?',
    answer:
      'Yes, under the IRDAI Policyholders Protection Regulations, any unjustified delay beyond the statutory 30-day settlement window obligates the insurance company to pay penal interest on the admitted claim amount. The penal interest is calculated at a rate of 2% above the prevailing Reserve Bank of India (RBI) repo or bank lending rate from the date of submission of the last required document until the date of actual disbursement. Policyholders can formally demand this statutory penal interest alongside compensatory damages for mental agony and deficiency of service through an advocate-vetted legal notice.',
  },
  {
    question:
      'What legal actions can be taken if an insurance company ignores a legal notice for claim delay?',
    answer:
      'If an insurance company fails to settle the claim or provide a legally valid response within the 15-day notice window, the policyholder can escalate the dispute to the Insurance Ombudsman for claims up to ₹50 Lakhs. Alternatively, the claimant can file a statutory consumer complaint under Section 35, 47, or 58 of the Consumer Protection Act, 2019 before the District, State, or National Consumer Commission (NCDRC) seeking full reimbursement, statutory penal interest, and litigation costs. In commercial policies involving corporate losses or cargo disputes, policyholders can also invoke summary commercial proceedings under the Commercial Courts Act, 2015.',
  },
  {
    question:
      'Can an insurer delay or reject a claim on minor technicalities or ambiguous pre-existing condition clauses?',
    answer:
      'The Supreme Court of India in Gurmel Singh v. Branch Manager, National Insurance Co. Ltd. (2022) established that insurance companies cannot repudiate or indefinitely delay genuine claims on hyper-technical procedural grounds or minor omissions. Furthermore, under the doctrine of contra proferentem and landmark rulings in Manmohan Nanda v. United India Assurance (2022), ambiguous policy terms and exclusionary definitions must be interpreted strictly in favor of the insured. Insurers cannot repeatedly raise piecemeal objections or create endless documentary loops once fundamental liability is established.',
  },
  {
    question:
      'What is the limitation period for serving a legal notice and filing a legal case for an unsettled insurance claim in India?',
    answer:
      'Under Section 69 of the Consumer Protection Act, 2019 and Article 44 of the Limitation Act, 1963, a consumer dispute or civil recovery claim against an insurer must be instituted within two years from the date on which the cause of action arose. The cause of action typically accrues when the insurer exceeds the statutory 30-day settlement timeline, issues a repudiation letter, or enters into an indefinite non-responsive delay. Serving a formal statutory legal notice immediately establishes a verifiable paper trail, prevents the claim from becoming time-barred, and formally registers the insurer’s continuing breach of contract.',
  },
  {
    question:
      'Is an insurance company required to settle cashless hospital and motor garage claims within specific hourly windows?',
    answer:
      'Under the latest IRDAI Master Directions on Health Insurance, insurance companies and third-party administrators (TPAs) must grant cashless pre-authorization decisions within 1 hour of hospital submission and final cashless discharge authorization within 3 hours of receiving the hospital’s final bill. For motor insurance, insurers must arrange spot surveys and issue cashless garage approval within 24 to 48 hours. When insurers fail to fulfill these time-bound mandates and force policyholders into prolonged out-of-pocket reimbursement delays, serving a formal legal notice establishes statutory deficiency in service under Section 2(11) of the Consumer Protection Act, 2019.',
  },
];

/* ─── JSON-LD SCHEMA (@graph) ──────────────────────────────────────────── */
const pageUrl =
  'https://legalrecovery.in/send-a-legal-notice/insurance-claim-not-settled-delay';
const ogImage =
  'https://legalrecovery.in/images/og/insurance-claim-not-settled-delay.jpg';

const reviewBodyText =
  'My father had undergone an emergency coronary bypass surgery costing ₹18,45,000, and our cashless health insurance claim was stalled for more than 5 months by the private insurer under continuous, redundant queries about past medical history. Despite submitting complete hospital records, the insurer kept delaying the settlement without issuing an approval or formal repudiation. Legal Recovery drafted and served an exhaustive advocate-vetted statutory legal notice citing IRDAI Regulation 15, the 30-day settlement mandate, and Supreme Court precedents on penal interest. Within 11 days of receiving the notice, the insurance company contacted us, cleared the entire ₹18.45 Lakhs claim along with accrued interest, and waived all objections. Outstanding legal efficiency for policyholder recovery.';

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
        'Legal Notice for Insurance Claim Not Settled Delay | Draft & Send Notice India',
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
      datePublished: '2024-08-12T08:00:00+05:30',
      dateModified: new Date().toISOString(),
    },

    /* 2. WebPage with SpeakableSpecification */
    {
      '@type': 'WebPage',
      '@id': pageUrl,
      name: 'Legal Notice for Insurance Claim Not Settled Delay | Draft Notice India',
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
          name: 'Legal Notice for Insurance Claim Not Settled Delay',
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
      name: 'Step-by-Step Legal Process to Recover Delayed Insurance Claims in India',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Collate policy documents, claim acknowledgement number, hospital or repair bills, and all email correspondence with the insurer/TPA',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Calculate exact statutory delay beyond the IRDAI 30-day settlement window and compute accrued penal interest at bank rate + 2%',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Draft an advocate-vetted statutory legal notice citing IRDAI Protection of Policyholders Regulations, Consumer Protection Act 2019 & Supreme Court rulings',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Serve the formal notice directly to the insurance company MD, Grievance Redressal Officer, and TPA via Registered Post AD and verified corporate email',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Enforce statutory compliance within the 15-day window or escalate to the Insurance Ombudsman (up to ₹50 Lakhs) and Consumer Disputes Commission',
        },
      ],
    },

    /* 7. Product + AggregateRating + Review (matches sidebar UI word-for-word) */
    {
      '@type': 'Product',
      name: 'Legal Notice for Insurance Claim Not Settled Delay',
      description:
        'Advocate-drafted statutory demand notice service for policyholders facing unlawful delays, arbitrary deductions, or unresolved health, motor, life, fire, and commercial insurance claims across India.',
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
            name: 'Pranit Deshmukh',
          },
          reviewBody: reviewBodyText,
        },
      ],
    },
  ],
};

/* ─── COMPONENT ─────────────────────────────────────────────────────────── */
export default function InsuranceClaimNotSettledDelayClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: 'statutory-framework', title: '1. Statutory Mandate & IRDAI Timelines for Claim Settlement' },
    { id: 'actionable-grounds', title: '2. Actionable Grounds: Unlawful Delays & Endless Query Loops' },
    { id: 'legal-remedies', title: '3. Legal Remedies: Ombudsman vs Consumer Forum vs Commercial Courts' },
    { id: 'evidentiary-checklist', title: '4. Evidentiary Checklist & Claim Document Audit' },
    { id: 'essential-clauses', title: '5. Key Clauses in a Statutory Notice for Delayed Insurance Settlement' },
    { id: 'strategic-roadmap', title: '6. Strategic Roadmap: 15-Day Legal Demand to Full Recovery' },
    { id: 'faqs', title: '7. Frequently Asked Questions' },
    { id: 'legal-citations', title: '8. Statutory References & Landmark Case Law' },
  ];

  const breadcrumbItems = [
    { label: 'Send a Legal Notice', href: '/send-a-legal-notice' },
    {
      label: 'Insurance Claim Not Settled Delay',
      href: '/send-a-legal-notice/insurance-claim-not-settled-delay',
    },
  ];

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const shareUrl = encodeURIComponent(pageUrl);
  const shareText = encodeURIComponent(
    'Insurance company delaying or refusing to settle your legitimate claim? Send an advocate-vetted statutory legal notice for claim settlement delay under IRDAI 30-day mandate & penal interest rules! #InsuranceRecovery #LegalNotice #IRDAI'
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
              IRDAI STATUTORY TIMELINES &amp; POLICYHOLDER RECOVERY
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Legal Notice for{' '}
              <span className="text-[#DC2626]">Insurance Claim Not Settled Delay</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Compel private and public insurance companies to disburse delayed health, motor, life, fire, and commercial claims under the IRDAI 30-day settlement mandate, statutory penal interest rules, and Consumer Protection Act 2019.
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
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${encodeURIComponent('Legal Notice for Insurance Claim Not Settled Delay | Legal Recovery India')}`}
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
                    A policyholder facing an unsettled or delayed health, motor, life, or commercial insurance claim can serve an advocate-vetted statutory legal notice under{' '}
                    <a
                      href="https://irdai.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      Regulation 15 of the IRDAI (Protection of Policyholders’ Interests) Regulations, 2017
                    </a>
                    , demanding immediate disbursement of the full claim amount alongside statutory penal interest at 2% above the prevailing bank rate within a 15-day compliance window. If the insurance company fails to settle the claim or offer justifiable grounds within the notice period, the policyholder can initiate summary adjudication before the Insurance Ombudsman for claims up to ₹50 Lakhs or file a consumer complaint for deficiency in service under{' '}
                    <a
                      href="https://consumeraffairs.nic.in/acts-and-rules/consumer-protection"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      Section 2(11) and Sections 35, 47, or 58 of the Consumer Protection Act, 2019
                    </a>
                    . Furthermore, under landmark rulings by the Supreme Court of India in{' '}
                    <a
                      href="https://main.sci.gov.in/judgment/judis/49047.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      Gurmel Singh v. National Insurance Co. Ltd. (2022)
                    </a>
                    , insurers are legally barred from withholding policy payouts on hyper-technical or procedural grounds.
                  </p>
                </div>

                {/* ── IN-ARTICLE INFOGRAPHIC ────────────────────────────── */}
                <figure className="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900">
                  <img
                    src="/images/og/insurance-claim-not-settled-delay.jpg"
                    alt="Infographic: Step-by-Step Legal Process for Delayed Insurance Claim Settlement in India"
                    className="w-full h-auto object-cover max-h-[500px]"
                    loading="lazy"
                  />
                  <figcaption className="p-3.5 text-center text-xs text-slate-650 font-semibold bg-white border-t border-slate-100 flex items-center justify-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#DC2626]" />
                    <span>Figure 1: Statutory Roadmap for Unsettled Insurance Claim Recovery under IRDAI Policyholder Regulations, Consumer Protection Act 2019 &amp; Insurance Ombudsman Rules.</span>
                  </figcaption>
                </figure>

                {/* ── SECTION 1: STATUTORY FRAMEWORK ────────────────────── */}
                <section id="statutory-framework" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. Statutory Mandate &amp; IRDAI Timelines for Insurance Claim Settlement
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Insurance contracts in India operate under the fundamental common law doctrine of <em>uberrima fides</em> (utmost good faith). While insurers rigorously enforce this duty on policyholders during underwriting, regulatory authorities and Indian judicial bodies have made it unequivocally clear that this reciprocal obligation binds the insurance company to assess, process, and disburse genuine claims expeditiously without bureaucratic evasion.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      The primary regulatory authority governing claim settlement timelines is the{' '}
                      <a
                        href="https://irdai.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Insurance Regulatory and Development Authority of India (IRDAI)
                      </a>
                      . Under the <strong>IRDAI (Protection of Policyholders’ Interests) Regulations, 2017</strong> (and subsequent Master Circulars on Policyholder Protection), strict, non-negotiable procedural deadlines govern every phase of claim handling:
                    </p>

                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                      <h3 className="font-black text-slate-900 text-sm md:text-base">
                        Key IRDAI Regulatory Timelines for General, Health &amp; Life Claims:
                      </h3>
                      <ul className="space-y-3 text-xs sm:text-sm text-slate-700 list-disc list-inside">
                        <li>
                          <strong>Surveyor Appointment within 72 Hours:</strong> When a claim requires an independent loss assessment (mandatory for motor, fire, or property claims above statutory thresholds), the insurer must appoint an IRDAI-licensed surveyor within 72 hours of receiving claim intimation.
                        </li>
                        <li>
                          <strong>Survey Report Submission within 30 Days:</strong> The surveyor must conduct the inspection and submit the detailed final survey report to the insurer within 30 days of appointment. If complex forensic investigations are required, an extension may be granted, but the total investigation window cannot exceed 6 months from claim intimation.
                        </li>
                        <li>
                          <strong>30-Day Adjudication Window:</strong> Upon receipt of the surveyor’s report or the final clarifying document from the policyholder, the insurer must accept, offer settlement, or formally repudiate the claim within exactly 30 days.
                        </li>
                        <li>
                          <strong>7-Day Payment Rule:</strong> Where a claim settlement offer is accepted by the policyholder, the insurance company must disburse the settlement funds directly into the claimant’s bank account within 7 calendar days.
                        </li>
                        <li>
                          <strong>Mandatory Penal Interest:</strong> If the insurer fails to make payment within the statutory 30-day adjudication or 7-day disbursement window without legal justification, it is statutorily liable to pay penal interest at <strong>2% above the prevailing bank rate</strong> (repo rate) from the date of submission of the last relevant document until the actual date of payment.
                        </li>
                      </ul>
                    </div>

                    <p className="text-sm md:text-base leading-relaxed">
                      Additionally, for health insurance claims, IRDAI’s Master Circular on Health Insurance Products mandates that Third-Party Administrators (TPAs) and insurers must communicate cashless authorization within <strong>1 hour</strong> of intimation by the network hospital, and provide final cashless discharge clearance within <strong>3 hours</strong> of receiving the final hospital bill. Withholding discharge clearances or converting valid cashless claims into prolonged reimbursement battles represents a direct regulatory breach.
                    </p>
                  </div>
                </section>

                {/* ── SECTION 2: ACTIONABLE GROUNDS ─────────────────────── */}
                <section id="actionable-grounds" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. Actionable Grounds: Unlawful Delays &amp; Endless Query Loops
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Insurance companies frequently deploy systemic administrative tactics designed to exhaust policyholders, forcing them to abandon claims or accept severely discounted partial settlements. Serving a comprehensive statutory legal notice legally pins down these unfair practices and transforms bureaucratic foot-dragging into verifiable evidence of actionable deficiency in service:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                        <h4 className="font-black text-slate-900 text-sm mb-2 text-[#DC2626]">
                          Endless Piecemeal Query Cycles
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Rather than issuing a consolidated document requirement list within 15 days of intimation as required by IRDAI regulations, insurers issue repetitive, piecemeal queries every few weeks to artificially reset their internal 30-day settlement clocks.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                        <h4 className="font-black text-slate-900 text-sm mb-2 text-[#DC2626]">
                          Vague Pre-Existing Disease (PED) Allegations
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Insurers often stall health claims by demanding decades-old outpatient medical records for unrelated lifestyle conditions (such as hypertension or diabetes) without demonstrating any direct causal nexus to the acute hospitalization condition.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                        <h4 className="font-black text-slate-900 text-sm mb-2 text-[#DC2626]">
                          Surveyor Report Suppression
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          In property, fire, and commercial loss claims, insurers frequently withhold copies of the independent surveyor’s assessment report from the insured while quietly lobbying the surveyor to re-quantify or downscale the assessed loss.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                        <h4 className="font-black text-slate-900 text-sm mb-2 text-[#DC2626]">
                          Coercive Full &amp; Final Vouchers
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Conditioning the release of admitted partial claim amounts on the insured executing an unconditional &quot;Discharge Voucher&quot; waiving all future claims has been repeatedly declared void and coercive by the Supreme Court of India.
                        </p>
                      </div>
                    </div>

                    <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                      <h3 className="font-black text-slate-900 text-sm md:text-base mb-2">
                        Comparative Overview: Permissible Delays vs. Actionable Unlawful Delay
                      </h3>
                      <div className="overflow-x-auto mt-4">
                        <table className="w-full text-left text-xs border-collapse">
                          <thead>
                            <tr className="border-b border-red-200 text-slate-900 font-extrabold bg-red-100/50">
                              <th className="p-3">Claim Stage</th>
                              <th className="p-3">Statutory Regulatory Limit</th>
                              <th className="p-3">Unlawful Conduct Triggering Legal Notice</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-red-100 text-slate-700">
                            <tr>
                              <td className="p-3 font-semibold">Surveyor Appointment</td>
                              <td className="p-3">Within 72 hours of intimation</td>
                              <td className="p-3">Delaying surveyor assignment for weeks while physical evidence deteriorates</td>
                            </tr>
                            <tr>
                              <td className="p-3 font-semibold">Survey Report Completion</td>
                              <td className="p-3">30 days (Max 6 months for special investigations)</td>
                              <td className="p-3">Failing to file survey report and refusing to share report copy with insured</td>
                            </tr>
                            <tr>
                              <td className="p-3 font-semibold">Claim Settlement Decision</td>
                              <td className="p-3">30 days from receipt of survey report/docs</td>
                              <td className="p-3">Claim pending for 60+ days with continuous repetitive documentation requests</td>
                            </tr>
                            <tr>
                              <td className="p-3 font-semibold">Fund Disbursement</td>
                              <td className="p-3">7 days from settlement acceptance</td>
                              <td className="p-3">Non-payment beyond 7 days without applying statutory bank rate + 2% penal interest</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 3: LEGAL REMEDIES ──────────────────────────── */}
                <section id="legal-remedies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. Legal Remedies: Ombudsman vs Consumer Forum vs Commercial Courts
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      When an insurance company defaults on its statutory settlement mandate, serving an advocate-drafted legal notice provides the crucial foundational milestone required to unlock multi-tiered legal remedies across specialized dispute resolution forums in India:
                    </p>

                    <div className="space-y-5">
                      <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm">
                        <h3 className="font-black text-slate-900 text-base md:text-lg mb-2 flex items-center gap-2">
                          <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">
                            A
                          </span>
                          Insurance Ombudsman (Speedy, Zero-Cost Statutory Forum)
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mb-3">
                          Governed by the{' '}
                          <a
                            href="https://www.cioins.co.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-600 hover:text-purple-800 hover:underline font-semibold"
                          >
                            Insurance Ombudsman Rules, 2017
                          </a>{' '}
                          (amended in 2021 &amp; 2023), this quasi-judicial authority handles personal lines of insurance (health, motor, life, home, personal accident) as well as sole proprietors and micro-enterprises.
                        </p>
                        <ul className="text-xs sm:text-sm text-slate-700 list-disc list-inside space-y-1">
                          <li><strong>Pecuniary Jurisdiction:</strong> Claims up to ₹50 Lakhs (including interest and ex-gratia compensation).</li>
                          <li><strong>Pre-Requisite:</strong> Policyholder must have issued a prior written representation or legal notice to the insurer’s Grievance Redressal Officer (GRO) and received no resolution within 30 days.</li>
                          <li><strong>Binding Nature:</strong> The Ombudsman award is 100% legally binding on the insurance company (which must comply within 30 days), while remaining non-binding on the policyholder, preserving the right to appeal before consumer courts.</li>
                        </ul>
                      </div>

                      <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm">
                        <h3 className="font-black text-slate-900 text-base md:text-lg mb-2 flex items-center gap-2">
                          <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">
                            B
                          </span>
                          Consumer Disputes Redressal Commissions (DCDRC / SCDRC / NCDRC)
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mb-3">
                          Under the{' '}
                          <a
                            href="https://consumeraffairs.nic.in/acts-and-rules/consumer-protection"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-600 hover:text-purple-800 hover:underline font-semibold"
                          >
                            Consumer Protection Act, 2019
                          </a>
                          , an unjustified delay in settling an insurance claim constitutes an actionable &quot;deficiency in service&quot; under Section 2(11) and an &quot;unfair trade practice&quot; under Section 2(47).
                        </p>
                        <ul className="text-xs sm:text-sm text-slate-700 list-disc list-inside space-y-1">
                          <li><strong>District Consumer Disputes Redressal Commission (DCDRC):</strong> Claims and compensation up to ₹50 Lakhs.</li>
                          <li><strong>State Consumer Disputes Redressal Commission (SCDRC):</strong> Claims exceeding ₹50 Lakhs up to ₹2 Crore.</li>
                          <li><strong>National Consumer Disputes Redressal Commission (NCDRC):</strong> High-value claims exceeding ₹2 Crore.</li>
                          <li><strong>Statutory Remedies:</strong> Full insurance reimbursement, compound interest at 12–18% p.a., heavy damages for mental agony, and comprehensive litigation costs.</li>
                        </ul>
                      </div>

                      <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm">
                        <h3 className="font-black text-slate-900 text-base md:text-lg mb-2 flex items-center gap-2">
                          <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">
                            C
                          </span>
                          Commercial Courts &amp; High Court Civil Jurisdiction
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mb-3">
                          For commercial entities, corporate factories, marine freight cargo, and large industrial property policies, claims are pursued before designated Commercial Courts under the{' '}
                          <a
                            href="https://www.indiacode.nic.in/handle/123456789/2156"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-600 hover:text-purple-800 hover:underline font-semibold"
                          >
                            Commercial Courts Act, 2015
                          </a>
                          . The mandatory pre-institution mediation mechanism under Section 12A allows fast-track commercial debt recovery backed by formal legal demand notices.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 4: EVIDENTIARY CHECKLIST ──────────────────── */}
                <section id="evidentiary-checklist" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Evidentiary Checklist &amp; Claim Document Audit
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A legally robust demand notice must be backed by an unassailable evidentiary audit. Before issuing a statutory legal notice to an insurance company, ensure all documentary exhibits are methodically indexed:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1.5 flex items-center gap-2">
                          <span className="text-[#DC2626]">✓</span> Complete Policy Schedule &amp; Clauses
                        </h4>
                        <p className="text-xs text-slate-600">
                          Original policy document, premium receipts proving continuous active cover, and the specific terms, conditions, and endorsement schedules in effect at the time of loss.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1.5 flex items-center gap-2">
                          <span className="text-[#DC2626]">✓</span> Claim Intimation &amp; Reference Log
                        </h4>
                        <p className="text-xs text-slate-600">
                          Timestamped email intimation, official claim reference number, SMS receipts, and portal submission confirmations establishing the exact date of loss reporting.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1.5 flex items-center gap-2">
                          <span className="text-[#DC2626]">✓</span> Primary Proof of Loss &amp; Invoices
                        </h4>
                        <p className="text-xs text-slate-600">
                          Hospital discharge summaries, diagnostic reports, indoor case papers (for health), repair estimates, spot survey photos, FIR/GD entry (for motor/theft), and audited inventory valuations.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1.5 flex items-center gap-2">
                          <span className="text-[#DC2626]">✓</span> Full Correspondence &amp; Query Responses
                        </h4>
                        <p className="text-xs text-slate-600">
                          Every letter, email thread, TPA query form, and policyholder reply demonstrating that all requested documents were fully supplied, establishing the commencement of the statutory 30-day clock.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 5: ESSENTIAL DRAFTING CLAUSES ──────────────── */}
                <section id="essential-clauses" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Key Clauses in a Statutory Notice for Delayed Claim Settlement
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A poorly drafted demand notice can be dismissed by insurance company legal departments as routine correspondence. To command immediate compliance, an advocate-vetted notice must incorporate four indispensable structural clauses:
                    </p>

                    <div className="space-y-4">
                      <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-[#DC2626]">
                        <h3 className="font-black text-slate-900 text-sm mb-1">
                          Clause A: Factual Chronology of Policy Execution, Premium Payment &amp; Claim Intimation
                        </h3>
                        <p className="text-xs text-slate-650 leading-relaxed">
                          Recites the exact policy number, period of validity, proof of timely premium payments, detailed occurrence of the insured peril (e.g., emergency medical hospitalization, vehicular accident, commercial property fire), and precise timestamped intimation to the insurer/TPA.
                        </p>
                      </div>
                      <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-[#DC2626]">
                        <h3 className="font-black text-slate-900 text-sm mb-1">
                          Clause B: Detailed Documentary Compliance &amp; Breach of IRDAI 30-Day Mandate
                        </h3>
                        <p className="text-xs text-slate-650 leading-relaxed">
                          Explicitly details the date when the final document or survey inspection was completed, calculating the exact number of days the claim has remained unsettled beyond the statutory 30-day mandate under Regulation 15 of the IRDAI Policyholder Protection Regulations.
                        </p>
                      </div>
                      <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-[#DC2626]">
                        <h3 className="font-black text-slate-900 text-sm mb-1">
                          Clause C: Computation of Admitted Principal, Statutory Penal Interest &amp; Damages
                        </h3>
                        <p className="text-xs text-slate-650 leading-relaxed">
                          Quantifies the exact claim principal amount, accrues statutory penal interest at bank rate + 2% per annum, and asserts compensatory damages for gross mental distress, financial hardship, and harassment caused by the unlawful delay.
                        </p>
                      </div>
                      <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-[#DC2626]">
                        <h3 className="font-black text-slate-900 text-sm mb-1">
                          Clause D: Strict 15-Day Peremptory Compliance Window &amp; Litigation Warning
                        </h3>
                        <p className="text-xs text-slate-650 leading-relaxed">
                          Grants the insurance company a peremptory 15-day window from receipt to transfer the full outstanding claim amount along with accrued penal interest directly to the policyholder&apos;s bank account, failing which immediate proceedings will be initiated before the Insurance Ombudsman, Consumer Commission (NCDRC/SCDRC/DCDRC), and IRDAI Bima Bharosa portal at the insurer&apos;s sole risk and expense.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 6: STRATEGIC ROADMAP ──────────────────────── */}
                <section id="strategic-roadmap" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Strategic Roadmap: 15-Day Legal Demand to Full Recovery
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Recovering delayed insurance claims requires a disciplined, time-bound legal pipeline. Legal Recovery follows a verified 5-stage protocol that achieves high-impact resolution without dragging policyholders through unnecessary years of court litigation:
                    </p>

                    <div className="space-y-4">
                      {[
                        {
                          step: '01',
                          title: 'Digital Intake & Policyholder Case Audit',
                          desc: 'Submit your policy details, claim reference number, denial/query letters, medical or loss invoices, and email threads via Legal Recovery’s encrypted portal. Our team validates policy terms, exclusions, and statutory limitation periods.',
                        },
                        {
                          step: '02',
                          title: 'Advocate Drafting & Statutory Penal Interest Computation',
                          desc: 'A seasoned panel advocate drafts a bespoke, high-impact statutory demand notice incorporating IRDAI Regulation 15, the Consumer Protection Act 2019, Supreme Court precedents, and exact penal interest calculations.',
                        },
                        {
                          step: '03',
                          title: 'Digital Signing & Multi-Channel Formal Service',
                          desc: 'The notice is digitally executed under the Information Technology Act, 2000 and served via India Post Registered Post AD and Speed Post directly to the insurer’s MD, Grievance Redressal Officer (GRO), and TPA, accompanied by verified email dispatch.',
                        },
                        {
                          step: '04',
                          title: '15-Day Real-Time Tracking & Settlement Negotiation',
                          desc: 'Track postal delivery status and courier consignment numbers on your live dashboard. Over 70% of insurance claims are expedited, approved, or settled during this 15-day window as legal departments prioritize advocate notices over regular customer tickets.',
                        },
                        {
                          step: '05',
                          title: 'Ombudsman & Consumer Commission Escalation Package',
                          desc: 'If the insurer fails to disburse funds within the 15-day period, Legal Recovery prepares a complete, litigation-ready dossier for immediate submission before the Insurance Ombudsman or District/State Consumer Commission.',
                        },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="flex flex-col sm:flex-row items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm"
                        >
                          <div className="w-12 h-12 rounded-xl bg-[#DC2626]/10 text-[#DC2626] font-black text-lg flex items-center justify-center shrink-0 border border-[#DC2626]/20">
                            {item.step}
                          </div>
                          <div>
                            <h3 className="font-extrabold text-slate-900 text-sm md:text-base mb-1">
                              {item.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* ── SECTION 7: BESPOKE FAQS ───────────────────────────── */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    7. Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => {
                      const isOpen = expandedFaqs.includes(`faq-${index}`);
                      return (
                        <div
                          key={index}
                          className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all"
                        >
                          <button
                            onClick={() => toggleFaq(index)}
                            className="w-full text-left p-5 md:p-6 font-extrabold text-slate-900 flex justify-between items-center text-sm md:text-base hover:bg-slate-50 transition-colors"
                          >
                            <span className="pr-4">{faq.question}</span>
                            <span className="text-[#DC2626] text-xl font-bold shrink-0">
                              {isOpen ? '−' : '+'}
                            </span>
                          </button>
                          {isOpen && (
                            <div className="px-5 pb-5 md:px-6 md:pb-6 text-xs sm:text-sm text-slate-650 border-t border-slate-100 pt-4 leading-relaxed bg-slate-50/50">
                              <p>{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* ── SECTION 8: LEGAL CITATIONS ────────────────────────── */}
                <section id="legal-citations" className="scroll-mt-32 border-t border-slate-200 pt-8">
                  <h2 className="text-xl font-black text-slate-900 mb-4">
                    8. Statutory References &amp; Landmark Case Law
                  </h2>
                  <ol className="list-decimal list-inside space-y-2.5 text-xs text-slate-600">
                    <li>
                      <a
                        href="https://irdai.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        IRDAI (Protection of Policyholders’ Interests) Regulations, 2017 — Regulation 15 Claim Settlement Procedures &amp; Penal Interest, irdai.gov.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://consumeraffairs.nic.in/acts-and-rules/consumer-protection"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Consumer Protection Act, 2019 — Section 2(11) Deficiency in Service &amp; Sections 35, 47, 58 Commission Jurisdiction, consumeraffairs.nic.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.cioins.co.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Insurance Ombudsman Rules, 2017 (Amended 2021 &amp; 2023) — Council for Insurance Ombudsmen, cioins.co.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://main.sci.gov.in/judgment/judis/49047.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Supreme Court of India — Gurmel Singh v. Branch Manager, National Insurance Co. Ltd. (2022) 7 SCC 287 (Rejection on Technical Grounds Prohibited), main.sci.gov.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://main.sci.gov.in/judgment/judis/48914.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Supreme Court of India — Manmohan Nanda v. United India Assurance Co. Ltd. (2022) 4 SCC 582 (Uberrima Fides Duty on Insurers), main.sci.gov.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://main.sci.gov.in/judgment/judis/35099.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Supreme Court of India — New India Assurance Co. Ltd. v. Pradeep Kumar (2009) 7 SCC 787 (Surveyor Reports &amp; Arbitrary Delays), main.sci.gov.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.indiacode.nic.in/handle/123456789/2187"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Indian Contract Act, 1872 — Section 73 (Compensation for Loss or Damage Caused by Breach of Contract), indiacode.nic.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://ncdrc.nic.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        National Consumer Disputes Redressal Commission (NCDRC) — Case Law on Delayed Insurance Claim Settlement, ncdrc.nic.in
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
                        title: 'Legal Notice to Insurance Company for Claim Rejection',
                        href: '/legal-notice-to-insurance-company-claim-rejection-recovery',
                      },
                      {
                        title: 'How to File a Consumer Complaint in India',
                        href: '/how-to-file-consumer-complaint-india',
                      },
                      {
                        title: 'Legal Notice for Hospital Medical Negligence & Refund',
                        href: '/send-a-legal-notice/hospital-for-medical-negligence-refund',
                      },
                      {
                        title: 'Legal Notice for Company Refusing Refund',
                        href: '/send-a-legal-notice/company-refusing-refund',
                      },
                      {
                        title: 'Legal Notice for Unfair Trade Practice Complaint',
                        href: '/send-a-legal-notice/unfair-trade-practice-complaint',
                      },
                      {
                        title: 'Legal Notice for Recovery of Money in India',
                        href: '/legal-notice-for-recovery-of-money',
                      },
                      {
                        title: 'Legal Notice to Retailer for Wrong or Damaged Product',
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
                    platform, connecting policyholders, consumers, businesses, and professionals with
                    seasoned panel advocates for rapid, advocate-vetted statutory demand notices at
                    transparent flat fees. With ₹100 Crore+ recovered and 10,000+ cases resolved across
                    India, Legal Recovery delivers verified legal impact without the delays and
                    unpredictability of traditional law firms.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { label: 'Send a Legal Notice', href: '/send-a-legal-notice' },
                      { label: 'Recovery Services', href: '/recovery' },
                      { label: 'Insurance Claim Recovery', href: '/recovery/insurance-claim-amount' },
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
                  Insurance Company Delaying Your Settlement?
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  Send an advocate-vetted statutory notice today. Over 70% of insurers approve delayed claims
                  and release pending funds within 15 days upon receiving formal notice from Legal Recovery.
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
                      PD
                    </div>
                    <div>
                      <p className="font-extrabold text-slate-900 text-xs">Pranit Deshmukh</p>
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
                  { stat: '70%+', label: 'Insurers settle claims before consumer court filings' },
                  { stat: '₹100CR+', label: 'Total amount recovered for policyholders & clients' },
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
