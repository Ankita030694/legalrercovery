import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import FmcgHubTableOfContents from "./FmcgHubTableOfContents";
import FmcgHubScenarioTabs from "./FmcgHubScenarioTabs";
import FmcgHubCTA from "./FmcgHubCTA";

export const revalidate = 86400;

const PAGE_URL = "/industries/fmcg-distributors-super-stockist-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const PAGE_TITLE = "FMCG, Consumer Durables, D2C & Super-Stockist Debt Recovery";
const PAGE_DESCRIPTION =
  "Recover overdue dealer ledgers, challenge Quick-Commerce & Modern-Trade dark-store deductions, and enforce s.20/s.138 security cheques across India.";
const H1_TEXT =
  "Channel Credit, Quick-Commerce Reconciliation & C&F Recovery for FMCG, Consumer Durables & D2C Brands";

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

interface IndustrySpoke {
  id: string;
  archetype: "G1" | "L1" | "T1" | "P1";
  archetypeLabel: string;
  track: "channel" | "platforms" | "tax-tools";
  title: string;
  url: string;
  statute: string;
  summary: string;
}

const IND_10_SPOKES: IndustrySpoke[] = [
  {
    id: "B2B-127",
    archetype: "L1",
    archetypeLabel: "L1 Statute Deep-Dive",
    track: "channel",
    title: "Filling & Prosecuting Blank Signed Dealer Security Cheques (s.20 & s.138)",
    url: "/blank-signed-security-cheque-section-20-138-ni-act-distributor-recovery",
    statute: "NI Act s.20, s.138 & Bir Singh / Sripati Singh",
    summary:
      "Authoritative SOP for quantifying running dealer ledgers and serving 7-day pre-deposit notices before presenting blank security cheques.",
  },
  {
    id: "B2B-129",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "channel",
    title: "Electronics, Mobile & Appliance Dealer Floor-Credit Default Recovery",
    url: "/consumer-durables-electronics-mobile-dealer-floor-credit-recovery",
    statute: "CPC Order XXXVIII Rule 5, Order XXXVII & NI s.138",
    summary:
      "Track unpaid IMEI/serial inventory, rebut oral price-drop support excuses, and obtain emergency stock attachment before liquidation.",
  },
  {
    id: "B2B-130",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "channel",
    title: "Field Salesman Cash & Personal UPI Misappropriation Recovery (BNS s.316)",
    url: "/field-salesman-collection-agent-cash-misappropriation-recovery-bns-316",
    statute: "BNS s.316(4) (7 Yrs) & Fidelity Guarantee Cover",
    summary:
      "Convert dismissed police complaints into BNS s.316(4) servant breach-of-trust FIRs backed by signed retailer payment confirmations.",
  },
  {
    id: "B2B-126",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "channel",
    title: "C&F Agent & Super-Stockist Security Deposit & F&F Claim Recovery",
    url: "/cnf-agent-super-stockist-security-deposit-fnf-recovery-from-brand",
    statute: "Contract Act s.73/s.222 & Commercial Courts s.2(1)(c)(ix)",
    summary:
      "Compel FMCG and beverage brands to refund ₹25L–₹2Cr security deposits and clear ASM-approved secondary trade-scheme claims.",
  },
  {
    id: "B2B-125",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "platforms",
    title: "Quick-Commerce & Modern-Trade Arbitrary Dark-Store Deductions Recovery",
    url: "/quick-commerce-modern-trade-arbitrary-deductions-vendor-payment-recovery",
    statute: "MSMED Act s.2(b) (15-Day Cutoff) & s.43B(h)",
    summary:
      "Defeat retroactive short-GRN, fill-rate, and RTV chargebacks raised past the 15-day statutory objection window on sealed PODs.",
  },
  {
    id: "B2B-131",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "platforms",
    title: "E-Commerce Marketplace Frozen ₹10L–₹2Cr Seller Reserve Recovery",
    url: "/ecommerce-marketplace-unfair-seller-payout-reserve-hold-recovery",
    statute: "Arbitration s.21, Contract Act s.74 & BSA s.63",
    summary:
      "Challenge indefinite 180-day seller payout freezes and algorithmic counterfeit flags using packing-station CCTV and institutional arbitration.",
  },
  {
    id: "B2B-132",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "platforms",
    title: "Private-Label Cosmetics, Food & FMCG Contract Manufacturer Recovery",
    url: "/horeca-supermarket-private-label-manufacturer-payment-recovery",
    statute: "Sale of Goods Act s.44/s.55 & MSMED s.15–18",
    summary:
      "Recover stuck packaging, MOQ batch costs, and personal founder guarantees when D2C brands abandon custom production runs.",
  },
  {
    id: "B2B-128",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "tax-tools",
    title: "Blocked GST ITC & Vendor GSTR-3B Non-Filing Tax Indemnity Recovery",
    url: "/gst-input-tax-credit-blocked-supplier-non-filing-gstr-3b-recovery",
    statute: "CGST Act s.16(2)(c) & s.76 Tax Deposit Mandate",
    summary:
      "Serve s.76 anti-evasion tax-indemnity demands on suppliers whose GSTR-3B non-filing triggered DRC-01 ITC reversals and interest.",
  },
  {
    id: "B2B-133",
    archetype: "T1",
    archetypeLabel: "T1 Interactive Tool",
    track: "tax-tools",
    title: "Blocked GST ITC, Section 50 Interest & DRC-01 Indemnity Calculator",
    url: "/tools/blocked-gst-itc-vendor-default-interest-calculator",
    statute: "CGST s.16(2)(c), s.50(3) (18% p.a.) & s.74A",
    summary:
      "Compute exact tax principal, 18% Section 50 interest, and DRC-01 penalty exposure recoverable from non-filing vendors.",
  },
  {
    id: "B2B-134",
    archetype: "P1",
    archetypeLabel: "P1 Notice Template",
    track: "tax-tools",
    title: "7-Day Ledger Crystallization & Security-Cheque Presentation Notice",
    url: "/templates/security-cheque-presentation-intimation-cum-ledger-notice",
    statute: "NI Act s.20 & s.138 Pre-Bounce Protocol",
    summary:
      "Advocate-vetted pre-deposit notice quantifying exact dealer arrears before filling and banking undated security cheques.",
  },
];

