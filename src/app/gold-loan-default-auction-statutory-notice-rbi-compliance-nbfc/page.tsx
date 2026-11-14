import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import GoldLoanTableOfContents from "./GoldLoanTableOfContents";
import GoldLoanScenarioTabs from "./GoldLoanScenarioTabs";
import GoldLoanAuctionCTA from "./GoldLoanAuctionCTA";

export const revalidate = 86400;

const PAGE_PATH = "/gold-loan-default-auction-statutory-notice-rbi-compliance-nbfc";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const EXACT_H1 =
  "RBI-Compliant Gold Loan Default & Public Auction Protocol for NBFCs: LTV Breach, Vernacular Notices & Deficit Recovery";
const META_TITLE = "Gold Loan Auction Notice & RBI Compliance for NBFCs";
const META_DESCRIPTION =
  "Avoid RBI penalties & gold restoration orders. Contract Act s.176 pre-auction notice timelines, local taluka rules, 75% LTV & deficit recovery for NBFCs.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: PAGE_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText(EXACT_H1),
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
    trigger: "75% LTV Breach (Bullion Drop / Interest Accrual)",
    statute: "RBI NBFC Scale Based Regulations & Master Direction on Gold Loans",
    noticeTimeline: "Immediate Margin Call Notice + 7–15 Day Cure Window",
    mandatoryRule:
      "Must maintain <= 75% LTV throughout loan tenure based on 30-day average 22-carat IBJA closing price. Borrower must be given a chance to top up gold or part-pay principal before auction escalation.",
    auditRisk: "Supervisory censure & direction to halt fresh gold-loan sanctions",
  },
  {
    trigger: "Pre-Auction Statutory Demand (Pawn Sale)",
    statute: "Indian Contract Act, 1872 s.176 (Non-Waivable)",
    noticeTimeline: "Minimum 14–21 Clear Days Registered Notice prior to auction",
    mandatoryRule:
      "Pawnee MUST give 'reasonable notice of the sale' specifying exact date, time, venue, and itemized dues. Any loan clause waiving s.176 notice is void ab initio under Indian contract law.",
    auditRisk: "Consumer court orders for full gold restoration + 12% interest & compensation",
  },
  {
    trigger: "Public Newspaper Advertisement",
    statute: "RBI Fair Practices Code — Gold Auction Guidelines",
    noticeTimeline: "At least 14 Clear Days before the scheduled auction date",
    mandatoryRule:
      "Mandatory publication in at least 2 newspapers circulating in the branch taluka: 1 in the local vernacular language and 1 in a national/English daily.",
    auditRisk: "Auction set aside as secret/clandestine sale; borrower awarded market value",
  },
  {
    trigger: "Auction Venue & Related-Party Ban",
    statute: "RBI Gold Loan Auction Directions & Board-Approved Policy",
    noticeTimeline: "Scheduled Date in Branch Taluka (First Auction)",
    mandatoryRule:
      "First auction MUST be held in the same town/taluka where the pledging branch is situated. NBFC, its directors, group entities, and employees cannot bid directly or via related parties.",
    auditRisk: "Heavy RBI monetary penalty & mandatory restitution of pledged ornaments",
  },
  {
    trigger: "Reserve Price & Surplus / Deficit Settlement",
    statute: "Indian Contract Act s.176 & RBI Fair Practices Code",
    noticeTimeline: "Reserve Price >= 85%–90% IBJA; Surplus Refund within 7–15 Days",
    mandatoryRule:
      "Reserve price cannot be below 85% (or Board-approved 85%–90% threshold) of current 22-carat IBJA value. Excess proceeds MUST be refunded to borrower; shortfall is recoverable via suit/arbitration.",
    auditRisk: "Unjust enrichment liability & penal interest for delayed surplus remittance",
  },
  {
    trigger: "Spurious / Fake-Plated or Stolen Gold",
    statute: "Bharatiya Nyaya Sanhita (BNS) 2023 ss.316 & 318; PSS Act s.25",
    noticeTimeline: "Immediate XRF Re-Assay + Police FIR / Civil Recall",
    mandatoryRule:
      "Collateral security fails, but underlying loan debt survives. File BNS s.318 cheating complaint for spurious gold, cooperate on stolen ornament seizure, and invoke e-NACH/Order 37 recovery.",
    auditRisk: "Write-off loss if NBFC delays criminal FIR or fails to preserve assay CCTV",
  },
];

