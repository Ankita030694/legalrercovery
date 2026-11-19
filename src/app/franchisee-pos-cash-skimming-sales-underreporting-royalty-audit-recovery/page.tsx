import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import PosSkimmingTableOfContents from "./PosSkimmingTableOfContents";
import PosSkimmingScenarioTabs from "./PosSkimmingScenarioTabs";
import PosSkimmingCTA from "./PosSkimmingCTA";

export const revalidate = 86400;

const PAGE_PATH = "/franchisee-pos-cash-skimming-sales-underreporting-royalty-audit-recovery";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const EXACT_H1 =
  "Catching & Recovering Skimmed Royalties When Franchisees Route Walk-In Sales Through Personal UPI QR Codes & Unauthorized Raw Materials";

const META_TITLE = "Franchisee POS Bypass via Personal UPI: Royalty Audit";
const META_DESCRIPTION =
  "Compare branded cup/premix usage vs POS sales! Turn mystery & variance audits into Contract Act s.74 Penal Royalty Demands & PSS Act s.25 action.";

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
        alt: formatAltText("Franchisee POS cash skimming and personal UPI royalty audit recovery guide"),
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
    q: "Can a franchisor legally prove underreported POS sales using branded cup, box, or premix consumption ratios?",
    a: "Yes. Under Sections 73 and 74 of the Indian Contract Act, 1872 and commercial accounting principles, when a franchise agreement includes an Input-Output Consumption Ratio Audit Clause, central commissary dispatch invoices minus standard 3%–5% wastage create a rebuttable baseline of minimum unit volume. Combined with mystery-shopper UPI receipts and POS offline logs, courts and arbitrators accept input-output variance as objective proof of suppressed turnover.",
  },
  {
    q: "Is a 2x or 3x penal royalty clause enforceable under Section 74 of the Indian Contract Act, 1872?",
    a: "Section 74 permits liquidated damages that represent a genuine pre-estimate of loss rather than an arbitrary penalty. While a bare 3x multiplier without commercial justification may be scaled down to reasonable compensation, a tiered audit-recovery clause covering (1) unpaid 8% base royalty on imputed sales, (2) 18%–24% p.a. commercial interest, (3) forensic audit reimbursement, and (4) quantified brand-dilution damages from unauthorized raw materials is routinely enforced.",
  },
  {
    q: "What criminal and civil remedies apply when a franchisee switches off the POS after 7 PM and uses a personal Paytm/PhonePe QR code?",
    a: "Diverting brand-outlet walk-in payments to a proprietor's personal VPA constitutes dishonest misappropriation and criminal breach of trust under Section 316 of the Bharatiya Nyaya Sanhita (BNS), 2023, alongside civil breach of contract and trademark misrepresentation under Section 29 of the Trade Marks Act, 1999. Preserving 3 timestamped mystery-shopper UPI UTRs and POS offline logs under BSA 2023 Section 63 supports both immediate termination/injunction and full royalty recovery.",
  },
  {
    q: "What if the franchisee also bounces their monthly minimum royalty e-NACH auto-debit?",
    a: "A dishonoured royalty or ad-fund e-NACH mandate triggers criminal prosecution under Section 25 of the Payment and Settlement Systems Act, 2007 (carrying up to 2 years imprisonment or twice the bounced amount). You must issue a statutory demand notice within 30 days of receiving the NPCI/bank return memo, strictly separating the exact bounced e-NACH sum from unliquidated audit-variance penalties to comply with Supreme Court Suman Sethi precedent.",
  },
  {
    q: "How do franchisors catch outlets buying unbranded local cups or premix to mask input-output variance?",
    a: "When an outlet substitutes local raw materials to match suppressed POS billing, franchisors cross-check three independent proxies: (1) commercial electricity kWh spikes during evening hours, (2) Zomato/Swiggy aggregator payout volume versus dine-in/takeaway ratios, and (3) unannounced commissary stock inspections photographing non-approved vendor cartons and local tax invoices.",
  },
  {
    q: "Can a franchisee claim that mandatory central commissary sourcing violates Section 27 of the Contract Act?",
    a: "No. Under settled Indian Supreme Court and High Court jurisprudence, exclusivity and approved-supplier covenants operating during the subsistence of a franchise agreement are valid quality-control and brand-integrity measures, not post-termination restraints of trade under Section 27. Unauthorized local sourcing is an actionable breach.",
  },
  {
    q: "How fast can an institutional franchisor obtain an enforceable award or freeze order against a skimming outlet?",
    a: "Serving a forensic Advocate Demand Notice with an Input-Output Variance Schedule typically compels settlement or bank-guarantee regularization within 15 days. If contested, franchisors can seek urgent interim forensic imaging of POS/CCTV NVR hardware and bank-account attachment under Section 9 of the Arbitration and Conciliation Act, 1996, followed by an institutional fast-track award within 90–180 days.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "Indian Contract Act, 1872 (Sections 27, 73 & 74 — Liquidated Audit Damages & Exclusivity) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Payment and Settlement Systems Act, 2007 (Section 25 — Dishonour of Electronic Funds Transfer / e-NACH) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2049",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 Electronic Records & Section 119 Adverse Inference) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Bharatiya Nyaya Sanhita, 2023 (Section 316 Criminal Breach of Trust & Section 318 Cheating) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/20062",
  },
  {
    title: "The Trade Marks Act, 1999 (Section 29 — Unauthorized Use & Brand Dilution) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1993",
  },
  {
    title: "Arbitration and Conciliation Act, 1996 (Sections 9, 12(5) & 21 — Interim Forensic Protection) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
];

