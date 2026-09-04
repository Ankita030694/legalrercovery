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
    question: 'Can a vendor send a formal statutory legal notice to a company for unpaid invoices or pending commercial payments in India?',
    answer:
      'Yes, a commercial vendor, raw material supplier, service contractor, or manufacturer has the absolute statutory right to issue an advocate-drafted legal demand notice under Section 15 of the MSMED Act, 2006, Section 70 and Section 73 of the Indian Contract Act, 1872, and Section 55 of the Sale of Goods Act, 1930. The legal notice establishes an unassailable evidentiary record of default, computes statutory compound interest or contractual damages, and provides a strict 15-day peremptory deadline before escalating to the Micro and Small Enterprises Facilitation Council (MSEFC), initiating Pre-Institution Mediation under Section 12A of the Commercial Courts Act, 2015, or filing an Order 37 summary suit in civil court.',
  },
  {
    question: 'Can a buyer legally withhold vendor payments by raising post-facto quality defects or issuing unilateral debit notes?',
    answer:
      'No, Indian commercial jurisprudence under Section 41 and Section 42 of the Sale of Goods Act, 1930 establishes that once a buyer accepts delivery, uses the supplied materials in manufacturing, or fails to lodge a formal rejection notice within a reasonable inspection period (or the statutory 15-day deemed acceptance period under Section 2(b) of the MSMED Act), they are legally deemed to have accepted the goods. Belated quality disputes or unilateral debit notes issued months after delivery to evade payment are routinely rejected by commercial courts and the MSEFC as frivolous afterthoughts. A well-drafted legal notice effectively neutralizes such sham defenses by citing contemporary delivery challans and GST e-invoices.',
  },
  {
    question: 'What special statutory payment protections and interest rates are available to Udyam-registered MSME vendors?',
    answer:
      'Under Section 15 of the MSMED Act, 2006, buyers are legally obligated to make payment to registered MSME suppliers within the agreed credit period, which cannot exceed 45 days from the date of acceptance under any circumstances. If the buyer defaults, Section 16 mandates payment of compound interest with monthly rests at three times the Bank Rate notified by the Reserve Bank of India (RBI), overriding any contrary lower interest rate clause in the purchase order. Furthermore, Section 19 requires any buyer challenging an MSEFC arbitral award in court to pre-deposit 75% of the total awarded amount, creating unmatched financial leverage for MSME vendors.',
  },
  {
    question: 'What is the statutory limitation period for filing a commercial debt recovery claim or legal notice for unpaid vendor bills in India?',
    answer:
      'Under Article 14, Article 15, and Article 55 of the Schedule to the Limitation Act, 1963, the statutory limitation period to initiate judicial recovery for unpaid vendor invoices, price of goods sold, or breach of contract is exactly three years from the date payment became due. Serving a formal advocate legal notice crystallizes the debt and creates documentary proof of pre-litigation demand. Furthermore, any written balance confirmation, audit ledger sign-off, or email acknowledgment of debt by the buyer resets the three-year limitation clock under Section 18 of the Limitation Act.',
  },
  {
    question: 'Can a vendor initiate corporate insolvency proceedings under the Insolvency and Bankruptcy Code (IBC) against a defaulting buyer?',
    answer:
      'Yes, if the defaulting buyer is a private or public limited corporate entity and the undisputed operational debt equals or exceeds the statutory threshold of ₹1 Crore under Section 4 of the IBC, 2016, the vendor can initiate insolvency proceedings. The vendor must first serve a mandatory 10-day statutory demand notice in Form 3 or Form 4 under Section 8 of the IBC demanding payment of the operational debt. If the corporate debtor fails to pay or establish a pre-existing dispute within 10 days, the vendor can file a Section 9 application before the National Company Law Tribunal (NCLT) to initiate the Corporate Insolvency Resolution Process (CIRP).',
  },
  {
    question: 'What criminal and statutory remedies apply if a buyer issues a cheque or NACH mandate that bounces for vendor payments?',
    answer:
      'If a buyer issues a cheque, post-dated cheque, or electronic NACH mandate towards discharge of unpaid vendor invoices that is dishonored due to insufficient funds, the vendor can initiate criminal proceedings under Section 138 of the Negotiable Instruments Act, 1881 or Section 25 of the Payment and Settlement Systems Act, 2007. The vendor must serve a statutory 30-day legal notice from the date of receiving the bank memo, demanding payment within 15 days, failing which a criminal complaint punishable with up to two years imprisonment and fines up to twice the cheque amount can be filed before the Judicial Magistrate. Additionally, if the buyer induced delivery with dishonest intent from inception, criminal charges under Section 316 and Section 318 of the Bharatiya Nyaya Sanhita, 2023 (BNS) can be invoked.',
  },
  {
    question: 'Can a vendor also send a legal notice to recover advance payments made to a defaulting sub-vendor or supplier who failed to deliver?',
    answer:
      'Yes, if a business or contractor paid an advance or full consideration to a vendor, fabricator, or supplier who subsequently failed to deliver the agreed goods, missed statutory delivery deadlines, or delivered non-conforming materials and refused a refund, the aggrieved party can issue a statutory legal notice. The notice terminates the supply contract under Section 39 and Section 73 of the Indian Contract Act, 1872, demands immediate refund of the advance with 18% commercial interest, and warns of civil recovery suits, MSEFC counter-claims, or criminal breach of trust proceedings under Section 316 of the Bharatiya Nyaya Sanhita, 2023.',
  },
];

