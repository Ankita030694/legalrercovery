import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import FicoFocoTableOfContents from "./FicoFocoTableOfContents";
import FicoFocoScenarioTabs from "./FicoFocoScenarioTabs";
import FicoFocoRecoveryCTA from "./FicoFocoRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/fico-foco-franchise-investor-minimum-guarantee-capex-dispute-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

// Exact PDF/JSON H1 (138 chars) — kept verbatim in <h1> and ARTICLE_SCHEMA.headline
const HERO_HEADLINE =
  "Franchisee-Property-Owner Locked Your Company-Operated (FOCO) Store & Trapped ₹35 Lakh of Brand Inventory Inside! Urgent Rescue & Recovery";

const META_TITLE = "FOCO / FICO Store Lockout, Inventory & CapEx Recovery"; // 53 chars
const META_DESCRIPTION =
  "Franchisee locked your FOCO store & trapped ₹35L+ brand stock? Enforce BNS s.316 & Arbitration s.9 police-assisted inventory rescue & CapEx recovery."; // 151 chars

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
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
      "The Bharatiya Nyaya Sanhita (BNS), 2023 (Section 316 Criminal Breach of Trust & Section 318 Cheating) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/20062",
  },
  {
    title:
      "The Arbitration and Conciliation Act, 1996 (Section 9 Interim Receiver, Section 21 Invocation & Section 29B Fast-Track) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title:
      "The Commercial Courts Act, 2015 (Section 2(1)(c)(ix) Franchise Agreements & Section 12A Urgent Relief Exception) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title:
      "The Specific Relief Act, 1963 (Sections 7 & 8 Recovery of Specific Movable Property) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1580",
  },
  {
    title:
      "The Indian Contract Act, 1872 (Sections 73, 74, 148–161 Bailment & Consignment Duties) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "The Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 Admissibility of POS, CCTV & E-Way Bill Records) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const STATUTORY_PRECEDENTS = [
  {
    title:
      "Urgent Section 9 / Commercial Court Asset Rescue Exempt From 3-Month Pre-Institution Mediation",
    parties: "Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd.",
    citation: "(2022) 10 SCC 1, Supreme Court of India",
    date: "Judgment Dated 17 August 2022",
    facts:
      "Commercial plaintiffs filing suits above ₹3 Lakh faced Order VII Rule 11 rejections when bypassing Section 12A Pre-Institution Mediation without pleading genuine urgency.",
    holding:
      "The Supreme Court held that while Section 12A mediation is mandatory for ordinary commercial suits, claims genuinely seeking urgent interim relief—such as immediate appointment of a Receiver or injunction to prevent dissipation, seizure, or unlawful detention of commercial inventory—are statutorily exempt from waiting out the 3-month mediation window.",
    amount: "Immediate Section 9 / Urgent Suit Filing Without 90-Day Mediation Delay",
    takeaway:
      "When a franchisee-landlord padlocks a FOCO store holding ₹35L–₹1.5Cr of seasonal apparel, jewelry, or EV spares, the brand can move the Commercial Court immediately for a Court Commissioner with police aid.",
  },
  {
    title:
      "Section 9 Interim Measures Governed by Balance of Convenience & Irreparable Inventory Loss",
    parties: "Adhunik Steels Ltd. v. Orissa Manganese and Minerals Pvt. Ltd.",
    citation: "(2007) 7 SCC 125, Supreme Court of India",
    date: "Judgment Dated 10 July 2007",
    facts:
      "A commercial counterparty terminated operations and blocked access to contracted site assets, forcing the claimant to seek urgent interim protection under Section 9 of the Arbitration Act pending arbitral constitution.",
    holding:
      "The Supreme Court affirmed that Section 9 empowers courts to grant interim preservation, custody, and Receiver orders under the principles of the Specific Relief Act and CPC Order XXXIX/XL where monetary damages alone would not prevent irreparable commercial injury or seasonal stock obsolescence.",
    amount: "Court Receiver & Inventory Custody Relief Before Arbitrator Appointment",
    takeaway:
      "Brands facing fashion season obsolescence, perishable diagnostic reagents, or locked showroom stock can establish irreparable injury under Section 9 to extract inventory into neutral or brand custody immediately.",
  },
  {
    title:
      "Neutral Institutional Arbitration Compliance Under Section 12(5) & Seventh Schedule",
    parties: "Perkins Eastman Architects DPC & Anr. v. HSCC (India) Ltd.",
    citation: "(2020) 20 SCC 760, Supreme Court of India",
    date: "Judgment Dated 26 November 2019",
    facts:
      "An agreement conferred unilateral authority on one party's Managing Director to appoint a sole arbitrator, which was challenged as violative of statutory neutrality under Section 12(5).",
    holding:
      "The Supreme Court ruled that an interested party cannot unilaterally nominate a sole arbitrator; disputes must be referred to an independent arbitral institution or mutually constituted neutral panel to shield final awards from Section 34 annulment.",
    amount: "Unassailable Arbitral Awards for CapEx & MMG Deficit Recovery",
    takeaway:
      "Retail and QSR franchisors recovering unpaid CapEx fit-out escalations or MMG shortfalls must invoke neutral institutional ODR arbitration rather than unilateral internal officers.",
  },
];