const PIPELINE_STAGES = [
  {
    stage: "Stage 1",
    day: "Day 0–7",
    title: "LTV Breach & Recall",
    detail: "IBJA mark-to-market triggers LTV > 75% Margin Call or 90-DPD Loan Recall.",
  },
  {
    stage: "Stage 2",
    day: "Day 8–22",
    title: "s.176 Registered Notice",
    detail: "Bilingual (Vernacular + English) Speed Post RPAD, WhatsApp & Email dispatch.",
  },
  {
    stage: "Stage 3",
    day: "Day 23–37",
    title: "2-Newspaper Publication",
    detail: "14-day public notice in 1 local vernacular + 1 national daily in branch taluka.",
  },
  {
    stage: "Stage 4",
    day: "Day 38",
    title: "Taluka Public Auction",
    detail: "Independent auctioneer, >=85% reserve price, CCTV & zero related-party bids.",
  },
  {
    stage: "Stage 5",
    day: "Day 39–53",
    title: "Surplus / Deficit Closure",
    detail: "NEFT surplus refund in 15 days or s.176/Order 37/Arbitration deficit recovery.",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Non-Waivable Statutory Duty of Reasonable Notice Under Section 176",
    parties: "Lallan Prasad v. Rahmat Ali & Anr.",
    citation: "AIR 1967 SC 1322, Supreme Court of India",
    holding:
      "The Supreme Court clarified the foundational law of pledge under Sections 172–176 of the Indian Contract Act, 1872: a pawnee who sells pledged goods without complying with statutory safeguards or cannot return the pledge upon tender cannot retain an enforceable money decree for the loan. Strict adherence to Section 176 notice is mandatory.",
    takeaway:
      "NBFCs cannot rely on fine-print loan clauses that waive pre-auction notice; every auction file must prove clear, unambiguous, prior Section 176 notice.",
  },
  {
    title: "Contractual Waiver of Section 176 Notice Held Void & Unenforceable",
    parties: "Prabhat Bank Ltd. & Anr. v. Babu Ram",
    citation: "AIR 1966 All 134, Allahabad High Court (Followed Pan-India)",
    holding:
      "The High Court ruled that the requirement of 'reasonable notice of the sale' in Section 176 of the Contract Act is mandatory and cannot be contracted away by an agreement 'notwithstanding anything to the contrary'. A mere demand for repayment without specifying that the pledge will be sold is legally insufficient.",
    takeaway:
      "A standard loan overdue reminder is NOT a Section 176 notice. The notice must explicitly state the lender's intention to sell the pledged gold at public auction if dues remain unpaid.",
  },
  {
    title: "RBI Supervisory Mandate on Taluka Auctions & Related-Party Prohibition",
    parties: "RBI Master Direction — NBFC Scale Based Regulations & Fair Practices Code",
    citation: "Reserve Bank of India Regulatory Mandate (2023–2026 Supervisory Cycle)",
    holding:
      "RBI supervisory audits have penalized NBFCs for shifting first-round auctions to centralized state hubs outside the pledging branch taluka, failing to publish vernacular notices, setting below-market reserve prices, and allowing group/related-party bidding.",
    takeaway:
      "First-attempt auctions must be conducted in the branch's own taluka/town by an RBI-compliant independent auctioneer with transparent KYC logs for every bidder.",
  },
  {
    title: "Electronic Delivery Logs Require Section 63 BSA 2023 Certification",
    parties: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63) & Arjun Panditrao Principle",
    citation: "BSA 2023 s.63 (Replacing Indian Evidence Act s.65B)",
    holding:
      "Digital dispatch proofs — WhatsApp API delivery webhooks, SMTP email headers, and automated SMS logs — are admissible as primary/secondary electronic evidence in Consumer Commissions, Civil Courts, and Arbitrations only when accompanied by a signed Section 63 BSA certificate.",
    takeaway:
      "Pair physical Speed Post RPAD tracking with BSA s.63-certified WhatsApp/Email dispatch records so borrowers cannot claim 'no notice received'.",
  },
];

