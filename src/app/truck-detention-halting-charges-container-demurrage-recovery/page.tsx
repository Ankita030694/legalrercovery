import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import TruckDetentionTableOfContents from "./TruckDetentionTableOfContents";
import TruckDetentionScenarioTabs from "./TruckDetentionScenarioTabs";
import TruckDetentionCTA from "./TruckDetentionCTA";

export const revalidate = 86400;

const PAGE_URL = "/truck-detention-halting-charges-container-demurrage-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const PAGE_TITLE = "Recovering Truck Halting, Detention & Demurrage Dues";
const PAGE_DESCRIPTION =
  "Shippers clear freight while cutting ₹2,500–₹6,000/day truck halting and container demurrage dues. Prove gate arrival via GPS and E-Way logs to recover.";
const H1_TEXT =
  "Consignee Detained Your Trailers at Factory Gate for 10 Days and Refuses Halting Charges? GPS/FASTag Proof & Recovery Playbook";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: CANONICAL_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText(PAGE_TITLE),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: [`${SITE_URL}/blog_money_recovery.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
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
      name: "Logistics & 3PL Debt Recovery Hub",
      item: `${SITE_URL}/industries/logistics-freight-3pl-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Truck Halting & Container Demurrage Recovery",
      item: CANONICAL_URL,
    },
  ],
};

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: H1_TEXT,
  description: PAGE_DESCRIPTION,
  mainEntityOfPage: CANONICAL_URL,
  datePublished: "2026-11-16T12:00:00+05:30",
  dateModified: "2026-11-16T12:00:00+05:30",
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder",
    worksFor: {
      "@type": "LegalService",
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
  image: `${SITE_URL}/blog_money_recovery.png`,
  inLanguage: "en-IN",
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Fleet Operators and Transporters Recover Withheld Truck Halting and Demurrage Charges",
  description:
    "A 5-stage statutory and operational recovery playbook for fleet owners, trailer operators, and container transport companies to overcome unstamped POD excuses, prove arrival using BSA 2023 Section 63 telematics, and recover demurrage dues.",
  totalTime: "P45D",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Automated Hour-Zero Arrival Notice & Telematics Capture",
      text: "At vehicle reporting time, immediately capture AIS-140 GPS geofence entry timestamps and nearest NHAI FASTag toll plaza data, dispatching a formal Notice of Arrival via email to the consignee logistics team.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "GST E-Way Bill Validity Extension & Geo-Tagged Evidence",
      text: "Extend E-Way Bill validity on the government GST portal citing consignee detention, and record time-stamped geo-tagged photos and driver WhatsApp dispatches outside the factory gate.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Halting Invoice Generation & Free-Time Threshold Audit",
      text: "Upon eventual unloading, issue debit notes and GST tax invoices for halting days exceeding the contractual free unloading window (typically 24–48 hours) calculated at agreed per-diem rates.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "15-Day Advocate Statutory Demand Notice Under Contract Act s.73",
      text: "Serve a fact-verified demand notice backed by a Section 63 BSA 2023 electronic certificate, demanding full settlement of halting charges plus 18% commercial interest or MSMED Act Section 16 interest.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Legal Enforcement via Order XXXVII Summary Suit or MSME Samadhaan",
      text: "File an expedited Order XXXVII CPC Summary Suit in the Commercial Court or submit an MSEFC reference under Section 18 of the MSMED Act, enforcing carrier liens where subsequent consignments are in transit.",
    },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can a consignee legally refuse truck halting charges if the storekeeper did not stamp reporting time on the POD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The absence of a physical gatekeeper stamp does not extinguish a transporter's statutory right to compensation under Section 73 of the Indian Contract Act, 1872. Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, fleet operators can prove physical arrival and detention through AIS-140 GPS telematics geofencing, NHAI FASTag toll transaction logs, official GST E-Way Bill validity extensions, and contemporaneous delivery intimation emails.",
      },
    },
    {
      "@type": "Question",
      name: "What is the standard contractual free time allowed before truck halting charges begin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In standard Indian commercial transport contracts and Indian Banks' Association (IBA) approved transport norms, free unloading time is 24 hours for standard multi-axle trucks and 48 hours for heavy 40-foot flatbed trailers, hydraulic axles, or ISO container chassis. Halting charges accrue immediately upon the expiration of this free window on a per-calendar-day basis.",
      },
    },
    {
      "@type": "Question",
      name: "What per-diem halting rates are legally recognized in commercial freight disputes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Legally enforceable halting rates are governed first by written freight agreements, transport rate contracts, or Consignment Note (Bilty) terms. Where explicitly stipulated, courts enforce rates ranging from ₹2,000–₹3,500/day for 16-to-25-tonne trucks, ₹4,000–₹7,000/day for 40-foot prime movers, and ₹8,000–₹15,000/day for specialized bulk tankers or heavy-haul trailers. In the absence of an explicit rate, courts award reasonable market demurrage based on vehicle EMI, driver wages, insurance, and opportunity loss.",
      },
    },
    {
      "@type": "Question",
      name: "Who pays shipping line container detention charges when the consignee delays factory de-stuffing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The consignee (cargo owner) is legally obligated to indemnify the transporter or freight forwarder under Section 70 and 73 of the Indian Contract Act. Although shipping lines debit container detention directly to the logistics partner named in the Equipment Interchange Receipt (EIR), the transporter can recover the complete sum from the consignee by serving immediate demurrage pass-through notices and proving the vehicle was detained solely due to consignee factory bottlenecks.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if a GST E-Way Bill expires while a truck is detained at the factory gate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under Rule 138(10) of the CGST Rules, the transporter must extend E-Way Bill validity within 8 hours before or after its expiry on the GST portal, selecting 'Detention by Consignee' or 'Transshipment' as the reason. This statutory log creates an unassailable government audit record proving the vehicle was parked at the consignee's location, establishing conclusive proof of detention while insulating the carrier from Section 129 GST seizure penalties.",
      },
    },
    {
      "@type": "Question",
      name: "Can a transporter exercise a carrier lien on cargo if the consignee refuses halting charges?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under Section 13 of the Carriage by Road Act, 2007 read with Section 170 of the Indian Contract Act, a common carrier possesses a particular possessory lien on the goods for unpaid freight and legitimate charges incurred in relation to those goods. However, once cargo is discharged, the particular lien is lost unless a contractual general lien is incorporated in the Consignment Note (Bilty) terms, allowing the carrier to withhold subsequent consignments.",
      },
    },
    {
      "@type": "Question",
      name: "Can transport MSMEs claim halting dues with compound interest under the MSMED Act?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Registered transport and logistics enterprises holding valid Udyam Registration can file claims before the Micro and Small Enterprises Facilitation Council (MSEFC) under Section 18 of the MSMED Act, 2006. If the consignee fails to settle halting invoices within 45 days, the transporter is entitled to compound monthly interest at three times the RBI Bank Rate under Section 16 of the Act.",
      },
    },
    {
      "@type": "Question",
      name: "How can fleet operators recover cumulative halting deductions across dozens of corporate shippers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fleet operators can utilize LegalRecovery.in's institutional batch desk to upload disputed Bilty and halting deduction ledgers via CSV. Our legal recovery infrastructure automates multi-channel fact-verified demand notices, synchronizes Section 63 BSA telematics evidence, and coordinates pan-India Order XXXVII Summary Suits or MSEFC filings without crippling operational cash flow.",
      },
    },
  ],
};

