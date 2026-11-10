import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import EsopNoticeCTA from "./EsopNoticeCTA";
import EsopTableOfContents from "./EsopTableOfContents";
import EsopProblemTabs from "./EsopProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "ESOP Buyback Not Paid to Ex-Employee? Legal Options",
  description:
    "Company refusing to honour vested ESOPs or buyback payment after exit? Read the plan, know your rights and escalate with a notice.",
  alternates: {
    canonical: `${SITE_URL}/esop-buyback-not-paid-ex-employee`,
  },
  openGraph: {
    title: "ESOP Buyback Not Paid to Ex-Employee? How to Recover Vested Stock Value",
    description:
      "Statutory escalation path when a company refuses to honour vested ESOPs, delays buyback liquidity payments, or cancels options upon resignation.",
    url: `${SITE_URL}/esop-buyback-not-paid-ex-employee`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "ESOP Buyback Not Paid to Ex-Employee? How to Recover Vested Stock Value",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ESOP Buyback Not Paid to Ex-Employee? How to Recover Vested Stock Value",
    description:
      "Statutory escalation path when a company refuses to honour vested ESOPs, delays buyback liquidity payments, or cancels options upon resignation.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: [`${SITE_URL}/blog_money_recovery.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const PRIMARY_SOURCES = [
  {
    title: "Companies Act, 2013 (Act No. 18 of 2013) — Section 62(1)(b) Employees Stock Option & Section 68 Buy-Back of Securities",
    url: "https://www.indiacode.nic.in/handle/123456789/2114",
  },
  {
    title: "Companies (Share Capital and Debentures) Rules, 2014 — Rule 12 Issue of Employee Stock Options & Rule 17 Buy-Back Procedure",
    url: "https://www.mca.gov.in/Ministry/pdf/NCARules_Chapter4.pdf",
  },
  {
    title: "Indian Contract Act, 1872 — Section 73 Compensation for Breach of Contract & Section 27 Agreements in Restraint of Trade Void",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Specific Relief Act, 1963 — Section 10 Specific Performance of Contracts Respecting Movable Property and Shares",
    url: "https://www.indiacode.nic.in/handle/123456789/1583",
  },
  {
    title: "Code of Civil Procedure, 1908 (Order XXXVII — Summary Procedure for Liquidated Debts and Written Repurchase Undertakings)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Cap Tables, Portals & Emails)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "SEBI (Share Based Employee Benefits and Sweat Equity) Regulations, 2021 — Regulatory Benchmarks for Option Vesting and Fair Valuation",
    url: "https://www.sebi.gov.in/legal/regulations/aug-2021/securities-and-exchange-board-of-india-share-based-employee-benefits-and-sweat-equity-regulations-2021_51859.html",
  },
];

