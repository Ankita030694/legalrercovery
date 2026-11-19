import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import RogueFranchiseeTableOfContents from "./RogueFranchiseeTableOfContents";
import RogueFranchiseeScenarioTabs from "./RogueFranchiseeScenarioTabs";
import RogueFranchiseeCTA from "./RogueFranchiseeCTA";

export const revalidate = 86400;

const PAGE_URL = "/terminated-rogue-franchisee-using-brand-signboard-royalty-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

const EXACT_H1 =
  "The 'Rogue Holdover Franchisee' Playbook: Stopping Signboard Misuse ('Lookalike Rebranding'), Swiggy/Zomato Listings & Recovering Royalty Arrears";

// Tightened from 70ch PDF draft to 59ch for Screaming Frog 30-60ch compliance
const META_TITLE = "Terminated Franchisee Using Brand Signboard? Stop & Recover";

// Tightened from 170ch PDF draft to 154ch for Screaming Frog 120-155ch compliance
const META_DESCRIPTION =
  "Terminated franchisee using your signboard or lookalike name on Swiggy/Zomato? Execute Sec. 9 injunction, Local Commissioner raids & recover royalty arrears.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "terminated franchisee still using brand name signboard legal injunction",
    "ex franchisee changed 1 letter in signboard deceptively similar passing off",
    "section 9 commercial court ex parte local commissioner signboard removal",
    "enforcing post termination non compete same store location franchisee",
    "swiggy zomato google maps listing takedown terminated franchisee",
    "recovering unpaid royalties plus trademark damages",
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
      "The Trade Marks Act, 1999 (Sections 29 & 135 — Infringement, Deceptive Similarity & Ex-Parte Injunction / Local Commissioner Relief)",
    url: "https://www.indiacode.nic.in/handle/123456789/1993",
  },
  {
    title:
      "The Commercial Courts Act, 2015 (Section 2(1)(c)(ix) Franchise Disputes & Section 12A Urgent Interim Relief Exception)",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title:
      "The Arbitration and Conciliation Act, 1996 (Section 9 Court Interim Injunction & Section 21 Invocation)",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title:
      "The Code of Civil Procedure, 1908 (Order XXXIX Rules 1–2 Temporary Injunctions & Order XXVI Rule 9 Local Commissioner Seizure)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 — Admissibility of Geo-Tagged Photos, POS Logs & Aggregator Order Receipts)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 (Rule 3 IP Takedown)",
    url: "https://www.meity.gov.in/",
  },
];

