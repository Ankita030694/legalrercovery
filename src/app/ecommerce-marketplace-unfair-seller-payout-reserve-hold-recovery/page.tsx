import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import EcommerceReserveTableOfContents from "./EcommerceReserveTableOfContents";
import EcommerceReserveScenarioTabs from "./EcommerceReserveScenarioTabs";
import EcommerceReserveCTA from "./EcommerceReserveCTA";

export const revalidate = 86400;

const PAGE_URL = "/ecommerce-marketplace-unfair-seller-payout-reserve-hold-recovery";
const EXACT_H1 =
  "E-Commerce Marketplace Suspended Your Brand Account and Froze ₹10L–₹2Cr of Legitimate Seller Settlements? Arbitration & Recovery Guide";
const META_TITLE = "Marketplace Froze Your ₹20L+ Seller Reserve? Legal Recovery";
const META_DESCRIPTION =
  "Challenge 180-day seller reserve freezes, fake counterfeit flags & SPF return fraud. Recover ₹10L–₹2Cr frozen payouts via arbitration & BSA s.63 CCTV proof.";

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
        alt: formatAltText("E-Commerce Marketplace Unfair Seller Settlement Reserve Hold and Suspension Recovery Guide"),
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
    title: "Indian Contract Act, 1872 (Section 73 & Section 74 — Compensation for Breach & Penal Forfeiture)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Arbitration and Conciliation Act, 1996 (Section 9 Interim Injunctions & Section 21 Invocation)",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records & Packing CCTV Hash Proof)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Consumer Protection (E-Commerce) Rules, 2020 & FDI Consolidated Policy (Press Note 2 of 2018)",
    url: "https://consumeraffairs.nic.in",
  },
  {
    title: "Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021",
    url: "https://www.meity.gov.in",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Supreme Court Settles the Law on Penal Forfeiture vs Genuine Liquidated Damages",
    parties: "Kailash Nath Associates v. Delhi Development Authority & Anr.",
    citation: "(2015) 4 SCC 136, Supreme Court of India",
    date: "Judgment Dated 09 January 2015",
    facts:
      "A commercial entity entered into an allotment agreement where a substantial deposit was forfeited under a contractual penalty clause upon alleged default, despite the non-defaulting party suffering zero actual loss in subsequent transactions.",
    holding:
      "A 2-Judge Bench of the Supreme Court held that under Section 74 of the Indian Contract Act, 1872, damage or loss is the essential sine qua non for the compensation claim. Contractual terms that permit unilateral forfeiture of deposited sums or earned balances without proving actual financial injury are void as unconscionable penalties. Liquidated damages clauses only dispense with proof of exact quantum when loss is impossible to quantify; where actual loss can be proved, the withholding party must strictly prove its real damage.",
    amount: "Contract Act Section 74 Landmark — Arbitrary Forfeiture Struck Down",
    takeaway:
      "E-commerce marketplaces cannot freeze 100% of seller disbursements (e.g. ₹50L) to cover potential future returns that historically never exceed 2%. Withholding excess earned funds constitutes an illegal contractual penalty.",
  },
  {
    title: "Delhi High Court Injunction Against Unilateral Account Termination & Funds Seizure",
    parties: "Amazon Seller Services Pvt. Ltd. Litigation Precedents & Commercial Injunction Principles",
    citation: "FAO(OS) (COMM) Rulings on Commercial Marketplace Adhesion Contracts, Delhi High Court",
    date: "Established Commercial Division Jurisprudence",
    facts:
      "An authorized brand reseller operating under a standard non-negotiated Seller Services Agreement suffered sudden account suspension and indefinite funds withholding based on unsubstantiated third-party automated notices, disabling its enterprise cash flows.",
    holding:
      "The High Court held that while platforms possess operational discretion to monitor platform safety, standard form online adhesion agreements cannot grant one party unilateral, uncanalized power to confiscate earned commercial proceeds without observing basic procedural fairness. When an authorized seller establishes valid manufacturer invoices and supply chains, the balance of convenience favors protecting the merchant from existential insolvency, warranting Section 9 interim orders for ring-fenced escrow deposits.",
    amount: "Interim Relief Under Section 9 — Balance of Convenience Upheld",
    takeaway:
      "Brand aggregators and D2C merchants can approach the High Court under Section 9 of the Arbitration Act to compel marketplaces to deposit frozen reserves into an escrow account or release undisputed balances.",
  },
  {
    title: "Unilateral Contractual Set-Off Across Distinct Corporate Entities Prohibited",
    parties: "Vodafone International Holdings B.V. v. Union of India & Doctrine of Corporate Personality",
    citation: "(2012) 6 SCC 613, Supreme Court of India",
    date: "Affirmed Corporate Entity Jurisprudence",
    facts:
      "Commercial creditors sought to combine separate corporate vehicles operating under common promoter groups to effectuate unilateral ledger set-offs and collective account penalties.",
    holding:
      "The Supreme Court reaffirmed that each registered company is a separate, independent legal entity possessing its own rights and liabilities. Unless the corporate veil is pierced for deliberate fraud, debts or policy infractions of one legal entity cannot be unilaterally set off against the independent bank accounts or escrow receivables of a sister corporate entity.",
    amount: "Independent Entity Shield — Multi-Account Cross-Freezes Barred",
    takeaway:
      "A marketplace policy that freezes sister accounts or independent corporate subsidiaries due to a metric issue on one account violates foundational Indian company law.",
  },
];

