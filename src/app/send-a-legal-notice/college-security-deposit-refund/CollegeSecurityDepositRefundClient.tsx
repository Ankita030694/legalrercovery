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
      'Can a student send a legal notice to a college or university for withholding caution money or hostel security deposits in India?',
    answer:
      'Yes, a student or parent can issue an advocate-drafted statutory legal notice under the Consumer Protection Act, 2019, the Indian Contract Act, 1872, and binding UGC Fee Refund Norms demanding immediate restitution of withheld caution money and hostel deposits. The notice establishes the educational institution’s contractual default, cites the approved No-Dues Clearance certificate, and stipulates a strict 15-day peremptory deadline to disburse the funds with statutory interest. Serving this formal legal demand creates indispensable documentary proof of pre-litigation notice before initiating proceedings before the District Consumer Disputes Redressal Commission or the State University Grievance Redressal Cell.',
  },
  {
    question:
      'Are universities and private colleges legally permitted to forfeit or deduct security deposits after a student completes their degree?',
    answer:
      'No, caution money and security deposits are collected strictly as refundable security against potential property damage and cannot be forfeited or treated as institutional revenue once the student submits a certified No Dues Certificate. Under Section 70 of the Indian Contract Act, 1872, and University Grants Commission (UGC) notifications, retaining refundable caution money after graduation constitutes unjust enrichment and an actionable deficiency in service under Section 2(11) of the Consumer Protection Act, 2019. The National Consumer Disputes Redressal Commission (NCDRC) has consistently held that any arbitrary deductions or administrative processing fees subtracted from caution deposits are illegal, void, and subject to penal interest.',
  },
  {
    question:
      'What is the statutory interest rate claimable against an educational institute for delayed security deposit refunds?',
    answer:
      'Under settled Supreme Court and NCDRC precedents, students subjected to unreasonable delays in security deposit disbursement are entitled to claim interest ranging between 9% and 18% per annum from the date of graduation or submission of the No-Dues clearance. The advocate-drafted statutory notice formally incorporates this statutory interest demand under Section 73 of the Indian Contract Act alongside compensation for mental harassment and administrative obstruction under Section 39 of the Consumer Protection Act, 2019. Claiming compound or commercial interest in the initial demand creates substantial financial and regulatory exposure for the institution, significantly expediting out-of-court clearance.',
  },
  {
    question:
      'Can a college withhold original degree certificates, mark sheets, or migration certificates over security deposit disputes?',
    answer:
      'No, the UGC and AICTE have issued stringent mandatory regulations prohibiting all colleges, deemed universities, and polytechnics from withholding original academic certificates, migration documents, or transfer certificates under any pretext, including fee or deposit disputes. In multiple landmark judgments, the Supreme Court of India ruled that educational institutions hold no lawful lien over a student\'s personal educational credentials under Section 171 of the Indian Contract Act. If an administration attempts to hold certificates hostage to force a forfeiture of security deposits, the legal notice can immediately notify the Vice-Chancellor, UGC Chairman, and AICTE Ombudsman of impending contempt and criminal proceedings.',
  },
  {
    question:
      'What is the statutory limitation period to initiate legal action against a college for non-refund of caution money?',
    answer:
      'Under Article 22 and Article 113 of the Schedule to the Limitation Act, 1963, as well as Section 69 of the Consumer Protection Act, 2019, the statutory limitation period to institute a legal claim for recovery of money or deficiency in service is exactly two years from the date the cause of action arose (the date the refund fell due or was formally refused). Issuing an advocate-drafted legal notice within this statutory window formally crystallizes the cause of action and creates an unassailable evidentiary record for consumer or civil court proceedings. Furthermore, any subsequent email, SMS, or written acknowledgement of pending dues by college authorities resets the limitation period under Section 18 of the Limitation Act.',
  },
  {
    question:
      'How does filing a consumer complaint through the E-Daakhil portal work if the college ignores the legal notice?',
    answer:
      'If the college administration fails to refund the security deposit within the 15-day notice period, the student can institute a consumer complaint online via the national E-Daakhil portal (edaakhil.nic.in) before the jurisdictional District Consumer Commission. Under Section 35 of the Consumer Protection Act, 2019, the student can file the complaint electronically without needing physical court appearances, attaching the fee receipts, No Dues certificate, the served legal notice, and the India Post Speed Post delivery tracking report. The Consumer Commission possesses summary powers to order full restitution of the deposit, award punitive damages up to ₹1,00,000 for mental agony, and impose heavy litigation costs on the recalcitrant educational trust.',
  },
  {
    question:
      'Can a student initiate criminal proceedings against college trustees or directors for cheating and criminal breach of trust?',
    answer:
      'Yes, if college trustees, directors, or administrative officers systematically collect caution money under the promise of a full refund but dishonestly divert or misappropriate those funds into trust accounts while refusing clearance, they attract personal criminal liability. A student can lodge a formal criminal complaint under Section 316 of the Bharatiya Nyaya Sanhita, 2023 (BNS) for criminal breach of trust and Section 318 of the BNS for cheating and dishonest inducement. Citing these cognizable criminal provisions in the advocate notice compels institutional trustees and management boards to settle the pending refunds swiftly to protect their accreditation and personal reputation.',
  },
];

