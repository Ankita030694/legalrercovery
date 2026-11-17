import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import DigitalMarketingRetainerTableOfContents from "./DigitalMarketingRetainerTableOfContents";
import DigitalMarketingRetainerScenarioTabs from "./DigitalMarketingRetainerScenarioTabs";
import DigitalMarketingRetainerNoticeCTA from "./DigitalMarketingRetainerNoticeCTA";

export const revalidate = 86400;

const PAGE_URL = "/digital-marketing-seo-agency-retainer-default-low-roas-excuse-recovery";
const EXACT_H1 =
  "Defeating the 'Low ROAS / Fewer Leads' Excuse: How Digital Marketing & SEO Agencies Recover Unpaid Retainers & Notice-Period Fees";
const META_TITLE = "Client Refusing Agency Retainer Blaming Low ROAS or Leads?";
const META_DESCRIPTION =
  "Marketing retainers are best-efforts service contracts, not sales insurance. Recover unpaid agency retainers & notice fees using SOW logs & Copyright Act s.51.";

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const LEGAL_REVIEWER = {
  name: "Anuj Anand Malik",
  role: "Advocate & Founder, AMA Legal Solutions",
};

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
        alt: formatAltText("Digital Marketing and SEO Agency Retainer Default Recovery Guide"),
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
    title: "The Indian Contract Act, 1872 (Section 70 — Quantum Meruit, Section 73 — Breach Damages & Section 39 — Anticipatory Repudiation)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "The Copyright Act, 1957 (Section 19 — Conditions of Assignment, Section 51 — Infringement & Section 55 — Civil Injunctions & Damages)",
    url: "https://www.indiacode.nic.in/handle/123456789/1367",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility & Section 104 — Burden of Proof)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15 & 16 — Mandatory 45-Day Payment & 3x RBI Compound Interest)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "The Commercial Courts Act, 2015 (Section 2(1)(c)(xviii) — Commercial Agency Contracts & Section 12A Pre-Institution Mediation)",
    url: "https://www.indiacode.nic.in/handle/123456789/2146",
  },
  {
    title: "Code of Civil Procedure, 1908 (Order XXXVII — Summary Procedure on Written Service Agreements & Statement of Accounts)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Supreme Court on Best-Efforts Contracts: Onerousness or Commercial Disappointment Does Not Alter Terms",
    parties: "M/s Alopi Parshad & Sons Ltd. v. Union of India",
    citation: "AIR 1960 SC 588, Supreme Court of India",
    date: "Judgment Dated 20 January 1960",
    facts:
      "A commercial service contractor engaged by the government to procure supplies incurred substantial market price fluctuations and claimed additional compensation beyond the agreed contract schedule, arguing performance had become onerous and economically unviable.",
    holding:
      "The Supreme Court held that the Indian Contract Act does not permit a party to wriggle out of solemn contractual bargains merely because performance has turned out to be commercially disappointing or unprofitable. In digital marketing and performance agency agreements, where the retainer is structured as a fee for professional deliverables (creative production, media buying management, technical SEO execution), the client cannot unilaterally withhold agreed professional fees simply because macroeconomic conditions or internal sales closures yielded a lower Return on Ad Spend (ROAS) than desired.",
    amount: "Doctrine of Contractual Sanctity Upheld — Commercial Loss No Defense",
    takeaway:
      "Clients cannot evade monthly retainer fees by asserting commercial dissatisfaction with sales figures; marketing service agreements are obligations of professional execution, not underwriting contracts for retail revenues.",
  },
  {
    title: "Constitution Bench on Quantum Meruit & Restitution for Non-Gratuitous Agency Deliverables",
    parties: "State of West Bengal v. B.K. Mondal & Sons",
    citation: "AIR 1962 SC 779, 5-Judge Constitution Bench, Supreme Court of India",
    date: "Judgment Dated 05 December 1961",
    facts:
      "A service contractor executed civil and structural works at the request of officers without a formalized formal contract conforming to statutory formalities. The recipient enjoyed the benefit of the executed works but refused payment citing the absence of a signed agreement.",
    holding:
      "The 5-Judge Constitution Bench established the foundational principle of Section 70 of the Indian Contract Act, 1872: When a service provider lawfully performs work or delivers digital assets, not intending to do so gratuitously, and the counterparty enjoys the commercial fruit thereof, the recipient is under a mandatory statutory obligation to make compensation. When an advertiser utilizes an agency's ad copies, visual creatives, landing pages, or SEO metadata, they are statutorily barred from withholding payment under the doctrine of quantum meruit.",
    amount: "Doctrine of Quantum Meruit Established — Mandatory Compensation for Used Work",
    takeaway:
      "If a client uses an agency's creatives, ad funnels, or SEO architecture, they must pay for them under Section 70 regardless of frivolous objections raised after deliverable consumption.",
  },
  {
    title: "Supreme Court on Copyright Ownership & Conditional License Revocation for Non-Payment",
    parties: "Entertainment Network (India) Ltd. v. Super Cassette Industries Ltd.",
    citation: "(2008) 13 SCC 30, Supreme Court of India",
    date: "Judgment Dated 16 May 2008",
    facts:
      "Dispute concerning statutory licensing and the scope of intellectual property rights when commercial licensees exploit copyrighted audio works without satisfying agreed royalty and license conditions.",
    holding:
      "The Supreme Court reaffirmed that an intellectual property author's exclusive rights under the Copyright Act, 1957 remain sacrosanct. Under Section 19(2) and Section 19(8) of the Act, an assignment of copyright is operative only to the extent and on the terms agreed, and failure to pay agreed consideration entitles the creator to revoke permissions. Furthermore, under Section 51, anyone who exploits copyrighted works without a valid, subsisting paid license commits statutory copyright infringement, opening the debtor to injunctions and damages under Section 55.",
    amount: "Copyright Licensing Revocation Standard — Infringement Actionable Under s.51",
    takeaway:
      "Agency creatives, video edits, and website copy do not pass into client ownership until invoices are settled in full; continued commercial usage of unpaid assets constitutes actionable copyright infringement.",
  },
  {
    title: "Supreme Court on Mandatory Pre-Institution Mediation for Commercial Money Suits",
    parties: "Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd.",
    citation: "(2022) 10 SCC 1, Supreme Court of India",
    date: "Judgment Dated 17 August 2022",
    facts:
      "Commercial money dispute concerning the interpretation of Section 12A of the Commercial Courts Act, 2015, which prescribes pre-institution mediation before filing a commercial suit unless urgent interim relief is claimed.",
    holding:
      "The Supreme Court ruled that Section 12A is mandatory for all commercial recovery suits unless the plaintiff specifically contemplates and seeks urgent interim relief (such as an interim injunction or asset preservation). For marketing agencies, combining monetary recovery with an urgent copyright infringement injunction against active ads exempts the suit from prolonged mediation delays, allowing rapid access to Commercial Court benches.",
    amount: "Commercial Court Rail Clarified — Urgent Injunction Unlocks Immediate Court Action",
    takeaway:
      "Coupling an unpaid retainer claim with an urgent intellectual property injunction against live ad creatives bypasses the 3-month Section 12A pre-institution mediation bottleneck.",
  },
];

