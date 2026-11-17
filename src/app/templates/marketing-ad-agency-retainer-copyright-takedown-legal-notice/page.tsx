import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import AgencyNoticeCTA from "./AgencyNoticeCTA";
import AgencyNoticeTOC from "./AgencyNoticeTOC";
import AgencyNoticeWorkspace from "./AgencyNoticeWorkspace";

export const revalidate = 86400;

const EXACT_H1 =
  "2-Weapon Agency Legal Notice Template: Unpaid Retainer / Media-Spend Demand + 7-Day Copyright License Revocation & Meta/YouTube Takedown Warning";

const EXACT_TITLE =
  "Marketing & Ad Agency Unpaid Invoice + IP Takedown Notice Format";

const EXACT_DESCRIPTION =
  "Why wait 2 years in court? This agency legal notice demands overdue retainers & ad-spend while legally revoking permission to run unpaid creatives on Meta, Google & Web.";

export const metadata: Metadata = {
  title: EXACT_TITLE,
  description: EXACT_DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}/templates/marketing-ad-agency-retainer-copyright-takedown-legal-notice`,
  },
  openGraph: {
    title: EXACT_TITLE,
    description: EXACT_DESCRIPTION,
    url: `${SITE_URL}/templates/marketing-ad-agency-retainer-copyright-takedown-legal-notice`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Marketing and Advertising Agency Legal Notice Format",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: EXACT_TITLE,
    description: EXACT_DESCRIPTION,
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
    title: "Copyright Act, 1957 — Section 19 (Mode of Assignment) & Section 30A (Application of Revocation Provisions)",
    url: "https://www.indiacode.nic.in/handle/123456789/1367",
  },
  {
    title: "Copyright Act, 1957 — Section 51 (When Copyright Infringed) & Section 63 (Offence of Infringement of Copyright)",
    url: "https://www.indiacode.nic.in/handle/123456789/1367",
  },
  {
    title: "Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 — Rule 3(1)(d) (36-Hour IP Takedown Mandate)",
    url: "https://www.meity.gov.in/content/information-technology-intermediary-guidelines-and-digital-media-ethics-code-rules-2021",
  },
  {
    title: "Micro, Small and Medium Enterprises Development Act, 2006 — Sections 15–18 (Mandatory 45-Day Payment & 3x RBI Bank Rate Interest)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Commercial Courts Act, 2015 — Section 12A (Pre-Institution Mediation & Settlement Dispensation for Urgent Interim Injunctions)",
    url: "https://www.indiacode.nic.in/handle/123456789/2146",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 — Section 63 (Admissibility of Electronic Records: Meta Ad Manager Reports, Google Invoices & Client WhatsApp Approvals)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const PRECEDENTS = [
  {
    title: "Commercial Injunction Bypasses Mandatory Section 12A Pre-Institution Mediation",
    parties: "Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd.",
    citation: "(2022) 10 SCC 1 (Supreme Court of India)",
    date: "17 August 2022",
    facts:
      "A commercial contractor initiated litigation without exhausting pre-institution mediation under Section 12A of the Commercial Courts Act, 2015. The debtor contended that commercial suits without urgent interim relief cannot bypass Section 12A mediation.",
    holding:
      "The Supreme Court declared Section 12A mandatory for all commercial suits that do not contemplate urgent interim relief. However, where an intellectual property infringement or ongoing unauthorized use requires immediate protection under Order XXXIX Rules 1 & 2 CPC, an urgent application dispenses with the mandatory mediation waiting period.",
    takeaway:
      "Pairing an unpaid agency invoice demand with Section 51 Copyright Infringement allows marketing agencies to approach Commercial Courts for ex-parte ad-interim injunctions immediately, bypassing the 3-month pre-institution mediation bottleneck.",
  },
  {
    title: "Retention of Copyright Until Full and Final Payment of Consideration",
    parties: "N.T. Raghunathan & Anr. v. All India Reporter Ltd.",
    citation: "AIR 1971 Bom 48 (Bombay High Court)",
    date: "12 March 1971",
    facts:
      "Authors and creative contributors prepared literary and compiled works under a commissioned engagement. The commissioning entity claimed ownership of the copyright despite default in payment of full contractual remuneration.",
    holding:
      "The Bombay High Court held that where work is commissioned, the transfer or assignment of copyright is contingent upon payment of agreed consideration. Non-payment of consideration amounts to total failure of contract, resulting in the ownership of copyright remaining vested with the creator/agency.",
    takeaway:
      "Until a brand clears the final marketing invoice, ownership of creative scripts, video edits, and custom landing page code remains with the agency, making unauthorized ad campaigns actionable as copyright infringement.",
  },
  {
    title: "Post-Campaign Quality Disputes & Estoppel After Commercial Deployment",
    parties: "M/s Simplex Concrete Piles (India) Ltd. v. Union of India",
    citation: "2010 (115) DRJ 616 (Delhi High Court)",
    date: "23 February 2010",
    facts:
      "A principal client utilized services and derived commercial advantage, but subsequent to service delivery claimed performance deficiencies and withheld final contractual milestone payments.",
    holding:
      "The High Court held that a party who accepts, deploys, and monetizes commercial deliverables without prompt contemporaneous rejection cannot subsequently concoct quality excuses as a defense against liquidated dues. Commercial exploitation constitutes acceptance under Section 42 of the Sale of Goods Act.",
    takeaway:
      "Brands that broadcast agency creatives on Meta or Google Ads cannot later refuse retainer payments on fabricated 'low ROAS' or 'poor lead quality' grounds.",
  },
];

const FAQS = [
  {
    question: "Can our agency legally take down client ads if they have not paid our retainers?",
    answer:
      "Yes. Under Section 19(1) of the Indian Copyright Act, 1957, any assignment or commercial license to exploit creative works is legally contingent upon payment of the agreed consideration. When a client defaults on your retainer or ad-spend invoice, the consideration fails. Your agency has the statutory right to issue a formal Notice of Copyright License Revocation. Upon expiration of the notice period (typically 7 days), any continued broadcast of your creatives constitutes copyright infringement under Section 51. You can then submit statutory takedown notices under Rule 3(1)(d) of the Information Technology Rules, 2021 directly to Meta, Google, and Shopify to disable the campaigns within 36 hours.",
  },
  {
    question: "What if the client claims 'Low ROAS' or 'Bad Lead Quality' to withhold payment?",
    answer:
      "Under Indian commercial law and Section 42 of the Sale of Goods Act, 1930, deploying, publishing, and running digital creatives to generate leads or sales amounts to acceptance of the work. Unless the client specifically rejected the creatives prior to publishing, commercial deployment estops the client from withholding agreed retainer fees or third-party ad spend reimbursements. Digital performance fluctuates with market algorithms, inventory costs, and landing page conversion rates; unless guaranteed as a strict contractually defined milestone with liquidated damages, ROAS variations do not constitute a legal defense for non-payment.",
  },
  {
    question: "How does the dual-weapon strategy bypass Section 12A mandatory commercial mediation?",
    answer:
      "Under the Commercial Courts Act, 2015, Section 12A mandates that creditors undergo a 3 to 5-month Pre-Institution Mediation process before filing a commercial suit in court. However, as affirmed by the Supreme Court in 'Patil Automation Pvt. Ltd. v. Rakheja Engineers' (2022), suits contemplating 'urgent interim relief' are explicitly exempt from Section 12A. By coupling your monetary recovery demand with a claim for ex-parte ad-interim injunction under Order XXXIX Rules 1 & 2 CPC against ongoing copyright infringement, your agency can approach the Commercial Court immediately without wasting months in pre-institution mediation.",
  },
  {
    question: "Can we claim both ad-spend reimbursement and agency creative retainers in the same notice?",
    answer:
      "Yes. The legal notice structure itemizes both heads of claim: (1) Out-of-pocket ad spend disbursements advanced to ad networks (Meta Ads, Google Ads) on the brand's behalf, which constitutes money paid for the client's benefit under Section 70 of the Indian Contract Act, 1872; and (2) Professional creative and media management retainers. In both cases, if your agency holds a valid MSME Udyam registration, both heads qualify for statutory compound interest at 3 times the RBI Bank Rate under Section 16 of the MSMED Act, 2006.",
  },
  {
    question: "What evidence must an agency assemble before serving this legal notice?",
    answer:
      "Your agency must assemble: (1) Master Services Agreement (MSA), Statement of Work (SOW), or Release Orders (RO); (2) Contemporaneous email / WhatsApp approvals of ad copy, scripts, and video edits; (3) Meta Business Manager or Google Ads spend logs showing client campaign attribution; (4) Unpaid GST tax invoices with proof of delivery via email; (5) Written payment follow-up communications showing no contemporaneous objection; and (6) An Electronic Evidence Certificate under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 validating the ad platform screenshots and WhatsApp exports.",
  },
  {
    question: "How should this legal notice be dispatched to ensure absolute legal enforceability?",
    answer:
      "The legal notice should be dispatched simultaneously via two mandatory channels: (1) Physically via Registered Post with Acknowledgement Due (RPAD) / Speed Post through an enrolled advocate's chamber to the registered office of the corporate entity and personal addresses of the active directors; and (2) Electronically via formal email to the CEO, CMO, and Accounts payable team with read-receipt audit logs. Under Section 27 of the General Clauses Act, 1897 and Section 63 of the BSA 2023, postal tracking delivery certificates and email transmission logs establish irrefutable statutory service.",
  },
];

export default function AgencyCopyrightNoticePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${SITE_URL}/templates/marketing-ad-agency-retainer-copyright-takedown-legal-notice#article`,
        isPartOf: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/templates/marketing-ad-agency-retainer-copyright-takedown-legal-notice`,
          url: `${SITE_URL}/templates/marketing-ad-agency-retainer-copyright-takedown-legal-notice`,
          name: EXACT_TITLE,
          description: EXACT_DESCRIPTION,
        },
        headline: EXACT_H1,
        description: EXACT_DESCRIPTION,
        inLanguage: "en-IN",
        mainEntityOfPage: `${SITE_URL}/templates/marketing-ad-agency-retainer-copyright-takedown-legal-notice`,
        datePublished: "2026-11-17T09:00:00+05:30",
        dateModified: "2026-11-17T09:00:00+05:30",
        author: {
          "@type": "Organization",
          name: "LegalRecovery Editorial Team",
          url: SITE_URL,
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
      },
      {
        "@type": "CreativeWork",
        "@id": `${SITE_URL}/templates/marketing-ad-agency-retainer-copyright-takedown-legal-notice#template`,
        name: "Marketing & Advertising Agency Unpaid Retainer + Copyright Revocation Legal Notice Template",
        headline: EXACT_H1,
        description: EXACT_DESCRIPTION,
        genre: "Legal Demand Notice & IP Revocation Format",
        inLanguage: "en-IN",
        creator: {
          "@type": "Organization",
          name: "LegalRecovery.in",
          url: SITE_URL,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/templates/marketing-ad-agency-retainer-copyright-takedown-legal-notice#faq`,
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/templates/marketing-ad-agency-retainer-copyright-takedown-legal-notice#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Templates",
            item: `${SITE_URL}/templates`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Agency Retainer & IP Takedown Notice",
            item: `${SITE_URL}/templates/marketing-ad-agency-retainer-copyright-takedown-legal-notice`,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>Template Workspace</span>
            <span className="text-slate-400">•</span>
            <span>Archetype P1</span>
            <span className="text-slate-400">•</span>
            <span>IND-12 Creative & Digital Commerce</span>
          </div>

          {/* Exact H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Statutory Answer for Digital Agencies & Studios
            </span>
            Under{" "}
            <Link
              href="/industries/advertising-marketing-media-event-recovery"
              className="text-red-400 hover:text-red-300 font-bold underline decoration-red-400/50 underline-offset-2"
            >
              Indian Advertising & Media Recovery Law
            </Link>
            , copyright in commissioned videos, graphics, and landing page code transfers only upon full payment. Non-payment under Section 19 and 30A of the Copyright Act, 1957 invalidates all usage licenses. This dual-weapon legal demand pairs Section 16 MSMED 3x compound interest with a strict 7-day copyright revocation notice, enabling instant Rule 3(1)(d) IT Rules takedowns across Meta Ads, Google Ads, and YouTube.
          </div>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <span className="text-[10px] sm:text-xs text-slate-400 block font-semibold">Takedown Mandate</span>
              <span className="text-lg sm:text-2xl font-black text-emerald-400">36 Hours</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Rule 3(1)(d) IT Rules</span>
            </div>
            <div>
              <span className="text-[10px] sm:text-xs text-slate-400 block font-semibold">MSME Interest</span>
              <span className="text-lg sm:text-2xl font-black text-amber-400">3x RBI Rate</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Compound Monthly Rest</span>
            </div>
            <div>
              <span className="text-[10px] sm:text-xs text-slate-400 block font-semibold">Court Injunction</span>
              <span className="text-lg sm:text-2xl font-black text-red-400">Ex-Parte Relief</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Bypasses s.12A Mediation</span>
            </div>
            <div>
              <span className="text-[10px] sm:text-xs text-slate-400 block font-semibold">Statutory Proof</span>
              <span className="text-lg sm:text-2xl font-black text-slate-100">BSA s.63 Cert.</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Ad Manager & Chat Logs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { label: "Templates", href: "/templates" },
              {
                label: "Marketing Agency IP Takedown Notice",
                href: "/templates/marketing-ad-agency-retainer-copyright-takedown-legal-notice",
              },
            ]}
          />
        </div>

        {/* 2-Column Split */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <AgencyNoticeTOC />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* 1. Interactive Workspace Island */}
            <AgencyNoticeWorkspace />

            {/* 2. The Dual-Weapon Recovery Strategy */}
            <section id="dual-weapon-strategy" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs uppercase tracking-wider font-bold text-[#DC2626] block mb-1">
                  Section 2 • Tactical Recovery Architecture
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  The Dual-Weapon Agency Notice: Why Standard Money Demand Notices Fail
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a brand CMO, D2C founder, or corporate enterprise defaults on digital marketing retainers or media spend reimbursements, generic corporate legal notices often end up ignored. Unscrupulous debtor companies calculate that Indian civil suits take two to three years, allowing them to continue utilizing the agency’s video creatives, branding assets, and landing page funnels to drive revenue without clearing their bills.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To counter this bad-faith dynamic, the <strong>Dual-Weapon Agency Recovery Notice</strong> transforms a slow civil debt dispute into an existential operational emergency for the debtor brand:
              </p>

              {/* Two Weapon Comparison Box */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-slate-900 text-white space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                      1
                    </span>
                    <h3 className="font-bold text-sm text-red-400">Weapon One: Monetary & MSMED Demand</h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Formal statutory liquidation notice demanding full payment of unpaid monthly retainers and disbursed ad spend outstandings under Section 70 of the Indian Contract Act, 1872. If your agency possesses MSME registration, the notice levies statutory penal compound interest under Sections 15–16 of the MSMED Act at 3x the RBI Bank Rate, alerting the brand’s auditors of severe tax disallowance under Section 43B(h) of the Income Tax Act.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-red-950/40 border border-red-800/50 text-slate-900 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
                      2
                    </span>
                    <h3 className="font-bold text-sm text-red-950">Weapon Two: Copyright License Revocation</h3>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Invocation of Sections 19(1) and 30A of the Copyright Act, 1957. The notice legally establishes that all licenses to use ad films, reels, graphic copy, and landing pages were strictly contingent upon timely payment. Upon default, the license terminates. The notice issues a strict 7-day countdown: if the balance is not cleared, statutory takedowns will be served on Meta, Google, and hosting providers under IT Rules 2021, halting all customer acquisition campaigns overnight.
                  </p>
                </div>
              </div>

              {/* Sibling spoke cross-links banner */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
                <span className="font-bold text-slate-900 block text-[11px] uppercase tracking-wider">
                  Specialized Sibling Recovery Guides for Creative Agencies:
                </span>
                <div className="flex flex-wrap gap-2 pt-1">
                  <Link
                    href="/digital-marketing-seo-agency-retainer-default-low-roas-excuse-recovery"
                    className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-300 hover:border-[#DC2626] hover:text-[#DC2626] font-medium transition-colors"
                  >
                    Busting the 'Low ROAS' Excuse →
                  </Link>
                  <Link
                    href="/media-buying-agency-google-meta-tv-ooh-ad-spend-reimbursement-recovery"
                    className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-300 hover:border-[#DC2626] hover:text-[#DC2626] font-medium transition-colors"
                  >
                    Ad-Spend Reimbursement Recovery SOP →
                  </Link>
                  <Link
                    href="/event-management-exhibition-stall-fabricator-post-event-balance-recovery"
                    className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-300 hover:border-[#DC2626] hover:text-[#DC2626] font-medium transition-colors"
                  >
                    Event & Fabrication Dues Recovery →
                  </Link>
                </div>
              </div>
            </section>

            {/* 3. Statutory Framework & Copyright Hooks */}
            <section id="statutory-framework" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs uppercase tracking-wider font-bold text-[#DC2626] block mb-1">
                  Section 3 • Bare Act & Statutory Authority
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Statutory Framework: How Indian Law Empowers Agency IP Enforcement
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
                  <thead className="bg-slate-900 text-white uppercase text-[10px] tracking-wider">
                    <tr>
                      <th className="p-3">Statutory Act & Section</th>
                      <th className="p-3">Statutory Rule & Mandate</th>
                      <th className="p-3">Agency Enforcement Leverage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-slate-900 whitespace-nowrap">
                        Copyright Act, 1957<br />
                        <span className="text-[10px] text-slate-500 font-normal">Section 19(1) & 30A</span>
                      </td>
                      <td className="p-3 leading-relaxed">
                        Assignment or license of copyright in any work is invalid unless supported by valuable consideration. Where consideration fails, the license lapses and the creator retains complete proprietary rights.
                      </td>
                      <td className="p-3 font-semibold text-red-700">
                        Invalidates the brand’s permission to display or broadcast unpaid videos, banners, logos, and website copy.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-slate-900 whitespace-nowrap">
                        Copyright Act, 1957<br />
                        <span className="text-[10px] text-slate-500 font-normal">Section 51 & 63</span>
                      </td>
                      <td className="p-3 leading-relaxed">
                        Commercial exploitation of a work without a valid license constitutes actionable civil infringement and a cognizable criminal offence punishable by 6 months to 3 years imprisonment and fines.
                      </td>
                      <td className="p-3 font-semibold text-red-700">
                        Exposes company directors and marketing heads to personal criminal liability for running unauthorized commercial ads.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-slate-900 whitespace-nowrap">
                        IT Intermediary Rules, 2021<br />
                        <span className="text-[10px] text-slate-500 font-normal">Rule 3(1)(d)</span>
                      </td>
                      <td className="p-3 leading-relaxed">
                        Intermediaries (Meta, Google, YouTube, hosting providers) must act within 36 hours of receiving formal notice regarding unauthorized copyright-infringing content by disabling public access.
                      </td>
                      <td className="p-3 font-semibold text-emerald-700">
                        Enables direct platform takedowns of active Meta Ads and Google PPC campaigns without waiting for months of court litigation.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-slate-900 whitespace-nowrap">
                        Commercial Courts Act, 2015<br />
                        <span className="text-[10px] text-slate-500 font-normal">Section 12A & Order XXXIX CPC</span>
                      </td>
                      <td className="p-3 leading-relaxed">
                        Commercial disputes requiring urgent interim relief are exempt from mandatory pre-institution mediation, granting instant access to the Commercial Division of High Courts and District Courts.
                      </td>
                      <td className="p-3 font-semibold text-slate-900">
                        Eliminates the 3 to 5-month mediation delay by praying for urgent ex-parte ad-interim injunction against campaign broadcast.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-bold text-slate-900 whitespace-nowrap">
                        MSMED Act, 2006<br />
                        <span className="text-[10px] text-slate-500 font-normal">Sections 15, 16 & 17</span>
                      </td>
                      <td className="p-3 leading-relaxed">
                        Statutory 45-day payment cap for registered MSMEs. Default incurs mandatory compound interest with monthly rests at 3 times the RBI Bank Rate. Overdue amounts face Section 43B(h) IT disallowance.
                      </td>
                      <td className="p-3 font-semibold text-amber-700">
                        Provides massive financial leverage by compelling brand CFOs to settle to avoid income tax disallowances and mounting compound interest.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Primary Source Badges */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  Verified IndiaCode Statutory References:
                </span>
                <div className="flex flex-wrap gap-2 text-xs">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <a
                      key={idx}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="px-2.5 py-1 rounded bg-white border border-slate-200 text-slate-700 hover:text-[#DC2626] hover:border-red-300 transition-all font-medium"
                    >
                      {source.title.split("—")[0].trim()} ↗
                    </a>
                  ))}
                </div>
              </div>
            </section>

            {/* 4. Judicial Precedents & High Court Rulings */}
            <section id="precedents-case-law" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs uppercase tracking-wider font-bold text-[#DC2626] block mb-1">
                  Section 4 • Supreme Court & High Court Case Law
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Judicial Precedents Protecting Advertising & Creative Agencies
                </h2>
              </div>

              <div className="space-y-4">
                {PRECEDENTS.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-slate-50 border border-slate-200 border-l-4 border-l-[#DC2626] space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="font-bold text-sm text-slate-900">{item.title}</h3>
                      <span className="text-[11px] font-mono font-bold text-[#DC2626]">{item.citation}</span>
                    </div>
                    <div className="text-xs text-slate-600 font-medium">
                      <strong>Parties:</strong> {item.parties} • <strong>Date:</strong> {item.date}
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      <strong>Facts & Ruling:</strong> {item.facts} {item.holding}
                    </p>
                    <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-xs text-slate-800">
                      <strong className="text-red-700 font-bold">Agency Strategic Takeaway: </strong>
                      {item.takeaway}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. Evidence Checklist & BSA s.63 Certificate */}
            <section id="evidence-checklist" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs uppercase tracking-wider font-bold text-[#DC2626] block mb-1">
                  Section 5 • Electronic Evidence Compliance
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Mandatory Evidence Checklist & BSA Section 63 Electronic Certificate
                </h2>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                Under the <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63)</strong>, electronic evidence such as Meta Ads Manager dashboard reports, Google Ads billing receipts, WhatsApp approvals, and email chains are fully admissible in court provided they are accompanied by a formal Electronic Record Certificate.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Mandatory Notice Annexures
                  </h3>
                  <ul className="text-xs text-slate-700 space-y-1.5 list-disc pl-4">
                    <li>
                      <strong>Annexure A:</strong> Executed MSA, Retainer Agreement, or Release Order (RO) with agreed commercial terms.
                    </li>
                    <li>
                      <strong>Annexure B:</strong> Unpaid Tax Invoices with GST breakdown and corresponding GSTR-1 filing records.
                    </li>
                    <li>
                      <strong>Annexure C:</strong> Ad-Spend Payment Receipts / Credit Card Statements proving agency disbursement on Meta/Google.
                    </li>
                    <li>
                      <strong>Annexure D:</strong> High-resolution screenshots of live ad creatives currently being broadcasted by the brand.
                    </li>
                    <li>
                      <strong>Annexure E:</strong> Contemporaneous WhatsApp / Email approvals of creative concepts and campaign budgets.
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    BSA Section 63 Certificate Standard
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The electronic evidence certificate must be signed by the agency’s Chief Technology Officer, Head of Media, or authorized system administrator certifying:
                  </p>
                  <ul className="text-xs text-slate-700 space-y-1 list-disc pl-4">
                    <li>The computer system was operating properly during the campaign period.</li>
                    <li>The exported ad logs and chat exports were generated during ordinary agency business.</li>
                    <li>No unauthorized alteration or manipulation of electronic audit logs occurred.</li>
                    <li>Original SHA-256 hash or digital timestamp preserved for court inspection.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 6. Service Protocol (Email + Post + WhatsApp) */}
            <section id="service-protocol" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs uppercase tracking-wider font-bold text-[#DC2626] block mb-1">
                  Section 6 • Dispatch & Service Protocol
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Statutory Service Protocol: Speed Post RPAD + Official Electronic Mail
                </h2>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                To guarantee that the defaulting client cannot plead ignorance or evade receipt in court, service must comply strictly with <strong>Section 27 of the General Clauses Act, 1897</strong> and contemporary High Court electronic service guidelines:
              </p>

              <div className="space-y-3 text-xs">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <strong className="text-slate-900 text-sm block">1. Physical Speed Post with Acknowledgement Due (RPAD)</strong>
                    <span className="text-slate-600">Dispatched simultaneously to the company's registered MCA office and the residential addresses of active directors.</span>
                  </div>
                  <span className="text-emerald-700 font-bold shrink-0 bg-emerald-100 px-2.5 py-1 rounded">Mandatory for Court Record</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <strong className="text-slate-900 text-sm block">2. Formal Advocate Electronic Mail (PDF Attachment)</strong>
                    <span className="text-slate-600">Sent directly to the official corporate domain emails of the CEO, CMO, and Accounts team with server delivery receipts.</span>
                  </div>
                  <span className="text-emerald-700 font-bold shrink-0 bg-emerald-100 px-2.5 py-1 rounded">Instant Timestamp Proof</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <strong className="text-slate-900 text-sm block">3. WhatsApp Transmission with Blue-Tick Audit Trail</strong>
                    <span className="text-slate-600">Delivered to the verified contact numbers of authorized signatories as recognized in SBI v. K.K. Polycolor (Bombay HC).</span>
                  </div>
                  <span className="text-emerald-700 font-bold shrink-0 bg-emerald-100 px-2.5 py-1 rounded">Immediate Operational Notice</span>
                </div>
              </div>
            </section>

            {/* 7. FAQs */}
            <section id="faqs" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs uppercase tracking-wider font-bold text-[#DC2626] block mb-1">
                  Section 7 • Frequently Asked Questions
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Agency Retainer & Copyright Takedown FAQ
                </h2>
              </div>

              <div className="space-y-4">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-slate-50 rounded-xl border border-slate-200 p-4 sm:p-5 transition-all [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex items-center justify-between cursor-pointer font-bold text-sm sm:text-base text-slate-900">
                      <span>{faq.question}</span>
                      <span className="ml-4 shrink-0 text-slate-400 group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200/60 pt-3">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Dual CTA Module */}
            <AgencyNoticeCTA />
          </div>
        </div>
      </main>

      {/* Footer Cross-Links */}
      <RelatedRecoveryGuides />
    </div>
  );
}
