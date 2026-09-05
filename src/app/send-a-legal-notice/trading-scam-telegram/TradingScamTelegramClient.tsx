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
    question: 'Can a victim send a legal notice to recover money lost in a Telegram stock trading or crypto scam in India?',
    answer:
      'Yes, a defrauded victim can issue an advocate-drafted statutory legal notice under Section 318(4) of the Bharatiya Nyaya Sanhita, 2023 (BNS), Section 66D of the Information Technology Act, 2000, and Section 106 of the Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS) to beneficiary mule account holders, intermediary banks, and payment gateways. The legal notice serves as a formal demand for immediate restitution, demands immediate debit freezes on recipient bank accounts before funds are laundered, and creates an indispensable documentary foundation for subsequent judicial asset attachment and magistrate refund petitions under Section 503 of the BNSS. Serving this statutory demand establishes criminal culpability, eliminates the defense of bona fide receipt for mule account operators, and accelerates asset recovery through coordinated cybercrime enforcement.',
  },
  {
    question: 'What is the role of beneficiary mule bank accounts in Telegram trading fraud and how can legal notices freeze them?',
    answer:
      'Mule bank accounts are domestic current or savings accounts used by cyber syndicates to receive, layer, and rapidly siphon victim deposits through instant IMPS, RTGS, and UPI channels. Serving a formal advocate legal notice upon the beneficiary account holder and the respective branch manager places the bank on strict legal notice regarding proceeds of crime under Section 106 of the BNSS and the Prevention of Money Laundering Act, 2002 (PMLA). Upon receipt of formal notice alongside the National Cyber Crime Reporting Portal (NCRP) acknowledgement, bank compliance officers are legally obligated under Reserve Bank of India (RBI) KYC and AML directions to place immediate debit freezes on the flagged account balances.',
  },
  {
    question: 'Can intermediary banks be held legally liable if they fail to freeze scam accounts after receiving timely intimation?',
    answer:
      'Yes, under RBI Master Direction on Customer Protection – Limiting Liability of Customers in Unauthorised Electronic Banking Transactions (RBI/2017-18/15) and PMLA obligations, banks have a statutory duty of vigilance once tainted transactions are formally brought to their notice. If a bank demonstrates gross negligence by delaying debit freezes despite receiving an advocate statutory notice and cyber helpline acknowledgement number, the victim can file a formal complaint before the RBI Ombudsman under the Reserve Bank - Integrated Ombudsman Scheme, 2021 or initiate deficiency of service claims before the State Consumer Disputes Redressal Commission. Legal notices establish the exact timestamp of bank notification, depriving financial institutions of safe-harbor immunity for negligence.',
  },
  {
    question: 'How can a scam victim recover frozen funds from a bank account using Section 503 of the BNSS (formerly Section 457 CrPC)?',
    answer:
      'Once cyber police or bank authorities freeze tainted funds in beneficiary mule accounts, the victim can file a formal application for return of property under Section 503 of the Bharatiya Nagarik Suraksha Sanhita, 2023 before the jurisdictional Chief Judicial Magistrate or Metropolitan Magistrate. Supported by transaction UTR logs, bank statements, digital chat transcripts certified under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), and the advocate legal notice, the court executes an indemnity bond and directs the holding bank to reverse the frozen proceeds directly back to the victim’s source bank account. Various High Courts have established that magistrate courts must expedite interim release of frozen funds without waiting for the conclusion of criminal trials.',
  },
  {
    question: 'Can a legal notice be served on Telegram under the Information Technology Act for facilitating illegal investment syndicates?',
    answer:
      'Yes, while Telegram operates as an offshore digital intermediary, it is legally bound under Rule 3(1)(b) of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 to exercise statutory due diligence and remove fraudulent financial channels within 24 hours of receiving formal notice. Serving a legal demand notice upon Telegram’s designated Grievance Officer in India puts the platform on formal notice regarding unregistered SEBI collective investment schemes, identity theft, and cyber extortion. Failure to act upon statutory legal notice forfeits Telegram’s intermediary safe-harbor protection under Section 79(3)(b) of the Information Technology Act, 2000, exposing the platform and its administrators to secondary civil and criminal prosecution in Indian courts.',
  },
  {
    question: 'What is the statutory limitation period and time-sensitivity for taking legal action against Telegram trading fraudsters?',
    answer:
      'While the statutory limitation period for filing civil recovery suits under Article 113 of the Schedule to the Limitation Act, 1963 is three years from the date the cause of action arises, cyber trading recovery requires immediate legal action within the critical "golden hour" of 2 to 48 hours following fund transfer. Because cyber fraudsters quickly route funds through multi-layered mule networks and offshore crypto exchanges, serving an urgent statutory legal notice and lodging NCRP reports within hours ensures that funds are blocked before total dispersal occurs. Delays beyond 30 days significantly increase tracing complexity, although legal remedies against primary account holders, intermediary banks, and corporate entities remain fully enforceable for three years.',
  },
];

/* ─── JSON-LD SCHEMA (@graph) ──────────────────────────────────────────── */
const pageUrl =
  'https://legalrecovery.in/send-a-legal-notice/trading-scam-telegram';
