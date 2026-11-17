import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import GSTRecoveryTableOfContents from "./GSTRecoveryTableOfContents";
import GSTRecoveryScenarioTabs from "./GSTRecoveryScenarioTabs";
import GSTRecoveryCTA from "./GSTRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/gst-input-tax-credit-blocked-supplier-non-filing-gstr-3b-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const PAGE_TITLE = "Supplier Collected 18% GST & Didn't File GSTR-3B? Recover ITC";
const PAGE_DESCRIPTION =
  "Under CGST s.16(2)(c), officers reverse YOUR ITC if a vendor skips GSTR-3B. Serve an immediate Legal Notice + CGST s.76 Anti-Evasion recovery intimation.";
const H1_TEXT =
  "Paid 100% Invoice + 18% GST to a Vendor Who Never Filed GSTR-1/3B—Triggering a DRC-01 Demand on You? Vendor Tax-Indemnity Recovery Guide";

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

const PRIMARY_SOURCES = [
  {
    title: "Central Goods and Services Tax Act, 2017 (Section 16(2)(c) — Conditions for Claiming Input Tax Credit)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Central Goods and Services Tax Act, 2017 (Section 76 — Tax Collected but not Paid to Government)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Central Goods and Services Tax Rules, 2017 (Rule 37A — Reversal of ITC for Supplier Non-Payment of Tax)",
    url: "https://cbic-gst.gov.in/rules.html",
  },
  {
    title: "Central Goods and Services Tax Act, 2017 (Sections 50(3), 122(1)(iv) & 132(1)(d) — Penal Interest & Prosecution)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Indian Contract Act, 1872 (Sections 124, 125 & 73 — Contract of Indemnity & Breach Damages)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records & GSTR-2B Audit Admissibility)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Calcutta High Court Division Bench Milestone Affirmed by Supreme Court",
    parties: "Suncraft Energy Pvt. Ltd. & Anr. v. Assistant Commissioner of State Tax",
    citation: "MAT 1218 of 2023 (Cal HC) / Affirmed in SLP (C) No. 27827/2023 (Supreme Court)",
    date: "Calcutta High Court Division Bench Judgment (2023)",
    facts:
      "A bona fide purchasing dealer purchased goods against valid tax invoices and paid the full consideration along with GST via banking channels. The supplier uploaded the invoices in GSTR-1, but failed to deposit the corresponding tax in GSTR-3B. The GST department issued a DRC-07 demand directly on the buyer reversing the ITC without initiating any recovery against the supplier.",
    holding:
      "The Division Bench held that the GST department cannot mechanically reverse input tax credit from a bona fide buyer under Section 16(2)(c) without first conducting an inquiry and exhausting all recovery proceedings against the defaulting supplier. The department must first invoke Section 73/74 against the seller who collected the tax. Only in exceptional cases of collusion or seller abscondence can recovery shift to the purchaser.",
    impact:
      "Gives corporate buyers an ironclad statutory shield to challenge mechanical DRC-01 notices and compel the GST department to direct its recovery machinery against the defaulting vendor.",
  },
  {
    title: "Madras High Court Ruling on Department Duty to Proceed Against Seller First",
    parties: "D.Y. Beathel Enterprises v. State Tax Officer",
    citation: "(2021) 86 GSTR 400 (Mad HC) / W.P.(MD) Nos. 2127 of 2021",
    date: "Madras High Court Single Bench Judgment (2021)",
    facts:
      "The petitioner purchased raw rubber from suppliers and paid the entire invoice amount including GST by cheque. The suppliers failed to remit the tax to the government exchequer. The department disallowed the buyer's ITC without summoning or questioning the suppliers, despite having their active GSTIN details.",
    holding:
      "The Madras High Court quashed the demand orders against the buyer, holding that when the buyer has paid the tax to the seller, the primary omission is on the seller's part. The proper officer must examine the seller and take recovery steps against them under Section 76 before penalizing the bona fide purchaser.",
    impact:
      "Establishes that GST officers commit a jurisdictional error if they ignore the defaulting supplier and seek shortcut recoveries from solvent corporate buyers.",
  },
  {
    title: "Supreme Court Landmark on Burden of Proof for Bona Fide Purchasing Dealers",
    parties: "State of Karnataka v. M/s Ecom Gill Coffee Trading Pvt. Ltd.",
    citation: "2023 SCC OnLine SC 248 / Civil Appeal No. 230 of 2023",
    date: "Supreme Court of India Three-Judge Bench Judgment (2023)",
    facts:
      "Dealers claimed input tax credit on purchases from upstream sellers who subsequently defaulted on tax payment or turned out to be fictitious entities. The revenue disallowed ITC, arguing that merely producing tax invoices is insufficient under tax statutes.",
    holding:
      "The Supreme Court held that the burden of proving genuine purchase and tax eligibility lies squarely on the purchasing dealer under Section 155. To successfully claim ITC and resist reversal, the buyer must furnish proof of actual physical movement of goods (e-way bills, toll receipts, weighbridge slips), valid payment proof via banking channels, and delivery confirmation notes.",
    impact:
      "Highlights why corporate procurement heads must pair their legal demand notice with an ironclad BSA Section 63 digital evidentiary dossier establishing physical movement of goods.",
  },
  {
    title: "Patna High Court on Unilateral Freezing of Buyer Ledgers for Vendor Default",
    parties: "M/s Sahil Enterprises v. State of Bihar & Ors.",
    citation: "CWJC No. 7096 of 2021 (Patna HC)",
    date: "Patna High Court Division Bench Judgment",
    facts:
      "The GST department blocked the input tax credit of a purchasing dealer under Rule 86A because the supplier from whom the goods were sourced failed to file GSTR-3B returns and had their GSTIN cancelled retrospectively.",
    holding:
      "The High Court held that Rule 86A cannot be invoked mechanically without recording objective 'reasons to believe' in writing. Disallowance of ITC cannot be automatic where the purchasing dealer acted in good faith with active registration at the time of invoice issuance.",
    impact:
      "Enables buyers to unfreeze Electronic Credit Ledgers blocked under Rule 86A during vendor non-compliance investigations.",
  },
];

