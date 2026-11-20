import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import AttachmentTableOfContents from "./AttachmentTableOfContents";
import AttachmentScenarioTabs from "./AttachmentScenarioTabs";
import AttachmentCTA from "./AttachmentCTA";

export const revalidate = 86400;

const PAGE_URL = "/order-38-rule-5-attachment-before-judgment-b2b-commodity-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const PAGE_TITLE = "Order 38 Rule 5 CPC Attachment Before Judgment: B2B Guide";
const PAGE_DESCRIPTION =
  "Meet the Raman Tech standard for Order 38 Rule 5 CPC attachment before judgment & s.12A urgent relief to freeze debtor bank accounts and factory sales.";
const H1_TEXT =
  "Debtor Secretly Selling Its Factory or Emptying Bank Accounts? Using Order XXXVIII Rule 5 CPC (Attachment Before Judgment) & Bypassing Section 12A Delay";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: CANONICAL_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText(PAGE_TITLE),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: [`${SITE_URL}/blog_money_recovery.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const FAQ_ITEMS = [
  {
    q: "What must a B2B creditor prove to win an Order XXXVIII Rule 5 attachment before judgment?",
    a: "Under the Supreme Court's two-tier test in Raman Tech. & Process Engg. Co. v. Solanki Traders (2008) 2 SCC 302, the creditor must establish (1) a strong prima facie case on merits backed by invoices, E-Way Bills, and weighment slips, and (2) specific, verifiable material showing the debtor is about to dispose of or remove property with intent to obstruct or delay execution of a future decree.",
  },
  {
    q: "How does Order XXXVIII Rule 5 bypass mandatory Section 12A pre-institution mediation?",
    a: "Under Section 12A(1) of the Commercial Courts Act, 2015, pre-institution mediation is mandatory unless the suit contemplates 'urgent interim relief'. In Yamini Manohar v. T.K.D. Keerthi (2024) 5 SCC 815, the Supreme Court held that if the plaint, documents, and an Order XXXVIII Rule 5 application genuinely disclose imminent asset dissipation, the court can dispense with mediation at admission.",
  },
  {
    q: "What concrete evidence proves a factory debtor is stripping assets rather than facing routine cash crunch?",
    a: "Courts reject bald apprehensions. Creditors should file dated industrial broker WhatsApp listings, 99acres/OLX machinery sale posts, geo-tagged night-truck loading photos with EXIF metadata, MCA21 Form CHG-1 fresh charge filings, Form DIR-12 promoter resignations, or customer emails showing payments diverted to sister concerns, all certified under BSA 2023 s.63.",
  },
  {
    q: "Can a Commercial Court freeze a debtor's bank account or attach plant and machinery ex-parte?",
    a: "Yes. Under Order XXXVIII Rule 5(3) CPC, the court may direct conditional attachment of specified bank accounts, receivables, or plant and machinery simultaneously with issuing the show-cause notice under Rule 5(1), if there is a real risk the debtor will empty accounts before the next hearing date.",
  },
  {
    q: "What happens if the debtor sells the factory or transfers machinery after an attachment order?",
    a: "Any private transfer, mortgage, or alienation of attached property contrary to a court attachment order is void against all claims enforceable under the attachment by virtue of Section 64 CPC, and an attachment made without complying with Rule 5(1) is void under Rule 5(4)—which is why strict compliance with Rule 5(1) and Rule 5(3) is critical.",
  },
  {
    q: "Does an Order XXXVIII Rule 5 attachment override a bank's existing mortgage or hypothecation?",
    a: "No. Under Order XXXVIII Rule 10 CPC, attachment before judgment does not affect the rights of persons not parties to the suit existing prior to the attachment. Secured banks holding prior registered charges retain priority; however, attachment locks equity surplus, unencumbered machinery, and non-charged current accounts.",
  },
  {
    q: "Can a creditor file Order XXXVIII Rule 5 inside an Order XXXVII summary suit?",
    a: "Yes. Order XXXVII CPC summary suits for liquidated invoices, dishonoured cheques, or written supply contracts can be accompanied by an urgent interlocutory application under Order XXXVIII Rule 5 CPC to secure the suit amount via a Bank Guarantee or conditional attachment while the debtor's leave-to-defend application is pending.",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: H1_TEXT,
  description: PAGE_DESCRIPTION,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": CANONICAL_URL,
  },
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder, AMA Legal Solutions",
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/blog_money_recovery.png`,
    },
  },
  datePublished: "2026-11-20",
  dateModified: "2026-11-20",
  inLanguage: "en-IN",
  about: [
    "Code of Civil Procedure 1908 Order XXXVIII Rule 5",
    "Commercial Courts Act 2015 Section 12A",
    "Raman Tech & Process Engg. Co. v. Solanki Traders (2008) 2 SCC 302",
    "Yamini Manohar v. T.K.D. Keerthi (2024) 5 SCC 815",
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
      name: "Mining, Minerals, Fuel & Commodity Recovery",
      item: `${SITE_URL}/industries/mining-minerals-fuel-scrap-commodity-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Order 38 Rule 5 CPC Attachment Before Judgment",
      item: CANONICAL_URL,
    },
  ],
};

export default function Order38Rule5AttachmentPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-25 &amp; Cross-Industry Law</span>
            <span>&bull;</span>
            <span>Order XXXVIII Rule 5 CPC</span>
            <span>&bull;</span>
            <span>s.12A Urgent Relief</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {H1_TEXT}
          </h1>

          {/* 40-60 Word Executive Statutory Summary Box with Parent Hub Link */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Under Order XXXVIII Rule 5 CPC, a B2B supplier can freeze a defaulting buyer&apos;s bank accounts or plant machinery before decree—and bypass the 3-month Section 12A mediation wait—by pairing{" "}
            <Link
              href="/industries/mining-minerals-fuel-scrap-commodity-recovery"
              className="text-red-300 underline hover:text-white font-semibold"
            >
              commodity recovery proof
            </Link>{" "}
            with verifiable asset-stripping evidence under <em>Raman Tech</em> and <em>Yamini Manohar</em>.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-base sm:text-xl font-black text-slate-100">Order 38 R.5</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Security / Conditional Attachment
              </p>
            </div>
            <div>
              <p className="text-base sm:text-xl font-black text-emerald-400">0-Day s.12A</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Urgent Relief Mediation Bypass
              </p>
            </div>
            <div>
              <p className="text-base sm:text-xl font-black text-amber-400">2-Tier Test</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Raman Tech (2008) 2 SCC 302
              </p>
            </div>
            <div>
              <p className="text-base sm:text-xl font-black text-red-400">BSA s.63</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Electronic Asset-Sale Proof
              </p>
            </div>
          </div>

          <p className="mt-4 text-[11px] sm:text-xs text-slate-400">
            Reviewed by <strong className="text-slate-200">Anuj Anand Malik</strong>, Advocate &amp; Founder, AMA Legal Solutions &bull; Updated November 20, 2026
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Mining, Minerals, Fuel & Commodity Recovery",
                href: "/industries/mining-minerals-fuel-scrap-commodity-recovery",
              },
              {
                label: "Order 38 Rule 5 CPC Attachment Before Judgment",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <AttachmentTableOfContents />

          {/* Main Article Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Statutory Architecture */}
            <section
              id="heading-statutory-architecture"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Why a Paper Decree Fails Without Order XXXVIII Rule 5 CPC
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  In bulk commodity trading—whether imported coal, metal scrap, industrial chemicals, or steel ingots—operating margins sit between 2% and 4%. When a defaulting rolling mill, boiler plant, or mid-market manufacturer stops paying, a commercial recovery suit that delivers a final money decree two years later is commercially worthless if the promoter has already sold the factory land, shifted induction furnaces at night, or drained cash-credit accounts into related entities.
                </p>
                <p>
                  <strong>Order XXXVIII Rule 5 of the Code of Civil Procedure, 1908 (CPC)</strong> is the statutory emergency brake designed to prevent a debtor from rendering a prospective decree infructuous. Unlike post-decree execution under Order XXI, Rule 5 empowers a Commercial Court or Civil Court at <em>any stage of a suit</em> to compel the defendant to furnish security—typically a Bank Guarantee or Fixed Deposit Receipt—or suffer conditional attachment of specified bank accounts, finished inventory, or unencumbered plant and machinery.
                </p>
                <p>
                  For commodity CFOs and commercial litigators operating inside the{" "}
                  <Link
                    href="/industries/mining-minerals-fuel-scrap-commodity-recovery"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    IND-25 bulk commodity &amp; scrap recovery framework
                  </Link>
                  , Order XXXVIII Rule 5 serves a second decisive function: when properly pleaded with concrete asset-disposal evidence, it unlocks the <strong>&ldquo;urgent interim relief&rdquo;</strong> exception under Section 12A(1) of the Commercial Courts Act, 2015, allowing you to approach the Commercial Court immediately without losing 3 to 5 months in mandatory pre-institution mediation.
                </p>
              </div>
            </section>

            {/* Section 2: Bare-Act Timelines & Section 12A Bypass */}
            <section
              id="heading-timelines-s12a"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Bare-Act Timelines, Rule 5 Sub-Clauses &amp; Section 12A Bypass
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Precision with statutory sub-rules separates an enforceable attachment order from one struck down as void under Rule 5(4). Below is the exact statutory sequence and limitation architecture governing commercial attachment applications.
              </p>

              {/* 4-Card Statutory Timeline Rail */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
                <div className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-red-400 mb-1">
                    Day 0 &bull; s.12A Waiver
                  </p>
                  <p className="text-sm font-bold mb-1">Urgent Interim Relief</p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Bypass 3-month (+2 month) mediation under Commercial Courts Act s.12A(1) by filing IA under O.38 R.5 with plaint.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-slate-200">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] mb-1">
                    Rule 5(1) &amp; 5(3)
                  </p>
                  <p className="text-sm font-bold text-slate-900 mb-1">Show-Cause &amp; Freeze</p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Court fixes a short window (often 7–15 days) to furnish security/show cause, while ordering conditional attachment under R.5(3).
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-slate-200">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-amber-700 mb-1">
                    Rule 5(4) &amp; Rule 6
                  </p>
                  <p className="text-sm font-bold text-slate-900 mb-1">Void Risk vs Final Order</p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Attachment without R.5(1) compliance is void (R.5(4)). Failure to furnish security converts freeze into final attachment (R.6).
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-slate-200">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-1">
                    Limitation &amp; s.64 CPC
                  </p>
                  <p className="text-sm font-bold text-slate-900 mb-1">3-Year Suit Window</p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Suit must be within 3 years of invoice/acknowledgment; post-attachment private alienation is void under s.64 CPC.
                  </p>
                </div>
              </div>

              {/* Desktop SVG Escalation Rail */}
              <div className="hidden md:block bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-4">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Commercial Court Emergency Attachment Workflow (Order XXXVIII Rule 5 + s.12A)
                </p>
                <svg
                  viewBox="0 0 920 150"
                  width={920}
                  height={150}
                  className="w-full h-auto"
                  role="img"
                  aria-label="Five-stage Order 38 Rule 5 CPC and Section 12A urgent attachment workflow"
                >
                  <rect x="10" y="25" width="160" height="95" rx="12" fill="#0F172A" />
                  <text x="90" y="55" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="700">STAGE 1 (24 HRS)</text>
                  <text x="90" y="76" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">Asset-Strip Evidence</text>
                  <text x="90" y="96" textAnchor="middle" fill="#CBD5E1" fontSize="10">MCA, Brokers, EXIF + s.63</text>

                  <line x1="170" y1="72" x2="195" y2="72" stroke="#DC2626" strokeWidth="2.5" />

                  <rect x="195" y="25" width="160" height="95" rx="12" fill="#1E293B" />
                  <text x="275" y="55" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="700">STAGE 2 (FILING)</text>
                  <text x="275" y="76" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">s.12A Waiver Plea</text>
                  <text x="275" y="96" textAnchor="middle" fill="#CBD5E1" fontSize="10">Yamini Manohar Test</text>

                  <line x1="355" y1="72" x2="380" y2="72" stroke="#DC2626" strokeWidth="2.5" />

                  <rect x="380" y="25" width="160" height="95" rx="12" fill="#DC2626" />
                  <text x="460" y="55" textAnchor="middle" fill="#FEE2E2" fontSize="11" fontWeight="700">STAGE 3 (DAY 1-3)</text>
                  <text x="460" y="76" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">Rule 5(1) + 5(3)</text>
                  <text x="460" y="96" textAnchor="middle" fill="#FEF2F2" fontSize="10">Show Cause + Freeze</text>

                  <line x1="540" y1="72" x2="565" y2="72" stroke="#DC2626" strokeWidth="2.5" />

                  <rect x="565" y="25" width="160" height="95" rx="12" fill="#1E293B" />
                  <text x="645" y="55" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="700">STAGE 4 (DAY 7-15)</text>
                  <text x="645" y="76" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">BG / FDR or Rule 6</text>
                  <text x="645" y="96" textAnchor="middle" fill="#CBD5E1" fontSize="10">Security or Final Order</text>

                  <line x1="725" y1="72" x2="750" y2="72" stroke="#DC2626" strokeWidth="2.5" />

                  <rect x="750" y="25" width="160" height="95" rx="12" fill="#0F172A" />
                  <text x="830" y="55" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="700">STAGE 5 (DECREE)</text>
                  <text x="830" y="76" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">s.64 CPC Protection</text>
                  <text x="830" y="96" textAnchor="middle" fill="#CBD5E1" fontSize="10">Sale / Garnishee Recovery</text>
                </svg>
              </div>
            </section>

            {/* Section 3: Verified Supreme Court & High Court Precedents */}
            <section
              id="heading-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Landmark Precedents Governing Rule 5 &amp; Section 12A
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Commercial Courts scrutinize Order XXXVIII Rule 5 applications strictly because an improper attachment can paralyze a running enterprise. Every pleading must align with five controlling Supreme Court and High Court authorities:
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-[#DC2626] bg-slate-50 rounded-r-xl p-4 sm:p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                      1. Raman Tech. &amp; Process Engg. Co. v. Solanki Traders
                    </h3>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-red-100 text-[#DC2626]">
                      (2008) 2 SCC 302 &bull; Supreme Court
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong>Holding:</strong> Attachment before judgment is an extraordinary, drastic power—not a routine lever to coerce settlement or convert an unsecured debt into a secured debt. The plaintiff must satisfy a strict two-stage threshold: (i) a strong <em>prima facie</em> case on the merits of the claim, and (ii) specific, verifiable material showing that the defendant is about to dispose of the whole or part of its property, or remove it from the court&apos;s local limits, with the specific intent to obstruct or delay execution of any decree that may be passed.
                  </p>
                </div>

                <div className="border-l-4 border-[#DC2626] bg-slate-50 rounded-r-xl p-4 sm:p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                      2. Yamini Manohar v. T.K.D. Keerthi
                    </h3>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-red-100 text-[#DC2626]">
                      (2024) 5 SCC 815 &bull; Supreme Court
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong>Holding:</strong> Interpreting Section 12A of the Commercial Courts Act, 2015, the Supreme Court clarified that while a plaintiff cannot camouflage a stale recovery suit with a sham urgent relief application to evade mediation, the court must examine the plaint, documents, and facts holistically. Where the pleadings and attached evidence genuinely contemplate urgent interim relief—such as imminent factory sale or bank-account siphoning—pre-institution mediation is lawfully bypassed.
                  </p>
                </div>

                <div className="border-l-4 border-[#DC2626] bg-slate-50 rounded-r-xl p-4 sm:p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                      3. Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd.
                    </h3>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-800">
                      (2022) 10 SCC 1 &bull; Supreme Court
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong>Holding:</strong> Section 12A pre-institution mediation is mandatory for all commercial suits (₹3 Lakh and above) that do not contemplate urgent interim relief; non-compliance invites mandatory rejection of the plaint under Order VII Rule 11 CPC. This makes your contemporaneous Order XXXVIII Rule 5 urgency record decisive at the filing counter.
                  </p>
                </div>

                <div className="border-l-4 border-[#DC2626] bg-slate-50 rounded-r-xl p-4 sm:p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                      4. Premraj Mundra v. Md. Maneck Gazi
                    </h3>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-800">
                      AIR 1951 Cal 156 &bull; Approved in Raman Tech
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong>Holding:</strong> Laid down the classic evidentiary guidelines expressly approved by the Supreme Court in <em>Raman Tech</em>: vague allegations copied from the language of Rule 5 are insufficient; the affidavit must state the exact source of information and belief and disclose concrete overt acts of disposal, removal, or fraudulent transfer.
                  </p>
                </div>

                <div className="border-l-4 border-[#DC2626] bg-slate-50 rounded-r-xl p-4 sm:p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                      5. Rajendran v. Shankar Sundaram
                    </h3>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-800">
                      (2008) 2 SCC 724 &bull; Supreme Court
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong>Holding:</strong> At the interlocutory Rule 5 stage, the court is not required to conduct a mini-trial or record final findings on disputed defences. Once the plaintiff shows a strong <em>prima facie</em> case and a genuine apprehension that assets are being alienated, directing the defendant to furnish security is valid and proportionate.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Interactive 4 Asset-Stripping Scenarios */}
            <section
              id="heading-evidence-playbook"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  4 Asset-Stripping Scenarios &amp; Concrete Proof Playbooks
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Select the debtor tactic your credit team is witnessing right now to see the exact documentary evidence required to satisfy <em>Raman Tech</em> and secure an urgent Section 12A exemption:
              </p>

              <AttachmentScenarioTabs />
            </section>

            {/* Section 5: BSA 2023 s.63 Evidentiary Dossier */}
            <section
              id="heading-bsa-dossier"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  The Rule 5 Evidentiary Dossier &amp; BSA 2023 s.63 Checklist
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Most Rule 5 applications fail not because the debtor is innocent, but because the creditor&apos;s field team submits uncertified screenshots or hearsay emails. Assemble this 6-point evidentiary dossier before approaching the Commercial Court:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "1. Liquidated Debt & Acceptance Trail",
                    body: "Signed purchase orders, GST tax invoices, E-Way Bills, Dharamkanta weighbridge slips, and ledger confirmations proving an undisputed commercial debt under Sale of Goods Act s.42.",
                  },
                  {
                    title: "2. Broker Listings & Machinery Sale Proof",
                    body: "Full-screen captures (showing URL, date-time, and broker phone number) of industrial plot/machinery listings on 99acres, OLX, IndiaMART, or WhatsApp trade groups.",
                  },
                  {
                    title: "3. Night-Truck & Factory Shifting Media",
                    body: "Geo-tagged photographs or gate-road dashcam/CCTV clips showing cranes dismantling machinery or trucks hauling stock at odd hours, preserving original EXIF metadata.",
                  },
                  {
                    title: "4. MCA21 Corporate Filings (CHG-1 & DIR-12)",
                    body: "Certified public downloads from MCA21 showing sudden fresh charges in favour of related parties (Form CHG-1), director resignations (DIR-12), or address shifts (INC-22).",
                  },
                  {
                    title: "5. Bank Account & GST Diversion Signals",
                    body: "Cheque bounce memos, RTGS failure logs, and third-party buyer emails directing remittances to a new LLP or sister concern while GSTR-1 shows active outward turnover.",
                  },
                  {
                    title: "6. BSA 2023 Section 63 Certificate",
                    body: "Mandatory electronic-record certificate (replacing Evidence Act s.65B) signed by the custodian + device hash/metadata details so every WhatsApp, MCA, and EXIF exhibit is admissible.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <h3 className="text-sm font-extrabold text-slate-900 mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 6: Debtor Defense Pre-Emption Table */}
            <section
              id="heading-defense-preemption"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Debtor Defense Pre-Emption Matrix (Commercial Court)
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                When served with a Rule 5(1) show-cause notice, defaulting factory promoters raise predictable objections. Pre-empt every defense in your initial plaint and Rule 5 affidavit:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Debtor Objection</th>
                      <th className="p-3.5 font-bold">Statutory / Case Anchor</th>
                      <th className="p-3.5 font-bold">Creditor Rebuttal &amp; Pre-Emption</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">
                        &ldquo;Suit is barred for skipping s.12A mediation&rdquo;
                      </td>
                      <td className="p-3.5 text-slate-600">
                        <em>Patil Automation</em> (2022) &amp; <em>Yamini Manohar</em> (2024)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Demonstrate immediate, post-notice asset disposal acts discovered days before filing—proving urgency is real, not camouflaged.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">
                        &ldquo;Bald apprehension; mere financial distress ≠ fraud&rdquo;
                      </td>
                      <td className="p-3.5 text-slate-600">
                        <em>Raman Tech</em> (2008) &amp; <em>Premraj Mundra</em>
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Cite named broker listings, MCA CHG-1 filings, and EXIF-verified night-truck photos—proving overt acts, not insolvency rumours.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">
                        &ldquo;Factory &amp; stock are already hypothecated to bank&rdquo;
                      </td>
                      <td className="p-3.5 text-slate-600">Order XXXVIII Rule 10 CPC</td>
                      <td className="p-3.5 text-slate-700">
                        Seek attachment of equity surplus, unencumbered secondary machinery, non-consortium current accounts, and third-party trade receivables.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">
                        &ldquo;Quality / GCV / slag dispute exists on invoices&rdquo;
                      </td>
                      <td className="p-3.5 text-slate-600">
                        Sale of Goods Act s.42 &amp; <em>Rajendran</em> (2008)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Show buyer consumed coal/melted scrap without timely NABL/umpire rejection; no mini-trial is required at the Rule 5 stage.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">
                        &ldquo;Freezing OD/CC account will halt wages &amp; operations&rdquo;
                      </td>
                      <td className="p-3.5 text-slate-600">Order XXXVIII Rule 5(1)(a)</td>
                      <td className="p-3.5 text-slate-700">
                        Offer a fair alternative: lift bank freeze the moment debtor furnishes an unconditional Bank Guarantee or FDR for the suit claim.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 7: Worked Financial & Bank Guarantee Security Ledger */}
            <section
              id="heading-worked-security"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Worked Security Ledger: ₹1.42 Cr Coal &amp; Scrap Attachment
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                How a commodity supplier structures the exact financial prayer in an Order XXXVIII Rule 5 application so the Commercial Court orders a quantified Bank Guarantee or targeted account freeze without over-attaching unrelated assets:
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-slate-700 pb-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-slate-400">
                      Unpaid Liquidated Principal
                    </p>
                    <p className="text-xl font-black text-white">₹1,18,50,000</p>
                    <p className="text-xs text-slate-400">14 GST invoices + E-Way Bills</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-slate-400">
                      Contractual Interest (18% p.a.)
                    </p>
                    <p className="text-xl font-black text-amber-400">₹23,50,000</p>
                    <p className="text-xs text-slate-400">Accrued post 30-day credit</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-slate-400">
                      Rule 5 Security / Freeze Cap
                    </p>
                    <p className="text-xl font-black text-emerald-400">₹1,42,00,000</p>
                    <p className="text-xs text-slate-400">BG / FDR or Garnishee Cap</p>
                  </div>
                </div>

                <div className="text-xs sm:text-sm text-slate-300 space-y-2 leading-relaxed">
                  <p>
                    <strong className="text-white">Prayer A (Rule 5(1)(a)):</strong> Direct the defendant rolling mill to furnish an unconditional Bank Guarantee from a scheduled bank or deposit an FDR of <strong>₹1,42,00,000</strong> with the Commercial Court Registrar within 10 days.
                  </p>
                  <p>
                    <strong className="text-white">Prayer B (Rule 5(3) Conditional Freeze):</strong> Pending compliance, conditionally attach credit balances up to ₹1.42 Cr in the debtor&apos;s identified non-consortium current account and restrain alienation of two unencumbered induction furnace lines listed on the broker portal.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Dual-Track B2B CTA */}
            <section id="heading-action-desk" className="scroll-mt-28">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-100 text-[#DC2626] mb-2">
                  Pre-Suit Urgency &amp; Institutional Desk
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Lock Your Urgency Timeline Before Filing Attachment
                </h2>
              </div>
              <AttachmentCTA />
            </section>

            {/* Section 9: Hub, Calculators, Templates & Sibling Guides */}
            <section
              id="heading-hub-spokes"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Commodity Recovery Hub, Calculators &amp; Related Law Guides
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <Link
                  href="/industries/mining-minerals-fuel-scrap-commodity-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors block"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626]">
                    IND-25 Parent Pillar Hub
                  </span>
                  <p className="font-bold text-slate-900 mt-1">
                    Coal, Petcoke, Metal Scrap, Mineral &amp; Fuel Recovery Hub
                  </p>
                </Link>

                <Link
                  href="/law/order-37-summary-suit-money-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors block"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Core Procedure &bull; CPC
                  </span>
                  <p className="font-bold text-slate-900 mt-1">
                    Order XXXVII CPC Summary Suit for Money Recovery
                  </p>
                </Link>

                <Link
                  href="/cheque-bounce-case-against-company-directors"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors block"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Director Liability &bull; NI s.138/141
                  </span>
                  <p className="font-bold text-slate-900 mt-1">
                    Cheque Bounce Case Against Company Directors &amp; s.143A
                  </p>
                </Link>

                <Link
                  href="/recovery/unpaid-invoices"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors block"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    B2B Receivables
                  </span>
                  <p className="font-bold text-slate-900 mt-1">
                    Unpaid B2B Invoices Recovery Strategy &amp; Notice Framework
                  </p>
                </Link>

                <Link
                  href="/imported-coal-petcoke-biomass-supplier-gcv-moisture-deduction-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors block"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    IND-25 Sibling Spoke
                  </span>
                  <p className="font-bold text-slate-900 mt-1">
                    Imported Coal, Petcoke &amp; Biomass GCV Deduction Recovery
                  </p>
                </Link>

                <Link
                  href="/ferrous-non-ferrous-metal-scrap-ingot-rolling-mill-default-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors block"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    IND-25 Sibling Spoke
                  </span>
                  <p className="font-bold text-slate-900 mt-1">
                    Metal Scrap (HMS / Copper / Aluminium) &amp; Rolling Mill Recovery
                  </p>
                </Link>

                <Link
                  href="/industrial-gas-oxygen-nitrogen-argon-co2-cylinder-retention-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors block"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    IND-25 Sibling Spoke
                  </span>
                  <p className="font-bold text-slate-900 mt-1">
                    Industrial Gas Cylinder Retention (PESO) &amp; Rent Recovery
                  </p>
                </Link>

                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors block"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                    T1 Interactive Calculator
                  </span>
                  <p className="font-bold text-slate-900 mt-1">
                    MSME Delayed Payment 3x RBI Interest Calculator
                  </p>
                </Link>

                <Link
                  href="/templates/legal-notice-reply-format"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors block md:col-span-2"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    P1 Notice &amp; Reply Workspace
                  </span>
                  <p className="font-bold text-slate-900 mt-1">
                    Commercial Legal Notice &amp; Statutory Reply Format Workspace
                  </p>
                </Link>
              </div>
            </section>

            {/* Section 10: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  FAQs: Order XXXVIII Rule 5 CPC &amp; Section 12A Urgent Relief
                </h2>
              </div>

              <div className="space-y-3">
                {FAQ_ITEMS.map((faq, index) => (
                  <details
                    key={index}
                    className="group border border-slate-200 rounded-xl bg-slate-50 open:bg-white transition-colors"
                  >
                    <summary className="flex items-center justify-between gap-4 p-4 cursor-pointer list-none font-bold text-xs sm:text-sm text-slate-900">
                      <span>{faq.q}</span>
                      <span className="text-[#DC2626] font-black text-base shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 11: Primary Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Primary Statutory Authorities &amp; Official Portals
                </h2>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li>
                  &bull;{" "}
                  <a
                    href="https://www.indiacode.nic.in/handle/123456789/2191"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-[#DC2626] underline hover:text-[#B91C1C] font-semibold"
                  >
                    Code of Civil Procedure, 1908 (India Code)
                  </a>{" "}
                  &mdash; Order XXXVIII Rules 5, 6 &amp; 10, Order XXXVII, and Section 64.
                </li>
                <li>
                  &bull;{" "}
                  <a
                    href="https://www.indiacode.nic.in/handle/123456789/2156"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-[#DC2626] underline hover:text-[#B91C1C] font-semibold"
                  >
                    Commercial Courts Act, 2015 (India Code)
                  </a>{" "}
                  &mdash; Section 12A Pre-Institution Mediation &amp; Urgent Interim Relief Exception.
                </li>
                <li>
                  &bull;{" "}
                  <a
                    href="https://www.indiacode.nic.in/handle/123456789/21735"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-[#DC2626] underline hover:text-[#B91C1C] font-semibold"
                  >
                    Bharatiya Sakshya Adhiniyam, 2023 (India Code)
                  </a>{" "}
                  &mdash; Section 63 Admissibility of Electronic Records.
                </li>
                <li>
                  &bull;{" "}
                  <a
                    href="https://www.mca.gov.in"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-[#DC2626] underline hover:text-[#B91C1C] font-semibold"
                  >
                    Ministry of Corporate Affairs (MCA21 Portal)
                  </a>{" "}
                  &mdash; Public Index of Charges (CHG-1), Director Filings (DIR-12), and Financial Statements.
                </li>
              </ul>
            </section>
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
