import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import CpaasTableOfContents from "./CpaasTableOfContents";
import CpaasScenarioTabs from "./CpaasScenarioTabs";
import CpaasRecoveryCTA from "./CpaasRecoveryCTA";

export const revalidate = 86400;

const PAGE_URL = "/cpaas-bulk-sms-whatsapp-bsp-cloud-telephony-postpaid-default-recovery";
const EXACT_H1 =
  "Meta & Telcos Bill You Monthly for Every WhatsApp Conversation & DLT SMS—How CPaaS & Cloud-Telephony Providers Recover Postpaid Enterprise Defaults";
const META_TITLE = "WhatsApp BSP, Bulk SMS & Cloud Telephony Debt Recovery";
const META_DESCRIPTION =
  "WhatsApp BSPs pay Meta ₹0.80+ per template upfront on thin margins. Use BSA s.63 CDR/Webhook logs & rapid legal notices to recover postpaid bursts.";

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
        alt: formatAltText(
          "WhatsApp BSP, Bulk SMS and Cloud Telephony postpaid debt recovery guide"
        ),
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

const FAQS = [
  {
    question:
      "How do WhatsApp BSPs and Bulk SMS aggregators defeat the 'our API key was leaked' defense in court?",
    answer:
      "Your Master Services Agreement (MSA) must contain a Strict API-Key Customer Custody & Indemnity Clause making the enterprise client solely responsible for all traffic authenticated via its REST API keys, Bearer tokens, or SMPP credentials. Under Section 11 of the Information Technology Act, 2000, electronic records attributed to a subscriber's security procedure are legally binding on the originator. Pairing that clause with timestamped IP-origin logs, DLT Principal Entity (PE) IDs, and a BSA 2023 Section 63 certificate eliminates unauthorized-usage excuses.",
  },
  {
    question:
      "Are Meta WhatsApp Webhook delivery logs and telco CDRs admissible without original server seizure?",
    answer:
      "Yes. Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (which replaced Section 65B of the Indian Evidence Act), electronic outputs—including Meta WABA Graph API webhook JSON logs, SMPP submit_sm_resp/deliver_sm DLR dumps, and cloud IVR pulse Call Detail Records (CDRs)—are admissible as primary documentary proof when accompanied by a statutory Section 63(4) certificate signed by your authorized systems administrator and an independent technical hash.",
  },
  {
    question:
      "Should a CPaaS platform file postpaid enterprise recovery in TDSAT or Commercial Court?",
    answer:
      "If you are a non-telco CPaaS aggregator, WhatsApp BSP, or cloud-telephony SaaS platform recovering unpaid postpaid invoices from an enterprise customer (fintech, e-commerce, NBFC, or edtech), your claim lies before the Commercial Court (for ₹3 Lakh and above) or Civil Court under Order XXXVII CPC—not TDSAT. Under Section 14 of the TRAI Act, 1997, TDSAT's exclusive jurisdiction is restricted to disputes between licensed telecom service providers (TSPs/VNOs) or between a licensee and a group of consumers.",
  },
  {
    question:
      "Can an enterprise withhold payment claiming low WhatsApp or DLT SMS delivery rates?",
    answer:
      "No, unless your SLA explicitly guaranteed handset conversion or 100% reachability. Under TRAI's TCCCPR 2018 framework, DLT scrubbing and telco interconnect charges are incurred the moment a message is submitted for scrubbing and carrier handoff—even if the end-user's handset is switched off or on DND. Similarly, Meta charges BSPs per initiated conversation window. Submitting operator-level DLR codes alongside your MSA 'Best-Effort Carrier Handoff' clause defeats delivery-rate set-off claims.",
  },
  {
    question:
      "What if an enterprise defaults on a ₹40 Lakh festive campaign burst and asks for a credit note?",
    answer:
      "Do not issue a credit note or write off pass-through costs. Because you have already paid Meta (₹0.80+ per marketing conversation) and Airtel/Jio/VI interconnect fees upfront—and remitted 18% GST via GSTR-1—issuing an unbacked credit note destroys your gross margin multiple times over. Serve a 15-day statutory demand notice demanding full principal, GST reimbursement, and contractual/MSMED interest, while freezing non-essential marketing APIs.",
  },
  {
    question:
      "Can Udyam-registered CPaaS and cloud-telephony providers claim 3x RBI bank rate interest?",
    answer:
      "Yes. If your CPaaS entity holds a valid Udyam Registration as a Micro or Small Enterprise prior to the contract date, delayed postpaid enterprise invoices beyond 45 days attract mandatory compound interest at three times the RBI bank rate under Section 16 of the MSMED Act, 2006. You can file a fast-track reference before the Micro and Small Enterprises Facilitation Council (MSEFC) under Section 18, which mandates conciliation followed by statutory arbitration.",
  },
  {
    question:
      "How should a CPaaS platform handle 100+ small-ticket SME bulk SMS and IVR defaulters?",
    answer:
      "Individual civil suits for ₹40,000 to ₹2 Lakh SME arrears are uneconomical. The most effective institutional workflow is uploading all overdue accounts in a structured CSV batch—mapping GSTIN, authorized signatory email, WhatsApp number, and unpaid invoice aging—to trigger synchronized fact-verified legal notices via Email, WhatsApp, and Speed Post RPAD before escalating holdouts.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 — Section 63 (Admissibility of Electronic Records & Hash Certificates)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Information Technology Act, 2000 — Sections 10A, 11 & 43 (Attribution of Electronic Records & API Custody)",
    url: "https://www.indiacode.nic.in/handle/123456789/1999",
  },
  {
    title: "Code of Civil Procedure, 1908 — Order XXXVII (Summary Suits on Liquidated Invoices & Written Contracts)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "TRAI Telecom Commercial Communications Customer Preference Regulations (TCCCPR), 2018 (DLT Framework)",
    url: "https://www.trai.gov.in/release-publication/regulation",
  },
  {
    title: "MSMED Act, 2006 — Sections 15, 16 & 18 (45-Day Payment Cap & 3x RBI Compound Interest)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Commercial Courts Act, 2015 — Section 12A (Pre-Institution Mediation for Claims ≥ ₹3 Lakh)",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}${PAGE_URL}`,
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
  },
  datePublished: "2026-11-18",
  dateModified: "2026-11-18",
  inLanguage: "en-IN",
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How CPaaS & WhatsApp BSPs Recover Postpaid Enterprise Defaults",
  description:
    "5-step legal and operational workflow for WhatsApp BSPs, DLT SMS aggregators, and cloud-telephony providers to collect overdue postpaid bursts.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Trigger Credit-Cap Throttling & Preserve Logs",
      text: "Cap non-critical marketing templates upon credit-limit breach and snapshot Meta WABA webhooks, SMPP DLRs, and SIP CDRs.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Generate BSA 2023 Section 63 Certificate",
      text: "Compile SHA-256 hash-verified electronic delivery logs and IP-origin records under Section 63(4) of the Bharatiya Sakshya Adhiniyam, 2023.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Serve 15-Day Fact-Verified Legal Notice",
      text: "Dispatch a multi-channel statutory demand notice citing strict API-key custody, upfront pass-through liability, and 18% GST.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Select Forum: Order XXXVII, Commercial Court s.12A, or MSEFC",
      text: "File Order XXXVII Summary Suit on signed IOs/invoices, Section 12A Commercial Mediation for ≥ ₹3L claims, or MSEFC reference if Udyam-registered.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Execute Decree or Batch Remaining SME Arrears",
      text: "Enforce bank/receivable attachment against solvent enterprises and route sub-₹3L SME accounts through CSV batch recovery.",
    },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
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
      name: "Telecom, ISP & CPaaS Hub",
      item: `${SITE_URL}/industries/telecom-isp-datacenter-msp-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "CPaaS, WhatsApp BSP & Cloud Telephony Recovery",
      item: `${SITE_URL}${PAGE_URL}`,
    },
  ],
};

export default function CpaasPostpaidDefaultRecoveryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
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

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-18 · CPaaS, WhatsApp BSP &amp; Cloud Telephony</span>
            <span>·</span>
            <span>B2B Creditor Playbook</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40–60 Word Executive Creditor Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Under the{" "}
            <Link
              href="/industries/telecom-isp-datacenter-msp-recovery"
              className="text-red-300 underline decoration-red-400/60 hover:text-white font-semibold"
            >
              Telecom, ISP &amp; CPaaS Recovery Framework
            </Link>
            , WhatsApp BSPs and SMS aggregators recover unpaid postpaid bursts by
            combining a Strict API-Key Custody Clause with{" "}
            <strong>BSA 2023 s.63</strong> certified Webhook/CDR logs. Enforce
            liquidated claims via <strong>Order XXXVII CPC</strong>,{" "}
            <strong>Commercial Courts s.12A</strong>, or{" "}
            <strong>MSMED s.16</strong> (3x RBI interest)—never TDSAT.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">
                &#8377;0.80+ / Conv.
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Meta Marketing Fee Paid Upfront by BSP
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">
                BSA s.63(4)
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Certified Webhook, DLR &amp; CDR Proof
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">
                10x Margin Hit
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Single &#8377;40L Default Wipes Thin Markups
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">
                Order XXXVII
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Summary Suit on Signed IOs &amp; Invoices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Telecom, ISP & CPaaS Hub",
                href: "/industries/telecom-isp-datacenter-msp-recovery",
              },
              {
                label: "CPaaS & WhatsApp BSP Postpaid Recovery",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <CpaasTableOfContents />

          {/* Main Content Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Why Postpaid CPaaS &amp; BSP Defaults Wipe Out 10x Gross Margin
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  India is the world&apos;s largest WhatsApp Business and A2P OTP
                  messaging market. Yet unlike traditional enterprise software
                  vendors that sell high-margin SaaS licenses,{" "}
                  <strong>
                    Communication Platform as a Service (CPaaS) providers,
                    official Meta WhatsApp Business Solution Providers (BSPs),
                    DLT Bulk SMS aggregators, and cloud-telephony platforms
                  </strong>{" "}
                  operate as thin-margin financial conduits.
                </p>
                <p>
                  Every time an enterprise client—whether a fintech lender,
                  e-commerce marketplace, edtech sales floor, or election
                  campaign agency—fires a promotional campaign, your platform
                  incurs hard, non-refundable pass-through liabilities within
                  the same billing cycle. Meta bills BSPs upfront at{" "}
                  <strong>&#8377;0.80+ per marketing conversation</strong>{" "}
                  (plus utility and authentication slabs), while Airtel, Jio,
                  and Vodafone Idea (VI) enforce strict 15-to-30-day DLT
                  scrubbing and interconnect settlement cycles.
                </p>
                <p>
                  When a CPaaS platform operates on an 8% to 12% net markup, a
                  single enterprise client defaulting on a{" "}
                  <strong>&#8377;40 Lakh festive WhatsApp blast</strong> does
                  not merely freeze &#8377;4.8 Lakh of profit—it forces the BSP
                  to fund &#8377;35.2 Lakh of Meta pass-through cost and
                  &#8377;7.2 Lakh of already-remitted 18% GST out of its own
                  working capital. Standard soft-collection reminders fail
                  because defaulting CFOs exploit two technical myths: claiming{" "}
                  <em>&ldquo;our API key leaked to a bot&rdquo;</em> or
                  demanding{" "}
                  <em>&ldquo;proof of handset delivery&rdquo;</em> before
                  releasing payment.
                </p>
              </div>
            </section>

            {/* Section 2: 5-Step Escalation Decision Tree */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  5-Step CPaaS Postpaid Default Escalation Pipeline
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-600 mb-6">
                Follow this sequential legal-technical workflow the moment a
                postpaid enterprise account crosses its credit cap or 15-day
                grace window, preventing daily pass-through bleed while locking
                in court-admissible electronic evidence.
              </p>

              {/* Desktop SVG Decision Tree */}
              <div className="hidden md:block overflow-x-auto pb-2">
                <svg
                  width="880"
                  height="250"
                  viewBox="0 0 880 250"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="5-Step CPaaS Postpaid Default Escalation Decision Tree"
                  className="w-full h-auto"
                >
                  <rect width="880" height="250" rx="16" fill="#0F172A" />
                  {/* Stage 1 */}
                  <rect x="20" y="34" width="150" height="175" rx="12" fill="#1E293B" stroke="#334155" />
                  <circle cx="46" cy="60" r="13" fill="#DC2626" />
                  <text x="46" y="64" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">1</text>
                  <text x="68" y="64" fill="#F8FAFC" fontSize="12" fontWeight="bold">Credit-Cap Freeze</text>
                  <text x="32" y="92" fill="#CBD5E1" fontSize="11">Throttle Marketing</text>
                  <text x="32" y="108" fill="#CBD5E1" fontSize="11">WABA Templates</text>
                  <text x="32" y="128" fill="#94A3B8" fontSize="10">48-hr breach alert</text>
                  <text x="32" y="144" fill="#94A3B8" fontSize="10">Stop Meta bleed</text>
                  <rect x="32" y="166" width="126" height="26" rx="6" fill="#7F1D1D" />
                  <text x="95" y="183" textAnchor="middle" fill="#FCA5A5" fontSize="10" fontWeight="bold">Day 1–3 Action</text>

                  <path d="M174 120 H190" stroke="#EF4444" strokeWidth="2.5" markerEnd="url(#arrow)" />

                  {/* Stage 2 */}
                  <rect x="192" y="34" width="150" height="175" rx="12" fill="#1E293B" stroke="#334155" />
                  <circle cx="218" cy="60" r="13" fill="#DC2626" />
                  <text x="218" y="64" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">2</text>
                  <text x="240" y="64" fill="#F8FAFC" fontSize="12" fontWeight="bold">BSA s.63 Hash</text>
                  <text x="204" y="92" fill="#CBD5E1" fontSize="11">Export Webhook,</text>
                  <text x="204" y="108" fill="#CBD5E1" fontSize="11">DLT DLR &amp; CDRs</text>
                  <text x="204" y="128" fill="#94A3B8" fontSize="10">IP + API-Key logs</text>
                  <text x="204" y="144" fill="#94A3B8" fontSize="10">SHA-256 certificate</text>
                  <rect x="204" y="166" width="126" height="26" rx="6" fill="#064E3B" />
                  <text x="267" y="183" textAnchor="middle" fill="#6EE7B7" fontSize="10" fontWeight="bold">BSA 2023 s.63(4)</text>

                  <path d="M346 120 H362" stroke="#EF4444" strokeWidth="2.5" />

                  {/* Stage 3 */}
                  <rect x="364" y="34" width="150" height="175" rx="12" fill="#1E293B" stroke="#334155" />
                  <circle cx="390" cy="60" r="13" fill="#DC2626" />
                  <text x="390" y="64" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">3</text>
                  <text x="412" y="64" fill="#F8FAFC" fontSize="12" fontWeight="bold">15-Day Notice</text>
                  <text x="376" y="92" fill="#CBD5E1" fontSize="11">Advocate Demand</text>
                  <text x="376" y="108" fill="#CBD5E1" fontSize="11">via RPAD + Email</text>
                  <text x="376" y="128" fill="#94A3B8" fontSize="10">API Custody Clause</text>
                  <text x="376" y="144" fill="#94A3B8" fontSize="10">18% GST + Interest</text>
                  <rect x="376" y="166" width="126" height="26" rx="6" fill="#78350F" />
                  <text x="439" y="183" textAnchor="middle" fill="#FCD34D" fontSize="10" fontWeight="bold">High Settlement</text>

                  <path d="M518 120 H534" stroke="#EF4444" strokeWidth="2.5" />

                  {/* Stage 4 */}
                  <rect x="536" y="34" width="155" height="175" rx="12" fill="#1E293B" stroke="#334155" />
                  <circle cx="562" cy="60" r="13" fill="#DC2626" />
                  <text x="562" y="64" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">4</text>
                  <text x="584" y="64" fill="#F8FAFC" fontSize="12" fontWeight="bold">Forum Selection</text>
                  <text x="548" y="92" fill="#CBD5E1" fontSize="11">Order XXXVII CPC</text>
                  <text x="548" y="108" fill="#CBD5E1" fontSize="11">or Comm. s.12A</text>
                  <text x="548" y="128" fill="#94A3B8" fontSize="10">MSEFC if Udyam</text>
                  <text x="548" y="144" fill="#94A3B8" fontSize="10">s.138 NI if PDC</text>
                  <rect x="548" y="166" width="131" height="26" rx="6" fill="#1E3A8A" />
                  <text x="613" y="183" textAnchor="middle" fill="#93C5FD" fontSize="10" fontWeight="bold">Not TDSAT (s.14)</text>

                  <path d="M695 120 H710" stroke="#EF4444" strokeWidth="2.5" />

                  {/* Stage 5 */}
                  <rect x="712" y="34" width="148" height="175" rx="12" fill="#1E293B" stroke="#334155" />
                  <circle cx="738" cy="60" r="13" fill="#DC2626" />
                  <text x="738" y="64" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">5</text>
                  <text x="760" y="64" fill="#F8FAFC" fontSize="12" fontWeight="bold">Decree / Batch</text>
                  <text x="724" y="92" fill="#CBD5E1" fontSize="11">Bank Attachment</text>
                  <text x="724" y="108" fill="#CBD5E1" fontSize="11">or CSV Mass Desk</text>
                  <text x="724" y="128" fill="#94A3B8" fontSize="10">Order XXI CPC</text>
                  <text x="724" y="144" fill="#94A3B8" fontSize="10">10–10,000+ SMEs</text>
                  <rect x="724" y="166" width="124" height="26" rx="6" fill="#064E3B" />
                  <text x="786" y="183" textAnchor="middle" fill="#6EE7B7" fontSize="10" fontWeight="bold">Full Principal + %</text>
                </svg>
              </div>

              {/* Mobile Stacked Pipeline Cards */}
              <div className="md:hidden space-y-3">
                {[
                  {
                    n: "1",
                    title: "Credit-Cap Freeze (Day 1–3)",
                    desc: "Throttle non-OTP marketing WABA templates & bulk SMPP binds to halt daily Meta/telco pass-through bleed.",
                  },
                  {
                    n: "2",
                    title: "BSA 2023 s.63 Hash Certification",
                    desc: "Export Meta webhook JSONs, DLT DLR codes, SIP CDRs, and source IP logs with SHA-256 hash certification.",
                  },
                  {
                    n: "3",
                    title: "15-Day Multi-Channel Legal Notice",
                    desc: "Serve fact-verified notice via RPAD, Email & WhatsApp invoking Strict API-Key Custody & 18% GST recovery.",
                  },
                  {
                    n: "4",
                    title: "Forum Routing (Commercial / Order XXXVII / MSEFC)",
                    desc: "File Order XXXVII Summary Suit, Commercial Courts s.12A Mediation (≥₹3L), or MSEFC (3x RBI interest)—never TDSAT.",
                  },
                  {
                    n: "5",
                    title: "Decree Execution or CSV Batch Desk",
                    desc: "Attach bank accounts under Order XXI CPC for large defaults, or run CSV bulk notices for 50+ SME accounts.",
                  },
                ].map((stage) => (
                  <div
                    key={stage.n}
                    className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800 flex gap-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {stage.n}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-white">{stage.title}</p>
                      <p className="text-xs text-slate-300 mt-1">{stage.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Statutory & Forum Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  CPaaS, WhatsApp BSP &amp; Cloud Telephony Statutory Matrix
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-600 mb-5">
                Choosing the wrong forum—such as filing an enterprise SaaS/BSP
                invoice suit before TDSAT—triggers immediate jurisdictional
                dismissal. Use this matrix to match each CPaaS revenue stream to
                its binding Indian statute and recovery forum.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">CPaaS Billing Track</th>
                      <th className="p-3.5 font-bold">Common Debtor Excuse</th>
                      <th className="p-3.5 font-bold">Controlling Statute</th>
                      <th className="p-3.5 font-bold">Correct Forum &amp; Remedy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">
                        Meta WhatsApp BSP Postpaid Burst
                      </td>
                      <td className="p-3.5 text-slate-600">
                        &ldquo;Campaign ROI was poor / templates failed&rdquo;
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Contract Act s.73 + BSA 2023 s.63 WABA Webhook Logs
                      </td>
                      <td className="p-3.5 font-medium text-emerald-700">
                        Order XXXVII CPC Summary Suit / Comm. Court s.12A
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">
                        OTP / A2P SMS API-Key Spike
                      </td>
                      <td className="p-3.5 text-slate-600">
                        &ldquo;Our GitHub leaked the API key; bots sent SMS&rdquo;
                      </td>
                      <td className="p-3.5 text-slate-700">
                        IT Act 2000 s.11 (Attribution) + MSA Strict Custody Clause
                      </td>
                      <td className="p-3.5 font-medium text-emerald-700">
                        Commercial Suit + Indemnity Enforcement
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-slate-900">
                        DLT Scrubbing &amp; Telco Interconnect
                      </td>
                      <td className="p-3.5 text-slate-600">
                        &ldquo;Handset delivery was below 85%; won&apos;t pay&rdquo;
                      </td>
                      <td className="p-3.5 text-slate-700">
                        TRAI TCCCPR 2018 + SMPP DLR Submission Records
                      </td>
                      <td className="p-3.5 font-medium text-emerald-700">
                        MSME MSEFC (if Udyam) / Civil Recovery Suit
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3.5 font-semibold text-slate-900">
                        Cloud IVR, SIP Trunk &amp; VMN Overruns
                      </td>
                      <td className="p-3.5 text-slate-600">
                        &ldquo;Dialer exceeded budget; disputing pulse CDRs&rdquo;
                      </td>
                      <td className="p-3.5 text-slate-700">
                        TRAI Act s.14 (Non-Licensee Exclusion) + NI Act s.138 (PDCs)
                      </td>
                      <td className="p-3.5 font-medium text-emerald-700">
                        Commercial / Civil Court + s.138 NI Act Parallel Track
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
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  4 Enterprise CPaaS Failure Modes &amp; Legal Playbooks
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-600 mb-6">
                Select a commercial default scenario below to inspect the exact
                statutory counter-move, evidence pack, and three-step collection
                sequence.
              </p>

              <CpaasScenarioTabs />
            </section>

            {/* Section 5: Worked Financial & Margin Erosion Ledger */}
            <section
              id="heading-worked-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Worked Financial Ledger: &#8377;40L Festive WhatsApp Blast Default
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-600 mb-5">
                Why delaying legal escalation for 90 days destroys a BSP&apos;s
                annual net profit—and how{" "}
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  MSMED 3x RBI Compound Interest
                </Link>{" "}
                shifts the financial leverage back to the creditor.
              </p>

              <div className="rounded-2xl overflow-hidden border border-slate-200">
                <div className="bg-slate-900 text-white px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-red-400 font-bold">
                      Illustrative BSP Unit Economics
                    </p>
                    <p className="text-base sm:text-lg font-bold">
                      45,00,000 Marketing Conversations @ &#8377;0.89/msg
                    </p>
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-red-950 text-red-300 border border-red-800 text-xs font-bold self-start sm:self-auto">
                    12% Gross Markup
                  </span>
                </div>

                <div className="p-5 sm:p-6 bg-slate-50 grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2.5 text-xs sm:text-sm">
                    <p className="font-bold text-slate-900 border-b border-slate-100 pb-2">
                      Upfront Cash Outflow by BSP
                    </p>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Billed Taxable Value</span>
                      <span className="font-bold text-slate-900">&#8377;40,05,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Meta Pass-Through Cost (88%)</span>
                      <span className="font-bold text-[#DC2626]">- &#8377;35,24,400</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">BSP Gross Margin (12%)</span>
                      <span className="font-bold text-slate-900">&#8377;4,80,600</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">18% GST Remitted in GSTR-1</span>
                      <span className="font-bold text-[#DC2626]">&#8377;7,20,900</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-slate-100">
                      <span className="font-bold text-slate-900">Net Cash at Risk on Default</span>
                      <span className="font-black text-[#DC2626]">&#8377;42,45,300</span>
                    </div>
                  </div>

                  <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200 space-y-2.5 text-xs sm:text-sm">
                    <p className="font-bold text-emerald-900 border-b border-emerald-200/70 pb-2">
                      Recoverable Statutory Claim (180-Day Delay)
                    </p>
                    <div className="flex justify-between">
                      <span className="text-emerald-800">Invoice Principal + 18% GST</span>
                      <span className="font-bold text-emerald-950">&#8377;47,25,900</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-emerald-800">
                        MSMED s.16 Interest (~19.5% p.a. / 3x RBI)
                      </span>
                      <span className="font-bold text-emerald-950">+ &#8377;4,54,400</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-emerald-800">Legal &amp; BSA s.63 Certification</span>
                      <span className="font-bold text-emerald-950">Claimed as Costs</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-emerald-200/70">
                      <span className="font-bold text-emerald-900">Total Demand Notice Value</span>
                      <span className="font-black text-emerald-700">&#8377;51,80,300+</span>
                    </div>
                    <p className="text-[11px] text-emerald-800 pt-1">
                      Note: Corporate buyers also lose Income Tax Act s.43B(h)
                      deductions on overdue MSE supplier invoices beyond 45 days.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: BSA 2023 s.63 Evidence & API-Key Checklist */}
            <section
              id="heading-bsa-evidence"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  BSA 2023 s.63 Forensic Evidence &amp; API-Key Checklist
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-600 mb-5">
                Before serving a legal notice or filing an{" "}
                <Link
                  href="/law/order-37-summary-suit-money-recovery"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  Order XXXVII Summary Suit
                </Link>
                , your billing and DevOps teams must lock down these six
                non-repudiable records:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "1. Signed MSA / IO with Strict API-Key Custody",
                    desc: "Shows explicit customer acceptance of postpaid rate cards, Meta/DLT pass-through liability, and sole responsibility for REST API keys and SMPP binds.",
                  },
                  {
                    title: "2. Meta WABA / DLT Entity & Header Mapping",
                    desc: "Screenshots and API exports linking the client's verified Facebook Business Manager ID or TRAI DLT Principal Entity (PE) ID to your platform.",
                  },
                  {
                    title: "3. Immutable Webhook, DLR & CDR Logs",
                    desc: "CSV/JSON exports of Meta conversation IDs, SMPP submit_sm_resp/deliver_sm codes, and SIP pulse CDRs with millisecond UTC/IST timestamps.",
                  },
                  {
                    title: "4. BSA 2023 Section 63(4) Hash Certificate",
                    desc: "Statutory certificate signed by your authorized systems lead confirming server integrity, SHA-256 file hash, and zero tampering.",
                  },
                  {
                    title: "5. GST E-Invoice (IRN) & GSTR-1 Proof",
                    desc: "Proves the tax invoice was formally reported on the GST portal—and highlights whether the debtor already claimed Input Tax Credit (ITC)!",
                  },
                  {
                    title: "6. Automated Credit-Cap & Anomaly Alerts",
                    desc: "Timestamped emails/Slack/dashboard alerts sent during the traffic burst, defeating any 'we didn't know about the spike' defense.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200"
                  >
                    <p className="text-sm font-bold text-slate-900 mb-1">
                      {item.title}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Dual-Track B2B Conversion CTA */}
            <section
              id="heading-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Launch Single-Account Recovery or Bulk Postpaid CSV Desk
                </h2>
              </div>
              <CpaasRecoveryCTA />
            </section>

            {/* Section 8: Mandatory Internal Cross-Links */}
            <section
              id="heading-cross-links"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Related Telecom, SaaS &amp; Commercial Recovery Resources
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Telecom, Enterprise ISP, Data Center & MSP Hub",
                    href: "/industries/telecom-isp-datacenter-msp-recovery",
                    tag: "IND-18 Pillar Hub",
                    desc: "Master escalation directory for ISPs, Tier-3/4 colocation hosts, CPaaS platforms, and managed MSPs.",
                  },
                  {
                    title: "Enterprise ILL / MPLS / SD-WAN Lock-In Breach Recovery",
                    href: "/enterprise-leased-line-ill-mpls-sdwan-lock-in-breach-recovery-isp",
                    tag: "Sibling Spoke",
                    desc: "Recover waived installation OTCs, unamortized fiber CapEx, and unreturned MUX CPE.",
                  },
                  {
                    title: "Data Center Colocation Lien & DPDP Suspension Law",
                    href: "/data-center-colocation-bare-metal-hosting-default-suspension-lien-law",
                    tag: "Sibling Spoke",
                    desc: "Lawful 7-day data-export notices and physical rack lien without IT Act s.43 counterclaims.",
                  },
                  {
                    title: "IT, Software & SaaS MSA Payment Default Notice",
                    href: "/templates/it-software-saas-msa-payment-default-legal-notice",
                    tag: "P1 Notice Template",
                    desc: "Fact-verified SaaS/MSA payment default & API suspension notice with BSA s.63 clauses.",
                  },
                  {
                    title: "B2B Vendor & Commercial Invoice Recovery Desk",
                    href: "/services/vendor-and-invoice-recoveries",
                    tag: "B2B Service",
                    desc: "End-to-end commercial invoice collection from legal notice through Order XXXVII execution.",
                  },
                  {
                    title: "Bulk CSV Recovery (10 to 10,000+ Defaulters)",
                    href: "/bulk-recovery-cases-all-in-one-affordable-solutions",
                    tag: "Institutional Desk",
                    desc: "Batch-process SME bulk SMS, IVR, and SaaS postpaid defaults from a single spreadsheet.",
                  },
                ].map((card) => (
                  <Link
                    key={card.href}
                    href={card.href}
                    className="group p-4 rounded-xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#DC2626]/40 transition-all shadow-sm hover:shadow"
                  >
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#DC2626] mb-1">
                      {card.tag}
                    </span>
                    <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                      {card.title} &rarr;
                    </p>
                    <p className="text-xs text-slate-600 mt-1">{card.desc}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* Section 9: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Frequently Asked Questions: CPaaS &amp; BSP Debt Recovery
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-xl border border-slate-200 bg-slate-50 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="cursor-pointer list-none p-4 sm:p-5 font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-4">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] text-lg font-bold shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
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
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Primary Statutory Sources &amp; Regulatory Citations
                </h2>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((source) => (
                  <li key={source.url} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold mt-0.5">&bull;</span>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline decoration-slate-300 underline-offset-2 transition-colors"
                    >
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
