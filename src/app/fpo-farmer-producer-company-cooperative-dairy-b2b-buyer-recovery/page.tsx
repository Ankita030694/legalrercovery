import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import FpoDairyTableOfContents from "./FpoDairyTableOfContents";
import FpoDairyScenarioTabs from "./FpoDairyScenarioTabs";
import FpoDairyCTA from "./FpoDairyCTA";

export const revalidate = 86400;

const PAGE_URL = "/fpo-farmer-producer-company-cooperative-dairy-b2b-buyer-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

const EXACT_H1 =
  "Corporate Offtaker, Agri-Tech Platform or Mandi Trader Defaulted on Your FPO / Dairy Plant's Produce Supply? Fast-Track Legal Recovery";

// Tightened from 62ch PDF draft to 56ch for Screaming Frog 30-60ch compliance
const META_TITLE = "FPO (Farmer Producer Company) & Dairy B2B Buyer Recovery";

// Tightened from 163ch PDF draft to 148ch for Screaming Frog 120-155ch compliance
const META_DESCRIPTION =
  "10,000+ FPOs & dairy plants supply grains, fruits & milk to corporate buyers. Enforce APMC 24-72h payment rules, NI s.138 & Order 37 CPC recovery.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "fpo farmer producer company unpaid corporate buyer agri produce recovery",
    "agritech startup institutional buyer defaulted fpo payment",
    "dairy chilling plant milk tanker buyer unpaid arrears",
    "apmc trader bounced cheque given to fpo",
    "sfac nabard fpo legal recovery support",
    "perishable produce quality deduction after acceptance",
  ],
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
        alt: formatAltText(META_TITLE),
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
    title:
      "Model Agricultural Produce and Livestock Marketing (Promotion & Facilitation) Act, 2017 & State APMC Bye-Laws — Mandatory 24–72 Hour Trader Payment & License Suspension",
    url: "https://agmarknet.gov.in/",
  },
  {
    title:
      "The Negotiable Instruments Act, 1881 (Sections 138, 139 & 143A — Criminal Prosecution for Dishonoured Mandi & Dairy Buyer Cheques)",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title:
      "The Code of Civil Procedure, 1908 (Order XXXVII — Summary Suits on Written Offtake Contracts, Signed Tak-Patti & Liquidated Invoices)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15–18 & 24 — 3x RBI Compound Interest & MSEFC Recovery for Udyam-Registered FPOs)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title:
      "The Sale of Goods Act, 1930 (Sections 19–24, 41 & 42 — Passage of Property Upon Weighment & Deemed Acceptance After Unloading)",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 — Admissibility of Electronic Weighbridge Slips, e-NAM Records, Milk Fat/SNF Logs & WhatsApp Chats)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const FAQS = [
  {
    question:
      "How does copying the APMC Secretary on a Legal Notice force a mandi trader to pay an FPO immediately?",
    answer:
      "Under most State APMC Acts and Mandi Bye-Laws, licensed commission agents (arhatiyas) and traders are statutorily required to settle farmer and FPO auction proceeds within 24 to 72 hours of weighment. When an Advocate Legal Notice is formally copied (CC) to the APMC Secretary / Market Committee Chairman, it places the trader's Mandi Trading License and APMC security deposit at direct risk of suspension or cancellation—producing rapid settlement without waiting years for a civil decree.",
  },
  {
    question:
      "Can an FPO or Dairy Cooperative register under Udyam / MSME to claim 3x RBI compound interest from corporate buyers?",
    answer:
      "Yes. Farmer Producer Companies (incorporated under Part IXA / Chapter XXIA of the Companies Act, 2013) and Dairy Cooperatives engaged in cleaning, grading, sorting, chilling, or primary processing of agricultural or dairy produce can obtain Udyam Registration. Once registered as a Micro or Small Enterprise, any corporate buyer or agri-tech platform delaying payment beyond 45 days becomes liable for compound interest at 3x the RBI Bank Rate under Section 16 of the MSMED Act, 2006, and loses tax deductibility under Section 43B(h) of the Income Tax Act.",
  },
  {
    question:
      "What if an institutional buyer deducts 25%–40% for 'perishable spoilage' or 'high moisture' weeks after unloading?",
    answer:
      "Under Sections 41 and 42 of the Sale of Goods Act, 1930, a buyer must inspect perishable agricultural produce or milk at the time of delivery or within a commercially immediate window. Once the buyer signs the Goods Receipt Note (GRN), unloads the truck into their warehouse/silo, or records an initial Fat/SNF or moisture reading without protest, they are legally deemed to have accepted the consignment. Post-acceptance unilateral debit notes are legally unsustainable.",
  },
  {
    question:
      "Can a Dairy Cooperative prosecute a private milk processor under Section 138 NI Act if a security PDC bounces?",
    answer:
      "Yes. Following the Supreme Court ruling in Sripati Singh v. State of Jharkhand (2021), a post-dated or security cheque presented after the fortnightly dairy billing cycle becomes due and payable attracts full criminal liability under Section 138 of the Negotiable Instruments Act, 1881. The cooperative must serve a statutory 15-day demand notice within 30 days of receiving the Bank Cheque Return Memo.",
  },
  {
    question:
      "Our FPO was promoted under the SFAC / NABARD 10,000 FPO Scheme—can the Board recover dues without a full-time legal team?",
    answer:
      "Yes. An FPO Board of Directors can pass a simple Board Resolution authorizing the CEO or Chairman to initiate recovery. Using an online advocate-drafted notice workflow with BSA 2023 Section 63 digital evidence certificates, even a rural FPO can serve formal legal notices via Email, WhatsApp, and Speed Post RPAD—and escalate to Order XXXVII Summary Suits or MSEFC Samadhaan at minimal upfront cost.",
  },
  {
    question:
      "Which court or forum is fastest for recovering ₹10 lakh to ₹50 lakh from a funded agri-tech startup?",
    answer:
      "For undisputed invoices backed by a written Offtake Agreement, signed GRNs, and balance confirmations, an Order XXXVII CPC Summary Suit (or Commercial Court suit above ₹3 lakh after Section 12A Pre-Institution Mediation) is highly effective because the buyer cannot defend as a matter of right without proving a triable defence. If the FPO is Udyam-registered, parallel or alternative filing before the MSEFC under Section 18 MSMED Act provides statutory 90-day resolution.",
  },
  {
    question:
      "What documents must an FPO or Dairy Plant preserve before dispatching bulk produce or milk tankers?",
    answer:
      "Always preserve: (1) Written Offtake / Supply Agreement or WhatsApp rate-card confirmation, (2) Electronic Weighbridge Slip (Kanta Parchi) or Mandi Tak-Patti, (3) GST Tax Invoice & E-Way Bill, (4) Dispatch Quality / Milk Fat-SNF Lab Slip signed by the transporter or buyer dock, (5) Signed GRN / Gate Entry stamp, and (6) Ledger Reconciliation plus Bank Cheque Return Memos.",
  },
];