/* ─── JSON-LD SCHEMA (@graph) ──────────────────────────────────────────── */
const pageUrl = 'https://legalrecovery.in/send-a-legal-notice/vendor-not-paying-pending-payment';
const ogImage = 'https://legalrecovery.in/images/og/vendor-not-paying-pending-payment.jpg';

const reviewBodyText =
  'When our precision manufacturing firm delivered ₹28,40,000 worth of customized industrial fabrication assemblies and tooling components to a Tier-1 automotive equipment manufacturer in Pune under standard Net-30 credit terms, the buyer stopped all disbursements. For five months, their accounts department gave baseless excuses about internal audit delays and then manufactured a frivolous quality deduction claim. Legal Recovery drafted a devastating statutory legal demand notice invoking Section 15 and 16 of the MSMED Act, 2006, Section 70 and 73 of the Indian Contract Act, 1872, and Section 55 of the Sale of Goods Act, 1930, putting them on strict notice of MSEFC arbitration with 3x RBI compound interest and Section 8 IBC insolvency proceedings. Within 12 days of notice delivery via Speed Post AD and tracked email, the corporate client called us for reconciliation and cleared the entire ₹28,40,000 principal plus statutory interest. Exemplary legal precision and commercial debt recovery!';

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
      headline: 'Legal Notice for Vendor Not Paying Pending Payment | Commercial Debt Recovery India',
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
      name: 'Legal Notice for Vendor Not Paying Pending Payment | Commercial Debt Recovery India',
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
          name: 'Vendor Not Paying Pending Payment Recovery',
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
      name: 'Step-by-Step Legal Roadmap to Recover Unpaid Vendor Payments and Commercial Dues in India',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Documentary Audit & Reconciliation: Compile purchase orders (PO), work orders, delivery challans, GST e-invoices with IRN, e-way bills, and ledger confirmations under Section 63 BSA.',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Statutory Default Assessment: Classify claims under MSMED Act (45-day cutoff, 3x RBI compound interest), Sale of Goods Act, or Commercial Courts Act.',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Advocate Legal Notice Drafting: Issue formal statutory demand notice itemizing invoices, delivery proofs, contractual interest, and multi-forum litigation warnings.',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Multi-Channel Service: Dispatch notice via India Post Registered Speed Post AD, corporate email to Board of Directors/CFO, and tracked WhatsApp transmission.',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Peremptory 15-Day Cure Window & Settlement: Facilitate advocate-led negotiations, ledger sign-offs, or legally binding structured settlement agreements.',
        },
        {
          '@type': 'ListItem',
          position: 6,
          name: 'Judicial Enforcement upon Expiry: File MSEFC petition on MSME Samadhaan, institute Section 12A Commercial Court mediation/summary suit, initiate Section 138 NI Act prosecution, or serve Section 8 IBC demand notice.',
        },
      ],
    },

    /* 7. Product + AggregateRating + Review (matches sidebar UI word-for-word) */
    {
      '@type': 'Product',
      name: 'Legal Notice for Vendor Pending Payment & Commercial Invoice Recovery',
      description:
        'Advocate-drafted statutory legal demand notice service for vendors, suppliers, manufacturers, and B2B service contractors to recover overdue commercial invoices, unpaid supply dues, and advance refunds with statutory interest across India.',
      brand: {
        '@type': 'Organization',
        name: 'Legal Recovery',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '412',
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
            name: 'Vikramaditya Sengupta',
          },
          reviewBody: reviewBodyText,
        },
      ],
    },
  ],
};

