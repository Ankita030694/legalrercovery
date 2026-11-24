import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import ColdStorageTableOfContents from "./ColdStorageTableOfContents";
import ColdStorageScenarioTabs from "./ColdStorageScenarioTabs";
import ColdStorageNoticeCTA from "./ColdStorageNoticeCTA";

export const revalidate = 86400;

const PAGE_PATH =
  "/cold-storage-unpaid-rent-commodity-lien-lawful-auction-notice-india";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const EXACT_H1 =
  "Mandi Prices Crashed and Traders Abandoned 50,000 Potato / Chilli Bags in Your Cold Storage! Lawful Statutory Auction & Deficit-Rent Recovery";

const META_TITLE = "Cold Storage Unpaid Rent: Lawful Stock Auction & Recovery";
const META_DESCRIPTION =
  "Traders vanished after mandi crash? Serve the 15/7-day Registered Notice under Contract Act s.170/176 & State Cold Storage Acts before auctioning stock.";

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
        alt: formatAltText("Cold storage unpaid rent lawful auction and deficit recovery"),
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
      "The Indian Contract Act, 1872 (Sections 151, 152, 170, 171 & 176 — Bailee Duty of Care, Particular Lien & Mandatory Notice Before Sale)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "The Uttar Pradesh Regulation of Cold Storages Act, 1976 (Sections 12–24 — Hirer Default, Statutory Lien, Auction Procedure & Licensing Officer)",
    url: "https://www.indiacode.nic.in/handle/123456789/15800",
  },
  {
    title:
      "The Consumer Protection Act, 2019 (Section 2(7) — Commercial Purpose Exclusion for Wholesale Mandi & B2B Commodity Traders)",
    url: "https://www.indiacode.nic.in/handle/123456789/15256",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Admissibility of SCADA Chamber Temperature Logs & Electronic Notice Records)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "Warehousing Development and Regulatory Authority (WDRA) — Negotiable Warehouse Receipt (NWR / e-NWR) & Pledgee Lien Framework",
    url: "https://wdra.gov.in/",
  },
  {
    title:
      "The Negotiable Instruments Act, 1881 (Sections 138 & 141 — Enforcement of Security Cheques Issued for Seasonal Cold-Storage Rent)",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Supreme Court on Mandatory Section 176 Reasonable Notice Before Sale",
    parties: "Lallan Prasad v. Rahmat Ali & Anr.",
    citation: "AIR 1967 SC 1322, Supreme Court of India",
    facts:
      "A pledgee/bailee sought to retain and enforce security without following the strict statutory conditions under Section 176 of the Indian Contract Act, 1872, raising questions on the relationship between custody, notice of sale, and personal recovery of the balance.",
    holding:
      "The Supreme Court held that Section 176 confers two distinct rights upon default: to sue upon the debt while retaining goods as collateral, or to sell the goods after giving reasonable notice of the sale. A sale conducted without strict compliance with the statutory notice mandate is legally defective, whereas a lawful sale after notice preserves the creditor's right to recover any remaining deficit.",
    principle: "Contract Act s.176 Dual Remedy & Deficit Preservation",
    takeaway:
      "Cold-storage owners must never quietly clear or privately sell abandoned potato or chilli bags. Serving a formal 15-day Registered Notice under s.176 both insulates the sale from conversion claims and legally preserves the right to sue for unpaid electricity and rent shortfalls.",
  },
  {
    title: "High Court Ruling on Non-Waivability of Statutory Pre-Sale Notice",
    parties: "Prabhat Bank Ltd. & Anr. v. Babu Ram",
    citation: "AIR 1966 All 134, High Court of Allahabad",
    facts:
      "The standard agreement printed on the receipt purported to authorize sale without prior notice upon default. The bailee/pledgee sold the goods relying on the printed contract clause without serving a fresh, specific statutory notice fixing a cure deadline.",
    holding:
      "The Allahabad High Court ruled that the requirement of 'reasonable notice of the sale' under Section 176 of the Indian Contract Act is a mandatory statutory protection that cannot be contracted out of or waived through fine-print clauses on loan or storage receipts.",
    principle: "Fine-Print Receipt Clauses Cannot Replace Registered Notice",
    takeaway:
      "Even if your Cold Storage Bond Receipt states 'stock may be auctioned after 30 November without notice', courts treat that clause as void against s.176. Always dispatch a separate, lot-specific 15-day Registered Speed Post notice.",
  },
  {
    title: "Supreme Court on Commercial-Purpose Bar in Consumer Courts",
    parties: "Laxmi Engineering Works v. P.S.G. Industrial Institute",
    citation: "(1995) 3 SCC 583, Supreme Court of India",
    facts:
      "A commercial enterprise purchasing/utilizing industrial capacity for large-scale profit-making resale invoked Consumer Commission jurisdiction alleging deficiency of service to bypass civil court fees.",
    holding:
      "The Supreme Court clarified that persons engaging services for a 'commercial purpose'—large-scale trading, resale, or profit-oriented business operations rather than personal livelihood self-employment—are excluded from the definition of 'consumer' under the Consumer Protection Act.",
    principle: "Wholesale Mandi Traders Excluded Under CPA s.2(7)",
    takeaway:
      "When a wholesale trader who stored 5,000–50,000 bags of potato, red chilli, or turmeric files a District Consumer case against your cold storage, immediately file a preliminary maintainability objection citing Laxmi Engineering Works, their GSTIN, and commercial lot volume.",
  },
  {
    title: "Supreme Court on Bailee Duty of Care & Statutory Lien Protection",
    parties: "Trustees of the Port of Bombay v. Premier Automobiles Ltd.",
    citation: "(1981) 1 SCC 228, Supreme Court of India",
    facts:
      "A statutory custodian/bailee faced claims over stored goods while exercising custody and statutory charges. The dispute examined the standard of care required of a bailee under Sections 151 and 152 of the Indian Contract Act.",
    holding:
      "The Court affirmed that a bailee is not an absolute insurer of goods against inherent vice or market deterioration; the statutory duty under Section 151 is satisfied once the bailee demonstrates that it exercised the care of a person of ordinary prudence under similar circumstances.",
    principle: "Contract Act ss.151–152 Prudent Custody Shield",
    takeaway:
      "Automated SCADA chamber temperature logs, DG-set fuel/run registers, and State Horticulture/Licensing inspection reports certified under BSA 2023 s.63 completely defeat false 'spoilage due to cooling failure' counterclaims.",
  },
];

