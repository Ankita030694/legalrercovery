import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import AgroDealerTableOfContents from "./AgroDealerTableOfContents";
import AgroDealerScenarioTabs from "./AgroDealerScenarioTabs";
import AgroDealerCTA from "./AgroDealerCTA";

export const revalidate = 86400;

const PAGE_URL =
  "/agrochemical-pesticide-seed-dealer-seasonal-credit-default-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

const EXACT_H1 =
  "Kharif/Rabi Harvest Over, Dealer Collected Cash From Farmers—and Now Claims 'Poor Seed Germination / Low Pesticide Efficacy' to Skip ₹18 Lakh?";

// Tightened from 69ch PDF draft to 50ch for Screaming Frog 30-60ch compliance
const META_TITLE = "Agrochemical & Seed Dealer Credit Default Recovery";

// Tightened from 173ch PDF draft to 145ch for Screaming Frog 120-155ch compliance
const META_DESCRIPTION =
  "Defaulting Krishi Kendra dealers invent oral 'crop complaints' post-harvest. Demand statutory Seed/Insecticide Analyst reports & prosecute PDCs.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "agrochemical pesticide hybrid seed dealer credit default crop failure excuse",
    "dealer blaming poor seed germination pest efficacy to dodge payment",
    "mandatory government seed inspector insecticide analyst report defense",
    "kharif rabi seasonal pdc security cheque bounce agro dealer",
    "fertilizer pesticide license transfer shop name change fraud",
    "bulk dealer legal notice drive agrochemical companies",
  ],
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: CANONICAL_URL,
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
      "The Seeds Act, 1966 (Sections 14, 15 & 16 — Powers of Seed Inspector, Sampling Procedure & Report of Central/State Seed Analyst)",
    url: "https://www.indiacode.nic.in/handle/123456789/1552",
  },
  {
    title:
      "The Insecticides Act, 1968 (Sections 21, 22 & 24 — Powers of Insecticide Inspector, Joint Sampling & Government Insecticide Analyst Report)",
    url: "https://www.indiacode.nic.in/handle/123456789/1489",
  },
  {
    title:
      "The Sale of Goods Act, 1930 (Sections 16 & 42 — Implied Conditions as to Quality & Deemed Acceptance After Reasonable Lapse of Time)",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title:
      "The Negotiable Instruments Act, 1881 (Sections 138, 139 & 143A — Dishonour of Seasonal/Security PDCs & 20% Interim Compensation)",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title:
      "Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15–18 & 24 — 3x RBI Compound Interest & MSEFC Recovery for Udyam Agri-Formulators)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 — Admissibility of WhatsApp Admissions, E-Way Bills, Batch COAs & ERP Ledgers)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const FAQS = [
  {
    q: "Can an agrochemical or seed dealer legally withhold invoice payment over oral 'poor germination' or 'low efficacy' complaints?",
    a: "No. Under the Seeds Act, 1966 (Sections 14–16) and the Insecticides Act, 1968 (Sections 21–24), any defect or sub-standard quality claim must be established through contemporaneous statutory sampling by a notified Government Seed Inspector or Insecticide Inspector, accompanied by a joint panchnama and an adverse Government Seed/Insecticide Analyst lab report for that specific lot. An unverified oral claim raised 4 to 6 months post-sale—after the dealer has already sold the stock and collected cash from farmers—is legally untenable and barred by deemed acceptance under Section 42 of the Sale of Goods Act, 1930.",
  },
  {
    q: "What if the Krishi Seva Kendra dealer says 'the security PDC was only for comfort and cannot be prosecuted under Section 138'?",
    a: "That defense has been squarely rejected by the Supreme Court of India in Sripati Singh v. State of Jharkhand (2021) and Sampelly Satyanarayana Rao (2016). Once seasonal Kharif or Rabi credit becomes due and payable on the ledger reconciliation date, a post-dated or undated security cheque presented for that ascertained liability attracts full criminal prosecution under Section 138 of the NI Act, 1881—even if the dealer issues a 'Stop Payment' instruction.",
  },
  {
    q: "How should our ZSM team respond if a defaulting dealer transfers their Fertilizer/Pesticide license to a relative's new shop name?",
    a: "Most rural Krishi Kendras operate as sole proprietorships, meaning the proprietor's personal PAN, bank accounts, and immovable property remain fully liable regardless of shop-board changes. Serve a dual-target legal notice invoking BNS 2023 Sections 316 and 318 (criminal breach of trust / cheating), seek urgent attachment before judgment under CPC Order XXXVIII Rule 5, and mark a formal copy to the District Agriculture Officer (Licensing Authority) under the Fertilizer (Control) Order, 1985 and Insecticides Rules, 1971.",
  },
  {
    q: "Can we recover 3x RBI compound interest from defaulting agro dealers under the MSMED Act, 2006?",
    a: "Yes, provided your seed, bio-stimulant, micronutrient, or agrochemical manufacturing company holds a valid Udyam Registration as a Micro or Small Enterprise on the date of the supply contract. Under Sections 15 and 16 of the MSMED Act, 2006, any credit period exceeding 45 days is void and the buyer/dealer owes compound interest with monthly rests at three times the RBI bank rate—override-enforced through the MSEFC Samadhaan portal.",
  },
  {
    q: "Why should agrochemical companies run a Batch Legal Notice Drive 45 days before the next Kharif or Rabi sowing season?",
    a: "Dealers rely on fresh seasonal credit lines to stock pre-monsoon herbicides, hybrid cotton/paddy/maize seeds, and fungicides. When an agrochemical company issues 50 to 500+ synchronized statutory notices simultaneously via Advocate Email, WhatsApp, and Speed Post RPAD before seasonal booking opens, dealers prioritize clearing overdue ledgers immediately rather than risking Section 138 warrants, credit blacklisting, and District Agriculture Officer intimations.",
  },
  {
    q: "What documents are mandatory to prove delivery and defeat a dealer's 'material never reached' or 'sub-standard lot' excuse?",
    a: "Assemble five core records: (1) Signed Dealership / Stockist Agreement, (2) GST Tax Invoices with batch/lot numbers matched to your internal QC Certificate of Analysis (COA), (3) GST E-Way Bills and signed Lorry Receipts (Bilty/LR), (4) Seasonal Balance Confirmation or WhatsApp order/dispatch admissions certified under BSA 2023 Section 63, and (5) Bounced PDCs with original Bank Return Memos.",
  },
  {
    q: "Should we send notices in English or Hindi/regional language to taluka-level Krishi Kendra dealers?",
    a: "For taluka and mandi-level Krishi Seva Kendras across Madhya Pradesh, Maharashtra, Haryana, Punjab, Gujarat, and Telangana, serving an Advocate-drafted statutory notice in English paired with a clear Hindi summary cover demand ensures zero 'did not understand English' excuse while preserving full courtroom enforceability in Commercial Courts and Magistrate Courts.",
  },
];

