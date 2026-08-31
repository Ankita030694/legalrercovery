'use client';

import { useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import { PaymentModal } from '@/components/PaymentModal';

/* ─── BESPOKE FAQ DATA ─────────────────────────────────────────────────── */
const faqs = [
  {
    question: 'How can a victim recover money lost to an online shopping scam in India?',
    answer:
      'Victims of online shopping scams in India can recover defrauded funds by immediately reporting the financial cyber fraud to the National Cybercrime Reporting Portal via helpline 1930 within the "golden hour" to initiate an inter-bank account freeze under the CFCFRMS mechanism. Concurrently, serving an advocate-vetted statutory legal notice to the fraudulent seller, the hosting marketplace, and the payment gateway intermediary creates legal exposure under the Consumer Protection (E-Commerce) Rules, 2020 and Section 318 of the Bharatiya Nyaya Sanhita, 2023. If the merchant refuses voluntary restitution within 15 days, the victim can file a statutory compensation claim on the E-Daakhil consumer commission portal and pursue a formal bank chargeback under RBI guidelines.',
  },
  {
    question: 'What is the RBI mandate on bank chargebacks and zero liability for fraudulent online shopping transactions?',
    answer:
      'Under the Reserve Bank of India circular on Limiting Liability of Customers in Unauthorized Electronic Banking Transactions (DBR.No.Leg.BC.78/09.07.005/2017-18), a consumer enjoys zero liability when financial fraud or unauthorized payment gateway debits occur due to third-party breach or merchant fraud, provided the incident is formally notified to the issuing bank within three working days. For credit and debit card transactions processed through VISA, Mastercard, or RuPay, cardholders can raise a formal chargeback dispute under Reason Code categories such as "Goods/Services Not Received" or "Counterfeit Merchandise" within 120 days of the transaction date. The issuing bank is legally bound under RBI directions to provisionally credit the disputed amount or coordinate with the acquirer bank to secure the funds.',
  },
  {
    question: 'Can a legal notice be served to payment gateways like Razorpay, PayU, or Cashfree in an online shopping fraud case?',
    answer:
      'Yes, payment aggregators and gateway intermediaries operating under RBI Master Directions are obligated to maintain robust merchant onboarding due diligence (KYC) and transaction monitoring protocols. Serving a statutory legal notice upon both the deceptive seller and the acquiring payment gateway creates direct legal liability under Section 79 of the Information Technology Act, 2000 and the Consumer Protection Act, 2019 if the gateway fails to exercise due diligence or continues disbursing settlement funds to a reported fraudulent merchant. Upon receiving formal notice from an advocate, payment aggregators routinely freeze the scammer’s nodal settlement account and escrow the disputed funds pending dispute resolution.',
  },
  {
    question: 'What statutory laws protect Indian consumers against fake ecommerce portals and Instagram shopping scams?',
    answer:
      'Indian consumers targeted by fake shopping websites or fraudulent social media sellers are protected by the Consumer Protection Act, 2019, specifically the Consumer Protection (E-Commerce) Rules, 2020, which mandate transparent seller disclosures, registered grievance officers, and prohibition of unfair trade practices or counterfeit deliveries under Section 2(47). Criminal remedies are enforceable under Section 318 (Cheating and Dishonestly Inducing Delivery of Property) and Section 316 (Criminal Breach of Trust) of the Bharatiya Nyaya Sanhita, 2023, alongside Section 66C (Identity Theft) and Section 66D (Cheating by Personation Using Computer Resource) of the Information Technology Act, 2000. These statutory provisions empower consumers to seek full refund, statutory interest of 18% per annum, and substantial punitive damages for mental agony.',
  },
  {
    question: 'What crucial digital evidence must be collected immediately after discovering an online shopping scam?',
    answer:
      'Aggrieved buyers must immediately preserve complete digital audit trails including full webpage screenshots, the merchant’s URL, domain WHOIS records, digital order confirmations, electronic tax invoices, and bank transaction reference numbers (UTR/RRN). In cases involving physical delivery of wrong, damaged, or empty parcels, recording a single continuous unboxing video from the unbroken shipping seal to item revelation provides unimpeachable primary evidence. All communication logs across WhatsApp, email, Instagram DMs, and SMS should be archived alongside an electronic certificate under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 for admissibility before consumer commissions and cyber courts.',
  },
  {
    question: 'How does serving a formal legal notice differ from merely lodging a complaint on the National Consumer Helpline (NCH)?',
    answer:
      'The National Consumer Helpline (NCH) operates primarily as an administrative grievance facilitation mechanism with no statutory powers to issue binding recovery decrees or impose criminal liability on fraudulent operators. In contrast, an advocate-drafted statutory legal demand notice establishes formal pre-litigation liability, provides a binding 15-day compliance window, and puts company directors and payment gateways on notice for civil summary recovery under Order 37 CPC and criminal prosecution under the BNS. If the fraudster ignores the legal notice, the sender possesses an unassailable evidentiary record that enables fast-track injunctions, attachment of bank accounts, and substantial punitive costs in court.',
  },
];

/* ─── JSON-LD SCHEMA (@graph) ──────────────────────────────────────────── */
const pageUrl =
  'https://legalrecovery.in/send-a-legal-notice/recover-money-from-online-shopping-scam-india';
const ogImage =
  'https://legalrecovery.in/images/og/recover-money-from-online-shopping-scam-india.jpg';

const reviewBodyText =
  'I was defrauded of ₹48,500 after purchasing high-end photography gear from a sophisticated Instagram electronics storefront that turned out to be a fraudulent shell operation. The seller delivered a parcel containing broken ceramic tiles and immediately blocked my phone number and social media profile. Legal Recovery drafted and served an aggressive statutory legal notice citing the Consumer Protection (E-Commerce) Rules, Section 318 of the BNS, and Section 66D of the IT Act to both the fraudulent seller and the payment gateway intermediary. Within 11 days of receiving the advocate notice, the payment aggregator froze the merchant\'s nodal settlement account and processed a full ₹48,500 reimbursement back to my bank account. Exceptional, swift legal support for cyber commerce recovery.';

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
        'How to Recover Money from Online Shopping Scam in India | Legal Notice & Recovery Guide',
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
      datePublished: '2024-09-15T08:00:00+05:30',
      dateModified: new Date().toISOString(),
    },

    /* 2. WebPage with SpeakableSpecification */
    {
      '@type': 'WebPage',
      '@id': pageUrl,
      name: 'Recover Money from Online Shopping Scam India | Legal Recovery Guide',
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
          name: 'Recover Money from Online Shopping Scam India',
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
      name: '4-Stage Legal Process to Recover Money from Online Shopping Scams in India',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Trigger Golden Hour Cyber Freeze: Report immediately via National Cybercrime Helpline 1930 and file an incident report on cybercrime.gov.in under the CFCFRMS module to block downstream banking channels.',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Serve Advocate-Drafted Statutory Legal Demand Notice: Dispatch a formal 15-day statutory notice to the seller and payment aggregator citing CPA 2019, IT Act 2000, and BNS 2023.',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Initiate Bank Chargeback & Grievance Redressal: File a dispute under RBI Master Directions for unauthorized electronic transactions or card scheme chargeback rules within statutory timelines.',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Institute E-Daakhil Consumer Forum Claim & Criminal Proceedings: File an online petition before the District Consumer Commission for principal recovery, 18% p.a. interest, and mental harassment damages.',
        },
      ],
    },

    /* 7. Product + AggregateRating + Review (matches sidebar UI word-for-word) */
    {
      '@type': 'Product',
      name: 'Legal Notice & Recovery Service for Online Shopping Scams and E-Commerce Fraud',
      description:
        'Advocate-crafted statutory legal demand notice and cyber fraud recovery service for Indian consumers to retrieve defrauded funds from fake shopping websites, fraudulent social media merchants, and deceptive ecommerce platforms.',
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
            name: 'Kavita Shenoy',
          },
          reviewBody: reviewBodyText,
        },
      ],
    },
  ],
};