const TIMELINE_STAGES = [
  {
    stage: "Stage 1: Rent Maturity & Lien Crystallization",
    window: "Season End (Oct–Dec / Mar–May)",
    statute: "Contract Act s.170 & State Cold Storage Act",
    action:
      "Compile lot-wise outstanding seasonal rent, loading/unloading, grading, and over-season electricity surcharge. Particular Lien attaches automatically to stored bags.",
  },
  {
    stage: "Stage 2: 15-Day Registered Pre-Auction Notice",
    window: "Day 1 to Day 15",
    statute: "Contract Act s.176 & State Rules",
    action:
      "Serve Fact-verified Registered Speed Post (RPAD) + WhatsApp + Email notice specifying Lot No., Bag Count, Chamber No., exact arrears, and a clear 15-day redemption deadline.",
  },
  {
    stage: "Stage 3: 7-Day Final Intimation & Newspaper Publication",
    window: "Day 16 to Day 22",
    statute: "State Cold Storage Act / Public Sale Mandate",
    action:
      "Publish a public auction notice in one vernacular local daily and one English daily stating date, time, lot details, and reserve mandi rate; copy the Licensing Officer / Pledgee Bank.",
  },
  {
    stage: "Stage 4: Transparent Videographed Auction & Panchnama",
    window: "Day 23 to Day 25",
    statute: "Contract Act s.176 & BSA 2023 s.63",
    action:
      "Conduct open auction at the cold-storage gate in presence of 3+ independent bidders and two panch witnesses; record continuous video, weighment slips, and mandi rate certificate.",
  },
  {
    stage: "Stage 5: Post-Auction Accounting & Deficit Suit",
    window: "Day 26 to 3 Years (Art. 55 / 113)",
    statute: "Contract Act s.176 + Order XXXVII CPC / NI s.138",
    action:
      "Appropriate net proceeds toward auction cost and accrued rent. Serve a 7-day Post-Auction Deficit Demand Notice and sue for the shortfall within the 3-year limitation stop.",
  },
];

