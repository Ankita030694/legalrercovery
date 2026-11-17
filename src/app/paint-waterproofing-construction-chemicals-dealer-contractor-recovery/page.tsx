import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import ChemWaterproofingTableOfContents from "./ChemWaterproofingTableOfContents";
import ChemWaterproofingScenarioTabs from "./ChemWaterproofingScenarioTabs";
import ChemWaterproofingNoticeCTA from "./ChemWaterproofingNoticeCTA";

export const revalidate = 86400;

const PAGE_URL =
  "/paint-waterproofing-construction-chemicals-dealer-contractor-recovery";
const EXACT_H1 =
  "Recovering Waterproofing, Industrial Epoxy Flooring & Construction-Chemical Dues: Separating '10-Year Product Warranty' from 30-Day Invoice Payment";
const META_TITLE = "Waterproofing, Epoxy & Construction-Chemical Recovery";
const META_DESCRIPTION =
  "Builders misuse 10-year waterproofing warranty bonds to withhold 20% bills. Issue bonds upon 100% payment, defeat substrate blame & recover chemical dues.";

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
      "The Sale of Goods Act, 1930 (Sections 31, 32, 42 & 55 — Delivery, Acceptance & Independent Action for Price) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title:
      "The Indian Contract Act, 1872 (Sections 52, 53, 54, 74, 148 & 160 — Reciprocal Promises, Damages & Bailment of Tinting Machines)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15–18 — 45-Day Cap & 3x RBI Compound Interest)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title:
      "The Code of Civil Procedure, 1908 (Order XXXVII — Summary Suits on Written Supply & Application Invoices)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "Negotiable Instruments Act, 1881 (Sections 138 & 143A — Dishonoured Security Cheques & 20% Interim Compensation)",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Admissibility of Digital Moisture Logs, Batch COAs & Ponding Photos)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "Bureau of Indian Standards — IS 3067 / IS 16471 (Code of Practice for General Design Details & Waterproofing) & ASTM F1869",
    url: "https://www.bis.gov.in/",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Supreme Court on Sham 'Pre-Existing Disputes' Under IBC Section 8 & 9",
    parties:
      "Mobilox Innovations Private Limited v. Kirusa Software Private Limited",
    citation: "(2018) 1 SCC 353, Supreme Court of India",
    facts:
      "An operational creditor served a Section 8 demand notice for unpaid commercial invoices. The corporate debtor tried to block NCLT admission by raising an unsubstantiated, belated defect plea after payment fell due.",
    holding:
      "The Supreme Court ruled that a 'dispute' under IBC Section 8(2)(a) must be a genuine, pre-existing dispute raised prior to the demand notice—not a 'patently feeble legal argument or an assertion of fact unsupported by evidence' or a 'moonshine defense'.",
    amount: "Moonshine Dispute Filter — Neutralizes Post-Handover Substrate Blame",
    takeaway:
      "When a builder signs a 72-hour ponding test or factory floor handover and complains of blistering only after receiving a demand notice, NCLT treats the excuse as a sham moonshine defense.",
  },
  {
    title: "Supreme Court on MSMED 3x RBI Interest Overriding Contract Bars",
    parties:
      "Gujarat State Civil Supplies Corporation Ltd. v. Mahakali Foods Pvt. Ltd.",
    citation: "(2023) 6 SCC 401, Supreme Court of India",
    facts:
      "A buyer argued that private purchase order clauses—including arbitration clauses and zero-interest credit terms—barred the Micro and Small supplier from claiming statutory interest before the MSEFC.",
    holding:
      "The Supreme Court affirmed that Chapter V of the MSMED Act, 2006 has overriding statutory effect (Sections 15–18 and 24). No private work order can waive the 45-day payment ceiling or 3x RBI Bank Rate monthly compounding.",
    amount: "Statutory Override — Nullifies Arbitrary 10-Year Retention Clauses",
    takeaway:
      "A builder cannot convert a Udyam-registered chemical or waterproofing supplier's 20% invoice balance into an interest-free 'warranty deposit' beyond 45 days.",
  },
  {
    title: "Supreme Court Against Unilateral Withholding for Unliquidated Damages",
    parties: "Union of India v. Raman Iron Foundry",
    citation: "(1974) 2 SCC 231, Supreme Court of India",
    facts:
      "An employer unilaterally withheld admitted sums payable under supply bills by claiming unassessed, unliquidated damages for alleged breach under another head.",
    holding:
      "A party to a contract cannot unilaterally adjudicate its own claim for unliquidated damages and appropriate or withhold admitted invoice amounts. A mere claim for damages does not create an immediate debt until adjudicated.",
    amount: "Prohibition on Unilateral Set-Off & Arbitrary Debit Notes",
    takeaway:
      "Developers cannot freeze ₹10–₹50 Lakh of waterproofing or epoxy bills on vague allegations of dampness without independent adjudication.",
  },
  {
    title: "Supreme Court on Enforceability of Security Cheques Under NI Act s.138",
    parties: "Sripati Singh v. State of Jharkhand & Anr.",
    citation: "2021 SCC OnLine SC 1002, Supreme Court of India",
    facts:
      "A debtor issued post-dated security cheques under a commercial arrangement and later argued that dishonour of a 'security' cheque could not trigger criminal prosecution under Section 138 of the NI Act.",
    holding:
      "The Supreme Court held that once the underlying supply or credit liability crystallizes and remains unpaid on the due date, a security cheque presented for recovery attracts full Section 138 criminal liability.",
    amount: "Up to 20% Interim Compensation Under Section 143A NI Act",
    takeaway:
      "Paint manufacturers, admixture suppliers, and applicators can prosecute defaulting dealers and builders under Section 138 when security PDCs bounce.",
  },
];

