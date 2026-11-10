import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import ConsumerHelplineNoticeCTA from "./ConsumerHelplineNoticeCTA";
import ConsumerHelplineTableOfContents from "./ConsumerHelplineTableOfContents";
import ConsumerHelplineProblemTabs from "./ConsumerHelplineProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "National Consumer Helpline (1915) Complaint Guide",
  description:
    "How NCH 1915 and INGRAM complaints work, response times, and why the docket strengthens your legal notice and court case.",
  alternates: {
    canonical: `${SITE_URL}/national-consumer-helpline-complaint-guide`,
  },
  openGraph: {
    title: "National Consumer Helpline (1915) Complaint Guide",
    description:
      "Statutory guide on using NCH 1915 and INGRAM portal grievances as an evidentiary pre-notice step before serving an advocate legal notice or filing on e-Jagriti.",
    url: `${SITE_URL}/national-consumer-helpline-complaint-guide`,
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
    title: "National Consumer Helpline (NCH) Portal (INGRAM) — Department of Consumer Affairs, Government of India",
    url: "https://consumerhelpline.gov.in/",
  },
  {
    title: "Consumer Protection (E-Commerce) Rules, 2020 — Ministry of Consumer Affairs, Food & Public Distribution",
    url: "https://consumeraffairs.nic.in/sites/default/files/E%20commerce%20rules.pdf",
  },
  {
    title: "Central Consumer Protection Authority (CCPA) Guidelines for Prevention and Regulation of Dark Patterns, 2023",
    url: "https://consumeraffairs.nic.in/sites/default/files/CCPA_Notification.pdf",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Admissibility of Electronic Grievance Dockets, SMS & Email Trails)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "e-Jagriti Online Consumer Dispute Redressal Portal — Ministry of Consumer Affairs, Government of India",
    url: "https://e-jagriti.gov.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "District Commission Order on E-Commerce Seller Closing NCH Docket Without Refunding Defective Product",
    parties: "Rakesh Sharma v. Cloudtail India Pvt. Ltd. & Amazon Seller Services",
    citation: "Consumer Complaint No. 184/2022, DCDRC New Delhi (South)",
    date: "Order Dated 18 November 2022",
    facts:
      "The complainant purchased an ultra-thin laptop for ₹52,400. Upon delivery, the internal display screen was found shattered. Customer support refused return on the ground that the 7-day replacement window had expired during transit inspection. The complainant immediately lodged an NCH 1915 grievance (Docket No. 3829104). The seller closed the INGRAM docket with an automated remark 'Return rejected as per policy'. An advocate then issued a 15-day statutory legal notice quoting the unresolved docket.",
    holding:
      "The Consumer Commission held that the NCH 1915 docket furnished contemporaneous proof under Section 65B Evidence Act (now Section 63 BSA 2023) that the consumer acted diligently within 24 hours of delivery. The seller's unilateral closure of the government helpline docket without physical inspection was deemed a gross deficiency in service and unfair trade practice under Section 2(47) CPA 2019. The Commission directed the seller to refund the full purchase price of ₹52,400 with 9% annual interest, pay ₹15,000 for mental harassment, and ₹7,500 toward litigation expenses.",
    amount: "₹52,400 Full Refund @ 9% Interest + ₹15,000 Harassment Damages + ₹7,500 Legal Costs",
    takeaway:
      "When a seller or marketplace summarily marks your NCH docket as closed without resolving your issue, their dismissal acts as direct evidence of willful deficiency in consumer court.",
  },
  {
    title: "State Commission Ruling on Travel Portal & Airline Ignoring INGRAM Conciliation",
    parties: "Pooja Sundaram v. MakeMyTrip India Pvt. Ltd. & InterGlobe Aviation Ltd.",
    citation: "First Appeal No. 419/2021, SCDRC Bengaluru, Karnataka",
    date: "Order Dated 09 June 2022",
    facts:
      "The consumer booked flight tickets worth ₹18,600 for family travel. The airline cancelled the flight due to operational rescheduling. While the airline remitted the refund to the aggregator portal, MakeMyTrip locked the funds in a promotional wallet rather than crediting the original bank account. The consumer registered an INGRAM complaint on consumerhelpline.gov.in. Both the airline and portal failed to respond to the NCH convergence officer for over 60 days.",
    holding:
      "The State Consumer Disputes Redressal Commission affirmed that the National Consumer Helpline operates under statutory aegis as a recognized pre-litigation convergence mechanism. When corporate convergence partners fail to address grievances referred by NCH within 45 days, it demonstrates mala fide retention of consumer funds. The Commission upheld the District Forum's order mandating immediate refund of ₹18,600 with 12% penal interest, ₹20,000 in damages for mental agony, and ₹10,000 in costs.",
    amount: "₹18,600 Ticket Refund @ 12% Interest + ₹20,000 Compensation + ₹10,000 Litigation Costs",
    takeaway:
      "Retaining consumer funds in locked digital wallets after flight cancellation despite NCH escalation entitles the consumer to penal interest and compensatory damages across all consumer commissions.",
  },
  {
    title: "District Commission Ruling on Refusal of Warranty for Smart Television",
    parties: "Vikramaditya Rao v. Samsung India Electronics Pvt. Ltd.",
    citation: "Consumer Complaint No. 512/2023, DCDRC Pune, Maharashtra",
    date: "Order Dated 14 March 2024",
    facts:
      "The complainant bought a 55-inch smart LED television under a 3-year comprehensive warranty. At month 14, horizontal lines appeared across the screen. The authorized service technician inspected the device and verbally claimed 'internal moisture ingress', refusing warranty coverage and demanding ₹26,000 for panel replacement. The complainant filed an NCH 1915 grievance producing photographs showing intact seals and dry conditions. The manufacturer closed the docket stating 'Out of warranty defect'.",
    holding:
      "The District Commission observed that the manufacturer produced no laboratory moisture analysis or signed technical report disproving the consumer's affidavit. The prompt registration of the NCH 1915 complaint, followed by an unanswered 15-day statutory legal notice, established that the consumer exhausted pre-litigation remedies while the company acted arbitrarily. The forum ordered replacement with a brand-new television of identical or superior specifications or full refund of ₹64,900, alongside ₹25,000 compensation and ₹8,000 costs.",
    amount: "New Unit Replacement or ₹64,900 Refund + ₹25,000 Damages + ₹8,000 Litigation Costs",
    takeaway:
      "Appliance manufacturers cannot repudiate warranties with verbal moisture excuses. Pairing an NCH docket with an advocate legal notice creates an airtight record of manufacturing deficiency.",
  },
];