const SPOKE_TRACKS = [
  {
    key: "channel" as const,
    heading: "Track A: GT Distributors, Security Cheques, Electronics Floor Credit & C&F Exits",
    badgeClass: "bg-red-50 text-[#DC2626] border-red-200",
  },
  {
    key: "platforms" as const,
    heading: "Track B: Quick-Commerce Dark Stores, Modern Trade, Marketplaces & Private-Label OEMs",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    key: "tax-tools" as const,
    heading: "Track C: Vendor GST ITC Indemnity, Interactive Calculator & s.20 Notice Template",
    badgeClass: "bg-amber-50 text-amber-800 border-amber-200",
  },
];

const BINDING_MANDATES = [
  {
    title: "Payee Authority to Fill Signed Blank Security Cheques Under Section 20 NI Act",
    parties: "Bir Singh v. Mukesh Kumar",
    citation: "(2019) 4 SCC 197 — Supreme Court of India",
    holding:
      "When a drawer voluntarily hands over a signed blank cheque towards an underlying commercial or credit relationship, Section 20 of the Negotiable Instruments Act authorizes the payee to fill in the crystallized amount and date. The statutory presumption under Section 139 attaches to the filled cheque unless the drawer adduces cogent evidence disproving debt existence.",
    impact: "Validates dealer security cheques collected at onboarding when backed by quantified ledgers.",
  },
  {
    title: "Security Cheques Become Enforceable Once Debt Crystallizes on Presentation",
    parties: "Sripati Singh (Through Son Gaurav Singh) v. State of Jharkhand & Anr.",
    citation: "2021 SCC OnLine SC 1002 — Supreme Court of India",
    holding:
      "A cheque issued as security cannot be dismissed as a mere piece of paper. Where a debt or liability crystallizes and remains unpaid on the date the cheque is presented, dishonour triggers full Section 138 criminal prosecution and Section 143A interim compensation eligibility.",
    impact: "Defeats 'mere security cheque' quashing petitions when preceded by a 7-day crystallization notice.",
  },
  {
    title: "15-Day Statutory Objection Cutoff Against Delayed Dark-Store & Retail Deductions",
    parties: "MSMED Act, 2006 — Section 2(b) 'Appointed Day' & Income-Tax Act s.43B(h)",
    citation: "Statutory Mandate — Ministry of MSME & Finance Act Tax Disallowance",
    holding:
      "Under Section 2(b), where a buyer makes no written objection regarding goods or services within 15 days of delivery, deemed acceptance operates automatically. Unpaid Micro and Small enterprise invoices past 15/45 days accrue 3x RBI Bank Rate monthly compound interest and trigger 100% expense disallowance under Section 43B(h).",
    impact: "Neutralizes short-GRN and RTV deductions raised 30–60 days after sealed dark-store PODs.",
  },
  {
    title: "Mandatory s.12A Mediation vs Urgent Stock-Diversion Attachment (O.38 R.5)",
    parties: "Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd. & CPC Order XXXVIII Rule 5",
    citation: "(2022) 10 SCC 1 — Supreme Court of India & Commercial Courts Act s.12A",
    holding:
      "Commercial suits >= ₹3 Lakh require mandatory Section 12A Pre-Institution Mediation unless the plaintiff establishes a genuine need for urgent interim relief. Where an electronics or FMCG dealer actively liquidates display stock or transfers showroom assets, Order XXXVIII Rule 5 Attachment Before Judgment bypasses delay.",
    impact: "Pairs fast Commercial Court asset freezes with structured s.12A mediated settlements.",
  },
];

const FAQS = [
  {
    question: "Can an FMCG company legally fill a dealer's blank signed security cheque?",
    answer:
      "Yes. Under Section 20 of the Negotiable Instruments Act, 1881 and the Supreme Court rulings in Bir Singh v. Mukesh Kumar (2019) and Sripati Singh (2021), a creditor may fill the exact unpaid ledger balance on a signed security cheque. Serving a 7-day Ledger Crystallization & Presentation Intimation Notice beforehand prevents 'misuse of security cheque' defenses.",
  },
  {
    question: "How can D2C brands challenge Quick-Commerce short-GRN and fill-rate deductions?",
    answer:
      "Compile transporter-stamped dark-store PODs, dispatch weight slips, and portal timelines. Under MSMED Act Section 2(b), if the buyer raised no written quality or quantity objection within 15 days of delivery, deemed acceptance applies. Udyam Micro/Small brands can enforce 3x RBI compound interest and Section 43B(h) tax disallowance pressure.",
  },
  {
    question: "What can a C&F agent or super-stockist do when a brand withholds its security deposit?",
    answer:
      "Under Contract Act Section 222 and Section 73, principals must indemnify agents for brand-authorized secondary trade schemes and refund exit deposits after stock handover. Disputes >= ₹3 Lakh under distribution agreements qualify as commercial disputes under Section 2(1)(c)(ix) of the Commercial Courts Act, 2015.",
  },
  {
    question: "How do companies recover blocked GST ITC when a vendor fails to file GSTR-3B?",
    answer:
      "When GSTR-3B non-filing causes ITC reversal under CGST Section 16(2)(c) and DRC-01 demands, buyers can serve an advocate tax-indemnity notice highlighting CGST Section 76 (mandatory remittance of tax collected) alongside Section 50 interest to compel immediate GSTR-3B compliance or cash indemnity.",
  },
  {
    question: "Why do police stations refuse salesman cash-embezzlement complaints, and how do we fix it?",
    answer:
      "Generic complaints are often brushed off as 'civil accounting disputes.' Framing the demand and complaint explicitly under Bharatiya Nyaya Sanhita (BNS) Section 316(4) (criminal breach of trust by a clerk or servant, up to 7 years imprisonment) backed by signed retailer cash/UPI confirmations supports FIR registration and Fidelity Guarantee claims.",
  },
  {
    question: "What if an electronics dealer claims oral 'price-drop support' and liquidates showroom stock?",
    answer:
      "Serve an advocate notice enforcing written-credit-note-only contract terms and rejecting unauthorized oral commitments by exited territory managers. If stock diversion is underway, file an urgent commercial suit seeking Attachment Before Judgment under CPC Order XXXVIII Rule 5 alongside Section 138 cheque proceedings.",
  },
  {
    question: "Can an FMCG credit controller test one overdue dealer ledger before bulk CSV onboarding?",
    answer:
      "Yes. Regional credit teams can submit 1 live overdue account at ₹999 (advocate-drafted multi-invoice demand or 7-day s.20 pre-deposit notice) via Email, WhatsApp, and Speed Post RPAD before scaling to 10–10,000+ monthly CSV dispatches.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "Negotiable Instruments Act, 1881 (Sections 20, 138, 141 & 143A) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title: "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 2(b), 15–19) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Central Goods and Services Tax (CGST) Act, 2017 (Sections 16(2)(c), 34, 50 & 76) — CBIC / India Code",
    url: "https://www.cbic.gov.in/",
  },
  {
    title: "Commercial Courts Act, 2015 (Section 2(1)(c)(ix) Distribution Agreements & Section 12A) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title: "Bharatiya Nyaya Sanhita (BNS), 2023 (Section 316(4) Criminal Breach of Trust by Servant) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/20062",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 Electronic Records & Section 28 Account Books) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/20063",
  },
  {
    title: "Code of Civil Procedure, 1908 (Order XXXVII Summary Suits & Order XXXVIII Rule 5 Attachment) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository. Advocate attribution (Anuj Anand Malik, Advocate & Founder, AMA Legal Solutions) emitted inline.

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: H1_TEXT,
  description: PAGE_DESCRIPTION,
  serviceType: "FMCG, Consumer Durables, D2C & Super-Stockist Legal Debt Recovery",
  provider: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/lrlogo.png`,
    },
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  audience: {
    "@type": "Audience",
    audienceType:
      "FMCG & Consumer Durables CFOs, Regional Credit Controllers, Super-Stockists, C&F Agents & D2C Brand Finance Heads",
  },
  offers: {
    "@type": "Offer",
    price: "999",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/user/new-recovery`,
  },
  mainEntityOfPage: CANONICAL_URL,
};