const DECISION_STAGES = [
  {
    stage: "Stage 1 · Day 1–3",
    title: "Halt Credit & Lock Dispatch Proof",
    detail:
      "Freeze further truck/tanker dispatches immediately. Archive Kanta Parchi, Mandi Tak-Patti, Fat/SNF lab slips, E-Way Bills, and WhatsApp rate confirmations.",
  },
  {
    stage: "Stage 2 · Day 4–10",
    title: "Serve Notice + APMC Secretary CC",
    detail:
      "Dispatch an Advocate Legal Notice giving 7–15 days to pay. Copy (CC) the APMC Secretary for mandi traders or CFO/Board for corporate offtakers.",
  },
  {
    stage: "Stage 3 · Day 15–30",
    title: "NI s.138 Cheque Bounce Trigger",
    detail:
      "Present due fortnightly/security PDCs. Within 30 days of the Bank Return Memo, serve mandatory 15-day Section 138 NI Act criminal demand notice.",
  },
  {
    stage: "Stage 4 · Day 31–60",
    title: "MSEFC / s.12A Mediation / Order 37",
    detail:
      "File on MSME Samadhaan (if Udyam-registered) for 3x RBI interest, or initiate Commercial Court s.12A Pre-Institution Mediation / Order XXXVII Summary Suit.",
  },
  {
    stage: "Stage 5 · Execution",
    title: "Bank Attachment & License Action",
    detail:
      "Enforce Order XXXVII decrees, MSEFC awards, or s.143A 20% interim compensation via bank account garnishee orders and APMC license suspension.",
  },
];

