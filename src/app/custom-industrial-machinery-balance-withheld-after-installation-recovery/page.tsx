import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import MachineryRecoveryTableOfContents from "./MachineryRecoveryTableOfContents";
import MachineryRecoveryScenarioTabs from "./MachineryRecoveryScenarioTabs";
import MachineryRecoveryCTA from "./MachineryRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/custom-industrial-machinery-balance-withheld-after-installation-recovery";
const EXACT_H1 =
  "Enforcing Sale of Goods Act Section 42 When a Factory Runs Your Machinery Commercially While Withholding the Final 10–20% Balance";
const META_TITLE = "Buyer Running Machine in Production Without Paying Balance?";
const META_DESCRIPTION =
  "Under Sale of Goods Act Section 42, running delivered machinery for commercial production constitutes deemed acceptance, defeating belated defect excuses.";

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const LEGAL_REVIEWER = {
  name: "Anuj Anand Malik",
  role: "Advocate & Founder, AMA Legal Solutions",
};

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
        alt: formatAltText("Custom Industrial Machinery Balance Withheld Recovery"),
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
    remedy: "Deemed Acceptance & Suit for Price",
    statute: "Sale of Goods Act, 1930 (Sections 42 & 55)",
    timing: "Immediate upon commercial utilization of delivered machinery",
    mechanism:
      "Serve formal notice establishing that commercial production is an act inconsistent with the seller's ownership under Section 42; demand immediate payment of the contract price under Section 55",
    relief:
      "Bars the buyer from rejecting the machine; matures the final 10–20% milestone; eliminates unilateral discount demands",
    suitability:
      "Factories running equipment in 2 or 3 daily shifts while withholding Erection and Commissioning Certificates (ECC)",
    tone: "emerald",
  },
  {
    remedy: "Breach of Warranty Bar Against Belated Rejection",
    statute: "Sale of Goods Act, 1930 (Section 59) & ICA s.73",
    timing: "Triggered when buyer raises belated defect claims 3–12 months post-installation",
    mechanism:
      "Establish that post-acceptance remedies are strictly limited to proving specific technical damages; buyer cannot withhold the entire machinery price or disown the contract",
    relief:
      "Forces buyer into independent proof of damages; prevents indefinite retention of capital goods balance",
    suitability:
      "Buyers fabricating speed, output, or vibration shortfalls after extensive factory operation",
    tone: "slate",
  },
  {
    remedy: "MSMED Act Statutory 3x RBI Compound Interest",
    statute: "MSMED Act, 2006 (Sections 15–18) & Samadhaan / ODR",
    timing: "Day 46 post-delivery / commissioning milestone date",
    mechanism:
      "Filing before State Micro and Small Enterprises Facilitation Council (MSEFC) or online ODR portal for manufacturing suppliers holding active Udyam registration",
    relief:
      "Mandatory monthly compounding interest at 3 times the RBI Bank Rate; overrides conflicting 12-month retention clauses in buyer purchase orders",
    suitability:
      "Udyam-registered Special Purpose Machine (SPM), CNC, tool-room, and packaging machinery manufacturers",
    tone: "emerald",
  },
  {
    remedy: "Commercial Summary Suit for Liquidated Debt (Order XXXVII)",
    statute: "Code of Civil Procedure, 1908 (Order XXXVII) & Commercial Courts Act, 2015",
    timing: "Following 30-day pre-institution mediation under Section 12A",
    mechanism:
      "File summary suit in Commercial Court based on signed Purchase Order, Delivery Challans, Tax Invoices, and Section 42 deemed acceptance evidence",
    relief:
      "Summary judgment without prolonged trial unless buyer deposits 100% of the disputed balance in court; pre-decree asset attachment under Order XXXVIII Rule 5",
    suitability:
      "Medium enterprises (excluded from MSEFC s.18) or claims exceeding ₹3 Lakh where clear written contract exists",
    tone: "slate",
  },
  {
    remedy: "Section 43B(h) Corporate Income Tax Disallowance Notice",
    statute: "Income Tax Act, 1961 (Section 43B(h))",
    timing: "Prior to March 31 fiscal year-end or during Q3/Q4 tax advance estimates",
    mechanism:
      "Serve statutory notice on buyer's CFO, Company Secretary, and Statutory Auditors warning of tax deduction disallowance on overdue machinery purchases",
    relief:
      "Direct tax liability increases on buyer's audited balance sheet, creating immediate board-level urgency to release withheld retention funds",
    suitability:
      "Corporate buyers, listed manufacturing entities, and Tier-1 automotive OEMs withholding vendor payments",
    tone: "emerald",
  },
];

const PREEMPTION_MATRIX = [
  {
    excuse: "“Commissioning is incomplete; our plant head has not signed the Erection & Commissioning Certificate (ECC).”",
    statutoryShield: "Sale of Goods Act, 1930 (Section 42) & Doctrine of Prevention (ICA s.53)",
    counterMeasure:
      "Document that the buyer has integrated the machinery into daily commercial production. Under Section 42, commercial exploitation constitutes deemed acceptance by operation of law. A buyer cannot rely on its own bad-faith refusal to sign an ECC to evade payment when its factory is actively generating revenue from the asset.",
  },
  {
    excuse: "“The machine runs at only 850 units/hr instead of the rated 1,000 units/hr; we are withholding the 20% balance as liquidated damages.”",
    statutoryShield: "Sale of Goods Act, 1930 (Section 59) & ICA Section 73 (Proof of Actual Loss)",
    counterMeasure:
      "Under Section 59, once goods are accepted or utilized, the buyer cannot repudiate the contract or withhold the full price. The buyer is relegated strictly to an action for proven damages. Demand a joint inspection by an accredited Chartered Engineer and enforce full principal payment plus MSMED penal interest.",
  },
  {
    excuse: "“10% retention money must be held for 12 months under our standard purchase order terms, regardless of your Udyam status.”",
    statutoryShield: "MSMED Act, 2006 (Section 15, 16 & 24) Non-Obstante Override",
    counterMeasure:
      "Section 24 of the MSMED Act expressly overrides any contradictory contractual term. Under Section 15, the maximum permissible credit period cannot exceed 45 days. Any contract clause withholding retention beyond 45 days is void ab initio against Micro and Small enterprises, triggering 3x RBI compound interest.",
  },
  {
    excuse: "“We suffered tooling breakdown and are issuing an arbitrary debit note of ₹18 Lakh for production downtime.”",
    statutoryShield: "Sale of Goods Act, 1930 (Section 16(1)) & Order XXXVII Rule 2 CPC",
    counterMeasure:
      "Demonstrate via PLC alarm logs and raw material test certificates that the buyer fed unapproved, out-of-tolerance raw materials or bypassed torque interlocks. Repudiate the unilateral debit note within 7 days. Unilateral debit notes have zero evidentiary value in Commercial Courts without bilateral reconciliation.",
  },
];

