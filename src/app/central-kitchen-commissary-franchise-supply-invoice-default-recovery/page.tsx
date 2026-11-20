import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import CommissaryTableOfContents from "./CommissaryTableOfContents";
import CommissaryScenarioTabs from "./CommissaryScenarioTabs";
import CommissaryCTA from "./CommissaryCTA";

export const revalidate = 86400;

const PAGE_PATH = "/central-kitchen-commissary-franchise-supply-invoice-default-recovery";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const EXACT_H1 =
  "QSR & Cafe Brands: Recovering Unpaid Central-Kitchen Commissary Invoices & Halting Dangerous Unauthorized Local Sourcing by Defaulting Outlets";

const META_TITLE = "QSR Central-Kitchen & Commissary Supply Debt Recovery";
const META_DESCRIPTION =
  "Defaulting QSR franchisees cut to Cash-Before-Delivery buy cheap local sauces—risking YOUR FSSAI license. Serve Cure-or-Suspension & PSS s.25 notices.";

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
        alt: formatAltText("QSR central-kitchen commissary supply debt recovery and FSSAI control guide"),
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

const FAQ_ITEMS = [
  {
    q: "If a defaulting QSR franchisee stops buying from our central kitchen after we enforce Cash-Before-Delivery, how do we stop local sourcing?",
    a: "Do not treat a sudden drop in commissary indents as mere lost wholesale margin. Cross-check live Zomato/Swiggy order volume against zero central-kitchen dispatches; if the outlet is still fulfilling orders, it is serving unauthorized local raw materials. Dispatch an Immediate 7-Day Cure-or-Suspension Legal Notice citing the Franchise Agreement's Approved-Supplier Mandate, FSSAI Brand-Owner Quality Control obligations, and Trade Marks Act s.29 quality-dilution liability.",
  },
  {
    q: "Can a franchisee sue the franchisor for wrongful termination if we suspend frozen commissary deliveries over unpaid invoices?",
    a: "Not when the suspension is properly documented under Section 51 of the Indian Contract Act, 1872 (reciprocal promises). Instead of abruptly cutting off chilled trucks without paper trail, serve a written Credit-Limit Freeze & Prepaid Wallet Conversion Notice first, itemizing overdue invoices and signed cold-chain Proof of Delivery (POD). When supply is conditioned on prepaid wallet clearance, the franchisee cannot claim arbitrary supply starvation.",
  },
  {
    q: "Does the franchisor face FSSAI liability when an outlet uses unapproved local chicken, oil, or sauces?",
    a: "Yes—both regulatorily and reputationally. Under the Food Safety and Standards Act, 2006 (Sections 26, 27, and 52) and FSSAI's Brand-Owner accountability framework, a customer illness or food-safety sampling failure at a branded outlet exposes the trademark owner to FSSAI improvement notices, aggregator delisting, and nationwide brand damage. Mandatory central commissary sourcing is legally recognized as an essential food-safety control.",
  },
  {
    q: "Can we adjust unpaid central-kitchen commissary arrears against the franchisee's refundable security deposit?",
    a: "Yes, provided your Franchise Agreement includes an express Set-Off & Appropriation Clause. However, never retain the deposit silently. Issue a formal Security Deposit Set-Off & Net-Balance Demand Notice detailing each unpaid commissary invoice, contractual interest, and cold-chain return demurrage, showing exact rupee-for-rupee appropriation and demanding the remaining deficit within 15 days.",
  },
  {
    q: "What criminal remedy applies if the franchisee's weekly commissary e-NACH or auto-debit bounces?",
    a: "A dishonoured commissary e-NACH mandate triggers criminal prosecution under Section 25 of the Payment and Settlement Systems Act, 2007 (carrying up to 2 years imprisonment or twice the bounced amount). You must issue a statutory demand notice within 30 days of receiving the NPCI/bank return memo, strictly separating the exact bounced e-NACH sum from unliquidated damages to comply with Supreme Court Suman Sethi precedent.",
  },
  {
    q: "Can a franchisee argue that mandatory central-kitchen purchasing violates Section 27 of the Contract Act or competition law?",
    a: "No. Indian courts consistently uphold exclusive approved-supplier and central-commissary covenants during the subsistence of a franchise agreement as legitimate brand-standardization and food-safety safeguards, not post-termination restraints of trade under Section 27. Standardized recipe inputs—sauces, marinades, spice premixes, and branded packaging—are core to trademark integrity.",
  },
  {
    q: "How quickly can a QSR or cloud-kitchen brand freeze aggregator listings and recover commissary arrears?",
    a: "An Advocate-drafted Cure-or-Suspension Notice backed by cold-chain PODs, GST e-Way bills, and a 7-day FSSAI audit warning typically compels wallet top-up or partial settlement within 7–10 days. If the outlet continues unauthorized local sourcing, the franchisor can invoke Section 9 of the Arbitration and Conciliation Act, 1996 (or Commercial Court s.2(1)(c)(ix)) for urgent interim restraint and aggregator delisting.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "Food Safety and Standards Act, 2006 (Sections 26, 27 & 52 — Food Business Operator & Quality Liability) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2042",
  },
  {
    title: "Payment and Settlement Systems Act, 2007 (Section 25 — Dishonour of Electronic Funds Transfer / e-NACH) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2049",
  },
  {
    title: "Indian Contract Act, 1872 (Sections 39, 51, 73 & 74 — Reciprocal Promises, Suspension & Liquidated Damages) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "The Sale of Goods Act, 1930 (Section 55 — Suit for Price of Delivered Goods & Perishable Supply) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title: "The Trade Marks Act, 1999 (Section 29 — Quality-Control Breach & Trademark Dilution) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1993",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Admissibility of ERP Ledgers, Cold-Chain Logs & e-Way Bills) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const STATUTORY_MATRIX = [
  {
    scenario: "Unpaid Frozen / Chilled Commissary Invoices (>15–30 Days)",
    statute: "Sale of Goods Act s.55 + Contract Act s.73/74 + Commercial Courts Act s.2(1)(c)(ix)",
    evidence: "Tax Invoices, GSTR-1, e-Way Bills & Signed Cold-Chain PODs",
    remedy: "15-Day Commercial Demand Notice + 18%–24% p.a. Contractual Interest & Summary Recovery",
  },
  {
    scenario: "Dishonoured Weekly Commissary e-NACH / Auto-Debit",
    statute: "Payment and Settlement Systems Act, 2007 s.25 (or NI Act s.138 for PDCs)",
    evidence: "NPCI / Bank Return Memo + Executed e-NACH Mandate + BSA s.63 Ledger",
    remedy: "Strict 30-Day Statutory Demand Notice -> Criminal Magistrate Summons (2x Penalty)",
  },
  {
    scenario: "Secret Local Sauce, Chicken or Premix Substitution Under Brand Name",
    statute: "FSSAI Act s.26/s.27 + Trade Marks Act s.29 + Contract Act s.39",
    evidence: "Zero-Indent vs Aggregator Volume Gap + QA Audit Photos + Lab/Batch Mismatch",
    remedy: "7-Day Cure-or-Suspension Notice + Arbitration s.9 Injunction & Swiggy/Zomato Delisting",
  },
  {
    scenario: "Transitioning Defaulting Outlet to Cash-Before-Delivery / Prepaid Wallet",
    statute: "Indian Contract Act s.51 (Reciprocal Promises) + Credit Policy Clause",
    evidence: "Overdue Aging Schedule + Prior Reminder Emails/WhatsApp + Credit Freeze Notice",
    remedy: "Lawful Suspension of Open Credit Without Wrongful Termination Counter-Claim",
  },
  {
    scenario: "Security Deposit Refund Demand Amid Unpaid Commissary Dues",
    statute: "Contract Act s.73/74 + Franchise Agreement Set-Off Covenant",
    evidence: "Itemized Arrears + Cold-Chain Demurrage + Signed Deposit Receipt",
    remedy: "Formal Deposit Appropriation Statement + Net Balance Recovery Demand",
  },
];

export default function CentralKitchenCommissaryRecoveryPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: META_DESCRIPTION,
    url: PAGE_URL,
    datePublished: "2026-11-20",
    dateModified: "2026-11-20",
    inLanguage: "en-IN",
    // TODO(reviewer): src/data/reviewers.ts is absent in this repository
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
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": PAGE_URL,
    },
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How QSR & Cafe Franchisors Recover Commissary Arrears & Stop Unauthorized Local Sourcing",
    description:
      "5-step operational and legal playbook for central-kitchen CFOs to collect overdue frozen supply invoices without triggering wrongful termination claims or FSSAI brand risk.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Freeze Open Credit & Convert to Prepaid Credit Wallet",
        text: "Issue a formal Credit-Limit Freeze Notice under Contract Act s.51 citing overdue invoices and cold-chain PODs before halting dispatch trucks.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Flag Zero-Indent vs Aggregator Sales Anomaly",
        text: "Compare 14-day central-kitchen frozen/premix dispatches against live Zomato, Swiggy, and POS order volume to detect secret local sourcing.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Execute Unannounced FSSAI & Cold-Chain QA Audit",
        text: "Inspect outlet chillers and dry stores, photographing non-approved vendor cartons, unbranded sauces, or local poultry invoices.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Serve Dual-Track Cure-or-Suspension & PSS s.25 Notice",
        text: "Dispatch a 7-day Cure-or-Suspension Legal Notice for FSSAI/brand compliance alongside a strict 30-day PSS Act s.25 notice for bounced e-NACH mandates.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Appropriate Security Deposit & Escalate Net Deficit",
        text: "Issue an itemized Deposit Set-Off Statement and escalate the net recoverable balance to Arbitration s.9 or Commercial Court s.2(1)(c)(ix).",
      },
    ],
  };

  const faqSchema = {
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
        name: "Franchisors & Brand Licensors Recovery",
        item: `${SITE_URL}/industries/franchisors-brand-licensors-oem-dealership-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Central-Kitchen Commissary Supply Recovery",
        item: PAGE_URL,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, howToSchema, faqSchema, breadcrumbSchema]),
        }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-24 &bull; QSR, Cafe, Bakery &amp; Cloud-Kitchen CFOs</span>
            <span className="text-slate-500">|</span>
            <span>Commissary Arrears &amp; FSSAI Control</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40-60 Word Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Under the{" "}
            <Link
              href="/industries/franchisors-brand-licensors-oem-dealership-recovery"
              className="text-red-300 underline decoration-red-400/60 hover:text-white font-semibold"
            >
              Franchisor &amp; Brand Licensor Recovery Framework
            </Link>
            , QSR brands break the Cash-Before-Delivery catch-22 by pairing Contract Act s.51 prepaid-wallet conversion with an Immediate 7-Day Cure-or-Suspension Notice—enforcing FSSAI Brand-Owner Quality Control, PSS Act s.25 e-NACH prosecution, and itemized security deposit set-offs.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-2">
              <p className="text-lg sm:text-2xl font-black text-red-400">7 Days</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Cure-or-Suspension Notice Window for Unauthorized Local Sourcing
              </p>
            </div>
            <div className="p-2">
              <p className="text-lg sm:text-2xl font-black text-emerald-400">Contract s.51</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Statutory Shield for Lawful Prepaid-Wallet Supply Holds
              </p>
            </div>
            <div className="p-2">
              <p className="text-lg sm:text-2xl font-black text-amber-400">30 Days</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Strict PSS Act s.25 Notice Deadline on Commissary e-NACH Bounce
              </p>
            </div>
            <div className="p-2">
              <p className="text-lg sm:text-2xl font-black text-slate-100">FSSAI + TM</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Brand-Owner Food Safety &amp; Trade Marks Act s.29 Enforcement
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
              label: "Franchisors & Brand Licensors Recovery",
              href: "/industries/franchisors-brand-licensors-oem-dealership-recovery",
            },
            {
              label: "Central-Kitchen Commissary Supply Recovery",
              href: PAGE_PATH,
            },
          ]}
        />

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-4">
          {/* Left Sticky Sidebar TOC */}
          <CommissaryTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview & Operational Catch-22 */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Why Cash-Before-Delivery Triggers Dangerous Local Sourcing
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Every QSR, specialty tea-cafe, ice-cream, and cloud-kitchen CFO eventually hits the exact same operational trap. A franchise outlet runs up <strong>₹8 Lakh to ₹25 Lakh</strong> in unpaid central-kitchen commissary invoices—frozen marinated chicken, signature gravies, dairy premixes, and branded boxes. Naturally, the finance team freezes open credit and puts the outlet on <strong>Cash-Before-Delivery (CBD)</strong> or a prepaid wallet.
                </p>
                <p>
                  Within 72 hours, central-kitchen indents from that outlet drop to zero—yet the outlet does not shut down. Instead, its Zomato, Swiggy, and walk-in counters remain open. To preserve daily cash flow without paying your commissary arrears, the defaulting franchisee secretly buys cheap, unverified local chicken, industrial mayonnaise, and counterfeit spice mixes from neighbourhood mandis and packs them into your branded takeaway boxes.
                </p>

                <div className="bg-red-50 border border-red-200 rounded-xl p-4 sm:p-5 text-red-950">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-1">
                    The Double Brand-Liability Trap
                  </p>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    If a customer suffers food poisoning or an FSSAI Food Safety Officer draws a failed sample at that franchisee&apos;s counter, the reputational fallout and regulatory scrutiny hit <strong>your brand&apos;s central FSSAI license and trademark</strong>—not the rogue operator&apos;s shell LLP. Meanwhile, if you cut off frozen supplies abruptly without a formal notice trail, the franchisee files a counter-claim alleging &ldquo;wrongful supply starvation.&rdquo;
                  </p>
                </div>

                <p>
                  Breaking this catch-22 requires synchronizing commercial debt recovery with food-safety enforcement. Under the{" "}
                  <Link
                    href="/industries/franchisors-brand-licensors-oem-dealership-recovery"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Franchisor &amp; OEM Network Recovery Playbook
                  </Link>
                  , your legal notice must never read like a routine accounts-receivable reminder. It must simultaneously lock the overdue commissary ledger, document the lawful transition to a prepaid credit wallet, and trigger a 7-day Cure-or-Suspension ultimatum for unauthorized raw-material substitution.
                </p>
              </div>
            </section>

            {/* Section 2: Decision Tree SVG + Mobile Cards */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Operational Decision Tree: Credit Hold, Cure Notice or Suspension
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Follow this 5-stage escalation sequence the moment a franchisee&apos;s central-kitchen ledger crosses 15 days overdue or a weekly e-NACH debit fails.
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block w-full overflow-x-auto bg-slate-900 rounded-2xl p-5 border border-slate-800">
                <svg
                  viewBox="0 0 880 310"
                  width="880"
                  height="310"
                  role="img"
                  aria-label="Central kitchen commissary default and unauthorized local sourcing legal decision tree"
                  className="w-full h-auto"
                >
                  {/* Connectors */}
                  <line x1="175" y1="75" x2="225" y2="75" stroke="#94A3B8" strokeWidth="2" />
                  <line x1="395" y1="75" x2="445" y2="75" stroke="#94A3B8" strokeWidth="2" />
                  <line x1="615" y1="75" x2="665" y2="75" stroke="#94A3B8" strokeWidth="2" />
                  <line x1="750" y1="120" x2="750" y2="175" stroke="#DC2626" strokeWidth="2" />
                  <line x1="665" y1="220" x2="465" y2="220" stroke="#10B981" strokeWidth="2" />
                  <line x1="275" y1="220" x2="215" y2="220" stroke="#F59E0B" strokeWidth="2" />

                  {/* Node 1 */}
                  <rect x="15" y="30" width="160" height="90" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="95" y="55" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">STAGE 1 (DAY 15)</text>
                  <text x="95" y="75" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Invoice Overdue /</text>
                  <text x="95" y="92" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">e-NACH Bounce</text>
                  <text x="95" y="109" textAnchor="middle" fill="#94A3B8" fontSize="10">Check POD + Return Memo</text>

                  {/* Node 2 */}
                  <rect x="225" y="30" width="170" height="90" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="310" y="55" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="bold">STAGE 2 (CONTRACT s.51)</text>
                  <text x="310" y="75" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Prepaid Wallet</text>
                  <text x="310" y="92" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Conversion Notice</text>
                  <text x="310" y="109" textAnchor="middle" fill="#94A3B8" fontSize="10">Lawful Credit Freeze</text>

                  {/* Node 3 */}
                  <rect x="445" y="30" width="170" height="90" rx="12" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.5" />
                  <text x="530" y="55" textAnchor="middle" fill="#FBBF24" fontSize="11" fontWeight="bold">STAGE 3 (48 HRS)</text>
                  <text x="530" y="75" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Zero-Indent vs</text>
                  <text x="530" y="92" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Aggregator Check</text>
                  <text x="530" y="109" textAnchor="middle" fill="#94A3B8" fontSize="10">Detect Local Sourcing</text>

                  {/* Node 4 */}
                  <rect x="665" y="30" width="190" height="90" rx="12" fill="#7F1D1D" stroke="#DC2626" strokeWidth="2" />
                  <text x="760" y="55" textAnchor="middle" fill="#FCA5A5" fontSize="11" fontWeight="bold">STAGE 4 (DAY 17)</text>
                  <text x="760" y="75" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Surprise QA Audit</text>
                  <text x="760" y="92" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">&amp; Photo Evidence</text>
                  <text x="760" y="109" textAnchor="middle" fill="#FECACA" fontSize="10">FSSAI Risk Documentation</text>

                  {/* Node 5 (Bottom Right) */}
                  <rect x="665" y="175" width="190" height="95" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="760" y="200" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">STAGE 5A (7-DAY CURE)</text>
                  <text x="760" y="218" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Cure-or-Suspension</text>
                  <text x="760" y="235" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">+ PSS s.25 Notice</text>
                  <text x="760" y="253" textAnchor="middle" fill="#94A3B8" fontSize="10">30d e-NACH Window</text>

                  {/* Node 6 (Bottom Middle) */}
                  <rect x="275" y="175" width="190" height="95" rx="12" fill="#064E3B" stroke="#10B981" strokeWidth="1.5" />
                  <text x="370" y="200" textAnchor="middle" fill="#6EE7B7" fontSize="11" fontWeight="bold">STAGE 5B (SET-OFF)</text>
                  <text x="370" y="218" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Security Deposit</text>
                  <text x="370" y="235" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Appropriation</text>
                  <text x="370" y="253" textAnchor="middle" fill="#A7F3D0" fontSize="10">Net Deficit Demand</text>

                  {/* Node 7 (Bottom Left) */}
                  <rect x="15" y="175" width="200" height="95" rx="12" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.5" />
                  <text x="115" y="200" textAnchor="middle" fill="#FBBF24" fontSize="11" fontWeight="bold">ESCALATION</text>
                  <text x="115" y="218" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Arbitration s.9 /</text>
                  <text x="115" y="235" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Aggregator Delist</text>
                  <text x="115" y="253" textAnchor="middle" fill="#94A3B8" fontSize="10">Commercial Court s.2(1)(c)</text>
                </svg>
              </div>

              {/* Mobile Stacked Decision Cards */}
              <div className="md:hidden space-y-3">
                {[
                  {
                    step: "Stage 1 (Day 15)",
                    title: "Invoice Overdue / e-NACH Bounce",
                    desc: "Pull signed cold-chain PODs, e-Way bills, and NPCI return memo.",
                  },
                  {
                    step: "Stage 2 (Contract Act s.51)",
                    title: "Prepaid Credit Wallet Conversion Notice",
                    desc: "Freeze open credit formally via written notice before halting trucks.",
                  },
                  {
                    step: "Stage 3 (48 Hours)",
                    title: "Zero-Indent vs Aggregator Volume Check",
                    desc: "Flag outlets fulfilling Swiggy/Zomato orders with zero central-kitchen indents.",
                  },
                  {
                    step: "Stage 4 (QA Inspection)",
                    title: "Unannounced FSSAI & Chiller Audit",
                    desc: "Photograph unapproved local sauces, chicken, and third-party vendor bills.",
                  },
                  {
                    step: "Stage 5 (7-Day Cure + Set-Off)",
                    title: "Cure-or-Suspension, PSS s.25 & Deposit Appropriation",
                    desc: "Serve Advocate notice, adjust security deposit, and escalate net deficit.",
                  },
                ].map((card, i) => (
                  <div key={i} className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-red-400">
                      {card.step}
                    </p>
                    <p className="text-sm font-bold text-white mt-0.5">{card.title}</p>
                    <p className="text-xs text-slate-300 mt-1">{card.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Statutory Matrix Table */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Statutory Matrix: FSSAI Quality Control, PSS s.25 &amp; Set-Off
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Central-kitchen defaults span commercial supply law, food-safety compliance, electronic payment dishonour, and trademark licensing. Use this statutory matrix to match each default pattern to the exact enforceable remedy.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Default / Violation Pattern</th>
                      <th className="p-3.5 font-bold">Governing Indian Statute</th>
                      <th className="p-3.5 font-bold">Mandatory Evidence</th>
                      <th className="p-3.5 font-bold">Creditor Enforcement Track</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {STATUTORY_MATRIX.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3.5 font-semibold text-slate-900">{row.scenario}</td>
                        <td className="p-3.5 text-[#DC2626] font-medium">{row.statute}</td>
                        <td className="p-3.5 text-slate-700">{row.evidence}</td>
                        <td className="p-3.5 text-slate-700">{row.remedy}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Lawful Supply Hold Without Termination Liability */}
            <section
              id="heading-supply-hold"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Lawful Commissary Supply Hold Without Termination Liability
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  A common fear among QSR legal heads is that stopping frozen deliveries to a defaulting franchisee will invite an injunction petition alleging &ldquo;constructive termination&rdquo; or breach of the franchisor&apos;s supply obligation. Under <strong>Section 51 of the Indian Contract Act, 1872</strong>, where a contract consists of reciprocal promises to be simultaneously performed, no promisor need perform their promise unless the promisee is ready and willing to perform their reciprocal promise—namely, paying for prior and current supplies.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-1.5">
                      What Creates Franchisor Liability (Avoid)
                    </p>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-amber-950 list-disc pl-4">
                      <li>Verbal WhatsApp refusal by a regional logistics manager to dispatch trucks.</li>
                      <li>Blocking orders without serving an itemized overdue ledger and cure window.</li>
                      <li>Allowing the outlet to stay open on Swiggy/Zomato while knowing it has zero approved stock.</li>
                    </ul>
                  </div>
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1.5">
                      The Bulletproof Creditor Protocol (Execute)
                    </p>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-emerald-950 list-disc pl-4">
                      <li>Serve a written <strong>Prepaid Credit Wallet Conversion Notice</strong> citing exact invoice numbers.</li>
                      <li>Keep supply open strictly on 100% advance payment so the franchisee cannot plead refusal to supply.</li>
                      <li>Pair it with an <strong>FSSAI &amp; Brand Quality Control Notice</strong> barring any third-party local substitutes.</li>
                    </ul>
                  </div>
                </div>

                <p>
                  This dual structure puts the defaulting operator in an inescapable legal bind: they cannot claim you starved their kitchen (because prepaid wallet orders remain open), and they cannot legally buy local sauces or chicken (because doing so violates both the Franchise Agreement&apos;s approved-vendor covenant and FSSAI Brand-Owner Quality Control standards). If they continue operating with local substitutes, you have ironclad grounds for immediate suspension and aggregator delisting.
                </p>
              </div>
            </section>

            {/* Section 5: Interactive 4 Scenarios */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  4 Commissary Arrears &amp; Local Sourcing Failure Scenarios
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Select an operational failure mode below to inspect the exact statutory counter-move and 3-step execution protocol.
              </p>
              <CommissaryScenarioTabs />
            </section>

            {/* Section 6: Worked Financial & Deposit Set-Off Ledger */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Worked Recovery Ledger: ₹18.40L Commissary &amp; Deposit Set-Off
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Below is a representative recovery schedule for a 2-outlet QSR franchisee defaulting across 6 weeks of frozen chicken, proprietary sauce pouches, and branded packaging—demonstrating how to structure a transparent Security Deposit Appropriation and net claim.
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-lg">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-800">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-red-400">
                      Illustrative Creditor Claim &amp; Set-Off Schedule
                    </p>
                    <p className="text-base sm:text-lg font-bold text-white">
                      QSR Franchisee: 6-Week Frozen Supply &amp; QA Breach
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-950/70 text-emerald-300 border border-emerald-700/60">
                    Net Recoverable: ₹15,15,200
                  </span>
                </div>

                <div className="space-y-2.5 text-xs sm:text-sm">
                  <div className="flex justify-between py-2 border-b border-slate-800/80">
                    <span className="text-slate-300">
                      1. Unpaid Central-Kitchen Tax Invoices (18 Dispatches &bull; Frozen &amp; Premix)
                    </span>
                    <span className="font-bold text-white">₹18,40,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800/80">
                    <span className="text-slate-300">
                      2. Contractual Late-Payment Interest (18% p.a. &bull; 90 Days Average Delay)
                    </span>
                    <span className="font-bold text-amber-300">+ ₹81,700</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800/80">
                    <span className="text-slate-300">
                      3. Cold-Chain Reefer Return &amp; Spoilage Demurrage (2 Refused Trucks)
                    </span>
                    <span className="font-bold text-amber-300">+ ₹48,500</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800/80">
                    <span className="text-slate-300">
                      4. Emergency FSSAI QA Inspection &amp; Microbiological Lab Testing Fee
                    </span>
                    <span className="font-bold text-amber-300">+ ₹45,000</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800/80">
                    <span className="text-emerald-300 font-medium">
                      5. Less: Lawful Appropriation of Interest-Free Security Deposit
                    </span>
                    <span className="font-bold text-emerald-400">&minus; ₹5,00,000</span>
                  </div>
                  <div className="flex justify-between pt-3 text-sm sm:text-base font-black">
                    <span className="text-white">
                      Net Enforceable Principal + Damages Demand (15-Day Cure Notice)
                    </span>
                    <span className="text-red-400">₹15,15,200</span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 mt-4 leading-relaxed">
                  Note: If any portion of the ₹18,40,000 was covered by a bounced weekly e-NACH mandate (e.g., ₹3,10,000), issue a separate standalone PSS Act s.25 notice strictly for ₹3,10,000 within 30 days of the return memo. You can also benchmark statutory MSME interest if your central kitchen holds Udyam registration using our{" "}
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="text-emerald-400 underline hover:text-emerald-300"
                  >
                    MSME Delayed Payment Interest Calculator
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 7: BSA 2023 s.63 & Cold-Chain POD Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Cold-Chain POD, FSSAI Audit &amp; BSA 2023 s.63 Evidence Dossier
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                To defeat typical franchisee defenses (&ldquo;goods were expired on arrival&rdquo; or &ldquo;we never received those cartons&rdquo;) in Commercial Court or Arbitration, assemble this 6-point evidentiary dossier certified under Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "1. Signed Cold-Chain PODs & Reefer Logs",
                    desc: "Outlet manager-stamped delivery challans paired with GPS reefer temperature logs (-18°C / +4°C) proving zero cold-chain breach at handover.",
                  },
                  {
                    title: "2. GST e-Way Bills & GSTR-1 Reconciliation",
                    desc: "Matched GST tax invoices and e-Way bill transit records proving physical interstate or intracity movement of commissary stock.",
                  },
                  {
                    title: "3. Indents vs Aggregator Order Gap",
                    desc: "14-day ERP indent drop to zero juxtaposed against live Zomato/Swiggy payout volume—proving ongoing sales without approved raw materials.",
                  },
                  {
                    title: "4. Timestamped QA Inspection Photos",
                    desc: "Geo-tagged photos of unapproved local sauce buckets, unbranded meat cartons, or local vendor invoices found inside the outlet kitchen.",
                  },
                  {
                    title: "5. NPCI / Bank e-NACH Return Memos",
                    desc: "Official electronic dishonour memos for bounced weekly commissary auto-debits, preserved within the 30-day PSS s.25 notice window.",
                  },
                  {
                    title: "6. BSA 2023 Section 63 Certificate",
                    desc: "Statutory electronic-record certificate signed by your Central-Kitchen ERP / Finance Head authenticating all digital ledgers and logs.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <p className="text-sm font-bold text-slate-900 mb-1">{item.title}</p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: Dual-Track B2B CTA */}
            <section
              id="heading-dual-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Dispatch a Cure-or-Suspension Notice or Bulk Outlet CSV
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Protect your brand&apos;s FSSAI license and recover overdue central-kitchen receivables immediately. Test one defaulting outlet with an Advocate-drafted notice or onboard your entire franchise network via CSV.
              </p>
              <CommissaryCTA />
            </section>

            {/* Section 9: Related Hub, Calculators, Templates & Sibling Guides */}
            <section
              id="heading-related-links"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Franchisor Hub, Calculators, Templates &amp; Sibling Guides
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm">
                <Link
                  href="/industries/franchisors-brand-licensors-oem-dealership-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-[#DC2626]">
                    Parent Industry Hub
                  </span>
                  <span className="font-bold text-slate-900">
                    Franchisors, Brand Licensors &amp; OEM Network Recovery &rarr;
                  </span>
                </Link>
                <Link
                  href="/franchisee-pos-cash-skimming-sales-underreporting-royalty-audit-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Sibling Guide &bull; POS Audit
                  </span>
                  <span className="font-bold text-slate-900">
                    Franchisee POS Cash-Skimming &amp; Personal UPI Audit &rarr;
                  </span>
                </Link>
                <Link
                  href="/terminated-rogue-franchisee-using-brand-signboard-royalty-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Sibling Guide &bull; Signboard Holdover
                  </span>
                  <span className="font-bold text-slate-900">
                    Terminated Rogue Franchisee Signboard &amp; Aggregator Delisting &rarr;
                  </span>
                </Link>
                <Link
                  href="/fico-foco-franchise-investor-minimum-guarantee-capex-dispute-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Sibling Guide &bull; FICO / FOCO
                  </span>
                  <span className="font-bold text-slate-900">
                    FOCO / FICO Store Lockout, Inventory &amp; CapEx Recovery &rarr;
                  </span>
                </Link>
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                    Interactive Calculator (T1)
                  </span>
                  <span className="font-bold text-slate-900">
                    MSME Delayed Payment Compound Interest Calculator &rarr;
                  </span>
                </Link>
                <Link
                  href="/templates/legal-notice-reply-format"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Notice Workspace (P1)
                  </span>
                  <span className="font-bold text-slate-900">
                    Commercial Legal Notice &amp; Reply Format Workspace &rarr;
                  </span>
                </Link>
                <Link
                  href="/distributor-dealer-dues-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    B2B Supply Track
                  </span>
                  <span className="font-bold text-slate-900">
                    Distributor, Dealer &amp; Stockist Credit Dues Recovery &rarr;
                  </span>
                </Link>
                <Link
                  href="/online-dispute-resolution-india"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Fast-Track Forum
                  </span>
                  <span className="font-bold text-slate-900">
                    Online Dispute Resolution (ODR) &amp; Digital Arbitration India &rarr;
                  </span>
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
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  FAQs: Central-Kitchen Commissary Defaults &amp; FSSAI Liability
                </h2>
              </div>

              <div className="space-y-3">
                {FAQ_ITEMS.map((item, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-xl bg-slate-50/70 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="flex items-center justify-between gap-4 p-4 cursor-pointer list-none font-bold text-xs sm:text-sm text-slate-900">
                      <span>{item.q}</span>
                      <span className="text-[#DC2626] font-black text-base shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                      {item.a}
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
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Primary Statutory Authorities &amp; Official Portals
                </h2>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((src, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold">&bull;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline decoration-slate-300"
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