const STATUTORY_MATRIX = [
  {
    violation: "After-7PM POS Switch-Off & Personal UPI QR Routing",
    statute: "Contract Act s.73/74 + BNS s.316 + BSA s.63",
    evidence: "3 Mystery-Shopper UPI UTRs + Cloud POS Offline Heartbeat Logs",
    remedy: "15-Day Penal Royalty Notice + Termination / Arbitration s.9",
  },
  {
    violation: "Unbranded Cup / Local Premix Substitution",
    statute: "Contract Act s.74 + Trade Marks Act s.29 + FSSAI Rules",
    evidence: "Surprise Stock Photos + Electricity kWh & Aggregator Ratio Gap",
    remedy: "Immediate Quality Breach Notice + Imputed Sales Royalty",
  },
  {
    violation: "Monthly Royalty / Ad-Fund e-NACH Bounce",
    statute: "PSS Act 2007 s.25(1)-(5) + NI Act s.143A Parity",
    evidence: "NPCI Return Memo + UMRN Mandate + Bounced Invoice Ledger",
    remedy: "30-Day Statutory Notice -> Magistrate Complaint (Up to 2x Fine)",
  },
  {
    violation: "Refusal of Forensic Audit / Deleted CCTV NVR",
    statute: "BSA 2023 s.119 (Adverse Inference) + Arbitration s.9",
    evidence: "Geo-Tagged Auditor Refusal Video + Same-Day Preservation Mail",
    remedy: "Best-Judgment Commissary Assessment + Local Commissioner Order",
  },
];

