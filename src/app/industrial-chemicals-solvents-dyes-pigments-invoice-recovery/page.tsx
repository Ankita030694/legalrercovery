import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import ChemTableOfContents from "./ChemTableOfContents";
import ChemScenarioTabs from "./ChemScenarioTabs";
import ChemNoticeCTA from "./ChemNoticeCTA";

export const revalidate = 86400;

const PAGE_URL = "/industrial-chemicals-solvents-dyes-pigments-invoice-recovery";
const EXACT_H1 =
  "Once Your Solvent Tanker Is Pumped Into the Buyer's Underground Storage Tank, How Do You Defeat 'Low Purity' Payment Excuses?";
const META_TITLE = "Industrial Chemical, Solvent & Dye Supplier Debt Recovery";
const META_DESCRIPTION =
  "Beat post-decanting chemical purity excuses using Sale of Goods Act s.42, sealed retention samples, Order 37 CPC, MSME 3x interest & IBC s.8.";

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
    title: "The Sale of Goods Act, 1930 (Sections 41 & 42 — Pre-Decanting Inspection & Irrevocable Acceptance) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title: "The Code of Civil Procedure, 1908 (Order XXXVII — Summary Suit on Liquidated Invoices & Weighbridge Proofs) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "The Insolvency and Bankruptcy Code, 2016 (Sections 8 & 9 — Operational Creditor Form 3/4 Demand) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/15479",
  },
  {
    title: "Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15–18 & 24 — 45-Day Cap & 3x RBI Interest) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Income Tax Act, 1961 (Section 43B(h) — Corporate Tax Disallowance on Overdue Micro/Small Supplier Bills)",
    url: "https://www.incometaxindia.gov.in/",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Admissibility of Electronic Weighbridge, SCADA & WhatsApp Records) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Negotiable Instruments Act, 1881 (Sections 138 & 143A — Cheque Bounce & 20% Interim Compensation) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Supreme Court on Sham 'Pre-Existing Quality Disputes' Under IBC s.8 & s.9",
    parties: "Mobilox Innovations Private Limited v. Kirusa Software Private Limited",
    citation: "(2018) 1 SCC 353, Supreme Court of India",
    facts:
      "An operational creditor served a Section 8 demand notice for unpaid invoices. The corporate debtor attempted to stall NCLT admission by raising a belated, uncorroborated quality defense.",
    holding:
      "The Supreme Court held that a 'dispute' under Section 8(2)(a) of the IBC must be a genuine pre-existing dispute raised before the demand notice—not a 'patently feeble legal argument or an assertion of fact unsupported by evidence' or a 'moonshine defense'.",
    amount: "Moonshine Defense Rule — Defeats Post-Decant Tank Contamination Emails",
    takeaway:
      "When a factory decants 20 KL of solvent without protest, consumes it over 45–60 days, and alleges 'moisture' only after receiving a legal notice, NCLT treats the objection as a sham moonshine defense.",
  },
  {
    title: "Supreme Court on MSMED Act 3x Compound Interest Overriding Buyer PO Terms",
    parties: "Silpi Industries v. Kerala State Road Transport Corporation & Anr.",
    citation: "2021 SCC OnLine SC 439, Supreme Court of India",
    facts:
      "Industrial buyers relied on purchase-order boilerplate excluding late-payment interest to resist statutory interest awards under the MSMED Act, 2006.",
    holding:
      "The Supreme Court affirmed that the MSMED Act, 2006 has overriding statutory force under Section 24. Any Micro or Small enterprise holding Udyam registration on the date of supply is entitled to 3x RBI Bank Rate compound monthly interest under Section 16 regardless of contrary PO clauses.",
    amount: "Mandatory 3x RBI Compound Interest — Overrides 'Zero Interest' Factory POs",
    takeaway:
      "Udyam-registered chemical, dye, resin, and pigment suppliers can enforce compounded monthly statutory interest even if the buyer's purchase order waives delayed-payment interest.",
  },
  {
    title: "Supreme Court on Security Cheques Triggering Full Section 138 NI Act Liability",
    parties: "Sripati Singh (Since Deceased) Through His Son Gaurav Singh v. State of Jharkhand",
    citation: "2021 SCC OnLine SC 1002, Supreme Court of India",
    facts:
      "A commercial buyer argued that post-dated cheques furnished 'as security' at credit-line onboarding could not sustain criminal prosecution under Section 138 NI Act upon later default.",
    holding:
      "The Supreme Court clarified that a security cheque crystallizes into an enforceable negotiable instrument the moment the underlying supply debt becomes due and payable on the date of presentation.",
    amount: "Full Section 138 & 143A (20% Interim Deposit) Liability on Buyer Security Cheques",
    takeaway:
      "Chemical distributors in Ankleshwar, Vapi, or Bhiwandi holding dealer PDCs can deposit them after 45-day default and prosecute factory directors under Section 138 alongside civil recovery.",
  },
  {
    title: "Supreme Court on Mandatory Section 12A Mediation in Commercial Suits",
    parties: "Patil Automation Private Limited v. Rakheja Engineers Private Limited",
    citation: "(2022) 10 SCC 1, Supreme Court of India",
    facts:
      "Suppliers instituted commercial suits of ₹3 Lakh and above directly without exhausting pre-institution mediation under Section 12A of the Commercial Courts Act, 2015.",
    holding:
      "The Supreme Court held that Section 12A pre-institution mediation is mandatory for commercial suits of ₹3 Lakh+ unless the plaint genuinely seeks urgent interim relief (such as Order XXXVIII Rule 5 attachment before judgment).",
    amount: "Mandatory Section 12A Compliance — Prevents Order VII Rule 11 Rejection",
    takeaway:
      "Chemical and solvent suppliers filing Commercial Court or Order XXXVII suits must complete 12A mediation or plead urgent asset-dissipation attachment before judgment.",
  },
];