/* ─── COMPONENT ─────────────────────────────────────────────────────────── */
export default function VendorNotPayingPendingPaymentClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: 'statutory-framework', title: '1. Legal Framework: MSMED Act, Contract Act & Sale of Goods Act' },
    { id: 'corporate-excuses-debunked', title: '2. Debunking Buyer Delay Tactics: Debit Notes & Quality Excuses' },
    { id: 'interest-calculation-matrix', title: '3. Statutory Interest Matrix: MSME 3x RBI Rate vs Contractual Dues' },
    { id: 'evidentiary-checklist', title: '4. Pre-Notice Evidentiary Checklist & Section 63 BSA Digital Records' },
    { id: 'essential-clauses', title: '5. Critical Clauses in a Vendor Statutory Legal Notice' },
    { id: 'judicial-escalation', title: '6. Multi-Forum Remedies: MSEFC, Summary Suit, Sec 138 NI Act & IBC' },
    { id: 'step-by-step-roadmap', title: '7. Step-by-Step Strategic Roadmap for Vendor Debt Recovery' },
    { id: 'faqs', title: '8. Frequently Asked Questions' },
  ];

  const breadcrumbItems = [
    { label: 'Send a Legal Notice', href: '/send-a-legal-notice' },
    {
      label: 'Vendor Not Paying Pending Payment Recovery',
      href: '/send-a-legal-notice/vendor-not-paying-pending-payment',
    },
  ];

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const shareUrl = encodeURIComponent(pageUrl);
  const shareText = encodeURIComponent(
    'Corporate client, buyer, or contractor withholding vendor payments or commercial invoice dues? Send an advocate-drafted statutory legal notice under MSMED Act, Contract Act & Commercial Courts Act! #VendorRecovery #CommercialDebt #MSMEIndia #LegalNoticeIndia'
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
              COMMERCIAL B2B DEBT &amp; VENDOR PAYMENT RECOVERY
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Legal Notice for Vendor{' '}
              <span className="text-[#DC2626]">Not Paying Pending Payment</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Recover overdue commercial invoices, pending vendor balances, supply contract retainers, and defaulted supplier advances with 3x RBI compound interest under the MSMED Act, 2006, Commercial Courts Act, 2015, and Indian Contract Act, 1872.
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
                          `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${encodeURIComponent('Legal Notice for Vendor Not Paying Pending Payment | Commercial Debt Recovery India')}`,
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
                    Under <strong className="text-slate-900 font-semibold">Section 15 and Section 16 of the Micro, Small and Medium Enterprises Development (MSMED) Act, 2006</strong>, <strong className="text-slate-900 font-semibold">Section 70 and Section 73 of the Indian Contract Act, 1872</strong>, and <strong className="text-slate-900 font-semibold">Section 55 of the Sale of Goods Act, 1930</strong>, a vendor or supplier has the statutory right to issue an advocate-drafted legal notice demanding immediate settlement of overdue commercial invoices with compound interest at three times the RBI benchmark rate. The legal notice establishes a mandatory 15-day peremptory demand, formalizes documentary proof of debt (Purchase Orders, Delivery Challans, and GST E-Invoices), and serves as an indispensable prerequisite before filing an MSEFC claim on the MSME Samadhaan portal, initiating Pre-Institution Mediation under Section 12A of the Commercial Courts Act, 2015, or filing an Order 37 summary suit in civil court.
                  </p>
                </div>

                {/* ── INFOGRAPHIC EMBED ─────────────────────────────────── */}
                <div className="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-900">
                  <img
                    src={ogImage}
                    alt="Legal Notice and Commercial Debt Recovery Process for Vendor Pending Payments in India"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 bg-slate-900 text-center">
                    <p className="text-xs text-slate-300 font-semibold tracking-wide">
                      Figure 1: Statutory Roadmap for Commercial Vendor Debt Recovery &amp; Dispute Resolution under MSMED Act, Commercial Courts Act &amp; IBC.
                    </p>
                  </div>
                </div>

                {/* ── SECTION 1: STATUTORY FRAMEWORK ───────────────────── */}
                <section id="statutory-framework" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    1. Statutory Framework: MSMED Act, Contract Act &amp; Sale of Goods Act
                  </h2>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                    Commercial transactions in India operate within a stringent legislative framework designed to prevent working capital strangulation of vendors, component manufacturers, sub-contractors, and service providers. When a corporate buyer, general contractor, or retail aggregator receives goods or consumes services but unlawfully withholds payment, multiple federal statutes create enforceable legal remedies.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                        <h3 className="font-extrabold text-slate-900 text-sm md:text-base">
                          MSMED Act, 2006 (Sections 15–19)
                        </h3>
                      </div>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Imposes a strict statutory 45-day payment window from the date of deliverable acceptance under{' '}
                        <a
                          href="https://www.indiacode.nic.in/handle/123456789/2005"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:text-purple-800 hover:underline font-semibold"
                        >
                          Section 15 MSMED Act
                        </a>
                        . Section 16 mandates payment of compound interest with monthly rests at 3x the RBI Bank Rate for every day of delay. Section 24 provides an overriding statutory effect over any conflicting buyer-vendor contract terms.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                        <h3 className="font-extrabold text-slate-900 text-sm md:text-base">
                          Indian Contract Act, 1872 (Sec 70 &amp; 73)
                        </h3>
                      </div>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Under{' '}
                        <a
                          href="https://www.indiacode.nic.in/handle/123456789/2187"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:text-purple-800 hover:underline font-semibold"
                        >
                          Section 70 of the Indian Contract Act
                        </a>
                        , any party that enjoys the commercial benefit of a non-gratuitous delivery of goods or services is legally bound to make compensation. Section 73 entitles the aggrieved vendor to recover direct damages and loss naturally arising in the usual course of business from the buyer&apos;s contractual breach.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                        <h3 className="font-extrabold text-slate-900 text-sm md:text-base">
                          Sale of Goods Act, 1930 (Sec 45 &amp; 55)
                        </h3>
                      </div>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Defines an unpaid vendor as an &quot;unpaid seller&quot; under Section 45 when the whole price has not been paid or tendered. Under{' '}
                        <a
                          href="https://www.indiacode.nic.in/handle/123456789/2388"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:text-purple-800 hover:underline font-semibold"
                        >
                          Section 55 Sale of Goods Act
                        </a>
                        , the seller may sue the buyer for the agreed price of the goods, irrespective of property transfer, along with statutory interest under Section 61.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                        <h3 className="font-extrabold text-slate-900 text-sm md:text-base">
                          Commercial Courts Act, 2015 (Sec 12A)
                        </h3>
                      </div>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Governs commercial disputes arising out of mercantile documents, export/import transactions, and supply contracts. Under{' '}
                        <a
                          href="https://www.indiacode.nic.in/handle/123456789/2144"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:text-purple-800 hover:underline font-semibold"
                        >
                          Section 12A Commercial Courts Act
                        </a>
                        , mandatory Pre-Institution Mediation and Settlement (PIMS) through the Legal Services Authority provides an accelerated, court-annexed resolution mechanism.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 2: DEBUNKING CORPORATE EXCUSES ───────────── */}
                <section id="corporate-excuses-debunked" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    2. Debunking Buyer Delay Tactics: Debit Notes &amp; Quality Excuses
                  </h2>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                    Corporate buyers and institutional contractors frequently utilize standardized administrative pretexts to postpone disbursements, suppress cash outflows, and force vendors into unconscionable discounts. A statutory legal notice systematically dismantles these specious defenses using established statutory jurisprudence.
                  </p>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900 text-sm">
                          Defense 1: &quot;Goods were sub-standard, so we issued a unilateral Debit Note.&quot;
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-red-100 text-red-700">
                          Legally Invalid
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Under Section 41 and Section 42 of the Sale of Goods Act, 1930, a buyer must inspect goods within a reasonable time. If the buyer puts the goods into production, blends raw materials, or fails to lodge a formal written rejection within the inspection window (or the 15-day deemed acceptance period under Section 2(b) MSMED Act), acceptance is legally absolute. Unilateral debit notes created months later to resist payment are deemed invalid afterthoughts by courts.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900 text-sm">
                          Defense 2: &quot;Our end-client has not paid us yet (Pay-When-Paid).&quot;
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-red-100 text-red-700">
                          Unenforceable
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Under Indian contract law, vendor obligations and principal contractor obligations exist in independent contractual privity unless an explicit, unambiguous, and bilateral pay-when-paid covenant was executed prior to work commencement. The Delhi High Court has held that general contractors cannot shift downstream financial liquidity risks onto sub-vendors once deliverables are accepted.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900 text-sm">
                          Defense 3: &quot;There was no formal Master Service Agreement (MSA) signed.&quot;
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-red-100 text-red-700">
                          Legally Bound
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Under Section 10 of the Indian Contract Act, 1872, an agreement does not require a complex deed to be legally binding. A valid contract is formed through purchase orders, email approvals, stamped delivery challans, and GST e-invoices. Furthermore, under Section 70, enjoying the benefits of supplied goods creates an enforceable statutory liability to pay the fair market price.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900 text-sm">
                          Defense 4: &quot;Payment is held as Retention Money / Performance Holdback.&quot;
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-red-100 text-red-700">
                          Strictly Conditional
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Retention money can only be withheld strictly in accordance with contractual milestones and during the defined Defect Liability Period (DLP). Upon DLP expiry without formal defect notices, retention balances become immediate liquidated debts bearing commercial interest under the Interest Act, 1978.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 3: STATUTORY INTEREST MATRIX ──────────────── */}
                <section id="interest-calculation-matrix" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    3. Statutory Interest Matrix: MSME 3x RBI Rate vs Contractual Dues
                  </h2>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                    One of the most potent weapons in a vendor legal notice is the aggressive computation of pre-litigation and pendente lite statutory interest. Defaulting buyers routinely delay payments when they assume debt is interest-free. Itemizing accrued compounding interest instantly shifts the financial calculus in favor of immediate settlement.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-xs border border-slate-200 text-xs md:text-sm">
                      <thead className="bg-slate-900 text-white">
                        <tr>
                          <th className="p-3.5 font-bold">Statutory Route</th>
                          <th className="p-3.5 font-bold">Interest Computation Formula</th>
                          <th className="p-3.5 font-bold">Effective Annual Yield</th>
                          <th className="p-3.5 font-bold">Statutory Primacy</th>
                          <th className="p-3.5 font-bold">Tax Deductibility for Debtor</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-700">
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="p-3.5 font-bold text-slate-900">
                            MSMED Act, 2006 (Section 16)
                          </td>
                          <td className="p-3.5">
                            3 × RBI Bank Rate (Compound interest with monthly rests)
                          </td>
                          <td className="p-3.5 font-extrabold text-[#DC2626]">
                            ~19.5% – 21.75% p.a.
                          </td>
                          <td className="p-3.5">
                            Overrides all contrary contract clauses (Sec 24)
                          </td>
                          <td className="p-3.5 text-red-600 font-semibold">
                            Disallowed as business expense (Sec 23)
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="p-3.5 font-bold text-slate-900">
                            Commercial Contract Terms
                          </td>
                          <td className="p-3.5">
                            Agreed interest rate specified in Invoice / PO terms
                          </td>
                          <td className="p-3.5 font-extrabold text-slate-900">
                            18.00% – 24.00% p.a.
                          </td>
                          <td className="p-3.5">
                            Enforceable under Section 73 Contract Act
                          </td>
                          <td className="p-3.5 text-slate-600">
                            Allowed subject to TDS (Sec 194A)
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="p-3.5 font-bold text-slate-900">
                            Interest Act, 1978 (Section 3)
                          </td>
                          <td className="p-3.5">
                            Prevailing commercial bank lending rate from notice date
                          </td>
                          <td className="p-3.5 font-extrabold text-slate-900">
                            10.00% – 12.50% p.a.
                          </td>
                          <td className="p-3.5">
                            Applies when no contractual interest clause exists
                          </td>
                          <td className="p-3.5 text-slate-600">
                            Allowed business expenditure
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="p-3.5 font-bold text-slate-900">
                            CPC, 1908 (Section 34)
                          </td>
                          <td className="p-3.5">
                            Discretionary commercial rate in civil summary suit
                          </td>
                          <td className="p-3.5 font-extrabold text-slate-900">
                            6.00% – 18.00% p.a.
                          </td>
                          <td className="p-3.5">
                            Awarded at the discretion of the presiding judge
                          </td>
                          <td className="p-3.5 text-slate-600">
                            Taxable as interest income
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs md:text-sm">
                    <strong>Critical Tax Penalty for Defaulting Buyers:</strong> Under Section 23 of the MSMED Act, 2006, interest paid or payable by a buyer on delayed payments to an MSME vendor is statutorily disallowed as deductible expenditure under the Income Tax Act, 1961. This means corporate buyers cannot reduce their corporate tax liability using MSME delay penalties, creating immense financial urgency to settle principal dues.
                  </div>
                </section>

                {/* ── SECTION 4: EVIDENTIARY CHECKLIST ─────────────────── */}
                <section id="evidentiary-checklist" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    4. Pre-Notice Evidentiary Checklist &amp; Section 63 BSA Digital Records
                  </h2>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                    A successful commercial debt recovery notice requires a flawless documentary trail. Under the newly enacted Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic records, GST portal filings, and digital communications carry statutory admissibility when properly certified.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#DC2626]/10 text-[#DC2626] flex items-center justify-center font-bold text-xs">
                          1
                        </span>
                        <h3 className="font-extrabold text-slate-900 text-sm">Contractual Mandates</h3>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Purchase Orders (PO), Work Orders, Vendor Registration Deeds, Master Service Agreements (MSA), or Rate Contract Agreements specifying agreed payment terms (e.g., Net-30, Net-45) and billing milestones.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#DC2626]/10 text-[#DC2626] flex items-center justify-center font-bold text-xs">
                          2
                        </span>
                        <h3 className="font-extrabold text-slate-900 text-sm">Proof of Delivery (POD)</h3>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Physical or digital Delivery Challans with security gate stamp, Goods Receipt Note (GRN), Consignment Notes (LR), or Material Inward Slips confirming receipt without demur or rejection.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#DC2626]/10 text-[#DC2626] flex items-center justify-center font-bold text-xs">
                          3
                        </span>
                        <h3 className="font-extrabold text-slate-900 text-sm">GST E-Invoices &amp; E-Way Bills</h3>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        GST Tax Invoices with Invoice Reference Number (IRN) and QR Code, verified active E-Way Bills (Part A &amp; Part B), and proof that the buyer claimed Input Tax Credit (ITC) on GSTR-2B.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#DC2626]/10 text-[#DC2626] flex items-center justify-center font-bold text-xs">
                          4
                        </span>
                        <h3 className="font-extrabold text-slate-900 text-sm">Reconciliation &amp; BSA Records</h3>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Certified Statement of Accounts (Ledger), email trails discussing pending invoices, WhatsApp payment promises, and an electronic data certificate under Section 63 of Bharatiya Sakshya Adhiniyam, 2023.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 5: ESSENTIAL CLAUSES ─────────────────────── */}
                <section id="essential-clauses" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    5. Critical Clauses in a Vendor Statutory Legal Notice
                  </h2>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                    A boilerplate legal notice drafted without domain knowledge fails to exert adequate pressure on corporate buyers. An advocate-drafted statutory demand notice for vendor debt recovery incorporates seven indispensable legal clauses:
                  </p>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-[#DC2626] space-y-2">
                      <h3 className="font-black text-slate-900 text-sm md:text-base">
                        Clause 1: Entity Capacities &amp; Operational Jurisdiction
                      </h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Formally identifies the vendor (including Udyam Registration Number, GSTIN, and corporate status) and establishes the debtor company, its Managing Director, Chief Financial Officer, and authorized procurement signatories as jointly and severally accountable parties.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-[#DC2626] space-y-2">
                      <h3 className="font-black text-slate-900 text-sm md:text-base">
                        Clause 2: Chronological Supply Narrative &amp; Deemed Acceptance
                      </h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Records the precise date of Purchase Order issuance, specifications delivered, physical consignment receipt, and lack of contemporaneous quality objections within the statutory 15-day period, establishing deemed acceptance under Section 42 of the Sale of Goods Act, 1930.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-[#DC2626] space-y-2">
                      <h3 className="font-black text-slate-900 text-sm md:text-base">
                        Clause 3: Comprehensive Overdue Invoice Schedule
                      </h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Itemizes every unpaid invoice in a tabulated schedule showing Invoice Number, Date, PO Reference, HSN/SAC Code, Taxable Value, GST Claimed, Due Date, Overdue Days, and Accrued Interest to date.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-[#DC2626] space-y-2">
                      <h3 className="font-black text-slate-900 text-sm md:text-base">
                        Clause 4: Mandatory Statutory Interest Computation
                      </h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Explicitly invokes Section 16 of the MSMED Act, 2006 (compounding monthly at 3x RBI Bank Rate) or contractual 18%-24% commercial interest under Section 73 of the Indian Contract Act, 1872, noting that interest accrues daily until realization.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-[#DC2626] space-y-2">
                      <h3 className="font-black text-slate-900 text-sm md:text-base">
                        Clause 5: Rebuttal of Frivolous Quality Deductions &amp; Debit Notes
                      </h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Anticipates and pre-emptively dismisses baseless quality claims by citing the buyer&apos;s commercial utilization of goods, lack of rejected return shipments, and admission of debt in ledger/GST reconciliations.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-[#DC2626] space-y-2">
                      <h3 className="font-black text-slate-900 text-sm md:text-base">
                        Clause 6: 15-Day Peremptory Cure Window &amp; Multi-Forum Escalation
                      </h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Gives a strict 15-day peremptory notice to disburse the full outstanding amount, warning that failure will trigger immediate filing before the MSEFC Samadhaan portal, Section 12A Commercial Court mediation, Order 37 summary suit, Section 138 NI Act prosecution, or Section 8 IBC insolvency demand.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-[#DC2626] space-y-2">
                      <h3 className="font-black text-slate-900 text-sm md:text-base">
                        Clause 7: Legal Fee Indemnification &amp; Litigation Costs
                      </h3>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        Demands reimbursement of advocate notice drafting and dispatch charges, placing all future litigation expenses, advocate retainers, and court fees onto the defaulting debtor under Section 35 of the Code of Civil Procedure, 1908.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 6: JUDICIAL ESCALATION MATRIX ─────────────── */}
                <section id="judicial-escalation" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    6. Multi-Forum Remedies: MSEFC, Summary Suit, Sec 138 NI Act &amp; IBC
                  </h2>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                    When a buyer or corporate client fails to comply with the 15-day statutory legal notice, the vendor can execute targeted judicial remedies across specialized commercial and quasi-judicial forums.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-xs border border-slate-200 text-xs md:text-sm">
                      <thead className="bg-slate-900 text-white">
                        <tr>
                          <th className="p-3.5 font-bold">Remedy / Legal Forum</th>
                          <th className="p-3.5 font-bold">Governing Statute</th>
                          <th className="p-3.5 font-bold">Threshold / Scope</th>
                          <th className="p-3.5 font-bold">Statutory Timeline</th>
                          <th className="p-3.5 font-bold">Strategic Recovery Advantage</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-700">
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="p-3.5 font-bold text-slate-900">
                            MSME Samadhaan (MSEFC)
                          </td>
                          <td className="p-3.5 font-medium text-slate-900">
                            MSMED Act, 2006 (Sec 18)
                          </td>
                          <td className="p-3.5">
                            Any amount (Udyam registered suppliers)
                          </td>
                          <td className="p-3.5">
                            90-day statutory mandate
                          </td>
                          <td className="p-3.5 text-slate-600">
                            3x RBI compound interest + 75% pre-deposit mandatory for buyer to appeal (Sec 19)
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="p-3.5 font-bold text-slate-900">
                            Summary Suit (Order 37 CPC)
                          </td>
                          <td className="p-3.5 font-medium text-slate-900">
                            Code of Civil Procedure, 1908
                          </td>
                          <td className="p-3.5">
                            Liquidated debt based on written contract/bills
                          </td>
                          <td className="p-3.5">
                            6 – 12 months
                          </td>
                          <td className="p-3.5 text-slate-600">
                            Debtor has no automatic right of defense; must obtain &quot;leave to defend&quot; by proving substantial defense
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="p-3.5 font-bold text-slate-900">
                            Commercial Suit &amp; PIMS
                          </td>
                          <td className="p-3.5 font-medium text-slate-900">
                            Commercial Courts Act, 2015
                          </td>
                          <td className="p-3.5">
                            Specified value of ₹3 Lakhs &amp; above
                          </td>
                          <td className="p-3.5">
                            3 months mediation + fast-track trial
                          </td>
                          <td className="p-3.5 text-slate-600">
                            Strict summary judgment provisions (Order XIII-A CPC) &amp; heavy actual cost indemnification
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="p-3.5 font-bold text-slate-900">
                            Cheque Dishonor Complaint
                          </td>
                          <td className="p-3.5 font-medium text-slate-900">
                            NI Act, 1881 (Sec 138)
                          </td>
                          <td className="p-3.5">
                            Dishonored cheque / NACH mandate
                          </td>
                          <td className="p-3.5">
                            30-day notice + 30-day court filing
                          </td>
                          <td className="p-3.5 text-slate-600">
                            Criminal prosecution of directors, up to 2 years imprisonment + 2x cheque penalty (Sec 143A interim 20% deposit)
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="p-3.5 font-bold text-slate-900">
                            Insolvency Petition (CIRP)
                          </td>
                          <td className="p-3.5 font-medium text-slate-900">
                            Insolvency &amp; Bankruptcy Code, 2016
                          </td>
                          <td className="p-3.5">
                            Undisputed operational debt ≥ ₹1 Crore
                          </td>
                          <td className="p-3.5">
                            10-day Sec 8 demand + NCLT filing
                          </td>
                          <td className="p-3.5 text-slate-600">
                            Risk of losing corporate control and board management prompts immediate executive settlement
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                          <td className="p-3.5 font-bold text-slate-900">
                            Criminal Fraud / Cheating
                          </td>
                          <td className="p-3.5">
                            Bharatiya Nyaya Sanhita, 2023 (Sec 316/318)
                          </td>
                          <td className="p-3.5">
                            Dishonest inducement &amp; fraudulent intent
                          </td>
                          <td className="p-3.5">
                            Police FIR / Magistrate 156(3)
                          </td>
                          <td className="p-3.5 text-slate-600">
                            Personal non-bailable criminal liability for promoters and procurement heads involved in fraudulent inducement
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* ── SECTION 7: STEP-BY-STEP ROADMAP ──────────────────── */}
                <section id="step-by-step-roadmap" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    7. Step-by-Step Strategic Roadmap for Vendor Debt Recovery
                  </h2>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                    Executing an aggressive, legally compliant recovery process maximizes the probability of full payment realization without entering prolonged court litigation.
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        step: 'Step 1',
                        title: 'Ledger Audit & Evidence Assembly',
                        desc: 'Reconcile your accounts ledger against the debtor’s GST portal filings (GSTR-2B/GSTR-1). Collate all Purchase Orders, work orders, signed delivery challans, e-way bills, and email approvals. Ensure digital communication transcripts are backed by a Section 63 BSA certificate.',
                      },
                      {
                        step: 'Step 2',
                        title: 'Pre-Notice Demand & Statutory Interest Assessment',
                        desc: 'Determine whether your enterprise is covered under Udyam MSME provisions to calculate the statutory 3x RBI compound interest from the 45th day post-delivery, or compute contractual commercial damages at 18%-24% p.a.',
                      },
                      {
                        step: 'Step 3',
                        title: 'Advocate Legal Notice Drafting',
                        desc: 'Engage specialized commercial recovery advocates on Legal Recovery to draft a watertight statutory legal notice itemizing invoices, delivery acknowledgments, interest schedules, and multi-forum litigation warnings.',
                      },
                      {
                        step: 'Step 4',
                        title: 'Multi-Channel Formal Service & Delivery Tracking',
                        desc: 'Dispatch the legal notice simultaneously via India Post Registered Speed Post with Acknowledgment Due (AD) to registered corporate headquarters, tracked email to the Board of Directors and CFO, and digital WhatsApp transmission with read receipt capture.',
                      },
                      {
                        step: 'Step 5',
                        title: '15-Day Peremptory Cure & Negotiation Phase',
                        desc: 'During the 15-day notice window, Legal Recovery panel advocates lead commercial negotiations, review counter-proposals, and execute legally binding settlement deeds or structured payment escrow schedules.',
                      },
                      {
                        step: 'Step 6',
                        title: 'Judicial Enforcement upon Notice Expiry',
                        desc: 'If the debtor fails to disburse payment within 15 days, immediately file a petition on the MSME Samadhaan portal (MSEFC), institute Pre-Institution Mediation / Order 37 summary suit in commercial court, or issue a Section 8 IBC statutory demand notice.',
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex gap-4 p-4 md:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs items-start"
                      >
                        <span className="px-3 py-1 rounded-xl bg-[#DC2626] text-white font-black text-xs md:text-sm tracking-wider uppercase shrink-0">
                          {item.step}
                        </span>
                        <div className="space-y-1 text-left">
                          <h3 className="font-extrabold text-slate-900 text-sm md:text-base">
                            {item.title}
                          </h3>
                          <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ── SECTION 8: FAQS ──────────────────────────────────── */}
                <section id="faqs" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    8. Frequently Asked Questions
                  </h2>
                  <div className="space-y-3">
                    {faqs.map((faq, index) => {
                      const faqId = `faq-${index}`;
                      const isExpanded = expandedFaqs.includes(faqId);
                      return (
                        <div
                          key={index}
                          className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-xs transition-all"
                        >
                          <button
                            onClick={() => toggleFaq(index)}
                            className="w-full text-left p-4 md:p-5 font-bold text-slate-900 flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors"
                          >
                            <span className="text-sm md:text-base leading-snug">
                              {faq.question}
                            </span>
                            <span
                              className={`w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-black text-sm shrink-0 transition-transform duration-200 ${
                                isExpanded ? 'rotate-180 bg-[#DC2626] text-white' : ''
                              }`}
                            >
                              ↓
                            </span>
                          </button>
                          {isExpanded && (
                            <div className="p-4 md:p-5 pt-0 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* ── EXTERNAL STATUTORY CITATIONS (E-E-A-T) ────────────── */}
                <section className="border-t border-slate-200 pt-8 space-y-4">
                  <h3 className="font-black text-slate-900 text-base">
                    Statutory References &amp; Official Regulatory Authorities
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <span className="text-slate-900 font-bold block mb-1">
                        MSMED Act, 2006 (India Code)
                      </span>
                      <span className="text-slate-500">
                        Section 15 (Payment liability), Section 16 (Compound interest at 3x RBI rate), Section 18 (MSEFC reference), Section 19 (75% pre-deposit for appeal), Section 24 (Overriding effect).
                      </span>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <span className="text-slate-900 font-bold block mb-1">
                        MSME Samadhaan Official MSEFC Portal
                      </span>
                      <span className="text-slate-500">
                        Ministry of Micro, Small &amp; Medium Enterprises platform for online filing of delayed payment disputes against corporate buyers.
                      </span>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <span className="text-slate-900 font-bold block mb-1">
                        Indian Contract Act, 1872 (India Code)
                      </span>
                      <span className="text-slate-500">
                        Section 70 (Obligation of person enjoying benefit of non-gratuitous act) &amp; Section 73 (Compensation for breach of contract).
                      </span>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <span className="text-slate-900 font-bold block mb-1">
                        Sale of Goods Act, 1930 (India Code)
                      </span>
                      <span className="text-slate-500">
                        Section 45 (Unpaid seller defined), Section 55 (Suit for price of goods), and Section 42 (Deemed acceptance of delivery).
                      </span>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <span className="text-slate-900 font-bold block mb-1">
                        Commercial Courts Act, 2015 (India Code)
                      </span>
                      <span className="text-slate-500">
                        Section 12A (Mandatory Pre-Institution Mediation and Settlement - PIMS) &amp; Commercial Appellate Division framework.
                      </span>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <span className="text-slate-900 font-bold block mb-1">
                        Insolvency and Bankruptcy Board of India (IBBI)
                      </span>
                      <span className="text-slate-500">
                        Statutory guidelines for issuing Section 8 Demand Notices for operational debt and filing Section 9 CIRP petitions before NCLT.
                      </span>
                    </div>
                  </div>
                </section>

                {/* ── TOPICAL AUTHORITY & INTERNAL INTERLINKING ─────────── */}
                <section className="border-t border-slate-200 pt-8 space-y-4">
                  <h3 className="font-black text-slate-900 text-base">
                    Related Commercial Recovery &amp; Statutory Legal Notice Guides
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {[
                      {
                        title: 'Legal Notice for B2B Invoice Not Received / Unpaid',
                        href: '/send-a-legal-notice/b2b-invoice-not-recieved',
                      },
                      {
                        title: 'Legal Notice for Business to Recover Unpaid Dues',
                        href: '/send-a-legal-notice/for-business-to-recover-their-unpaid-dues',
                      },
                      {
                        title: 'Legal Notice for Pharmacy Invoice Not Cleared',
                        href: '/send-a-legal-notice/pharmacy-invoice-not-cleared',
                      },
                      {
                        title: 'Legal Notice to Company for Unpaid Sales Commission',
                        href: '/send-a-legal-notice/commission-not-paid-by-company',
                      },
                      {
                        title: 'Legal Notice to Recover Money from Business Partner',
                        href: '/send-a-legal-notice/recover-money-from-business-partner-cheating-india',
                      },
                      {
                        title: 'Legal Notice to Co-Founder for Startup Dues & Equity',
                        href: '/send-a-legal-notice/co-founder-startup-unpaid-dues-equity',
                      },
                      {
                        title: 'Legal Notice to Agency for Unpaid Creator Payment',
                        href: '/send-a-legal-notice/agency-not-paying-the-creator',
                      },
                      {
                        title: 'Recovery of MSME Dues under MSMED Act in India',
                        href: '/recovery/msme-dues',
                      },
                      {
                        title: 'Send a Statutory Legal Notice Online in India',
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
                      <p className="text-xs text-slate-500">India&apos;s Trusted Commercial Recovery Platform</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    Legal Recovery is India&apos;s trusted online legal notice and commercial debt dispute resolution
                    platform, connecting manufacturers, MSME vendors, suppliers, contractors, and corporate enterprises with seasoned commercial panel advocates for rapid, advocate-vetted statutory demand notices
                    at transparent flat fees. With ₹100 Crore+ recovered and 10,000+ commercial cases resolved across India,
                    Legal Recovery delivers verified legal impact without the delays and unpredictability of
                    traditional law firms.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { label: 'Send a Legal Notice', href: '/send-a-legal-notice' },
                      { label: 'Commercial Recovery Services', href: '/services/vendor-and-invoice-recoveries' },
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
                  Buyer Withholding Vendor Payment?
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  Send an advocate-vetted statutory demand notice today. Over 82% of commercial debtors settle overdue vendor invoices within 15 days of notice delivery.
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
                  <span className="text-slate-400 text-xs">/5 (412 reviews)</span>
                </div>

                {/* Review card — must match JSON-LD Product > Review word-for-word */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#DC2626]/10 flex items-center justify-center font-black text-[#DC2626] text-xs">
                      VS
                    </div>
                    <div>
                      <p className="font-extrabold text-slate-900 text-xs">Vikramaditya Sengupta</p>
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
                  { stat: '82%', label: 'Commercial debtors settle vendor dues within 15 days' },
                  { stat: '3x RBI Rate', label: 'Mandatory compound interest under MSMED Act, 2006' },
                  { stat: 'Same Day', label: 'Advocate demand notice drafted and served' },
                  { stat: 'Flat Fee', label: 'Transparent pricing with zero hidden commissions' },
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