const FAQS = [
  {
    question:
      "What is 'Deemed Acceptance' under Section 42 of the Sale of Goods Act, 1930?",
    answer:
      "Under Section 42 of the Sale of Goods Act, 1930, a buyer is deemed to have accepted goods when they perform any act in relation to them that is inconsistent with the seller's ownership, or when they retain the goods after a reasonable time without intimating rejection. In the context of industrial machinery, running the equipment in commercial production, selling goods manufactured by the machine, or modifying the machinery constitutes an act inconsistent with the seller's ownership. Once deemed acceptance occurs, the buyer cannot reject the machinery and must pay the contract price.",
  },
  {
    question:
      "Can a factory buyer withhold our final 10–20% balance if they refuse to sign the Commissioning Certificate?",
    answer:
      "No. While purchase orders often condition the final 10%–20% milestone on a signed Erection and Commissioning Certificate (ECC) or Joint Acceptance Test (JAT), a buyer cannot indefinitely withhold sign-off in bad faith while commercially operating the machine. Under the legal Doctrine of Prevention (Indian Contract Act Section 53) and SOGA Section 42, a party cannot benefit from its own deliberate failure to execute a contractual formality. Operating the machine for factory output establishes deemed commissioning and matures the debt.",
  },
  {
    question:
      "What should an industrial machinery maker do if the buyer raises defect claims after 6 months of use?",
    answer:
      "Under Section 59 of the Sale of Goods Act, 1930, after goods are accepted, the buyer loses the legal right to reject the equipment or cancel the contract. The buyer's remedy is strictly confined to claiming damages for breach of warranty. The buyer cannot unilaterally withhold the purchase price. As the machine manufacturer, you should demand specific, timestamped maintenance logs, verify if operating guidelines and raw material specifications were breached, and serve an advocate notice asserting that the full contract price remains payable.",
  },
  {
    question:
      "How does Section 43B(h) of the Income Tax Act help machinery manufacturers recover withheld retention money?",
    answer:
      "Section 43B(h) of the Income Tax Act, 1961 disallows corporate buyers from claiming an income tax deduction for any outstanding dues payable to Micro and Small enterprises if unpaid beyond the 45-day statutory window under the MSMED Act. If a buyer withholds your final 10%–20% machinery balance past March 31, that unpaid amount is added back to their taxable income, forcing them to pay 25%–35% corporate tax on the disputed amount. Serving a Section 43B(h) notification to the buyer's CFO and statutory auditors creates immediate settlement pressure.",
  },
  {
    question:
      "Does the MSMED Act 45-day payment limit override a purchase order clause specifying 12-month retention?",
    answer:
      "Yes. Section 24 of the MSMED Act contains a mandatory non-obstante clause, meaning its provisions supersede any conflicting agreement, purchase order, or general condition of contract. Under Section 15, the credit period for a Micro or Small enterprise cannot exceed 45 days from the date of acceptance or deemed acceptance. Any clause requiring a 12-month cash retention holdback without a bank guarantee is unenforceable, and statutory interest under Section 16 accrues at 3 times the RBI Bank Rate compounded monthly.",
  },
  {
    question:
      "What electronic evidence is required under Section 63 of Bharatiya Sakshya Adhiniyam (BSA), 2023 to prove commercial use?",
    answer:
      "Under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (which replaced Section 65B of the Indian Evidence Act), you must produce a certified digital evidence affidavit accompanying: (1) SCADA and PLC machine cycle logs showing operational hours, (2) IoT telemetry data from built-in modems or edge gateways, (3) industrial electricity demand meter surges corresponding to production shifts, (4) outward GST e-Way bills generated by the buyer for finished goods, and (5) email and WhatsApp communications between technicians and plant managers.",
  },
  {
    question:
      "Can Medium Enterprises use MSME Samadhaan for machinery balance recovery?",
    answer:
      "No. Under Section 18 of the MSMED Act, 2006, the statutory dispute resolution mechanism before the Micro and Small Enterprises Facilitation Council (MSEFC) is strictly limited to Micro and Small enterprises. Medium Enterprises (investment up to ₹50 Crore and turnover up to ₹250 Crore) are excluded from MSME Samadhaan. Medium machinery manufacturers must enforce recovery through Commercial Summary Suits under Order XXXVII CPC, Section 12A pre-institution commercial mediation, or contractual arbitration.",
  },
  {
    question:
      "How fast can an industrial machinery supplier obtain a court order against a defaulting factory?",
    answer:
      "Under Order XXXVII of the Code of Civil Procedure in designated Commercial Courts, a Summary Suit can yield a decree within 6 to 12 months. Upon receiving the summons, the defendant factory must enter an appearance within 10 days and apply for leave to defend. If their defense is frivolous or based on fabricated post-facto defect claims, the court will either deny leave or order the factory to deposit 100% of the disputed balance into the court registry as a pre-condition for defense.",
  },
];