const FAQS = [
  {
    question:
      "Can a FOCO brand break the franchisee's padlock and enter the store to take back its own inventory?",
    answer:
      "No. Even though the brand owns the consignment inventory inside a FOCO (Franchise-Owned or Franchise-Invested, Company-Operated) store, forcibly breaking a landlord's or franchisee's physical padlock without a court order or police panchnama invites immediate counter-FIRs for criminal trespass (BNS s.329), mischief, or alleged cash theft. Always serve a 48-hour statutory release notice first and obtain a Section 9 Arbitration Court Receiver order or police-assisted Panchnama.",
  },
  {
    question:
      "Does a franchisee-landlord have a legal 'lien' over company-owned FOCO stock for unpaid Minimum Guarantee (MG)?",
    answer:
      "No. Under Indian law, a landlord or FOCO investor has no general or statutory lien over third-party or brand-owned consignment stock unless explicitly created by a registered charge. Detaining entrusted brand inventory to coerce disputed MG or ROI payouts constitutes tortious detinue and criminal breach of trust under Section 316 of the Bharatiya Nyaya Sanhita (BNS), 2023.",
  },
  {
    question:
      "How fast can a brand rescue trapped inventory under Section 9 of the Arbitration Act?",
    answer:
      "In urgent FOCO lockout petitions showing seasonal obsolescence, brand-value erosion, or risk of pilferage, Commercial Courts routinely hear Section 9 applications within 3 to 10 days. The court appoints a Local Commissioner or Receiver—often with directions to the local SHO for police protection—to break seals, inventory every barcoded SKU on video, and hand custody back to the brand.",
  },
  {
    question:
      "How do we recover unpaid CapEx fit-out escalations when the FICO/FOCO investor stops paying mid-launch?",
    answer:
      "Compile signed Handover Certificates, joint BOQ measurement sheets, and GST vendor invoices. Serve a 15-day Cure-or-Set-Off Notice invoking your contractual right to adjust unpaid CapEx tranches against the investor's revenue share or Minimum Monthly Guarantee (MMG), present any CapEx security cheques under NI Act s.138, and escalate the net balance to Commercial Court or Section 29B fast-track arbitration.",
  },
  {
    question:
      "What if the franchisee investor files a Consumer Court complaint claiming the FOCO model was an 'assured return' service?",
    answer:
      "Franchise and FOCO/FICO investment agreements are pure commercial B2B ventures undertaken for profit, not consumer transactions. Under Section 2(7) of the Consumer Protection Act, 2019 and Section 2(1)(c)(ix) of the Commercial Courts Act, 2015, you can seek immediate dismissal of consumer complaints for lack of jurisdiction while pressing your commercial arbitration or Summary Suit.",
  },
  {
    question:
      "Can we recover working capital replenishment defaults using bounced e-NACH mandates?",
    answer:
      "Yes. If the FICO investor's working capital replenishment or commissary supply e-NACH mandate bounces, you must serve a statutory demand notice under Section 25(1) of the Payment and Settlement Systems (PSS) Act, 2007 within 30 days of receiving the NPCI return memo. If unpaid within 15 days, you can file a criminal complaint before the Magistrate alongside civil recovery.",
  },
  {
    question:
      "What evidence is mandatory before filing a police complaint or Section 9 petition for a locked store?",
    answer:
      "You need: (1) the signed FOCO/FICO Agreement showing title to inventory remains exclusively with the brand, (2) Consignment Delivery Challans and GST E-Way Bills proving stock dispatch to that store GSTIN/address, (3) an ERP/POS closing stock valuation report, (4) timestamped video/photos of the locked shutter, and (5) a BSA 2023 Section 63 electronic evidence certificate.",
  },
];