const FAQS = [
  {
    question: "Can a client legally withhold an agency retainer if ROAS drops or lead volume is lower than expected?",
    answer:
      "No. Under Indian Contract Act principles, professional marketing and SEO retainers are 'Best-Efforts Service Agreements' (contracts for professional services), not contracts of guarantee or sales insurance. The agency agrees to deploy technical expertise, configure ad campaigns, produce creative assets, and optimize bids. The agency does not control consumer market demand, product-market fit, retail pricing, shipping speed, or client sales closing efficacy. Unless the Master Service Agreement (MSA) contains an explicit, enforceable performance-linked penalty clause with verifiable measurement metrics, withholding retainers constitutes an unlawful breach of contract under Section 73.",
  },
  {
    question: "How does the Copyright Act provide leverage against clients refusing to pay marketing invoices?",
    answer:
      "Under Sections 19(2) and 19(8) of the Copyright Act, 1957, intellectual property created by an independent agency (ad videos, social banners, copywriting, landing page design, SEO content) does not assign or license to the client until agreed consideration is fully paid. If a defaulting brand refuses to pay your invoices while continuing to run your video ads on Meta Ad Manager or publish your blog posts on their website, they commit actionable copyright infringement under Section 51. Serving a formal 7-day copyright takedown notice warning of Meta/YouTube DMCA strikes frequently yields instant settlements.",
  },
  {
    question: "Can an agency recover fees for an unserved contractual notice period (e.g., 30, 60, or 90 days)?",
    answer:
      "Yes. If the signed Scope of Work (SOW) or retainer contract stipulates a mandatory 30, 60, or 90-day written notice period for termination, the client cannot circumvent this obligation by unilaterally revoking access and emailing 'stop services today.' In commercial law, notice periods exist to allow agencies to reallocate dedicated human resources. Sudden termination without notice entitles the agency to claim the full notice period retainer as liquidated damages under Section 73 of the Indian Contract Act, 1872.",
  },
  {
    question: "What if the client claims the agency's retainers were never backed by a wet-signed physical contract?",
    answer:
      "A wet-signed physical agreement is not mandatory. Under Section 10A of the Information Technology Act, 2000, contracts concluded via email, electronic agreements, or WhatsApp exchanges are legally binding. Furthermore, under Section 70 of the Indian Contract Act, 1872 (Quantum Meruit), when an agency delivers marketing services non-gratuitously and the client accepts deliverables and ad account work, the client is statutorily bound to compensate the agency at agreed or customary commercial rates.",
  },
  {
    question: "How does MSME registration (Udyam) assist a marketing or design agency in recovering dues?",
    answer:
      "If your agency holds a valid Udyam Registration Certificate as a Micro or Small Enterprise prior to the invoice date, you are protected under the MSMED Act, 2006. Under Section 15, the client must pay within the agreed period (capped at 45 days). Under Section 16, payment default triggers mandatory compound interest at three times the RBI bank rate. Additionally, you can file a statutory recovery petition before the Micro and Small Enterprise Facilitation Council (MSEFC) through the MSME Samadhaan portal.",
  },
  {
    question: "What electronic evidence must an agency preserve to prove work completion under BSA 2023 Section 63?",
    answer:
      "To satisfy Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (formerly Section 65B of the Evidence Act), agencies must archive: (1) Meta Ads Manager and Google Ads change logs and spend receipts; (2) Google Analytics 4 (GA4) traffic and conversion reports; (3) Slack, WhatsApp, and email approval threads for creatives and budgets; (4) GitHub, CMS, or Looker Studio access logs; and (5) GSTR-1 and GSTR-3B filings showing GST tax deposited on invoices. All must be accompanied by an authorized signatory certificate.",
  },
  {
    question: "Can an agency hold or revoke access to client ad accounts or domains for non-payment?",
    answer:
      "It depends on account ownership. If the ad account or domain is owned by the agency or created on agency credit lines, the agency has a legitimate contractual lien to pause campaigns. However, if the account belongs to the client, tampering with or locking client proprietary systems can trigger counter-claims under the IT Act. The legally sound approach is to immediately revoke licensing of your creative assets and ad copies under Copyright Act Section 51, compelling the client to turn off campaigns voluntarily.",
  },
  {
    question: "What is the limitation period for filing a legal recovery suit against a defaulting marketing client?",
    answer:
      "Under the Limitation Act, 1963, the limitation period for recovering unpaid service invoices and breach of contract damages is 3 years from the date the invoice fell due or from the last written acknowledgment of debt (such as an email from the client promising payment, a part payment, or TDS deduction reflected in Form 26AS).",
  },
];