export default function TruckDetentionRecoveryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
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

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>Logistics &amp; Fleet Debt Recovery</span>
            <span>&bull;</span>
            <span>BSA 2023 s.63 Telematics Proof</span>
            <span>&bull;</span>
            <span>Contract Act s.73 Halting Dues</span>
          </div>

          {/* H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {H1_TEXT}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Statutory Summary &bull; Transporter Halting Recovery SOP
            </span>
            Under Section 73 of the Indian Contract Act, 1872 and Carriage by Road Act, 2007, consignees detaining commercial vehicles beyond agreed free hours are liable for full per-diem halting damages. Corporate accounts routinely strike off ₹2,500–₹6,000/day detention bills claiming storekeepers never stamped reporting dates. Transport operators can bypass gatekeeper evasion using electronic telematics admissible under Section 63 of Bharatiya Sakshya Adhiniyam, 2023, enforceable through our{" "}
            <Link
              href="/industries/logistics-freight-3pl-recovery"
              className="text-red-400 hover:text-red-300 font-bold underline decoration-red-500 underline-offset-2"
            >
              Logistics &amp; 3PL Debt Recovery Hub
            </Link>{" "}
            via expedited Order XXXVII CPC Summary Suits and MSME Samadhaan references.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-slate-400 font-medium uppercase tracking-wider block">
                Standard Free Window
              </span>
              <p className="text-xl sm:text-2xl font-black text-slate-100">
                24–48 Hrs
              </p>
              <p className="text-[11px] text-slate-400">
                FTL &amp; Trailer Unloading Standard
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-slate-400 font-medium uppercase tracking-wider block">
                Statutory Halting Tariff
              </span>
              <p className="text-xl sm:text-2xl font-black text-emerald-400">
                &#8377;2.5K&#8211;6K
              </p>
              <p className="text-[11px] text-slate-400">
                Per-diem axle &amp; trailer rate
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-slate-400 font-medium uppercase tracking-wider block">
                Electronic Admissibility
              </span>
              <p className="text-xl sm:text-2xl font-black text-amber-400">
                BSA s.63
              </p>
              <p className="text-[11px] text-slate-400">
                AIS-140 GPS &amp; FASTag Geofence
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-slate-400 font-medium uppercase tracking-wider block">
                MSME Interest Penalty
              </span>
              <p className="text-xl sm:text-2xl font-black text-red-400">
                3x Bank Rate
              </p>
              <p className="text-[11px] text-slate-400">
                Compounded monthly under s.16
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Logistics & 3PL Hub",
                href: "/industries/logistics-freight-3pl-recovery",
              },
              {
                label: "Truck Halting & Demurrage Recovery",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        {/* 2-Column Split */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Column: Sticky TOC */}
          <TruckDetentionTableOfContents />

          {/* Right Column: Main Content */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview & The Unstamped POD Trap */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  The Unstamped POD Trap: How Factory Consignees Deny Halting Dues
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Every fleet operator, container hauler, and tanker contractor in India is intimately familiar with the deliberate factory gate bottleneck. A 40-foot multi-axle trailer carrying raw steel, automotive assemblies, FMCG pallets, or imported ISO containers arrives at the consignee&apos;s factory gate within scheduled transit time. The lorry driver hands the physical Consignment Note (Bilty / Lorry Receipt) to security. Instead of issuing a dock bay slip, plant security turns the driver away or directs the vehicle into a dusty perimeter queue spanning several kilometers.
                </p>
                <p>
                  The commercial malice occurs at the storekeeper desk. Factory receiving staff deliberately refuse to stamp the driver&apos;s Proof of Delivery (POD) with the exact <strong>&quot;Reporting Date &amp; Time&quot;</strong>. Days turn into a week as internal plant cranes break down, raw material silos overflow, or the consignee delays payment to the consignor. When the vehicle is finally offloaded on Day 9 or 10, the storekeeper stamps only the final <em>&quot;Material Received&quot;</em> date, leaving the arrival box completely blank.
                </p>
                <p>
                  When the transporter submits the final freight bill along with a contractual halting debit note (accruing at ₹3,500 to ₹6,000 per day), corporate accounts ruthlessly disallow the detention charges. Corporate finance issues a standard templated rejection: <em>&quot;Halting charges rejected due to lack of security gate entry timestamp on physical POD copy.&quot;</em>
                </p>

                <div className="bg-red-50 border border-red-200 rounded-xl p-4 sm:p-5 text-red-900 mt-4">
                  <p className="font-bold text-sm sm:text-base mb-1 flex items-center gap-2">
                    <span className="text-[#DC2626] text-lg">&bull;</span>
                    The Transporter Financial Squeeze
                  </p>
                  <p className="text-xs sm:text-sm text-red-800 leading-relaxed">
                    A multi-axle trailer carries monthly vehicle EMI liabilities of ₹65,000 to ₹95,000, daily driver/cleaner allowances, comprehensive road tax, and asset depreciation. When a manufacturing conglomerate detains 20 trailers for 8 days, it effectively extracts 160 vehicle-days of free mobile warehousing—inflicting cash-flow starvation on the fleet owner while unlawfully profiting from the transporter&apos;s working capital.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Statutory Framework */}
            <section
              id="heading-statutory-basis"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Framework: Contract Act Section 73 &amp; Carriage by Road Act
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Detention of commercial vehicles without compensation is an actionable civil and commercial wrong under Indian contract and commercial carriage jurisprudence. Transporters are not helpless at the mercy of internal corporate gatekeeping policies. Three primary statutory pillars govern the recovery of truck halting and container demurrage dues:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                    <span className="text-xs font-bold text-[#DC2626] uppercase tracking-wider block">
                      Contract Act s.73
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Mandates compensation for loss or damage caused by breach of contract. When a shipper or consignee breaches the contractually agreed 24/48-hour free unloading window, they are statutorily liable for direct damages arising from vehicle immobilization.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                    <span className="text-xs font-bold text-[#DC2626] uppercase tracking-wider block">
                      Carriage by Road Act 2007
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Sections 10, 11, and 13 define common carrier liabilities and possessory liens. The common carrier is entitled to tender delivery and claim all freight, demurrage, and warehousing fees incurred due to consignee refusal or delay in taking delivery.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                    <span className="text-xs font-bold text-[#DC2626] uppercase tracking-wider block">
                      MSMED Act 2006 s.15–18
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Logistics enterprises registered under Udyam are shielded by mandatory 45-day payment statutory deadlines. Overdue halting invoices accrue mandatory monthly compound interest at 3x the RBI Bank Rate under Section 16.
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-[#DC2626] pl-4 py-2 my-4 bg-slate-50">
                  <p className="text-xs sm:text-sm font-semibold text-slate-900">
                    Supreme Court Precedent on Demurrage &amp; Commercial Detention:
                  </p>
                  <p className="text-xs text-slate-600 mt-1 italic">
                    The Supreme Court of India in landmark carriage and port demurrage jurisprudence has consistently held that demurrage and vehicle detention charges are not mere penalties; they constitute compensatory damages in the nature of mobile warehouse rent and compensation for loss of earning capacity of commercial chattels immobilized by consignee default.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: BSA 2023 Section 63 Electronic Proof */}
            <section
              id="heading-bsa-proof"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Overcoming Gate Evasion: Proving Arrival via BSA 2023 Section 63
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  The critical breakthrough for Indian fleet owners is the legislative transition from the legacy Indian Evidence Act, 1872 to the <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>. Under <strong>Section 63 of BSA 2023</strong> (replacing Section 65B of the Indian Evidence Act), electronic records generated by automated computer systems, telematics, and server logs are fully admissible as primary electronic evidence without requiring subjective witness testimony.
                </p>
                <p>
                  To dismantle a corporate consignee&apos;s defense that <em>&quot;the lorry never reported on time,&quot;</em> LegalRecovery deploys an indisputable 4-layer electronic audit dossier:
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                    <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        1. AIS-140 Certified GPS Telematics &amp; Geofence Logs
                      </p>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        Vehicle Tracking Units (VTU) mandated on commercial vehicles log exact latitude/longitude coordinates. A virtual polygon geofence drawn around the consignee&apos;s factory boundary records the millisecond the trailer crossed into the perimeter, its engine idle hours, and stationary parking duration.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                    <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        2. NHAI NETC FASTag Toll Plaza Transaction Records
                      </p>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        The National Electronic Toll Collection (NETC) FASTag ledger provides tamper-proof, government-certified timestamps of the vehicle clearing the final highway toll booth adjacent to the consignee industrial cluster, conclusively proving physical proximity prior to reported gate arrival.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                    <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        3. GST E-Way Bill Validity Extension Logs (Rule 138(10))
                      </p>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        When factory unloading is delayed past distance validity, the transporter must log onto the government GST E-Way Bill portal to extend validity under reason code &quot;Consignee Detention&quot;. This statutory timestamp is an unassailable official government record that courts hold as conclusive proof of consignee custody.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                    <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        4. Contemporaneous Automated Email Notice of Arrival
                      </p>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        Transporter operations dispatch an immediate system-generated email to the consignee&apos;s logistics head and procurement team attaching the vehicle number, driver contact, and GPS location at Hour 0. Under Section 63 BSA, this delivery timestamp legally initiates the free unloading countdown.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Decision Tree Protocol */}
            <section
              id="heading-escalation-flow"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Decision Tree: Step-by-Step Transporter Halting Escalation Protocol
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                When a corporate factory stalls vehicle unloading, following a disciplined chronological escalation protocol preserves your carrier lien, creates electronic proof under BSA 2023, and sets up immediate summary recovery in court.
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block w-full overflow-x-auto bg-slate-900 p-6 rounded-xl border border-slate-800 mb-6">
                <svg
                  viewBox="0 0 850 360"
                  className="w-full h-auto"
                  width={850}
                  height={360}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Step 1 */}
                  <rect x="20" y="30" width="160" height="90" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                  <text x="100" y="60" fill="#EF4444" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 1: HOUR 0–24</text>
                  <text x="100" y="80" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">Gate Reporting</text>
                  <text x="100" y="100" fill="#94A3B8" fontSize="9" textAnchor="middle">GPS Geofence + FASTag</text>

                  {/* Arrow 1 */}
                  <path d="M180 75 H220" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Step 2 */}
                  <rect x="220" y="30" width="160" height="90" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                  <text x="300" y="60" fill="#F59E0B" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 2: HOUR 24–48</text>
                  <text x="300" y="80" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">Free-Time Expiry</text>
                  <text x="300" y="100" fill="#94A3B8" fontSize="9" textAnchor="middle">Formal Email Intimation</text>

                  {/* Arrow 2 */}
                  <path d="M380 75 H420" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Step 3 */}
                  <rect x="420" y="30" width="170" height="90" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                  <text x="505" y="60" fill="#3B82F6" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 3: DAY 3–7</text>
                  <text x="505" y="80" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">E-Way Bill Extension</text>
                  <text x="505" y="100" fill="#94A3B8" fontSize="9" textAnchor="middle">Rule 138(10) Portal Audit</text>

                  {/* Arrow 3 */}
                  <path d="M590 75 H630" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Step 4 */}
                  <rect x="630" y="30" width="190" height="90" rx="8" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="725" y="60" fill="#10B981" fontSize="11" fontWeight="bold" textAnchor="middle">STAGE 4: UNLOADING</text>
                  <text x="725" y="80" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">Conditional Delivery</text>
                  <text x="725" y="100" fill="#94A3B8" fontSize="9" textAnchor="middle">Debit Note + Halting Invoice</text>

                  {/* Branch down to Stage 5 */}
                  <path d="M725 120 V190" stroke="#DC2626" strokeWidth="2" />
                  <path d="M725 190 H560" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Step 5 */}
                  <rect x="250" y="150" width="310" height="100" rx="8" fill="#0F172A" stroke="#EF4444" strokeWidth="2" />
                  <text x="405" y="180" fill="#EF4444" fontSize="12" fontWeight="bold" textAnchor="middle">STAGE 5: LEGAL ENFORCEMENT</text>
                  <text x="405" y="202" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">Advocate Demand &amp; Summary Suit</text>
                  <text x="405" y="222" fill="#CBD5E1" fontSize="10" textAnchor="middle">15-Day BSA s.63 Notice &bull; Order XXXVII CPC / MSME 18%</text>

                  {/* Markers */}
                  <defs>
                    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 0 L 10 5 L 0 10 z" fill="#DC2626" />
                    </marker>
                  </defs>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="md:hidden space-y-3">
                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <span className="text-xs font-bold text-red-400 uppercase">Stage 1: Hour 0–24</span>
                  <p className="font-bold text-sm mt-1">Arrival Capture &amp; Telematics Geofence</p>
                  <p className="text-xs text-slate-400 mt-1">Log AIS-140 GPS entry, FASTag toll timestamps, and send instant Arrival Intimation Email to consignee.</p>
                </div>
                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <span className="text-xs font-bold text-amber-400 uppercase">Stage 2: Hour 24–48</span>
                  <p className="font-bold text-sm mt-1">Free-Time Expiry Notice</p>
                  <p className="text-xs text-slate-400 mt-1">Issue formal email alert stating standard free hours elapsed; per-diem halting starts accruing immediately.</p>
                </div>
                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <span className="text-xs font-bold text-sky-400 uppercase">Stage 3: Day 3–7</span>
                  <p className="font-bold text-sm mt-1">E-Way Bill Validity Extension</p>
                  <p className="text-xs text-slate-400 mt-1">Extend E-Way Bill on GST portal selecting &quot;Consignee Detention&quot; to establish an indisputable statutory government record.</p>
                </div>
                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <span className="text-xs font-bold text-emerald-400 uppercase">Stage 4: Post-Unloading</span>
                  <p className="font-bold text-sm mt-1">Halting Invoice &amp; Debit Note Service</p>
                  <p className="text-xs text-slate-400 mt-1">Immediately issue GST tax invoices and debit notes with attached GPS audit sheet for detention days.</p>
                </div>
                <div className="bg-slate-900 text-white p-4 rounded-xl border border-red-800">
                  <span className="text-xs font-bold text-red-400 uppercase">Stage 5: Legal Enforcement</span>
                  <p className="font-bold text-sm mt-1">Advocate Notice &amp; Order 37 Summary Suit</p>
                  <p className="text-xs text-slate-400 mt-1">Serve formal demand under Contract Act s.73 and BSA 2023 s.63; proceed to Commercial Court summary decree or MSME MSEFC.</p>
                </div>
              </div>
            </section>

            {/* Section 5: Statutory Matrix Table */}
            <section
              id="heading-liability-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Statutory Liability Matrix: Halting Rates, Clauses &amp; Legal Forums
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Evaluating recoverable heads of damage across vehicle segments, standard contractual terms, and statutory enforcement forums:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-900 text-white text-[11px] sm:text-xs uppercase tracking-wider font-semibold">
                    <tr>
                      <th className="py-3.5 px-4">Vehicle / Asset Segment</th>
                      <th className="py-3.5 px-4">Standard Free Time</th>
                      <th className="py-3.5 px-4">Daily Halting Range</th>
                      <th className="py-3.5 px-4">Statutory Hook</th>
                      <th className="py-3.5 px-4">Primary Legal Forum</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Multi-Axle FTL (16T–25T)
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">24 Hours</td>
                      <td className="py-3.5 px-4 font-semibold text-emerald-700">
                        &#8377;2,500 &#8211; &#8377;3,500/day
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        Contract Act s.73 / Carriage Act s.10
                      </td>
                      <td className="py-3.5 px-4">
                        <Link
                          href="/law/order-37-summary-suit-money-recovery"
                          className="text-[#DC2626] hover:underline font-semibold"
                        >
                          Order XXXVII Summary Suit
                        </Link>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        40ft Flatbed Trailer / Prime Mover
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">48 Hours</td>
                      <td className="py-3.5 px-4 font-semibold text-emerald-700">
                        &#8377;4,000 &#8211; &#8377;6,500/day
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        BSA 2023 s.63 Geofence Audit
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-slate-800">
                        Commercial Court / Civil Suit
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        ISO Shipping Container Chassis
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">Free Days on EIR</td>
                      <td className="py-3.5 px-4 font-semibold text-emerald-700">
                        Trailer Fee + Shipping Line Line-Rate ($50&#8211;$150/d)
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        Contract Act s.70 (Indemnity)
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-slate-800">
                        Commercial Summary Suit
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Chemical Tanker / Reefer Fleet
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">24 Hours</td>
                      <td className="py-3.5 px-4 font-semibold text-emerald-700">
                        &#8377;6,000 &#8211; &#8377;12,000/day
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        Genset Fuel + Specialized Chattel
                      </td>
                      <td className="py-3.5 px-4">
                        <Link
                          href="/tools/msme-delayed-payment-interest-calculator"
                          className="text-[#DC2626] hover:underline font-semibold"
                        >
                          MSEFC Reference (MSME Act)
                        </Link>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Hydraulic Axle / ODC Heavy Haul
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">Per Agreement</td>
                      <td className="py-3.5 px-4 font-semibold text-emerald-700">
                        &#8377;15,000 &#8211; &#8377;45,000/day
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        Liquidated Damages / Idling Clause
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-slate-800">
                        Section 9/11 Commercial Arbitration
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 6: Commercial Failure Modes Interactive Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Commercial Failure Modes: 4 Critical Fleet Detention Scenarios
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Click through the interactive matrix below to inspect the exact legal defense, statutory hook, and advocate strategy for each major commercial failure mode:
              </p>

              <TruckDetentionScenarioTabs />
            </section>

            {/* Section 7: Worked Financial Ledger */}
            <section
              id="heading-worked-example"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Worked Financial Ledger: ₹4.85L Halting &amp; Demurrage Recovery Audit
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Consider a real-world dispute handled by LegalRecovery involving an automotive steel consignment. A transporter deployed <strong>5x 40-foot flatbed trailers</strong> from Jamshedpur to a manufacturing facility in Greater Noida. The contract provided 48 hours of free unloading. Upon arrival on November 2, plant cranes were non-functional. Vehicles remained immobilized until the afternoon of November 11 (9 billable halting days per vehicle).
                </p>

                {/* Ledger Box */}
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 border border-slate-800 shadow-xl space-y-4">
                  <div className="flex flex-wrap items-center justify-between pb-3 border-b border-slate-800 gap-2">
                    <div>
                      <span className="text-xs uppercase font-bold tracking-wider text-emerald-400">
                        Case Study Breakdown
                      </span>
                      <p className="text-base sm:text-lg font-bold text-white">
                        5x 40ft Trailers Detained for 9 Days (45 Vehicle-Days)
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded bg-red-950/70 text-red-400 border border-red-800/60 text-xs font-bold">
                      Consignee Stamping Disallowance Overruled
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div className="bg-slate-800/60 p-3.5 rounded-xl space-y-1.5 border border-slate-700/60">
                      <span className="text-slate-400 font-semibold block">1. Contractual Base Halting Rate:</span>
                      <p className="text-white font-medium">45 vehicle-days &times; &#8377;4,500/day</p>
                      <p className="text-emerald-400 font-bold text-base">&#8377;2,02,500</p>
                    </div>

                    <div className="bg-slate-800/60 p-3.5 rounded-xl space-y-1.5 border border-slate-700/60">
                      <span className="text-slate-400 font-semibold block">2. Shipping Line Container Detention (2x 40ft Boxes):</span>
                      <p className="text-white font-medium">7 days past free time @ $100/day (&times; &#8377;88/USD)</p>
                      <p className="text-emerald-400 font-bold text-base">&#8377;1,23,200</p>
                    </div>

                    <div className="bg-slate-800/60 p-3.5 rounded-xl space-y-1.5 border border-slate-700/60">
                      <span className="text-slate-400 font-semibold block">3. Driver/Crew Daily Halting Batta Allowance:</span>
                      <p className="text-white font-medium">5 crews &times; 9 days &times; &#8377;800/day</p>
                      <p className="text-emerald-400 font-bold text-base">&#8377;36,000</p>
                    </div>

                    <div className="bg-slate-800/60 p-3.5 rounded-xl space-y-1.5 border border-slate-700/60">
                      <span className="text-slate-400 font-semibold block">4. E-Way Bill Extension Compliance Admin &amp; GST:</span>
                      <p className="text-white font-medium">Portal extension administrative penalty indemnity</p>
                      <p className="text-emerald-400 font-bold text-base">&#8377;15,000</p>
                    </div>
                  </div>

                  <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <p className="text-xs text-slate-300 font-bold uppercase tracking-wider">
                        Total Principal Halting Claim
                      </p>
                      <p className="text-xl sm:text-2xl font-black text-white">
                        &#8377;3,76,700
                      </p>
                    </div>
                    <div className="text-right sm:text-right">
                      <p className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                        + MSME Section 16 Interest (3x Bank Rate @ 19.5% p.a.)
                      </p>
                      <p className="text-lg sm:text-xl font-bold text-emerald-400">
                        Total Recovered: &#8377;4,85,940
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed italic">
                    Legal Outcome: Upon receiving a fact-verified notice backed by AIS-140 GPS heatmaps and GST E-Way Bill extension timestamps under BSA 2023 Section 63, the corporate debtor’s legal counsel advised immediate release of the ₹3.76L principal plus negotiated interest to prevent an Order XXXVII summary decree and disclosure in their Form 3CD tax audit under Section 43B(h).
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Evidence Dossier Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Evidence Dossier Checklist: Constructing an Indisputable Claim
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  To secure an unconditional summary judgment or fast MSEFC award, every halting claim prepared by LegalRecovery is fortified with an 8-point documentary dossier:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                    <span className="text-xs font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                      1. Consignment Note (Bilty / Lorry Receipt)
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Original copy incorporating standard free unloading terms (24/48 hours) and explicit per-diem detention rates.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                    <span className="text-xs font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                      2. AIS-140 GPS Geofence Telematics Report
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Raw server CSV log certified by telematics provider under BSA Section 63 showing vehicle entry timestamp, ignition status, and coordinates.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                    <span className="text-xs font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                      3. FASTag Toll Transaction Statement
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      NETC account transaction record showing vehicle crossing the last highway toll plaza preceding the consignee gate.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                    <span className="text-xs font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                      4. GST E-Way Bill Validity Extension Log
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Government GST portal printout showing extension timestamps under Rule 138(10) with reason code &quot;Consignee Detention&quot;.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                    <span className="text-xs font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                      5. Hour-Zero Notice of Arrival Email &amp; WhatsApp
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Contemporaneous dispatch to consignee logistics desk alerting that vehicle has reported and initiating the free-time clock.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                    <span className="text-xs font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                      6. Geo-Tagged Photos &amp; Weighbridge Slips
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Driver smartphone photos showing truck parked at factory gate with visible date/GPS watermark, plus tare/gross weight slips.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                    <span className="text-xs font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                      7. Separate GST Halting Debit Notes &amp; Invoices
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Itemized tax invoices with SAC code 9965 (Goods Transport Services) or 9973 (Leasing/Rental of Transport Equipment with operator).
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                    <span className="text-xs font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                      8. Formal Section 63 BSA 2023 Electronic Certificate
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Statutory electronic certificate executed by the transporter&apos;s IT head or fleet manager verifying the integrity of computer outputs.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9: Carrier Lien & Summary Suit Action */}
            <section
              id="heading-carrier-lien"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Enforcing Carrier Liens &amp; Summary Suits for Withheld Halting Dues
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  When corporate shippers clear the primary freight bill but arbitrarily excise the halting debit notes, fleet owners have two aggressive legal channels to force financial realization:
                </p>

                <div className="space-y-3 pt-2">
                  <div className="p-4 bg-slate-50 border-l-4 border-[#DC2626] rounded-r-xl">
                    <p className="font-bold text-slate-900 text-sm">
                      1. Carrier Lien Under Carriage by Road Act &amp; Contract Act
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      Under Section 13 of the Carriage by Road Act, 2007 read with Section 170 of the Indian Contract Act, a transporter has a particular lien over cargo for unpaid freight and halting expenses. If your written Consignment Note incorporates an express <strong>&quot;General Lien Clause&quot;</strong>, the transporter can legally detain <em>subsequent shipments</em> belonging to the same consignor or consignee until accumulated halting arrears across past trips are fully settled.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 border-l-4 border-slate-900 rounded-r-xl">
                    <p className="font-bold text-slate-900 text-sm">
                      2. Expedited Summary Suit Under Order XXXVII of the CPC
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      Because halting charges arise out of a written contract of carriage with fixed per-diem rates and verified electronic dates of arrival/departure, they constitute a liquidated money demand. Under{" "}
                      <Link
                        href="/law/order-37-summary-suit-money-recovery"
                        className="text-[#DC2626] hover:underline font-bold"
                      >
                        Order XXXVII of the Code of Civil Procedure (Summary Suit)
                      </Link>
                      , the defaulting consignee has no automatic right to defend the suit. Unless they deposit the disputed halting amount into court or prove a substantial bona fide defense within 10 days, the Commercial Court immediately decrees the full claim.
                    </p>
                  </div>
                </div>

                {/* Sibling and Hub Cross-Links */}
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Related Logistics Recovery Playbooks:
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <Link
                      href="/transporter-carrier-lien-holding-cargo-unpaid-freight-carriage-act"
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium transition-colors"
                    >
                      Carrier Lien &amp; Cargo Holding Playbook &rarr;
                    </Link>
                    <Link
                      href="/freight-forwarder-cha-customs-duty-ocean-freight-reimbursement-recovery"
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium transition-colors"
                    >
                      CHA &amp; Freight Forwarder ICEGATE Duty Recovery &rarr;
                    </Link>
                    <Link
                      href="/shipper-fake-transit-damage-shortage-debit-note-defense-transporter"
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium transition-colors"
                    >
                      Defeating Fake Transit Damage Debit Notes &rarr;
                    </Link>
                  </div>
                </div>

                {/* Dual-Track CTA Component */}
                <div className="pt-6">
                  <TruckDetentionCTA />
                </div>
              </div>
            </section>

            {/* Section 10: FAQ Accordions */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Frequently Asked Questions on Truck Halting &amp; Demurrage Claims
                </h2>
              </div>

              <div className="space-y-4">
                {FAQ_SCHEMA.mainEntity.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-xl p-4 sm:p-5 transition-colors hover:border-slate-300 open:bg-slate-50/50"
                  >
                    <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-sm sm:text-base list-none">
                      <span className="pr-4">{faq.name}</span>
                      <span className="w-5 h-5 rounded-full bg-slate-100 group-open:bg-[#DC2626] group-open:text-white flex items-center justify-center text-xs shrink-0 transition-colors">
                        &darr;
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.acceptedAnswer.text}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 11: Statutory Authorities & Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Primary Statutory Authorities &amp; Commercial Case Law References
                </h2>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  Every legal notice, summary suit, and arbitration pleading authored by LegalRecovery.in is founded on verified bare acts and landmark rulings of the Supreme Court of India:
                </p>

                <ul className="list-disc pl-5 space-y-2 pt-2">
                  <li>
                    <strong>Bharatiya Sakshya Adhiniyam, 2023 (Section 63):</strong> Admissibility of electronic records, computer outputs, and GPS telematics reports without mandatory mechanical oral testimony.{" "}
                    <a
                      href="https://www.indiacode.nic.in"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-[#DC2626] hover:underline"
                    >
                      India Code Statutory Portal &rarr;
                    </a>
                  </li>
                  <li>
                    <strong>Indian Contract Act, 1872 (Sections 70 &amp; 73):</strong> Obligation of person enjoying benefit of non-gratuitous act and compensation for loss caused by breach of contract.{" "}
                    <a
                      href="https://www.indiacode.nic.in"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-[#DC2626] hover:underline"
                    >
                      Bare Act Repository &rarr;
                    </a>
                  </li>
                  <li>
                    <strong>Carriage by Road Act, 2007 (Sections 10, 11 &amp; 13):</strong> Common carrier rights, liabilities for loss, and statutory common carrier liens for unpaid freight and demurrage.
                  </li>
                  <li>
                    <strong>CGST Rules, 2017 (Rule 138(10)):</strong> Procedure and statutory validity extension rules for E-Way Bills during transshipment and consignee detention.{" "}
                    <a
                      href="https://cbic.gov.in"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-[#DC2626] hover:underline"
                    >
                      CBIC GST Regulations &rarr;
                    </a>
                  </li>
                  <li>
                    <strong>Code of Civil Procedure, 1908 (Order XXXVII):</strong> Summary suits on contracts, debts, and liquidated demands arising out of commercial consignment notes.
                  </li>
                  <li>
                    <strong>Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15–18):</strong> Mandatory 45-day payment timeline and compound interest at three times RBI Bank Rate.
                  </li>
                </ul>

                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Advocate Attribution: Anuj Anand Malik (Advocate &amp; Founder, AMA Legal Solutions)</span>
                  <span>// TODO(reviewer): src/data/reviewers.ts is absent in this repository</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer Cross-Links */}
      <RelatedRecoveryGuides />
    </div>
  );
}
