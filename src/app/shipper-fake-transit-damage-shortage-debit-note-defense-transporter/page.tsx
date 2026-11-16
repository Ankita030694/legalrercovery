import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import ShipperDebitDefenseTableOfContents from "./ShipperDebitDefenseTableOfContents";
import ShipperDebitDefenseScenarioTabs from "./ShipperDebitDefenseScenarioTabs";
import ShipperDebitDefenseCTA from "./ShipperDebitDefenseCTA";

export const revalidate = 86400;

const PAGE_URL = "/shipper-fake-transit-damage-shortage-debit-note-defense-transporter";
const EXACT_H1 =
  "Defeating Arbitrary 'Transit Damage & Shortage' Freight Deductions: Clean POD Estoppel, Marine-Insurance Double-Dip & Illegal Set-Off Law";
const META_TITLE = "Shipper Deducted Transit Damage From Freight Bill? Legal Fix";
const META_DESCRIPTION =
  "Shipper claimed marine transit insurance AND deducted damages from your freight ledger? Stop illegal double-recovery & set-offs under Carriage by Road Act.";

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
        alt: formatAltText("Transporter Defense Against Arbitrary Shipper Transit Damage Debit Notes"),
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

const STATUTORY_DEFENSE_MATRIX = [
  {
    remedy: "Clean POD Estoppel & Deemed Acceptance",
    statute: "BSA 2023 s.121 (IEA s.115) & Sale of Goods Act, 1930 s.42",
    applicability: "Consignee signed delivery receipt or Bilty without shortage/damage remarks",
    legalMechanism:
      "Upon unconditional physical delivery and signature of clean Proof of Delivery (POD), carrier bailment ends. The buyer's failure to notify defects at delivery constitutes deemed acceptance under commercial sale law, estoppelling belated shortage deductions.",
    transporterRelief:
      "Complete nullification of retrospective shortage claims raised 15 to 90 days post-unloading; forces release of withheld freight vouchers.",
    tone: "emerald",
  },
  {
    remedy: "Prohibition on Marine Insurance Double-Recovery",
    statute: "Marine Insurance Act, 1963 s.79 & Contract Act, 1872 ss.70, 72",
    applicability: "Shipper claimed transit loss from cargo insurer AND debited transporter",
    legalMechanism:
      "Marine insurance is strictly a contract of indemnity. Once an insurer settles a transit loss claim, actionable rights transfer to the insurer under subrogation. A cargo owner cannot recover twice (unjust enrichment); doing so constitutes actionable commercial fraud.",
    transporterRelief:
      "Mandatory reversal of debit note; forces shipper to produce surveyor reports or refund withheld freight with 18% p.a. interest.",
    tone: "emerald",
  },
  {
    remedy: "Bar on Unilateral Set-Off of Unliquidated Damages",
    statute: "SC Landmark: Union of India v. Raman Iron Foundry (1974) 2 SCC 231",
    applicability: "Shipper withholds freight of unrelated trucks/trips for an alleged damage claim",
    legalMechanism:
      "An unadjudicated claim for damages does not constitute a 'debt due'. A debtor cannot unilaterally appropriate or set off disputed, unliquidated damage claims against admitted, liquidated freight bills arising from independent carriage transactions.",
    transporterRelief:
      "Immediate release of all running ledger freight vouchers; relegates shipper's damage counter-claim to separate arbitration or civil suit.",
    tone: "slate",
  },
  {
    remedy: "Mandatory 180-Day Statutory Notice Limitation",
    statute: "Carriage by Road Act, 2007 (Section 16)",
    applicability: "Shipper failed to serve written notice of loss within 180 days of delivery",
    legalMechanism:
      "Service of written notice of loss or injury within 180 days from the date of booking or delivery is a mandatory statutory pre-condition. Failure to serve Section 16 notice completely extinguishes the shipper's right to initiate any legal proceeding against the common carrier.",
    transporterRelief:
      "Statutory bar against any arbitration, civil suit, or consumer complaint by shipper or consignee; absolute defense for fleet owner.",
    tone: "slate",
  },
  {
    remedy: "Statutory Ceiling on Common Carrier Liability",
    statute: "Carriage by Road Act, 2007 s.10 read with Rule 12 Carriage Rules, 2011",
    applicability: "High-value cargo damaged where consignor did not declare special value on LR",
    legalMechanism:
      "Common carrier liability is strictly capped at statutory limits (ten times freight or prescribed per-kg threshold) unless consignor expressly declared value on consignment note and paid agreed ad-valorem carrier risk surcharge prior to loading.",
    transporterRelief:
      "Restricts multimillion-rupee cargo claims down to statutory carrier limits or zero where packaging deficiency caused transit harm.",
    tone: "emerald",
  },
  {
    remedy: "MSMED Act Compound Penal Interest & Section 43B(h) Bar",
    statute: "MSMED Act, 2006 ss.15–18 & Income Tax Act, 1961 s.43B(h)",
    applicability: "Udyam-registered 3PL, transporter, or logistics service provider",
    legalMechanism:
      "Mandates freight payment within 45 days. Unilateral debit deductions do not interrupt statutory interest accruing at 3 times RBI Bank Rate. Overdue logistics invoices face corporate tax deduction disallowance on March 31.",
    transporterRelief:
      "C-Suite financial pressure on defaulting corporate shipper; rapid pre-litigation settlement through statutory MSEFC conciliation.",
    tone: "emerald",
  },
];

