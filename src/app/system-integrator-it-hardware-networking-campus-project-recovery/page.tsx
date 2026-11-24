import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import SiProjectTableOfContents from "./SiProjectTableOfContents";
import SiProjectScenarioTabs from "./SiProjectScenarioTabs";
import SiProjectCTA from "./SiProjectCTA";

export const revalidate = 86400;

const PAGE_URL = "/system-integrator-it-hardware-networking-campus-project-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

const EXACT_H1 =
  "Ingram/Redington Debited Your Channel Line on Day 45\u2014While Your Client's Unfinished Building Stalls Your 30% Installation Milestone!";

// Tightened from 66ch PDF draft to 58ch for Screaming Frog 30-60ch compliance
const META_TITLE = "System Integrator & AV/Networking Project Payment Recovery";

// Tightened from 176ch PDF draft to 152ch for Screaming Frog 120-155ch compliance
const META_DESCRIPTION =
  "System Integrators deliver \u20B91 Cr of switches, Wi-Fi & CCTV on time, then wait 10 months for 30% installation dues. Enforce Contract Act s.53/54 recovery.";

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
      "The Indian Contract Act, 1872 (Sections 53, 54, 70 & 73 \u2014 Reciprocal Promises & Prevention of Performance)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title:
      "The Sale of Goods Act, 1930 (Sections 31, 42 & 44 \u2014 Delivery, Deemed Acceptance & Buyer Neglect Liability)",
    url: "https://www.indiacode.nic.in/handle/123456789/2390",
  },
  {
    title:
      "The Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15\u201318 \u2014 45-Day Cap & 3x RBI Interest)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title:
      "The Code of Civil Procedure, 1908 (Order XXXVII \u2014 Summary Suits on Signed Purchase Orders & Invoices)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 \u2014 Electronic Admissibility for E-Way Bills, Emails & Telemetry Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "MSME Samadhaan \u2014 Official Delayed Payment Monitoring Portal (Ministry of MSME, Government of India)",
    url: "https://samadhaan.msme.gov.in/",
  },
];

const FAQS = [
  {
    q: "Can a buyer legally withhold the 20%\u201330% installation milestone for 9 months because their own civil or interior contractor is behind schedule?",
    a: "No. Under Sections 53 and 54 of the Indian Contract Act, 1872, providing a dust-free, powered, earthing-compliant server room and completed cable pathways is a prior reciprocal promise on the buyer's part. When the buyer's own delay prevents the System Integrator (SI) from installing delivered switches, Wi-Fi APs, or LED walls, the buyer cannot rely on its own breach to indefinitely defer payment; the milestone matures as Deemed Commissioning compensation.",
  },
  {
    q: "How do System Integrators handle the cashflow gap when Redington, Ingram Micro, or Savex debit their channel line on Day 45?",
    a: "An Udyam-registered SI can invoke Section 15 and Section 16 of the MSMED Act, 2006, which overrides contractual 'post-UAT' deferrals whenever delivery is complete and installation is blocked by the buyer. Compound interest at 3x the RBI bank rate (typically 19.5% p.a.+) accrues monthly after Day 45, plus Section 43B(h) of the Income Tax Act exposes the defaulting buyer to tax disallowance if Micro/Small enterprise dues remain unpaid at year-end.",
  },
  {
    q: "What if the client is already using our Cisco/Aruba Wi-Fi or Hikvision CCTV live, yet refuses to sign the UAT certificate?",
    a: "Under Section 42 of the Sale of Goods Act, 1930, a buyer is deemed to have accepted goods when they perform any act inconsistent with the seller's ownership or retain them beyond a reasonable time without valid rejection. Extracting cloud-controller MAC counts, NVR timestamps, and OEM warranty activation logs certified under BSA 2023 Section 63 proves beneficial commercial use and defeats sham UAT withholding.",
  },
  {
    q: "In a Smart-City or PSU turnkey project, can the Master SI withhold our sub-vendor bill claiming the Municipal Corporation hasn't paid them?",
    a: "Indian Commercial Courts scrutinize 'back-to-back' or 'pay-when-paid' clauses strictly. Unless the subcontract explicitly makes receipt from the PSU an absolute condition precedent—and even then, where the Master SI's own billing lapse or unrelated SLA penalty causes the PSU delay—the sub-vendor retains independent privity of contract to recover against the Master SI via MSEFC Samadhaan or Order XXXVII CPC.",
  },
  {
    q: "Should an IT System Integrator file recovery in MSEFC Samadhaan, Commercial Court, or Order XXXVII Summary Suit?",
    a: "For Micro and Small Udyam-registered SIs, MSEFC Samadhaan offers 90-day statutory conciliation/arbitration with 3x RBI compound interest and a mandatory 75% pre-deposit if the buyer challenges the award. For Medium/Large SIs or non-MSME disputes above \u20B93 lakh, an Order XXXVII CPC Summary Suit (or Commercial Suit post-s.12A mediation) based on signed POs, E-Way Bills, and GST invoices delivers rapid decree recovery.",
  },
  {
    q: "Can we recover warehousing, engineer idling, and OEM SmartNet warranty burn caused by site-readiness delays?",
    a: "Yes. Section 44 of the Sale of Goods Act, 1930 expressly entitles the seller to reasonable charges for the care and custody of goods when the buyer neglects or refuses to take delivery/handover within a reasonable time. Under Contract Act Section 53 and Section 73, documented engineer standby costs and OEM warranty depreciation triggered upon dispatch are recoverable damages.",
  },
  {
    q: "What if we have 15 to 200+ overdue corporate AMC, structured cabling, or campus hardware holdback accounts across India?",
    a: "Multi-site SIs and AV partners routinely batch-process aged 60-to-360+ DPD holdbacks via bulk CSV upload. Dispatching fact-verified Section 53/54 Deemed Commissioning and Section 43B(h) tax-alert notices across Registered Email, WhatsApp, and Speed Post RPAD establishes statutory limitation stops and drives pre-litigation settlements without paralysing internal project teams.",
  },
];

