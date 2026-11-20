import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import CoalGcvTableOfContents from "./CoalGcvTableOfContents";
import CoalGcvScenarioTabs from "./CoalGcvScenarioTabs";
import CoalGcvCTA from "./CoalGcvCTA";

export const revalidate = 86400;

const PAGE_URL = "/imported-coal-petcoke-biomass-supplier-gcv-moisture-deduction-recovery";
const EXACT_H1 =
  "Boiler Plant Burned Your Entire 2,000-MT Imported Coal Lot—and Slapped an ₹18 Lakh 'Low GCV / High Moisture' Debit Note 45 Days Later!";
const META_TITLE = "Imported Coal, Petcoke & Biomass GCV Recovery Guide";
const META_DESCRIPTION =
  "Boiler burned your coal? Unilateral factory GCV/moisture cuts are void under Sale of Goods s.42. Enforce SGS/NABL referee reports, Order 37 & IBC s.8.";

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
        alt: "Imported coal, petcoke and biomass supplier GCV deduction recovery guide",
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
      "The Sale of Goods Act, 1930 (Sections 26, 39, 41 & 42 — Risk Transfer, Carrier Delivery & Acceptance by Consumption)",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title:
      "The Code of Civil Procedure, 1908 (Order XXXVII Summary Suits & Order XXXVIII Rule 5 Attachment Before Judgment)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "Insolvency and Bankruptcy Code, 2016 (Sections 4, 8 & 9 — Operational Debt Demand Notice & ₹1 Crore Threshold)",
    url: "https://ibbi.gov.in/legal-framework/act",
  },
  {
    title:
      "The Negotiable Instruments Act, 1881 (Sections 138, 141 & 143A — Cheque Dishonour, Director Liability & 20% Interim Relief)",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title:
      "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15, 16, 18 & 19 — 3x RBI Compound Interest)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Admissibility of Electronic Weighbridge, Lab & GSTR-2B Records)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "National Accreditation Board for Testing and Calibration Laboratories (NABL) — Accredited Coal & Fuel Testing Standards",
    url: "https://nabl-india.org/",
  },
];