const PRECEDENTS = [
  {
    title: "Supreme Court on Bar Against Unilateral Set-Off of Unadjudicated Damages",
    parties: "Union of India v. Raman Iron Foundry",
    citation: "(1974) 2 SCC 231, Supreme Court of India",
    bench: "3-Judge Bench (A.N. Ray, C.J., D.G. Palekar & P.N. Bhagwati, JJ.)",
    holding:
      "The Supreme Court held that a claim for unliquidated damages does not give rise to a debt until the liability is adjudicated and damages assessed by a court or arbitral tribunal. A contracting party possesses no statutory or contractual right to unilaterally assess its own damages and deduct or set off such sums against admitted, pending bills of the contractor under other contracts.",
    takeaway:
      "Corporate shippers cannot unilaterally issue debit notes for alleged transit damage and deduct them from pending running freight ledgers. Admitted freight bills must be paid in full unless damage is judicially determined.",
  },
  {
    title: "Supreme Court on Marine Subrogation Barring Double-Recovery by Cargo Owners",
    parties: "Economic Transport Organisation v. Charan Spinning Mills (P) Ltd. & Anr.",
    citation: "(2010) 4 SCC 114, 5-Judge Constitution Bench, Supreme Court of India",
    bench: "5-Judge Bench (R.V. Raveendran, J. for the Bench)",
    holding:
      "The Constitution Bench ruled that marine cargo insurance is a contract of strict indemnity. When an insurer indemnifies the consignor/consignee for transit damage, the rights against the carrier transfer to the insurer by subrogation. The insured cargo owner cannot retain insurance compensation and simultaneously recover or deduct damages from the common carrier, as this constitutes unjust enrichment and double recovery.",
    takeaway:
      "If a shipper has lodged or received an insurance claim payout from ICICI Lombard, New India, or Bajaj Allianz, deducting that amount from the transporter's freight ledger is illegal and constitutes actionable commercial fraud.",
  },
  {
    title: "Supreme Court on Mandatory 180-Day Written Notice Under Carriage by Road Law",
    parties: "Patel Roadways Ltd. v. Birla Yamaha Ltd.",
    citation: "(2000) 4 SCC 91, Supreme Court of India",
    bench: "2-Judge Bench (S. Rajendra Babu & S.N. Phukan, JJ.)",
    holding:
      "The Supreme Court affirmed that the statutory requirement of serving a written notice of loss or injury within the prescribed period (now 180 days under Section 16 of the Carriage by Road Act, 2007) is mandatory. Without the service of this notice prior to instituting proceedings, no claim for loss or damage can be sustained against a common carrier in any forum.",
    takeaway:
      "Shippers who raise debit notes without serving a formal Section 16 statutory notice within 180 days are statutorily barred from recovering transit damages or resisting freight payment suits.",
  },
  {
    title: "Supreme Court on Mandatory Proof of Actual Loss for Liquidated Deductions",
    parties: "Kailash Nath Associates v. Delhi Development Authority & Anr.",
    citation: "(2015) 4 SCC 136, Supreme Court of India",
    bench: "2-Judge Bench (R.F. Nariman & A.K. Sikri, JJ.)",
    holding:
      "The Supreme Court established that under Section 74 of the Indian Contract Act, 1872, compensation can only be awarded for damage or loss proved to have been suffered. Where a party fails to prove actual loss or arbitrary internal penalties are applied without proof of causation, forfeiture or unilateral deduction is void and legally impermissible.",
    takeaway:
      "Standard clauses in Transport Service Agreements (TSAs) granting shippers unilateral rights to deduct arbitrary penalty percentages for transit delay or minor outer carton scuffs are legally void without strict proof of actual financial loss.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "The Carriage by Road Act, 2007 (Sections 3, 10, 11, 12, 13, 14 & 16) — Legislative Department, Ministry of Law and Justice",
    url: "https://www.indiacode.nic.in/handle/123456789/2082",
  },
  {
    title: "Carriage by Road Rules, 2011 (Rule 12 — Calculation of Maximum Liability of Common Carrier) — Ministry of Road Transport and Highways",
    url: "https://morth.nic.in",
  },
  {
    title: "The Marine Insurance Act, 1963 (Section 79 — Rights of Insurer on Payment & Doctrine of Subrogation)",
    url: "https://www.indiacode.nic.in/handle/123456789/1516",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Electronic Records & Section 121 — Estoppel by Record/Conduct)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "The Indian Contract Act, 1872 (Sections 70, 72 — Quasi-Contractual Restitution & Sections 170, 171 — Particular Lien)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15, 16, 17 & 18 — 45-Day Payment Rule & 3x RBI Interest)",
    url: "https://www.indiacode.nic.in/handle/123456789/2021",
  },
  {
    title: "The Code of Civil Procedure, 1908 (Order XXXVII — Summary Procedure on Liquidated Debts & Order XXI — Execution of Decrees)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
];