export default function FpoDairyBuyerRecoveryPage() {
  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
  const reviewerName = "Anuj Anand Malik";
  const reviewerRole = "Advocate & Founder, AMA Legal Solutions";

  const breadcrumbSchema = {
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
        name: "Agri-Inputs, Cold Storage & Food Processing Recovery",
        item: `${SITE_URL}/industries/agri-inputs-cold-storage-food-processing-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "FPO & Cooperative Dairy B2B Buyer Recovery",
        item: CANONICAL_URL,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: META_DESCRIPTION,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": CANONICAL_URL,
    },
    author: {
      "@type": "Person",
      name: reviewerName,
      jobTitle: reviewerRole,
    },
    publisher: {
      "@type": "Organization",
      name: "LegalRecovery.in",
      url: SITE_URL,
    },
    datePublished: "2026-11-18",
    dateModified: "2026-11-18",
    inLanguage: "en-IN",
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How FPOs and Dairy Cooperatives Recover Unpaid B2B Produce & Milk Arrears",
    description:
      "5-stage statutory recovery playbook for Farmer Producer Companies and Dairy Plants facing corporate offtaker, agri-tech, or mandi trader payment defaults.",
    step: DECISION_STAGES.map((s, idx) => ({
      "@type": "HowToStep",
      position: idx + 1,
      name: s.title,
      text: s.detail,
    })),
  };

  const faqSchema = {
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

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-21 · FPO, FPC &amp; Cooperative Dairy Recovery</span>
            <span className="text-slate-500">|</span>
            <span>APMC 24–72 Hr Rule · NI s.138 · Order XXXVII CPC</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Creditor Answer Box (40-60 words + Parent Hub Link) */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            FPOs and dairy plants can recover defaulted institutional buyer and mandi trader dues within 15–45 days by serving an Advocate Legal Notice copied to the{" "}
            <strong className="text-white">APMC Secretary</strong> (threatening mandi license suspension under 24–72 hr payment rules), prosecuting bounced PDCs under{" "}
            <strong className="text-white">NI Act s.138</strong>, and filing{" "}
            <strong className="text-white">Order XXXVII Summary Suits</strong>. Part of our{" "}
            <Link
              href="/industries/agri-inputs-cold-storage-food-processing-recovery"
              className="text-red-300 underline hover:text-white font-semibold"
            >
              Agri-Inputs, Cold Storage &amp; Food Processing Recovery Hub
            </Link>
            .
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-xl sm:text-2xl font-black text-emerald-400">24–72 Hrs</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                Statutory APMC Mandi Trader Payment Window
              </p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-black text-red-400">3x RBI Rate</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                MSMED s.16 Monthly Compound Interest (Udyam FPOs)
              </p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-black text-amber-400">30 Days</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                Strict NI s.138 Notice Deadline After Cheque Bounce
              </p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-black text-slate-100">Order 37</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                Fast-Track Summary Suit on Signed Offtake Invoices
              </p>
            </div>
          </div>

          <p className="mt-4 text-[11px] sm:text-xs text-slate-400">
            Legal Review: <strong className="text-slate-200">{reviewerName}</strong> ({reviewerRole}) &middot; Updated November 18, 2026
          </p>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Agri & Food Processing Hub",
                href: "/industries/agri-inputs-cold-storage-food-processing-recovery",
              },
              {
                label: "FPO & Dairy B2B Buyer Recovery",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <FpoDairyTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: FPO & Dairy Crisis */}
            <section
              id="fpo-member-crisis"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Why Institutional Buyer Defaults Threaten FPO &amp; Dairy Survival
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Across India, over 10,000 newly incorporated{" "}
                  <strong>Farmer Producer Organizations (FPOs / FPCs)</strong>—promoted under the Central Sector Scheme with SFAC, NABARD, and NCDC support—alongside thousands of{" "}
                  <strong>Dairy Cooperatives and Milk Producer Companies</strong> aggregate bulk grains, pulses, fruits, vegetables, and raw milk from 300 to 2,500 smallholder farmer-members per entity. Unlike large corporate conglomerates, an FPO operates on razor-thin working capital margins of 2% to 5%.
                </p>
                <p>
                  When a corporate offtaker, VC-funded agri-tech procurement platform, private dairy processor, or licensed APMC mandi trader defaults on a ₹15 lakh to ₹75 lakh supply batch, the crisis is not merely an accounting write-off. Farmer-members expect cash payout within 7 to 14 days of harvest or morning milk pouring. A single unrecovered B2B buyer default triggers{" "}
                  <strong>immediate member revolt</strong>, suspension of raw material aggregation, inability to service NABARD/bank working capital loans, and reputational collapse of the FPO&apos;s Board of Directors.
                </p>
                <p>
                  Defaulting buyers exploit the perception that rural FPO CEOs and Dairy Union managers lack urban litigation infrastructure. However, Indian agricultural marketing laws, commercial summary procedures, and MSME payment protections give FPOs and dairy plants formidable statutory leverage—provided you trigger the exact legal notices before evidence decays.
                </p>
              </div>
            </section>

            {/* Section 2: APMC Mandate */}
            <section
              id="apmc-mandi-mandate"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  The APMC Secretary Leverage: 24–72 Hour Mandi Payment Rules
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Most FPO CEOs treat a defaulting mandi trader (<em>arhatiya</em>) or commission agent like an ordinary civil debtor—waiting 6 months while making polite phone calls. That is a strategic mistake. Under State{" "}
                  <strong>Agricultural Produce Marketing Committee (APMC) Acts</strong> and Mandi Bye-Laws across Maharashtra, Madhya Pradesh, Uttar Pradesh, Punjab, Haryana, Gujarat, Karnataka, and Rajasthan, licensed mandi buyers are bound by strict timely-payment mandates—typically{" "}
                  <strong>same-day to 24–72 hours</strong> from the date of auction or weighment.
                </p>
                <div className="bg-slate-900 text-white rounded-xl p-5 border border-slate-800">
                  <p className="text-xs font-extrabold uppercase tracking-widest text-red-400 mb-2">
                    High-Leverage Collection Tactic
                  </p>
                  <p className="text-sm sm:text-base text-slate-100 leading-relaxed">
                    Serving a formal Advocate Legal Notice on the defaulting mandi trader—with an explicit{" "}
                    <strong>Carbon Copy (CC) marked to the APMC Secretary / District Agricultural Marketing Officer</strong>—places the trader&apos;s{" "}
                    <strong>Mandi Commission &amp; Trading License</strong> and APMC security deposit at immediate risk of suspension or cancellation. Traders who ignore ordinary reminders routinely settle within 7 to 10 days to avoid losing their mandi yard trading privileges.
                  </p>
                </div>
                <p>
                  Where the buyer is an off-mandi corporate offtaker or agri-tech startup procuring under a direct bilateral Offtake Agreement, the FPO pairs this commercial pressure with{" "}
                  <strong>Udyam / MSMED Act Section 15–18</strong> (for 3x RBI compound interest and Section 43B(h) tax disallowance) and{" "}
                  <strong>Order XXXVII CPC Summary Suits</strong>.
                </p>
              </div>
            </section>

            {/* Section 3: Decision Tree SVG + Mobile Cards */}
            <section
              id="recovery-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  5-Stage FPO &amp; Dairy Produce Recovery Decision Tree
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Follow this time-bound escalation pipeline the moment a corporate offtaker, milk processor, or mandi trader misses the agreed payout cycle.
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block w-full overflow-x-auto mb-4">
                <svg
                  viewBox="0 0 960 220"
                  width={960}
                  height={220}
                  className="w-full h-auto"
                  role="img"
                  aria-label="5-Stage FPO and Cooperative Dairy B2B Buyer Recovery Decision Tree"
                >
                  <rect x="0" y="0" width="960" height="220" rx="16" fill="#0F172A" />
                  {/* Stage 1 */}
                  <rect x="20" y="34" width="164" height="152" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <text x="34" y="60" fill="#F87171" fontSize="11" fontWeight="700">STAGE 1 · DAY 1–3</text>
                  <text x="34" y="84" fill="#FFFFFF" fontSize="13" fontWeight="700">Halt Credit &amp;</text>
                  <text x="34" y="102" fill="#FFFFFF" fontSize="13" fontWeight="700">Lock Dispatch</text>
                  <text x="34" y="128" fill="#CBD5E1" fontSize="10.5">Kanta Parchi, Tak-Patti,</text>
                  <text x="34" y="144" fill="#CBD5E1" fontSize="10.5">Fat/SNF Lab Slip &amp;</text>
                  <text x="34" y="160" fill="#CBD5E1" fontSize="10.5">E-Way Bill Archive</text>
                  <path d="M188 110 L204 110" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrow)" />

                  {/* Stage 2 */}
                  <rect x="208" y="34" width="164" height="152" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="1.5" />
                  <text x="222" y="60" fill="#F87171" fontSize="11" fontWeight="700">STAGE 2 · DAY 4–10</text>
                  <text x="222" y="84" fill="#FFFFFF" fontSize="13" fontWeight="700">Advocate Notice</text>
                  <text x="222" y="102" fill="#FFFFFF" fontSize="13" fontWeight="700">+ APMC Sec. CC</text>
                  <text x="222" y="128" fill="#CBD5E1" fontSize="10.5">Email + WhatsApp + RPAD</text>
                  <text x="222" y="144" fill="#CBD5E1" fontSize="10.5">License Suspension Risk</text>
                  <text x="222" y="160" fill="#CBD5E1" fontSize="10.5">or 43B(h) Tax Notice</text>
                  <path d="M376 110 L392 110" stroke="#DC2626" strokeWidth="2.5" />

                  {/* Stage 3 */}
                  <rect x="396" y="34" width="164" height="152" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <text x="410" y="60" fill="#FBBF24" fontSize="11" fontWeight="700">STAGE 3 · DAY 15–30</text>
                  <text x="410" y="84" fill="#FFFFFF" fontSize="13" fontWeight="700">Present PDCs &amp;</text>
                  <text x="410" y="102" fill="#FFFFFF" fontSize="13" fontWeight="700">NI s.138 Notice</text>
                  <text x="410" y="128" fill="#CBD5E1" fontSize="10.5">Strict 30-Day Window</text>
                  <text x="410" y="144" fill="#CBD5E1" fontSize="10.5">from Bank Return Memo</text>
                  <text x="410" y="160" fill="#CBD5E1" fontSize="10.5">15-Day Statutory Cure</text>
                  <path d="M564 110 L580 110" stroke="#DC2626" strokeWidth="2.5" />

                  {/* Stage 4 */}
                  <rect x="584" y="34" width="164" height="152" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <text x="598" y="60" fill="#34D399" fontSize="11" fontWeight="700">STAGE 4 · DAY 31–60</text>
                  <text x="598" y="84" fill="#FFFFFF" fontSize="13" fontWeight="700">MSEFC / s.12A /</text>
                  <text x="598" y="102" fill="#FFFFFF" fontSize="13" fontWeight="700">Order 37 Suit</text>
                  <text x="598" y="128" fill="#CBD5E1" fontSize="10.5">3x RBI Interest Claim</text>
                  <text x="598" y="144" fill="#CBD5E1" fontSize="10.5">Summary Suit or</text>
                  <text x="598" y="160" fill="#CBD5E1" fontSize="10.5">Criminal s.138 Filing</text>
                  <path d="M752 110 L768 110" stroke="#DC2626" strokeWidth="2.5" />

                  {/* Stage 5 */}
                  <rect x="772" y="34" width="168" height="152" rx="12" fill="#DC2626" />
                  <text x="786" y="60" fill="#FEE2E2" fontSize="11" fontWeight="700">STAGE 5 · EXECUTION</text>
                  <text x="786" y="84" fill="#FFFFFF" fontSize="13" fontWeight="700">Asset Freeze &amp;</text>
                  <text x="786" y="102" fill="#FFFFFF" fontSize="13" fontWeight="700">20% s.143A Payout</text>
                  <text x="786" y="128" fill="#FEF2F2" fontSize="10.5">Bank Garnishee Orders,</text>
                  <text x="786" y="144" fill="#FEF2F2" fontSize="10.5">APMC Security Forfeit</text>
                  <text x="786" y="160" fill="#FEF2F2" fontSize="10.5">&amp; Decree Execution</text>
                </svg>
              </div>

              {/* Mobile Stacked Stage Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                {DECISION_STAGES.map((item) => (
                  <div
                    key={item.stage}
                    className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800"
                  >
                    <p className="text-[11px] font-bold uppercase tracking-wider text-red-400 mb-1">
                      {item.stage}
                    </p>
                    <p className="text-sm font-bold text-white mb-1">{item.title}</p>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Statutory Remedy Matrix Table */}
            <section
              id="statutory-remedy-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Statutory Remedy Matrix for FPOs &amp; Cooperative Dairy Plants
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Select the appropriate statutory track based on buyer category (mandi trader vs. corporate offtaker vs. dairy processor) and available payment instruments.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="py-3.5 px-4 font-bold">Statute / Forum</th>
                      <th className="py-3.5 px-4 font-bold">Target Defaulter</th>
                      <th className="py-3.5 px-4 font-bold">Key Timeline</th>
                      <th className="py-3.5 px-4 font-bold">Strategic Leverage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        State APMC Act &amp; Mandi Bye-Laws
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Licensed Mandi Trader / Arhatiya
                      </td>
                      <td className="py-3.5 px-4 text-emerald-700 font-semibold">
                        24–72 Hrs Payout Rule
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        CC to APMC Secretary triggers trading license suspension &amp; security deposit forfeiture.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        NI Act 1881 (ss.138, 139 &amp; 143A)
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Dairy Processor / Trader with Bounced PDC
                      </td>
                      <td className="py-3.5 px-4 text-red-700 font-semibold">
                        30d Notice + 15d Cure
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Criminal summons, up to 2x cheque fine, and 20% interim compensation under s.143A.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        CPC Order XXXVII Summary Suit
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Corporate Offtaker / Agri-Tech Platform
                      </td>
                      <td className="py-3.5 px-4 text-slate-800 font-semibold">
                        10-Day Appearance Rule
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Buyer cannot defend without Court leave when debt is backed by written contract &amp; GRNs.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        MSMED Act ss.15–18 &amp; IT s.43B(h)
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Corporate Buyer (vs. Udyam FPO/Dairy)
                      </td>
                      <td className="py-3.5 px-4 text-emerald-700 font-semibold">
                        45-Day Max Credit Cap
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        3x RBI Bank Rate compound interest + corporate income tax disallowance on unpaid invoices.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Sale of Goods Act ss.41–42
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Perishable Buyer Issuing Late Debit Notes
                      </td>
                      <td className="py-3.5 px-4 text-amber-700 font-semibold">
                        Immediate Dock Inspection
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Unloading without joint spoilage panchnama constitutes deemed acceptance of full invoice.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        BNS 2023 ss.316 &amp; 318
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Fraudulent Diversion / Absconding Buyer
                      </td>
                      <td className="py-3.5 px-4 text-red-700 font-semibold">
                        Immediate Police Complaint
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Criminal breach of trust &amp; cheating where buyer shuts firm or diverts produce proceeds.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5: Interactive Scenario Tabs */}
            <section
              id="buyer-default-scenarios"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  4 Commercial Failure Modes &amp; FPO Recovery Playbooks
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Select your exact buyer dispute scenario below to review the buyer&apos;s delaying tactic, statutory counter-argument, and 3-step execution checklist.
              </p>
              <FpoDairyScenarioTabs />
            </section>

            {/* Section 6: Worked Financial Calculation Box */}
            <section
              id="worked-fpo-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Worked Recovery Ledger: ₹24 Lakh Maize &amp; Milk Tanker Default
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Illustrative statutory calculation for an Udyam-registered Farmer Producer Company or Dairy Producer Company facing a 120-day overdue corporate offtaker invoice (assuming an illustrative RBI Bank Rate of 6.75% p.a. &rarr; 3x = 20.25% p.a. compounded monthly under MSMED Act s.16).
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">
                      Principal Overdue
                    </p>
                    <p className="text-xl font-black text-white mt-1">&#8377;24,00,000</p>
                    <p className="text-[11px] text-slate-400 mt-1">100 MT Maize / Milk Tankers</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">
                      3x RBI Compound Interest
                    </p>
                    <p className="text-xl font-black text-emerald-400 mt-1">&#8377;1,66,000+</p>
                    <p className="text-[11px] text-slate-400 mt-1">120 Days Overdue @ 20.25% p.a.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">
                      s.143A Interim Relief
                    </p>
                    <p className="text-xl font-black text-amber-400 mt-1">&#8377;4,80,000</p>
                    <p className="text-[11px] text-slate-400 mt-1">20% Cheque Bounce Deposit</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">
                      Buyer Tax Disallowance
                    </p>
                    <p className="text-xl font-black text-red-400 mt-1">s.43B(h) Hit</p>
                    <p className="text-[11px] text-slate-400 mt-1">~&#8377;6.0L–&#8377;7.2L Extra Tax Burden</p>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-slate-800">
                  Compute exact daily compound interest for your FPO&apos;s overdue invoices using our{" "}
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="text-red-400 underline hover:text-white font-semibold"
                  >
                    MSME Delayed Payment Interest Calculator
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 7: BSA 2023 s.63 Evidence Checklist */}
            <section
              id="bsa-dispatch-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Mandatory Dispatch &amp; BSA 2023 s.63 Evidence Checklist
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Under <strong>Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023</strong>, electronic records (e-NAM auction sheets, digital weighbridge slips, ERP ledgers, and WhatsApp rate/quality confirmations) are admissible in court when supported by a Section 63 Electronic Evidence Certificate. Compile these 6 records before issuing your legal notice:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "1. Offtake Contract / Board Authorization",
                    desc: "Signed Supply Agreement, Purchase Order, or WhatsApp rate confirmation + FPO Board Resolution authorizing the CEO to initiate recovery.",
                  },
                  {
                    title: "2. Weighment & Mandi Proof (Kanta Parchi / Tak-Patti)",
                    desc: "Electronic weighbridge slip, APMC auction Tak-Patti, or e-NAM lot settlement sheet proving exact net quintals dispatched.",
                  },
                  {
                    title: "3. Milk Fat/SNF or Produce Quality Lab Slip",
                    desc: "Contemporaneous dairy chilling centre Fat/SNF reading or grain moisture test signed at dispatch/unloading to defeat late quality cuts.",
                  },
                  {
                    title: "4. GST Invoice, E-Way Bill & Bilty",
                    desc: "Tax invoice, GST E-Way Bill, and transporter Lorry Receipt (Bilty) / signed Goods Receipt Note (GRN) at buyer warehouse.",
                  },
                  {
                    title: "5. Bank Return Memo & Cheque Copies",
                    desc: "Original dishonoured cheque and bank-stamped Cheque Return Memo (note exact receipt date for the 30-day NI s.138 clock).",
                  },
                  {
                    title: "6. BSA 2023 s.63 Digital Certificate",
                    desc: "Signed Section 63 certificate covering exported WhatsApp chats, email trails, and Tally/ERP buyer ledger statements.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <p className="text-sm font-bold text-slate-900 mb-1">{item.title}</p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: Dual-Track CTA */}
            <section id="fpo-dual-cta" className="scroll-mt-28">
              <div className="mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Launch a Single FPO Notice or Bulk Federation Recovery Drive
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  Test 1 overdue buyer immediately or onboard your entire FPO federation / dairy union defaulter ledger via CSV.
                </p>
              </div>
              <FpoDairyCTA />
            </section>

            {/* Section 9: Related Tools, Templates & Guides */}
            <section
              id="fpo-related-resources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Essential Tools, Notice Templates &amp; Agri Recovery Guides
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/industries/agri-inputs-cold-storage-food-processing-recovery"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] transition-colors bg-slate-50"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626]">
                    Parent Industry Hub
                  </span>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    Agri-Inputs, Cold Storage &amp; Food Processing Recovery Hub
                  </p>
                </Link>
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] transition-colors bg-slate-50"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                    Interactive Calculator
                  </span>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    MSME Delayed Payment 3x RBI Interest Calculator
                  </p>
                </Link>
                <Link
                  href="/templates/msme-delayed-payment-demand-notice"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] transition-colors bg-slate-50"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
                    Notice Template
                  </span>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    MSME Delayed Payment &amp; s.43B(h) Demand Notice Format
                  </p>
                </Link>
                <Link
                  href="/agrochemical-pesticide-seed-dealer-seasonal-credit-default-recovery"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] transition-colors bg-slate-50"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
                    Sibling Agri Guide
                  </span>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    Agrochemical &amp; Seed Dealer Seasonal Credit Default Recovery
                  </p>
                </Link>
                <Link
                  href="/cheque-bounce-notice-timeline-section-138"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] transition-colors bg-slate-50"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
                    Statutory Timeline
                  </span>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    Section 138 Cheque Bounce Notice &amp; Filing Timeline
                  </p>
                </Link>
                <Link
                  href="/distributor-dealer-dues-recovery"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] transition-colors bg-slate-50"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
                    Commercial B2B Guide
                  </span>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    Distributor &amp; Institutional Buyer Dues Recovery in India
                  </p>
                </Link>
                <Link
                  href="/hi/legal-notice-kaise-bheje"
                  className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] transition-colors bg-slate-50 md:col-span-2"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700">
                    Hindi Vyapari Guide
                  </span>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    बकाया पैसे वसूली के लिए कानूनी नोटिस कैसे भेजें (Hindi Legal Notice Guide)
                  </p>
                </Link>
              </div>
            </section>

            {/* Section 10: FAQs */}
            <section
              id="fpo-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Frequently Asked Questions: FPO &amp; Dairy Buyer Recovery
                </h2>
              </div>
              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.question}
                    className="group border border-slate-200 rounded-xl bg-slate-50 open:bg-white open:shadow-xs transition-all"
                  >
                    <summary className="flex items-center justify-between gap-4 p-4 cursor-pointer font-bold text-sm sm:text-base text-slate-900 list-none">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] font-black text-lg shrink-0 group-open:rotate-45 transition-transform">
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

            {/* Section 11: Primary Statutory Sources */}
            <section
              id="fpo-primary-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#404447] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Primary Statutory Sources &amp; Official Portals
                </h2>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.title} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold mt-0.5">&bull;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-800 hover:text-[#DC2626] underline underline-offset-2"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
