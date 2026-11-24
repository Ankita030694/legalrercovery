import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import PRNoticeCTA from "./PRNoticeCTA";
import PRTableOfContents, { PR_TOC_SECTIONS } from "./PRTableOfContents";
import PRScenarioTabs from "./PRScenarioTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "PR & Communications Agency Unpaid Retainer & Crisis Fee Recovery",
  description:
    "Ethical PR agencies cannot guarantee editorial placement in ET/Mint. Enforce earned media disclaimers, MSMED 45-day statutory payment, & notice fees.",
  alternates: {
    canonical: `${SITE_URL}/pr-public-relations-agency-retainer-crisis-mandate-fee-recovery`,
  },
  openGraph: {
    title: "PR & Communications Agency Unpaid Retainer & Crisis Fee Recovery",
    description:
      "Ethical PR agencies cannot guarantee editorial placement in ET/Mint. Enforce earned media disclaimers, MSMED 45-day statutory payment, & notice fees.",
    url: `${SITE_URL}/pr-public-relations-agency-retainer-crisis-mandate-fee-recovery`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "PR & Communications Agency Unpaid Retainer & Crisis Mandate Fee Recovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PR & Communications Agency Unpaid Retainer & Crisis Fee Recovery",
    description:
      "Ethical PR agencies cannot guarantee editorial placement in ET/Mint. Enforce earned media disclaimers, MSMED 45-day statutory payment, & notice fees.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: [`${SITE_URL}/blog_money_recovery.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const PRIMARY_LEGAL_SOURCES = [
  {
    title: "Press Council of India — Norms of Journalistic Conduct (Norm 23: Bar on Paid News & Norm 32: Independence of Editorial Columns)",
    url: "https://www.presscouncil.nic.in/Oldwebsite/NORMS-2019.pdf",
  },
  {
    title: "The Indian Contract Act, 1872 (Section 70 — Non-Gratuitous Acts & Section 73 — Breach of Contract & Notice Period Retainer Dues)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Micro, Small and Medium Enterprises Development Act, 2006 (MSMED Act Sections 15, 16, 17 & 18 — Statutory 45-Day Payment & 3× Bank Rate Interest)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Commercial Courts Act, 2015 (Act 4 of 2016 — Section 2(1)(c)(xviii) Service & Retainership Agreements & Section 12A Pre-Institution Mediation)",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records, Press Release Approvals, Media Monitoring Dossiers & WhatsApp Transcripts)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "The Copyright Act, 1957 (Sections 14, 17 & 19 — Proprietary Rights in Authored Thought-Leadership Op-Eds & Press Dossiers)",
    url: "https://www.indiacode.nic.in/handle/123456789/1367",
  },
];

const PRECEDENT_AUTHORITIES = [
  {
    title: "Best-Efforts Advisory vs Guaranteed Outcome in Commercial Service Contracts",
    parties: "State of West Bengal v. B.K. Mondal & Sons (Applied to Professional Advisory Services)",
    citation: "AIR 1962 SC 779 / [1962] Supp 1 SCR 876, Constitution Bench of Supreme Court",
    date: "Constitution Bench Landmark on Section 70 Indian Contract Act",
    facts:
      "The Supreme Court affirmed that when an enterprise renders professional services or incurs disbursements for another party lawfully, without intent to act gratuitously, and the recipient enjoys the commercial benefit (e.g. earned brand visibility, press coverage, or crisis reputation mitigation), the recipient cannot evade payment on grounds of unpromised subjective outcomes.",
    ratio:
      "A PR agency's professional outreach, media pitching, and communications advisory enjoyed by the corporate client constitute non-gratuitous acts creating an unassailable statutory liability under Section 70 of the Indian Contract Act.",
  },
  {
    title: "Commercial Division Strict Enforcement of Fixed Notice-Period Retainer Fees",
    parties: "ONGC Ltd. v. Saw Pipes Ltd. & Classical Contract Damages Precedents",
    citation: "(2003) 5 SCC 705, Supreme Court of India",
    date: "Supreme Court Landmark on Contractual Liquidated Damages and Notice Clauses",
    facts:
      "Where commercial retainership contracts stipulate a mandatory 30-day or 60-day written termination notice period with full monthly retainer fee obligations, unilateral termination or walk-outs without honoring the notice period entitle the aggrieved service agency to recover the entire notice fee as genuine pre-estimated damages.",
    ratio:
      "A client company cannot abruptly terminate an active PR retainer without paying the full contractually stipulated 60-day notice period fees, regardless of whether they choose to utilize media services during the notice period.",
  },
  {
    title: "MSME Statutory Override Over Unilateral Customer Deductions and Service Disallowances",
    parties: "Silpi Industries etc. v. Kerala State Road Transport Corporation & Another",
    citation: "2021 SCC OnLine SC 439, Supreme Court of India",
    date: "Supreme Court of India Benchmark on MSMED Act Priority",
    facts:
      "The Supreme Court settled that the statutory protections of the MSMED Act, 2006 override inconsistent contract terms. When an MSME service provider delivers professional services and submits invoices, the buyer must raise any dispute within 15 days of invoice receipt. Silence or post-facto frivolous quality objections after extracting deliverables cannot defeat statutory recovery.",
    ratio:
      "Clients who raise post-facto objections about newspaper placement angles after the statutory 15-day deemed acceptance window cannot resist summary recovery under Sections 15–18 of the MSMED Act.",
  },
];