const FAQS = [
  {
    question: "Can a buyer refuse payment 60 days after decanting a solvent tanker into their storage tank?",
    answer:
      "No. Under Section 42 of the Sale of Goods Act, 1930, breaking the tanker's outlet valve seal and pumping liquid chemical into a commingled underground or vertical storage tank constitutes an act inconsistent with the seller's ownership—resulting in irrevocable statutory acceptance. Once commingled with residual factory stock, the buyer cannot isolate sample origin and cannot withhold payment over belated moisture or purity allegations.",
  },
  {
    question: "How does a sealed retention sample defeat post-unloading chemical purity excuses?",
    answer:
      "A tamper-evident retention sample drawn at loading (or jointly before breaking the tanker valve seal) preserves an uncontaminated reference of the exact dispatch batch. When a buyer sends a unilateral lab report 45 days later from their storage tank, your advocate notice demands joint NABL testing of the unopened sealed retention bottle—immediately exposing tank-line contamination or sham excuses.",
  },
  {
    question: "Can chemical and dye suppliers recover unpaid returnable 200L drum or IBC tote deposits?",
    answer:
      "Yes. Where invoices or supply terms specify refundable deposits or a 30-day return window for 200L HDPE/MS drums or 1,000L IBC totes, unreturned containers constitute an actionable contractual debt under Sections 73–74 of the Indian Contract Act, 1872. Reconcile outward E-Way Bills against signed empty-return gate passes to claim both invoice principal and container replacement value.",
  },
  {
    question: "How do Ankleshwar, Vapi, Tarapur, and Bhiwandi chemical MSMEs use Section 43B(h)?",
    answer:
      "If you hold valid Udyam registration as a Micro or Small enterprise on the date of supply, Section 15 of the MSMED Act caps credit at 45 days. Under Section 43B(h) of the Income Tax Act, 1961, any corporate buyer who fails to pay within 45 days loses the income-tax expense deduction for that purchase in the current financial year—creating immediate ~25%–30% tax disallowance pressure when notified to their CFO and Statutory Auditor.",
  },
  {
    question: "What documents are needed for an Order XXXVII CPC Summary Suit for chemical invoices?",
    answer:
      "To file a fast-track Order XXXVII summary suit, assemble: (1) GST tax invoices with written payment & pre-decanting QC terms, (2) GST E-Way Bill Part-A and Part-B, (3) Lorry Receipt (LR) and weighbridge gross/tare weight slips, (4) Batch Certificate of Analysis (COA) & valve-seal sign-off, (5) GSTR-1 / ledger confirmation, and (6) BSA 2023 Section 63 certificate for electronic records.",
  },
  {
    question: "When can a specialty chemical or acid supplier serve an IBC Section 8 Form 3 notice?",
    answer:
      "When your admitted operational debt against a Private Limited or Public Limited corporate buyer reaches ₹1 Crore or more (which can include accrued contractual or MSMED interest where stipulated), you can serve an IBC Section 8 Form 3/4 Demand Notice. The corporate debtor gets only 10 days to pay or demonstrate a genuine pre-existing dispute under the Mobilox standard.",
  },
  {
    question: "What if the buyer alleges 'shade variation' after consuming textile dyes or pigments in production?",
    answer:
      "Under Sections 41 and 42 of the Sale of Goods Act, 1930, the buyer must inspect bulk dye/pigment lots against the approved lab-dip before mixing them into commercial production. Once consumed with binders, auxiliaries, and third-party fabric or coatings, post-production shade complaints are barred by acceptance and process-variable estoppel.",
  },
];