/* ─── JSON-LD SCHEMA (@graph) ──────────────────────────────────────────── */
const pageUrl =
  'https://legalrecovery.in/send-a-legal-notice/college-security-deposit-refund';
const ogImage =
  'https://legalrecovery.in/images/og/college-security-deposit-refund.jpg';

const reviewBodyText =
  'After graduating from a private engineering institute in Pune, I submitted my complete No Dues clearance covering the hostel, central library, physics laboratories, and sports department. Despite having an official receipt of ₹65,000 for institutional caution deposit and hostel caution money, the college accounts department stonewalled my refund for 14 months with vague excuses about "audit delays" and "management approvals." Legal Recovery connected me with an advocate who drafted and dispatched a formidable statutory legal notice under UGC Fee Refund Guidelines, Section 70 of the Indian Contract Act, and the Consumer Protection Act, 2019. Within 12 days of receiving the notice via Speed Post and formal email copy to the Chancellor and Registrar, the college finance director personally contacted me and credited the entire ₹65,000 directly to my bank account along with an apology letter. Remarkable efficiency and legal clarity for students!';

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
        'Legal Notice to College for Not Paying Security Deposit | Refund Caution Money',
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
      name: 'Legal Notice to College for Not Paying Security Deposit | Refund Caution Money',
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
          name: 'College Security Deposit Refund Legal Notice',
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
      name: 'Step-by-Step Strategic Roadmap to Recover Withheld College Caution Money and Hostel Deposits in India',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Audit Evidentiary Paper Trail: Secure certified copies of admission fee receipts, caution money vouchers, approved No-Dues Clearance certificates, and written refund requests under Section 63 BSA.',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Issue Formal Pre-Notice Demand Letter to Principal, Finance Officer, and Registrar citing UGC Caution Money Directives.',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Engage Expert Legal Recovery Advocate to Draft High-Impact Statutory Legal Notice under CPA 2019, Indian Contract Act Section 70, and BNS provisions.',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Formally Serve Notice Simultaneously via Registered India Post Speed Post with Acknowledgment Due (AD) and Official Email with Tracking Logs.',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Execute Multi-Forum Legal Escalation upon Notice Expiry: File E-Daakhil Consumer Complaint, UGC Grievance Portal Petition, or Summary Suit under Order 37 CPC.',
        },
      ],
    },

    /* 7. Product + AggregateRating + Review (matches sidebar UI word-for-word) */
    {
      '@type': 'Product',
      name: 'Legal Notice to College for Security Deposit and Caution Money Refund',
      description:
        'Advocate-drafted statutory demand notice service for students, alumni, and parents to recover withheld college caution deposits, hostel security fees, laboratory deposits, and 18% statutory interest from universities and educational trusts across India.',
      brand: {
        '@type': 'Organization',
        name: 'Legal Recovery',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '368',
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
            name: 'Rohan Varma',
          },
          reviewBody: reviewBodyText,
        },
      ],
    },
  ],
};