const FAQS = [
  {
    question:
      "Can a boiler plant legally deduct ₹18 Lakh for 'low GCV or high moisture' 45 days after burning my entire coal lot?",
    answer:
      "No. Under Section 42 of the Sale of Goods Act, 1930, a buyer is deemed to have unconditionally accepted the goods once they perform an act inconsistent with the seller's ownership—and burning coal or biomass pellets in a boiler is irreversible consumption. Without a sealed joint referee sample tested at a mutually agreed NABL-accredited lab within the contractual window, a belated Day-45 unilateral factory-lab debit note is legally void.",
  },
  {
    question:
      "Which prevails in court: my Load-Port SGS / Intertek / IIA Certificate or the buyer's in-house factory lab report?",
    answer:
      "Where your Purchase Order or Supply Agreement specifies Load-Port/Discharge-Port SGS, Intertek, Inspectorate Griffith (IIA), or a mutually sealed NABL referee sample as final and binding, courts enforce that contractual finality clause. An uncalibrated, unilateral captive-lab bomb-calorimeter report prepared without the supplier's representative present carries no evidentiary weight against an accredited third-party port Certificate of Quality.",
  },
  {
    question:
      "If coal gains moisture from monsoon rain during truck transit from Mundra or Kandla, who bears the weight and GCV cut?",
    answer:
      "On Ex-Plot, Ex-Jetty, or FOR Port dispatch terms, property and risk pass to the buyer the moment coal is weighed at the port plot and handed over to the buyer-nominated transporter under Sections 26 and 39 of the Sale of Goods Act, 1930. Any post-dispatch moisture gain due to open-tarpaulin transit in rain is strictly to the buyer's account.",
  },
  {
    question:
      "Does a belated GCV debit note qualify as a 'pre-existing dispute' that blocks an IBC Section 8 Demand Notice?",
    answer:
      "Under the Supreme Court's Mobilox Innovations ruling, a dispute must be genuine, pre-existing, and documented prior to the demand notice—not a moonshine or spurious defense fabricated after full consumption. By immediately repudiating the unilateral debit note in writing and attaching GSTR-2B ITC claim proof alongside port SGS certificates, coal traders strip the buyer of any 'pre-existing dispute' shield.",
  },
  {
    question:
      "Can imported coal traders club 18%–24% contractual interest with unpaid principal to cross the ₹1 Crore IBC threshold?",
    answer:
      "Yes, provided the tax invoice, Purchase Order, or written supply contract expressly stipulates overdue interest (for example, 18% or 24% per annum after 15/30 days). NCLAT benches allow interest to be clubbed with principal to determine the ₹1 Crore operational debt threshold under Section 4 of IBC, 2016 when interest is an explicit written term of the commercial bargain.",
  },
  {
    question:
      "Do biomass briquette and pellet manufacturers qualify for 3x RBI compound interest under the MSMED Act?",
    answer:
      "Yes. Unlike pure imported coal traders (who fall outside MSMED manufacturing/service definitions), domestic biomass briquette and agro-pellet manufacturers holding a valid Udyam Manufacturing Registration prior to the invoice date can claim mandatory monthly compounded interest at 3x the RBI Bank Rate under Section 16 of the MSMED Act, 2006, plus enforce the 75% pre-deposit barrier under Section 19.",
  },
  {
    question:
      "How fast can a coal or petcoke trader serve recovery notices across 20+ defaulting brick kilns or textile mills?",
    answer:
      "For a single high-value claim, you can launch an Advocate-Drafted Demand Notice for ₹999 dispatched via Email, WhatsApp, and Speed Post RPAD. For port traders and importers chasing 10 to 10,000+ defaulting mills or kilns simultaneously, you can upload your overdue ledger CSV via our Bulk Recovery Desk to automate multi-channel statutory notices in one batch.",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const REVIEWER_ATTRIBUTION = {
  name: "Anuj Anand Malik",
  jobTitle: "Advocate & Founder, AMA Legal Solutions",
  url: `${SITE_URL}/about`,
};

export default function ImportedCoalGcvRecoveryPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: META_DESCRIPTION,
    image: `${SITE_URL}/blog_money_recovery.png`,
    author: {
      "@type": "Person",
      name: REVIEWER_ATTRIBUTION.name,
      jobTitle: REVIEWER_ATTRIBUTION.jobTitle,
      url: REVIEWER_ATTRIBUTION.url,
    },
    publisher: {
      "@type": "Organization",
      name: "LegalRecovery.in",
      url: SITE_URL,
    },
    datePublished: "2026-11-20",
    dateModified: "2026-11-20",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${PAGE_URL}`,
    },
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Coal, Petcoke & Biomass Suppliers Defeat Unilateral GCV & Moisture Debit Notes",
    description:
      "5-step operational and statutory playbook to defeat post-consumption GCV cuts using Sale of Goods Act s.42, SGS/NABL referee finality, Order XXXVII CPC, and IBC Section 8.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Lock Port Weighbridge, SGS/IIA Certificate & GSTR-2B Proof",
        text: "Preserve load-port/discharge-port SGS, Intertek, or IIA Certificates of Quality, port weighbridge slips, E-Way Bills, and buyer GSTR-2B Input Tax Credit claims.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Repudiate Unilateral Factory-Lab Debit Note Within 7 Days",
        text: "Issue a formal written rejection invoking Sale of Goods Act Section 42 consumption estoppel and the contractual Joint Umpire/NABL Sample Finality clause.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Serve Advocate Statutory Demand Notice (Email + WhatsApp + RPAD)",
        text: "Dispatch a 15-day Advocate Demand Notice quantifying principal, contractual interest (or 3x RBI MSMED interest for biomass manufacturers), and BSA s.63 electronic records.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Trigger NI s.138 / Order XXXVII CPC / IBC Section 8",
        text: "Escalate based on ticket size and instruments: NI Act s.138/141 for dishonoured security cheques, Order XXXVII Summary Suit for liquidated invoices, or IBC Form 3/4 for ₹1 Crore+ corporate defaults.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Seek Order XXXVIII Rule 5 Attachment Before Judgment",
        text: "Where a defaulting mill attempts asset stripping or plant closure, move for Attachment Before Judgment under Order XXXVIII Rule 5 CPC to freeze bank accounts or finished stock.",
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
        name: "Coal, Scrap & Commodity Recovery Hub",
        item: `${SITE_URL}/industries/mining-minerals-fuel-scrap-commodity-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Coal, Petcoke & Biomass GCV Recovery",
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

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-25 Fuel &amp; Bulk Commodity Creditor Playbook</span>
            <span>&bull;</span>
            <span>Sale of Goods s.42 &bull; NABL Finality</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40-60 Word Executive Creditor Answer Box + Parent Hub Link */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Under Section 42 of the Sale of Goods Act, 1930, once a boiler plant burns your coal,
            petcoke, or biomass pellets without preserving a sealed joint NABL referee sample,
            unilateral factory-lab GCV or moisture debit notes are legally void. Enforce port
            SGS/IIA certificates via our{" "}
            <Link
              href="/industries/mining-minerals-fuel-scrap-commodity-recovery"
              className="text-red-400 underline hover:text-red-300 font-bold"
            >
              IND-25 Coal &amp; Commodity Recovery Hub
            </Link>
            .
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">s.42 Estoppel</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Boiler burning = irreversible legal acceptance
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">SGS / NABL</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Joint umpire sample finality over plant labs
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">2.5% Margin</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                1 unilateral ₹18L cut wipes out 5 whole rakes
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">&#8377;999 / CSV</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Single test notice or 10–10,000+ kiln batch
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <Breadcrumbs
          items={[
            {
              label: "Coal, Scrap & Commodity Hub",
              href: "/industries/mining-minerals-fuel-scrap-commodity-recovery",
            },
            { label: "Coal, Petcoke & Biomass GCV Recovery" },
          ]}
        />

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-6">
          <CoalGcvTableOfContents />

          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: The Day-45 GCV Trap */}
            <section
              id="heading-gcv-trap"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Why Mundra, Kandla &amp; Vizag Coal Traders Lose Millions on Day-45 Cuts
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Across India&apos;s bulk fuel corridors—from imported Indonesian and South African
                  Steam Coal plots at <strong>Mundra, Kandla, Tuna, Navlakhi, Vizag, and Paradip</strong>{" "}
                  to domestic petcoke refineries and agro-waste biomass pellet plants—a predictable
                  credit trap repeats every quarter. You dispatch 2,000 MT of GAR 4200 or RB2 coal
                  on 30–45 days credit backed by a certified Load-Port or Discharge-Port{" "}
                  <strong>SGS, Intertek, or Inspectorate Griffith (IIA)</strong> Certificate of
                  Quality.
                </p>
                <p>
                  The buyer—often a textile dyeing mill in Surat or Tirupur, a kraft paper mill in
                  Vapi or Morbi, a sponge iron unit in Raipur, or a brick kiln cluster in NCR/UP—weighs
                  every truck at its factory gate, unloads the coal into its yard, feeds{" "}
                  <strong>100% of the lot into its FBC/AFBC boiler</strong>, and even claims full
                  GST Input Tax Credit (ITC) in its GSTR-2B return. Yet on Day 45 or Day 60, when the
                  invoice falls due, the buyer emails an unverified Excel sheet and an in-house lab
                  memo claiming a <em>&ldquo;400 kcal/kg GCV shortfall and 7% excess Total Moisture&rdquo;</em>,
                  slapping an arbitrary <strong>&#8377;18 Lakh debit note</strong> against your
                  running ledger.
                </p>
                <p>
                  Because imported coal and petcoke traders operate on wafer-thin{" "}
                  <strong>2% to 4% net trading margins</strong> after ocean freight, customs duty,
                  port handling, and working-capital interest, a single &#8377;18 Lakh unilateral
                  deduction does not merely dent quarterly profit—it wipes out the net margin of an
                  entire 10,000-MT vessel parcel. Worse, if you fail to repudiate that debit note
                  immediately in writing, the buyer will later wave it in NCLT as a{" "}
                  <em>&ldquo;pre-existing quality dispute&rdquo;</em> to block insolvency or stall
                  civil recovery.
                </p>
              </div>
            </section>

            {/* Section 2: 5-Step Decision Tree (SVG + Mobile Cards) */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  5-Step Operational Decision Tree to Void GCV Debit Notes
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
                Follow this strict creditor escalation sequence the moment a factory buyer emails a
                post-consumption quality or moisture deduction instead of releasing RTGS payment.
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block w-full overflow-x-auto bg-slate-900 rounded-2xl p-5 border border-slate-800">
                <svg
                  width="860"
                  height="210"
                  viewBox="0 0 860 210"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto"
                  role="img"
                  aria-label="5-step coal GCV and moisture deduction recovery decision tree"
                >
                  {/* Step 1 */}
                  <rect x="10" y="25" width="148" height="150" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <circle cx="34" cy="49" r="12" fill="#DC2626" />
                  <text x="34" y="53" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">1</text>
                  <text x="54" y="53" fill="#F8FAFC" fontSize="11" fontWeight="bold">Lock Evidence</text>
                  <text x="22" y="80" fill="#CBD5E1" fontSize="10">SGS / IIA Port CoQ,</text>
                  <text x="22" y="96" fill="#CBD5E1" fontSize="10">Gate Weighbridge Slip,</text>
                  <text x="22" y="112" fill="#CBD5E1" fontSize="10">E-Way Bill &amp; GSTR-2B</text>
                  <text x="22" y="128" fill="#CBD5E1" fontSize="10">ITC Claim Proof.</text>
                  <rect x="22" y="144" width="124" height="20" rx="6" fill="#0F172A" />
                  <text x="84" y="158" textAnchor="middle" fill="#34D399" fontSize="9" fontWeight="bold">Day 0–2</text>

                  {/* Arrow 1->2 */}
                  <path d="M162 100 L180 100" stroke="#DC2626" strokeWidth="2" />
                  <polygon points="180,96 188,100 180,104" fill="#DC2626" />

                  {/* Step 2 */}
                  <rect x="188" y="25" width="148" height="150" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <circle cx="212" cy="49" r="12" fill="#DC2626" />
                  <text x="212" y="53" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">2</text>
                  <text x="232" y="53" fill="#F8FAFC" fontSize="11" fontWeight="bold">Estoppel Reply</text>
                  <text x="200" y="80" fill="#CBD5E1" fontSize="10">Invoke Sale of Goods</text>
                  <text x="200" y="96" fill="#CBD5E1" fontSize="10">s.42 (Coal Burned)</text>
                  <text x="200" y="112" fill="#CBD5E1" fontSize="10">&amp; Demand Sealed</text>
                  <text x="200" y="128" fill="#CBD5E1" fontSize="10">NABL Referee Sample.</text>
                  <rect x="200" y="144" width="124" height="20" rx="6" fill="#0F172A" />
                  <text x="262" y="158" textAnchor="middle" fill="#FBBF24" fontSize="9" fontWeight="bold">Within 7 Days</text>

                  {/* Arrow 2->3 */}
                  <path d="M340 100 L358 100" stroke="#DC2626" strokeWidth="2" />
                  <polygon points="358,96 366,100 358,104" fill="#DC2626" />

                  {/* Step 3 */}
                  <rect x="366" y="25" width="148" height="150" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <circle cx="390" cy="49" r="12" fill="#DC2626" />
                  <text x="390" y="53" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">3</text>
                  <text x="410" y="53" fill="#F8FAFC" fontSize="11" fontWeight="bold">Demand Notice</text>
                  <text x="378" y="80" fill="#CBD5E1" fontSize="10">Advocate Notice via</text>
                  <text x="378" y="96" fill="#CBD5E1" fontSize="10">Email, WhatsApp &amp;</text>
                  <text x="378" y="112" fill="#CBD5E1" fontSize="10">Speed Post RPAD</text>
                  <text x="378" y="128" fill="#CBD5E1" fontSize="10">+ 18%–24% Interest.</text>
                  <rect x="378" y="144" width="124" height="20" rx="6" fill="#0F172A" />
                  <text x="440" y="158" textAnchor="middle" fill="#34D399" fontSize="9" fontWeight="bold">15-Day Cure Window</text>

                  {/* Arrow 3->4 */}
                  <path d="M518 100 L536 100" stroke="#DC2626" strokeWidth="2" />
                  <polygon points="536,96 544,100 536,104" fill="#DC2626" />

                  {/* Step 4 */}
                  <rect x="544" y="25" width="148" height="150" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <circle cx="568" cy="49" r="12" fill="#DC2626" />
                  <text x="568" y="53" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">4</text>
                  <text x="588" y="53" fill="#F8FAFC" fontSize="11" fontWeight="bold">Forum Escalation</text>
                  <text x="556" y="80" fill="#CBD5E1" fontSize="10">Order 37 Summary Suit,</text>
                  <text x="556" y="96" fill="#CBD5E1" fontSize="10">NI s.138/141 Directors,</text>
                  <text x="556" y="112" fill="#CBD5E1" fontSize="10">IBC Form 3/4 (&#8377;1Cr+),</text>
                  <text x="556" y="128" fill="#CBD5E1" fontSize="10">or MSEFC (Biomass).</text>
                  <rect x="556" y="144" width="124" height="20" rx="6" fill="#0F172A" />
                  <text x="618" y="158" textAnchor="middle" fill="#F87171" fontSize="9" fontWeight="bold">Day 16 Onwards</text>

                  {/* Arrow 4->5 */}
                  <path d="M696 100 L714 100" stroke="#DC2626" strokeWidth="2" />
                  <polygon points="714,96 722,100 714,104" fill="#DC2626" />

                  {/* Step 5 */}
                  <rect x="722" y="25" width="128" height="150" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="1.5" />
                  <circle cx="746" cy="49" r="12" fill="#DC2626" />
                  <text x="746" y="53" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">5</text>
                  <text x="766" y="53" fill="#F8FAFC" fontSize="11" fontWeight="bold">Asset Freeze</text>
                  <text x="734" y="80" fill="#CBD5E1" fontSize="10">Order 38 Rule 5</text>
                  <text x="734" y="96" fill="#CBD5E1" fontSize="10">Attachment Before</text>
                  <text x="734" y="112" fill="#CBD5E1" fontSize="10">Judgment on Plant</text>
                  <text x="734" y="128" fill="#CBD5E1" fontSize="10">Accounts &amp; Stock.</text>
                  <rect x="734" y="144" width="104" height="20" rx="6" fill="#0F172A" />
                  <text x="786" y="158" textAnchor="middle" fill="#34D399" fontSize="9" fontWeight="bold">Security Lock</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="md:hidden space-y-3">
                {[
                  {
                    step: "1. Lock Evidence (Day 0–2)",
                    desc: "Archive SGS/IIA Port CoQ, gate weighbridge slips, E-Way Bills, and buyer GSTR-2B ITC claim proof.",
                  },
                  {
                    step: "2. Consumption Estoppel Reply (Within 7 Days)",
                    desc: "Reject the unilateral debit note under Sale of Goods Act s.42 and demand the sealed NABL referee sample.",
                  },
                  {
                    step: "3. Advocate Demand Notice (15-Day Cure)",
                    desc: "Serve formal notice via Email, WhatsApp, and Speed Post RPAD claiming principal + 18%–24% contractual interest.",
                  },
                  {
                    step: "4. Statutory Forum Escalation (Day 16+)",
                    desc: "File Order XXXVII Summary Suit, NI s.138/141 against directors, IBC s.8 Form 3/4 (₹1Cr+), or MSEFC (Biomass).",
                  },
                  {
                    step: "5. Order XXXVIII Rule 5 Asset Freeze",
                    desc: "Seek Attachment Before Judgment if the mill attempts to divert receivables or shut its boiler unit.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800"
                  >
                    <p className="text-xs font-bold text-red-400 mb-1">{item.step}</p>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
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
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Matrix: Defeating Unilateral Lab &amp; Moisture Cuts
                </h2>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Statute / Contractual Hook</th>
                      <th className="p-3.5 font-bold">Buyer Evasion Tactic</th>
                      <th className="p-3.5 font-bold">Creditor Enforcement Power</th>
                      <th className="p-3.5 font-bold">Key Limitation / Window</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        Sale of Goods Act, 1930 (ss. 41–42)
                      </td>
                      <td className="p-3.5 text-slate-600">
                        Burns 100% of coal in boiler, then emails Day-45 GCV debit note
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Irreversible consumption = deemed legal acceptance; buyer estopped from
                        rejecting quality
                      </td>
                      <td className="p-3.5 font-semibold text-emerald-700">
                        Immediate upon consumption
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        Joint Umpire / NABL Finality Clause
                      </td>
                      <td className="p-3.5 text-slate-600">
                        Relies on uncalibrated in-house plant chemist bomb-calorimeter test
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Port SGS/Intertek/IIA CoQ or mutually sealed NABL referee sample is final &amp;
                        binding
                      </td>
                      <td className="p-3.5 font-semibold text-amber-700">
                        7–15 days sample dispute window
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        Sale of Goods Act, 1930 (ss. 26, 39)
                      </td>
                      <td className="p-3.5 text-slate-600">
                        Deducts 6%–10% monsoon transit moisture on Ex-Mundra / Kandla sales
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Risk passes to buyer at port weighbridge upon carrier handover
                      </td>
                      <td className="p-3.5 font-semibold text-slate-700">
                        3 years (Limitation Act Art. 14)
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        CPC Order XXXVII &amp; Order XXXVIII R.5
                      </td>
                      <td className="p-3.5 text-slate-600">
                        Withholds admitted invoice balance and strips plant liquidity
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Summary Suit leaves no automatic right to defend + pre-judgment attachment
                      </td>
                      <td className="p-3.5 font-semibold text-slate-700">
                        10-day appearance rule (O.37)
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        IBC, 2016 (ss. 4, 8, 9) &amp; NI Act s.138
                      </td>
                      <td className="p-3.5 text-slate-600">
                        Defaults on ₹1 Crore+ multi-rake credit or bounces security PDCs
                      </td>
                      <td className="p-3.5 text-slate-700">
                        10-day Form 3/4 insolvency trigger; 20% interim relief + director summons
                      </td>
                      <td className="p-3.5 font-semibold text-red-700">
                        10d (IBC) / 30d (NI s.138 notice)
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        MSMED Act, 2006 (ss. 15–19)
                      </td>
                      <td className="p-3.5 text-slate-600">
                        Spinning/paper mill delays biomass briquette or pellet bills &gt;45 days
                      </td>
                      <td className="p-3.5 text-slate-700">
                        3x RBI monthly compound interest + 75% mandatory pre-deposit on appeal
                      </td>
                      <td className="p-3.5 font-semibold text-emerald-700">
                        Udyam Mfg prior to PO/Invoice
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Interactive Scenario Tabs */}
            <section id="heading-scenario-tabs" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  4 Coal, Petcoke &amp; Biomass Deduction Playbooks
                </h2>
              </div>
              <CoalGcvScenarioTabs />
            </section>

            {/* Section 5: Worked Financial & Interest Calculation Box */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Worked Recovery Ledger: ₹18 Lakh GCV Cut on 2,000-MT Lot
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-600 mb-5 leading-relaxed">
                Consider a typical Ex-Mundra Indonesian Steam Coal (GAR 4200) dispatch of 2,000 MT
                to a Gujarat textile dyeing unit at &#8377;7,500/MT (plus 5% GST) on 30-day credit,
                with a written 18% p.a. overdue interest clause.
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700 pb-3">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-red-400">
                    Commercial Recovery &amp; Margin Impact Ledger
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    2,000 MT @ &#8377;7,500/MT + 5% GST
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Gross Invoice Value (incl. 5% GST)</span>
                      <span className="font-bold text-white">&#8377;1,57,50,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Trader Net Margin (2.5% pre-tax)</span>
                      <span className="font-bold text-emerald-400">&#8377;3,75,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Buyer Day-45 Unilateral GCV Cut</span>
                      <span className="font-bold text-red-400">-&#8377;18,00,000</span>
                    </div>
                    <div className="flex justify-between border-t border-white/10 pt-2">
                      <span className="text-slate-200 font-semibold">Net Cash Loss Without Action</span>
                      <span className="font-black text-red-400">-&#8377;14,25,000</span>
                    </div>
                  </div>

                  <div className="bg-emerald-950/40 rounded-xl p-4 border border-emerald-800/50 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-emerald-200">Disputed Principal Claimed</span>
                      <span className="font-bold text-white">&#8377;18,00,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-emerald-200">Contractual Interest (18% p.a., 90d)</span>
                      <span className="font-bold text-emerald-300">+&#8377;79,890</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-emerald-200">Biomass MSMED Alt. (3x RBI ~19.5%)*</span>
                      <span className="font-bold text-emerald-300">+&#8377;87,750+</span>
                    </div>
                    <div className="flex justify-between border-t border-emerald-800/50 pt-2">
                      <span className="text-white font-semibold">Total Demand Notice Claim</span>
                      <span className="font-black text-emerald-400">&#8377;18,79,890</span>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 leading-relaxed">
                  *Note: Pure coal/petcoke traders claim contractual interest (18%–24% p.a.) under
                  Order XXXVII CPC / Commercial Courts Act or club it toward the &#8377;1 Crore IBC
                  s.8 floor. Domestic Udyam-registered biomass pellet/briquette manufacturers unlock
                  mandatory monthly compounded 3x RBI interest under MSMED s.16.
                </p>
              </div>
            </section>

            {/* Section 6: BSA 2023 s.63 Evidence Checklist */}
            <section
              id="heading-evidence-bsa"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  BSA 2023 s.63 Evidence Checklist for Coal &amp; Petcoke Claims
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-600 mb-5 leading-relaxed">
                Before serving a statutory demand notice or filing an Order XXXVII / IBC Section 8
                petition, assemble these 8 records with a{" "}
                <strong>Section 63 Bharatiya Sakshya Adhiniyam, 2023</strong> electronic evidence
                certificate:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  {
                    title: "1. Signed PO / Supply Contract",
                    desc: "Must highlight the SGS/Intertek/IIA finality clause, moisture tolerance, and 18%–24% overdue interest.",
                  },
                  {
                    title: "2. Port Load/Discharge SGS CoQ",
                    desc: "Certified As-Received Basis (ARB) GCV, Total Moisture, Ash, and Sulphur certificate from an accredited agency.",
                  },
                  {
                    title: "3. Port Weighbridge & LRs / Bilties",
                    desc: "Proves exact MT loaded and handover to the buyer's carrier under Sale of Goods Act s.39.",
                  },
                  {
                    title: "4. Factory Gate Weighment Slips",
                    desc: "Buyer's own stamped dharam-kanta slips proving physical receipt without any contemporaneous quality endorsement.",
                  },
                  {
                    title: "5. E-Way Bills & GST GSTR-1 / 2B",
                    desc: "Irrefutable proof that the buyer accepted the tax invoice and claimed GST Input Tax Credit on the coal.",
                  },
                  {
                    title: "6. Joint Sampling / Seal Absence Log",
                    desc: "Email/WhatsApp proof showing the buyer never invited your representative for joint sampling before burning the lot.",
                  },
                  {
                    title: "7. Written Repudiation of Debit Note",
                    desc: "Timestamped email rejecting the Day-45 debit note so it cannot morph into an admitted 'pre-existing dispute'.",
                  },
                  {
                    title: "8. BSA 2023 s.63 Hash Certificate",
                    desc: "Statutory certificate authenticating WhatsApp chats, emails, ERP ledgers, and digital weighbridge logs.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200"
                  >
                    <p className="text-xs sm:text-sm font-bold text-slate-900 mb-1">{item.title}</p>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Dual-Track B2B CTA */}
            <section id="heading-dual-cta" className="scroll-mt-28">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Start 1 Live Test Notice (₹999) or Upload Bulk Plant CSV
                </h2>
              </div>
              <CoalGcvCTA />
            </section>

            {/* Section 8: Parent Hub, Calculators & Related Guides */}
            <section
              id="heading-hub-links"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  IND-25 Hub, Calculators &amp; Commercial Recovery Guides
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  {
                    title: "IND-25 Coal, Scrap & Commodity Recovery Hub",
                    href: "/industries/mining-minerals-fuel-scrap-commodity-recovery",
                    tag: "Parent Hub",
                    desc: "Master escalation directory for coal, petcoke, metal scrap, industrial gases, lubricants, and mineral traders.",
                  },
                  {
                    title: "Order XXXVII CPC Summary Suit Guide",
                    href: "/law/order-37-summary-suit-money-recovery",
                    tag: "Statutory Remedy",
                    desc: "Fast-track summary recovery on written coal supply contracts and acknowledged GST invoices.",
                  },
                  {
                    title: "Cheque Bounce Case Against Company Directors",
                    href: "/cheque-bounce-case-against-company-directors",
                    tag: "NI s.138 / 141",
                    desc: "Prosecute defaulting mill directors and seek 20% interim compensation under Section 143A.",
                  },
                  {
                    title: "Unpaid B2B Invoices & Ledger Recovery",
                    href: "/recovery/unpaid-invoices",
                    tag: "B2B Invoices",
                    desc: "Structured commercial invoice demand notices and GSTR-2B reconciliation workflows.",
                  },
                  {
                    title: "MSME 3x RBI Delayed Payment Calculator",
                    href: "/tools/msme-delayed-payment-interest-calculator",
                    tag: "T1 Calculator",
                    desc: "Compute monthly compounded 3x RBI interest for Udyam-registered biomass pellet & briquette suppliers.",
                  },
                  {
                    title: "Commercial Legal Notice Reply & Format",
                    href: "/templates/legal-notice-reply-format",
                    tag: "P1 Template",
                    desc: "Structured legal notice and counter-reply templates for commercial B2B disputes.",
                  },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-all"
                  >
                    <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-[#DC2626] mb-1">
                      {link.tag}
                    </span>
                    <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                      {link.title} &rarr;
                    </p>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{link.desc}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* Section 9: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  FAQs: Imported Coal, Petcoke &amp; Biomass GCV Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-xl border border-slate-200 bg-slate-50/70 open:bg-white open:border-slate-300 transition-colors"
                  >
                    <summary className="flex items-center justify-between gap-4 p-4 cursor-pointer list-none font-bold text-xs sm:text-sm text-slate-900">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] font-black text-lg shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 10: Primary Statutory Authorities */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#404447] text-white text-xs font-black flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Official Statutory Portals &amp; Bare Act Authorities
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.url} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold mt-0.5">&bull;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline decoration-slate-300 underline-offset-2 transition-colors"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-500">
                Reviewed by{" "}
                <strong className="text-slate-700">{REVIEWER_ATTRIBUTION.name}</strong> (
                {REVIEWER_ATTRIBUTION.jobTitle}) &middot; Updated November 20, 2026.
              </div>
            </section>
          </div>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