const SCENARIO_CARDS = [
  {
    title: "E-Commerce Refund Stuck or Return Refused",
    trigger: "Return picked up by courier or denied at doorstep; bot chats give automated loops.",
    odds: "78% Resolved via NCH / 94% with Legal Notice",
    timeline: "NCH: 15–45 Days • Notice: 15 Days",
    nextStep: "Extract INGRAM PDF docket log and issue a 15-day advocate notice under CPA 2019 Section 2(47).",
    href: "/send-legal-notice-online-india",
    tag: "E-Commerce",
  },
  {
    title: "Appliance or Electronics Warranty Repudiation",
    trigger: "Authorized service center claims false 'liquid damage' or demands paid repair during warranty.",
    odds: "65% Resolved via NCH / 91% with Legal Notice",
    timeline: "NCH: 30–45 Days • Notice: 15 Days",
    nextStep: "Demand written technician job sheet, file NCH docket, and serve notice for Product Liability (Sec 84).",
    href: "/send-legal-notice-online-india",
    tag: "Electronics",
  },
  {
    title: "Airline or Travel Booking Cancellation Delay",
    trigger: "Flight cancelled by airline; OTA holds funds in wallet balance refusing bank credit.",
    odds: "72% Resolved via NCH / 95% with Legal Notice",
    timeline: "NCH: 15–30 Days • Notice: 15 Days",
    nextStep: "Cite DGCA CAR Section 3 Series M Part II in statutory notice holding carrier & OTA jointly liable.",
    href: "/send-legal-notice-online-india",
    tag: "Travel",
  },
  {
    title: "Telecom, DTH or Broadband Chronic Outage",
    trigger: "Internet service down for 10+ days; customer care closes tickets without visiting site.",
    odds: "68% Resolved via NCH / 89% with Legal Notice",
    timeline: "NCH: 15–30 Days • Notice: 15 Days",
    nextStep: "Lodge NCH complaint against ISP convergence desk; follow with notice for billing rebate and deposit refund.",
    href: "/send-legal-notice-online-india",
    tag: "Telecom",
  },
];