const DEFENSE_MATRIX = [
  {
    defense: "\"I never received any auction notice; stock was sold behind my back.\"",
    statutoryShield: "RPAD Tracking + Multi-Channel Service (Contract Act s.176 / General Clauses Act s.27)",
    action:
      "Serve via India Post Registered AD / Speed Post at the address on the Bond Receipt plus WhatsApp & Email. Even if returned 'Refused' or 'Unclaimed', s.27 General Clauses Act deems valid service.",
  },
  {
    defense: "\"My potatoes/chillies rotted because the cold storage switched off cooling.\"",
    statutoryShield: "Contract Act ss.151–152 + BSA 2023 s.63 Electronic Chamber Logs",
    action:
      "Produce hourly digital temperature/humidity logs, electricity utility bills, and DG-set run logs certified under BSA s.63 to prove continuous cooling and inherent over-storage rot.",
  },
  {
    defense: "\"I am filing a District Consumer Commission complaint for ₹40 Lakh damages.\"",
    statutoryShield: "Consumer Protection Act 2019 s.2(7) Commercial Purpose Exclusion",
    action:
      "File a threshold maintainability application citing Laxmi Engineering Works (1995) 3 SCC 583, attaching the trader's GSTIN, APMC license, and commercial lot volume.",
  },
  {
    defense: "\"The stock was pledged to a Bank; the cold storage had no right to auction.\"",
    statutoryShield: "Contract Act s.170 Preservation Lien + Tripartite Notice",
    action:
      "Serve the 15-day Registered Notice on both the Trader and the Pledgee Bank Branch Manager, putting the bank to election: pay rent and lift collateral or join the public auction.",
  },
];

const FAQS = [
  {
    question:
      "Can a cold storage sell abandoned potato or red chilli bags immediately if the bond receipt allows sale without notice?",
    answer:
      "No. Under Section 176 of the Indian Contract Act, 1872, as interpreted by the Allahabad High Court in Prabhat Bank Ltd. v. Babu Ram (AIR 1966 All 134) and the Supreme Court in Lallan Prasad v. Rahmat Ali (AIR 1967 SC 1322), 'reasonable notice of the sale' is a mandatory statutory condition. Fine-print clauses on storage receipts waiving notice do not protect a cold storage from conversion claims or Consumer Commission litigation. Always serve a 15-day Registered Speed Post notice followed by public newspaper auction notice.",
  },
  {
    question:
      "What are the State Cold Storage Regulation Act rules in UP, West Bengal, Bihar, and Gujarat?",
    answer:
      "States with major cold-storage belts—including Uttar Pradesh (UP Regulation of Cold Storages Act, 1976), West Bengal (WB Cold Storage Licensing and Regulation Act, 1966), and Bihar—require licensed cold storages to maintain proper lot receipts, notify the hirer by registered post upon rent default or imminent deterioration, and obtain/notify the Licensing Officer or Agricultural Marketing Officer where prescribed before public auction. Even in Gujarat, MP, and Punjab where general Contract Act / warehousing rules govern, following the 15-day Registered Notice + Newspaper Notice + Panchnama protocol provides 100% judicial insulation.",
  },
  {
    question:
      "What if the auction value of crashed potato or chilli bags is less than the unpaid cold-storage rent?",
    answer:
      "Under Section 176 of the Indian Contract Act, 1872, if the net proceeds of a lawful public auction are less than the accrued storage rent, unloading charges, over-season electricity surcharges, and auction expenses, the hirer/trader remains personally liable to pay the deficit. After completing the auction, issue a Post-Auction Final Statement of Account via Registered Post and file an Order XXXVII CPC Summary Suit (or Commercial Court suit if the claim is ₹3 Lakh or above) within 3 years.",
  },
  {
    question:
      "Who has priority when stored stock is pledged to a bank against a Warehouse Receipt (WHR)?",
    answer:
      "Under Section 170 of the Indian Contract Act, 1872, a cold storage holds a Particular Lien for preservation and refrigeration services rendered to keep the perishable commodity alive. While the bank holds a pledgee's security interest, the cold storage should never auction pledged stock silently. Serving a tripartite 15-day Registered Notice on both the trader and the lending bank's Branch Manager forces the bank either to pay the accrued rent to protect its collateral or consent to a transparent auction with rent appropriated first.",
  },
  {
    question:
      "How do I stop a defaulting mandi trader from suing my cold storage in Consumer Court?",
    answer:
      "First, follow the exact 15-day Registered Pre-Auction Notice, newspaper publication, and videographed 3-bid panchnama protocol so there is zero procedural defect. Second, if a trader still approaches the District Consumer Commission, file a preliminary objection under Section 2(7) of the Consumer Protection Act, 2019 (relying on Laxmi Engineering Works v. P.S.G. Industrial Institute) demonstrating that a trader storing commercial quantities for wholesale resale is not a 'consumer'.",
  },
  {
    question:
      "What should a cold storage do if abandoned bags start rotting and threaten healthy chambers?",
    answer:
      "If rotting stock poses an immediate phytosanitary or ammonia/spoilage hazard to neighbouring farmers' lots, document the condition immediately through photographs, a Horticulture/Licensing Officer inspection report (where applicable), and two independent witnesses. Serve an urgent 7-day Registered Notice + WhatsApp/Email notice under the deterioration/perishable goods exception and conduct an immediate documented disposal or distress sale with full panchnama.",
  },
  {
    question:
      "Can a cold storage present a trader's security cheque under NI Act Section 138 for the post-auction deficit?",
    answer:
      "Yes, provided the trader issued a signed cheque toward storage rent/security and the exact post-auction deficit has crystallized and been communicated via a formal statement of account. Upon dishonour, you must serve the mandatory Section 138(b) demand notice within 30 days of the bank return memo and grant a 15-day payment window before filing a criminal complaint.",
  },
];

export default function ColdStorageUnpaidRentLawPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: META_DESCRIPTION,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": PAGE_URL,
    },
    image: `${SITE_URL}/blog_money_recovery.png`,
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
    datePublished: "2026-11-19",
    dateModified: "2026-11-19",
    inLanguage: "en-IN",
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
        name: "Agri-Inputs & Cold Storage Recovery",
        item: `${SITE_URL}/industries/agri-inputs-cold-storage-food-processing-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Cold Storage Unpaid Rent & Auction Law",
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
            <span>IND-21 Law Deep-Dive</span>
            <span>&bull;</span>
            <span>Contract Act ss.170 &amp; 176</span>
            <span>&bull;</span>
            <span>State Cold Storage Acts</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40-60 Word Executive Creditor Summary Box with inline Parent Hub link */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Under our{" "}
            <Link
              href="/industries/agri-inputs-cold-storage-food-processing-recovery"
              className="text-red-300 underline hover:text-white font-semibold"
            >
              Agri-Inputs &amp; Cold Storage Recovery Hub
            </Link>
            , cold-storage owners hold a statutory bailee lien under Contract Act s.170. Never clear abandoned potato or chilli chambers privately: serve a mandatory 15-day Registered Pre-Auction Notice under s.176 and State Cold Storage Acts, publish a newspaper auction notice, record a 3-bid panchnama, and sue for the remaining deficit.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">
                s.170 &amp; s.176
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Contract Act Bailee Lien &amp; Sale Notice
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">
                15 / 7 Days
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Statutory RPAD Cure &amp; Auction Window
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">
                UP / WB / GJ / AP
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                State Cold Storage Act Belts Covered
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">
                100% Deficit
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Shortfall Preserved via Order XXXVII Suit
              </p>
            </div>
          </div>

          {/* Reviewer Attribution */}
          {/* TODO(reviewer): src/data/reviewers.ts is absent in this repository */}
          <p className="mt-5 text-[11px] sm:text-xs text-slate-400">
            Statutorily reviewed by <strong className="text-slate-200">Anuj Anand Malik</strong>, Advocate &amp; Founder, AMA Legal Solutions &middot; Updated November 2026
          </p>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Agri-Inputs & Cold Storage Recovery",
                href: "/industries/agri-inputs-cold-storage-food-processing-recovery",
              },
              {
                label: "Cold Storage Auction & Lien Law",
                href: PAGE_PATH,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          <ColdStorageTableOfContents />

          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Statutory Framework */}
            <section
              id="heading-statutory-architecture"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Statutory Framework: Bailee Lien &amp; State Cold Storage Acts
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Across India&apos;s major horticulture and spice belts—Agra, Farrukhabad, Hathras, and Kannauj in Uttar Pradesh; Hooghly and Bardhaman in West Bengal; Deesa and Banaskantha in Gujarat; Guntur in Andhra Pradesh; and Indore/Ujjain in Madhya Pradesh—cold storages operate on thin seasonal margins while carrying massive fixed electricity and ammonia-plant overheads. When mandi spot prices for table potatoes, seed potatoes, red chillies, or turmeric crash below ₹350–₹400 per bag, speculative traders routinely abandon 5,000 to 50,000 bags inside chambers to avoid paying ₹125–₹165/bag in accrued rent.
                </p>
                <p>
                  A cold-storage owner&apos;s legal authority to detain and auction unpaid stock rests on two overlapping statutory pillars: the <strong>Indian Contract Act, 1872</strong> (central law applicable pan-India) and <strong>State Cold Storage Regulation Acts</strong> (applicable in licensed states such as UP and West Bengal).
                </p>
              </div>

              <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="p-3.5 font-semibold">Statute &amp; Provision</th>
                      <th className="p-3.5 font-semibold">Creditor Power / Duty</th>
                      <th className="p-3.5 font-semibold">Operational Rule for Cold Storages</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">
                        Contract Act s.170 (Bailee&apos;s Particular Lien)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Right to retain stored goods until remuneration for refrigeration &amp; preservation is paid.
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Applies lot-by-lot; justifies refusing gate-pass release until full rent &amp; electricity surcharge is cleared.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">
                        Contract Act s.176 (Notice &amp; Sale + Deficit)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Mandatory reasonable notice before public sale; preserves right to sue for balance shortfall.
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Serve a 15-day Registered Speed Post (RPAD) notice specifying Lot No., Bags, and Arrears before auctioning.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">
                        UP Regulation of Cold Storages Act, 1976 (ss.12–24)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Statutory procedure for hirer default, deterioration notice, and Licensing Officer intimation.
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Issue registered notice to hirer and notify District Horticulture / Licensing Officer where required.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">
                        WB Cold Storage (Licensing &amp; Regulation) Act, 1966
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Bond-receipt rent caps, seasonal cut-off dates, and regulated auction of unclaimed potato lots.
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Strictly follow post-season registered notice and public auction rules before clearing Hooghly/Bardhaman chambers.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">
                        Contract Act ss.151–152 (Bailee Standard of Care)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Requires ordinary prudence; exempts bailee from inherent crop rot or market crash.
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Preserve continuous SCADA temperature logs &amp; DG-set registers under BSA 2023 s.63.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 2: Mandatory Timeline & SVG Workflow */}
            <section
              id="heading-timeline-stops"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Mandatory Notice Timeline: 15-Day, 7-Day &amp; Limitation Stops
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Skipping even a single procedural stop turns a lawful bailee auction into an actionable conversion or Consumer Commission claim. Follow this 5-stage statutory rail from seasonal rent maturity through deficit-rent litigation.
              </p>

              {/* Desktop SVG Escalation Pipeline */}
              <div className="hidden md:block mb-6 bg-slate-900 rounded-2xl p-5 border border-slate-800 overflow-x-auto">
                <svg
                  width="860"
                  height="150"
                  viewBox="0 0 860 150"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="5-stage lawful cold storage auction and deficit recovery pipeline"
                  className="w-full h-auto"
                >
                  <rect x="10" y="25" width="145" height="100" rx="12" fill="#1E293B" stroke="#475569" />
                  <text x="82" y="55" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="700">STAGE 1 (DAY 0)</text>
                  <text x="82" y="76" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">Rent Default &amp;</text>
                  <text x="82" y="93" textAnchor="middle" fill="#CBD5E1" fontSize="11">s.170 Lien Attaches</text>

                  <path d="M158 75 H182" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="182,70 190,75 182,80" fill="#DC2626" />

                  <rect x="192" y="25" width="150" height="100" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="1.5" />
                  <text x="267" y="55" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="700">STAGE 2 (15 DAYS)</text>
                  <text x="267" y="76" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">RPAD Pre-Auction</text>
                  <text x="267" y="93" textAnchor="middle" fill="#CBD5E1" fontSize="11">Notice (s.176)</text>

                  <path d="M345 75 H369" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="369,70 377,75 369,80" fill="#DC2626" />

                  <rect x="379" y="25" width="145" height="100" rx="12" fill="#1E293B" stroke="#475569" />
                  <text x="451" y="55" textAnchor="middle" fill="#FBBF24" fontSize="11" fontWeight="700">STAGE 3 (7 DAYS)</text>
                  <text x="451" y="76" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">Newspaper Public</text>
                  <text x="451" y="93" textAnchor="middle" fill="#CBD5E1" fontSize="11">Auction Notice</text>

                  <path d="M527 75 H551" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="551,70 559,75 551,80" fill="#DC2626" />

                  <rect x="561" y="25" width="140" height="100" rx="12" fill="#1E293B" stroke="#475569" />
                  <text x="631" y="55" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="700">STAGE 4 (DAY 23+)</text>
                  <text x="631" y="76" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">3-Bid Panchnama</text>
                  <text x="631" y="93" textAnchor="middle" fill="#CBD5E1" fontSize="11">&amp; Video Auction</text>

                  <path d="M704 75 H728" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="728,70 736,75 728,80" fill="#DC2626" />

                  <rect x="738" y="25" width="112" height="100" rx="12" fill="#7F1D1D" stroke="#DC2626" />
                  <text x="794" y="55" textAnchor="middle" fill="#FECACA" fontSize="11" fontWeight="700">STAGE 5 (3 YRS)</text>
                  <text x="794" y="76" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">Order XXXVII</text>
                  <text x="794" y="93" textAnchor="middle" fill="#FEE2E2" fontSize="11">Deficit Suit</text>
                </svg>
              </div>

              {/* Timeline Table (also serves mobile cleanly) */}
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="p-3.5 font-semibold">Stage</th>
                      <th className="p-3.5 font-semibold">Statutory Window</th>
                      <th className="p-3.5 font-semibold">Governing Provision</th>
                      <th className="p-3.5 font-semibold">Mandatory Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {TIMELINE_STAGES.map((row, idx) => (
                      <tr key={row.stage} className={idx % 2 === 1 ? "bg-slate-50/70" : "bg-white"}>
                        <td className="p-3.5 font-bold text-slate-900">{row.stage}</td>
                        <td className="p-3.5 font-semibold text-[#DC2626]">{row.window}</td>
                        <td className="p-3.5 text-slate-700">{row.statute}</td>
                        <td className="p-3.5 text-slate-700">{row.action}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: Landmark Judicial Precedents */}
            <section
              id="heading-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Landmark Judicial Precedents Protecting Cold Storages
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Indian courts strictly separate lawful statutory auctions from arbitrary stock disposal. Rely on these four binding principles when structuring your pre-auction notices and defending Consumer Commission or civil challenges.
              </p>

              <div className="space-y-5">
                {COURT_PRECEDENTS.map((item) => (
                  <div
                    key={item.parties}
                    className="relative bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 pl-6 sm:pl-7 overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]" />
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626]">
                        {item.title}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-900 text-white">
                        {item.principle}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      {item.parties}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mb-3">
                      {item.citation}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                      <strong>Facts:</strong> {item.facts}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                      <strong>Holding:</strong> {item.holding}
                    </p>
                    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-xs text-emerald-800">
                      <strong>Creditor Takeaway:</strong> {item.takeaway}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Defense Pre-Emption Table */}
            <section
              id="heading-defense-preemption"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Pre-Empting Trader &amp; Consumer Court Defenses
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Traders who vanish during a market crash almost always reappear with identical legal excuses once chambers are cleared. Build these statutory pre-emptions into your notice and auction file before touching a single bag.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="p-3.5 font-semibold">Trader / Borrower Excuse</th>
                      <th className="p-3.5 font-semibold">Statutory Shield</th>
                      <th className="p-3.5 font-semibold">Mandatory Cold-Storage Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {DEFENSE_MATRIX.map((row, idx) => (
                      <tr key={row.defense} className={idx % 2 === 1 ? "bg-slate-50/70" : "bg-white"}>
                        <td className="p-3.5 font-semibold text-red-700">{row.defense}</td>
                        <td className="p-3.5 font-semibold text-slate-900">{row.statutoryShield}</td>
                        <td className="p-3.5 text-slate-700">{row.action}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5: Interactive Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  4 Cold-Storage Default &amp; Auction Scenarios (Interactive)
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Select your operational bottleneck below to inspect the governing statute and 3-step execution protocol.
              </p>
              <ColdStorageScenarioTabs />
            </section>

            {/* Section 6: Tripartite Bank Pledge Priority */}
            <section
              id="heading-tripartite-lien"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Bank Pledge Loans &amp; Tripartite Lien Priority
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  In Guntur chilli storages, Unjha/Deesa spice warehouses, and Agra potato chambers, traders frequently finance 60%–70% of commodity value through bank pledge loans or <strong>WDRA e-NWR (Negotiable Warehouse Receipts)</strong>. When the borrower defaults on both the bank EMI and cold-storage rent, a priority deadlock emerges.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-1.5">
                      Danger Zone: Unilateral Sale Without Bank Notice
                    </p>
                    <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                      Auctioning bank-pledged stock without notifying the pledgee bank violates the tripartite lien endorsement and exposes the cold storage to bank recovery injunctions and civil liability.
                    </p>
                  </div>
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1.5">
                      Lawful Path: Tripartite s.170 / s.176 Notice
                    </p>
                    <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                      Serve a joint 15-day Registered Notice on the Trader and the Bank Branch Manager asserting your s.170 preservation lien for electricity and rent, giving the bank 15 days to clear rent or join a supervised auction.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: Worked Deficit Ledger */}
            <section
              id="heading-deficit-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Worked Auction &amp; Deficit-Rent Recovery Ledger
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Illustration for a single defaulting trader&apos;s <strong>10,000 abandoned potato bags</strong> (part of a 50,000-bag distressed chamber) where spot prices crashed to ₹85/bag at auction:
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between py-2 border-b border-slate-800">
                  <span className="text-slate-300">1. Accrued Seasonal Storage Rent (10,000 bags &times; &#8377;120/bag)</span>
                  <span className="font-bold text-slate-100">&#8377;12,00,000</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800">
                  <span className="text-slate-300">2. Unloading, Grading &amp; Over-Season Power Surcharge (&#8377;15/bag)</span>
                  <span className="font-bold text-slate-100">&#8377;1,50,000</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-700">
                  <span className="font-semibold text-amber-300">Total Crystallized Cold-Storage Dues (A)</span>
                  <span className="font-black text-amber-300">&#8377;13,50,000</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800">
                  <span className="text-slate-300">3. Gross Public Auction Proceeds (10,000 bags &times; &#8377;85/bag)</span>
                  <span className="font-bold text-emerald-400">&#8377;8,50,000</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800">
                  <span className="text-slate-300">4. Less: Newspaper Notices, RPAD, Labour &amp; Auction Panchnama Cost</span>
                  <span className="font-bold text-red-400">- &#8377;45,000</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-700">
                  <span className="font-semibold text-emerald-300">Net Auction Realization Credited (B)</span>
                  <span className="font-black text-emerald-300">&#8377;8,05,000</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="font-bold text-white text-sm sm:text-base">
                    Recoverable Deficit Balance Under s.176 (A &minus; B)
                  </span>
                  <span className="font-black text-red-400 text-base sm:text-lg">
                    &#8377;5,45,000 + Interest
                  </span>
                </div>
              </div>
              <p className="mt-3 text-xs text-slate-500">
                Because &#8377;5,45,000 exceeds the &#8377;3,00,000 Commercial Courts Act threshold, the cold storage can sue in the Commercial Court (or file an Order XXXVII CPC Summary Suit on signed Lot Receipts) and simultaneously present any held rent security cheque under NI Act s.138.
              </p>
            </section>

            {/* Section 8: BSA 2023 s.63 Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  BSA 2023 s.63 &amp; Auction Panchnama Evidence Checklist
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm">
                {[
                  "Signed Bond / Lot Receipts showing Chamber No., Bag Count & Agreed Rent",
                  "15-Day Registered Speed Post (RPAD) Notice + India Post Delivery/Refusal Tracking",
                  "WhatsApp & Email Dispatch Logs + BSA 2023 s.63 Electronic Evidence Certificate",
                  "Original Vernacular + English Newspaper Cuttings of Public Auction Notice",
                  "Hourly SCADA Chamber Temperature & DG-Set Backup Logs (BSA s.63 Certified)",
                  "Continuous Video Recording of Open Auction + 3-Bidder Signed Panchnama",
                  "APMC Mandi Prevailing Rate Certificate on the Date of Auction",
                  "7-Day Post-Auction Final Statement of Account Served via RPAD",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2.5 bg-slate-50 border border-slate-200 rounded-xl p-3.5"
                  >
                    <span className="text-emerald-600 font-black mt-0.5">&#10003;</span>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 9: Dual-Track CTA */}
            <section
              id="heading-cta-desk"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Serve 15-Day Pre-Auction Notices or Batch Lot Drives
                </h2>
              </div>
              <ColdStorageNoticeCTA />
            </section>

            {/* Section 10: Internal Links & Cluster Network */}
            <section
              id="heading-cluster-links"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  IND-21 Agri, Cold-Storage &amp; Commercial Recovery Network
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-sm">
                <Link
                  href="/industries/agri-inputs-cold-storage-food-processing-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <span className="block font-bold text-slate-900 mb-1">
                    IND-21 Industry Hub: Agri-Inputs, Cold Storage &amp; Food Mills &rarr;
                  </span>
                  <span className="text-slate-600">
                    Complete multi-track recovery architecture for agro-dealers, cold storages, and grain mills.
                  </span>
                </Link>
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <span className="block font-bold text-slate-900 mb-1">
                    Calculator: MSME 3x RBI Compound Interest Tool &rarr;
                  </span>
                  <span className="text-slate-600">
                    Compute statutory compound interest for Udyam-registered food &amp; warehousing enterprises.
                  </span>
                </Link>
                <Link
                  href="/tools/limitation-period-calculator"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <span className="block font-bold text-slate-900 mb-1">
                    Calculator: 3-Year Deficit Suit Limitation Tracker &rarr;
                  </span>
                  <span className="text-slate-600">
                    Verify your exact Limitation Act filing deadline for post-auction rent deficits.
                  </span>
                </Link>
                <Link
                  href="/templates/legal-notice-reply-format"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <span className="block font-bold text-slate-900 mb-1">
                    Template: Commercial Legal Notice &amp; Reply Workspace &rarr;
                  </span>
                  <span className="text-slate-600">
                    Customize structured commercial demand notices and formal replies to trader allegations.
                  </span>
                </Link>
                <Link
                  href="/agrochemical-pesticide-seed-dealer-seasonal-credit-default-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <span className="block font-bold text-slate-900 mb-1">
                    Agrochemical &amp; Seed Dealer Seasonal Credit Recovery &rarr;
                  </span>
                  <span className="text-slate-600">
                    Defeat oral crop-failure excuses with Seeds/Insecticides Act lab sampling rules.
                  </span>
                </Link>
                <Link
                  href="/rice-dal-flour-sugar-edible-oil-mill-wholesale-buyer-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <span className="block font-bold text-slate-900 mb-1">
                    Rice, Dal, Flour &amp; Oil Mill Wholesale Buyer Recovery &rarr;
                  </span>
                  <span className="text-slate-600">
                    Recover outstation mandi &amp; wholesale grain ledgers without losing 1% mill margins.
                  </span>
                </Link>
                <Link
                  href="/distributor-dealer-dues-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <span className="block font-bold text-slate-900 mb-1">
                    Distributor &amp; Dealer Dues Recovery Playbook &rarr;
                  </span>
                  <span className="text-slate-600">
                    Enforce dealer agreements, reconcile running trade ledgers, and serve RPAD demands.
                  </span>
                </Link>
                <Link
                  href="/cheque-bounce-notice-timeline-section-138"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <span className="block font-bold text-slate-900 mb-1">
                    Section 138 Cheque Bounce 30+15+30 Day Timeline &rarr;
                  </span>
                  <span className="text-slate-600">
                    Enforce bounced trader rent security cheques within strict statutory deadlines.
                  </span>
                </Link>
                <Link
                  href="/hi/legal-notice-kaise-bheje"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors md:col-span-2"
                >
                  <span className="block font-bold text-slate-900 mb-1">
                    Hindi Vyapari Guide: &#2357;&#2381;&#2351;&#2366;&#2346;&#2366;&#2352;&#2368; &#2325;&#2379; &#2325;&#2366;&#2344;&#2370;&#2344;&#2368; &#2344;&#2379;&#2335;&#2367;&#2360; &#2325;&#2376;&#2360;&#2375; &#2349;&#2375;&#2332;&#2375;&#2306; (Legal Notice Kaise Bheje) &rarr;
                  </span>
                  <span className="text-slate-600">
                    Step-by-step Hindi commercial recovery guide for mandi traders and cold-storage operators.
                  </span>
                </Link>
              </div>
            </section>

            {/* Section 11: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Frequently Asked Questions: Cold Storage Lien &amp; Auction
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.question}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer list-none flex items-center justify-between gap-3">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] font-black text-lg group-open:rotate-45 transition-transform shrink-0">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 12: Primary Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  12
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Primary Statutory Bare Acts &amp; Official Portals
                </h2>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.url} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold">&bull;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides currentPath={PAGE_PATH} />
    </div>
  );
}
