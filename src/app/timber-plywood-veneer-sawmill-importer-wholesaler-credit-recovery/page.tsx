import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import TimberPlywoodTableOfContents from "./TimberPlywoodTableOfContents";
import TimberPlywoodScenarioTabs from "./TimberPlywoodScenarioTabs";
import TimberPlywoodCTA from "./TimberPlywoodCTA";

export const revalidate = 86400;

const PAGE_URL = "/timber-plywood-veneer-sawmill-importer-wholesaler-credit-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

const H1_TEXT =
  "Credit Recovery for Gandhidham Timber Importers & Yamunanagar / Perumbavoor Plywood, Veneer & MDF Manufacturers";

const META_TITLE = "Timber Importers & Yamunanagar Plywood Credit Recovery";
const META_DESCRIPTION =
  "Timber importers retire 90-day USD LCs at the bank on time—even when downstream furniture factories & plywood dealers stretch domestic bills to 180 days!";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: CANONICAL_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText(
          "Gandhidham timber importer and Yamunanagar plywood manufacturer credit recovery playbook"
        ),
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

const STATUTORY_MATRIX = [
  {
    statute: "MSMED Act, 2006",
    provision: "Sections 15, 16, 17 & 18 (MSEFC Samadhaan)",
    trigger:
      "Udyam-registered Micro/Small sawmill, veneer peeler, or plywood/MDF manufacturer faces payment delay beyond 45 days (or 15 days if no written agreement).",
    remedy:
      "Statutory 3x RBI bank rate compound interest with monthly rests from day 46, plus fast-track MSEFC conciliation and arbitration.",
    timeline: "45-Day Cap / 90-Day MSEFC Track",
  },
  {
    statute: "Income Tax Act, 1961",
    provision: "Section 43B(h) (Year-End Tax Disallowance)",
    trigger:
      "Corporate furniture OEM, interior contractor, or wholesale dealer keeps a Micro/Small timber or plywood supplier unpaid past 45 days across March 31.",
    remedy:
      "Entire unpaid purchase expense is disallowed in the buyer's taxable income, adding an immediate ~30% corporate tax cash hit.",
    timeline: "Pre-March 31 / Tax Audit Leverage",
  },
  {
    statute: "Negotiable Instruments Act, 1881",
    provision: "Sections 138, 141 & 143A (PDC Bounce)",
    trigger:
      "Security PDC or invoice cheque issued by a wholesale plywood dealer or modular furniture company dishonors for funds insufficient or stop-payment.",
    remedy:
      "Personal criminal liability against Managing Directors and authorized signatories, plus up to 20% interim compensation under s.143A.",
    timeline: "30-Day Notice + 15-Day Cure",
  },
  {
    statute: "Code of Civil Procedure, 1908",
    provision: "Order XXXVII (Summary Suit) & Order XXXVIII Rule 5",
    trigger:
      "Liquidated GST invoices, signed bilty/LRs, and Forest Transit Passes remain unpaid—especially for larger timber importers above Micro/Small thresholds.",
    remedy:
      "Fast-track money decree barring sham defenses without court deposit, plus pre-judgment attachment of dealer godowns and bank accounts.",
    timeline: "4–9 Months (Summary Track)",
  },
  {
    statute: "Sale of Goods Act, 1930",
    provision: "Section 42 (Deemed Acceptance of Timber & Ply)",
    trigger:
      "Buyer raises belated 'core-gap, moisture swelling, or veneer delamination' complaints 4–6 months after delivery when payment is demanded.",
    remedy:
      "Retention, cutting, or resale of sheets/logs beyond a reasonable inspection window constitutes statutory deemed acceptance, defeating sham debit notes.",
    timeline: "Immediate Written Rebuttal",
  },
  {
    statute: "Indian Forest Act & GST Rules",
    provision: "State Timber Transit Pass (TP) & e-Way Bill",
    trigger:
      "Debtor disputes physical delivery or cubic-meter (CBM) volume of imported Radiata Pine, Burma Teak, or Gurjan logs.",
    remedy:
      "Government-stamped Forest Transit Pass, Customs Bill of Entry, Dharamkanta weighbridge slip, and GST e-Way Bill establish conclusive delivery.",
    timeline: "Day-1 Evidentiary Lock",
  },
];

