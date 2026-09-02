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
    question: 'Can an employee send a formal legal notice to a company for not paying an earned bonus in India?',
    answer:
      'Yes, an employee whose statutory bonus, contractual performance bonus, variable pay, or retention incentive is unlawfully withheld has an absolute legal right to issue an advocate-drafted statutory legal notice under the Payment of Bonus Act, 1965 and Section 73 of the Indian Contract Act, 1872. The legal notice establishes an official record of the employer breach, demands immediate release of unpaid bonus dues with 18% commercial interest, and sets a strict 15-day peremptory timeline before escalating to the Labour Commissioner, filing an application under Section 21 of the Payment of Bonus Act, or instituting a summary civil suit under Order 37 of the CPC.',
  },
  {
    question: 'Can an employer withhold or forfeit a performance bonus if the employee resigns before the payout date?',
    answer:
      'No, Indian employment jurisprudence and contractual principles prohibit companies from arbitrarily forfeiting earned performance bonuses solely because an employee resigned prior to the administrative payout date. If an employee completed the performance appraisal cycle or worked the qualifying period evaluated by the company, the bonus constitutes earned compensation under Section 73 of the Indian Contract Act, 1872. Restrictive corporate clauses requiring active employment on the disbursement date are routinely held unreasonable and unenforceable when the employee fulfilled all underlying performance criteria prior to separation.',
  },
  {
    question: 'What is the statutory timeframe for an employer to disburse bonus under the Payment of Bonus Act, 1965?',
    answer:
      'Under Section 19 of the Payment of Bonus Act, 1965, an employer is statutorily mandated to pay all bonus dues in cash within a maximum period of 8 months from the close of the financial accounting year. In cases where an industrial or wage dispute regarding bonus calculation is pending before an arbitrator or Labour Tribunal, payment must be disbursed within one month from the date the award comes into operation. Defaulting on this statutory deadline exposes company directors to penal prosecution under Section 28, punishable with up to six months imprisonment and monetary fines.',
  },
  {
    question: 'What is the difference between statutory bonus and contractual performance bonus under Indian law?',
    answer:
      'Statutory bonus is a mandatory social welfare entitlement governed by the Payment of Bonus Act, 1965, payable at a minimum rate of 8.33% up to a maximum of 20% of basic wages to eligible employees working in establishments with 20 or more persons. Contractual performance bonus, variable pay, or sales incentive is an agreed compensation component governed by the employment agreement and Section 73 of the Indian Contract Act, 1872. Both categories represent enforceable monetary debts, and an employer cannot withhold either component without lawful justification and due process.',
  },
  {
    question: 'Under what specific legal circumstances can an employer disqualify or forfeit an employee bonus in India?',
    answer:
      'Under Section 9 of the Payment of Bonus Act, 1965, an employee can be disqualified from receiving bonus only if dismissed from service for fraud, riotous or violent behaviour on the establishment premises, or theft, misappropriation, or sabotage of company property. Forfeiture requires a formal domestic inquiry establishing proven misconduct and a speaking termination order specifically recording these grounds. Routine resignations, mutual separations, alleged performance shortfalls, unserved notice period offsets, or arbitrary management discretion cannot legally justify bonus forfeiture.',
  },
  {
    question: 'What legal avenues are available if an employer ignores a legal notice for unpaid bonus?',
    answer:
      'If the employer fails to settle the unpaid bonus within the 15-day notice period, the employee can file a recovery application under Section 21 of the Payment of Bonus Act, 1965 before the Labour Commissioner to obtain a recovery certificate enforced as arrears of land revenue. Additionally, employees can approach the Payment of Wages Authority under Section 15 of the Payment of Wages Act, 1936 or institute a summary suit for liquidated debt recovery under Order 37 of the Code of Civil Procedure, 1908 in the jurisdictional civil court. For admitted corporate debts exceeding statutory thresholds, corporate insolvency remedies under Section 9 of the Insolvency and Bankruptcy Code (IBC) may also be evaluated.',
  },
  {
    question: 'What interest rate can an employee claim on delayed or withheld bonus payments in India?',
    answer:
      'Employees issuing a statutory legal notice are entitled to claim commercial pre-litigation and pendente lite interest ranging from 12% to 18% per annum on withheld bonus amounts under the Interest Act, 1978 and Section 73 of the Indian Contract Act, 1872. Indian courts consistently award statutory interest against defaulting employers to prevent unjust corporate enrichment arising from unauthorized retention of earned employee compensation. The legal notice explicitly calculates this daily accrued interest to maximize financial leverage against the defaulting enterprise.',
  },
];

/* ─── JSON-LD SCHEMA (@graph) ──────────────────────────────────────────── */
const pageUrl = 'https://legalrecovery.in/send-a-legal-notice/company-not-paying-bonus';
const ogImage = 'https://legalrecovery.in/images/og/company-not-paying-bonus.jpg';