export default function FicoFocoFranchiseRecoveryPage() {
  const breadcrumbItems = [
    { label: "Industries", href: "/industries" },
    {
      label: "Franchisors & Brand Licensors",
      href: "/industries/franchisors-brand-licensors-oem-dealership-recovery",
    },
    {
      label: "FOCO / FICO Store Lockout & CapEx Recovery",
      href: PAGE_URL,
    },
  ];

  // JSON-LD Schemas: Article + HowTo + FAQPage + BreadcrumbList
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: HERO_HEADLINE,
    description: META_DESCRIPTION,
    url: CANONICAL_URL,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": CANONICAL_URL,
    },
    image: `${SITE_URL}/blog_money_recovery.png`,
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
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Brands Rescue Trapped FOCO Inventory & Recover Unpaid CapEx Legally",
    description:
      "Step-by-step statutory playbook for franchisors to retrieve locked consignment stock and recover unpaid CapEx/working capital balances.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Lock Down ERP/POS Valuation & Shutter Proof",
        text: "Capture timestamped video of the padlocked store, freeze POS stock ledgers, and generate a BSA 2023 s.63 certificate covering E-Way Bills and consignment challans.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Serve 48-Hour BNS s.316 Inventory Release Notice",
        text: "Dispatch an Advocate Legal Notice via Email, WhatsApp, and Speed Post RPAD demanding immediate shutter access and notifying criminal breach of trust liability.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "File Urgent Arbitration Act s.9 Receiver Petition",
        text: "Move the Commercial Court (exempt from s.12A mediation under Patil Automation urgency) for a Court Commissioner with police aid to inventory and retrieve brand stock.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Execute Set-Off & Section 29B CapEx/Deficit Recovery",
        text: "Adjust security deposits against unpaid CapEx fit-out balances, prosecute bounced NI s.138 / PSS s.25 mandates, and invoke fast-track ODR arbitration.",
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
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Industries",
        item: `${SITE_URL}/industries`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Franchisors & Brand Licensors",
        item: `${SITE_URL}/industries/franchisors-brand-licensors-oem-dealership-recovery`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "FOCO / FICO Store Lockout & CapEx Recovery",
        item: CANONICAL_URL,
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
            <span>IND-24 &bull; Retail &amp; Franchise Creditors</span>
            <span className="text-red-700">|</span>
            <span>BNS s.316 &amp; Arbitration s.9</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {HERO_HEADLINE}
          </h1>

          {/* 40-60 Word Executive Statutory Summary Box with inline Parent Hub link */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            When a property-owning FOCO/FICO franchisee padlocks your store, detaining
            company-owned consignment stock triggers <strong>BNS 2023 s.316</strong> criminal breach
            of trust and tortious detinue. Never break locks unilaterally—deploy our{" "}
            <Link
              href="/industries/franchisors-brand-licensors-oem-dealership-recovery"
              className="text-red-300 underline hover:text-white font-semibold"
            >
              Franchisor &amp; Brand Licensor Recovery Hub
            </Link>{" "}
            protocol combining 48-hour release notices with urgent{" "}
            <strong>Arbitration Act s.9</strong> police-assisted Receiver orders.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">₹30L–₹1.5Cr</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Typical Trapped Brand Inventory
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">3–10 Days</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Urgent s.9 Receiver Order Window
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">BNS s.316</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Criminal Breach of Trust Lever
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">s.2(1)(c)(ix)</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Commercial Courts Act Mandate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* 2-Column Split */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          <FicoFocoTableOfContents />

          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview */}
            <section
              id="heading-lockout-crisis"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Why FOCO and FICO Store Lockouts Trap Brand Inventory
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Across India&apos;s high-street retail, apparel, jewelry, eyewear, salon,
                  diagnostic lab, and EV showroom sectors, the{" "}
                  <strong>FOCO (Franchise-Owned, Company-Operated)</strong> and{" "}
                  <strong>FICO (Franchise-Invested, Company-Operated)</strong> formats have become
                  the fastest vehicle for asset-light expansion. Under this split architecture, the
                  investor-franchisee owns or leases the commercial premises and funds store
                  CapEx—interiors, HVAC, fixtures, and security deposits—while the{" "}
                  <strong>brand retains 100% legal title over consignment inventory</strong>,
                  deploys store staff, controls the cloud POS, and remits a contracted revenue share
                  or Minimum Monthly Guarantee (MMG).
                </p>
                <p>
                  The crisis erupts when store unit economics dip or a quarterly MMG reconciliation
                  dispute arises. Because the franchisee holds physical possession of the shell
                  lease and shutter keys, rogue investors frequently put a physical padlock on the
                  store overnight, lock out brand employees, and hold{" "}
                  <strong>₹30 Lakh to ₹1.5 Crore of company-owned inventory</strong> hostage to
                  extort uncontracted payouts or CapEx refunds.
                </p>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 sm:p-5">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-amber-800 mb-1.5">
                    Critical Warning for Brand Operations Heads
                  </p>
                  <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                    Never instruct regional managers to cut padlocks or enter a locked FOCO premises
                    unilaterally. Even when the goods inside belong 100% to your company, forced
                    re-entry without a Court Receiver or police Panchnama gives the franchisee an
                    instant counter-FIR under <strong>BNS s.329 (Criminal Trespass)</strong> and
                    fabricated allegations of missing cash or damaged fixtures.
                  </p>
                </div>

                {/* // TODO(reviewer): src/data/reviewers.ts is absent in this repository */}
                <p className="text-xs text-slate-500 pt-2 border-t border-slate-100">
                  Statutory Playbook Vetted by <strong>Anuj Anand Malik</strong>, Advocate &amp;
                  Founder, AMA Legal Solutions &bull; Updated for BNS 2023 &amp; BSA 2023.
                </p>
              </div>
            </section>

            {/* Section 2: Decision Tree SVG + Mobile Cards */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Operational Decision Tree: Police Rescue vs Section 9 Receiver
                </h2>
              </div>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Select the exact legal escalation track based on whether the franchisee has
                physically padlocked brand inventory, defaulted on store CapEx fit-out tranches, or
                bounced working-capital replenishment mandates.
              </p>

              {/* Desktop SVG Decision Tree */}
              <div className="hidden md:block overflow-x-auto bg-slate-900 rounded-2xl p-5 border border-slate-800">
                <svg
                  width="820"
                  height="310"
                  viewBox="0 0 820 310"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="FOCO Store Lockout and CapEx Recovery Decision Tree"
                  className="w-full h-auto"
                >
                  {/* Root Node */}
                  <rect x="20" y="115" width="185" height="80" rx="12" fill="#DC2626" />
                  <text x="112" y="145" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                    FOCO / FICO Default
                  </text>
                  <text x="112" y="164" textAnchor="middle" fill="#FEE2E2" fontSize="10">
                    Triage Dispute Type &amp;
                  </text>
                  <text x="112" y="179" textAnchor="middle" fill="#FEE2E2" fontSize="10">
                    Lock Snapshot (BSA s.63)
                  </text>

                  {/* Connector Lines */}
                  <path d="M205 135 L265 55" stroke="#64748B" strokeWidth="2" />
                  <path d="M205 155 L265 155" stroke="#64748B" strokeWidth="2" />
                  <path d="M205 175 L265 255" stroke="#64748B" strokeWidth="2" />

                  {/* Branch 1: Store Padlocked */}
                  <rect x="265" y="18" width="245" height="74" rx="10" fill="#1E293B" stroke="#EF4444" strokeWidth="1.5" />
                  <text x="387" y="42" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">
                    Track A: Store Padlocked (₹35L+ Stock)
                  </text>
                  <text x="387" y="60" textAnchor="middle" fill="#E2E8F0" fontSize="10">
                    48-Hr BNS s.316 Release Notice +
                  </text>
                  <text x="387" y="75" textAnchor="middle" fill="#E2E8F0" fontSize="10">
                    POS/E-Way Bill Dossier
                  </text>

                  <path d="M510 55 L560 55" stroke="#EF4444" strokeWidth="2" />
                  <rect x="560" y="18" width="240" height="74" rx="10" fill="#064E3B" stroke="#10B981" strokeWidth="1.5" />
                  <text x="680" y="42" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="bold">
                    Urgent s.9 Receiver + Police Aid
                  </text>
                  <text x="680" y="60" textAnchor="middle" fill="#D1FAE5" fontSize="10">
                    Exempt from s.12A (Patil Automation)
                  </text>
                  <text x="680" y="75" textAnchor="middle" fill="#D1FAE5" fontSize="10">
                    Video Panchnama &amp; Stock Retrieval
                  </text>

                  {/* Branch 2: Unpaid CapEx */}
                  <rect x="265" y="118" width="245" height="74" rx="10" fill="#1E293B" stroke="#F59E0B" strokeWidth="1.5" />
                  <text x="387" y="142" textAnchor="middle" fill="#FBBF24" fontSize="11" fontWeight="bold">
                    Track B: CapEx Fit-Out Unpaid
                  </text>
                  <text x="387" y="160" textAnchor="middle" fill="#E2E8F0" fontSize="10">
                    Signed BOQ + Handover Certificate +
                  </text>
                  <text x="387" y="175" textAnchor="middle" fill="#E2E8F0" fontSize="10">
                    15-Day MMG Set-Off Notice
                  </text>

                  <path d="M510 155 L560 155" stroke="#F59E0B" strokeWidth="2" />
                  <rect x="560" y="118" width="240" height="74" rx="10" fill="#1E293B" stroke="#94A3B8" strokeWidth="1.5" />
                  <text x="680" y="142" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontWeight="bold">
                    s.29B ODR / Commercial Court
                  </text>
                  <text x="680" y="160" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                    s.2(1)(c)(ix) Franchise Dispute +
                  </text>
                  <text x="680" y="175" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                    Contract Act s.73/74 Damages
                  </text>

                  {/* Branch 3: Working Capital Bounce */}
                  <rect x="265" y="218" width="245" height="74" rx="10" fill="#1E293B" stroke="#38BDF8" strokeWidth="1.5" />
                  <text x="387" y="242" textAnchor="middle" fill="#38BDF8" fontSize="11" fontWeight="bold">
                    Track C: WC / NACH Default
                  </text>
                  <text x="387" y="260" textAnchor="middle" fill="#E2E8F0" fontSize="10">
                    30-Day Statutory Demand Notice
                  </text>
                  <text x="387" y="275" textAnchor="middle" fill="#E2E8F0" fontSize="10">
                    (PSS Act s.25 / NI Act s.138)
                  </text>

                  <path d="M510 255 L560 255" stroke="#38BDF8" strokeWidth="2" />
                  <rect x="560" y="218" width="240" height="74" rx="10" fill="#1E293B" stroke="#94A3B8" strokeWidth="1.5" />
                  <text x="680" y="242" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontWeight="bold">
                    Magistrate + 20% Interim Comp
                  </text>
                  <text x="680" y="260" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                    NI s.143A Interim Relief +
                  </text>
                  <text x="680" y="275" textAnchor="middle" fill="#CBD5E1" fontSize="10">
                    Stop-Supply &amp; Title Retention
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="md:hidden space-y-3">
                <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                  <p className="text-xs font-black text-[#DC2626] uppercase mb-1">
                    Track A: Store Padlocked (₹35L+ Stock)
                  </p>
                  <p className="text-xs text-slate-700">
                    48-Hr BNS s.316 Release Notice &rarr; Urgent Arbitration s.9 Court Receiver with
                    police aid (exempt from s.12A delay).
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                  <p className="text-xs font-black text-amber-800 uppercase mb-1">
                    Track B: Unpaid CapEx Fit-Out Balance
                  </p>
                  <p className="text-xs text-slate-700">
                    15-Day MMG Set-Off Notice backed by signed BOQ &rarr; Commercial Court / s.29B
                    fast-track ODR arbitration.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-100 border border-slate-200">
                  <p className="text-xs font-black text-slate-900 uppercase mb-1">
                    Track C: Working Capital / NACH Default
                  </p>
                  <p className="text-xs text-slate-700">
                    30-Day PSS Act s.25 / NI Act s.138 Statutory Notice &rarr; Magistrate complaint
                    + 20% s.143A interim compensation.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Statutory Enforcement Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Enforcement Matrix: FOCO Lockouts &amp; CapEx Claims
                </h2>
              </div>
              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                Every FOCO/FICO dispute spans both criminal misappropriation of entrusted goods and
                commercial contract enforcement. Use this statutory matrix to pair the right remedy
                with each default trigger.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Statute &amp; Section</th>
                      <th className="p-3.5 font-bold">FOCO / FICO Trigger</th>
                      <th className="p-3.5 font-bold">Forum &amp; Action</th>
                      <th className="p-3.5 font-bold">Creditor Advantage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        BNS 2023 s.316(2)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Padlocking &amp; refusing return of entrusted brand consignment stock
                      </td>
                      <td className="p-3.5 text-slate-700">
                        48-Hr Notice + Jurisdictional Police / Magistrate
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        Criminal breach of trust pressure compels rapid shutter opening
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        Arbitration Act s.9
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Urgent inventory retrieval &amp; seasonal obsolescence prevention
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Commercial Court (Court Receiver + Police Aid)
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        Lawful lock-breaking &amp; barcoded stock Panchnama in 3–10 days
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        Specific Relief Act s.7 &amp; s.8
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Tortious detinue of identifiable fixtures, POS &amp; branded SKUs
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Commercial Civil Court (Urgent s.12A Exempt)
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        Direct recovery of specific movable property rather than delayed cash
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-bold text-slate-900">
                        Commercial Courts Act s.2(1)(c)(ix)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        CapEx fit-out arrears, MMG reversal &amp; operational deficits (&ge;₹3L)
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Designated Commercial Court / Institutional ODR
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        Defeats Consumer Forum jurisdiction bluffs by investors
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">
                        NI Act s.138 &amp; PSS Act s.25
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Dishonoured CapEx cheques or working capital e-NACH bounces
                      </td>
                      <td className="p-3.5 text-slate-700">
                        30-Day Notice + Judicial Magistrate First Class
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        20% mandatory interim compensation under s.143A NI Act
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Judicial Precedents */}
            <section
              id="heading-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Judicial Precedents Protecting Brand Inventory &amp; Urgent Relief
                </h2>
              </div>

              <div className="space-y-5">
                {STATUTORY_PRECEDENTS.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative bg-slate-50 border border-slate-200 rounded-xl p-5 pl-6 overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]" />
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                        {item.citation}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-500">
                        {item.date}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 mb-1">
                      {item.parties}
                    </h3>
                    <p className="text-xs font-bold text-slate-600 mb-3">{item.title}</p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                      <strong>Holding:</strong> {item.holding}
                    </p>
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg px-3.5 py-2.5 text-xs text-emerald-900">
                      <strong>Creditor Takeaway:</strong> {item.takeaway}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: 4 Interactive Scenarios */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  4 FOCO / FICO Store Failure &amp; CapEx Dispute Playbooks
                </h2>
              </div>
              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                Explore the exact statutory counter-moves for each commercial breakdown across
                apparel, jewelry, eyewear, diagnostics, and EV dealership networks.
              </p>
              <FicoFocoScenarioTabs />
            </section>

            {/* Section 6: Worked Recovery Ledger */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Worked Recovery Ledger: Locked Apparel FOCO Store (₹51.80L Net)
                </h2>
              </div>
              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                Illustration of how a multi-brand apparel franchisor quantifies both{" "}
                <strong>physical consignment stock rescue</strong> and{" "}
                <strong>monetary CapEx/deficit claims</strong> inside a Section 9 petition and
                Section 21 arbitration statement of claim.
              </p>

              <div className="bg-slate-900 text-white rounded-2xl overflow-hidden border border-slate-800 shadow-lg">
                <div className="px-5 py-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-red-400">
                      Illustrative Claim Schedule &bull; FOCO Tier-2 Mall Store
                    </p>
                    <p className="text-sm sm:text-base font-black text-white">
                      Combined Inventory Rescue + CapEx &amp; Shutdown Loss Ledger
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Section 9 + Section 29B
                  </span>
                </div>

                <div className="divide-y divide-slate-800 text-xs sm:text-sm">
                  <div className="px-5 py-3.5 flex items-center justify-between gap-4">
                    <span className="text-slate-300">
                      1. Trapped Consignment Inventory (1,420 Barcoded SKUs at Landing Cost)
                    </span>
                    <span className="font-bold text-white shrink-0">₹38,50,000</span>
                  </div>
                  <div className="px-5 py-3.5 flex items-center justify-between gap-4">
                    <span className="text-slate-300">
                      2. Unpaid Turnkey Store Fit-Out &amp; HVAC Escalation Balance (Signed BOQ)
                    </span>
                    <span className="font-bold text-white shrink-0">₹9,40,000</span>
                  </div>
                  <div className="px-5 py-3.5 flex items-center justify-between gap-4">
                    <span className="text-slate-300">
                      3. 14-Day Illegal Store Shutdown &amp; Staff Idle Cost (Contract Act s.73)
                    </span>
                    <span className="font-bold text-white shrink-0">₹4,20,000</span>
                  </div>
                  <div className="px-5 py-3.5 flex items-center justify-between gap-4">
                    <span className="text-slate-300">
                      4. Working Capital Replenishment Arrears (Bounced e-NACH)
                    </span>
                    <span className="font-bold text-white shrink-0">₹2,70,000</span>
                  </div>
                  <div className="px-5 py-3.5 flex items-center justify-between gap-4 bg-slate-800/50">
                    <span className="text-amber-300">
                      Less: Contractual Set-Off of Adjustable Investor Security Deposit
                    </span>
                    <span className="font-bold text-amber-300 shrink-0">- ₹3,00,000</span>
                  </div>
                  <div className="px-5 py-4 flex items-center justify-between gap-4 bg-emerald-950/60 border-t border-emerald-700/50">
                    <span className="font-black text-emerald-300">
                      Net Recoverable Exposure (Immediate Stock Custody + Monetary Award)
                    </span>
                    <span className="text-base sm:text-lg font-black text-emerald-400 shrink-0">
                      ₹51,80,000
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: BSA 2023 s.63 Evidence Dossier */}
            <section
              id="heading-evidence-dossier"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  6-Point Lockout Panchnama &amp; BSA 2023 s.63 Evidence Dossier
                </h2>
              </div>
              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                Commercial Courts grant ex-parte Section 9 Receiver orders only when title to the
                trapped stock and the fact of unlawful lockout are irrefutably documented. Assemble
                these six records before dispatch:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "1. FOCO/FICO Title & Consignment Clause",
                    desc: "Executed agreement explicitly stating inventory remains the brand's sole property until retail POS billing.",
                  },
                  {
                    title: "2. GST E-Way Bills & Stock Transfer Memos",
                    desc: "Delivery challans and E-Way Bills proving physical movement of the ₹35L+ stock to the store GSTIN.",
                  },
                  {
                    title: "3. Real-Time ERP / POS Closing Stock Ledger",
                    desc: "SKU-wise barcode inventory dump locked on the exact date of the franchisee's physical lockout.",
                  },
                  {
                    title: "4. Geo-Tagged Shutter Lockout Video + BSA s.63",
                    desc: "Timestamped video of the padlocked storefront and denied staff entry, certified under BSA 2023 s.63.",
                  },
                  {
                    title: "5. Signed CapEx BOQ & Snag-Free Handover",
                    desc: "Joint measurement sheets, contractor tax invoices, and store-launch sign-off defeating snag excuses.",
                  },
                  {
                    title: "6. NPCI e-NACH Memos / Dishonoured Cheques",
                    desc: "Bank return memos for unpaid working-capital or MMG instruments triggering 30-day statutory notices.",
                  },
                ].map((card, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-1.5"
                  >
                    <p className="text-xs sm:text-sm font-black text-slate-900">{card.title}</p>
                    <p className="text-xs text-slate-600 leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: Dual-Track CTA */}
            <section
              id="heading-cta-desk"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Dispatch an Urgent FOCO Rescue Notice or Bulk Network Drive
                </h2>
              </div>
              <FicoFocoRecoveryCTA />
            </section>

            {/* Section 9: Tools, Templates & Sibling Guides */}
            <section
              id="heading-related-guides"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Franchisor Calculators, Notice Templates &amp; Sibling Guides
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm">
                <Link
                  href="/industries/franchisors-brand-licensors-oem-dealership-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                    Parent Industry Hub
                  </span>
                  <span className="font-bold text-slate-900">
                    Franchisors, Brand Licensors &amp; EV/Auto OEM Recovery &rarr;
                  </span>
                </Link>
                <Link
                  href="/tools/limitation-period-calculator"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                    Interactive Calculator (T1)
                  </span>
                  <span className="font-bold text-slate-900">
                    Commercial Limitation &amp; Filing Deadline Calculator &rarr;
                  </span>
                </Link>
                <Link
                  href="/templates/equipment-rental-arrears-gate-pass-repossession-bns-316-notice"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block mb-1">
                    Advocate Template (P1)
                  </span>
                  <span className="font-bold text-slate-900">
                    BNS s.316 Asset Repossession &amp; Arrears Notice Format &rarr;
                  </span>
                </Link>
                <Link
                  href="/templates/security-cheque-presentation-intimation-cum-ledger-notice"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block mb-1">
                    Advocate Template (P1)
                  </span>
                  <span className="font-bold text-slate-900">
                    Security Cheque Presentation &amp; Ledger Demand Notice &rarr;
                  </span>
                </Link>
                <Link
                  href="/distributor-dealer-dues-recovery"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Channel Recovery
                  </span>
                  <span className="font-bold text-slate-900">
                    Distributor &amp; Dealer Dues Recovery Playbook &rarr;
                  </span>
                </Link>
                <Link
                  href="/online-dispute-resolution-india"
                  className="p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 transition-colors"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Fast-Track Arbitration
                  </span>
                  <span className="font-bold text-slate-900">
                    Online Dispute Resolution (ODR) for Outstation Franchises &rarr;
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
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Frequently Asked Questions: FOCO Lockout &amp; CapEx Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-xl bg-slate-50/70 open:bg-white transition-colors"
                  >
                    <summary className="flex items-center justify-between gap-4 p-4 cursor-pointer list-none font-bold text-xs sm:text-sm text-slate-900">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] font-black text-lg leading-none group-open:rotate-45 transition-transform shrink-0">
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
                  Primary Statutory Authorities &amp; Official Portals
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((src, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold shrink-0">&rarr;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline underline-offset-2 transition-colors"
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

      <RelatedRecoveryGuides currentPath={PAGE_URL} />
    </div>
  );
}
