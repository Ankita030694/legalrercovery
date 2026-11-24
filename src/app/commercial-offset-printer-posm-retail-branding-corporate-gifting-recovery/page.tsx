import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import CommercialPrintPosmTableOfContents from "./CommercialPrintPosmTableOfContents";
import CommercialPrintPosmScenarioTabs from "./CommercialPrintPosmScenarioTabs";
import CommercialPrintPosmCTA from "./CommercialPrintPosmCTA";

export const revalidate = 86400;

const PAGE_URL =
  "/commercial-offset-printer-posm-retail-branding-corporate-gifting-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

// Exact PDF/JSON H1 (129 chars) — kept verbatim in BOTH <h1> and ARTICLE_SCHEMA.headline
const EXACT_H1 =
  "Delivered 10,000 Diwali Hampers or 2,000 Retail Store POSM Signboards—and Procurement Froze Your Final Payment? Recovery Playbook";

// 54 chars — tightened from 66ch PDF draft for Screaming Frog 30–60ch limit while preserving primary keyword
const META_TITLE = "Commercial Printing, POSM & Corporate Gifting Recovery";

// 147 chars — tightened from 179ch PDF draft for Screaming Frog 120–155ch limit while retaining every statutory hook
const META_DESCRIPTION =
  "Offset printers, retail POSM signage & Diwali gifting vendors front 100% costs—recover arrears via Pantone proofs, BSA s.63 geo-photos & s.43B(h).";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "commercial printer retail posm signage and corporate gifting bill recovery",
    "diwali corporate gifting vendor unpaid company invoice",
    "pan india retail store glow sign board posm rollout arrears",
    "colour pantone proof approved on email later disputed print",
    "election campaign printing publicity material unpaid bill",
    "section 43bh corporate gifting and printing msme",
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
      "The Sale of Goods Act, 1930 (Sections 17, 37, 42, 55 & 59 — Sale by Sample, Partial-Damage Severability, Deemed Acceptance & Action for Price)",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title:
      "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 2(b), 15, 16, 17, 18 & 24 — 15-Day Objection Window, 45-Day Cap & 3x RBI Compound Interest)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title:
      "Income Tax Act, 1961 — Section 43B(h) (Mandatory Fiscal Disallowance of Unpaid Micro & Small Supplier Invoices Past March 31)",
    url: "https://www.incometaxindia.gov.in/pages/acts/income-tax-act.aspx",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 — Admissibility of Geo-Tagged Store Photos, Courier AWB CSVs, Email Pantone Approvals & WhatsApp Threads)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "The Indian Contract Act, 1872 (Sections 70 & 73 — Compensation for Non-Gratuitous Services & Full Loss on Zero-Salvage Branded Merchandise)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "The Negotiable Instruments Act, 1881 (Sections 138, 141 & 143A — Cheque Dishonour Liability of Corporate Directors & 20% Interim Compensation)",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title:
      "MSME Samadhaan Portal — Delayed Payment Monitoring System & MSEFC Reference Filing (Ministry of MSME, Government of India)",
    url: "https://samadhaan.msme.gov.in/",
  },
  {
    title:
      "Central Goods and Services Tax (CGST) Act, 2017 (Section 16(2) Second Proviso — 180-Day Mandatory ITC Reversal for Unpaid Supplier Invoices)",
    url: "https://www.indiacode.nic.in/handle/123456789/15689",
  },
];