const reviewBodyText =
  'When I resigned as Senior Engineering Director at a Bengaluru multinational tech company after completing the full appraisal cycle with a 115% KPI rating, the employer withheld my contractual performance bonus of ₹5,40,000. They claimed that company policy required me to be on active payroll on the disbursement date, even though I had worked every single day of the financial year evaluated. Legal Recovery drafted a hard-hitting statutory legal notice invoking Section 73 of the Indian Contract Act, 1872, the Payment of Bonus Act, 1965, and landmark High Court precedents against arbitrary forfeiture. Within 11 days of receiving the legal notice via Speed Post AD and formal email to executive leadership, the company\'s legal department approved the full payout of ₹5,40,000 directly into my bank account without litigation. Invaluable legal support!';

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
      headline: 'Send Legal Notice to Company for Not Paying Bonus | Recovery India',
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
      name: 'Send Legal Notice to Company for Not Paying Bonus | Recovery India',
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
          name: 'Company Not Paying Bonus Recovery',
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
      name: 'Step-by-Step Legal Roadmap to Recover Unpaid Company Bonus in India',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Bonus Classification & KPI Audit: Determine whether the claim involves statutory bonus (8.33%-20% under Payment of Bonus Act) or contractual variable pay/retention incentive under employment contract.',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Evidentiary Compilation: Assemble employment agreement, appraisal scorecards, KPI achievement emails, manager approvals, bonus payout policy documents, and Section 63 BSA electronic records.',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Advocate Legal Notice Drafting: Issue formal statutory demand notice invoking Section 8, 19, 21 Payment of Bonus Act, Section 73 Indian Contract Act, and 18% commercial interest.',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Multi-Channel Service: Dispatch notice via Speed Post Registered AD, official corporate email to Board of Directors/HR Head, and WhatsApp with electronic delivery tracking.',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Quasi-Judicial Escalation: File Section 21 recovery application before the Labour Commissioner or Section 15 claim before Payment of Wages Authority upon notice expiry.',
        },
        {
          '@type': 'ListItem',
          position: 6,
          name: 'Civil Court Summary Suit: Institute Order 37 CPC summary recovery suit in civil court or explore corporate insolvency action for liquidated employment debt.',
        },
      ],
    },

    /* 7. Product + AggregateRating + Review (matches sidebar UI word-for-word) */
    {
      '@type': 'Product',
      name: 'Legal Notice to Company for Unpaid Bonus Recovery',
      description:
        'Advocate-drafted statutory legal demand notice service for corporate employees, software professionals, sales executives, and managers to recover unpaid statutory bonus, contractual performance bonus, and variable pay from employers across India.',
      brand: {
        '@type': 'Organization',
        name: 'Legal Recovery',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '385',
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
export default function CompanyNotPayingBonusClient() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    const faqId = `faq-${index}`;
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const tocSections = [
    { id: 'statutory-framework', title: '1. Legal Framework: Statutory Bonus vs Contractual Variable Pay' },
    { id: 'corporate-excuses-debunked', title: '2. Debunking Corporate Excuses: Payroll Dates & Resignation Forfeiture' },
    { id: 'bonus-calculation-matrix', title: '3. Bonus Calculation Matrix: Statutory (8.33%-20%) vs CTC Incentives' },
    { id: 'evidentiary-checklist', title: '4. Pre-Notice Evidentiary Checklist & Section 63 BSA Digital Records' },
    { id: 'essential-clauses', title: '5. Critical Clauses in a Legal Notice for Unpaid Bonus' },
    { id: 'judicial-escalation', title: '6. Labour Commissioner Recovery (Sec 21), Wages Authority & Summary Suits' },
    { id: 'step-by-step-roadmap', title: '7. Step-by-Step Strategic Roadmap for Bonus Recovery' },
    { id: 'faqs', title: '8. Frequently Asked Questions' },
  ];

  const breadcrumbItems = [
    { label: 'Send a Legal Notice', href: '/send-a-legal-notice' },
    {
      label: 'Company Not Paying Bonus Recovery',
      href: '/send-a-legal-notice/company-not-paying-bonus',
    },
  ];

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const shareUrl = encodeURIComponent(pageUrl);
  const shareText = encodeURIComponent(
    'Company or employer not paying your earned annual bonus, variable pay, or performance incentive? Send an advocate-drafted statutory legal notice under the Payment of Bonus Act & Indian Contract Act! #BonusRecovery #EmployeeRights #LegalNoticeIndia'
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
              EMPLOYMENT DUES &amp; VARIABLE PAY RECOVERY
            </span>
            <h1 className="text-3xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Send a Legal Notice to Company for{' '}
              <span className="text-[#DC2626]">Not Paying Bonus</span>
            </h1>
            <p className="text-sm md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed font-medium">
              Recover your withheld annual performance bonus, statutory bonus dues, variable pay, and retention incentives with 18% commercial interest under the Payment of Bonus Act, 1965 and Indian Contract Act, 1872.
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
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${encodeURIComponent('Send Legal Notice to Company for Not Paying Bonus | Recovery India')}`}
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
                    Under{' '}
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/1513"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      Section 8, Section 10, and Section 19 of the Payment of Bonus Act, 1965
                    </a>{' '}
                    and{' '}
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/2187"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      Section 73 of the Indian Contract Act, 1872
                    </a>
                    , an employee who has worked the qualifying period or achieved established performance key performance indicators (KPIs) possesses an enforceable legal right to receive statutory bonus and contractual variable pay. When an employer arbitrarily withholds, delays, or forfeits bonus payments post-resignation or during annual disbursement cycles, serving an advocate-drafted statutory legal notice demands immediate release of the principal sum alongside 18% commercial interest within 15 days. If the employer fails to comply within the notice window, the employee can initiate certificate recovery before the{' '}
                    <a
                      href="https://clc.gov.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      Chief Labour Commissioner
                    </a>{' '}
                    under Section 21 of the Payment of Bonus Act, file a wage deduction complaint under{' '}
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/2347"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline"
                    >
                      Section 15 of the Payment of Wages Act, 1936
                    </a>
                    , or file a summary recovery suit under Order 37 of the Code of Civil Procedure, 1908 in civil court.
                  </p>
                </div>

                {/* ── INFOGRAPHIC IMAGE EMBED ───────────────────────────── */}
                <div className="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white">
                  <img
                    src="/images/og/company-not-paying-bonus.jpg"
                    alt="Legal Process Infographic for Recovering Unpaid Company Bonus in India"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 bg-slate-50 border-t border-slate-100 text-xs text-slate-500 font-medium text-center">
                    Figure 1: Statutory Roadmap for Indian Employees to Recover Withheld Bonus and Variable Pay from Defaulting Companies under Indian Labour &amp; Contract Laws.
                  </div>
                </div>

                {/* ── SECTION 1: STATUTORY VS CONTRACTUAL BONUS FRAMEWORK ── */}
                <section id="statutory-framework" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                    1. Legal Framework: Statutory Bonus vs Contractual Variable Pay under Indian Law
                  </h2>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    Corporate bonus disputes in India typically fall into two distinct legal categories: statutory social welfare bonuses governed by the{' '}
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/1513"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline font-medium"
                    >
                      Payment of Bonus Act, 1965
                    </a>
                    , and contractual incentive schemes, performance variable pay, retention bonuses, or sales commissions governed by the{' '}
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/2187"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline font-medium"
                    >
                      Indian Contract Act, 1872
                    </a>
                    . Understanding this legal bifurcation is crucial when drafting a formidable legal demand notice that defeats corporate evasion tactics.
                  </p>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    Under Section 1(3) of the Payment of Bonus Act, 1965, every factory and commercial establishment employing 20 or more persons (or 10 or more in specific notified states) is statutorily bound to disburse an annual bonus to eligible employees who have worked for not less than 30 working days in that accounting year (Section 8). Under Section 10, the statutory minimum bonus is fixed at 8.33% of the employee’s salary or wage earned during the accounting year or ₹100, whichever is higher, regardless of whether the employer has an allocable surplus. Where the allocable surplus exceeds the minimum bonus, Section 11 mandates the payment of bonus up to a statutory ceiling of 20% of the employee’s annual wage.
                  </p>
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                    <h3 className="text-base md:text-lg font-bold text-slate-900 mb-3">
                      Statutory vs Contractual Bonus Comparison Matrix
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs md:text-sm text-left border-collapse">
                        <thead>
                          <tr className="border-b border-slate-300 text-slate-900 bg-slate-100">
                            <th className="p-3 font-extrabold">Legal Parameter</th>
                            <th className="p-3 font-extrabold">Statutory Bonus (Payment of Bonus Act, 1965)</th>
                            <th className="p-3 font-extrabold">Contractual Variable Pay / Performance Bonus</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 text-slate-700">
                          <tr>
                            <td className="p-3 font-semibold text-slate-900">Governing Statute</td>
                            <td className="p-3">Payment of Bonus Act, 1965 / Code on Wages, 2019</td>
                            <td className="p-3">Indian Contract Act, 1872 (Section 73)</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold text-slate-900">Eligibility Threshold</td>
                            <td className="p-3">Minimum 30 working days in the accounting year</td>
                            <td className="p-3">Fulfilment of contractual KPIs, goals, or milestones</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold text-slate-900">Quantum Range</td>
                            <td className="p-3">8.33% (statutory minimum) to 20% (maximum ceiling)</td>
                            <td className="p-3">Agreed percentage of CTC (e.g., 10% to 50%+ of CTC)</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold text-slate-900">Payment Deadline</td>
                            <td className="p-3">Within 8 months from close of accounting year (Sec 19)</td>
                            <td className="p-3">As per employment contract / annual appraisal cycle</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold text-slate-900">Forfeiture Grounds</td>
                            <td className="p-3">Strictly Section 9: Fraud, violent riotous act, theft/sabotage</td>
                            <td className="p-3">Breach of contract; arbitrary forfeiture is void ab initio</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold text-slate-900">Enforcement Forum</td>
                            <td className="p-3">Labour Commissioner (Sec 21) &amp; Labour Court</td>
                            <td className="p-3">Summary Civil Suit (Order 37 CPC) / Payment of Wages</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    For corporate executives, IT software architects, banking professionals, and consultants whose salaries exceed statutory ceilings, bonus structures are predominantly contractual. In landmark rulings such as{' '}
                    <em>Workmen of Deccan Sugar vs. Deccan Sugar</em> and decisions from the Karnataka and Delhi High Courts, the judiciary has firmly established that once an employer includes performance incentives or variable pay in an employee’s Cost to Company (CTC) structure, and the employee achieves the specified benchmarks, the bonus ceases to be an act of corporate charity. It transforms into an accrued contractual debt that cannot be unilaterally cancelled by management.
                  </p>
                </section>

                {/* ── SECTION 2: DEBUNKING CORPORATE EXCUSES ──────────────── */}
                <section id="corporate-excuses-debunked" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                    2. Debunking Corporate Excuses: "Active Payroll on Disbursement Date" &amp; Resignation Forfeitures
                  </h2>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    Human Resource departments in IT services companies, startups, and consulting conglomerates routinely employ standard bureaucratic arguments to withhold earned bonuses from departing employees. These excuses collapse under judicial scrutiny when challenged through an advocate-drafted statutory notice:
                  </p>

                  <div className="space-y-4">
                    <div className="border-l-4 border-[#DC2626] bg-red-50/40 p-5 rounded-r-xl">
                      <h3 className="font-black text-slate-900 text-base mb-1">
                        Corporate Excuse 1: "Company policy requires the employee to be on active payroll on the disbursement date."
                      </h3>
                      <p className="text-slate-700 text-sm leading-relaxed">
                        <strong className="text-slate-900">The Legal Reality:</strong> If an employee rendered full service during the evaluation period (e.g., April 1 to March 31) and successfully achieved their assigned deliverables, the entitlement to the bonus accrues at the end of that performance year. Delaying the administrative payout until June, July, or October does not extinguish the employee’s vested rights. Under Section 73 of the Indian Contract Act, 1872, an employer cannot profit from its own administrative payout timeline to strip an employee of compensation for work already performed. Courts hold such retrospective forfeiture clauses unconscionable and legally unenforceable.
                      </p>
                    </div>

                    <div className="border-l-4 border-[#DC2626] bg-red-50/40 p-5 rounded-r-xl">
                      <h3 className="font-black text-slate-900 text-base mb-1">
                        Corporate Excuse 2: "The employee resigned during the notice period, so variable pay is forfeited."
                      </h3>
                      <p className="text-slate-700 text-sm leading-relaxed">
                        <strong className="text-slate-900">The Legal Reality:</strong> Resignation is a statutory and contractual right of every employee. Serving an agreed notice period constitutes lawful compliance with the contract, not a breach. Under Indian labour jurisprudence, exercising a legal right to resign cannot be penalized by withholding compensation for past performance. The Madras High Court and Delhi High Court have repeatedly ruled that bonus earned for completed quarters or fiscal years must be settled in full during the Full and Final (FnF) settlement.
                      </p>
                    </div>

                    <div className="border-l-4 border-[#DC2626] bg-red-50/40 p-5 rounded-r-xl">
                      <h3 className="font-black text-slate-900 text-base mb-1">
                        Corporate Excuse 3: "Bonus is 100% discretionary and subject to management goodwill."
                      </h3>
                      <p className="text-slate-700 text-sm leading-relaxed">
                        <strong className="text-slate-900">The Legal Reality:</strong> Where an appointment letter specifies a formula, percentage of CTC, target achievement matrix, or company profitability milestones, the bonus is conditional, not discretionary. Once the employee satisfies the contractual conditions, the employer’s discretion is exhausted. Under the doctrine of promissory estoppel, an employer that induces an employee to perform with the promise of variable compensation cannot subsequently claim unfettered discretion to pay zero.
                      </p>
                    </div>

                    <div className="border-l-4 border-[#DC2626] bg-red-50/40 p-5 rounded-r-xl">
                      <h3 className="font-black text-slate-900 text-base mb-1">
                        Corporate Excuse 4: "Bonus is forfeited due to alleged lack of client project handover."
                      </h3>
                      <p className="text-slate-700 text-sm leading-relaxed">
                        <strong className="text-slate-900">The Legal Reality:</strong> Unsubstantiated allegations of improper handover or delayed deliverables cannot be used as an informal offset against earned compensation. Under Section 9 of the Payment of Bonus Act, 1965, forfeiture is permissible only upon formal dismissal following a proven domestic inquiry into fraud, violent conduct, or property sabotage. Unilateral deductions without a formal domestic inquiry violate statutory mandates and attract penal provisions.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 3: BONUS CALCULATION MATRIX ─────────────────── */}
                <section id="bonus-calculation-matrix" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                    3. Bonus Calculation Matrix: Statutory (8.33% to 20%) &amp; Prorated Variable Pay
                  </h2>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    Calculating the exact monetary claim before issuing a legal notice is essential. A vague demand allows corporate legal teams to delay proceedings, whereas an itemized calculation with statutory interest components commands immediate compliance.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                      <h3 className="font-black text-slate-900 text-base mb-3 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">
                          A
                        </span>
                        Statutory Bonus Computation
                      </h3>
                      <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                        Under Section 10 and Section 12 of the Payment of Bonus Act, 1965, calculation is based on the statutory wage ceiling (currently ₹7,000 per month or the minimum wage for the scheduled employment, whichever is higher):
                      </p>
                      <div className="bg-slate-50 p-3.5 rounded-xl font-mono text-xs text-slate-800 space-y-1.5 border border-slate-200">
                        <p><strong>Minimum Statutory Bonus:</strong></p>
                        <p>Bonus = 8.33% × (Eligible Monthly Basic + DA) × Months Worked</p>
                        <p className="pt-2"><strong>Maximum Statutory Bonus:</strong></p>
                        <p>Bonus = 20.00% × (Eligible Monthly Basic + DA) × Months Worked</p>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-2">
                        * Note: Minimum 30 days of continuous service in the accounting year is required.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                      <h3 className="font-black text-slate-900 text-base mb-3 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs">
                          B
                        </span>
                        Contractual Variable Pay Computation
                      </h3>
                      <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                        For salaried executives and professionals whose bonus is tied to performance ratings or annual CTC target incentives:
                      </p>
                      <div className="bg-slate-50 p-3.5 rounded-xl font-mono text-xs text-slate-800 space-y-1.5 border border-slate-200">
                        <p><strong>Prorated Performance Bonus:</strong></p>
                        <p>Bonus = (Annual Variable Component × Individual Appraisal Multiplier × Company Multiplier) × (Days Worked in Fiscal Year ÷ 365)</p>
                        <p className="pt-2"><strong>Statutory Interest Claim:</strong></p>
                        <p>Interest = Principal Bonus × 18% p.a. × (Days Delayed ÷ 365)</p>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-2">
                        * Under the Interest Act, 1978, interest starts accruing from the due date of disbursement.
                      </p>
                    </div>
                  </div>

                  <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl">
                    <h4 className="font-bold text-slate-900 text-sm mb-1">
                      Pro-Rata Entitlement for Mid-Year Departures
                    </h4>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      If an employee works for 9 months of a financial year and resigns, the employee is legally entitled to a pro-rata bonus for the 9 completed months under Section 13 of the Payment of Bonus Act, 1965 and the Indian Contract Act. Total forfeiture of bonus for partial-year service where the employee met their proportional targets is an unfair labour practice.
                    </p>
                  </div>
                </section>

                {/* ── SECTION 4: EVIDENTIARY CHECKLIST ─────────────────────── */}
                <section id="evidentiary-checklist" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                    4. Pre-Notice Evidentiary Checklist &amp; Section 63 BSA Digital Records
                  </h2>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    Under the{' '}
                    <a
                      href="https://www.indiacode.nic.in/handle/123456789/20062"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 hover:underline font-medium"
                    >
                      Bharatiya Sakshya Adhiniyam, 2023 (BSA)
                    </a>
                    , electronic records including emails, HRMS screenshots, digital appraisal ratings, and WhatsApp correspondence are admissible as primary electronic evidence under Section 63. Before issuing a formal legal notice, compiling an airtight evidentiary dossier ensures immediate leverage during corporate negotiations.
                  </p>

                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                    <h3 className="text-base font-extrabold text-slate-900 mb-4">
                      Documentary Dossier Checklist for Unpaid Bonus Recovery
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm text-slate-700">
                      <div className="space-y-2.5">
                        <div className="flex items-start gap-2">
                          <span className="text-[#DC2626] font-bold">✔</span>
                          <span><strong>Employment Agreement &amp; Annexures:</strong> Original appointment letter, CTC breakup annexure, and variable compensation scheme terms.</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[#DC2626] font-bold">✔</span>
                          <span><strong>Performance Appraisal Reports:</strong> Final scorecard, manager assessment sign-offs, KPI achievement percentage, and rating band confirmations.</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[#DC2626] font-bold">✔</span>
                          <span><strong>Written Bonus Declarations:</strong> Official company-wide or individual emails announcing bonus payout percentages, eligibility cycles, or fiscal multipliers.</span>
                        </div>
                      </div>
                      <div className="space-y-2.5">
                        <div className="flex items-start gap-2">
                          <span className="text-[#DC2626] font-bold">✔</span>
                          <span><strong>Salary Slips &amp; Bank Statements:</strong> Last 12 months salary slips and bank statements showing basic salary and any previous bonus credits.</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[#DC2626] font-bold">✔</span>
                          <span><strong>Resignation &amp; FnF Statement:</strong> Resignation acceptance email, relieving letter, and Full &amp; Final settlement sheet highlighting the omitted bonus item.</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[#DC2626] font-bold">✔</span>
                          <span><strong>Written Demands &amp; Refusals:</strong> All follow-up emails sent to HR/Payroll demanding the bonus and any written corporate refusals or evasive responses.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 5: ESSENTIAL CLAUSES IN A LEGAL NOTICE ──────── */}
                <section id="essential-clauses" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                    5. Critical Clauses in an Advocate-Drafted Legal Notice for Unpaid Bonus
                  </h2>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    A poorly drafted legal notice that resembles a generic grievance email is easily dismissed by corporate legal departments. An effective statutory demand notice drafted by an experienced employment advocate must incorporate strict procedural elements:
                  </p>

                  <div className="space-y-4 text-xs md:text-sm text-slate-700">
                    <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1.5">
                      <h4 className="font-extrabold text-slate-900 text-sm">
                        Clause 1: Statement of Employment History &amp; Flawless Performance
                      </h4>
                      <p className="leading-relaxed">
                        Recites the employee’s date of joining, designation, compensation structure, CTC variable pay breakdown, and verified record of fulfilling all operational targets without any misconduct charges or disciplinary notices.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1.5">
                      <h4 className="font-extrabold text-slate-900 text-sm">
                        Clause 2: Demonstration of Vested Statutory &amp; Contractual Right
                      </h4>
                      <p className="leading-relaxed">
                        Cites Section 8 and 10 of the Payment of Bonus Act, 1965 and Section 73 of the Indian Contract Act, establishing that the bonus accrued as an earned monetary right upon completing the performance period, prior to resignation.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1.5">
                      <h4 className="font-extrabold text-slate-900 text-sm">
                        Clause 3: Demolition of Illegal Corporate Forfeiture Policies
                      </h4>
                      <p className="leading-relaxed">
                        Explicitly challenges any internal HR guidelines requiring active payroll presence on the disbursement date as unconscionable, violative of public policy under Section 23 of the Indian Contract Act, and contrary to established High Court precedents.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1.5">
                      <h4 className="font-extrabold text-slate-900 text-sm">
                        Clause 4: Itemized Quantum &amp; 18% Commercial Interest Claim
                      </h4>
                      <p className="leading-relaxed">
                        Sets forth the exact principal bonus amount withheld, calculates daily accrued interest at 18% per annum under the Interest Act, 1978, and claims legal drafting expenses incurred by the employee.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1.5">
                      <h4 className="font-extrabold text-slate-900 text-sm">
                        Clause 5: Strict 15-Day Peremptory Demand &amp; Multi-Forum Warning
                      </h4>
                      <p className="leading-relaxed">
                        Grants a strict 15-day timeline from notice receipt for direct bank disbursement, failing which immediate proceedings will be initiated before the Labour Commissioner under Section 21, the Payment of Wages Authority, and the jurisdictional Civil Court with personal director liability.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ── SECTION 6: QUASI-JUDICIAL & JUDICIAL ESCALATION ────── */}
                <section id="judicial-escalation" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                    6. Quasi-Judicial &amp; Judicial Escalation: Labour Commissioner (Sec 21), Wages Authority &amp; Civil Suits
                  </h2>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    When an employer fails to comply with the statutory demand notice within 15 days, multiple specialized legal forums are available under Indian law to attach assets and enforce payment:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
                      <div className="text-xs font-black uppercase text-[#DC2626] tracking-wider">
                        Forum 1: Labour Commissioner
                      </div>
                      <h3 className="font-bold text-slate-900 text-sm md:text-base">
                        Section 21 Payment of Bonus Act Recovery
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        The employee submits a recovery application to the State Government or designated Labour Commissioner under Section 21. Upon satisfying the authority that bonus is due, a Recovery Certificate is issued to the District Collector to attach company bank accounts and recover dues as arrears of land revenue.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
                      <div className="text-xs font-black uppercase text-[#DC2626] tracking-wider">
                        Forum 2: Payment of Wages Authority
                      </div>
                      <h3 className="font-bold text-slate-900 text-sm md:text-base">
                        Section 15 Claim with 10x Penalty
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        For employees covered under the wage threshold of the Payment of Wages Act, 1936, an application under Section 15 can be filed against unlawful deductions or delayed wages. The Authority possesses powers to order full wage disbursement along with compensation up to ten times the amount withheld.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
                      <div className="text-xs font-black uppercase text-[#DC2626] tracking-wider">
                        Forum 3: Civil Court Summary Suit
                      </div>
                      <h3 className="font-bold text-slate-900 text-sm md:text-base">
                        Order 37 Code of Civil Procedure (CPC)
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        For senior executives and contractual variable pay claims exceeding labour thresholds, a summary suit under Order 37 CPC can be filed in the jurisdictional civil court. The defendant company must obtain leave to defend; failure to establish a substantial defense leads to a swift decree in favour of the employee.
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    Furthermore, under Section 28 of the Payment of Bonus Act, 1965, any employer who contravenes the provisions of the Act or fails to comply with statutory directions is punishable with imprisonment for a term which may extend to six months, or with fine, or both. Where the offence is committed by a company, Section 29 holds every director, manager, and officer in charge personally liable.
                  </p>
                </section>

                {/* ── SECTION 7: STEP-BY-STEP ROADMAP ─────────────────────── */}
                <section id="step-by-step-roadmap" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                    7. Step-by-Step Strategic Roadmap for Bonus Recovery
                  </h2>
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                    Legal Recovery executes a rigorous, multi-tiered recovery process designed to secure settlement without prolonged litigation:
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        step: 'Step 1',
                        title: 'Case Review & Contractual Analysis (Day 1)',
                        desc: 'Our senior employment advocates review your appointment letter, compensation structure, performance appraisal rating, KPI achievement records, and company bonus policies to quantify your exact claim and establish statutory vs contractual liability.',
                      },
                      {
                        step: 'Step 2',
                        title: 'Custom Advocate Legal Notice Drafting (Day 1-2)',
                        desc: 'We draft a bespoke, hard-hitting statutory legal notice invoking the Payment of Bonus Act, 1965, Section 73 of the Indian Contract Act, 1872, and 18% commercial interest under the Interest Act, demolishing standard corporate forfeiture excuses.',
                      },
                      {
                        step: 'Step 3',
                        title: 'Multi-Channel Legal Dispatch with Tracking (Day 2)',
                        desc: 'The notice is dispatched via Speed Post Registered AD to the company registered office and corporate headquarters, accompanied by digital service via official registered email to the Board of Directors, Managing Director, and HR Head, along with formal WhatsApp delivery.',
                      },
                      {
                        step: 'Step 4',
                        title: 'Section 63 BSA Electronic Delivery Certification (Day 3)',
                        desc: 'We secure postal delivery tracking confirmations, email delivery logs, and WhatsApp read receipts, generating a legally valid Section 63 BSA electronic evidence certificate for trial readiness.',
                      },
                      {
                        step: 'Step 5',
                        title: '15-Day Peremptory Compliance Window & Advocate Negotiation (Days 4-15)',
                        desc: 'During the 15-day notice period, over 80% of companies instruct their legal departments to settle the claim directly to prevent quasi-judicial escalation, director liability, and reputational exposure.',
                      },
                      {
                        step: 'Step 6',
                        title: 'Quasi-Judicial & Civil Enforcement (Day 16 Onward)',
                        desc: 'If the employer fails to disburse the dues, our panel advocates immediately file a Section 21 recovery application before the Labour Commissioner, approach the Payment of Wages Authority, or institute an Order 37 summary suit in civil court.',
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-4 p-5 rounded-2xl border border-slate-100 bg-slate-50/60">
                        <span className="shrink-0 w-16 h-8 rounded-lg bg-[#DC2626] text-white flex items-center justify-center text-xs font-black">
                          {item.step}
                        </span>
                        <div>
                          <h3 className="font-extrabold text-slate-900 text-sm md:text-base mb-1">
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

                {/* ── SECTION 8: FAQS ACCORDION ───────────────────────────── */}
                <section id="faqs" className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                    8. Frequently Asked Questions (FAQs)
                  </h2>
                  <div className="space-y-3">
                    {faqs.map((faq, idx) => {
                      const isExpanded = expandedFaqs.includes(`faq-${idx}`);
                      return (
                        <div
                          key={idx}
                          className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 bg-white"
                        >
                          <button
                            onClick={() => toggleFaq(idx)}
                            className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#DC2626] text-sm md:text-base cursor-pointer"
                            aria-expanded={isExpanded}
                          >
                            <span>{faq.question}</span>
                            <span className="text-slate-400 shrink-0 text-xl">
                              {isExpanded ? '−' : '+'}
                            </span>
                          </button>
                          {isExpanded && (
                            <div className="px-6 pb-5 pt-1 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                              <p>{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* ── EXTERNAL LEGAL CITATIONS ───────────────────────────── */}
                <section className="border-t border-slate-200 pt-8 space-y-4">
                  <h3 className="font-black text-slate-900 text-base">
                    Statutory References &amp; Authoritative Legal Sources
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <a
                        href="https://www.indiacode.nic.in/handle/123456789/1513"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline font-bold block mb-1"
                      >
                        Payment of Bonus Act, 1965 (India Code) →
                      </a>
                      <span className="text-slate-500">
                        Section 8 (Eligibility), Section 10 (Minimum Bonus), Section 19 (Time-limit), Section 21 (Recovery), Section 28 (Penalties).
                      </span>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <a
                        href="https://www.indiacode.nic.in/handle/123456789/2187"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline font-bold block mb-1"
                      >
                        Indian Contract Act, 1872 (India Code) →
                      </a>
                      <span className="text-slate-500">
                        Section 73 (Compensation for breach of contract) &amp; Section 23 (Agreements contrary to public policy).
                      </span>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <a
                        href="https://clc.gov.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline font-bold block mb-1"
                      >
                        Chief Labour Commissioner (Central) →
                      </a>
                      <span className="text-slate-500">
                        Official guidelines for filing Section 21 recovery claims and enforcement of labour awards.
                      </span>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <a
                        href="https://www.indiacode.nic.in/handle/123456789/2347"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-800 hover:underline font-bold block mb-1"
                      >
                        Payment of Wages Act, 1936 (India Code) →
                      </a>
                      <span className="text-slate-500">
                        Section 2(vi) (Definition of Wages including Bonus) &amp; Section 15 (Claims arising out of deductions).
                      </span>
                    </div>
                  </div>
                </section>

                {/* ── TOPICAL AUTHORITY & INTERNAL INTERLINKING ─────────── */}
                <section className="border-t border-slate-200 pt-8 space-y-4">
                  <h3 className="font-black text-slate-900 text-base">
                    Related Employment Dues &amp; Legal Notice Guides
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {[
                      {
                        title: 'Legal Notice to Company for Not Paying Gratuity',
                        href: '/send-a-legal-notice/company-not-paying-gratuity',
                      },
                      {
                        title: 'Legal Notice for Leave Encashment Not Paid by Employer',
                        href: '/send-a-legal-notice/leave-encashment-not-paid-by-employer',
                      },
                      {
                        title: 'Legal Notice to Employer for Not Paying PF (Provident Fund)',
                        href: '/send-a-legal-notice/employer-not-paying-pf-provident-fund',
                      },
                      {
                        title: 'Legal Notice to Employer for Deducting Salary Without Notice',
                        href: '/send-a-legal-notice/employer-deduct-salary-without-notice-legal-action',
                      },
                      {
                        title: 'Legal Notice for Delayed Salary from Startup Company',
                        href: '/send-a-legal-notice/delayed-salary-startup-company-india',
                      },
                      {
                        title: 'Legal Notice for Wrongful Termination & Unpaid Notice Pay',
                        href: '/legal-notice-wrongful-termination-unpaid-notice-period-salary',
                      },
                      {
                        title: 'Legal Notice for Salary Deducted During Notice Period',
                        href: '/send-a-legal-notice/salary-deducted-during-notice-period-legal-action-india',
                      },
                      {
                        title: 'Legal Steps to Recover Unpaid Salary from Employer in India',
                        href: '/what-are-the-legal-steps-to-recover-unpaid-salary-from-an-employer-in-india',
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
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    Legal Recovery is India&apos;s trusted online legal notice and dispute resolution
                    platform, connecting corporate employees, software professionals, managers, and executives with seasoned panel advocates for rapid, advocate-vetted statutory demand notices
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
                  Company Withholding Your Earned Bonus?
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  Send an advocate-vetted statutory notice today. Over 80% of companies disburse withheld bonuses and variable pay within 15 days of notice service.
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
                  <span className="text-slate-400 text-xs">/5 (385 reviews)</span>
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
                  { stat: '80%', label: 'Companies settle bonus dues within 15 days of notice' },
                  { stat: '18% p.a.', label: 'Commercial interest claimed on delayed disbursements' },
                  { stat: 'Same Day', label: 'Advocate notice drafted and dispatched' },
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