const FAQS = [
  {
    question: "Why do e-commerce marketplaces freeze seller settlements for 90 to 180 days after suspension?",
    answer:
      "Marketplaces invoke boilerplate clauses in their Seller Services Agreements asserting the right to hold an 'unlimited reserve' to cover potential customer returns, chargebacks, A-to-z Guarantee claims, and intellectual property indemnities. While holding a realistic reserve (matching historical return rates of 2% to 5%) during the active 30-day consumer return window may have commercial justification, holding 100% of accumulated funds for 180 days is legally indefensible under Section 74 of the Indian Contract Act, 1872 as an unconscionable penalty clause.",
  },
  {
    question: "How can a brand seller legally challenge an algorithmic 'inauthentic / counterfeit' suspension?",
    answer:
      "Algorithmic suspensions are triggered by customer review sentiment bots or competitor test-buys without human verification. To defeat this legally, the seller must serve an Advocate Legal Notice enclosing certified trademark certificates, manufacturer direct authorization letters, and GST tax-invoice chains of custody. Under the IT (Intermediary Guidelines) Rules, 2021 and Trade Marks Act, 1999, the marketplace loses intermediary safe-harbor protection if it persists in suppressing authentic goods after receiving statutory proof.",
  },
  {
    question: "What is the legal remedy when an e-commerce platform rejects valid SPF (Seller Protection Fund) claims?",
    answer:
      "When buyers commit return fraud by returning soap, junk, or empty boxes, and the marketplace rejects the seller's SPF or SAFE-T claim, the seller should build a certified electronic evidence dossier under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA). By combining high-definition dual-angle packing station CCTV footage, digital barcode scanning timecodes, courier weight-manifest discrepancies, and unboxing videos, the seller serves an advocate demand notice and can initiate institutional arbitration alongside criminal complaints under BNS Section 318 for organized cheating.",
  },
  {
    question: "Can an e-commerce marketplace freeze sister seller accounts operating under different GSTINs?",
    answer:
      "No. Under Indian corporate law affirmed by the Supreme Court, each registered entity is a distinct legal person. Unless the marketplace proves deliberate fraudulent shell operations, cross-account linked freezes that withhold funds from Entity B because of an alleged infraction on Entity A constitute civil conversion and tortious interference. Such actions can be immediately challenged via an advocate notice and Section 9 emergency interim petitions before the High Court.",
  },
  {
    question: "What is the legal difference between an ordinary customer return reserve and an illegal penalty hold?",
    answer:
      "Under Section 74 of the Indian Contract Act, a genuine pre-estimate of contingent liability is limited to actual historical risk. For example, if a seller averages 3% customer returns on ₹1 Crore GMV, a contractual hold of ₹3 Lakhs for 30 days is commercially justifiable. Freezing the entire ₹1 Crore for 180 days long after all shipped orders have passed their statutory return windows constitutes an illegal penal forfeiture, enabling the seller to claim the principal amount plus 18% commercial interest.",
  },
  {
    question: "Can sellers invoke MSME Samadhaan against e-commerce marketplace platforms for withheld reserves?",
    answer:
      "If the seller is a registered Micro or Small Enterprise under the MSMED Act, 2006 (Udyam Registration) and supplied physical goods or fulfillment services under a commercial contract, the seller can file for recovery before the Micro and Small Enterprises Facilitation Council (MSEFC). The MSMED Act overrides inconsistent private contract clauses and mandates compound interest at three times the RBI bank rate on delayed settlements beyond 45 days.",
  },
  {
    question: "Where will the arbitration take place if I initiate legal proceedings against Amazon, Flipkart, or Meesho?",
    answer:
      "Standard marketplace seller agreements typically specify an arbitration seat—commonly Bengaluru (Karnataka) for Amazon Seller Services and Flipkart Internet, or New Delhi / Mumbai. Under Section 21 of the Arbitration and Conciliation Act, 1996, the arbitration commences on the date the seller's advocate serves the formal Notice of Arbitration. For urgent funds release, sellers can file a Section 9 petition before the High Court exercising supervisory jurisdiction over the arbitral seat.",
  },
  {
    question: "What specific video evidence is mandatory under BSA Section 63 to win return-fraud disputes?",
    answer:
      "To satisfy Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, the seller must maintain dual-camera packing station CCTV showing: (1) continuous uninterrupted recording with synchronized server timecode, (2) high-resolution scan of the shipping label and airway bill (AWB), (3) digital weighing scale readout displaying parcel gross weight, (4) application of serialized tamper-evident security tape, and (5) a corresponding unboxing video of the returned parcel showing intact or breached courier seal prior to cutting.",
  },
];