const ogImage =
  'https://legalrecovery.in/images/og/trading-scam-telegram.jpg';

const reviewBodyText =
  'I was lured into a Telegram VIP group named "Institutional Wealth Advisory & Institutional Stock Allotments" with over 18,000 members sharing screenshots of 300% trading profits. Over 3 weeks, I was guided to download a cloned institutional trading app and transfer ₹14,60,000 across 4 separate beneficiary accounts in ICICI, HDFC, and Yes Bank for high-frequency institutional IPO trades. When my portfolio balance showed ₹48,20,000 and I requested a withdrawal, they demanded an additional ₹4,50,000 as "SEBI clearance tax". Realizing I was scammed, I reached out to Legal Recovery. Their panel advocates drafted and served urgent statutory legal notices under BNS Section 318(4), IT Act Section 66D, and BNSS Section 106 to the beneficiary account holders and bank nodal officers within 6 hours. Combined with the 1930 cyber portal complaint, the notices compelled the banks to freeze ₹11,80,000 in two mule accounts. Legal Recovery then helped file the Section 503 BNSS refund application before the Chief Judicial Magistrate, and I received my money back into my source account. Truly life-saving legal expertise!';

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
        'Legal Notice for Trading Scam on Telegram | Recover Money India',
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
      name: 'Legal Notice for Trading Scam on Telegram | Recover Money India',
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
          name: 'Telegram Trading Scam Legal Notice',
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
      name: 'Step-by-Step Legal Recovery Process for Telegram Trading Fraud in India',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Digital Evidence Preservation: Capture full Telegram chat histories, admin usernames, cloned trading app APK metadata, deposit UTR numbers, and bank account details certified under Section 63 BSA',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Immediate Cyber Crime Registration: File official complaint on the National Cyber Crime Reporting Portal (1930 / cybercrime.gov.in) to generate formal Acknowledgement and transaction dispute IDs',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Issue Urgent Advocate Statutory Demand Notice: Serve comprehensive legal notice under BNS 318(4), IT Act 66D, and BNSS 106 to beneficiary mule account holders, branch managers, and bank cyber nodal officers',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Enforce Banking Liens & Account Freezes: Mandate bank compliance teams under RBI KYC/AML master directives to execute instant debit freezes on identified suspect accounts',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Judicial De-freezing & Restitution: File Section 503 BNSS petition before the Chief Judicial Magistrate to secure formal court orders releasing frozen funds back to the victim',
        },
      ],
    },

    /* 7. Product + AggregateRating + Review (matches sidebar UI word-for-word) */
    {
      '@type': 'Product',
      name: 'Legal Notice for Telegram Trading & Investment Scam Recovery',
      description:
        'Advocate-drafted statutory legal notice and asset freezing service for victims of Telegram stock market fraud, institutional trading clones, fake IPO scams, and cryptocurrency investment traps across India.',
      brand: {
        '@type': 'Organization',
        name: 'Legal Recovery',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '418',
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
            name: 'Dr. Siddharth Menon',
          },
          reviewBody: reviewBodyText,
        },
      ],
    },
  ],
};