export default function CustomMachineryRecoveryPage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: META_DESCRIPTION,
    url: `${SITE_URL}${PAGE_URL}`,
    mainEntityOfPage: `${SITE_URL}${PAGE_URL}`,
    image: `${SITE_URL}/blog_money_recovery.png`,
    author: {
      "@type": "Person",
      name: LEGAL_REVIEWER.name,
      jobTitle: LEGAL_REVIEWER.role,
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
    datePublished: "2026-11-16T08:00:00+05:30",
    dateModified: "2026-11-16T08:00:00+05:30",
  };

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "5-Stage Statutory Protocol for Recovering Withheld Industrial Machinery Balances",
    description:
      "A step-by-step creditor recovery SOP for Special Purpose Machine (SPM), CNC, and capital goods manufacturers to enforce Sale of Goods Act Section 42 deemed acceptance and recover withheld 10%–20% commissioning retainage.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Forensic Digital Evidence Capture",
        text: "Extract PLC cycle counter logs, SCADA run-time hours, factory electricity demand spikes, and outward GST e-Way bills establishing commercial production.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Serve Statutory Section 42 Deemed Acceptance Notice",
        text: "Deliver formal demand notice establishing that commercial utilization extinguishes the buyer's right of rejection under Sale of Goods Act Section 42.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Issue CFO Section 43B(h) Corporate Tax Warning",
        text: "Notify buyer's Chief Financial Officer and statutory auditors of income tax disallowance on overdue capital goods liabilities under Section 43B(h).",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Initiate Pre-Institution Mediation or MSEFC Reference",
        text: "File statutory conciliation under MSMED Act Section 18 for Micro/Small units, or Section 12A Commercial Courts Act mediation for Medium enterprises.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "File Commercial Summary Suit (Order XXXVII CPC)",
        text: "File fast-track summary suit in the designated Commercial Court, securing pre-decree conditional deposit orders or Order XXXVIII Rule 5 asset attachments.",
      },
    ],
  };

  const jsonLdFaq = {
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

  const jsonLdBreadcrumb = {
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
        name: "Manufacturing & Machinery OEM Recovery",
        item: `${SITE_URL}/industries/manufacturing-machinery-oem-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Custom Industrial Machinery Balance Recovery",
        item: `${SITE_URL}${PAGE_URL}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>Sale of Goods Act s.42 Deemed Acceptance</span>
            <span className="text-slate-400">&bull;</span>
            <span>Capital Goods OEM Playbook</span>
            <span className="text-slate-400">&bull;</span>
            <span className="text-slate-300">IND-06 §6.6</span>
          </div>

          {/* Single Page H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Statutory Summary &bull; Creditor Legal Defense
            </span>
            Under Section 42 of the Sale of Goods Act, 1930, when a buyer operates delivered machinery for commercial factory output, that utilization constitutes an act inconsistent with the seller&apos;s ownership, establishing irrevocable deemed acceptance. The buyer is legally barred from belatedly rejecting the equipment or withholding the final 10%–20% commissioning balance. As part of our comprehensive{" "}
            <Link
              href="/industries/manufacturing-machinery-oem-recovery"
              className="text-red-400 font-bold hover:underline inline-flex items-center gap-1"
            >
              Manufacturing &amp; Industrial Machinery OEM Recovery Hub
            </Link>
            , this guide provides the exact statutory protocol to neutralize fake defect excuses, calculate Section 16 compound penal interest, and enforce prompt recovery.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex flex-col">
              <span className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                Deemed Acceptance
              </span>
              <span className="text-lg sm:text-2xl font-black text-emerald-400 mt-1">
                Immediate
              </span>
              <span className="text-[11px] text-slate-400 mt-0.5">
                Triggered by factory production
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                Stuck Balance Slab
              </span>
              <span className="text-lg sm:text-2xl font-black text-slate-100 mt-1">
                10% &ndash; 20%
              </span>
              <span className="text-[11px] text-slate-400 mt-0.5">
                Commissioning / retention pool
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <span className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  MSMED Penal Interest
                </span>
              </div>
              <span className="text-lg sm:text-2xl font-black text-amber-400 mt-1">
                3x RBI Rate
              </span>
              <span className="text-[11px] text-slate-400 mt-0.5">
                Compounded monthly (s.16)
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                Summary Suit Floor
              </span>
              <span className="text-lg sm:text-2xl font-black text-red-400 mt-1">
                &ge; &rupee;3,00,000
              </span>
              <span className="text-[11px] text-slate-400 mt-0.5">
                Commercial Courts Order XXXVII
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumbs Navigation */}
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Manufacturing & Machinery OEM Hub",
                href: "/industries/manufacturing-machinery-oem-recovery",
              },
              {
                label: "Custom Machinery Balance Recovery",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        {/* 2-Column Split: Sticky TOC + Main Content Column */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <MachineryRecoveryTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: The Commissioning Holdback Trap */}
            <section
              id="heading-commissioning-trap"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  1
                </span>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                  Industry Bottleneck
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                The 10–20% Machinery Commissioning &amp; Trial Run Balance Holdback Trap
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Across India&apos;s premier manufacturing corridors&mdash;from the engineering hubs of Pune, Chakan, and Pimpri-Chinchwad to Rajkot, Coimbatore, Ludhiana, and Faridabad&mdash;capital goods manufacturers face a systemic cash-flow squeeze. Whether manufacturing Special Purpose Machines (SPMs), high-speed multi-track packaging lines, CNC milling centers, industrial boilers, or automated conveyor systems, the commercial contracting structure follows a standard milestone formula:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Milestone 1 &amp; 2: Advance &amp; Dispatch
                  </p>
                  <p className="text-base sm:text-lg font-black text-slate-900 mt-1">
                    70% &ndash; 80%
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    Collected prior to factory dispatch against Proforma Invoice and LR / Bilty.
                  </p>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Milestone 3: Delivery at Site
                  </p>
                  <p className="text-base sm:text-lg font-black text-slate-900 mt-1">
                    10%
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    Payable on physical uncrating and physical foundation placement.
                  </p>
                </div>

                <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl">
                  <p className="text-xs font-bold text-[#DC2626] uppercase tracking-wider">
                    Milestone 4: The Holdback Trap
                  </p>
                  <p className="text-base sm:text-lg font-black text-[#DC2626] mt-1">
                    10% &ndash; 20%
                  </p>
                  <p className="text-xs text-slate-700 mt-1">
                    Conditioned upon signing of the Erection &amp; Commissioning Certificate (ECC) / Trial Run.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                The trap springs during Milestone 4. The supplier&apos;s service engineers erect the machine, wire the panels, load the PLC programs, and conduct successful dry runs. The buyer immediately feeds commercial production materials into the line, integrates it into their factory workflow, and begins shipping finished goods to their own customers.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Yet, when the supplier presents the formal Erection &amp; Commissioning Certificate (ECC) or Joint Acceptance Test (JAT) protocol for signature, the buyer&apos;s plant manager or procurement director deflects: <em>&ldquo;Minor fine-tuning is remaining,&rdquo; &ldquo;Our VP Operations is traveling,&rdquo;</em> or <em>&ldquo;We need to observe line stability for another 90 days.&rdquo;</em>
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-xs sm:text-sm text-amber-900 leading-relaxed">
                <span className="font-black uppercase tracking-wider block mb-1">
                  The Commercial Motive Behind Delayed Sign-Off:
                </span>
                For an industrial machine priced at ₹80,00,000, the withheld 15% to 20% balance represents ₹12,00,000 to ₹16,00,000. For custom machine builders operating on 12% to 15% net margins, <strong>this withheld balance constitutes their entire commercial profit</strong>. The buyer uses this withheld liquidity as interest-free working capital, while simultaneously threatening to forfeit the funds if the supplier insists on formal contract enforcement.
              </div>
            </section>

            {/* Section 2: Sale of Goods Act Section 42 & 59 */}
            <section
              id="heading-sale-of-goods-s42"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  2
                </span>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                  Statutory Doctrine
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Sale of Goods Act Section 42: Deemed Acceptance in Commercial Use
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Indian commercial law does not permit a buyer to blow hot and cold. A buyer cannot reap the financial profits of operating an industrial asset while simultaneously claiming that the asset has not been legally delivered or accepted. This foundational principle is codified under <strong>Section 42 of the Sale of Goods Act, 1930</strong>:
              </p>

              <div className="bg-slate-900 text-white rounded-xl p-5 border border-slate-800 mb-6">
                <p className="text-xs font-bold uppercase tracking-widest text-red-400 mb-2">
                  Bare Act Provision &bull; Section 42, Sale of Goods Act, 1930
                </p>
                <blockquote className="text-xs sm:text-sm text-slate-200 italic leading-relaxed border-l-2 border-[#DC2626] pl-4">
                  &ldquo;The buyer is deemed to have accepted the goods when he intimates to the seller that he has accepted them, or when the goods have been delivered to him and <strong>he does any act in relation to them which is inconsistent with the ownership of the seller</strong>, or when, after the lapse of a reasonable time, he retains the goods without intimating to the seller that he has rejected them.&rdquo;
                </blockquote>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                The critical statutory test hinges upon the phrase: <em>&ldquo;any act in relation to them which is inconsistent with the ownership of the seller.&rdquo;</em> When a factory installs your machine on concrete foundations, connects it to utility gas and high-voltage three-phase power lines, inputs commercial raw materials, and sells the output, it exercises absolute dominion over the machine. This commercial utilization is fundamentally inconsistent with the machine remaining the property of the seller.
              </p>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-6 mb-3">
                Section 59 Bar: Buyer Cannot Reject Goods Post-Acceptance
              </h3>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                When machine buyers are confronted with evidence of commercial operation, their typical counter-tactic is to invent belated defect claims&mdash;alleging after 6 months that the machine achieves only 85% of its rated speed or suffers excessive thermal drift. Here, <strong>Section 59 of the Sale of Goods Act, 1930</strong> completely dismantles their position:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>
                    <strong>Extinction of Right to Reject:</strong> Under Section 59(1), once goods are deemed accepted under Section 42, the buyer loses the legal right to repudiate the contract, reject the equipment, or demand return of advances.
                  </span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>
                    <strong>Strict Burden of Proof for Damages:</strong> The buyer&apos;s sole remedy is reduced to setting up a breach of warranty in diminution or extinction of the price. However, the buyer cannot unilaterally decree a price reduction; they must substantiate actual, quantifiable financial damages with contemporaneous engineering audits.
                  </span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>
                    <strong>Unconditional Maturity of Contract Price:</strong> Under Section 55, the seller is entitled to file an immediate suit for the full price of the goods, together with statutory interest and costs.
                  </span>
                </li>
              </ul>
            </section>

            {/* Section 3: 5-Stage Escalation SOP SVG Flowchart */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  3
                </span>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                  Operational SOP
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                5-Stage Escalation SOP: From ECC Standoff to Summary Decree
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                When a factory buyer refuses to sign the Erection &amp; Commissioning Certificate while continuing commercial production, follow this disciplined 5-stage institutional recovery protocol:
              </p>

              {/* Hand-Authored Responsive SVG Flowchart (Desktop) */}
              <div className="hidden md:block mb-8 bg-slate-900 p-6 rounded-2xl border border-slate-800">
                <p className="text-xs font-bold uppercase tracking-widest text-red-400 mb-4 text-center">
                  Industrial Machinery Creditor Escalation Architecture
                </p>
                <svg
                  viewBox="0 0 800 360"
                  className="w-full h-auto"
                  width={800}
                  height={360}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="5-Stage Statutory Escalation Flowchart for Machinery Balance Recovery"
                >
                  {/* Stage 1 */}
                  <rect x="20" y="30" width="130" height="90" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="85" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">Stage 1: Evidence</text>
                  <text x="85" y="80" textAnchor="middle" fill="#94A3B8" fontSize="9">SCADA &amp; PLC Logs</text>
                  <text x="85" y="95" textAnchor="middle" fill="#94A3B8" fontSize="9">GST e-Way Records</text>

                  {/* Arrow 1-2 */}
                  <path d="M150 75 H175" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Stage 2 */}
                  <rect x="175" y="30" width="130" height="90" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="240" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">Stage 2: s.42 Notice</text>
                  <text x="240" y="80" textAnchor="middle" fill="#94A3B8" fontSize="9">Deemed Acceptance</text>
                  <text x="240" y="95" textAnchor="middle" fill="#94A3B8" fontSize="9">7-Day ECC Cut-off</text>

                  {/* Arrow 2-3 */}
                  <path d="M305 75 H330" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Stage 3 */}
                  <rect x="330" y="30" width="130" height="90" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="395" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">Stage 3: Tax Warning</text>
                  <text x="395" y="80" textAnchor="middle" fill="#94A3B8" fontSize="9">Section 43B(h) Alert</text>
                  <text x="395" y="95" textAnchor="middle" fill="#94A3B8" fontSize="9">CFO &amp; Auditor Letter</text>

                  {/* Arrow 3-4 */}
                  <path d="M460 75 H485" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Stage 4 */}
                  <rect x="485" y="30" width="135" height="90" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="552" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">Stage 4: Legal Notice</text>
                  <text x="552" y="80" textAnchor="middle" fill="#94A3B8" fontSize="9">15-Day Advocate Letter</text>
                  <text x="552" y="95" textAnchor="middle" fill="#94A3B8" fontSize="9">MSMED s.16 3x Rate</text>

                  {/* Arrow 4-5 */}
                  <path d="M620 75 H645" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Stage 5 */}
                  <rect x="645" y="30" width="135" height="90" rx="10" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
                  <text x="712" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">Stage 5: Court Filing</text>
                  <text x="712" y="80" textAnchor="middle" fill="#34D399" fontSize="9">MSEFC / Order XXXVII</text>
                  <text x="712" y="95" textAnchor="middle" fill="#34D399" fontSize="9">Pre-Decree Security</text>

                  {/* Flow bifurcation notes below */}
                  <rect x="100" y="160" width="280" height="150" rx="12" fill="#0F172A" stroke="#334155" />
                  <text x="240" y="190" textAnchor="middle" fill="#F87171" fontSize="12" fontWeight="bold">Track A: Micro / Small Enterprise</text>
                  <text x="120" y="220" fill="#E2E8F0" fontSize="10">• MSMED Act s.18 Samadhaan / ODR filing</text>
                  <text x="120" y="245" fill="#E2E8F0" fontSize="10">• Mandatory 3x RBI compound interest</text>
                  <text x="120" y="270" fill="#E2E8F0" fontSize="10">• 75% pre-deposit mandatory on appeal (s.19)</text>
                  <text x="120" y="295" fill="#E2E8F0" fontSize="10">• Exemption from court fees in most states</text>

                  <rect x="420" y="160" width="280" height="150" rx="12" fill="#0F172A" stroke="#334155" />
                  <text x="560" y="190" textAnchor="middle" fill="#60A5FA" fontSize="12" fontWeight="bold">Track B: Medium / Non-MSME Enterprise</text>
                  <text x="440" y="220" fill="#E2E8F0" fontSize="10">• Section 12A Commercial Pre-Mediation</text>
                  <text x="440" y="245" fill="#E2E8F0" fontSize="10">• Order XXXVII CPC Summary Money Suit</text>
                  <text x="440" y="270" fill="#E2E8F0" fontSize="10">• Pre-judgment asset attachment (O.XXXVIII)</text>
                  <text x="440" y="295" fill="#E2E8F0" fontSize="10">• Execution via bailiff warrant against factory</text>

                  {/* Marker definitions */}
                  <defs>
                    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 0 L 10 5 L 0 10 z" fill="#DC2626" />
                    </marker>
                  </defs>
                </svg>
              </div>

              {/* Mobile Stacked Step Cards */}
              <div className="md:hidden space-y-3 mb-6">
                <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800">
                  <span className="text-xs font-bold text-red-400 block mb-1">Stage 1</span>
                  <p className="text-sm font-bold">Forensic Evidence Extraction</p>
                  <p className="text-xs text-slate-300 mt-1">
                    Download PLC run-time logs, electrical consumption data, and buyer outward GST e-Way bills.
                  </p>
                </div>
                <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800">
                  <span className="text-xs font-bold text-red-400 block mb-1">Stage 2</span>
                  <p className="text-sm font-bold">Section 42 Deemed Acceptance Notice</p>
                  <p className="text-xs text-slate-300 mt-1">
                    Establish commercial use as inconsistent with seller ownership; fix 7-day cure window.
                  </p>
                </div>
                <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800">
                  <span className="text-xs font-bold text-red-400 block mb-1">Stage 3</span>
                  <p className="text-sm font-bold">Section 43B(h) Corporate Tax Alert</p>
                  <p className="text-xs text-slate-300 mt-1">
                    Intimate buyer CFO and Statutory Auditors of balance sheet tax deduction disallowance.
                  </p>
                </div>
                <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800">
                  <span className="text-xs font-bold text-red-400 block mb-1">Stage 4</span>
                  <p className="text-sm font-bold">15-Day Advocate Demand Notice</p>
                  <p className="text-xs text-slate-300 mt-1">
                    Dispatch formal legal notice via Speed Post RPAD, WhatsApp, and registered email.
                  </p>
                </div>
                <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800">
                  <span className="text-xs font-bold text-emerald-400 block mb-1">Stage 5</span>
                  <p className="text-sm font-bold">Judicial Enforcement</p>
                  <p className="text-xs text-slate-300 mt-1">
                    File MSEFC reference under MSMED s.18 or Commercial Summary Suit under Order XXXVII CPC.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Dark-Header Statutory Recovery Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  4
                </span>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                  Legal Forum Comparison
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Statutory Recovery Matrix: SOGA, MSMED, Order XXXVII &amp; Sec 43B(h)
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Compare the statutory enforcement mechanisms available to capital goods and industrial machinery manufacturers facing withheld retention and commissioning balances:
              </p>

              <div className="overflow-x-auto -mx-5 sm:-mx-6 md:-mx-8 px-5 sm:px-6 md:px-8 mb-4">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white border-b border-slate-800">
                      <th className="py-3.5 px-4 font-bold text-slate-100 rounded-tl-xl">
                        Enforcement Track
                      </th>
                      <th className="py-3.5 px-4 font-bold text-slate-100">
                        Statutory Governing Authority
                      </th>
                      <th className="py-3.5 px-4 font-bold text-slate-100">
                        Trigger Timing &amp; Window
                      </th>
                      <th className="py-3.5 px-4 font-bold text-slate-100">
                        Specific Legal Relief
                      </th>
                      <th className="py-3.5 px-4 font-bold text-slate-100 rounded-tr-xl">
                        Target Defaulter Profile
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {STATUTORY_MATRIX.map((row, idx) => (
                      <tr
                        key={idx}
                        className={idx % 2 === 0 ? "bg-white hover:bg-slate-50" : "bg-slate-50/60 hover:bg-slate-100/60"}
                      >
                        <td className="py-3.5 px-4 font-bold text-slate-900">
                          {row.remedy}
                        </td>
                        <td className="py-3.5 px-4 font-semibold text-slate-700">
                          {row.statute}
                        </td>
                        <td className="py-3.5 px-4 text-slate-600">
                          {row.timing}
                        </td>
                        <td className="py-3.5 px-4 text-slate-700 leading-relaxed">
                          {row.relief}
                        </td>
                        <td className="py-3.5 px-4 text-slate-600">
                          {row.suitability}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5: Interactive Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  5
                </span>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                  Operational Failure Modes
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Interactive Scenarios: Overcoming Factory Buyer Payment Stalls
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Explore the four most common commercial failure modes encountered by capital goods and SPM machine manufacturers across India, and see how statutory provisions neutralize buyer pretexts:
              </p>

              <MachineryRecoveryScenarioTabs />
            </section>

            {/* Section 6: Worked Financial Ledger & 3x RBI Interest */}
            <section
              id="heading-worked-example"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  6
                </span>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                  Financial Calculation
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Worked Financial Ledger: ₹15L Balance &amp; 3x RBI Penal Interest
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                To demonstrate the immense compounding financial leverage available under the MSMED Act, examine this worked calculation for a custom automated packaging machine line manufactured by a Pune MSME for a pharmaceutical buyer in Baddi:
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 mb-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-400 block">
                      Case Study Ledger &bull; Custom Blister Packaging Line
                    </span>
                    <p className="text-sm font-bold text-slate-200">
                      Total PO Value: ₹75,00,000 + 18% GST (₹88,50,000 Total Invoice)
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase bg-emerald-950/80 text-emerald-400 border border-emerald-800">
                    MSMED Section 16 Active
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="p-3 bg-slate-800/80 rounded-xl">
                    <span className="text-[10px] text-slate-400 font-semibold uppercase">
                      Withheld 20% Balance
                    </span>
                    <p className="text-lg font-black text-white mt-1">₹17,70,000</p>
                    <span className="text-[10px] text-slate-400">Principal + GST retainage</span>
                  </div>

                  <div className="p-3 bg-slate-800/80 rounded-xl">
                    <span className="text-[10px] text-slate-400 font-semibold uppercase">
                      Default Duration
                    </span>
                    <p className="text-lg font-black text-amber-400 mt-1">285 Days</p>
                    <span className="text-[10px] text-slate-400">Past statutory 45-day window</span>
                  </div>

                  <div className="p-3 bg-slate-800/80 rounded-xl">
                    <span className="text-[10px] text-slate-400 font-semibold uppercase">
                      RBI Base Rate (Nov 2026)
                    </span>
                    <p className="text-lg font-black text-white mt-1">6.75% p.a.</p>
                    <span className="text-[10px] text-slate-400">RBI Repo / Bank Rate benchmark</span>
                  </div>

                  <div className="p-3 bg-slate-800/80 rounded-xl">
                    <span className="text-[10px] text-slate-400 font-semibold uppercase">
                      Statutory 3x Multiplier
                    </span>
                    <p className="text-lg font-black text-red-400 mt-1">20.25% p.a.</p>
                    <span className="text-[10px] text-slate-400">Compounded monthly rests</span>
                  </div>
                </div>

                {/* Calculation Breakdown */}
                <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-2 mb-4">
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span>Unpaid Principal Milestone (Milestone 3 &amp; 4):</span>
                    <span className="font-bold text-white">₹15,00,000</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span>Applicable CGST + SGST (18%):</span>
                    <span className="font-bold text-white">₹2,70,000</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span>Accrued Statutory Interest (20.25% compounded monthly for 9.5 months):</span>
                    <span className="font-bold text-emerald-400">+ ₹3,03,450</span>
                  </div>
                  <div className="flex justify-between py-1 pt-2 font-black text-sm text-white">
                    <span>Total Crystallized Legal Claim:</span>
                    <span className="text-emerald-400 text-base">₹20,73,450</span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  Use our free{" "}
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="text-red-400 font-bold hover:underline"
                  >
                    MSME Delayed Payment Interest Calculator
                  </Link>{" "}
                  to generate a court-admissible month-by-month compound interest ledger for your pending machinery invoices.
                </p>
              </div>
            </section>

            {/* Section 7: Electronic Evidence & BSA 2023 Section 63 */}
            <section
              id="heading-bsa-evidence"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  7
                </span>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                  Evidentiary Standards
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                BSA Section 63 Evidence: Proving Output with SCADA &amp; GST Logs
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Under <strong>Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>, electronic records are admissible as primary and secondary documentary evidence, provided they are accompanied by a formal technical certificate. In machinery balance recovery, your objective is to prove conclusively to the court that the machine was operated commercially:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <span className="text-xs font-extrabold text-[#DC2626] uppercase tracking-wider block mb-1.5">
                    1. Machine Controller Telemetry
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Download PLC run-time counters, Siemens/Mitsubishi/Allen-Bradley cycle histories, and IoT edge router logs. These record exact spindle hours, stroke counts, and timestamps of shifts operated by the buyer.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <span className="text-xs font-extrabold text-[#DC2626] uppercase tracking-wider block mb-1.5">
                    2. Power Utility Demand Surges
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Obtain electricity utility maximum demand (MD) records or internal HT meter readings proving that the connected line load was energized and drawing continuous kilowattage during operational shifts.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <span className="text-xs font-extrabold text-[#DC2626] uppercase tracking-wider block mb-1.5">
                    3. Outward GST e-Way Bills
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Correlate the unique HSN codes of finished goods manufactured by your machine with the buyer&apos;s public GST outward supply e-Way bills. If the buyer is dispatching goods, the machine is in commercial production.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <span className="text-xs font-extrabold text-[#DC2626] uppercase tracking-wider block mb-1.5">
                    4. WhatsApp &amp; Service Engineering Logs
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Preserve all WhatsApp messages, site visit reports (SVRs), service engineer logs, and gate-passes signed by security or shop-floor supervisors confirming machine commissioning and operator handover.
                  </p>
                </div>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-xl text-xs sm:text-sm text-emerald-950 leading-relaxed">
                <strong>Statutory Certificate Requirement:</strong> All electronic records, CSV cycle exports, and email threads must be filed with a statutory affidavit under Section 63(4) of BSA 2023 executed by your Head of Automation or System Administrator, identifying the electronic device, verifying hash integrity, and confirming lawful custody.
              </div>
            </section>

            {/* Section 8: Debtor Defense Pre-Emption Matrix */}
            <section
              id="heading-preemption-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  8
                </span>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                  Debtor Pre-Emption
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Neutralizing Buyer Excuses: Pre-Emption Matrix for Machinery Makers
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                When defaulting buyers receive formal payment reminders, they deploy predictable commercial pretexts. Here is how Indian statutory provisions systematically dismantle each defense:
              </p>

              <div className="space-y-4 mb-4">
                {PREEMPTION_MATRIX.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-slate-50/70"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <p className="text-xs sm:text-sm font-extrabold text-red-700">
                        {item.excuse}
                      </p>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-200 text-slate-800 shrink-0">
                        {item.statutoryShield}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <strong>Legal Counter-Measure:</strong> {item.counterMeasure}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 9: 15-Day Advocate Notice SOP */}
            <section
              id="heading-advocate-sop"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  9
                </span>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                  Pre-Litigation SOP
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                SOP: Serving an Advocate Section 42 Legal Demand Notice
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                A generic, boilerplate demand notice drafted by a local practitioner without machinery domain expertise will trigger an endless back-and-forth of defect notices. An effective capital goods legal notice must incorporate specific statutory ingredients:
              </p>

              <div className="space-y-3 mb-6">
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800">
                  <strong className="text-slate-900 block mb-1">
                    1. Detailed Technical Annexures &amp; PO Traceability
                  </strong>
                  Itemize the exact Purchase Order numbers, machine serial numbers, motor/spindle IDs, and the corresponding Tax Invoices, Delivery Challans, and transport bilties.
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800">
                  <strong className="text-slate-900 block mb-1">
                    2. Specific Citation of Commercial Exploitation Under Section 42
                  </strong>
                  Specifically state that the buyer has integrated the machinery into active commercial production. Cite specific dates, shifts, and output quantities to establish deemed acceptance as a matter of law.
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800">
                  <strong className="text-slate-900 block mb-1">
                    3. Statutory Section 43B(h) Corporate Tax Add-Back Intimation
                  </strong>
                  Explicitly address the notice to the Managing Director, CFO, and Company Secretary, putting them on formal record that unpaid dues will be reported to tax authorities for statutory disallowance.
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800">
                  <strong className="text-slate-900 block mb-1">
                    4. Tri-Channel Evidentiary Service (Speed Post RPAD + WhatsApp + Email)
                  </strong>
                  Serve the notice concurrently via registered Speed Post with Acknowledgment Due (RPAD) to the factory address and registered corporate office, alongside certified PDF transmission via email and WhatsApp with delivery tick records.
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600">
                Explore our step-by-step guides on{" "}
                <Link
                  href="/msme-delayed-payment-recovery-samadhan-vs-legal-notice"
                  className="text-red-700 font-bold hover:underline"
                >
                  MSME Samadhaan vs. Legal Notice Strategy
                </Link>{" "}
                and the{" "}
                <Link
                  href="/msme-odr-portal-delayed-payment-guide"
                  className="text-red-700 font-bold hover:underline"
                >
                  MSME ODR Portal Recovery Guide
                </Link>
                .
              </p>
            </section>

            {/* Section 10: Institutional B2B Machinery Recovery CTA */}
            <section
              id="heading-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  10
                </span>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                  Conversion Funnel
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Institutional B2B Machinery Recovery &amp; Portfolio Dispute Desk
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Choose between sending a single advocate-drafted statutory demand notice on an intransigent factory buyer or engaging our dedicated enterprise recovery desk for your aged receivables portfolio:
              </p>

              <MachineryRecoveryCTA />
            </section>

            {/* Section 11: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  11
                </span>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                  Practitioner Knowledge
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-6">
                Frequently Asked Questions on Machinery Balance Payment Recovery
              </h2>

              <div className="space-y-4">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 transition-all duration-200 [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <span className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors pr-4">
                        {faq.question}
                      </span>
                      <span className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-700 shrink-0 group-open:rotate-180 transition-transform">
                        ↓
                      </span>
                    </summary>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-3 pt-3 border-t border-slate-200/80">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 12: Statutory Authorities & Judicial Precedents */}
            <section
              id="heading-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  12
                </span>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                  Legal Authorities
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
                Statutory Authorities, Bare Acts &amp; Verified Judicial Precedents
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Every recovery strategy and notice format in this guide is grounded in verified judicial holdings of the Supreme Court of India and High Courts:
              </p>

              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-xl border-l-4 border-[#DC2626] bg-slate-50 border border-slate-200">
                  <p className="text-xs font-extrabold text-[#DC2626] uppercase tracking-wider mb-1">
                    Sale of Goods Act s.42 &bull; Madras High Court
                  </p>
                  <p className="text-sm font-bold text-slate-900 mb-1">
                    Sha Thilokchand Poosaji v. Crystal and Co., AIR 1955 Mad 481
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Held that where goods delivered to a buyer are utilized or dealt with in a manner inconsistent with the ownership of the seller, deemed acceptance occurs under Section 42. Once deemed acceptance is complete, the buyer cannot reject the goods or repudiate liability for the contract price.
                  </p>
                </div>

                <div className="p-4 rounded-xl border-l-4 border-[#DC2626] bg-slate-50 border border-slate-200">
                  <p className="text-xs font-extrabold text-[#DC2626] uppercase tracking-wider mb-1">
                    MSMED Act s.24 Overriding Effect &bull; Supreme Court of India
                  </p>
                  <p className="text-sm font-bold text-slate-900 mb-1">
                    Silpi Industries v. Kerala State Road Transport Corporation, 2021 SCC OnLine SC 439
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    The Supreme Court confirmed that the MSMED Act is a special statute carrying a statutory overriding effect under Section 24 over general contractual conditions. Clauses conditioning final retention payment on arbitrary buyer sign-offs or extended 12-month holdbacks cannot extinguish the statutory 45-day ceiling.
                  </p>
                </div>

                <div className="p-4 rounded-xl border-l-4 border-[#DC2626] bg-slate-50 border border-slate-200">
                  <p className="text-xs font-extrabold text-[#DC2626] uppercase tracking-wider mb-1">
                    Commercial Courts Act s.12A Pre-Mediation &bull; Supreme Court of India
                  </p>
                  <p className="text-sm font-bold text-slate-900 mb-1">
                    Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd., (2022) 10 SCC 1
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Affirmed that pre-institution mediation under Section 12A of the Commercial Courts Act, 2015 is mandatory before instituting a commercial suit, unless urgent interim relief is sought. Completing this mediation window lays the strict foundation for rapid Order XXXVII summary decrees.
                  </p>
                </div>

                <div className="p-4 rounded-xl border-l-4 border-[#DC2626] bg-slate-50 border border-slate-200">
                  <p className="text-xs font-extrabold text-[#DC2626] uppercase tracking-wider mb-1">
                    Pre-Existing Dispute &amp; SOGA Acceptance &bull; Supreme Court of India
                  </p>
                  <p className="text-sm font-bold text-slate-900 mb-1">
                    Mobilox Innovations Pvt. Ltd. v. Kirusa Software Pvt. Ltd., (2018) 1 SCC 353
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Held that a defense raised by a corporate debtor must not be a spurious or mere bluster. Belated defect claims raised for the first time only after a statutory demand notice is served&mdash;when the machinery was operated in commercial production for months prior without written protest&mdash;are treated as fabricated afterthoughts.
                  </p>
                </div>
              </div>

              {/* Verified Bare Act Sources List */}
              <div className="bg-slate-100 p-4 rounded-xl border border-slate-200">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  Verified Statutory References:
                </span>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li>&bull; Sale of Goods Act, 1930 (ss. 16, 41, 42, 43, 55, 59) &mdash; Ministry of Law &amp; Justice, Government of India</li>
                  <li>&bull; Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (ss. 15, 16, 17, 18, 24)</li>
                  <li>&bull; Code of Civil Procedure, 1908 (Order XXXVII Summary Suits &amp; Order XXXVIII Rule 5 Attachment Before Judgment)</li>
                  <li>&bull; Commercial Courts Act, 2015 (ss. 2(1)(c)(i), 12A) &mdash; Commercial Division Pecuniary Slabs</li>
                  <li>&bull; Income Tax Act, 1961 (s. 43B(h)) &mdash; Central Board of Direct Taxes (CBDT)</li>
                  <li>&bull; Bharatiya Sakshya Adhiniyam, 2023 (s. 63) &mdash; Admissibility of Electronic Records</li>
                </ul>
              </div>

              {/* Sibling Industry Spoke Links */}
              <div className="mt-6 pt-5 border-t border-slate-200">
                <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Related Manufacturing &amp; OEM Recovery Playbooks:
                </p>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="/auto-ancillary-oem-arbitrary-debit-note-tooling-cost-recovery"
                    className="inline-block px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                  >
                    Auto-Ancillary OEM Arbitrary Debit Note &amp; Tooling Recovery &rarr;
                  </Link>
                  <Link
                    href="/medium-enterprise-udyam-excluded-from-msme-samadhaan-recovery-options"
                    className="inline-block px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                  >
                    Medium Enterprise Udyam Excluded From Samadhaan Playbook &rarr;
                  </Link>
                  <Link
                    href="/cnc-machining-fabrication-job-work-challan-payment-recovery"
                    className="inline-block px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                  >
                    CNC Machining &amp; Job-Work Challan Payment Recovery &rarr;
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer Cross-Links */}
      <RelatedRecoveryGuides cluster="manufacturingB2B" />
    </div>
  );
}