export default function AgrochemicalSeedDealerRecoveryPage() {
  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${CANONICAL_URL}#article`,
        headline: EXACT_H1,
        description: META_DESCRIPTION,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": CANONICAL_URL,
        },
        datePublished: "2026-11-18T10:00:00+05:30",
        dateModified: "2026-11-18T16:15:00+05:30",
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
        image: {
          "@type": "ImageObject",
          url: `${SITE_URL}/blog_money_recovery.png`,
          width: 1200,
          height: 630,
        },
        inLanguage: "en-IN",
      },
      {
        "@type": "HowTo",
        "@id": `${CANONICAL_URL}#howto`,
        name: "How Agrochemical & Seed Companies Recover Seasonal Credit Defaults From Krishi Kendra Dealers",
        description:
          "5-stage creditor recovery SOP defeating oral crop failure excuses using Seeds Act / Insecticides Act sampling rules, NI Act s.138 PDC prosecution, and pre-sowing batch legal notices.",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Lock Lot-Wise COA & GST E-Way Delivery Trail",
            text: "Reconcile GST invoices, E-Way bills, Bilty/LR receipts, and internal batch Certificates of Analysis before issuing any demand.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Serve Statutory Quality-Defense Estoppel Notice",
            text: "Demand production of a contemporaneous Government Seed Inspector / Insecticide Analyst lab report and joint panchnama within 7 days, invoking Sale of Goods Act s.42.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Present Reconciled Seasonal PDCs Under NI Act s.138",
            text: "Present post-dated security cheques for the exact unpaid ledger balance and serve a mandatory 15-day statutory demand notice within 30 days of bank dishonour.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Flag License-Migration Fraud to District Agriculture Officer",
            text: "Copy the District Agriculture Officer and invoke BNS ss.316/318 and CPC Order XXXVIII Rule 5 if the dealer shifts stock to a relative's new shop name.",
          },
          {
            "@type": "HowToStep",
            position: 5,
            name: "Escalate Unpaid Accounts to MSEFC, Order XXXVII or Section 138 Filing",
            text: "File criminal cheque bounce complaints, MSEFC Samadhaan references (3x RBI interest), or Order XXXVII summary suits on the top stubborn accounts.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${CANONICAL_URL}#faq`,
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${CANONICAL_URL}#breadcrumb`,
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
            name: "Distributor & Dealer Recovery",
            item: `${SITE_URL}/distributor-dealer-dues-recovery`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Agrochemical & Seed Dealer Recovery",
            item: CANONICAL_URL,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-21 · AGRI-INPUTS, SEEDS &amp; AGROCHEMICALS</span>
            <span>&bull;</span>
            <span>CREDITOR RECOVERY PLAYBOOK</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box (40-60 words) */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Under the <strong>Seeds Act, 1966</strong> and <strong>Insecticides Act, 1968</strong>, oral &ldquo;crop failure&rdquo; excuses raised months post-harvest are legally void without a contemporaneous Government Seed/Insecticide Inspector joint panchnama and Government Lab batch failure report. Combine{" "}
            <Link
              href="/distributor-dealer-dues-recovery"
              className="text-red-300 underline hover:text-white font-semibold"
            >
              structured dealer recovery notices
            </Link>{" "}
            with NI Act s.138 PDC prosecution before the next sowing cycle.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">Zero Legal Value</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Oral complaints without Govt Lab lot report
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">15 Days</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                NI Act s.138 statutory demand window on PDCs
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">3x RBI Rate</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                MSMED s.16 compound interest for Udyam units
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">10–10,000+</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Batch Krishi Kendra notices via CSV drive
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Distributor & Dealer Recovery",
                href: "/distributor-dealer-dues-recovery",
              },
              {
                label: "Agrochemical & Seed Dealer Recovery",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <AgroDealerTableOfContents />

          {/* Right Content Column */}
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
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Why Krishi Seva Kendras Invent Post-Harvest Crop Excuses
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Every Kharif and Rabi cycle follows an identical commercial script across India&apos;s major agri-input belts—from hybrid seed hubs in <strong>Hyderabad, Jalna, and Karnal</strong> to agrochemical, bio-stimulant, and micronutrient distribution corridors in <strong>Ahmedabad, Pune, and Indore</strong>. Regional Credit Managers and Zonal Sales Managers (ZSMs) dispatch ₹10 lakh to ₹40 lakh of herbicides, insecticides, fungicides, and certified hybrid seeds on 90-to-120-day seasonal credit to retail <em>Krishi Seva Kendras</em>.
                </p>
                <p>
                  During the peak sowing and spraying window, the dealer liquidates 100% of the inventory against cash or farmer UPI collections. Yet five months later, when harvest concludes and the ZSM team initiates ledger reconciliation, the dealer suddenly stops answering calls—and then floats a fabricated oral story: <em>&ldquo;Farmers are complaining of poor seed germination,&rdquo;</em> or <em>&ldquo;Your pesticide had zero efficacy against pink bollworm, so farmers are refusing to pay me.&rdquo;</em>
                </p>
                <p>
                  In reality, this is a calculated liquidity-diversion tactic. Dealers deploy unverified &ldquo;crop failure&rdquo; claims to park your working capital into competing brands, real estate, or next season&apos;s cash purchases, betting that your legal team will hesitate to litigate out of fear of reputational friction. Indian agricultural statutes, however, leave zero room for retroactive oral quality excuses. If you are pursuing general trade channel arrears beyond agri-inputs, also review our broader{" "}
                  <Link
                    href="/distributor-dealer-dues-recovery"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    distributor and dealer dues recovery playbook
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 2: Statutory Sampling Law */}
            <section
              id="heading-statutory-sampling"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Seeds Act &amp; Insecticides Act: Why Oral Complaints Are Void
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                <p>
                  Unlike generic FMCG goods, seeds and agrochemicals are strictly regulated statutory commodities. Parliament enacted mandatory, non-bypassable sampling protocols so that neither farmers nor unscrupulous dealers can fabricate post-harvest quality allegations after weather shocks, improper dosage, or soil mismanagement.
                </p>
                <ul className="list-disc pl-5 space-y-2.5">
                  <li>
                    <strong>Seeds Act, 1966 (Sections 14, 15 &amp; 16):</strong> Only a notified <em>Seed Inspector</em> may draw samples from a sealed/labelled lot in the presence of the dealer and witnesses, divide the sample into three sealed parts (one for the dealer, one for the State/Central Seed Testing Laboratory, and one retained for court), and obtain a formal <strong>Seed Analyst Report</strong>. Without a Government Lab lot-failure report, a dealer cannot legally assert poor germination.
                  </li>
                  <li>
                    <strong>Insecticides Act, 1968 (Sections 21, 22 &amp; 24):</strong> Allegations of misbranded or ineffective pesticides require formal sampling by a notified <em>Insecticide Inspector</em> under Section 22, documented via a contemporaneous <strong>Joint Panchnama</strong> and tested by a notified <strong>Government Insecticide Analyst</strong>. A dealer&apos;s WhatsApp voice note sent 150 days post-supply carries zero evidentiary weight.
                  </li>
                  <li>
                    <strong>Sale of Goods Act, 1930 (Section 42 — Deemed Acceptance):</strong> Even under general commercial law, once a buyer retains goods, breaks open sealed cartons, resells them to farmers, and fails to intimate written rejection within a reasonable time, the buyer is deemed in law to have accepted the goods unconditionally and must pay the full invoice price.
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm text-amber-950">
                <strong className="block text-amber-900 uppercase tracking-wider text-[11px] mb-1">
                  Critical ZSM Field Rule: Never Issue Ad-Hoc &ldquo;Goodwill Credit Notes&rdquo;
                </strong>
                Never allow field sales officers to promise verbal &ldquo;sample compensation&rdquo; or unapproved credit notes on WhatsApp to appease a defaulting Krishi Kendra. Dealers routinely screenshot casual field-staff messages and wave them in court as an admission of batch defect.
              </div>
            </section>

            {/* Section 3: 5-Stage Decision Tree SVG + Mobile Cards */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  5-Stage Seasonal Credit Recovery Decision Tree
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-6">
                Execute this five-stage escalation sequence immediately after Kharif/Rabi reconciliation—ideally 45 to 60 days before the next sowing season opens.
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block overflow-x-auto pb-2">
                <svg
                  width="820"
                  height="250"
                  viewBox="0 0 820 250"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="5-stage agrochemical and seed dealer credit recovery decision tree"
                  className="w-full h-auto"
                >
                  <rect width="820" height="250" rx="16" fill="#0F172A" />

                  {/* Stage 1 */}
                  <rect x="18" y="42" width="142" height="166" rx="12" fill="#1E293B" stroke="#334155" />
                  <circle cx="42" cy="68" r="12" fill="#DC2626" />
                  <text x="42" y="72" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">1</text>
                  <text x="30" y="102" fill="#F8FAFC" fontSize="12" fontWeight="700">Audit Trail Lock</text>
                  <text x="30" y="122" fill="#94A3B8" fontSize="10">GST Invoices +</text>
                  <text x="30" y="136" fill="#94A3B8" fontSize="10">E-Way + Bilty +</text>
                  <text x="30" y="150" fill="#94A3B8" fontSize="10">Batch QC COA</text>
                  <text x="30" y="182" fill="#34D399" fontSize="10" fontWeight="700">Day 1–3</text>

                  <path d="M164 125H178" stroke="#DC2626" strokeWidth="2.5" />

                  {/* Stage 2 */}
                  <rect x="180" y="42" width="142" height="166" rx="12" fill="#1E293B" stroke="#334155" />
                  <circle cx="204" cy="68" r="12" fill="#DC2626" />
                  <text x="204" y="72" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">2</text>
                  <text x="192" y="102" fill="#F8FAFC" fontSize="12" fontWeight="700">Estoppel Notice</text>
                  <text x="192" y="122" fill="#94A3B8" fontSize="10">Demand Govt Lab</text>
                  <text x="192" y="136" fill="#94A3B8" fontSize="10">Report + Joint</text>
                  <text x="192" y="150" fill="#94A3B8" fontSize="10">Panchnama (7d)</text>
                  <text x="192" y="182" fill="#34D399" fontSize="10" fontWeight="700">Day 4–10</text>

                  <path d="M326 125H340" stroke="#DC2626" strokeWidth="2.5" />

                  {/* Stage 3 */}
                  <rect x="342" y="42" width="142" height="166" rx="12" fill="#1E293B" stroke="#334155" />
                  <circle cx="366" cy="68" r="12" fill="#DC2626" />
                  <text x="366" y="72" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">3</text>
                  <text x="354" y="102" fill="#F8FAFC" fontSize="12" fontWeight="700">PDC Presentation</text>
                  <text x="354" y="122" fill="#94A3B8" fontSize="10">Deposit Seasonal</text>
                  <text x="354" y="136" fill="#94A3B8" fontSize="10">Cheque &amp; Serve</text>
                  <text x="354" y="150" fill="#94A3B8" fontSize="10">NI s.138 Notice</text>
                  <text x="354" y="182" fill="#FBBF24" fontSize="10" fontWeight="700">30d Memo Window</text>

                  <path d="M488 125H502" stroke="#DC2626" strokeWidth="2.5" />

                  {/* Stage 4 */}
                  <rect x="504" y="42" width="142" height="166" rx="12" fill="#1E293B" stroke="#334155" />
                  <circle cx="528" cy="68" r="12" fill="#DC2626" />
                  <text x="528" y="72" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">4</text>
                  <text x="516" y="102" fill="#F8FAFC" fontSize="12" fontWeight="700">License &amp; Fraud</text>
                  <text x="516" y="122" fill="#94A3B8" fontSize="10">Copy Dist. Agri</text>
                  <text x="516" y="136" fill="#94A3B8" fontSize="10">Officer + BNS</text>
                  <text x="516" y="150" fill="#94A3B8" fontSize="10">s.318 / Ord. 38</text>
                  <text x="516" y="182" fill="#F87171" fontSize="10" fontWeight="700">If Shop Shifted</text>

                  <path d="M650 125H664" stroke="#DC2626" strokeWidth="2.5" />

                  {/* Stage 5 */}
                  <rect x="666" y="42" width="136" height="166" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="1.5" />
                  <circle cx="690" cy="68" r="12" fill="#DC2626" />
                  <text x="690" y="72" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700">5</text>
                  <text x="678" y="102" fill="#F8FAFC" fontSize="12" fontWeight="700">Forum Filing</text>
                  <text x="678" y="122" fill="#94A3B8" fontSize="10">s.138 Magistrate /</text>
                  <text x="678" y="136" fill="#94A3B8" fontSize="10">MSEFC 3x RBI /</text>
                  <text x="678" y="150" fill="#94A3B8" fontSize="10">Order XXXVII Suit</text>
                  <text x="678" y="182" fill="#34D399" fontSize="10" fontWeight="700">Pre-Sowing Lock</text>
                </svg>
              </div>

              {/* Mobile Stacked Flow Cards */}
              <div className="md:hidden grid grid-cols-1 gap-3">
                {[
                  { n: "1", title: "Audit Trail Lock (Day 1–3)", desc: "Collate GST invoices, E-Way bills, Bilty/LR, and batch QC Certificate of Analysis." },
                  { n: "2", title: "Statutory Estoppel Notice (Day 4–10)", desc: "Demand Seed/Insecticide Inspector Govt Lab report & panchnama within 7 days." },
                  { n: "3", title: "PDC Presentation & NI s.138 (30d Window)", desc: "Present reconciled seasonal cheque; serve 15-day statutory demand within 30 days of bounce." },
                  { n: "4", title: "License & Fraud Flagging", desc: "Copy District Agriculture Officer and invoke BNS ss.316/318 if shop license is migrated." },
                  { n: "5", title: "Forum Escalation", desc: "File NI s.138 complaint, MSEFC Samadhaan (3x RBI interest), or Order XXXVII summary suit." },
                ].map((s) => (
                  <div key={s.n} className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {s.n}
                    </span>
                    <div>
                      <p className="text-sm font-bold">{s.title}</p>
                      <p className="text-xs text-slate-300 mt-1">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Statutory Remedy Matrix Table */}
            <section
              id="heading-remedy-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Remedy Matrix for Agrochemical &amp; Seed Creditors
                </h2>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="p-3.5 font-bold">Dealer Default Pattern</th>
                      <th className="p-3.5 font-bold">Governing Statute</th>
                      <th className="p-3.5 font-bold">Statutory Deadline / Lever</th>
                      <th className="p-3.5 font-bold">Creditor Recovery Outcome</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">
                        Oral &ldquo;poor germination / pest failure&rdquo; 5 months post-sale
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Seeds Act ss.14–16; Insecticides Act ss.21–24; Sale of Goods Act s.42
                      </td>
                      <td className="p-3.5 text-slate-700">
                        7-day estoppel notice demanding Govt Lab report + joint panchnama
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        Strikes down quality defense; establishes liquidated debt
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">
                        Kharif/Rabi security PDC bounces or &ldquo;Stop Payment&rdquo;
                      </td>
                      <td className="p-3.5 text-slate-700">
                        NI Act, 1881 ss.138, 139 &amp; 143A
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Notice within 30 days of Return Memo; 15-day cure period
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        Criminal summons + 20% interim compensation u/s 143A
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">
                        Udyam-registered seed/bio-stimulant manufacturer unpaid &gt;45d
                      </td>
                      <td className="p-3.5 text-slate-700">
                        MSMED Act, 2006 ss.15–18 &amp; 24
                      </td>
                      <td className="p-3.5 text-slate-700">
                        45-day statutory cap; MSEFC Samadhaan filing
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        Principal + 3x RBI bank rate compound interest (monthly rests)
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">
                        Shop name change / Fertilizer-Pesticide license transfer
                      </td>
                      <td className="p-3.5 text-slate-700">
                        BNS 2023 ss.316 &amp; 318; CPC Order XXXVIII Rule 5
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Immediate notice + District Agriculture Officer CC
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        Personal proprietor asset attachment + licensing scrutiny
                      </td>
                    </tr>
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
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  4 Agro-Input Dealer Default Scenarios &amp; Legal Playbooks
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-6">
                Select a dealer default scenario below to inspect the exact statutory counter-strategy and 3-step ZSM action plan.
              </p>

              <AgroDealerScenarioTabs />
            </section>

            {/* Section 6: Worked ₹18 Lakh Ledger */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Worked Recovery Ledger: ₹18 Lakh Kharif Krishi Kendra Default
                </h2>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed mb-5">
                Consider a Jalna-based hybrid cotton seed and bio-stimulant formulator (Udyam-registered Small Enterprise) that supplied ₹18,00,000 of stock across 4 GST invoices on 15 June (90-day Kharif credit). On 20 November—after harvest—the dealer withholds payment claiming &ldquo;20% poor germination&rdquo; without any Seed Inspector report, and a ₹18,00,000 security PDC bounces for <em>Funds Insufficient</em>.
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-700 pb-3 gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-red-400">
                    Illustrative Statutory Claim Breakdown (6 Months Overdue)
                  </span>
                  <span className="text-xs text-slate-400">
                    MSMED s.16 + NI Act s.138 Leverage
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-slate-400 text-xs">Unpaid Invoice Principal</p>
                    <p className="text-xl font-black text-white mt-1">&#8377;18,00,000</p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Supported by GST E-Way + Bilty + Batch COA
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-slate-400 text-xs">MSMED 3x RBI Compound Interest</p>
                    <p className="text-xl font-black text-emerald-400 mt-1">~&#8377;1,82,000+</p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Calculated at 3x RBI Bank Rate (monthly rests)
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-red-500/40">
                    <p className="text-slate-400 text-xs">Total Statutory Claim + s.138 Bail</p>
                    <p className="text-xl font-black text-red-400 mt-1">&#8377;19,82,000+</p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Plus up to 20% interim deposit u/s 143A NI Act
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                  Want to compute exact statutory interest for your overdue dealer invoices? Use our{" "}
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="text-emerald-400 font-semibold underline hover:text-emerald-300"
                  >
                    MSME Delayed Payment 3x RBI Interest Calculator
                  </Link>{" "}
                  before drafting your demand notice.
                </p>
              </div>
            </section>

            {/* Section 7: Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  BSA 2023 s.63 &amp; Dealer Dispatch Evidence Checklist
                </h2>
              </div>

              <p className="text-sm text-slate-700 mb-4">
                Before triggering a single statutory notice or a 500-dealer pre-sowing batch drive, compile this 6-point evidentiary dossier:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                {[
                  {
                    title: "1. Signed Dealership & Credit Agreement",
                    detail: "Includes proprietor PAN, Aadhaar, GSTIN, territorial jurisdiction, and PDC/credit limit clauses.",
                  },
                  {
                    title: "2. GST Invoices + E-Way Bills + Bilty (LR)",
                    detail: "Proves physical dispatch and receipt of exact SKU quantities at the Krishi Kendra godown.",
                  },
                  {
                    title: "3. Batch / Lot QC Certificate of Analysis (COA)",
                    detail: "Internal lab germination % and active-ingredient purity report matching invoiced batch numbers.",
                  },
                  {
                    title: "4. Reconciled Ledger & Balance Confirmation",
                    detail: "Adjusts all seasonal trade discounts, early-bird rebates, and credit notes prior to PDC presentation.",
                  },
                  {
                    title: "5. Original Bounced PDC + Bank Return Memo",
                    detail: "Stamped Bank Return Memo establishing exact dishonour date for the 30-day NI Act s.138 clock.",
                  },
                  {
                    title: "6. BSA 2023 Section 63 Electronic Certificate",
                    detail: "Covers WhatsApp dispatch confirmations, dealer payment promises, and ERP ledger exports.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <p className="font-bold text-slate-900 mb-1">{item.title}</p>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: Dual-Track CTA */}
            <section
              id="heading-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Send a Single Krishi Kendra Notice or Launch a Batch Drive
                </h2>
              </div>

              <AgroDealerCTA />
            </section>

            {/* Section 9: Related Guides, Tools & Templates */}
            <section
              id="heading-related"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Related Dealer Recovery Guides, Tools &amp; Templates
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <Link
                  href="/cheque-bounce-notice-timeline-section-138"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] transition-colors bg-slate-50"
                >
                  <span className="block text-[10px] font-black uppercase text-[#DC2626] mb-1">
                    PDC Prosecution Timeline
                  </span>
                  <span className="font-bold text-slate-900">
                    Section 138 Cheque Bounce Notice Timeline &amp; Rules &rarr;
                  </span>
                </Link>
                <Link
                  href="/hi/legal-notice-kaise-bheje"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] transition-colors bg-slate-50"
                >
                  <span className="block text-[10px] font-black uppercase text-[#DC2626] mb-1">
                    Hindi Vyapari Guide
                  </span>
                  <span className="font-bold text-slate-900">
                    Baki Paise Vasooli ke Liye Legal Notice Kaise Bheje &rarr;
                  </span>
                </Link>
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] transition-colors bg-slate-50"
                >
                  <span className="block text-[10px] font-black uppercase text-[#DC2626] mb-1">
                    Interactive T1 Calculator
                  </span>
                  <span className="font-bold text-slate-900">
                    MSME 3x RBI Compound Interest Calculator &rarr;
                  </span>
                </Link>
                <Link
                  href="/templates/legal-notice-reply-format"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] transition-colors bg-slate-50"
                >
                  <span className="block text-[10px] font-black uppercase text-[#DC2626] mb-1">
                    P1 Notice Workspace
                  </span>
                  <span className="font-bold text-slate-900">
                    Advocate-Vetted Commercial Notice &amp; Reply Format &rarr;
                  </span>
                </Link>
              </div>
            </section>

            {/* Section 10: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  FAQs: Agrochemical &amp; Seed Dealer Credit Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.q}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer list-none flex items-center justify-between gap-3">
                      <span>{faq.q}</span>
                      <span className="text-[#DC2626] font-black text-lg shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200 pt-3">
                      {faq.a}
                    </p>
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
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Primary Statutory Sources &amp; Official Bare Acts
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

      <RelatedRecoveryGuides />
    </div>
  );
}