/* ─── COMPONENT ─────────────────────────────────────────────────────────── */
export default function TradingScamTelegramClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: 'anatomy-of-scam', title: '1. Anatomy of Telegram Trading Scams: Clone Apps & Mule Rings' },
    { id: 'statutory-framework', title: '2. Statutory Framework: BNS 318(4), IT Act 66D & SEBI Regulations' },
    { id: 'mule-bank-liability', title: '3. Beneficiary Mule Accounts: Legal Demand & Statutory Notice' },
    { id: 'bank-freezing-mandates', title: '4. Bank Account Freezing under Section 106 BNSS & RBI Directives' },
    { id: 'telegram-intermediary-notice', title: '5. Intermediary Liability: Serving Notice to Telegram under IT Rules' },
    { id: 'digital-evidence-checklist', title: '6. Digital Evidence Preservation Checklist under Section 63 BSA' },
    { id: 'magistrate-refund-roadmap', title: '7. Magistrate Court Recovery: Section 503 BNSS De-Freezing Petitions' },
    { id: 'comparative-remedies-table', title: '8. Comparative Legal Matrix: Civil, Criminal & Regulatory Remedies' },
    { id: 'faqs', title: '9. Frequently Asked Questions' },
  ];

  const breadcrumbItems = [
    { label: 'Send a Legal Notice', href: '/send-a-legal-notice' },
    {
      label: 'Telegram Trading Scam Recovery',
      href: '/send-a-legal-notice/trading-scam-telegram',
    },
  ];

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const shareUrl = encodeURIComponent(pageUrl);
  const shareText = encodeURIComponent(
    'Trapped in a Telegram trading scam, fake stock app, or crypto group? Send an advocate-drafted statutory legal notice under BNS 318(4), IT Act 66D & BNSS 106 to freeze accounts and recover stolen money! #CyberFraud #TelegramScam #LegalNotice #SEBI'
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
              TELEGRAM CYBER FRAUD &amp; INVESTMENT RECOVERY
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Legal Notice for{' '}
              <span className="text-[#DC2626]">Trading Scam on Telegram</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Recover money lost to fake institutional stock trading groups, illicit IPO allocation schemes, clone APKs, and crypto traps on Telegram. Serve urgent advocate-drafted statutory notices to freeze mule bank accounts under BNS Section 318(4), IT Act Section 66D, and BNSS Section 106.
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
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        window.open(
                          `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${encodeURIComponent('Legal Notice for Telegram Trading Scam Recovery')}`,
                          '_blank',
                          'noopener,noreferrer,width=600,height=400'
                        )
                      }
                      className="w-8 h-8 rounded-full bg-[#0A66C2] text-white hover:opacity-80 flex items-center justify-center transition-opacity cursor-pointer"
                      aria-label="Share on LinkedIn"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* ── QUICK ANSWER BLOCK ──────────────────────────────────── */}
                <div
                  id="quick-answer"
                  className="bg-red-50/70 border-l-4 border-[#DC2626] p-6 rounded-r-2xl"
                >
                  <div className="flex items-center gap-2 mb-2 text-[#DC2626] font-black text-sm uppercase tracking-wide">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                    </svg>
                    <span>Quick Answer: Telegram Trading Scam Legal Recovery in India</span>
                  </div>
                  <p className="text-slate-800 text-sm md:text-base leading-relaxed font-medium">
                    Victims of Telegram stock trading, fake institutional institutional placement, or cryptocurrency scams can legally recover misappropriated funds by serving an advocate-drafted statutory legal notice under Section 318(4) of the Bharatiya Nyaya Sanhita, 2023 (BNS), Section 66D of the Information Technology Act, 2000, and Section 106 of the Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS). Serving formal legal demand notices upon recipient mule account holders, intermediary banks, and payment aggregators mandates immediate debit freezes on tainted balances under Reserve Bank of India (RBI) anti-money laundering circulars. Victims can subsequently file a summary restitution application under Section 503 of the BNSS before the jurisdictional Chief Judicial Magistrate to obtain formal court orders releasing the frozen funds directly back to the depositor’s original bank account.
                  </p>
                </div>

                {/* ── INFOGRAPHIC EMBED ──────────────────────────────────── */}
                <div className="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900">
                  <img
                    src="/images/og/trading-scam-telegram.jpg"
                    alt="Infographic: Telegram Trading Scam Legal Notice and Fund Recovery Pipeline in India"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-3 bg-slate-900 text-center">
                    <p className="text-xs text-slate-300 font-medium">
                      Statutory Roadmap: From Cyber Crime Registration to Section 106 BNSS Bank Freezes and Section 503 BNSS Magistrate Refund Orders
                    </p>
                  </div>
                </div>

                {/* ── SECTION 1 ─────────────────────────────────────────── */}
                <section id="anatomy-of-scam" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    1. Anatomy of Telegram Trading Scams: Clone Apps &amp; Mule Rings
                  </h2>
                  <p className="text-slate-650 leading-relaxed text-sm md:text-base">
                    Organized financial cyber syndicates operate heavily across encrypted messaging applications, orchestrating sophisticated investment deceptions designed to exploit retail investors seeking abnormal market returns. The operational architecture of a Telegram trading scam typically unfolds across structured psychological and technological stages:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                      <div className="flex items-center gap-2 mb-2 font-black text-slate-900 text-sm">
                        <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">
                          A
                        </span>
                        <span>Institutional Impersonation &amp; VIP Channels</span>
                      </div>
                      <p className="text-xs text-slate-650 leading-relaxed">
                        Fraudsters impersonate SEBI-registered portfolio managers, global investment banks (such as Morgan Stanley, Goldman Sachs, or BlackRock), or reputed domestic brokerages. They populate public and private Telegram channels with thousands of automated bot accounts posting fabricated profit screenshots and forged regulatory certificates.
                      </p>
                    </div>
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                      <div className="flex items-center gap-2 mb-2 font-black text-slate-900 text-sm">
                        <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">
                          B
                        </span>
                        <span>Sideloaded APKs &amp; Manipulated Web Portals</span>
                      </div>
                      <p className="text-xs text-slate-650 leading-relaxed">
                        Victims are instructed to bypass Google Play Store and Apple App Store by installing sideloaded Android Application Packages (APKs) or registering on custom web portals. These applications simulate live market feeds via modified TradingView widgets, displaying fictitious multi-fold portfolio growth while no actual exchange transactions take place.
                      </p>
                    </div>
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                      <div className="flex items-center gap-2 mb-2 font-black text-slate-900 text-sm">
                        <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">
                          C
                        </span>
                        <span>Layered Mule Accounts &amp; P2P Channels</span>
                      </div>
                      <p className="text-xs text-slate-650 leading-relaxed">
                        Instead of depositing capital into SEBI-regulated Clearing Corporations (ICCL or NCL), victims are directed to make RTGS, IMPS, and UPI transfers to third-party individual or current accounts labeled as &quot;institutional liquidity providers&quot;. These are rented mule accounts opened using forged KYC credentials across Indian retail banks.
                      </p>
                    </div>
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                      <div className="flex items-center gap-2 mb-2 font-black text-slate-900 text-sm">
                        <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">
                          D
                        </span>
                        <span>The Exit Blockade: Tax &amp; Margin Extortion</span>
                      </div>
                      <p className="text-xs text-slate-650 leading-relaxed">
                        When the investor requests a partial or total capital withdrawal, the syndicate abruptly freezes the dashboard and demands 20% to 35% in upfront &quot;SEBI Capital Gains Tax&quot;, &quot;Foreign Exchange Clearance Surcharge&quot;, or &quot;VIP Unlocking Fees&quot;. Paying these sums yields zero payouts and deepens total financial loss.
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-650 leading-relaxed text-sm md:text-base">
                    Recognizing this deceptive architecture is vital for drafting an unassailable legal notice. Because funds move through domestic banking channels before offshore conversion into cryptocurrency (USDT), prompt statutory action targeting recipient banks and account holders provides the highest probability of complete financial restitution.
                  </p>
                </section>

                {/* ── SECTION 2 ─────────────────────────────────────────── */}
                <section id="statutory-framework" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    2. Statutory Framework: BNS, IT Act &amp; SEBI Regulations
                  </h2>
                  <p className="text-slate-650 leading-relaxed text-sm md:text-base">
                    A legally sound notice for Telegram investment fraud must invoke substantive criminal, cyber, and securities statutes to establish strict liability, fraudulent inducement, and regulatory violations:
                  </p>
                  <div className="space-y-4">
                    <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-slate-900">
                      <h3 className="font-extrabold text-slate-900 text-base mb-1">
                        Section 318(4) &amp; Section 316 of the Bharatiya Nyaya Sanhita, 2023 (BNS)
                      </h3>
                      <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                        Section 318(4) of the BNS (corresponding to Section 420 of the erstwhile Indian Penal Code) prescribes severe imprisonment up to seven years and mandatory fines for cheating and dishonestly inducing the delivery of property. Section 316 of the BNS prosecutes criminal breach of trust where entrusted investment capital is converted to personal use. Invoking these provisions in the legal notice establishes that all recipients of the funds acted in furtherance of a shared criminal conspiracy under Section 61(2) BNS.
                      </p>
                    </div>
                    <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-slate-900">
                      <h3 className="font-extrabold text-slate-900 text-base mb-1">
                        Section 66D of the Information Technology Act, 2000
                      </h3>
                      <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                        Section 66D establishes a dedicated criminal offense for &quot;cheating by personation by using computer resource&quot;, punishable with imprisonment up to three years and fine. This applies directly to Telegram channel administrators, bot creators, and fake website operators who falsely represent themselves as licensed SEBI brokers, research analysts, or registered institutional investment managers.
                      </p>
                    </div>
                    <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-slate-900">
                      <h3 className="font-extrabold text-slate-900 text-base mb-1">
                        SEBI Act, 1992 &amp; SEBI (PFUTP) Regulations, 2003
                      </h3>
                      <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                        Regulation 3 and Regulation 4 of the Securities and Exchange Board of India (Prohibition of Fraudulent and Unfair Trade Practices Relating to Securities Market) Regulations, 2003 strictly prohibit any person from employing manipulative or deceptive devices to induce the purchase or sale of securities. Operating unauthorized collective investment schemes or dispensing unregistered stock tips via social media violates Section 11AA and Section 12A of the SEBI Act, 1992, rendering all generated proceeds subject to disgorgement and impoundment under Section 11B.
                      </p>
                    </div>
                    <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-slate-900">
                      <h3 className="font-extrabold text-slate-900 text-base mb-1">
                        Prevention of Money Laundering Act, 2002 (PMLA)
                      </h3>
                      <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                        Under Section 3 of the PMLA, any person directly or indirectly involved in any process or activity connected with proceeds of crime—including concealment, possession, acquisition, or use—is guilty of money laundering. Beneficiary mule account holders cannot escape liability under the guise of being passive intermediaries once a formal statutory notice establishes the tainted origin of the funds.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 3 ─────────────────────────────────────────── */}
                <section id="mule-bank-liability" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    3. Beneficiary Mule Accounts: Notice to Account Holders
                  </h2>
                  <p className="text-slate-650 leading-relaxed text-sm md:text-base">
                    In almost all Telegram trading deceptions, the actual mastermind remains concealed behind virtual private networks (VPNs) and offshore identities. However, the domestic bank accounts into which the victim transferred funds are registered to identifiable Indian citizens and corporate entities. Serving a statutory legal demand notice directly to these beneficiary account holders is a potent legal tactic:
                  </p>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                    <h3 className="text-base font-black text-slate-900">
                      Strategic Objectives of Serving Legal Notice on Mule Account Holders:
                    </h3>
                    <ul className="space-y-3 text-xs md:text-sm text-slate-650">
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#DC2626] font-black text-base">•</span>
                        <span>
                          <strong>Elimination of the &quot;Bona Fide Third-Party&quot; Defense:</strong> Once served with an advocate legal notice citing specific Unique Transaction Reference (UTR) numbers and police complaint IDs, the account holder is officially stripped of any claim that they received the funds in good faith without notice of illicit origin.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#DC2626] font-black text-base">•</span>
                        <span>
                          <strong>Triggering Personal Civil and Criminal Liability:</strong> The notice demands immediate restitution of the precise sum within 7 to 15 days, warning that failure to refund triggers joint liability for criminal conspiracy under Section 61(2) BNS, cheating under Section 318(4) BNS, and civil suits for recovery with 18% per annum interest.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#DC2626] font-black text-base">•</span>
                        <span>
                          <strong>Pressure to Cooperate with Law Enforcement:</strong> Frequently, account holders who rented out their bank credentials for small commissions panic upon receiving formal advocate notices on official legal letterheads, prompting them to approach law enforcement, expose the syndicate coordinators, and surrender remaining funds.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#DC2626] font-black text-base">•</span>
                        <span>
                          <strong>Documentary Evidentiary Anchor for Court Attachment:</strong> The dispatched Speed Post A/D receipt and delivery tracking report constitute conclusive proof under Section 27 of the General Clauses Act, 1897 that formal demand was made prior to judicial attachment.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* ── SECTION 4 ─────────────────────────────────────────── */}
                <section id="bank-freezing-mandates" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    4. Bank Account Freezing under Section 106 BNSS &amp; RBI Directives
                  </h2>
                  <p className="text-slate-650 leading-relaxed text-sm md:text-base">
                    Financial institutions maintain a strict fiduciary and regulatory obligation to prevent their networks from being weaponized for cyber extortion and illegal money routing. When serving statutory legal notice on intermediary and beneficiary banks, the following operational and statutory mandates must be enforced:
                  </p>
                  <div className="space-y-4">
                    <div className="border border-slate-100 p-5 rounded-2xl bg-white shadow-xs">
                      <h3 className="font-extrabold text-slate-900 text-sm md:text-base mb-1">
                        Section 106 of the Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS)
                      </h3>
                      <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                        Section 106 of the BNSS empowers police officers and investigating agencies to seize or attach property found under circumstances creating suspicion of the commission of any offense. When a formal legal notice containing NCRP complaint numbers, UTR transaction logs, and advocate certification is delivered to the Bank’s Nodal Cyber Cell Officer, the bank is legally required to execute a temporary debit freeze (lien marking) on the target account balance to safeguard the disputed res pending judicial directives.
                      </p>
                    </div>
                    <div className="border border-slate-100 p-5 rounded-2xl bg-white shadow-xs">
                      <h3 className="font-extrabold text-slate-900 text-sm md:text-base mb-1">
                        RBI Master Direction on Customer Protection &amp; Zero Liability Framework
                      </h3>
                      <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                        Under RBI Circular RBI/2017-18/15 (Customer Protection – Limiting Liability of Customers in Unauthorised Electronic Banking Transactions), commercial banks and payment system operators are required to maintain 24x7 fraud monitoring systems. If a bank exhibits systemic negligence—such as permitting high-volume, suspicious transactions in newly opened accounts without enhanced KYC verification or ignoring immediate freeze requests—the bank forfeits safe-harbor protections and can be held liable before the RBI Ombudsman.
                      </p>
                    </div>
                    <div className="border border-slate-100 p-5 rounded-2xl bg-white shadow-xs">
                      <h3 className="font-extrabold text-slate-900 text-sm md:text-base mb-1">
                        The Indian Cyber Crime Coordination Centre (I4C) &amp; CFCFRMS Integration
                      </h3>
                      <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                        The Citizen Financial Cyber Fraud Reporting and Management System (CFCFRMS), accessible via helpline 1930, connects commercial banks, payment aggregators, and law enforcement in real time. Serving a legal notice simultaneously with an NCRP filing ensures that bank compliance teams trace the entire money trail—freezing Layer-1, Layer-2, and Layer-3 mule accounts before the syndicate converts the capital into cryptocurrency on foreign peer-to-peer exchanges.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 5 ─────────────────────────────────────────── */}
                <section id="telegram-intermediary-notice" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    5. Intermediary Liability: Notice to Telegram under IT Rules
                  </h2>
                  <p className="text-slate-650 leading-relaxed text-sm md:text-base">
                    While messaging platforms frequently invoke &quot;safe harbor&quot; immunity under Section 79 of the Information Technology Act, 2000, that protection is strictly conditional and subject to active compliance with the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021:
                  </p>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                    <h3 className="text-base font-black text-slate-900">
                      Enforcing Platform Due Diligence &amp; Safe Harbor Forfeiture:
                    </h3>
                    <ul className="space-y-3 text-xs md:text-sm text-slate-650">
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#DC2626] font-black text-base">•</span>
                        <span>
                          <strong>Rule 3(1)(b) Due Diligence Mandate:</strong> Intermediaries are legally prohibited from knowingly hosting, displaying, or transmitting content that deceives or misleads users regarding financial products, impersonates registered entities, or promotes unlawful securities schemes.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#DC2626] font-black text-base">•</span>
                        <span>
                          <strong>Statutory 24-Hour / 36-Hour Take-Down Obligation:</strong> Under Section 79(3)(b) of the IT Act, once an intermediary receives &quot;actual knowledge&quot; via court order or formal legal notification from an authorized party detailing illegal activity, the platform must expeditiously remove or disable access to the infringing channels, bots, and group links.
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#DC2626] font-black text-base">•</span>
                        <span>
                          <strong>Preservation of Basic Subscriber Info (BSI) &amp; IP Logs:</strong> Serving a statutory legal notice upon Telegram’s Resident Grievance Officer legally compels the platform to preserve administrator IP registration logs, SIM card binding records, device identifiers, and chat history for a mandatory period of 180 days under Rule 3(1)(h) of the IT Rules for submission to investigating officers.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* ── SECTION 6 ─────────────────────────────────────────── */}
                <section id="digital-evidence-checklist" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    6. Digital Evidence Preservation Checklist under Section 63 BSA
                  </h2>
                  <p className="text-slate-650 leading-relaxed text-sm md:text-base">
                    Electronic evidence is volatile. Cyber fraudsters routinely delete Telegram channels, wipe chat logs, or terminate cloned servers once an investor demands withdrawals. To ensure that your legal notice and subsequent court filings possess decisive probative value, compile evidence strictly in accordance with Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA):
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-slate-200 bg-white">
                      <div className="text-xs font-black text-[#DC2626] uppercase tracking-wider mb-1">
                        Category 1
                      </div>
                      <h4 className="font-extrabold text-slate-900 text-sm mb-2">
                        Banking &amp; Financial Transaction Logs
                      </h4>
                      <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                        <li>Original bank statements showing debit timestamps &amp; narration</li>
                        <li>Exact Unique Transaction Reference (UTR) / IMPS reference numbers</li>
                        <li>Beneficiary account numbers, IFSC codes, and account holder names</li>
                        <li>UPI Transaction IDs and Virtual Payment Addresses (VPAs)</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-xl border border-slate-200 bg-white">
                      <div className="text-xs font-black text-[#DC2626] uppercase tracking-wider mb-1">
                        Category 2
                      </div>
                      <h4 className="font-extrabold text-slate-900 text-sm mb-2">
                        Telegram Channel &amp; Admin Metadata
                      </h4>
                      <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                        <li>Telegram group invite links (t.me/...) and channel ID numbers</li>
                        <li>Admin user handles (@username), display names, and phone numbers</li>
                        <li>Full chat export in HTML/JSON format preserving timestamps</li>
                        <li>Screenshots of promises, fake profit leaderboards, and trading signals</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-xl border border-slate-200 bg-white">
                      <div className="text-xs font-black text-[#DC2626] uppercase tracking-wider mb-1">
                        Category 3
                      </div>
                      <h4 className="font-extrabold text-slate-900 text-sm mb-2">
                        Fraudulent App &amp; Website Artifacts
                      </h4>
                      <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                        <li>Downloaded APK installation file and SHA-256 cryptographic hash</li>
                        <li>Complete website URLs, domain registration details, and host IP</li>
                        <li>Screenshots of fabricated user dashboard showing inflated balances</li>
                        <li>Demands for tax payments, unlocking fees, or withdrawal penalties</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-xl border border-slate-200 bg-white">
                      <div className="text-xs font-black text-[#DC2626] uppercase tracking-wider mb-1">
                        Category 4
                      </div>
                      <h4 className="font-extrabold text-slate-900 text-sm mb-2">
                        Statutory Section 63 BSA Electronic Certificate
                      </h4>
                      <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                        <li>Affidavit describing the device make, model, OS, and serial number</li>
                        <li>Verification that electronic device operated under lawful control</li>
                        <li>Hash verification confirming no alteration or tampering of records</li>
                        <li>Endorsement by the legal advocate representing the recovery claim</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 7 ─────────────────────────────────────────── */}
                <section id="magistrate-refund-roadmap" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    7. Magistrate Court Recovery: Section 503 BNSS De-Freezing Petitions
                  </h2>
                  <p className="text-slate-650 leading-relaxed text-sm md:text-base">
                    A common misconception among fraud victims is that once cyber police or banks freeze suspect accounts, the money is automatically refunded. Under Indian criminal jurisprudence, frozen funds represent &quot;muddamal&quot; (case property / proceeds of crime) and can only be lawfully released pursuant to a judicial order:
                  </p>
                  <div className="space-y-4">
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                      <h3 className="font-extrabold text-slate-900 text-base mb-2">
                        The Section 503 BNSS (Erstwhile Section 457 CrPC) Judicial Procedure:
                      </h3>
                      <ol className="space-y-3 text-xs md:text-sm text-slate-650 list-decimal list-inside">
                        <li>
                          <strong>Identification of Frozen Quantum:</strong> Through the cyber police station handling your NCRP complaint, obtain the official status report specifying which beneficiary bank accounts have been debit-frozen and the exact balance secured.
                        </li>
                        <li>
                          <strong>Drafting and Filing the De-Freezing Petition:</strong> An advocate files an application under Section 503 BNSS before the Chief Judicial Magistrate (CJM) or Metropolitan Magistrate having territorial jurisdiction over the police station or bank branch.
                        </li>
                        <li>
                          <strong>Proof of Unbroken Audit Trail:</strong> The petition attaches the advocate legal notice, UTR bank receipts, and Section 63 BSA electronic certificate proving that funds deposited by the victim directly constitute the frozen balance in the mule account.
                        </li>
                        <li>
                          <strong>Execution of Indemnity Bond (Supurdnama):</strong> The court directs the petitioner to execute a solvent surety or indemnity bond undertaking to produce the amount if any rival legitimate claim arises.
                        </li>
                        <li>
                          <strong>Judicial Directive to Bank Manager:</strong> The Magistrate issues a binding court order directing the branch manager of the holding bank to debit the frozen proceeds and credit them directly into the victim’s verified source savings account.
                        </li>
                      </ol>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 8 ─────────────────────────────────────────── */}
                <section id="comparative-remedies-table" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    8. Comparative Legal Matrix: Civil, Criminal &amp; Regulatory Remedies
                  </h2>
                  <p className="text-slate-650 leading-relaxed text-sm md:text-base">
                    Recovering capital lost in Telegram trading scams requires an integrated, multi-forum approach. The table below details the available statutory pathways, target respondents, typical timeframes, and recovery efficacy:
                  </p>
                  <div className="overflow-x-auto my-4">
                    <table className="w-full border-collapse border border-slate-200 text-left text-xs md:text-sm">
                      <thead>
                        <tr className="bg-slate-900 text-white font-extrabold">
                          <th className="p-3.5 border border-slate-700">Legal Pathway</th>
                          <th className="p-3.5 border border-slate-700">Governing Statute</th>
                          <th className="p-3.5 border border-slate-700">Primary Target</th>
                          <th className="p-3.5 border border-slate-700">Expected Timeline</th>
                          <th className="p-3.5 border border-slate-700">Strategic Impact</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-slate-700">
                        <tr className="hover:bg-slate-50">
                          <td className="p-3.5 font-bold text-slate-900">
                            Statutory Legal Demand Notice
                          </td>
                          <td className="p-3.5">
                            BNS § 318(4), IT Act § 66D, BNSS § 106
                          </td>
                          <td className="p-3.5">Mule Account Holders &amp; Bank Nodal Officers</td>
                          <td className="p-3.5 font-semibold text-[#DC2626]">Immediate (24–48 Hrs)</td>
                          <td className="p-3.5">
                            Places banks on strict legal notice; triggers immediate debit freezes; prevents further fund layering.
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50 bg-slate-50/50">
                          <td className="p-3.5 font-bold text-slate-900">
                            National Cyber Crime Portal (1930 / NCRP)
                          </td>
                          <td className="p-3.5">
                            IT Act § 70B &amp; MHA CFCFRMS Framework
                          </td>
                          <td className="p-3.5">Intermediary Banking Nodes &amp; Wallets</td>
                          <td className="p-3.5 font-semibold text-[#DC2626]">2 to 7 Days</td>
                          <td className="p-3.5">
                            Inter-bank automated hold mechanism to freeze Layer-1 and Layer-2 accounts across financial networks.
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-3.5 font-bold text-slate-900">
                            Magistrate Refund Application
                          </td>
                          <td className="p-3.5">
                            Section 503 BNSS (Erstwhile § 457 CrPC)
                          </td>
                          <td className="p-3.5">Holding Bank Branch &amp; Seized Accounts</td>
                          <td className="p-3.5 font-semibold text-slate-900">30 to 90 Days</td>
                          <td className="p-3.5">
                            Judicially enforceable court order compelling banks to remit frozen funds back to the victim.
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50 bg-slate-50/50">
                          <td className="p-3.5 font-bold text-slate-900">
                            Summary Civil Recovery Suit
                          </td>
                          <td className="p-3.5">
                            Order 37, Code of Civil Procedure, 1908
                          </td>
                          <td className="p-3.5">Identified Mule Operators &amp; Corporate Entities</td>
                          <td className="p-3.5 font-semibold text-slate-900">6 to 12 Months</td>
                          <td className="p-3.5">
                            Secures enforceable monetary decree with 18% p.a. interest; enables attachment of immovable assets.
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-3.5 font-bold text-slate-900">
                            SEBI SCORES &amp; Regulatory Disgorgement
                          </td>
                          <td className="p-3.5">
                            SEBI Act § 11B &amp; PFUTP Regulations
                          </td>
                          <td className="p-3.5">Unregistered Investment Advisors &amp; Entities</td>
                          <td className="p-3.5 font-semibold text-slate-900">3 to 6 Months</td>
                          <td className="p-3.5">
                            Regulatory impoundment of illegal advisory proceeds; nationwide debarment of offending entities.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* ── SECTION 9: FAQS ──────────────────────────────────── */}
                <section id="faqs" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    9. Frequently Asked Questions
                  </h2>
                  <div className="space-y-3">
                    {faqs.map((faq, idx) => {
                      const isOpen = expandedFaqs.includes(`faq-${idx}`);
                      return (
                        <div
                          key={idx}
                          className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-white"
                        >
                          <button
                            onClick={() => toggleFaq(idx)}
                            className="w-full text-left p-4 md:p-5 flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors"
                          >
                            <span className="font-extrabold text-slate-900 text-sm md:text-base">
                              {faq.question}
                            </span>
                            <span
                              className={`transform transition-transform duration-200 text-[#DC2626] font-black text-lg ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                            >
                              ▼
                            </span>
                          </button>
                          {isOpen && (
                            <div className="px-4 pb-5 md:px-5 text-slate-650 text-xs md:text-sm leading-relaxed border-t border-slate-100 pt-3">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* ── SECTION 10: CITATIONS / AUTHORITY SOURCING ──────── */}
                <section className="border-t border-slate-200 pt-8 space-y-4">
                  <h3 className="text-base font-black text-slate-900 uppercase tracking-wider">
                    Authoritative Legal Sources &amp; Statutory References
                  </h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-600">
                    <span className="font-medium">National Cyber Crime Reporting Portal (MHA)</span>
                    <span className="text-slate-300">•</span>
                    <span className="font-medium">Securities and Exchange Board of India (SEBI)</span>
                    <span className="text-slate-300">•</span>
                    <span className="font-medium">Reserve Bank of India Master Directions</span>
                    <span className="text-slate-300">•</span>
                    <span className="font-medium">Information Technology Act, 2000 (India Code)</span>
                    <span className="text-slate-300">•</span>
                    <span className="font-medium">Bharatiya Nyaya Sanhita, 2023 &amp; BNSS, 2023</span>
                    <span className="text-slate-300">•</span>
                    <span className="font-medium">Supreme Court of India Case Judgments</span>
                  </div>
                </section>

                {/* ── TOPICAL AUTHORITY (INTERNAL INTERLINKING) ──────────── */}
                <section className="border-t border-slate-200 pt-8 space-y-6">
                  <h2 className="text-xl md:text-2xl font-black text-slate-900">
                    More Cyber Fraud &amp; Financial Recovery Guides
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        title: 'How to Recover Money Stuck in Online Cyber Fraud',
                        href: '/how-to-recover-money-stuck-in-online-cyber-fraud',
                      },
                      {
                        title: 'Recover Money from Online Shopping Scams in India',
                        href: '/send-a-legal-notice/recover-money-from-online-shopping-scam-india',
                      },
                      {
                        title: 'Legal Notice to Bank for Unauthorized ECS / NACH Debit Reversal',
                        href: '/legal-notice-to-bank-unauthorized-ecs-nach-debit-reversal',
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
                        title: 'Statutory Limitation Period for Money Recovery Cases in India',
                        href: '/time-limit-to-file-money-recovery-case-india',
                      },
                      {
                        title: 'Legal Notice to Business Partner for Cheating & Fraud',
                        href: '/send-a-legal-notice/recover-money-from-business-partner-cheating-india',
                      },
                      {
                        title: 'Legal Notice to Bank for Unpaid Dues Recovery',
                        href: '/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues',
                      },
                      {
                        title: 'Legal Notice for Recovery of Money (Standard Format)',
                        href: '/legal-notice-for-recovery-of-money',
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
                    Legal Recovery is India&apos;s premier tech-enabled legal notice and financial dispute resolution platform, connecting victims of digital financial crime, Telegram investment syndicates, corporate defaults, and contractual breaches with experienced panel advocates for swift, statutory legal notices and court-approved restitution at flat, transparent fees. Having facilitated ₹100 Crore+ in asset recoveries across 10,000+ cases throughout India, Legal Recovery combines procedural rigor with rapid digital execution.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { label: 'Send a Legal Notice', href: '/send-a-legal-notice' },
                      { label: 'Cyber Fraud Recovery', href: '/recovery/cyber-fraud-money' },
                      { label: 'Bank Transfer Fraud Recovery', href: '/recovery/bank-transfer-fraud-amount' },
                      { label: 'UPI Fraud Recovery', href: '/recovery/upi-fraud-amount' },
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
                  Trapped in a Telegram Trading Scam?
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  Act within the golden hour. Send an advocate-vetted statutory legal notice to freeze recipient mule bank accounts before funds are siphoned off.
                </p>
                <button
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-extrabold py-3 px-4 rounded-xl transition-all text-sm cursor-pointer"
                >
                  Draft &amp; Send Notice Now
                </button>
                <p className="text-center text-slate-400 text-[10px] mt-3">
                  Flat fee • Advocate-drafted • Same-day dispatch
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
                  <span className="text-slate-400 text-xs">/5 (418 reviews)</span>
                </div>

                {/* Review card — must match JSON-LD Product > Review word-for-word */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#DC2626]/10 flex items-center justify-center font-black text-[#DC2626] text-xs">
                      SM
                    </div>
                    <div>
                      <p className="font-extrabold text-slate-900 text-xs">Dr. Siddharth Menon</p>
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
                  { stat: '84%', label: 'Of frozen accounts secured within first 48 hours' },
                  { stat: '₹100CR+', label: 'Total financial recovery facilitated across India' },
                  { stat: 'Same Day', label: 'Advocate notice drafting and statutory dispatch' },
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