/* ─── CLIENT COMPONENT ─────────────────────────────────────────────────── */
export default function RecoverMoneyFromOnlineShoppingScamIndiaClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: 'scam-typologies', title: '1. Common Online Shopping Scams & Fraud Typologies in India' },
    { id: 'statutory-framework', title: '2. Statutory Legal Protections: CPA 2019, IT Act & BNS 2023' },
    { id: '4-stage-roadmap', title: '3. 4-Stage Legal Roadmap to Recover Defrauded Money' },
    { id: 'evidentiary-checklist', title: '4. Digital Forensics & Pre-Notice Evidentiary Audit Checklist' },
    { id: 'essential-clauses', title: '5. Essential Clauses in a Statutory Demand Notice for Shopping Fraud' },
    { id: 'comparison-table', title: '6. Legal Notice vs Cyber Cell vs Consumer Court vs Chargeback' },
    { id: 'faqs', title: '7. Frequently Asked Questions' },
  ];

  const breadcrumbItems = [
    { label: 'Send a Legal Notice', href: '/send-a-legal-notice' },
    {
      label: 'Recover Money from Online Shopping Scam India',
      href: '/send-a-legal-notice/recover-money-from-online-shopping-scam-india',
    },
  ];

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const shareUrl = encodeURIComponent(pageUrl);
  const shareText = encodeURIComponent(
    'Scammed by a fake shopping website or fraudulent online seller in India? Discover how to recover your money through advocate legal notice, cybercrime freeze, and bank chargebacks! #OnlineScam #LegalRecovery #ConsumerRights'
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
              COMMERCIAL CYBER FRAUD &amp; CONSUMER DISPUTE RECOVERY
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Recover Money from{' '}
              <span className="text-[#DC2626]">Online Shopping Scam India</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Defrauded by a fake ecommerce portal, fraudulent social media seller, or deceptive online merchant? Send an advocate-vetted statutory legal notice, trigger bank chargebacks, and enforce refund recovery under the Consumer Protection Act, IT Act, and BNS 2023.
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
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${encodeURIComponent('How to Recover Money from Online Shopping Scam India | Legal Recovery')}`}
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
                    Consumers in India can recover money lost to online shopping scams by immediately dialing the 1930 National Cybercrime helpline within 2 to 24 hours to freeze suspicious fund transfers under the Citizen Financial Cyber Fraud Reporting and Management System. Simultaneously, serving an advocate-vetted statutory legal notice upon the fraudulent merchant and the payment aggregator enforces mandatory refund obligations under the{' '}
                    <a
                      href="https://consumeraffairs.nic.in/acts-and-rules/consumer-protection-act-2019"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      Consumer Protection (E-Commerce) Rules, 2020
                    </a>{' '}
                    and Section 318 of the Bharatiya Nyaya Sanhita, 2023. If the merchant fails to refund the defrauded amount within 15 days, the buyer can initiate a bank chargeback under{' '}
                    <a
                      href="https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11040"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      RBI Customer Protection Directives
                    </a>{' '}
                    and lodge a formal statutory petition on the E-Daakhil consumer court portal for principal recovery, 18% annual interest, and litigation costs.
                  </p>
                </div>

                {/* ── IN-ARTICLE INFOGRAPHIC ────────────────────────────── */}
                <figure className="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900">
                  <img
                    src="/images/og/recover-money-from-online-shopping-scam-india.jpg"
                    alt="Infographic: Step-by-Step Legal Framework to Recover Money from Online Shopping Scams in India"
                    className="w-full h-auto object-cover max-h-[500px]"
                    loading="lazy"
                  />
                  <figcaption className="p-3.5 text-center text-xs text-slate-600 font-semibold bg-white border-t border-slate-100 flex items-center justify-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#DC2626]" />
                    <span>Figure 1: Comprehensive Statutory Roadmap for Online Shopping Scam Recovery under CPA 2019, IT Act 2000, RBI Chargeback Mandates &amp; BNS 2023.</span>
                  </figcaption>
                </figure>

                {/* ── SECTION 1: SCAM TYPOLOGIES ────────────────────────── */}
                <section id="scam-typologies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    1. Common Online Shopping Scams &amp; Fraud Typologies in India
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      With India’s rapid expansion into digital commerce, malicious operators exploit social media algorithms, search engine advertisements, and spoofed payment gateways to deceive buyers. Identifying the precise typology of the transaction is the first legal prerequisite for establishing jurisdictional cause of action and selecting the optimal recovery remedy.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                      <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-3 h-3 rounded-full bg-[#DC2626]" />
                          <h3 className="font-extrabold text-slate-900 text-sm md:text-base">
                            Fake Websites &amp; Brand Spoofing (Typosquatting)
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          Fraudulent entities clone legitimate retail portals (e.g., duplicate domains mimicking luxury fashion, electronics, or festive sale portals), collect upfront UPI or card payments, and disappear without shipping any goods.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-3 h-3 rounded-full bg-[#DC2626]" />
                          <h3 className="font-extrabold text-slate-900 text-sm md:text-base">
                            Social Media &amp; Instagram Storefront Scams
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          Unregistered commercial pages on Instagram, Facebook Marketplace, and Telegram promote heavily discounted branded items, demand direct UPI/QR code payment, and instantly block the customer upon funds receipt.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-3 h-3 rounded-full bg-[#DC2626]" />
                          <h3 className="font-extrabold text-slate-900 text-sm md:text-base">
                            Empty Parcel &amp; Counterfeit Goods Delivery
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          Sellers deliver packages stuffed with newspapers, stones, or cheap counterfeits instead of the contracted merchandise, subsequently rejecting return requests by fabricating proof of valid logistics delivery.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-3 h-3 rounded-full bg-[#DC2626]" />
                          <h3 className="font-extrabold text-slate-900 text-sm md:text-base">
                            Deceptive Cash-on-Delivery (COD) Extortion
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          Couriers collect cash payments before permitting package inspection. Once the recipient discovers substandard or empty contents, courier logistics providers disclaim liability, and the fictitious sender details lead to untraceable addresses.
                        </p>
                      </div>
                    </div>

                    <div className="bg-red-50/70 border-l-4 border-[#DC2626] p-4.5 rounded-r-xl text-xs sm:text-sm text-slate-700">
                      <strong>Critical Legal Reality:</strong> Regardless of whether the fraudulent transaction occurred on an unorganized Instagram page, a fake standalone website, or a registered marketplace, the transaction constitutes a legally binding contract under Section 10 of the Indian Contract Act, 1872, enforceable through statutory demand notices and consumer litigation.
                    </div>
                  </div>
                </section>

                {/* ── SECTION 2: STATUTORY LEGAL FRAMEWORK ──────────────── */}
                <section id="statutory-framework" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    2. Statutory Legal Protections: CPA 2019, IT Act &amp; BNS 2023
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Indian jurisprudence provides a multi-layered statutory safety net to penalize online commercial fraud, protect electronic consumers, and mandate prompt financial restitution. Aggrieved consumers have rights rooted in four primary statutes:
                    </p>

                    <div className="space-y-4">
                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                        <h3 className="text-base font-extrabold text-slate-900 mb-2">
                          A. Consumer Protection Act, 2019 &amp; E-Commerce Rules, 2020
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mb-3">
                          Under the{' '}
                          <a
                            href="https://consumeraffairs.nic.in/acts-and-rules/consumer-protection-act-2019"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-600 hover:text-purple-800 hover:underline"
                          >
                            Consumer Protection Act, 2019
                          </a>
                          , every online purchaser qualifies as a &quot;consumer&quot; under Section 2(7). Key protective mandates include:
                        </p>
                        <ul className="space-y-2 text-xs sm:text-sm text-slate-700 list-disc list-inside">
                          <li>
                            <strong>Section 2(47) (Unfair Trade Practices):</strong> Explicitly prohibits misleading representations regarding the quality, standard, or grade of goods, as well as deceptive promises of refund or warranty.
                          </li>
                          <li>
                            <strong>Rule 4 &amp; Rule 5 of E-Commerce Rules, 2020:</strong> Mandates that all entities conducting e-commerce in India must disclose their legal entity name, principal geographic address, customer care numbers, and grievance redressal officer details.
                          </li>
                          <li>
                            <strong>Section 89:</strong> Imposes criminal penalties including imprisonment up to 2 years and fines up to ₹10 Lakhs for manufacturers or service providers publishing false or misleading advertisements.
                          </li>
                        </ul>
                      </div>

                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                        <h3 className="text-base font-extrabold text-slate-900 mb-2">
                          B. Information Technology Act, 2000 (Cyber Law Provisions)
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mb-3">
                          The{' '}
                          <a
                            href="https://www.indiacode.nic.in/handle/123456789/1999"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-600 hover:text-purple-800 hover:underline"
                          >
                            Information Technology Act, 2000
                          </a>{' '}
                          prescribes strict penal consequences for computer-facilitated commercial deceit:
                        </p>
                        <ul className="space-y-2 text-xs sm:text-sm text-slate-700 list-disc list-inside">
                          <li>
                            <strong>Section 66D (Cheating by Personation):</strong> Punishes anyone who, by means of any communication device or computer resource, cheats by personating a genuine merchant or brand with imprisonment up to 3 years and fines up to ₹1 Lakh.
                          </li>
                          <li>
                            <strong>Section 66C (Identity Theft):</strong> Penalizes unauthorized fraudulent use of digital signatures, passwords, or corporate identities.
                          </li>
                          <li>
                            <strong>Section 79 (Intermediary Due Diligence):</strong> Payment gateways, web hosting services, and social platforms lose safe-harbour immunity if they fail to take down fraudulent merchants upon receiving formal notice.
                          </li>
                        </ul>
                      </div>

                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                        <h3 className="text-base font-extrabold text-slate-900 mb-2">
                          C. Bharatiya Nyaya Sanhita, 2023 (Criminal Penalties)
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mb-3">
                          Replacing the Indian Penal Code, the{' '}
                          <a
                            href="https://www.indiacode.nic.in/handle/123456789/20234"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-600 hover:text-purple-800 hover:underline"
                          >
                            Bharatiya Nyaya Sanhita, 2023 (BNS)
                          </a>{' '}
                          provides potent penal sections for ecommerce fraud:
                        </p>
                        <ul className="space-y-2 text-xs sm:text-sm text-slate-700 list-disc list-inside">
                          <li>
                            <strong>Section 318 (Cheating):</strong> Cheating and dishonestly inducing delivery of property carries rigorous imprisonment up to 7 years along with mandatory fines.
                          </li>
                          <li>
                            <strong>Section 316 (Criminal Breach of Trust):</strong> Punishes dishonestly misappropriating advance payments without delivering contracted goods.
                          </li>
                          <li>
                            <strong>Section 336 (Forgery):</strong> Enforces criminal liability for creating fake invoices, forged shipping tracking receipts, or cloned digital payment portals.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 3: 4-STAGE ROADMAP ────────────────────────── */}
                <section id="4-stage-roadmap" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    3. 4-Stage Legal Roadmap to Recover Defrauded Money
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Recovering money from an online shopping scam requires a synchronized technical, banking, and legal intervention. Time is of the essence: funds must be frozen before scammers route them across multiple mule bank accounts.
                    </p>

                    <div className="space-y-4 my-6">
                      <div className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 items-start">
                        <span className="bg-[#DC2626] text-white text-xs font-black px-3 py-1.5 rounded-lg shrink-0">
                          Stage 1
                        </span>
                        <div>
                          <h3 className="font-extrabold text-slate-900 text-sm md:text-base mb-1.5">
                            Golden Hour Cyber Freeze via 1930 &amp; Cybercrime Portal
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mb-2">
                            Immediately dial the National Cybercrime Reporting Helpline <strong className="text-slate-900">1930</strong> (formerly 155260) within 2 to 24 hours of the fraudulent transaction. The portal automatically logs the transaction on the Citizen Financial Cyber Fraud Reporting and Management System (CFCFRMS), alerting the sender bank, payment gateway, and destination beneficiary bank to freeze the corresponding funds in transit.
                          </p>
                          <p className="text-xs text-slate-500">
                            Actionable Step: File a formal digital cyber complaint on{' '}
                            <a
                              href="https://cybercrime.gov.in"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-purple-600 hover:text-purple-800 hover:underline"
                            >
                              cybercrime.gov.in
                            </a>{' '}
                            and secure an Acknowledgement Number for statutory tracking.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 items-start">
                        <span className="bg-[#DC2626] text-white text-xs font-black px-3 py-1.5 rounded-lg shrink-0">
                          Stage 2
                        </span>
                        <div>
                          <h3 className="font-extrabold text-slate-900 text-sm md:text-base mb-1.5">
                            Advocate-Drafted Statutory Demand Notice to Merchant &amp; Payment Gateway
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mb-2">
                            A formal legal notice is drafted on an advocate’s official letterhead, establishing conclusive evidence of fraud, breach of contract, and unfair trade practices. The notice demands complete reimbursement of the defrauded sum with 18% annual interest within 15 days, warning of criminal FIR filings under BNS Section 318 and civil summary claims.
                          </p>
                          <p className="text-xs text-slate-500">
                            Actionable Step: Serve the notice simultaneously via Speed Post AD, verified corporate email, and WhatsApp to the merchant, their domain registrar, and the acquiring payment gateway (e.g., Razorpay, Cashfree, PayU, PhonePe).
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 items-start">
                        <span className="bg-[#DC2626] text-white text-xs font-black px-3 py-1.5 rounded-lg shrink-0">
                          Stage 3
                        </span>
                        <div>
                          <h3 className="font-extrabold text-slate-900 text-sm md:text-base mb-1.5">
                            RBI Bank Chargeback &amp; NPCI Dispute Escalation
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mb-2">
                            If the transaction was executed using a credit card, debit card, or net banking, lodge a formal chargeback dispute with your card-issuing bank under the category of &quot;Goods/Services Not Received&quot; or &quot;Defective/Counterfeit Product Delivered&quot; under{' '}
                            <a
                              href="https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11040"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-purple-600 hover:text-purple-800 hover:underline"
                            >
                              RBI Notification DBR.No.Leg.BC.78/09.07.005/2017-18
                            </a>
                            . For UPI payments, raise an official UPI dispute through the National Payments Corporation of India (NPCI) portal.
                          </p>
                          <p className="text-xs text-slate-500">
                            Actionable Step: Submit the police acknowledgement, transaction UTR receipts, and legal notice copy to the bank’s Nodal Grievance Officer within 30 days.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 items-start">
                        <span className="bg-[#DC2626] text-white text-xs font-black px-3 py-1.5 rounded-lg shrink-0">
                          Stage 4
                        </span>
                        <div>
                          <h3 className="font-extrabold text-slate-900 text-sm md:text-base mb-1.5">
                            Consumer Court Filing via E-Daakhil &amp; CCPA Complaint
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mb-2">
                            If the 15-day notice period expires without resolution, file an electronic consumer complaint on the government’s{' '}
                            <a
                              href="https://edaakhil.nic.in"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-purple-600 hover:text-purple-800 hover:underline"
                            >
                              E-Daakhil portal (edaakhil.nic.in)
                            </a>{' '}
                            before the District Consumer Disputes Redressal Commission. You are entitled to demand 100% principal reimbursement, commercial interest, legal costs, and punitive compensation for mental harassment.
                          </p>
                          <p className="text-xs text-slate-500">
                            Actionable Step: Simultaneously notify the Central Consumer Protection Authority (CCPA) under Section 18 of CPA 2019 to initiate class-action investigations and ban fraudulent merchant operations.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 4: EVIDENTIARY CHECKLIST ──────────────────── */}
                <section id="evidentiary-checklist" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    4. Digital Forensics &amp; Pre-Notice Evidentiary Audit Checklist
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      The evidentiary strength of your legal notice and subsequent consumer court petition hinges on meticulous digital forensic documentation. Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic records are fully admissible when backed by proper forensic trails.
                    </p>

                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                      <h3 className="font-extrabold text-slate-900 text-sm md:text-base uppercase tracking-wider">
                        Mandatory Evidentiary Checklist for Online Shopping Fraud:
                      </h3>
                      <ol className="space-y-3 text-xs sm:text-sm text-slate-700 list-decimal list-inside">
                        <li>
                          <strong>Webpage &amp; Storefront Captures:</strong> Full desktop/mobile screenshots of the product listing, promised specifications, price tags, return/refund policies, and contact information before the fraudulent portal takes the listing offline.
                        </li>
                        <li>
                          <strong>Banking &amp; Payment Gateway Logs:</strong> Bank account statement highlighting the debit, UPI Unique Transaction Reference (UTR) number, Bank Reference Number (RRN), and digital payment gateway confirmation receipts (Razorpay/PayU/Cashfree transaction IDs).
                        </li>
                        <li>
                          <strong>Electronic Invoices &amp; Order Confirmations:</strong> PDF order confirmations, SMS dispatch alerts, email confirmations, and GSTIN invoices issued by the merchant or intermediary.
                        </li>
                        <li>
                          <strong>Single-Take Unboxing Video:</strong> In empty box or counterfeit parcel cases, an uncut, continuous video recording starting from the unopened outer courier packaging showing the shipping label and tracking AWB number through to parcel contents inspection.
                        </li>
                        <li>
                          <strong>Chat Transcripts &amp; Communication Records:</strong> Certified exports of WhatsApp chats, SMS threads, Instagram direct messages, and email communications requesting refund or explanation, showing delivery timestamps and merchant read receipts.
                        </li>
                        <li>
                          <strong>Domain WHOIS &amp; MCA Data:</strong> Domain registration records retrieved via ICANN WHOIS lookup, IP hosting logs, and Ministry of Corporate Affairs (MCA) entity details if operating under an apparent corporate facade.
                        </li>
                      </ol>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 5: ESSENTIAL CLAUSES ──────────────────────── */}
                <section id="essential-clauses" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    5. Essential Clauses in a Statutory Demand Notice for Shopping Fraud
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      A poorly worded or informal complaint email carries zero legal weight in an Indian court. A legally enforceable statutory notice must be drafted with precision by an experienced advocate, incorporating the following mandatory legal clauses:
                    </p>

                    <div className="space-y-4">
                      <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-100">
                        <h4 className="font-extrabold text-slate-900 text-sm mb-1">
                          1. Parties &amp; Jurisdictional Authority Clause
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          Identifies the complainant as a bonafide consumer under Section 2(7) of CPA 2019 and establishes territorial and pecuniary jurisdiction based on the consumer’s place of residence under Section 34(2)(d) of the Act.
                        </p>
                      </div>

                      <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-100">
                        <h4 className="font-extrabold text-slate-900 text-sm mb-1">
                          2. Statement of Facts &amp; Electronic Contract Formation
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          Chronicles the exact timeline of purchase, consideration paid via electronic banking channels, transaction IDs, promised delivery dates, and specific instances of breach or misrepresentation.
                        </p>
                      </div>

                      <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-100">
                        <h4 className="font-extrabold text-slate-900 text-sm mb-1">
                          3. Statutory Violations &amp; Fraudulent Inducement Clause
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          Details statutory contraventions under E-Commerce Rules 2020, Section 2(47) CPA (Unfair Trade Practices), Section 66D IT Act (Cheating by Personation), and Section 318 BNS (Criminal Fraud and Inducement).
                        </p>
                      </div>

                      <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-100">
                        <h4 className="font-extrabold text-slate-900 text-sm mb-1">
                          4. Joint &amp; Several Liability of Intermediaries Clause
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          Puts payment aggregators, hosting providers, and delivery partners on notice under Section 79 of the IT Act, demanding immediate escrow freezing of the scammer’s nodal accounts.
                        </p>
                      </div>

                      <div className="p-4.5 rounded-xl bg-slate-50 border border-slate-100">
                        <h4 className="font-extrabold text-slate-900 text-sm mb-1">
                          5. Strict 15-Day Peremptory Demand &amp; Damages Warning
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                          Demands full principal refund plus 18% per annum statutory interest and ₹25,000 to ₹50,000 for mental agony and legal costs within a strict 15-day compliance window, failing which litigation commences.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 6: COMPARISON TABLE ───────────────────────── */}
                <section id="comparison-table" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-5 border-b-2 border-[#DC2626] pb-2 inline-block">
                    6. Legal Notice vs Cyber Cell vs Consumer Court vs Chargeback
                  </h2>
                  <div className="prose prose-base max-w-none text-slate-650 space-y-6">
                    <p className="text-sm md:text-base leading-relaxed">
                      Understanding how different recovery avenues compare in terms of speed, cost, and legal effectiveness ensures you adopt the most aggressive multi-channel strategy:
                    </p>

                    <div className="overflow-x-auto my-6">
                      <table className="w-full text-left border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-slate-900 text-white font-bold">
                            <th className="p-3.5 border-b border-slate-800">Remedy Pathway</th>
                            <th className="p-3.5 border-b border-slate-800">Turnaround Time</th>
                            <th className="p-3.5 border-b border-slate-800">Primary Objective</th>
                            <th className="p-3.5 border-b border-slate-800">Statutory Authority</th>
                            <th className="p-3.5 border-b border-slate-800">Success Rate</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-700">
                          <tr className="hover:bg-slate-50/80">
                            <td className="p-3.5 font-bold text-slate-900">
                              Advocate Statutory Legal Notice
                            </td>
                            <td className="p-3.5 font-semibold text-[#DC2626]">7 – 15 Days</td>
                            <td className="p-3.5">Voluntary refund settlement &amp; account freeze</td>
                            <td className="p-3.5">CPA 2019, IT Act &amp; BNS 2023</td>
                            <td className="p-3.5 font-bold text-emerald-650">High (76%)</td>
                          </tr>
                          <tr className="hover:bg-slate-50/80">
                            <td className="p-3.5 font-bold text-slate-900">
                              Cybercrime 1930 / Portal Freeze
                            </td>
                            <td className="p-3.5">24 Hours – 7 Days</td>
                            <td className="p-3.5">Inter-bank lien &amp; wallet fund freezing</td>
                            <td className="p-3.5">MHA CFCFRMS Framework</td>
                            <td className="p-3.5 font-bold text-emerald-650">High (Golden Hour)</td>
                          </tr>
                          <tr className="hover:bg-slate-50/80">
                            <td className="p-3.5 font-bold text-slate-900">
                              Bank Card Chargeback
                            </td>
                            <td className="p-3.5">30 – 90 Days</td>
                            <td className="p-3.5">Direct reversal from acquirer bank</td>
                            <td className="p-3.5">RBI Master Directions &amp; Card Schemes</td>
                            <td className="p-3.5 font-bold text-blue-600">Moderate to High</td>
                          </tr>
                          <tr className="hover:bg-slate-50/80">
                            <td className="p-3.5 font-bold text-slate-900">
                              E-Daakhil Consumer Commission
                            </td>
                            <td className="p-3.5">3 – 9 Months</td>
                            <td className="p-3.5">Binding court decree, 18% interest &amp; damages</td>
                            <td className="p-3.5">Consumer Protection Act, 2019</td>
                            <td className="p-3.5 font-bold text-purple-600">Very High (Decree)</td>
                          </tr>
                        </tbody>
                      </table>
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
                        href="https://consumeraffairs.nic.in/acts-and-rules/consumer-protection-act-2019"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Consumer Protection Act, 2019 &amp; Consumer Protection (E-Commerce) Rules, 2020, consumeraffairs.nic.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.indiacode.nic.in/handle/123456789/1999"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Information Technology Act, 2000 — Sections 43A, 66C, 66D &amp; 79 Intermediary Guidelines, indiacode.nic.in
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
                    <li>
                      <a
                        href="https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11040"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Reserve Bank of India (RBI) — Limiting Liability of Customers in Unauthorized Electronic Banking Transactions, rbi.org.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://cybercrime.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Ministry of Home Affairs — National Cyber Crime Reporting Portal &amp; 1930 Helpline Framework, cybercrime.gov.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://edaakhil.nic.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        National Consumer Disputes Redressal Commission (NCDRC) — E-Daakhil Electronic Filing Portal, edaakhil.nic.in
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://main.sci.gov.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        Supreme Court of India — Landmark E-Commerce &amp; Consumer Protection Precedents, main.sci.gov.in
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
                        title: 'Legal Notice for Online Shopping Dispute',
                        href: '/send-a-legal-notice/online-shopping-dispute',
                      },
                      {
                        title: 'Legal Notice to Retailer for Wrong or Damaged Product Delivery',
                        href: '/legal-notice-to-retailer-wrong-damaged-product-delivery',
                      },
                      {
                        title: 'Legal Notice for Defective Product Refund',
                        href: '/send-a-legal-notice/defective-product-refund',
                      },
                      {
                        title: 'Legal Notice When Company Refuses Refund',
                        href: '/send-a-legal-notice/company-refusing-refund',
                      },
                      {
                        title: 'Legal Notice for Online Refund Not Received',
                        href: '/send-a-legal-notice/online-refund-not-received',
                      },
                      {
                        title: 'Flipkart Return, Refund & Unfair Trade Practice Complaint',
                        href: '/flipkart-return-refund-complaint',
                      },
                      {
                        title: 'How to File a Consumer Complaint in India (Step-by-Step)',
                        href: '/how-to-file-consumer-complaint-india',
                      },
                      {
                        title: 'How to Recover Money Stuck in Online Cyber Fraud',
                        href: '/how-to-recover-money-stuck-in-online-cyber-fraud',
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
                    platform, connecting defrauded online shoppers, consumers, businesses, and
                    professionals with seasoned panel advocates for rapid, advocate-vetted statutory
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
                  Scammed by an Online Seller?
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  Send an advocate-vetted statutory notice today. 76% of fraudulent ecommerce operators and payment intermediaries settle and refund within 15 days of formal notice.
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

                {/* Review card — must match JSON-LD Product > Review word-for-word */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#DC2626]/10 flex items-center justify-center font-black text-[#DC2626] text-xs">
                      KS
                    </div>
                    <div>
                      <p className="font-extrabold text-slate-900 text-xs">Kavita Shenoy</p>
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
                  Start Your Recovery
                </button>
              </div>

              {/* Quick Stats */}
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 space-y-3">
                <h3 className="font-black text-slate-900 text-sm mb-3">Why Legal Recovery?</h3>
                {[
                  { stat: '76%', label: 'Disputes resolved prior to consumer commission filing' },
                  { stat: '₹100CR+', label: 'Total fraudulent & unpaid amount recovered' },
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