const FAQ_ITEMS = [
  {
    question: "Can a shipper legally deduct transit damage from a transporter's pending freight bills?",
    answer:
      "No. Under settled Supreme Court law (Union of India v. Raman Iron Foundry), an unadjudicated claim for transit damage or shortage is a claim for unliquidated damages. It does not constitute an admitted 'debt due' until assessed by a competent court or arbitral tribunal. A corporate shipper cannot act as a judge in its own cause and has no legal authority to unilaterally deduct or set off disputed damage claims against admitted freight invoices arising from separate trips or running vouchers.",
  },
  {
    question: "What is the legal effect if the consignee signed a Clean POD without recording damage?",
    answer:
      "A signed, stamped Proof of Delivery (POD) without qualifying remarks ('subject to verification', 'carton crushed', or 'seal broken') creates a statutory estoppel under Section 121 of the Bharatiya Sakshya Adhiniyam, 2023 (formerly Section 115 Indian Evidence Act) and establishes deemed acceptance under Section 42 of the Sale of Goods Act, 1930. The carrier's bailment obligations terminate upon unconditional acceptance. Belated claims of concealed damage or internal inventory shortage raised days or weeks later cannot be pinned on the transporter.",
  },
  {
    question: "What happens if the shipper claimed Marine Insurance and also deducted the loss from my freight?",
    answer:
      "This practice constitutes unlawful double-recovery and commercial fraud. Under Section 79 of the Marine Insurance Act, 1963 and the Constitution Bench ruling in Economic Transport Organisation v. Charan Spinning Mills, marine cargo insurance is a contract of strict indemnity. Once the insurer compensates the cargo owner, all recovery rights subrogate exclusively to the insurer. The shipper cannot retain insurance compensation AND deduct the same loss from the transporter's ledger. Transporters can compel disclosure of insurance claims and recover withheld freight with penal interest.",
  },
  {
    question: "What is the mandatory notice timeline under Section 16 of the Carriage by Road Act, 2007?",
    answer:
      "Section 16 mandates that no suit or other legal proceeding can be instituted against a common carrier for loss, damage, or non-delivery of goods unless a written notice of such claim is served on the carrier within 180 calendar days from the date of booking or delivery. If a shipper fails to serve this statutory notice within 180 days, their legal right to claim damages is permanently extinguished.",
  },
  {
    question: "How is a common carrier's financial liability limited under road transport rules?",
    answer:
      "Under Section 10 of the Carriage by Road Act, 2007 read with Rule 12 of the Carriage by Road Rules, 2011, a common carrier's liability is strictly limited to statutory caps (ten times the freight charged or prescribed per-kilogram values) unless the consignor expressly declared the true value of the consignment on the face of the Lorry Receipt (LR) and paid the agreed ad-valorem carrier insurance risk surcharge prior to transport.",
  },
  {
    question: "Can a transporter exercise a lien on subsequent cargo if past freight is withheld for alleged damages?",
    answer:
      "Yes. Under Section 14 of the Carriage by Road Act, 2007 read with Sections 170 and 171 of the Indian Contract Act, 1872, a common carrier has a statutory bailee's lien on goods in its possession for unpaid freight, demurrage, and lawful carriage charges. If properly documented with formal statutory notice, a transporter can hold subsequent consignments until disputed freight balances and illegal debit notes are cleared.",
  },
  {
    question: "Does MSME Samadhaan apply to transporters facing arbitrary debit notes?",
    answer:
      "Yes. If the transporter, fleet operator, or 3PL warehouse provider is registered under the MSMED Act with an active Udyam Certificate as a Micro or Small enterprise, the shipper is statutorily bound to release freight within 45 days under Section 15. Unilateral debit notes are non-est under MSME law, and overdue freight accrues mandatory compound interest with monthly rests at three times the RBI Bank Rate under Section 16.",
  },
  {
    question: "How does LegalRecovery assist transporters in reversing arbitrary transit debit notes?",
    answer:
      "LegalRecovery provides an automated institutional recovery rail for fleet operators, 3PL logistics firms, and express cargo carriers. We deploy advocate-drafted statutory demand notices citing Raman Iron Foundry and Section 16 Carriage by Road Act, demand marine insurance subrogation audit disclosures, execute BSA Section 63 electronic evidence dossiers, file MSME Samadhaan references, and initiate Order XXXVII summary suits across Pan-India commercial courts.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  image: `${SITE_URL}/blog_money_recovery.png`,
  author: {
    "@type": "Person",
    name: LEGAL_REVIEWER.name,
    jobTitle: LEGAL_REVIEWER.role,
    worksFor: {
      "@type": "Organization",
      name: "AMA Legal Solutions",
      url: "https://www.amalegalsolutions.com",
    },
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
  datePublished: "2026-11-16T10:00:00+05:30",
  dateModified: "2026-11-16T11:30:00+05:30",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}${PAGE_URL}`,
  },
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Transporters Defeat Arbitrary Transit Damage Freight Deductions",
  description:
    "A 5-step statutory and operational legal playbook for fleet owners, 3PL contractors, and common carriers to reverse arbitrary debit notes and recover withheld freight ledger balances.",
  totalTime: "P15D",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Inspect Delivery Receipt & Assert Clean POD Estoppel",
      text: "Retrieve original Bilty / Consignment Note and verify that the consignee signed without shortage remarks. Issue immediate formal debit rejection under BSA Section 121 and Sale of Goods Act Section 42.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Interrogate Marine Cargo Insurance Subrogation Status",
      text: "Serve a formal statutory interrogatory demanding disclosure of shipper's Marine Open Cargo policy claim, surveyor loss assessment, and Letter of Subrogation under Section 79 Marine Insurance Act to expose double recovery.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Invoke Supreme Court Raman Iron Foundry Doctrine",
      text: "Issue legal notice bifurcating admitted freight bills from disputed unliquidated damages. Notify shipper that unilateral set-off of unadjudicated claims against running freight ledgers is illegal per se.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Compile Electronic BSA Section 63 Evidence Dossier",
      text: "Extract Fastag toll timestamps, GPS route playback, dock CCTV logs, and weighbridge slips to prove intact transit seal integrity and absence of carrier negligence under Carriage by Road Act Section 13.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Escalate via MSMED Act 3x RBI Interest & Order XXXVII Summary Suit",
      text: "File statutory claim before Micro & Small Enterprise Facilitation Council (MSEFC) for compound penal interest and initiate Order XXXVII summary suit in Commercial Court for immediate freight decree.",
    },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
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
      name: "Logistics, Transporter & Freight Recovery Hub",
      item: `${SITE_URL}/industries/logistics-freight-3pl-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Transit Damage & Shortage Debit Defense",
      item: `${SITE_URL}${PAGE_URL}`,
    },
  ],
};

