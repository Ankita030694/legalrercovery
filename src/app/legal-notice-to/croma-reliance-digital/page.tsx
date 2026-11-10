import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";
import ElectronicsNoticeCTA from "./ElectronicsNoticeCTA";
import ElectronicsDeadlineCalculator from "./ElectronicsDeadlineCalculator";

export const metadata: Metadata = {
  title: "Croma / Reliance Digital Refused Refund? Legal Options",
  description:
    "Croma or Reliance Digital refusing replacement for a defective gadget? Warranty vs consumer rights, case law and a legal notice route.",
  alternates: {
    canonical: `${SITE_URL}/legal-notice-to/croma-reliance-digital`,
  },
  openGraph: {
    title: "Croma / Reliance Digital Refused Refund? Legal Options",
    description:
      "Croma or Reliance Digital refusing replacement for a defective gadget? Warranty vs consumer rights, case law and a legal notice route.",
    url: `${SITE_URL}/legal-notice-to/croma-reliance-digital`,
    type: "article",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const BASE_PRICE = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Electronics Retailer Refusing Replacement or Refund: What the Law Says",
  description:
    "Croma or Reliance Digital refusing replacement for a defective gadget? Warranty vs consumer rights, case law and a legal notice route.",
  author: {
    "@type": "Organization",
    name: "LegalRecovery Editorial Team",
    url: `${SITE_URL}/about#legal-editorial-team`,
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: `${SITE_URL}/#organization`,
  },
  datePublished: "2026-11-02T16:00:00+05:30",
  dateModified: "2026-11-02T16:00:00+05:30",
  inLanguage: "en-IN",
  about: [
    {
      "@type": "Organization",
      name: "Croma (Infiniti Retail Limited)",
    },
    {
      "@type": "Organization",
      name: "Reliance Digital (Reliance Retail Limited)",
    },
  ],
  citation: [
    "https://consumerhelpline.gov.in/",
    "https://e-jagriti.gov.in/",
    "https://www.livelaw.in/consumer-cases/government-amends-e-commerce-rules-to-strengthen-consumer-protection-550184",
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${SITE_URL}`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Consumer Complaints & Refunds",
      item: `${SITE_URL}/services/refunds-and-consumer-complaints`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Croma & Reliance Digital Dispute",
      item: `${SITE_URL}/legal-notice-to/croma-reliance-digital`,
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can Croma or Reliance Digital refuse to replace a defective TV after unboxing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Under Section 2(47) and Section 86 of the Consumer Protection Act, 2019, a retail seller cannot disclaim liability for delivering an inherently defective product simply because the box has been opened. If you report the defect within the advertised return window or within a reasonable timeframe, the retailer shares joint liability with the brand to provide a prompt replacement or full refund.",
      },
    },
    {
      "@type": "Question",
      name: "What should I do if the brand service center refuses to give me a DOA (Dead on Arrival) certificate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Demand a written service inspection report or job sheet documenting the exact technical defect observed by the technician. If the service engineer refuses to mark the unit as DOA and insists on panel replacement only, submit that job sheet directly to the store manager and corporate grievance officer alongside an email recording that the defect was present from delivery.",
      },
    },
    {
      "@type": "Question",
      name: "Is an electronics retailer liable if they say 'warranty is only provided by the manufacturer'?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Indian consumer commissions have repeatedly rejected the 'dealer immunity' argument. Privity of contract exists between you and the retailer who accepted your payment and issued the tax invoice. Under Section 86 of CPA 2019, the product seller cannot wash its hands of responsibility when a consumer is sold defective electronics.",
      },
    },
    {
      "@type": "Question",
      name: "How long do Croma and Reliance Digital have to resolve an escalated complaint under e-commerce rules?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Under Rule 4(5) of the Consumer Protection (E-Commerce) Rules, 2020, the resident Grievance Officer must acknowledge your grievance within 48 hours. Under Rule 5(4), the corporate entity must provide a complete redressal within one month from the date of receipt of the grievance.",
      },
    },
    {
      "@type": "Question",
      name: "How do extended warranty plans like Croma ZipCare or Reliance resQ legally differ from brand warranties?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Extended warranty plans like Croma ZipCare and Reliance resQ are standalone service contracts sold directly by the retailer. Denying repair, replacement, or compensation under an extended warranty plan constitutes a direct deficiency in service under Section 2(11) of CPA 2019, making the retailer solely responsible without involving the original manufacturer.",
      },
    },
    {
      "@type": "Question",
      name: "Can I send a legal notice to both Croma/Reliance Digital and the device manufacturer together?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, and this is the recommended legal strategy. Serving a joint statutory demand notice to both the retailer (Infiniti Retail Limited or Reliance Retail Limited) and the manufacturer (e.g., Samsung, HP, LG, Sony) holds them jointly and severally liable and prevents them from deflecting responsibility onto each other before you file on e-Jagriti.",
      },
    },
    {
      "@type": "Question",
      name: "Agar Croma ya Reliance Digital defective electronics badalne se mana kare toh consumer court me complaint kaise kare?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aap Government of India ke e-Jagriti portal (e-jagriti.gov.in) par online consumer complaint darj kar sakte hain. District Consumer Commission me ₹5 lakh tak ke claims par zero court fee hoti hai. Pehle 15-day statutory legal notice bhejna zaroori hota hai taaki settlement ka mauka mile aur aapka documentary evidence mazboot ho.",
      },
    },
  ],
};

export default function CromaRelianceDigitalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="min-h-screen bg-[#F8F9FB] text-[#111827] pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs
            items={[
              {
                label: "Consumer Refunds",
                href: "/services/refunds-and-consumer-complaints",
              },
              {
                label: "Croma & Reliance Digital Dispute",
                href: "/legal-notice-to/croma-reliance-digital",
              },
            ]}
          />

          {/* Hero Header */}
          <header className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-red-100 text-red-800 border border-red-200 mb-3">
              <span>Consumer Protection Act 2019</span>
              <span>•</span>
              <span>Retailer Joint Liability</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-[1.15] mb-3">
              Electronics Retailer Refusing Replacement or Refund: What the Law Says
            </h1>
            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
              Croma and Reliance Digital told you to chase the brand service center for a defective TV, laptop, or appliance? Here is why store policies cannot override Indian consumer law.
            </p>
          </header>

          {/* Block 1: Answer Box (40–60 words) */}
          <div className="bg-white border-l-4 border-l-[#DC2626] border border-slate-200 rounded-xl p-5 sm:p-6 shadow-sm mb-10">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center shrink-0 font-bold text-sm">
                §
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Immediate Legal Position (Answer Box)
                </span>
                <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-normal">
                  Under Section 86 and Section 2(47) of the Consumer Protection Act, 2019, an electronics retailer shares joint and several liability with the manufacturer for selling defective goods. A store cannot disclaim responsibility by insisting on brand service center visits. Serving a formal 15-day statutory legal notice establishes privity of contract and compels corporate resolution before filing on e-Jagriti.
                </p>
              </div>
            </div>
          </div>

          {/* Block 2: Hand-Authored SVG Diagram (The DOA Ping-Pong Trap Flowchart) */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-10">
            <div className="mb-4">
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                Visual Process Diagnostic
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
                Retailer DOA Ping-Pong Trap vs Statutory Escalation
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                How stores deflect defect liability to brand service centers, and how Section 86 CPA short-circuits the delay.
              </p>
            </div>

            <div className="w-full overflow-x-auto py-2">
              <svg
                viewBox="0 0 860 360"
                className="w-full h-auto min-w-[700px] select-none font-sans"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="8"
                    markerHeight="6"
                    refX="7"
                    refY="3"
                    orient="auto"
                  >
                    <polygon points="0 0, 8 3, 0 6" fill="#64748B" />
                  </marker>
                  <marker
                    id="arrowhead-red"
                    markerWidth="8"
                    markerHeight="6"
                    refX="7"
                    refY="3"
                    orient="auto"
                  >
                    <polygon points="0 0, 8 3, 0 6" fill="#DC2626" />
                  </marker>
                </defs>

                <rect x="20" y="30" width="160" height="90" rx="10" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="2" />
                <text x="100" y="60" textAnchor="middle" fill="#0F172A" fontSize="13" fontWeight="bold">Day 0–3</text>
                <text x="100" y="80" textAnchor="middle" fill="#334155" fontSize="11">Gadget Delivered / Unboxed</text>
                <text x="100" y="98" textAnchor="middle" fill="#DC2626" fontSize="11" fontWeight="600">Defect Discovered</text>

                <path d="M 180 75 L 230 75" stroke="#64748B" strokeWidth="2" markerEnd="url(#arrowhead)" />

                <rect x="235" y="25" width="200" height="100" rx="10" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="2" />
                <text x="335" y="55" textAnchor="middle" fill="#991B1B" fontSize="13" fontWeight="bold">Store Deflection</text>
                <text x="335" y="75" textAnchor="middle" fill="#7F1D1D" fontSize="11">"Contact Brand Service Center"</text>
                <text x="335" y="92" textAnchor="middle" fill="#B91C1C" fontSize="10">"Need DOA slip in 7 days"</text>
                <text x="335" y="108" textAnchor="middle" fill="#DC2626" fontSize="10" fontWeight="bold">Consumer trapped in ping-pong</text>

                <path d="M 435 75 L 485 75" stroke="#64748B" strokeWidth="2" markerEnd="url(#arrowhead)" />

                <rect x="490" y="25" width="190" height="100" rx="10" fill="#FFFBEB" stroke="#FDE68A" strokeWidth="2" />
                <text x="585" y="55" textAnchor="middle" fill="#92400E" fontSize="13" fontWeight="bold">Service Delay</text>
                <text x="585" y="75" textAnchor="middle" fill="#78350F" fontSize="11">Technician visit on Day 8–10</text>
                <text x="585" y="92" textAnchor="middle" fill="#B45309" fontSize="10">Refuses DOA; insists on repair</text>
                <text x="585" y="108" textAnchor="middle" fill="#92400E" fontSize="10" fontWeight="600">Store return window expired</text>

                <path d="M 335 125 L 335 180" stroke="#DC2626" strokeWidth="2.5" strokeDasharray="4 4" markerEnd="url(#arrowhead-red)" />
                <text x="345" y="155" fill="#DC2626" fontSize="11" fontWeight="bold">Bypass Store Trap</text>

                <rect x="20" y="195" width="820" height="140" rx="14" fill="#0F172A" stroke="#1E293B" strokeWidth="2" />
                <text x="50" y="225" fill="#38BDF8" fontSize="13" fontWeight="bold" letterSpacing="0.5">THE STATUTORY ESCALATION RAIL (CPA 2019)</text>

                <rect x="50" y="240" width="220" height="75" rx="8" fill="#1E293B" stroke="#334155" strokeWidth="1" />
                <text x="160" y="265" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="bold">1. Corporate Grievance</text>
                <text x="160" y="283" textAnchor="middle" fill="#94A3B8" fontSize="10">Infiniti / Reliance Grievance Officer</text>
                <text x="160" y="300" textAnchor="middle" fill="#38BDF8" fontSize="10" fontWeight="600">Mandatory 48h acknowledgement</text>

                <path d="M 270 277 L 315 277" stroke="#64748B" strokeWidth="2" markerEnd="url(#arrowhead)" />

                <rect x="320" y="240" width="230" height="75" rx="8" fill="#1E293B" stroke="#DC2626" strokeWidth="1.5" />
                <text x="435" y="265" textAnchor="middle" fill="#FCA5A5" fontSize="12" fontWeight="bold">2. Advocate Legal Notice</text>
                <text x="435" y="283" textAnchor="middle" fill="#E2E8F0" fontSize="10">Privity under Section 86 CPA</text>
                <text x="435" y="300" textAnchor="middle" fill="#F87171" fontSize="10" fontWeight="600">15-day statutory demand period</text>

                <path d="M 550 277 L 595 277" stroke="#64748B" strokeWidth="2" markerEnd="url(#arrowhead)" />

                <rect x="600" y="240" width="220" height="75" rx="8" fill="#1E293B" stroke="#334155" strokeWidth="1" />
                <text x="710" y="265" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="bold">3. e-Jagriti Digital Filing</text>
                <text x="710" y="283" textAnchor="middle" fill="#94A3B8" fontSize="10">District Consumer Commission</text>
                <text x="710" y="300" textAnchor="middle" fill="#34D399" fontSize="10" fontWeight="600">Refund + 9% interest + damages</text>
              </svg>
            </div>
          </div>

          {/* Block 3: Key Statutory Facts & Warranty Rights Comparison Table */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-10">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
              Statutory Matrix
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
              Electronics Retailer vs Manufacturer Statutory Liability Matrix
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <caption className="sr-only">
                  Electronics Retailer vs Manufacturer Statutory Liability Matrix
                </caption>
                <thead>
                  <tr className="border-b-2 border-slate-200 bg-slate-50">
                    <th scope="col" className="py-2.5 px-3 font-bold text-slate-900">
                      Dispute Parameter
                    </th>
                    <th scope="col" className="py-2.5 px-3 font-bold text-slate-900">
                      Store Policy Claim
                    </th>
                    <th scope="col" className="py-2.5 px-3 font-bold text-slate-900">
                      Statutory Legal Position (CPA 2019)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr>
                    <th scope="row" className="py-2.5 px-3 font-semibold text-slate-900">
                      7-Day DOA Return Limit
                    </th>
                    <td className="py-2.5 px-3">
                      No store returns after 7 days; customer must contact brand service center.
                    </td>
                    <td className="py-2.5 px-3 text-emerald-800 bg-emerald-50/50 font-medium">
                      Store policies cannot contract out of CPA 2019. Inherent defects reported promptly establish deficiency in service; 2-year limitation period applies.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="py-2.5 px-3 font-semibold text-slate-900">
                      Product Seller Liability
                    </th>
                    <td className="py-2.5 px-3">
                      "We are only an authorized dealer; warranty is issued by manufacturer."
                    </td>
                    <td className="py-2.5 px-3 text-emerald-800 bg-emerald-50/50 font-medium">
                      Section 86 CPA 2019: Product seller is liable if it failed to exercise reasonable care, or for deficiency in service under privity of sales contract.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="py-2.5 px-3 font-semibold text-slate-900">
                      Grievance Acknowledgment
                    </th>
                    <td className="py-2.5 px-3">
                      Standard automated response tickets or call center assurances.
                    </td>
                    <td className="py-2.5 px-3 text-emerald-800 bg-emerald-50/50 font-medium">
                      Rule 4(5) E-Commerce Rules 2020: Grievance Officer must acknowledge within 48 hours and resolve within 1 month.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="py-2.5 px-3 font-semibold text-slate-900">
                      Extended Warranty Plans
                    </th>
                    <td className="py-2.5 px-3">
                      Subject to fine-print exclusions, depreciation clauses, or partner delays.
                    </td>
                    <td className="py-2.5 px-3 text-emerald-800 bg-emerald-50/50 font-medium">
                      Croma ZipCare and Reliance resQ are direct service contracts. Denial is actionable deficiency under Section 2(11) directly against the retailer.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="py-2.5 px-3 font-semibold text-slate-900">
                      Consumer Forum Jurisdiction
                    </th>
                    <td className="py-2.5 px-3">
                      Store terms often specify exclusive jurisdiction in Mumbai.
                    </td>
                    <td className="py-2.5 px-3 text-emerald-800 bg-emerald-50/50 font-medium">
                      Section 34(2)(d) CPA 2019: Consumers can file where they reside or work; jurisdiction clauses restricting this are void as unfair contracts.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="py-2.5 px-3 font-semibold text-slate-900">
                      Filing Fee on e-Jagriti
                    </th>
                    <td className="py-2.5 px-3">Not applicable to store arbitration.</td>
                    <td className="py-2.5 px-3 text-emerald-800 bg-emerald-50/50 font-medium">
                      Nil fee up to ₹5 Lakh claim value. District Commission pecuniary limit is ₹50 Lakh (Consumer Protection Rules 2021).
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Conversational Q&A Sequence (H2s 1 to 5) */}
          <div className="space-y-8 mb-10">
            {/* H2 1 */}
            <section
              id="service-center-ping-pong"
              aria-labelledby="heading-service-center-ping-pong"
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
            >
              <h2
                id="heading-service-center-ping-pong"
                className="text-lg sm:text-xl font-bold text-slate-900 mb-3"
              >
                Why Retailers Divert Defective Products to Service Centers
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3">
                Electronics retailers direct consumers to brand service centers to exhaust their internal 7-day return windows and transfer the financial burden of replacements to manufacturers. Under Indian contract law and the Consumer Protection Act, 2019, your purchase transaction is with the retailer who issued the tax invoice, making their attempt to evade return obligations an unfair trade practice.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                When you buy a TV, laptop, or appliance from Croma (Infiniti Retail) or Reliance Digital (Reliance Retail), staff frequently claim that once unboxed, returns require a brand technician DOA slip. In reality, brand technicians often take 7 to 10 days to inspect the unit, pushing you past the store window and offering part repairs rather than a fresh unit replacement.
              </p>
            </section>

            {/* H2 2 */}
            <section
              id="seven-day-return-window-legality"
              aria-labelledby="heading-seven-day-return-window"
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
            >
              <h2
                id="heading-seven-day-return-window"
                className="text-lg sm:text-xl font-bold text-slate-900 mb-3"
              >
                Can Retailers Refuse Replacement Using 7-Day Store Windows?
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3">
                No, an electronics retailer cannot extinguish statutory consumer rights by enforcing a restrictive 7-day store exchange window. Under Section 2(47) of the Consumer Protection Act, 2019, refusing to replace or refund inherently defective goods constitutes an unfair trade practice, and consumer commissions routinely hold retailers liable regardless of internal store timelines.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Under Section 69 of CPA 2019, consumers have a full two-year limitation period from the date the cause of action arose to file before a Consumer Commission. An arbitrary 7-day store policy cannot extinguish statutory rights when a defect existed at delivery.
              </p>
            </section>

            {/* H2 3 */}
            <section
              id="doa-liability-retailer-vs-manufacturer"
              aria-labelledby="heading-doa-liability"
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
            >
              <h2
                id="heading-doa-liability"
                className="text-lg sm:text-xl font-bold text-slate-900 mb-3"
              >
                Who Is Liable for a Dead-on-Arrival Gadget?
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3">
                Both the retailer and the manufacturer are jointly and severally liable for a Dead-on-Arrival product under Chapter VI of the Consumer Protection Act, 2019. The retailer is accountable under privity of contract as the product seller under Section 86, while the manufacturer is liable under Section 84 for manufacturing defects.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Under Section 16 of the Sale of Goods Act, 1930, goods sold carry an implied condition of merchantable quality. If a product fails upon unboxing, the retailer breached this condition and must provide an immediate replacement or full refund, seeking indemnification from the brand under their dealer contract.
              </p>
            </section>

            {/* H2 4 */}
            <section
              id="service-center-refuses-doa-slip"
              aria-labelledby="heading-refuses-doa-slip"
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
            >
              <h2
                id="heading-refuses-doa-slip"
                className="text-lg sm:text-xl font-bold text-slate-900 mb-3"
              >
                What to Do When the Service Center Refuses a DOA Certificate
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3">
                If an authorized brand technician refuses to grant a DOA certificate and insists on opening the device for part replacement, you must immediately secure a copy of the official service job sheet documenting the observed fault. Then, send an urgent written escalation to the retailer's store manager and corporate grievance officer rejecting repairs on a brand-new device.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Record on the job sheet: <em>"Unit received defective upon delivery. Customer demands replacement unit; repair of brand-new gadget is not accepted."</em> An electronic copy sent to the retailer's grievance desk establishes proof of early reporting.
              </p>
            </section>

            {/* H2 5 */}
            <section
              id="extended-warranties-zipcare-resq"
              aria-labelledby="heading-zipcare-resq"
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
            >
              <h2
                id="heading-zipcare-resq"
                className="text-lg sm:text-xl font-bold text-slate-900 mb-3"
              >
                Extended Warranties Under Consumer Protection Law
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3">
                Extended warranties like Croma ZipCare and Reliance resQ Care Plans are direct, fee-based service contracts executed between the consumer and the retailer. Denying coverage or dragging out repairs beyond advertised timelines constitutes an actionable deficiency in service under Section 2(11) of the Consumer Protection Act, 2019, holding the retailer solely liable for replacement or compensation.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                When you purchase ZipCare or resQ, the retailer assumes independent contractual liability. If they fail to repair or replace the gadget within a reasonable timeframe (typically 14 to 21 days), consumer courts award full refunds of the purchase price plus compensation for harassment.
              </p>
            </section>
          </div>

          {/* Block 5: Interactive Client Island (Deadline Calculator) */}
          <ElectronicsDeadlineCalculator />

          {/* Conversational Q&A Sequence Continues (H2s 6 to 10) */}
          <div className="space-y-8 mb-10">
            {/* H2 6 */}
            <section
              id="consumer-commission-orders-croma-reliance"
              aria-labelledby="heading-commission-orders"
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
            >
              <h2
                id="heading-commission-orders"
                className="text-lg sm:text-xl font-bold text-slate-900 mb-3"
              >
                Consumer Commission Orders Against Croma &amp; Reliance
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Consumer Disputes Redressal Commissions across India consistently penalize Infiniti Retail Limited and Reliance Retail Limited for selling defective electronics and failing to provide timely replacements or refunds. Courts routinely dismiss dealer immunity defenses and award full invoice refunds with 9% interest and litigation costs.
              </p>

              <div className="space-y-3 mb-4">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <span className="font-bold text-slate-900 text-xs sm:text-sm">
                      Dr. Manish M. Bagi v. The Infinity Retail Limited (Croma) & Anr.
                    </span>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200 w-fit">
                      Full Refund + 9% Interest Awarded
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono mb-1">
                    DCDRC Belagavi (CC/239/2021) • Product: Defective 43" Smart LED TV
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Croma argued that as a dealer it bore no liability and only Xiaomi was accountable. The Belagavi District Commission rejected this defense, ordering Croma and Xiaomi jointly and severally to refund the full price of ₹34,999 with 9% interest, plus ₹5,000 compensation and ₹3,000 costs.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <span className="font-bold text-slate-900 text-xs sm:text-sm">
                      Kanika v. Infiniti Retail Ltd. (Croma) & Ors.
                    </span>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200 w-fit">
                      Laptop Price Refund + Compensation
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono mb-1">
                    DCDRC Chandigarh (CC/160/2021) • Product: Defective HP Laptop
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A laptop developed keyboard and motherboard defects shortly after purchase. The Chandigarh District Commission held Infiniti Retail Limited and HP jointly liable for deficiency in service, ordering a complete refund alongside compensation and litigation expenses.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <span className="font-bold text-slate-900 text-xs sm:text-sm">
                      Complainant v. Reliance Retail Limited (Reliance Digital) & Anr.
                    </span>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200 w-fit">
                      ₹49,990 Full TV Refund + Costs
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono mb-1">
                    District Consumer Commission, Gautam Buddh Nagar (Noida) • Product: Faulty Television
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The forum directed Reliance Digital to refund the full invoice amount of ₹49,990 with interest and compensation after customer care and service centers delayed repairs during warranty.
                  </p>
                </div>
              </div>
            </section>

            {/* H2 7 */}
            <section
              id="grievance-officer-escalation"
              aria-labelledby="heading-grievance-officer"
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
            >
              <h2
                id="heading-grievance-officer"
                className="text-lg sm:text-xl font-bold text-slate-900 mb-3"
              >
                Escalating to Grievance Officers of Croma &amp; Reliance
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Under Rule 4(5) of the Consumer Protection (E-Commerce) Rules, 2020, both Infiniti Retail Limited and Reliance Retail Limited are legally required to appoint a designated Resident Grievance Officer in India who must acknowledge complaints within 48 hours and provide redressal within one month.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 text-sm mb-1">Infiniti Retail Limited (Croma)</div>
                  <p className="text-slate-600 mb-1">Registered: Unit No. 701 & 702, 7th Floor, Kaledonia, Sahar Road, Andheri East, Mumbai 400069.</p>
                  <p className="text-slate-800 font-mono font-semibold">Grievance: grievance.officer@croma.com</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 text-sm mb-1">Reliance Retail Limited (Reliance Digital)</div>
                  <p className="text-slate-600 mb-1">Registered: 3rd Floor, Court House, Lokmanya Tilak Marg, Dhobi Talao, Mumbai 400002.</p>
                  <p className="text-slate-800 font-mono font-semibold">Grievance: grievance.officer@reliancedigital.in</p>
                </div>
              </div>
            </section>

            {/* H2 8 */}
            <section
              id="when-and-how-to-serve-legal-notice"
              aria-labelledby="heading-serve-legal-notice"
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
            >
              <h2
                id="heading-serve-legal-notice"
                className="text-lg sm:text-xl font-bold text-slate-900 mb-3"
              >
                Serving an Advocate Legal Notice to Electronics Retailers
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3">
                You should serve an Advocate Legal Notice as soon as the store manager or customer support refuses a replacement in writing, or when 7 days elapse without a concrete resolution from the brand service center. The notice should be served jointly on the retailer's registered corporate office and the brand's legal desk, giving them 15 statutory days to rectify the deficiency.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                A formal notice establishes privity of contract under Section 86 of CPA 2019 and creates electronic documentary evidence under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA). Corporate legal desks routinely authorize replacements at this stage to avoid recorded commission orders.
              </p>
            </section>

            {/* H2 9 */}
            <section
              id="file-case-e-jagriti"
              aria-labelledby="heading-file-e-jagriti"
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
            >
              <h2
                id="heading-file-e-jagriti"
                className="text-lg sm:text-xl font-bold text-slate-900 mb-3"
              >
                Filing Against Croma or Reliance Digital on e-Jagriti
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3">
                If the retailer ignores your 15-day legal notice, you can file a consumer complaint digitally on the Government of India's e-Jagriti portal (e-jagriti.gov.in). The portal replaced the older e-Daakhil system across all District, State, and National Consumer Commissions, offering seamless online filing with zero court fees for claims up to ₹5 Lakh.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Under Section 34(2)(d) of CPA 2019, you can file in the District Commission where you reside. Upload your invoice, job sheets, legal notice, and postal tracking receipts. District Commissions possess pecuniary jurisdiction up to ₹50 Lakh under the Consumer Protection Rules, 2021.
              </p>
            </section>

            {/* H2 10 */}
            <section
              id="recovery-scope-limitations"
              aria-labelledby="heading-recovery-scope"
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
            >
              <h2
                id="heading-recovery-scope"
                className="text-lg sm:text-xl font-bold text-slate-900 mb-3"
              >
                Scope &amp; Limits: What LegalRecovery Can and Cannot Do
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                We believe in complete transparency regarding our legal services. Our platform drafts and delivers enforceable statutory notices under Indian consumer law, but there are clear boundaries to what pre-litigation notices can achieve.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200">
                  <div className="font-bold text-emerald-950 text-sm mb-2">What LegalRecovery Does</div>
                  <ul className="space-y-1.5 text-emerald-900">
                    <li>• Drafts an advocate legal notice citing Section 86 CPA 2019 and verified commission precedents.</li>
                    <li>• Impleads both the retail chain (Infiniti / Reliance) and device manufacturer for joint liability.</li>
                    <li>• Delivers via Speed Post and registered corporate email directly to the resident Grievance Officer.</li>
                    <li>• Prepares an evidence dossier compliant with Section 63 of BSA 2023.</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200">
                  <div className="font-bold text-rose-950 text-sm mb-2">What LegalRecovery Cannot Do</div>
                  <ul className="space-y-1.5 text-rose-900">
                    <li>• We cannot physically inspect your gadget or certify hardware faults without an engineer report.</li>
                    <li>• We cannot claim replacement if damage resulted from accidental physical mishandling or water spill.</li>
                    <li>• We do not represent you in physical court hearings; we provide drafted pleadings for self-representation.</li>
                    <li>• We cannot enforce immediate overnight refunds; corporate compliance typically requires 7 to 15 days.</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Block 7: Worked Illustrative Scenario */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm mb-10">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
              Worked Example
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
              How Karthik Resolved a ₹74,990 Smart TV DOA Dispute with Croma
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-slate-700">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900 block mb-0.5">1. The Dispute: Defective Panel on Day 2</span>
                <p>Karthik purchased a 55-inch Samsung QLED TV (₹74,990) from Croma Bengaluru. Within 48 hours, green vertical lines appeared on the display. Croma store staff refused an exchange, stating store policy required a brand technician DOA report.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900 block mb-0.5">2. The Ping-Pong Trap: Brand Delays & Repair Offer</span>
                <p>The brand technician visited on Day 8 (after Croma's 7-day store window expired) and refused a DOA slip, offering panel repair instead. Croma staff then claimed the exchange window had lapsed.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900 block mb-0.5">3. The Notice: Joint Demand Served</span>
                <p>An Advocate Legal Notice was served jointly on Infiniti Retail Limited and Samsung, establishing privity under Section 86 CPA 2019, attaching inspection job sheets, and demanding a sealed replacement or full refund within 15 days.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200 text-emerald-950 font-medium">
                <span className="font-bold text-emerald-900 block mb-0.5">4. The Resolution: Fresh Unit Replacement</span>
                <p>On Day 11 after notice delivery, Croma's corporate desk in Mumbai authorized an immediate replacement with a brand-new sealed TV and provided a ₹5,000 store voucher for the inconvenience.</p>
              </div>
            </div>
          </div>

          {/* Block 8: BSA 2023 Section 63 Evidence Checklist */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm mb-10">
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider block mb-1">
              Evidence Dossier
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
              Section 63 BSA Electronic Evidence Checklist for Electronics Claims
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-4">
              Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, electronic evidence is admissible before consumer commissions when accompanied by a statutory certificate. Compile these records:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900 block">✓ Store Tax Invoice & Payment Receipt</span>
                <span className="text-slate-600 text-[11px]">Displaying GSTIN, date, serial number, and payment mode.</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900 block">✓ Delivery Challan & Unboxing Photos</span>
                <span className="text-slate-600 text-[11px]">Proving delivery date and defect demonstration photos/video.</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900 block">✓ Service Inspection Job Sheet</span>
                <span className="text-slate-600 text-[11px]">Documenting technician diagnosis, employee ID, and timestamps.</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900 block">✓ Store Refusal Email Trails</span>
                <span className="text-slate-600 text-[11px]">Written refusal records from store managers or customer support.</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900 block">✓ Extended Warranty Plan Document</span>
                <span className="text-slate-600 text-[11px]">Croma ZipCare or Reliance resQ certificate, if purchased.</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900 block">✓ Call Logs & IVR Details</span>
                <span className="text-slate-600 text-[11px]">Call duration records demonstrating repeated customer attempts.</span>
              </div>
            </div>
          </div>

          {/* Block 9: Conversational FAQs (H2 11 - plain conversational cards, no accordion per B5 DOM) */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm mb-10">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-5">
              Croma &amp; Reliance Digital Replacement FAQs
            </h2>
            <dl className="space-y-5 text-xs sm:text-sm">
              <div className="border-b border-slate-100 pb-4">
                <dt className="font-bold text-slate-900 mb-1">
                  Can Croma or Reliance Digital refuse to replace a defective TV after unboxing?
                </dt>
                <dd className="text-slate-700 leading-relaxed">
                  No. Under Section 2(47) and Section 86 of the Consumer Protection Act, 2019, a retail seller cannot disclaim liability for delivering an inherently defective product simply because the box has been opened. If you report the defect within the advertised return window or within a reasonable timeframe, the retailer shares joint liability with the brand to provide a prompt replacement or full refund.
                </dd>
              </div>

              <div className="border-b border-slate-100 pb-4">
                <dt className="font-bold text-slate-900 mb-1">
                  What should I do if the brand service center refuses to give me a DOA (Dead on Arrival) certificate?
                </dt>
                <dd className="text-slate-700 leading-relaxed">
                  Demand a written service inspection report or job sheet documenting the exact technical defect observed by the technician. If the service engineer refuses to mark the unit as DOA and insists on panel replacement only, submit that job sheet directly to the store manager and corporate grievance officer alongside an email recording that the defect was present from delivery.
                </dd>
              </div>

              <div className="border-b border-slate-100 pb-4">
                <dt className="font-bold text-slate-900 mb-1">
                  Is an electronics retailer liable if they say 'warranty is only provided by the manufacturer'?
                </dt>
                <dd className="text-slate-700 leading-relaxed">
                  Yes. Indian consumer commissions have repeatedly rejected the 'dealer immunity' argument. Privity of contract exists between you and the retailer who accepted your payment and issued the tax invoice. Under Section 86 of CPA 2019, the product seller cannot wash its hands of responsibility when a consumer is sold defective electronics.
                </dd>
              </div>

              <div className="border-b border-slate-100 pb-4">
                <dt className="font-bold text-slate-900 mb-1">
                  How long do Croma and Reliance Digital have to resolve an escalated complaint under e-commerce rules?
                </dt>
                <dd className="text-slate-700 leading-relaxed">
                  Under Rule 4(5) of the Consumer Protection (E-Commerce) Rules, 2020, the resident Grievance Officer must acknowledge your grievance within 48 hours. Under Rule 5(4), the corporate entity must provide a complete redressal within one month from the date of receipt of the grievance.
                </dd>
              </div>

              <div className="border-b border-slate-100 pb-4">
                <dt className="font-bold text-slate-900 mb-1">
                  How do extended warranty plans like Croma ZipCare or Reliance resQ legally differ from brand warranties?
                </dt>
                <dd className="text-slate-700 leading-relaxed">
                  Extended warranty plans like Croma ZipCare and Reliance resQ are standalone service contracts sold directly by the retailer. Denying repair, replacement, or compensation under an extended warranty plan constitutes a direct deficiency in service under Section 2(11) of CPA 2019, making the retailer solely responsible without involving the original manufacturer.
                </dd>
              </div>

              <div className="border-b border-slate-100 pb-4">
                <dt className="font-bold text-slate-900 mb-1">
                  Can I send a legal notice to both Croma/Reliance Digital and the device manufacturer together?
                </dt>
                <dd className="text-slate-700 leading-relaxed">
                  Yes, and this is the recommended legal strategy. Serving a joint statutory demand notice to both the retailer (Infiniti Retail Limited or Reliance Retail Limited) and the manufacturer (e.g., Samsung, HP, LG, Sony) holds them jointly and severally liable and prevents them from deflecting responsibility onto each other before you file on e-Jagriti.
                </dd>
              </div>

              <div>
                <dt className="font-bold text-slate-900 mb-1">
                  Agar Croma ya Reliance Digital defective electronics badalne se mana kare toh consumer court me complaint kaise kare?
                </dt>
                <dd className="text-slate-700 leading-relaxed">
                  Aap Government of India ke e-Jagriti portal (e-jagriti.gov.in) par online consumer complaint darj kar sakte hain. District Consumer Commission me ₹5 lakh tak ke claims par zero court fee hoti hai. Pehle 15-day statutory legal notice bhejna zaroori hota hai taaki settlement ka mauka mile aur aapka documentary evidence mazboot ho.
                </dd>
              </div>
            </dl>
          </div>

          {/* Block 10: Primary Legal Sources & Statutory Authorities */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm mb-10">
            <h3 className="text-base font-bold text-slate-900 mb-2">
              Sources & Statutory References
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-600 font-mono">
              <li>
                • <span className="text-red-700 font-medium">Consumer Protection Act, 2019 (Act No. 35 of 2019)</span> — Chapter VI (Product Liability, Sections 82–87), Section 2(47) (Unfair Trade Practice), Section 35 (Complaints), Section 69 (Limitation).
              </li>
              <li>
                • <span className="text-red-700 font-medium">Consumer Protection (E-Commerce) Rules, 2020</span> — Rule 4(5) (48-hour Grievance Acknowledgement), Rule 5(4) (One-Month Redressal).
              </li>
              <li>
                • <a href="https://consumerhelpline.gov.in/" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline">National Consumer Helpline (NCH 1915 / INGRAM Portal)</a> — Department of Consumer Affairs, Government of India.
              </li>
              <li>
                • <a href="https://e-jagriti.gov.in/" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline">e-Jagriti Online Consumer Commission Redressal Portal</a> — Single unified portal for District, State, and National Consumer Commissions.
              </li>
              <li>
                • <a href="https://www.livelaw.in/consumer-cases/government-amends-e-commerce-rules-to-strengthen-consumer-protection-550184" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:underline">Consumer Protection (E-Commerce) Amendment Rules, 2026</a> — Dark pattern compliance, mandatory refund disclosures, and self-auditing standards.
              </li>
              <li>
                • DCDRC Belagavi in <em>Dr. Manish M. Bagi v. The Infinity Retail Limited Trading as Croma & Anr.</em> (CC/239/2021) — Holding retailer and brand jointly liable for defective TV refund.
              </li>
            </ul>
          </div>

          {/* Block 11: Call to Action Component */}
          <div className="mb-10">
            <ElectronicsNoticeCTA
              buttonText="Draft Legal Notice to Electronics Retailer"
              variant="primary"
            />
          </div>

          {/* Block 12: Related Guides & Internal Links */}
          <div className="mb-10">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-3">
                Explore Related Consumer Recovery & Legal Notice Guides
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <Link
                  href="/flipkart-return-refund-complaint"
                  className="p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors block"
                >
                  <div className="font-bold text-slate-900 mb-0.5">
                    Flipkart Return & Refund Dispute Guide
                  </div>
                  <p className="text-slate-600 text-[11px]">
                    How to tackle wrongful doorstep return rejections and courier pickup delays with legal notices.
                  </p>
                </Link>

                <Link
                  href="/legal-notice-to/amazon"
                  className="p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors block"
                >
                  <div className="font-bold text-slate-900 mb-0.5">
                    Legal Notice to Amazon: Return & Seller Disputes
                  </div>
                  <p className="text-slate-600 text-[11px]">
                    Intermediary liability exceptions under IT Act Section 79 and consumer forum refund orders.
                  </p>
                </Link>

                <Link
                  href="/legal-notice-to/meesho"
                  className="p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors block"
                >
                  <div className="font-bold text-slate-900 mb-0.5">
                    Meesho Refund Missing: Legal Steps That Work
                  </div>
                  <p className="text-slate-600 text-[11px]">
                    Overcoming "Refund Successful" status when money never reaches your bank account.
                  </p>
                </Link>

                <Link
                  href="/services/refunds-and-consumer-complaints"
                  className="p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors block"
                >
                  <div className="font-bold text-slate-900 mb-0.5">
                    Consumer Complaints & Refund Legal Services Hub
                  </div>
                  <p className="text-slate-600 text-[11px]">
                    Comprehensive overview of our statutory legal notice drafting for disputed retail transactions.
                  </p>
                </Link>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <p>
                  Related pending statutory guides:{" "}
                  <span className="text-slate-700 font-medium">
                    Refund shows successful but not received bank ARN trace, E-Commerce Rules Grievance Officer 48h compliance, Legal Notice to Zepto quick-commerce, and Statutory Legal Notice fee schedules
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* Related Recovery Guides Dynamic Hub Component */}
          <RelatedRecoveryGuides />

          {/* Block 13: Reviewer Box Specification Note */}
          {/* <!-- TODO(reviewer): Add reviewer box once src/data/reviewers.ts is configured. No fabrication permitted. --> */}
        </div>
      </main>
    </>
  );
}
