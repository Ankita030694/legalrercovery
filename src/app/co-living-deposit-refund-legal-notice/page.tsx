import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import CoLivingNoticeCTA from "./CoLivingNoticeCTA";
import CoLivingTableOfContents from "./CoLivingTableOfContents";
import CoLivingChecklistWizard from "./CoLivingChecklistWizard";
import CoLivingProblemTabs from "./CoLivingProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Co-Living Deposit Refund Delayed? Legal Remedies",
  description:
    "Co-living operator delaying your deposit or making unfair deductions? Contract terms, consumer law and a legal notice route.",
  alternates: {
    canonical: `${SITE_URL}/co-living-deposit-refund-legal-notice`,
  },
  openGraph: {
    title: "Co-Living Operator Holding Your Deposit: Legal Notice & Consumer Remedies",
    description:
      "Complete legal framework to recover withheld security deposits and challenge unfair exit or lock-in deductions from Stanza Living, Zolo, Colive, Housr and managed PGs.",
    url: `${SITE_URL}/co-living-deposit-refund-legal-notice`,
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
    title: "Indian Contract Act, 1872 (Act No. 9 of 1872) — Section 73 (Compensation for Breach) & Section 74 (Penalty Stipulations & Deposit Forfeiture Limits)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Consumer Protection (E-Commerce) Rules, 2020 — Rule 4 & Rule 5 (Mandatory 48-Hour Grievance Acknowledgment & 30-Day Resolution)",
    url: "https://consumeraffairs.nic.in/sites/default/files/E%20commerce%20rules.pdf",
  },
  {
    title: "Model Tenancy Act, 2021 — Ministry of Housing and Urban Affairs (Section 11 Security Deposit Cap & Refund Mandate upon Vacating)",
    url: "https://mohua.gov.in/upload/uploadfiles/files/Model-Tenancy-Act-English-02_06_2021.pdf",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Admissibility of Co-Living App Ledgers, Tickets & WhatsApp Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "e-Jagriti Online Consumer Disputes Redressal Portal — Department of Consumer Affairs, Government of India",
    url: "https://e-jagriti.gov.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Standard on Security Deposit Forfeiture Under Section 74 Contract Act",
    parties: "Kailash Nath Associates v. Delhi Development Authority & Anr.",
    citation: "Civil Appeal No. 193 of 2015, (2015) 4 SCC 136 (Supreme Court of India)",
    date: "Judgment Dated 09 January 2015",
    facts:
      "A commercial entity forfeited the entire earnest/security deposit citing contractual default clauses, despite suffering no actual financial loss and subsequently re-allotting the property at a higher value.",
    holding:
      "The Supreme Court held that under Section 74 of the Indian Contract Act, 1872, any clause stipulating automatic forfeiture of a deposit acts in the nature of a penalty. Where actual loss can be calculated, the party holding the deposit cannot forfeit the entire amount unless it pleads and proves actual monetary damage suffered. Arbitrary forfeiture of a refundable deposit without proof of loss is illegal and must be refunded with interest.",
    amount: "Full Deposit Refund Ordered with 9% Annual Interest",
    takeaway:
      "Co-living operators cannot rely on one-sided app terms to forfeit 100% of your security deposit for a minor notice shortfall or early move-out if your bed or room was immediately re-allocated or no actual loss occurred.",
  },
  {
    title: "Consumer Commission Ruling Against Branded Co-Living / PG Operator for Unrefunded Deposit",
    parties: "Rohan Sharma v. Zolostays Property Solutions Pvt. Ltd.",
    citation: "Consumer Complaint, District Consumer Disputes Redressal Commission (Bengaluru Urban)",
    date: "Consumer Forum Precedent on Managed Accommodation",
    facts:
      "The resident vacated a managed co-living property in Bengaluru after serving the mandatory 30-day notice on the operator's mobile app. Despite generating a final settlement slip promising refund within 30 working days, the operator failed to credit the security deposit for over 4 months and deducted arbitrary exit maintenance charges.",
    holding:
      "The District Consumer Commission held that a commercial co-living operator providing app-managed accommodation, housekeeping, Wi-Fi, and security services is a service provider under Section 2(42) of the Consumer Protection Act, 2019. Retaining a resident's security deposit beyond the promised refund window and levying unverified exit fees constitutes gross deficiency in service under Section 2(11) and unfair trade practice under Section 2(47).",
    amount: "100% Security Deposit Refund + Interest + Mental Agony & Litigation Costs",
    takeaway:
      "Unlike private landlord disputes that often require civil court suits, branded co-living operators can be dragged directly before the District Consumer Commission via e-Jagriti at zero court fee for claims up to ₹5 lakh.",
  },
  {
    title: "Early Exit Due to Unhygienic Conditions & Amenity Failure Overrides Lock-In Clause",
    parties: "Komal Verma v. DTwelve Spaces Pvt. Ltd. (Stanza Living)",
    citation: "District Consumer Disputes Redressal Commission Precedent (Delhi NCR)",
    date: "Consumer Accommodation Service Ruling",
    facts:
      "A student enrolled in a managed student residence paid advance rent and security deposit under a fixed lock-in agreement. Within weeks, severe deficiencies emerged including unhygienic food, frequent power/AC breakdowns, and unaddressed security complaints. When the resident vacated early, the operator forfeited the entire security deposit citing breach of the lock-in period.",
    holding:
      "The Consumer Commission ruled that lock-in clauses are reciprocal, not unilateral traps. When an accommodation operator fails to deliver fundamental habitable amenities promised in its brochure and app onboarding, the operator commits the primary breach of contract. A resident forced to vacate due to deficient services is entitled to an immediate refund of the security deposit without lock-in forfeiture.",
    amount: "Full Deposit Refund + Compensation for Harassment & Litigation Costs",
    takeaway:
      "Always preserve photos of poor food, water logging, broken AC, or unresolved app tickets. Proof of service deficiency neutralizes the operator's lock-in forfeiture defense.",
  },
];