const FAQS = [
  {
    q: "Can a client withhold our PR retainer because a major newspaper didn't publish their story or gave them a small quote?",
    a: "No. Under the Press Council of India Norms of Journalistic Conduct, editorial independence is protected by law. Legitimate PR firms provide advisory and media-relations services ('earned media'), which can never guarantee editorial selection, headline angles, or page placement. Unless your contract contains an illegal 'guaranteed coverage' clause (which borders on paid advertorials), your fee is owed for professional services, media strategy, and outreach efforts rendered.",
  },
  {
    q: "A startup founder ghosted us immediately after their Series-A funding press release was published in Economic Times. How do we recover?",
    a: "Collate the counter-signed Retainer Agreement, the founder's written approval (email/WhatsApp) of the press release, the published press clipping dossier, and your GST invoices. Issue an immediate fact-verified legal notice invoking Section 73 of the Indian Contract Act and Section 15 of the MSMED Act. If registered on Udyam, initiate proceedings before the MSEFC for 3× RBI compound interest, or file a summary suit under Order XXXVII CPC.",
  },
  {
    q: "Can we legally bill and recover the mandatory 60-day termination notice fee if the client walks out abruptly?",
    a: "Yes. In Indian commercial law, a clear notice period clause in a bilateral B2B contract is legally binding. The client's unilateral decision to cease communication does not discharge their financial liability for the notice period. The law recognizes that agencies allocate dedicated account executives, media liaisons, and bandwidth to the client, which cannot be reassigned instantaneously.",
  },
  {
    q: "We handled a 24/7 crisis PR mandate over a weekend, but the client claims the emergency fee was excessive. What is our legal recourse?",
    a: "Under Section 70 of the Indian Contract Act (obligation of person enjoying benefit of non-gratuitous act), where services are rendered at urgent executive request and accepted by the client, the client is statutorily bound to pay reasonable compensation. Keep complete electronic records (WhatsApp audio transcripts, Slack logs, holding statement drafts, and media tracking records) certified under BSA 2023 Section 63.",
  },
  {
    q: "Does the PR agency own the copyright to authored thought-leadership articles and whitepapers if the client has not paid?",
    a: "Yes. Under Section 17 read with Section 19 of the Copyright Act, 1957, intellectual property and moral rights in authored ghostwritten articles, op-eds, and whitepapers remain with the author or agency until full consideration is discharged. If the client publishes an unpaid article on their corporate blog or submits it to publications, they commit actionable copyright infringement under Section 51.",
  },
  {
    q: "How does the MSMED Act protect PR agencies and corporate communications firms?",
    a: "PR agencies holding an Udyam Registration as Micro or Small enterprises are protected under Sections 15–18 of the MSMED Act, 2006. Clients must clear invoices within 45 days. Delayed payments attract mandatory monthly compound interest at three times the RBI bank rate, and buyers cannot claim tax deductions on unpaid amounts under Section 43B(h) of the Income Tax Act.",
  },
  {
    q: "What electronic evidence is required to prove a PR retainer claim under the new Bharatiya Sakshya Adhiniyam, 2023 (BSA)?",
    a: "Under Section 63 of the BSA 2023 (replacing Section 65B of the Indian Evidence Act), you must produce hash-verified email approvals of press releases, WhatsApp chats with founders, timestamped pitch logs sent to accredited journalists, and published news clipping tracking reports accompanied by a statutory electronic certificate signed by your agency's systems or operations director.",
  },
];