const FAQS = [
  {
    question: "Why does the GST Department demand tax from me if my vendor failed to file GSTR-3B?",
    answer:
      "Under Section 16(2)(c) of the CGST Act, 2017, claiming Input Tax Credit (ITC) is legally conditional upon the tax charged by the supplier having been actually deposited with the Government exchequer. When your supplier collects 18% GST on an invoice but fails to file GSTR-3B, the GST Portal flags a mismatch between your auto-populated GSTR-2B and the supplier's tax remittances. Under Rule 37A, the system requires the buyer to reverse the ITC with 18% interest under Section 50. However, under landmark High Court rulings like Suncraft Energy (Calcutta HC, affirmed by the Supreme Court) and D.Y. Beathel (Madras HC), the department cannot recover from a bona fide buyer without first exhausting recovery against the defaulting seller.",
  },
  {
    question: "How does CGST Section 76 help in recovering money from a defaulting vendor?",
    answer:
      "Section 76 of the CGST Act is a powerful coercive statutory weapon. It mandates that any person who has collected tax from another person must immediately deposit the amount to the Central Government, irrespective of whether the supplies were taxable. Failure to deposit tax collected triggers immediate recovery proceedings under Section 79, a mandatory penalty equal to the tax under Section 122(1)(iv), and if the un-deposited tax exceeds ₹2 Crore, criminal prosecution with up to 5 years rigorous imprisonment under Section 132(1)(d). Highlighting Section 76 in an Advocate Legal Notice exposes the vendor's directors to severe penal and criminal liabilities, compelling immediate return filing or cash reimbursement.",
  },
  {
    question: "What is Rule 37A and what is the deadline for reversing blocked ITC?",
    answer:
      "Rule 37A of the CGST Rules, inserted in December 2022, governs the reversal of ITC where the supplier has filed GSTR-1 (so the invoice appears in GSTR-2B) but has not furnished GSTR-3B by the 30th day of September following the end of the financial year. The recipient must reverse such ITC on or before the 30th day of November following the end of that financial year. If reversed within this window, no interest is payable. If reversed after November 30th, the buyer must pay the reversed ITC along with 18% penal interest under Section 50(3). If the vendor subsequently files GSTR-3B and pays the tax, Rule 37A allows the buyer to re-avail the reversed credit.",
  },
  {
    question: "Can I recover the reversed GST, 18% interest, and penalties from the supplier through civil court?",
    answer:
      "Yes. Under Section 73 of the Indian Contract Act, 1872, you are entitled to full compensation for any direct financial loss resulting from a contractual breach. Furthermore, under Sections 124 and 125, if your purchase order or master services agreement contains a Tax Indemnity Clause, the supplier is legally bound to indemnify you against all taxes, interest, penalties, and advocate costs incurred due to their non-compliance. You can file a Commercial Court Summary Suit under Order XXXVII CPC or initiate arbitration to recover the liquidated damages with 18% commercial interest.",
  },
  {
    question: "What should I do immediately after receiving a DRC-01 or DRC-01A SCN for supplier default?",
    answer:
      "Execute a simultaneous two-track defense. First, file a formal response to the GST adjudicating officer within 30 days citing Suncraft Energy Pvt. Ltd. (Calcutta HC / SC) and D.Y. Beathel (Madras HC), stating that you are a bona fide purchaser who paid 100% consideration including GST via banking channels, and request the department to summon and recover from the supplier under Section 76/79 first. Second, dispatch a High Court Advocate Demand Notice to the supplier demanding proof of GSTR-3B filing within 7 days or immediate cash indemnification for the demanded tax, interest, and penalty amounts.",
  },
  {
    question: "What evidence is required to prove that I am a bona fide purchaser under Section 155?",
    answer:
      "As established by the Supreme Court in State of Karnataka v. Ecom Gill Coffee Trading Pvt. Ltd. (2023), producing tax invoices alone is insufficient. You must assemble an exhaustive digital evidentiary dossier under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA): (1) Original tax invoice quoting valid GSTINs; (2) Bank statements proving RTGS/NEFT payment of invoice value + GST; (3) Valid E-Way Bills matched with vehicle registration; (4) Weighbridge receipts and toll plaza FASTag logs; (5) Signed Goods Receipt Notes (GRN) from your warehouse; and (6) Portal screenshots showing active GSTIN status at the date of supply.",
  },
  {
    question: "What happens if the defaulting vendor's GSTIN has been cancelled retrospectively?",
    answer:
      "Retrospective cancellation of a vendor's registration is a common ground for arbitrary department disallowance. However, the High Courts of Delhi, Madras, and Calcutta have repeatedly held that retrospective cancellation cannot prejudice a bona fide recipient who verified the vendor's active registration on the GST Portal at the time of purchase and received physical delivery. You must submit the historical GST portal verification log and transport proof to defeat the department's Section 74 fraud allegations.",
  },
  {
    question: "How does LegalRecovery handle high-volume vendor GSTR-2B mismatches for enterprises?",
    answer:
      "LegalRecovery provides a dedicated Institutional B2B Tax-Indemnity Desk for enterprise CFOs, FMCG manufacturers, modern retail chains, and EPC contractors. Through our Bulk CSV Desk, corporate tax teams upload defaulting vendor ledgers containing GSTINs, missing invoice numbers, and tax exposure. We automate the dispatch of customized High Court advocate demand notices across India via Speed Post RPAD and certified email, coordinate Section 76 DGGI Anti-Evasion complaints, and institute commercial recovery suits.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: H1_TEXT,
  description: PAGE_DESCRIPTION,
  datePublished: "2026-11-16T10:00:00+05:30",
  dateModified: "2026-11-16T10:00:00+05:30",
  mainEntityOfPage: CANONICAL_URL,
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
    name: "Recovery of Blocked GST Input Tax Credit and Vendor Tax Indemnity Enforcement",
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
      name: "Industries",
      item: `${SITE_URL}/industries`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "FMCG, Consumer Durables & Super-Stockists Recovery",
      item: `${SITE_URL}/industries/fmcg-distributors-super-stockist-recovery`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Blocked GST ITC Vendor Recovery Guide",
      item: CANONICAL_URL,
    },
  ],
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Corporate Buyers Recover Blocked GST ITC & Enforce Vendor Tax Indemnity",
  description:
    "A 5-step operational and statutory SOP for corporate CFOs and procurement heads to recover blocked input tax credit, reverse DRC-01 audit demands, and compel defaulting suppliers to deposit tax under CGST Section 76.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit GSTR-2B vs GSTR-3B Ledger Mismatches",
      text: "Reconcile purchase register ledgers against auto-populated GSTR-2B statements to isolate defaulting supplier GSTINs and quantify blocked ITC.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Collate Physical Goods & Payment Trail Under BSA §63",
      text: "Compile certified copies of tax invoices, bank RTGS transaction receipts, e-way bills, toll plaza logs, and warehouse GRNs proving bona fide purchase.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Serve 7-Day High Court Advocate Statutory Tax-Indemnity Notice",
      text: "Issue a formal demand notice invoking CGST Section 76, Section 122, Section 132(1)(d), and Contract Act Section 124 demanding immediate tax deposit or reimbursement.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Submit Protective Section 16(2)(c) Objection to GST Officer",
      text: "File a formal written reply to DRC-01/DRC-01A citing Suncraft Energy (Calcutta HC/SC) demanding that the department proceed against the seller first.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Execute Commercial Summary Suit or DGGI Anti-Evasion Complaint",
      text: "Institute an Order XXXVII CPC summary recovery suit for liquidated damages or file a formal complaint with the DGGI for criminal tax fraud.",
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