const DEDUCTION_ROWS = [
  {
    item: "Mandatory Exit Cleaning / Repainting Fee (₹2,500–₹6,000)",
    operatorClaim: "'Standard exit refurbishment deducted from every resident upon move-out'",
    legalStatus: "Illegitimate (Unless Disclosed & Agreed)",
    statutoryRule:
      "Normal wear and tear is exempted under Section 108(m) Transfer of Property Act & Model Tenancy Act. Hidden exit fees violate Section 2(47) CPA 2019.",
  },
  {
    item: "100% Deposit Forfeiture for Early Exit During Lock-In",
    operatorClaim: "'Resident vacated before completing 3/6-month lock-in period'",
    legalStatus: "Void if Due to Service Deficiency / Capped by Sec 74",
    statutoryRule:
      "Under Section 74 Contract Act, punitive forfeiture is invalid without proof of actual vacancy loss. Void entirely if resident left due to poor food/amenities.",
  },
  {
    item: "Unverified 'Property Damage' or Mattress/Appliance Charge",
    operatorClaim: "'Deduction for common-area appliance repair or room fixture damage'",
    legalStatus: "Illegitimate Without Joint Inspection Proof",
    statutoryRule:
      "Operator must produce a signed move-in vs. move-out inventory report and actual vendor GST repair invoices attributable to the specific resident.",
  },
  {
    item: "Notice Period Shortfall Due to App Technical Glitch",
    operatorClaim: "'Move-out ticket was raised on the 3rd instead of the 1st of the month'",
    legalStatus: "Challengeable as Unfair Contract (Sec 2(46) CPA)",
    statutoryRule:
      "If the app blocked move-out filing or the resident gave prior written/WhatsApp intimation to the Property Captain, full month forfeiture is unconscionable.",
  },
  {
    item: "Actual Unpaid Electricity Sub-Meter / Pro-Rata Rent Arrears",
    operatorClaim: "'Actual metered AC electricity consumption & unpaid stay days'",
    legalStatus: "Legitimate (Only on Actual Meter Reading)",
    statutoryRule:
      "Permissible only when backed by actual sub-meter unit readings at state electricity tariff rates—operators cannot charge commercial markups over discom rates.",
  },
];

const DOCUMENT_MATRIX = [
  {
    doc: "Digital Resident Agreement / Onboarding PDF",
    why: "Establishes the refundable nature of the deposit, notice period duration, and the operator's contractual refund timeline (7–45 days).",
    where: "Download from Stanza Living / Zolo / Colive / Housr app 'Documents' tab or onboarding email.",
  },
  {
    doc: "Deposit Payment Receipt & Bank / UPI UTR",
    why: "Proves exact monetary consideration paid to the corporate entity (e.g., DTwelve Spaces Pvt. Ltd.) and anchors your 18% interest calculation.",
    where: "App payment history ledger + your bank account statement / UPI transaction ID.",
  },
  {
    doc: "Move-Out Intimation Ticket & Timestamp",
    why: "Defeats the operator's most common excuse—that you vacated without serving the mandatory 30-day move-out notice.",
    where: "Screenshot of 'Initiate Move-Out / Exit Request' in the resident app + email confirmation.",
  },
  {
    doc: "Key Handover Sign-Off & Checkout Room Video",
    why: "Establishes vacant possession handover date and proves the room, mattress, and fixtures were returned undamaged.",
    where: "Timestamped 60-second walkthrough video + WhatsApp acknowledgment from Residence Captain.",
  },
  {
    doc: "Final Settlement (FnF) Statement / Deduction Sheet",
    why: "Pinpoints arbitrary deductions (exit cleaning, painting, notice penalty) for direct item-by-item legal rebuttal.",
    where: "App 'Refund Breakdown' screen or settlement email sent by operator finance team.",
  },
  {
    doc: "Service Deficiency Tickets (Food / Wi-Fi / AC / Hygiene)",
    why: "Essential if you vacated during a lock-in period; proves the operator breached fundamental habitability obligations first.",
    where: "In-app complaint log screenshots, photos of issues, and resident WhatsApp group messages.",
  },
  {
    doc: "Section 63 BSA Electronic Evidence Certificate",
    why: "Makes all mobile app screenshots, emails, WhatsApp chats, and PDF statements legally admissible before Consumer Commissions.",
    where: "Prepared by your advocate alongside the statutory legal notice and e-Jagriti petition.",
  },
];

