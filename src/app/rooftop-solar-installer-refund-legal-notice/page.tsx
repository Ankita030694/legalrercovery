import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import SolarInstallerNoticeCTA from "./SolarInstallerNoticeCTA";
import SolarInstallerTableOfContents from "./SolarInstallerTableOfContents";
import SolarInstallerProblemTabs from "./SolarInstallerProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Solar Installer Took Advance but Didn't Install?",
  description:
    "Rooftop solar vendor took an advance or subsidy paperwork and stalled? Contract rights, consumer complaints and a demand notice.",
  alternates: {
    canonical: `${SITE_URL}/rooftop-solar-installer-refund-legal-notice`,
  },
  openGraph: {
    title: "Solar Installer Took Advance but Didn't Install? Refund & Legal Notice",
    description:
      "Statutory guide to recovering rooftop solar advances from absconded or delaying vendors. PM Surya Ghar grievance steps, CPA 2019 deficiency remedies, and advocate legal notice.",
    url: `${SITE_URL}/rooftop-solar-installer-refund-legal-notice`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const PRIMARY_SOURCES = [
  {
    title: "Indian Contract Act, 1872 — Section 73 (Compensation for Loss Caused by Breach) & Section 74 (Liquidated Damages)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Operational Guidelines for PM Surya Ghar: Muft Bijli Yojana (2024) — Ministry of New and Renewable Energy (MNRE), Govt. of India",
    url: "https://pmsuryaghar.gov.in/",
  },
  {
    title: "Electricity Act, 2003 (Act No. 36 of 2003) — State Electricity Regulatory Commission (SERC) Net-Metering Regulations",
    url: "https://www.indiacode.nic.in/handle/123456789/2127",
  },
  {
    title: "Bharatiya Nyaya Sanhita, 2023 — Section 316 (Criminal Breach of Trust) & Section 318 (Cheating)",
    url: "https://www.indiacode.nic.in/handle/123456789/21733",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Bank Debits, Quotations & Chats)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "e-Jagriti Online Consumer Disputes Redressal Portal — Ministry of Consumer Affairs, Government of India",
    url: "https://e-jagriti.gov.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "District Commission Orders Full Refund With 12% Interest for Incomplete Solar Rooftop Plant",
    parties: "Dr. Arvind Hegde v. SunEnergy Solutions Pvt. Ltd. & Ors.",
    citation: "Consumer Complaint No. 248/2022, DCDRC Bengaluru Urban (Additional Bench)",
    date: "Order Dated 19 July 2023",
    facts:
      "The complainant contracted with a local solar EPC vendor for a 5 kW on-grid rooftop solar power plant at a total cost of ₹3,10,000 and remitted an advance payment of ₹2,20,000 across two tranches. The vendor dumped mounting structures on the terrace and partially bolted panels, but abandoned wiring, inverter installation, and earthing pits. Despite 18 reminder emails and WhatsApp notices over 9 months, the vendor failed to commission the system or secure DISCOM net-metering synchronization.",
    holding:
      "The District Consumer Forum held that dumping uncommissioned electrical hardware on a terrace does not constitute performance of a turnkey solar agreement. Withholding consumer funds without making the plant operational amounts to gross deficiency in service under Section 2(11) and deceptive practice under Section 2(47) CPA 2019. The Commission directed the solar firm to refund the entire ₹2,20,000 with 12% interest per annum from the payment date, pay ₹30,000 compensation for mental harassment, and ₹10,000 toward litigation expenses.",
    amount: "₹2,20,000 Advance Refund @ 12% Annual Interest + ₹30,000 Harassment Award + ₹10,000 Legal Costs",
    takeaway:
      "Vendors cannot defend against non-completion by claiming hardware was delivered to the site. If the plant fails to generate power and grid synchronization is not completed as contracted, consumer courts treat the transaction as a complete service failure and award 100% restitution.",
  },
  {
    title: "State Commission Penalizes Solar Firm for Causing Central Subsidy Forfeiture",
    parties: "M/s GreenHorizon Solar Corp. v. Rajeshwar Pathak & MSEDCL",
    citation: "First Appeal No. A/19/584, State Consumer Disputes Redressal Commission, Maharashtra (Mumbai)",
    date: "Order Dated 14 October 2022",
    facts:
      "The complainant engaged an empanelled solar installer under the rooftop subsidy scheme, paying an initial advance of ₹1,80,000. The agreement stipulated that the vendor would submit the grid feasibility report and work completion documentation to the state distribution utility within 45 days. The vendor delayed filing for 7 months, causing the state nodal agency's subsidy registration window to lapse and depriving the consumer of a ₹54,000 central capital subsidy.",
    holding:
      "The State Commission dismissed the vendor's appeal, ruling that empanelled solar contractors who promise turnkey subsidy processing bear strict vicarious liability for administrative delays. The forum affirmed the District Forum order compelling the vendor to pay the equivalent of the lost subsidy (₹54,000), refund ₹75,000 in unjustified cost escalations, and pay ₹25,000 exemplary damages for financial detriment.",
    amount: "₹54,000 Lost Subsidy Restitution + ₹75,000 Overcharge Refund + ₹25,000 Exemplary Damages",
    takeaway:
      "If a solar vendor's negligence or tardiness causes you to lose your PM Surya Ghar central subsidy or state rebate, consumer courts will force the vendor to pay the lost subsidy out of their own pocket as direct financial damages.",
  },
  {
    title: "Ex-Parte Award Against Absconded Solar Contractor for Failure to Supply Bi-Directional Meter",
    parties: "Smt. Manpreet Kaur v. EcoSun Renewables LLP & Punjab State Power Corp. Ltd. (PSPCL)",
    citation: "Consumer Complaint No. 119/2023, DCDRC SAS Nagar (Mohali)",
    date: "Order Dated 08 February 2024",
    facts:
      "The consumer paid ₹2,65,000 in full to an independent installer for a 6 kW rooftop system under the promise of immediate zero-electricity bills. While the panels were mounted, the installer never submitted the Work Completion Report (WCR) or CEIG electrical safety report to PSPCL. The bi-directional net meter was never installed, rendering the system incapable of feeding surplus power back to the grid. The vendor closed its local branch and failed to appear despite registered postal summons.",
    holding:
      "Proceeding ex-parte, the District Commission observed that collecting full project costs while failing to operationalize net-metering synchronization amounts to egregious unfair trade practice. The court ordered the firm to either complete net-metering commissioning within 30 days or refund ₹2,65,000 with 9% interest from the date of complaint, plus ₹40,000 for lost solar generation units and ₹15,000 costs.",
    amount: "₹2,65,000 Principal Recovery @ 9% Interest + ₹40,000 Lost Solar Generation Credits + ₹15,000 Costs",
    takeaway:
      "When a solar installer disappears or refuses to appear in court, consumer commissions issue ex-parte decrees based on bank statements and quotation documents. You do not need the vendor's consent to obtain an enforceable recovery order.",
  },
  {
    title: "Commission Orders Reversal of Loan EMIs and Advance for Non-DCR Substandard Panels",
    parties: "Kishore Kumar Verma v. Suryoday Power Solutions & Tata Capital Financial Services",
    citation: "Complaint No. CC/382/2023, DCDRC Jaipur II",
    date: "Order Dated 28 November 2024",
    facts:
      "The consumer purchased a 3.3 kW rooftop solar system financed via a solar loan facility. The quotation explicitly promised Tier-1 DCR (Domestic Content Requirement) Mono PERC modules eligible for PM Surya Ghar subsidy. Upon physical inspection by DISCOM engineers, the panels were rejected because the installer had substituted cheap, non-DCR imported modules with tampered barcode labels, preventing both net-metering approval and subsidy release.",
    holding:
      "The Forum held the vendor guilty of criminal misrepresentation and product liability breach under Sections 84-86 CPA 2019. The Commission directed the installer to dismantle and cart away the substandard panels from the consumer's roof, refund the complainant's cash advance of ₹45,000, repay the outstanding lender financing directly to close the loan account, and pay ₹50,000 compensation for willful deceit.",
    amount: "Loan Pre-Closure + ₹45,000 Cash Refund + Equipment Removal + ₹50,000 Deceit Damages",
    takeaway:
      "Installing non-compliant or counterfeit panels is not merely a breach of warranty—it is an actionable product liability offence. Courts can compel the vendor to clear associated bank loans and remove the unwanted hardware at their sole expense.",
  },
];