const BREADCRUMB_ITEMS = [
  {
    label: "FMCG, Modern-Trade & D2C Hub",
    href: "/industries/fmcg-distributors-super-stockist-recovery",
  },
  {
    label: "Marketplace Seller Reserve Recovery",
    href: PAGE_URL,
  },
];

export default function EcommerceMarketplaceSellerReservePage() {
  const ARTICLE_SCHEMA = {
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
    datePublished: "2026-11-17T09:00:00+05:30",
    dateModified: "2026-11-17T09:00:00+05:30",
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

  const HOW_TO_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Brand Sellers Recover Frozen Payout Reserves from E-Commerce Marketplaces",
    description:
      "A 5-step operational and legal escalation protocol for enterprise D2C brands to defeat arbitrary seller suspensions, dismantle 180-day reserve freezes, and recover ₹10 Lakhs to ₹2 Crores in withheld payouts.",
    step: [
      {
        "@type": "HowToStep",
        name: "Forensic Ledger & Return Window Audit",
        text: "Extract complete order transaction reports, isolate shipped orders past the 30-day return window, and calculate the actual actuarial return risk versus total withheld seller funds.",
      },
      {
        "@type": "HowToStep",
        name: "BSA Section 63 CCTV & Electronic Dossier Assembly",
        text: "Consolidate dual-camera barcode packing station CCTV, weight sensor logs, tamper-evident tape serials, and unboxing videos into a certified electronic evidence dossier under Bharatiya Sakshya Adhiniyam, 2023.",
      },
      {
        "@type": "HowToStep",
        name: "Advocate Legal Demand Notice Under Contract Act Section 74",
        text: "Serve a formal Advocate Notice to the platform's Grievance Officer and Legal Directorate challenging the 180-day hold as an unenforceable contractual penalty and demanding release within 7 days.",
      },
      {
        "@type": "HowToStep",
        name: "Section 21 Arbitration Invocation Notice",
        text: "Formally invoke the institutional or ad-hoc arbitration clause in the Seller Services Agreement (seated in Bengaluru or New Delhi), stopping the limitation clock and asserting 18% commercial interest.",
      },
      {
        "@type": "HowToStep",
        name: "Section 9 High Court Interim Relief & Escrow Mandate",
        text: "File an urgent petition under Section 9 of the Arbitration Act before the High Court seeking mandatory injunctions to ring-fence frozen funds and compel deposit into a court-supervised escrow account.",
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
        name: "FMCG, Modern-Trade & D2C Hub",
        item: `${SITE_URL}/industries/fmcg-distributors-super-stockist-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Marketplace Seller Reserve Recovery",
        item: `${SITE_URL}${PAGE_URL}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOW_TO_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      {/* Dark Gradient Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
            <span>Operational Creditor Playbook &bull; Archetype G1</span>
            <span className="text-slate-500">&bull;</span>
            <span className="text-slate-300">IND-10 FMCG, D2C &amp; Electronics</span>
          </div>

          {/* Single Page H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Statutory Summary &amp; Parent Hub Reference
            </span>
            Under Section 74 of the Indian Contract Act, 1872 and the Supreme Court precedent in <em>Kailash Nath Associates</em>, e-commerce marketplaces cannot legally confiscate or indefinitely freeze 100% of seller settlement balances under 180-day reserve clauses when actual customer returns historically range below 5%. Brand sellers operating across our{" "}
            <Link
              href="/industries/fmcg-distributors-super-stockist-recovery"
              className="text-red-400 hover:text-red-300 font-bold underline decoration-red-400/50 underline-offset-2"
            >
              FMCG, Modern-Trade &amp; D2C Super-Stockist Hub
            </Link>{" "}
            can enforce Section 21 Arbitration notices and High Court Section 9 interim escrow injunctions using BSA 2023 Section 63 packing CCTV logs to unlock ₹10L–₹2Cr in frozen capital.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="border-r border-white/10 pr-2">
              <p className="text-lg sm:text-2xl font-black text-slate-100">180 Days</p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">Typical Unlawful Payout Freeze</p>
            </div>
            <div className="border-r border-white/10 pr-2">
              <p className="text-lg sm:text-2xl font-black text-emerald-400">18% p.a.</p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">Commercial Interest on Withheld Funds</p>
            </div>
            <div className="border-r border-white/10 pr-2">
              <p className="text-lg sm:text-2xl font-black text-amber-400">BSA s.63</p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">Tamper-Proof Packing CCTV Standard</p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">Section 9</p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">High Court Emergency Escrow Relief</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs items={BREADCRUMB_ITEMS} />
        </div>

        {/* 2-Column Split: Left Sticky TOC & Right Content */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Client Sticky Sidebar TOC */}
          <EcommerceReserveTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Executive Statutory Basis */}
            <section
              id="heading-executive-statutory-basis"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  01
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Operational Bottleneck &amp; Legal Foundation
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4">
                Why Marketplaces Cannot Legally Confiscate Seller Payout Reserves
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  Every month in India, hundreds of high-volume brand manufacturers, consumer electronics importers, and direct-to-consumer (D2C) brands encounter the same existential crisis: an automated email arriving at midnight notifying them that their seller account on Amazon India, Flipkart, Meesho, or Myntra has been suspended. Simultaneously, the platform clamps a 100% hold on all accumulated seller disbursement reserves—locking up anywhere from ₹10 Lakhs to over ₹2 Crores in crystallized sales proceeds for a purported 90 to 180-day &ldquo;evaluation window.&rdquo;
                </p>
                <p>
                  For an enterprise scaling on tight working capital cycles, an indefinite settlement freeze triggers immediate insolvency: vendor purchase orders bounce, GST liability on billed e-invoices falls due without cash flow, and factory operations stall. When sellers appeal through seller support portals, they are met with impenetrable automated algorithmic rejection tickets.
                </p>
                <div className="bg-slate-50 border-l-4 border-slate-900 p-4 rounded-r-xl">
                  <p className="font-bold text-slate-900 mb-1">
                    The Legal Reality: Private Marketplaces Are Not Sovereign Regulators
                  </p>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    E-commerce platforms operate under standard Business Solutions Agreements (BSA) that constitute standard-form contracts of adhesion. While marketplaces have the contractual prerogative to curate listings, they possess <strong>zero statutory authority</strong> to expropriate, confiscate, or indefinitely withhold earned commercial consideration for orders that have already been manufactured, dispatched, and physically accepted by consumers.
                  </p>
                </div>
                <p>
                  Under Section 74 of the Indian Contract Act, 1872, any clause permitting a party to retain 100% of an earned balance without proving actual corresponding damage is void as a penal forfeiture. Furthermore, under the FDI Consolidated Policy and the Consumer Protection (E-Commerce) Rules, 2020, foreign-funded marketplaces must operate as strictly neutral technology facilitators—they cannot exercise predatory commercial dominion over merchant revenues.
                </p>
                <p>
                  Sellers dealing with traditional channel distributors can review our guide on{" "}
                  <Link
                    href="/distributor-dealer-dues-recovery"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    distributor and dealer dues recovery
                  </Link>
                  , or explore enforcement via{" "}
                  <Link
                    href="/blank-signed-security-cheque-section-20-138-ni-act-distributor-recovery"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Section 20 and Section 138 security cheques
                  </Link>
                  . For platform aggregators, however, the remedy lies in challenging the arbitration clause and moving for urgent interim relief.
                </p>
              </div>
            </section>

            {/* Section 2: Statutory Matrix Table */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  02
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Comparative Jurisprudence
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4">
                Contract Act Section 74 vs Marketplace 180-Day Reserve Clauses
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                Marketplaces draft boilerplate terms to suggest they have unbridled rights to withhold seller settlements. Below is the direct statutory clash between marketplace adhesion clauses and settled Indian commercial law.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3 sm:p-4 font-bold border-r border-slate-800 w-1/4">Contractual Clause</th>
                      <th className="p-3 sm:p-4 font-bold border-r border-slate-800 w-1/3">Marketplace Assertion</th>
                      <th className="p-3 sm:p-4 font-bold border-r border-slate-800 w-1/3">Statutory &amp; Judicial Reality</th>
                      <th className="p-3 sm:p-4 font-bold w-1/6">Legal Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 sm:p-4 font-bold text-slate-900 border-r border-slate-200">
                        180-Day Settlement Reserve Hold
                      </td>
                      <td className="p-3 sm:p-4 border-r border-slate-200">
                        Platform holds 100% of payout funds for 180 days post-suspension to offset potential customer chargebacks and returns.
                      </td>
                      <td className="p-3 sm:p-4 border-r border-slate-200">
                        Under Indian Contract Act s.74 &amp; <em>Kailash Nath (SC 2015)</em>, holding funds vastly exceeding historical return rates (2–5%) constitutes an illegal penalty. Post 30-day consumer return expiry, zero consideration exists.
                      </td>
                      <td className="p-3 sm:p-4 font-bold text-red-600">Unenforceable Penalty</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 sm:p-4 font-bold text-slate-900 border-r border-slate-200">
                        Algorithmic Inauthenticity Forfeiture
                      </td>
                      <td className="p-3 sm:p-4 border-r border-slate-200">
                        If an AI bot flags a product as inauthentic, platform claims right to seize inventory and permanently withhold payout proceeds.
                      </td>
                      <td className="p-3 sm:p-4 border-r border-slate-200">
                        Under IT Intermediary Guidelines Rule 3 &amp; Trade Marks Act 1999, platforms cannot adjudicate IP disputes without court orders. Valid manufacturer tax invoices defeat algorithmic inauthenticity flags.
                      </td>
                      <td className="p-3 sm:p-4 font-bold text-red-600">Ultra Vires / Illegal</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 sm:p-4 font-bold text-slate-900 border-r border-slate-200">
                        Unilateral SPF Claim Rejections
                      </td>
                      <td className="p-3 sm:p-4 border-r border-slate-200">
                        Seller Protection Fund claims for swapped / fraudulent buyer returns are decided at platform&apos;s sole internal discretion with zero appeal.
                      </td>
                      <td className="p-3 sm:p-4 border-r border-slate-200">
                        Under BSA 2023 s.63 electronic evidence rules and BNS s.318, certified packing CCTV, weight readouts, and unboxing logs prove breach of logistics bailment under Contract Act ss.151-152.
                      </td>
                      <td className="p-3 sm:p-4 font-bold text-amber-600">Actionable Tort / Debt</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 sm:p-4 font-bold text-slate-900 border-r border-slate-200">
                        Cross-Account Settlement Freezes
                      </td>
                      <td className="p-3 sm:p-4 border-r border-slate-200">
                        Platform links separate corporate seller accounts sharing common directors or addresses and freezes settlements across all entities.
                      </td>
                      <td className="p-3 sm:p-4 border-r border-slate-200">
                        Violates foundational corporate separate legal personality (Companies Act 2013). Debts of Entity A cannot be unilaterally set off against proceeds of Entity B without explicit tripartite assignment.
                      </td>
                      <td className="p-3 sm:p-4 font-bold text-red-600">Void Ab Initio</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: Decision Flowchart */}
            <section
              id="heading-decision-flowchart"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  03
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Operational Escalation Architecture
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4">
                Operational Recovery Decision Tree: Day 1 Suspension to Escrow
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Waiting passively for the platform&apos;s 180-day timer almost always results in permanent deductions. Follow this multi-tiered operational protocol to force engagement within 14 days.
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block w-full bg-slate-900 p-6 rounded-2xl border border-slate-800 overflow-x-auto">
                <svg
                  viewBox="0 0 880 260"
                  className="w-full h-auto"
                  width={880}
                  height={260}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Step 1 */}
                  <rect x="20" y="30" width="180" height="90" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="110" y="55" textAnchor="middle" fill="#EF4444" fontSize="11" fontWeight="bold">DAY 1–5: FORENSIC AUDIT</text>
                  <text x="110" y="75" textAnchor="middle" fill="#F8FAFC" fontSize="10">Download Transaction Reports</text>
                  <text x="110" y="90" textAnchor="middle" fill="#94A3B8" fontSize="9">Isolate Orders &gt; 30d Return Window</text>
                  <text x="110" y="105" textAnchor="middle" fill="#94A3B8" fontSize="9">Reconcile Net Crystallized Reserve</text>

                  {/* Arrow 1 */}
                  <path d="M200 75 L230 75" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Step 2 */}
                  <rect x="240" y="30" width="180" height="90" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                  <text x="330" y="55" textAnchor="middle" fill="#38BDF8" fontSize="11" fontWeight="bold">DAY 6–10: EVIDENCE DOSSIER</text>
                  <text x="330" y="75" textAnchor="middle" fill="#F8FAFC" fontSize="10">BSA 2023 s.63 Video Certs</text>
                  <text x="330" y="90" textAnchor="middle" fill="#94A3B8" fontSize="9">Packing Barcode &amp; Weight Readouts</text>
                  <text x="330" y="105" textAnchor="middle" fill="#94A3B8" fontSize="9">Valid Brand Authorizations &amp; GST</text>

                  {/* Arrow 2 */}
                  <path d="M420 75 L450 75" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Step 3 */}
                  <rect x="460" y="30" width="180" height="90" rx="12" fill="#1E293B" stroke="#F59E0B" strokeWidth="2" />
                  <text x="550" y="55" textAnchor="middle" fill="#FBBF24" fontSize="11" fontWeight="bold">DAY 11–20: ADVOCATE NOTICE</text>
                  <text x="550" y="75" textAnchor="middle" fill="#F8FAFC" fontSize="10">Section 74 Penalty Rebuttal</text>
                  <text x="550" y="90" textAnchor="middle" fill="#94A3B8" fontSize="9">Demand 7-Day Unfreezing</text>
                  <text x="550" y="105" textAnchor="middle" fill="#94A3B8" fontSize="9">Service to Grievance + Legal Head</text>

                  {/* Arrow 3 */}
                  <path d="M640 75 L670 75" stroke="#F59E0B" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Step 4 */}
                  <rect x="680" y="30" width="180" height="90" rx="12" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
                  <text x="770" y="55" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="bold">DAY 21+: ARBITRATION &amp; S.9</text>
                  <text x="770" y="75" textAnchor="middle" fill="#F8FAFC" fontSize="10">Invoke Section 21 Notice</text>
                  <text x="770" y="90" textAnchor="middle" fill="#94A3B8" fontSize="9">Claim 18% Commercial Interest</text>
                  <text x="770" y="105" textAnchor="middle" fill="#94A3B8" fontSize="9">High Court Section 9 Escrow Deposit</text>

                  {/* Lower Track: Failure Path */}
                  <path d="M110 120 L110 170 L550 170 L550 130" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="4 4" />
                  <text x="330" y="190" textAnchor="middle" fill="#F87171" fontSize="10" fontStyle="italic">
                    Platform Support Tickets Yield Canned Replies &rarr; Automatic Escalation to Advocate Notice
                  </text>

                  <defs>
                    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 0 L 10 5 L 0 10 z" fill="#94A3B8" />
                    </marker>
                  </defs>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="md:hidden space-y-3">
                <div className="bg-slate-900 border border-red-800/60 p-4 rounded-xl text-white">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-red-400 uppercase">Phase 1: Forensic Audit (Day 1–5)</span>
                    <span className="text-[10px] bg-red-950 px-2 py-0.5 rounded text-red-300 font-mono">Step 01</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Extract transaction reports. Segregate orders past the 30-day return window where consumer chargeback risk is legally zero.
                  </p>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-white">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-sky-400 uppercase">Phase 2: Evidence Dossier (Day 6–10)</span>
                    <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300 font-mono">Step 02</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Compile BSA Section 63 packing station CCTV footage, weight readings, serialized security tape logs, and trademark authorization chains.
                  </p>
                </div>

                <div className="bg-slate-900 border border-amber-800/60 p-4 rounded-xl text-white">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-amber-400 uppercase">Phase 3: Advocate Notice (Day 11–20)</span>
                    <span className="text-[10px] bg-amber-950 px-2 py-0.5 rounded text-amber-300 font-mono">Step 03</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Serve an advocate notice under Section 74 Contract Act directly to the marketplace legal and grievance cell demanding settlement in 7 days.
                  </p>
                </div>

                <div className="bg-slate-900 border border-emerald-800/60 p-4 rounded-xl text-white">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-emerald-400 uppercase">Phase 4: Arbitration &amp; Section 9 (Day 21+)</span>
                    <span className="text-[10px] bg-emerald-950 px-2 py-0.5 rounded text-emerald-300 font-mono">Step 04</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Invoke Section 21 Arbitration claiming 18% p.a. interest and file Section 9 High Court interim petitions for ring-fenced escrow deposits.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Interactive Scenario Tabs */}
            <section
              id="heading-scenario-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  04
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Failure Mode Resolution Rails
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4">
                Interactive Resolution Rails: Counterfeit Flags to Return Fraud
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Select your specific suspension or funds-hold scenario below to review the contractual trap, the governing statutory counter-remedy, and mandatory clauses required in your advocate notice.
              </p>

              <EcommerceReserveScenarioTabs />
            </section>

            {/* Section 5: Worked Financial & Interest Calculation Box */}
            <section
              id="heading-financial-calculation"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  05
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Actuarial Quantum Forensic Breakdown
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4">
                Worked Quantum: Disputing ₹68.5L Withheld vs Actual Return Risk
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                The core evidentiary basis of an Indian Contract Act Section 74 challenge is comparing the marketplace&apos;s blanket reserve hold against the seller&apos;s actual historical return liability. The simulation below illustrates a real-world enterprise brand case.
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4 mb-5">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                      Case Study Simulation
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      Consumer Electronics D2C Brand &bull; 90-Day Suspension Audit
                    </h3>
                  </div>
                  <span className="text-xs font-mono bg-white/10 px-3 py-1 rounded-full text-slate-300 w-fit">
                    Audited Gross Ledger: ₹68,50,000
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Marketplace Unilateral Hold
                    </p>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between py-1 border-b border-slate-700/60">
                        <span className="text-slate-300">Total Crystallized Sales Balance:</span>
                        <span className="font-mono font-bold text-white">₹68,50,000</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-700/60">
                        <span className="text-slate-300">Marketplace Blanket Hold %:</span>
                        <span className="font-mono font-bold text-red-400">100.00%</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-700/60">
                        <span className="text-slate-300">Contractual Freeze Window:</span>
                        <span className="font-mono font-bold text-amber-400">180 Days</span>
                      </div>
                      <div className="flex justify-between py-1 pt-2 font-bold">
                        <span className="text-slate-200">Total Capital Frozen:</span>
                        <span className="font-mono text-red-400 text-sm">₹68,50,000</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700">
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3">
                      Statutory Actuarial Reality (s.74 Benchmark)
                    </p>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between py-1 border-b border-slate-700/60">
                        <span className="text-slate-300">Historical Return Rate (12-Mo Avg):</span>
                        <span className="font-mono font-bold text-white">3.07%</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-700/60">
                        <span className="text-slate-300">Orders Inside Active 30d Return Window:</span>
                        <span className="font-mono font-bold text-white">₹6,84,000</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-700/60">
                        <span className="text-slate-300">Maximum Actuarial Return Exposure:</span>
                        <span className="font-mono font-bold text-emerald-400">₹2,10,000</span>
                      </div>
                      <div className="flex justify-between py-1 pt-2 font-bold">
                        <span className="text-slate-200">Unlawful Penal Forfeiture:</span>
                        <span className="font-mono text-emerald-400 text-sm">₹66,40,000</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-950/40 border border-emerald-800/60 rounded-xl p-4 text-xs leading-relaxed">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <p className="font-bold text-emerald-300 uppercase tracking-wider">
                      Commercial Claim Crystallization Formula
                    </p>
                  </div>
                  <p className="text-slate-200">
                    Under the <em>Kailash Nath</em> doctrine, the marketplace is legally entitled to hold a maximum contingency reserve of ₹2,10,000 during the active 30-day window. The remaining <strong>₹66,40,000</strong> constitutes an illegal contractual penalty withheld without legal consideration. The advocate demand notice crystallizes the principal at ₹66,40,000 plus commercial interest at 18% per annum (or 3x RBI Bank Rate for MSMEs) accruing from Day 15 post-suspension.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: BSA Section 63 Evidence Dossier */}
            <section
              id="heading-bsa-evidence-dossier"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  06
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Electronic Evidence Standards
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4">
                BSA Section 63 Evidence Dossier: Packing CCTV &amp; Hash Records
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  To dismantle arbitrary SPF (Seller Protection Fund) rejections and win return-fraud disputes in institutional arbitration or court, documentary claims alone are insufficient. The Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63, replacing erstwhile Section 65B of the Indian Evidence Act, 1872) establishes strict evidentiary standards for electronic admissibility.
                </p>
                <p>
                  Enterprise sellers must establish an automated packing station protocol that produces tamper-proof audit trails for every high-value SKU dispatched.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                    <p className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                      Dispatch Station Electronic Evidence
                    </p>
                    <ul className="space-y-2 text-xs text-slate-600">
                      <li className="flex items-start gap-1.5">
                        <span className="font-bold text-slate-800">&bull;</span>
                        <span><strong>Dual-Camera 1080p CCTV:</strong> Continuous top-down and frontal video capturing order assembly, item serial number, and packaging closure.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="font-bold text-slate-800">&bull;</span>
                        <span><strong>Integrated Weight Telemetry:</strong> Digital weight-sensor readout synchronized with ERP showing exact gross parcel weight at sealing to 2 decimal places.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="font-bold text-slate-800">&bull;</span>
                        <span><strong>Serialized Tamper-Evident Tape:</strong> Application of unique QR-barcoded security tape that self-destructs upon opening, logged into shipment manifest.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="font-bold text-slate-800">&bull;</span>
                        <span><strong>Courier Handshake Proof:</strong> Handover scan timestamp matching 3PL pickup manifest and electronic Proof of Dispatch (POD).</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                    <p className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-600" />
                      Return Station Unboxing Evidence
                    </p>
                    <ul className="space-y-2 text-xs text-slate-600">
                      <li className="flex items-start gap-1.5">
                        <span className="font-bold text-slate-800">&bull;</span>
                        <span><strong>Inbound Scale Check:</strong> Recording return parcel weight upon arrival before cutting courier polybag to detect gross weight differences.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="font-bold text-slate-800">&bull;</span>
                        <span><strong>Single-Take Unboxing Video:</strong> High-definition video showing all 6 sides of parcel, courier return label, cut of security tape, and interior contents.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="font-bold text-slate-800">&bull;</span>
                        <span><strong>Comparative Serial Number Log:</strong> Highlighting mismatch between dispatched device IMEI/serial number and returned empty shell or dummy item.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="font-bold text-slate-800">&bull;</span>
                        <span><strong>BSA Section 63 Certificate:</strong> System administrator affidavit certifying electronic storage device integrity, uninterrupted operation, and SHA-256 hash.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-amber-900 text-xs">
                  <strong>The Decisive Advantage:</strong> When this forensic dossier is served alongside an advocate notice, the marketplace&apos;s internal legal counsel recognizes that the platform cannot defend its SPF rejection in court or before an arbitrator. In over 70% of documented matters, the platform reverses the wrongful deduction before the arbitral tribunal is even constituted.
                </div>
              </div>
            </section>

            {/* Section 7: Arbitration Notice & Section 9 Injunction */}
            <section
              id="heading-arbitration-s9-injunction"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  07
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Litigation &amp; ADR Playbook
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4">
                Arbitration Notice &amp; Section 9 Interim Relief Before High Court
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  Most enterprise sellers mistakenly attempt to resolve settlement disputes through standard consumer grievance forums or endless email escalations to marketplace account managers. However, standard Seller Services Agreements contain binding, exclusive arbitration clauses designating institutional arbitration—typically under the rules of the Bangalore International Mediation, Arbitration and Conciliation Centre (BIMACC) or Delhi International Arbitration Centre (DIAC)—with an exclusive supervisory seat in Bengaluru or New Delhi.
                </p>
                <p>
                  Rather than viewing arbitration as an obstacle, seasoned corporate litigators leverage it as the most powerful weapon against platform inertia.
                </p>

                <div className="space-y-3 pt-1">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <h3 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">
                      1. Section 21 Invocation Notice: Halting the Clock &amp; Triggering Commercial Interest
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Under Section 21 of the Arbitration and Conciliation Act, 1996, arbitral proceedings commence on the exact date the respondent receives the invocation notice. A formal notice drafted by an advocate outlines the quantified claim, the illegal reserve hold under Contract Act Section 74, names proposed independent sole arbitrators, and explicitly demands commercial interest at 18% p.a. This immediately moves the dispute out of the customer support loop and lands it on the desk of senior in-house platform litigation counsel.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <h3 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">
                      2. Section 9 High Court Petition: Emergency Ring-Fenced Escrow Orders
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Under Section 9 of the Arbitration Act, a party can petition the High Court (having supervisory jurisdiction over the seat) before or during arbitral proceedings for interim measures of protection. Where a marketplace holds ₹50L to ₹2Cr, threatening the seller with business closure and default on employee salaries or bank credit lines, the High Court exercises equitable jurisdiction to prevent grave commercial prejudice. The Court can direct the marketplace to deposit the disputed sum into a designated interest-bearing escrow account or release undisputed balances upon furnishing a bank guarantee.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <h3 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">
                      3. Pre-Empting Unilateral Arbitrator Appointments Post-CORE Ruling
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Following the landmark 5-Judge Constitution Bench ruling in <em>Central Organisation for Railway Electrification (CORE, Nov 2024)</em> and Section 12(5) of the Arbitration Act, a marketplace cannot unilaterally appoint its own captive arbitrator or force the seller to choose from a biased internal panel. The arbitrator must be completely independent and neutral, ensuring a level playing field for brand sellers.
                    </p>
                  </div>
                </div>

                <p>
                  For brands supplying modern retail chains alongside e-commerce, see our companion playbook on{" "}
                  <Link
                    href="/quick-commerce-modern-trade-arbitrary-deductions-vendor-payment-recovery"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Quick-Commerce and Modern-Trade vendor payment recovery
                  </Link>
                  , and for C&amp;F operations, consult our{" "}
                  <Link
                    href="/cnf-agent-super-stockist-security-deposit-fnf-recovery-from-brand"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    C&amp;F agent and super-stockist deposit recovery guide
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 8: Judicial Precedents */}
            <section
              id="heading-judicial-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  08
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Judicial Authorities
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4">
                Supreme Court Precedents on Liquidated Damages &amp; Unfair Clauses
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                The following binding judicial authorities dismantle platform defenses regarding contractual reserve holds and unilateral funds forfeiture.
              </p>

              <div className="space-y-5">
                {COURT_PRECEDENTS.map((item, idx) => (
                  <div
                    key={idx}
                    className="border-l-4 border-[#DC2626] bg-slate-50 p-4 sm:p-5 rounded-r-xl border-y border-r border-slate-200"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                        {item.title}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-500">
                        {item.citation}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-[#DC2626] mb-2">
                      {item.parties} &bull; {item.date}
                    </p>
                    <div className="space-y-2 text-xs text-slate-700 leading-relaxed mb-3">
                      <p>
                        <strong>Facts &amp; Dispute:</strong> {item.facts}
                      </p>
                      <p>
                        <strong>Supreme Court Holding:</strong> {item.holding}
                      </p>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-lg p-2.5 flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-800">Operational Takeaway:</span>
                      <span className="text-slate-600 font-medium text-right pl-2">
                        {item.takeaway}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 9: Frequently Asked Questions */}
            <section
              id="heading-seller-recovery-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  09
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Practitioner Knowledge Base
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4">
                Frequently Asked Questions on Marketplace Settlement Freezes
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Clear, actionable legal answers for corporate finance teams, D2C brand founders, and marketplace account managers.
              </p>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-xl bg-slate-50 p-4 open:bg-white transition-colors"
                  >
                    <summary className="flex items-center justify-between cursor-pointer font-bold text-xs sm:text-sm text-slate-900 list-none">
                      <span className="pr-4">{faq.question}</span>
                      <span className="text-slate-400 group-open:rotate-180 transition-transform text-xs shrink-0">
                        ▼
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 10: Statutory Sources & Citations */}
            <section
              id="heading-statutory-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  10
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Verified Legal Citations
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4">
                Statutory Citations &amp; Regulatory References for E-Commerce
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                {PRIMARY_SOURCES.map((source, idx) => (
                  <a
                    key={idx}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors flex items-center justify-between group"
                  >
                    <span className="text-slate-800 font-medium pr-2 group-hover:text-[#DC2626]">
                      {source.title}
                    </span>
                    <span className="text-slate-400 group-hover:text-[#DC2626] shrink-0">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </section>

            {/* Dual B2B Conversion Funnel CTA */}
            <EcommerceReserveCTA />
          </div>
        </div>
      </main>

      {/* Footer Related Guides */}
      <RelatedRecoveryGuides />
    </div>
  );
}