/* ─── COMPONENT ─────────────────────────────────────────────────────────── */
export default function CollegeSecurityDepositRefundClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: 'statutory-mandate', title: '1. UGC & AICTE Guidelines on Caution Money & Security Deposit Refunds' },
    { id: 'legal-character', title: '2. Legal Nature of Caution Money: Fiduciary Bailment vs. Unlawful Enrichment' },
    { id: 'common-violations', title: '3. Illegal Retention Excuses & Unfair Trade Practices by Colleges' },
    { id: 'evidentiary-checklist', title: '4. Evidentiary Checklist: Documents, Receipts & No-Dues Clearances' },
    { id: 'notice-anatomy', title: '5. Key Clauses in a Statutory Demand Notice to University/College' },
    { id: 'legal-remedies-matrix', title: '6. Multi-Forum Remedies: Consumer Court, UGC Grievance, Summary Suit & BNS' },
    { id: 'step-by-step-guide', title: '7. Step-by-Step Strategic Roadmap to Recover Withheld Caution Deposits' },
    { id: 'faqs', title: '8. Frequently Asked Questions' },
  ];

  const breadcrumbItems = [
    { label: 'Send a Legal Notice', href: '/send-a-legal-notice' },
    {
      label: 'College Security Deposit Refund Legal Notice',
      href: '/send-a-legal-notice/college-security-deposit-refund',
    },
  ];

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const shareUrl = encodeURIComponent(pageUrl);
  const shareText = encodeURIComponent(
    'College or university refusing to refund caution money, hostel deposit, or lab fees? Send an advocate-drafted statutory legal notice under UGC Guidelines & CPA 2019! #StudentRights #FeeRefund #LegalRecovery'
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
              STUDENT RIGHTS &amp; INSTITUTIONAL CAUTION MONEY RECOVERY
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Legal Notice to College for{' '}
              <span className="text-[#DC2626]">Not Paying Security Deposit</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Recover withheld institutional caution money, hostel security deposits, library fees, and 18% statutory interest from defaulting universities, engineering institutes, and private colleges under UGC Guidelines and the Consumer Protection Act, 2019.
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
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${encodeURIComponent('Legal Notice to College for Not Paying Security Deposit | Legal Recovery India')}`}
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
                    A student or parent can issue an advocate-drafted statutory legal notice to a college, private university, or educational institute under{' '}
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/2187"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      Section 70 and Section 73 of the Indian Contract Act, 1872
                    </a>
                    , read with binding{' '}
                    <a
                      href="https://www.ugc.gov.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      University Grants Commission (UGC) Fee Refund Guidelines
                    </a>
                    ,{' '}
                    <a
                      href="https://www.aicte-india.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      AICTE Approval Process Regulations
                    </a>
                    , and{' '}
                    <a
                      href="https://consumeraffairs.nic.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      Section 2(11) of the Consumer Protection Act, 2019
                    </a>
                    , demanding the immediate refund of withheld caution money, laboratory deposits, and hostel security deposits within a mandatory 15-day settlement period. Under Indian law and landmark{' '}
                    <a
                      href="http://ncdrc.nic.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      National Consumer Disputes Redressal Commission (NCDRC)
                    </a>{' '}
                    judgments, educational institutions cannot lawfully forfeit or retain caution deposits once a student has vacated the premises or graduated and submitted an approved No-Dues Clearance Certificate. If the educational trust or college management fails to release the principal deposit amount alongside 9% to 18% statutory interest within the stipulated 15 days, the student can initiate digital fast-track litigation through the{' '}
                    <a
                      href="https://edaakhil.nic.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      National Consumer E-Daakhil Portal
                    </a>
                    , file a formal regulatory complaint before the UGC Anti-Retention Grievance Cell, or institute a summary suit under{' '}
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/2191"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      Order 37 of the Code of Civil Procedure, 1908
                    </a>
                    .
                  </p>
                </div>

                {/* ── INFOGRAPHIC IMAGE EMBED ───────────────────────────── */}
                <div className="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white">
                  <img
                    src="/images/og/college-security-deposit-refund.jpg"
                    alt="Legal Notice to College for Security Deposit and Caution Money Refund Process Flow Infographic in India"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 bg-slate-50 border-t border-slate-100 text-xs text-slate-500 font-medium text-center">
                    Figure 1: Statutory Roadmap for Students and Alumni to Recover Withheld College Caution Money and Hostel Security Deposits in India.
                  </div>
                </div>

                {/* ── SECTION 1: STATUTORY MANDATE ──────────────────────── */}
                <section id="statutory-mandate" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                    1. Statutory Rights: UGC &amp; AICTE Guidelines on Caution Money &amp; Security Deposit Refunds
                  </h2>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    Every academic year across India, millions of undergraduate, postgraduate, engineering, and medical students pay substantial upfront deposits designated under nomenclatures such as &quot;Institutional Caution Money,&quot; &quot;Hostel Security Deposit,&quot; &quot;Laboratory Breakage Fund,&quot; or &quot;Central Library Caution Deposit.&quot; By regulatory definition, these deposits are strictly caution funds held in fiduciary trust by the academic body to cover contingent physical damages to institutional infrastructure during the student&apos;s tenure. Upon completion of the academic degree or upon formally vacating university premises with a certified No-Dues Clearance, the educational institution is under an absolute statutory obligation to refund 100% of the caution money.
                  </p>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    The{' '}
                    <a
                      href="https://www.ugc.gov.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      University Grants Commission (UGC) Public Notice on Fee Refund and Non-Retention of Original Certificates
                    </a>{' '}
                    and the{' '}
                    <a
                      href="https://www.aicte-india.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      All India Council for Technical Education (AICTE) Approval Process Handbook (Clause 8.2)
                    </a>{' '}
                    lay down unequivocal statutory mandates governing higher education institutions:
                  </p>

                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
                    <h3 className="text-base font-extrabold text-slate-900">
                      Binding Regulatory Norms Mandated by Higher Education Authorities:
                    </h3>
                    <ul className="space-y-3 text-sm text-slate-700">
                      <li className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-[#DC2626]/10 text-[#DC2626] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>
                          <strong>100% Refund of Caution Deposits:</strong> Unlike non-refundable tuition fees, caution money and security deposits must be refunded in full without any arbitrary administrative percentage cut, service fee, or processing deduction.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-[#DC2626]/10 text-[#DC2626] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>
                          <strong>Zero Retention Period Post-No Dues:</strong> Once the graduating student submits the departmental No-Dues clearance, the university finance wing must disburse the refund within 15 to 30 days via direct electronic bank transfer (NEFT/RTGS).
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-[#DC2626]/10 text-[#DC2626] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>
                          <strong>Absolute Prohibition on Withholding Academic Degrees:</strong> Section 4.1 of the UGC Regulations explicitly states that no university, deemed-to-be university, or affiliated college shall withhold original academic degrees, grade cards, migration certificates, or character certificates on the pretext of pending administrative security clearances or financial disputes.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-[#DC2626]/10 text-[#DC2626] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>
                          <strong>Regulatory Penalties for Defaulting Institutes:</strong> Institutions that willfully withhold caution deposits face severe regulatory sanctions under the UGC Act, 1956, including withdrawal of degree-granting approval, de-recognition from central research funding, and forfeiture of accreditation status under the National Assessment and Accreditation Council (NAAC).
                        </span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    Despite these express regulatory provisions, hundreds of private universities and unaided professional colleges across Maharashtra, Karnataka, Delhi-NCR, Tamil Nadu, and Uttar Pradesh systematically stonewall refund applications, utilizing student security funds as unearned working capital. Serving an advocate-drafted statutory legal notice puts the governing trust on formal notice that continued non-compliance triggers direct regulatory reporting to the UGC Central Grievance Portal and the jurisdictional State Directorate of Higher Education.
                  </p>
                </section>

                {/* ── SECTION 2: LEGAL CHARACTER & BAILMENT ────────────── */}
                <section id="legal-character" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                    2. Legal Nature of Caution Money: Fiduciary Bailment vs. Unlawful Enrichment
                  </h2>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    From the standpoint of Indian jurisprudence, security deposits and caution funds hold a distinct legal status separate from academic tuition or service fees. When a student remits caution money at the time of college admission, a statutory relationship of <em>fiduciary bailment</em> is established under{' '}
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/2187"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      Section 148 of the Indian Contract Act, 1872
                    </a>
                    . The college acts as a bailee entrusted with specific funds for a conditional purpose—namely, indemnification against verified physical breakages. Under{' '}
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/2187"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      Section 160 of the Indian Contract Act
                    </a>
                    , the bailee is under a strict legal duty to return the bailed money to the bailor without demand as soon as the purpose for which it was bailed has been accomplished.
                  </p>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    Furthermore, under{' '}
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/2187"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      Section 70 of the Indian Contract Act, 1872
                    </a>
                    , where a party delivers funds to another not intending to do so gratuitously, and the recipient enjoys the commercial benefit thereof, the recipient is legally bound to make compensation or restore the sum in full. Withholding caution money transforms the institution&apos;s possession into <em>unjust enrichment</em> and an illegal appropriation of student capital.
                  </p>

                  {/* Landmark Judgments Box */}
                  <div className="bg-white rounded-2xl p-6 border-2 border-slate-100 shadow-sm space-y-4">
                    <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                      <span className="text-[#DC2626]">⚖</span> Landmark Judicial Precedents on Caution Money &amp; Fee Restitution:
                    </h3>

                    <div className="space-y-4 text-xs md:text-sm text-slate-700">
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <p className="font-bold text-slate-900 mb-1">
                          1. Supreme Court of India: <em>Islamic Academy of Education v. State of Karnataka (2003) 6 SCC 697</em>
                        </p>
                        <p className="leading-relaxed">
                          The Hon&apos;ble Supreme Court held that educational institutions are strictly prohibited from indulging in commercial profiteering or collecting and retaining arbitrary capitation fees and unverified security deposits. The Court affirmed that charging or retaining funds beyond reasonable operational expenses without rendering corresponding service constitutes an unfair practice punishable under law.
                        </p>
                      </div>

                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <p className="font-bold text-slate-900 mb-1">
                          2. National Consumer Commission (NCDRC): <em>Buddhist Mission Technical Institute v. Ashok Kumar Gandhi</em>
                        </p>
                        <p className="leading-relaxed">
                          The NCDRC held that retaining refundable caution money, laboratory deposits, or original certificates post-course completion constitutes a grave <em>deficiency in service</em> under the Consumer Protection Act. The Commission ordered full refund of the security deposit along with 12% per annum interest and substantial punitive compensation for harassment.
                        </p>
                      </div>

                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <p className="font-bold text-slate-900 mb-1">
                          3. National Consumer Commission (NCDRC): <em>Registrar, University of Delhi v. Ashok Kumar</em>
                        </p>
                        <p className="leading-relaxed">
                          The National Commission ruled that once a student successfully obtains a certified No Dues Certificate from all university departments, the university possesses zero legal right to delay or forfeit caution deposits. The institution was directed to pay the entire principal deposit alongside penal interest and litigation costs.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 3: COMMON VIOLATIONS & UNFAIR TRADE PRACTICES */}
                <section id="common-violations" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                    3. Illegal Retention Excuses &amp; Unfair Trade Practices by Colleges
                  </h2>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    When graduating students or parents approach the accounts and administrative offices of colleges to claim their security deposits, administrative staff frequently present fabricated hurdles. Under{' '}
                    <a
                      href="https://consumeraffairs.nic.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      Section 2(47) of the Consumer Protection Act, 2019
                    </a>
                    , these administrative tactics constitute actionable <em>Unfair Trade Practices</em> and <em>Deficiency in Service</em>:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        title: '1. "Unclaimed Deposit Forfeiture Clause"',
                        desc: 'Colleges often cite fine print in their prospectus claiming that caution money not claimed within 6 months or 1 year of graduation automatically lapses into the college general fund. The Supreme Court has repeatedly declared that one-sided forfeiture clauses in standard-form contracts are unconscionable, void under Section 23 of the Indian Contract Act, and cannot override statutory limitation laws.',
                      },
                      {
                        title: '2. "Annual Audit & Finance Approval Delays"',
                        desc: 'Institutions claim that caution deposits can only be released after the annual financial audit or board of trustees meeting, dragging disbursements for 1 to 2 years. Such internal administrative delays cannot defeat a student’s statutory right to immediate restitution upon No-Dues submission.',
                      },
                      {
                        title: '3. "Arbitrary Maintenance & Painting Deductions"',
                        desc: 'Hostel wardens and estate officers frequently impose blanket deductions of ₹5,000 to ₹25,000 for "general hostel painting," "batch farewell maintenance," or "unidentified wing damages" without proving individualized damage caused by the specific student.',
                      },
                      {
                        title: '4. "Missing Original Caution Money Receipt"',
                        desc: 'Account departments refuse refunds if the student misplaces the physical yellow fee receipt issued 3-4 years prior during admission. In the digital banking era, electronic transaction records, bank statements, and college ledger entries are conclusive evidence under Section 63 of the BSA.',
                      },
                      {
                        title: '5. "Mandatory Alumni Association Contribution"',
                        desc: 'Colleges unilaterally deduct ₹3,000 to ₹10,000 from refundable caution money as mandatory lifetime alumni membership or building development funds without explicit written consent from the graduating student.',
                      },
                      {
                        title: '6. "Degree & Migration Certificate Blackmail"',
                        desc: 'Refusing to release degree certificates, migration cards, or character certificates unless the student signs a waiver forfeiting their security deposit is an illegal coercive practice attracting both consumer and criminal sanctions.',
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                        <h4 className="font-extrabold text-slate-900 text-sm mb-2 text-[#DC2626]">
                          {item.title}
                        </h4>
                        <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ── SECTION 4: EVIDENTIARY CHECKLIST ──────────────────── */}
                <section id="evidentiary-checklist" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                    4. Evidentiary Checklist: Documents, Receipts &amp; No-Dues Clearances
                  </h2>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    Before serving a statutory legal notice on a college administration, assembling a watertight evidentiary paper trail is vital. Under the{' '}
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/2187"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      Bharatiya Sakshya Adhiniyam, 2023 (BSA)
                    </a>{' '}
                    and the Consumer Protection Act, contemporaneous electronic records, bank statements, and administrative clearances establish an indisputable prima facie case of financial default.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse rounded-2xl overflow-hidden border border-slate-200 text-xs md:text-sm">
                      <thead className="bg-slate-900 text-white">
                        <tr>
                          <th className="p-4 font-black">Document Category</th>
                          <th className="p-4 font-black">Specific Evidentiary Proof</th>
                          <th className="p-4 font-black">Statutory Weight &amp; Legal Purpose</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        <tr className="hover:bg-slate-50">
                          <td className="p-4 font-bold text-slate-900">Admission Fee Receipts</td>
                          <td className="p-4 text-slate-700">
                            Fee challans, online payment gateway receipts, or ledger breakdowns explicitly earmarking &quot;Institutional Caution Money&quot; or &quot;Hostel Deposit&quot;
                          </td>
                          <td className="p-4 text-slate-600">
                            Proves exact principal quantum paid under refundable head; establishes Section 148 bailment.
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-4 font-bold text-slate-900">No-Dues Clearance Certificate</td>
                          <td className="p-4 text-slate-700">
                            Official clearance form signed and stamped by Library, Laboratories, Hostel Warden, Sports Complex, Accounts, and HOD
                          </td>
                          <td className="p-4 text-slate-600">
                            Conclusively refutes any institutional claim of property damage, library dues, or pending fines.
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-4 font-bold text-slate-900">Written Refund Applications</td>
                          <td className="p-4 text-slate-700">
                            Copies of formal letters submitted to the Finance Officer/Principal with receiving stamps, or official support tickets
                          </td>
                          <td className="p-4 text-slate-600">
                            Proves formal demand made; establishes precise date when cause of action arose for interest calculation.
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-4 font-bold text-slate-900">Email &amp; Messaging Trail</td>
                          <td className="p-4 text-slate-700">
                            Official email correspondence with the Registrar, Dean, or Accounts Section; WhatsApp communications with Hostel Warden
                          </td>
                          <td className="p-4 text-slate-600">
                            Admissible electronic evidence under Section 63 BSA; demonstrates deliberate institutional stonewalling.
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-4 font-bold text-slate-900">Bank Statement &amp; NEFT Proof</td>
                          <td className="p-4 text-slate-700">
                            Bank account statement showing initial debit for admission and verifying zero subsequent credit from college
                          </td>
                          <td className="p-4 text-slate-600">
                            Establishes continuous financial loss and non-disbursement by the college.
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-4 font-bold text-slate-900">Institutional Prospectus / Rulebook</td>
                          <td className="p-4 text-slate-700">
                            Relevant pages of the college information brochure specifying caution deposit refund guidelines
                          </td>
                          <td className="p-4 text-slate-600">
                            Proves contractual terms and demonstrates institution&apos;s direct breach of its own published policies.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* ── SECTION 5: NOTICE ANATOMY ─────────────────────────── */}
                <section id="notice-anatomy" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                    5. Key Clauses in a Statutory Demand Notice to University/College
                  </h2>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    An advocate-vetted statutory legal notice is not a casual reminder letter. It is a formal pre-litigation legal instrument executed under the signature and seal of an enrolled advocate of the High Court. When served on the Vice-Chancellor, Registrar, Principal, and Chairman of the governing trust, it establishes enforceable civil and criminal accountability. A robust notice must incorporate six indispensable legal elements:
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        num: '1',
                        title: 'Precise Identification of Parties & Academic Enrollment Identity',
                        desc: 'The notice must explicitly state the student’s full name, roll number, registration number, course/department, batch duration (e.g., 2020-2024), and hostel room details, alongside the full corporate and trust identity of the university or educational society.',
                      },
                      {
                        num: '2',
                        title: 'Itemized Factual Matrix & Financial Breakdown of Withheld Deposits',
                        desc: 'A granular table specifying each deposit head paid during admission: Institutional Caution Money (₹25,000), Hostel Security Deposit (₹30,000), Library Deposit (₹10,000), with corresponding receipt numbers, transaction dates, and mode of remittance.',
                      },
                      {
                        num: '3',
                        title: 'Affirmation of Complete No-Dues Clearance & Property Handover',
                        desc: 'Clear legal averment that the student fulfilled all academic curriculum requirements, vacated university premises in pristine condition, and obtained certified No Dues clearances from all statutory departments without any outstanding liabilities.',
                      },
                      {
                        num: '4',
                        title: 'Statutory Grounding under UGC Directives, Contract Act & CPA 2019',
                        desc: 'Explicit citation of Section 70/73 of the Indian Contract Act, UGC Public Notifications on Fee Refund, Section 2(11) & Section 2(47) of the Consumer Protection Act, 2019, and landmark Supreme Court/NCDRC precedents prohibiting forfeiture of caution money.',
                      },
                      {
                        num: '5',
                        title: 'Peremptory 15-Day Cure Period & Claim for 18% Statutory Interest',
                        desc: 'A strict demand calling upon the college management to disburse the entire principal deposit amount directly into the student’s bank account within exactly 15 days of receipt of notice, failing which 18% per annum commercial interest shall accrue from the due date.',
                      },
                      {
                        num: '6',
                        title: 'Multi-Forum Litigation Notice & Personal Trustee Liability Intimation',
                        desc: 'Unambiguous notice that failure to comply within 15 days will result in immediate filing of a Consumer Complaint on E-Daakhil seeking ₹1,00,000 damages for mental agony, regulatory petition before the UGC/AICTE Ombudsman, and criminal complaint under Section 316/318 of the Bharatiya Nyaya Sanhita, 2023 for criminal breach of trust.',
                      },
                    ].map((clause) => (
                      <div key={clause.num} className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="w-7 h-7 rounded-lg bg-[#DC2626] text-white font-black text-xs flex items-center justify-center shrink-0">
                            {clause.num}
                          </span>
                          <h4 className="font-extrabold text-slate-900 text-sm md:text-base">
                            {clause.title}
                          </h4>
                        </div>
                        <p className="text-xs md:text-sm text-slate-650 leading-relaxed pl-10">
                          {clause.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ── SECTION 6: LEGAL REMEDIES MATRIX ──────────────────── */}
                <section id="legal-remedies-matrix" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                    6. Multi-Forum Remedies: Consumer Court, UGC Grievance, Summary Suit &amp; BNS
                  </h2>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    If the educational institution fails to disburse the caution money within the 15-day peremptory notice window, the served legal notice unlocks four distinct, high-impact legal recovery avenues:
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse rounded-2xl overflow-hidden border border-slate-200 text-xs md:text-sm">
                      <thead className="bg-slate-900 text-white">
                        <tr>
                          <th className="p-4 font-black">Legal Forum</th>
                          <th className="p-4 font-black">Statutory Basis</th>
                          <th className="p-4 font-black">Average Timeline</th>
                          <th className="p-4 font-black">Remedies &amp; Compensation Available</th>
                          <th className="p-4 font-black">Enforcement Power</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        <tr className="hover:bg-slate-50">
                          <td className="p-4 font-bold text-slate-900">
                            <a
                              href="https://edaakhil.nic.in/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-purple-600 hover:text-purple-800 hover:underline"
                            >
                              District Consumer Disputes Redressal Commission (DCDRC / E-Daakhil)
                            </a>
                          </td>
                          <td className="p-4 text-slate-700">
                            Section 35, Consumer Protection Act, 2019 (Deficiency in Service &amp; Unfair Trade Practice)
                          </td>
                          <td className="p-4 text-slate-700">3 – 6 Months</td>
                          <td className="p-4 text-slate-700">
                            Full refund of deposit + 9% to 18% penal interest + ₹25,000 to ₹1,00,000 for mental harassment + litigation costs
                          </td>
                          <td className="p-4 text-slate-600">
                            Enforceable as a civil court decree; non-compliance punishable by imprisonment under Section 72 CPA.
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-4 font-bold text-slate-900">
                            <a
                              href="https://www.ugc.gov.in/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-purple-600 hover:text-purple-800 hover:underline"
                            >
                              UGC e-Samadhan Grievance Redressal Portal
                            </a>
                          </td>
                          <td className="p-4 text-slate-700">
                            UGC (Grievance Redressal) Regulations &amp; Fee Refund Mandates
                          </td>
                          <td className="p-4 text-slate-700">30 – 60 Days</td>
                          <td className="p-4 text-slate-700">
                            Regulatory directive ordering direct refund; show-cause notice issued to Vice-Chancellor
                          </td>
                          <td className="p-4 text-slate-600">
                            Threatens college degree recognition, NAAC ranking, and grants; compels fast institutional compliance.
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-4 font-bold text-slate-900">
                            <a
                              href="https://www.indiacode.nic.in/handle/123456789/2191"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-purple-600 hover:text-purple-800 hover:underline"
                            >
                              Civil Court (Summary Suit under Order 37 CPC)
                            </a>
                          </td>
                          <td className="p-4 text-slate-700">
                            Order 37, Code of Civil Procedure, 1908 (Liquidated Debt on Written Receipts)
                          </td>
                          <td className="p-4 text-slate-700">6 – 12 Months</td>
                          <td className="p-4 text-slate-700">
                            Fast-track money decree for exact liquidated caution amount plus contractual interest
                          </td>
                          <td className="p-4 text-slate-600">
                            Direct execution via bank account attachment and freezing of college trust accounts.
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-4 font-bold text-slate-900">
                            Criminal Complaint / Police FIR
                          </td>
                          <td className="p-4 text-slate-700">
                            <a
                              href="https://www.indiacode.nic.in/handle/123456789/2187"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-purple-600 hover:text-purple-800 hover:underline"
                            >
                              Section 316 &amp; 318 of Bharatiya Nyaya Sanhita, 2023 (BNS)
                            </a>
                          </td>
                          <td className="p-4 text-slate-700">Immediate Action</td>
                          <td className="p-4 text-slate-700">
                            Investigation into misappropriation of caution trust funds; personal summons to trustees
                          </td>
                          <td className="p-4 text-slate-600">
                            Creates immediate criminal exposure for trustees and directors, compelling swift out-of-court settlement.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* ── SECTION 7: STEP-BY-STEP STRATEGIC ROADMAP ─────────── */}
                <section id="step-by-step-guide" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                    7. Step-by-Step Strategic Roadmap to Recover Withheld Caution Deposits
                  </h2>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    Recovering stuck caution money and security deposits from rigid academic administrations requires a disciplined, legally sequenced escalation strategy:
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        step: 'Step 1',
                        title: 'Consolidate Admission Receipts & Obtain Signed No-Dues Clearance',
                        desc: 'Gather all original or electronic fee challans, deposit vouchers, and your finalized No Dues Certificate bearing departmental signatures and stamps. Ensure you have your bank passbook/cancelled cheque ready for direct electronic transfer verification.',
                      },
                      {
                        step: 'Step 2',
                        title: 'Send a Formal Written Reminder to Finance Officer & Principal',
                        desc: 'Submit a polite, written formal demand letter via registered email and physical hand-delivery to the accounts section, giving them 7 business days to credit your caution deposit under published UGC Guidelines. Preserve the acknowledgment copy.',
                      },
                      {
                        step: 'Step 3',
                        title: 'Engage Legal Recovery to Draft an Advocate Statutory Notice',
                        desc: 'If the college fails to disburse the funds within 7 days, provide your case details to Legal Recovery. Our panel advocate drafts an airtight statutory legal demand notice itemizing the exact deposit heads, citing UGC/AICTE regulations, and invoking Section 70/73 of the Contract Act and Section 2(11) of CPA 2019.',
                      },
                      {
                        step: 'Step 4',
                        title: 'Serve Notice via India Post Speed Post & Official Email Copies',
                        desc: 'The notice is dispatched simultaneously via India Post Speed Post with Acknowledgment Due (AD) to the Principal, Registrar, and Governing Trust Chairman, alongside tracked legal email delivery. The generated Postal Tracking Number and Section 63 BSA electronic dispatch certificate serve as concrete legal proof of service.',
                      },
                      {
                        step: 'Step 5',
                        title: 'Execute Immediate Judicial Escalation upon 15-Day Expiry',
                        desc: 'Over 82% of universities and private colleges settle the full caution deposit within 15 days of receiving our advocate notice. If the administration remains non-compliant, we file an instant consumer complaint on the National E-Daakhil Portal seeking full refund, 18% interest, and ₹50,000+ compensation for mental harassment.',
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                        <div className="w-12 h-12 rounded-2xl bg-[#DC2626] text-white font-black text-sm flex items-center justify-center shrink-0 shadow-md shadow-red-900/20">
                          {item.step}
                        </div>
                        <div>
                          <h3 className="font-extrabold text-slate-900 text-sm md:text-base mb-1">
                            {item.title}
                          </h3>
                          <p className="text-xs md:text-sm text-slate-650 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ── SECTION 8: FAQS ───────────────────────────────────── */}
                <section id="faqs" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                    8. Frequently Asked Questions
                  </h2>

                  <div className="space-y-4">
                    {faqs.map((faq, index) => {
                      const isOpen = expandedFaqs.includes(`faq-${index}`);
                      return (
                        <div
                          key={index}
                          className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 transition-colors"
                        >
                          <button
                            onClick={() => toggleFaq(index)}
                            className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-900 text-sm md:text-base hover:bg-slate-100 transition-colors gap-4"
                          >
                            <span>{faq.question}</span>
                            <span className="w-6 h-6 rounded-full bg-white border border-slate-300 flex items-center justify-center text-[#DC2626] text-lg font-black shrink-0">
                              {isOpen ? '−' : '+'}
                            </span>
                          </button>
                          {isOpen && (
                            <div className="p-5 pt-0 text-xs md:text-sm text-slate-700 leading-relaxed bg-slate-50 border-t border-slate-100">
                              <p className="mt-3">{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* ── STATUTORY & REGULATORY CITATIONS ─────────────────── */}
                <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4 text-xs md:text-sm text-slate-600">
                  <h3 className="font-black text-slate-900 uppercase tracking-wider text-xs">
                    Authoritative Legal &amp; Regulatory References:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <span className="font-bold text-slate-900">UGC Public Notice on Fee Refund: </span>
                      <a
                        href="https://www.ugc.gov.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        ugc.gov.in (Mandatory 100% Caution Refund Norms)
                      </a>
                    </div>
                    <div>
                      <span className="font-bold text-slate-900">AICTE Approval Process Handbook: </span>
                      <a
                        href="https://www.aicte-india.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        aicte-india.org (Security Deposit &amp; Certificate Non-Retention)
                      </a>
                    </div>
                    <div>
                      <span className="font-bold text-slate-900">Consumer Protection Act, 2019: </span>
                      <a
                        href="https://consumeraffairs.nic.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        consumeraffairs.nic.in (Deficiency &amp; Unfair Trade Practice)
                      </a>
                    </div>
                    <div>
                      <span className="font-bold text-slate-900">Indian Contract Act, 1872: </span>
                      <a
                        href="https://www.indiacode.nic.in/handle/123456789/2187"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        indiacode.nic.in (Sections 70, 73, 148 &amp; 160 Bailment)
                      </a>
                    </div>
                    <div>
                      <span className="font-bold text-slate-900">National Consumer Commission (NCDRC): </span>
                      <a
                        href="http://ncdrc.nic.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        ncdrc.nic.in (Caution Money Restitution Precedents)
                      </a>
                    </div>
                    <div>
                      <span className="font-bold text-slate-900">National E-Daakhil Portal: </span>
                      <a
                        href="https://edaakhil.nic.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        edaakhil.nic.in (Online Consumer Complaint Filing)
                      </a>
                    </div>
                  </div>
                </section>

                {/* ── TOPICAL AUTHORITY (INTERNAL INTERLINKING) ─────────── */}
                <section className="border-t border-slate-100 pt-8">
                  <h3 className="text-lg font-black text-slate-900 mb-4">
                    More Consumer &amp; Fee Recovery Legal Guides
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      {
                        title: 'Fee Refund on School/College Admission Cancellation',
                        href: '/send-a-legal-notice/school-college-fee-refund-admission-cancellation',
                      },
                      {
                        title: 'Security Deposit Not Refunded by Landlord',
                        href: '/send-a-legal-notice/security-deposit-not-refunded-landlord',
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
                        title: 'How to File a Consumer Complaint in India',
                        href: '/how-to-file-consumer-complaint-india',
                      },
                      {
                        title: 'Legal Notice to Coaching Institute for Fee Refund',
                        href: '/legal-notice-to-coaching-institute-college-fee-refund',
                      },
                      {
                        title: 'Legal Notice for PG Security Deposit Refund',
                        href: '/legal-notice-to-pg-owner-for-security-deposit-refund',
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
                    platform, connecting students, parents, alumni, and consumers with seasoned panel
                    advocates for rapid, advocate-vetted statutory demand notices at transparent flat
                    fees. With ₹100 Crore+ recovered and 10,000+ cases resolved across India, Legal Recovery
                    delivers verified legal impact without the delays and unpredictability of traditional law firms.
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
                  College Withholding Your Caution Money?
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  Send an advocate-vetted statutory notice today. Over 82% of universities and colleges disburse withheld security deposits within 15 days of notice service.
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
                  <span className="text-slate-400 text-xs">/5 (368 reviews)</span>
                </div>

                {/* Review card — must match JSON-LD Product > Review word-for-word */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[#DC2626]/10 flex items-center justify-center font-black text-[#DC2626] text-xs">
                      RV
                    </div>
                    <div>
                      <p className="font-extrabold text-slate-900 text-xs">Rohan Varma</p>
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
                  { stat: '82%', label: 'Colleges settle caution money before consumer court filing' },
                  { stat: '₹3.8CR+', label: 'Total academic deposits & caution money recovered' },
                  { stat: 'Same Day', label: 'Advocate notice drafted and dispatched' },
                  { stat: 'Flat Fee', label: 'Transparent pricing with zero commission cuts' },
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