export default function BlockedGstItcVendorRecoveryPage() {
  const breadcrumbItems = [
    { label: "Industries", href: "/industries" },
    {
      label: "FMCG, Consumer Durables & Super-Stockists Recovery",
      href: "/industries/fmcg-distributors-super-stockist-recovery",
    },
    {
      label: "Blocked GST ITC Vendor Recovery",
      href: PAGE_URL,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Structured Data Schemas */}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>CGST Act § 76 Mandatory Deposit &bull; S.16(2)(c) Buyer Shield &bull; Contract Act § 124 Indemnity</span>
          </div>

          {/* Page H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {H1_TEXT}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer &bull; CFO Statutory Shield
            </span>
            When a supplier collects 100% invoice value plus 18% GST and fails to deposit the tax via GSTR-3B, buyers face severe DRC-01 audit demands reversing their Input Tax Credit with 18% interest under Section 50. Under the Supreme Court-affirmed doctrine in <em>Suncraft Energy</em>, GST officers cannot extract tax from bona fide purchasers before exhausting recovery against the seller. Through our{" "}
            <Link
              href="/industries/fmcg-distributors-super-stockist-recovery"
              className="text-red-400 font-bold underline hover:text-red-300"
            >
              FMCG, Consumer Durables &amp; Super-Stockist Recovery Hub
            </Link>
            , corporate buyers can serve an Advocate Demand Notice warning of CGST Section 76 mandatory tax deposit, Section 122 100% penalties, and Section 132(1)(d) criminal prosecution to compel immediate GSTR-3B filing or complete cash indemnification.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <p className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">
                Section 16(2)(c) Trap
              </p>
              <p className="text-lg sm:text-2xl font-black text-slate-100 mt-1">
                ITC Reversal
              </p>
              <p className="text-[10px] text-slate-400 mt-0.5">Disallowed if seller defaults</p>
            </div>

            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <p className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">
                Suncraft Precedent Shield
              </p>
              <p className="text-lg sm:text-2xl font-black text-emerald-400 mt-1">
                Seller 1st
              </p>
              <p className="text-[10px] text-emerald-300 mt-0.5">SC Affirmed Calcutta HC MAT 1218</p>
            </div>

            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <p className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">
                Penal Interest Rate
              </p>
              <p className="text-lg sm:text-2xl font-black text-amber-400 mt-1">
                18% / Year
              </p>
              <p className="text-[10px] text-amber-300 mt-0.5">CGST Act § 50(3) on reversed ITC</p>
            </div>

            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <p className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">
                Section 76 Penal Threat
              </p>
              <p className="text-lg sm:text-2xl font-black text-red-400 mt-1">
                5 Yrs Jail
              </p>
              <p className="text-[10px] text-red-300 mt-0.5">CGST § 132(1)(d) Cognizable Offense</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <GSTRecoveryTableOfContents />

          {/* Right Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: The CFO Nightmare */}
            <section
              id="heading-cfo-nightmare"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black">
                  01
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  The Universal CFO Nightmare: Paid 100% Invoice + 18% GST, but SCN Hits 2 Years Later
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  Across manufacturing, FMCG distribution, consumer electronics, and EPC contracting in India, corporate Chief Financial Officers and tax directors confront an acute working-capital crisis. A business procures capital machinery, raw materials, or fast-moving consumer goods worth ₹1,00,00,000, paying the vendor ₹1,18,00,000 via RTGS—strictly inclusive of 18% Goods and Services Tax (₹18,00,000). The transaction satisfies every commercial test: goods are received at the factory gate, supported by valid weighbridge tickets, E-Way bills, and signed Goods Receipt Notes (GRN).
                </p>
                <p>
                  Twenty-four months later, during a routine departmental audit or scrutiny under Section 61, the jurisdictional GST officer issues a Show Cause Notice under Form DRC-01 or Form DRC-01A. The allegation is devastating: while the buyer validly claimed ₹18,00,000 in Input Tax Credit (ITC) in their monthly GSTR-3B, the supplier either failed to file their GSTR-3B return, defaulted on paying cash tax under Challan PMT-06, or had their GSTIN retrospectively cancelled by tax authorities.
                </p>
                <div className="bg-red-50 border-l-4 border-[#DC2626] p-4 rounded-r-xl my-4 text-xs sm:text-sm text-slate-800">
                  <p className="font-bold text-[#DC2626] mb-1">
                    The Commercial Double-Taxation Trap:
                  </p>
                  The buyer has already parted with ₹18 Lakhs in liquid cash to the supplier. If the buyer pays the department's demand under protest, they suffer an effective 36% tax outflow on the same transaction plus mandatory 18% annual interest under Section 50(3) and Section 122 penalty. Defaulting suppliers use the buyer's GST payments as an unauthorized working capital loan, leaving the buyer holding the financial liability.
                </div>
                <p>
                  Businesses do not have to absorb this unearned liability. By coupling defensive tax representations under the Calcutta High Court <em>Suncraft Energy</em> doctrine with high-voltage Advocate Demand Notices under CGST Act Section 76 and the Indian Contract Act, institutional buyers can halt coercive tax recovery and force defaulting vendors to regularize their tax filings immediately.
                </p>
              </div>
            </section>

            {/* Section 2: Statutory Asymmetry */}
            <section
              id="heading-section-16-vs-76"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black">
                  02
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Statutory Asymmetry: Why CGST s.16(2)(c) Punishes the Buyer While s.76 Arms You Against the Seller
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  To dismantle a vendor's default, corporate legal teams must master the dual statutory axes of the Central Goods and Services Tax Act, 2017:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="rounded-xl border border-red-200 bg-red-50/50 p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
                      <h3 className="text-sm font-black uppercase text-red-950">
                        The Buyer's Vulnerability: Section 16(2)(c) &amp; Rule 37A
                      </h3>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed mb-3">
                      Section 16(2)(c) establishes that no registered person shall be entitled to the credit of any input tax unless the tax charged in respect of such supply has been <em>actually paid to the Government</em>, either in cash or through utilization of admissible ITC.
                    </p>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Under Rule 37A, if a supplier includes an invoice in GSTR-1 but fails to file GSTR-3B by September 30th following the end of the financial year, the buyer must reverse the credit by November 30th. Failure to do so triggers 18% annual interest under Section 50(3).
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                      <h3 className="text-sm font-black uppercase text-emerald-950">
                        The Buyer's Statutory Sword: Section 76 &amp; Section 132
                      </h3>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed mb-3">
                      Section 76(1) mandates: <em>&ldquo;Notwithstanding anything to the contrary contained in any order or direction of any Appellate Authority or Appellate Tribunal or court or in any other provisions of this Act... every person who has collected from any other person any amount as representing tax under this Act, and has not paid the said amount to the Government, shall forthwith pay the said amount to the Government.&rdquo;</em>
                    </p>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Collecting GST and pocketing it triggers an automatic 100% penalty under Section 122(1)(iv). If the withheld tax exceeds ₹200 Lakhs, Section 132(1)(d) makes it a cognizable and non-bailable criminal offense punishable with up to 5 years imprisonment.
                    </p>
                  </div>
                </div>

                <p>
                  Defaulting suppliers assume buyers are helpless victims who must quietly settle DRC-01 notices. However, serving an Advocate Legal Notice citing Section 76 shifts the entire regulatory pressure onto the supplier. The vendor faces direct tax attachment, loss of GST registration, director liability under Section 89, and criminal prosecution by the Directorate General of GST Intelligence (DGGI).
                </p>
              </div>
            </section>

            {/* Section 3: High Court Jurisprudence */}
            <section
              id="heading-suncraft-doctrine"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black">
                  03
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  High Court Shield: Suncraft Energy, D.Y. Beathel &amp; How to Rebut DRC-01 Demands
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  When tax officers issue Form DRC-01 or DRC-01A demanding ITC reversal, they routinely bypass the defaulting supplier and target the solvent corporate purchaser because it is easier to extract funds from an operating corporate bank account. This practice has been declared unlawful by multiple High Courts across India:
                </p>

                <div className="space-y-4 my-6">
                  <div className="border border-slate-200 rounded-xl p-5 bg-slate-50">
                    <h3 className="text-sm font-black text-slate-900 mb-1">
                      1. Calcutta High Court Division Bench in <em>Suncraft Energy Pvt. Ltd.</em> (Affirmed by Supreme Court)
                    </h3>
                    <p className="text-xs text-slate-600 mb-2">
                      MAT 1218 of 2023 | SLP (C) No. 27827/2023 Dismissed by the Supreme Court of India
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      The Calcutta High Court held that the department cannot take coercive action or issue recovery notices against a bona fide purchasing dealer under Section 16(2)(c) without first initiating proceedings against the defaulting supplier who collected the tax. The High Court ruled that only when the supplier is genuinely absconding, wound up, or where there is proven collusion between buyer and seller, can the department look to the purchaser. On December 14, 2023, the Supreme Court of India dismissed the Revenue's Special Leave Petition, making this principle authoritative nationwide.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-5 bg-slate-50">
                    <h3 className="text-sm font-black text-slate-900 mb-1">
                      2. Madras High Court in <em>D.Y. Beathel Enterprises v. State Tax Officer</em>
                    </h3>
                    <p className="text-xs text-slate-600 mb-2">
                      (2021) 86 GSTR 400 (Mad HC) / W.P.(MD) Nos. 2127 of 2021
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      The Madras High Court quashed DRC-07 demand orders where the GST department failed to summon or examine the defaulting suppliers. The Court ruled that when the purchasing dealer paid 100% of the invoice consideration including GST via banking channels, the omission of non-payment lies exclusively with the seller. The proper officer must exhaust statutory recovery under Section 73/74/76 against the seller before penalizing the purchaser.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-5 bg-slate-50">
                    <h3 className="text-sm font-black text-slate-900 mb-1">
                      3. Supreme Court Standard in <em>Ecom Gill Coffee Trading Pvt. Ltd.</em>
                    </h3>
                    <p className="text-xs text-slate-600 mb-2">
                      2023 SCC OnLine SC 248 (Supreme Court Three-Judge Bench)
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      The Supreme Court clarified that under Section 155, the burden of proving that input tax credit is genuinely admissible rests on the purchaser. While invoices and GSTR-2B reflections are prerequisites, the buyer must substantiate physical movement of goods through secondary commercial records: E-Way Bills, toll plaza FASTag tracking, weighbridge receipts, and warehouse inward registers.
                    </p>
                  </div>
                </div>

                <p>
                  When your legal counsel files a detailed reply to DRC-01 citing these precedents while presenting a certified Section 155 physical delivery dossier, the adjudicating authority is legally obligated to stay coercive recovery against you and issue statutory summons to the defaulting vendor.
                </p>
              </div>
            </section>

            {/* Section 4: Operational 5-Stage Recovery Rail */}
            <section
              id="heading-5-stage-rail"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black">
                  04
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  The 5-Stage Vendor Tax-Indemnity Recovery SOP: From GSTR-2B Audit to Advocate Notice
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  LegalRecovery deploys a structured, 5-stage institutional playbook for finance heads to recover blocked tax credits and indemnify their balance sheets:
                </p>

                <div className="space-y-4 my-6">
                  {/* Step 1 */}
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      01
                    </div>
                    <div>
                      <h3 className="text-sm font-black text-slate-900 mb-1">
                        Stage 1: Automated GSTR-2B Reconciliation &amp; Vendor Ledger Freezes
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Export monthly GSTR-2B auto-populated credit files and cross-match against ERP purchase registers. Identify all invoices where the vendor uploaded GSTR-1 but whose GSTR-3B status displays &ldquo;No&rdquo;. Immediately place an administrative hold on any pending retention money, pending invoices, or security deposits payable to that vendor.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      02
                    </div>
                    <div>
                      <h3 className="text-sm font-black text-slate-900 mb-1">
                        Stage 2: Assemble BSA 2023 §63 Physical Evidence Dossier
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Collate certified electronic records: tax invoices, bank statements showing 100% RTGS remittance including GST, Part-A/Part-B E-Way bills, weighbridge slips, and warehouse Goods Receipt Notes (GRN). Affix Section 63 Bharatiya Sakshya Adhiniyam digital certificates to satisfy Supreme Court Section 155 burden of proof requirements.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      03
                    </div>
                    <div>
                      <h3 className="text-sm font-black text-slate-900 mb-1">
                        Stage 3: Dispatch High Court Advocate Tax-Indemnity Demand Notice
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Serve a formal 7-day Advocate Demand Notice on the vendor's registered office and personal addresses of its directors. Demand: (a) Filing of pending GSTR-3B and Challan PMT-06 proof within 7 days, or (b) Immediate refund of the 18% tax component plus 18% statutory interest under CGST Section 50. Warn of Section 76 DGGI complaints and Section 132(1)(d) criminal prosecution.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      04
                    </div>
                    <div>
                      <h3 className="text-sm font-black text-slate-900 mb-1">
                        Stage 4: File Suncraft Protective Representation to Adjudicating Officer
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Submit a formal objection to Form DRC-01/DRC-01A before the GST Assessing Officer. Append the BSA Section 63 delivery dossier and the dispatched Advocate Legal Notice, invoking Calcutta High Court's <em>Suncraft Energy</em> and Madras High Court's <em>D.Y. Beathel</em> to compel the department to initiate third-party recovery under Section 79 against the seller.
                      </p>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      05
                    </div>
                    <div>
                      <h3 className="text-sm font-black text-slate-900 mb-1">
                        Stage 5: Enforce Commercial Summary Suit or Section 76 Anti-Evasion Dossier
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        If the vendor fails to regularize returns within 7 days, institute a Summary Suit under Order XXXVII CPC or invoke arbitration for liquidated damages under Contract Act Section 124. Simultaneously submit a formal Anti-Evasion complaint under CGST Section 76/132 to the DGGI and jurisdictional Commissioner of GST.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: Decision Tree Flowchart */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black">
                  05
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Decision Tree Flowchart: Action Matrix for Defaulting GST Suppliers
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Follow this operational decision framework based on the vendor's return status, company operational health, and departmental notice stage:
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block w-full overflow-x-auto bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-inner mb-6">
                <svg
                  viewBox="0 0 880 440"
                  className="w-full h-auto text-slate-100 font-sans"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="880"
                  height="440"
                >
                  {/* Top Level: Start */}
                  <rect x="320" y="20" width="240" height="50" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                  <text x="440" y="50" textAnchor="middle" fill="#F8FAFC" fontSize="13" fontWeight="bold">
                    Vendor Fails to File GSTR-3B
                  </text>

                  {/* Branches */}
                  <path d="M440 70 L440 100 L180 100 L180 130" stroke="#94A3B8" strokeWidth="2" />
                  <path d="M440 70 L440 130" stroke="#94A3B8" strokeWidth="2" />
                  <path d="M440 70 L440 100 L700 100 L700 130" stroke="#94A3B8" strokeWidth="2" />

                  {/* Condition 1: Active Vendor */}
                  <rect x="70" y="130" width="220" height="60" rx="10" fill="#0F172A" stroke="#DC2626" strokeWidth="2" />
                  <text x="180" y="155" textAnchor="middle" fill="#F87171" fontSize="12" fontWeight="bold">
                    Scenario A: Active Entity
                  </text>
                  <text x="180" y="175" textAnchor="middle" fill="#CBD5E1" fontSize="11">
                    GSTR-1 Filed, GSTR-3B Pending
                  </text>

                  {/* Condition 2: Cancelled GSTIN */}
                  <rect x="330" y="130" width="220" height="60" rx="10" fill="#0F172A" stroke="#F59E0B" strokeWidth="2" />
                  <text x="440" y="155" textAnchor="middle" fill="#FBBF24" fontSize="12" fontWeight="bold">
                    Scenario B: Cancelled GSTIN
                  </text>
                  <text x="440" y="175" textAnchor="middle" fill="#CBD5E1" fontSize="11">
                    Retrospective Cancellation SCN
                  </text>

                  {/* Condition 3: Closed / Dissolved */}
                  <rect x="590" y="130" width="220" height="60" rx="10" fill="#0F172A" stroke="#64748B" strokeWidth="2" />
                  <text x="700" y="155" textAnchor="middle" fill="#94A3B8" fontSize="12" fontWeight="bold">
                    Scenario C: Dissolved / Struck Off
                  </text>
                  <text x="700" y="175" textAnchor="middle" fill="#CBD5E1" fontSize="11">
                    Promoters Absconding / Shell Co
                  </text>

                  {/* Downward Connectors */}
                  <path d="M180 190 L180 230" stroke="#94A3B8" strokeWidth="2" />
                  <path d="M440 190 L440 230" stroke="#94A3B8" strokeWidth="2" />
                  <path d="M700 190 L700 230" stroke="#94A3B8" strokeWidth="2" />

                  {/* Action 1 */}
                  <rect x="70" y="230" width="220" height="80" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <text x="180" y="255" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">
                    7-Day Advocate Notice
                  </text>
                  <text x="180" y="275" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    CGST §76 + 18% Interest §50
                  </text>
                  <text x="180" y="295" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    Threat of DGGI Anti-Evasion
                  </text>

                  {/* Action 2 */}
                  <rect x="330" y="230" width="220" height="80" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <text x="440" y="255" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">
                    Suncraft Defense + Indemnity
                  </text>
                  <text x="440" y="275" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    BSA §63 Delivery Dossier
                  </text>
                  <text x="440" y="295" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    Contract Act §124 Indemnity
                  </text>

                  {/* Action 3 */}
                  <rect x="590" y="230" width="220" height="80" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <text x="700" y="255" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">
                    CGST §89 Director Liability
                  </text>
                  <text x="700" y="275" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    BNS §316 Criminal Breach of Trust
                  </text>
                  <text x="700" y="295" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    Order 37 Personal Asset Freeze
                  </text>

                  {/* Final Resolution Bar */}
                  <path d="M180 310 L180 350 L440 350" stroke="#10B981" strokeWidth="2" />
                  <path d="M440 310 L440 350" stroke="#10B981" strokeWidth="2" />
                  <path d="M700 310 L700 350 L440 350" stroke="#10B981" strokeWidth="2" />
                  <path d="M440 350 L440 380" stroke="#10B981" strokeWidth="2" />

                  <rect x="290" y="380" width="300" height="45" rx="10" fill="#064E3B" stroke="#10B981" strokeWidth="2" />
                  <text x="440" y="408" textAnchor="middle" fill="#A7F3D0" fontSize="12" fontWeight="bold">
                    GSTR-3B Filed OR 100% Tax + Interest Refunded
                  </text>
                </svg>
              </div>

              {/* Mobile Decision Cards */}
              <div className="md:hidden space-y-3 mb-6">
                <div className="p-4 rounded-xl bg-slate-900 text-white border border-red-800/60">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">
                    Track A &bull; Active Supplier Default
                  </span>
                  <p className="text-sm font-bold mt-1 text-slate-100">
                    Supplier active on portal, invoice in GSTR-1, GSTR-3B unpaid
                  </p>
                  <p className="text-xs text-slate-300 mt-2">
                    <strong>Action:</strong> Serve 7-day Advocate Notice citing CGST s.76, s.50(3) 18% interest, and DGGI Section 132 prosecution. Holds pending supplier invoices.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 text-white border border-amber-800/60">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                    Track B &bull; Retrospectively Cancelled GSTIN
                  </span>
                  <p className="text-sm font-bold mt-1 text-slate-100">
                    Department cancels supplier registration after legitimate purchase
                  </p>
                  <p className="text-xs text-slate-300 mt-2">
                    <strong>Action:</strong> Rebut DRC-01 using <em>Suncraft Energy</em> and <em>D.Y. Beathel</em>. Submit BSA s.63 electronic e-way bill dossier proving bona fide physical delivery.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-700">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Track C &bull; Closed or Struck-Off Company
                  </span>
                  <p className="text-sm font-bold mt-1 text-slate-100">
                    Promoters abandoned entity or dissolved company
                  </p>
                  <p className="text-xs text-slate-300 mt-2">
                    <strong>Action:</strong> Pierce corporate veil via CGST Act Section 89 (personal liability of directors). File BNS Section 316 criminal complaint and commercial summary suit.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Dark-Header Statutory Matrix Table */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black">
                  06
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Dark-Header Statutory Matrix: Penalties, Interest &amp; Prosecution Against Defaulting Vendors
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Compare statutory provisions governing supplier tax default, buyer defense, and civil indemnity recovery:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-900 text-white uppercase text-[10px] sm:text-xs tracking-wider">
                    <tr>
                      <th className="py-3.5 px-4 font-bold">Statutory Section</th>
                      <th className="py-3.5 px-4 font-bold">Target Counterparty</th>
                      <th className="py-3.5 px-4 font-bold">Legal Mechanism &amp; Penalty Hook</th>
                      <th className="py-3.5 px-4 font-bold">Recovery Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        CGST Act § 76
                      </td>
                      <td className="py-3.5 px-4 text-red-600 font-semibold">
                        Defaulting Supplier
                      </td>
                      <td className="py-3.5 px-4">
                        Mandatory deposit of tax collected from buyer. Officers empowered to attach bank accounts under s.79 without limitation bar.
                      </td>
                      <td className="py-3.5 px-4 font-medium">Immediate / Direct Recovery</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        CGST Act § 16(2)(c) &amp; Rule 37A
                      </td>
                      <td className="py-3.5 px-4 text-amber-600 font-semibold">
                        Bona Fide Buyer
                      </td>
                      <td className="py-3.5 px-4">
                        Reversal of ITC if supplier fails to file GSTR-3B. Must be challenged via <em>Suncraft Energy</em> precedent before paying.
                      </td>
                      <td className="py-3.5 px-4 font-medium">Nov 30 post-FY end</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        CGST Act § 50(3)
                      </td>
                      <td className="py-3.5 px-4 text-slate-900 font-semibold">
                        Both Parties
                      </td>
                      <td className="py-3.5 px-4">
                        Mandatory 18% per annum penal interest on reversed or un-deposited input tax credit from the due date of return.
                      </td>
                      <td className="py-3.5 px-4 font-medium">Calculated day-to-day</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        CGST Act § 122(1)(iv)
                      </td>
                      <td className="py-3.5 px-4 text-red-600 font-semibold">
                        Defaulting Supplier
                      </td>
                      <td className="py-3.5 px-4">
                        Penalty equal to 100% of the tax collected but not deposited beyond 3 months from the date on which payment becomes due.
                      </td>
                      <td className="py-3.5 px-4 font-medium">3 months grace expiry</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        CGST Act § 132(1)(d)
                      </td>
                      <td className="py-3.5 px-4 text-red-700 font-bold">
                        Promoters &amp; Directors
                      </td>
                      <td className="py-3.5 px-4">
                        Collecting GST &gt; ₹2 Cr without paying to govt within 3 months is a cognizable criminal offense (3 to 5 years imprisonment).
                      </td>
                      <td className="py-3.5 px-4 font-medium">DGGI Criminal SCN</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Contract Act § 124 &amp; 125
                      </td>
                      <td className="py-3.5 px-4 text-emerald-600 font-semibold">
                        Defaulting Supplier
                      </td>
                      <td className="py-3.5 px-4">
                        Enforcement of contractual Tax Indemnity Clause in Commercial Court Summary Suit (Order 37 CPC) for all losses + fees.
                      </td>
                      <td className="py-3.5 px-4 font-medium">3 years limitation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 7: Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black">
                  07
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Commercial Default Modes: Interactive Tactical Playbooks by Failure Scenario
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Select a commercial vendor default mode below to inspect the factual context, statutory trap, and advocate recovery playbook:
              </p>

              <GSTRecoveryScenarioTabs />
            </section>

            {/* Section 8: Worked Financial Recovery Ledger */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black">
                  08
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Worked Financial Recovery Ledger: Tax, 18% Interest &amp; Consequential Loss Breakdown
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  When drafting a Tax Indemnity Legal Notice or Commercial Court claim under Section 73 of the Indian Contract Act, corporate claimants must avoid claiming merely the principal tax amount. The claim must reflect the complete consequential financial exposure inflicted by the vendor's default:
                </p>

                {/* Ledger Box */}
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl border border-slate-800 my-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-800">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      Illustrative Corporate Claim Ledger &bull; ₹1 Cr Invoice Base
                    </span>
                    <span className="text-xs text-slate-400">
                      Default Duration: 24 Months
                    </span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="flex justify-between py-2 border-b border-slate-800/60">
                      <span className="text-slate-300">Principal Invoice Base (Excluding Tax)</span>
                      <span className="font-mono font-semibold text-slate-100">₹1,00,00,000</span>
                    </div>

                    <div className="flex justify-between py-2 border-b border-slate-800/60">
                      <span className="text-slate-300">18% GST Paid to Supplier via RTGS</span>
                      <span className="font-mono font-semibold text-red-400">₹18,00,000</span>
                    </div>

                    <div className="flex justify-between py-2 border-b border-slate-800/60">
                      <div>
                        <span className="text-slate-300">CGST § 50(3) Mandatory Penal Interest (18% p.a. for 24 Months)</span>
                        <span className="block text-[11px] text-slate-500">₹18,00,000 &times; 18% &times; 2 years</span>
                      </div>
                      <span className="font-mono font-semibold text-amber-400">₹6,48,000</span>
                    </div>

                    <div className="flex justify-between py-2 border-b border-slate-800/60">
                      <div>
                        <span className="text-slate-300">CGST § 122(1) Disallowance Penalty Imposed under DRC-07</span>
                        <span className="block text-[11px] text-slate-500">10% of tax demanded by audit wing</span>
                      </div>
                      <span className="font-mono font-semibold text-amber-400">₹1,80,000</span>
                    </div>

                    <div className="flex justify-between py-2 border-b border-slate-800/60">
                      <span className="text-slate-300">Legal Representation &amp; High Court Writ Drafting Expenses</span>
                      <span className="font-mono font-semibold text-slate-300">₹1,50,000</span>
                    </div>

                    <div className="flex justify-between pt-3 text-base sm:text-lg font-black">
                      <span className="text-emerald-400">Total Crystallized Indemnity Recovery Claim</span>
                      <span className="font-mono text-emerald-400">₹27,78,000</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-400 mt-4 leading-relaxed">
                    *Note: In the event of criminal proceedings under CGST Act Section 132(1)(d), the statutory penalty on the supplier under Section 122(1)(iv) increases to 100% of the unpaid tax (₹18,00,000), compounding their total liability before the tax authority to ₹42,48,000.
                  </p>
                </div>

                <p>
                  Presenting this exact arithmetic inside an Advocate Legal Notice demonstrates to the vendor's board of directors that delaying GSTR-3B filing is commercially catastrophic. A ₹18 Lakh tax float generates an immediate ₹27.78 Lakh claim that can be enforced against company bank accounts.
                </p>
              </div>
            </section>

            {/* Section 9: BSA 2023 §63 Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black">
                  09
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Bharatiya Sakshya Adhiniyam (BSA 2023) §63 Digital Evidence Checklist for GSTR Mismatch Trials
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  Under the new Bharatiya Sakshya Adhiniyam, 2023 (BSA), Section 63 governs the admissibility of electronic records in judicial and quasi-judicial proceedings. When resisting DRC-01 notices or enforcing indemnity in Commercial Court, buyers must ensure every digital document carries a statutory certificate:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <span className="font-bold text-slate-900 block mb-1">
                      1. Tax Invoice with Digital Signature Certificate
                    </span>
                    <p className="text-slate-600">
                      Original PDF invoice generated by vendor with embedded IRN (Invoice Reference Number) and QR code under e-invoicing rules.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <span className="font-bold text-slate-900 block mb-1">
                      2. Bank RTGS / NEFT Core Banking Outward Logs
                    </span>
                    <p className="text-slate-600">
                      Bank statements bearing UTR numbers proving direct 100% remittance into the vendor's bank account specified on the invoice.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <span className="font-bold text-slate-900 block mb-1">
                      3. E-Way Bill Complete History with Part-B Update
                    </span>
                    <p className="text-slate-600">
                      Official E-Way Bill printout proving vehicle registration numbers, transit distance, and valid generator timestamps.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <span className="font-bold text-slate-900 block mb-1">
                      4. FASTag Toll Tollway Electronic Records
                    </span>
                    <p className="text-slate-600">
                      Corroborative toll plaza transaction logs proving physical transit of the carrier truck from supplier warehouse to buyer factory.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <span className="font-bold text-slate-900 block mb-1">
                      5. Warehouse Weighbridge Slips &amp; GRN
                    </span>
                    <p className="text-slate-600">
                      Gross-tare weight slips and ERP Goods Receipt Note signed by storekeepers confirming physical unloading and acceptance.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <span className="font-bold text-slate-900 block mb-1">
                      6. GST Portal Timestamped Search History
                    </span>
                    <p className="text-slate-600">
                      Audit trail showing vendor's &ldquo;Active&rdquo; GSTIN status at the date of purchase order issuance and invoice acceptance.
                    </p>
                  </div>
                </div>

                <p>
                  LegalRecovery automatically generates Section 63 BSA compliance certificates for all digital ledgers attached to our statutory demand notices, preventing defaulting vendors from disputing digital evidence in court.
                </p>
              </div>
            </section>

            {/* Section 10: Landmark Precedents */}
            <section
              id="heading-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Landmark Judicial Precedents on Buyer Protection &amp; Vendor Tax Indemnity
                </h2>
              </div>

              <div className="space-y-6 my-6">
                {COURT_PRECEDENTS.map((precedent, idx) => (
                  <div
                    key={idx}
                    className="border-l-4 border-[#DC2626] bg-slate-50 rounded-r-2xl p-5 sm:p-6 border-y border-r border-slate-200 shadow-sm"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        {precedent.citation}
                      </span>
                      <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                        {precedent.date}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2">
                      {precedent.parties}
                    </h3>

                    <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                      <strong>Factual Context:</strong> {precedent.facts}
                    </p>

                    <div className="bg-white rounded-xl p-3.5 border border-slate-200 mb-3 text-xs sm:text-sm text-slate-800 leading-relaxed">
                      <strong className="text-[#DC2626] block mb-1">Judicial Holding:</strong>
                      {precedent.holding}
                    </div>

                    <p className="text-xs font-semibold text-slate-700">
                      <strong>Strategic Impact for Creditors:</strong> {precedent.impact}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 11: Dual B2B CTA Banner */}
            <GSTRecoveryCTA />

            {/* Section 12: Frequently Asked Questions */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Frequently Asked Questions: Blocked GST ITC &amp; Vendor Tax Indemnity
                </h2>
              </div>

              <div className="space-y-4">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-xl overflow-hidden bg-slate-50 open:bg-white transition-colors"
                  >
                    <summary className="flex items-center justify-between p-4 sm:p-5 cursor-pointer text-xs sm:text-sm md:text-base font-bold text-slate-900 hover:text-[#DC2626] transition-colors select-none">
                      <span className="pr-4">{faq.question}</span>
                      <span className="w-5 h-5 rounded-full bg-slate-200 group-open:bg-[#DC2626] group-open:text-white flex items-center justify-center text-xs shrink-0 transition-transform group-open:rotate-180">
                        &darr;
                      </span>
                    </summary>
                    <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 13: Primary Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black">
                  12
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Primary Statutory Sources &amp; Legislative References
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                All statutory hooks, limitation periods, and prosecution thresholds referenced in this playbook are derived from authoritative legislative enactments:
              </p>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {PRIMARY_SOURCES.map((source, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold">&bull;</span>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-800 hover:text-[#DC2626] underline font-medium"
                    >
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            {/* Cross-Link Cluster to Sibling Tools & Templates */}
            <div className="rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white p-6 sm:p-8 border border-slate-700 shadow-md">
              <h3 className="text-base sm:text-lg font-black mb-2 text-white">
                Explore Related B2B Recovery Calculators &amp; Commercial Templates
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                Complement your GST recovery strategy with our verified calculation engines, statutory notices, and commercial debt escalation guides:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors text-xs text-slate-200 block"
                >
                  <span className="font-bold text-emerald-400 block mb-0.5">MSME 3x Interest Engine</span>
                  Calculate statutory compounding interest on overdue B2B trade supplies.
                </Link>
                <Link
                  href="/templates/section-43bh-msme-tax-disallowance-intimation-cum-demand-notice"
                  className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors text-xs text-slate-200 block"
                >
                  <span className="font-bold text-red-400 block mb-0.5">Section 43B(h) Notice Template</span>
                  Intimate corporate buyers of March 31 tax disallowance if dues remain unpaid.
                </Link>
                <Link
                  href="/quick-commerce-modern-trade-arbitrary-deductions-vendor-payment-recovery"
                  className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors text-xs text-slate-200 block"
                >
                  <span className="font-bold text-amber-400 block mb-0.5">Dark-Store Deductions Recovery</span>
                  Challenge arbitrary fill-rate penalties and RTV damage debits under MSMED Act.
                </Link>
                <Link
                  href="/distributor-dealer-dues-recovery"
                  className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors text-xs text-slate-200 block"
                >
                  <span className="font-bold text-slate-100 block mb-0.5">Distributor &amp; Dealer Ledger Recovery</span>
                  Enforce signed balance confirmations and Order 37 summary suits against defaulting dealers.
                </Link>
                <Link
                  href="/stop-payment-cheque-bounce-case"
                  className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors text-xs text-slate-200 block"
                >
                  <span className="font-bold text-slate-100 block mb-0.5">Stop Payment Cheque Bounce</span>
                  Overcome stop-payment instructions under Negotiable Instruments Act Section 138.
                </Link>
                <Link
                  href="/cheque-bounce-case-against-company-directors"
                  className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors text-xs text-slate-200 block"
                >
                  <span className="font-bold text-slate-100 block mb-0.5">Director Vicarious Liability (s.141)</span>
                  Fasten criminal liability on all active directors of defaulting corporate entities.
                </Link>
              </div>
            </div>

            {/* Author Attribution Card */}
            <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-slate-900 text-white flex items-center justify-center font-black text-xl shrink-0">
                AM
              </div>
              <div className="text-center sm:text-left">
                <p className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-0.5">
                  Editorial &amp; Statutory Review
                </p>
                {/* TODO(reviewer): src/data/reviewers.ts is absent in this repository */}
                <h4 className="text-sm sm:text-base font-black text-slate-900">
                  Advocate Anuj Anand Malik
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mt-1">
                  Founder &amp; Managing Partner at AMA Legal Solutions. Specializing in commercial debt recovery, corporate indirect tax litigation, GST adjudication defense, and High Court writ remedies across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Cross-Links Cluster */}
      <RelatedRecoveryGuides />
    </div>
  );
}