export default function PRPublicRelationsRetainerCrisisRecoveryPage() {
  const pageUrl = `${SITE_URL}/pr-public-relations-agency-retainer-crisis-mandate-fee-recovery`;

  // JSON-LD Schemas: HowTo + Article + FAQPage + BreadcrumbList
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Startup Got Its Funding Press Coverage—and Stopped Paying Your PR Retainer? Enforcing Earned-Media Disclaimers & Notice-Period Fees",
    description:
      "Ethical PR agencies cannot guarantee editorial placement in ET/Mint. Enforce earned media disclaimers, MSMED 45-day statutory payment, & notice fees.",
    url: pageUrl,
    mainEntityOfPage: pageUrl,
    datePublished: "2026-11-17T13:10:25+05:30",
    dateModified: "2026-11-17T13:10:25+05:30",
    author: {
      "@type": "Organization",
      name: "LegalRecovery.in Commercial Editorial Board",
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
    keywords: [
      "pr agency unpaid monthly retainer and crisis mandate fee recovery",
      "client demanding guaranteed tier 1 newspaper front page earned media",
      "earned media vs paid advertorial distinction pr contract",
      "crisis communication IPO pr mandate unpaid fee",
      "startup founder ghosted pr agency after funding announcement",
      "60 day termination notice fee pr retainer",
    ],
  };

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Operational Framework for Recovering Unpaid PR Retainers & Crisis Mandate Fees",
    description:
      "Step-by-step statutory recovery procedure for public relations agencies to recover unpaid monthly retainers, emergency crisis fees, and notice-period dues from defaulting clients.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Evidentiary Lock-in: Compile BSA Section 63 Press Dossier",
        text: "Gather counter-signed MSAs, email and WhatsApp press release sign-offs, timestamped media pitch logs, journalist interview confirmations, and certified media coverage reports.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Statutory Distinction Notice: Earned Media vs Paid Advertorials",
        text: "Serve a formal statutory letter establishing Press Council of India norms: editorial decisions are independent and advisory retainers are non-gratuitous obligations under Section 70 of the Indian Contract Act.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Serve Fact-Verified Legal Notice with Compound Interest Computation",
        text: "Issue a high-court advocate legal demand invoking MSMED Act Section 16 compound interest (3× RBI bank rate) and mandatory 60-day notice period fees under Section 73 Indian Contract Act.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Escalate to MSEFC Portal or Commercial Court Order XXXVII Summary Suit",
        text: "File an electronic petition on the MSME Samadhaan portal for conciliation and statutory arbitration, or initiate a summary recovery suit under Order XXXVII CPC in the competent Commercial Court.",
      },
    ],
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Advertising, Media & PR Recovery Hub",
        item: `${SITE_URL}/industries/advertising-marketing-media-event-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "PR Agency Retainer & Crisis Fee Recovery",
        item: pageUrl,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Structural JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />

      {/* Dark Gradient Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span>B2B Creditor Recovery Guide | IND-12 Media & PR Playbook</span>
          </div>

          {/* Single Page H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            Startup Got Its Funding Press Coverage—and Stopped Paying Your PR Retainer? Enforcing Earned-Media Disclaimers & Notice-Period Fees
          </h1>

          {/* Executive Statutory Summary Box (40–60 words under H1 with inline parent link) */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Statutory Summary & Creditor Position
            </span>
            Under Press Council of India Norms and Indian contract jurisprudence, PR advisory retainers govern professional outreach, not editorial placement guarantees. Within our{" "}
            <Link
              href="/industries/advertising-marketing-media-event-recovery"
              className="text-red-400 underline font-bold hover:text-red-300"
            >
              Advertising, Digital Marketing & PR Recovery Hub
            </Link>
            , PR agencies can enforce 60-day notice fees, MSMED Section 15–18 compound interest, and Section 70 non-gratuitous debt recoveries against defaulting founders.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="space-y-1">
              <span className="block text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                Statutory Payment Limit
              </span>
              <p className="text-xl sm:text-2xl font-black text-slate-100">
                45 Days
              </p>
              <span className="block text-[10px] text-slate-400">
                MSMED Act 2006 §15
              </span>
            </div>

            <div className="space-y-1">
              <span className="block text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                Penal Interest Rate
              </span>
              <p className="text-xl sm:text-2xl font-black text-emerald-400">
                3× Bank Rate
              </p>
              <span className="block text-[10px] text-slate-400">
                Monthly compounding under §16
              </span>
            </div>

            <div className="space-y-1">
              <span className="block text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                Notice Period Enforceability
              </span>
              <p className="text-xl sm:text-2xl font-black text-amber-400">
                100% Enforceable
              </p>
              <span className="block text-[10px] text-slate-400">
                Section 73 Indian Contract Act
              </span>
            </div>

            <div className="space-y-1">
              <span className="block text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                Editorial Bar
              </span>
              <p className="text-xl sm:text-2xl font-black text-red-400">
                Zero Guarantee
              </p>
              <span className="block text-[10px] text-slate-400">
                Press Council Norm 23/32
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumbs Navigation */}
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Advertising & PR Recovery Hub",
                href: "/industries/advertising-marketing-media-event-recovery",
              },
              {
                label: "PR Retainer & Crisis Fee Recovery",
                href: "/pr-public-relations-agency-retainer-crisis-mandate-fee-recovery",
              },
            ]}
          />
        </div>

        {/* 2-Column Split: Left Sticky TOC + Right Content Cards */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar Table of Contents */}
          <PRTableOfContents sections={PR_TOC_SECTIONS} />

          {/* Right Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Executive Overview & The Post-Funding PR Trap */}
            <section
              id="heading-statutory-summary"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                  01
                </span>
                <span className="text-xs uppercase tracking-widest text-[#DC2626] font-bold">
                  The Commercial Reality
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                The Post-Funding PR Trap: How High-Growth Startups Exploit Boutique Communications Agencies
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Public Relations and corporate communications agencies across Bengaluru, Mumbai, Delhi-NCR, and Hyderabad frequently fall victim to an asymmetric commercial pattern. When an early-stage or growth-stage startup closes an institutional funding round (Seed, Series A, or Series B), the founders require immediate, high-decibel media visibility. They commission an established PR agency on an urgent basis, signing a 6-month or 12-month retainership contract with standard monthly fees ranging from ₹1.5 Lakhs to ₹6 Lakhs per month.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                During the initial 30 days, the PR agency deploys immense senior partner hours: crafting the corporate narrative, drafting investor-vetted press releases, organizing exclusive embargoed interviews with senior technology correspondents in <em>The Economic Times</em>, <em>Mint</em>, <em>YourStory</em>, and <em>Inc42</em>, and coordinating high-resolution executive headshots. The press release breaks, the startup trends across LinkedIn, and inbound investor interest surges.
              </p>

              <div className="bg-red-50 border-l-4 border-red-600 p-4 sm:p-5 rounded-r-xl">
                <p className="text-xs sm:text-sm text-red-950 font-semibold leading-relaxed">
                  <strong>The Default Mechanism:</strong> In Month 2 or 3, once the funding glory fades into routine product updates, the founder stops paying monthly invoices. When questioned, the founder either completely ghosts the account director or raises bad-faith pretexts: <em>&ldquo;You promised us page one of the print edition with our solo photo, but the journalist grouped us into a roundup piece! You failed on your deliverables, so we are terminating the contract immediately without paying pending retainers or notice fees.&rdquo;</em>
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This commercial posturing is fundamentally flawed under Indian law. By understanding the distinction between earned media and paid advertising, enforcing bilateral notice periods under the Indian Contract Act, 1872, and activating the statutory recovery mechanisms of the MSMED Act, 2006, PR partners can systematically recover every rupee of earned advisory fees.
              </p>
            </section>

            {/* Section 2: Statutory Framework — Earned Media vs Paid Advertorials */}
            <section
              id="heading-legal-landscape"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                  02
                </span>
                <span className="text-xs uppercase tracking-widest text-[#DC2626] font-bold">
                  Statutory Core
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                The Legal Boundary: Why Indian Law Strictly Separates Earned Media Advisory from Paid Advertising
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Defaulters frequently attempt to defend unpaid retainers by treating public relations as an outcome-guaranteed transactional purchase. Indian jurisprudence, media ethics guidelines, and commercial statute firmly reject this premise:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
                <div className="bg-slate-900 text-white rounded-xl p-5 space-y-2">
                  <span className="text-xs uppercase tracking-wider font-bold text-red-400 block">
                    Earned Media (PR Retainer)
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <strong>Governing Norm:</strong> Press Council of India Guidelines (Norms 23 & 32). Journalists retain complete editorial independence. Guaranteed front-page articles or guaranteed headlines are legally and ethically prohibited as &ldquo;Paid News.&rdquo;
                  </p>
                  <p className="text-xs text-slate-400">
                    <strong>Contractual Nature:</strong> Diligent advisory, narrative crafting, outreach, and media liaison. Remuneration is an ongoing retainership fee, never contingent on third-party editorial discretion.
                  </p>
                </div>

                <div className="bg-slate-100 text-slate-900 rounded-xl p-5 space-y-2 border border-slate-300">
                  <span className="text-xs uppercase tracking-wider font-bold text-slate-600 block">
                    Paid Media (Advertising / Advertorials)
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong>Governing Norm:</strong> Commercial advertisement agreements and ASCI (Advertising Standards Council of India) regulations. Specific column-centimeter space, exact publication dates, and creative layouts are purchased directly from media publishers.
                  </p>
                  <p className="text-xs text-slate-600">
                    <strong>Contractual Nature:</strong> Space-buying contract with guaranteed appearance, governed by strict media-buying insertion orders.
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Statutory Provisions Governing PR Retainer Enforcement
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-2 shrink-0"></span>
                    <div>
                      <strong className="text-slate-900">Section 70, Indian Contract Act, 1872 (Non-Gratuitous Services):</strong> When a communications firm renders strategic advice, distributes releases, coordinates press briefings, and monitors media coverage for a company, and that company enjoys the commercial advantages thereof, the company is statutorily bound to pay agreed compensation. The client cannot enrich itself by utilizing PR labor without discharging invoices.
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-2 shrink-0"></span>
                    <div>
                      <strong className="text-slate-900">Section 73, Indian Contract Act, 1872 (Compensation for Breach):</strong> Abrupt termination of a fixed-term retainer without serving the mandatory contractually stipulated 30-day or 60-day written notice constitutes an actionable breach of contract. The agency is entitled to liquidated damages equivalent to the full notice period retainer.
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-2 shrink-0"></span>
                    <div>
                      <strong className="text-slate-900">Sections 15–18, MSMED Act, 2006 (Statutory 45-Day Payment Window):</strong> As long as the agency holds a valid Udyam Registration, the buyer must settle invoices within 45 days. Any failure attracts mandatory penal interest compounded monthly at three times the RBI bank rate, overriding contradictory client purchase terms.
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 3: Statutory Matrix Table */}
            <section
              id="heading-recovery-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                  03
                </span>
                <span className="text-xs uppercase tracking-widest text-[#DC2626] font-bold">
                  Comparative Escalation Matrix
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                PR Agency Legal Recovery Matrix: Forum, Thresholds, and Timelines
              </h2>

              <p className="text-xs sm:text-sm text-slate-600">
                Compare institutional recovery routes available to PR partners across India based on unpaid debt size and debtor structure:
              </p>

              {/* Responsive Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-900 text-white uppercase text-[11px] tracking-wider">
                    <tr>
                      <th className="py-3 px-4">Recovery Forum</th>
                      <th className="py-3 px-4">Qualifying Debt Floor</th>
                      <th className="py-3 px-4">Statutory Timeline</th>
                      <th className="py-3 px-4">Court Fees / Cost</th>
                      <th className="py-3 px-4">Key Leverage Point</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        Advocate Demand Notice
                      </td>
                      <td className="py-3 px-4 font-mono text-emerald-700 font-semibold">
                        No Minimum (₹50k+)
                      </td>
                      <td className="py-3 px-4">15 Days Statutory Window</td>
                      <td className="py-3 px-4 text-emerald-600 font-medium">Nominal (₹999 Test)</td>
                      <td className="py-3 px-4 text-xs">
                        Triggers director liability, establishes Section 63 electronic proof, stops limitation.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors bg-red-50/30">
                      <td className="py-3 px-4 font-bold text-[#DC2626]">
                        MSME MSEFC Arbitration
                      </td>
                      <td className="py-3 px-4 font-mono text-emerald-700 font-semibold">
                        Any Amount (Udyam registered)
                      </td>
                      <td className="py-3 px-4">90 Days Statutory Mandate</td>
                      <td className="py-3 px-4 text-emerald-600 font-medium">Zero Court Fees</td>
                      <td className="py-3 px-4 text-xs font-semibold text-slate-900">
                        3× RBI Bank Rate compounding monthly; 75% pre-deposit mandatory for client appeals.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        Order XXXVII Summary Suit
                      </td>
                      <td className="py-3 px-4 font-mono">
                        ₹3 Lakhs to ₹1 Crore+
                      </td>
                      <td className="py-3 px-4">6–12 Months</td>
                      <td className="py-3 px-4">State Ad-valorem Court Fee</td>
                      <td className="py-3 px-4 text-xs">
                        Debtor must apply for &ldquo;leave to defend&rdquo;; fast decree against written contracts & invoices.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        Section 8 IBC Demand (NCLT)
                      </td>
                      <td className="py-3 px-4 font-mono text-red-700 font-semibold">
                        ₹1.00 Crore Strict Threshold
                      </td>
                      <td className="py-3 px-4">10 Days Notice / 180 Days</td>
                      <td className="py-3 px-4">Tribunal Filing Scale</td>
                      <td className="py-3 px-4 text-xs">
                        Threat of insolvency and loss of board control for venture-funded corporate defaulters.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Visual Decision Tree (SVG Flowchart + Mobile Stack) */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                  04
                </span>
                <span className="text-xs uppercase tracking-widest text-[#DC2626] font-bold">
                  Decision Framework
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Operational Recovery Decision Tree: Day 0 to Enforcement
              </h2>

              <p className="text-xs sm:text-sm text-slate-600">
                Follow this sequential escalation workflow the moment a PR retainer invoice surpasses 30 days overdue:
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block w-full bg-slate-900 p-6 rounded-2xl border border-slate-800">
                <svg
                  viewBox="0 0 800 380"
                  className="w-full h-auto"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Step 1 */}
                  <rect x="20" y="20" width="220" height="90" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="35" y="48" fill="#F87171" fontSize="11" fontWeight="bold">PHASE 1: INVOICE MATURITY</text>
                  <text x="35" y="70" fill="#FFFFFF" fontSize="13" fontWeight="bold">Default at Day 30–45</text>
                  <text x="35" y="90" fill="#94A3B8" fontSize="10">Lock Pitch Logs & Press Clippings</text>

                  {/* Arrow 1 to 2 */}
                  <path d="M240 65 H 280" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Step 2 */}
                  <rect x="280" y="20" width="230" height="90" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="295" y="48" fill="#38BDF8" fontSize="11" fontWeight="bold">PHASE 2: STATUTORY DOSSIER</text>
                  <text x="295" y="70" fill="#FFFFFF" fontSize="13" fontWeight="bold">Compile BSA §63 Certificate</text>
                  <text x="295" y="90" fill="#94A3B8" fontSize="10">WhatsApp Approvals & GST IRN Invoices</text>

                  {/* Arrow 2 to 3 */}
                  <path d="M510 65 H 550" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Step 3 */}
                  <rect x="550" y="20" width="230" height="90" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="565" y="48" fill="#F87171" fontSize="11" fontWeight="bold">PHASE 3: STATUTORY DEMAND</text>
                  <text x="565" y="70" fill="#FFFFFF" fontSize="13" fontWeight="bold">15-Day Advocate Notice</text>
                  <text x="565" y="90" fill="#94A3B8" fontSize="10">Disclaim Editorial Guarantees + 60d Fee</text>

                  {/* Arrow down from Step 3 */}
                  <path d="M665 110 V 160" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Decision Diamond / Box */}
                  <rect x="550" y="160" width="230" height="70" rx="8" fill="#334155" stroke="#F59E0B" strokeWidth="1.5" />
                  <text x="565" y="188" fill="#FCD34D" fontSize="11" fontWeight="bold">EVALUATE DEBTOR RESPONSE</text>
                  <text x="565" y="210" fill="#FFFFFF" fontSize="12">Settles within 15 Days or Fails?</text>

                  {/* Fork Left: MSME Samadhaan */}
                  <path d="M550 195 H 410 V 260" stroke="#10B981" strokeWidth="2" fill="none" markerEnd="url(#arrowGreen)" />
                  <rect x="290" y="260" width="240" height="95" rx="10" fill="#064E3B" stroke="#10B981" strokeWidth="2" />
                  <text x="305" y="288" fill="#6EE7B7" fontSize="11" fontWeight="bold">TRACK A: UDYAM REGISTERED</text>
                  <text x="305" y="310" fill="#FFFFFF" fontSize="13" fontWeight="bold">File MSME Samadhaan (MSEFC)</text>
                  <text x="305" y="332" fill="#A7F3D0" fontSize="10">3× Bank Rate Compound Interest</text>

                  {/* Fork Right: Commercial Court */}
                  <path d="M665 230 V 260" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />
                  <rect x="550" y="260" width="230" height="95" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="565" y="288" fill="#F87171" fontSize="11" fontWeight="bold">TRACK B: SUMMARY ACTION</text>
                  <text x="565" y="310" fill="#FFFFFF" fontSize="13" fontWeight="bold">Order XXXVII CPC Suit</text>
                  <text x="565" y="332" fill="#94A3B8" fontSize="10">Commercial Division Fast Decree</text>

                  {/* Marker Definitions */}
                  <defs>
                    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 0 L 10 5 L 0 10 z" fill="#DC2626" />
                    </marker>
                    <marker id="arrowGreen" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 0 L 10 5 L 0 10 z" fill="#10B981" />
                    </marker>
                  </defs>
                </svg>
              </div>

              {/* Mobile Decision Cards */}
              <div className="md:hidden space-y-3">
                <div className="bg-slate-900 text-white p-4 rounded-xl border-l-4 border-red-500">
                  <span className="text-[10px] uppercase font-bold text-red-400">Step 1: Default Day 30–45</span>
                  <p className="text-sm font-bold text-white mt-1">Audit Delivery Logs & Halt Active Pitching</p>
                  <p className="text-xs text-slate-300 mt-1">Export all WhatsApp approvals, press release distributions, and media coverage clippings.</p>
                </div>

                <div className="bg-slate-900 text-white p-4 rounded-xl border-l-4 border-sky-500">
                  <span className="text-[10px] uppercase font-bold text-sky-400">Step 2: Evidence Dossier</span>
                  <p className="text-sm font-bold text-white mt-1">Generate BSA 2023 §63 Certificate</p>
                  <p className="text-xs text-slate-300 mt-1">Hash-verify emails, journalist pitch logs, and published news links to eliminate bad-faith dispute pretexts.</p>
                </div>

                <div className="bg-slate-900 text-white p-4 rounded-xl border-l-4 border-[#DC2626]">
                  <span className="text-[10px] uppercase font-bold text-red-400">Step 3: Advocate Demand Notice</span>
                  <p className="text-sm font-bold text-white mt-1">15-Day Statutory Legal Demand</p>
                  <p className="text-xs text-slate-300 mt-1">Explicitly cite Press Council Norms, reject placement guarantees, and demand notice fees under Section 73 ICA.</p>
                </div>

                <div className="bg-emerald-950 text-white p-4 rounded-xl border-l-4 border-emerald-500">
                  <span className="text-[10px] uppercase font-bold text-emerald-400">Step 4: Statutory Enforcement</span>
                  <p className="text-sm font-bold text-white mt-1">MSME Samadhaan or Order XXXVII CPC</p>
                  <p className="text-xs text-slate-300 mt-1">Initiate MSEFC conciliation for 3× compound interest or commercial summary court suit for immediate decree.</p>
                </div>
              </div>
            </section>

            {/* Section 5: Interactive Default Modes / Failure Scenarios */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                  05
                </span>
                <span className="text-xs uppercase tracking-widest text-[#DC2626] font-bold">
                  Interactive Diagnosis
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Commercial Failure Modes: Diagnosis, Statutory Realities & Action Plans
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Explore the four most common commercial evasion tactics deployed by venture-backed startups, pre-IPO enterprises, and corporate brands when withholding PR agency dues:
              </p>

              {/* Client Component Island */}
              <PRScenarioTabs />
            </section>

            {/* Section 6: Enforcing the 60-Day Notice Period Fee */}
            <section
              id="heading-notice-period-enforcement"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                  06
                </span>
                <span className="text-xs uppercase tracking-widest text-[#DC2626] font-bold">
                  Contractual Rights
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Enforcing Mandatory 60-Day Termination Notice Fees Under Indian Law
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A recurring crisis for PR agency leaders is the abrupt email or WhatsApp message: <em>&ldquo;We are pausing our PR efforts immediately effective today. Do not send further invoices.&rdquo;</em> When the agency demands payment for the contractually agreed 60-day notice period, client founders frequently retort: <em>&ldquo;You are not doing any work for us for the next 60 days, so why should we pay you?&rdquo;</em>
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  The Judicial Standing of Retainer Notice Clauses in India
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Indian High Courts and the Supreme Court in landmark rulings including <em>Saw Pipes</em> and classical contractual jurisprudence have firmly recognized that a bilateral notice period clause in a professional service retainership serves two legitimate commercial functions:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3 bg-white rounded-lg border border-slate-200">
                    <span className="block font-bold text-slate-900 text-xs mb-1">
                      1. Resource Allocation Protection
                    </span>
                    <p className="text-xs text-slate-600">
                      PR agencies dedicate specific account leads, content writers, and media relations specialists to the client. This operational capacity cannot be redeployed overnight without financial loss.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-slate-200">
                    <span className="block font-bold text-slate-900 text-xs mb-1">
                      2. Pre-Agreed Liquidated Damages
                    </span>
                    <p className="text-xs text-slate-600">
                      The retainer fee payable during the notice window represents genuine, pre-estimated agreed damages under Section 73 of the Contract Act. The client's voluntary decision not to utilize media services does not relieve them of the financial debt.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
                <span className="block text-xs font-bold uppercase tracking-wider text-amber-900 mb-1">
                  Strategic Advisory for PR Agency Contracts
                </span>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Ensure your Master Services Agreement (MSA) states: <em>&ldquo;Termination by the Client shall require 60 days&rsquo; prior written notice via registered email. All monthly retainers during the 60-day notice period shall remain unconditionally payable in full on their scheduled billing dates, whether or not the Client elects to assign deliverables during such transition period.&rdquo;</em>
                </p>
              </div>
            </section>

            {/* Mid-Article Dual CTA Banner */}
            <PRNoticeCTA trackingSource="pr-retainer-mid-article" />

            {/* Section 7: Worked Financial & Interest Calculation Box */}
            <section
              id="heading-worked-calculation"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                  07
                </span>
                <span className="text-xs uppercase tracking-widest text-[#DC2626] font-bold">
                  Financial Audit Ledger
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Worked Financial Recovery Calculation: Retainer Dues, 60-Day Notice & MSMED Penal Interest
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Review this factual financial audit of an unpaid communications mandate for a Series-A healthtech startup in Bengaluru defaulting on a 6-month contract:
              </p>

              {/* Financial Ledger Card */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 space-y-4">
                <div className="border-b border-slate-800 pb-3 flex flex-wrap justify-between items-center gap-2">
                  <div>
                    <span className="text-xs font-mono text-red-400 font-bold uppercase">Matter Audit Sheet</span>
                    <h3 className="text-base sm:text-lg font-black text-white">Defaulting Client: Healthtech Unicorn-Hopeful Ltd.</h3>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-950 text-red-300 border border-red-800">
                    Overdue: 180 Days
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-300">Agreed Monthly PR Retainer (Excl. GST)</span>
                    <span className="font-mono text-white font-semibold">₹2,50,000 / Month</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-300">Unpaid Month 2 & Month 3 Invoices (Series-A Coverage Delivered)</span>
                    <span className="font-mono text-white font-semibold">₹5,00,000</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-300">Unilateral Walkout Notice Period Fee (60 Days @ ₹2.5L/mo)</span>
                    <span className="font-mono text-white font-semibold">₹5,00,000</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-300">Disbursements (Paid Wire Distribution & High-Res Shoot Overruns)</span>
                    <span className="font-mono text-white font-semibold">₹85,000</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800 text-slate-400">
                    <span>Subtotal Principal Claim</span>
                    <span className="font-mono font-semibold">₹10,85,000</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800">
                    <span className="text-emerald-400 font-bold">
                      MSMED Act Section 16 Interest (3× RBI Repo Rate = 19.5% p.a., monthly compounded for 6 mos)
                    </span>
                    <span className="font-mono text-emerald-400 font-bold">₹1,11,460</span>
                  </div>
                  <div className="flex justify-between pt-2 text-sm sm:text-base font-black">
                    <span className="text-white uppercase tracking-wider">Total Statutory Claim at Demand Notice</span>
                    <span className="font-mono text-emerald-400 text-lg sm:text-xl">₹11,96,460</span>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-slate-400 italic">
                  Note: Under Section 43B(h) of the Income Tax Act, the defaulting client cannot claim tax deductions for this ₹10.85L professional fee expenditure until the invoice is discharged in full to the Udyam-registered agency.
                </div>
              </div>
            </section>

            {/* Section 8: BSA 2023 Section 63 Evidence Checklist */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                  08
                </span>
                <span className="text-xs uppercase tracking-widest text-[#DC2626] font-bold">
                  Evidence Architecture
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Bharatiya Sakshya Adhiniyam, 2023 (BSA §63) Evidence Dossier for PR Claims
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under Section 63 of the BSA 2023 (which replaced Section 65B of the Indian Evidence Act effective July 1, 2024), digital records must be properly authenticated to withstand commercial court scrutiny. Prepare your recovery dossier with these six mandatory components:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
                    1. Counter-Signed Retainer Agreement
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Executed Master Services Agreement (MSA) or Statement of Work (SOW) clearly detailing the earned media disclaimer, best-efforts scope, monthly retainer slabs, and 60-day notice clause.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
                    2. Written Release Sign-Offs
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Exported email chains or WhatsApp messages from founders/CMOs approving the final draft of the press release, executive quotes, and targeted publication lists prior to dissemination.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
                    3. Media Outreach & Pitching Logs
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Timestamped audit logs demonstrating personalized email pitches sent to accredited technology and business correspondents, interview briefing notes, and press wire distribution confirmations.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
                    4. Published Media Clipping Dossier
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Comprehensive coverage report containing live web links, e-paper print scans, social media pickups, and Advertising Value Equivalency (AVE) / Reach analytics delivered to the client.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
                    5. GST Tax Invoices & Delivery Receipts
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Sequential GST tax invoices with valid IRN (Invoice Reference Numbers) sent via email with automated server delivery logs or WhatsApp read receipts proving receipt by finance directors.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#DC2626]"></span>
                    6. Statutory BSA §63 Certificate
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A sworn electronic evidence certificate signed by the agency head of IT or operations verifying computer system integrity, uncorrupted mail logs, and cryptographic hash verification.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9: Executive FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                  09
                </span>
                <span className="text-xs uppercase tracking-widest text-[#DC2626] font-bold">
                  Executive Inquiries
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Frequently Asked Questions: PR Agency Retainer & Crisis Fee Recovery
              </h2>

              <div className="space-y-3 pt-2">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 transition-all [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-xs sm:text-sm">
                      <span className="flex items-center gap-2">
                        <span className="text-[#DC2626] font-mono text-xs">Q{idx + 1}.</span>
                        <span>{faq.q}</span>
                      </span>
                      <span className="ml-2 text-slate-400 group-open:rotate-180 transition-transform">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pl-6 border-l-2 border-red-500">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 10: Statutory Sources & Landmark Precedents */}
            <section
              id="heading-statutory-authorities"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                  10
                </span>
                <span className="text-xs uppercase tracking-widest text-[#DC2626] font-bold">
                  Statutory References
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Primary Statutory Authorities and Landmark Precedents
              </h2>

              {/* Precedents Cards */}
              <div className="space-y-4">
                {PRECEDENT_AUTHORITIES.map((precedent, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-5 border-l-4 border-l-[#DC2626] space-y-2"
                  >
                    <div className="flex flex-wrap justify-between items-start gap-1">
                      <h3 className="text-sm font-bold text-slate-900">
                        {precedent.title}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-500 font-semibold">
                        {precedent.date}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-[#DC2626]">
                      {precedent.parties} — {precedent.citation}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      <strong>Facts & Context: </strong>
                      {precedent.facts}
                    </p>
                    <p className="text-xs text-slate-800 font-medium leading-relaxed bg-white/70 p-2.5 rounded-lg border border-slate-200">
                      <strong>Statutory Ratio: </strong>
                      {precedent.ratio}
                    </p>
                  </div>
                ))}
              </div>

              {/* Primary Bare-Act Legislation Links */}
              <div className="pt-2">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                  Verified Legislative Authorities & Bare Acts
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {PRIMARY_LEGAL_SOURCES.map((source, idx) => (
                    <li key={idx} className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-slate-800 hover:text-[#DC2626] font-medium flex items-center justify-between"
                      >
                        <span className="truncate pr-2">{source.title}</span>
                        <svg className="w-3.5 h-3.5 shrink-0 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Internal Industry Spokes */}
              <div className="pt-4 border-t border-slate-200">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                  Related Advertising & Media Sector Recovery Playbooks
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                  <Link
                    href="/digital-marketing-seo-agency-retainer-default-low-roas-excuse-recovery"
                    className="p-3 bg-white rounded-xl border border-slate-200 hover:border-red-400 hover:shadow-sm transition-all"
                  >
                    <span className="font-bold text-slate-900 block mb-1">
                      Digital & SEO Agency Retainer Recovery
                    </span>
                    <span className="text-slate-500 text-[11px]">
                      Overcoming &ldquo;Low ROAS&rdquo; client fee deduction excuses.
                    </span>
                  </Link>

                  <Link
                    href="/media-buying-agency-google-meta-tv-ooh-ad-spend-reimbursement-recovery"
                    className="p-3 bg-white rounded-xl border border-slate-200 hover:border-red-400 hover:shadow-sm transition-all"
                  >
                    <span className="font-bold text-slate-900 block mb-1">
                      Media Buying Ad-Spend Reimbursement
                    </span>
                    <span className="text-slate-500 text-[11px]">
                      Recovering upfront Google, Meta & OOH disbursements.
                    </span>
                  </Link>

                  <Link
                    href="/event-management-exhibition-stall-fabricator-post-event-balance-recovery"
                    className="p-3 bg-white rounded-xl border border-slate-200 hover:border-red-400 hover:shadow-sm transition-all"
                  >
                    <span className="font-bold text-slate-900 block mb-1">
                      Event & Exhibition Fabricator Recovery
                    </span>
                    <span className="text-slate-500 text-[11px]">
                      Collecting post-event milestone balances from corporate sponsors.
                    </span>
                  </Link>
                </div>

                <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-500">
                  <span>Additional Cross-References:</span>
                  <Link href="/copyright-not-transferred-until-paid-freelancer" className="text-red-600 hover:underline">
                    Copyright Retention Until Payment
                  </Link>
                  <span>•</span>
                  <Link href="/send-a-legal-notice/for-business-to-recover-their-unpaid-dues" className="text-red-600 hover:underline">
                    B2B Debt Recovery Legal Notice
                  </Link>
                  <span>•</span>
                  <Link href="/recovery/pending-project-payment" className="text-red-600 hover:underline">
                    Pending Project Payment Framework
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Global Related Guides Outside Main */}
      <RelatedRecoveryGuides />
    </div>
  );
}