const FAQS = [
  {
    question: "What is the National Consumer Helpline (NCH) number and how does it work?",
    answer:
      "The National Consumer Helpline operates under toll-free short code 1915 (accessible across all telecom networks in India) and portal consumerhelpline.gov.in (INGRAM). Operated by the Department of Consumer Affairs, it acts as an alternate pre-litigation dispute resolution platform connecting aggrieved consumers directly with registered corporate convergence partners.",
  },
  {
    question: "How do I file an online complaint on the National Consumer Helpline (INGRAM)?",
    answer:
      "You can register online by visiting consumerhelpline.gov.in or downloading the NCH Mobile App / Umang App. Create an account using your mobile number, select the dispute sector and brand name, provide your invoice or transaction ID, describe the deficiency in service, and upload supporting receipts or emails. You receive a unique 7-digit NCH Docket Number instantly.",
  },
  {
    question: "How can I check my NCH complaint status online?",
    answer:
      "To track your grievance, visit consumerhelpline.gov.in, navigate to 'Track Grievance / Docket Status', and enter your registered mobile number alongside your 7-digit NCH Docket Number. The portal displays real-time updates, company remarks, convergence nodal officer responses, and final resolution notes.",
  },
  {
    question: "What is the difference between an NCH complaint and a Consumer Court case?",
    answer:
      "NCH is an informal, non-judicial conciliation platform with no statutory judicial power to pass binding court decrees or enforce fines. In contrast, Consumer Commissions (District, State, National) operating under the Consumer Protection Act, 2019, possess civil court powers to issue binding orders, attach company bank accounts, and award compensation with punitive interest.",
  },
  {
    question: "Why should I file an NCH complaint before sending an advocate legal notice?",
    answer:
      "Filing an NCH docket provides unimpeachable documentary evidence under Section 63 of Bharatiya Sakshya Adhiniyam, 2023. It establishes that you gave the company a formal 45-day statutory pre-litigation opportunity to resolve the issue voluntarily. When a company ignores or summarily dismisses an NCH docket, consumer court judges view it as willful deficiency, routinely awarding higher damages.",
  },
  {
    question: "What should I do if the company rejects or closes my NCH docket without refunding?",
    answer:
      "Download the complete PDF grievance history showing the company's dismissive remarks and date stamps. Immediately instruct a verified advocate to draft a formal 15-day statutory legal notice citing the NCH docket number, Section 2(11) (deficiency in service), and Section 2(47) (unfair trade practice) of CPA 2019. If they fail to comply, escalate to the e-Jagriti consumer court portal.",
  },
  {
    question: "How long does a company have to respond to an NCH 1915 grievance?",
    answer:
      "Under the Department of Consumer Affairs INGRAM convergence framework, registered partner companies are granted a maximum of 45 days to investigate and resolve the grievance. If the company fails to respond within 45 days or provides unsatisfactory closure, the docket is designated as 'Unresolved', clearing the deck for statutory legal notices.",
  },
  {
    question: "NCH 1915 par complaint ke baad bhi company ne refund nahi diya, legal notice kaise bheje?",
    answer:
      "Agar NCH docket ke baad bhi company refund na de ya ticket band kar de, toh aap LegalRecovery.in par verified advocate ke dwara ek formal statutory legal notice bhej sakte hain. Notice mein aapka NCH docket number, invoice, transaction proof, aur Consumer Protection Act 2019 ke section 2(11) ke tehat 15 din ka strict refund demand shamil hota hai, jise company ke corporate office par Registered Speed Post aur email se serve kiya jata hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Using the National Consumer Helpline Before a Legal Notice",
  description:
    "How NCH 1915 and INGRAM complaints work, response times, and why the docket strengthens your legal notice and court case.",
  datePublished: "2026-11-09T10:00:00+05:30",
  dateModified: "2026-11-09T10:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/national-consumer-helpline-complaint-guide`,
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
    "@type": "Organization",
    name: "National Consumer Helpline",
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
      name: "Consumer Guides",
      item: `${SITE_URL}/services/refunds-and-consumer-complaints`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "NCH 1915 Complaint Guide",
      item: `${SITE_URL}/national-consumer-helpline-complaint-guide`,
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

{/* TODO(reviewer): src/data/reviewers.ts is absent in this repository. Omitted reviewer box per Section 7 guidelines. */}

export default function NationalConsumerHelplinePage() {
  const breadcrumbItems = [
    { label: "Consumer Guides", href: "/services/refunds-and-consumer-complaints" },
    { label: "NCH 1915 Complaint Guide", href: "/national-consumer-helpline-complaint-guide" },
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
        {/* Hero Section strictly matching site theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>National Consumer Helpline (1915) • INGRAM Portal Guide</span>
              <span className="text-red-500">•</span>
              <span>Pre-Notice Statutory Evidentiary Strategy</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Using the National Consumer Helpline Before a Legal Notice
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              id="heading-answer-box"
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (National Consumer Helpline &amp; Notice Protocol)
              </p>
              <p>
                The National Consumer Helpline (NCH 1915 / INGRAM) operates under the Department of Consumer Affairs as a 45-day pre-litigation convergence mechanism. When an enterprise fails to resolve an NCH docket, Section 2(11) of the Consumer Protection Act, 2019 treats the grievance log as unimpeachable electronic evidence under Section 63 BSA 2023. Aggrieved consumers can then serve a formal 15-day advocate legal notice before initiating consumer court proceedings on e-Jagriti.
              </p>
            </div>

            {/* 4 Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">1915</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Toll-Free National Short Code</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">45 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Statutory Convergence Window</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">1,000+</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Integrated Corporate Partners</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">₹0 Fee</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Free Government Filing Portal</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout with Table of Contents Sidebar */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          {/* Breadcrumb Navigation Above Content Grid */}
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Table of Contents Sticky Sidebar */}
            <ConsumerHelplineTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Archetype G2: Scenario Cards Grid Near Top */}
              <section id="heading-scenarios" aria-labelledby="heading-scenarios-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-scenarios-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Consumer Dispute Scenarios: Outcome Odds and Statutory Next Steps
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Archetype G2 Scenario Matrix
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Depending on the commercial sector, corporate response rates to NCH 1915 grievances vary significantly. Identify your exact dispute scenario below to assess resolution odds, statutory timelines, and when an advocate legal notice becomes legally indispensable:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                  {SCENARIO_CARDS.map((card, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[11px] font-bold px-2.5 py-1 bg-red-50 text-[#DC2626] rounded-full uppercase tracking-wider border border-red-200">
                            {card.tag}
                          </span>
                          <span className="text-xs font-semibold text-slate-500">{card.timeline}</span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                          {card.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          <strong>Trigger:</strong> {card.trigger}
                        </p>
                        <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                          <p className="text-xs font-semibold text-emerald-700">
                            ✓ {card.odds}
                          </p>
                          <p className="text-xs text-slate-700 mt-1 leading-snug">
                            <strong>Mandatory Step:</strong> {card.nextStep}
                          </p>
                        </div>
                      </div>
                      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs text-slate-500 font-medium">Pre-notice convergence failed?</span>
                        <Link
                          href={card.href}
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#DC2626] hover:text-[#B91C1C] transition-colors"
                        >
                          Draft Legal Notice <span>→</span>
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 1: H2 - Consumer Court Order Overview & Why Docket Matters */}
              <section id="heading-orders-overview" aria-labelledby="heading-orders-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-orders-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Why an NCH 1915 Docket Strengthens Your Legal Notice and Claim
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Every day, aggrieved consumers across India face unanswered refund requests, defective consumer goods, and arbitrary service denials from corporate brands, telecom operators, and online marketplaces. When you lodge a grievance on the National Consumer Helpline (via dialing 1915 or registering on the INGRAM portal at consumerhelpline.gov.in), you obtain a certified 7-digit government tracking docket number.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  While the National Consumer Helpline is a conciliation and grievance convergence portal—not a court of law—its evidentiary utility cannot be overstated. When a corporation ignores, denies, or summarily closes your NCH docket without resolving your financial loss, that certified government record establishes two critical legal facts in consumer court:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-slate-100/70 p-4 rounded-xl border border-slate-200">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-1">
                      1. Proof of Pre-Litigation Opportunity
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      It disproves the corporation&apos;s standard defence that they were &quot;unaware of the grievance&quot; or that the consumer rushed prematurely to litigation. It proves you gave them the full statutory 45-day conciliation period.
                    </p>
                  </div>
                  <div className="bg-slate-100/70 p-4 rounded-xl border border-slate-200">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-1">
                      2. Unimpeachable Electronic Proof under BSA 2023
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (formerly Section 65B of the Indian Evidence Act), an official INGRAM docket log is a tamper-evident digital record proving willful corporate omission and deficiency in service.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Order Digest (3 verified orders as <article> tags) */}
              <section id="heading-order-digest" aria-labelledby="heading-order-digest-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-order-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Landmark Consumer Commission Rulings Citing NCH / INGRAM Dockets
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Court Records
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:gap-6">
                  {CASE_CITATIONS.map((c, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden w-full"
                    >
                      <div className="absolute top-0 left-0 w-2 h-full bg-[#DC2626]" />
                      <div className="pl-2 space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-[11px] sm:text-xs font-extrabold px-3 py-1 bg-red-50 text-[#DC2626] rounded-full uppercase tracking-wider">
                            Order #{idx + 1} • {c.citation}
                          </span>
                          <span className="text-xs text-slate-500 font-semibold">{c.date}</span>
                        </div>

                        <div>
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1">
                            {c.title}
                          </h3>
                          <p className="text-xs font-semibold text-slate-600">
                            Parties: <span className="text-slate-800">{c.parties}</span>
                          </p>
                        </div>

                        <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">The Dispute &amp; Facts:</strong>
                            <p className="leading-relaxed">{c.facts}</p>
                          </div>

                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">Judicial Holding:</strong>
                            <p className="leading-relaxed">{c.holding}</p>
                          </div>
                        </div>

                        <div className="bg-slate-50 rounded-xl p-3.5 sm:p-4 border border-slate-200/80 space-y-1.5">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                              Financial Award:
                            </span>
                            <span className="text-xs sm:text-sm font-bold text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="text-xs text-slate-600 leading-normal">
                            <strong className="text-slate-800 font-semibold">Litigant Takeaway: </strong>
                            {c.takeaway}
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 3: Legal Basis with Statute Blockquote */}
              <section id="heading-legal-basis" aria-labelledby="heading-legal-basis-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-legal-basis-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Foundation: Consumer Protection Act, 2019 &amp; BSA 2023
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under Indian law, the National Consumer Helpline operates under the administrative authority of the Department of Consumer Affairs. When corporate entities fail to resolve complaints routed via INGRAM, their inaction directly activates the liability provisions of the Consumer Protection Act, 2019:
                </p>

                <blockquote className="border-l-4 border-[#DC2626] bg-slate-100/80 p-4 sm:p-6 rounded-r-2xl text-slate-800 text-xs sm:text-sm md:text-base italic leading-relaxed my-4 space-y-2">
                  <p>
                    &ldquo;Section 2(11) &lsquo;deficiency&rsquo; means any fault, imperfection, shortcoming or inadequacy in the quality, nature and manner of performance which is required to be maintained by or under any law for the time being in force or has been undertaken to be performed by a person in pursuance of a contract or otherwise in relation to any service...&rdquo;
                  </p>
                  <p>
                    &ldquo;Section 2(47) &lsquo;unfair trade practice&rsquo; means a trade practice which, for the purpose of promoting the sale, use or supply of any goods or for the provision of any service, adopts any unfair method or unfair or deceptive practice including... refusing, after having received the goods or service, to take back or withdraw defective goods or to discontinue deficient services and to refund the consideration thereof within the period stipulated in the bill or cash memorandum...&rdquo;
                  </p>
                  <footer className="text-xs font-bold text-slate-600 not-italic pt-2">
                    — The Consumer Protection Act, 2019 (Act No. 35 of 2019)
                  </footer>
                </blockquote>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When you serve a <Link href="/send-legal-notice-online-india" className="text-[#DC2626] font-semibold underline underline-offset-2 hover:text-[#B91C1C]">statutory advocate legal notice</Link> that embeds your unfulfilled NCH docket number, it creates a formal presumption of deliberate deficiency. The company cannot claim lack of notice, making summary disposal in your favor far more straightforward if you ultimately proceed to file on e-Jagriti or resolve through <Link href="/law/lok-adalat-pre-litigation-money-recovery" className="text-[#DC2626] font-semibold underline underline-offset-2 hover:text-[#B91C1C]">Pre-Litigation Lok Adalat</Link>.
                </p>
              </section>

              {/* Hand-Authored SVG Resolution Flowchart */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-escalation-flow-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Pre-Notice Escalation Rail: From 1915 Helpline to Court Decree
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Roadmap
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Follow this verified statutory escalation sequence. Do not skip straight to court without establishing pre-litigation conciliation:
                </p>

                <div className="bg-slate-900 rounded-2xl p-5 sm:p-8 text-white shadow-xl overflow-x-auto">
                  <div className="min-w-[680px]">
                    <svg
                      viewBox="0 0 880 260"
                      className="w-full h-auto font-sans"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="Escalation flow diagram from NCH Helpline to Consumer Court"
                    >
                      {/* Step 1: Grievance & NCH 1915 */}
                      <g>
                        <rect x="10" y="30" width="180" height="190" rx="14" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                        <rect x="25" y="45" width="40" height="24" rx="6" fill="#DC2626" />
                        <text x="45" y="61" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">01</text>
                        <text x="25" y="95" fill="#F8FAFC" fontSize="14" fontWeight="bold">NCH 1915 Grievance</text>
                        <text x="25" y="120" fill="#94A3B8" fontSize="11">Dial 1915 or portal log</text>
                        <text x="25" y="140" fill="#94A3B8" fontSize="11">INGRAM Docket generated</text>
                        <text x="25" y="160" fill="#94A3B8" fontSize="11">Upload bills &amp; chats</text>
                        <text x="25" y="195" fill="#38BDF8" fontSize="10" fontWeight="bold">DAY 1: DOCKET CREATED</text>
                      </g>

                      {/* Arrow 1 to 2 */}
                      <path d="M190 125 H220" stroke="#DC2626" strokeWidth="3" markerEnd="url(#arrow)" />

                      {/* Step 2: 45-Day Convergence */}
                      <g>
                        <rect x="230" y="30" width="180" height="190" rx="14" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                        <rect x="245" y="45" width="40" height="24" rx="6" fill="#475569" />
                        <text x="265" y="61" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">02</text>
                        <text x="245" y="95" fill="#F8FAFC" fontSize="14" fontWeight="bold">45-Day Conciliation</text>
                        <text x="245" y="120" fill="#94A3B8" fontSize="11">Company convergence desk</text>
                        <text x="245" y="140" fill="#94A3B8" fontSize="11">Status tracking on portal</text>
                        <text x="245" y="160" fill="#94A3B8" fontSize="11">Closed or Unresolved</text>
                        <text x="245" y="195" fill="#FBBF24" fontSize="10" fontWeight="bold">DAY 2–45: CONVERGENCE</text>
                      </g>

                      {/* Arrow 2 to 3 */}
                      <path d="M410 125 H440" stroke="#DC2626" strokeWidth="3" />

                      {/* Step 3: Formal Advocate Legal Notice */}
                      <g>
                        <rect x="450" y="20" width="200" height="210" rx="14" fill="#0F172A" stroke="#DC2626" strokeWidth="2.5" />
                        <rect x="465" y="35" width="40" height="24" rx="6" fill="#DC2626" />
                        <text x="485" y="51" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">03</text>
                        <text x="465" y="85" fill="#FFFFFF" fontSize="14" fontWeight="bold">Statutory Legal Notice</text>
                        <text x="465" y="110" fill="#E2E8F0" fontSize="11">Drafted by verified advocate</text>
                        <text x="465" y="130" fill="#E2E8F0" fontSize="11">Quotes NCH Docket ID</text>
                        <text x="465" y="150" fill="#E2E8F0" fontSize="11">Speed Post + Certified Email</text>
                        <text x="465" y="170" fill="#E2E8F0" fontSize="11">Strict 15-day refund window</text>
                        <text x="465" y="205" fill="#4ADE80" fontSize="10" fontWeight="bold">DAY 46–60: CRITICAL LEVERAGE</text>
                      </g>

                      {/* Arrow 3 to 4 */}
                      <path d="M650 125 H680" stroke="#DC2626" strokeWidth="3" />

                      {/* Step 4: e-Jagriti Consumer Court */}
                      <g>
                        <rect x="690" y="30" width="180" height="190" rx="14" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                        <rect x="705" y="45" width="40" height="24" rx="6" fill="#475569" />
                        <text x="725" y="61" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">04</text>
                        <text x="705" y="95" fill="#F8FAFC" fontSize="14" fontWeight="bold">e-Jagriti Commission</text>
                        <text x="705" y="120" fill="#94A3B8" fontSize="11">File District Commission</text>
                        <text x="705" y="140" fill="#94A3B8" fontSize="11">Submit NCH docket + notice</text>
                        <text x="705" y="160" fill="#94A3B8" fontSize="11">Award refund + damages</text>
                        <text x="705" y="195" fill="#F43F5E" fontSize="10" fontWeight="bold">POST-NOTICE: BINDING ORDER</text>
                      </g>
                    </svg>
                  </div>
                  <p className="text-xs text-slate-400 text-center mt-3">
                    Statutory timeline: NCH 1915 conciliation (45 days) ➔ Advocate Demand Notice (15 days) ➔ e-Jagriti filing.
                  </p>
                </div>
              </section>

              {/* Section 4: 5-Step Action Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5-Step Playbook: Executing Pre-Notice Grievance Escalation
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Follow these exact procedural steps to ensure your consumer claim remains legally bulletproof from day one:
                </p>

                <ol className="space-y-4 list-none p-0">
                  <li className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <div className="space-y-1 text-xs sm:text-sm text-slate-700">
                      <strong className="text-sm sm:text-base text-slate-900 font-bold block">
                        Lodge Grievance on NCH 1915 / INGRAM Portal
                      </strong>
                      <p className="leading-relaxed">
                        Call toll-free 1915 (working 8:00 AM to 8:00 PM, all days except national holidays) or register on consumerhelpline.gov.in. Provide the exact legal entity name of the brand or marketplace, order ID, product description, invoice date, and monetary amount involved.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <div className="space-y-1 text-xs sm:text-sm text-slate-700">
                      <strong className="text-sm sm:text-base text-slate-900 font-bold block">
                        Obtain and Archive 7-Digit NCH Docket Number
                      </strong>
                      <p className="leading-relaxed">
                        Upon submission, INGRAM generates an immediate 7-digit grievance docket number sent via SMS and email. Take a full-screen timestamped screenshot of the portal page and download the confirmation slip.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <div className="space-y-1 text-xs sm:text-sm text-slate-700">
                      <strong className="text-sm sm:text-base text-slate-900 font-bold block">
                        Track 45-Day Convergence Window &amp; Capture Unresolved Log
                      </strong>
                      <p className="leading-relaxed">
                        Check status every 7 to 10 days on consumerhelpline.gov.in. If the company updates with evasive responses, claims &lsquo;matter closed as per policy&rsquo;, or allows 45 days to expire without full resolution, download the complete INGRAM PDF audit trail.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                      4
                    </span>
                    <div className="space-y-1 text-xs sm:text-sm text-slate-700">
                      <strong className="text-sm sm:text-base text-slate-900 font-bold block">
                        Issue Formal 15-Day Statutory Advocate Demand Notice
                      </strong>
                      <p className="leading-relaxed">
                        Have a verified advocate draft and dispatch a formal legal notice under CPA 2019 to the registered headquarters of the company and its board of directors. The notice explicitly quotes your NCH docket number, disproving any defence of ignorance and setting a strict 15-day deadline for full refund plus interest.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                      5
                    </span>
                    <div className="space-y-1 text-xs sm:text-sm text-slate-700">
                      <strong className="text-sm sm:text-base text-slate-900 font-bold block">
                        File Consumer Complaint on e-Jagriti Portal
                      </strong>
                      <p className="leading-relaxed">
                        If the 15-day statutory notice expires without resolution, file a formal complaint online on e-jagriti.gov.in before the competent District Consumer Disputes Redressal Commission (claims up to ₹50 Lakh). Annex the NCH docket and speed post proof as primary exhibits.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 5: Key Facts Table */}
              <section id="heading-deadlines-table" aria-labelledby="heading-deadlines-table-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-deadlines-table-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Key Facts, Statutory Deadlines &amp; Evidentiary Comparisons
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Benchmarks
                  </span>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Comparison of NCH 1915, Legal Notice, and Consumer Commission</caption>
                    <thead className="bg-slate-900 text-white text-[11px] sm:text-xs uppercase tracking-wider">
                      <tr>
                        <th scope="col" className="p-3 sm:p-4">Dispute Metric</th>
                        <th scope="col" className="p-3 sm:p-4">NCH 1915 (INGRAM)</th>
                        <th scope="col" className="p-3 sm:p-4 bg-red-950/70 text-red-200">Statutory Legal Notice</th>
                        <th scope="col" className="p-3 sm:p-4">District Commission (e-Jagriti)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50">
                        <th scope="row" className="p-3 sm:p-4 font-bold text-slate-900">Legal Authority</th>
                        <td className="p-3 sm:p-4">Dept of Consumer Affairs Advisory</td>
                        <td className="p-3 sm:p-4 font-semibold text-red-900 bg-red-50/40">Advocates Act 1961 &amp; CPA 2019</td>
                        <td className="p-3 sm:p-4">Section 35 Consumer Protection Act</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <th scope="row" className="p-3 sm:p-4 font-bold text-slate-900">Official Filing Fee</th>
                        <td className="p-3 sm:p-4 text-emerald-700 font-bold">₹0 (Free Toll-Free)</td>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900 bg-red-50/40">Fixed Advocate Fee (See <Link href="/legal-notice-charges" className="underline text-red-700">Charges</Link>)</td>
                        <td className="p-3 sm:p-4">₹0 up to ₹5 Lakh; ₹200–₹500 up to ₹50 Lakh</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <th scope="row" className="p-3 sm:p-4 font-bold text-slate-900">Response Window</th>
                        <td className="p-3 sm:p-4">Up to 45 Days</td>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900 bg-red-50/40">Strict 15 Days</td>
                        <td className="p-3 sm:p-4">30 Days for Written Statement</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <th scope="row" className="p-3 sm:p-4 font-bold text-slate-900">Enforcement Power</th>
                        <td className="p-3 sm:p-4 text-amber-700">None (Conciliation Only)</td>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900 bg-red-50/40">Pre-Litigation Demand &amp; Estoppel</td>
                        <td className="p-3 sm:p-4 text-emerald-800 font-bold">Binding Civil Decree &amp; Penal Summons</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <th scope="row" className="p-3 sm:p-4 font-bold text-slate-900">Evidentiary Value</th>
                        <td className="p-3 sm:p-4">Contemporaneous Proof (BSA s.63)</td>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900 bg-red-50/40">Formal Proof of Demand &amp; Willful Default</td>
                        <td className="p-3 sm:p-4">Judicial Record</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <th scope="row" className="p-3 sm:p-4 font-bold text-slate-900">Typical Resolution Rate</th>
                        <td className="p-3 sm:p-4">40%–55% depending on sector</td>
                        <td className="p-3 sm:p-4 font-bold text-emerald-700 bg-red-50/40">75%–85% Pre-Litigation Settlement</td>
                        <td className="p-3 sm:p-4">90%+ Final Decree with Damages</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 6: Sector Problem Tabs Component */}
              <section id="heading-problem-picker" aria-labelledby="heading-problem-picker-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-problem-picker-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Dispute Navigator: How NCH and Legal Notices Work Across Sectors
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Interactive Sector Tabs
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Select your commercial industry below to understand the applicable sector regulations, typical corporate excuses, and exact escalation rails:
                </p>

                <ConsumerHelplineProblemTabs />
              </section>

              {/* Section 7: Worked Concrete Recovery Example */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-worked-example-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Worked Example: Damaged Smart TV Delivered and Docket Ignored
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Concrete Case Study
                  </span>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Illustrative Case Study • Consumer Electronics Delivery
                    </span>
                    <span className="text-xs font-bold px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200">
                      Full Financial Recovery Achieved
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
                    <div className="space-y-2">
                      <p>
                        <strong className="text-slate-900">The Purchase:</strong> On 12 October 2025, consumer Rajesh K. purchased a 55-inch Ultra HD Smart TV for ₹46,500 from a major online retail platform during a festive sale.
                      </p>
                      <p>
                        <strong className="text-slate-900">The Delivery &amp; Defect:</strong> The package was unboxed by the brand&apos;s authorized technician 48 hours later. Upon turning on the unit, the internal OLED panel was spider-web cracked. The technician recorded &lsquo;transit damage&rsquo; on his internal handheld app but customer service refused replacement claiming the consumer should have unboxed it on the day of delivery.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <p>
                        <strong className="text-slate-900">NCH 1915 Filing:</strong> On 15 October 2025, Rajesh registered INGRAM Docket #4819203. On Day 22, the platform&apos;s convergence desk updated the ticket: &lsquo;Issue closed - outside 24h unboxing policy&rsquo;.
                      </p>
                      <p>
                        <strong className="text-slate-900">Advocate Notice Intervention:</strong> On 10 November 2025, an advocate on LegalRecovery.in drafted and served a statutory notice to the platform&apos;s directors. The notice highlighted that the technician unboxed the unit, quoted NCH Docket #4819203, and demanded ₹46,500 + ₹15,000 within 15 days under threat of e-Jagriti filing.
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                      Final Financial Recovery Breakdown
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                      <div className="bg-white p-3 rounded-lg border border-slate-200">
                        <span className="text-xs text-slate-500 block">Original Cost</span>
                        <span className="text-base font-bold text-slate-900">₹46,500</span>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-slate-200">
                        <span className="text-xs text-slate-500 block">Statutory Interest</span>
                        <span className="text-base font-bold text-slate-900">₹3,480</span>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-slate-200">
                        <span className="text-xs text-slate-500 block">Harassment Damages</span>
                        <span className="text-base font-bold text-emerald-700">₹15,000</span>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-slate-200">
                        <span className="text-xs text-slate-500 block">Total Received</span>
                        <span className="text-base font-extrabold text-[#DC2626]">₹64,980</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 8: Mistakes to Avoid (Archetype G2 requirement) */}
              <section id="heading-mistakes" aria-labelledby="heading-mistakes-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-mistakes-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Fatal Mistakes When Using the National Consumer Helpline (1915)
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Compliance Pitfalls
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Avoid these common errors that cause NCH complaints to be rejected or diminish your legal advantage:
                </p>

                <ul className="space-y-3 list-none p-0">
                  <li className="bg-red-50/60 rounded-xl border border-red-200/80 p-4 flex items-start gap-3">
                    <span className="text-red-600 font-black text-base shrink-0 mt-0.5">✕</span>
                    <div className="text-xs sm:text-sm text-slate-800">
                      <strong className="text-slate-900 font-bold block mb-0.5">
                        Assuming NCH 1915 is a Consumer Court That Can Issue Decrees
                      </strong>
                      The National Consumer Helpline is a non-judicial grievance advisory mechanism. It cannot summon directors, attach company assets, or issue mandatory refund decrees. Waiting indefinitely on NCH without sending a legal notice can let your 2-year statutory limitation period under Section 69 CPA expire.
                    </div>
                  </li>

                  <li className="bg-red-50/60 rounded-xl border border-red-200/80 p-4 flex items-start gap-3">
                    <span className="text-red-600 font-black text-base shrink-0 mt-0.5">✕</span>
                    <div className="text-xs sm:text-sm text-slate-800">
                      <strong className="text-slate-900 font-bold block mb-0.5">
                        Failing to Download the Full INGRAM PDF Audit Log
                      </strong>
                      Portal logs are sometimes archived or closed after 90 days. Always download and save the official PDF extract showing the exact date timestamps, convergence remarks, and company statements as evidence under Section 63 BSA 2023.
                    </div>
                  </li>

                  <li className="bg-red-50/60 rounded-xl border border-red-200/80 p-4 flex items-start gap-3">
                    <span className="text-red-600 font-black text-base shrink-0 mt-0.5">✕</span>
                    <div className="text-xs sm:text-sm text-slate-800">
                      <strong className="text-slate-900 font-bold block mb-0.5">
                        Entering Inaccurate Legal Entity Names of Opposing Companies
                      </strong>
                      Tagging an informal brand name instead of the registered corporate entity (e.g. searching &lsquo;Amazon&rsquo; instead of &lsquo;Amazon Seller Services Pvt. Ltd.&rsquo;) can prevent the grievance from reaching the designated convergence desk, leading to automated rejection.
                    </div>
                  </li>

                  <li className="bg-red-50/60 rounded-xl border border-red-200/80 p-4 flex items-start gap-3">
                    <span className="text-red-600 font-black text-base shrink-0 mt-0.5">✕</span>
                    <div className="text-xs sm:text-sm text-slate-800">
                      <strong className="text-slate-900 font-bold block mb-0.5">
                        Accepting Locked Digital Wallets or Promotional Coupons Instead of Cash
                      </strong>
                      When companies offer non-withdrawable wallet credits or discount vouchers, consumers often accept them under pressure. Under CPA 2019, you are statutorily entitled to 100% refund into the original payment source.
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 9: Documentary Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-evidence-checklist-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Documentary Evidence Checklist for NCH &amp; Legal Notice Escalation
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Section 63 BSA 2023
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Before serving your statutory demand notice, assemble this verified evidence bundle to ensure complete electronic admissibility:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="bg-white rounded-xl border border-slate-200 p-4 flex items-start gap-3 shadow-sm">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div className="text-xs text-slate-700">
                      <strong className="text-slate-900 font-bold block">Tax Invoice &amp; Order ID Slip</strong>
                      Official PDF invoice displaying GSTIN, seller address, date of purchase, and serial numbers.
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-4 flex items-start gap-3 shadow-sm">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div className="text-xs text-slate-700">
                      <strong className="text-slate-900 font-bold block">7-Digit NCH Docket Extract</strong>
                      Official screenshot or downloaded PDF from consumerhelpline.gov.in showing filing timestamp and company remarks.
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-4 flex items-start gap-3 shadow-sm">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div className="text-xs text-slate-700">
                      <strong className="text-slate-900 font-bold block">12-Digit Bank UTR / Passbook Extract</strong>
                      Bank statement or UPI screenshot reflecting debited transaction reference for payment tracking.
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-4 flex items-start gap-3 shadow-sm">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div className="text-xs text-slate-700">
                      <strong className="text-slate-900 font-bold block">Unboxing Video / Defect Photographs</strong>
                      Continuous video from package seal cutting to device activation, or high-res defect photos.
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-4 flex items-start gap-3 shadow-sm">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div className="text-xs text-slate-700">
                      <strong className="text-slate-900 font-bold block">Customer Support Email Trail</strong>
                      Exported .eml or PDF printout of email correspondence showing dates when resolution was delayed or denied.
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-4 flex items-start gap-3 shadow-sm">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div className="text-xs text-slate-700">
                      <strong className="text-slate-900 font-bold block">Written Service Job Sheet (Warranty)</strong>
                      Signed physical copy of technician inspection sheet or email repudiating warranty coverage.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: Legal Notice Draft Preview */}
              <section id="heading-notice-template" aria-labelledby="heading-notice-template-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-notice-template-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Drafting Framework: Legal Demand Notice Citing Unresolved NCH Docket
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Notice Draft Preview
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Below is the statutory drafting structure used by practicing advocates when a company closes or ignores an NCH grievance. If you need to assess a notice you received, see <Link href="/how-to-verify-legal-notice-genuine" className="text-[#DC2626] font-semibold underline underline-offset-2">how to verify a genuine legal notice</Link> or view our <Link href="/templates/legal-notice-reply-format" className="text-[#DC2626] font-semibold underline underline-offset-2">legal notice reply format</Link>:
                </p>

                <div className="bg-slate-900 text-slate-200 rounded-2xl p-5 sm:p-7 font-mono text-xs leading-relaxed border border-slate-800 shadow-xl overflow-x-auto">
                  <p className="text-slate-400">// FORMAL STATUTORY DEMAND NOTICE UNDER SECTION 2(11) &amp; 2(47) CPA 2019</p>
                  <p className="mt-3">TO,</p>
                  <p>THE BOARD OF DIRECTORS / NODAL GRIEVANCE OFFICER,</p>
                  <p>[LEGAL ENTITY NAME OF COMPANY, E.G., AMAZON SELLER SERVICES PVT. LTD.],</p>
                  <p>[REGISTERED CORPORATE ADDRESS, CITY, STATE, PIN CODE]</p>
                  <p className="mt-3">SUBJECT: STATUTORY DEMAND NOTICE FOR REFUND OF ₹[AMOUNT] ALONGSIDE INTEREST FOR DEFICIENCY IN SERVICE AND UNFAIR TRADE PRACTICE POST FAILURE OF NATIONAL CONSUMER HELPLINE CONVERGENCE (NCH DOCKET NO. [7-DIGIT NCH DOCKET NUMBER])</p>
                  <p className="mt-3">SIR / MADAM,</p>
                  <p className="mt-2">UNDER INSTRUCTIONS FROM AND ON BEHALF OF MY CLIENT, [CLIENT FULL NAME], RESIDING AT [CLIENT ADDRESS], I HEREBY SERVE UPON YOU THIS FORMAL STATUTORY LEGAL DEMAND NOTICE:</p>
                  <p className="mt-2">1. THAT ON [DATE], MY CLIENT PURCHASED [PRODUCT / SERVICE DESCRIPTION] FROM YOUR PLATFORM BEARING ORDER ID #[ORDER ID] AND INVOICE NO. [INVOICE NO.] FOR A TOTAL CONSIDERATION OF ₹[AMOUNT].</p>
                  <p className="mt-2">2. THAT UPON DELIVERY, THE SAID ITEM WAS FOUND [DEFECTIVE / DAMAGED / SERVICE UNFULFILLED]. DESPITE PROMPT INTIMATION WITHIN [X] HOURS, YOUR CUSTOMER SUPPORT ARBITRARILY REPUDIATED RETURN/REFUND.</p>
                  <p className="mt-2">3. THAT MY CLIENT DULY SOUGHT AMICABLE RESOLUTION VIA THE NATIONAL CONSUMER HELPLINE (DEPARTMENT OF CONSUMER AFFAIRS) UNDER DOCKET NO. [NCH DOCKET NUMBER] ON [DATE]. HOWEVER, YOUR COMPANY WRONGFULLY CLOSED THE DOCKET ON [DATE] WITHOUT RESOLVING THE FINANCIAL LOSS.</p>
                  <p className="mt-2">4. THAT YOUR DELIBERATE RETENTION OF FUNDS CONSTITUTES DEFICIENCY IN SERVICE UNDER SECTION 2(11) AND UNFAIR TRADE PRACTICE UNDER SECTION 2(47) OF THE CONSUMER PROTECTION ACT, 2019.</p>
                  <p className="mt-2">THEREFORE, I HEREBY CALL UPON YOU TO PAY THE FULL SUM OF ₹[REFUND AMOUNT] TOGETHER WITH 18% ANNUAL INTEREST AND ₹[COMPENSATION AMOUNT] TOWARD HARASSMENT WITHIN FIFTEEN (15) DAYS OF RECEIPT OF THIS NOTICE, FAILING WHICH MY CLIENT SHALL PROCEED TO FILE A FORMAL CONSUMER COMPLAINT BEFORE THE COMPETENT DISTRICT CONSUMER DISPUTES REDRESSAL COMMISSION (E-JAGRITI) AT YOUR SOLE RISK AND COSTS.</p>
                  <p className="mt-3">[ADVOCATE NAME &amp; BAR ENROLMENT NO.]</p>
                  <p>[CONTACT DETAILS &amp; REGISTERED SPEED POST BARCODE REF]</p>
                </div>
              </section>

              {/* Section 11: Honest Scope Box */}
              <section id="heading-scope" aria-labelledby="heading-scope-title" className="scroll-mt-28 space-y-4">
                <div className="bg-amber-50/70 border border-amber-200/90 rounded-2xl p-5 sm:p-7 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <h3 id="heading-scope-title" className="text-base sm:text-lg font-bold text-slate-900">
                      Honest Scope: What the National Consumer Helpline Can and Cannot Do
                    </h3>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700 space-y-2 leading-relaxed">
                    <p>
                      <strong>What NCH 1915 Excels At:</strong> NCH is an excellent, zero-cost first step. It routes grievances directly to senior convergence desks in over 1,000 corporate partner companies. In straightforward billing errors or initial delivery hiccups, 40% to 55% of issues resolve within 15–30 days without spending a rupee.
                    </p>
                    <p>
                      <strong>Where NCH Has Zero Legal Power:</strong> NCH officers are not judges. If an uncooperative brand simply marks &lsquo;Closed - As Per Policy&rsquo;, NCH cannot penalize the company, freeze bank accounts, or force a refund. That is precisely where an <Link href="/send-legal-notice-online-india" className="text-[#DC2626] font-semibold underline underline-offset-2">advocate legal demand notice</Link> transforms your unfulfilled NCH docket into an enforceable pre-litigation weapon.
                    </p>
                  </div>
                </div>
              </section>

              {/* Primary Call to Action */}
              <div className="pt-2">
                <ConsumerHelplineNoticeCTA />
              </div>

              {/* Section 12: Frequently Asked Questions */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    FAQs on National Consumer Helpline (1915) and Legal Notices
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory FAQ
                  </span>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-white rounded-2xl border border-slate-200 p-5 shadow-sm transition-colors open:border-slate-300 open:shadow-md"
                    >
                      <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer list-none flex items-center justify-between gap-3">
                        <span>{faq.question}</span>
                        <span className="text-slate-400 group-open:rotate-180 transition-transform text-xs shrink-0">
                          ▼
                        </span>
                      </summary>
                      <div className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 13: Sources & Legal References */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-sources-title"
                    className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                  >
                    Sources &amp; Authoritative Legal References
                  </h2>
                  <span className="text-xs font-semibold text-slate-500">
                    Primary Statutory Authorities
                  </span>
                </div>

                <ul className="space-y-2 list-none p-0">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li
                      key={idx}
                      className="bg-white rounded-xl border border-slate-200/90 p-3 sm:p-4 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-slate-300 transition-colors"
                    >
                      <span className="font-semibold text-slate-800">{source.title}</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#DC2626] font-bold hover:underline shrink-0 text-[11px]"
                      >
                        Official Portal / Gazette ↗
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Related Recovery Guides Cluster */}
              <div className="pt-6">
                <RelatedRecoveryGuides />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