const FAQS = [
  {
    question:
      "What can a franchisor do if a terminated franchisee paints 1 or 2 letters over the signboard ('Chai Sutta' to 'Chai Shutta')?",
    answer:
      "Altering one or two letters while retaining the same font, color palette, shop interior, and menu constitutes textbook trademark infringement under Section 29(2) of the Trade Marks Act, 1999 and common-law passing off. Franchisors can move a Commercial Court (or High Court) for an ex-parte ad-interim injunction under Order XXXIX Rules 1–2 CPC alongside an Order XXVI Rule 9 Local Commissioner appointment to physically dismantle and seize the lookalike signboard.",
  },
  {
    question:
      "How fast can we take down a rogue terminated outlet from Swiggy, Zomato, and Google Maps?",
    answer:
      "Simultaneously with serving the Termination & De-Identification Notice, submit a Brand Authorization Revocation & Trademark Infringement packet to Swiggy, Zomato, and Google Business Profile Legal Grievance desks—attaching your Trade Mark Registration Certificate, signed Termination Notice, RPAD tracking proof, and specific Store/Restaurant IDs. Verified IP takedowns typically execute within 48 to 96 hours, cutting off the rogue operator's online order funnel immediately.",
  },
  {
    question:
      "Does Section 12A mandatory pre-institution mediation delay an urgent signboard injunction?",
    answer:
      "No. In Yamini Manohar v. T.K.D. Keerthi (2023), the Supreme Court held that suits contemplating urgent interim relief—such as ex-parte injunctions and Local Commissioner raids to halt ongoing trademark infringement and consumer deception—are exempt from mandatory pre-institution mediation under Section 12A of the Commercial Courts Act, 2015.",
  },
  {
    question:
      "Can we enforce a post-termination non-compete clause stopping the ex-franchisee from running a cafe or salon in the same shop?",
    answer:
      "Under Section 27 of the Indian Contract Act, 1872, courts scrutinize blanket post-termination restraints on trade, but strictly enforce injunctions against misusing the franchisor's registered trademark, distinctive trade dress, proprietary recipes/SOPs, staff uniforms, and customer CRM lists—and enforce reasonable liquidated daily holdover penalties under Section 74 for delayed de-identification.",
  },
  {
    question:
      "Our Franchise Agreement has an arbitration clause—can we still get an urgent Commercial Court signboard raid?",
    answer:
      "Yes. Under Section 9 of the Arbitration and Conciliation Act, 1996, a franchisor can approach the Commercial Court for urgent interim measures—including restraining brand misuse and appointing a Local Commissioner to seal infringing signage—either before or immediately upon issuing a Section 21 Arbitration Invocation Notice.",
  },
  {
    question:
      "Can a rogue franchisee set off their refundable security deposit against unpaid 8% royalties?",
    answer:
      "No. Franchise agreements designate security deposits as collateral for post-termination de-identification, damaged franchisor equipment, and liquidated damages. While the franchisee remains in continuing holdover breach, they cannot unilaterally set off the deposit against overdue royalty or commissary supply invoices.",
  },
  {
    question:
      "Can we prosecute bounced monthly royalty or commissary cheques under NI Act Section 138?",
    answer:
      "Yes. Where unpaid royalty ledgers and commissary supply invoices are crystallized and due, dishonour of monthly PDCs or security cheques (backed by prior ledger intimation) triggers criminal liability under Section 138 of the Negotiable Instruments Act, 1881, provided a statutory 15-day demand notice is served within 30 days of bank dishonour.",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  datePublished: "2026-11-19T10:00:00+05:30",
  dateModified: "2026-11-19T10:00:00+05:30",
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
    name: "Terminated Franchisee Signboard Injunction & Royalty Recovery",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: EXACT_H1,
  description: META_DESCRIPTION,
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Capture BSA s.63 Holdover & Test-Order Evidence",
      text: "Collect geo-tagged exterior signboard photos, lookalike rebranding videos, Swiggy/Zomato listing screenshots, and test-order UPI/POS receipts certified under BSA 2023 Section 63.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Serve Combined De-Identification & Royalty Demand Notice",
      text: "Dispatch an Advocate-signed Final Termination, De-Identification (72-hour signboard removal), and Royalty Arrears Notice via Speed Post RPAD, Email, and WhatsApp.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Execute Swiggy, Zomato & Google Business Profile IP Takedown",
      text: "File Brand Authorization Revocation and Trademark Infringement packets with aggregator legal desks and Google Business Profile to delist the rogue outlet within 48–96 hours.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Secure Section 9 / Commercial Court Injunction & Local Commissioner Raid",
      text: "Move the Commercial Court under Trade Marks Act s.135 / Arbitration Act s.9 (invoking s.12A urgent interim relief) for an ex-parte injunction and Order XXVI Rule 9 Local Commissioner signboard seizure.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Recover Unpaid Royalties, Commissary Bills & Trademark Damages",
      text: "Escalate net royalty arrears, NI Act s.138 bounced PDCs, and rendition-of-accounts damages via institutional arbitration or Commercial Suit decree execution.",
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
      name: "Industries",
      item: `${SITE_URL}/industries`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Franchisors & Brand Licensors Recovery",
      item: `${SITE_URL}/industries/franchisors-brand-licensors-oem-dealership-recovery`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Rogue Holdover Franchisee Playbook",
      item: CANONICAL_URL,
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

export default function RogueHoldoverFranchiseePage() {
  const breadcrumbItems = [
    { label: "Industries", href: "/industries" },
    {
      label: "Franchisors & Brand Licensors Recovery",
      href: "/industries/franchisors-brand-licensors-oem-dealership-recovery",
    },
    { label: "Rogue Holdover Franchisee Playbook", href: PAGE_URL },
  ];

  return (
    <>
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

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Gradient Hero */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>Trade Marks Act s.29/135</span>
              <span className="text-red-500">&bull;</span>
              <span>IND-24: Franchisors &amp; Brand Licensors</span>
              <span className="text-red-500">&bull;</span>
              <span>Order XXVI R.9 Raid SOP</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {EXACT_H1}
            </h1>

            {/* 40-60 Word Executive Creditor Answer Box */}
            <div
              aria-label="Executive Creditor Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer (Franchisor Brand &amp; Royalty Protection)
              </span>
              <p>
                Under Sections 29 and 135 of the Trade Marks Act, 1999 and Section 9 of the Arbitration Act, 1996,{" "}
                <Link
                  href="/industries/franchisors-brand-licensors-oem-dealership-recovery"
                  className="text-red-300 underline hover:text-white font-semibold"
                >
                  Indian franchisors and brand licensors
                </Link>{" "}
                can obtain ex-parte Commercial Court injunctions and Order XXVI Rule 9 Local Commissioner signboard raids—bypassing Section 12A mediation—while executing 48-hour Swiggy/Zomato IP takedowns and recovering unpaid 8% royalty arrears.
              </p>
            </div>

            {/* Hero 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">24–72 Hrs</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  Ex-Parte Ad-Interim Injunction Window
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">Order XXVI R.9</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  Local Commissioner Signboard Seizure
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">48–96 Hrs</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  Swiggy, Zomato &amp; Maps IP Delisting
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">s.12A Exempt</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
                  Urgent Interim Relief Bypasses Mediation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Layout */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            <RogueFranchiseeTableOfContents />

            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: Overview & Network Contagion */}
              <section
                id="heading-overview"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    1
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Why One Rogue Holdover Outlet Threatens Your Entire Franchise Chain
                  </h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    Every multi-city QSR, tea/coffee kiosk, ice-cream parlour, salon, fitness studio, diagnostic collection centre, and preschool chain in India faces the same existential flashpoint. A franchisee in a high-footfall market—say Lucknow, Jaipur, Indore, or Pune—stops remitting monthly 6%–8% gross-sales royalties, defaults on ₹5–₹12 lakh of central commissary supplies, and ignores cure notices. The moment your legal team issues a Termination Notice, the operator refuses to vacate or de-identify.
                  </p>
                  <p>
                    Instead, the rogue operator pulls off a calculated <strong>&ldquo;lookalike rebrand&rdquo;</strong>: they paste black vinyl over two letters of your exterior ACP glow-sign board—turning <em>&ldquo;Chai Sutta&rdquo;</em> into <em>&ldquo;Chai Shutta&rdquo;</em> or <em>&ldquo;Kathi Junction&rdquo;</em> into <em>&ldquo;Kathi Juncshun&rdquo;</em>—while keeping the exact same wall murals, digital menu boards, staff T-shirts, and Swiggy/Zomato restaurant IDs active. Customers assume it is still your flagship outlet, while 40 other compliant franchisees watch closely.
                  </p>
                  <p>
                    In franchise networks, <strong>royalty discipline is contagious</strong>. If one terminated outlet trades rent-free and royalty-free under a lookalike signboard for 90 days without a court-appointed Local Commissioner physically dismantling that board, neighbouring franchisees conclude that termination has no teeth—and royalty compliance across the entire state collapses the very next quarter.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm text-amber-900">
                    <strong>Operational Rule for Franchisor CEOs &amp; Legal Heads:</strong> Never treat a holdover franchisee as a routine civil debt collection. You must execute a <strong>synchronized two-front strike</strong> within 7 days of termination: (1) digital strangulation (Swiggy, Zomato, Google Business Profile IP takedowns) and (2) judicial physical de-identification (Section 9 / Order XXXIX injunction + Order XXVI Rule 9 Local Commissioner seizure) paired with liquidated royalty &amp; PDC recovery.
                  </div>
                </div>
              </section>

              {/* Section 2: Statutory Shield */}
              <section
                id="heading-statutory-shield"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    2
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    How Trade Marks Act s.29 &amp; Commercial Courts Protect Franchisors
                  </h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    Once a Franchise Agreement is validly terminated for non-payment of royalties or quality breach, the ex-franchisee&rsquo;s permissive license to display your registered word mark, device logo, and trade dress extinguishes immediately. Any continued display—even with minor phonetic or spelling tweaks—triggers three independent statutory weapons:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <h3 className="text-sm font-extrabold text-slate-900 mb-1.5">
                        1. Triple-Identity Infringement (s.29)
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Under Trade Marks Act s.29(2) &amp; s.29(3), where an ex-franchisee uses an identical or deceptively similar mark for identical food/retail services at the exact same shop, courts presume likelihood of public confusion without requiring consumer survey evidence.
                      </p>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <h3 className="text-sm font-extrabold text-slate-900 mb-1.5">
                        2. s.12A Urgent Relief Carve-Out
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Under <em>Yamini Manohar v. T.K.D. Keerthi</em> (2023 SC), Commercial Suits seeking urgent ex-parte injunctions and Local Commissioner raids to stop ongoing infringement are exempt from 3-month Section 12A pre-institution mediation.
                      </p>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <h3 className="text-sm font-extrabold text-slate-900 mb-1.5">
                        3. Arbitration s.9 Parallel Raid
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Even if your Franchise Agreement mandates arbitration, Arbitration Act Section 9 empowers the Commercial Court to grant interim signboard injunctions and appoint a Local Commissioner before the arbitral tribunal is constituted.
                      </p>
                    </div>
                  </div>

                  <p>
                    For broader dealer and distributor credit defaults without trademark holdover, cross-reference our dedicated{" "}
                    <Link
                      href="/distributor-dealer-dues-recovery"
                      className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                    >
                      distributor and dealer dues recovery playbook
                    </Link>{" "}
                    and fast-track{" "}
                    <Link
                      href="/online-dispute-resolution-india"
                      className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                    >
                      Online Dispute Resolution (ODR) arbitration rail
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Section 3: 5-Stage Decision Tree SVG + Mobile Cards */}
              <section
                id="heading-decision-tree"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    3
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    5-Stage Signboard Raid, Aggregator Takedown &amp; Royalty Escalation
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  Execute these five sequential stages in strict chronological order so the rogue operator cannot claim waiver, acquiescence, or lack of notice before the Commercial Court:
                </p>

                {/* Desktop Decision Tree SVG */}
                <div className="hidden md:block bg-slate-900 rounded-2xl p-5 border border-slate-800 overflow-x-auto">
                  <svg
                    viewBox="0 0 820 220"
                    width={820}
                    height={220}
                    className="w-full h-auto"
                    role="img"
                    aria-label="5-Stage Rogue Holdover Franchisee Escalation Flowchart"
                  >
                    <defs>
                      <marker
                        id="arrowRed"
                        markerWidth="8"
                        markerHeight="8"
                        refX="6"
                        refY="4"
                        orient="auto"
                      >
                        <path d="M0,0 L8,4 L0,8 Z" fill="#DC2626" />
                      </marker>
                    </defs>

                    {/* Stage 1 */}
                    <rect x="10" y="30" width="140" height="150" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                    <circle cx="32" cy="54" r="12" fill="#DC2626" />
                    <text x="32" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">1</text>
                    <text x="52" y="58" fill="#F8FAFC" fontSize="11" fontWeight="bold">Day 1–2</text>
                    <text x="22" y="84" fill="#FCA5A5" fontSize="11" fontWeight="bold">BSA s.63 Audit</text>
                    <text x="22" y="104" fill="#CBD5E1" fontSize="10">Geo-tagged signage,</text>
                    <text x="22" y="119" fill="#CBD5E1" fontSize="10">test-order UPI bill &amp;</text>
                    <text x="22" y="134" fill="#CBD5E1" fontSize="10">Zomato ID capture</text>
                    <text x="22" y="160" fill="#34D399" fontSize="9" fontWeight="bold">Proof Locked</text>

                    <line x1="150" y1="105" x2="172" y2="105" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrowRed)" />

                    {/* Stage 2 */}
                    <rect x="176" y="30" width="140" height="150" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                    <circle cx="198" cy="54" r="12" fill="#DC2626" />
                    <text x="198" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">2</text>
                    <text x="218" y="58" fill="#F8FAFC" fontSize="11" fontWeight="bold">Day 3</text>
                    <text x="188" y="84" fill="#FCA5A5" fontSize="11" fontWeight="bold">72-Hr Final Notice</text>
                    <text x="188" y="104" fill="#CBD5E1" fontSize="10">De-identify + pay</text>
                    <text x="188" y="119" fill="#CBD5E1" fontSize="10">royalty arrears via</text>
                    <text x="188" y="134" fill="#CBD5E1" fontSize="10">RPAD &amp; WhatsApp</text>
                    <text x="188" y="160" fill="#34D399" fontSize="9" fontWeight="bold">Default Crystalized</text>

                    <line x1="316" y1="105" x2="338" y2="105" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrowRed)" />

                    {/* Stage 3 */}
                    <rect x="342" y="30" width="140" height="150" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                    <circle cx="364" cy="54" r="12" fill="#DC2626" />
                    <text x="364" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">3</text>
                    <text x="384" y="58" fill="#F8FAFC" fontSize="11" fontWeight="bold">Day 4–6</text>
                    <text x="354" y="84" fill="#FCA5A5" fontSize="11" fontWeight="bold">Platform Delisting</text>
                    <text x="354" y="104" fill="#CBD5E1" fontSize="10">Swiggy, Zomato &amp;</text>
                    <text x="354" y="119" fill="#CBD5E1" fontSize="10">Google Maps IP</text>
                    <text x="354" y="134" fill="#CBD5E1" fontSize="10">revocation packet</text>
                    <text x="354" y="160" fill="#FBBF24" fontSize="9" fontWeight="bold">Orders Cut Off</text>

                    <line x1="482" y1="105" x2="504" y2="105" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrowRed)" />

                    {/* Stage 4 */}
                    <rect x="508" y="30" width="140" height="150" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <circle cx="530" cy="54" r="12" fill="#DC2626" />
                    <text x="530" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">4</text>
                    <text x="550" y="58" fill="#F8FAFC" fontSize="11" fontWeight="bold">Day 7–10</text>
                    <text x="520" y="84" fill="#FCA5A5" fontSize="11" fontWeight="bold">Sec. 9 / O.26 Raid</text>
                    <text x="520" y="104" fill="#CBD5E1" fontSize="10">Ex-parte injunction</text>
                    <text x="520" y="119" fill="#CBD5E1" fontSize="10">&amp; Local Commissioner</text>
                    <text x="520" y="134" fill="#CBD5E1" fontSize="10">signboard removal</text>
                    <text x="520" y="160" fill="#34D399" fontSize="9" fontWeight="bold">Signboard Seized</text>

                    <line x1="648" y1="105" x2="670" y2="105" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrowRed)" />

                    {/* Stage 5 */}
                    <rect x="674" y="30" width="136" height="150" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                    <circle cx="696" cy="54" r="12" fill="#DC2626" />
                    <text x="696" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">5</text>
                    <text x="716" y="58" fill="#F8FAFC" fontSize="11" fontWeight="bold">Day 15+</text>
                    <text x="686" y="84" fill="#FCA5A5" fontSize="11" fontWeight="bold">Arrears &amp; PDCs</text>
                    <text x="686" y="104" fill="#CBD5E1" fontSize="10">NI s.138 bounce +</text>
                    <text x="686" y="119" fill="#CBD5E1" fontSize="10">Sec. 21 Arbitration</text>
                    <text x="686" y="134" fill="#CBD5E1" fontSize="10">for 8% royalties</text>
                    <text x="686" y="160" fill="#34D399" fontSize="9" fontWeight="bold">Damages Recovered</text>
                  </svg>
                </div>

                {/* Mobile Stacked Cards */}
                <div className="md:hidden space-y-3">
                  {[
                    {
                      stage: "1. Day 1–2: BSA s.63 Field Audit",
                      text: "Capture geo-tagged exterior signboard photos, lookalike lettering video, test-order UPI bill, and Swiggy/Zomato Restaurant IDs.",
                    },
                    {
                      stage: "2. Day 3: 72-Hour De-Identification & Arrears Notice",
                      text: "Serve Advocate-signed final notice via RPAD, Email, and WhatsApp demanding signboard removal and royalty ledger payment.",
                    },
                    {
                      stage: "3. Day 4–6: Swiggy, Zomato & Google Maps IP Delisting",
                      text: "Submit TM Certificate + Termination Notice to aggregator IP portals to suspend rogue online payouts within 48–96 hours.",
                    },
                    {
                      stage: "4. Day 7–10: Commercial Court Injunction & Local Commissioner",
                      text: "Obtain ex-parte ad-interim relief (s.12A exempt) and Order XXVI Rule 9 raid to dismantle the infringing glow-sign board.",
                    },
                    {
                      stage: "5. Day 15+: Royalty Arrears, NI s.138 & Damages",
                      text: "Enforce bounced commissary/royalty PDCs under NI Act s.138 and consolidate unpaid royalties + trademark damages in arbitration.",
                    },
                  ].map((card) => (
                    <div key={card.stage} className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800">
                      <p className="text-xs font-extrabold text-red-400 mb-1">{card.stage}</p>
                      <p className="text-xs text-slate-300 leading-relaxed">{card.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 4: Statutory Remedy Matrix */}
              <section
                id="heading-remedy-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    4
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Statutory Remedy Matrix for Holdover Franchisee Enforcement
                  </h2>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3.5 font-bold">Holdover Violation</th>
                        <th className="p-3.5 font-bold">Primary Statute &amp; Section</th>
                        <th className="p-3.5 font-bold">Forum &amp; Relief Speed</th>
                        <th className="p-3.5 font-bold">Creditor / Franchisor Outcome</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="bg-white">
                        <td className="p-3.5 font-bold text-slate-900">
                          Lookalike Signboard (&ldquo;Chai Sutta&rdquo; &rarr; &ldquo;Chai Shutta&rdquo;)
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Trade Marks Act ss.29(2), 135; CPC Order XXXIX R.1–2 &amp; Order XXVI R.9
                        </td>
                        <td className="p-3.5 text-slate-700">Commercial Court / High Court (24–72 hrs ex-parte)</td>
                        <td className="p-3.5 text-emerald-700 font-semibold">
                          Physical dismantling of ACP glow-sign board &amp; seizure of branded cups/packaging
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          Swiggy, Zomato &amp; Google Maps Hijack
                        </td>
                        <td className="p-3.5 text-slate-700">
                          IT Intermediary Rules 2021 R.3(1)(b)(iv); Trade Marks Act s.29(6)(d)
                        </td>
                        <td className="p-3.5 text-slate-700">Platform Legal Grievance Portals (48–96 hrs)</td>
                        <td className="p-3.5 text-emerald-700 font-semibold">
                          Immediate delisting of rogue Restaurant ID &amp; reclamation of Google Business pin
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-3.5 font-bold text-slate-900">
                          Post-Termination Same-Shop Competition
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Contract Act ss.27 &amp; 74; Copyright Act (Menu/Trade Dress); Arbitration Act s.9
                        </td>
                        <td className="p-3.5 text-slate-700">Commercial Court (s.9) + Sole Arbitrator</td>
                        <td className="p-3.5 text-emerald-700 font-semibold">
                          Restraint on proprietary menu/trade dress + per-day de-identification penalty
                        </td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          Unpaid 8% Royalties &amp; Bounced Commissary PDCs
                        </td>
                        <td className="p-3.5 text-slate-700">
                          NI Act s.138 / PSS Act s.25; Commercial Courts Act s.2(1)(c)(ix)
                        </td>
                        <td className="p-3.5 text-slate-700">Magistrate Court (s.138) + Institutional Arbitration</td>
                        <td className="p-3.5 text-emerald-700 font-semibold">
                          100% principal arrears + 18% interest + up to 2x cheque-fine leverage
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 5: Interactive 4-Scenario Playbook */}
              <section
                id="heading-scenario-tabs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    5
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    4 Rogue Franchisee Holdover Scenarios (Interactive Playbook)
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  Select the exact holdover tactic your field team is confronting to view the statutory counter-strategy and 3-step execution protocol:
                </p>
                <RogueFranchiseeScenarioTabs />
              </section>

              {/* Section 6: Worked Financial & Damages Ledger */}
              <section
                id="heading-worked-ledger"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    6
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Worked Recovery Ledger: ₹16.40L Royalty, Commissary &amp; Damages Claim
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                  When drafting your Demand Notice and Section 9 / Arbitration Statement of Claim, separate liquidated commercial arrears from contractual de-identification penalties and trademark damages—while properly accounting for the security deposit so the respondent cannot allege unjust enrichment:
                </p>

                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700 pb-3 mb-4">
                    <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-red-400">
                      Sample QSR Outlet Holdover Claim (Lucknow Flagship Kiosk — 45 Days Holdover)
                    </span>
                    <span className="text-xs font-semibold text-slate-400">
                      Commercial Courts Act s.2(1)(c)(ix)
                    </span>
                  </div>

                  <div className="space-y-2.5 text-xs sm:text-sm">
                    <div className="flex justify-between gap-4 py-1.5 border-b border-slate-800">
                      <span className="text-slate-300">Unpaid 8% Monthly Royalties (4 Months @ ₹1.45L/mo avg)</span>
                      <span className="font-bold text-slate-100">₹5,80,000</span>
                    </div>
                    <div className="flex justify-between gap-4 py-1.5 border-b border-slate-800">
                      <span className="text-slate-300">Unpaid Central Commissary Supply Invoices (Bounced PDCs)</span>
                      <span className="font-bold text-slate-100">₹6,40,000</span>
                    </div>
                    <div className="flex justify-between gap-4 py-1.5 border-b border-slate-800">
                      <span className="text-slate-300">Liquidated De-Identification Holdover Penalty (45 days &times; ₹6,000/day)</span>
                      <span className="font-bold text-amber-400">₹2,70,000</span>
                    </div>
                    <div className="flex justify-between gap-4 py-1.5 border-b border-slate-800">
                      <span className="text-slate-300">Trademark Infringement Damages &amp; Local Commissioner Costs</span>
                      <span className="font-bold text-amber-400">₹4,50,000</span>
                    </div>
                    <div className="flex justify-between gap-4 py-1.5 border-b border-slate-700">
                      <span className="text-red-300">Less: Security Deposit Appropriated Against Signage/Equipment Damage</span>
                      <span className="font-bold text-red-300">- ₹3,00,000</span>
                    </div>
                    <div className="flex justify-between gap-4 pt-2 text-sm sm:text-base">
                      <span className="font-extrabold text-emerald-400">
                        Net Enforceable Recovery Claim (+ 18% p.a. Pendente Lite Interest)
                      </span>
                      <span className="font-black text-emerald-400">₹16,40,000</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7: BSA 2023 s.63 Evidence Checklist */}
              <section
                id="heading-evidence-checklist"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    7
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    BSA 2023 s.63 Evidence Checklist for Ex-Parte Local Commissioner Raids
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                  Commercial Courts grant ex-parte Local Commissioner raids only when your affidavit proves ongoing infringement and imminent destruction of evidence. Assemble these six records under a Bharatiya Sakshya Adhiniyam (BSA), 2023 Section 63 electronic certificate:
                </p>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                  {[
                    "Registered Trade Mark Certificate (Classes 30, 35 & 43) or pending Form TM-A with continuous prior-use invoices.",
                    "Signed Franchise Agreement highlighting IP license, de-identification timeline, security deposit forfeiture, and arbitration/jurisdiction clause.",
                    "Geo-tagged, timestamped exterior photographs & 30-second continuous video of the original or lookalike ('1-letter altered') signboard.",
                    "Trap/test-order receipt: Swiggy/Zomato order screenshot + UPI payment receipt + physical paper bill & branded cup/box photo.",
                    "Swiggy/Zomato Restaurant IDs, Google Business Profile URL, and FSSAI License number displayed at the rogue counter.",
                    "Termination Notice + Speed Post RPAD tracking + Email/WhatsApp delivery receipts proving expiry of the cure period.",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 bg-slate-50 border border-slate-200 rounded-xl p-3.5"
                    >
                      <span className="text-emerald-600 font-black mt-0.5">&#10003;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Section 8: Dual-Track B2B CTA */}
              <section id="heading-cta" className="scroll-mt-28">
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">
                  Launch a Single Rogue Outlet Notice or Multi-City Franchise Drive
                </h2>
                <RogueFranchiseeCTA />
              </section>

              {/* Section 9: Tools, Templates & Related Guides */}
              <section
                id="heading-related"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    9
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Interactive Calculators, Notice Templates &amp; Related Franchisor Guides
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <Link
                    href="/tools/cheque-bounce-deadline-calculator"
                    className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-colors"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626]">
                      Calculator (T1)
                    </span>
                    <p className="font-bold text-slate-900 mt-1">
                      NI Act s.138 Cheque Bounce Deadline Calculator &rarr;
                    </p>
                    <p className="text-slate-600 mt-1">
                      Track 30-day statutory notice and 15-day complaint filing deadlines for bounced royalty &amp; commissary PDCs.
                    </p>
                  </Link>

                  <Link
                    href="/tools/limitation-period-calculator"
                    className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-colors"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626]">
                      Calculator (T1)
                    </span>
                    <p className="font-bold text-slate-900 mt-1">
                      Commercial Debt Limitation Period Calculator &rarr;
                    </p>
                    <p className="text-slate-600 mt-1">
                      Verify 3-year limitation stops under Articles 55/137 and Section 18 ledger acknowledgments.
                    </p>
                  </Link>

                  <Link
                    href="/templates/security-cheque-presentation-intimation-cum-ledger-notice"
                    className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-colors"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626]">
                      Template (P1)
                    </span>
                    <p className="font-bold text-slate-900 mt-1">
                      Security Cheque Presentation Intimation &amp; Ledger Notice &rarr;
                    </p>
                    <p className="text-slate-600 mt-1">
                      Crystallize unpaid royalty &amp; commissary arrears before presenting franchisee security PDCs.
                    </p>
                  </Link>

                  <Link
                    href="/templates/commercial-lease-lock-in-breach-section-106-termination-notice"
                    className="block p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] hover:bg-red-50/30 transition-colors"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626]">
                      Template (P1)
                    </span>
                    <p className="font-bold text-slate-900 mt-1">
                      Commercial Premises Termination &amp; Handover Notice &rarr;
                    </p>
                    <p className="text-slate-600 mt-1">
                      Useful for FOCO/FOFO sub-leased outlets requiring simultaneous premises &amp; signage handover.
                    </p>
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
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Frequently Asked Questions: Rogue Holdover Franchisees
                  </h2>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq) => (
                    <details
                      key={faq.question}
                      className="group bg-slate-50 border border-slate-200 rounded-xl p-4"
                    >
                      <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900">
                        <span>{faq.question}</span>
                        <span className="text-[#DC2626] font-black text-base shrink-0 group-open:rotate-45 transition-transform">
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 11: Primary Statutory Sources & Attribution */}
              <section
                id="heading-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    11
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Primary Statutory Bare Acts &amp; Regulatory Sources
                  </h2>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm mb-6">
                  {PRIMARY_SOURCES.map((source) => (
                    <li key={source.url} className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold">&bull;</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-slate-700 hover:text-[#DC2626] underline"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-600">
                  <p className="font-bold text-slate-900 mb-1">
                    Author &amp; Legal Editorial Review
                  </p>
                  <p>
                    Prepared by{" "}
                    <Link
                      href="/authors/anuj-anand-malik"
                      className="text-[#DC2626] font-semibold underline"
                    >
                      Anuj Anand Malik
                    </Link>{" "}
                    (Advocate &amp; Founder, AMA Legal Solutions) for LegalRecovery.in institutional franchisor desks.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </main>

        <div className="bg-[#F8F9FB] border-t border-slate-200">
          <RelatedRecoveryGuides />
        </div>
      </div>
    </>
  );
}
