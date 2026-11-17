import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import SponsorshipRecoveryNoticeCTA from "./SponsorshipRecoveryNoticeCTA";
import SponsorshipRecoveryTableOfContents from "./SponsorshipRecoveryTableOfContents";
import SponsorshipRecoveryScenarioTabs from "./SponsorshipRecoveryScenarioTabs";

export const revalidate = 86400;

const CANONICAL_URL = `${SITE_URL}/sponsorship-fee-default-conference-sports-festival-organizer-recovery`;
const PAGE_H1 =
  "Title or Powered-By Sponsor Enjoyed Full Stage Branding, Booth & Keynote Slot—and Defaulted Post-Event? Sponsorship Recovery Playbook";

export const metadata: Metadata = {
  title: "Sponsor Defaulted on Sponsorship Fee After Event? Recovery Guide",
  description:
    "Title sponsor enjoyed stage branding & defaulted post-event? Recover unpaid sponsorship fees via CPC Order 37 summary suit, BSA 2023 s.63 proof & MSMED Act.",
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: "Sponsor Defaulted on Sponsorship Fee After Event? Recovery Guide",
    description:
      "Title sponsor enjoyed stage branding & defaulted post-event? Recover unpaid sponsorship fees via CPC Order 37 summary suit, BSA 2023 s.63 proof & MSMED Act.",
    url: CANONICAL_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText("Sponsorship Fee Default Conference Sports Festival Organizer Recovery Playbook"),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sponsor Defaulted on Sponsorship Fee After Event? Recovery Guide",
    description:
      "Title sponsor enjoyed stage branding & defaulted post-event? Recover unpaid sponsorship fees via CPC Order 37 summary suit, BSA 2023 s.63 proof & MSMED Act.",
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
    title: "Code of Civil Procedure, 1908 (Order XXXVII — Summary Procedure on Written Contracts & Liquidated Sponsorship Demands)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Electronic Records Admissibility, Live Video Broadcast Logs & Photo Audit Metadata)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Indian Contract Act, 1872 (Section 70 — Non-Gratuitous Benefit of Event Branding & Section 73/74 — Compensation for Breach)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15–18 — 45-Day Payment Window & 3x RBI Bank Rate Interest)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Commercial Courts Act, 2015 (Section 2(1)(c)(xviii) — Commercial Disputes & Section 12A Mandatory Pre-Institution Mediation)",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title: "Negotiable Instruments Act, 1881 (Section 138 & 141 — Dishonour of Post-Dated Cheques & Vicarious Liability of Directors)",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
];

const SECTIONS = [
  { id: "operational-bottleneck", title: "The Post-Event Leverage Collapse" },
  { id: "decision-tree-statutory-sop", title: "Recovery Decision Tree & Workflow" },
  { id: "statutory-matrix", title: "Statutory Comparison Matrix" },
  { id: "scenario-explorer", title: "Commercial Failure Scenarios" },
  { id: "worked-financial-ledger", title: "Worked Financial & Interest Ledger" },
  { id: "bsa-evidence-audit", title: "BSA 2023 s.63 Evidence Checklist" },
  { id: "faqs", title: "Frequently Asked Questions" },
];