const FAQS = [
  {
    question: "Can an NBFC waive Section 176 pre-auction notice in the gold loan agreement?",
    answer:
      "No. Under Indian contract law (settled in Prabhat Bank Ltd. v. Babu Ram and affirmed across High Courts and NCDRC), Section 176 of the Indian Contract Act, 1872 is a mandatory statutory protection. Any clause in a pawn ticket or gold loan sanction letter stating that the NBFC may auction ornaments 'without prior notice' is void and unenforceable.",
  },
  {
    question: "How many days' notice is considered 'reasonable' under Section 176 before auction?",
    answer:
      "While Section 176 uses the phrase 'reasonable notice', RBI supervisory expectations and consumer commission rulings consistently treat 14 to 21 clear days from the date of registered notice dispatch (plus 14 clear days for the two-newspaper public advertisement) as the safe audit standard. Sending a notice 48 hours before auction is routinely struck down as unfair trade practice.",
  },
  {
    question: "Can a Gold Loan NBFC conduct a centralized online or metro-city auction for rural branch loans?",
    answer:
      "Not for the first auction attempt. RBI Fair Practices Code mandates that the auction must be conducted in the same town or taluka in which the lending branch is located, enabling local borrowers and local jewellers to participate transparently. Only if the taluka auction fails due to zero bids at reserve price can a Board-approved escalation policy govern subsequent re-auction.",
  },
  {
    question: "What if the borrower refuses to accept the Speed Post or has changed their address?",
    answer:
      "Under Section 27 of the General Clauses Act, 1897, a Speed Post RPAD notice sent to the borrower's verified KYC address that returns with postal remarks 'Refused' or 'Unclaimed / Intimation Served' constitutes valid deemed service. Keep the unopened returned envelope intact and simultaneously dispatch vernacular WhatsApp + Email notices backed by a Section 63 BSA 2023 certificate.",
  },
  {
    question: "How must an NBFC handle auction surplus vs. post-auction deficit shortfall?",
    answer:
      "Under Section 176 of the Contract Act, if auction proceeds exceed the total principal, contracted interest, uncompounded penal charges (per RBI's 2023 Penal Charges Circular), and actual auction costs, the NBFC must refund the surplus to the borrower's bank account within 7–15 days. Conversely, if proceeds fall short, the borrower remains personally liable for the deficit, which the NBFC can recover via a Section 176 Deficit Demand Notice followed by institutional arbitration or an Order XXXVII CPC summary suit.",
  },
  {
    question: "What legal steps should an NBFC take if pledged gold turns out to be fake or stolen?",
    answer:
      "Immediately conduct a dual-assayer XRF/touchstone verification under continuous CCTV, seal the packet with independent witness signatures, and file an FIR under Section 318 (cheating) or Section 316 (criminal breach of trust) of the Bharatiya Nyaya Sanhita (BNS), 2023. Simultaneously recall the loan and pursue civil/e-NACH recovery (Section 25 PSS Act) for the full unsecured principal, because loss of collateral does not extinguish the debt.",
  },
  {
    question: "Can our NBFC test LegalRecovery.in on a single overdue gold loan before bulk onboarding?",
    answer:
      "Yes. You can dispatch a single Advocate-drafted Section 176 pre-auction or post-auction deficit notice for ₹999 (with tri-channel Speed Post RPAD, WhatsApp, and Email logs) via our self-serve portal, or upload 10 to 10,000+ defaulted accounts via CSV under a dedicated Institutional Representee Desk.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "Indian Contract Act, 1872 (Sections 172–176: Bailment of Pledges & Pawnee's Right of Sale) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Reserve Bank of India — Master Direction (NBFC Scale Based Regulation) Directions, 2023",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=12550",
  },
  {
    title: "RBI Fair Lending Practice — Penal Charges in Loan Accounts (DoR.MCS.REC.28/01.01.001/2023-24)",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12527",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 — Admissibility of Electronic Records)",
    url: "https://www.indiacode.nic.in/handle/123456789/20099",
  },
  {
    title: "Bharatiya Nyaya Sanhita (BNS), 2023 (Sections 316 & 318 — Criminal Breach of Trust & Cheating)",
    url: "https://www.indiacode.nic.in/handle/123456789/20062",
  },
];

export default function GoldLoanDefaultAuctionCompliancePage() {
  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: META_DESCRIPTION,
    url: PAGE_URL,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": PAGE_URL,
    },
    datePublished: "2026-11-14T13:15:00+05:30",
    dateModified: "2026-11-14T13:15:00+05:30",
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
    image: `${SITE_URL}/blog_money_recovery.png`,
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How NBFCs Execute an RBI & Section 176 Compliant Gold Loan Auction",
    description:
      "5-stage statutory pre-auction notice, vernacular newspaper publication, taluka auction, and surplus/deficit settlement workflow for Gold Loan NBFCs.",
    step: PIPELINE_STAGES.map((s, idx) => ({
      "@type": "HowToStep",
      position: idx + 1,
      name: `${s.stage}: ${s.title} (${s.day})`,
      text: s.detail,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

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
        name: "NBFC & Fintech Loan Recovery",
        item: `${SITE_URL}/industries/nbfc-fintech-loan-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Gold Loan Default & Auction Notice Compliance",
        item: PAGE_URL,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-02 &bull; NBFC &amp; Gold Loan Compliance</span>
            <span className="text-red-700">&bull;</span>
            <span>Contract Act s.176 &amp; RBI Master Direction</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40-60 word Executive Creditor Answer + Parent Hub Link in first 250 words */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Under our{" "}
            <Link
              href="/industries/nbfc-fintech-loan-recovery"
              className="text-red-300 underline decoration-red-400/60 hover:text-white font-semibold"
            >
              NBFC &amp; Fintech Loan Recovery Playbook
            </Link>
            , Gold Loan NBFCs must serve a non-waivable 14–21 day registered notice under Section 176 of the Indian Contract Act, 1872, publish 14-day vernacular &amp; English newspaper notices, auction in the branch taluka at &ge;85% IBJA reserve price, and settle surplus or deficit balances transparently.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">s.176 Non-Waivable</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Mandatory 14–21 Day Pre-Auction Notice
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">75% LTV Cap</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                30-Day IBJA Avg &amp; Margin Call Cure
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">Branch Taluka</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                First Auction Venue &amp; 2 Newspapers
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">&#8377;999 / CSV</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Single Pilot or 10,000+ Batch Dispatch
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "NBFC & Fintech Loan Recovery",
                href: "/industries/nbfc-fintech-loan-recovery",
              },
              {
                label: "Gold Loan Default & Auction Notice Compliance",
                href: PAGE_PATH,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          <GoldLoanTableOfContents />

          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Why RBI Crackdowns Target Gold Loan NBFC Auction Notices
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Gold-backed lending is historically India&apos;s lowest-credit-loss retail asset class, yet it now carries one of the highest regulatory and consumer-litigation exposures for Non-Banking Financial Companies (NBFCs). Following supervisory inspections across major gold-loan lenders, the Reserve Bank of India (RBI) flagged systemic procedural breaches: conducting auctions in centralized state hubs outside the pledging branch&apos;s taluka, issuing vague SMS reminders instead of statutory notices under Section 176 of the Indian Contract Act, 1872, omitting vernacular newspaper advertisements, and permitting related-party or group-entity bidding.
                </p>
                <p>
                  Consumer commissions (DCDRC, SCDRC, and NCDRC) treat a defective gold auction as a per se deficiency in service and unfair trade practice. Even when a borrower has genuinely defaulted on principal and interest for over 12 months, a single procedural flaw in the pre-auction notice allows the forum to order full restoration of the pledged gold ornaments at current market rates—plus 9% to 12% penal interest and litigation costs.
                </p>
                <p>
                  This institutional playbook—part of our{" "}
                  <Link
                    href="/industries/nbfc-fintech-loan-recovery"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    NBFC &amp; Fintech Loan Recovery Hub
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/send-a-legal-notice/for-nbfc-to-recover-their-unpaid-dues"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    NBFC Unpaid Dues Legal Notice Desk
                  </Link>
                  —gives Gold Loan NBFC Legal Heads, Zonal Auction Officers, and Compliance teams an audit-proof, end-to-end statutory protocol from 75% LTV breach through taluka auction and deficit recovery.
                </p>
              </div>
            </section>

            {/* Section 2: Statutory & RBI Compliance Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Gold Loan Auction Statutory &amp; RBI Compliance Matrix
                </h2>
              </div>
              <p className="text-sm text-slate-600 mb-5">
                Every stage of a gold loan default—from mark-to-market LTV breach to post-auction surplus remittance—is governed by overlapping statutory and RBI supervisory mandates:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Operational Trigger</th>
                      <th className="p-3.5 font-bold">Governing Statute / Direction</th>
                      <th className="p-3.5 font-bold">Mandatory Timeline</th>
                      <th className="p-3.5 font-bold">Compliance Requirement</th>
                      <th className="p-3.5 font-bold">Non-Compliance Risk</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {STATUTORY_MATRIX.map((row) => (
                      <tr key={row.trigger} className="hover:bg-slate-50 align-top">
                        <td className="p-3.5 font-bold text-slate-900">{row.trigger}</td>
                        <td className="p-3.5 text-slate-700 font-medium">{row.statute}</td>
                        <td className="p-3.5 text-[#DC2626] font-semibold">{row.noticeTimeline}</td>
                        <td className="p-3.5 text-slate-600 leading-relaxed">{row.mandatoryRule}</td>
                        <td className="p-3.5 text-amber-800 bg-amber-50/40 font-medium">{row.auditRisk}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: 5-Stage Auction Pipeline SVG + Mobile Cards */}
            <section
              id="heading-auction-pipeline"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  5-Stage Audit-Proof Gold Loan Auction Escalation Rail
                </h2>
              </div>
              <p className="text-sm text-slate-600 mb-6">
                To survive both RBI supervisory inspection and consumer-court scrutiny, NBFC auction desks must enforce strict sequential gates across a 38-to-53 day statutory timeline:
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block overflow-x-auto pb-2">
                <svg
                  width={880}
                  height={210}
                  viewBox="0 0 880 210"
                  role="img"
                  aria-label="5-Stage RBI-Compliant Gold Loan Auction Workflow"
                  className="w-full h-auto max-w-[880px] mx-auto"
                >
                  <rect x="0" y="0" width="880" height="210" rx="16" fill="#0F172A" />
                  {PIPELINE_STAGES.map((item, i) => {
                    const x = 20 + i * 172;
                    return (
                      <g key={item.stage}>
                        <rect
                          x={x}
                          y={28}
                          width={152}
                          height={154}
                          rx={12}
                          fill="#1E293B"
                          stroke={i === 3 ? "#DC2626" : "#334155"}
                          strokeWidth={i === 3 ? 2 : 1.2}
                        />
                        <rect x={x + 12} y={40} width={64} height={22} rx={6} fill="#DC2626" />
                        <text
                          x={x + 44}
                          y={55}
                          textAnchor="middle"
                          fill="#FFFFFF"
                          fontSize="11"
                          fontWeight="700"
                        >
                          {item.stage}
                        </text>
                        <text x={x + 12} y={82} fill="#F87171" fontSize="11" fontWeight="700">
                          {item.day}
                        </text>
                        <text x={x + 12} y={103} fill="#FFFFFF" fontSize="13" fontWeight="800">
                          {item.title}
                        </text>
                        <foreignObject x={x + 12} y={112} width={128} height={62}>
                          <p
                            style={{
                              color: "#CBD5E1",
                              fontSize: "11px",
                              lineHeight: "1.35",
                              margin: 0,
                            }}
                          >
                            {item.detail}
                          </p>
                        </foreignObject>
                        {i < PIPELINE_STAGES.length - 1 && (
                          <path
                            d={`M ${x + 154} 105 L ${x + 168} 105`}
                            stroke="#DC2626"
                            strokeWidth="2.5"
                            markerEnd="url(#arrow)"
                          />
                        )}
                      </g>
                    );
                  })}
                  <defs>
                    <marker
                      id="arrow"
                      markerWidth="6"
                      markerHeight="6"
                      refX="5"
                      refY="3"
                      orient="auto"
                    >
                      <path d="M0,0 L6,3 L0,6 Z" fill="#DC2626" />
                    </marker>
                  </defs>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="md:hidden space-y-3">
                {PIPELINE_STAGES.map((item) => (
                  <div
                    key={item.stage}
                    className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="px-2.5 py-0.5 rounded bg-[#DC2626] text-[11px] font-bold">
                        {item.stage}
                      </span>
                      <span className="text-xs font-bold text-red-400">{item.day}</span>
                    </div>
                    <p className="text-sm font-bold text-white">{item.title}</p>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Interactive Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Interactive Playbook: 4 Gold Loan Auction Failure Modes
                </h2>
              </div>
              <p className="text-sm text-slate-600 mb-5">
                Select an operational bottleneck below to inspect the exact statutory mandate and step-by-step NBFC compliance workflow:
              </p>
              <GoldLoanScenarioTabs />
            </section>

            {/* Section 5: 75% LTV Breach & Margin Call */}
            <section
              id="heading-ltv-margin-call"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  75% LTV Breach &amp; Margin Call Notice Protocol
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Under the RBI Master Direction on Gold Loans for NBFCs, the Loan-to-Value (LTV) ratio cannot exceed 75% of the value of pledged 22-carat gold ornaments—computed using the 30-day average closing price published by the India Bullion and Jewellers Association (IBJA) or a SEBI-regulated commodity exchange. Importantly, this 75% ceiling applies not only at origination, but continuously throughout the tenure of bullet-repayment and regular-interest gold loans.
                </p>
                <p>
                  When bullion prices correct sharply or unserviced quarterly interest pushes the total receivable (principal + accrued interest) above 75% of current collateral value, the NBFC&apos;s treasury and collections desk must trigger a <strong>Margin Call Notice</strong> before initiating auction proceedings. A compliant Margin Call Notice must:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Quantify the Exact LTV Breach:</strong> State the gross weight, net 22-carat equivalent weight, current 30-day IBJA rate per gram, total outstanding principal + interest, and the resulting LTV percentage (e.g., 81.4%).
                  </li>
                  <li>
                    <strong>Offer Dual Cure Options:</strong> Grant the borrower a fixed 7-to-15 day window to either remit the exact cash shortfall (e.g., &#8377;38,500) to restore LTV to 75%, or pledge additional hallmarked gold ornaments at the branch.
                  </li>
                  <li>
                    <strong>Keep Margin Call Separate from s.176 Notice:</strong> Do not conflate an early-warning LTV margin call with the final Section 176 auction date notice unless the cure period has expired without payment.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 6: Section 176 & Vernacular Newspaper Notice */}
            <section
              id="heading-notice-vernacular"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Section 176 Notice &amp; Vernacular Newspaper Publication Rules
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Section 176 of the Indian Contract Act, 1872 grants a pawnee two distinct, concurrent rights upon borrower default: (1) to sue the borrower upon the debt and retain the pledged gold as collateral security, OR (2) to sell the pledged gold upon giving the pawnor <em>&ldquo;reasonable notice of the sale.&rdquo;</em> Judicial precedent across India—including <em>Prabhat Bank Ltd. v. Babu Ram</em>—establishes that this notice requirement is mandatory and cannot be waived by any fine-print term in the loan agreement.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm text-amber-900">
                  <strong>Critical Drafting Rule:</strong> A generic{" "}
                  <Link
                    href="/templates/bank-loan-recall-cum-guarantee-invocation-notice"
                    className="underline font-bold hover:text-[#DC2626]"
                  >
                    Loan Recall Notice
                  </Link>{" "}
                  demanding payment within 7 days is NOT a valid Section 176 pre-auction notice unless it expressly warns that failure to redeem by a specified cutoff date will result in public auction of the itemized ornaments at a stated date, time, and taluka venue.
                </div>
                <p>
                  To make pre-auction service 100% audit-proof, NBFCs must execute a two-tier notice protocol:
                </p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    <strong>Individual Bilingual Registered Notice (14–21 Clear Days Prior):</strong> Dispatch the Section 176 notice in both English and the borrower&apos;s local vernacular language (matching the branch state) via Registered Post Acknowledgment Due (RPAD) / India Post Speed Post to the KYC address, backed simultaneously by{" "}
                    <Link
                      href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                      className="text-[#DC2626] font-semibold hover:underline"
                    >
                      tri-channel Email + WhatsApp + Speed Post dispatch
                    </Link>
                    .
                  </li>
                  <li>
                    <strong>Two-Newspaper Public Advertisement (14 Clear Days Prior):</strong> Publish the auction schedule (grouped by loan account numbers, branch name, gross weight, date, time, and taluka venue) in at least two newspapers circulating in the branch locality—one in the local vernacular daily and one in a national/English daily.
                  </li>
                </ol>
              </div>
            </section>

            {/* Section 7: Taluka Venue, Reserve Price & Related-Party Ban */}
            <section
              id="heading-taluka-reserve-price"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Taluka-Level Auction Venue, Reserve Price &amp; Related-Party Ban
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  One of the primary triggers for RBI enforcement actions is holding first-round auctions at regional or metro headquarters—sometimes 200–500 km away from the rural or semi-urban pledging branch. Under RBI&apos;s Fair Practices Code for Gold Loans, the first auction <strong>must</strong> be conducted in the same town or taluka where the pledging branch is situated.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-1">
                      Independent Auctioneer
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700">
                      Engage a Board-approved, independent public auctioneer. Branch managers or internal recovery staff must never act as sole auctioneers without independent oversight.
                    </p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-1">
                      &ge;85% IBJA Reserve Price
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700">
                      Fix the reserve price at no less than 85% (or Board-approved 85%–90%) of the prevailing 30-day average 22-carat gold rate published by IBJA, adjusted for verified stone/impurity deductions.
                    </p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-1">
                      Zero Related-Party Bids
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700">
                      Strictly bar NBFC directors, employees, group companies, and their relatives from bidding. Collect PAN/Aadhaar KYC and GST/bullion registration for every participating bidder.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: Worked Financial & Auction Settlement Ledger */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Worked Auction Ledger: Surplus Refund vs. Deficit Recovery
                </h2>
              </div>
              <p className="text-sm text-slate-600 mb-5">
                Under RBI&apos;s Penal Charges Circular (effective 2024), NBFCs cannot capitalize penal interest into principal. Consider a &#8377;4,50,000 gold loan secured by 85g net 22-carat gold (IBJA 30-day rate &#8377;7,100/g = &#8377;6,03,500 value) after 14 months of default:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Scenario A: Surplus */}
                <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-5">
                  <span className="inline-block px-2.5 py-0.5 rounded bg-emerald-700 text-white text-[11px] font-bold uppercase mb-2">
                    Outcome A: Auction Surplus (Refund Mandatory)
                  </span>
                  <div className="space-y-2 text-xs sm:text-sm text-slate-800">
                    <div className="flex justify-between border-b border-emerald-200/70 pb-1">
                      <span>Sanctioned Principal</span>
                      <span className="font-bold">&#8377;4,50,000</span>
                    </div>
                    <div className="flex justify-between border-b border-emerald-200/70 pb-1">
                      <span>Contracted Interest (14 mos @ 14% p.a.)</span>
                      <span className="font-bold">&#8377;73,500</span>
                    </div>
                    <div className="flex justify-between border-b border-emerald-200/70 pb-1">
                      <span>Uncompounded Penal Charges + Notice/Auction Cost</span>
                      <span className="font-bold">&#8377;14,500</span>
                    </div>
                    <div className="flex justify-between border-b border-emerald-200 pb-1 font-bold text-slate-900">
                      <span>Total Recoverable Dues</span>
                      <span>&#8377;5,38,000</span>
                    </div>
                    <div className="flex justify-between border-b border-emerald-200/70 pb-1">
                      <span>Gross Auction Realization (92% IBJA)</span>
                      <span className="font-bold text-emerald-800">&#8377;5,55,220</span>
                    </div>
                    <div className="flex justify-between pt-1 font-extrabold text-emerald-900 text-sm sm:text-base">
                      <span>Net Surplus Payable to Borrower (15 Days)</span>
                      <span>&#8377;17,220</span>
                    </div>
                  </div>
                </div>

                {/* Scenario B: Deficit */}
                <div className="bg-slate-900 text-white border border-slate-800 rounded-xl p-5">
                  <span className="inline-block px-2.5 py-0.5 rounded bg-[#DC2626] text-white text-[11px] font-bold uppercase mb-2">
                    Outcome B: Auction Deficit (Recoverable Shortfall)
                  </span>
                  <div className="space-y-2 text-xs sm:text-sm text-slate-200">
                    <div className="flex justify-between border-b border-slate-700 pb-1">
                      <span>Total Recoverable Dues (Principal + Interest + Cost)</span>
                      <span className="font-bold">&#8377;5,38,000</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-700 pb-1">
                      <span>Gross Auction Realization (Bullion Drop @ 85% Reserve)</span>
                      <span className="font-bold text-amber-400">&#8377;4,84,500</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-700 pb-1 font-extrabold text-red-400 text-sm sm:text-base">
                      <span>Net Deficit Shortfall (s.176 Balance)</span>
                      <span>&#8377;53,500</span>
                    </div>
                    <p className="text-xs text-slate-300 pt-2 leading-relaxed">
                      Under Contract Act s.176, the borrower remains personally liable for &#8377;53,500. Issue a 15-day Post-Auction Deficit Demand Notice, then enforce via{" "}
                      <Link
                        href="/online-dispute-resolution-india"
                        className="text-red-400 underline hover:text-white"
                      >
                        Online Dispute Resolution (ODR)
                      </Link>{" "}
                      or{" "}
                      <Link
                        href="/arbitration-personal-loan-defaults-bank-recovery-mechanism"
                        className="text-red-400 underline hover:text-white"
                      >
                        Institutional Arbitration
                      </Link>{" "}
                      within the 3-year window verified via our{" "}
                      <Link
                        href="/tools/limitation-period-calculator"
                        className="text-red-400 underline hover:text-white"
                      >
                        Limitation Period Calculator
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9: Supreme Court & Statutory Precedents */}
            <section
              id="heading-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Binding Supreme Court &amp; RBI Precedents on Gold Auctions
                </h2>
              </div>

              <div className="space-y-4">
                {COURT_PRECEDENTS.map((item) => (
                  <div
                    key={item.parties}
                    className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-slate-50 relative overflow-hidden pl-6"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]" />
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626]">
                      {item.citation}
                    </p>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                      {item.title} &mdash; <span className="text-slate-700">{item.parties}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-2">
                      {item.holding}
                    </p>
                    <p className="text-xs font-semibold text-slate-900 bg-white border border-slate-200 rounded-lg px-3 py-2 mt-3">
                      NBFC Takeaway: {item.takeaway}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 10: BSA 2023 s.63 Pre-Auction Audit Checklist */}
            <section
              id="heading-bsa-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  BSA 2023 Section 63 &amp; Pre-Auction Audit Dossier Checklist
                </h2>
              </div>
              <p className="text-sm text-slate-600 mb-5">
                Preserve these 6 mandatory records for every auctioned gold loan account for at least 8 years to defeat consumer-court restoration claims and clear RBI inspections:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  {
                    num: "01",
                    title: "Signed Pawn Ticket & Appraiser Assay Certificate",
                    desc: "Gross weight, stone deduction, net 22-carat weight, and borrower-signed disbursement acknowledgment.",
                  },
                  {
                    num: "02",
                    title: "LTV Breach Margin Call & s.176 RPAD Proof",
                    desc: "India Post Speed Post receipts, delivery tracking, or intact unopened returned envelopes ('Refused' / 'Unclaimed').",
                  },
                  {
                    num: "03",
                    title: "BSA 2023 s.63 Electronic Dispatch Certificate",
                    desc: "Signed Section 63 certificate covering WhatsApp API delivery timestamps, SMS logs, and SMTP email headers.",
                  },
                  {
                    num: "04",
                    title: "Two-Newspaper Tearsheets (Vernacular + English)",
                    desc: "Full-page dated newspaper clippings showing the 14-day public auction notice in the branch taluka edition.",
                  },
                  {
                    num: "05",
                    title: "Taluka Auction Minutes, Video & Bidder KYC",
                    desc: "IBJA reserve price sheet, continuous auction CCTV, independent auctioneer sign-off, and non-related-party bidder PAN/Aadhaar.",
                  },
                  {
                    num: "06",
                    title: "Post-Auction Settlement & NEFT Surplus / Deficit Notice",
                    desc: "Itemized statement showing uncompounded RBI penal charges, NEFT UTR for surplus refund, or s.176 deficit demand.",
                  },
                ].map((c) => (
                  <div
                    key={c.num}
                    className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50"
                  >
                    <span className="px-2 py-1 rounded bg-slate-900 text-white text-xs font-bold shrink-0">
                      {c.num}
                    </span>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900">{c.title}</p>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Dual-Track B2B CTA */}
            <section className="scroll-mt-28">
              <GoldLoanAuctionCTA />
            </section>

            {/* Section 11: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  FAQs: Gold Loan Default &amp; Auction Compliance for NBFCs
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.question}
                    className="group border border-slate-200 rounded-xl bg-slate-50 open:bg-white transition-colors"
                  >
                    <summary className="cursor-pointer list-none p-4 font-bold text-xs sm:text-sm text-slate-900 flex items-center justify-between gap-3">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] text-base font-bold shrink-0 group-open:rotate-45 transition-transform">
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

            {/* Section 12: Statutory Sources & Cross-Links */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  12
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Primary Statutes, RBI Master Directions &amp; Related Tools
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Official Statutory &amp; RBI References
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm">
                    {PRIMARY_SOURCES.map((src) => (
                      <li key={src.url}>
                        <a
                          href={src.url}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="text-slate-800 hover:text-[#DC2626] underline decoration-slate-300 font-medium"
                        >
                          {src.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Connected NBFC &amp; Bank Recovery Tools
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm">
                    <li>
                      <Link
                        href="/industries/nbfc-fintech-loan-recovery"
                        className="text-[#DC2626] font-semibold hover:underline"
                      >
                        NBFC, Fintech, HFC &amp; MFI Loan Recovery Hub (IND-02)
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tools/sarfaesi-drt-bank-recovery-forum-calculator"
                        className="text-slate-800 hover:text-[#DC2626] font-medium hover:underline"
                      >
                        SARFAESI, DRT Fee &amp; NBFC Recovery Forum Calculator
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tools/limitation-period-calculator"
                        className="text-slate-800 hover:text-[#DC2626] font-medium hover:underline"
                      >
                        3-Year Loan Default Limitation Period Calculator
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/legal-recovery-unsecured-loans-guide-banks-nbfcs"
                        className="text-slate-800 hover:text-[#DC2626] font-medium hover:underline"
                      >
                        Legal Recovery of Unsecured &amp; Deficit Loans for Banks &amp; NBFCs
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