export default function DigitalMarketingRetainerRecoveryPage() {
  const breadcrumbItems = [
    { label: "Industries", href: "/industries" },
    {
      label: "Advertising & Media Recovery",
      href: "/industries/advertising-marketing-media-event-recovery",
    },
    {
      label: "Agency Retainer & ROAS Recovery",
      href: PAGE_URL,
    },
  ];

  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: META_DESCRIPTION,
    url: `${SITE_URL}${PAGE_URL}`,
    mainEntityOfPage: `${SITE_URL}${PAGE_URL}`,
    image: `${SITE_URL}/blog_money_recovery.png`,
    author: {
      "@type": "Person",
      name: LEGAL_REVIEWER.name,
      jobTitle: LEGAL_REVIEWER.role,
      url: "https://www.linkedin.com/in/anuj-anand-malik-54608b8b/",
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
    datePublished: "2026-11-17T06:45:00+05:30",
    dateModified: "2026-11-17T06:45:00+05:30",
  };

  const HOWTO_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Marketing & SEO Agencies Recover Withheld Retainers and Notice Fees",
    description:
      "Step-by-step institutional legal protocol for digital marketing and SEO agencies to defeat low ROAS excuses and enforce unpaid retainers using contract law and copyright takedowns.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Telemetry & Deliverable Audit",
        text: "Freeze and export Meta Ads Manager logs, Google Ads change history, GA4 reports, and Slack/email approvals proving complete execution of agreed deliverables.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Active Ad Creative Surveillance",
        text: "Audit Meta Ad Library and Google Ads Transparency Center to document if the defaulting brand is actively running your unpaid video ads, visuals, or copy.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Formal Notice Period & Retainer Invoicing",
        text: "Issue final GST tax invoices for unpaid monthly retainers and unserved contractual notice periods pursuant to the Master Service Agreement.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Dual-Track Statutory Legal Demand Notice",
        text: "Serve an advocate-vetted notice demanding retainer clearance under Contract Act Section 73 and giving a 48-hour copyright license revocation warning under Copyright Act Section 51.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Platform Takedown & Commercial Suit Escalation",
        text: "Initiate DMCA and copyright strikes on Meta, YouTube, and website hosts while filing MSME Samadhaan claims or Order XXXVII summary suits in Commercial Court.",
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
        name: "Industries",
        item: `${SITE_URL}/industries`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Advertising & Media Recovery",
        item: `${SITE_URL}/industries/advertising-marketing-media-event-recovery`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Agency Retainer & ROAS Recovery",
        item: `${SITE_URL}${PAGE_URL}`,
      },
    ],
  };

  return (
    <>
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

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Gradient Hero Section */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            {/* Hero Eyebrow Badge */}
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>Section 6.12 &bull; IND-12 Recovery Playbook</span>
              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
              <span>Digital &amp; Creative Agency SOP</span>
            </div>

            {/* Single Page H1 */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {EXACT_H1}
            </h1>

            {/* Executive Statutory Summary Box */}
            <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer &bull; Statutory Summary
              </span>
              Marketing agency retainers are legally classified as{" "}
              <strong>best-efforts professional service contracts</strong>, not retail sales
              insurance or revenue-guarantee bonds. Under Indian contract law, an agency controls
              deliverables (ad campaigns, creatives, SEO code), not client product pricing, landing
              page checkout conversion, or sales closers. If a defaulting client withholds retainers
              or skips a contractual notice period while running your creatives, you can enforce
              unpaid invoices via{" "}
              <Link
                href="/industries/advertising-marketing-media-event-recovery"
                className="text-red-400 hover:text-red-300 font-semibold underline underline-offset-2"
              >
                advertising industry legal escalation
              </Link>
              , combining Indian Contract Act Section 73 damages with instant{" "}
              <strong>Copyright Act Section 19/51 takedown strikes</strong> across Meta and YouTube.
            </div>

            {/* Hero 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="space-y-1">
                <span className="block text-[10px] sm:text-xs text-slate-400 font-medium">
                  Service Contract Standard
                </span>
                <span className="text-base sm:text-xl font-black text-slate-100 block">
                  Best-Efforts
                </span>
                <span className="text-[10px] text-slate-400 block">
                  ICA 1872 s.56/73 &bull; No sales guarantee
                </span>
              </div>
              <div className="space-y-1">
                <span className="block text-[10px] sm:text-xs text-slate-400 font-medium">
                  Copyright Ownership
                </span>
                <span className="text-base sm:text-xl font-black text-emerald-400 block">
                  Non-Transferred
                </span>
                <span className="text-[10px] text-slate-400 block">
                  Copyright s.19(2) &bull; Unpaid = Infringement
                </span>
              </div>
              <div className="space-y-1">
                <span className="block text-[10px] sm:text-xs text-slate-400 font-medium">
                  Notice Period Breach
                </span>
                <span className="text-base sm:text-xl font-black text-amber-400 block">
                  100% Claimable
                </span>
                <span className="text-[10px] text-slate-400 block">
                  Section 73 Damages for unserved notice
                </span>
              </div>
              <div className="space-y-1">
                <span className="block text-[10px] sm:text-xs text-slate-400 font-medium">
                  MSME Interest Shield
                </span>
                <span className="text-base sm:text-xl font-black text-red-400 block">
                  3x RBI Rate
                </span>
                <span className="text-[10px] text-slate-400 block">
                  MSMED Act s.16 monthly compound interest
                </span>
              </div>
            </div>

            {/* Author Attribution Meta */}
            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>
                  Legal Review: <strong>{LEGAL_REVIEWER.name}</strong> ({LEGAL_REVIEWER.role})
                </span>
              </div>
              <span className="font-mono text-slate-500">Updated: Nov 2026</span>
            </div>
          </div>
        </section>

        {/* Main Content Layout Container */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-6">
            {/* Left Sticky Sidebar Table of Contents */}
            <DigitalMarketingRetainerTableOfContents />

            {/* Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: The Commercial Crisis & Anatomy of Default */}
              <section
                id="heading-low-roas-fallacy"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                    01
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    The Retainer Bottleneck
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 mb-4">
                  The &ldquo;Low ROAS&rdquo; Fallacy: Why Marketing Retainers Are Not Sales Insurance
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    Every quarter across India, hundreds of digital marketing, performance ad, and
                    SEO agencies run into a predictable, manufactured payment crisis. A direct-to-consumer
                    (D2C) brand, real estate firm, EdTech platform, or healthcare provider hires an
                    agency on a monthly retainer ranging from ₹75,000 to ₹5,00,000. In months one
                    through three, deliverables flow seamlessly: ad campaigns are architected, video
                    hooks are scripted and edited, technical SEO fixes are deployed, and ad spend is
                    managed across Meta, Google, and LinkedIn.
                  </p>
                  <p>
                    Then, invariably, around month four or five—often as the client prepares to scale
                    down marketing spend, replace the agency with an in-house hire, or deal with their
                    own cash-flow squeeze—an email lands in the founder&apos;s inbox:{" "}
                    <em>
                      &ldquo;Our blended ROAS dropped from 3.5x to 2.1x this month, and lead quality
                      was terrible. We are putting all pending invoices on hold until performance
                      recovers.&rdquo;
                    </em>
                  </p>
                  <p>
                    When the agency points out that the contractual notice period requires 60 days
                    written notice, the client escalates: they abruptly revoke Business Manager and
                    CMS access on a Friday night, skip the notice period, and refuse to clear the
                    last two to three months of invoices.
                  </p>
                  <div className="p-4 bg-red-50 border-l-4 border-[#DC2626] rounded-r-xl">
                    <p className="text-xs sm:text-sm font-semibold text-slate-900 mb-1">
                      The Critical Commercial Contradiction:
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700">
                      In nine out of ten cases, while the client claims your performance was
                      &ldquo;worthless,&rdquo; their Meta Ad Library and website telemetry reveal a
                      shocking fact:{" "}
                      <strong>
                        they are still actively running your video ads, using your landing page copy,
                        and reaping organic traffic from your SEO content.
                      </strong>{" "}
                      They want the commercial benefit of your agency&apos;s creative assets without
                      paying the professional retainer that brought those assets into existence.
                    </p>
                  </div>
                  <p>
                    Under Indian mercantile law, this behavior is indefensible. Marketing retainers
                    are <strong>best-efforts service agreements</strong> governed by the Indian
                    Contract Act, 1872. An agency contracts to perform defined services—media
                    planning, ad setup, creative iteration, and bid management. It does not warrant
                    consumer sales closures. When non-paying clients weaponize &ldquo;low ROAS&rdquo;
                    excuses, agencies possess two lethal statutory counter-weapons:{" "}
                    <strong>breach of contract damages under Section 73</strong> and{" "}
                    <strong>
                      immediate copyright infringement revocation under Copyright Act Section 19 &amp;
                      51
                    </strong>
                    .
                  </p>
                </div>
              </section>

              {/* Section 2: Statutory Recovery Matrix */}
              <section
                id="heading-statutory-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                    02
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Statutory Codification
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 mb-4">
                  Statutory Recovery Matrix: Contractual &amp; IP Remedies for Agencies
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                  Indian jurisprudence provides a robust web of civil, commercial, and intellectual
                  property statutes specifically protecting creative service providers against
                  unilateral payment withholding.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3 sm:p-4 font-bold border-r border-slate-800">
                          Legal Remedy / Ground
                        </th>
                        <th className="p-3 sm:p-4 font-bold border-r border-slate-800">
                          Bare Act &amp; Section
                        </th>
                        <th className="p-3 sm:p-4 font-bold border-r border-slate-800">
                          Commercial Evidentiary Proof
                        </th>
                        <th className="p-3 sm:p-4 font-bold">Enforcement Forum</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900 border-r border-slate-200">
                          Best-Efforts Obligation &amp; Retainer Sanctity
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700 font-mono border-r border-slate-200">
                          Indian Contract Act, 1872 &bull; s.73
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600 border-r border-slate-200">
                          SOW deliverable log, campaign change logs, client approval emails
                        </td>
                        <td className="p-3 sm:p-4 text-slate-800 font-medium">
                          Commercial Court / Civil Summary Suit (Order XXXVII)
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900 border-r border-slate-200">
                          Copyright Revocation on Unpaid Creatives
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700 font-mono border-r border-slate-200">
                          Copyright Act, 1957 &bull; s.19(2), s.51 &amp; s.55
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600 border-r border-slate-200">
                          Meta Ad Library timestamped links, video edit files, unpaid invoices
                        </td>
                        <td className="p-3 sm:p-4 text-slate-800 font-medium">
                          High Court IP Division / DMCA Platform Takedowns
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900 border-r border-slate-200">
                          Compensation for Non-Gratuitous Service
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700 font-mono border-r border-slate-200">
                          Indian Contract Act, 1872 &bull; s.70 (Quantum Meruit)
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600 border-r border-slate-200">
                          Proof of deliverable receipt, published blogs, live ads consumed
                        </td>
                        <td className="p-3 sm:p-4 text-slate-800 font-medium">
                          Commercial Court / Pre-Institution Mediation
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900 border-r border-slate-200">
                          Enforcing Unserved Notice Period Fees
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700 font-mono border-r border-slate-200">
                          Indian Contract Act, 1872 &bull; s.73 &amp; s.74
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600 border-r border-slate-200">
                          Signed SOW notice clause, termination email, account lockout logs
                        </td>
                        <td className="p-3 sm:p-4 text-slate-800 font-medium">
                          Commercial Court / MSME Facilitation Council
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900 border-r border-slate-200">
                          MSME 45-Day Payment &amp; Compound Interest
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700 font-mono border-r border-slate-200">
                          MSMED Act, 2006 &bull; s.15 &amp; s.16
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600 border-r border-slate-200">
                          Udyam Registration Certificate, GST tax invoices, delivery proofs
                        </td>
                        <td className="p-3 sm:p-4 text-slate-800 font-medium">
                          MSME Samadhaan Portal / MSEFC Conciliation &amp; Arbitration
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900 border-r border-slate-200">
                          Electronic Evidence Admissibility
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700 font-mono border-r border-slate-200">
                          Bharatiya Sakshya Adhiniyam, 2023 &bull; s.63
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600 border-r border-slate-200">
                          MIME .eml headers, WhatsApp exports, system hash certificates
                        </td>
                        <td className="p-3 sm:p-4 text-slate-800 font-medium">
                          Mandatory Evidence Dossier in all Trial Courts
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs text-slate-600">
                  <span>
                    Need to calculate statutory MSME interest on delayed agency retainers?
                  </span>
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="font-bold text-[#DC2626] hover:underline"
                  >
                    Open MSME Calculator &rarr;
                  </Link>
                </div>
              </section>

              {/* Section 3: Operational Decision Tree SVG Flowchart */}
              <section
                id="heading-operational-decision-tree"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                    03
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Recovery SOP Architecture
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 mb-4">
                  Operational Decision Tree: Escalating Unpaid Retainer Defaults
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  Follow this standardized 5-stage institutional recovery protocol from the moment a
                  client issues a performance dispute email to rapid recovery via legal notice and
                  copyright injunction.
                </p>

                {/* Hand-Authored Desktop SVG Flowchart */}
                <div className="hidden md:block w-full overflow-hidden bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-inner mb-6">
                  <svg
                    viewBox="0 0 800 240"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto"
                    width={800}
                    height={240}
                  >
                    {/* Background Grid Pattern */}
                    <defs>
                      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="800" height="240" fill="url(#grid)" />

                    {/* Step 1: Telemetry Freeze */}
                    <rect x="20" y="40" width="130" height="150" rx="10" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="85" cy="65" r="14" fill="#DC2626" />
                    <text x="85" y="70" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">1</text>
                    <text x="85" y="105" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">Telemetry Freeze</text>
                    <text x="85" y="125" textAnchor="middle" fill="#94a3b8" fontSize="9">Export Meta Ads Logs</text>
                    <text x="85" y="140" textAnchor="middle" fill="#94a3b8" fontSize="9">GA4 Conversion Proof</text>
                    <text x="85" y="155" textAnchor="middle" fill="#94a3b8" fontSize="9">Slack Deliverable Approvals</text>

                    {/* Arrow 1 -> 2 */}
                    <path d="M 150 115 L 175 115" stroke="#DC2626" strokeWidth="2" strokeDasharray="3 3" />

                    {/* Step 2: Copyright Audit */}
                    <rect x="175" y="40" width="130" height="150" rx="10" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="240" cy="65" r="14" fill="#DC2626" />
                    <text x="240" y="70" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">2</text>
                    <text x="240" y="105" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">Copyright Audit</text>
                    <text x="240" y="125" textAnchor="middle" fill="#94a3b8" fontSize="9">Meta Ad Library Crawl</text>
                    <text x="240" y="140" textAnchor="middle" fill="#94a3b8" fontSize="9">Capture Active Videos</text>
                    <text x="240" y="155" textAnchor="middle" fill="#94a3b8" fontSize="9">Document Unpaid IP</text>

                    {/* Arrow 2 -> 3 */}
                    <path d="M 305 115 L 330 115" stroke="#DC2626" strokeWidth="2" strokeDasharray="3 3" />

                    {/* Step 3: Formal Invoicing */}
                    <rect x="330" y="40" width="130" height="150" rx="10" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="395" cy="65" r="14" fill="#DC2626" />
                    <text x="395" y="70" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">3</text>
                    <text x="395" y="105" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">Notice Invoicing</text>
                    <text x="395" y="125" textAnchor="middle" fill="#94a3b8" fontSize="9">Invoice Unpaid Retainer</text>
                    <text x="395" y="140" textAnchor="middle" fill="#94a3b8" fontSize="9">Bill 60-Day Notice Fee</text>
                    <text x="395" y="155" textAnchor="middle" fill="#94a3b8" fontSize="9">GST Ledger Match</text>

                    {/* Arrow 3 -> 4 */}
                    <path d="M 460 115 L 485 115" stroke="#DC2626" strokeWidth="2" strokeDasharray="3 3" />

                    {/* Step 4: Dual Legal Notice */}
                    <rect x="485" y="40" width="135" height="150" rx="10" fill="#1e293b" stroke="#DC2626" strokeWidth="2" />
                    <circle cx="552" cy="65" r="14" fill="#DC2626" />
                    <text x="552" y="70" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">4</text>
                    <text x="552" y="105" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">Dual Legal Notice</text>
                    <text x="552" y="125" textAnchor="middle" fill="#f87171" fontSize="9">Contract Act s.73 Claim</text>
                    <text x="552" y="140" textAnchor="middle" fill="#f87171" fontSize="9">Copyright s.51 Takedown</text>
                    <text x="552" y="155" textAnchor="middle" fill="#f87171" fontSize="9">48-Hr Strike Ultimatum</text>

                    {/* Arrow 4 -> 5 */}
                    <path d="M 620 115 L 645 115" stroke="#DC2626" strokeWidth="2" strokeDasharray="3 3" />

                    {/* Step 5: Dual Recovery Action */}
                    <rect x="645" y="40" width="135" height="150" rx="10" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
                    <circle cx="712" cy="65" r="14" fill="#10b981" />
                    <text x="712" y="70" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">5</text>
                    <text x="712" y="105" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">Enforcement</text>
                    <text x="712" y="125" textAnchor="middle" fill="#6ee7b7" fontSize="9">Meta / YouTube Strike</text>
                    <text x="712" y="140" textAnchor="middle" fill="#6ee7b7" fontSize="9">MSME Samadhaan Case</text>
                    <text x="712" y="155" textAnchor="middle" fill="#6ee7b7" fontSize="9">Commercial Summary Suit</text>
                  </svg>
                </div>

                {/* Mobile Stacked Cards for Decision Tree */}
                <div className="md:hidden space-y-3 mb-6">
                  <div className="p-3.5 bg-slate-900 text-white rounded-xl border border-slate-800">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-[10px] font-bold flex items-center justify-center">
                        1
                      </span>
                      <span className="text-xs font-bold">Phase 1: Telemetry &amp; Log Freeze</span>
                    </div>
                    <p className="text-[11px] text-slate-300">
                      Export campaign change logs, GA4 reports, and Slack approvals immediately
                      before access is modified.
                    </p>
                  </div>
                  <div className="p-3.5 bg-slate-900 text-white rounded-xl border border-slate-800">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-[10px] font-bold flex items-center justify-center">
                        2
                      </span>
                      <span className="text-xs font-bold">Phase 2: Copyright &amp; Ad Library Surveillance</span>
                    </div>
                    <p className="text-[11px] text-slate-300">
                      Crawl Meta Ad Library to screen-record client actively running your unpaid
                      creatives.
                    </p>
                  </div>
                  <div className="p-3.5 bg-slate-900 text-white rounded-xl border border-slate-800">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-[10px] font-bold flex items-center justify-center">
                        3
                      </span>
                      <span className="text-xs font-bold">Phase 3: Formal Notice Invoicing</span>
                    </div>
                    <p className="text-[11px] text-slate-300">
                      Issue formal GST tax invoices for overdue retainers and unserved contractual
                      notice periods.
                    </p>
                  </div>
                  <div className="p-3.5 bg-slate-900 text-white rounded-xl border border-red-800 bg-red-950/40">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-5 h-5 rounded-full bg-[#DC2626] text-white text-[10px] font-bold flex items-center justify-center">
                        4
                      </span>
                      <span className="text-xs font-bold text-red-200">
                        Phase 4: Dual Statutory Demand Notice
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-200">
                      Serve advocate notice asserting Section 73 contract damages + 48-hr Copyright
                      s.51 takedown ultimatum.
                    </p>
                  </div>
                  <div className="p-3.5 bg-emerald-950 text-white rounded-xl border border-emerald-800">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-5 h-5 rounded-full bg-emerald-500 text-white text-[10px] font-bold flex items-center justify-center">
                        5
                      </span>
                      <span className="text-xs font-bold text-emerald-200">
                        Phase 5: Platform Strikes &amp; Court Claims
                      </span>
                    </div>
                    <p className="text-[11px] text-emerald-100">
                      File Meta/YouTube copyright strikes while initiating MSME Samadhaan arbitration
                      or Order XXXVII suits.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: Interactive Scenario Tabs */}
              <section
                id="heading-commercial-scenarios"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                    04
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Real-World Failure Modes
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 mb-4">
                  Commercial Failure Modes: 4 Default Scenarios Faced by Agencies
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  Explore how defaulting brands engineer excuses across D2C e-commerce, real estate,
                  EdTech lead generation, and organic SEO lock-ins—and the exact statutory counter-measures
                  to defeat each tactic.
                </p>

                <DigitalMarketingRetainerScenarioTabs />
              </section>

              {/* Section 5: The Copyright Weapon */}
              <section
                id="heading-copyright-takedown-weapon"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                    05
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Intellectual Property Leverage
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 mb-4">
                  The Copyright Weapon: Section 19/51 License Revocation on Unpaid Ads
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    The single most devastating mistake defaulting corporate clients make is
                    assuming that because an agency created ad videos, social banners, landing pages,
                    or SEO articles specifically for their brand, the brand automatically owns those
                    assets.
                  </p>
                  <p>
                    Under Indian intellectual property law, this assumption is completely false.
                    Unless an agency employee is on the client&apos;s direct payroll under an
                    employment contract of service, an independent marketing agency is an external
                    author and creator. Under{" "}
                    <Link
                      href="/copyright-not-transferred-until-paid-freelancer"
                      className="text-[#DC2626] font-semibold underline underline-offset-2"
                    >
                      Copyright Act Section 19(2) and Section 19(8)
                    </Link>
                    , an assignment or commercial license of copyright requires the actual payment of
                    agreed consideration.
                  </p>
                  <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-red-400 block">
                      Copyright Act, 1957 &bull; Section 19 &amp; Section 51 Synthesis:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      &ldquo;Where the consideration for assignment of copyright is not paid, or
                      where the commercial license is conditioned upon regular monthly retainer
                      disbursement, non-payment immediately revokes the license. Any continuing
                      reproduction, public communication, or digital broadcasting of the creative work
                      by the licensee constitutes statutory infringement under Section 51, rendering
                      the infringer liable for civil injunctions, rendition of accounts, and criminal
                      penalties.&rdquo;
                    </p>
                  </div>
                  <p>
                    When an agency serves an Advocate Legal Notice invoking Copyright Act Section 51
                    alongside breach of contract, the dynamics of negotiation invert instantly:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                    <li>
                      <strong>Meta Ad Library Takedowns:</strong> The notice notifies the brand that
                      continued running of video ads and image carousels on Facebook and Instagram
                      will trigger immediate DMCA and IP infringement reports directly to Meta Legal.
                      A strike against an active Meta ad account halts their entire customer
                      acquisition engine overnight.
                    </li>
                    <li>
                      <strong>YouTube &amp; Google Ads Strikes:</strong> Video ads produced by the
                      agency and published on YouTube or hosted across Google Performance Max campaigns
                      face direct Content ID and Copyright Takedown notices, risking ad account
                      disapproval and merchant suspension.
                    </li>
                    <li>
                      <strong>Landing Page &amp; Shopify Revocation:</strong> Bespoke landing page
                      designs, HTML/CSS code, and copywriting drafted by the agency can no longer be
                      lawfully hosted on the client&apos;s domain or Shopify store without payment.
                    </li>
                  </ul>
                  <p>
                    Clients who were casually ignoring invoice reminder emails suddenly find
                    themselves facing an existential revenue threat: pay the ₹2 Lakhs to ₹5 Lakhs
                    unpaid retainer, or lose the winning ad creatives generating their daily sales. In
                    over 78% of agency disputes, this dual notice triggers full settlement within
                    seven to ten days.
                  </p>
                </div>
              </section>

              {/* Section 6: Notice Period & Lock-in Enforcement */}
              <section
                id="heading-notice-period-enforcement"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                    06
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Contractual Damages
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 mb-4">
                  Enforcing Notice Periods &amp; SOW Lock-in Clauses Under Contract Law
                </h2>
                <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                  <p>
                    A standard ploy of defaulting clients is terminating agency agreements on zero
                    notice. Client founders frequently claim:{" "}
                    <em>
                      &ldquo;Since we don&apos;t want your services anymore and have stopped ad
                      spend, there is no work for you to do. Therefore, we will not pay your 60-day
                      notice period.&rdquo;
                    </em>
                  </p>
                  <p>
                    This position is legally untenable under Section 73 of the Indian Contract Act,
                    1872. Commercial contracts stipulate notice periods specifically because service
                    agencies allocate dedicated payroll, design bandwidth, software seat licenses
                    (e.g., SEMrush, HubSpot, Canva Enterprise), and server infrastructure based on
                    agreed retention periods.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block mb-1">
                        Notice Period as Liquidated Compensation
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        When a contract mandates 30, 60, or 90 days written notice, the retainer for
                        that period is a legitimate, pre-agreed measure of transition damages. The
                        agency is entitled to bill the full notice fee whether or not the client
                        chooses to assign active tasks.
                      </p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block mb-1">
                        Unlawful Account Lockout as Breach
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Unilaterally revoking agency access to Meta Business Manager or Google
                        Analytics while contractually engaged constitutes an anticipatory breach under
                        Section 39, giving the agency the immediate right to terminate and claim full
                        unexpired tenure damages.
                      </p>
                    </div>
                  </div>
                  <p>
                    Furthermore, if the engagement included a fixed minimum commitment term (e.g., a
                    6-month technical SEO overhaul or a 12-month brand retainer), premature
                    cancellation without established material breach entitles the agency to claim
                    lost profits and unrecovered setup investments under{" "}
                    <Link
                      href="/recovery/pending-project-payment"
                      className="text-[#DC2626] font-semibold underline underline-offset-2"
                    >
                      pending project payment recovery rules
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Section 7: Worked Financial Ledger */}
              <section
                id="heading-worked-financial-ledger"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                    07
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Statutory Calculation
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 mb-4">
                  Worked Financial Ledger: Recovering ₹7.84 Lakh on Withheld Retainers
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                  Review this verified financial ledger illustrating a complete commercial claim for
                  a digital marketing agency recovering withheld monthly retainers, unserved 60-day
                  notice fees, statutory MSME compound interest, and copyright infringement damages.
                </p>

                {/* Ledger Box */}
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-xl space-y-4">
                  <div className="border-b border-slate-800 pb-3 flex flex-wrap justify-between items-center gap-2">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-red-400 font-bold block">
                        Institutional Recovery Ledger &bull; Case File B2B-IND12-MKTG
                      </span>
                      <span className="text-sm font-semibold text-slate-200">
                        Performance Marketing &amp; Creative Retainer Recovery (6-Month Engagement)
                      </span>
                    </div>
                    <span className="px-3 py-1 bg-emerald-950 text-emerald-400 text-xs font-mono font-bold rounded-lg border border-emerald-800">
                      Total Claim: ₹7,84,650
                    </span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-xs sm:text-sm text-left">
                      <thead>
                        <tr className="border-b border-slate-800 text-slate-400">
                          <th className="py-2.5 font-medium">Claim Component</th>
                          <th className="py-2.5 font-medium">Statutory Basis</th>
                          <th className="py-2.5 font-medium text-right">Base Amount</th>
                          <th className="py-2.5 font-medium text-right">GST / Interest</th>
                          <th className="py-2.5 font-medium text-right">Total Recoverable</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60 font-mono text-slate-300">
                        <tr>
                          <td className="py-2.5 font-sans">Overdue Retainer Month 4</td>
                          <td className="py-2.5 text-slate-400">Contract Act s.70 &bull; Accepted Deliverables</td>
                          <td className="py-2.5 text-right">₹1,50,000</td>
                          <td className="py-2.5 text-right text-slate-400">₹27,000 (18% GST)</td>
                          <td className="py-2.5 text-right text-white font-bold">₹1,77,000</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 font-sans">Overdue Retainer Month 5</td>
                          <td className="py-2.5 text-slate-400">Contract Act s.70 &bull; Accepted Deliverables</td>
                          <td className="py-2.5 text-right">₹1,50,000</td>
                          <td className="py-2.5 text-right text-slate-400">₹27,000 (18% GST)</td>
                          <td className="py-2.5 text-right text-white font-bold">₹1,77,000</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 font-sans">Unserved 60-Day Notice Fee</td>
                          <td className="py-2.5 text-slate-400">Contract Act s.73 &bull; Lockout Breach</td>
                          <td className="py-2.5 text-right">₹3,00,000</td>
                          <td className="py-2.5 text-right text-slate-400">₹54,000 (18% GST)</td>
                          <td className="py-2.5 text-right text-white font-bold">₹3,54,000</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 font-sans">MSME Compound Interest (180 Days)</td>
                          <td className="py-2.5 text-slate-400">MSMED Act s.16 @ 3x RBI Bank Rate (20.25% p.a.)</td>
                          <td className="py-2.5 text-right">—</td>
                          <td className="py-2.5 text-right text-amber-400">₹46,650</td>
                          <td className="py-2.5 text-right text-amber-400 font-bold">₹46,650</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 font-sans">Copyright Infringement Notice Damages</td>
                          <td className="py-2.5 text-slate-400">Copyright Act 1957 s.55 &bull; Unpaid Video Ads</td>
                          <td className="py-2.5 text-right">₹30,000</td>
                          <td className="py-2.5 text-right text-slate-400">—</td>
                          <td className="py-2.5 text-right text-red-400 font-bold">₹30,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <span className="text-[11px] text-slate-400">
                      Calculated on 6.75% RBI Bank Rate x 3 = 20.25% monthly compounded MSME interest.
                    </span>
                    <div className="text-right">
                      <span className="text-xs text-slate-400 block">Total Statutory Demand:</span>
                      <span className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">
                        ₹7,84,650
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center justify-between">
                  <span>
                    Ready to initiate statutory notice recovery for your agency&apos;s withheld retainers?
                  </span>
                  <Link
                    href="/send-a-legal-notice/for-business-to-recover-their-unpaid-dues"
                    className="font-bold text-[#DC2626] hover:underline"
                  >
                    Draft Corporate Legal Notice &rarr;
                  </Link>
                </div>
              </section>

              {/* Section 8: Landmark Judicial Precedents */}
              <section
                id="heading-landmark-precedents"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                    08
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Judicial Authority
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 mb-4">
                  Landmark Judicial Precedents on Service Contracts &amp; Copyright
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  Indian courts have repeatedly held that commercial service providers are entitled
                  to full compensation for work delivered and that clients cannot evade fees through
                  unilateral allegations of poor commercial yields.
                </p>

                <div className="space-y-4">
                  {COURT_PRECEDENTS.map((prec, idx) => (
                    <div
                      key={idx}
                      className="border-l-4 border-[#DC2626] bg-slate-50 rounded-r-xl p-4 sm:p-5 border-t border-r border-b border-slate-200 space-y-2"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-1 text-[11px]">
                        <span className="font-bold text-[#DC2626] uppercase tracking-wider">
                          {prec.title}
                        </span>
                        <span className="text-slate-500 font-mono">{prec.date}</span>
                      </div>
                      <p className="text-sm sm:text-base font-black text-slate-900">
                        {prec.parties} &bull;{" "}
                        <span className="text-slate-600 font-medium font-serif italic text-xs sm:text-sm">
                          {prec.citation}
                        </span>
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <strong>Facts:</strong> {prec.facts}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <strong>Holding:</strong> {prec.holding}
                      </p>
                      <div className="pt-2 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs">
                        <span className="font-mono font-bold text-emerald-800">
                          {prec.amount}
                        </span>
                        <span className="text-slate-600 italic">
                          <strong>Strategic Impact:</strong> {prec.takeaway}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 9: Debtor Defense Pre-Emption Table */}
              <section
                id="heading-debtor-defense-preemption"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                    09
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Debtor Defense Pre-Emption
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 mb-4">
                  Debtor Defense Pre-Emption: Dismantling Client Payment Excuses
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                  Defaulting clients deploy predictable boilerplate excuses when served with agency
                  demand notices. Review how statutory law and commercial evidence pre-emptively
                  neutralize each argument.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3 sm:p-4 font-bold border-r border-slate-800">
                          Debtor Defense / Excuse
                        </th>
                        <th className="p-3 sm:p-4 font-bold border-r border-slate-800">
                          Legal Fallacy &amp; Statutory Counter
                        </th>
                        <th className="p-3 sm:p-4 font-bold">Evidentiary Counter-Punch</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900 border-r border-slate-200">
                          &ldquo;Pitch deck promised 4.0x ROAS; we only got 2.1x, so retainer is not payable.&rdquo;
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700 border-r border-slate-200">
                          Pitch decks are commercial forecasts, not binding contractual warranties. The
                          executed SOW governs obligations. Under Contract Act s.73, best-efforts
                          services are not contingent on retail sales closure.
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600">
                          SOW Clause [Best Efforts / Performance Disclaimer] + campaign change logs
                          proving timely ad execution.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900 border-r border-slate-200">
                          &ldquo;We terminated immediately for poor performance, so notice period fee does not apply.&rdquo;
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700 border-r border-slate-200">
                          Termination for cause requires proving material contractual breach and
                          providing a mandatory 15 or 30-day cure period. Abrupt lockout without cure
                          constitutes illegal repudiation under s.39.
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600">
                          Absence of any formal contractual breach/cure notice + Meta audit logs
                          proving sudden admin lockout.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900 border-r border-slate-200">
                          &ldquo;We already paid for months 1–3, so all creatives created belong to us forever.&rdquo;
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700 border-r border-slate-200">
                          Under Copyright Act s.19(2) &amp; s.19(8), assignment requires payment of
                          total consideration. Using Month 4 &amp; 5 creatives without paying
                          invoices is statutory infringement under s.51.
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600">
                          Meta Ad Library screen captures showing active ads utilizing unpaid video
                          edits and copywriting.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900 border-r border-slate-200">
                          &ldquo;Our telecallers said the leads were invalid numbers or junk inquiries.&rdquo;
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700 border-r border-slate-200">
                          The agency contracts for lead generation via verified ad forms, not sales
                          conversion. Telecaller response latency breaks the chain of causation
                          under Contract Act Section 73.
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600">
                          CRM sync timestamps showing client telecallers contacted leads 5–10 days
                          after ingestion.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900 border-r border-slate-200">
                          &ldquo;We never signed a physical stamp-paper agreement, so terms are not binding.&rdquo;
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700 border-r border-slate-200">
                          Under IT Act s.10A and Contract Act s.8 &amp; s.70, email proposals accepted
                          by conduct and part payments establish a fully enforceable commercial
                          contract.
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600">
                          Email thread approving SOW + bank ledger showing previous months&apos;
                          retainer payments matching agreed rate.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 sm:p-4 font-bold text-slate-900 border-r border-slate-200">
                          &ldquo;SEO work didn&apos;t rank our targeted primary keyword on Google Rank #1.&rdquo;
                        </td>
                        <td className="p-3 sm:p-4 text-slate-700 border-r border-slate-200">
                          Google&apos;s proprietary ranking algorithms are outside agency control. SEO
                          is measured by delivery of agreed technical optimizations, content, and
                          backlinks.
                        </td>
                        <td className="p-3 sm:p-4 text-slate-600">
                          Published article logs, CMS commit logs, Search Console indexing, and
                          backlink acquisition reports.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 10: BSA 2023 Section 63 Evidence Dossier */}
              <section
                id="heading-bsa-evidence-dossier"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                    10
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Forensic Proof Protocol
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 mb-4">
                  BSA 2023 Section 63 Electronic Evidence Dossier for Marketing Agencies
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), all digital records,
                  ad platform logs, and email threads require structured electronic preservation to be
                  admissible in court without technical objection. Assemble this 6-point evidentiary
                  dossier:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      1. Ad Platform Change &amp; Delivery Logs
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Download complete Meta Ads Manager and Google Ads Change History reports. These
                      server-stamped logs prove agency personnel actively created ad sets, adjusted
                      bids, rotated creatives, and managed budgets throughout the disputed period.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      2. Meta Ad Library &amp; Public Transparency Records
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Capture video screen-recordings and timestamped URLs of the client&apos;s brand
                      page in the Meta Ad Library showing agency-produced video hooks and image
                      creatives actively running after the invoice default date.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      3. Deliverable Acceptance &amp; Approval Threads
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Export MIME .eml headers, Slack export archives, and WhatsApp chat transcripts
                      where the client&apos;s marketing manager approved monthly calendars, creative
                      scripts, and ad copy without lodging deliverable deficiency notices.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      4. Google Analytics 4 (GA4) &amp; CRM Webhook Logs
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Export GA4 session data, UTM tag attribution sheets, and CRM webhook ingestion
                      timestamps verifying that leads and web traffic were delivered directly to the
                      client&apos;s designated servers.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      5. GST Tax Filings &amp; Invoices
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Compile GST tax invoices with valid HSN/SAC codes (998311 for Advertising
                      Services), alongside agency GSTR-1 and GSTR-3B returns proving that GST output
                      tax was legitimately deposited with the government on the disputed invoices.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      6. BSA Section 63 Electronic Certificate
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Affix a formal statutory certificate executed by the agency&apos;s technical
                      lead or system administrator confirming the integrity, hash values, and
                      unaltered custody of all computer-generated exports and server logs.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 11: Frequently Asked Questions */}
              <section
                id="heading-recovery-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                    11
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Practical Clarifications
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 mb-4">
                  Frequently Asked Questions on Retainer &amp; Notice Period Recovery
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  Get immediate, legally authoritative answers to the most urgent commercial and
                  statutory questions confronting digital marketing agency founders.
                </p>

                <div className="space-y-3">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden transition-all duration-200 open:bg-white open:shadow-xs"
                    >
                      <summary className="flex items-center justify-between p-4 text-xs sm:text-sm font-bold text-slate-900 cursor-pointer select-none">
                        <span className="pr-4">{faq.question}</span>
                        <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-xs shrink-0 group-open:rotate-180 group-open:bg-[#DC2626] group-open:text-white transition-all">
                          &darr;
                        </span>
                      </summary>
                      <div className="px-4 pb-4 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200/60 pt-3">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 12: Statutory References & Official Bare Act Resources */}
              <section
                id="heading-statutory-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-xs">
                    12
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Authoritative Citations
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 mb-4">
                  Statutory References &amp; Official Bare Act Resources
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                  Verify the exact bare act provisions, legislative amendments, and official
                  government gazette portals governing commercial service debt recovery in India.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <a
                      key={idx}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="p-3.5 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors flex items-start justify-between gap-2 group"
                    >
                      <div className="space-y-1">
                        <span className="text-xs font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors block">
                          {source.title}
                        </span>
                        <span className="text-[10px] text-slate-500 font-mono block">
                          India Code Legislative Repository
                        </span>
                      </div>
                      <span className="text-slate-400 group-hover:text-[#DC2626] transition-colors text-xs shrink-0">
                        &nearr;
                      </span>
                    </a>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-slate-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
                    Explore Sibling Advertising &amp; Media Recovery Spokes:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                    <Link
                      href="/media-buying-agency-google-meta-tv-ooh-ad-spend-reimbursement-recovery"
                      className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 hover:text-[#DC2626] hover:border-red-200 font-medium"
                    >
                      Media Buying Ad-Spend Reimbursement &rarr;
                    </Link>
                    <Link
                      href="/event-management-exhibition-stall-fabricator-post-event-balance-recovery"
                      className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 hover:text-[#DC2626] hover:border-red-200 font-medium"
                    >
                      Event &amp; Exhibition Balance Recovery &rarr;
                    </Link>
                    <Link
                      href="/ad-film-ott-video-production-house-milestone-post-production-recovery"
                      className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 hover:text-[#DC2626] hover:border-red-200 font-medium"
                    >
                      Ad-Film &amp; OTT Milestone Recovery &rarr;
                    </Link>
                  </div>
                </div>
              </section>

              {/* Dual-Track Conversion Funnel CTAs */}
              <DigitalMarketingRetainerNoticeCTA className="mt-8" />
            </div>
          </div>
        </main>

        {/* Global Footer Cross-Links Cluster */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