const FAQS = [
  {
    question:
      "How can a Gandhidham or Kandla timber importer recover money when 90-day USD LCs are retired but domestic buyers stretch to 180 days?",
    answer:
      "Large Gandhidham, Mangaluru, and Tuticorin timber importers often exceed Micro/Small Udyam limits, making MSMED Act Section 18 unavailable—or they supply as pure traders. In those cases, the fastest civil remedy is an Order XXXVII Summary Suit in the Commercial or Civil Court backed by Customs Bills of Entry, State Forest Transit Passes (TP), GST e-Way Bills, and signed Lorry Receipts. If the buyer issued a security PDC that bounces, simultaneously invoke NI Act Section 138 read with Section 141 to put personal criminal pressure on the buyer's directors.",
  },
  {
    question:
      "Does Section 43B(h) of the Income Tax Act apply to Yamunanagar and Perumbavoor plywood manufacturers?",
    answer:
      "Yes. Yamunanagar (Haryana) and Perumbavoor (Kerala) plywood, blockboard, face-veneer, and particle-board manufacturers holding valid Udyam Registration as a Micro or Small Enterprise (manufacturing category) qualify directly for Section 43B(h). If an audit-liable buyer—such as a corporate modular furniture OEM, real-estate developer, or large distributor—keeps your invoice unpaid beyond 45 days (or 15 days without a written credit agreement) at the end of the financial year, the buyer cannot claim that purchase as a tax deduction, triggering an immediate ~30% tax outgo.",
  },
  {
    question:
      "How do we defeat a 'core-gap or delamination' quality complaint raised 6 months after plywood delivery?",
    answer:
      "Under Section 42 of the Sale of Goods Act, 1930, a buyer is deemed to have accepted goods when they intimate acceptance, cut/install/resell the sheets, or retain them beyond a reasonable inspection period without rejecting them in writing. A dealer or interior contractor who stays silent for 4 to 6 months and raises core-gap, warping, or moisture-swelling claims only after receiving a payment reminder is raising a moonshine defense. Serve a formal legal rebuttal attaching your factory QC moisture logs, IS:710/IS:303 test records, and timestamped WhatsApp ledger silence under BSA 2023 Section 63.",
  },
  {
    question:
      "Why are Forest Transit Passes (TP) and e-Way Bills decisive evidence in timber and sawmill recovery suits?",
    answer:
      "In timber litigation, defaulting sawmills and furniture factories frequently deny receiving the full cubic-meter (CBM) volume or claim short-supply of graded logs. Unlike ordinary commercial goods, timber movement requires statutory State Forest Department Transit Passes (or imported timber port-clearance passes) alongside GST e-Way Bills, Dharamkanta weighbridge slips, and driver-signed Lorry Receipts (Bilty). Producing matching vehicle numbers across the Forest TP, e-Way Bill, and weighment slip eliminates delivery denial at the Order XXXVII leave-to-defend stage.",
  },
  {
    question:
      "Can a timber or plywood wholesaler file an NI Act Section 138 case on a 'security cheque' taken at dealer onboarding?",
    answer:
      "Yes. The Supreme Court in Sripati Singh v. State of Jharkhand clarified that a cheque issued as security matures into an enforceable instrument once the underlying supply debt becomes due and remains unpaid. Provided your supply agreement or ledger confirms an existing legally enforceable liability on the date of presentation, dishonor of a security PDC triggers full criminal prosecution under NI Act Section 138 and personal liability for Managing Directors under Section 141—alongside up to 20% interim compensation under Section 143A.",
  },
  {
    question:
      "What if a pure timber or laminate trader does not qualify for Section 43B(h) tax disallowance?",
    answer:
      "Under current MSME and Income Tax rules, retail and wholesale traders registered under Udyam for priority-sector lending do not trigger Section 43B(h) disallowance or MSEFC arbitration for pure trading supplies. However, pure timber importers and laminate wholesalers have three high-speed remedies: (1) Order XXXVII CPC Summary Suits on confirmed GST invoices and LRs, (2) NI Act Section 138 criminal complaints on dishonored cheques, and (3) Order XXXVIII Rule 5 CPC pre-judgment attachment if the debtor dealer is liquidating godown stock.",
  },
  {
    question:
      "How quickly must we act before a defaulting furniture factory or plywood dealer shifts godown stock?",
    answer:
      "Once a dealer crosses 60 days past due or a PDC bounces, delay is fatal—timber and plywood are fast-moving, untraceable commodities once cut or resold. Issue an Advocate-drafted Tri-Channel Demand Notice (Email + WhatsApp + Speed Post RPAD) within 48 hours of default, diarize the 30-day NI s.138 statutory window from any cheque return memo, and prepare an Order XXXVIII Rule 5 CPC attachment affidavit if market intelligence shows the buyer is closing their showroom or moving inventory to a sister concern.",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: H1_TEXT,
  description: META_DESCRIPTION,
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
  },
  datePublished: "2026-11-20",
  dateModified: "2026-11-20",
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Recover Overdue Timber, Plywood, Veneer & MDF Receivables",
  description:
    "Step-by-step statutory recovery workflow for Gandhidham timber importers and Yamunanagar/Perumbavoor plywood manufacturers.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Lock Forest Transit Pass, e-Way Bill & BSA s.63 Ledger Proof",
      text: "Compile Customs Bills of Entry or State Forest Transit Passes, GST invoices, e-Way Bills, Dharamkanta slips, and WhatsApp ledger acknowledgments with a BSA 2023 s.63 certificate.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Classify Udyam Manufacturing vs Pure Trading Status",
      text: "Verify whether your unit holds Micro/Small Udyam manufacturing status (unlocking MSMED s.16 3x RBI interest and IT Act s.43B(h)) or requires Order XXXVII CPC + NI s.138.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Serve Composite Tri-Channel Statutory Demand Notice",
      text: "Dispatch an Advocate-drafted demand notice via Speed Post RPAD, Email, and WhatsApp invoking s.43B(h), Sale of Goods Act s.42 deemed acceptance, and NI s.138.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Escalate to MSEFC Samadhaan, Order XXXVII Suit, or NI s.138",
      text: "If unpaid after the 15-day statutory cure window, file on MSME Samadhaan, initiate an Order XXXVII Summary Suit with Order 38 Rule 5 attachment, or prosecute bounced PDCs under s.138/s.141.",
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
      name: "Coal, Mineral & Commodity Recovery",
      item: `${SITE_URL}/industries/mining-minerals-fuel-scrap-commodity-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Timber, Plywood & MDF Recovery",
      item: CANONICAL_URL,
    },
  ],
};

export default function TimberPlywoodRecoveryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            ARTICLE_SCHEMA,
            HOWTO_SCHEMA,
            FAQ_SCHEMA,
            BREADCRUMB_SCHEMA,
          ]),
        }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-25</span>
            <span>&bull;</span>
            <span>Timber, Plywood, Veneer &amp; MDF Recovery Playbook</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {H1_TEXT}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Under our{" "}
            <Link
              href="/industries/mining-minerals-fuel-scrap-commodity-recovery"
              className="text-red-400 underline hover:text-red-300 font-semibold"
            >
              Bulk Commodity &amp; Industrial Recovery Hub
            </Link>
            , Gandhidham timber importers and Yamunanagar or Perumbavoor plywood manufacturers
            recover 180-day overdue bills by combining{" "}
            <strong className="text-white">Section 43B(h)</strong> tax disallowance,{" "}
            <strong className="text-white">MSMED s.16</strong> 3x RBI compound interest,{" "}
            <strong className="text-white">NI Act s.138</strong> director liability, and{" "}
            <strong className="text-white">Order XXXVII CPC</strong> summary suits backed by
            Forest Transit Passes and e-Way Bills.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">90d vs 180d</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                USD LC Bank Maturity vs Domestic Credit Stretch
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">3x RBI Rate</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Monthly Compound Interest (MSMED s.16)
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">~30% Tax Hit</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Buyer Disallowance Under IT Act s.43B(h)
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">4–9 Months</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Order XXXVII Summary Decree &amp; NI s.138 Track
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <Breadcrumbs
          items={[
            {
              label: "Coal, Mineral & Commodity Recovery",
              href: "/industries/mining-minerals-fuel-scrap-commodity-recovery",
            },
            {
              label: "Timber, Plywood & MDF Recovery",
              href: PAGE_URL,
            },
          ]}
        />

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-4">
          <TimberPlywoodTableOfContents />

          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1 */}
            <section
              id="lc-credit-gap"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Why 90-Day USD LCs &amp; 180-Day Credit Break Wood Clusters
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  India&apos;s timber and wood-panel supply chain runs on an asymmetric working-capital
                  clock. Port-based timber importers in{" "}
                  <strong className="text-slate-900">
                    Gandhidham (Kandla), Mangaluru, and Tuticorin
                  </strong>{" "}
                  open 90-day USD Letters of Credit (LCs) or Buyers Credit lines to import Radiata
                  Pine, New Zealand Pine, Burma/Ghana Teak, Gurjan, and Merbau round logs. The
                  issuing Indian bank debits the importer&apos;s cash-credit limit on day 90 without
                  negotiation, alongside customs duty, port demurrage, and sawmill conversion costs.
                </p>
                <p>
                  Yet once those logs are sawn into sizes and dispatched to interior contractors,
                  modular kitchen factories, or{" "}
                  <strong className="text-slate-900">
                    Yamunanagar (Haryana) and Perumbavoor (Kerala)
                  </strong>{" "}
                  plywood, blockboard, face-veneer, and MDF plants, downstream buyers routinely
                  stretch domestic GST bills from 45 days to 150–180 days. Operating on thin 3–6%
                  trading or milling margins, a single ₹40–₹80 Lakh default wipes out an entire
                  quarter&apos;s net profit and forces the supplier to borrow at 11–14% bank
                  interest to fund the buyer&apos;s working capital.
                </p>
                <p>
                  As part of our{" "}
                  <Link
                    href="/industries/mining-minerals-fuel-scrap-commodity-recovery"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    IND-25 Bulk Commodity &amp; Industrial Recovery Architecture
                  </Link>
                  , replacing informal mandi follow-ups with structured statutory escalation—turning{" "}
                  <Link
                    href="/recovery/unpaid-invoices"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    unpaid commercial invoices
                  </Link>{" "}
                  into tax-disallowance, criminal cheque-bounce, or summary-decree liabilities—is
                  the fastest way to restore 45-day cash velocity.
                </p>
              </div>
            </section>

            {/* Section 2: Decision Tree */}
            <section
              id="decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Decision Tree: 43B(h) Tax Lever vs Order 37 CPC vs NI s.138
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Choosing the wrong forum wastes 12–18 months. Route your overdue timber, veneer,
                plywood, or MDF receivable through the exact legal track matched to your Udyam
                registration and the buyer&apos;s default behavior:
              </p>

              {/* Desktop SVG Decision Tree */}
              <div className="hidden md:block w-full overflow-x-auto bg-slate-900 rounded-2xl p-5 border border-slate-800">
                <svg
                  viewBox="0 0 820 340"
                  width={820}
                  height={340}
                  className="w-full h-auto"
                  role="img"
                  aria-label="Timber and Plywood Credit Recovery Decision Tree"
                >
                  {/* Root Node */}
                  <rect x="250" y="16" width="320" height="48" rx="10" fill="#DC2626" />
                  <text x="410" y="38" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">
                    Timber / Plywood Invoice Overdue &gt; 45 Days
                  </text>
                  <text x="410" y="54" textAnchor="middle" fill="#FEE2E2" fontSize="11">
                    Verify Udyam Status, PDCs &amp; Forest TP / e-Way Bill
                  </text>

                  {/* Connector Lines */}
                  <line x1="410" y1="64" x2="410" y2="95" stroke="#64748B" strokeWidth="2" />
                  <line x1="115" y1="95" x2="705" y2="95" stroke="#64748B" strokeWidth="2" />
                  <line x1="115" y1="95" x2="115" y2="120" stroke="#64748B" strokeWidth="2" />
                  <line x1="310" y1="95" x2="310" y2="120" stroke="#64748B" strokeWidth="2" />
                  <line x1="510" y1="95" x2="510" y2="120" stroke="#64748B" strokeWidth="2" />
                  <line x1="705" y1="95" x2="705" y2="120" stroke="#64748B" strokeWidth="2" />

                  {/* Track 1 */}
                  <rect x="20" y="120" width="190" height="82" rx="10" fill="#1E293B" stroke="#10B981" strokeWidth="1.5" />
                  <text x="115" y="144" textAnchor="middle" fill="#34D399" fontSize="12" fontWeight="700">
                    Micro / Small Maker
                  </text>
                  <text x="115" y="163" textAnchor="middle" fill="#E2E8F0" fontSize="11">
                    Yamunanagar / Perumbavoor
                  </text>
                  <text x="115" y="180" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    Plywood, Veneer &amp; MDF Mill
                  </text>
                  <line x1="115" y1="202" x2="115" y2="232" stroke="#10B981" strokeWidth="2" />
                  <rect x="20" y="232" width="190" height="88" rx="10" fill="#064E3B" />
                  <text x="115" y="256" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">
                    s.43B(h) + MSEFC
                  </text>
                  <text x="115" y="274" textAnchor="middle" fill="#A7F3D0" fontSize="10.5">
                    30% Buyer Tax Disallowance
                  </text>
                  <text x="115" y="291" textAnchor="middle" fill="#A7F3D0" fontSize="10.5">
                    + 3x RBI Compound Interest
                  </text>

                  {/* Track 2 */}
                  <rect x="215" y="120" width="190" height="82" rx="10" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.5" />
                  <text x="310" y="144" textAnchor="middle" fill="#FBBF24" fontSize="12" fontWeight="700">
                    Security PDC Bounced
                  </text>
                  <text x="310" y="163" textAnchor="middle" fill="#E2E8F0" fontSize="11">
                    Funds Insufficient / Stopped
                  </text>
                  <text x="310" y="180" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    30-Day Return Memo Clock
                  </text>
                  <line x1="310" y1="202" x2="310" y2="232" stroke="#F59E0B" strokeWidth="2" />
                  <rect x="215" y="232" width="190" height="88" rx="10" fill="#78350F" />
                  <text x="310" y="256" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">
                    NI Act s.138 + s.141
                  </text>
                  <text x="310" y="274" textAnchor="middle" fill="#FDE68A" fontSize="10.5">
                    Personal Director Summons
                  </text>
                  <text x="310" y="291" textAnchor="middle" fill="#FDE68A" fontSize="10.5">
                    + 20% Interim Deposit (s.143A)
                  </text>

                  {/* Track 3 */}
                  <rect x="415" y="120" width="190" height="82" rx="10" fill="#1E293B" stroke="#60A5FA" strokeWidth="1.5" />
                  <text x="510" y="144" textAnchor="middle" fill="#60A5FA" fontSize="12" fontWeight="700">
                    Importer / Trader
                  </text>
                  <text x="510" y="163" textAnchor="middle" fill="#E2E8F0" fontSize="11">
                    Gandhidham / Kandla Sawmill
                  </text>
                  <text x="510" y="180" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    Confirmed Invoices + TP
                  </text>
                  <line x1="510" y1="202" x2="510" y2="232" stroke="#60A5FA" strokeWidth="2" />
                  <rect x="415" y="232" width="190" height="88" rx="10" fill="#1E3A8A" />
                  <text x="510" y="256" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">
                    Order XXXVII CPC
                  </text>
                  <text x="510" y="274" textAnchor="middle" fill="#BFDBFE" fontSize="10.5">
                    Summary Money Decree
                  </text>
                  <text x="510" y="291" textAnchor="middle" fill="#BFDBFE" fontSize="10.5">
                    + s.42 Deemed Acceptance
                  </text>

                  {/* Track 4 */}
                  <rect x="615" y="120" width="185" height="82" rx="10" fill="#1E293B" stroke="#F87171" strokeWidth="1.5" />
                  <text x="707" y="144" textAnchor="middle" fill="#F87171" fontSize="12" fontWeight="700">
                    Godown Stock Shifting
                  </text>
                  <text x="707" y="163" textAnchor="middle" fill="#E2E8F0" fontSize="11">
                    Dealer Closing Showroom
                  </text>
                  <text x="707" y="180" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    Asset Dissipation Risk
                  </text>
                  <line x1="707" y1="202" x2="707" y2="232" stroke="#F87171" strokeWidth="2" />
                  <rect x="615" y="232" width="185" height="88" rx="10" fill="#7F1D1D" />
                  <text x="707" y="256" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">
                    Order 38 Rule 5 CPC
                  </text>
                  <text x="707" y="274" textAnchor="middle" fill="#FECACA" fontSize="10.5">
                    Pre-Judgment Attachment
                  </text>
                  <text x="707" y="291" textAnchor="middle" fill="#FECACA" fontSize="10.5">
                    of Bank &amp; Inventory
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Decision Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                  <p className="text-xs font-extrabold uppercase text-emerald-800">
                    Track A &bull; Micro/Small Plywood &amp; MDF Maker
                  </p>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    Section 43B(h) Tax Disallowance + MSEFC Samadhaan
                  </p>
                  <p className="text-xs text-slate-700 mt-1">
                    Triggers ~30% tax hit on buyer&apos;s unpaid year-end balance + 3x RBI compound interest.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                  <p className="text-xs font-extrabold uppercase text-amber-800">
                    Track B &bull; Dishonored Security PDC
                  </p>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    NI Act Section 138 + Section 141 Director Liability
                  </p>
                  <p className="text-xs text-slate-700 mt-1">
                    Serve notice within 30 days of bank memo; seek 20% interim deposit under s.143A.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-100 border border-slate-300">
                  <p className="text-xs font-extrabold uppercase text-slate-700">
                    Track C &bull; Timber Importer / Pure Wholesaler
                  </p>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    Order XXXVII CPC Summary Suit + Sale of Goods Act s.42
                  </p>
                  <p className="text-xs text-slate-700 mt-1">
                    Liquidated debt recovery using Forest Transit Passes, e-Way Bills &amp; LRs.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                  <p className="text-xs font-extrabold uppercase text-[#DC2626]">
                    Track D &bull; Godown Stock Liquidation Risk
                  </p>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    Order XXXVIII Rule 5 Pre-Judgment Attachment
                  </p>
                  <p className="text-xs text-slate-700 mt-1">
                    Freeze buyer receivables and inventory before decree when asset stripping begins.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Statutory Matrix */}
            <section
              id="statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Statutory Matrix: MSMED s.15–18, 43B(h), NI s.138 &amp; CPC
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Wood-cluster creditors often rely on a single legal notice without citing the
                specific statutory trigger that hurts the buyer&apos;s balance sheet or personal
                liberty. Below is the complete six-statute enforcement matrix for Indian timber and
                panel manufacturers:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full text-left border-collapse min-w-[680px]">
                  <thead>
                    <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                      <th className="p-3.5 font-bold">Statute &amp; Provision</th>
                      <th className="p-3.5 font-bold">Commercial Trigger</th>
                      <th className="p-3.5 font-bold">Creditor Remedy</th>
                      <th className="p-3.5 font-bold">Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                    {STATUTORY_MATRIX.map((row, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? "bg-white" : "bg-slate-50/70"}
                      >
                        <td className="p-3.5 align-top">
                          <span className="font-bold text-slate-900 block">{row.statute}</span>
                          <span className="text-xs text-[#DC2626] font-semibold">
                            {row.provision}
                          </span>
                        </td>
                        <td className="p-3.5 align-top text-slate-700 leading-relaxed">
                          {row.trigger}
                        </td>
                        <td className="p-3.5 align-top text-slate-700 leading-relaxed">
                          {row.remedy}
                        </td>
                        <td className="p-3.5 align-top font-bold text-slate-900 whitespace-nowrap">
                          {row.timeline}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Interactive Scenario Tabs */}
            <section
              id="scenario-explorer"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  4 Wood-Cluster Default Scenarios &amp; Creditor Counter-Moves
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Select your wood-sector failure mode below to inspect the debtor&apos;s standard
                excuse, the controlling statute, and the exact 3-step enforcement sequence:
              </p>
              <TimberPlywoodScenarioTabs />
            </section>

            {/* Section 5: Worked Financial Ledger */}
            <section
              id="worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Worked Ledger: ₹48L Timber &amp; Plywood MSME Interest Claim
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Consider a Yamunanagar Micro/Small plywood and veneer manufacturer (or an
                Udyam-registered sawmill) that supplied ₹48,00,000 worth of BWP Marine Plywood and
                Pinewood battens to a corporate modular-furniture OEM on a 45-day written credit
                term, which remained unpaid for 180 days (135 days past the statutory cap):
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-700">
                  <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                    Illustrative MSMED s.16 + Section 43B(h) Recovery Ledger
                  </span>
                  <span className="text-xs text-slate-400">
                    RBI Bank Rate Benchmark: 6.75% &rarr; 3x Statutory Rate: 20.25% p.a.
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-[11px] text-slate-400 uppercase font-bold">
                      Principal Overdue
                    </p>
                    <p className="text-xl font-black text-white mt-1">&#8377;48,00,000</p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      120 CBM + BWP Ply Lot
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-[11px] text-slate-400 uppercase font-bold">
                      Overdue Beyond 45d
                    </p>
                    <p className="text-xl font-black text-amber-400 mt-1">135 Days</p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      4.5 Months Compounding
                    </p>
                  </div>
                  <div className="bg-emerald-950/60 rounded-xl p-4 border border-emerald-700/50">
                    <p className="text-[11px] text-emerald-300 uppercase font-bold">
                      MSMED s.16 Interest
                    </p>
                    <p className="text-xl font-black text-emerald-400 mt-1">&#8377;3,74,310</p>
                    <p className="text-[11px] text-emerald-200/80 mt-1">
                      20.25% p.a. Monthly Rests
                    </p>
                  </div>
                  <div className="bg-red-950/60 rounded-xl p-4 border border-red-800/60">
                    <p className="text-[11px] text-red-300 uppercase font-bold">
                      Buyer 43B(h) Tax Hit
                    </p>
                    <p className="text-xl font-black text-red-400 mt-1">~&#8377;14,40,000</p>
                    <p className="text-[11px] text-red-200/80 mt-1">
                      30% Disallowance if Unpaid Mar 31
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 text-xs text-slate-300">
                  <span>
                    <strong className="text-white">Total Claimable Statutory Dues:</strong>{" "}
                    &#8377;51,74,310 (Principal + s.16 Interest) + MSEFC legal costs.
                  </span>
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="inline-flex items-center px-4 py-2 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-xs transition-colors shrink-0"
                  >
                    Compute Your Exact Interest &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 6: Evidence Checklist */}
            <section
              id="evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Forest Transit Pass, e-Way Bill &amp; BSA 2023 s.63 Checklist
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Whether filing before an MSEFC Council in Chandigarh/Ernakulam or a Commercial
                Court in Rajkot/Gandhidham, timber and plywood claims win or lose on documentary
                chain-of-custody. Assemble these seven records before serving your demand notice:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "1. State Forest Transit Pass (TP) & Customs BoE",
                    desc: "For round logs and sawn timber, attach the State Forest Department Transit Pass (or Kandla/Mundra Customs Bill of Entry + Phytosanitary Certificate) matching truck registration.",
                  },
                  {
                    title: "2. GST Tax Invoice & Matching e-Way Bill",
                    desc: "Ensure HSN codes (4403/4407 for logs/sawn timber; 4412 for plywood; 4411 for MDF), CBM/Sq.Ft quantity, and GSTR-1 filing match the buyer's GSTR-2B credit.",
                  },
                  {
                    title: "3. Dharamkanta Weighment & CBM Tally Sheet",
                    desc: "Stamped weighbridge slip and log-by-log girth/length tally sheet signed by the buyer's factory supervisor or transporter to defeat short-measurement excuses.",
                  },
                  {
                    title: "4. Signed Lorry Receipt (Bilty) & Gate Entry",
                    desc: "Transporter's LR/GR bearing the consignee's rubber stamp, security gate inward register number, and unloading date.",
                  },
                  {
                    title: "5. Udyam Certificate (Micro / Small Manufacturing)",
                    desc: "Required to invoke MSMED s.16 (3x RBI interest) and Income Tax Act s.43B(h). Verify NIC manufacturing codes (1610/1621) are active prior to invoice date.",
                  },
                  {
                    title: "6. QC Moisture & IS:710 / IS:303 Dispatch Logs",
                    desc: "Pre-dispatch moisture meter readings and resin-grade batch reports that neutralize 6-month-late 'core-gap or delamination' debit notes under Sale of Goods Act s.42.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5"
                  >
                    <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-950">
                <strong className="font-bold">7. BSA 2023 Section 63 Electronic Certificate:</strong>{" "}
                Every WhatsApp chat where a furniture factory owner promises &ldquo;payment next
                week,&rdquo; shares a ledger PDF, or confirms receipt without quality protest must
                be backed by a signed Section 63 Bharatiya Sakshya Adhiniyam, 2023 certificate
                (replacing old IEA s.65B) with device hash/metadata to be admissible in court.
              </div>
            </section>

            {/* Section 7: Dual-Track CTA */}
            <section
              id="serve-notice"
              className="scroll-mt-28 bg-slate-100 rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Serve a 43B(h) &amp; Order 37 Demand Notice Today
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Stop funding defaulting furniture factories and wholesale plywood dealers out of your
                own CC limit. Test our advocate-drafted statutory notice on one overdue account or
                onboard your entire dealer aging ledger:
              </p>
              <TimberPlywoodCTA />
            </section>

            {/* Section 8: Hub, Calculators, Templates & Siblings */}
            <section
              id="related-guides"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Commodity Hub, Calculators, Templates &amp; Sibling Guides
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/industries/mining-minerals-fuel-scrap-commodity-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors block"
                >
                  <span className="text-[11px] font-bold uppercase text-[#DC2626]">
                    Parent Industry Hub
                  </span>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    Coal, Mineral, Metal Scrap &amp; Bulk Commodity Recovery Hub
                  </p>
                </Link>
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors block"
                >
                  <span className="text-[11px] font-bold uppercase text-emerald-700">
                    Interactive Calculator
                  </span>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    MSME Delayed Payment 3x RBI Compound Interest Calculator
                  </p>
                </Link>
                <Link
                  href="/templates/legal-notice-reply-format"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors block"
                >
                  <span className="text-[11px] font-bold uppercase text-slate-600">
                    Notice Workspace
                  </span>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    Advocate-Vetted Commercial Legal Notice &amp; Reply Template
                  </p>
                </Link>
                <Link
                  href="/law/order-37-summary-suit-money-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors block"
                >
                  <span className="text-[11px] font-bold uppercase text-slate-600">
                    Statutory Guide
                  </span>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    Order XXXVII CPC Summary Suit for Unpaid Commercial Invoices
                  </p>
                </Link>
                <Link
                  href="/cheque-bounce-case-against-company-directors"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors block"
                >
                  <span className="text-[11px] font-bold uppercase text-slate-600">
                    Director Liability
                  </span>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    NI Act s.138 &amp; s.141 Cheque Bounce Action Against Directors
                  </p>
                </Link>
                <Link
                  href="/imported-coal-petcoke-biomass-supplier-gcv-moisture-deduction-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors block"
                >
                  <span className="text-[11px] font-bold uppercase text-slate-600">
                    IND-25 Sibling Spoke
                  </span>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    Imported Coal, Petcoke &amp; Biomass GCV Deduction Recovery
                  </p>
                </Link>
                <Link
                  href="/ferrous-non-ferrous-metal-scrap-ingot-rolling-mill-default-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors block"
                >
                  <span className="text-[11px] font-bold uppercase text-slate-600">
                    IND-25 Sibling Spoke
                  </span>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    Metal Scrap, Ingot &amp; Rolling Mill Default Recovery
                  </p>
                </Link>
                <Link
                  href="/industrial-gas-oxygen-nitrogen-argon-co2-cylinder-retention-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors block"
                >
                  <span className="text-[11px] font-bold uppercase text-slate-600">
                    IND-25 Sibling Spoke
                  </span>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    Industrial Gas Cylinder Retention &amp; Rent Recovery (PESO)
                  </p>
                </Link>
              </div>
            </section>

            {/* Section 9: FAQs */}
            <section
              id="faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Frequently Asked Questions: Timber &amp; Plywood Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group rounded-xl border border-slate-200 bg-slate-50/70 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="flex items-center justify-between gap-4 p-4 cursor-pointer list-none font-bold text-sm sm:text-base text-slate-900">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] font-extrabold text-lg group-open:rotate-45 transition-transform shrink-0">
                        +
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 10: Official Portals */}
            <section
              id="official-portals"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-extrabold flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Primary Statutory Authorities &amp; Official Portals
                </h2>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <li>
                  <a
                    href="https://samadhaan.msme.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="block p-3.5 rounded-xl border border-slate-200 hover:border-[#DC2626] text-slate-800 font-semibold"
                  >
                    MSME Samadhaan Portal (MSEFC Filing) &nearr;
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.indiacode.nic.in/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="block p-3.5 rounded-xl border border-slate-200 hover:border-[#DC2626] text-slate-800 font-semibold"
                  >
                    India Code (MSMED Act, NI Act &amp; Sale of Goods Act) &nearr;
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.incometaxindia.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="block p-3.5 rounded-xl border border-slate-200 hover:border-[#DC2626] text-slate-800 font-semibold"
                  >
                    Income Tax Department (Section 43B(h) Provisions) &nearr;
                  </a>
                </li>
                <li>
                  <a
                    href="https://ecourts.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="block p-3.5 rounded-xl border border-slate-200 hover:border-[#DC2626] text-slate-800 font-semibold"
                  >
                    eCourts India (Commercial &amp; Order XXXVII Case Status) &nearr;
                  </a>
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