export default function FranchiseePosCashSkimmingPage() {
  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: META_DESCRIPTION,
    url: PAGE_URL,
    inLanguage: "en-IN",
    datePublished: "2026-11-19",
    dateModified: "2026-11-19",
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
    name: "How Franchisors Prove & Recover Skimmed Royalties from POS-Bypassing Outlets",
    description:
      "5-step forensic input-output audit and legal recovery workflow for QSR, F&B, salon, and retail franchisors.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Compute Commissary Input-Output Variance",
        text: "Reconcile central warehouse branded cup, box, and premix dispatches (less 3%–5% wastage) against declared POS SKU sales to isolate suppressed turnover.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Execute Mystery-Shopper UPI & POS Heartbeat Capture",
        text: "Conduct undercover evening purchases (7 PM–10 PM) paying via the counter's personal QR code while logging cloud POS offline timestamps.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Cross-Verify Electricity, Aggregator & Stock Audits",
        text: "Check Zomato/Swiggy order ratios, commercial kWh load, and surprise stock-room photos to rule out unauthorized local raw material substitution.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Certify Electronic Dossier Under BSA 2023 Section 63",
        text: "Compile POS logs, NPCI UTR screenshots, CCTV clips, and e-NACH return memos with a statutory Section 63 BSA electronic evidence certificate.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Serve Dual-Track Penal Royalty & PSS s.25 Demand Notice",
        text: "Dispatch an Advocate Legal Notice claiming unpaid royalty, Contract Act s.74 audit costs, and separate PSS Act s.25 notice within 30 days of e-NACH bounce.",
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
        name: "Franchisee POS Cash Skimming & Royalty Audit",
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
            <span>IND-24 &bull; QSR, Salon &amp; Retail Franchisors</span>
            <span className="text-slate-500">|</span>
            <span>Forensic Royalty Audit &amp; Recovery</span>
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
            , franchisors prove suppressed POS turnover by matching central commissary cup, box, and premix dispatches against declared sales, pairing mystery-shopper UPI UTRs with Contract Act s.74 audit damages and PSS Act s.25 e-NACH prosecution.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-2">
              <p className="text-lg sm:text-2xl font-black text-red-400">35%–45%</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Typical After-7PM Walk-In Revenue Skimmed via Personal UPI
              </p>
            </div>
            <div className="p-2">
              <p className="text-lg sm:text-2xl font-black text-emerald-400">3%–5%</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Standard Packaging/Premix Wastage Band Before Audit Trigger
              </p>
            </div>
            <div className="p-2">
              <p className="text-lg sm:text-2xl font-black text-amber-400">30 Days</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Strict PSS Act s.25 Statutory Notice Window on Royalty e-NACH Bounce
              </p>
            </div>
            <div className="p-2">
              <p className="text-lg sm:text-2xl font-black text-slate-100">BSA s.63</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Admissibility Standard for POS Logs, UPI UTRs &amp; CCTV Clips
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
              label: "Franchisee POS Cash Skimming & Royalty Audit",
              href: PAGE_PATH,
            },
          ]}
        />

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-4">
          <PosSkimmingTableOfContents />

          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview & Gap */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Why Franchisees Bypass Central POS After 7 PM Using Personal UPI
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Across Indian QSR, specialty coffee, cloud-kitchen, and salon networks, royalty leakage rarely looks like an outright refusal to pay. Instead, franchisee operators keep the central cloud POS active during morning and afternoon hours—when corporate territory managers conduct routine checks—and deliberately power down or disconnect the billing terminal after 7:00 PM. Walk-in evening customers are handed handwritten tokens or asked to scan a laminated Paytm, PhonePe, or Google Pay QR standee linked to the proprietor&apos;s personal savings account or an unrelated sister entity.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                By diverting 35% to 45% of peak-hour gross turnover off the central ledger, an outlet paying an 8% gross-sales royalty plus 2% marketing fund fee pockets an immediate 10% illegal margin boost while reporting artificially depressed unit economics. Worse, once operations teams question low declared sales, sophisticated defaulters procure unbranded local cups, pizza boxes, and wholesale premix to conceal the volume gap.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm text-amber-900">
                <strong className="font-bold">Creditor Reality Check:</strong> Sending a generic &ldquo;please submit accurate sales&rdquo; warning email without forensic input-output variance data invites denials and gives the franchisee time to scrub CCTV NVR drives. Recovery demands an evidentiary package built on central commissary dispatches, mystery-shopper UPI trails, and enforceable contractual multipliers.
              </div>
            </section>

            {/* Section 2: Decision Tree SVG + Mobile Cards */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Operational Decision Tree: Audit Detection to Penal Recovery
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Franchisor CFOs and operations audit heads should route suspected POS-skimming outlets through this five-gate escalation pipeline before triggering termination or litigation.
              </p>

              {/* Desktop SVG Decision Tree */}
              <div className="hidden md:block w-full overflow-x-auto bg-slate-900 rounded-2xl p-6 border border-slate-800">
                <svg
                  viewBox="0 0 880 230"
                  width={880}
                  height={230}
                  role="img"
                  aria-label="5-stage franchisee POS skimming audit and recovery decision tree"
                  className="w-full h-auto"
                >
                  <defs>
                    <marker id="arrowRed" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                      <path d="M0,0 L8,4 L0,8 Z" fill="#EF4444" />
                    </marker>
                  </defs>
                  {/* Node 1 */}
                  <rect x="10" y="30" width="148" height="90" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="84" y="56" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="700">GATE 1: VARIANCE</text>
                  <text x="84" y="76" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontWeight="600">Cup / Premix Ratio</text>
                  <text x="84" y="94" textAnchor="middle" fill="#CBD5E1" fontSize="10">&gt;5% Gap vs POS SKUs</text>

                  <line x1="158" y1="75" x2="184" y2="75" stroke="#EF4444" strokeWidth="2" markerEnd="url(#arrowRed)" />

                  {/* Node 2 */}
                  <rect x="188" y="30" width="148" height="90" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="262" y="56" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="700">GATE 2: MYSTERY UPI</text>
                  <text x="262" y="76" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontWeight="600">7 PM–10 PM Purchase</text>
                  <text x="262" y="94" textAnchor="middle" fill="#CBD5E1" fontSize="10">Personal VPA + UTR</text>

                  <line x1="336" y1="75" x2="362" y2="75" stroke="#EF4444" strokeWidth="2" markerEnd="url(#arrowRed)" />

                  {/* Node 3 */}
                  <rect x="366" y="30" width="148" height="90" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="440" y="56" textAnchor="middle" fill="#FBBF24" fontSize="11" fontWeight="700">GATE 3: PROXY CHECK</text>
                  <text x="440" y="76" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontWeight="600">kWh &amp; Stock Raid</text>
                  <text x="440" y="94" textAnchor="middle" fill="#CBD5E1" fontSize="10">Local Premix Proof</text>

                  <line x1="514" y1="75" x2="540" y2="75" stroke="#EF4444" strokeWidth="2" markerEnd="url(#arrowRed)" />

                  {/* Node 4 */}
                  <rect x="544" y="30" width="148" height="90" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="618" y="56" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="700">GATE 4: BSA s.63</text>
                  <text x="618" y="76" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontWeight="600">15-Day Audit Notice</text>
                  <text x="618" y="94" textAnchor="middle" fill="#CBD5E1" fontSize="10">Contract Act s.74</text>

                  <line x1="692" y1="75" x2="718" y2="75" stroke="#EF4444" strokeWidth="2" markerEnd="url(#arrowRed)" />

                  {/* Node 5 */}
                  <rect x="722" y="30" width="148" height="90" rx="12" fill="#DC2626" stroke="#FCA5A5" strokeWidth="1.5" />
                  <text x="796" y="56" textAnchor="middle" fill="#FEE2E2" fontSize="11" fontWeight="700">GATE 5: ENFORCE</text>
                  <text x="796" y="76" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">PSS s.25 + Arb s.9</text>
                  <text x="796" y="94" textAnchor="middle" fill="#FEE2E2" fontSize="10">Freeze &amp; Recovery</text>

                  {/* Bottom Bar */}
                  <rect x="10" y="150" width="860" height="58" rx="10" fill="#0F172A" stroke="#334155" strokeWidth="1" />
                  <text x="440" y="175" textAnchor="middle" fill="#E2E8F0" fontSize="11" fontWeight="600">
                    Parallel Track: If monthly e-NACH bounces, serve Section 25 PSS Act notice within 30 days (strictly isolating bounced sum).
                  </text>
                  <text x="440" y="194" textAnchor="middle" fill="#94A3B8" fontSize="10">
                    Tri-Channel Service: Registered Speed Post RPAD + Verified Email + WhatsApp Business Delivery Log
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                {[
                  { gate: "Gate 1: Commissary Variance", desc: "Flag outlets where branded cup, box, or premix dispatches exceed POS unit sales by >5%." },
                  { gate: "Gate 2: Mystery-Shopper UPI Capture", desc: "Execute 3 evening (7–10 PM) test purchases to capture personal VPA UTRs and POS offline logs." },
                  { gate: "Gate 3: Utility & Local Stock Check", desc: "Cross-check commercial electricity kWh and photograph unbranded local raw materials on site." },
                  { gate: "Gate 4: BSA s.63 Dossier & s.74 Notice", desc: "Certify electronic logs and serve a 15-day Penal Royalty Demand Notice." },
                  { gate: "Gate 5: PSS s.25 + Arbitration s.9", desc: "Prosecute bounced royalty e-NACH within 30 days and seek interim forensic/escrow freeze." },
                ].map((item) => (
                  <div key={item.gate} className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800">
                    <p className="text-xs font-bold text-red-400 uppercase tracking-wider mb-1">{item.gate}</p>
                    <p className="text-xs text-slate-200">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Statutory Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Statutory Enforcement Matrix for Franchise Royalty Leakage
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Different skimming tactics trigger distinct statutory remedies under Indian commercial and criminal law. Pairing civil liquidated damages with criminal e-NACH or breach-of-trust pressure eliminates the delay advantage franchisees exploit in ordinary civil suits.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Leakage / Breach Mode</th>
                      <th className="p-3.5 font-bold">Governing Statutory Hook</th>
                      <th className="p-3.5 font-bold">Decisive Proof Required</th>
                      <th className="p-3.5 font-bold">Primary Creditor Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {STATUTORY_MATRIX.map((row) => (
                      <tr key={row.violation} className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">{row.violation}</td>
                        <td className="p-3.5 text-slate-700 font-medium">{row.statute}</td>
                        <td className="p-3.5 text-slate-600">{row.evidence}</td>
                        <td className="p-3.5 text-[#DC2626] font-semibold">{row.remedy}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Input-Output Consumption Ratio */}
            <section
              id="heading-consumption-audit"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  How Branded Packaging &amp; Premix Ratios Legally Prove Suppressed Sales
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Courts and arbitral tribunals reject speculative revenue estimates, but they routinely uphold contractual <strong>Input-Output Consumption Ratio Audit Clauses</strong> when backed by objective warehouse dispatch records. Every QSR or beverage franchisor controls serialized or brand-embossed consumables—custom paper cups, tamper-evident delivery boxes, portioned coffee/boba premix pouches, or serialized salon treatment vials.
              </p>
              <div className="bg-slate-900 text-slate-100 rounded-xl p-5 font-mono text-xs sm:text-sm space-y-2 border border-slate-800">
                <p className="text-red-400 font-bold uppercase tracking-wider text-[11px]">
                  Forensic Imputed-Turnover Formula
                </p>
                <p>
                  Imputed Units Sold = (Opening Stock + Commissary Dispatches &minus; Closing Stock) &times; (1 &minus; Standard Wastage Allowance 4%)
                </p>
                <p>
                  Unreported Units = Imputed Units Sold &minus; POS Billed Units
                </p>
                <p className="text-emerald-400 font-semibold">
                  Suppressed Gross Revenue = Unreported Units &times; Weighted Average Menu Price (excl. GST)
                </p>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When your Franchise Agreement explicitly stipulates that any unexplained variance exceeding 4%–5% between central commissary packaging/premix consumption and POS-recorded SKU sales shall be deemed unreported sales—and empowers the franchisor to levy an audit-recovery charge plus forensic audit fees under Section 74 of the Indian Contract Act—the evidentiary burden shifts decisively onto the franchisee to account for every missing unit.
              </p>
            </section>

            {/* Section 5: Interactive Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  4 Real-World POS Skimming Scenarios &amp; Enforcement Playbooks
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Select an operational leakage pattern below to view the exact legal basis and 3-step enforcement sequence.
              </p>
              <PosSkimmingScenarioTabs />
            </section>

            {/* Section 6: Worked Financial & 3x Penal Royalty Ledger */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Worked Recovery Ledger: 6-Month QSR Cup-Variance &amp; Audit Claim
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Consider a Tier-1 city QSR beverage franchisee operating on an 8% gross-sales royalty plus 2% national marketing fund (10% total fee) with a contractual 4% cup-wastage cap and a Section 74 audit-recovery clause.
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-slate-400 text-xs uppercase font-bold mb-1">Commissary &amp; POS Data (6 Months)</p>
                    <ul className="space-y-1.5 text-slate-200">
                      <li>Branded Cups Dispatched (Net of Closing): <strong>90,000 cups</strong></li>
                      <li>Permitted 4% Wastage Allowance: <strong>3,600 cups</strong></li>
                      <li>Imputed Billable Cups: <strong>86,400 cups</strong></li>
                      <li>POS-Declared Cups Billed: <strong>51,400 cups</strong></li>
                    </ul>
                  </div>
                  <div className="bg-emerald-950/50 rounded-xl p-4 border border-emerald-700/50">
                    <p className="text-emerald-400 text-xs uppercase font-bold mb-1">Quantified Demand Schedule</p>
                    <ul className="space-y-1.5 text-slate-100">
                      <li>Unreported Volume: <strong>35,000 cups @ ₹180 avg = ₹63,00,000</strong></li>
                      <li>1. Base Skimmed Royalty + Ad Fund (10%): <strong>₹6,30,000</strong></li>
                      <li>2. Contract Act s.74 Liquidated Audit Damages (1x Additional): <strong>₹6,30,000</strong></li>
                      <li>3. Forensic Audit Cost + 18% p.a. Interest: <strong>₹1,15,000</strong></li>
                    </ul>
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <span className="text-xs text-slate-300">
                    Total Enforceable Audit Demand (Plus 18% GST on Royalty Components)
                  </span>
                  <span className="text-lg sm:text-xl font-black text-emerald-400">
                    ₹13,75,000 + GST
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                <strong>Drafting Note on Section 74:</strong> Separating the undisputed 10% base royalty (₹6,30,000) from the contractual liquidated audit damage component (₹6,30,000) ensures that even if an arbitrator moderates the multiplier under Section 74, the base principal, interest, and audit expenses remain 100% insulated.
              </p>
            </section>

            {/* Section 7: 6-Point BSA 2023 s.63 Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  6-Point Forensic &amp; BSA 2023 s.63 Evidence Dossier
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Before serving a termination or penal royalty demand notice, assemble this 6-point dossier certified under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 so electronic logs survive evidentiary scrutiny in Commercial Courts and arbitration.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  {
                    title: "1. Commissary Tax Invoices & E-Way Bills",
                    desc: "GST-verified dispatch ledgers and signed PODs proving exact quantities of branded cups, boxes, and premix delivered.",
                  },
                  {
                    title: "2. Mystery-Shopper UPI UTR & QR Photos",
                    desc: "3+ evening test purchases showing the counter QR code, personal VPA beneficiary name, and NPCI UTR confirmation.",
                  },
                  {
                    title: "3. Cloud POS Heartbeat & Offline Logs",
                    desc: "Server-side telemetry proving recurring 7 PM–11 PM terminal shutdowns or manual bill-void spikes.",
                  },
                  {
                    title: "4. Utility & Aggregator Cross-Check",
                    desc: "Evening electricity kWh draw and Zomato/Swiggy order volume ratios contradicting low walk-in POS declarations.",
                  },
                  {
                    title: "5. NPCI e-NACH Return Memos (If Bounced)",
                    desc: "Bank return memos with UMRN and reason codes preserved within the strict 30-day PSS Act s.25 notice window.",
                  },
                  {
                    title: "6. BSA 2023 Section 63(4) Certificate",
                    desc: "Signed IT/Audit Head certificate with SHA-256 hashes covering POS exports, CCTV clips, and mystery-shopper screenshots.",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <p className="text-xs sm:text-sm font-bold text-slate-900 mb-1">{item.title}</p>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: Dual-Track CTA */}
            <section id="heading-dual-cta" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Serve an Advocate Penal Royalty Notice or Audit Bulk Outlets
                </h2>
              </div>
              <PosSkimmingCTA />
            </section>

            {/* Section 9: Related Hub, Calculators, Templates & Sibling Guides */}
            <section
              id="heading-related-links"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Franchise Recovery Hub, Calculators &amp; Notice Templates
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm">
                <Link
                  href="/industries/franchisors-brand-licensors-oem-dealership-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/40 transition-colors"
                >
                  <p className="font-bold text-slate-900">IND-24 Franchisor &amp; Brand Licensor Hub &rarr;</p>
                  <p className="text-xs text-slate-600 mt-1">Complete recovery architecture for QSR, retail, and OEM dealership networks.</p>
                </Link>
                <Link
                  href="/tools/section-25-nach-bounce-limitation-calculator"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/40 transition-colors"
                >
                  <p className="font-bold text-slate-900">Section 25 e-NACH Bounce Deadline Calculator &rarr;</p>
                  <p className="text-xs text-slate-600 mt-1">Compute 30-day statutory notice and 15-day cure expiry for bounced royalty mandates.</p>
                </Link>
                <Link
                  href="/templates/section-25-pss-act-nach-bounce-legal-notice-format"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/40 transition-colors"
                >
                  <p className="font-bold text-slate-900">Section 25 PSS Act e-NACH Notice Template &rarr;</p>
                  <p className="text-xs text-slate-600 mt-1">Advocate-vetted notice format with Suman Sethi dual-demand safeguard.</p>
                </Link>
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/40 transition-colors"
                >
                  <p className="font-bold text-slate-900">MSME 3x RBI Compound Interest Calculator &rarr;</p>
                  <p className="text-xs text-slate-600 mt-1">Calculate statutory interest on unpaid central commissary raw material invoices.</p>
                </Link>
                <Link
                  href="/distributor-dealer-dues-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/40 transition-colors"
                >
                  <p className="font-bold text-slate-900">Distributor &amp; Dealer Dues Recovery Guide &rarr;</p>
                  <p className="text-xs text-slate-600 mt-1">Recover unpaid channel credit and commissary supply bills across India.</p>
                </Link>
                <Link
                  href="/online-dispute-resolution-india"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/40 transition-colors"
                >
                  <p className="font-bold text-slate-900">Online Dispute Resolution (ODR) India &rarr;</p>
                  <p className="text-xs text-slate-600 mt-1">Fast-track neutral institutional arbitration for pan-India franchise networks.</p>
                </Link>
                <Link
                  href="/coaching-institute-franchise-royalty-and-installment-bounce-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/40 transition-colors"
                >
                  <p className="font-bold text-slate-900">Coaching &amp; EdTech Franchise Royalty Recovery &rarr;</p>
                  <p className="text-xs text-slate-600 mt-1">Enforce student-enrollment audits and royalty installment bounces.</p>
                </Link>
                <Link
                  href="/law/section-25-payment-and-settlement-systems-act-nach-bounce"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/40 transition-colors"
                >
                  <p className="font-bold text-slate-900">Section 25 PSS Act Statutory Deep-Dive &rarr;</p>
                  <p className="text-xs text-slate-600 mt-1">Magistrate complaint procedure and 20% interim compensation rules.</p>
                </Link>
              </div>
            </section>

            {/* Section 10: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Frequently Asked Questions: Franchisee POS Skimming &amp; Royalty Audit
                </h2>
              </div>
              <div className="space-y-3">
                {FAQ_ITEMS.map((item) => (
                  <details
                    key={item.q}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="font-bold text-xs sm:text-sm text-slate-900 cursor-pointer list-none flex items-center justify-between gap-3">
                      <span>{item.q}</span>
                      <span className="text-[#DC2626] font-black text-base shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 11: Primary Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Primary Statutory Authorities &amp; Official Portals
                </h2>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((source) => (
                  <li key={source.url} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold mt-0.5">&bull;</span>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline decoration-slate-300"
                    >
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