const FAQ_ITEMS = [
  {
    question:
      "Can a builder legally withhold 20% of our waterproofing invoice as security for a 10-year warranty?",
    answer:
      "No, unless an explicit, capped retention clause with a clear release schedule was signed in the work order. A 5-to-10-year product performance warranty is an independent post-payment covenant—not a license to withhold 20% of the invoice price for a decade. Under Sale of Goods Act Section 55 and MSMED Act Section 15, payment is due within 45 days (or agreed credit period), and you should stipulate in writing that the Non-Judicial Stamp Paper Warranty Bond activates strictly upon 100% bill realization.",
  },
  {
    question:
      "Our industrial epoxy/PU flooring blistered because the civil contractor omitted the vapor barrier. Are we liable?",
    answer:
      "No. Osmotic blistering and delamination caused by ground-water capillary rise or uncured green concrete stem from the civil contractor's failure to install a Damp Proof Membrane (DPM) or deliver a compliant substrate. Under Sections 53 and 54 of the Indian Contract Act, 1872, substrate readiness is the employer's reciprocal obligation. Producing pre-application Tramex/ASTM F1869 moisture logs and batch Certificates of Analysis (COA) defeats employer back-charges.",
  },
  {
    question:
      "How do paint manufacturers recover unpaid credit AND repossess leased tinting machines from defaulting dealers?",
    answer:
      "Serve a dual-track termination and recall notice: (1) demand the overdue paint/colorant ledger under Order XXXVII CPC and present dishonoured PDCs under NI Act Section 138 (Sripati Singh doctrine), and (2) revoke the bailment/lease of the automated tinting machine and gyro-shaker under Sections 148 and 160 of the Contract Act. If the dealer conceals or refuses to return the bailed machine, criminal breach of trust exposure under Section 316 of the Bharatiya Nyaya Sanhita (BNS), 2023 applies.",
  },
  {
    question:
      "Does MSME Samadhaan (MSEFC) cover 'Supply + Apply' waterproofing and epoxy flooring contracts?",
    answer:
      "Pure composite 'works contracts' often face jurisdictional objections before MSEFCs. However, if you raise split invoices—separating HSN-coded construction chemical/membrane/resin supply from application labour—the material supply invoices remain 100% maintainable before MSEFC for 3x RBI compound interest and Section 43B(h) Income Tax disallowance leverage. For composite turnkey bills, Order XXXVII CPC summary suits, Commercial Courts s.12A, and IBC Section 8 Form 3/4 (>= ₹1 Crore) remain fully effective.",
  },
  {
    question:
      "What evidence must applicators collect at site to satisfy BSA 2023 Section 63?",
    answer:
      "Maintain a digital handover dossier: signed 72-hour ponding test reports for terraces/basements, pre-application digital substrate moisture-meter photos (with timestamp and GPS), batch-wise Certificates of Analysis (COA), GST E-Way Bills, and signed Joint Measurement Books (JMB). Pair these electronic records with a Section 63 BSA certificate signed by your QA/systems officer.",
  },
  {
    question:
      "Can an admixture or chemical supplier file IBC Section 8 against a real-estate developer?",
    answer:
      "Yes, when total overdue operational debt against a corporate developer meets or exceeds ₹1 Crore. Under Mobilox Innovations (2018), unless the builder raised a documented, contemporaneous technical objection before your demand notice, a belated excuse about slab dampness or admixture setting time is rejected as a 'moonshine dispute' in NCLT.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  datePublished: "2026-11-17T10:00:00+05:30",
  dateModified: "2026-11-17T10:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}${PAGE_URL}`,
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    url: `${SITE_URL}/authors/anuj-anand-malik`,
  },
  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
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
    name: "Construction Chemicals, Waterproofing, Epoxy Flooring & Paint Dealer Payment Recovery",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Waterproofing, Epoxy Flooring & Construction-Chemical Suppliers Recover Withheld Bills",
  description:
    "5-stage legal and forensic SOP to separate 10-year warranty bonds from 30-day invoice payment, defeat substrate moisture blame, and enforce recovery.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Lock Pre-Application Substrate Moisture & Ponding Sign-Offs",
      text: "Archive digital Tramex/ASTM F1869 moisture logs, 72-hour ponding test sheets, batch COAs, and GST E-Way Bills under BSA 2023 Section 63.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Condition the 10-Year Warranty Stamp Bond on 100% Payment",
      text: "Serve written notice clarifying that the 5-to-10-year Warranty Bond activates solely upon 100% invoice realization and cannot justify withholding 20% retention.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Rebut Civil Vapor-Barrier Omission Under Contract Act s.53–54",
      text: "Expose missing civil polythene vapor barriers or green concrete dampness as the employer's reciprocal breach, rejecting unilateral debit notes under Section 74.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Issue Section 43B(h) Tax Disallowance & Tinting-Machine Recall",
      text: "Notify Udyam-covered buyers of 100% tax disallowance beyond 45 days and demand return of bailed paint tinting machines under Contract Act s.160.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Escalate via NI Act s.138, MSEFC, Order XXXVII CPC or IBC s.8",
      text: "Present dishonoured PDCs under Section 138 NI Act and file before MSEFC (3x RBI interest), Commercial Court (Order XXXVII), or NCLT (IBC s.8 for >= ₹1 Cr).",
    },
  ],
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
      name: "Building Materials & Chemical Recovery",
      item: `${SITE_URL}/industries/chemicals-steel-rmc-building-materials-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Waterproofing, Epoxy & Chemical Recovery",
      item: `${SITE_URL}${PAGE_URL}`,
    },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function PaintWaterproofingChemicalRecoveryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-14 B2B Creditor Playbook</span>
            <span aria-hidden="true">&bull;</span>
            <span>Waterproofing, Epoxy &amp; Construction Chemicals</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box (40–60 words + Parent Hub Link) */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Under Sale of Goods Act s.32/s.55 and Contract Act s.52, a 10-year
            waterproofing warranty is a post-payment covenant—not a license to
            withhold 20% invoice dues. Under our{" "}
            <Link
              href="/industries/chemicals-steel-rmc-building-materials-recovery"
              className="text-red-300 underline hover:text-white font-bold"
            >
              Chemicals, Steel, RMC &amp; Building Materials Recovery Hub
            </Link>
            , issue Warranty Stamp Bonds only upon 100% receipt and defeat
            substrate moisture blame with BSA s.63 logs.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mb-6 sm:mb-8">
            <div className="p-2">
              <div className="text-xl sm:text-2xl font-black text-slate-100">
                100% Paid
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-1">
                Pre-condition to activate 5–10 yr Warranty Bond
              </div>
            </div>
            <div className="p-2">
              <div className="text-xl sm:text-2xl font-black text-emerald-400">
                3x RBI Rate
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-1">
                MSMED s.16 monthly compound interest past 45 days
              </div>
            </div>
            <div className="p-2">
              <div className="text-xl sm:text-2xl font-black text-amber-400">
                &lt; 4%–5% RH
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-1">
                Substrate moisture proof defeating epoxy blame
              </div>
            </div>
            <div className="p-2">
              <div className="text-xl sm:text-2xl font-black text-red-400">
                s.43B(h) + 138
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-1">
                Tax disallowance &amp; 20% cheque interim deposit
              </div>
            </div>
          </div>

          <ChemWaterproofingNoticeCTA variant="inline" />
        </div>
      </section>

      {/* Main Content Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <Breadcrumbs
          items={[
            {
              label: "Chemicals, Steel & Building Materials",
              href: "/industries/chemicals-steel-rmc-building-materials-recovery",
            },
            {
              label: "Waterproofing, Epoxy & Chemical Recovery",
              href: PAGE_URL,
            },
          ]}
        />

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-4">
          <ChemWaterproofingTableOfContents />

          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Why Builders Weaponize 10-Year Warranty Bonds to Freeze 20% Bills
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Across India&apos;s real-estate, warehousing, and industrial
                  infrastructure projects, waterproofing applicators, industrial
                  epoxy/PU flooring contractors, concrete admixture suppliers,
                  and paint manufacturers face a recurring working-capital trap.
                  Once basement crystalline waterproofing, terrace elastomeric
                  membranes, or high-build epoxy screeds are applied and pass
                  joint site inspection, developers routinely freeze the final
                  15% to 30% of the contract value—claiming the balance must
                  remain withheld to secure the &ldquo;5-to-10-year product
                  performance warranty.&rdquo;
                </p>
                <p>
                  This conflation of a <strong>post-completion warranty covenant</strong>{" "}
                  with <strong>immediate price liability</strong> has no basis
                  in Indian commercial law unless a capped, time-bound Defect
                  Liability Period (DLP) retention was expressly negotiated.
                  Even worse, waterproofing and industrial epoxy-flooring
                  applicators frequently encounter structural cracks, osmotic
                  blistering, or ground-water capillary rise caused entirely by
                  the <em>civil contractor&apos;s missing polythene vapor barrier</em>{" "}
                  or uncured green concrete—defects that the builder weaponizes
                  to withhold the applicator&apos;s entire bill.
                </p>
                <p>
                  Whether you are enforcing split material-plus-application
                  receivables or challenging arbitrary DLP freezes, calculate
                  your statutory retention interest using our{" "}
                  <Link
                    href="/tools/construction-retention-dlp-escalation-claim-calculator"
                    className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                  >
                    Construction Retention &amp; DLP Claim Calculator
                  </Link>{" "}
                  and issue a structured demand using our{" "}
                  <Link
                    href="/templates/construction-ra-bill-retention-money-arbitration-notice"
                    className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                  >
                    Construction RA Bill &amp; Retention Arbitration Notice
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 2: 5-Stage Decision Tree */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  5-Stage Warranty-Separation &amp; Substrate-Sign-Off Recovery Flow
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                To prevent builders from turning a 10-year warranty bond into a
                permanent payment freeze—or blaming your chemical system for
                civil slab dampness—execute these five sequential steps:
              </p>

              {/* Desktop SVG Decision Tree */}
              <div className="hidden md:block overflow-x-auto bg-slate-900 rounded-2xl p-5 mb-4">
                <svg
                  width="880"
                  height="210"
                  viewBox="0 0 880 210"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="5-stage waterproofing and construction chemical payment recovery decision tree"
                  className="w-full h-auto"
                >
                  {/* Stage 1 */}
                  <rect x="10" y="25" width="154" height="150" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <circle cx="34" cy="49" r="12" fill="#DC2626" />
                  <text x="34" y="53" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">1</text>
                  <text x="54" y="53" fill="#F8FAFC" fontSize="11" fontWeight="bold">Substrate Sign-Off</text>
                  <text x="22" y="80" fill="#CBD5E1" fontSize="10">Lock Tramex moisture</text>
                  <text x="22" y="96" fill="#CBD5E1" fontSize="10">logs, 72h ponding test</text>
                  <text x="22" y="112" fill="#CBD5E1" fontSize="10">&amp; batch COAs under</text>
                  <text x="22" y="128" fill="#F87171" fontSize="10" fontWeight="bold">BSA 2023 s.63</text>

                  <path d="M164 100 L186 100" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrow)" />

                  {/* Stage 2 */}
                  <rect x="186" y="25" width="154" height="150" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <circle cx="210" cy="49" r="12" fill="#DC2626" />
                  <text x="210" y="53" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">2</text>
                  <text x="230" y="53" fill="#F8FAFC" fontSize="11" fontWeight="bold">Warranty Hold</text>
                  <text x="198" y="80" fill="#CBD5E1" fontSize="10">Withhold Stamp-Paper</text>
                  <text x="198" y="96" fill="#CBD5E1" fontSize="10">Warranty Bond until</text>
                  <text x="198" y="112" fill="#CBD5E1" fontSize="10">100% bill realization</text>
                  <text x="198" y="128" fill="#34D399" fontSize="10" fontWeight="bold">Contract Act s.52</text>

                  <path d="M340 100 L362 100" stroke="#DC2626" strokeWidth="2.5" />

                  {/* Stage 3 */}
                  <rect x="362" y="25" width="154" height="150" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <circle cx="386" cy="49" r="12" fill="#DC2626" />
                  <text x="386" y="53" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">3</text>
                  <text x="406" y="53" fill="#F8FAFC" fontSize="11" fontWeight="bold">Vapor Rebuttal</text>
                  <text x="374" y="80" fill="#CBD5E1" fontSize="10">Pinpoint missing civil</text>
                  <text x="374" y="96" fill="#CBD5E1" fontSize="10">DPM vapor barrier &amp;</text>
                  <text x="374" y="112" fill="#CBD5E1" fontSize="10">reject debit notes</text>
                  <text x="374" y="128" fill="#FBBF24" fontSize="10" fontWeight="bold">Contract Act s.53/74</text>

                  <path d="M516 100 L538 100" stroke="#DC2626" strokeWidth="2.5" />

                  {/* Stage 4 */}
                  <rect x="538" y="25" width="154" height="150" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <circle cx="562" cy="49" r="12" fill="#DC2626" />
                  <text x="562" y="53" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">4</text>
                  <text x="582" y="53" fill="#F8FAFC" fontSize="11" fontWeight="bold">43B(h) &amp; Recall</text>
                  <text x="550" y="80" fill="#CBD5E1" fontSize="10">Serve 45-day IT Act</text>
                  <text x="550" y="96" fill="#CBD5E1" fontSize="10">s.43B(h) tax notice &amp;</text>
                  <text x="550" y="112" fill="#CBD5E1" fontSize="10">recall tinting machines</text>
                  <text x="550" y="128" fill="#F87171" fontSize="10" fontWeight="bold">Contract Act s.160</text>

                  <path d="M692 100 L714 100" stroke="#DC2626" strokeWidth="2.5" />

                  {/* Stage 5 */}
                  <rect x="714" y="25" width="156" height="150" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="1.5" />
                  <circle cx="738" cy="49" r="12" fill="#DC2626" />
                  <text x="738" y="53" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">5</text>
                  <text x="758" y="53" fill="#F8FAFC" fontSize="11" fontWeight="bold">Forum Action</text>
                  <text x="726" y="80" fill="#CBD5E1" fontSize="10">NI s.138 PDCs + MSEFC</text>
                  <text x="726" y="96" fill="#CBD5E1" fontSize="10">(3x RBI) / Order 37</text>
                  <text x="726" y="112" fill="#CBD5E1" fontSize="10">CPC / IBC s.8 (&ge;₹1Cr)</text>
                  <text x="726" y="128" fill="#34D399" fontSize="10" fontWeight="bold">Full Principal + Int.</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                {[
                  {
                    step: "1. Substrate Sign-Off (BSA s.63)",
                    desc: "Archive digital Tramex/ASTM F1869 moisture readings, 72-hour ponding sheets, and batch COAs before and after application.",
                  },
                  {
                    step: "2. Warranty Activation Guard (Contract Act s.52)",
                    desc: "State in writing that the 5–10 year Non-Judicial Stamp Paper Warranty Bond activates strictly upon 100% invoice realization.",
                  },
                  {
                    step: "3. Vapor-Barrier Rebuttal (Contract Act s.53 & s.74)",
                    desc: "Document omitted civil DPM vapor barriers as the employer's breach and reject unilateral debit notes.",
                  },
                  {
                    step: "4. Tax Disallowance & Machine Recall",
                    desc: "Serve Section 43B(h) MSME tax notice to the buyer's statutory auditor and recall bailed tinting machines under s.160.",
                  },
                  {
                    step: "5. Multi-Forum Escalation",
                    desc: "Combine NI Act s.138 cheque prosecution with MSEFC (3x RBI interest), Order XXXVII CPC, or IBC s.8 Form 3/4.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800"
                  >
                    <p className="text-xs font-bold text-red-400 mb-1">
                      {item.step}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Statutory Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Statutory Matrix: Independent Price Liability vs. Warranty Covenants
                </h2>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Builder / Dealer Excuse</th>
                      <th className="p-3.5 font-bold">Governing Statute</th>
                      <th className="p-3.5 font-bold">Key Evidence Lock</th>
                      <th className="p-3.5 font-bold">Fastest Recovery Forum</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        20% held for 10-Yr Waterproofing Warranty
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Sale of Goods Act s.32/s.55; Contract Act s.52; MSMED Act s.15
                      </td>
                      <td className="p-3.5 text-slate-700">
                        72-hr ponding test sign-off + conditional Warranty Bond clause
                      </td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">
                        MSEFC (3x RBI) / Order XXXVII CPC
                      </td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        Epoxy / PU blistering from slab dampness
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Contract Act s.53, s.54 &amp; s.74; Sale of Goods Act s.42
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Pre-application Tramex moisture logs + missing civil DPM proof
                      </td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">
                        Commercial Court s.12A / Arbitration
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        Paint dealer credit default + machine lock
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Contract Act s.148/s.160; NI Act s.138/143A; BNS s.316
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Bailment/lease deed + GST ledger + dishonoured PDC memo
                      </td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">
                        Order XXXVII + NI s.138 + BNS s.316
                      </td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">
                        Admixture / chemical dues &ge; ₹1 Cr unpaid
                      </td>
                      <td className="p-3.5 text-slate-700">
                        IBC 2016 s.8 &amp; s.9 (Mobilox); BSA 2023 s.63
                      </td>
                      <td className="p-3.5 text-slate-700">
                        E-Way Bills + batch COAs + zero pre-notice defect emails
                      </td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">
                        NCLT IBC Section 8 Form 3/4
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        Split material vs. application MSME dispute
                      </td>
                      <td className="p-3.5 text-slate-700">
                        MSMED Act s.15–18 &amp; s.24; Income Tax Act s.43B(h)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Separate HSN-coded chemical supply GST invoices + Udyam
                      </td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">
                        MSME Samadhaan (MSEFC)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Interactive Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Interactive Construction-Chemical &amp; Flooring Dispute Playbooks
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Select your exact commercial bottleneck below to inspect the
                statutory counter-position and 3-step recovery protocol:
              </p>

              <ChemWaterproofingScenarioTabs />
            </section>

            {/* Section 5: Worked Ledger */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Worked Ledger: ₹48 Lakh Epoxy Flooring &amp; Waterproofing Recovery
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Consider a Micro/Small-registered waterproofing and epoxy
                flooring applicator who supplied ₹34 Lakh of PU/epoxy resins
                (separate HSN GST invoice) and ₹14 Lakh of application work for
                an industrial warehouse, where the builder withheld 25% (₹12
                Lakh) for 12 months citing a &ldquo;10-year warranty&rdquo; and
                blistering near an un-waterproofed expansion joint.
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 mb-5">
                <p className="text-xs font-bold uppercase tracking-widest text-red-400 mb-3">
                  MSMED Section 16 &amp; Section 43B(h) Financial Impact Model
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Withheld Principal (Material Supply):</span>
                      <span className="font-bold text-white">₹8,50,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Withheld Application Balance:</span>
                      <span className="font-bold text-white">₹3,50,000</span>
                    </div>
                    <div className="flex justify-between border-t border-white/10 pt-2">
                      <span className="text-slate-300">Total Unpaid Balance:</span>
                      <span className="font-black text-amber-400">₹12,00,000</span>
                    </div>
                  </div>

                  <div className="bg-emerald-950/40 border border-emerald-700/40 rounded-xl p-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-300">MSMED Rate (3x 6.50% RBI Bank Rate):</span>
                      <span className="font-bold text-emerald-400">19.50% p.a.</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">12-Month Monthly Compounding (₹12L):</span>
                      <span className="font-bold text-emerald-400">~₹2,56,100</span>
                    </div>
                    <div className="flex justify-between border-t border-emerald-700/40 pt-2">
                      <span className="text-slate-200">Total Recoverable Claim:</span>
                      <span className="font-black text-white">₹14,56,100+</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-300 mt-4 leading-relaxed">
                  <strong>Tax Disallowance Multiplier:</strong> Under Income Tax
                  Act Section 43B(h), if the ₹8.50 Lakh material supply bill
                  remains unpaid past March 31 beyond 45 days, the builder loses
                  expense deduction for the entire ₹8.50 Lakh in that assessment
                  year—adding ~₹2.14 Lakh in immediate corporate tax liability
                  (at 25.17% effective rate) until actual payment.
                </p>
              </div>

              <p className="text-sm text-slate-700">
                Compute your exact statutory interest using our{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                >
                  MSME Delayed Payment Interest Calculator
                </Link>{" "}
                or generate a formal statutory notice via our{" "}
                <Link
                  href="/templates/msme-delayed-payment-demand-notice"
                  className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                >
                  MSME Delayed Payment Demand Notice Template
                </Link>
                .
              </p>
            </section>

            {/* Section 6: Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Substrate Moisture, Tinting Lease &amp; BSA Section 63 Evidence
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "1. Pre-Application Moisture & RH Logs",
                    desc: "Timestamped digital photos of Tramex / calcium chloride moisture readings (<4%–5%) and dew-point logs proving substrate compliance before primer coat.",
                  },
                  {
                    title: "2. 72-Hour Ponding Test & Handover Sheet",
                    desc: "Jointly signed terrace/basement ponding test register confirming zero seepage at handover, locking acceptance under Sale of Goods Act s.42.",
                  },
                  {
                    title: "3. Batch-Wise COA & GST E-Way Bills",
                    desc: "Manufacturer Certificates of Analysis (COA), Part-A/B E-Way Bills, and site gate-inward stamps proving chemical grade and delivery.",
                  },
                  {
                    title: "4. Conditional Warranty Activation Clause",
                    desc: "Written quotation/email stating the 5-to-10-year Stamp Paper Warranty Bond issues only upon 100% receipt of all supply and application bills.",
                  },
                  {
                    title: "5. Tinting Machine Bailment & PDC Trail",
                    desc: "Signed equipment bailment/lease agreement with serial numbers, software telemetry logs, and bank return memos for dishonoured security cheques.",
                  },
                  {
                    title: "6. BSA 2023 Section 63 Certificate",
                    desc: "Statutory electronic evidence certificate executed by your QA/billing officer authenticating WhatsApp site photos, emails, and ERP ledgers.",
                  },
                ].map((card) => (
                  <div
                    key={card.title}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <p className="text-sm font-bold text-slate-900 mb-1">
                      {card.title}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Court Precedents */}
            <section
              id="heading-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Court Precedents on Retention, Independent Covenants &amp; Cheques
                </h2>
              </div>

              <div className="space-y-5">
                {COURT_PRECEDENTS.map((item) => (
                  <div
                    key={item.parties}
                    className="relative bg-slate-50 border border-slate-200 rounded-2xl p-5 pl-6 overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]" />
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626]">
                        {item.title}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {item.amount}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 mb-1">
                      {item.parties}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mb-3">
                      {item.citation}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 mb-2 leading-relaxed">
                      <strong>Facts &amp; Holding:</strong> {item.facts}{" "}
                      {item.holding}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-900 font-medium bg-white border border-slate-200 rounded-lg p-3">
                      <strong>Creditor Takeaway:</strong> {item.takeaway}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Waterproofing, Epoxy &amp; Paint Recovery Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-3">
                {FAQ_ITEMS.map((faq) => (
                  <details
                    key={faq.question}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="cursor-pointer font-bold text-sm sm:text-base text-slate-900 list-none flex items-center justify-between gap-3">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] font-black text-lg shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 9: Sources & Dual CTA + Sibling Spokes */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Authoritative Statutes, Technical Codes &amp; Official Portals
                </h2>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 list-disc pl-5">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.url}>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-[#DC2626] hover:underline font-medium"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="border-t border-slate-200 pt-6">
                <ChemWaterproofingNoticeCTA variant="dual" />
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
                <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Related IND-14 &amp; Core B2B Recovery Playbooks
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
                  <Link
                    href="/ready-mix-concrete-rmc-supplier-builder-payment-cube-test-dispute"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    &rarr; RMC Supplier 28-Day Cube Failure Dispute Playbook
                  </Link>
                  <Link
                    href="/tmt-steel-structural-iron-trader-credit-default-recovery-india"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    &rarr; TMT Steel &amp; Structural Iron Trader Credit Recovery
                  </Link>
                  <Link
                    href="/industrial-chemicals-solvents-dyes-pigments-invoice-recovery"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    &rarr; Industrial Chemicals, Solvents &amp; Dyes Invoice Recovery
                  </Link>
                  <Link
                    href="/law/order-37-summary-suit-money-recovery"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    &rarr; Order XXXVII CPC Summary Suit for Money Recovery
                  </Link>
                  <Link
                    href="/cheque-bounce-and-civil-suit-together"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    &rarr; Filing NI s.138 Cheque Bounce &amp; Civil Suit Together
                  </Link>
                  <Link
                    href="/recovery/vendor-payments"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    &rarr; B2B Vendor &amp; Supplier Payment Recovery Desk
                  </Link>
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