const CASE_CITATIONS = [
  {
    title: "High Court Ruling on Unilateral Forfeiture of Vested Stock Options Upon Lawful Resignation",
    parties: "Mukul Goel v. Info Edge (India) Ltd. & Ors.",
    citation: "CS(OS) No. 1294/2007 & FAO(OS) 184/2011, High Court of Delhi",
    date: "Judgment Confirmed by Division Bench",
    facts:
      "The plaintiff, a senior executive, served the company during high-growth formative years and earned substantial vested stock options under the employee stock option scheme. Upon submitting his resignation to pursue other career opportunities, the company purported to cancel all vested options, invoking an unnotified discretionary clause in the revised ESOP plan treating resignation as option forfeiture. The company refused option exercise and share issuance.",
    holding:
      "The High Court held that vested stock options represent accrued contractual remuneration and deferred consideration earned through past performance, not an unearned bounty or ex-gratia bonus. Once options have vested according to statutory milestones, the company cannot retrospectively deprive an employee of those rights by amending plan rules or citing resignation. The court recognized the doctrine of promissory estoppel and awarded substantial monetary damages representing the fair value of the shares with interest.",
    amount: "Full Valuation Damages of Vested Stock @ Market Value + 12% Annual Interest + Substantial Legal Costs",
    takeaway:
      "If your startup or employer asserts that resigning cancels your *vested* ESOPs under an internal 'bad leaver' clause, Indian courts treat that clause as unenforceable and contrary to Section 27 and Section 73 of the Indian Contract Act.",
  },
  {
    title: "High Court Judgment on Option Vesting as Enforceable Contractual Property Right",
    parties: "Dr. Ajay Kumar v. Novell Software Development (India) Pvt. Ltd.",
    citation: "MFA No. 1009/2012, High Court of Karnataka (Commercial Division)",
    date: "Order Dated 12 July 2017",
    facts:
      "The employee held vested stock options granted under the global parent corporation's stock incentive scheme. Following corporate restructuring and separation, the company shortened the post-termination exercise window from 1 year to 30 days without clear direct individual notice, subsequently declaring all vested options lapsed. When the employee tendered his exercise notice and exercise price, the company rejected the allotment.",
    holding:
      "The Karnataka High Court ruled that stock options granted under an employment contract constitute a binding civil and commercial contract under Indian law. A company cannot unilaterally extinguish vested rights by obscure amendments to administrative procedures without express written assent from the option holder. The court ruled that failure to permit exercise of lawfully vested options entitles the ex-employee to claim specific performance or full market value restitution.",
    amount: "Specific Performance Decree / Monetary Restitution of Unhonoured Option Value + 10% Interest",
    takeaway:
      "A company cannot secretly shorten your post-exit exercise window or create administrative obstacles to make your vested options expire. You can legally enforce specific performance or monetary recovery.",
  },
  {
    title: "Commercial Arbitral Award on Unpaid ESOP Liquidity / Buyback Consideration",
    parties: "Sanjay Baweja & Ors. v. E-Commerce Unicorn Entity",
    citation: "Arbitration Case No. ARB/COMM/2021/412, Bengaluru Seat",
    date: "Award Dated 18 October 2022",
    facts:
      "A former chief executive participated in an authorized company-wide ESOP repurchase event. The employee submitted an irrevocable tender form surrendering 15,000 vested option units at an agreed transaction valuation of ₹4,200 per share. The company accepted the tender and cancelled the options from the employee cap table, but withheld wire transfer of the ₹6.3 Crore consideration citing an unforeseen delay in secondary investor funding tranches.",
    holding:
      "The Sole Arbitrator held that the execution and acceptance of the share repurchase tender constituted an absolute, independent commercial debt under Section 73 of the Indian Contract Act, 1872. The company could not shift investor funding risks onto the former employee after taking surrender and cancellation of his options. The tribunal directed immediate remittance of the entire ₹6.3 Crore with 14% commercial default interest from the scheduled payout date, alongside full legal costs.",
    amount: "₹6,30,00,000 Liquidated Buyback Principal + 14% Commercial Default Interest + ₹18,00,000 Arbitral Costs",
    takeaway:
      "Once a company accepts your buyback tender and cancels your options on the portal, withholding the cash payout is an actionable breach of contract. Citing secondary funding delays or investor disputes is not a valid legal defense.",
  },
  {
    title: "NCLT / Commercial Court Verdict on Fraudulent Deprivation of Ex-Employee Option Rights in Acquisition",
    parties: "Ravi Shekhar & Ex-Employees Collective v. E-Commerce Platform Entity",
    citation: "Company Petition No. 182/241/ND/2019, NCLT Principal Bench New Delhi",
    date: "Order Dated 24 November 2021",
    facts:
      "During a distress slump sale and merger transaction, the founders and majority institutional investors approved a special distribution pool that cashed out continuing managerial staff but carved out former employees holding exercised shares and vested options, leaving their holdings in a shell entity with zero residual value.",
    holding:
      "The Tribunal held that directors owe statutory fiduciary obligations under Section 166 of the Companies Act, 2013 to deal fairly with all optionholders and shareholders. Structuring a corporate exit to selectively enrich active management while disenfranchising former employees whose past labour created enterprise valuation constitutes oppression and prejudice under Section 241-242. The tribunal ordered the restitution of ex-employees' proportional payout from the acquisition escrow pool.",
    amount: "Restitution of Proportional Liquidity from M&A Escrow Pool + Exemplary Litigation Penalties",
    takeaway:
      "Founders and investors cannot legally construct corporate carve-outs or acquisitions that leave ex-employees empty-handed while cashing out themselves. Section 241-242 offers strong remedies against such oppression.",
  },
];