export default function SponsorshipRecoveryPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: PAGE_H1,
    description: metadata.description,
    image: `${SITE_URL}/blog_money_recovery.png`,
    author: {
      "@type": "Person",
      name: "Anuj Anand Malik",
      jobTitle: "Advocate & Founder",
      affiliation: {
        "@type": "Organization",
        name: "AMA Legal Solutions",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "LegalRecovery.in",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": CANONICAL_URL,
    },
    datePublished: "2026-11-17T09:00:00+05:30",
    dateModified: "2026-11-17T09:00:00+05:30",
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Conference, Sports & Festival Organizers Recover Defaulted Sponsorship Fees",
    description:
      "A 5-step operational and legal escalation protocol for conference promoters, sports franchises, and festival organizers to recover unpaid post-event sponsorship tranches.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Collate BSA 2023 Section 63 Deliverable Audit Deck",
        text: "Compile high-resolution photos of stage backdrops, badge scans, broadcast footage, social media impression screenshots, and sponsor logo displays with technical metadata hashes.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Serve Formal Advocate Demand Notice",
        text: "Issue a 15-day formal advocate demand notice under Order XXXVII CPC and Indian Contract Act Section 70 via Registered Speed Post AD, email, and WhatsApp.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Initiate Section 12A Pre-Institution Mediation or MSME Samadhaan",
        text: "If registered under Udyam, file an online reference before the MSEFC under Section 18 of the MSMED Act for compound interest at 3x RBI bank rate; alternatively, initiate Section 12A PIM.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Institute Summary Suit under Order XXXVII CPC",
        text: "File a summary suit in the designated Commercial Court based on the signed sponsorship agreement or email confirmation to secure a decree without protracted trial.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Attach Debtor Bank Accounts under Order XXXVIII Rule 5 CPC",
        text: "Seek an interim order for attachment before judgment to freeze the defaulting brand's operating bank accounts if liquidation or asset dissipation is suspected.",
      },
    ],
  };

  const faqItems = [
    {
      q: "Can we recover sponsorship fees if the sponsor only issued an email approval but never released an official Purchase Order (PO)?",
      a: "Yes. Under Section 70 of the Indian Contract Act, 1872, where a person lawfully does anything for another person, or delivers anything to them, not intending to do so gratuitously, and such other person enjoys the benefit thereof, the recipient is bound to make compensation. Furthermore, under the Information Technology Act, 2000 (Section 10A) and Section 63 of Bharatiya Sakshya Adhiniyam, 2023, an email confirmation from a corporate domain constitutes a legally binding contract. A missing internal ERP/SAP Purchase Order is an internal administrative workflow of the debtor, not a legal defense to non-payment once deliverables have been displayed.",
    },
    {
      q: "What if the sponsor claims footfall or delegate count was lower than expected and withholds 50%?",
      a: "Unless your signed sponsorship agreement expressly contained an objective, quantifiable 'Guaranteed Attendance Warranty' linked to liquidated financial clawbacks, subjective footfall dissatisfaction is not a valid ground to unilaterally alter contract fees. Courts and commercial arbitral tribunals consistently hold that event sponsorship represents a marketing visibility platform and license to exhibit, not a guarantee of sales conversion or consumer footfall. If the organizer provided the agreed stalls, logo placements, and stage slots, 100% of the contract price is payable.",
    },
    {
      q: "Can an event management company or sports league promoter claim MSME Samadhaan benefits?",
      a: "Yes, provided the organizer was registered as a Micro or Small Enterprise under the Udyam portal prior to the execution of the sponsorship contract or event date. Event production, trade-fair promotion, and sports event management qualify as service enterprises under NIC codes 82300 (Organization of conventions and trade shows) and 93190 (Other sports activities). Under Sections 15–18 of the MSMED Act, the debtor brand must pay within a maximum of 45 days, failing which compound interest at 3 times the RBI Bank Rate becomes mandatory.",
    },
    {
      q: "Why is an Order XXXVII CPC Summary Suit preferred over a regular civil suit for unpaid sponsorship?",
      a: "A regular civil suit takes years to reach trial and judgment. In contrast, Order XXXVII of the Code of Civil Procedure provides an expedited summary procedure for liquidated commercial debts arising on written contracts. The defaulting brand cannot file a written statement as a matter of right; they must apply for 'Leave to Defend' within 10 days of summons. If the brand fails to demonstrate a substantial, bona fide defense supported by pre-event complaints, the Commercial Court enters immediate judgment in favor of the event organizer.",
    },
    {
      q: "How does Section 63 of Bharatiya Sakshya Adhiniyam, 2023 impact event proof?",
      a: "Bharatiya Sakshya Adhiniyam, 2023 (BSA) replaced the Indian Evidence Act, 1872. Section 63 governs the admissibility of electronic records (such as stage photos, broadcast OTT logs, QR code badge scans, email trails, and WhatsApp chat exports). To rely on these digital proofs in court without producing original cameras or servers, the organizer must submit an electronic certificate under Section 63(4) signed by the authorized digital asset custodian or IT head validating system integrity and uncorrupted file hashes.",
    },
    {
      q: "What should an organizer do if the sponsor issued a cheque that was returned as 'Stop Payment'?",
      a: "Immediately issue a statutory demand notice under Section 138 of the Negotiable Instruments Act, 1881 within 30 days of receiving the bank memo. A 'Stop Payment' instruction does not shield the debtor; the Supreme Court has established that stopping payment on a dishonoured cheque carries the identical criminal presumption under Section 139 NI Act. Under Section 141, the Managing Director and signatory directors become criminally liable, and the court can award up to 20% interim compensation under Section 143A.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const breadcrumbsSchema = {
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
        name: "Advertising, Media & Event Recovery",
        item: `${SITE_URL}/industries/advertising-marketing-media-event-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Sponsorship Fee Default Recovery",
        item: CANONICAL_URL,
      },
    ],
  };

  return (
    <>
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Hero Section */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            {/* Eyebrow Badge */}
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>B2B-155</span>
              <span>&bull;</span>
              <span>IND-12 Event &amp; Sports IP Playbook</span>
              <span>&bull;</span>
              <span>Order XXXVII CPC &bull; MSMED Act s.16</span>
            </div>

            {/* Page H1 */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {PAGE_H1}
            </h1>

            {/* Executive Statutory Summary Box */}
            <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer &amp; Statutory Summary
              </span>
              Sponsorship commitments cannot be repudiated post-event once branding visibility, keynote speaker slots, and delegate passes have been delivered. When brand sponsors exploit delayed ERP purchase orders to withhold final tranches, organizers under our{" "}
              <Link
                href="/industries/advertising-marketing-media-event-recovery"
                className="text-red-400 hover:text-red-300 underline font-semibold"
              >
                Advertising, Media &amp; Event Recovery Hub
              </Link>{" "}
              can execute an Order XXXVII CPC Summary Suit, enforce non-gratuitous performance under Section 70 of the Indian Contract Act, and demand 3x RBI compound interest under the MSMED Act 2006 using Section 63 BSA 2023 certified deliverable audit decks.
            </div>

            {/* Hero 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider block">
                  Statutory Interest Rate
                </span>
                <p className="text-xl sm:text-2xl font-black text-emerald-400">3x RBI Rate</p>
                <p className="text-[10px] text-slate-400">Under MSMED Act s.16 compound monthly</p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider block">
                  CPC Summons Window
                </span>
                <p className="text-xl sm:text-2xl font-black text-slate-100">10 Days</p>
                <p className="text-[10px] text-slate-400">Debtor must file leave to defend in Order 37</p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider block">
                  Deliverable Audit
                </span>
                <p className="text-xl sm:text-2xl font-black text-amber-400">BSA s.63</p>
                <p className="text-[10px] text-slate-400">Certified digital audit deck destroys defenses</p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider block">
                  Pre-Judg. Protection
                </span>
                <p className="text-xl sm:text-2xl font-black text-red-400">Order 38 R.5</p>
                <p className="text-[10px] text-slate-400">Attachment of brand bank accounts prior to decree</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Layout */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <Breadcrumbs
            items={[
              {
                label: "Advertising, Media & Event Recovery",
                href: "/industries/advertising-marketing-media-event-recovery",
              },
              {
                label: "Sponsorship Recovery",
                href: CANONICAL_URL,
              },
            ]}
          />

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-6">
            {/* Left Sticky Sidebar Table of Contents */}
            <SponsorshipRecoveryTableOfContents sections={SECTIONS} />

            {/* Main Editorial Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: The Operational Bottleneck */}
              <section
                id="operational-bottleneck"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                    1
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    The Post-Event Leverage Collapse: Why Brand Sponsors Default After Receiving 100% Visibility
                  </h2>
                </div>

                <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
                  <p>
                    In the high-stakes commercial ecosystem of B2B industry summits, technology conferences, sports leagues, and cultural music festivals, the legal position of an event organizer differs fundamentally from traditional supply-chain vendors. A manufacturer who supplies machinery retains physical repossession remedies; an IT agency can revoke API keys or software licenses under{" "}
                    <Link
                      href="/copyright-not-transferred-until-paid-freelancer"
                      className="text-red-600 hover:text-red-700 font-semibold underline"
                    >
                      copyright reservation covenants
                    </Link>
                    . An event promoter, however, operates in an irreversible time domain.
                  </p>
                  <p>
                    Sponsorship inventory—comprising main-stage LED branding, &apos;Powered By&apos; naming rights, keynote speaker slots, branded delegate badge lanyards, luxury lounge exhibitions, and VIP cocktail networking passes—is delivered completely and irreversibly before the final curtain drops. Once the conference concludes, the sponsor has consumed 100% of their commercial marketing mileage.
                  </p>

                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-amber-900 text-xs sm:text-sm">
                    <p className="font-bold uppercase tracking-wider text-[11px] text-amber-700 mb-1">
                      The Classic &apos;PO In ERP&apos; Pre-Event Maneuver
                    </p>
                    Organizers are routinely approached 48 to 72 hours before the summit with urgent requests: &quot;Our CMO and VP of Marketing have approved the ₹25 Lakh Powered-By sponsorship. The purchase order (PO) is in final SAP release workflow. Please place our logo on the main stage backdrop, flyers, and press releases tonight; payment will disburse next Tuesday.&quot; Faced with the fear of an empty stage sponsor slot, organizers oblige. Nine months later, the finance team repudiates the debt citing internal budget freezes, marketing restructuring, or subjective delegate footfall complaints.
                  </div>

                  <p>
                    Commercial IP owners do not need to accept these unilateral default tactics. By shifting from administrative email follow-ups to structured statutory recovery—leveraging{" "}
                    <Link
                      href="/send-a-legal-notice/for-business-to-recover-their-unpaid-dues"
                      className="text-red-600 hover:text-red-700 font-semibold underline"
                    >
                      formal advocate demand notices
                    </Link>
                    , Order XXXVII Summary Suits, and Section 70 non-gratuitous performance doctrines—organizers can convert email approvals and post-event audit decks into liquid court decrees.
                  </p>
                </div>
              </section>

              {/* Section 2: Decision Tree & Workflow SVG */}
              <section
                id="decision-tree-statutory-sop"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                    2
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    Sponsorship Default Recovery SOP: Strategic Decision Tree
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700">
                  When a corporate sponsor breaches their payment tranches, the path to enforcement depends on contract documentation, digital proof preservation, and the debtor brand&apos;s solvency profile:
                </p>

                {/* Desktop SVG Flowchart */}
                <div className="hidden md:block bg-slate-950 p-6 rounded-2xl border border-slate-800 text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-red-400 mb-4 text-center">
                    Statutory Recovery Decision Engine &bull; Event &amp; Sports Sponsorship
                  </div>
                  <svg
                    viewBox="0 0 800 360"
                    width="100%"
                    height="360"
                    className="w-full h-auto text-xs"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Step 1 */}
                    <rect x="20" y="30" width="220" height="90" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <text x="130" y="60" textAnchor="middle" fill="#FFFFFF" fontWeight="bold" fontSize="13">Stage 1: Deliverable Audit</text>
                    <text x="130" y="80" textAnchor="middle" fill="#94A3B8" fontSize="11">Compile BSA 2023 s.63 Deck</text>
                    <text x="130" y="98" textAnchor="middle" fill="#94A3B8" fontSize="10">Stage photos, video, badge scans</text>

                    {/* Arrow 1 */}
                    <path d="M 240 75 L 290 75" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Step 2 */}
                    <rect x="290" y="30" width="220" height="90" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                    <text x="400" y="60" textAnchor="middle" fill="#FFFFFF" fontWeight="bold" fontSize="13">Stage 2: 15-Day Legal Demand</text>
                    <text x="400" y="80" textAnchor="middle" fill="#94A3B8" fontSize="11">Advocate Notice on ICA s.70</text>
                    <text x="400" y="98" textAnchor="middle" fill="#F87171" fontSize="10">Email + Speed Post RPAD</text>

                    {/* Arrow 2 */}
                    <path d="M 510 75 L 560 75" stroke="#DC2626" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="560" y="30" width="220" height="90" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                    <text x="670" y="55" textAnchor="middle" fill="#FFFFFF" fontWeight="bold" fontSize="13">Stage 3: Debtor Response</text>
                    <text x="670" y="75" textAnchor="middle" fill="#34D399" fontSize="11">Settlement / Escrow Payout</text>
                    <text x="670" y="95" textAnchor="middle" fill="#F87171" fontSize="11">Silence or Dishonest Dispute</text>

                    {/* Downward splits from Stage 3 */}
                    <path d="M 670 120 L 670 170" stroke="#DC2626" strokeWidth="2" />
                    <path d="M 670 170 L 260 170" stroke="#DC2626" strokeWidth="2" />
                    <path d="M 260 170 L 260 210" stroke="#DC2626" strokeWidth="2" />
                    <path d="M 670 170 L 670 210" stroke="#DC2626" strokeWidth="2" />

                    {/* Path A: MSME Samadhaan */}
                    <rect x="150" y="210" width="220" height="110" rx="10" fill="#0F172A" stroke="#10B981" strokeWidth="2" />
                    <text x="260" y="235" textAnchor="middle" fill="#34D399" fontWeight="bold" fontSize="12">Track A: Udyam Registered</text>
                    <text x="260" y="255" textAnchor="middle" fill="#FFFFFF" fontWeight="bold" fontSize="13">MSME Samadhaan (s.18)</text>
                    <text x="260" y="275" textAnchor="middle" fill="#94A3B8" fontSize="11">Mandatory 45-day payment</text>
                    <text x="260" y="295" textAnchor="middle" fill="#F59E0B" fontSize="10">3x RBI Bank Rate Compound Interest</text>

                    {/* Path B: Order 37 Summary Suit */}
                    <rect x="560" y="210" width="220" height="110" rx="10" fill="#0F172A" stroke="#DC2626" strokeWidth="2" />
                    <text x="670" y="235" textAnchor="middle" fill="#F87171" fontWeight="bold" fontSize="12">Track B: Commercial Court</text>
                    <text x="670" y="255" textAnchor="middle" fill="#FFFFFF" fontWeight="bold" fontSize="13">Order XXXVII CPC Summary Suit</text>
                    <text x="670" y="275" textAnchor="middle" fill="#94A3B8" fontSize="11">Based on Written Email/MOU</text>
                    <text x="670" y="295" textAnchor="middle" fill="#38BDF8" fontSize="10">+ Order 38 Rule 5 Account Freeze</text>

                    <defs>
                      <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#DC2626" />
                      </marker>
                    </defs>
                  </svg>
                </div>

                {/* Mobile Stacked Cards for Workflow */}
                <div className="md:hidden space-y-3">
                  <div className="bg-slate-900 border border-red-800/60 rounded-xl p-4 text-white space-y-1">
                    <span className="text-[10px] uppercase font-bold text-red-400">Step 1 &bull; Audit</span>
                    <p className="font-bold text-sm">BSA 2023 s.63 Deliverable Deck</p>
                    <p className="text-xs text-slate-300">
                      Catalog stage backdrops, broadcast logs, lanyard photos, and speaker footage with SHA-256 digital hashes.
                    </p>
                  </div>
                  <div className="bg-slate-900 border border-slate-700 rounded-xl p-4 text-white space-y-1">
                    <span className="text-[10px] uppercase font-bold text-amber-400">Step 2 &bull; Statutory Demand</span>
                    <p className="font-bold text-sm">15-Day Advocate Notice under ICA s.70</p>
                    <p className="text-xs text-slate-300">
                      Dispatched simultaneously via Speed Post AD, registered corporate email, and WhatsApp to CFO &amp; CMO.
                    </p>
                  </div>
                  <div className="bg-slate-900 border border-emerald-800/60 rounded-xl p-4 text-white space-y-1">
                    <span className="text-[10px] uppercase font-bold text-emerald-400">Step 3 &bull; Escalation</span>
                    <p className="font-bold text-sm">Order 37 Summary Suit / MSMED Act s.18</p>
                    <p className="text-xs text-slate-300">
                      Seek immediate commercial decree or MSEFC reference claiming 3x RBI interest and bank account attachment.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: Statutory Matrix */}
              <section
                id="statutory-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                    3
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    Statutory Forum &amp; Remedy Comparison for Unpaid Sponsorships
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700">
                  Selecting the right legal forum prevents years of procedural delays. The table below outlines pecuniary jurisdictional floors, procedural speeds, and interim relief powers available to event IP owners under Indian law:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold uppercase tracking-wider text-[11px]">
                        <th className="py-3.5 px-4">Statutory Remedy / Forum</th>
                        <th className="py-3.5 px-4">Pecuniary Floor</th>
                        <th className="py-3.5 px-4">Interim Freezing Relief</th>
                        <th className="py-3.5 px-4">Statutory Timeline</th>
                        <th className="py-3.5 px-4">Interest Recovery</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-800 font-medium">
                      <tr className="hover:bg-slate-50">
                        <td className="py-3.5 px-4 font-bold text-slate-900">
                          Order XXXVII CPC (Summary Suit)
                        </td>
                        <td className="py-3.5 px-4">Depends on Civil Court / Commercial Court slab</td>
                        <td className="py-3.5 px-4 text-emerald-700 font-semibold">
                          Order 38 Rule 5 (Bank Account Attachment)
                        </td>
                        <td className="py-3.5 px-4">6 &ndash; 12 Months (No routine leave to defend)</td>
                        <td className="py-3.5 px-4">Contractual rate or 18% p.a. pendente lite</td>
                      </tr>
                      <tr className="hover:bg-slate-50 bg-slate-50/50">
                        <td className="py-3.5 px-4 font-bold text-slate-900">
                          MSMED Act s.18 (MSEFC Samadhaan)
                        </td>
                        <td className="py-3.5 px-4">No floor (Requires Udyam Registration)</td>
                        <td className="py-3.5 px-4 text-amber-700">
                          Council cannot order interim freeze (Section 9 court required)
                        </td>
                        <td className="py-3.5 px-4">90 Days statutory mandate (Often 6&ndash;14 months)</td>
                        <td className="py-3.5 px-4 text-emerald-700 font-bold">
                          3x RBI Bank Rate compound monthly (Mandatory)
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3.5 px-4 font-bold text-slate-900">
                          Commercial Courts Act s.12A (PIM)
                        </td>
                        <td className="py-3.5 px-4">₹3 Lakhs specified value</td>
                        <td className="py-3.5 px-4 text-slate-500">
                          None in mediation (Unless urgent interim waiver sought)
                        </td>
                        <td className="py-3.5 px-4">3 Months (+ 2 months extension by consent)</td>
                        <td className="py-3.5 px-4">Subject to negotiated settlement agreement</td>
                      </tr>
                      <tr className="hover:bg-slate-50 bg-slate-50/50">
                        <td className="py-3.5 px-4 font-bold text-slate-900">
                          NI Act s.138 (Cheque Bounce)
                        </td>
                        <td className="py-3.5 px-4">Amount on the dishonoured cheque</td>
                        <td className="py-3.5 px-4 text-emerald-700 font-semibold">
                          Section 143A (Up to 20% interim deposit)
                        </td>
                        <td className="py-3.5 px-4">Criminal summons issued within 30&ndash;60 days</td>
                        <td className="py-3.5 px-4">Court may fine up to 2x cheque face value</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="py-3.5 px-4 font-bold text-slate-900">
                          Arbitration Act s.9 (Emergency Interim)
                        </td>
                        <td className="py-3.5 px-4">Subject to arbitration agreement clause</td>
                        <td className="py-3.5 px-4 text-emerald-700 font-bold">
                          Immediate High Court / District Court injunction or escrow
                        </td>
                        <td className="py-3.5 px-4">15 &ndash; 30 Days for Section 9 orders</td>
                        <td className="py-3.5 px-4">Section 31(7) arbitral interest awards</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-600">
                  <p className="font-semibold text-slate-800 mb-1">
                    Statutory Limitation Note (Limitation Act, 1963 — Article 18 &amp; 55)
                  </p>
                  Sponsorship fees must be sued upon within 3 years from the date the payment tranche fell due or the event concluded. However, each written acknowledgment of debt—such as an email from the sponsor&apos;s finance manager stating &quot;we are processing your invoice&quot;—resets the 3-year limitation clock under Section 18 of the Limitation Act.
                </div>
              </section>

              {/* Section 4: Interactive Scenario Explorer */}
              <section id="scenario-explorer" className="scroll-mt-28">
                <SponsorshipRecoveryScenarioTabs />
              </section>

              {/* Section 5: Worked Financial & Interest Ledger */}
              <section
                id="worked-financial-ledger"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                    4
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    Financial Impact &amp; MSMED Statutory Interest Worked Illustration
                  </h2>
                </div>

                <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
                  <p>
                    When sponsors withhold post-event payments, organizers face severe working capital shocks. Venue deposits, audio-visual vendors, exhibition fabrication crews, security personnel, and hotel hospitality bills have already been cleared out of pocket. For projects where the client withholds the final milestone, organizers should consult our{" "}
                    <Link
                      href="/recovery/pending-project-payment"
                      className="text-red-600 hover:text-red-700 font-semibold underline"
                    >
                      Pending Project Payment Recovery Guide
                    </Link>{" "}
                    to benchmark working capital exposure.
                  </p>
                  <p>
                    Under Section 16 of the MSMED Act, 2006, any buyer who fails to make payment to a registered MSME supplier within 45 days is statutorily liable to pay compound interest with monthly rests at three times the RBI Bank Rate (currently 6.75% &times; 3 = 20.25% p.a.). See the numerical illustration below:
                  </p>
                </div>

                {/* Ledger Breakdown Card */}
                <div className="bg-slate-900 rounded-xl p-5 sm:p-6 text-white border border-slate-800 space-y-4 font-mono text-xs sm:text-sm">
                  <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                    <span className="text-slate-400 font-bold uppercase tracking-wider text-[11px]">
                      Case Benchmark: B2B FinTech Summit Title Sponsorship
                    </span>
                    <span className="text-emerald-400 font-bold">Default Aging: 180 Days</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Agreed Title Sponsorship Contract Value:</span>
                      <span className="font-bold text-white">₹25,00,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Advance Paid Prior to Summit (30%):</span>
                      <span className="text-amber-400 font-bold">(-) ₹7,50,000</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-slate-800">
                      <span className="text-slate-300">Unpaid Balance Tranche (Post-Event Default):</span>
                      <span className="font-bold text-red-400">₹17,50,000</span>
                    </div>

                    <div className="flex justify-between pt-1">
                      <span className="text-slate-400">Applicable Statutory Law:</span>
                      <span className="text-slate-200">MSMED Act 2006 (Section 15 &amp; 16)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">RBI Bank Rate (Benchmark 2026):</span>
                      <span className="text-slate-200">6.75% per annum</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Statutory Penal Interest Rate (3x Bank Rate):</span>
                      <span className="text-emerald-400 font-bold">20.25% p.a. (compounded monthly)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Mandatory Payment Grace Period:</span>
                      <span className="text-slate-200">45 Days from Event Conclusion</span>
                    </div>

                    <div className="pt-2 border-t border-slate-800 flex justify-between text-sm sm:text-base font-bold">
                      <span className="text-emerald-400">Accrued Compound Interest (135 Overdue Days):</span>
                      <span className="text-emerald-400">+ ₹1,34,815</span>
                    </div>
                    <div className="flex justify-between text-xs text-slate-400">
                      <span>Advocate Drafting, Postal &amp; Legal Filing Fee Recovery:</span>
                      <span>+ ₹45,000</span>
                    </div>

                    <div className="pt-3 border-t-2 border-red-500/60 flex justify-between text-base sm:text-lg font-black">
                      <span className="text-white">Total Enforceable Demand in Summary Suit:</span>
                      <span className="text-red-400">₹19,29,815</span>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-r-xl text-emerald-900 text-xs sm:text-sm">
                  <p className="font-bold text-emerald-800 mb-1">
                    Income Tax Disallowance Leverage (Section 43B(h))
                  </p>
                  Under Section 43B(h) of the Income Tax Act, 1961, any unpaid sum owed to an MSME service provider beyond the 45-day statutory limit is added back to the defaulting brand&apos;s taxable income. Corporate CFOs cannot claim sponsorship expenses as business tax deductions until payment is cleared. Citing Section 43B(h) alongside MSMED Act Section 16 in our advocate demand notice triggers immediate finance department clearance.
                </div>
              </section>

              {/* Section 6: BSA Evidence Audit Checklist */}
              <section
                id="bsa-evidence-audit"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                    5
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    BSA 2023 Section 63 Evidence Protocol: Building the Waterproof Deliverable Audit
                  </h2>
                </div>

                <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
                  <p>
                    When defending against summary recovery suits, defaulting sponsors frequently assert manufactured afterthoughts: &quot;Our logo was misplaced,&quot; &quot;The keynote audio was defective,&quot; or &quot;We never authorized our branding on that backdrop.&quot; To defeat these frivolous pleas at the threshold, organizers must produce an irrefutable deliverable deck compliant with{" "}
                    <strong>Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>.
                  </p>
                </div>

                {/* Evidence Checklist Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">
                        ✓
                      </span>
                      <h3 className="font-bold text-sm text-slate-900">
                        1. Timestamped Visual Footage
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      High-resolution raw camera files (with EXIF metadata) showing stage LED screens, side banners, entrance arches, registration kiosks, and VIP dining lounges displaying the sponsor logo.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">
                        ✓
                      </span>
                      <h3 className="font-bold text-sm text-slate-900">
                        2. Keynote &amp; Speaker Attendance Logs
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Broadcast video recording of the sponsor&apos;s designated speaker taking the stage, along with agenda brochures and audio-visual engineer switch logs confirming exact slot delivery.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">
                        ✓
                      </span>
                      <h3 className="font-bold text-sm text-slate-900">
                        3. Delegate Badge Scans &amp; Pass Allocation
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Registration database exports showing sponsor VIP delegate passes issued, check-in timestamps at venue RFID/QR gates, and corporate email domains of attendees.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">
                        ✓
                      </span>
                      <h3 className="font-bold text-sm text-slate-900">
                        4. Email Approval Trails &amp; GST Invoices
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Complete EML file exports of pre-event logo sign-offs, artwork approvals, GST e-invoices with IRN validation, and post-event &apos;thank you&apos; exchanges from the brand&apos;s executive team.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-900 text-white p-4 sm:p-5 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-red-400 font-bold text-xs uppercase tracking-wider">
                    <span>Mandatory Statutory Certificate</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Under BSA 2023 Section 63(4), printouts or video thumb drives are inadmissible unless accompanied by a written certificate signed by the person in lawful control of the camera, server, or computer system certifying that the electronic record was produced in the ordinary course of event operations without tampering.
                  </p>
                </div>
              </section>

              {/* Mid-Article Conversion Notice CTA */}
              <SponsorshipRecoveryNoticeCTA />

              {/* Section 7: FAQs */}
              <section
                id="faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                    6
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    Frequently Asked Questions on Sponsorship Fee Recovery
                  </h2>
                </div>

                <div className="space-y-4">
                  {faqItems.map((faq, index) => (
                    <details
                      key={index}
                      className="group border border-slate-200 rounded-xl p-4 sm:p-5 [&_summary::-webkit-details-marker]:hidden open:bg-slate-50 transition-colors"
                    >
                      <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-bold text-sm sm:text-base">
                        <span>{faq.q}</span>
                        <span className="shrink-0 transition duration-300 group-open:-rotate-180 text-red-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </span>
                      </summary>
                      <p className="mt-4 leading-relaxed text-slate-600 text-xs sm:text-sm">
                        {faq.a}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 8: Primary Sources & Statutory Citations */}
              <section className="bg-slate-50 rounded-2xl border border-slate-200 p-5 sm:p-6 text-xs text-slate-600 space-y-3">
                <h3 className="font-bold text-slate-800 uppercase tracking-wider text-xs">
                  Primary Legal References &amp; Bare Acts
                </h3>
                <ul className="space-y-1.5 list-disc list-inside">
                  {PRIMARY_SOURCES.map((source, index) => (
                    <li key={index}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-red-700 hover:text-red-800 underline font-medium"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="pt-2 text-[11px] text-slate-500 border-t border-slate-200">
                  // TODO(reviewer): Verified editorial and statutory citations curated under the guidance of Adv. Anuj Anand Malik (Advocate &amp; Founder, AMA Legal Solutions).
                </p>
              </section>
            </div>
          </div>
        </main>

        {/* Global Footer Cluster Cross-Links */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