export default function IndustrialChemicalsRecoveryPage() {
  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
  const reviewerInfo = {
    name: "Anuj Anand Malik",
    role: "Advocate & Founder, AMA Legal Solutions",
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: META_DESCRIPTION,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${PAGE_URL}`,
    },
    image: `${SITE_URL}/blog_money_recovery.png`,
    datePublished: "2026-11-17T09:00:00+05:30",
    dateModified: "2026-11-17T16:20:00+05:30",
    author: {
      "@type": "Person",
      name: reviewerInfo.name,
      jobTitle: reviewerInfo.role,
    },
    publisher: {
      "@type": "Organization",
      name: "LegalRecovery.in",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Chemical, Solvent & Dye Suppliers Defeat Post-Decanting Purity Excuses and Recover Overdue Invoices",
    description:
      "4-stage statutory recovery protocol using Sale of Goods Act s.42 valve-seal sign-off, sealed retention samples, Order XXXVII CPC, MSMED s.16 & Section 43B(h), and IBC Section 8.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Lock Pre-Decanting Valve-Seal & Weighbridge Proof",
        text: "Compile the batch Certificate of Analysis (COA), weighbridge slip, E-Way Bill Part-B, and buyer gate-signed tanker valve-seal clearance recorded before decanting into the underground storage tank.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Invoke Sealed Retention Sample & Section 42 Commingling Estoppel",
        text: "Serve a fact-verified notice citing Sale of Goods Act s.42 irrevocable acceptance upon commingling and demanding joint NABL re-testing of the unopened dispatch retention sample.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Trigger MSMED 3x Interest, Section 43B(h) Tax Notice & NI s.138",
        text: "For Udyam-registered suppliers past 45 days, serve an Income Tax s.43B(h) disallowance warning to the buyer CFO/auditor and deposit security PDCs under NI Act s.138.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Escalate to Order XXXVII Summary Suit, MSEFC or IBC Section 8",
        text: "File an Order XXXVII CPC summary suit for liquidated invoices, an MSME Samadhaan reference for 3x RBI compound interest, or an IBC Section 8 Form 3 demand for ₹1 Cr+ corporate arrears.",
      },
    ],
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
        name: "Chemicals, Steel, RMC & Building Materials Recovery",
        item: `${SITE_URL}/industries/chemicals-steel-rmc-building-materials-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Industrial Chemicals, Solvents & Dyes Invoice Recovery",
        item: `${SITE_URL}${PAGE_URL}`,
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

      {/* Dark Gradient Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-14 B2B Creditor Playbook</span>
            <span>&bull;</span>
            <span>Sale of Goods Act s.42</span>
            <span>&bull;</span>
            <span>Order XXXVII &amp; IBC s.8</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box (40-60 words + Parent Hub Link) */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Under <strong>Section 42 of the Sale of Goods Act, 1930</strong>, breaking a tanker&apos;s valve seal and pumping solvent into a buyer&apos;s commingled storage tank constitutes irrevocable acceptance. Part of our{" "}
            <Link
              href="/industries/chemicals-steel-rmc-building-materials-recovery"
              className="text-red-400 underline hover:text-red-300 font-bold"
            >
              Chemicals, Steel, RMC &amp; Building Materials Recovery Hub
            </Link>
            , this SOP pairs sealed retention samples with Order XXXVII CPC, MSMED s.16, and IBC s.8 to crush belated purity excuses.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">s.42 Estoppel</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Valve-Seal Break = Acceptance
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">3x RBI Rate</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                MSMED s.16 + 43B(h) Tax Hit
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">10-Day Bar</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                IBC s.8 Form 3 (&#8377;1 Cr+ Debt)
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">20% Interim</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                NI Act s.138 &amp; s.143A PDCs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <Breadcrumbs
          items={[
            {
              label: "Chemicals, Steel & RMC Recovery",
              href: "/industries/chemicals-steel-rmc-building-materials-recovery",
            },
            {
              label: "Chemical, Solvent & Dye Invoice Recovery",
              href: PAGE_URL,
            },
          ]}
        />

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-4">
          <ChemTableOfContents />

          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Why Commingled Tanker Deliveries Trigger Fake Purity Disputes
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Across India&apos;s chemical corridors&mdash;from <strong>Ankleshwar, Vapi, and Dahej GIDC</strong> in Gujarat to <strong>Tarapur, Thane-Belapur, and Bhiwandi</strong> in Maharashtra and <strong>Bawana</strong> in Delhi&mdash;specialty chemical, solvent, acid, resin, and dye suppliers face a recurring working-capital ambush. A 20 KL road tanker arrives at the buyer&apos;s factory gate accompanied by a batch Certificate of Analysis (COA), weighbridge slip, and GST E-Way Bill. The buyer&apos;s QC chemist draws a dip sample, signs the gate pass, breaks the outlet valve seal, and pumps the cargo directly into an underground or vertical storage tank.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Forty-five to sixty days later, when the credit cycle closes and your accounts team demands payment, the buyer suddenly emails an unverified private-lab report alleging &ldquo;excess moisture,&rdquo; &ldquo;low assay concentration,&rdquo; or &ldquo;off-spec color.&rdquo; Their tactical objective is simple: fabricate a superficial quality controversy to manufacture a &ldquo;pre-existing dispute&rdquo; under the Insolvency and Bankruptcy Code (IBC) or stall a civil suit.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  The Legal Reality: Identity Is Extinguished Upon Commingling
                </p>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Once 20 KL of methanol, toluene, ethyl acetate, caustic soda lye, or industrial resin mixes into a buyer&apos;s half-full tank containing older residual stock, unpurged pipelines, or moisture-laden vents, physical segregation is impossible. Under <strong>Section 42 of the Sale of Goods Act, 1930</strong>, that act of commingling is legally inconsistent with the seller&apos;s ownership&mdash;extinguishing the buyer&apos;s right of rejection and locking in the invoice debt. For parallel site-delivery strategies in heavy materials, see our{" "}
                  <Link
                    href="/ready-mix-concrete-rmc-supplier-builder-payment-cube-test-dispute"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    RMC 28-Day Cube Test Dispute Playbook
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 2: Pre-Decanting Decision Tree SVG + Mobile Cards */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Pre-Decanting Valve-Seal to IBC s.8 Recovery Decision Flow
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Winning chemical recovery cases depends on neutralizing the buyer&apos;s quality excuse before it reaches court. Follow this four-stage escalation rail from factory gate sign-off to summary enforcement:
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block bg-slate-900 rounded-2xl p-6 overflow-x-auto">
                <svg
                  width="880"
                  height="220"
                  viewBox="0 0 880 220"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="4-stage chemical tanker valve-seal acceptance and legal recovery workflow"
                  className="w-full h-auto"
                >
                  <rect x="10" y="30" width="190" height="150" rx="14" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <text x="26" y="58" fill="#F87171" fontSize="11" fontWeight="700">STAGE 1 &bull; GATE QC</text>
                  <text x="26" y="82" fill="#FFFFFF" fontSize="14" fontWeight="800">Valve-Seal &amp; Dip</text>
                  <text x="26" y="102" fill="#FFFFFF" fontSize="14" fontWeight="800">Sample Sign-Off</text>
                  <text x="26" y="128" fill="#CBD5E1" fontSize="11">COA + Weighbridge Slip +</text>
                  <text x="26" y="144" fill="#CBD5E1" fontSize="11">E-Way Part-B + Retention</text>
                  <text x="26" y="160" fill="#34D399" fontSize="11" fontWeight="700">s.42 Acceptance Locked</text>

                  <path d="M204 105 L234 105" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" />
                  <polygon points="234,99 246,105 234,111" fill="#DC2626" />

                  <rect x="248" y="30" width="190" height="150" rx="14" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <text x="264" y="58" fill="#F87171" fontSize="11" fontWeight="700">STAGE 2 &bull; DAY 46</text>
                  <text x="264" y="82" fill="#FFFFFF" fontSize="14" fontWeight="800">Advocate Rebuttal</text>
                  <text x="264" y="102" fill="#FFFFFF" fontSize="14" fontWeight="800">&amp; Retention Test</text>
                  <text x="264" y="128" fill="#CBD5E1" fontSize="11">Reject commingled tank</text>
                  <text x="264" y="144" fill="#CBD5E1" fontSize="11">lab mail; offer NABL test</text>
                  <text x="264" y="160" fill="#FBBF24" fontSize="11" fontWeight="700">Pre-empts Mobilox Plea</text>

                  <path d="M442 105 L472 105" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" />
                  <polygon points="472,99 484,105 472,111" fill="#DC2626" />

                  <rect x="486" y="30" width="190" height="150" rx="14" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <text x="502" y="58" fill="#F87171" fontSize="11" fontWeight="700">STAGE 3 &bull; TAX &amp; PDC</text>
                  <text x="502" y="82" fill="#FFFFFF" fontSize="14" fontWeight="800">s.43B(h) Audit &amp;</text>
                  <text x="502" y="102" fill="#FFFFFF" fontSize="14" fontWeight="800">NI s.138 Cheque</text>
                  <text x="502" y="128" fill="#CBD5E1" fontSize="11">3x RBI interest + Tax</text>
                  <text x="502" y="144" fill="#CBD5E1" fontSize="11">disallowance notice +</text>
                  <text x="502" y="160" fill="#34D399" fontSize="11" fontWeight="700">20% s.143A Interim</text>

                  <path d="M680 105 L710 105" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" />
                  <polygon points="710,99 722,105 710,111" fill="#DC2626" />

                  <rect x="724" y="30" width="146" height="150" rx="14" fill="#7F1D1D" stroke="#DC2626" strokeWidth="1.5" />
                  <text x="738" y="58" fill="#FCA5A5" fontSize="11" fontWeight="700">STAGE 4 &bull; FORUM</text>
                  <text x="738" y="82" fill="#FFFFFF" fontSize="14" fontWeight="800">Order 37 /</text>
                  <text x="738" y="102" fill="#FFFFFF" fontSize="14" fontWeight="800">MSEFC / IBC</text>
                  <text x="738" y="128" fill="#FECACA" fontSize="11">Summary Suit or</text>
                  <text x="738" y="144" fill="#FECACA" fontSize="11">Form 3 (&#8377;1 Cr+)</text>
                  <text x="738" y="160" fill="#FFFFFF" fontSize="11" fontWeight="700">Asset Attachment</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                {[
                  {
                    stage: "Stage 1 • Gate QC",
                    title: "Valve-Seal & Dip Sample Sign-Off",
                    desc: "Lock COA, weighbridge slip, E-Way Part-B, and sealed retention sample before decanting.",
                  },
                  {
                    stage: "Stage 2 • Day 46",
                    title: "Advocate Rebuttal & Retention Test",
                    desc: "Invoke Sale of Goods Act s.42 commingling bar and offer joint NABL testing of unopened retention bottle.",
                  },
                  {
                    stage: "Stage 3 • Tax & PDC",
                    title: "s.43B(h) Audit & NI s.138 Cheque",
                    desc: "Notify buyer CFO/auditor of 43B(h) disallowance + 3x RBI interest and deposit security PDCs.",
                  },
                  {
                    stage: "Stage 4 • Forum",
                    title: "Order 37 / MSEFC / IBC Section 8",
                    desc: "File summary suit, MSME Samadhaan reference, or Form 3 insolvency demand for ₹1 Cr+ defaults.",
                  },
                ].map((item) => (
                  <div
                    key={item.stage}
                    className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800"
                  >
                    <p className="text-[11px] font-bold uppercase tracking-wider text-red-400">
                      {item.stage}
                    </p>
                    <p className="text-sm font-black mt-1">{item.title}</p>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">{item.desc}</p>
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
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Forum Matrix for Chemical, Solvent &amp; Dye Claims
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Choosing the right statutory weapon depends on your invoice ticket size, Udyam registration status, and whether you hold security cheques. Compare your options below or run your exact numbers in our{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  MSME 3x Interest Calculator
                </Link>
                .
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Statutory Remedy</th>
                      <th className="p-3.5 font-bold">Eligibility &amp; Floor</th>
                      <th className="p-3.5 font-bold">Primary Chemical Hook</th>
                      <th className="p-3.5 font-bold">Key Leverage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        <Link
                          href="/law/order-37-summary-suit-money-recovery"
                          className="text-[#DC2626] hover:underline"
                        >
                          Order XXXVII CPC Summary Suit
                        </Link>
                      </td>
                      <td className="p-3.5 text-slate-700">Any written invoice / PO debt (&#8377;3L+ in Commercial Court)</td>
                      <td className="p-3.5 text-slate-700">Signed invoices, E-Way Bill Part-B, weighbridge &amp; COA</td>
                      <td className="p-3.5 text-slate-700">Buyer must seek Leave to Defend; court can order deposit</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">MSMED Act s.15–18 &amp; s.43B(h)</td>
                      <td className="p-3.5 text-slate-700">Udyam Micro/Small supplier past 45 days</td>
                      <td className="p-3.5 text-slate-700">Valid Udyam on supply date + GST B2B invoice</td>
                      <td className="p-3.5 text-slate-700">3x RBI compound interest + ~25–30% tax disallowance</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        <Link
                          href="/cheque-bounce-and-civil-suit-together"
                          className="text-[#DC2626] hover:underline"
                        >
                          NI Act s.138 &amp; s.143A
                        </Link>
                      </td>
                      <td className="p-3.5 text-slate-700">Dishonoured PDC / security cheque (30-day notice)</td>
                      <td className="p-3.5 text-slate-700">Crystalized supply ledger + written presentation memo</td>
                      <td className="p-3.5 text-slate-700">Criminal summons to directors + 20% interim deposit</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">IBC Section 8 Form 3 / s.9</td>
                      <td className="p-3.5 text-slate-700">&#8377;1 Cr+ default by Pvt/Pub Ltd company</td>
                      <td className="p-3.5 text-slate-700">Pre-decant sign-off defeating Mobilox sham dispute</td>
                      <td className="p-3.5 text-slate-700">10-day insolvency countdown; board control risk</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        <Link
                          href="/recovery/vendor-payments"
                          className="text-[#DC2626] hover:underline"
                        >
                          B2B Vendor Recovery Notice
                        </Link>
                      </td>
                      <td className="p-3.5 text-slate-700">All tickets (&#8377;50K–&#8377;5 Cr+) before litigation</td>
                      <td className="p-3.5 text-slate-700">s.42 commingling bar + drum deposit reconciliation</td>
                      <td className="p-3.5 text-slate-700">Fast settlement without court fees or 12A delay</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Interactive Scenario Tabs */}
            <section id="heading-scenario-tabs" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  4 Chemical &amp; Dye Default Scenarios: Operational Counter-Moves
                </h2>
              </div>
              <ChemScenarioTabs />
            </section>

            {/* Dual CTA Break */}
            <section className="scroll-mt-28 space-y-4">
              <ChemNoticeCTA />
            </section>

            {/* Section 5: Worked Financial & Interest Calculation Box */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Worked Ledger: &#8377;36.8 Lakh Solvent &amp; Drum Recovery Math
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Consider an Ankleshwar Udyam-registered solvent manufacturer who supplied 2 tankers of industrial ethyl acetate (&#8377;28,00,000) plus 160 returnable 200L HDPE drums (&#8377;8,80,000 drum deposit/chemical batch) to a Pune pharma-intermediate factory. Payment stalled for 180 days behind a belated &ldquo;moisture variance&rdquo; email.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-red-400">
                    Creditor Claim Computation (180 Days Overdue)
                  </p>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-300">Unpaid Tanker &amp; Drum Invoices</span>
                      <span className="font-bold">&#8377;34,00,000</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-300">Unreturned 140 HDPE Drums (@ &#8377;2,000)</span>
                      <span className="font-bold">&#8377;2,80,000</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-300">MSMED s.16 Interest (3x RBI ~19.5% p.a., ~135d)</span>
                      <span className="font-bold text-emerald-400">+ &#8377;2,65,400</span>
                    </div>
                    <div className="flex justify-between pt-1 text-base font-black">
                      <span>Total Recoverable Claim</span>
                      <span className="text-emerald-400">&#8377;39,45,400</span>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 sm:p-6 flex flex-col justify-between space-y-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
                      Buyer&apos;s Section 43B(h) Tax Disallowance Shock
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      If the buyer fails to clear the &#8377;34,00,000 Micro/Small supplier principal before March 31 (past the 45-day cap), the entire &#8377;34,00,000 expense is added back to taxable profit under <strong>Section 43B(h)</strong>&mdash;triggering ~&#8377;8.55 Lakh to &#8377;10.20 Lakh in immediate cash tax outflow!
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Link
                      href="/templates/section-43bh-msme-tax-disallowance-notice"
                      className="text-xs font-bold text-[#DC2626] underline hover:text-[#B91C1C]"
                    >
                      Use 43B(h) Tax Notice Template &rarr;
                    </Link>
                    <Link
                      href="/tools/blocked-gst-itc-vendor-default-interest-calculator"
                      className="text-xs font-bold text-slate-800 underline hover:text-slate-950"
                    >
                      Check GST ITC Impact &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: BSA 2023 s.63 & Pre-Decanting Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  8-Point Tanker QC &amp; BSA 2023 s.63 Evidence Checklist
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To make your Order XXXVII suit or IBC Section 8 dossier bulletproof against sham quality defenses, compile these eight primary records before serving your demand notice:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  {
                    num: "01",
                    title: "Pre-Decanting Valve-Seal Sign-Off",
                    desc: "Gate inward slip noting intact tanker top/bottom seal numbers signed by buyer's QC before unloading.",
                  },
                  {
                    num: "02",
                    title: "Batch Certificate of Analysis (COA)",
                    desc: "Lab-signed purity %, moisture PPM, specific gravity, and GC/HPLC assay matching the dispatched tanker lot.",
                  },
                  {
                    num: "03",
                    title: "Sealed Dispatch Retention Sample",
                    desc: "Tamper-evident 500 ml bottle drawn at factory loading, stored unopened for joint NABL arbitration testing.",
                  },
                  {
                    num: "04",
                    title: "Dharamkanta Weighbridge & LR Slips",
                    desc: "Gross, tare, and net weight receipts proving exact KL/MT quantity delivered at the buyer's factory gate.",
                  },
                  {
                    num: "05",
                    title: "GST Tax Invoice & E-Way Bill Part-B",
                    desc: "Invoices carrying explicit 'No claim after valve-seal break/decanting' clause plus vehicle-matched E-Way Bill.",
                  },
                  {
                    num: "06",
                    title: "Drum / IBC Tote Return Gate Passes",
                    desc: "Reconciled outward vs. empty-return challans establishing exact unreturned 200L drum or IBC cage counts.",
                  },
                  {
                    num: "07",
                    title: "BSA 2023 Section 63 Certificate",
                    desc: "Statutory electronic-record certificate authenticating ERP ledgers, WhatsApp lab-dip approvals, and email trails.",
                  },
                  {
                    num: "08",
                    title: "Udyam Certificate & Limitation Audit",
                    desc: "Active Udyam registration on supply date for 3x interest; verify 3-year window via our Limitation Calculator.",
                  },
                ].map((item) => (
                  <div
                    key={item.num}
                    className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200"
                  >
                    <span className="text-xs font-black text-[#DC2626] bg-red-50 border border-red-200 rounded-lg px-2 py-1 shrink-0">
                      {item.num}
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-2 text-xs sm:text-sm font-bold">
                <Link
                  href="/templates/msme-delayed-payment-demand-notice"
                  className="text-[#DC2626] underline hover:text-[#B91C1C]"
                >
                  Open MSME Demand Notice Template &rarr;
                </Link>
                <Link
                  href="/tools/limitation-period-calculator"
                  className="text-slate-800 underline hover:text-slate-950"
                >
                  Verify 3-Year Limitation Deadline &rarr;
                </Link>
              </div>
            </section>

            {/* Section 7: Court Precedents */}
            <section
              id="heading-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Supreme Court Precedents Defeating Sham Chemical Disputes
                </h2>
              </div>

              <div className="space-y-4">
                {COURT_PRECEDENTS.map((item) => (
                  <div
                    key={item.parties}
                    className="relative pl-5 pr-4 py-4 rounded-xl bg-slate-50 border border-slate-200 overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]" />
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                        {item.title}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-500">
                        {item.citation}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-black text-slate-900 mb-2">
                      {item.parties}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                      <strong>Holding:</strong> {item.holding}
                    </p>
                    <p className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
                      Creditor Takeaway: {item.takeaway}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  FAQs: Chemical, Solvent &amp; Dye Supplier Invoice Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-xl border border-slate-200 bg-slate-50/70 p-4 open:bg-white open:shadow-xs transition-all"
                  >
                    <summary className="flex items-center justify-between gap-3 cursor-pointer list-none font-bold text-sm sm:text-base text-slate-900">
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

            {/* Section 9: Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Authorities &amp; Official Bare-Act Sources
                </h2>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.title} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold">&bull;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-800 hover:text-[#DC2626] underline"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>

              <p className="text-[11px] text-slate-500 pt-3 border-t border-slate-100">
                Reviewed by <strong>{reviewerInfo.name}</strong> ({reviewerInfo.role}). Information is for B2B statutory creditor guidance under Indian commercial laws.
              </p>
            </section>
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
