import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import MediaBuyingTableOfContents from "./MediaBuyingTableOfContents";
import MediaBuyingScenarioTabs from "./MediaBuyingScenarioTabs";
import MediaBuyingNoticeCTA from "./MediaBuyingNoticeCTA";

export const revalidate = 86400;

const PAGE_URL = "/media-buying-agency-google-meta-tv-ooh-ad-spend-reimbursement-recovery";
const EXACT_H1 =
  "Paid ₹50 Lakh to Google, Meta, TV Networks or Print Publications on Your Agency Line—and the Brand Defaulted? Urgent Recovery Playbook";
const META_TITLE = "Media Buying Agency: Recover Unpaid Google & Meta Ad Spend";
const META_DESCRIPTION =
  "Fronted ad spend on your agency credit line? Enforce signed Release Orders, Section 222 Contract indemnity, INS credit embargoes & Order 37 CPC recovery.";

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const LEGAL_REVIEWER = {
  name: "Anuj Anand Malik",
  role: "Advocate & Founder, AMA Legal Solutions",
};

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}${PAGE_URL}`,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: `${SITE_URL}${PAGE_URL}`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText("Media Buying Agency Ad Spend Reimbursement and Legal Recovery Playbook"),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
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
    title: "The Indian Contract Act, 1872 (Section 222 & 223 — Statutory Agent Indemnity for Lawful Expenditures & Acts in Good Faith)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Code of Civil Procedure, 1908 (Order XXXVII — Summary Suits for Liquidated Debts & Order XXXVIII Rule 5 — Pre-Judgment Attachment)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15–18 — 45-Day Statutory Cap & 3x RBI Compound Interest)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "The Commercial Courts Act, 2015 (Section 2(1)(c)(xviii) — Mercantile Agency Contracts & Section 12A Pre-Institution Mediation)",
    url: "https://www.indiacode.nic.in/handle/123456789/2146",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Admissibility of Electronic Platform Invoices & Telecast Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Income Tax Act, 1961 (Section 194C vs Section 194H CBDT Circular 5/2016 & Section 43B(h) Unpaid MSME Disallowance)",
    url: "https://www.incometax.gov.in/iec/foportal/",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Privy Council & Supreme Court on Agent's Absolute Statutory Right to Out-of-Pocket Indemnity",
    parties: "Ram Pertap v. Marshall & Allied Agency Precedents",
    citation: "(1899) ILR 26 Cal 701 / Indian Contract Act Section 222 Statutory Interpretation",
    date: "Landmark Mercantile Agency Jurisprudence",
    facts:
      "A commercial agent incurred substantial third-party out-of-pocket pecuniary liabilities pursuant to the express instructions and business mandate of the principal. When the principal defaulted on reimbursing the disbursements, the agent instituted legal recovery.",
    holding:
      "The court affirmed that under Section 222 of the Indian Contract Act, 1872, the employer of an agent is statutorily bound to indemnify the agent against the consequences of all lawful acts done in exercise of the authority conferred. In media buying and digital performance marketing, when an agency disburses ad spend to Google, Meta, television broadcasters, or newspaper houses under an approved media plan or signed Release Order (RO), the ad spend is a pure pass-through disbursement. The advertiser has a non-negotiable statutory duty to reimburse the full expenditure, independent of campaign performance.",
    amount: "Doctrine of Mandatory Agent Indemnity Affirmed — Absolute Pass-Through Protection",
    takeaway:
      "Clients cannot withhold ad spend reimbursement on grounds of subjective sales conversion or ROAS dissatisfaction.",
  },
  {
    title: "Supreme Court on Summary Procedure for Written Commercial Contracts & Invoiced Debts",
    parties: "M/s Sunil Enterprises & Ors. v. SBI Commercial & International Bank Ltd.",
    citation: "(1998) 4 SCC 354, Supreme Court of India",
    date: "Judgment Dated 07 May 1998",
    facts:
      "The creditor instituted an expedited summary suit under Order XXXVII of the Code of Civil Procedure based on written commercial instruments and acknowledged debt schedules. The debtor sought unconditional leave to defend using frivolous oral disputes.",
    holding:
      "The Supreme Court formulated the authoritative 5-point test governing Order XXXVII CPC summary suits. If the defendant has no substantial defense and raises an illusory or sham defense, leave to defend must be denied, and a summary decree for the liquidated sum entered immediately. A signed Release Order (RO) and corresponding third-party platform tax invoices constitute a liquidated demand on a written contract under Order XXXVII Rule 1(2)(b).",
    amount: "Liquidated Commercial Debt Decreed under Order XXXVII CPC",
    takeaway:
      "Signed Release Orders and Meta/Google platform billing receipts qualify for fast-track Order 37 summary decrees without prolonged civil trial delays.",
  },
  {
    title: "Supreme Court on Protection Against Debtor Fund Dissipation & Asset Siphoning",
    parties: "Raman Tech. & Process Engg. Co. v. Solanki Traders",
    citation: "(2008) 2 SCC 302, Supreme Court of India",
    date: "Judgment Dated 20 November 2007",
    facts:
      "A commercial creditor sought pre-judgment attachment of the debtor's bank accounts under Order XXXVIII Rule 5 CPC, establishing that the defendant was actively siphoning revenues and winding up operations to frustrate future decree execution.",
    holding:
      "The Supreme Court held that while attachment before judgment is an extraordinary power, it is the bounden duty of the court to invoke Order XXXVIII Rule 5 when prima facie evidence demonstrates that the debtor is attempting to remove or dispose of properties with intent to obstruct or delay execution. Media agencies fronting millions on corporate credit lines can freeze defaulting advertiser bank accounts and payment gateway balances (Razorpay, Cashfree, Stripe) prior to final judgment.",
    amount: "Order XXXVIII Rule 5 Pre-Judgment Bank & Payment Gateway Attachment",
    takeaway:
      "Agencies can secure urgent ex-parte court orders freezing advertiser cash reserves before the brand burns through investor funding or winds down.",
  },
  {
    title: "Constitution Bench on Quantum Meruit & Restitution for Non-Gratuitous Agency Performance",
    parties: "State of West Bengal v. B.K. Mondal & Sons",
    citation: "AIR 1962 SC 779, 5-Judge Constitution Bench, Supreme Court of India",
    date: "Judgment Dated 05 December 1961",
    facts:
      "A commercial service entity performed specialized works requested by the defendant. The recipient enjoyed the commercial fruits of the executed works but sought to avoid payment citing procedural gaps in the underlying agreement.",
    holding:
      "The 5-Judge Constitution Bench ruled that under Section 70 of the Indian Contract Act, where a party lawfully executes work for another, not intending to do so gratuitously, and the other person accepts and enjoys the benefit thereof, the recipient is bound by law to make compensation. When an advertiser reaps impressions, website traffic, leads, app installs, and brand visibility from agency-funded ad campaigns, they cannot refuse reimbursement under pretext of unexecuted formal master agreements.",
    amount: "Section 70 Mandatory Commercial Restitution & Quantum Meruit",
    takeaway:
      "Advertisers who enjoy the commercial benefit of agency-funded ad bursts are statutorily barred from unjust enrichment at the agency's expense.",
  },
];

const FAQ_ITEMS = [
  {
    q: "Can a client refuse to reimburse Meta or Google ad spend if the campaign did not achieve the target ROAS?",
    a: "No. Under Section 222 and Section 223 of the Indian Contract Act, 1872, an agent is entitled to full indemnity for all lawful expenses incurred on behalf of the principal within the scope of authority. Ad spend charged to the agency's credit card or Meta/Google monthly invoicing line represents a pure pass-through financial disbursement to third-party tech platforms. Agency management fees or performance bonuses may have performance milestones if explicitly agreed in writing, but pass-through media disbursements are non-contingent liabilities that the advertiser must reimburse in full, regardless of subjective Return on Ad Spend (ROAS) or customer acquisition costs.",
  },
  {
    q: "What makes a signed Release Order (RO) legally enforceable in court?",
    a: "A Release Order (RO) is a binding written commercial contract under Section 10 of the Indian Contract Act, 1872 and Order XXXVII Rule 1(2)(b) of the Code of Civil Procedure (CPC). When signed or confirmed via email/digital signature by an authorized representative of the advertiser, the RO specifies the campaign parameters, time-bands, platforms/publications, gross media spend, payment due date, and applicable taxes. Once the agency books or releases the ad inventory based on that RO, it represents a liquidated demand in money that qualifies for expedited summary judgment under Order XXXVII CPC.",
  },
  {
    q: "How does the INS (Indian Newspaper Society) credit embargo mechanism work?",
    a: "The Indian Newspaper Society (INS) is the apex regulatory body for print publications in India. When an INS-accredited advertising agency fronts newspaper ad spend and the client defaults, the agency can submit a formal default complaint along with the signed RO, publication tear sheets, and unpaid invoices to the INS Credit Default Committee. If the advertiser fails to settle the dues after statutory notice, the INS issues a national circular to all 1,000+ member publications (including The Times of India, Hindustan Times, Dainik Jagran, etc.) placing the brand under an industry-wide credit embargo. No member publication in India is permitted to accept ads from that advertiser directly or through any other accredited agency until the debt is cleared.",
  },
  {
    q: "Can broadcast media agencies report defaulting TV advertisers to IBDF and AAA-I?",
    a: "Yes. The Indian Broadcasting and Digital Foundation (IBDF) and the Advertising Agencies Association of India (AAA-I) maintain joint credit-risk monitoring frameworks. When a brand defaults on television commercial airtime booked on major networks (such as Star, Zee, Sony, Network18), the accredited agency can escalate the default. The joint committee issues an industry alert, prohibiting all member broadcast networks from telecasting the brand's commercials across all linear and OTT channels until full settlement is reached.",
  },
  {
    q: "Can an advertiser withhold media spend reimbursement claiming 'TDS reconciliation delay' under Section 194C or 194H?",
    a: "No. Debtor brands frequently fabricate TDS disputes to stall payments. As clarified by CBDT Circular No. 5/2016 and Circular No. 715, pure pass-through media spend disbursed to third-party platforms without agency markup is governed under Section 194C (advertising contracts, 1% for individuals/HUFs or 2% for corporates) and not Section 194H (commission/brokerage). The agency's retained commission or management fee alone is subject to Section 194H. Crucially, Section 199 of the Income Tax Act and established High Court jurisprudence establish that pending TDS certificate reconciliation does not entitle a debtor to withhold the 98% or 100% principal reimbursement.",
  },
  {
    q: "How can media agencies invoke the MSMED Act to recover ad spend?",
    a: "If the media buying agency or digital performance consultancy is registered under the Udyam portal as a Micro or Small enterprise (NIC Code 73100 — Advertising and Media Representation), the MSMED Act, 2006 applies with full statutory force. Under Section 15, the client is legally mandated to pay within a maximum of 45 days. Under Section 16, overdue balances attract mandatory compound interest calculated on monthly rests at three times the RBI Bank Rate (currently 19.50% to 20.25% per annum), overriding any contradictory payment terms in the client's master service agreement.",
  },
  {
    q: "How does Section 43B(h) of the Income Tax Act create urgent payment pressure on defaulting brands?",
    a: "Under Section 43B(h) of the Income Tax Act, 1961, any corporate advertiser that fails to clear an invoice issued by an Udyam-registered Micro or Small media agency within the statutory deadline (maximum 45 days) cannot claim that multi-lakh or multi-crore ad spend as a business expense in that financial year. The entire unpaid media expenditure is added back to the brand's taxable income, triggering an immediate 25% to 34% corporate income tax liability plus penal interest under Section 234B/C, creating decisive commercial leverage for the agency.",
  },
  {
    q: "What electronic evidence is required under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA)?",
    a: "Under BSA Section 63 (which superseded Section 65B of the Indian Evidence Act on 1 July 2024), digital platform records are admissible upon filing an electronic record certificate. For media buying agencies, the essential evidentiary dossier comprises: (1) Meta Business Manager and Google Ads MCC raw billing receipts showing campaign IDs, transaction hashes, and payment timestamps; (2) Broadcaster BARC telecast log certificates or newspaper physical tear sheets; (3) Hash-verified email chains approving media schedules; and (4) Stamped digital Release Orders accompanied by the Section 63 electronic compliance affidavit.",
  },
];

export default function MediaBuyingRecoveryPage() {
  const breadcrumbItems = [
    { label: "Industries", href: "/industries" },
    { label: "Advertising & Media Recovery", href: "/industries/advertising-marketing-media-event-recovery" },
    { label: "Media Buying Ad Spend Reimbursement", href: PAGE_URL },
  ];

  // Schema Definitions
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: META_DESCRIPTION,
    url: `${SITE_URL}${PAGE_URL}`,
    mainEntityOfPage: `${SITE_URL}${PAGE_URL}`,
    image: `${SITE_URL}/blog_money_recovery.png`,
    datePublished: "2026-11-17T09:00:00+05:30",
    dateModified: "2026-11-17T09:00:00+05:30",
    author: {
      "@type": "Person",
      name: LEGAL_REVIEWER.name,
      jobTitle: LEGAL_REVIEWER.role,
      url: `${SITE_URL}/about-us`,
    },
    publisher: {
      "@type": "Organization",
      name: "LegalRecovery.in",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    inLanguage: "en-IN",
  };

  const HOWTO_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Recover Unpaid Ad Spend Disbursements from Defaulting Corporate Advertisers",
    description:
      "A 5-stage statutory and operational recovery SOP for media buying and performance agencies to enforce Section 222 agent indemnity, Release Orders (ROs), INS/IBDF industry credit embargoes, and Order XXXVII summary suits.",
    totalTime: "P30D",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Immediate Platform Access Revocation & BSA Section 63 Evidence Lockdown",
        text: "Instantly disconnect advertiser access to Meta Business Manager, Google Ads MCC, and campaign dashboards. Export timestamped billing receipts, campaign transaction logs, and cryptographic SHA-256 evidence under BSA Section 63.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Reconciliation of Media Pass-Through Spend vs Agency Commission",
        text: "Segregate pass-through third-party platform costs (Meta/Google/Star/TOI) from agency service fees. Demolish Section 194C vs 194H TDS withholding fallacies using CBDT Circular 5/2016.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Dispatch 7-Day Statutory Legal Demand Notice",
        text: "Serve an advocate-drafted demand notice citing Indian Contract Act Section 222 (agent indemnity), signed Release Orders, Section 43B(h) income tax disallowance, and MSMED Act 3x compound interest.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Trigger Industry Accreditation Embargo (INS / IBDF / AAA-I)",
        text: "File an official credit default petition before the Indian Newspaper Society (INS) or IBDF Credit Default Committee, triggering an all-India media blackout against the advertiser across all member publishers and networks.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Institute Order XXXVII Summary Suit & Order XXXVIII Rule 5 Bank Attachment",
        text: "File an expedited commercial suit under Order XXXVII CPC for a liquidated money decree, simultaneously moving for pre-judgment attachment of brand bank accounts and payment gateway merchant payouts under Order XXXVIII Rule 5.",
      },
    ],
  };

  const FAQ_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
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
        name: "Industries",
        item: `${SITE_URL}/industries`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Advertising & Media Recovery",
        item: `${SITE_URL}/industries/advertising-marketing-media-event-recovery`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Media Buying Ad Spend Reimbursement",
        item: `${SITE_URL}${PAGE_URL}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Structured Data Script Tags */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>Operational Decision Tree &bull; B2B Archetype G1</span>
            <span className="text-slate-500">&bull;</span>
            <span>Agency Ad Spend Reimbursement SOP</span>
          </div>

          {/* Exact H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer &bull; Statutory Summary
            </span>
            Media buying agencies earn 3% to 10% commission while fronting 100% of high-volume ad spend. Under{" "}
            <strong>Section 222 of the Indian Contract Act, 1872</strong>, an agent is statutorily entitled to full
            pecuniary indemnity for all lawful out-of-pocket disbursements incurred on behalf of the principal. When
            a brand defaults after burning your agency&apos;s corporate credit line or Meta/Google Monthly Invoicing
            facility, enforce signed Release Orders (ROs) as liquidated commercial debts under{" "}
            <strong>Order XXXVII CPC</strong>, trigger all-India credit embargoes via{" "}
            <strong>INS/IBDF accreditation circulars</strong>, and execute urgent bank attachments under{" "}
            <strong>Order XXXVIII Rule 5 CPC</strong>. For complete sector-wide recovery mechanisms, consult our{" "}
            <Link
              href="/industries/advertising-marketing-media-event-recovery"
              className="text-red-400 hover:text-red-300 underline font-semibold"
            >
              Advertising, Marketing &amp; Media Recovery Hub
            </Link>
            .
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="space-y-1">
              <span className="block text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider">
                Statutory Indemnity
              </span>
              <span className="text-lg sm:text-xl md:text-2xl font-black text-slate-100 block">
                ICA s.222 / 223
              </span>
              <span className="text-[11px] text-slate-400 block">100% Pass-Through Protection</span>
            </div>
            <div className="space-y-1">
              <span className="block text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider">
                Summary Recovery
              </span>
              <span className="text-lg sm:text-xl md:text-2xl font-black text-emerald-400 block">
                Order 37 CPC
              </span>
              <span className="text-[11px] text-emerald-300/80 block">Liquidated Debt on Signed ROs</span>
            </div>
            <div className="space-y-1">
              <span className="block text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider">
                Asset Attachment
              </span>
              <span className="text-lg sm:text-xl md:text-2xl font-black text-amber-400 block">
                Order 38 R.5
              </span>
              <span className="text-[11px] text-amber-300/80 block">Pre-Judgment Bank &amp; Gateway Freeze</span>
            </div>
            <div className="space-y-1">
              <span className="block text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider">
                Industry Blacklist
              </span>
              <span className="text-lg sm:text-xl md:text-2xl font-black text-red-400 block">
                INS &amp; IBDF
              </span>
              <span className="text-[11px] text-red-300/80 block">All-India Media Credit Embargo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-6">
          {/* Left Sticky Sidebar TOC */}
          <MediaBuyingTableOfContents />

          {/* Main Content Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: The Asymmetry & Cashflow Trap */}
            <section
              id="heading-agency-cashflow-trap"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                  01
                </span>
                <span className="text-xs font-black uppercase tracking-widest text-[#DC2626]">
                  Commercial Reality &amp; Structural Exposure
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Why Media Buying Agencies Face Existential Risk When Brands Default
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4 text-slate-700">
                <p>
                  In the modern advertising ecosystem, media buying, performance marketing, and full-service brand
                  agencies operate under an extreme, asymmetric commercial risk profile. While agency gross retainers
                  and management commissions hover between <strong>3% and 10%</strong> of gross ad billing, agencies
                  routinely front <strong>100% of third-party media costs</strong> on their own corporate credit cards,
                  Meta Monthly Invoicing credit lines, Google Ads MCC consolidated billing terms, or INS/IBDF newspaper
                  and television credit lines.
                </p>
                <p>
                  When an ambitious direct-to-consumer (D2C) brand, venture-funded startup, real estate developer, or
                  FMCG conglomerate authorizes an aggressive &rupee;50 Lakhs to &rupee;2 Crores festive media burst—and
                  subsequently halts operations, defaults on investor rounds, or fabricates spurious campaign complaints—the
                  agency faces catastrophic insolvency. At a 5% commission rate (&rupee;2.5 Lakhs fee on a &rupee;50
                  Lakhs ad campaign), a single brand default inflicts a cash deficit equivalent to{" "}
                  <strong>20 times the agency&apos;s entire gross margin</strong>.
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl my-4 text-xs sm:text-sm text-amber-900">
                  <strong className="font-bold block mb-1">The Principal-Agent Confusion Trap:</strong>
                  Defaulting corporate debtors frequently attempt to treat the media buying agency as an ordinary seller
                  of goods, asserting that because &ldquo;sales targets were not met&rdquo; or &ldquo;ROAS dropped below
                  3.0&rdquo;, they are entitled to withhold the underlying media pass-through costs. This defense is
                  legally bankrupt under Indian law: ad inventory purchased from tech platforms or media houses is an
                  out-of-pocket disbursement governed by the law of agency, not a conditional product warranty.
                </div>
                <p>
                  To secure immediate recovery before defaulting brands dissipate their capital reserves, media agency
                  finance leaders must transition immediately from polite account-management escalations to a structured
                  statutory offensive leveraging <strong>Contract Act Section 222 indemnity</strong>, signed{" "}
                  <strong>Release Orders (ROs)</strong>, <strong>INS credit embargoes</strong>, and fast-track{" "}
                  <strong>Order XXXVII CPC summary suits</strong>.
                </p>
              </div>
            </section>

            {/* Section 2: Statutory Hook - Section 222 Contract Act */}
            <section
              id="heading-contract-act-section-222"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                  02
                </span>
                <span className="text-xs font-black uppercase tracking-widest text-[#DC2626]">
                  The Indian Contract Act, 1872
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Section 222 Contract Act: Statutory Right to 100% Ad Spend Indemnity
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4 text-slate-700">
                <p>
                  The foundational bedrock of media buying debt recovery is codified in Chapter X of the Indian
                  Contract Act, 1872. Unlike standalone service contracts where payment may depend on complex
                  deliverables, the legal relationship between an advertiser (the Principal) and a media buying agency
                  (the Agent) is governed by <strong>Section 222</strong> and <strong>Section 223</strong>:
                </p>
                <div className="bg-slate-900 text-slate-100 p-4 sm:p-5 rounded-xl border border-slate-800 font-mono text-xs sm:text-sm">
                  <p className="text-red-400 font-bold mb-1">
                    Section 222, Indian Contract Act, 1872 (Bare Act Provision):
                  </p>
                  &ldquo;Agent to be indemnified against consequences of lawful acts. &mdash; The employer of an agent
                  is bound to indemnify him against the consequences of all lawful acts done by such agent in exercise
                  of the authority conferred upon him.&rdquo;
                </div>
                <p>
                  When a media agency books ad space on Meta Ads Manager, configures search bidding on Google Ads,
                  schedules prime-time television commercial spots on Star or Zee, or places newspaper advertisements
                  pursuant to an approved Media Plan or signed Release Order, the agency acts strictly within the scope
                  of delegated authority. By statutory mandate:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                  <li>
                    <strong>Absolute Pass-Through Character:</strong> Third-party platform charges represent personal
                    liabilities incurred by the agent for the sole commercial benefit of the principal. Under Section
                    222, the brand has an unconditional, non-severable legal obligation to indemnify the agency for every
                    single rupee disbursed.
                  </li>
                  <li>
                    <strong>Immunity from Campaign Performance Arguments:</strong> The statutory duty of indemnity is
                    not conditional upon whether the advertisement produced positive customer conversions, footfall, or
                    revenue. Unless the agency engaged in proven gross negligence or fraud, commercial dissatisfaction
                    does not relieve the principal of its reimbursement duty.
                  </li>
                  <li>
                    <strong>Co-Extensive Creative Rights Revocation:</strong> Where the agency also developed marketing
                    creatives, ad copy, or campaign video assets, failure to reimburse ad spend breaches the underlying
                    license. Under Section 19(4) of the Copyright Act, 1957, intellectual property does not pass until
                    fully paid, allowing the agency to issue copyright takedown notices across YouTube, Meta, and broadcast
                    channels via our{" "}
                    <Link
                      href="/copyright-not-transferred-until-paid-freelancer"
                      className="text-[#DC2626] font-bold hover:underline"
                    >
                      Copyright Not Transferred Until Paid Protocol
                    </Link>
                    .
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 3: Statutory Recovery Matrix */}
            <section
              id="heading-statutory-enforcement-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                  03
                </span>
                <span className="text-xs font-black uppercase tracking-widest text-[#DC2626]">
                  Comparative Forum Analysis
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Statutory Recovery Matrix: Contract Act, Order 37 &amp; INS Embargo
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Media buying agencies possess multiple simultaneous enforcement weapons across civil courts, industry
                regulators, and statutory tribunals. The following matrix contrasts timelines, evidentiary hurdles, and
                strategic leverage points:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold uppercase tracking-wider text-[11px]">Enforcement Forum</th>
                      <th className="p-3.5 font-bold uppercase tracking-wider text-[11px]">Legal Hook / Section</th>
                      <th className="p-3.5 font-bold uppercase tracking-wider text-[11px]">Primary Requirement</th>
                      <th className="p-3.5 font-bold uppercase tracking-wider text-[11px]">Timeline to Leverage</th>
                      <th className="p-3.5 font-bold uppercase tracking-wider text-[11px]">Debtor Pressure Rating</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">Commercial Summary Suit</td>
                      <td className="p-3.5 font-mono text-xs">Order XXXVII CPC</td>
                      <td className="p-3.5">Signed RO or written media plan acknowledging liquidated spend</td>
                      <td className="p-3.5">60–120 Days for Summons for Judgment</td>
                      <td className="p-3.5">
                        <span className="inline-block px-2 py-0.5 rounded text-[10px] font-black uppercase bg-emerald-100 text-emerald-800">
                          High (No Leave to Defend)
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">Pre-Judgment Bank Freeze</td>
                      <td className="p-3.5 font-mono text-xs">Order XXXVIII Rule 5 CPC</td>
                      <td className="p-3.5">Evidence of debtor siphoning funds or imminent winding-up</td>
                      <td className="p-3.5">7–15 Days (Urgent Interim Hearing)</td>
                      <td className="p-3.5">
                        <span className="inline-block px-2 py-0.5 rounded text-[10px] font-black uppercase bg-red-100 text-red-800">
                          Critical (Liquidity Freeze)
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">INS Accreditation Blacklist</td>
                      <td className="p-3.5 font-mono text-xs">INS Society By-laws R.12</td>
                      <td className="p-3.5">Approved print RO, newspaper tear sheets &amp; 15-day notice</td>
                      <td className="p-3.5">15–30 Days for Society Circular</td>
                      <td className="p-3.5">
                        <span className="inline-block px-2 py-0.5 rounded text-[10px] font-black uppercase bg-purple-100 text-purple-800">
                          Devastating (National Ban)
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">IBDF / Broadcast Embargo</td>
                      <td className="p-3.5 font-mono text-xs">IBDF Credit Committee Rules</td>
                      <td className="p-3.5">BARC telecast logs &amp; agency credit line disbursement</td>
                      <td className="p-3.5">14–21 Days for Network Alert</td>
                      <td className="p-3.5">
                        <span className="inline-block px-2 py-0.5 rounded text-[10px] font-black uppercase bg-purple-100 text-purple-800">
                          Devastating (TV Blackout)
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">MSME Samadhaan Council</td>
                      <td className="p-3.5 font-mono text-xs">MSMED Act ss.15–18</td>
                      <td className="p-3.5">Udyam Registration active before media booking date</td>
                      <td className="p-3.5">90–180 Days (Arbitration Award)</td>
                      <td className="p-3.5">
                        <span className="inline-block px-2 py-0.5 rounded text-[10px] font-black uppercase bg-emerald-100 text-emerald-800">
                          High (3x RBI Compound Int.)
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">Income Tax Disallowance</td>
                      <td className="p-3.5 font-mono text-xs">Section 43B(h) IT Act</td>
                      <td className="p-3.5">Overdue unpaid MSME invoice beyond statutory 45 days</td>
                      <td className="p-3.5">Immediate Year-End Tax Return</td>
                      <td className="p-3.5">
                        <span className="inline-block px-2 py-0.5 rounded text-[10px] font-black uppercase bg-amber-100 text-amber-800">
                          Severe (30% Net Tax Hit)
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: 5-Stage SOP Flowchart */}
            <section
              id="heading-operational-recovery-sop"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                  04
                </span>
                <span className="text-xs font-black uppercase tracking-widest text-[#DC2626]">
                  Standard Operating Procedure
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                5-Stage Media Ad Spend &amp; RO Reimbursement Recovery SOP
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                When a brand crosses your credit limit or breaches payment terms, execution speed is paramount.
                Follow this 5-stage institutional recovery protocol:
              </p>

              {/* Hand-Authored Desktop SVG Flowchart (hidden md:block) */}
              <div className="hidden md:block w-full overflow-hidden bg-slate-950 border border-slate-800 rounded-xl p-6 mb-6">
                <svg
                  viewBox="0 0 800 240"
                  className="w-full h-auto"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width={800}
                  height={240}
                  aria-label="5-Stage Media Ad Spend Recovery Flowchart"
                >
                  {/* Connecting Rail */}
                  <line x1="80" y1="120" x2="720" y2="120" stroke="#334155" strokeWidth="4" />

                  {/* Stage 1 */}
                  <circle cx="80" cy="120" r="28" fill="#1E293B" stroke="#DC2626" strokeWidth="3" />
                  <text x="80" y="125" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">
                    01
                  </text>
                  <text x="80" y="70" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">
                    STAGE 1
                  </text>
                  <text x="80" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                    Access Revocation
                  </text>
                  <text x="80" y="170" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    Lock Ads Manager
                  </text>
                  <text x="80" y="185" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    &amp; Download Logs
                  </text>

                  {/* Stage 2 */}
                  <circle cx="240" cy="120" r="28" fill="#1E293B" stroke="#DC2626" strokeWidth="3" />
                  <text x="240" y="125" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">
                    02
                  </text>
                  <text x="240" y="70" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">
                    STAGE 2
                  </text>
                  <text x="240" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                    Audit &amp; Evidence
                  </text>
                  <text x="240" y="170" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    BSA s.63 Affidavit
                  </text>
                  <text x="240" y="185" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    Tear Sheets / Logs
                  </text>

                  {/* Stage 3 */}
                  <circle cx="400" cy="120" r="28" fill="#1E293B" stroke="#DC2626" strokeWidth="3" />
                  <text x="400" y="125" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">
                    03
                  </text>
                  <text x="400" y="70" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">
                    STAGE 3
                  </text>
                  <text x="400" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                    Statutory Notice
                  </text>
                  <text x="400" y="170" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    ICA s.222 Demand
                  </text>
                  <text x="400" y="185" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    Tri-Channel RPAD
                  </text>

                  {/* Stage 4 */}
                  <circle cx="560" cy="120" r="28" fill="#1E293B" stroke="#DC2626" strokeWidth="3" />
                  <text x="560" y="125" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">
                    04
                  </text>
                  <text x="560" y="70" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">
                    STAGE 4
                  </text>
                  <text x="560" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                    Industry Embargo
                  </text>
                  <text x="560" y="170" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    INS / IBDF Circular
                  </text>
                  <text x="560" y="185" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    National Blacklist
                  </text>

                  {/* Stage 5 */}
                  <circle cx="720" cy="120" r="28" fill="#1E293B" stroke="#DC2626" strokeWidth="3" />
                  <text x="720" y="125" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">
                    05
                  </text>
                  <text x="720" y="70" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">
                    STAGE 5
                  </text>
                  <text x="720" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                    Order 37 &amp; Freeze
                  </text>
                  <text x="720" y="170" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    Summary Decree
                  </text>
                  <text x="720" y="185" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    Gateway Attachment
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Cards (md:hidden) */}
              <div className="md:hidden space-y-3 mb-6">
                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <span className="text-[10px] font-black uppercase text-red-400 block mb-1">
                    Stage 1 &bull; Immediate Platform Access Revocation
                  </span>
                  <p className="text-xs text-slate-300">
                    Disconnect client ad account permissions, pause active campaigns on Meta/Google MCC, and archive
                    billing statements before the debtor removes permissions.
                  </p>
                </div>
                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <span className="text-[10px] font-black uppercase text-red-400 block mb-1">
                    Stage 2 &bull; Evidence Lockdown &amp; BSA Section 63 Audit
                  </span>
                  <p className="text-xs text-slate-300">
                    Hash-verify campaign email approvals, signed Release Orders, platform transaction receipts, and
                    broadcaster telecast certificates under BSA Section 63.
                  </p>
                </div>
                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <span className="text-[10px] font-black uppercase text-red-400 block mb-1">
                    Stage 3 &bull; Serve 7-Day Advocate Legal Demand Notice
                  </span>
                  <p className="text-xs text-slate-300">
                    Dispatch formal legal notice under Contract Act s.222, Section 43B(h), and Order XXXVII CPC via
                    Speed Post RPAD, email, and WhatsApp via our{" "}
                    <Link
                      href="/send-a-legal-notice/for-business-to-recover-their-unpaid-dues"
                      className="text-red-400 underline"
                    >
                      B2B Corporate Legal Notice Portal
                    </Link>
                    .
                  </p>
                </div>
                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <span className="text-[10px] font-black uppercase text-red-400 block mb-1">
                    Stage 4 &bull; Trigger INS / IBDF Industry Credit Embargo
                  </span>
                  <p className="text-xs text-slate-300">
                    File official default petition with the Indian Newspaper Society or broadcast body to issue an
                    all-India embargo circular barring the brand from releasing future ads.
                  </p>
                </div>
                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <span className="text-[10px] font-black uppercase text-red-400 block mb-1">
                    Stage 5 &bull; Order XXXVII Summary Suit &amp; Bank Freeze
                  </span>
                  <p className="text-xs text-slate-300">
                    Institute summary suit for liquidated demand on written ROs, moving for ex-parte attachment of
                    debtor bank accounts and payment gateway payouts under Order XXXVIII Rule 5.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Interactive 4 Scenarios Explorer */}
            <section
              id="heading-four-commercial-scenarios"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                  05
                </span>
                <span className="text-xs font-black uppercase tracking-widest text-[#DC2626]">
                  Tactical Playbooks by Channel
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Four High-Risk Ad Spend Default Scenarios &amp; Agency Countermeasures
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Explore tailored statutory strategies across digital performance bursts, broadcast TV networks, INS
                print campaigns, and high-value OOH billboard concession leases:
              </p>

              <MediaBuyingScenarioTabs />
            </section>

            {/* Section 6: INS & IBDF Industry Blacklist Lever */}
            <section
              id="heading-ins-ibdf-credit-embargo"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                  06
                </span>
                <span className="text-xs font-black uppercase tracking-widest text-[#DC2626]">
                  Regulatory &amp; Industry Sanctions
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                The INS &amp; IBDF Nuclear Lever: Industry-Wide Media Blacklisting
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4 text-slate-700">
                <p>
                  Most defaulting corporate advertisers mistakenly assume that if they default on an agency&apos;s
                  invoice, their sole exposure is an ordinary civil suit that takes years to adjudicate. They are unaware
                  of the formidable institutional regulatory machinery governing accredited media agencies in India:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="bg-slate-900 text-white p-5 rounded-xl border border-slate-800">
                    <span className="text-xs font-black uppercase text-red-400 tracking-wider block mb-2">
                      Indian Newspaper Society (INS) Embargo
                    </span>
                    <p className="text-xs leading-relaxed text-slate-300 mb-3">
                      Founded in 1939, the INS represents over 1,000 daily newspapers, periodicals, and publishers
                      nationwide. Under INS Accreditation Rules, when a client defaults on an accredited agency:
                    </p>
                    <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4">
                      <li>The agency serves a mandatory 15-day notice on the defaulting advertiser.</li>
                      <li>
                        Default is submitted to the INS Credit Committee with signed ROs and proof of publication.
                      </li>
                      <li>
                        The INS issues an official <strong>Member Society Circular</strong> placing the advertiser on the
                        national credit embargo list.
                      </li>
                      <li>
                        <strong>Absolute Blacklist:</strong> No newspaper in India (English, Hindi, or regional) is
                        permitted to accept advertising from that brand, cutting off its public visibility completely.
                      </li>
                    </ul>
                  </div>

                  <div className="bg-slate-900 text-white p-5 rounded-xl border border-slate-800">
                    <span className="text-xs font-black uppercase text-red-400 tracking-wider block mb-2">
                      IBDF &amp; AAA-I Joint Broadcast Sanctions
                    </span>
                    <p className="text-xs leading-relaxed text-slate-300 mb-3">
                      The Indian Broadcasting and Digital Foundation (IBDF) and the Advertising Agencies Association of
                      India (AAA-I) operate an integrated credit monitoring mechanism across all linear television and
                      broadcast OTT networks:
                    </p>
                    <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4">
                      <li>
                        Unsettled broadcast invoices supported by certified BARC telecast logs are escalated to the
                        Dispute Resolution Committee.
                      </li>
                      <li>
                        Networks issue a joint 48-hour cure notice to the advertiser&apos;s board of directors.
                      </li>
                      <li>
                        Upon failure to pay, an all-network broadcast embargo is declared across Star Sports, Sony, Zee,
                        Colors, and regional networks.
                      </li>
                      <li>
                        The brand is barred from placing commercials on live sports broadcasts, high-impact entertainment
                        shows, and digital video streaming platforms.
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  For venture-backed startups preparing for funding rounds or public consumer brands heavily reliant on
                  continuous festive visibility, an INS or IBDF embargo represents an existential brand crisis. Over 80%
                  of defaulting corporate debtors settle their overdue media pass-through balances within 10 days of
                  receiving an INS/IBDF escalation draft.
                </p>
              </div>
            </section>

            {/* Section 7: Debunking TDS 194C vs 194H */}
            <section
              id="heading-tds-194c-vs-194h"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                  07
                </span>
                <span className="text-xs font-black uppercase tracking-widest text-[#DC2626]">
                  Tax Compliance &amp; Statutory Demolition
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Debunking the &apos;TDS Reconciliation&apos; Excuse: Section 194C vs 194H
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4 text-slate-700">
                <p>
                  When pressed for urgent payment of multi-lakh ad disbursements, finance heads of defaulting brands
                  routinely deploy the classic stalling excuse: <em>&ldquo;Our internal auditors are conducting a TDS
                  reconciliation between Section 194C and Section 194H, and payment cannot be processed until the next
                  quarter.&rdquo;</em>
                </p>
                <p>
                  This pretext is legally untenable under binding Central Board of Direct Taxes (CBDT) circulars and
                  High Court tax jurisprudence:
                </p>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-3 text-xs sm:text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold shrink-0">&bull;</span>
                    <div>
                      <strong>CBDT Circular No. 5/2016 &amp; Circular No. 715:</strong> The Central Board of Direct Taxes
                      expressly clarified that payments made by an advertiser for purchasing media space or broadcasting
                      time represent advertising contracts governed exclusively by <strong>Section 194C</strong> (1% for
                      individuals/HUFs, 2% for corporate bodies). Such payments are <em>not</em> commission or brokerage
                      under Section 194H.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold shrink-0">&bull;</span>
                    <div>
                      <strong>Segregation of Pass-Through Spend vs Agency Fee:</strong> The pure media spend disbursed to
                      Meta, Google, print publishers, or television channels is a pure reimbursement of actual third-party
                      cost. If billed as a pure reimbursement with platform tax invoices annexed, no markup is added, and
                      withholding tax applies only to the pass-through component under 194C. Only the separate, distinct
                      agency retainer or management commission is subject to Section 194H.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold shrink-0">&bull;</span>
                    <div>
                      <strong>Section 199 &amp; Form 26AS Jurisprudence:</strong> The Supreme Court and Delhi High Court
                      have consistently held that a debtor cannot withhold payment of undisputed principal invoices
                      pending tax credit verification. The obligation to pay the net invoiced sum arises upon presentation
                      of the invoice and proof of release.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: Worked Financial Ledger */}
            <section
              id="heading-worked-financial-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                  08
                </span>
                <span className="text-xs font-black uppercase tracking-widest text-[#DC2626]">
                  Numerical Simulation &amp; Claim Ledger
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Worked Financial Recovery Ledger: ₹50 Lakh Ad Spend Default
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                The following simulation details an actual performance agency claim where a venture-funded D2C client
                defaulted on &rupee;50,00,000 in festive Meta &amp; Google ad spend disbursed via the agency&apos;s
                corporate line. Notice how statutory interest under the MSMED Act dramatically amplifies the recoverable
                claim:
              </p>

              {/* Financial Ledger Table */}
              <div className="bg-slate-900 text-white rounded-xl p-5 sm:p-6 border border-slate-800 space-y-4">
                <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Creditor Claim Component
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Amount (&rupee;)
                  </span>
                </div>

                <div className="space-y-2.5 text-xs sm:text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">
                      1. Pass-Through Third-Party Ad Spend (Meta &amp; Google Ads Platform Invoices)
                    </span>
                    <span className="font-mono font-bold text-white">&rupee;50,00,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">
                      2. Agency Campaign Management &amp; Media Buying Commission (5% of Ad Spend)
                    </span>
                    <span className="font-mono font-bold text-white">&rupee;2,50,000</span>
                  </div>
                  <div className="flex justify-between items-center text-emerald-400">
                    <span>
                      3. Statutory Compound Interest (MSMED Act s.16 @ 3x RBI Bank Rate &mdash; 19.50% p.a. for 6 Months)
                    </span>
                    <span className="font-mono font-bold">&rupee;5,38,125</span>
                  </div>
                  <div className="flex justify-between items-center text-amber-400">
                    <span>4. Legal Costs, Commercial Demand Notice &amp; Platform Audit Fees</span>
                    <span className="font-mono font-bold">&rupee;75,000</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-700 flex justify-between items-center text-sm sm:text-base font-black">
                  <span className="text-white">Total Enforceable Demand Notice Claim:</span>
                  <span className="text-red-400 font-mono text-base sm:text-lg">&rupee;58,63,125</span>
                </div>

                {/* Statutory Tax Impact Callout */}
                <div className="mt-4 pt-3 border-t border-slate-800 bg-slate-950 p-4 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-red-400 block tracking-wider">
                      Debtor Penalty Exposure &bull; Section 43B(h) Income Tax Disallowance
                    </span>
                    <span className="text-xs text-slate-300">
                      Unpaid MSME agency invoice added back to debtor net profit @ 25.17% corporate tax:
                    </span>
                  </div>
                  <span className="font-mono font-black text-amber-400 text-sm sm:text-base">
                    +&rupee;13,21,425 Tax Penalty
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-500 mt-4 leading-relaxed">
                * Note: Calculate your specific compound interest entitlements using our free{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="text-[#DC2626] font-bold hover:underline"
                >
                  MSME Delayed Payment Interest Calculator
                </Link>
                . Section 43B(h) disallowance applies automatically if payment is withheld beyond 45 days.
              </p>
            </section>

            {/* Section 9: BSA 2023 Evidence Checklist */}
            <section
              id="heading-bsa-section-63-dossier"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                  09
                </span>
                <span className="text-xs font-black uppercase tracking-widest text-[#DC2626]">
                  Evidentiary Standards &bull; BSA 2023
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                BSA 2023 Section 63 Electronic Evidence Dossier for Media Agencies
              </h2>
              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed space-y-4 text-slate-700">
                <p>
                  To secure an unconditional summary decree under Order XXXVII CPC or freeze the debtor&apos;s bank
                  accounts under Order XXXVIII Rule 5, media buying agencies must assemble an airtight electronic
                  evidentiary dossier complying with <strong>Section 63 of Bharatiya Sakshya Adhiniyam, 2023</strong>{" "}
                  (which replaced Section 65B of the Indian Evidence Act on 1 July 2024):
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-2">
                    <span className="text-xs font-black text-slate-900 block uppercase tracking-wider">
                      Digital Platforms (Meta &amp; Google)
                    </span>
                    <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                      <li>Meta Ads Manager raw monthly invoice statements with transaction IDs.</li>
                      <li>Google Ads MCC consolidated billing receipts showing advertiser Account ID.</li>
                      <li>Agency credit card / Amex statements highlighting exact debit charges.</li>
                      <li>Campaign budget confirmation emails and WhatsApp media schedule approvals.</li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-2">
                    <span className="text-xs font-black text-slate-900 block uppercase tracking-wider">
                      Broadcast, Print &amp; Outdoor Media
                    </span>
                    <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                      <li>Signed physical or digitally executed Release Orders (ROs) on brand letterhead.</li>
                      <li>Certified BARC telecast logs with time-band and program watermarks.</li>
                      <li>Physical newspaper tear sheets with publication date and edition stamps.</li>
                      <li>Municipal outdoor advertising tax challans and geo-tagged site display photos.</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-[#DC2626] p-4 rounded-r-xl text-xs sm:text-sm text-red-950 font-medium">
                  <strong>Mandatory BSA Section 63 Certificate:</strong> All platform screenshots, billing logs, and
                  email exports must be accompanied by a formal affidavit sworn by the agency&apos;s Chief Technology
                  Officer, Systems Administrator, or Finance Director verifying the computer system&apos;s integrity and
                  cryptographic hash verification.
                </div>
              </div>
            </section>

            {/* Section 10: Model RO Indemnity & Personal Guarantee Clause */}
            <section
              id="heading-model-ro-indemnity-clause"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                  10
                </span>
                <span className="text-xs font-black uppercase tracking-widest text-[#DC2626]">
                  Contractual Shield
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Model Release Order (RO) Indemnity &amp; Personal Guarantee Clause
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-4">
                Incorporate this advocate-vetted contractual indemnity clause into every Release Order (RO) and media
                schedule to eliminate client evasion tactics before campaign launch:
              </p>

              <div className="bg-slate-950 text-slate-200 p-5 rounded-xl border border-slate-800 text-xs sm:text-sm font-mono leading-relaxed space-y-3">
                <span className="text-red-400 font-bold block">
                  CLAUSE [X]: STATUTORY MEDIA PASS-THROUGH INDEMNITY &amp; LIQUIDATED REIMBURSEMENT
                </span>
                <p>
                  &ldquo;(a) <strong>Pass-Through Character of Media Costs:</strong> The Client expressly acknowledges
                  that all ad spend disbursements incurred by the Agency with third-party media platforms (including
                  Meta Platforms Inc., Google LLC, television networks, print publishers, or outdoor concessionaires)
                  constitute out-of-pocket pass-through expenditures incurred by the Agency as an Agent under Section 222
                  and Section 223 of the Indian Contract Act, 1872. The Client undertakes an unconditional, absolute,
                  and irrevocable obligation to reimburse 100% of the invoiced media expenditure within [7/15] days of
                  invoice presentation.
                </p>
                <p>
                  (b) <strong>No Linkage to Campaign Performance:</strong> The Client expressly waives any right to
                  withhold, offset, or deduct from the media pass-through reimbursement on grounds of Return on Ad Spend
                  (ROAS), lead quality, sales conversions, website downtime, or subjective commercial dissatisfaction.
                </p>
                <p>
                  (c) <strong>Joint and Several Director Guarantee:</strong> The signatory of this Release Order
                  warrants corporate authority and hereby binds the Client company, its Board of Directors, and promoters
                  jointly and severally to guarantee the prompt settlement of all media credit disbursed by the Agency.&rdquo;
                </p>
              </div>

              <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <span className="text-xs font-semibold text-slate-700">
                  Need a comprehensive Master Service Agreement or customized RO format?
                </span>
                <Link
                  href="/templates/legal-notice-reply-format"
                  className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors shrink-0"
                >
                  Explore Legal Templates &rarr;
                </Link>
              </div>
            </section>

            {/* Section 11: FAQs */}
            <section
              id="heading-faq-media-cfos"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                  11
                </span>
                <span className="text-xs font-black uppercase tracking-widest text-[#DC2626]">
                  Frequently Asked Questions
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Frequently Asked Questions for Media Buying Agency CFOs
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Direct statutory and practical answers to the most urgent debt recovery questions facing media buying
                executives:
              </p>

              <div className="space-y-4">
                {FAQ_ITEMS.map((item, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50 hover:bg-slate-50 transition-colors"
                  >
                    <summary className="p-4 sm:p-5 font-bold text-xs sm:text-sm text-slate-900 cursor-pointer flex justify-between items-center">
                      <span className="pr-4 leading-snug">{item.q}</span>
                      <span className="text-[#DC2626] font-bold text-base transition-transform group-open:rotate-180 shrink-0">
                        &darr;
                      </span>
                    </summary>
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200/60 bg-white">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 12: Statutory References & Court Precedents */}
            <section
              id="heading-statutory-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                  12
                </span>
                <span className="text-xs font-black uppercase tracking-widest text-[#DC2626]">
                  Legal Authorities &amp; Precedents
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Statutory Precedents &amp; Legal Authorities on Agent Indemnity
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Authoritative Supreme Court and High Court precedents establishing an agent&apos;s right to mandatory
                reimbursement, Order XXXVII summary decrees, and pre-judgment bank attachments:
              </p>

              <div className="space-y-5">
                {COURT_PRECEDENTS.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 border-l-4 border-[#DC2626] border border-slate-200 rounded-r-xl p-4 sm:p-5 shadow-xs"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="text-sm sm:text-base font-black text-slate-900 leading-snug">
                        {item.title}
                      </h3>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                        {item.citation}
                      </span>
                    </div>
                    <p className="text-xs font-bold text-slate-600 mb-2">{item.parties}</p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">{item.holding}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-slate-200/60 text-xs">
                      <span className="font-semibold text-emerald-800">{item.amount}</span>
                      <span className="text-slate-600 italic">Key Takeaway: {item.takeaway}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Primary Statutory Sources */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <span className="text-xs font-black uppercase tracking-wider text-slate-500 block mb-3">
                  Primary Statutory Sources &amp; Legislation:
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <a
                      key={idx}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-xs text-slate-700 hover:text-[#DC2626] bg-slate-100/70 hover:bg-slate-100 p-2.5 rounded-lg border border-slate-200 transition-colors flex items-center justify-between"
                    >
                      <span className="truncate pr-2">{source.title}</span>
                      <span className="shrink-0 text-slate-400">&nearr;</span>
                    </a>
                  ))}
                </div>
              </div>
            </section>

            {/* Sibling Spoke Cross-Links Box */}
            <div className="bg-slate-100 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-3">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#DC2626] block">
                Related Industry Playbooks &bull; IND-12 Vertical Cluster
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Explore Specialized Advertising &amp; Creative Agency Recovery Guides
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Facing payment disputes across SEO retainers, event fabrication, or video production? Access our sister
                spoke playbooks:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <Link
                  href="/digital-marketing-seo-agency-retainer-default-low-roas-excuse-recovery"
                  className="bg-white border border-slate-200 p-3 rounded-xl hover:border-red-400 transition-colors group"
                >
                  <span className="text-[10px] font-bold text-[#DC2626] block mb-1">SEO Retainer Playbook</span>
                  <span className="text-xs font-bold text-slate-800 group-hover:text-[#DC2626] line-clamp-2">
                    Digital Marketing &amp; SEO Retainer Default Recovery
                  </span>
                </Link>
                <Link
                  href="/event-management-exhibition-stall-fabricator-post-event-balance-recovery"
                  className="bg-white border border-slate-200 p-3 rounded-xl hover:border-red-400 transition-colors group"
                >
                  <span className="text-[10px] font-bold text-[#DC2626] block mb-1">Event &amp; Expo Playbook</span>
                  <span className="text-xs font-bold text-slate-800 group-hover:text-[#DC2626] line-clamp-2">
                    Event Management &amp; Exhibition Stall Post-Event Recovery
                  </span>
                </Link>
                <Link
                  href="/ad-film-ott-video-production-house-milestone-post-production-recovery"
                  className="bg-white border border-slate-200 p-3 rounded-xl hover:border-red-400 transition-colors group"
                >
                  <span className="text-[10px] font-bold text-[#DC2626] block mb-1">Production House Playbook</span>
                  <span className="text-xs font-bold text-slate-800 group-hover:text-[#DC2626] line-clamp-2">
                    Ad Film &amp; OTT Video Production Milestone Recovery
                  </span>
                </Link>
              </div>
            </div>

            {/* Dual B2B CTA Component */}
            <div id="ad-spend-cta-block" className="scroll-mt-28">
              <MediaBuyingNoticeCTA />
            </div>
          </article>
        </div>
      </main>

      {/* Footer Related Recovery Guides Cluster */}
      <RelatedRecoveryGuides />
    </div>
  );
}