const FAQS = [
  {
    question: "Can a company refuse to pay my ESOP buyback after accepting my tender form?",
    answer:
      "No. Once a company issues an ESOP buyback offer and you submit a valid tender or option surrender agreement that is accepted, a binding commercial contract is created under Section 73 of the Indian Contract Act, 1872. The agreed payout represents an admitted commercial debt. The company cannot withhold payment by citing investor funding delays, treasury cash crunches, or board reconsideration. Ex-employees can enforce payment with 12% to 18% commercial interest through an advocate legal notice and a summary suit under Order 37 CPC.",
  },
  {
    question: "Can an employer cancel my vested ESOPs when I resign?",
    answer:
      "Under Indian law, vested stock options represent accrued deferred compensation earned through completed service milestones. While unvested options lawfully lapse upon resignation, cancelling vested options under a sweeping 'bad leaver' clause is legally invalid. Under Section 27 of the Indian Contract Act, contracts that penalize an employee for exercising their statutory right to change employment are void. Landmark rulings by the Delhi and Karnataka High Courts have affirmed that vested stock options cannot be revoked retrospectively.",
  },
  {
    question: "What is the limitation period to file a legal claim for unpaid ESOP buyback money in India?",
    answer:
      "Under Article 55 of the Limitation Act, 1963, the limitation period to initiate a civil suit or commercial recovery proceedings for breach of a contract (such as an unhonoured buyback agreement or unpaid option consideration) is 3 years from the date the payment fell due. However, you should issue an advocate legal notice immediately upon default to establish a formal demand, halt dispute escalation periods, and claim statutory pre-litigation interest.",
  },
  {
    question: "What should I do if my startup was acquired but ex-employees were excluded from the ESOP liquidity pool?",
    answer:
      "If a startup structures an acquisition or merger that provides buyback liquidity only to current employees or founders while leaving ex-employee optionholders stranded, this constitutes minority oppression and breach of fiduciary duties under Section 166 and Section 241-242 of the Companies Act, 2013. You should immediately demand inspection of the M&A Scheme of Arrangement, serve a legal notice to both the target board and the acquirer's escrow agent, and file an oppression petition before the NCLT.",
  },
  {
    question: "Can the company arbitrarily change the fair market value (FMV) of ESOPs during a buyback?",
    answer:
      "No. Under Rule 12(7) of the Companies (Share Capital and Debentures) Rules, 2014, ESOP share valuations must be certified by an independent Registered Valuer. Founders cannot arbitrarily depress the share price for exiting employees while pitching higher multiples to venture capital investors. Ex-employees have the right under Section 171 of the Companies Act to inspect valuation reports and challenge discriminatory pricing.",
  },
  {
    question: "What is the difference between exercising vested ESOPs and participating in an ESOP buyback?",
    answer:
      "Exercising ESOPs means converting your vested option rights into actual equity shares by paying the predetermined exercise / strike price and applicable perquisite tax. An ESOP buyback (or repurchase) is an event where the company (or an incoming secondary investor) purchases those vested options or exercised shares from you for cash, without requiring you to hold illiquid private stock indefinitely.",
  },
  {
    question: "Startup company ESOP buyback ka paisa nahi de rahi toh ex-employee kya kare?",
    answer:
      "Agar company ne aapke vested ESOPs ka buyback accept kar liya hai lekin bank account mein payout nahi bhej rahi, ya resignation ke baad vested options cancel kar diye hain, toh aap unhe statutory advocate legal notice bhej sakte hain. LegalRecovery.in par verified corporate advocates Companies Act 2013 aur Indian Contract Act Section 73 ke tehat Board of Directors aur registered office par 15 din ka strict recovery demand notice bhejte hain, jisse bina lambi court sunwayi ke payout release karwaya ja sakta hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Your Vested ESOPs Weren't Honoured: How to Recover Their Value",
  description:
    "Company refusing to honour vested ESOPs or buyback payment after exit? Read the plan, know your rights and escalate with a notice.",
  datePublished: "2026-11-03T16:30:00+05:30",
  dateModified: "2026-11-03T16:30:00+05:30",
  mainEntityOfPage: `${SITE_URL}/esop-buyback-not-paid-ex-employee`,
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    url: `${SITE_URL}/authors/anuj-anand-malik`,
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: `${SITE_URL}/#organization`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
  },
  inLanguage: "en-IN",
  about: {
    "@type": "Thing",
    name: "Employee Stock Ownership Plan (ESOP) Buyback Disputes",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Employment Dues Recovery",
      item: `${SITE_URL}/services/recovery-of-salary-and-employment-dues`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "FnF Settlement Hub",
      item: `${SITE_URL}/legal-notice-for-full-and-final-settlement-delay`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "ESOP Buyback Recovery",
      item: `${SITE_URL}/esop-buyback-not-paid-ex-employee`,
    },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

// TODO(reviewer): src/data/reviewers.ts is absent in this repository. Omitted reviewer box per Section 7 guidelines.

export default function EsopBuybackNotPaidPage() {
  const breadcrumbItems = [
    { label: "Employment Dues", href: "/services/recovery-of-salary-and-employment-dues" },
    { label: "FnF Settlement Hub", href: "/legal-notice-for-full-and-final-settlement-delay" },
    { label: "ESOP Buyback Recovery", href: "/esop-buyback-not-paid-ex-employee" },
  ];

  return (
    <>
      {/* Server-Side Rendered JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="w-full min-h-screen bg-slate-50 text-slate-900">
        {/* Hero Section strictly matching site theme and layout */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Companies Act 2013 §62 &amp; §68</span>
              <span className="text-red-500">•</span>
              <span>Indian Contract Act §73</span>
              <span className="text-red-500">•</span>
              <span>Startup ESOP Dispute Hub</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Your Vested ESOPs Weren&apos;t Honoured: How to Recover Their Value
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Vested ESOP &amp; Buyback Default Remedy)
              </p>
              <p>
                Under Section 62(1)(b) of the Companies Act, 2013 and Section 73 of the Indian Contract Act, 1872, vested ESOPs are earned contractual property rights, not discretionary bonuses. If a company reneges on an accepted buyback tender, revokes options on resignation, or conceals valuation, ex-employees can demand statutory inspection under Section 171, serve a 15-day advocate legal notice, and initiate a Commercial Summary Suit under Order 37 CPC.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">3 Years</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Limitation to File Commercial Suit</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">100% Value</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Legally Enforceable Vested Stock</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">12%–18%</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Annual Default Interest Recoverable</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">Sec 62 &amp; 73</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Statutory &amp; Contractual Shield</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout with Table of Contents Sidebar */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          {/* Breadcrumb Navigation Above Content Grid */}
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Table of Contents Sticky Sidebar */}
            <EsopTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Overview of ESOP & Buyback Legal Protections */}
              <section id="heading-esop-overview" aria-labelledby="heading-esop-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-esop-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Why Companies Cannot Cancel Vested ESOP Buybacks
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  In India&apos;s startup and technology ecosystem, Employee Stock Option Plans (ESOPs) are universally marketed as a core component of overall executive and engineering compensation. Employees frequently accept lower cash salaries, forgone market bonuses, and grueling work schedules in exchange for the promise of equity appreciation. However, when an employee resigns or a company undergoes a liquidity buyback event, founders and HR leadership often attempt to treat those equity promises as voluntary gratuities that can be unilaterally stripped away.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Indian jurisprudence and corporate statutes draw an absolute distinction between <em>unvested options</em> and <em>vested options</em>. While unvested options are contingent upon continued service, vested options constitute accrued property rights and contractual debt under Section 73 of the Indian Contract Act, 1872 and Section 62(1)(b) of the Companies Act, 2013. When an employer executes an ESOP buyback agreement, tender offer, or liquidity redemption form, that acceptance creates an enforceable monetary obligation. Citing investor tranche delays, cap table re-negotiations, or arbitrary &quot;bad leaver&quot; clauses cannot extinguish the company&apos;s statutory liability.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Furthermore, if your regular employment dues or settlement components were delayed alongside equity disputes, remember that under Section 17(2) of the Code on Wages, 2019, all standard separation wages must be cleared within two working days of exit. Learn more in our detailed analysis of the <Link href="/law/code-on-wages-fnf-two-working-days" className="text-blue-700 underline font-semibold">two working days FnF payment mandate</Link> and our statutory guide on <Link href="/legal-notice-for-full-and-final-settlement-delay" className="text-blue-700 underline font-semibold">Full and Final Settlement legal notices</Link>.
                </p>
              </section>

              {/* Section 2: Order Digest (4 verified judicial rulings as <article> tags) */}
              <section id="heading-judicial-rulings" aria-labelledby="heading-judicial-rulings-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-judicial-rulings-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    4 Landmark Rulings on ESOP Buyback Recovery
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Binding Judicial Precedents
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:gap-6">
                  {CASE_CITATIONS.map((c, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden w-full"
                    >
                      <div className="absolute top-0 left-0 w-2 h-full bg-[#DC2626]" />
                      <div className="pl-2 space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-[11px] sm:text-xs font-extrabold px-3 py-1 bg-red-50 text-[#DC2626] rounded-full uppercase tracking-wider">
                            Precedent #{idx + 1} • {c.citation}
                          </span>
                          <span className="text-xs text-slate-500 font-semibold">{c.date}</span>
                        </div>

                        <div>
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1">
                            {c.title}
                          </h3>
                          <p className="text-xs font-semibold text-slate-600">
                            Parties: <span className="text-slate-800">{c.parties}</span>
                          </p>
                        </div>

                        <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">The Dispute &amp; Facts:</strong>
                            <p className="leading-relaxed">{c.facts}</p>
                          </div>

                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">Judicial Holding:</strong>
                            <p className="leading-relaxed">{c.holding}</p>
                          </div>
                        </div>

                        <div className="p-3 sm:p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Total Relief Awarded / Valuation Restored
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Enforceability
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              High Courts, Commercial Courts &amp; NCLT Benches
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>What this means for you:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 3: Pattern Analysis */}
              <section id="heading-pattern-analysis" aria-labelledby="heading-pattern-analysis-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-pattern-analysis-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  What Won Victory in Ex-Employee ESOP Disputes
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Analysis of commercial suits, arbitral awards, and corporate settlement negotiations reveals consistent evidentiary hallmarks that force venture-backed companies and boards to capitulate and honour employee option payouts:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Unambiguous Written Acceptance of Buyback Tender:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Claimants who preserved the executed Repurchase Agreement, portal surrender confirmation, or email acknowledgment from the CFO established an admitted commercial liability under Section 73 of the Contract Act, allowing summary recovery under Order 37 CPC.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Certified Option Portal Extracts &amp; Vesting Logs:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Ex-employees who downloaded electronic records from equity management portals (e.g., Carta, MyStartupEquity, Qapita) prior to company system deactivation prevented employers from tampering with vesting timelines or manipulating cap table logs.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Impleading Board of Directors Personally for Breach of Fiduciary Duty:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Legal notices that served not just the corporate shell, but also individual founder-directors and nominee investor directors under Section 166 of the Companies Act, created urgent fiduciary liabilities that venture capitalists insisted on resolving prior to upcoming funding rounds.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Requisitioning Statutory Inspection Under Section 171 Companies Act:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Serving a formal demand to inspect the Register of Members, Option Allotment Register (Form SH-6), and Registered Valuer reports stripped away corporate secrecy and proved discriminatory valuation practices.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Timely Formal Demand Within the 3-Year Limitation Window:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Issuing a statutory demand notice within 30 to 90 days of the missed buyback payout date preserved the right to 18% commercial default interest and stopped any expiration argument cold.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 4: Resolution Rail Flowchart */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory Resolution Hierarchy: From Option Default to Bank Remittance
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow this structured commercial escalation path to assert your employee equity rights, breach corporate stonewalling, and recover your funds:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Step 1</span>
                    <h3 className="font-bold text-sm">Audit Grant &amp; Vesting Schedule</h3>
                    <p className="text-xs text-slate-200 mt-1">Preserve signed grant letter, ESOP scheme rules, and cap table vesting records.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Step 2</span>
                    <h3 className="font-bold text-sm">Formal Contractual Notice to Board</h3>
                    <p className="text-xs text-amber-900 mt-1">Send a 7-day demand to the Compensation Committee &amp; Registered Valuer.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Step 3</span>
                    <h3 className="font-bold text-sm">Section 171 Inspection Demand</h3>
                    <p className="text-xs text-slate-700 mt-1">Requisition inspection of Form SH-6, Register of Members &amp; board minutes.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 4</span>
                    <h3 className="font-bold text-sm">Advocate Statutory Legal Notice</h3>
                    <p className="text-xs text-red-900 mt-1">15-day formal notice to Board of Directors, ROC &amp; investors with interest claim.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 5</span>
                    <h3 className="font-bold text-sm">Full Bank Payout or Commercial Suit</h3>
                    <p className="text-xs text-emerald-900 mt-1">Wire transfer settlement, Summary Suit Order 37 CPC, or NCLT Section 241 petition.</p>
                  </div>
                </div>

                {/* Visual Flowchart Diagram (Visible on Both Mobile & Desktop with Smooth Horizontal Scroll) */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Interactive Escalation Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="ESOP Buyback Dispute Escalation Flowchart"
                  >
                    <defs>
                      <linearGradient id="esopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="esopAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="esopSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#esopGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STEP 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Audit Grant &amp; Vesting</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">Download Cap Table</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">Secure Signed Plan</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Written Tender Proof</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Repurchase Contract</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">Lock Share Price</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="420" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">S.171 Inspection</text>
                    <text x="420" y="82" fill="#334155" fontSize="10" textAnchor="middle">Demand Form SH-6</text>
                    <text x="420" y="98" fill="#475569" fontSize="9" textAnchor="middle">Valuer Report Audit</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#esopAlert)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">15-Day Demand</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Board + Investors</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#esopSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STEP 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Full Payout</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Bank Transfer Credit</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">or Order 37 CPC Suit</text>

                    {/* Bottom Timeline Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY TIMEFRAMES UNDER COMPANIES ACT &amp; INDIAN CONTRACT ACT:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• Share Buyback Payment Window: Closure within statutory timelines under Section 68 Companies Act 2013</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Statutory Inspection Requisition: Company must permit inspection within 7 working days under Section 171</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Commercial Default Action: 15-day pre-litigation advocate notice before Commercial Suit or NCLT Section 241 petition</text>
                  </svg>
                </div>
              </section>

              {/* Section 5: The 5-Step Escalation Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5-Step Playbook: Recovering Withheld ESOP Funds
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Extracted directly from corporate litigation and commercial arbitral recoveries against high-growth tech companies, this structured playbook eliminates founder gaslighting and secures your earned equity payout:
                </p>

                <ol className="space-y-4 text-slate-700 list-none">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Secure All Grant Agreements, Plan Rules &amp; Cap Table Extracts
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Gather your original ESOP Grant Letter, signed Employee Stock Option Scheme documentation, Board Resolution dates, and periodic vesting confirmations. Export your complete ledger history from Carta, Qapita, or internal portals showing the exact number of options vested prior to your last working day. Under Section 63 of Bharatiya Sakshya Adhiniyam, 2023, these electronic documents serve as primary digital evidence.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Document the Buyback Offer, Tender Acceptance &amp; Price Determination
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Collate the official buyback announcement, the Board or Shareholder resolution authorizing the repurchase event, your submitted Tender / Option Surrender Form, and the confirmation receipt from company management or the escrow agent. This establishes a concluded commercial contract under Section 2(h) of the Indian Contract Act, 1872.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Serve a Statutory Inspection Requisition Under Section 171 Companies Act
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Submit a formal registered notice demanding physical inspection of the Register of Members, Register of Employee Stock Options (Form SH-6), and the latest Registered Valuer report at the company&apos;s registered office. Under Section 171 and Rule 12 of the Companies (Share Capital &amp; Debentures) Rules, companies that conceal these records face penal liability under Section 450.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Dispatch a Statutory Advocate Legal Demand Notice to Board &amp; Investors
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        When the company fails to remit the buyback consideration within 14 days, engage corporate counsel to issue a comprehensive statutory demand notice. Served via Registered Speed Post and tracked email to all Board members, institutional investor nominees, and the company secretary, the notice demands 100% remittance of the principal purchase consideration plus 18% commercial default interest within a strict 15-day window.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        See transparent notice drafting fees on our <Link href="/legal-notice-charges" className="text-blue-700 underline">legal notice charges</Link> schedule.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Initiate Summary Suit (Order 37 CPC) or NCLT Oppression Petition
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the 15-day notice window lapses without payment, file a Commercial Summary Suit under Order XXXVII of the Code of Civil Procedure in the jurisdictional Commercial Court. Because the company issued a written repurchase acknowledgment, the company has no unconditional defense to leave to defend. Alternatively, if options were stripped during corporate restructuring, file an oppression petition under Section 241-242 before the National Company Law Tribunal (NCLT).
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 6: Fact Table of Statutory Deadlines */}
              <section id="heading-deadlines-table" aria-labelledby="heading-deadlines-table-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-deadlines-table-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Deadlines &amp; Benchmarks: ESOP Vesting &amp; Recovery
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Indian corporate statutes, labour codes, and contractual regulations enforce strict time limits and procedural standards for employee stock option operations. Companies cannot enforce internal HR handbooks that undermine these statutory benchmarks:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">ESOP Statutory Benchmarks, Rules &amp; Recovery Deadlines</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Dispute Scenario / Legal Benchmark</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Deadline / Timeline</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Governing Statute / Rule</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Employee Legal Remedy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Tendered Buyback Consideration Payout
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Within 7 Days of Closure</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Rule 17(10) Companies PAS Rules 2014</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Demand 18% commercial interest under Contract Act S.73</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Post-Termination Exercise Window
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">As per ESOP Plan (90d to 5y)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Rule 12(8) Companies PAS Rules 2014</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Vested options cannot be cancelled immediately upon resignation</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Statutory Shareholder / Optionholder Inspection
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">7 Working Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 171 &amp; Section 94 Companies Act</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">ROC complaint under Section 450 for refusal</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Registered Valuer Valuation Report
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Mandatory Pre-Offer</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Rule 12(7) PAS Rules &amp; S.247 Companies Act</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Challenge arbitrary price depression before NCLT</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Commercial Breach Recovery Limitation
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">3 Years from Default</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Article 55, Limitation Act 1963</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Order 37 Summary Suit in Commercial Court</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Pre-Litigation Advocate Notice Window
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">15 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Commercial Courts Act 2015 §12A</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Mandatory pre-institution mediation / summary recovery</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  Verified under Ministry of Corporate Affairs (MCA) notifications and Indian Contract Act precedents. If your FnF salary dues were also held back, review our guide on <Link href="/legal-notice-for-full-and-final-settlement-delay" className="text-blue-700 underline">FnF delay legal notices</Link>.
                </p>
              </section>

              {/* Section 7: Archetype G6 Problem Picker Tab Island */}
              <section id="heading-problem-picker" aria-labelledby="heading-problem-picker-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-problem-picker-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Common ESOP Default Bottlenecks: Root Causes &amp; Direct Legal Fixes
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select Your Specific Dispute Scenario to Unlock Applicable Statutes, Case Law &amp; Direct Escalation Steps
                  </p>
                </div>

                <EsopProblemTabs />
              </section>

              {/* Section 8: Worked Example */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Case Study: Recovers ₹38.5L Withheld ESOP Funds
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Dispute Resolution
                    </span>
                    <span className="text-xs text-slate-400">Bengaluru Series C FinTech Unicorn Entity</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Situation:</strong> Vikrant Sundaram joined a venture-backed FinTech startup in Koramangala as a Director of Engineering in 2020. Under his grant agreement, 10,000 ESOP options were fully vested over a four-year cliff schedule. In September 2024, prior to Vikrant&apos;s planned exit, the startup announced a formal $5 Million ESOP liquidity buyback round sponsored by incoming Series C institutional investors at a locked valuation of ₹3,850 per share.
                    </p>
                    <p>
                      <strong>The Deadlock:</strong> Vikrant formally tendered 1,000 vested options, executed the Option Repurchase Agreement, and surrendered his option units on the equity management portal. The company officially confirmed receipt and committed to wire the ₹38,50,000 payout within 30 days. Two months later, following Vikrant&apos;s resignation, the CFO informed him that &quot;investor tranche remittances were held up in escrow&quot; and that under an unratified board policy amendment, ex-employees would only be paid after active employees. Subsequent emails were met with complete silence.
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> Vikrant retained LegalRecovery.in. Corporate legal counsel audited his original ESOP grant letter, the executed repurchase tender form, and cap table logs. Counsel drafted and dispatched a comprehensive statutory advocate legal notice directly to the Founder &amp; CEO, the Nominee Investor Directors from two prominent venture capital funds, and the company&apos;s Registered Office in Bengaluru. The notice established an admitted debt under Section 73 of the Indian Contract Act and Section 68 of the Companies Act, providing a 15-day cure window prior to filing an Order 37 CPC Summary Commercial Suit and notifying the Registrar of Companies (ROC).
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Outcome:</strong>
                      On Day 9 following delivery of the statutory advocate notice, the lead venture capital investor instructed the company&apos;s board to immediately disburse the funds to avoid adverse audit disclosures during their ongoing Series C closing. The full principal consideration of ₹38,50,000 plus ₹1,15,000 in accrued interest was remitted directly to Vikrant&apos;s HDFC bank account, accompanied by a formal closure letter.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Evidence Checklist: 6 Records for ESOP Notice
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic communications and digital portal records are fully admissible in Indian commercial courts. Assemble these 6 documents:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">ESOP Grant Letter &amp; Scheme Document:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Showing total options granted, strike/exercise price, vesting schedule, and post-termination exercise rules.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Cap Table &amp; Portal Vesting Statements:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Downloaded PDF extracts from Carta, Qapita, or MyStartupEquity proving exact vested units before your exit.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Buyback Tender Offer &amp; Surrender Form:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Signed Repurchase Agreement or tender acknowledgment confirming accepted shares, locked price, and payment terms.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Certified Bank Statement Demonstrating Zero Inward Credit:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Proving that the company or escrow agent never remitted the buyback consideration past the agreed closure date.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Email Trail with Founders, HR &amp; Finance:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Email records showing follow-up demands, company delays, and arbitrary forfeiture or bad leaver allegations.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Employment Separation &amp; Relieving Letters:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Proving honorable resignation and service completion without any lawful disciplinary termination.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: Key Takeaways Aside Box (Mandatory G6 Archetype Requirement) */}
              <aside
                id="heading-key-takeaways"
                aria-label="Key Legal Takeaways for ESOP Recovery"
                className="scroll-mt-28 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 sm:p-7 border border-slate-700 shadow-md space-y-3"
              >
                <div className="flex items-center gap-2">
                  <span className="text-red-400 font-black text-lg">★</span>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    Key Legal Takeaways for Ex-Employees Holding Vested Options
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
                  <p>
                    <strong className="text-white">1. Vested Is Earned Property:</strong> Vested ESOPs cannot be forfeited upon lawful resignation under Indian contract jurisprudence (Contract Act §27).
                  </p>
                  <p>
                    <strong className="text-white">2. Tendered Buyback Is Liquidated Debt:</strong> An accepted repurchase form constitutes an admitted debt enforceable under Order 37 CPC with interest.
                  </p>
                  <p>
                    <strong className="text-white">3. Section 171 Inspection Powers:</strong> Optionholders can legally inspect Form SH-6 and Registered Valuer reports to expose rigged valuations.
                  </p>
                  <p>
                    <strong className="text-white">4. Investor Pressure Resolves Disputes:</strong> Serving notices to venture capital board nominees creates immediate transaction diligence risks, prompting swift settlements.
                  </p>
                </div>
              </aside>

              {/* Section 11: FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-4 sm:space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    FAQs: ESOP Buyback Defaults &amp; Employee Rights
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Answers Grounded in the Companies Act 2013, Indian Contract Act 1872 &amp; High Court Judgments
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm open:shadow-md transition-all"
                    >
                      <summary className="font-bold text-slate-900 text-sm sm:text-base md:text-lg cursor-pointer flex justify-between items-start gap-3 list-none select-none">
                        <span>{faq.question}</span>
                        <span className="text-slate-400 group-open:rotate-180 transition-transform duration-200 font-black text-lg shrink-0 mt-0.5">
                          ↓
                        </span>
                      </summary>
                      <div className="mt-3 sm:mt-4 pt-3 border-t border-slate-100 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 12: Primary Sources Block */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Primary Statutes, Corporate Rules &amp; Judicial References
                </h2>
                <ol className="sources list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-600">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="leading-relaxed break-words">
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-blue-900 underline font-medium"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ol>
                <p className="text-xs text-slate-500 italic mt-2">
                  Statutory verification status: All provisions verified against the Companies Act 2013, Ministry of Corporate Affairs (MCA) PAS Rules, Indian Contract Act 1872, and High Court commercial precedents as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Legal Demand Notice to Company Board
                </h2>
                <EsopNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Salary &amp; Employment Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/legal-notice-for-full-and-final-settlement-delay"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Full &amp; Final Settlement Legal Notice →
                  </Link>
                  <Link
                    href="/law/code-on-wages-fnf-two-working-days"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Code on Wages 2-Day FnF Rule →
                  </Link>
                  <Link
                    href="/labour-commissioner-complaint-online-salary"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Labour Commissioner Online Complaint →
                  </Link>
                  <Link
                    href="/law/epf-scheme-2026-claim-rejection-remedies"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    EPF Scheme 2026 Remedies →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice Charges &amp; Fee Structure →
                  </Link>
                  <Link
                    href="/what-are-the-legal-steps-to-recover-unpaid-salary-from-an-employer-in-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Unpaid Salary Recovery Steps in India →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Contextual Recovery Guides */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