export default function ShipperTransitDamageDebitDefensePage() {
  return (
    <>
      {/* JSON-LD Schemas */}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Hero Section */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            {/* Eyebrow Badge */}
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>§6.9 IND-09 Logistics &amp; 3PL Recovery</span>
              <span>&bull;</span>
              <span>Carriage by Road Act 2007</span>
              <span>&bull;</span>
              <span>SC Raman Iron Doctrine</span>
            </div>

            {/* Main Single H1 */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {EXACT_H1}
            </h1>

            {/* Executive Statutory Summary Box */}
            <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer &bull; 3PL &amp; Fleet Protection
              </span>
              Under Supreme Court authority in{" "}
              <em className="text-white font-semibold">Union of India v. Raman Iron Foundry</em>, corporate
              shippers cannot unilaterally deduct unliquidated transit damage or shortage allegations from admitted
              freight ledgers. Where a clean POD was signed, statutory estoppel bars delayed shortage claims.
              Furthermore, claiming transit insurance while debiting the transporter constitutes actionable double-recovery
              fraud. Transporters operating under our{" "}
              <Link
                href="/industries/logistics-freight-3pl-recovery"
                className="text-red-400 hover:text-red-300 underline font-bold"
              >
                Logistics &amp; 3PL Freight Recovery Hub
              </Link>{" "}
              can legally nullify arbitrary debit notes and compel immediate freight release with 3x RBI compound interest.
            </div>

            {/* 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs text-slate-400 block font-semibold">
                  POD Estoppel
                </span>
                <span className="text-sm sm:text-lg md:text-xl font-black text-slate-100 block">
                  BSA s.121
                </span>
                <span className="text-[10px] text-slate-400 block">
                  Bars Delayed Shortages
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs text-slate-400 block font-semibold">
                  Double-Dip Bar
                </span>
                <span className="text-sm sm:text-lg md:text-xl font-black text-emerald-400 block">
                  100% Fraud
                </span>
                <span className="text-[10px] text-emerald-400/80 block">
                  Marine Insurance s.79
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs text-slate-400 block font-semibold">
                  Set-Off Legality
                </span>
                <span className="text-sm sm:text-lg md:text-xl font-black text-amber-400 block">
                  Void Ab Initio
                </span>
                <span className="text-[10px] text-amber-400/80 block">
                  SC Raman Iron Foundry
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs text-slate-400 block font-semibold">
                  Notice Limitation
                </span>
                <span className="text-sm sm:text-lg md:text-xl font-black text-red-400 block">
                  180 Days Max
                </span>
                <span className="text-[10px] text-red-400/80 block">
                  Carriage by Road s.16
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Layout */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          {/* Breadcrumbs Navigation */}
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { label: "Industries", href: "/industries" },
                {
                  label: "Logistics & Freight Recovery",
                  href: "/industries/logistics-freight-3pl-recovery",
                },
                {
                  label: "Transit Damage Debit Defense",
                  href: PAGE_URL,
                },
              ]}
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Left Sticky Table of Contents */}
            <ShipperDebitDefenseTableOfContents />

            {/* Right Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: The Double-Dip Crisis */}
              <section
                id="heading-double-dip-crisis"
                aria-labelledby="heading-double-dip-crisis-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                    1
                  </span>
                  <h2
                    id="heading-double-dip-crisis-title"
                    className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight"
                  >
                    The Corporate Double-Dip Racket: How Shippers Recover Twice for Transit Loss
                  </h2>
                </div>
                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Across India's arterial logistics corridors—from the industrial belts of Bhiwandi, Manesar,
                    Sriperumbudur, and Chakan to port terminals at JNPT and Mundra—commercial fleet operators and 3PL
                    contractors face an entrenched extortion mechanism: the arbitrary{" "}
                    <strong>transit damage and concealed shortage debit note</strong>.
                  </p>
                  <p>
                    When a consignment of high-value electronics, pharmaceuticals, FMCG goods, or automotive components
                    suffers even minor superficial transit damage, the corporate consignor or consignee typically reacts
                    by executing a calculated commercial double-dip:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                    <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                      <span className="text-xs font-bold text-red-400 uppercase tracking-wider block mb-1">
                        Recovery Stream 1 &bull; Corporate Insurer
                      </span>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                        The shipper files a Marine Transit Open Cargo claim with their public or private insurance underwriter
                        (New India, ICICI Lombard, Bajaj Allianz, HDFC ERGO). The insurer appoints an IRDAI-licensed surveyor,
                        assesses the loss, and remits 80% to 100% of the insured invoice value directly into the shipper's bank account.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-red-50 text-red-950 border border-red-200">
                      <span className="text-xs font-bold text-[#DC2626] uppercase tracking-wider block mb-1">
                        Recovery Stream 2 &bull; Transporter's Freight Ledger
                      </span>
                      <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                        Simultaneously, the shipper's internal accounts department issues an unverified, unilateral debit note
                        for the exact same cargo value—deducting ₹5,00,000 to ₹50,00,000 from the transporter's running freight ledger
                        covering dozens of unrelated, smoothly executed trips across other routes.
                      </p>
                    </div>
                  </div>
                  <p>
                    By pocketing insurance proceeds while wiping out the transporter's freight ledger, the shipper secures{" "}
                    <strong>double compensation</strong>—transforming a transit mishap into an illicit 100% profit center.
                    When the fleet operator objects, corporate procurement teams threaten commercial blacklisting or invoke
                    unconscionable boilerplate clauses in their standard Transport Service Agreements (TSAs).
                  </p>
                  <p>
                    This conduct is not merely commercially predatory; it violates fundamental principles of Indian contract
                    law, insurance subrogation jurisprudence, the Carriage by Road Act, 2007, and statutory MSMED protections.
                  </p>
                </div>
              </section>

              {/* Section 2: Statutory & Precedent Foundations */}
              <section
                id="heading-statutory-precedents"
                aria-labelledby="heading-statutory-precedents-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                    2
                  </span>
                  <h2
                    id="heading-statutory-precedents-title"
                    className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight"
                  >
                    Supreme Court Jurisprudence: Why Unilateral Damage Deductions Are Illegal
                  </h2>
                </div>
                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4 mb-6">
                  <p>
                    The Supreme Court of India has repeatedly declared that a contracting party cannot act as an
                    adjudicator in its own cause. An alleged breach of contract or transit damage claim remains a claim
                    for <em>unliquidated damages</em>—it does not transform into an admitted debt until judicially quantified.
                  </p>
                </div>

                <div className="space-y-4">
                  {PRECEDENTS.map((item, idx) => (
                    <div
                      key={idx}
                      className="border-l-4 border-[#DC2626] bg-slate-50 p-4 sm:p-5 rounded-r-xl border border-y-slate-200 border-r-slate-200"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h3 className="text-sm sm:text-base font-bold text-slate-900">
                          {item.title}
                        </h3>
                        <span className="text-[11px] font-mono text-slate-500 font-semibold bg-white px-2 py-0.5 rounded border border-slate-200">
                          {item.citation}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mb-2 font-medium">
                        {item.parties} &bull; {item.bench}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                        <strong className="text-slate-900 font-semibold">Judicial Holding: </strong>
                        {item.holding}
                      </p>
                      <div className="p-3 bg-red-50 rounded-lg border border-red-200 text-xs text-red-950 font-medium">
                        <strong className="text-[#DC2626] font-bold">Operational Takeaway for Transporters: </strong>
                        {item.takeaway}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 3: Statutory Defense Matrix */}
              <section
                id="heading-statutory-matrix"
                aria-labelledby="heading-statutory-matrix-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                    3
                  </span>
                  <h2
                    id="heading-statutory-matrix-title"
                    className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight"
                  >
                    Statutory Defense Matrix: Common Carrier Shields vs Shipper Tactics
                  </h2>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed mb-6">
                  Every common carrier, 3PL warehouse provider, and express logistics operator operates under a robust
                  statutory architecture. The table below outlines how Indian commercial statutes shield transporters
                  against predatory debit notes.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3 sm:p-3.5 font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                          Legal Remedy &amp; Shield
                        </th>
                        <th className="p-3 sm:p-3.5 font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                          Statutory Anchor
                        </th>
                        <th className="p-3 sm:p-3.5 font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                          Operational Trigger
                        </th>
                        <th className="p-3 sm:p-3.5 font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                          Transporter Relief
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {STATUTORY_DEFENSE_MATRIX.map((row, idx) => (
                        <tr
                          key={idx}
                          className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}
                        >
                          <td className="p-3 sm:p-3.5 font-bold text-slate-900">
                            {row.remedy}
                          </td>
                          <td className="p-3 sm:p-3.5 font-mono text-slate-600 text-xs">
                            {row.statute}
                          </td>
                          <td className="p-3 sm:p-3.5 text-slate-700 text-xs">
                            {row.applicability}
                          </td>
                          <td className="p-3 sm:p-3.5 text-xs text-slate-800 leading-relaxed">
                            <span
                              className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider mb-1 ${
                                row.tone === "emerald"
                                  ? "bg-emerald-100 text-emerald-800"
                                  : "bg-slate-200 text-slate-800"
                              }`}
                            >
                              Shield Enforced
                            </span>
                            <br />
                            {row.transporterRelief}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 4: Operational Escalation Protocol */}
              <section
                id="heading-escalation-flow"
                aria-labelledby="heading-escalation-flow-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                    4
                  </span>
                  <h2
                    id="heading-escalation-flow-title"
                    className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight"
                  >
                    The 5-Stage Statutory Escalation Protocol for Transporters &amp; Fleet Owners
                  </h2>
                </div>
                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4 mb-6">
                  <p>
                    When a shipper issues a debit note or withholds freight, silence or informal telephonic appeals are fatal.
                    Under Section 16 of the Carriage by Road Act and commercial evidence rules, fleet operators must
                    follow a rigorous 5-stage legal escalation sequence to preserve rights and enforce payment.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-900 text-white">
                        Stage 1 &bull; T+0 to T+72 Hours
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        Formal Written Debit Note Rejection &amp; Clean POD Notice
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Issue an immediate written communication formally rejecting the debit note. Attach color scans of the signed,
                      stamped Consignment Note / Bilty proving clean receipt. Expressly cite Section 121 BSA 2023 estoppel and
                      Section 42 Sale of Goods Act deemed acceptance. Warn that non-payment within 7 days will trigger legal remedies.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-900 text-white">
                        Stage 2 &bull; T+7 to T+14 Days
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        Statutory Marine Insurance Interrogatory Requisition
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Serve an official requisition under the Marine Insurance Act, 1963 demanding disclosure of: (1) Shipper's
                      Marine Open Policy number, (2) Insurance claim filing receipt, (3) Surveyor's Preliminary &amp; Final Assessment
                      Reports, and (4) Letter of Subrogation. This puts the shipper's management on notice that double-recovery fraud
                      has been detected and documented.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-900 text-white">
                        Stage 3 &bull; T+15 to T+30 Days
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        Advocate 15-Day Statutory Demand Notice (Raman Iron &amp; MSMED Act)
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Dispatch a comprehensive, advocate-vetted legal demand notice via Speed Post RPAD and registered corporate email.
                      Formally separate the admitted running freight ledger from the disputed damage allegation under the Supreme Court's
                      <em>Raman Iron Foundry</em> doctrine. For Udyam-registered transporters, demand 3x RBI compound interest and notify
                      the CFO and Statutory Auditors of Section 43B(h) income tax disallowance.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#DC2626] text-white">
                        Stage 4 &bull; T+31 to T+45 Days
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        Carrier Lien Activation on Subsequent Consignments
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Where the shipper tenders fresh cargo while withholding overdue freight, serve an immediate Notice of Carrier
                      Particular Lien under Section 14 Carriage by Road Act, 2007 read with Sections 170 and 171 of the Indian Contract
                      Act, 1872. Lawfully detain the fresh consignment at the destination transshipment hub until all admitted freight
                      arrears are wired in cleared funds.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-700 text-white">
                        Stage 5 &bull; T+46+ Days
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        Commercial Court Order XXXVII Summary Suit or MSME Samadhaan
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      If the shipper refuses to reverse the debit note, initiate dual-track judicial enforcement: file a claim before
                      the State MSEFC under Section 18 MSMED Act (where awards carry deemed decree status), or file a Summary Suit under
                      Order XXXVII CPC in the Commercial Court. Because the freight debt is liquidated and supported by Bilties, the shipper
                      cannot obtain leave to defend without pre-depositing the entire claim amount into court.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5: Decision Tree Flowchart */}
              <section
                id="heading-decision-tree"
                aria-labelledby="heading-decision-tree-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                    5
                  </span>
                  <h2
                    id="heading-decision-tree-title"
                    className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight"
                  >
                    Operational Decision Tree: Shipper Debit Note Defense Flow
                  </h2>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed mb-6">
                  Follow this standardized flowchart to determine the exact legal weapon based on whether a clean POD
                  was obtained, whether transit insurance was claimed, and whether the set-off impacts running bills.
                </p>

                {/* Desktop SVG Flowchart */}
                <div className="hidden md:block w-full overflow-x-auto bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-xl">
                  <svg
                    viewBox="0 0 960 480"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto"
                    width={960}
                    height={480}
                  >
                    {/* Background Nodes */}
                    <rect x="20" y="20" width="220" height="90" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <text x="130" y="52" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">
                      Shipper Deducts Damage
                    </text>
                    <text x="130" y="74" fill="#94A3B8" fontSize="11" textAnchor="middle">
                      Debit Note on Freight Ledger
                    </text>

                    {/* Arrow 1 */}
                    <path d="M240 65 H310" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 4" />

                    {/* Node 2: Decision POD */}
                    <rect x="310" y="20" width="220" height="90" rx="12" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" />
                    <text x="420" y="50" fill="#38BDF8" fontSize="12" fontWeight="bold" textAnchor="middle">
                      Condition of POD?
                    </text>
                    <text x="420" y="72" fill="#E2E8F0" fontSize="11" textAnchor="middle">
                      Clean Signed vs Endorsed
                    </text>

                    {/* Clean Branch Down */}
                    <path d="M420 110 V170" stroke="#38BDF8" strokeWidth="2" />
                    <rect x="310" y="170" width="220" height="100" rx="12" fill="#064E3B" stroke="#10B981" strokeWidth="2" />
                    <text x="420" y="198" fill="#10B981" fontSize="12" fontWeight="bold" textAnchor="middle">
                      CLEAN POD SIGNED
                    </text>
                    <text x="420" y="222" fill="#D1FAE5" fontSize="11" textAnchor="middle">
                      BSA s.121 Estoppel Bar
                    </text>
                    <text x="420" y="242" fill="#A7F3D0" fontSize="10" textAnchor="middle">
                      Sale of Goods s.42 Acceptance
                    </text>

                    {/* Arrow right from Clean */}
                    <path d="M530 220 H620" stroke="#10B981" strokeWidth="2" />

                    {/* Node 4: Insurer Subrogation Check */}
                    <rect x="620" y="170" width="310" height="100" rx="12" fill="#1E293B" stroke="#F59E0B" strokeWidth="2" />
                    <text x="775" y="198" fill="#F59E0B" fontSize="12" fontWeight="bold" textAnchor="middle">
                      MARINE INSURANCE CLAIMED?
                    </text>
                    <text x="775" y="222" fill="#FEF3C7" fontSize="11" textAnchor="middle">
                      Yes &rarr; s.79 Marine Subrogation Fraud
                    </text>
                    <text x="775" y="242" fill="#FDE68A" fontSize="10" textAnchor="middle">
                      Demand Survey Report &amp; Letter of Subrogation
                    </text>

                    {/* Branch Down to Raman Iron */}
                    <path d="M775 270 V330" stroke="#F59E0B" strokeWidth="2" />

                    {/* Final Action Node */}
                    <rect x="600" y="330" width="350" height="110" rx="12" fill="#450A0A" stroke="#DC2626" strokeWidth="2" />
                    <text x="775" y="360" fill="#EF4444" fontSize="13" fontWeight="bold" textAnchor="middle">
                      ENFORCE SC RAMAN IRON FOUNDRY
                    </text>
                    <text x="775" y="382" fill="#FEE2E2" fontSize="11" textAnchor="middle">
                      Unliquidated damages cannot be set off
                    </text>
                    <text x="775" y="402" fill="#FECACA" fontSize="10" textAnchor="middle">
                      Issue 15-Day Advocate Notice + MSMED 3x Interest
                    </text>
                    <text x="775" y="420" fill="#FCA5A5" fontSize="10" textAnchor="middle">
                      Carrier Lien on Fresh Consignments (s.14)
                    </text>

                    {/* Left Node: Endorsed Damage Branch */}
                    <path d="M530 65 H620" stroke="#EF4444" strokeWidth="2" />
                    <rect x="620" y="20" width="310" height="90" rx="12" fill="#1F2937" stroke="#EF4444" strokeWidth="2" />
                    <text x="775" y="48" fill="#F87171" fontSize="12" fontWeight="bold" textAnchor="middle">
                      DAMAGE ENDORSED AT DELIVERY
                    </text>
                    <text x="775" y="70" fill="#E5E7EB" fontSize="11" textAnchor="middle">
                      Carriage by Road s.10 Limited Liability
                    </text>
                    <text x="775" y="90" fill="#9CA3AF" fontSize="10" textAnchor="middle">
                      Cap claim to statutory max (Rule 12 ceiling)
                    </text>
                  </svg>
                </div>

                {/* Mobile Stacked Cards */}
                <div className="md:hidden space-y-3">
                  <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                    <span className="text-[10px] font-black uppercase tracking-wider text-red-400 block mb-1">
                      Step 1 &bull; POD Verification
                    </span>
                    <p className="text-xs font-bold text-white mb-1">
                      Check Proof of Delivery Condition
                    </p>
                    <p className="text-xs text-slate-300">
                      If clean POD signed with no seal tampering: invoke BSA s.121 Estoppel and Sale of Goods s.42. Delayed shortage claims are completely void.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block mb-1">
                      Step 2 &bull; Marine Insurance Audit
                    </span>
                    <p className="text-xs font-bold text-white mb-1">
                      Check for Insurance Double-Dip
                    </p>
                    <p className="text-xs text-slate-300">
                      If shipper claimed marine transit insurance: invoke Section 79 Marine Insurance Act. Retention of both insurance payout and freight deduction is actionable fraud.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 block mb-1">
                      Step 3 &bull; Legal Enforcement
                    </span>
                    <p className="text-xs font-bold text-white mb-1">
                      Raman Iron Foundry &amp; Carrier Lien
                    </p>
                    <p className="text-xs text-slate-300">
                      Unliquidated damages cannot be set off against running freight ledgers. Serve 15-day statutory demand, trigger MSMED 3x interest, and hold subsequent cargo under carrier lien.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6: Interactive Scenario Explorer */}
              <section
                id="heading-scenario-tabs"
                aria-labelledby="heading-scenario-tabs-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                    6
                  </span>
                  <h2
                    id="heading-scenario-tabs-title"
                    className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight"
                  >
                    Failure Mode Scenarios: Transporter Defense Blueprints
                  </h2>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  Select your specific operational crisis below to inspect the exact statutory counter-strategy,
                  governing case law, and benchmark recovery outcomes.
                </p>
                <ShipperDebitDefenseScenarioTabs />
              </section>

              {/* Section 7: Worked Financial Recovery Ledger */}
              <section
                id="heading-financial-ledger"
                aria-labelledby="heading-financial-ledger-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                    7
                  </span>
                  <h2
                    id="heading-financial-ledger-title"
                    className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight"
                  >
                    Worked Financial Ledger: Defeating a ₹7.85 Lakh Arbitrary Debit Note
                  </h2>
                </div>
                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4 mb-6">
                  <p>
                    Consider an authentic commercial case study: An express fleet operator executed a multi-trip haulage
                    contract for a multinational FMCG manufacturer. Following a monsoon transit between Gurgaon and Guwahati,
                    the consignee alleged water-seepage damage to 180 cartons of packaged food products valued at ₹7,85,000.
                  </p>
                  <p>
                    Rather than filing a carrier notice or conducting a joint survey, the FMCG manufacturer's finance team
                    issued a unilateral debit note and withheld ₹7,85,000 across 9 completely unrelated freight invoices.
                  </p>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3 font-bold uppercase tracking-wider text-[11px]">Ledger Item &amp; Fact</th>
                        <th className="p-3 font-bold uppercase tracking-wider text-[11px]">Shipper Debit Stance</th>
                        <th className="p-3 font-bold uppercase tracking-wider text-[11px]">Legal Defense Anchor</th>
                        <th className="p-3 font-bold uppercase tracking-wider text-[11px] text-right">Admitted Claim (&rupee;)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="bg-white">
                        <td className="p-3 font-bold text-slate-900">Trip LR #9842 Freight Bill</td>
                        <td className="p-3 text-slate-600">Withheld against trip damage</td>
                        <td className="p-3 text-slate-600">Clean POD signed; tarpaulin intact</td>
                        <td className="p-3 font-mono font-bold text-slate-900 text-right">₹1,45,000</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="p-3 font-bold text-slate-900">8 Unrelated Running Freight Bills</td>
                        <td className="p-3 text-red-600 font-semibold">Unilaterally debited &amp; frozen</td>
                        <td className="p-3 text-slate-600">SC Raman Iron Foundry: Illegal set-off</td>
                        <td className="p-3 font-mono font-bold text-slate-900 text-right">₹6,40,000</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-3 font-bold text-slate-900">Marine Insurance Double-Recovery</td>
                        <td className="p-3 text-red-600 font-semibold">Shipper received ₹6,28,000 claim</td>
                        <td className="p-3 text-slate-600">Marine Insurance s.79 Subrogation Bar</td>
                        <td className="p-3 font-mono text-emerald-700 font-bold text-right">Debit Null &amp; Void</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="p-3 font-bold text-slate-900">MSMED Act 3x Compound Interest</td>
                        <td className="p-3 text-slate-600">Refused by corporate shipper</td>
                        <td className="p-3 text-slate-600">MSMED Act s.16 (6.5% x 3 = 19.5% p.a.)</td>
                        <td className="p-3 font-mono font-bold text-emerald-700 text-right">+ ₹1,12,300</td>
                      </tr>
                      <tr className="bg-emerald-50 text-emerald-950 font-black">
                        <td className="p-3 uppercase tracking-wider" colSpan={3}>
                          Total Transporter Lawful Recovery Realized
                        </td>
                        <td className="p-3 font-mono text-right text-base text-emerald-800">
                          ₹8,97,300
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 text-white text-xs sm:text-sm leading-relaxed space-y-2">
                  <span className="font-bold text-red-400 uppercase tracking-widest block text-[10px]">
                    Ledger Audit Outcome
                  </span>
                  <p>
                    Upon receipt of our formal Statutory Notice exposing the Marine Insurance double-dip and citing the
                    Supreme Court's <em>Raman Iron Foundry</em> judgment, the shipper's corporate legal counsel instructed
                    immediate cancellation of the ₹7,85,000 debit note and disbursed the full outstanding principal of
                    ₹7,85,000 along with statutory MSMED interest, avoiding commercial court attachment.
                  </p>
                </div>
              </section>

              {/* Section 8: BSA 2023 Section 63 Evidence Dossier */}
              <section
                id="heading-evidence-checklist"
                aria-labelledby="heading-evidence-checklist-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                    8
                  </span>
                  <h2
                    id="heading-evidence-checklist-title"
                    className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight"
                  >
                    Transporter Evidence Dossier &amp; BSA 2023 Section 63 Electronic Audit Trail
                  </h2>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed mb-6">
                  To successfully defeat debit notes in court or before the MSEFC, transporters must maintain a tamper-proof
                  electronic audit trail admissible under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA).
                  Ensure the following 7 core evidentiary documents are preserved:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">
                      1
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">
                      Original Lorry Receipt (Bilty) with Non-Declaration of Value
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Proves whether special cargo value was declared and whether the consignor paid the ad-valorem carrier
                      risk surcharge, locking in Carriage by Road Act Section 10 limited liability.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">
                      2
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">
                      Clean Stamped Proof of Delivery (POD) Receipt
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      High-resolution scan and physical original of delivery challan signed by consignee warehouse manager
                      with company stamp, confirming receipt in good condition without remarks.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">
                      3
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">
                      Fastag Toll &amp; GPS Telematics Route Playback
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Electronic vehicle tracking reports showing continuous transit along standard highway corridors,
                      eliminating claims of unauthorized halts, diversions, or en-route transshipment.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">
                      4
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">
                      E-Way Bill Part B Verification &amp; Toll Logs
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Valid GST E-Way Bill matching vehicle registration numbers, driver details, and unexpired validity
                      windows, corroborating compliance with statutory transportation rules.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">
                      5
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">
                      Loading &amp; Unloading Weighbridge Slips
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Gross, tare, and net weighbridge printouts at loading and unloading gates proving that gross weight
                      remained unchanged throughout transit, disproving pilferage or shortage claims.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">
                      6
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">
                      Immediate Written Debit Note Rejection (72-Hour Rule)
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Email dispatch logs and formal courier receipts demonstrating that the transporter immediately
                      disputed and refused the debit note, preventing claims of implied consent or acquiescence.
                    </p>
                  </div>
                </div>

                <div className="mt-4 p-4 rounded-xl bg-red-50 border border-red-200 text-xs sm:text-sm text-red-950 font-medium">
                  <strong className="text-[#DC2626] font-bold">BSA Section 63 Compliance: </strong>
                  All telematics records, GPS audit logs, and email correspondence must be accompanied by an advocate-vetted
                  electronic certificate under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 to ensure unquestioned admissibility
                  before Commercial Courts and Arbitral Tribunals.
                </div>
              </section>

              {/* Section 9: Transporter Counter-Offensive */}
              <section
                id="heading-counter-offensive"
                aria-labelledby="heading-counter-offensive-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                    9
                  </span>
                  <h2
                    id="heading-counter-offensive-title"
                    className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight"
                  >
                    The Transporter Counter-Offensive: Carrier Lien, MSMED Act &amp; Summary Suit
                  </h2>
                </div>
                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    When corporate shippers weaponize financial scale to freeze freight ledgers, transporters possess three
                    overwhelming statutory remedies to seize commercial leverage and compel immediate settlement:
                  </p>
                  <div className="space-y-4 my-4">
                    <div className="p-4 sm:p-5 rounded-xl bg-slate-900 text-white border border-slate-800">
                      <h3 className="text-sm sm:text-base font-bold text-red-400 mb-2">
                        1. Common Carrier Particular Lien (Carriage by Road s.14 &amp; Contract Act s.170)
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        Under Section 14 of the Carriage by Road Act, 2007 read with Section 170 of the Indian Contract Act,
                        a common carrier is entitled to detain goods until all charges for carriage, storage, and demurrage
                        are paid. By serving an advocate-drafted Notice of Carrier Lien on the next consignment, the transporter
                        legally halts delivery to the buyer. If unpaid after notice, Section 14 empowers the carrier to auction
                        the goods to recover freight balances. Explore our dedicated{" "}
                        <Link
                          href="/transporter-carrier-lien-holding-cargo-unpaid-freight-carriage-act"
                          className="text-red-400 hover:text-red-300 underline font-semibold"
                        >
                          Transporter Carrier Lien Legal Guide
                        </Link>{" "}
                        and{" "}
                        <Link
                          href="/templates/transporter-freight-detention-carrier-lien-legal-notice"
                          className="text-red-400 hover:text-red-300 underline font-semibold"
                        >
                          Carrier Lien Notice Template
                        </Link>.
                      </p>
                    </div>

                    <div className="p-4 sm:p-5 rounded-xl bg-slate-900 text-white border border-slate-800">
                      <h3 className="text-sm sm:text-base font-bold text-amber-400 mb-2">
                        2. MSME Samadhaan Filing &amp; Section 43B(h) Corporate Tax Sanction
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        If the transporter holds Udyam registration, Sections 15–18 of the MSMED Act override all conflicting
                        commercial agreements. Unilateral debit notes are non-est, and unpaid freight attracts mandatory compound
                        interest at 3x the RBI Bank Rate. Furthermore, under Section 43B(h) of the Income Tax Act, corporate shippers
                        cannot claim tax deductions for purchases where MSME logistics payments are overdue, triggering immediate
                        disallowance on audited annual returns.
                      </p>
                    </div>

                    <div className="p-4 sm:p-5 rounded-xl bg-slate-900 text-white border border-slate-800">
                      <h3 className="text-sm sm:text-base font-bold text-emerald-400 mb-2">
                        3. Commercial Court Order XXXVII Summary Suit for Freight Recovery
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        Freight bills backed by signed Bilties, GST E-Way Bills, and clean POD receipts represent liquidated
                        commercial debts. Under Order XXXVII of the Code of Civil Procedure, 1908, the transporter files a Summary Suit
                        in the Commercial Court. The shipper cannot rely on unadjudicated damage counter-claims to obtain leave to
                        defend without pre-depositing the entire freight amount into court. Read our detailed guide on{" "}
                        <Link
                          href="/law/order-37-summary-suit-money-recovery"
                          className="text-emerald-400 hover:text-emerald-300 underline font-semibold"
                        >
                          Order XXXVII Summary Suit Money Recovery
                        </Link>.
                      </p>
                    </div>
                  </div>
                  <p>
                    Also review our operational playbooks on recovering{" "}
                    <Link
                      href="/truck-detention-halting-charges-container-demurrage-recovery"
                      className="text-blue-700 hover:text-blue-900 underline font-semibold"
                    >
                      Truck Detention &amp; Halting Charges
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/freight-forwarder-cha-customs-duty-ocean-freight-reimbursement-recovery"
                      className="text-blue-700 hover:text-blue-900 underline font-semibold"
                    >
                      Freight Forwarder Customs Duty &amp; Ocean Freight Reimbursements
                    </Link>.
                  </p>
                </div>
              </section>

              {/* Section 10: Frequently Asked Questions */}
              <section
                id="heading-faqs"
                aria-labelledby="heading-faqs-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-xs font-black shrink-0">
                    10
                  </span>
                  <h2
                    id="heading-faqs-title"
                    className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions: Transit Damage &amp; Shortage Debit Defense
                  </h2>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed mb-6">
                  Answers to the most critical commercial and statutory queries faced by 3PL logistics managers, fleet owners,
                  and common carriers confronting shipper debit notes.
                </p>

                <div className="space-y-3">
                  {FAQ_ITEMS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 transition-colors hover:border-slate-300"
                    >
                      <summary className="flex items-start justify-between gap-3 cursor-pointer list-none font-bold text-xs sm:text-sm md:text-base text-slate-900">
                        <span>{faq.question}</span>
                        <span className="text-slate-400 group-open:rotate-180 transition-transform duration-200 font-black text-lg shrink-0 mt-0.5">
                          &darr;
                        </span>
                      </summary>
                      <div className="mt-3 sm:mt-4 pt-3 border-t border-slate-200 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 11: Statutory Framework & Primary Sources */}
              <section
                id="heading-sources"
                aria-labelledby="heading-sources-title"
                className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200"
              >
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory Framework, Primary Sources &amp; Legislative References
                </h2>
                <ol className="sources list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-600">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="leading-relaxed break-words">
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-blue-700 hover:text-blue-900 underline font-medium"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ol>
                <p className="text-xs text-slate-500 italic mt-2">
                  Statutory verification notice: All provisions verified against the Carriage by Road Act 2007,
                  Carriage by Road Rules 2011, Marine Insurance Act 1963, Bharatiya Sakshya Adhiniyam 2023, and the
                  Supreme Court Constitution Bench ruling on marine subrogation (*Economic Transport Organisation*).
                </p>
              </section>

              {/* Section 12: Dual-Track B2B Conversion Funnel */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Initiate Freight Ledger Debit Defense Notice
                </h2>
                <ShipperDebitDefenseCTA variant="primary" />
              </section>

              {/* Section 13: Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Logistics &amp; Transport Debt Recovery Playbooks
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/industries/logistics-freight-3pl-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Logistics &amp; 3PL Debt Hub &rarr;
                  </Link>
                  <Link
                    href="/transporter-carrier-lien-holding-cargo-unpaid-freight-carriage-act"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Carrier Particular Lien &rarr;
                  </Link>
                  <Link
                    href="/truck-detention-halting-charges-container-demurrage-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Truck Halting &amp; Detention &rarr;
                  </Link>
                  <Link
                    href="/freight-forwarder-cha-customs-duty-ocean-freight-reimbursement-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Freight Forwarder &amp; CHA Recovery &rarr;
                  </Link>
                  <Link
                    href="/templates/transporter-freight-detention-carrier-lien-legal-notice"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Carrier Lien Notice Template &rarr;
                  </Link>
                  <Link
                    href="/hi/transport-bilty-truck-bhada-recovery-legal-notice"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Transport Bilty Truck Bhada Recovery (Hindi) &rarr;
                  </Link>
                  <Link
                    href="/recovery/unpaid-invoices"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Unpaid Business Invoices Recovery &rarr;
                  </Link>
                  <Link
                    href="/law/order-37-summary-suit-money-recovery"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Order XXXVII Summary Suit &rarr;
                  </Link>
                  <Link
                    href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Bulk Institutional Recovery Desk &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Global Contextual Recovery Guides */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