export default function SystemIntegratorProjectRecoveryPage() {
  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${CANONICAL_URL}#article`,
        headline: EXACT_H1,
        description: META_DESCRIPTION,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": CANONICAL_URL,
        },
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
        datePublished: "2026-11-18",
        dateModified: "2026-11-18",
        inLanguage: "en-IN",
        image: `${SITE_URL}/blog_money_recovery.png`,
      },
      {
        "@type": "HowTo",
        "@id": `${CANONICAL_URL}#howto`,
        name: "5-Stage System Integrator Deemed-Commissioning & Holdback Recovery Workflow",
        description:
          "Operational and statutory workflow for IT System Integrators and AV/CCTV turnkey partners to recover stalled 20%-30% installation milestones when client civil sites are unready.",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Compile PO, BoQ, E-Way Bills & Serialized Delivery Challans",
            text: "Lock in proof of 100% physical hardware dispatch (Cisco/HPE/Hikvision/Crestron serial numbers) and receipt at the client campus.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Document Civil, Power & HVAC Non-Readiness",
            text: "Record missing server-room prerequisites (raw UPS power, earthing, false ceiling, AC) via joint site-inspection minutes and emails.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Serve 15-Day Contract Act s.53/54 Deemed-Commissioning Notice",
            text: "Put the buyer on notice that preventing reciprocal site handover matures the 20%-30% installation holdback plus warehousing and warranty burn.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Trigger MSMED s.16 & Section 43B(h) Tax-Alert Leverage",
            text: "Quantify 3x RBI compound interest from Day 45 post-delivery and notify the buyer's CFO of Income Tax Act s.43B(h) disallowance.",
          },
          {
            "@type": "HowToStep",
            position: 5,
            name: "Escalate to MSEFC Samadhaan or Order XXXVII Commercial Suit",
            text: "Certify electronic telemetry and email logs under BSA 2023 s.63 and file before MSEFC or Commercial Court (post s.12A mediation).",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${CANONICAL_URL}#faq`,
        mainEntity: FAQS.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${CANONICAL_URL}#breadcrumb`,
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
            name: "Telecom, ISP & SI Recovery",
            item: `${SITE_URL}/industries/telecom-isp-datacenter-msp-recovery`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "System Integrator & AV Project Recovery",
            item: CANONICAL_URL,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-18 B2B Creditor Playbook</span>
            <span aria-hidden="true">&middot;</span>
            <span>IT System Integrators &amp; AV/CCTV Partners</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40-60 Word Executive Creditor Answer Box with inline Hub link */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Under{" "}
            <strong className="text-white">
              Sections 53 and 54 of the Indian Contract Act, 1872
            </strong>
            , a client&apos;s failure to hand over a dust-free, powered server room or completed
            civil pathway triggers immediate{" "}
            <strong className="text-white">Deemed-Commissioning Maturity</strong> of your
            20%&ndash;30% installation holdback. Part of our{" "}
            <Link
              href="/industries/telecom-isp-datacenter-msp-recovery"
              className="text-red-300 underline hover:text-white transition-colors"
            >
              Telecom, ISP &amp; IT System Integrator Recovery Hub
            </Link>
            , this guide breaks the 45-day distributor credit squeeze.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-2 sm:p-3">
              <p className="text-lg sm:text-2xl font-black text-red-400">Day 45</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                Ingram / Redington / Savex auto-debit &amp; channel credit cutoff
              </p>
            </div>
            <div className="p-2 sm:p-3">
              <p className="text-lg sm:text-2xl font-black text-slate-100">s.53 &amp; s.54</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                Contract Act reciprocal promise &amp; Deemed Commissioning trigger
              </p>
            </div>
            <div className="p-2 sm:p-3">
              <p className="text-lg sm:text-2xl font-black text-emerald-400">3x RBI Rate</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                MSMED Act s.16 monthly compound interest + s.43B(h) tax lever
              </p>
            </div>
            <div className="p-2 sm:p-3">
              <p className="text-lg sm:text-2xl font-black text-amber-400">Order 37</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                CPC Summary Suit / MSEFC 90-day track on signed BoQ &amp; E-Way Bills
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Telecom, ISP & SI Recovery",
                href: "/industries/telecom-isp-datacenter-msp-recovery",
              },
              {
                label: "System Integrator & AV Project Recovery",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <SiProjectTableOfContents />

          {/* Right Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: The 45-Day Distributor Squeeze */}
            <section
              id="heading-distributor-squeeze"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  The 45-Day Distributor Debit vs. 9-Month Site Delay Trap
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Every Gold or Premier System Integrator (SI) deploying Cisco Catalyst switches,
                  HPE ProLiant servers, Aruba Wi-Fi 6/7 access points, Hikvision IP-CCTV grids, or
                  Crestron boardroom AV walls operates inside a brutal working-capital vice. Your
                  upstream national distributor&mdash;whether Redington, Ingram Micro, Savex, or
                  Iris&mdash;extends a rigid <strong>30-to-45-day channel credit line</strong>. On
                  Day 46, your NBFC channel-finance limit or security PDC is debited automatically,
                  regardless of whether your end-client has powered up a single rack.
                </p>
                <p>
                  Meanwhile, commercial turnkey Purchase Orders routinely split billing into{" "}
                  <strong>70% or 80% against material delivery</strong> and{" "}
                  <strong>20% or 30% upon installation, testing, and UAT sign-off</strong>. On a
                  &#8377;1 Crore campus networking or smart-building contract, your gross margin is
                  typically 8% to 12% (&#8377;8L&ndash;&#8377;12L). That entire profit&mdash;plus
                  nearly &#8377;20L of your own working capital&mdash;sits locked inside the final
                  30% milestone.
                </p>
                <p>
                  When the client&apos;s own civil, electrical, or interior fit-out contractor falls
                  6 to 10 months behind schedule—leaving server rooms dusty, without precision HVAC,
                  raw UPS power, or earthing below 2 ohms—the client&apos;s procurement team freezes
                  your 30% installation invoice claiming &ldquo;milestone not achieved.&rdquo; Worse,
                  OEM SmartNet or CarePack warranties start ticking from the distributor&apos;s
                  invoice date, creating silent warranty-burn liability while your hardware sits in
                  cardboard boxes on site.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-1.5">
                    Why Passive Waiting Destroys Margin
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Channel finance at 14%&ndash;18% p.a. on a stalled &#8377;30 Lakh holdback
                    costs &#8377;35,000&ndash;&#8377;45,000 every single month. A 9-month civil
                    delay erases &#8377;3.6L+ in interest alone, turning a profitable campus project
                    into a net cash loss.
                  </p>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1.5">
                    The Statutory Flip: Reciprocal Promise Law
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Under <strong>Contract Act s.53 &amp; s.54</strong>, a buyer who fails to
                    deliver site readiness cannot plead non-installation to block payment. Serving a
                    formal Deemed-Commissioning Notice converts an open-ended holdback into a
                    matured, interest-bearing debt.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: 5-Stage Decision Tree SVG + Mobile Cards */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  5-Stage Deemed-Commissioning &amp; Holdback Escalation
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Do not wait passively for the client&apos;s civil contractor to finish gypsum walls.
                Execute this 5-stage creditor escalation sequence the moment site handover slips
                past 15 days from hardware delivery:
              </p>

              {/* Desktop SVG Decision Tree */}
              <div className="hidden md:block w-full overflow-x-auto bg-slate-900 rounded-2xl p-5 border border-slate-800 mb-4">
                <svg
                  width="820"
                  height="210"
                  viewBox="0 0 820 210"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="5-Stage System Integrator Deemed-Commissioning Escalation Flowchart"
                  className="w-full h-auto"
                >
                  {/* Stage 1 */}
                  <rect x="10" y="25" width="142" height="150" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <circle cx="32" cy="48" r="11" fill="#DC2626" />
                  <text x="32" y="52" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">1</text>
                  <text x="50" y="52" fill="#F8FAFC" fontSize="11" fontWeight="bold">Dispatch Proof</text>
                  <text x="22" y="80" fill="#CBD5E1" fontSize="10">E-Way Bill, OEM</text>
                  <text x="22" y="96" fill="#CBD5E1" fontSize="10">Serial Challan &amp;</text>
                  <text x="22" y="112" fill="#CBD5E1" fontSize="10">Store Receipt</text>
                  <text x="22" y="148" fill="#34D399" fontSize="9.5" fontWeight="bold">Sale of Goods s.31</text>

                  <path d="M154 100 L174 100" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Stage 2 */}
                  <rect x="176" y="25" width="142" height="150" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <circle cx="198" cy="48" r="11" fill="#DC2626" />
                  <text x="198" y="52" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">2</text>
                  <text x="216" y="52" fill="#F8FAFC" fontSize="11" fontWeight="bold">Site Readiness Log</text>
                  <text x="188" y="80" fill="#CBD5E1" fontSize="10">Document missing</text>
                  <text x="188" y="96" fill="#CBD5E1" fontSize="10">UPS, Earthing, AC</text>
                  <text x="188" y="112" fill="#CBD5E1" fontSize="10">&amp; Civil Pathways</text>
                  <text x="188" y="148" fill="#FBBF24" fontSize="9.5" fontWeight="bold">Joint MOM + Email</text>

                  <path d="M320 100 L340 100" stroke="#DC2626" strokeWidth="2" />

                  {/* Stage 3 */}
                  <rect x="342" y="25" width="142" height="150" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="1.8" />
                  <circle cx="364" cy="48" r="11" fill="#DC2626" />
                  <text x="364" y="52" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">3</text>
                  <text x="382" y="52" fill="#F8FAFC" fontSize="11" fontWeight="bold">15-Day Cure Notice</text>
                  <text x="354" y="80" fill="#CBD5E1" fontSize="10">Invoke Deemed</text>
                  <text x="354" y="96" fill="#CBD5E1" fontSize="10">Commissioning of</text>
                  <text x="354" y="112" fill="#CBD5E1" fontSize="10">30% Holdback</text>
                  <text x="354" y="148" fill="#FCA5A5" fontSize="9.5" fontWeight="bold">Contract Act s.53/54</text>

                  <path d="M486 100 L506 100" stroke="#DC2626" strokeWidth="2" />

                  {/* Stage 4 */}
                  <rect x="508" y="25" width="142" height="150" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <circle cx="530" cy="48" r="11" fill="#DC2626" />
                  <text x="530" y="52" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">4</text>
                  <text x="548" y="52" fill="#F8FAFC" fontSize="11" fontWeight="bold">Tax &amp; 3x RBI Lever</text>
                  <text x="520" y="80" fill="#CBD5E1" fontSize="10">Notify CFO of</text>
                  <text x="520" y="96" fill="#CBD5E1" fontSize="10">s.43B(h) Tax Bar</text>
                  <text x="520" y="112" fill="#CBD5E1" fontSize="10">&amp; 3x RBI Interest</text>
                  <text x="520" y="148" fill="#34D399" fontSize="9.5" fontWeight="bold">MSMED Act s.15-16</text>

                  <path d="M652 100 L672 100" stroke="#DC2626" strokeWidth="2" />

                  {/* Stage 5 */}
                  <rect x="674" y="25" width="136" height="150" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <circle cx="696" cy="48" r="11" fill="#DC2626" />
                  <text x="696" y="52" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">5</text>
                  <text x="714" y="52" fill="#F8FAFC" fontSize="11" fontWeight="bold">Forum Filing</text>
                  <text x="686" y="80" fill="#CBD5E1" fontSize="10">MSEFC Samadhaan</text>
                  <text x="686" y="96" fill="#CBD5E1" fontSize="10">or Order 37 CPC</text>
                  <text x="686" y="112" fill="#CBD5E1" fontSize="10">Commercial Suit</text>
                  <text x="686" y="148" fill="#FCA5A5" fontSize="9.5" fontWeight="bold">BSA s.63 Dossier</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                {[
                  {
                    step: "1. Dispatch Proof (Sale of Goods s.31)",
                    desc: "Lock E-Way Bills, OEM serial-number Delivery Challans, and client security/store gate-entry stamps.",
                  },
                  {
                    step: "2. Site Readiness Log (Joint MOM + Email)",
                    desc: "Record missing server-room prerequisites (UPS power, earthing < 2 ohms, HVAC, false ceiling) in writing.",
                  },
                  {
                    step: "3. 15-Day Deemed-Commissioning Notice (Contract Act s.53/54)",
                    desc: "Declare that buyer prevention matures the 20%–30% holdback plus warehousing and OEM warranty burn.",
                  },
                  {
                    step: "4. Tax & 3x RBI Interest Lever (MSMED s.16 & s.43B(h))",
                    desc: "Alert the buyer's CFO and auditor to Income Tax s.43B(h) disallowance and 3x RBI compound interest.",
                  },
                  {
                    step: "5. Forum Escalation (MSEFC / Order 37 CPC)",
                    desc: "File with BSA 2023 s.63 certified telemetry logs before MSEFC Samadhaan or Commercial Court.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800"
                  >
                    <p className="text-xs font-bold text-red-400 mb-1">{item.step}</p>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Statutory Matrix Table */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Statutory Matrix: Contract Act s.53/54, MSMED &amp; Order 37
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Every stalled campus IT, AV, or Smart-City sub-vendor dispute rests on six
                interlocking statutory provisions. Use this matrix to select the sharpest legal
                lever for your overdue tranche:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="py-3.5 px-4 font-bold">Statute &amp; Section</th>
                      <th className="py-3.5 px-4 font-bold">SI / AV Bottleneck Addressed</th>
                      <th className="py-3.5 px-4 font-bold">Creditor Remedy &amp; Recovery Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Indian Contract Act, 1872
                        <span className="block text-xs font-normal text-[#DC2626]">
                          Sections 53 &amp; 54
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Client&apos;s interior/MEP contractor delays server room, power, or false
                        ceiling, blocking installation milestone.
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Prevention of reciprocal promise makes contract voidable and matures the
                        20%&ndash;30% holdback as <strong>Deemed Commissioning</strong> + delay
                        damages.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Sale of Goods Act, 1930
                        <span className="block text-xs font-normal text-[#DC2626]">
                          Sections 31, 42 &amp; 44
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Client uses live Wi-Fi/CCTV without UAT sign-off, or leaves gear boxed in
                        store for months.
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Live use constitutes <strong>Deemed Acceptance (s.42)</strong>; buyer
                        neglect entitles SI to warehousing &amp; care charges (<strong>s.44</strong>
                        ).
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        MSMED Act, 2006
                        <span className="block text-xs font-normal text-[#DC2626]">
                          Sections 15, 16 &amp; 18
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Redington/Ingram debit SI on Day 45 while enterprise buyer drags balance for
                        180+ days.
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Caps credit at 45 days; mandates <strong>3x RBI compound interest</strong>{" "}
                        + 90-day MSEFC Samadhaan track (75% pre-deposit on appeal).
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Income Tax Act, 1961
                        <span className="block text-xs font-normal text-[#DC2626]">
                          Section 43B(h)
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Large corporate buyer ignores repeated payment follow-ups at financial
                        year-end.
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Disallows buyer&apos;s tax deduction on overdue Micro/Small SI invoices,
                        creating immediate CFO/Statutory Auditor pressure.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        CPC, 1908 &amp; Commercial Courts Act
                        <span className="block text-xs font-normal text-[#DC2626]">
                          Order XXXVII &amp; s.12A
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Non-MSME or Medium SI claiming &#8377;3L&ndash;&#8377;3 Cr+ on signed POs,
                        E-Way Bills &amp; GST invoices.
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Fast-track Summary Suit barring frivolous defenses without court leave;
                        mandatory s.12A mediation often forces quick settlement.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Bharatiya Sakshya Adhiniyam, 2023
                        <span className="block text-xs font-normal text-[#DC2626]">
                          Section 63
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Proving site-readiness emails, WhatsApp chats, and live Wi-Fi/NVR telemetry
                        in court.
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Statutory electronic record certificate making digital logs, MAC counts, and
                        E-Way Bills primary admissible proof.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Interactive Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  4 System Integrator &amp; Smart-City Default Scenarios
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Select your exact commercial bottleneck below to inspect the governing statutory
                remedy and 3-step recovery protocol:
              </p>

              <SiProjectScenarioTabs />
            </section>

            {/* Section 5: Worked Financial & Interest Calculation Ledger */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Worked Recovery Ledger: &#8377;30L Stalled Campus Holdback
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Consider a typical <strong>&#8377;1,00,00,000</strong> enterprise campus networking,
                Wi-Fi, and IP-CCTV turnkey order (70% against delivery = &#8377;70L paid;{" "}
                <strong>30% installation &amp; UAT = &#8377;30,00,000</strong> stalled for 270 days
                because the client&apos;s interior contractor delayed the server room). Meanwhile,
                Redington/Ingram debited your channel line on Day 45. Here is how an Udyam-registered
                SI frames the statutory demand:
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-lg">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-800">
                  <span className="text-xs font-bold uppercase tracking-widest text-red-400">
                    Illustrative Creditor Claim Computation (270-Day Site Delay)
                  </span>
                  <span className="text-xs text-slate-400">
                    RBI Bank Rate Baseline: 6.50% &rarr; 3x = 19.50% p.a. Monthly Compounded
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
                    <span className="text-slate-300">
                      1. Deemed-Commissioning Principal (30% Holdback under Contract Act s.53/54)
                    </span>
                    <span className="font-bold text-white">&#8377;30,00,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
                    <span className="text-slate-300">
                      2. MSMED Act s.16 Compound Interest (225 overdue days post-45d @ 19.50% p.a.)
                    </span>
                    <span className="font-bold text-emerald-400">+ &#8377;3,82,400</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
                    <span className="text-slate-300">
                      3. Engineer Mobilization Idling &amp; Safe-Custody Charges (Sale of Goods s.44)
                    </span>
                    <span className="font-bold text-amber-300">+ &#8377;1,45,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
                    <span className="text-slate-300">
                      4. OEM SmartNet / CarePack Warranty Extension Reset (9 Months Burn)
                    </span>
                    <span className="font-bold text-amber-300">+ &#8377;1,90,000</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 text-sm sm:text-base">
                    <span className="font-extrabold text-white">
                      Total Enforceable Statutory Demand
                    </span>
                    <span className="font-black text-emerald-400">&#8377;37,17,400</span>
                  </div>
                </div>

                <p className="mt-4 text-[11px] text-slate-400 leading-relaxed">
                  *Note: Exact compound interest varies by invoice date and prevailing RBI bank rate.
                  Run your exact invoice dates in our{" "}
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="text-red-300 underline hover:text-white"
                  >
                    MSME Delayed Payment Interest Calculator
                  </Link>{" "}
                  before serving notice.
                </p>
              </div>
            </section>

            {/* Section 6: Evidence & BSA 2023 s.63 Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  BoQ, E-Way Bill &amp; BSA 2023 s.63 Evidence Checklist
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                To win an Order XXXVII CPC summary suit or an MSEFC award without a prolonged
                evidence trial, assemble this 6-point evidentiary dossier:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "1. Signed PO / BoQ & Site-Readiness Schedule",
                    desc: "Isolate the payment milestone table and any clause requiring the client to provide power, cooling, earthing, and civil pathways.",
                  },
                  {
                    title: "2. E-Way Bills & OEM Serialized Delivery Challans",
                    desc: "Match distributor invoices (Redington/Ingram) with campus security gate-entry stamps and client store-receipt acknowledgments.",
                  },
                  {
                    title: "3. Site-Non-Readiness Emails & Joint MOMs",
                    desc: "Compile dated emails, WhatsApp project-group messages, and site photos showing unfinished civil/MEP work blocking installation.",
                  },
                  {
                    title: "4. Live Telemetry & OEM Warranty Activation Logs",
                    desc: "Where equipment is partially powered, export Wi-Fi controller MAC counts, NVR uptime, and Cisco/HPE serial registration timestamps.",
                  },
                  {
                    title: "5. GST GSTR-1 / GSTR-2B & Channel Debit Proof",
                    desc: "Attach proof that GST was remitted and input tax credit was availed by the buyer, plus bank debit statements from your distributor.",
                  },
                  {
                    title: "6. BSA 2023 Section 63 Electronic Certificate",
                    desc: "Execute a statutory Section 63 Bharatiya Sakshya Adhiniyam certificate signed by your Project Head authenticating all digital logs and emails.",
                  },
                ].map((card) => (
                  <div
                    key={card.title}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-4"
                  >
                    <p className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5">
                      {card.title}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Dual-Track B2B CTA */}
            <section
              id="heading-dual-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Launch Single-Project Notice or Bulk SI CSV Recovery
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Whether you have one &#8377;30 Lakh campus holdback choking your Redington/Ingram
                credit line or 50+ stalled AMC and structured cabling bills across India, choose your
                deployment track below:
              </p>

              <SiProjectCTA />
            </section>

            {/* Section 8: Related Spoke, Tool, Template & Seed Links */}
            <section
              id="heading-related-spokes"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Related Telecom, SI &amp; Commercial Recovery Resources
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    tag: "IND-18 Pillar Hub",
                    title: "Telecom, ISP, Data Center & SI Recovery Hub",
                    href: "/industries/telecom-isp-datacenter-msp-recovery",
                  },
                  {
                    tag: "Interactive Tool (T1)",
                    title: "MSME Delayed Payment Interest Calculator",
                    href: "/tools/msme-delayed-payment-interest-calculator",
                  },
                  {
                    tag: "Notice Template (P1)",
                    title: "MSME Delayed Payment Demand Notice Format",
                    href: "/templates/msme-delayed-payment-demand-notice",
                  },
                  {
                    tag: "Notice Template (P1)",
                    title: "IT Software & MSA Payment Default Notice",
                    href: "/templates/it-software-saas-msa-payment-default-legal-notice",
                  },
                  {
                    tag: "IND-18 Sibling",
                    title: "Enterprise ILL / MPLS / SD-WAN Lock-In Recovery",
                    href: "/enterprise-leased-line-ill-mpls-sdwan-lock-in-breach-recovery-isp",
                  },
                  {
                    tag: "IND-18 Sibling",
                    title: "Data Center Rack Lien & DPDP Suspension Law",
                    href: "/data-center-colocation-bare-metal-hosting-default-suspension-lien-law",
                  },
                  {
                    tag: "IND-18 Sibling",
                    title: "CPaaS, WhatsApp BSP & Cloud Telephony Recovery",
                    href: "/cpaas-bulk-sms-whatsapp-bsp-cloud-telephony-postpaid-default-recovery",
                  },
                  {
                    tag: "B2B Service",
                    title: "Vendor & Commercial Invoice Recovery Desk",
                    href: "/services/vendor-and-invoice-recoveries",
                  },
                  {
                    tag: "Statutory Guide",
                    title: "Order XXXVII Summary Suit Money Recovery",
                    href: "/law/order-37-summary-suit-money-recovery",
                  },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group block bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#DC2626] rounded-xl p-4 transition-all"
                  >
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#DC2626] mb-1">
                      {item.tag}
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                      {item.title} &rarr;
                    </p>
                  </Link>
                ))}
              </div>
            </section>

            {/* Section 9: FAQ Accordions */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Frequently Asked Questions: SI &amp; AV Project Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.q}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 open:bg-white open:border-slate-300 transition-colors"
                  >
                    <summary className="flex items-center justify-between gap-3 cursor-pointer list-none text-sm sm:text-base font-bold text-slate-900">
                      <span>{faq.q}</span>
                      <span className="text-[#DC2626] font-black text-lg shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200 pt-3">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 10: Primary Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#404447] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Primary Statutory Sources &amp; Official Citations
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.url} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold mt-0.5">&bull;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-800 hover:text-[#DC2626] underline underline-offset-2 transition-colors"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>

      {/* Footer Cross-Links */}
      <RelatedRecoveryGuides />
    </div>
  );
}