const ITEM_LIST_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "IND-10 FMCG, Consumer Durables, D2C & Super-Stockist Recovery Spokes, Tools & Templates",
  numberOfItems: IND_10_SPOKES.length,
  itemListElement: IND_10_SPOKES.map((spoke, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: spoke.title,
    url: `${SITE_URL}${spoke.url}`,
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
      name: "Services",
      item: `${SITE_URL}/services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "FMCG & Super-Stockist Recovery",
      item: CANONICAL_URL,
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

export default function FmcgSuperStockistRecoveryHubPage() {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "FMCG & Super-Stockist Recovery", href: PAGE_URL },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ITEM_LIST_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Gradient Hero */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>IND-10 FMCG &amp; Channel Pillar Hub</span>
              <span className="text-red-500">&bull;</span>
              <span>NI Act s.20/s.138 &bull; MSMED s.2(b) &bull; CGST s.76</span>
              <span className="text-red-500">&bull;</span>
              <span>FMCG, Durables, D2C &amp; C&amp;F Agents</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {H1_TEXT}
            </h1>

            {/* 40-60 Word Executive Creditor Answer Box */}
            <div
              aria-label="Executive Creditor Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer (FMCG CFOs, Stockists &amp; D2C Finance)
              </span>
              <p>
                FMCG brands, consumer durables distributors, C&amp;F agents, and D2C suppliers recover overdue channel ledgers and platform holds by combining 7-day NI Act s.20 security-cheque crystallization notices, MSMED Act s.2(b) 15-day deemed acceptance against Quick-Commerce deductions, CGST s.76 GST indemnity demands, and BNS s.316(4) cash-embezzlement complaints—dispatched via Email, WhatsApp, and Speed Post RPAD.
              </p>
            </div>

            {/* 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">
                  &rupee;25K&ndash;&rupee;2Cr+
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  Kirana Ledgers to C&amp;F &amp; Reserve Holds
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">
                  15-Day Cutoff
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  MSMED s.2(b) Deemed Acceptance Shield
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">
                  20% s.143A
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  Interim Cheque Relief Post s.20 Notice
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">
                  &rupee;999 &rarr; CSV
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  1 Live Dealer Test to 10,000+ Batch
                </p>
              </div>
            </div>

            <p className="mt-4 text-[11px] sm:text-xs text-slate-400">
              Channel Recovery Architecture Reviewed by{" "}
              <Link href="/authors/anuj-anand-malik" className="text-slate-200 underline hover:text-white font-semibold">
                Anuj Anand Malik
              </Link>
              , Advocate &amp; Founder, AMA Legal Solutions &bull; Updated November 2026
            </p>
          </div>
        </section>

        {/* Main 2-Column Content Container */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mb-2">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Left Sticky TOC */}
            <FmcgHubTableOfContents />

            {/* Right Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: Overview */}
              <section
                id="heading-overview"
                aria-labelledby="heading-overview-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <h2
                      id="heading-overview-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Closing Multi-Channel Credit Leaks Across GT, MT &amp; Quick-Commerce
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Why FMCG Manufacturers, Electronics Distributors, C&amp;F Agents &amp; D2C Brands Need Verticalized Recovery Infrastructure
                    </p>
                  </div>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    India&apos;s fast-moving consumer goods, consumer durables, and D2C ecosystem runs on razor-thin distribution margins—often 1.5% to 4% for regional distributors and super-stockists—where a single uncollected ₹12 Lakh dealer default or an unexplained ₹18 Lakh dark-store deduction wipes out an entire quarter&apos;s net profit. While general{" "}
                    <Link href="/distributor-dealer-dues-recovery" className="text-[#DC2626] font-semibold underline">
                      distributor and dealer dues recovery
                    </Link>{" "}
                    guides address basic overdue invoices, regional credit controllers face four distinct multi-channel leaks that generic demand letters fail to plug.
                  </p>
                  <p>
                    First, in General Trade (GT), companies routinely collect two or three signed blank security cheques at dealer onboarding—yet 60% of finance teams impair their Section 138 prosecutions by banking round numbers without serving a prior 7-day ledger crystallization notice under Section 20 of the Negotiable Instruments Act. Second, D2C food, personal care, and home brands supplying Quick-Commerce and Modern-Trade chains lose 18%–35% of gross billing to belated &ldquo;short-GRN,&rdquo; fill-rate, and RTV damage chargebacks raised weeks after sealed Proof of Delivery (POD).
                  </p>
                  <p>
                    Third, Carrying &amp; Forwarding (C&amp;F) agents and super-stockists routinely wait 18–36 months post-termination for brands to release ₹25 Lakh–₹2 Crore security deposits and ASM-approved secondary trade scheme claims. Fourth, across every supply chain, buyers face DRC-01 tax demands when vendors pocket 18% GST without filing GSTR-3B, while wholesale distributors absorb field-collection cash and personal UPI embezzlement. This IND-10 Pillar Hub unifies all 10 specialized playbooks, tax-indemnity calculators, and pre-bounce cheque templates—allowing finance teams to test one live case at ₹999 or scale to 10–10,000+ CSV notices in 24 hours.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      Pre-Bounce Cheque Shield
                    </span>
                    <strong className="text-sm sm:text-base text-slate-900 block">
                      NI Act s.20 + Bir Singh
                    </strong>
                    <p className="text-xs text-slate-600 mt-1">
                      Crystallize exact running-ledger arrears via 7-day intimation before banking signed security cheques.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      Dark-Store &amp; MT Rebuttal
                    </span>
                    <strong className="text-sm sm:text-base text-slate-900 block">
                      MSMED s.2(b) 15-Day Rule
                    </strong>
                    <p className="text-xs text-slate-600 mt-1">
                      Lock deemed acceptance when retail platforms raise short-GRN deductions past 15 days from POD.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      Tax &amp; Criminal Leverage
                    </span>
                    <strong className="text-sm sm:text-base text-slate-900 block">
                      CGST s.76 &amp; BNS s.316(4)
                    </strong>
                    <p className="text-xs text-slate-600 mt-1">
                      Compel GSTR-3B filings from defaulting suppliers and prosecute salesman cash/UPI diversion.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Multi-Channel Escalation Matrix */}
              <section
                id="heading-escalation-matrix"
                aria-labelledby="heading-escalation-matrix-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <h2
                      id="heading-escalation-matrix-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Channel Escalation Matrix: Kirana Ledgers to Dark-Store Claims
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Mapping Ticket Size, Trigger Event, Statutory Lever, Notice Window &amp; Adjudication Forum Across IND-10 Verticals
                    </p>
                  </div>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[740px]">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold">
                        <th className="p-3.5 border-b border-slate-800">Channel / Dispute Track</th>
                        <th className="p-3.5 border-b border-slate-800">Ticket Band</th>
                        <th className="p-3.5 border-b border-slate-800">Primary Statutory Lever</th>
                        <th className="p-3.5 border-b border-slate-800">Notice &amp; Cure Clock</th>
                        <th className="p-3.5 border-b border-slate-800">Target Forum / Remedy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          GT Wholesalers &amp; Undated Security Cheques
                        </td>
                        <td className="p-3.5">&rupee;25K&ndash;&rupee;50L</td>
                        <td className="p-3.5">NI Act s.20, s.138, s.141 &amp; s.143A</td>
                        <td className="p-3.5 font-semibold text-[#DC2626]">7d Pre-Deposit + 30d/15d</td>
                        <td className="p-3.5">Magistrate Court (20% s.143A) + Order 37</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          Quick-Commerce &amp; Modern-Trade Short-GRNs
                        </td>
                        <td className="p-3.5">&rupee;1L&ndash;&rupee;1Cr+</td>
                        <td className="p-3.5">MSMED s.2(b), s.15&ndash;18 &amp; IT Act s.43B(h)</td>
                        <td className="p-3.5 font-semibold text-emerald-700">15d Objection Cutoff; 15d Notice</td>
                        <td className="p-3.5">MSEFC Samadhaan (3x Interest / 75% Deposit)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          C&amp;F Agent &amp; Super-Stockist Exit Deposits
                        </td>
                        <td className="p-3.5">&rupee;10L&ndash;&rupee;3Cr</td>
                        <td className="p-3.5">Contract Act s.73/s.222 &amp; Comm. Courts s.2(1)(c)(ix)</td>
                        <td className="p-3.5">15d F&amp;F Settlement Demand</td>
                        <td className="p-3.5">Commercial Court s.12A / Order XIII-A</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          Consumer Electronics &amp; Mobile Dealers
                        </td>
                        <td className="p-3.5">&rupee;1L&ndash;&rupee;1Cr</td>
                        <td className="p-3.5">CPC Order XXXVIII Rule 5 &amp; Order XXXVII</td>
                        <td className="p-3.5 font-semibold text-amber-700">7d Urgent Demand (Bypass s.12A)</td>
                        <td className="p-3.5">Immediate Stock/Bank Attachment + s.138</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          Marketplace Seller Payout Reserve Freezes
                        </td>
                        <td className="p-3.5">&rupee;10L&ndash;&rupee;2Cr</td>
                        <td className="p-3.5">Arbitration Act s.21, Contract Act s.74 &amp; BSA s.63</td>
                        <td className="p-3.5">15&ndash;30d Arbitration Invocation</td>
                        <td className="p-3.5">Institutional Arbitration (Bengaluru / Delhi)</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          Blocked GST ITC (Vendor GSTR-3B Non-Filing)
                        </td>
                        <td className="p-3.5">&rupee;1L&ndash;&rupee;2Cr+</td>
                        <td className="p-3.5">CGST Act s.16(2)(c), s.50(3) &amp; s.76</td>
                        <td className="p-3.5 font-semibold text-[#DC2626]">15d GSTR-3B / Indemnity Notice</td>
                        <td className="p-3.5">Commercial Suit + s.76 Anti-Evasion Intimation</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          Field Salesman Cash / Personal UPI Fraud
                        </td>
                        <td className="p-3.5">&rupee;50K&ndash;&rupee;40L</td>
                        <td className="p-3.5">BNS s.316(4) (IPC s.408) &amp; Fidelity Cover</td>
                        <td className="p-3.5">7d Restitution &amp; Police FIR Notice</td>
                        <td className="p-3.5">EOW / Police FIR + Civil Salary/Asset Recovery</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          Private-Label Cosmetics &amp; Food OEM Batches
                        </td>
                        <td className="p-3.5">&rupee;2L&ndash;&rupee;80L</td>
                        <td className="p-3.5">Sale of Goods s.44/s.55 &amp; MSMED s.15&ndash;18</td>
                        <td className="p-3.5">15d Batch Lifting &amp; Warehousing Demand</td>
                        <td className="p-3.5">MSEFC ODR / Founder Personal Guarantee Suit</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3: SVG Workflow Architecture + Mobile Stacked Cards */}
              <section
                id="heading-workflow-architecture"
                aria-labelledby="heading-workflow-architecture-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <h2
                      id="heading-workflow-architecture-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Invoice-to-Collection Architecture for FMCG &amp; D2C Finance Teams
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      5-Stage Statutory Pipeline Combining Multi-Invoice Ingestion, Pre-Bounce Crystallization, Tri-Channel Service &amp; Execution
                    </p>
                  </div>
                </div>

                {/* Desktop Hand-Authored SVG Pipeline */}
                <div className="hidden md:block rounded-xl border border-slate-200 bg-slate-900 p-4 overflow-x-auto">
                  <svg
                    width={920}
                    height={310}
                    viewBox="0 0 920 310"
                    role="img"
                    aria-label="5-stage FMCG, consumer durables, D2C and super-stockist legal recovery architecture diagram"
                    className="w-full h-auto"
                  >
                    <rect x="0" y="0" width="920" height="310" rx="12" fill="#0F172A" />
                    <text x="24" y="34" fill="#F87171" fontSize="11" fontWeight="700" letterSpacing="1.2">
                      LEGALRECOVERY.IN &bull; IND-10 CHANNEL &amp; TRADE CREDIT PIPELINE
                    </text>

                    {/* Stage 1 */}
                    <rect x="24" y="58" width="156" height="196" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="48" cy="84" r="13" fill="#DC2626" />
                    <text x="48" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">01</text>
                    <text x="70" y="88" fill="#F8FAFC" fontSize="12" fontWeight="700">Ledger Audit</text>
                    <text x="36" y="116" fill="#CBD5E1" fontSize="10.5">invoices[] Array CSV</text>
                    <text x="36" y="134" fill="#CBD5E1" fontSize="10.5">Signed POD &amp; e-Way Bill</text>
                    <text x="36" y="152" fill="#CBD5E1" fontSize="10.5">Credit Notes / GSTR-2B</text>
                    <rect x="36" y="178" width="132" height="58" rx="6" fill="#0F172A" stroke="#334155" />
                    <text x="44" y="198" fill="#34D399" fontSize="10" fontWeight="700">BSA s.28 &amp; s.63</text>
                    <text x="44" y="216" fill="#94A3B8" fontSize="9.5">Net Crystallized Debt</text>

                    <path d="M180 156 L202 156" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="202,151 212,156 202,161" fill="#DC2626" />

                    {/* Stage 2 */}
                    <rect x="212" y="58" width="156" height="196" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="236" cy="84" r="13" fill="#DC2626" />
                    <text x="236" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">02</text>
                    <text x="258" y="88" fill="#F8FAFC" fontSize="12" fontWeight="700">Pre-Action</text>
                    <text x="224" y="116" fill="#CBD5E1" fontSize="10.5">7d s.20 Cheque Notice</text>
                    <text x="224" y="134" fill="#CBD5E1" fontSize="10.5">s.2(b) 15d GRN Rebuttal</text>
                    <text x="224" y="152" fill="#CBD5E1" fontSize="10.5">CGST s.76 Tax Demand</text>
                    <rect x="224" y="178" width="132" height="58" rx="6" fill="#0F172A" stroke="#334155" />
                    <text x="232" y="198" fill="#FBBF24" fontSize="10" fontWeight="700">Bir Singh Compliance</text>
                    <text x="232" y="216" fill="#94A3B8" fontSize="9.5">Blocks misuse defense</text>

                    <path d="M368 156 L390 156" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="390,151 400,156 390,161" fill="#DC2626" />

                    {/* Stage 3 */}
                    <rect x="400" y="58" width="156" height="196" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="424" cy="84" r="13" fill="#DC2626" />
                    <text x="424" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">03</text>
                    <text x="446" y="88" fill="#F8FAFC" fontSize="12" fontWeight="700">Tri-Channel</text>
                    <text x="412" y="116" fill="#CBD5E1" fontSize="10.5">Zoho Verified Email</text>
                    <text x="412" y="134" fill="#CBD5E1" fontSize="10.5">WATI Blue-Tick WA</text>
                    <text x="412" y="152" fill="#CBD5E1" fontSize="10.5">India Post Speed Post</text>
                    <rect x="412" y="178" width="132" height="58" rx="6" fill="#0F172A" stroke="#334155" />
                    <text x="420" y="198" fill="#34D399" fontSize="10" fontWeight="700">Director s.141 Service</text>
                    <text x="420" y="216" fill="#94A3B8" fontSize="9.5">RPAD + Hash Manifest</text>

                    <path d="M556 156 L578 156" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="578,151 588,156 578,161" fill="#DC2626" />

                    {/* Stage 4 */}
                    <rect x="588" y="58" width="156" height="196" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="612" cy="84" r="13" fill="#DC2626" />
                    <text x="612" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">04</text>
                    <text x="634" y="88" fill="#F8FAFC" fontSize="12" fontWeight="700">Reply Triage</text>
                    <text x="600" y="116" fill="#CBD5E1" fontSize="10.5">Part-Pay &amp; Balance Conf</text>
                    <text x="600" y="134" fill="#CBD5E1" fontSize="10.5">RTV / Scheme Reconcile</text>
                    <text x="600" y="152" fill="#CBD5E1" fontSize="10.5">GSTR-3B Upload Proof</text>
                    <rect x="600" y="178" width="132" height="58" rx="6" fill="#0F172A" stroke="#334155" />
                    <text x="608" y="198" fill="#FBBF24" fontSize="10" fontWeight="700">Limitation Reset s.18</text>
                    <text x="608" y="216" fill="#94A3B8" fontSize="9.5">Screen fake disputes</text>

                    <path d="M744 156 L766 156" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="766,151 776,156 766,161" fill="#DC2626" />

                    {/* Stage 5 */}
                    <rect x="776" y="58" width="120" height="196" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="800" cy="84" r="13" fill="#10B981" />
                    <text x="800" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">05</text>
                    <text x="820" y="88" fill="#F8FAFC" fontSize="12" fontWeight="700">Forum</text>
                    <text x="788" y="116" fill="#CBD5E1" fontSize="10.5">s.138 + 20% s.143A</text>
                    <text x="788" y="134" fill="#CBD5E1" fontSize="10.5">MSEFC 3x / s.43B(h)</text>
                    <text x="788" y="152" fill="#CBD5E1" fontSize="10.5">O.38 R.5 Stock Freeze</text>
                    <rect x="788" y="178" width="96" height="58" rx="6" fill="#0F172A" stroke="#334155" />
                    <text x="794" y="198" fill="#34D399" fontSize="10" fontWeight="700">Cash Realized</text>
                    <text x="794" y="216" fill="#94A3B8" fontSize="9.5">BNS s.316(4) / s.21</text>

                    <text x="24" y="286" fill="#94A3B8" fontSize="10">
                      Every notice preserves Bar Council drafting standards, Section 63 BSA electronic integrity, and multi-entity Representees separation across zones.
                    </text>
                  </svg>
                </div>

                {/* Mobile Stacked Cards */}
                <div className="md:hidden space-y-3">
                  {[
                    {
                      num: "01",
                      title: "Ledger Audit & Multi-Invoice Ingestion",
                      desc: "Bundle unpaid tax invoices, signed dark-store PODs, e-Way bills, and GSTR-2B mismatches under BSA s.28 & s.63.",
                    },
                    {
                      num: "02",
                      title: "Pre-Bounce Crystallization & Statutory Hooks",
                      desc: "Issue 7-day s.20 security-cheque intimation notices, MSMED s.2(b) GRN rebuttals, or CGST s.76 tax demands.",
                    },
                    {
                      num: "03",
                      title: "Tri-Channel Dispatch Across India",
                      desc: "Serve proprietors, partnerships, and active directors (s.141) via Zoho Email, WATI WhatsApp, and Speed Post RPAD.",
                    },
                    {
                      num: "04",
                      title: "Inbound Reply & Credit-Note Triage",
                      desc: "Capture balance confirmations (Limitation s.18), GSTR-3B filings, and RTV settlement offers centrally.",
                    },
                    {
                      num: "05",
                      title: "Targeted Statutory Escalation",
                      desc: "Escalate to s.138 + 20% s.143A Magistrate courts, MSEFC Samadhaan, Order 38 Rule 5 stock attachment, or BNS s.316(4) FIRs.",
                    },
                  ].map((stage) => (
                    <div
                      key={stage.num}
                      className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800 flex items-start gap-3"
                    >
                      <span className="w-7 h-7 rounded-lg bg-[#DC2626] text-white font-black text-xs flex items-center justify-center shrink-0">
                        {stage.num}
                      </span>
                      <div>
                        <p className="text-sm font-bold text-white">{stage.title}</p>
                        <p className="text-xs text-slate-300 mt-1 leading-relaxed">{stage.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 4: Interactive 4-Tab Scenario Explorer */}
              <section
                id="heading-scenario-playbooks"
                aria-labelledby="heading-scenario-playbooks-title"
                className="scroll-mt-28 space-y-5"
              >
                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5">
                  <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                      4
                    </span>
                    <div>
                      <h2
                        id="heading-scenario-playbooks-title"
                        className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                      >
                        Interactive Recovery Playbooks Across 4 Trade &amp; Channel Tracks
                      </h2>
                      <p className="text-xs font-semibold text-slate-500 mt-1">
                        Click Each Channel Vertical to Inspect Bottlenecks, Statutory Hooks &amp; 3-Step Creditor Protocols
                      </p>
                    </div>
                  </div>
                  <FmcgHubScenarioTabs />
                </div>
              </section>

              {/* Section 5: Multi-Invoice Ledger Engine & Dual-Track CTA */}
              <section
                id="heading-ledger-engine"
                aria-labelledby="heading-ledger-engine-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    5
                  </span>
                  <div>
                    <h2
                      id="heading-ledger-engine-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Multi-Invoice Ledger Engine &amp; Section 20 Cheque Triage
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Production B2B Infrastructure Built for Zonal Credit Heads, Super-Stockists &amp; D2C Brand Finance Teams
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                      1. Multi-Invoice Ledger Schema (invoices[])
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      Bill-by-Bill Schedules Inside One Notice
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Attach 5 to 100+ overdue GST tax invoices, e-Way bills, PO numbers, and net credit-note adjustments directly into one statutory demand notice rather than sending fragmented reminders.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                      2. Regional Entity Isolation (Representees)
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      Separate Depots, C&amp;Fs &amp; D2C Sub-Brands
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Manage distinct regional depots, super-stockists, and brand entities inside{" "}
                      <Link href="/user/representees" className="text-[#DC2626] font-semibold underline">
                        Representees workspace
                      </Link>{" "}
                      with dedicated authorized signatories and zero cross-account leakage.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                      3. Section 20 &amp; Section 141 Director Targeting
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      Pre-Bounce + Post-Bounce Dual Dispatch
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Sequence 7-day pre-deposit crystallization notices before banking security PDCs, followed by strict 30-day{" "}
                      <Link href="/cheque-bounce-case-against-company-directors" className="text-[#DC2626] font-semibold underline">
                        Section 141 director notices
                      </Link>{" "}
                      if bounced or stopped.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                      4. Tri-Channel Proof &amp; Reply Triage
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      Email + WhatsApp + Speed Post RPAD
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Every notice generates WATI blue-tick read logs, Zoho email headers, Speed Post barcodes, and Section 63 BSA certificates while routing dealer RTV or part-pay replies to one triage inbox.
                    </p>
                  </div>
                </div>

                <div id="heading-cta-block" className="scroll-mt-28 pt-2">
                  <FmcgHubCTA />
                </div>
              </section>

              {/* Section 6: Binding Supreme Court & Statutory Rules */}
              <section
                id="heading-statutory-precedents"
                aria-labelledby="heading-statutory-precedents-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    6
                  </span>
                  <div>
                    <h2
                      id="heading-statutory-precedents-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Binding Supreme Court &amp; Statutory Rules on FMCG Trade Credit
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Controlling Case Law &amp; Legislative Cutoffs Built Into Every Channel Notice Draft
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {BINDING_MANDATES.map((item) => (
                    <article
                      key={item.parties}
                      className="relative pl-5 pr-4 py-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2"
                    >
                      <span className="absolute left-0 top-3 bottom-3 w-1.5 rounded-r bg-[#DC2626]" aria-hidden="true" />
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626]">
                          {item.citation}
                        </span>
                        <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full self-start sm:self-auto">
                          Creditor Precedent
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">{item.title}</h3>
                      <p className="text-xs font-semibold text-slate-600">{item.parties}</p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{item.holding}</p>
                      <p className="text-xs font-bold text-slate-900 pt-1">
                        Operational Impact: <span className="font-medium text-slate-700">{item.impact}</span>
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 7: Worked Trade Economics */}
              <section
                id="heading-worked-economics"
                aria-labelledby="heading-worked-economics-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    7
                  </span>
                  <div>
                    <h2
                      id="heading-worked-economics-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Worked Trade Math: &rupee;14L Security Cheque vs &rupee;18L Blocked GST ITC
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Illustrative Statutory Quantification Across Dealer Cheque Prosecution &amp; Vendor Tax Indemnity
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  In FMCG and consumer electronics distribution, statutory sequencing determines both speed of cash realization and whether counter-defenses survive first hearing. Compare two recurring finance scenarios below:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 sm:p-5 rounded-xl border border-emerald-200 bg-emerald-50/50 space-y-2.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                      Case A: &rupee;14,00,000 Electronics Dealer Ledger (s.20 + s.143A)
                    </p>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc list-inside">
                      <li>Principal overdue across 11 GST invoices after deducting credit notes: <strong>&rupee;14,00,000</strong>.</li>
                      <li>7-day s.20 Crystallization Notice served via Email, WhatsApp &amp; Speed Post RPAD before filling undated security cheque.</li>
                      <li>If dealer issues &lsquo;Stop Payment&rsquo; or cheque bounces, Magistrate can award up to <strong>20% interim relief (&rupee;2,80,000)</strong> under s.143A NI Act while full trial proceeds.</li>
                      <li>Without pre-deposit crystallization, dealers tie up complaints for 18+ months alleging arbitrary filling.</li>
                    </ul>
                  </div>

                  <div className="p-4 sm:p-5 rounded-xl border border-amber-200 bg-amber-50/60 space-y-2.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-amber-800">
                      Case B: &rupee;18,00,000 Blocked GST ITC on Vendor Non-Filing (s.76 + s.50)
                    </p>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc list-inside">
                      <li>Brand paid &rupee;1,00,00,000 + <strong>&rupee;18,00,000</strong> (18% GST) to a packaging/co-packing supplier who failed to file GSTR-3B.</li>
                      <li>GST Department reverses &rupee;18,00,000 ITC under CGST s.16(2)(c) + <strong>18% p.a. interest</strong> under s.50(3) (approx. &rupee;3,24,000/yr) + DRC-01 penalty exposure.</li>
                      <li>Serving an advocate indemnity notice citing <strong>CGST s.76</strong> (mandatory deposit of tax collected) turns tax audit liability back onto the defaulting vendor.</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-900 text-slate-100 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="text-xs sm:text-sm">
                    <strong className="text-white block">Need Exact Cheque Bounce Deadlines or MSME 3x Interest Math?</strong>
                    <span className="text-slate-300">
                      Verify 30+15+30 NI Act timelines or Section 16 monthly compound interest before dispatching your notice.
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 shrink-0">
                    <Link
                      href="/tools/cheque-bounce-deadline-calculator"
                      className="px-3.5 py-2 rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold text-center transition-colors"
                    >
                      Cheque Calculator &rarr;
                    </Link>
                    <Link
                      href="/tools/msme-delayed-payment-interest-calculator"
                      className="px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold text-center transition-colors border border-white/15"
                    >
                      MSME 3x Calculator &rarr;
                    </Link>
                  </div>
                </div>
              </section>

              {/* Section 8: Complete 10-Spoke IND-10 Directory */}
              <section
                id="heading-spokes-directory"
                aria-labelledby="heading-spokes-directory-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    8
                  </span>
                  <div>
                    <h2
                      id="heading-spokes-directory-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Complete IND-10 Directory: 10 Specialized Spokes, Tools &amp; Templates
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Full Hub-and-Spoke Map Covering B2B-125 Through B2B-134 Across Channel Credit, Quick-Commerce, C&amp;F Deposits &amp; Tax Indemnity
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  {SPOKE_TRACKS.map((trackGroup) => {
                    const items = IND_10_SPOKES.filter((s) => s.track === trackGroup.key);
                    return (
                      <div key={trackGroup.key} className="space-y-3.5">
                        <h3 className="text-sm sm:text-base font-extrabold text-slate-900 border-l-4 border-[#DC2626] pl-3">
                          {trackGroup.heading}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                          {items.map((spoke) => (
                            <Link
                              key={spoke.id}
                              href={spoke.url}
                              className="group p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-[#DC2626]/60 hover:shadow-sm transition-all flex flex-col justify-between gap-2.5"
                            >
                              <div>
                                <div className="flex items-center justify-between gap-2 mb-2">
                                  <span
                                    className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full border ${trackGroup.badgeClass}`}
                                  >
                                    {spoke.archetypeLabel}
                                  </span>
                                  <span className="text-[10px] font-mono text-slate-400">{spoke.id}</span>
                                </div>
                                <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors leading-snug">
                                  {spoke.title}
                                </p>
                                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                                  {spoke.summary}
                                </p>
                              </div>
                              <div className="pt-2 border-t border-slate-200/70 flex items-center justify-between gap-2 text-[11px]">
                                <span className="font-semibold text-slate-500 truncate">{spoke.statute}</span>
                                <span className="font-bold text-[#DC2626] shrink-0">Open &rarr;</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Section 9: Live Seed Guides & Bulk Solutions */}
              <section
                id="heading-seed-resources"
                aria-labelledby="heading-seed-resources-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    9
                  </span>
                  <div>
                    <h2
                      id="heading-seed-resources-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Live Distributor, Cheque Bounce &amp; MSME Seed Guides
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Live Statutory Playbooks, Calculators, Templates &amp; Bulk Dispatch Resources Ready Now on LegalRecovery.in
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {[
                    {
                      title: "Distributor or Dealer Not Paying Dues? Legal Recovery",
                      href: "/distributor-dealer-dues-recovery",
                      tag: "IND-10 Seed Guide",
                      desc: "Signed ledger confirmations, security cheques, MSME 3x interest, and Order 37 summary suits.",
                    },
                    {
                      title: "Stop Payment Cheque Bounce: Is Section 138 Attracted?",
                      href: "/stop-payment-cheque-bounce-case",
                      tag: "Section 138 Seed",
                      desc: "Overturn drawer stop-payment memos and enforce Section 138 statutory presumptions.",
                    },
                    {
                      title: "Company Cheque Bounce: Prosecuting Directors (s.141)",
                      href: "/cheque-bounce-case-against-company-directors",
                      tag: "Section 141 Seed",
                      desc: "Aneeta Hada compliance and mandatory averments to hold active directors personally liable.",
                    },
                    {
                      title: "Bulk Recovery Cases: All-in-One Institutional Solutions",
                      href: "/bulk-recovery-cases-all-in-one-affordable-solutions",
                      tag: "CSV Batch Desk",
                      desc: "Upload 10 to 10,000+ overdue dealer and retailer accounts for simultaneous advocate dispatch.",
                    },
                    {
                      title: "Bulk Notice via Email, WhatsApp & Speed Post RPAD",
                      href: "/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution",
                      tag: "Tri-Channel Engine",
                      desc: "Proof-sealed Email, WATI WhatsApp, and India Post RPAD manifests with BSA s.63 logs.",
                    },
                    {
                      title: "E-Commerce Marketplace Seller Payment Recovery Notice",
                      href: "/legal-notice-to-ecommerce-marketplace-seller-payment-recovery",
                      tag: "Marketplace Seed",
                      desc: "Recover delayed COD payouts, unfair penalty holds, and rejected return claims.",
                    },
                    {
                      title: "Section 43B(h): The MSME 45-Day Payment Rule for Buyers",
                      href: "/law/section-43bh-msme-payment-rule",
                      tag: "Tax Disallowance",
                      desc: "Leverage March 31 income-tax disallowance to accelerate corporate & Modern-Trade payouts.",
                    },
                    {
                      title: "MSME Delayed Payment Demand Notice Format (Template)",
                      href: "/templates/msme-delayed-payment-demand-notice",
                      tag: "Live P1 Template",
                      desc: "Ready Udyam demand notice citing Sections 15–16 and Section 43B(h) tax impact.",
                    },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group p-4 rounded-xl border border-slate-200 hover:border-[#DC2626]/60 bg-slate-50/40 hover:bg-white transition-all flex flex-col justify-between gap-2"
                    >
                      <div>
                        <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-[#DC2626] bg-red-50 px-2 py-0.5 rounded-full mb-1.5">
                          {item.tag}
                        </span>
                        <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                          {item.title}
                        </p>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                      <span className="text-xs font-bold text-slate-800 group-hover:text-[#DC2626]">
                        Read Live Resource &rarr;
                      </span>
                    </Link>
                  ))}
                </div>
              </section>

              {/* Section 10: FAQs */}
              <section
                id="heading-faqs"
                aria-labelledby="heading-faqs-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    10
                  </span>
                  <div>
                    <h2
                      id="heading-faqs-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      FAQs: FMCG, Consumer Durables, D2C &amp; Super-Stockist Recovery
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Direct Legal Answers for Credit Controllers, D2C CFOs, C&amp;F Agents &amp; Electronics Distributors
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq) => (
                    <details
                      key={faq.question}
                      className="group rounded-xl border border-slate-200 bg-slate-50/50 open:bg-white p-4 sm:p-5 transition-all"
                    >
                      <summary className="font-bold text-slate-900 text-xs sm:text-sm md:text-base cursor-pointer flex justify-between items-start gap-3 list-none select-none">
                        <span>{faq.question}</span>
                        <span className="text-slate-400 group-open:rotate-180 transition-transform duration-200 font-black text-base shrink-0">
                          &darr;
                        </span>
                      </summary>
                      <p className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 11: Statutory Acts & Portals */}
              <section
                id="heading-sources"
                aria-labelledby="heading-sources-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#404447] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    11
                  </span>
                  <div>
                    <h2
                      id="heading-sources-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Statutory Acts, CBIC Circulars &amp; Official Commercial Portals
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Primary Bare Acts, Tax Statutes &amp; Commercial Dispute Authorities Referenced
                    </p>
                  </div>
                </div>

                <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-700">
                  {PRIMARY_SOURCES.map((source) => (
                    <li key={source.url} className="leading-relaxed break-words">
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-blue-700 hover:text-blue-900 underline font-medium"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </section>
            </div>
          </div>
        </main>

        {/* Footer Cross-Links */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