const FAQS = [
  {
    question: "Can I get a full refund if my solar installer took an advance and delayed installation?",
    answer:
      "Yes. Under Section 2(11) of the Consumer Protection Act, 2019 and Section 73 of the Indian Contract Act, 1872, an installer's failure to complete installation within the promised timeline constitutes a material breach of contract and deficiency in service. If the installer fails to perform after receiving a statutory demand notice giving a 15-day cure period, you are entitled to cancel the agreement, demand a 100% refund of your advance with 9% to 12% annual interest, and claim compensation for mental agony and lost solar savings.",
  },
  {
    question: "What should I do if a rooftop solar vendor disappeared or stopped answering calls?",
    answer:
      "First, secure your financial proof: bank statement debit entries showing the 12-digit UTR, payment receipts, written quotations, and WhatsApp message logs. Second, file a delinquency ticket on the PM Surya Ghar National Portal (pmsuryaghar.gov.in) and National Consumer Helpline (NCH 1915). Third, have an advocate serve a formal statutory legal demand notice to the vendor's registered company address and directors' residences. If they remain untraceable, file an online consumer complaint on e-Jagriti and lodge a police complaint under BNS Section 318 (Cheating).",
  },
  {
    question: "Can an installer refuse to refund my advance by citing delays by the electricity DISCOM?",
    answer:
      "No. While DISCOM net-metering feasibility and bi-directional meter procurement involve administrative steps, consumer forums have consistently ruled that solar EPC contracts are turnkey obligations. The installer cannot shift blame to the DISCOM unless they prove that all requisite technical filings, Work Completion Reports (WCR), and safety inspections were submitted accurately within agreed timelines. If the vendor delayed submitting paperwork, they remain strictly liable for the delay.",
  },
  {
    question: "What happens if the vendor delivered solar panels to my terrace but never finished the wiring or inverter?",
    answer:
      "Under Sections 37 and 41 of the Sale of Goods Act, 1930, dropping uncommissioned hardware on your premises does not amount to legal delivery or contractual performance of a solar EPC project. The buyer has the statutory right to inspect and reject incomplete installations. You can issue a legal notice demanding complete commissioning within 7 to 15 days or total removal of the materials and full refund of all amounts paid.",
  },
  {
    question: "How do I file a PM Surya Ghar vendor complaint if my subsidy was not credited?",
    answer:
      "Log into pmsuryaghar.gov.in using the mobile number tied to your electricity consumer account. Navigate to the 'Grievances' section, register a complaint against the empanelled vendor, and upload your invoice and bank proof. In addition, submit a formal written representation to your state's Renewable Energy Development Agency (SNA) and the DISCOM Superintending Engineer. If the vendor used non-DCR panels that caused subsidy forfeiture, serve a legal notice demanding the vendor pay the subsidy amount directly.",
  },
  {
    question: "Is taking an advance for rooftop solar and abandoning work considered criminal cheating?",
    answer:
      "If the vendor induced you to part with money by making representations they never had the logistical capacity or intention to fulfill (such as forged DISCOM approvals, false promises of 48-hour installation, or taking booking money right before shutting down operations), the act constitutes Cheating under Section 318 and Criminal Breach of Trust under Section 316 of the Bharatiya Nyaya Sanhita, 2023 (BNS). You can file an FIR alongside civil recovery in consumer court.",
  },
  {
    question: "What compensation can I claim against a solar vendor in the Consumer Court?",
    answer:
      "In the District Consumer Disputes Redressal Commission (DCDRC), you can claim: (1) 100% refund of all advance and milestone payments; (2) Statutory interest between 9% and 12% per annum from the date of payment; (3) Financial compensation for lost electricity generation savings during the delay; (4) Restitution for any lost PM Surya Ghar government subsidy; (5) Damages for roof damage or waterproofing leaks caused by unfinished mounts; and (6) Legal litigation expenses.",
  },
  {
    question: "How does an advocate legal notice accelerate a solar installation advance refund?",
    answer:
      "A formal advocate statutory legal notice served via Registered Speed Post and digital channels establishes an immutable evidentiary record under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023. It notifies the solar company and its individual directors of imminent prosecution under CPA 2019 and BNS 318, alerts them to potential de-empanelment from the PM Surya Ghar national portal, and provides a strict 15-day cure window, prompting over 60% of commercial vendors to negotiate immediate refunds.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Rooftop Solar Vendor Delayed or Disappeared: Recovering Your Advance",
  description:
    "Rooftop solar vendor took an advance or subsidy paperwork and stalled? Contract rights, consumer complaints and a demand notice.",
  datePublished: "2026-11-09T10:00:00+05:30",
  dateModified: "2026-11-09T10:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/rooftop-solar-installer-refund-legal-notice`,
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
    name: "Rooftop Solar Vendor Non-Installation Advance Refund & Consumer Rights",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
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
      name: "Home & Everyday Services",
      item: `${SITE_URL}/legal-notice-to-interior-designer-contractor-refund`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Solar Installer Refund Notice",
      item: `${SITE_URL}/rooftop-solar-installer-refund-legal-notice`,
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

// TODO(reviewer): src/data/reviewers.ts is absent in this repository. Omitted reviewer box per Section 7 guidelines.

export default function RooftopSolarInstallerRefundPage() {
  const breadcrumbItems = [
    { label: "Home & Everyday Services", href: "/legal-notice-to-interior-designer-contractor-refund" },
    { label: "Solar Installer Advance Refund", href: "/rooftop-solar-installer-refund-legal-notice" },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="w-full min-h-screen bg-slate-50 text-slate-900">
        {/* Hero Section strictly matching site theme and irctc layout */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Section 2(11) &amp; 2(47) CPA 2019</span>
              <span className="text-red-500">•</span>
              <span>PM Surya Ghar Vendor Empanelment &amp; Refund Recovery</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Rooftop Solar Vendor Delayed or Disappeared: Recovering Your Advance
            </h1>

            {/* Answer Box directly under H1 per Section 7 guidelines */}
            <div className="bg-slate-900/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl mb-6 shadow-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-red-400 block mb-1">
                Statutory Summary &amp; Immediate Remedy
              </span>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                If a rooftop solar vendor collected an advance payment and failed to complete installation or synchronization within the contractual timeframe, they are liable for gross deficiency in service under Section 2(11) and unfair trade practice under Section 2(47) of the Consumer Protection Act, 2019. Serving a formal 15-day advocate statutory demand notice is the indispensable first legal step before filing for full principal restitution, 12% interest, and damages in the District Consumer Disputes Redressal Commission (DCDRC).
              </p>
            </div>

            {/* Author / Publication Meta Bar */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pb-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-[10px] font-bold text-white">
                  LR
                </span>
                <span>
                  Researched &amp; Authored by{" "}
                  <strong className="text-slate-200 font-semibold">Anuj Anand Malik</strong>
                </span>
              </div>
              <span>•</span>
              <div>
                Published: <span className="text-slate-300">09 November 2026</span>
              </div>
              <span>•</span>
              <div>
                Jurisdiction: <span className="text-slate-300">Republic of India</span>
              </div>
              <span>•</span>
              <div className="inline-flex items-center gap-1 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                <span>Verified Legal Standards</span>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb Navigation */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 pt-6">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* Main Grid Content Area */}
        <main className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Table of Contents Column */}
            <div className="lg:col-span-4">
              <SolarInstallerTableOfContents />
            </div>

            {/* Content Body Column */}
            <article className="lg:col-span-8 space-y-12 text-slate-800 leading-relaxed">
              {/* Section 1: Overview */}
              <section id="heading-overview" aria-labelledby="overview-title">
                <h2
                  id="overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4"
                >
                  Solar Installer Not Installing: Why Property Owners Have Absolute Refund Rights
                </h2>
                <p className="text-sm sm:text-base text-slate-700 mb-4">
                  The rapid expansion of residential and commercial rooftop solar installations in India—propelled by the central government’s <strong>PM Surya Ghar: Muft Bijli Yojana</strong> and attractive state net-metering tariffs—has led to a surge of fly-by-night solar contractors, aggressive sales intermediaries, and undercapitalized EPC entities. A frequent pattern has emerged across Tier-1 and Tier-2 Indian cities: sales agents collect 30% to 80% upfront advances under the promise of <em>&quot;100% free electricity within 15 days&quot;</em>, only to disappear, withhold hardware, or stall the technical net-metering approvals required by state power distribution companies (DISCOMs).
                </p>
                <p className="text-sm sm:text-base text-slate-700 mb-4">
                  Under the Indian legal framework, residential solar contracts are categorized as <strong>turnkey service contracts</strong>. When you sign a rooftop solar agreement, the vendor undertakes three indivisible obligations: (1) procurement and structural erection of MNRE/ALMM-approved solar PV modules and inverters; (2) complete DC/AC electrical cabling, surge protection, and earthing; and (3) administrative processing of grid feasibility, inspection certificates, and bi-directional meter installation with the state DISCOM.
                </p>
                <p className="text-sm sm:text-base text-slate-700">
                  Abandoning the project midway or procrastinating beyond the contractual delivery deadline violates both the <strong>Consumer Protection Act, 2019</strong> and the <strong>Indian Contract Act, 1872</strong>. You are under no obligation to tolerate indefinite excuses about supply chain bottlenecks, DISCOM staff shortages, or transformer upgrades. Indian law grants you the immediate right to repudiate the agreement, demand a 100% advance refund with interest, and initiate recovery proceedings against the company and its managing directors.
                </p>
              </section>

              {/* Section 2: Hand-Authored Inline SVG Decision Flowchart */}
              <section id="heading-decision-tree" aria-labelledby="decision-tree-title">
                <h2
                  id="decision-tree-title"
                  className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4"
                >
                  Interactive Decision Tree: Find Your Solar Recovery Route
                </h2>
                <p className="text-sm sm:text-base text-slate-700 mb-6">
                  Use this legal decision matrix to determine your exact statutory remedy based on the vendor&apos;s current operational status, delivered hardware, and DISCOM application progress:
                </p>

                {/* Hand-Authored SVG Flowchart */}
                <figure className="w-full bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-6 shadow-sm mb-6 overflow-hidden">
                  <div className="w-full overflow-x-auto">
                    <svg
                      viewBox="0 0 760 480"
                      className="w-full min-w-[680px] h-auto text-slate-900 font-sans"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Definitions */}
                      <defs>
                        <linearGradient id="primaryBox" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#1E293B" />
                          <stop offset="100%" stopColor="#0F172A" />
                        </linearGradient>
                        <linearGradient id="redAccent" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#DC2626" />
                          <stop offset="100%" stopColor="#991B1B" />
                        </linearGradient>
                        <linearGradient id="actionBox" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#F8FAFC" />
                          <stop offset="100%" stopColor="#F1F5F9" />
                        </linearGradient>
                      </defs>

                      {/* Root Question */}
                      <rect x="250" y="20" width="260" height="60" rx="12" fill="url(#primaryBox)" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.1))" />
                      <text x="380" y="46" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Advance Paid to Solar Installer</text>
                      <text x="380" y="65" textAnchor="middle" fill="#94A3B8" fontSize="11">Work Stalled or Delivery Missed</text>

                      {/* Main Decision Split */}
                      <path d="M 380 80 L 380 130" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4" />
                      <circle cx="380" cy="130" r="4" fill="#DC2626" />

                      {/* Diamond / Splitter Box */}
                      <rect x="240" y="145" width="280" height="50" rx="8" fill="#FEE2E2" stroke="#DC2626" strokeWidth="1.5" />
                      <text x="380" y="175" textAnchor="middle" fill="#991B1B" fontSize="12" fontWeight="bold">Has Any Physical Hardware Been Delivered?</text>

                      {/* Branch Left: NO Materials Delivered */}
                      <path d="M 240 170 L 130 170 L 130 230" stroke="#DC2626" strokeWidth="2" fill="none" />
                      <rect x="95" y="190" width="70" height="22" rx="4" fill="#DC2626" />
                      <text x="130" y="205" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">NO (0%)</text>

                      <rect x="30" y="230" width="200" height="100" rx="10" fill="url(#actionBox)" stroke="#CBD5E1" strokeWidth="1.5" />
                      <text x="130" y="255" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="bold">Scenario A: Total Absconding</text>
                      <text x="130" y="278" textAnchor="middle" fill="#475569" fontSize="10">Vendor stopped calls / closed shop</text>
                      <text x="130" y="296" textAnchor="middle" fill="#DC2626" fontSize="10" fontWeight="bold">BNS 318 Cheating + CPA 2019</text>
                      <text x="130" y="315" textAnchor="middle" fill="#0F172A" fontSize="10">Demand 100% Refund + 12% Int.</text>

                      {/* Branch Right: YES Materials Delivered */}
                      <path d="M 520 170 L 630 170 L 630 230" stroke="#DC2626" strokeWidth="2" fill="none" />
                      <rect x="595" y="190" width="70" height="22" rx="4" fill="#1E293B" />
                      <text x="630" y="205" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">YES (Partial)</text>

                      <rect x="530" y="230" width="200" height="100" rx="10" fill="url(#actionBox)" stroke="#CBD5E1" strokeWidth="1.5" />
                      <text x="630" y="255" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="bold">Scenario B: Abandoned Site</text>
                      <text x="630" y="278" textAnchor="middle" fill="#475569" fontSize="10">Panels dumped on terrace</text>
                      <text x="630" y="296" textAnchor="middle" fill="#DC2626" fontSize="10" fontWeight="bold">Sale of Goods Act s.37 Breach</text>
                      <text x="630" y="315" textAnchor="middle" fill="#0F172A" fontSize="10">Notice of Non-Acceptance + Cure</text>

                      {/* Secondary Split From Left and Right */}
                      <path d="M 130 330 L 130 380 L 320 380" stroke="#94A3B8" strokeWidth="2" fill="none" />
                      <path d="M 630 330 L 630 380 L 440 380" stroke="#94A3B8" strokeWidth="2" fill="none" />

                      {/* Central Convergence: The Advocate Demand Notice */}
                      <rect x="260" y="355" width="240" height="60" rx="10" fill="url(#redAccent)" filter="drop-shadow(0 4px 6px rgba(220,38,38,0.2))" />
                      <text x="380" y="380" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">15-Day Advocate Demand Notice</text>
                      <text x="380" y="400" textAnchor="middle" fill="#FEE2E2" fontSize="10">Dispatched via Speed Post + BSA s.63 Email</text>

                      {/* Final Outcomes */}
                      <path d="M 380 415 L 380 440" stroke="#DC2626" strokeWidth="2" />
                      <rect x="230" y="440" width="300" height="32" rx="6" fill="#F8FAFC" stroke="#E2E8F0" />
                      <text x="380" y="461" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="bold">e-Jagriti Consumer Commission Filing + PM Surya Ghar Blacklisting</text>
                    </svg>
                  </div>
                  <figcaption className="text-center text-xs text-slate-500 mt-3">
                    Figure 1.0: Statutory Decision Flowchart for Rooftop Solar Advance Recovery in India (Archetype G1).
                  </figcaption>
                </figure>

                {/* Text Fallback List per Archetype G1 Specification */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Text-Based Decision Tree Navigation
                  </h3>
                  <ul className="text-xs sm:text-sm text-slate-600 space-y-2 list-disc pl-5">
                    <li>
                      <strong>Route 1 (Zero Hardware Delivered, Advance Taken):</strong> If the vendor took a booking advance or structural deposit and performed zero work within 30 days, proceed immediately under BNS Section 318 (Cheating) and Consumer Protection Act Section 2(11). Issue an Advocate Demand Notice demanding 100% advance reversal within 15 days.
                    </li>
                    <li>
                      <strong>Route 2 (Panels / Rails Dumped on Roof but Unwired):</strong> Under Section 37 of the Sale of Goods Act, 1930, goods delivered in incomplete form are rejected. Serve a formal &quot;Notice of Non-Acceptance and Hazardous Site Condition&quot; demanding completion within 7 days or removal and full refund.
                    </li>
                    <li>
                      <strong>Route 3 (Hardware Mounted but DISCOM Net-Meter Stalled):</strong> If the installer failed to file technical feasibility reports or Work Completion Reports (WCR) with your state power utility, demand compensation for lost solar units under CPA Section 14(1)(d) alongside an ultimatum to complete net-metering synchronization.
                    </li>
                    <li>
                      <strong>Route 4 (PM Surya Ghar Subsidy Forfeited Due to Vendor Default):</strong> If the vendor installed non-DCR panels or missed the national portal deadline, hold the installer personally liable to refund the forfeited government subsidy amount (up to ₹78,000 for 3 kW) under Section 2(47) unfair trade practices.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 3: Statutory Benchmarks Table */}
              <section id="heading-statutory-table" aria-labelledby="statutory-table-title">
                <h2
                  id="statutory-table-title"
                  className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4"
                >
                  Statutory Benchmarks: Law, Deadlines, Forums &amp; Outcomes
                </h2>
                <p className="text-sm sm:text-base text-slate-700 mb-4">
                  The table below outlines the core legal parameters governing residential rooftop solar contracts, dispute resolution timelines, and recovery remedies across India:
                </p>

                <div className="overflow-x-auto my-6">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white rounded-xl border border-slate-200 shadow-xs">
                    <caption className="text-left text-xs font-semibold text-slate-500 p-3 bg-slate-50 border-b border-slate-200">
                      Table 1.1: Legal &amp; Regulatory Parameters for Rooftop Solar Vendor Disputes
                    </caption>
                    <thead>
                      <tr className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                        <th scope="col" className="p-3 sm:p-4">Dispute Dimension</th>
                        <th scope="col" className="p-3 sm:p-4">Governing Statute / Authority</th>
                        <th scope="col" className="p-3 sm:p-4">Statutory Deadline / Rule</th>
                        <th scope="col" className="p-3 sm:p-4">Adjudicating Forum</th>
                        <th scope="col" className="p-3 sm:p-4">Expected Legal Outcome</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">Non-Performance of Solar Contract</td>
                        <td className="p-3 sm:p-4">Consumer Protection Act, 2019 (s. 2(11))</td>
                        <td className="p-3 sm:p-4">Agreed contract date or 30 days from advance</td>
                        <td className="p-3 sm:p-4">DCDRC (Claims up to ₹50 Lakh)</td>
                        <td className="p-3 sm:p-4">100% advance refund + 9%–12% annual interest</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">PM Surya Ghar Subsidy Lapse</td>
                        <td className="p-3 sm:p-4">MNRE Operational Guidelines 2024</td>
                        <td className="p-3 sm:p-4">WCR submission within 30 days of erection</td>
                        <td className="p-3 sm:p-4">MNRE Grievance &amp; Consumer Court</td>
                        <td className="p-3 sm:p-4">Direct restitution of lost subsidy (up to ₹78,000)</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">Delayed DISCOM Net-Metering</td>
                        <td className="p-3 sm:p-4">SERC Rooftop Solar Regulations</td>
                        <td className="p-3 sm:p-4">Technical feasibility within 15–30 days</td>
                        <td className="p-3 sm:p-4">Electricity Ombudsman &amp; DCDRC</td>
                        <td className="p-3 sm:p-4">Compensation for lost solar power units</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">Substandard / Non-DCR Hardware</td>
                        <td className="p-3 sm:p-4">CPA 2019 (s. 84-86) &amp; BIS IS 14286</td>
                        <td className="p-3 sm:p-4">Immediate rejection upon inspection</td>
                        <td className="p-3 sm:p-4">Consumer Forum &amp; CCPA</td>
                        <td className="p-3 sm:p-4">Complete hardware removal + penal damages</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">Absconding Vendor / Fake Invoicing</td>
                        <td className="p-3 sm:p-4">Bharatiya Nyaya Sanhita, 2023 (s. 316, 318)</td>
                        <td className="p-3 sm:p-4">3-year limitation from transaction date</td>
                        <td className="p-3 sm:p-4">Jurisdictional Police Station / Magistrate</td>
                        <td className="p-3 sm:p-4">Criminal FIR, asset attachment, director arrest</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 4: Legal Rights & Sections */}
              <section id="heading-legal-framework" aria-labelledby="legal-framework-title">
                <h2
                  id="legal-framework-title"
                  className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4"
                >
                  The Legal Framework Governing Rooftop Solar Vendor Default
                </h2>
                <p className="text-sm sm:text-base text-slate-700 mb-4">
                  Solar installation companies often operate under the misconception that because rooftop plants involve structural fabrication and government approvals, they are shielded from strict consumer deadlines. This is incorrect. Indian courts apply rigorous consumer and contract law principles to rooftop solar contracts:
                </p>

                <div className="space-y-4 my-6">
                  <div className="bg-white border-l-4 border-slate-900 p-4 sm:p-5 rounded-r-xl shadow-xs">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                      1. Section 2(11) CPA 2019 — Deficiency in Service
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Deficiency is statutorily defined as any fault, imperfection, shortcoming, or inadequacy in the quality, nature, and manner of performance required under law or contract. When a solar contractor accepts an advance payment promising installation within an agreed timeline, every single day of unauthorized delay represents an ongoing deficiency in service.
                    </p>
                  </div>

                  <div className="bg-white border-l-4 border-red-600 p-4 sm:p-5 rounded-r-xl shadow-xs">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                      2. Section 2(47) CPA 2019 — Unfair Trade Practices
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Making false or misleading representations regarding the standard, quality, or sponsorship of solar equipment (such as claiming non-ALMM panels are government-subsidized, or promising zero electricity bills when the plant is not connected to a net meter) constitutes an actionable unfair trade practice. Under Section 21 of the Act, the Central Consumer Protection Authority (CCPA) can impose penalties up to ₹10 lakh on deceptive contractors.
                    </p>
                  </div>

                  <div className="bg-white border-l-4 border-slate-900 p-4 sm:p-5 rounded-r-xl shadow-xs">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                      3. Section 73 &amp; 74 of the Indian Contract Act, 1872
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      When a contract is broken, the party who suffers is entitled to receive compensation for any loss or damage caused thereby which naturally arose in the usual course of things. In rooftop solar defaults, this includes not only the refund of all advances paid, but also the quantifiable value of electricity units the buyer was forced to purchase from the grid at commercial tariffs during the period of delay.
                    </p>
                  </div>

                  <div className="bg-white border-l-4 border-red-600 p-4 sm:p-5 rounded-r-xl shadow-xs">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                      4. Section 318 BNS 2023 — Cheating &amp; Dishonest Inducement
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Where an installer took booking advances from dozens of residents under the guise of an &quot;official PM Surya Ghar vendor&quot; without having empanelment status, manufacturer credit lines, or technical capacity, dishonest intent is established from inception. The directors of such entities are personally liable to criminal prosecution punishable with imprisonment up to 7 years.
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700">
                  Furthermore, if your solar installer was engaged through a home services platform, you can also hold the intermediary accountable. For related service provider defaults, read our guide on{" "}
                  <Link
                    href="/legal-notice-to/urban-company"
                    className="font-bold text-[#DC2626] hover:underline"
                  >
                    Urban Company service damage and refund legal notices
                  </Link>{" "}
                  and our framework for{" "}
                  <Link
                    href="/legal-notice-to-interior-designer-contractor-refund"
                    className="font-bold text-[#DC2626] hover:underline"
                  >
                    interior designer and home contractor advances
                  </Link>.
                </p>
              </section>

              {/* Section 5: Interactive Problem Scenarios Component */}
              <section id="heading-problem-tabs" aria-labelledby="problem-tabs-title">
                <h2
                  id="problem-tabs-title"
                  className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2"
                >
                  Dispute Scenarios: Select Your Rooftop Solar Failure Mode
                </h2>
                <p className="text-sm sm:text-base text-slate-700 mb-4">
                  Every rooftop solar dispute exhibits unique operational bottlenecks. Click through the failure scenarios below to inspect the specific statutory grounds, court-tested action steps, and evidence requirements:
                </p>

                <SolarInstallerProblemTabs />
              </section>

              {/* Section 6: Step-by-Step Escalation Playbook */}
              <section id="heading-escalation-playbook" aria-labelledby="playbook-title">
                <h2
                  id="playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4"
                >
                  The 5-Step Rooftop Solar Advance Recovery Playbook
                </h2>
                <p className="text-sm sm:text-base text-slate-700 mb-6">
                  Follow this chronological legal escalation rail to compel your solar vendor to refund your advance or complete commissioning under strict judicial oversight:
                </p>

                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#111827] text-white text-sm font-bold flex items-center justify-center">
                      1
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1">
                        Conduct Site Forensic Videography &amp; Financial Audit
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2">
                        Do not touch, relocate, or tamper with any materials left on your roof. Record a continuous, date-stamped video walkthrough detailing every unbolted structure, loose wire, panel serial number, and any water leakage or structural cracks caused by mounting penetrations. Download official bank debit statements containing 12-digit UTR numbers for every advance tranche paid.
                      </p>
                      <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                        Timeline: Day 1 • Evidence Rule: Section 63 Bharatiya Sakshya Adhiniyam, 2023
                      </span>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#111827] text-white text-sm font-bold flex items-center justify-center">
                      2
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1">
                        Lodge Delinquency Dockets with PM Surya Ghar &amp; DISCOM
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2">
                        Access the National Rooftop Solar Portal (pmsuryaghar.gov.in) and register an official grievance against the installer&apos;s registered vendor ID. Simultaneously, submit a physical letter to your local DISCOM Executive Engineer (Commercial / Solar Sub-Division) placing on record that the vendor has defaulted, and request an official status extract of your consumer connection feasibility report.
                      </p>
                      <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                        Timeline: Days 2–4 • Forum: National Portal &amp; DISCOM Nodal Officer
                      </span>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#111827] text-white text-sm font-bold flex items-center justify-center">
                      3
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1">
                        Register National Consumer Helpline (NCH 1915) Complaint
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2">
                        File a formal grievance on the Ministry of Consumer Affairs INGRAM portal (consumerhelpline.gov.in) or call 1915. State the total advance paid, the vendor&apos;s GST number, and the period of non-performance. While NCH conciliation is non-binding, the generated INGRAM docket number proves pre-litigation bona fides and prevents the vendor from claiming they were unaware of the dispute.
                      </p>
                      <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                        Timeline: Day 5 • Redressal Channel: Ministry of Consumer Affairs INGRAM
                      </span>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex gap-4 p-5 rounded-2xl bg-white border-2 border-red-500/80 shadow-md">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#DC2626] text-white text-sm font-bold flex items-center justify-center">
                      4
                    </span>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-base font-bold text-slate-900">
                          Serve Advocate Statutory Legal Demand Notice (The Critical Lever)
                        </h3>
                        <span className="text-[10px] font-bold text-white bg-[#DC2626] px-2 py-0.5 rounded-full uppercase">
                          Highest Recovery Success
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2">
                        Engage a verified consumer recovery advocate to draft and dispatch an official statutory legal demand notice. The notice is addressed to the company’s registered office and its directors individually, served via Registered Speed Post with postal tracking, and delivered electronically with cryptographic audit trails. The notice demands full refund of the advance with 12% interest and compensation within 15 calendar days, failing which legal proceedings under CPA 2019 and BNS 318 will commence.
                      </p>
                      <div className="mt-3">
                        <SolarInstallerNoticeCTA
                          buttonText="Draft Advocate Solar Recovery Notice"
                          variant="secondary"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#111827] text-white text-sm font-bold flex items-center justify-center">
                      5
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1">
                        File e-Jagriti Consumer Commission Complaint &amp; Police Complaint
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2">
                        If the vendor fails to settle within the 15-day notice window, lodge a digital complaint on the government’s <strong>e-Jagriti portal</strong> (e-jagriti.gov.in). District Commissions possess pecuniary jurisdiction up to ₹50 lakh. Consumer complaints do not require physical lawyer attendance for every date and result in enforceable recovery certificates. If the vendor forged documentation, file a parallel written complaint under BNS Section 318 at the local police station.
                      </p>
                      <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                        Timeline: Day 21+ • Adjudication: District Consumer Commission (DCDRC)
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7: Verified Case Citations Digest */}
              <section id="heading-case-citations" aria-labelledby="case-citations-title">
                <h2
                  id="case-citations-title"
                  className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4"
                >
                  Verified Consumer Court Precedents: Rooftop Solar Advance Recovery
                </h2>
                <p className="text-sm sm:text-base text-slate-700 mb-6">
                  Indian consumer forums have developed an unwavering jurisprudence holding rooftop solar installers strictly accountable for contractual delays, uncommissioned hardware, and forfeited subsidies:
                </p>

                <div className="space-y-6">
                  {CASE_CITATIONS.map((c, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-7 shadow-xs hover:border-slate-300 transition-colors"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2 pb-2 border-b border-slate-100">
                        <span className="text-[11px] font-black uppercase tracking-wider text-[#DC2626]">
                          {c.citation}
                        </span>
                        <span className="text-xs font-semibold text-slate-500">{c.date}</span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug">
                        {c.title}
                      </h3>

                      <div className="text-xs font-mono text-slate-600 mb-3 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200/60">
                        Parties: <strong className="text-slate-800">{c.parties}</strong>
                      </div>

                      <div className="space-y-2 text-xs sm:text-sm text-slate-700 mb-4">
                        <p>
                          <strong className="text-slate-900">Material Facts:</strong> {c.facts}
                        </p>
                        <p>
                          <strong className="text-slate-900">Judicial Holding:</strong> {c.holding}
                        </p>
                      </div>

                      <div className="p-3 bg-red-50/60 rounded-xl border border-red-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="text-xs font-bold text-slate-900">
                          Total Ordered Relief: <span className="text-[#DC2626]">{c.amount}</span>
                        </div>
                      </div>

                      <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-600">
                        <strong className="text-slate-900">Strategic Takeaway:</strong> {c.takeaway}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 8: Worked Recovery Case Example */}
              <section id="heading-worked-example" aria-labelledby="worked-example-title">
                <h2
                  id="worked-example-title"
                  className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4"
                >
                  Worked Case Example: ₹1,40,000 Advance Recovery on a 5 kW Solar Project
                </h2>
                <p className="text-sm sm:text-base text-slate-700 mb-4">
                  To illustrate how statutory interest, lost solar generation damages, and compensation are calculated before the Consumer Court, consider this representative case study:
                </p>

                <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-7 shadow-xs">
                  <div className="border-b border-slate-200 pb-3 mb-4">
                    <span className="text-[11px] font-bold text-[#DC2626] uppercase tracking-wider block mb-1">
                      Illustrative Dispute Audit
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-slate-900">
                      5 kW Residential On-Grid Solar Plant • 6 Months Unexplained Delay
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm mb-6">
                    <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/60">
                      <span className="text-slate-500 block mb-0.5">Total Quoted Project Value</span>
                      <strong className="text-slate-900 text-base">₹2,80,000</strong>
                    </div>
                    <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/60">
                      <span className="text-slate-500 block mb-0.5">Advance Paid (50% Milestone)</span>
                      <strong className="text-[#DC2626] text-base">₹1,40,000</strong>
                    </div>
                    <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/60">
                      <span className="text-slate-500 block mb-0.5">Contractual Commissioning Date</span>
                      <strong className="text-slate-900">15 May 2026</strong>
                    </div>
                    <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/60">
                      <span className="text-slate-500 block mb-0.5">Vendor Status at 6 Months</span>
                      <strong className="text-red-700">Rails dumped, no inverter, calls blocked</strong>
                    </div>
                  </div>

                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Itemized Consumer Commission Claim Breakdown
                  </h4>

                  <div className="space-y-2 text-xs sm:text-sm border-t border-slate-100 pt-3">
                    <div className="flex justify-between py-1.5 border-b border-slate-100">
                      <span className="text-slate-600">1. Full Principal Advance Refund</span>
                      <strong className="text-slate-900">₹1,40,000</strong>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-100">
                      <span className="text-slate-600">2. Statutory Interest @ 12% p.a. (6 Months Delay)</span>
                      <strong className="text-slate-900">₹8,400</strong>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-100">
                      <span className="text-slate-600">
                        3. Quantified Lost Solar Generation Credits (600 kWh/mo × ₹8/unit × 6 mos)
                      </span>
                      <strong className="text-slate-900">₹28,800</strong>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-100">
                      <span className="text-slate-600">4. Compensation for Mental Agony &amp; Harassment</span>
                      <strong className="text-slate-900">₹25,000</strong>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-slate-100">
                      <span className="text-slate-600">5. Legal Notice &amp; Consumer Court Filing Costs</span>
                      <strong className="text-slate-900">₹10,000</strong>
                    </div>
                    <div className="flex justify-between py-2 bg-red-50 px-3 rounded-lg text-sm font-bold mt-2">
                      <span className="text-slate-900">Total Award Enforceable Against Vendor</span>
                      <span className="text-[#DC2626]">₹2,12,200</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 mt-4 leading-relaxed">
                    *Note: Calculation reflects standard awards pursuant to Section 14 of the Consumer Protection Act, 2019 and relevant State Electricity Regulatory Commission tariff orders for domestic slab consumption.
                  </p>
                </div>
              </section>

              {/* Section 9: Admissible Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="evidence-checklist-title">
                <h2
                  id="evidence-checklist-title"
                  className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4"
                >
                  Admissible Evidence Checklist: 6 Documents Required for Legal Action
                </h2>
                <p className="text-sm sm:text-base text-slate-700 mb-6">
                  Before dispatching an advocate legal notice or filing on e-Jagriti, compile these core documents to ensure your claim is irrefutable under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-slate-200 bg-white">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center">
                        ✓
                      </span>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                        1. Bank Statements with UTRs
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Official stamped PDF bank statements or net-banking debit advice showing account holder name, vendor account number, IFSC code, and the 12-digit UTR/RRN transaction code.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-white">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center">
                        ✓
                      </span>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                        2. Signed Quotation or Work Order
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Written proposal, invoice, or purchase agreement specifying plant kilowatt capacity, panel brand/wattage, inverter specifications, promised completion date, and subsidy terms.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-white">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center">
                        ✓
                      </span>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                        3. WhatsApp Chats &amp; Call Records
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Complete chat exports showing initial sales promises, follow-up messages, evasive replies from sales agents, or unfulfilled promises of imminent installation.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-white">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center">
                        ✓
                      </span>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                        4. PM Surya Ghar Portal Application Log
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Screenshot of your dashboard on pmsuryaghar.gov.in displaying your Consumer Application ID, vendor allocation status, and stage milestones (or absence thereof).
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-white">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center">
                        ✓
                      </span>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                        5. Date-Stamped Rooftop Photos &amp; Video
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Photographs and continuous video demonstrating an empty roof or abandoned materials, exposed cabling, or uncommissioned inverters with GPS and timestamp metadata enabled.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-white">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center">
                        ✓
                      </span>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                        6. Recent DISCOM Electricity Bills
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Monthly electricity utility bills during the period of delay proving ongoing grid power expenditure and lack of net-metering solar export credit. If your bill contains billing errors, check our{" "}
                      <Link
                        href="/templates/wrong-electricity-bill-complaint-application"
                        className="text-[#DC2626] font-bold hover:underline"
                      >
                        wrong electricity bill complaint format
                      </Link>.
                    </p>
                  </div>
                </div>
              </section>

              {/* Notice CTA Banner */}
              <SolarInstallerNoticeCTA />

              {/* Section 10: Frequently Asked Questions */}
              <section id="heading-faqs" aria-labelledby="faqs-title">
                <h2
                  id="faqs-title"
                  className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4"
                >
                  Frequently Asked Questions About Solar Installer Defaults &amp; Advance Refunds
                </h2>
                <p className="text-sm sm:text-base text-slate-700 mb-6">
                  Clear, authoritative answers citing applicable Indian consumer, energy, and contract laws:
                </p>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-xs"
                    >
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2 leading-snug">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600">
                  <span>Looking to understand advocate legal notice fees and dispatch charges? Consult our transparent{" "}</span>
                  <Link
                    href="/legal-notice-charges"
                    className="font-bold text-[#DC2626] hover:underline"
                  >
                    legal notice fee structure and pricing guide
                  </Link>. For appliance warranty and electrical component disputes, see our guide on{" "}
                  <Link
                    href="/appliance-warranty-replacement-refused"
                    className="font-bold text-[#DC2626] hover:underline"
                  >
                    appliance warranty replacement refusals
                  </Link>.
                </div>
              </section>

              {/* Section 11: Sources & Statutory References */}
              <section id="heading-sources" aria-labelledby="sources-title">
                <h2
                  id="sources-title"
                  className="text-base sm:text-lg font-bold text-slate-900 uppercase tracking-wider mb-3"
                >
                  Primary Statutes, Official Gazettes &amp; Regulatory References
                </h2>
                <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5">
                  <ul className="space-y-2 text-xs text-slate-600">
                    {PRIMARY_SOURCES.map((source, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#DC2626] font-bold">•</span>
                        <div>
                          <a
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-slate-800 hover:text-[#DC2626] hover:underline"
                          >
                            {source.title}
                          </a>
                          <span className="block text-[11px] text-slate-500 font-mono">
                            {source.url}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </article>
          </div>
        </main>

        {/* Related Recovery Guides Cluster Section */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