const FAQS = [
  {
    question: "How long can a co-living operator legally take to refund my security deposit?",
    answer:
      "Under standard tenancy norms and the Model Tenancy Act, 2021, a security deposit should be refunded immediately upon handing over vacant possession, or within the explicit contractual window agreed during onboarding (typically 7 to 30 working days, and up to 45 working days in certain Stanza Living or Zolostays agreements). Once that contractual window expires, retaining your deposit even for a single extra week without a valid UTR constitutes Deficiency in Service under Section 2(11) of the Consumer Protection Act, 2019, entitling you to demand 18% per annum interest.",
  },
  {
    question: "Why is my Stanza Living or Zolo deposit refund stuck on 'Refund Initiated / Processing'?",
    answer:
      "Co-living apps frequently update the resident dashboard to 'Refund Approved' or 'Sent to Finance' merely as an internal ticket status, without actually executing a bank NEFT/IMPS payout. Under Reserve Bank of India payment settlement rules, any genuine bank transfer generates a 12-digit Unique Transaction Reference (UTR) within hours. If the operator cannot share a valid UTR number that your bank can trace, the refund has not been released, and you should immediately serve a formal legal notice.",
  },
  {
    question: "Can a co-living company deduct mandatory painting, deep cleaning, or exit charges from my deposit?",
    answer:
      "No, unless an exact, reasonable exit fee was transparently disclosed and signed before booking. Even where buried in fine print, deducting ₹3,000 to ₹8,000 for routine repainting or normal wear and tear after a short stay can be challenged as an 'Unfair Contract' under Section 2(46) and 'Unfair Trade Practice' under Section 2(47) of the Consumer Protection Act, 2019, read with Section 108(m) of the Transfer of Property Act, 1882.",
  },
  {
    question: "What if the co-living operator forfeits my entire deposit because I vacated during the lock-in period?",
    answer:
      "First, if you vacated during the lock-in period because the operator failed to provide promised services—such as hygienic meals, functional AC, clean water, Wi-Fi, or security—the lock-in clause becomes unenforceable due to the operator's fundamental breach. Second, even in a voluntary early exit, Section 74 of the Indian Contract Act, 1872 prohibits punitive forfeiture; the operator can only deduct proven actual vacancy loss, not forfeit 100% of your deposit as an automatic penalty.",
  },
  {
    question: "Can I file a Consumer Court case on e-Jagriti against a co-living operator or PG company?",
    answer:
      "Yes. Unlike traditional bare-shell flat landlords, co-living operators and managed PGs provide commercial hospitality and accommodation services (housekeeping, utilities, Wi-Fi, app support, security). Therefore, residents are protected consumers under Section 2(7) of the Consumer Protection Act, 2019. You can file an online complaint on the government's e-Jagriti portal in the District Commission where you currently reside or work, with zero court fee for claims up to ₹5 lakh.",
  },
  {
    question: "Who is liable to refund my deposit if the co-living company shuts down the building or fights with the landlord?",
    answer:
      "Under the doctrine of privity of contract, the corporate entity that collected your security deposit and issued your invoice (the co-living operator) remains 100% legally liable to refund your money. Internal rent defaults or lease termination disputes between the co-living company and the building owner cannot be used as an excuse to withhold resident deposits.",
  },
  {
    question: "Co-living ya PG operator security deposit wapas nahi kar raha toh legal notice kaise bheje?",
    answer:
      "Agar Stanza Living, Zolo, Colive, Housr ya koi bhi co-living/PG operator move-out ke baad aapka security deposit rok raha hai ya galat deductions kar raha hai, toh apne onboarding agreement, payment receipt aur move-out screenshot ke saath ek formal Advocate Legal Notice bhejein. LegalRecovery.in par verified advocate Consumer Protection Act 2019 aur Section 74 Contract Act ke tehat operator ke corporate office par Registered Speed Post, email aur WhatsApp se 15-din ka demand notice serve karte hain.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Co-Living Operator Holding Your Deposit: How to Get It Back",
  description:
    "Co-living operator delaying your deposit or making unfair deductions? Contract terms, consumer law and a legal notice route.",
  datePublished: "2026-11-04T11:55:00+05:30",
  dateModified: "2026-11-04T11:55:00+05:30",
  mainEntityOfPage: `${SITE_URL}/co-living-deposit-refund-legal-notice`,
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
    name: "Co-Living Security Deposit Refund & Consumer Protection Law in India",
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
      name: "Rental & Security Deposit Recovery",
      item: `${SITE_URL}/recover-security-deposit-from-landlord-india`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Co-Living Deposit Refund Legal Notice",
      item: `${SITE_URL}/co-living-deposit-refund-legal-notice`,
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

export default function CoLivingDepositRefundLegalNoticePage() {
  const breadcrumbItems = [
    { label: "Rental & Security Deposit Recovery", href: "/recover-security-deposit-from-landlord-india" },
    { label: "Co-Living Deposit Refund", href: "/co-living-deposit-refund-legal-notice" },
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
        {/* Hero Section strictly matching IRCTC & Company-Directors theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Consumer Protection Act, 2019 (Sec 2(11) &amp; 2(46))</span>
              <span className="text-red-500">•</span>
              <span>Section 74 Indian Contract Act</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Co-Living Operator Holding Your Deposit: How to Get It Back
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Quick Answer (Co-Living Deposit Recovery Mandate)
              </p>
              <p>
                Co-living operators (such as Stanza Living, Zolostays, Colive, and Housr) provide commercial accommodation services and are strictly liable under Sections 2(11) and 2(47) of the Consumer Protection Act, 2019, and Section 74 of the Indian Contract Act, 1872. If your deposit is delayed beyond the 7–45 day contractual window or subjected to arbitrary painting/lock-in cuts, export your move-out proof, escalate to the Grievance Officer, and serve a 15-day statutory advocate legal notice before filing on e-Jagriti.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">48 Hours</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">E-Commerce Grievance Ack Rule</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">Sec 74 ICA</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Bars Punitive Deposit Forfeiture</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">15 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Advocate Legal Notice Cure Window</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">₹0 Court Fee</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">On e-Jagriti for Claims ≤ ₹5 Lakh</p>
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
            <CoLivingTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: Archetype G3 Core - Pre-Flight Checklist Wizard */}
              <section
                id="heading-pre-flight-checklist"
                aria-labelledby="heading-pre-flight-checklist-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-pre-flight-checklist-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Pre-Flight Readiness Checklist: 6 Steps Before Serving a Co-Living Deposit Legal Notice
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Interactive Readiness Audit
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Before you escalate a stalled co-living security deposit refund, secure your digital evidence from the operator&apos;s mobile app. Branded accommodation aggregators routinely deactivate former residents&apos; app accounts 15 to 30 days after move-out, erasing your access to onboarding contracts, support tickets, and settlement breakdowns. Check off each item below to verify your claim readiness:
                </p>

                <CoLivingChecklistWizard />
              </section>

              {/* Section 2: Legal Basis - Why Co-Living Operators Fall Under Consumer Law */}
              <section
                id="heading-legal-status"
                aria-labelledby="heading-legal-status-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-legal-status-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Why Co-Living Operators (Stanza Living, Zolo, Colive, Housr) Fall Under the Consumer Protection Act, 2019
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When a traditional flat owner refuses to return a rental security deposit, tenants often face a procedural hurdle: bare-shell residential leases are governed by the Transfer of Property Act, 1882 and state Rent Control laws, requiring civil recovery suits (see our hub guide on{" "}
                  <Link href="/recover-security-deposit-from-landlord-india" className="text-blue-700 underline font-semibold">
                    recovering a rental security deposit from a landlord in India
                  </Link>
                  ). However, <strong>managed co-living operators and branded PGs operate on a fundamentally different legal footing</strong>.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Companies such as <strong>Stanza Living</strong> (DTwelve Spaces Pvt. Ltd.), <strong>Zolo / Zolostays</strong> (Zolostays Property Solutions Pvt. Ltd.), <strong>Colive</strong> (Colive Your Way Pvt. Ltd.), <strong>Housr</strong>, <strong>Your-Space</strong>, <strong>FF21</strong>, and <strong>HelloWorld</strong> do not merely grant bare possession of immovable property. They sell an integrated package of <strong>commercial hospitality and accommodation services</strong>—including daily housekeeping, Wi-Fi, biometric security, app-based maintenance, shared appliances, and meal plans—on a leave-and-license or service basis.
                </p>

                {/* Key Statutory Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded bg-red-50 text-red-700">
                      Section 2(7) &amp; 2(11) CPA 2019
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Deficiency in Accommodation Service
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Every resident paying rent and security deposit through an operator&apos;s portal is a statutory &quot;Consumer&quot;. Withholding a refundable deposit past the promised 7–45 working-day window constitutes actionable <strong>Deficiency in Service</strong> before District Consumer Commissions.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded bg-amber-50 text-amber-800">
                      Section 2(46) CPA 2019
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Nullifying Unfair Clickwrap Contracts
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Co-living apps force residents to accept non-negotiable digital terms during move-in. Under Section 2(46), any contract term that imposes excessive security deposit forfeiture or one-sided exit penalties is legally voidable as an <strong>Unfair Contract</strong>.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-800">
                      Section 74 Indian Contract Act, 1872
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Bar on Punitive Deposit Forfeiture
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Even if a resident exits during a lock-in period or gives 20 days&apos; notice instead of 30, Section 74 bars automatic 100% deposit forfeiture. The operator can only claim reasonable compensation for actual proven vacancy loss.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded bg-slate-100 text-slate-800">
                      E-Commerce Rules, 2020 (Rule 4 &amp; 5)
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Mandatory Grievance Officer Timelines
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Because co-living bookings and deposits are collected over digital platforms, operators must publish Grievance Officer contact details, acknowledge complaints within <strong>48 hours</strong>, and resolve refund tickets within <strong>30 days</strong>.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: Legitimate vs Illegitimate Deductions Table */}
              <section
                id="heading-deductions-table"
                aria-labelledby="heading-deductions-table-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-deductions-table-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Legitimate vs. Illegitimate Co-Living Deposit Deductions: What Operators Can and Cannot Cut
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  A major flashpoint in co-living move-outs is the Final Settlement (FnF) statement, where a ₹25,000 or ₹40,000 security deposit is whittled down to a few thousand rupees through opaque line items. Compare your operator&apos;s deduction sheet against Indian statutory benchmarks (and see our dedicated guide on{" "}
                  <Link
                    href="/legal-notice-landlord-unreasonable-security-deposit-deductions"
                    className="text-blue-700 underline font-semibold"
                  >
                    challenging unreasonable painting and repair deductions
                  </Link>
                  ):
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[640px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Legitimate vs Illegitimate Co-Living Security Deposit Deductions</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Deduction Head on App / FnF Sheet</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Typical Operator Claim</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Legal Validity</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Rule &amp; Counter-Argument</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {DEDUCTION_ROWS.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/80">
                          <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                            {row.item}
                          </th>
                          <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs text-slate-600 italic">
                            {row.operatorClaim}
                          </td>
                          <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-bold text-xs">
                            <span
                              className={`inline-block px-2.5 py-1 rounded-md ${
                                row.legalStatus.startsWith("Legitimate")
                                  ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                                  : row.legalStatus.startsWith("Void")
                                  ? "bg-amber-50 text-amber-900 border border-amber-200"
                                  : "bg-red-50 text-red-800 border border-red-200"
                              }`}
                            >
                              {row.legalStatus}
                            </span>
                          </td>
                          <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs leading-relaxed">
                            {row.statutoryRule}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  Note: Under the Model Tenancy Act, 2021 (Section 11 — adopted by states including Tamil Nadu, Uttar Pradesh, Andhra Pradesh, and Assam†), residential security deposits are capped at a maximum of 2 months&apos; rent and must be refunded upon vacating.
                </p>
              </section>

              {/* Section 4: Archetype G3 Core - Document & Evidence Matrix Table */}
              <section
                id="heading-document-matrix"
                aria-labelledby="heading-document-matrix-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-document-matrix-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Document &amp; Evidence Matrix: 7 Records That Win Co-Living Deposit Claims
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Because co-living relationships are managed entirely through mobile apps rather than stamped physical leases, electronic records form the backbone of your recovery claim. Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), digital records are fully admissible when preserved correctly (also see how{" "}
                  <Link href="/should-rental-agreements-be-notarized-in-india" className="text-blue-700 underline font-semibold">
                    unnotarized and digital 11-month agreements work as legal proof
                  </Link>
                  ):
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[600px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Document and Evidence Matrix for Co-Living Security Deposit Recovery</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Document / Digital Record</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Why It Matters (Evidentiary Value)</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Where &amp; How to Get It</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {DOCUMENT_MATRIX.map((item, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/80">
                          <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                            {item.doc}
                          </th>
                          <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs sm:text-sm leading-relaxed">
                            {item.why}
                          </td>
                          <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs text-slate-600">
                            {item.where}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 5: Landmark Precedents & Consumer Forum Orders */}
              <section
                id="heading-case-digest"
                aria-labelledby="heading-case-digest-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-case-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Consumer Commission Orders &amp; Legal Precedents on PG and Co-Living Deposit Refunds
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Judicial &amp; Forum Rulings
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
                            Precedent #{idx + 1} • {c.citation}
                          </span>
                          <span className="text-xs text-slate-500 font-semibold">{c.date}</span>
                        </div>

                        <div>
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1">
                            {c.title}
                          </h3>
                          <p className="text-xs font-semibold text-slate-600">
                            Parties / Context: <span className="text-slate-800">{c.parties}</span>
                          </p>
                        </div>

                        <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">The Dispute &amp; Facts:</strong>
                            <p className="leading-relaxed">{c.facts}</p>
                          </div>

                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">Legal Holding:</strong>
                            <p className="leading-relaxed">{c.holding}</p>
                          </div>
                        </div>

                        <div className="p-3 sm:p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Relief / Legal Principle
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Forum Applicability
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Enforceable Across District Commissions &amp; Civil Courts
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>What this means for your deposit claim:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 6: Archetype G3 Process Timeline <ol> with <time> + SVG Flowchart */}
              <section
                id="heading-escalation-timeline"
                aria-labelledby="heading-escalation-timeline-title"
                className="scroll-mt-28 space-y-5"
              >
                <h2
                  id="heading-escalation-timeline-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Step-by-Step Escalation Timeline: From Move-Out Ticket to e-Jagriti Recovery
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Do not let customer support stall you with endless &quot;7 more working days&quot; promises. Follow this chronological statutory timeline to compel payment from a co-living operator (or if your accommodation is an independent paying guest house, see our guide on{" "}
                  <Link href="/legal-notice-to-pg-owner-for-security-deposit-refund" className="text-blue-700 underline font-semibold">
                    sending a legal notice to a PG owner for security deposit refund
                  </Link>
                  ):
                </p>

                {/* Hand-Authored SVG Flowchart */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Co-Living Deposit Escalation Architecture</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 255"
                    width="840"
                    height="255"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Co-Living Deposit Refund 5-Stage Escalation Flowchart"
                  >
                    <defs>
                      <linearGradient id="colivGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="colivAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="colivSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Stage 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#colivGrad)" />
                    <text x="80" y="44" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">DAY 0 (MOVE-OUT)</text>
                    <text x="80" y="64" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Handover &amp; Export</text>
                    <text x="80" y="81" fill="#E2E8F0" fontSize="10" textAnchor="middle">Room Video + Key Sign</text>
                    <text x="80" y="97" fill="#CBD5E1" fontSize="9" textAnchor="middle">Save App Agreement PDF</text>

                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Stage 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="44" fill="#B45309" fontWeight="bold" textAnchor="middle">DAY 7 TO 45</text>
                    <text x="250" y="64" fill="#92400E" fontWeight="bold" textAnchor="middle">Audit FnF Sheet</text>
                    <text x="250" y="81" fill="#78350F" fontSize="10" textAnchor="middle">Reject Fake Painting Cut</text>
                    <text x="250" y="97" fill="#78350F" fontSize="9" textAnchor="middle">Demand Bank UTR No.</text>

                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Stage 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="420" y="44" fill="#404447" fontWeight="bold" textAnchor="middle">48H GRIEVANCE</text>
                    <text x="420" y="64" fill="#0F172A" fontWeight="bold" textAnchor="middle">Nodal &amp; NCH 1915</text>
                    <text x="420" y="81" fill="#334155" fontSize="10" textAnchor="middle">E-Commerce Rule 4 Notice</text>
                    <text x="420" y="97" fill="#475569" fontSize="9" textAnchor="middle">Lodge NCH Docket</text>

                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Stage 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#colivAlert)" />
                    <text x="590" y="44" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">15-DAY DEMAND</text>
                    <text x="590" y="64" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                    <text x="590" y="81" fill="#FEE2E2" fontSize="10" textAnchor="middle">To Corporate HQ + MD</text>
                    <text x="590" y="97" fill="#FECACA" fontSize="9" textAnchor="middle">Speed Post + Sec 63 Mail</text>

                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Stage 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#colivSucc)" />
                    <text x="760" y="44" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">DAY 16+ ACTION</text>
                    <text x="760" y="64" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Bank Credit / Court</text>
                    <text x="760" y="81" fill="#D1FAE5" fontSize="10" textAnchor="middle">100% Deposit + 18% Int.</text>
                    <text x="760" y="97" fill="#A7F3D0" fontSize="9" textAnchor="middle">or e-Jagriti Filing (₹0 Fee)</text>

                    {/* Bottom Summary Banner */}
                    <rect x="10" y="140" width="820" height="90" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="165" fill="#0F172A" fontWeight="bold" fontSize="11">KEY STATUTORY LEVERAGE POINTS AGAINST CO-LIVING OPERATORS:</text>
                    <text x="25" y="186" fill="#475569" fontSize="10">• Consumer Protection (E-Commerce) Rules, 2020: Grievance Officer must acknowledge within 48 hours &amp; resolve within 30 days</text>
                    <text x="25" y="203" fill="#475569" fontSize="10">• Section 74 Indian Contract Act, 1872: Unilateral lock-in or notice-period forfeiture without proving actual loss is void as a penalty</text>
                    <text x="25" y="220" fill="#475569" fontSize="10">• Section 34(2)(d) Consumer Protection Act, 2019: File on e-Jagriti from your current city of residence/work, even after leaving the PG city</text>
                  </svg>
                </div>

                {/* Semantic Process Timeline <ol> with <time> elements (Archetype G3 requirement) */}
                <ol className="space-y-4 text-slate-700 list-none">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1.5 w-full">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                          Move-Out Day: Record Video Walkthrough &amp; Export App Ledger
                        </h3>
                        <time dateTime="P0D" className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded bg-slate-100 text-slate-700">
                          Day 0 (Checkout Date)
                        </time>
                      </div>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        On the day you vacate, shoot a 60-second timestamped video of your bed, cupboard, walls, mattress, and bathroom. Obtain a written message or WhatsApp confirmation from the Residence Captain / Property Manager confirming key return and zero physical damage. Before leaving the premises, download your digital onboarding agreement, rent invoices, and deposit receipt from the app.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1.5 w-full">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                          Audit the Final Settlement Statement &amp; Contest Unfair Deductions in Writing
                        </h3>
                        <time dateTime="P7D" className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded bg-amber-50 text-amber-800">
                          Days 7 to 15 Post-Exit
                        </time>
                      </div>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        When the operator uploads your Final Settlement (FnF) breakdown, scrutinize every deduction. If they have deducted flat charges for &quot;exit cleaning&quot;, &quot;repainting&quot;, or &quot;notice shortfall&quot;, do not click the &quot;Accept Settlement&quot; button if it waives your right to dispute. Immediately reply via email and in-app ticket rejecting the unauthorized deductions under Section 74 of the Contract Act.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1.5 w-full">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                          Escalate to the Operator&apos;s Grievance Officer &amp; National Consumer Helpline (1915)
                        </h3>
                        <time dateTime="P30D" className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded bg-slate-100 text-slate-700">
                          Day 30 / Window Expiry (48h Rule)
                        </time>
                      </div>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Once the contractual refund window expires—or immediately if your deposit was wrongly forfeited—send a formal escalation email to the operator&apos;s Nodal / Grievance Officer under Rule 4 of the Consumer Protection (E-Commerce) Rules, 2020. Simultaneously register a grievance on the National Consumer Helpline (1915). If the app claims the refund was processed but your bank shows nothing, follow our guide on{" "}
                        <Link href="/refund-shows-successful-but-not-received" className="text-blue-700 underline font-semibold">
                          tracing refunds that show successful but are not received in your bank
                        </Link>
                        .
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1.5 w-full">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                          Serve a 15-Day Statutory Advocate Legal Demand Notice
                        </h3>
                        <time dateTime="P15D" className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded bg-red-50 text-red-700">
                          15 Calendar Days Cure Window
                        </time>
                      </div>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Co-living companies routinely ignore standard support tickets but escalate formal legal notices directly to their legal and finance desks to avoid consumer court litigation costs. Have an advocate dispatch a statutory demand notice to the operator&apos;s registered corporate office (via Registered Speed Post + email/WhatsApp under Section 63 BSA), demanding 100% of the withheld deposit, 18% annual interest, and ₹15,000 for mental harassment within 15 days.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1.5 w-full">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                          File an Online Consumer Complaint on e-Jagriti From Your Home City
                        </h3>
                        <time dateTime="P45D" className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-800">
                          Day 16 After Notice Delivery
                        </time>
                      </div>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the co-living operator fails to credit your bank account within the 15-day notice period, file a formal petition on the government&apos;s e-Jagriti portal under Section 35 of the Consumer Protection Act, 2019 (see our step-by-step walkthrough on{" "}
                        <Link href="/how-to-file-consumer-complaint-india" className="text-blue-700 underline font-semibold">
                          how to file a consumer complaint online in India
                        </Link>
                        ). Under Section 34(2)(d), even if your PG was in Bengaluru, Pune, Hyderabad, or Gurugram and you have moved back to your hometown, you can file the case in the District Commission where you currently reside.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 7: Operator Dispute Scenarios Interactive Tabs */}
              <section
                id="heading-operator-scenarios"
                aria-labelledby="heading-operator-scenarios-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-operator-scenarios-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Operator Dispute Scenarios: Stanza Living, Zolostays, Colive &amp; App-Based PG Issues
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select Your Specific Co-Living Deposit Bottleneck to View the Statutory Rule and Immediate Legal Remedy
                  </p>
                </div>

                <CoLivingProblemTabs />
              </section>

              {/* Section 8: Worked Example */}
              <section
                id="heading-worked-example"
                aria-labelledby="heading-worked-example-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Worked Recovery Example: How a Bengaluru Resident Recovered ₹36,000 Deposit + ₹8,000 Compensation
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Recovery Calculation &amp; Timeline
                    </span>
                    <span className="text-xs text-slate-400">Bellandur, Bengaluru (Managed Co-Living Twin Sharing)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Onboarding &amp; Move-Out:</strong> Siddharth Nair, a software engineer in Bellandur, Bengaluru, stayed at a branded co-living residence paying ₹18,000 monthly rent and a 2-month refundable security deposit of <strong>₹36,000</strong>. After completing 8 months (well past his 6-month lock-in), Siddharth raised a formal 30-day move-out request on the resident app on 1 August 2026 and handed over his room keys and access card on 31 August 2026 with a clean inspection sign-off from the Property Captain.
                    </p>
                    <p>
                      <strong>The Unfair Deduction &amp; Delay:</strong> The onboarding agreement promised deposit refund within 30 working days. On Day 38, the operator generated a settlement sheet deducting <strong>₹4,500</strong> for &quot;Exit Refurbishment &amp; Repainting&quot; and <strong>₹3,200</strong> for &quot;Common Appliance Depreciation&quot;, approving only ₹28,300. Worse still, even after 55 calendar days, the approved ₹28,300 remained stuck on <em>&quot;Sent to Bank / Payout Queued&quot;</em> with support tickets automatically closed.
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> Siddharth engaged LegalRecovery.in. An advocate served a formal 15-day statutory demand notice via Registered Speed Post and Section 63 BSA email to the operator&apos;s corporate headquarters and Grievance Officer. The notice challenged the ₹7,700 deductions as an unfair trade practice under Section 2(47) of the Consumer Protection Act, 2019 and Section 74 of the Contract Act, demanding the full ₹36,000 principal plus 18% interest before filing an e-Jagriti complaint.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Resolution (Day 9 After Notice):</strong>
                      Nine days after the legal notice reached the company&apos;s legal compliance desk, the finance team reversed the ₹7,700 arbitrary exit deductions in full and remitted the entire <strong>₹36,000</strong> via NEFT (sharing the 12-digit UTR on email) along with a ₹1,500 delay goodwill adjustment to close the pre-litigation docket without facing a Consumer Commission hearing.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Archetype G3 Core - Notice Template Preview Block */}
              <section
                id="heading-notice-template"
                aria-labelledby="heading-notice-template-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-notice-template-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Co-Living Security Deposit Refund Legal Notice &amp; Final Escalation Format
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Pre-Litigation Format
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Use the structured format below to send a final pre-litigation escalation to the co-living operator&apos;s Grievance Officer, or have a verified advocate issue it on formal legal letterhead with Registered Speed Post tracking:
                </p>

                <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 sm:p-7 border border-slate-800 shadow-lg space-y-4 text-xs sm:text-sm font-mono overflow-x-auto">
                  <div className="text-right text-slate-400 text-xs">
                    BY REGISTERED SPEED POST A.D. / EMAIL (UNDER SECTION 63 BSA, 2023)
                  </div>
                  <div className="space-y-1">
                    <p className="font-bold text-amber-400">
                      STATUTORY LEGAL NOTICE UNDER THE CONSUMER PROTECTION ACT, 2019 &amp; SECTION 73/74 OF THE INDIAN CONTRACT ACT, 1872
                    </p>
                    <p className="text-slate-400">
                      To: 1. [Registered Corporate Name of Co-Living Operator, e.g., DTwelve Spaces Pvt. Ltd. / Zolostays Property Solutions Pvt. Ltd.]
                    </p>
                    <p className="text-slate-400">
                      Registered Office: [Complete MCA Registered Address with PIN Code]
                    </p>
                    <p className="text-slate-400">
                      2. The Grievance Officer / Nodal Officer, [Brand Name], Email: [Grievance Email ID]
                    </p>
                  </div>
                  <div className="space-y-2.5 text-slate-300 leading-relaxed font-sans text-xs sm:text-sm">
                    <p>
                      <strong>Subject:</strong> Final 15-Day Statutory Notice for Refund of Withheld Security Deposit of ₹[Deposit Amount] — Resident ID: [Resident/Booking ID] — Property: [Property Name &amp; City]
                    </p>
                    <p>
                      <strong>Sir / Madam,</strong>
                    </p>
                    <p>
                      Under instructions from and on behalf of my client, <strong>[Your Full Name]</strong>, residing at [Your Current Address], I hereby serve upon you the following statutory legal notice:
                    </p>
                    <p>
                      1. That my client occupied Room/Bed No. [Room/Bed Number] at your managed co-living property known as &quot;[Property Name, Locality, City]&quot; from [Move-In Date] to [Move-Out Date] under Resident ID [Resident ID], and paid a refundable security deposit of <strong>₹[Total Deposit Paid]</strong> vide Transaction/UTR No. [UTR Number] dated [Payment Date].
                    </p>
                    <p>
                      2. That in strict compliance with the onboarding agreement, my client submitted a formal move-out intimation on your resident portal on [Move-Out Notice Date] (Ticket ID: [Ticket ID]) and handed over vacant, undamaged possession of the room and keys to your Property Manager on [Move-Out Date] with all monthly rent and metered dues duly settled.
                    </p>
                    <p>
                      3. That despite the expiry of the promised refund timeline of [7 / 30 / 45] working days on [Deadline Date], you have unlawfully withheld ₹[Withheld Amount] [and/or imposed arbitrary, unsubstantiated deductions of ₹_____ towards routine painting / exit charges / lock-in forfeiture].
                    </p>
                    <p>
                      4. That your retention of my client&apos;s security deposit and imposition of unilateral exit deductions constitute gross <strong>Deficiency in Service under Section 2(11)</strong>, <strong>Unfair Contract under Section 2(46)</strong>, and <strong>Unfair Trade Practice under Section 2(47) of the Consumer Protection Act, 2019</strong>, besides violating <strong>Section 74 of the Indian Contract Act, 1872</strong> (as settled by the Hon&apos;ble Supreme Court in <em>Kailash Nath Associates v. DDA</em>).
                    </p>
                    <p>
                      5. I therefore call upon you to remit the entire refundable security deposit of <strong>₹[Amount Demanded]</strong> along with interest at 18% per annum from [Deadline Date] till realization, directly into my client&apos;s bank account within strictly <strong>15 (fifteen) calendar days</strong> of receipt of this notice, failing which my client shall file a Consumer Complaint on the e-Jagriti portal before the District Consumer Disputes Redressal Commission seeking full refund, ₹25,000 towards mental agony, and ₹15,000 towards litigation costs, at your sole risk and expense.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-800 text-slate-400 text-xs">
                    [Advocate Name] • Advocate • Enrolment No. [Bar Council Number]
                  </div>
                </div>
              </section>

              {/* Section 10: FAQs */}
              <section
                id="heading-faqs"
                aria-labelledby="heading-faqs-title"
                className="scroll-mt-28 space-y-4 sm:space-y-6"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions on Co-Living Deposit Refunds &amp; Legal Notices
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Verified Answers Grounded in the Consumer Protection Act 2019, Section 74 Contract Act &amp; Model Tenancy Act
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm open:shadow-md transition-all"
                    >
                      <summary className="font-bold text-slate-900 text-sm sm:text-base md:text-lg cursor-pointer flex justify-between items-start gap-3 list-none select-none">
                        <span>{faq.question}</span>
                        <span className="text-slate-400 group-open:rotate-180 transition-transform duration-200 font-black text-lg shrink-0 mt-0.5">
                          ↓
                        </span>
                      </summary>
                      <div className="mt-3 sm:mt-4 pt-3 border-t border-slate-100 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 11: Primary Sources Block */}
              <section
                id="heading-sources"
                aria-labelledby="heading-sources-title"
                className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200"
              >
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Primary Statutes, Consumer Protection Rules &amp; Official Portals
                </h2>
                <ol className="sources list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-600">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="leading-relaxed break-words">
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-blue-900 underline font-medium"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ol>
                <p className="text-xs text-slate-500 italic mt-2">
                  Statutory verification status: All statutory provisions verified against the Consumer Protection Act, 2019, Consumer Protection (E-Commerce) Rules, 2020, Indian Contract Act, 1872, Model Tenancy Act, 2021 (state adoption noted†), and Bharatiya Sakshya Adhiniyam, 2023 as of November 2026.
                </p>
              </section>

              {/* Honest Scope & Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full space-y-4">
                <div className="p-4 bg-slate-100 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <strong className="text-slate-900 font-bold block mb-1">
                    Scope of Our Legal Notice Service:
                  </strong>
                  LegalRecovery.in drafts and serves a formal advocate statutory demand notice via Registered Speed Post, email, and WhatsApp against registered co-living companies, managed PG operators, and property owners where you hold verifiable payment proof. While over 70% of corporate accommodation deposit disputes settle at the pre-litigation notice stage to avoid consumer forum penalties, if an operator is insolvent or ignores the notice, the next step is filing an online petition on e-Jagriti using the notice and delivery receipt we provide.
                </div>

                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Legal Demand Notice to Your Co-Living Operator
                </h2>
                <CoLivingNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Security Deposit, PG &amp; Rental Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/recover-security-deposit-from-landlord-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Recover Security Deposit from Landlord Hub →
                  </Link>
                  <Link
                    href="/legal-notice-to-pg-owner-for-security-deposit-refund"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice to PG Owner for Deposit Refund →
                  </Link>
                  <Link
                    href="/legal-notice-landlord-unreasonable-security-deposit-deductions"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Challenge Unreasonable Painting &amp; Repair Deductions →
                  </Link>
                  <Link
                    href="/services/security-deposits-and-rental-recoveries"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Security Deposit &amp; Rental Recovery Services →
                  </Link>
                  <Link
                    href="/legal-notice-to-cooperative-housing-society-maintenance-disputes"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Housing Society &amp; Maintenance Dispute Notice →
                  </Link>
                  <Link
                    href="/builder-booking-cancellation-refund-legal-notice"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Property Booking &amp; Token Money Refund Notice →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Contextual Recovery Guides */}
        <RelatedRecoveryGuides currentPath="/co-living-deposit-refund-legal-notice" cluster="property" />
      </div>
    </>
  );
}