const FAQS = [
  {
    q: "Can a corporate buyer freeze a ₹35 lakh Diwali gifting invoice from November to March because 3 hampers out of 10,000 arrived damaged in courier transit?",
    a: "No. Under Sections 37, 42, and 59 of the Sale of Goods Act, 1930, once the company distributes 9,997 hampers to employees or channel partners without raising a written objection within 15 days of delivery (MSMED Act s.2(b) Explanation), acceptance of the delivered lot is legally final. Three damaged boxes represent 0.03% of the contract value (approx. ₹10,500) and can at most justify proportionate replacement or a limited credit note for those three verified AWBs—never a freeze on the remaining ₹34.89 lakh undisputed invoice.",
  },
  {
    q: "Our client approved the digital PDF artwork and Pantone shade on email before offset printing, but now demands a 20% discount claiming 'colour looks slightly darker'. How do we defeat this?",
    a: "Under Section 17 (Sale by Sample) and Section 42 of the Sale of Goods Act, 1930, an email 'Approved for Final Print' sign-off or signed physical Chromalin/machine proof locks in the contractual specification. Minor optical shifts caused by matte/gloss BOPP lamination or spot UV within ISO 12647-2 ΔE tolerances do not constitute a breach. Once the buyer distributes the annual reports, catalogues, or pharma visual aids and claims GST Input Tax Credit via GSTR-2B, post-use shade discounts are legally untenable.",
  },
  {
    q: "How do pan-India retail POSM and glow-sign-board vendors prove installation across 2,000 Tier-2/Tier-3 outlets in court or MSEFC?",
    a: "Maintain a structured digital rollout dossier certified under Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023. Each store folder should contain before-and-after installation photographs with embedded EXIF GPS coordinates and timestamps, a signed or rubber-stamped dealer acknowledgment slip, courier/transporter LR receipts for signage frames, and WhatsApp/email deployment confirmations from the brand's regional sales manager.",
  },
  {
    q: "We were subcontracted by a BTL / trade-marketing agency for a national FMCG retail branding rollout, and the agency says 'pay-when-paid by the brand'. Is that binding on an MSME vendor?",
    a: "No. Under Section 24 of the MSMED Act, 2006, statutory payment ceilings override any private back-to-back or 'pay-when-paid' clause in a marketing agency agreement. If your printing or POSM fabrication unit holds a valid Udyam Micro or Small Enterprise registration, the contracting agency must pay you within 45 days of invoice/milestone submission regardless of when the FMCG principal settles the agency's retainer.",
  },
  {
    q: "Why is January to March the strongest leverage window for Diwali gifting suppliers and commercial printers under Section 43B(h)?",
    a: "Diwali corporate hampers, festive POSM rollouts, and Q3 brand calendars are typically delivered in October–November, meaning their 45-day MSMED Act deadline expires in December or January. Under Section 43B(h) of the Income Tax Act, 1961, if a corporate buyer leaves an Udyam Micro/Small vendor's October–February invoice unpaid on March 31, the buyer loses the entire tax deduction for that financial year—triggering an immediate 25.17% to 34.94% extra corporate tax outflow plus mandatory Form 3CD Clause 22 audit reporting.",
  },
  {
    q: "Does corporate gifting qualify as 'manufacturing' or 'service' under Udyam for Section 43B(h) and MSEFC protection?",
    a: "Yes—provided your Udyam certificate registers you as a Micro or Small Enterprise engaged in manufacturing (custom rigid-box printing, laser engraving, kitting/assembly, offset printing, or signage fabrication) or services (branding installation, commercial design/print fulfillment), rather than purely retail/wholesale trading (NIC Division 46/47). Pure traders are excluded from MSEFC and Section 43B(h), whereas printers, fabricators, and custom-branding kitting units are squarely protected.",
  },
  {
    q: "We printed 5 lakh election campaign pamphlets and flex banners on urgent WhatsApp orders without a formal PO, and the committee stopped answering after polling. Can we still recover?",
    a: "Yes. Even without a signed purchase order, Section 70 of the Indian Contract Act, 1872 obligates any party enjoying the benefit of non-gratuitous printing services to pay fair value. Combine the mandatory publisher declaration collected under Section 127A of the Representation of the People Act, 1951, Election Commission (ECI) expenditure filings, BSA s.63-certified WhatsApp print approvals, and any dishonoured cheques (NI Act s.138) to pursue rapid recovery through an Advocate Notice and Order XXXVII summary suit.",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  datePublished: "2026-11-19T10:50:00+05:30",
  dateModified: "2026-11-19T10:50:00+05:30",
  mainEntityOfPage: CANONICAL_URL,
  image: `${SITE_URL}/blog_money_recovery.png`,
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder, AMA Legal Solutions",
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
    name: "Commercial Printing, Retail POSM Signage & Corporate Gifting Debt Recovery",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "5-Step Recovery Escalation for Commercial Printers, Retail POSM Vendors & Corporate Gifting Suppliers",
  description:
    "Operational legal playbook to unfreeze corporate Diwali gifting invoices, pan-India retail signage rollouts, and offset printing bills using Pantone artwork sign-offs, BSA s.63 geo-photos, and Section 43B(h).",
  totalTime: "P45D",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Lock Pantone Artwork Approvals & Export BSA s.63 Delivery/Geo-Photo Logs",
      text: "Compile signed press proofs, email 'Approved for Print' threads, 500-pin-code courier AWB delivery sheets, and EXIF geo-tagged retail store installation photographs backed by a BSA 2023 s.63(4) certificate.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Sever Minor Transit Damage & Demand 99%+ Undisputed Principal",
      text: "Invoke Sale of Goods Act ss.37, 42, and 59 to isolate verified minor discrepancies (e.g., 3 damaged hampers or 5 unverified stores) and demand immediate release of the undisputed balance without issuing a blanket GST Credit Note.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Dispatch Fact-Verified Statutory Notice Copying CFO & Tax Auditor on Section 43B(h)",
      text: "Serve a 15-day Fact-Verified Demand Notice via Email, WhatsApp, and Speed Post RPAD putting corporate finance on formal notice of March 31 Income Tax s.43B(h) disallowance, Form 3CD Clause 22 disclosure, and CGST s.16(2) 180-day ITC reversal.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "File MSME Samadhaan (MSEFC) Claim for Principal + 3x RBI Compound Interest",
      text: "For Udyam-registered Micro and Small printers, fabricators, and custom-gifting units, lodge an online MSEFC reference under MSMED Act ss.15–18 claiming principal plus monthly-compounded 3x RBI bank rate interest from Day 46.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Escalate Dishonoured Cheques (NI s.138) or High-Value Non-MSME Claims (Order XXXVII)",
      text: "For BTL agencies, election publicity committees, or Medium/non-MSME commercial presses, initiate NI Act s.138 criminal prosecution (with 20% s.143A interim deposit) or an Order XXXVII Commercial Summary Suit.",
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
      name: "Packaging, Printing & Paper Mill Recovery",
      item: `${SITE_URL}/industries/packaging-printing-paper-mill-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Commercial Printing, POSM & Corporate Gifting Recovery",
      item: CANONICAL_URL,
    },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function CommercialPrintPosmGiftingRecoveryPage() {
  const breadcrumbItems = [
    {
      label: "Packaging, Printing & Paper Mill Recovery",
      href: "/industries/packaging-printing-paper-mill-recovery",
    },
    {
      label: "Commercial Printing, POSM & Corporate Gifting Recovery",
      href: PAGE_URL,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Server-Side Rendered JSON-LD Schemas */}
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

      {/* Dark Gradient Editorial Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-22 &middot; Commercial Printing, POSM &amp; Corporate Gifting</span>
            <span className="text-red-500">&bull;</span>
            <span>Pantone Sign-Off &amp; BSA s.63 Geo-Photos</span>
            <span className="text-red-500">&bull;</span>
            <span>Section 43B(h) Playbook</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40–60 Word AI-Citation Executive Statutory Summary */}
          <div
            aria-label="Executive Creditor Answer"
            className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
          >
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer &mdash; Sale of Goods Act s.42, BSA s.63 &amp; Section 43B(h)
            </span>
            <p>
              Corporate procurement cannot freeze a &#8377;35 lakh Diwali gifting, annual-report offset, or pan-India POSM rollout invoice over 3 damaged hampers or minor shade pretexts. Under our{" "}
              <Link
                href="/industries/packaging-printing-paper-mill-recovery"
                className="text-red-300 underline decoration-red-400/70 hover:text-white font-semibold"
              >
                Packaging, Printing &amp; Paper Mill Recovery Hub
              </Link>
              , email Pantone approvals, BSA 2023 s.63 geo-tagged store photos, and{" "}
              <Link
                href="/law/section-43bh-msme-payment-rule"
                className="text-red-300 underline decoration-red-400/70 hover:text-white font-semibold"
              >
                Section 43B(h)
              </Link>{" "}
              compel 45-day payment plus 3x RBI compound interest.
            </p>
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="space-y-1">
              <p className="text-lg sm:text-2xl font-black text-emerald-400">45 Days Max</p>
              <p className="text-[10px] sm:text-xs text-slate-400 leading-snug">
                MSMED s.15 Ceiling Overriding 90-Day Brand Portals
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-lg sm:text-2xl font-black text-amber-400">15-Day Cap</p>
              <p className="text-[10px] sm:text-xs text-slate-400 leading-snug">
                Written Objection Window Under MSMED s.2(b)
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-lg sm:text-2xl font-black text-red-400">25%&ndash;35% Tax</p>
              <p className="text-[10px] sm:text-xs text-slate-400 leading-snug">
                Buyer&apos;s March 31 Income Tax Hit via s.43B(h)
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-lg sm:text-2xl font-black text-slate-100">3x RBI Rate</p>
              <p className="text-[10px] sm:text-xs text-slate-400 leading-snug">
                Monthly Compounded Statutory Interest (s.16)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area with Sticky TOC */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-4 sm:mb-6">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          <CommercialPrintPosmTableOfContents />

          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: The Festive & Rollout Payment Freeze */}
            <section
              id="heading-festive-freeze"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  Why Festive Gifting &amp; POSM Invoices Get Frozen Until March
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Commercial offset printers, pan-India retail Point-of-Sale Material (POSM) signage fabricators, and Diwali corporate gifting suppliers operate on one of the most unforgiving working-capital asymmetries in Indian B2B trade. Unlike standard component factories, you front <strong>100% of raw paperboard, art-paper, ink, rigid-box fabrication, LED/ACP signage frames, branded merchandise sourcing, and express pan-India courier charges</strong> across 500+ pin codes within a frantic 10-to-15-day festive or product-launch window.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The moment Diwali passes, the AGM concludes, or 2,000 retail dealer boards go live across Tier-2 and Tier-3 markets, corporate urgency evaporates. Between November and March, procurement teams and BTL marketing agencies weaponize micro-reconciliation bottlenecks to park your working capital for 120 to 180 days: citing &ldquo;3 damaged hampers in transit,&rdquo; &ldquo;7 blurry Tier-3 dealer store photographs,&rdquo; &ldquo;slight Pantone red variation on matte lamination,&rdquo; or &ldquo;waiting for Principal Brand reconciliation.&rdquo; As detailed across our{" "}
                <Link
                  href="/industries/packaging-printing-paper-mill-recovery"
                  className="text-[#DC2626] font-semibold underline decoration-red-300 hover:text-[#B91C1C]"
                >
                  Packaging, Printing &amp; Paper Mill Recovery Pillar
                </Link>
                , once custom corporate logos, brand colours, or festive greetings are printed onto boxes, catalogues, or glow sign boards, the stock has <strong>zero open-market salvage value</strong>—and buyers exploit that captive leverage unless countered with statutory force.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-red-50/70 border border-red-200">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626] mb-1">
                    The 0.03% Hostage Trap
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Freezing an entire &#8377;35,00,000 hamper invoice for 4 months over 3 broken mugs (&#8377;10,500) violates Sale of Goods Act ss.37 &amp; 59 severability principles.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-amber-800 mb-1">
                    The Post-Print Shade Pretext
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Demanding 15%&ndash;25% cuts after distributing brochures/reports—despite signing the email Pantone proof—is barred by Sale of Goods Act ss.17 &amp; 42.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 mb-1">
                    The Jan&ndash;March 43B(h) Hammer
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    October&ndash;December festive bills hit Day 45 right before March 31 fiscal closing—turning Section 43B(h) tax disallowance into an instant CFO settlement trigger.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: 5-Step Recovery Decision Tree SVG + Mobile Cards */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  5-Step Recovery Escalation for Printers &amp; POSM Vendors
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Do not waste January and February exchanging polite WhatsApp follow-ups with junior procurement coordinators who have zero cheque-signing authority. Follow this five-stage escalation sequence to move your frozen invoice straight onto the corporate CFO&apos;s and Statutory Auditor&apos;s compliance radar before March 31.
              </p>

              {/* Desktop SVG Decision Tree Flowchart */}
              <div className="hidden md:block w-full overflow-x-auto rounded-xl border border-slate-200 bg-slate-950 p-4">
                <svg
                  width="880"
                  height="240"
                  viewBox="0 0 880 240"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="5-step recovery decision tree for commercial offset printers, retail POSM rollout vendors and corporate gifting suppliers"
                  className="w-full h-auto"
                >
                  <rect width="880" height="240" rx="12" fill="#0F172A" />

                  {/* Step 1 */}
                  <rect x="16" y="34" width="154" height="172" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <circle cx="40" cy="58" r="13" fill="#DC2626" />
                  <text x="40" y="62" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">01</text>
                  <text x="60" y="62" fill="#F87171" fontSize="10" fontWeight="700">DAYS 1–15</text>
                  <text x="28" y="92" fill="#FFFFFF" fontSize="12" fontWeight="800">Lock Proof &amp;</text>
                  <text x="28" y="108" fill="#FFFFFF" fontSize="12" fontWeight="800">POD Dossier</text>
                  <text x="28" y="132" fill="#CBD5E1" fontSize="10">Pantone email sign-off,</text>
                  <text x="28" y="146" fill="#CBD5E1" fontSize="10">500-pin AWB CSV &amp;</text>
                  <text x="28" y="160" fill="#CBD5E1" fontSize="10">EXIF store geo-photos</text>
                  <text x="28" y="182" fill="#34D399" fontSize="9.5" fontWeight="700">BSA 2023 s.63 Cert</text>

                  <path d="M170 120 H188" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="188,115 196,120 188,125" fill="#DC2626" />

                  {/* Step 2 */}
                  <rect x="196" y="34" width="154" height="172" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <circle cx="220" cy="58" r="13" fill="#DC2626" />
                  <text x="220" y="62" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">02</text>
                  <text x="240" y="62" fill="#F87171" fontSize="10" fontWeight="700">DAY 16–30</text>
                  <text x="208" y="92" fill="#FFFFFF" fontSize="12" fontWeight="800">Sever 0.03%</text>
                  <text x="208" y="108" fill="#FFFFFF" fontSize="12" fontWeight="800">Minor Claims</text>
                  <text x="208" y="132" fill="#CBD5E1" fontSize="10">Isolate 3 damaged boxes;</text>
                  <text x="208" y="146" fill="#CBD5E1" fontSize="10">reject blanket debit note;</text>
                  <text x="208" y="160" fill="#CBD5E1" fontSize="10">block GST Credit Note</text>
                  <text x="208" y="182" fill="#34D399" fontSize="9.5" fontWeight="700">SOGA ss.37, 42 &amp; 59</text>

                  <path d="M350 120 H368" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="368,115 376,120 368,125" fill="#DC2626" />

                  {/* Step 3 */}
                  <rect x="376" y="34" width="154" height="172" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <circle cx="400" cy="58" r="13" fill="#DC2626" />
                  <text x="400" y="62" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">03</text>
                  <text x="420" y="62" fill="#FBBF24" fontSize="10" fontWeight="700">DAY 35–46</text>
                  <text x="388" y="92" fill="#FFFFFF" fontSize="12" fontWeight="800">Advocate CFO</text>
                  <text x="388" y="108" fill="#FFFFFF" fontSize="12" fontWeight="800">43B(h) Notice</text>
                  <text x="388" y="132" fill="#CBD5E1" fontSize="10">15-day statutory notice</text>
                  <text x="388" y="146" fill="#CBD5E1" fontSize="10">to CFO &amp; Tax Auditor;</text>
                  <text x="388" y="160" fill="#CBD5E1" fontSize="10">CGST 180-day ITC alert</text>
                  <text x="388" y="182" fill="#FBBF24" fontSize="9.5" fontWeight="700">IT Act s.43B(h) Strike</text>

                  <path d="M530 120 H548" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="548,115 556,120 548,125" fill="#DC2626" />

                  {/* Step 4 */}
                  <rect x="556" y="34" width="144" height="172" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <circle cx="580" cy="58" r="13" fill="#DC2626" />
                  <text x="580" y="62" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">04</text>
                  <text x="600" y="62" fill="#F87171" fontSize="10" fontWeight="700">DAY 46+</text>
                  <text x="568" y="92" fill="#FFFFFF" fontSize="12" fontWeight="800">MSEFC Filing</text>
                  <text x="568" y="108" fill="#FFFFFF" fontSize="12" fontWeight="800">3x RBI Claim</text>
                  <text x="568" y="132" fill="#CBD5E1" fontSize="10">Samadhaan reference</text>
                  <text x="568" y="146" fill="#CBD5E1" fontSize="10">for Micro/Small units;</text>
                  <text x="568" y="160" fill="#CBD5E1" fontSize="10">75% appeal deposit</text>
                  <text x="568" y="182" fill="#34D399" fontSize="9.5" fontWeight="700">MSMED ss.15–19</text>

                  <path d="M700 120 H716" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="716,115 724,120 716,125" fill="#DC2626" />

                  {/* Step 5 */}
                  <rect x="724" y="34" width="140" height="172" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <circle cx="748" cy="58" r="13" fill="#DC2626" />
                  <text x="748" y="62" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">05</text>
                  <text x="768" y="62" fill="#F87171" fontSize="10" fontWeight="700">PARALLEL</text>
                  <text x="736" y="92" fill="#FFFFFF" fontSize="12" fontWeight="800">NI s.138 /</text>
                  <text x="736" y="108" fill="#FFFFFF" fontSize="12" fontWeight="800">Order XXXVII</text>
                  <text x="736" y="132" fill="#CBD5E1" fontSize="10">Cheque bounce 20%</text>
                  <text x="736" y="146" fill="#CBD5E1" fontSize="10">s.143A deposit &amp; fast</text>
                  <text x="736" y="160" fill="#CBD5E1" fontSize="10">Commercial Court suit</text>
                  <text x="736" y="182" fill="#34D399" fontSize="9.5" fontWeight="700">BTL &amp; Election Dues</text>
                </svg>
              </div>

              {/* Mobile Stacked Step Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:hidden">
                {[
                  {
                    step: "01",
                    window: "Days 1–15",
                    title: "Lock Proof & POD Dossier",
                    desc: "Archive email Pantone sign-offs, 500-pin-code courier AWB delivery logs, and EXIF geo-tagged store installation photos with a BSA 2023 s.63 certificate.",
                  },
                  {
                    step: "02",
                    window: "Days 16–30",
                    title: "Sever Minor Transit Damage",
                    desc: "Invoke Sale of Goods Act ss.37, 42 & 59: offer replacement for 3 verified damaged units while demanding 99.9% undisputed principal. Never issue a blanket GST Credit Note.",
                  },
                  {
                    step: "03",
                    window: "Days 35–46",
                    title: "Advocate CFO & Section 43B(h) Notice",
                    desc: "Serve a 15-day formal Fact-Verified Notice copying the CFO and Statutory Auditor on March 31 Income Tax disallowance, Form 3CD Clause 22, and CGST 180-day ITC reversal.",
                  },
                  {
                    step: "04",
                    window: "Day 46+",
                    title: "MSEFC Samadhaan 3x RBI Filing",
                    desc: "Udyam Micro & Small printers/fabricators file on MSME Samadhaan claiming principal plus monthly-compounded 3x RBI bank rate interest and 75% buyer appeal pre-deposit.",
                  },
                  {
                    step: "05",
                    window: "Parallel Track",
                    title: "NI Act s.138 & Order XXXVII Suit",
                    desc: "For non-MSME presses, BTL agency defaults, or election publicity arrears, prosecute bounced cheques (20% s.143A interim pay) or file a Commercial Court Summary Suit.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-1.5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-[11px] font-black flex items-center justify-center shrink-0">
                        {item.step}
                      </span>
                      <span className="text-[11px] font-mono font-bold uppercase text-[#DC2626]">
                        {item.window}
                      </span>
                    </div>
                    <h3 className="text-sm font-extrabold text-slate-900">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Dark-Header Statutory Remedy Matrix Table */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  Governing Statutes for Print, Signage &amp; Gifting Arrears
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Commercial printing and brand-rollout receivables sit at the intersection of five powerful Indian commercial statutes. Combining them inside a single calibrated Advocate Notice neutralizes every standard procurement excuse before litigation is even required.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[640px]">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="py-3.5 px-4 font-bold uppercase tracking-wider text-[11px]">
                        Statute &amp; Provision
                      </th>
                      <th className="py-3.5 px-4 font-bold uppercase tracking-wider text-[11px]">
                        Procurement Excuse Neutralized
                      </th>
                      <th className="py-3.5 px-4 font-bold uppercase tracking-wider text-[11px]">
                        Creditor Relief &amp; Financial Teeth
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Income Tax Act, 1961<br />
                        <span className="text-xs font-mono text-[#DC2626]">Section 43B(h)</span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        &ldquo;Procurement audit pending until next quarter&rdquo; or 90&ndash;120 day corporate payment cycles on Diwali &amp; Q3 invoices.
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Disallows 100% of the buyer&apos;s festive/print expense deduction on March 31 (25.17%&ndash;34.94% extra tax) + mandatory Form 3CD Clause 22 audit disclosure.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        MSMED Act, 2006<br />
                        <span className="text-xs font-mono text-[#DC2626]">ss.2(b), 15–19 &amp; 24</span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Late quality complaints raised 45+ days post-delivery; BTL agency &ldquo;pay-when-paid&rdquo; clauses.
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        15-day mandatory written objection window; 45-day absolute statutory override; 3x RBI monthly compound interest (~18%&ndash;19.5% p.a.); 75% buyer deposit to challenge MSEFC awards.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Sale of Goods Act, 1930<br />
                        <span className="text-xs font-mono text-[#DC2626]">ss.17, 37, 42, 55 &amp; 59</span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Freezing &#8377;35L over 3 damaged hampers; post-distribution Pantone colour shade deductions; abandoning logo-printed stock.
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Distribution/display equals final acceptance (s.42); approved proof binds sale by sample (s.17); full contract price for zero-salvage branded goods (s.55); minor defects limited to pro-rata abatement (s.59).
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        BSA, 2023<br />
                        <span className="text-xs font-mono text-[#DC2626]">Section 63(4)</span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        &ldquo;We have no signed physical GRN for 500 courier addresses or 2,000 rural retail shops.&rdquo;
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Renders carrier AWB CSVs, EXIF geo-tagged store installation photos, email artwork threads, and WhatsApp approvals primary admissible court evidence via electronic hash certificate.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        CGST Act, 2017<br />
                        <span className="text-xs font-mono text-[#DC2626]">s.16(2) 2nd Proviso</span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Buyer claimed full 12%/18% GST Input Tax Credit in GSTR-2B while withholding vendor invoice for 6+ months.
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Forces buyer to reverse claimed GST ITC with 18% p.a. statutory interest after 180 days from invoice date—and proves accounting admission of supply acceptance.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Indian Contract Act / NI Act<br />
                        <span className="text-xs font-mono text-[#DC2626]">s.70 / ss.138 &amp; 143A</span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Election campaign publicity printed on urgent WhatsApp orders without formal PO; bounced post-dated agency cheques.
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Mandatory compensation for non-gratuitous print benefit (s.70) backed by RPA s.127A imprint declarations; criminal cheque summons + 20% interim compensation (s.143A).
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Interactive 4-Tab Scenario Explorer */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  4 Commercial Print, POSM &amp; Diwali Gifting Default Traps
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Select your exact commercial bottleneck below to inspect how corporate procurement, BTL trade-marketing agencies, and campaign committees stall payment—and the exact statutory counter-strike to force rapid settlement.
              </p>

              <CommercialPrintPosmScenarioTabs />
            </section>

            {/* Section 5: Technical & Legal Rebuttal of Shade & Partial-Damage Excuses */}
            <section
              id="heading-pantone-proof"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  Defeating Post-Print Colour Shade &amp; Partial-Damage Excuses
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Unlike corrugated box factories fighting bursting-factor lab tests (covered in our{" "}
                <Link
                  href="/corrugated-box-carton-manufacturer-bursting-strength-gsm-dispute-recovery"
                  className="text-[#DC2626] font-semibold underline decoration-red-300 hover:text-[#B91C1C]"
                >
                  Corrugated Box BF/GSM Dispute Playbook
                </Link>
                ) or rotogravure converters handling unlifted film reels (see{" "}
                <Link
                  href="/custom-printed-flexible-packaging-pouches-cartons-unlifted-stock-recovery"
                  className="text-[#DC2626] font-semibold underline decoration-red-300 hover:text-[#B91C1C]"
                >
                  Unlifted Custom-Printed Pouches Recovery
                </Link>
                ), commercial printers and gifting vendors face two subjective excuses: <strong>post-print colour shade complaints</strong> and <strong>multi-location courier/installation discrepancies</strong>.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 space-y-3">
                  <h3 className="text-base font-extrabold text-slate-900">
                    1. Neutralizing &ldquo;Pantone / CMYK Shade Variation&rdquo;
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold">&bull;</span>
                      <span>
                        <strong>ISO 12647-2 &amp; Substrate Physics:</strong> Matte BOPP lamination naturally shifts perceived dark tones by 2&ndash;4 &Delta;E compared to backlit RGB laptop monitors. Once the buyer signs a physical press-proof or emails &ldquo;Artwork &amp; Pantone Approved for Production,&rdquo; Section 17 of the Sale of Goods Act makes that proof the final legal benchmark.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold">&bull;</span>
                      <span>
                        <strong>Consumption Destroys Rejection Rights:</strong> If the client handed out the printed brochures at an expo, mailed the annual reports to shareholders, or gifted the logo-embossed boxes to staff, Section 42 deems the entire batch unconditionally accepted.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold">&bull;</span>
                      <span>
                        <strong>Never Issue a GST Credit Note Under Pressure:</strong> Issuing a voluntary CGST Section 34 Credit Note converts an illegal 15%&ndash;20% shade deduction into a permanent self-inflicted accounting admission.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 space-y-3">
                  <h3 className="text-base font-extrabold text-slate-900">
                    2. Defeating &ldquo;3 Damaged Hampers / 5 Store Photos Missing&rdquo;
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold">&bull;</span>
                      <span>
                        <strong>Doctrine of Proportionality (SOGA s.59):</strong> In pan-India multi-pin-code courier dispatch or 2,000-store POSM rollouts, a 0.03%&ndash;0.5% transit or shop-closure exception is commercially normal. Law restricts buyer set-off strictly to the verifiable value of affected units—never 100% invoice withholding.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold">&bull;</span>
                      <span>
                        <strong>15-Day Objection Cutoff (MSMED s.2(b)):</strong> If procurement failed to send a formal written discrepancy list with photographic proof within 15 days of delivery/installation completion, &ldquo;day of deemed acceptance&rdquo; triggers automatically on Day 16.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold">&bull;</span>
                      <span>
                        <strong>Carve Out the Disputed Sum Proactively:</strong> In your Fact-Verified Notice, explicitly deduct or offer replacement for the 3 verified damaged units (&#8377;10,500) so the remaining &#8377;34,89,500 becomes an ironclad, indisputable liquidated debt.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 6: Worked Financial & Tax-Impact Recovery Ledger */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  Worked &#8377;35 Lakh Diwali Hamper &amp; 500-Pin-Code Recovery Ledger
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Consider a realistic IND-22 corporate gifting &amp; print vendor scenario: an Udyam-registered Small Enterprise supplies <strong>10,000 custom rigid-box Diwali hampers (&#8377;350/unit inclusive of custom foil printing &amp; pan-India courier = &#8377;35,00,000 invoice)</strong> delivered across 500 pin codes by <strong>28 October</strong>. Procurement freezes the entire &#8377;35 lakh bill until <strong>25 March (148 days elapsed / 103 days overdue past Day 45)</strong> citing &ldquo;3 transit-damaged boxes.&rdquo; Here is the exact statutory leverage presented to the buyer&apos;s CFO:
              </p>

              <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 text-white shadow-lg">
                <div className="px-5 py-4 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-red-400 font-bold block">
                      Statutory Claim &amp; Corporate Tax Exposure Sheet
                    </span>
                    <h3 className="text-base sm:text-lg font-extrabold text-white">
                      10,000 Diwali Hampers &middot; &#8377;35,00,000 Principal (103 Days Overdue)
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-700/60 text-xs font-bold">
                    MSMED s.16 + IT Act s.43B(h)
                  </span>
                </div>

                <div className="p-5 sm:p-6 space-y-3 text-xs sm:text-sm">
                  <div className="flex items-center justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-300">Gross Invoice Value (10,000 Branded Hampers Delivered 28 Oct)</span>
                    <span className="font-mono font-bold text-white">&#8377;35,00,000</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-300">Less: Pro-Rata Allowance for 3 Verified Transit-Damaged Units (SOGA s.59)</span>
                    <span className="font-mono font-bold text-amber-400">&minus; &#8377;1,050</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-100 font-semibold">Undisputed Liquidated Principal Receivable (9,997 Delivered Units)</span>
                    <span className="font-mono font-extrabold text-emerald-400">&#8377;34,98,950</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-300">
                      MSMED Act s.16 Statutory Interest (103 Days Overdue @ 3x RBI Bank Rate &asymp; 19.5% p.a. Monthly Compounded)*
                    </span>
                    <span className="font-mono font-bold text-red-400">+ &#8377;1,97,420</span>
                  </div>
                  <div className="flex items-center justify-between py-3 bg-white/5 px-3 rounded-xl border border-white/10">
                    <span className="font-extrabold text-white text-sm sm:text-base">
                      Total Recoverable Creditor Claim (As of 25 March)
                    </span>
                    <span className="font-mono font-black text-emerald-400 text-base sm:text-lg">
                      &#8377;36,96,370
                    </span>
                  </div>

                  {/* Buyer's Section 43B(h) Tax Pain Callout */}
                  <div className="mt-4 p-4 rounded-xl bg-red-950/50 border border-red-800/60 space-y-1.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-red-300">
                      Why the Buyer&apos;s CFO Settles Within 7 Days Before March 31:
                    </p>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      If this &#8377;34.99 lakh invoice remains unpaid on <strong>31 March</strong>, Section 43B(h) of the Income Tax Act disallows the entire expense deduction in FY 2026&ndash;27. At the standard 25.17% corporate tax slab, the buyer suffers an <strong>immediate &#8377;8,80,685 extra cash tax outflow</strong> (or <strong>&#8377;12,22,533</strong> at 34.94%), plus mandatory Statutory Auditor reporting in Form 3CD Clause 22—and Section 23 MSMED Act bars the buyer from ever claiming a tax deduction on the &#8377;1.97 lakh statutory interest!
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-500">
                *Illustrative calculation assuming RBI Bank Rate of 6.50% (3x = 19.50% p.a. compounded with monthly rests per MSMED Act s.16). Run your exact invoice dates and RBI rate slab on our{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  MSME Delayed Payment Interest Calculator
                </Link>
                .
              </p>
            </section>

            {/* Section 7: BSA 2023 s.63 Evidence Dossier Checklist */}
            <section
              id="heading-evidence-dossier"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  Artwork Sign-Offs &amp; Geo-Tagged Rollout Proof (BSA s.63)
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Commercial printing and POSM disputes are won on documentary discipline. Assemble these eight evidentiary pillars before dispatching your Advocate Statutory Notice or filing on MSME Samadhaan so the buyer cannot fabricate a &ldquo;pre-existing dispute&rdquo; defense:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {[
                  {
                    title: "1. Approved Artwork & Pantone Sign-Off",
                    detail:
                      "Original email thread ('Approved for Print / Pantone Match OK'), PDF print-file hash, or physically signed Chromalin / offset press proof sheet.",
                  },
                  {
                    title: "2. Purchase Order / WhatsApp Urgent Dispatch Approval",
                    detail:
                      "Formal PO, rate-card email, or senior brand manager's WhatsApp confirmation ('Go ahead for Diwali deadline, SAP PO in pipeline').",
                  },
                  {
                    title: "3. 500-Pin-Code Courier AWB & Delivered POD CSV",
                    detail:
                      "Official carrier tracking dumps (Blue Dart, Delhivery, DTDC, Safexpress) showing delivery timestamps, recipient names, and OTP/signature status.",
                  },
                  {
                    title: "4. Multi-Store POSM Installation Geo-Photos",
                    detail:
                      "Before-and-after outlet signage photos retaining native EXIF GPS latitude/longitude, timestamp watermarks, and dealer rubber-stamped sign-off slips.",
                  },
                  {
                    title: "5. GST Tax Invoices, E-Way Bills & GSTR-2B Proof",
                    detail:
                      "B2B tax invoices with HSN codes (4901/4911/4819/9405), Part-B E-Way bills, and reconciliation proving buyer retained GST ITC without reversal.",
                  },
                  {
                    title: "6. Active Udyam Micro/Small Certificate (Pre-Supply Date)",
                    detail:
                      "Udyam Registration PDF showing Manufacturing/Service NIC codes dated prior to the invoice date—essential for Section 43B(h) & MSEFC jurisdiction.",
                  },
                  {
                    title: "7. Section 127A RPA Declaration (For Election Printing)",
                    detail:
                      "Signed publisher declaration, printer imprint copy, and ECI district expenditure submission confirming campaign print quantity and authorization.",
                  },
                  {
                    title: "8. BSA 2023 Section 63(4) Hash & Device Certificate",
                    detail:
                      "Mandatory two-part electronic evidence certificate (Part A by vendor/operator + Part B by IT/hash expert) making emails, WhatsApp, CSVs & EXIF photos court-admissible.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50/70"
                  >
                    <span className="mt-0.5 w-5 h-5 rounded-md bg-emerald-100 text-emerald-700 font-black text-xs flex items-center justify-center shrink-0">
                      &#10003;
                    </span>
                    <div>
                      <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: Dual-Track B2B Conversion CTA */}
            <section
              id="heading-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  Start Your &#8377;999 Test Notice or Bulk Print-Vendor Batch Desk
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Whether you have a single &#8377;35 lakh frozen Diwali gifting invoice or 40 overdue corporate and BTL agency accounts clogging your post-festive working capital, initiate structured statutory recovery today without retainers.
              </p>

              <CommercialPrintPosmCTA />
            </section>

            {/* Section 9: Mandatory Cluster Cross-Links */}
            <section
              id="heading-related"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  IND-22 Hub, MSME 43B(h) Calculator &amp; Demand Notice Links
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-sm">
                {[
                  {
                    label: "Packaging, Corrugated Box, Printing & Paper Mill Recovery Hub",
                    href: "/industries/packaging-printing-paper-mill-recovery",
                    tag: "IND-22 Hub",
                  },
                  {
                    label: "Section 43B(h) MSME 45-Day Payment Rule & March 31 Tax Guide",
                    href: "/law/section-43bh-msme-payment-rule",
                    tag: "Statute L1",
                  },
                  {
                    label: "MSME Delayed Payment Interest Calculator (3x RBI Monthly Rests)",
                    href: "/tools/msme-delayed-payment-interest-calculator",
                    tag: "Calculator T1",
                  },
                  {
                    label: "MSME Delayed Payment Statutory Demand Notice Format",
                    href: "/templates/msme-delayed-payment-demand-notice",
                    tag: "Template P1",
                  },
                  {
                    label: "Unlifted Custom-Printed Pouches, Cartons & Cylinder Recovery",
                    href: "/custom-printed-flexible-packaging-pouches-cartons-unlifted-stock-recovery",
                    tag: "IND-22 Spoke",
                  },
                  {
                    label: "Corrugated Box Manufacturer Bursting Strength & GSM Recovery",
                    href: "/corrugated-box-carton-manufacturer-bursting-strength-gsm-dispute-recovery",
                    tag: "IND-22 Spoke",
                  },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between gap-2 p-3.5 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-colors"
                  >
                    <span className="font-semibold text-slate-900">{item.label}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600 shrink-0">
                      {item.tag}
                    </span>
                  </Link>
                ))}
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
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  Frequently Asked Questions: Print, POSM &amp; Gifting Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.q}
                    className="group border border-slate-200 rounded-xl p-4 open:bg-slate-50 transition-colors"
                  >
                    <summary className="flex items-center justify-between gap-3 cursor-pointer list-none font-bold text-sm sm:text-base text-slate-900">
                      <span>{faq.q}</span>
                      <span className="text-[#DC2626] text-lg font-black shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
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
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  Official Bare Acts, MSME Portals &amp; Statutory Citations
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.url} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold">&rsaquo;</span>
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

              <div className="mt-5 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-xs text-slate-500">
                <span>
                  Authored &amp; Vetted by{" "}
                  <strong className="text-slate-800">Anuj Anand Malik</strong>, Advocate &amp; Founder, AMA Legal Solutions
                </span>
                <span>Updated: 19 November 2026 &middot; IND-22 / B2B-256</span>
              </div>
            </section>
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides currentPath={PAGE_URL} />
    </div>
  );
}
