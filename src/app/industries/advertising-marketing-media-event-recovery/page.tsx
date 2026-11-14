import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import AgencyMediaHubTableOfContents from "./AgencyMediaHubTableOfContents";
import AgencyMediaHubScenarioTabs from "./AgencyMediaHubScenarioTabs";
import AgencyMediaHubCTA from "./AgencyMediaHubCTA";

export const revalidate = 86400;

const PAGE_URL = "/industries/advertising-marketing-media-event-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const PAGE_TITLE = "Advertising, Marketing, PR, Media & Event Debt Recovery";
const PAGE_DESCRIPTION =
  "Recover unpaid retainers, upfront Meta/Google/OOH ad spend, post-event balances & film dues via Contract, INS RO, MSMED s.43B(h) & Copyright Takedown.";
const H1_TEXT =
  "Retainer, Media-Spend & Production Balance Recovery for Agencies, PR Firms, Film Houses & Event Organizers";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: CANONICAL_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText(PAGE_TITLE),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: [`${SITE_URL}/blog_money_recovery.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

interface IndustrySpoke {
  id: string;
  archetype: "G1" | "L1" | "P1";
  archetypeLabel: string;
  track: "retainers" | "media-events" | "ip-templates";
  title: string;
  url: string;
  statute: string;
  summary: string;
}

const IND_12_SPOKES: IndustrySpoke[] = [
  {
    id: "B2B-147",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "retainers",
    title: "Defeating 'Low ROAS / Fewer Leads' Retainer Defaults (Digital & SEO)",
    url: "/digital-marketing-seo-agency-retainer-default-low-roas-excuse-recovery",
    statute: "Best-Efforts Service Law + Copyright s.19/s.51",
    summary:
      "Rebut post-hoc performance excuses, enforce 60-day notice-period fees, and revoke unpaid Meta/YouTube creative licenses in 7 days.",
  },
  {
    id: "B2B-152",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "retainers",
    title: "PR & Communications Agency Retainer & Crisis Mandate Fee Recovery",
    url: "/pr-public-relations-agency-retainer-crisis-mandate-fee-recovery",
    statute: "Press Council Editorial Norms & MSMED s.15–18",
    summary:
      "Recover unpaid post-funding retainers and crisis fees by proving earned-media outreach logs and countering 'guaranteed print' demands.",
  },
  {
    id: "B2B-153",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "retainers",
    title: "Influencer & Talent Management Agency Brand Payout & Whitelisting Recovery",
    url: "/influencer-talent-management-agency-brand-campaign-payout-recovery",
    statute: "Copyright Act s.38/38A Performer's Rights & MSMED",
    summary:
      "Enforce overdue creator campaign invoices fronted by talent rosters and levy extended-usage royalties on unauthorized paid boosting.",
  },
  {
    id: "B2B-148",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "media-events",
    title: "Media Buying Agency: Google, Meta, TV & Print Spend Reimbursement",
    url: "/media-buying-agency-google-meta-tv-ooh-ad-spend-reimbursement-recovery",
    statute: "Contract Act s.222, INS Rules & Order XXXVII CPC",
    summary:
      "Convert signed Release Orders (ROs) and agency credit-line statements into INS/IBF embargo notices and urgent bank attachment.",
  },
  {
    id: "B2B-151",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "media-events",
    title: "OOH Hoarding, DOOH & Airport/Metro Display Rental Default Recovery",
    url: "/outdoor-hoarding-ooh-billboard-transit-media-rental-default-recovery",
    statute: "Order XXXVII CPC + BSA s.63 Geo-Tagged Logs",
    summary:
      "Substantiate uninterrupted billboard display with time-stamped geo-tagged monitoring photos and cut through agency 'back-to-back' delays.",
  },
  {
    id: "B2B-149",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "media-events",
    title: "Event Agencies & Exhibition Stall Fabricators: Post-Event Balance Recovery",
    url: "/event-management-exhibition-stall-fabricator-post-event-balance-recovery",
    statute: "BSA s.63 Live WhatsApp Approvals & MSMED s.15–18",
    summary:
      "Recover withheld 30–50% post-expo balances from Pragati Maidan, Yashobhoomi, Nesco, and BIEC stalls using live WhatsApp + photo proof.",
  },
  {
    id: "B2B-155",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "media-events",
    title: "Title & Powered-By Sponsorship Fee Default Recovery for Event IP Owners",
    url: "/sponsorship-fee-default-conference-sports-festival-organizer-recovery",
    statute: "Order XXXVII CPC on Signed Confirmation Letters",
    summary:
      "Enforce post-event sponsorship tranches using stage branding reels, delegate audit decks, and signed confirmation emails.",
  },
  {
    id: "B2B-150",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "ip-templates",
    title: "Ad-Film, OTT & VFX Production House Milestone & Overrun Recovery",
    url: "/ad-film-ott-video-production-house-milestone-post-production-recovery",
    statute: "Copyright Act s.2(uu) & s.17 Producer Rights",
    summary:
      "Hold clean ProRes masters lawfully, recover shoot-day weather/celebrity overruns, and block unauthorized airing of preview cuts.",
  },
  {
    id: "B2B-154",
    archetype: "L1",
    archetypeLabel: "L1 Statute & Precedent",
    track: "ip-templates",
    title: "Creative Pitch Theft: Breach of Confidence & Copyright Infringement Law",
    url: "/creative-pitch-theft-unauthorized-use-unpaid-design-recovery",
    statute: "Copyright s.51 (R.G. Anand) & Zee Telefilms Breach",
    summary:
      "Restrain brands that reject agency RFP pitches and launch identical storyboards, packaging, or UI systems via cheaper vendors.",
  },
  {
    id: "B2B-156",
    archetype: "P1",
    archetypeLabel: "P1 Notice Template",
    track: "ip-templates",
    title: "2-Weapon Agency Legal Notice: Payment Demand + 7-Day IP Takedown",
    url: "/templates/marketing-ad-agency-retainer-copyright-takedown-legal-notice",
    statute: "Copyright s.19/30A/51 + IT Rules + MSMED s.16",
    summary:
      "Ready-to-customize advocate notice format combining unpaid invoice/RO recovery with Meta, YouTube & Shopify takedown revocation.",
  },
];

const SPOKE_TRACKS: {
  key: IndustrySpoke["track"];
  heading: string;
  badgeClass: string;
}[] = [
  {
    key: "retainers",
    heading: "Track A — Digital Retainers, PR Mandates & Influencer Talent Agencies",
    badgeClass: "bg-red-50 text-[#DC2626] border-red-200",
  },
  {
    key: "media-events",
    heading: "Track B — Media Buying ROs, OOH Hoardings, Events & Sponsorships",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    key: "ip-templates",
    heading: "Track C — Ad-Film Production, Pitch Theft Law & 2-Weapon Notice Template",
    badgeClass: "bg-amber-50 text-amber-800 border-amber-200",
  },
];

const BINDING_MANDATES = [
  {
    citation: "Copyright Act, 1957 — Sections 17, 19, 30A & 51",
    title: "No Copyright Assignment Without Signed Writing & Full Fee Discharge",
    parties: "Agency, Creative Studio & Production House IP Leverage",
    holding:
      "Under Section 19 of the Copyright Act, 1957, no assignment of copyright in ad creatives, reels, UI/UX code, brand identities, or audio-visual assets is valid unless executed in writing and signed by the assignor. Where agency SOWs condition IP transfer on full invoice settlement, a defaulting client running unpaid creatives on Meta, Google, YouTube, or websites commits statutory infringement under Section 51.",
    impact:
      "Empowers agencies to issue dual-impact notices pairing overdue fee demands with a 7-day license revocation and Meta/YouTube/Shopify DMCA takedown warning.",
  },
  {
    citation: "Copyright Act, 1957 — Sections 2(uu), 17, 38 & 38A",
    title: "Producer First-Ownership of Films & Performer Rights Against Whitelisting",
    parties: "Ad-Film Production Houses, VFX Studios & Talent Management Agencies",
    holding:
      "Section 17 read with Section 2(uu) vests first copyright ownership of a cinematograph film in the Producer unless transferred under a paid written contract. Separately, Sections 38 and 38A recognize Performer's Rights over audio-visual fixations, barring unauthorized brand whitelisting or paid ad boosting beyond the paid license period.",
    impact:
      "Protects production houses holding clean ProRes masters against unpaid preview-cut broadcasts and unlocks usage-extension royalties for talent rosters.",
  },
  {
    citation: "Bombay High Court (2003) & Supreme Court (1978)",
    title: "Equitable Breach of Confidence & Expression Copying in RFP Pitch Theft",
    parties: "Zee Telefilms Ltd. v. Sundial Communications Pvt. Ltd. & R.G. Anand v. Delux Films",
    holding:
      "While R.G. Anand v. Delux Films (1978) distinguishes unprotectable abstract ideas from protectable visual expression under copyright, Zee Telefilms v. Sundial Communications (Bom HC, 2003) establishes an independent equitable Action for Breach of Confidence where a brand receives confidential pitch decks or campaign concepts in trust during an RFP and commercializes them after rejecting the pitching agency.",
    impact:
      "Gives branding, architectural, event, and ad agencies enforceable injunction and damages remedies when brands execute 'rejected' pitches through cheaper vendors.",
  },
  {
    citation: "Contract Act s.222, Order XXXVII CPC & MSMED s.15–18 / IT Act s.43B(h)",
    title: "Agent Indemnity on Signed Release Orders (ROs) & 45-Day MSME Tax Disallowance",
    parties: "INS/AAA-I Media Buyers, OOH Concessionaires & Udyam-Registered Agencies",
    holding:
      "Under Section 222 of the Indian Contract Act, 1872, a principal advertiser must indemnify its media agency for all lawful ad-spend commitments incurred on signed Release Orders (ROs). Liquidated ROs, signed SOWs, and sponsorship confirmations qualify for expedited Order XXXVII CPC summary suits, while Udyam-registered Micro and Small agencies trigger 3x RBI Bank Rate compound interest and Section 43B(h) corporate tax disallowance.",
    impact:
      "Prevents 3%–10% commission media agencies from absorbing 100% upfront platform credit defaults and forces corporate CFOs to clear overdue MSME agency bills before March 31.",
  },
];

const FAQS = [
  {
    question:
      "Can a brand refuse to pay our digital marketing or SEO agency retainer citing 'low ROAS' or 'fewer sales leads'?",
    answer:
      "Unless your signed Statement of Work (SOW) explicitly guarantees fixed revenue or ROAS numbers, digital marketing, SEO, and PR retainers are legally 'best-efforts service contracts'. Agencies do not control client product pricing, checkout speed, inventory, or sales-team conversion. Pair your SOW deliverable logs with a Copyright Act s.19/s.51 warning revoking permission to run your unpaid ad creatives and landing pages.",
  },
  {
    question:
      "Our media buying agency paid ₹40 Lakh to Meta, Google, or TV networks on our agency credit line against a signed RO—how do we recover fast?",
    answer:
      "A signed Release Order (RO) plus platform billing invoices establishes principal-to-agent reimbursement liability under Section 222 of the Indian Contract Act, 1872. Serve an urgent advocate demand on the brand CFO and directors attaching the RO and platform statements, invoke INS/IBF/AAA-I industry credit-embargo reporting where applicable, and file an Order XXXVII CPC summary suit (or Section 138 NI Act complaint if security cheques exist).",
  },
  {
    question:
      "Can an agency take down live Meta ads, YouTube videos, or website creatives if a client defaults on invoices?",
    answer:
      "Yes, provided your contract or SOW has not unconditionally assigned copyright prior to full payment. Under Section 19 of the Copyright Act, 1957, copyright assignment requires a signed written instrument. Serving an advocate-vetted notice revoking provisional usage licenses and giving a 7-day cure window before filing Meta/Google/YouTube/Shopify IP takedowns routinely resolves brand defaults within days.",
  },
  {
    question:
      "How do exhibition stall fabricators and event agencies prove last-minute WhatsApp additions made during a live expo?",
    answer:
      "Under Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023, exported live-event WhatsApp group chats showing client approvals for extra LED walls, AV gear, or stall upgrades—paired with time-stamped event completion photographs and gate-pass logs—constitute admissible electronic evidence to defeat post-event 'minor snag' deductions.",
  },
  {
    question:
      "A brand rejected our RFP pitch deck and then launched our exact campaign through an in-house team—what legal remedy exists?",
    answer:
      "Creative agencies can combine Copyright Act s.51 infringement claims (for substantial visual/storyboard copying under R.G. Anand v. Delux Films) with an equitable Action for Breach of Confidence established in Zee Telefilms v. Sundial Communications (Bombay High Court) when confidential campaign decks disclosed during a pitch are misused without compensation.",
  },
  {
    question:
      "Do digital marketing agencies, PR firms, production houses, and event companies qualify for MSME Section 43B(h) and 3x interest?",
    answer:
      "Yes. Udyam-registered Micro and Small service enterprises—including digital agencies, PR firms, production houses, and event/fabrication vendors—qualify under MSMED Act Sections 15–18 for a 45-day payment cap, 3x RBI Bank Rate monthly compound interest, and corporate buyer income-tax expense disallowance under Section 43B(h) of the Income-tax Act.",
  },
  {
    question:
      "Can our agency or media network test LegalRecovery.in on one unpaid client before uploading multiple overdue accounts?",
    answer:
      "Yes. Agencies can launch one live overdue retainer, RO, event balance, or sponsorship default for ₹999 (advocate-drafted and served via Email, Business WhatsApp, and Speed Post RPAD) and later scale to 10–10,000+ overdue accounts via our bulk CSV and multi-entity Representees workspace.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "Copyright Act, 1957 (Sections 2(uu), 17, 19, 30A, 38A, 51 & 55) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1367",
  },
  {
    title: "Indian Contract Act, 1872 (Sections 55, 73, 74 & 222 Agent Indemnity) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "MSMED Act, 2006 & MSME Samadhaan Portal (Sections 15–18) — Ministry of MSME",
    url: "https://samadhaan.msme.gov.in/",
  },
  {
    title: "Income-tax Act, 1961 Section 43B(h) (Micro & Small Service Enterprises) — Income Tax India",
    url: "https://www.incometaxindia.gov.in/",
  },
  {
    title: "Code of Civil Procedure, 1908 (Order XXXVII Summary Suits & Order XXXVIII Rule 5) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Commercial Courts Act, 2015 (Section 2(1)(c)(xvii) IP & Section 12A Mediation) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam (BSA), 2023 (Section 63 Electronic Evidence) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/20063",
  },
  {
    title: "Information Technology (Intermediary Guidelines & Digital Media Ethics Code) Rules — MeitY",
    url: "https://www.meity.gov.in/",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository. Advocate attribution (Anuj Anand Malik, Advocate & Founder, AMA Legal Solutions) emitted inline.

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: H1_TEXT,
  headline: H1_TEXT,
  description: PAGE_DESCRIPTION,
  serviceType: "Advertising, Digital Marketing, PR, Media Buying, Film & Event Legal Debt Recovery",
  provider: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/lrlogo.png`,
    },
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  audience: {
    "@type": "Audience",
    audienceType:
      "Digital Agency Founders, Media Buying CFOs, PR Firm Partners, Ad-Film Producers & Experiential Event Directors",
  },
  offers: {
    "@type": "Offer",
    price: "999",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/user/new-recovery`,
  },
  mainEntityOfPage: CANONICAL_URL,
};

const ITEM_LIST_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "IND-12 Advertising, Marketing, PR, Media & Event Recovery Spokes & Template",
  numberOfItems: IND_12_SPOKES.length,
  itemListElement: IND_12_SPOKES.map((spoke, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: spoke.title,
    url: `${SITE_URL}${spoke.url}`,
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
      name: "Services",
      item: `${SITE_URL}/services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Advertising, Media & Event Recovery",
      item: CANONICAL_URL,
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

export default function AdvertisingMediaEventRecoveryHubPage() {
  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Advertising, Media & Event Recovery", href: PAGE_URL },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ITEM_LIST_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Gradient Hero */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>IND-12 Creative, Media &amp; Event Pillar Hub</span>
              <span className="text-red-500">&bull;</span>
              <span>Copyright s.17/19/51 &bull; INS RO &bull; MSMED s.43B(h)</span>
              <span className="text-red-500">&bull;</span>
              <span>Agencies, PR, Film &amp; Events</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {H1_TEXT}
            </h1>

            {/* 40-60 Word Executive Creditor Answer Box */}
            <div
              aria-label="Executive Creditor Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer (Agencies, Media CFOs &amp; Producers)
              </span>
              <p>
                Advertising, digital marketing, PR, media buying, film, and event firms recover unpaid retainers, fronted Meta/Google/TV/OOH outlays, and post-event balances by pairing monetary demand notices with 7-day Copyright Act s.19/s.51 creative takedown warnings, Contract Act s.222 Release Order indemnity, INS credit-embargo pressure, and MSMED s.43B(h) 3x interest claims.
              </p>
            </div>

            {/* 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">
                  &rupee;50K&ndash;&rupee;5Cr
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  SEO Retainers to Media ROs &amp; Film Shoots
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">
                  7-Day IP Pull
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  Copyright s.51 Meta/YouTube/Web Warning
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">
                  s.222 + INS RO
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  Principal Indemnity on Fronted Media Spend
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">
                  &rupee;999 &rarr; CSV
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  1 Brand Default Test to Bulk Agency Desk
                </p>
              </div>
            </div>

            <p className="mt-4 text-[11px] sm:text-xs text-slate-400">
              Agency &amp; Media Recovery Architecture Reviewed by{" "}
              <Link href="/authors/anuj-anand-malik" className="text-slate-200 underline hover:text-white font-semibold">
                Anuj Anand Malik
              </Link>
              , Advocate &amp; Founder, AMA Legal Solutions &bull; Updated November 2026
            </p>
          </div>
        </section>

        {/* Main 2-Column Content Container */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mb-2">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Left Sticky TOC */}
            <AgencyMediaHubTableOfContents />

            {/* Right Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: Overview */}
              <section
                id="heading-overview"
                aria-labelledby="heading-overview-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <h2
                      id="heading-overview-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Why Creative, Media &amp; Event Firms Lose Margin to Brand Defaults
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Closing India&apos;s Creditor-Side Gap for Digital Agencies, Media Buyers, PR Firms, OOH Owners, Film Houses &amp; Event Directors
                    </p>
                  </div>
                </div>

                <div className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed space-y-4">
                  <p>
                    India&apos;s advertising, digital marketing, public relations, media buying, film production, and experiential events ecosystem operates on extreme working-capital asymmetry. While existing consumer and creator guides cover influencers chasing small payouts, over 30,000 institutional agencies, production houses, and OOH media owners face a far larger structural problem: corporate brands, D2C startups, and real-estate advertisers enjoy 100% of campaign visibility upfront and then stall final settlement. Alongside foundational{" "}
                    <Link href="/recovery/pending-project-payment" className="text-[#DC2626] font-semibold underline">
                      pending project payment recovery
                    </Link>{" "}
                    and{" "}
                    <Link href="/copyright-not-transferred-until-paid-freelancer" className="text-[#DC2626] font-semibold underline">
                      copyright retention until full payment
                    </Link>
                    , commercial agency creditors require industry-specific leverage that dissolves stalling excuses inside 7 days.
                  </p>
                  <p>
                    In digital marketing, SEO, and PR retainers (₹50,000–₹15 Lakh/month), nine out of ten defaulting D2C, EdTech, or consumer brands withhold the final 2–3 months of retainer fees or walk out on 60-day notice clauses by emailing a sudden post-hoc excuse—&ldquo;we did not get expected ROAS/sales&rdquo; or &ldquo;Tier-1 media did not run our founder profile.&rdquo; Crucially, those same clients keep running the agency&apos;s unpaid Meta reels, Google creatives, landing pages, and press assets while refusing payment.
                  </p>
                  <p>
                    In media buying and OOH concessions (₹10 Lakh–₹5 Crore), the exposure is existential: an accredited or performance media agency earning 3%–10% commission charges 100% of a client&apos;s Google, Meta, television, print, or hoarding burst onto its own agency credit line or Amex card. One defaulted festive campaign wipes out the profits of twenty healthy accounts. Meanwhile, exhibition stall fabricators at Pragati Maidan, Yashobhoomi, Nesco, and BIEC, B2B summit IP owners, and ad-film producers front 80% hard cash for crews, truss, and studio floors—watching their bargaining power vanish the moment the event ends or a preview cut leaks to air. This IND-12 Pillar Hub unifies all 10 vertical playbooks, Release Order enforcement templates, and dual-weapon Copyright Takedown notices.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      Dual-Weapon IP Leverage
                    </span>
                    <strong className="text-sm sm:text-base text-slate-900 block">
                      Copyright s.19 &amp; s.51
                    </strong>
                    <p className="text-xs text-slate-600 mt-1">
                      Pair monetary invoice demands with a 7-day Meta, YouTube &amp; Shopify IP takedown notice on unpaid creatives.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      Media Credit Indemnity
                    </span>
                    <strong className="text-sm sm:text-base text-slate-900 block">
                      Contract s.222 + INS RO
                    </strong>
                    <p className="text-xs text-slate-600 mt-1">
                      Compel brand reimbursement of fronted Google, Meta, TV &amp; Print spend via signed Release Orders and INS rules.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                      Live Event &amp; MSME Proof
                    </span>
                    <strong className="text-sm sm:text-base text-slate-900 block">
                      BSA s.63 + s.43B(h)
                    </strong>
                    <p className="text-xs text-slate-600 mt-1">
                      Convert WhatsApp site approvals, geo-tagged OOH photos &amp; Udyam 45-day rules into rapid settlements.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: 7-Track Escalation Matrix */}
              <section
                id="heading-escalation-matrix"
                aria-labelledby="heading-escalation-matrix-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <h2
                      id="heading-escalation-matrix-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      7-Track Agency, Media Buying &amp; Event Recovery Escalation Matrix
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Ticket Band, Trigger Event, Statutory Hook, Cure Clock &amp; Target Forum Across All IND-12 Verticals
                    </p>
                  </div>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[740px]">
                    <thead>
                      <tr className="bg-slate-900 text-white font-bold">
                        <th className="p-3.5 border-b border-slate-800">Agency / Media Sub-Vertical</th>
                        <th className="p-3.5 border-b border-slate-800">Typical Ticket</th>
                        <th className="p-3.5 border-b border-slate-800">Primary Statutory Lever</th>
                        <th className="p-3.5 border-b border-slate-800">Notice &amp; Cure Window</th>
                        <th className="p-3.5 border-b border-slate-800">Target Enforcement Forum</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          Digital, SEO &amp; Performance Retainers (&lsquo;Low ROAS&rsquo; Excuse)
                        </td>
                        <td className="p-3.5">&rupee;50K&ndash;&rupee;15L</td>
                        <td className="p-3.5">Best-Efforts SOW + Copyright s.19/s.51 + MSMED s.43B(h)</td>
                        <td className="p-3.5 font-semibold text-[#DC2626]">7-Day IP Pull / 15-Day Payment</td>
                        <td className="p-3.5">Meta/YouTube IP Takedown + MSEFC / Order 37</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          Media Buying Ad-Spend Advances (Google, Meta, TV, Print)
                        </td>
                        <td className="p-3.5">&rupee;10L&ndash;&rupee;5Cr</td>
                        <td className="p-3.5">Contract Act s.222 Indemnity + INS/AAA-I RO Rules</td>
                        <td className="p-3.5 font-semibold text-amber-700">7-Day Urgent RO + Embargo Notice</td>
                        <td className="p-3.5">Order XXXVII CPC + Order XXXVIII R.5 Bank Freeze</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          Events, AV/LED &amp; Exhibition Stall Fabricators
                        </td>
                        <td className="p-3.5">&rupee;2L&ndash;&rupee;80L</td>
                        <td className="p-3.5">BSA 2023 s.63 Live WhatsApp + MSMED s.15&ndash;18</td>
                        <td className="p-3.5 font-semibold text-emerald-700">15-Day Balance Demand</td>
                        <td className="p-3.5">MSEFC Samadhaan (3x Interest) / Commercial Court</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          Ad-Film, OTT &amp; VFX Production Houses
                        </td>
                        <td className="p-3.5">&rupee;5L&ndash;&rupee;3Cr</td>
                        <td className="p-3.5">Copyright Act s.2(uu) &amp; s.17 Producer Ownership</td>
                        <td className="p-3.5 font-semibold text-[#DC2626]">7-Day Broadcast Injunction Warning</td>
                        <td className="p-3.5">Master Hold + Commercial IP Division / Order 37</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          OOH Hoardings, DOOH &amp; Airport/Metro Transit Media
                        </td>
                        <td className="p-3.5">&rupee;5L&ndash;&rupee;2Cr</td>
                        <td className="p-3.5">Signed Display Orders + BSA s.63 Geo-Tagged Photos</td>
                        <td className="p-3.5">15-Day Rental + Flex Removal Notice</td>
                        <td className="p-3.5">Order XXXVII Summary Suit / NI Act s.138</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          PR Consultancies &amp; Influencer Talent Management Rosters
                        </td>
                        <td className="p-3.5">&rupee;1.5L&ndash;&rupee;1Cr</td>
                        <td className="p-3.5">Press Council Norms + Copyright s.38/38A Whitelisting</td>
                        <td className="p-3.5 font-semibold text-[#DC2626]">7-Day Boost/License Revocation</td>
                        <td className="p-3.5">MSEFC ODR / Extended-Usage Royalty Demand</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-slate-900">
                          Conference Sponsorships &amp; Creative RFP Pitch Theft
                        </td>
                        <td className="p-3.5">&rupee;3L&ndash;&rupee;2Cr</td>
                        <td className="p-3.5">Order 37 Confirmation Letters + Zee Telefilms Breach</td>
                        <td className="p-3.5">7&ndash;15 Day Cease-and-Desist / Payment</td>
                        <td className="p-3.5">High Court Commercial IP Injunction / Order 37</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3: SVG Workflow Architecture + Mobile Stacked Cards */}
              <section
                id="heading-workflow-architecture"
                aria-labelledby="heading-workflow-architecture-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <h2
                      id="heading-workflow-architecture-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      7-Day Copyright Takedown &amp; RO Enforcement Workflow Architecture
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      5-Stage Creditor Pipeline Pairing Evidence Lock, Dual-Weapon Notice Dispatch &amp; Forum Escalation
                    </p>
                  </div>
                </div>

                {/* Desktop Hand-Authored SVG Pipeline */}
                <div className="hidden md:block rounded-xl border border-slate-200 bg-slate-900 p-4 overflow-x-auto">
                  <svg
                    width={920}
                    height={310}
                    viewBox="0 0 920 310"
                    role="img"
                    aria-label="5-stage advertising, media buying, film and event recovery pipeline diagram"
                    className="w-full h-auto"
                  >
                    <rect x="0" y="0" width="920" height="310" rx="12" fill="#0F172A" />
                    <text x="24" y="34" fill="#F87171" fontSize="11" fontWeight="700" letterSpacing="1.2">
                      LEGALRECOVERY.IN &bull; IND-12 CREATIVE, MEDIA &amp; EVENT RECOVERY ENGINE
                    </text>

                    {/* Stage 1 */}
                    <rect x="24" y="58" width="156" height="196" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="48" cy="84" r="13" fill="#DC2626" />
                    <text x="48" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">01</text>
                    <text x="70" y="88" fill="#F8FAFC" fontSize="12" fontWeight="700">Proof Vault</text>
                    <text x="36" y="116" fill="#CBD5E1" fontSize="10.5">Signed SOW / RO / PO</text>
                    <text x="36" y="134" fill="#CBD5E1" fontSize="10.5">Ad Library &amp; Geo-Tags</text>
                    <text x="36" y="152" fill="#CBD5E1" fontSize="10.5">Live Event WhatsApp</text>
                    <rect x="36" y="178" width="132" height="58" rx="6" fill="#0F172A" stroke="#334155" />
                    <text x="44" y="198" fill="#34D399" fontSize="10" fontWeight="700">BSA s.63 Cert</text>
                    <text x="44" y="216" fill="#94A3B8" fontSize="9.5">Locks delivery proof</text>

                    <path d="M180 156 L202 156" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="202,151 212,156 202,161" fill="#DC2626" />

                    {/* Stage 2 */}
                    <rect x="212" y="58" width="156" height="196" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="236" cy="84" r="13" fill="#DC2626" />
                    <text x="236" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">02</text>
                    <text x="258" y="88" fill="#F8FAFC" fontSize="12" fontWeight="700">Dual Lever</text>
                    <text x="224" y="116" fill="#CBD5E1" fontSize="10.5">Overdue Invoice Ledger</text>
                    <text x="224" y="134" fill="#CBD5E1" fontSize="10.5">Copyright s.19/51 Pull</text>
                    <text x="224" y="152" fill="#CBD5E1" fontSize="10.5">INS / s.222 / s.43B(h)</text>
                    <rect x="224" y="178" width="132" height="58" rx="6" fill="#0F172A" stroke="#334155" />
                    <text x="232" y="198" fill="#FBBF24" fontSize="10" fontWeight="700">7-Day Takedown</text>
                    <text x="232" y="216" fill="#94A3B8" fontSize="9.5">Halts unpaid live ads</text>

                    <path d="M368 156 L390 156" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="390,151 400,156 390,161" fill="#DC2626" />

                    {/* Stage 3 */}
                    <rect x="400" y="58" width="156" height="196" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="424" cy="84" r="13" fill="#DC2626" />
                    <text x="424" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">03</text>
                    <text x="446" y="88" fill="#F8FAFC" fontSize="12" fontWeight="700">Tri-Channel</text>
                    <text x="412" y="116" fill="#CBD5E1" fontSize="10.5">CMO / CFO / GC Email</text>
                    <text x="412" y="134" fill="#CBD5E1" fontSize="10.5">WATI Verified WhatsApp</text>
                    <text x="412" y="152" fill="#CBD5E1" fontSize="10.5">India Post RPAD</text>
                    <rect x="412" y="178" width="132" height="58" rx="6" fill="#0F172A" stroke="#334155" />
                    <text x="420" y="198" fill="#34D399" fontSize="10" fontWeight="700">Multi-Party Service</text>
                    <text x="420" y="216" fill="#94A3B8" fontSize="9.5">Brand + Agency + Dir</text>

                    <path d="M556 156 L578 156" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="578,151 588,156 578,161" fill="#DC2626" />

                    {/* Stage 4 */}
                    <rect x="588" y="58" width="156" height="196" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="612" cy="84" r="13" fill="#DC2626" />
                    <text x="612" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">04</text>
                    <text x="634" y="88" fill="#F8FAFC" fontSize="12" fontWeight="700">Triage &amp; Pull</text>
                    <text x="600" y="116" fill="#CBD5E1" fontSize="10.5">Rebut ROAS / Snags</text>
                    <text x="600" y="134" fill="#CBD5E1" fontSize="10.5">File Meta/YT IP Strike</text>
                    <text x="600" y="152" fill="#CBD5E1" fontSize="10.5">Log s.18 Part-Pay</text>
                    <rect x="600" y="178" width="132" height="58" rx="6" fill="#0F172A" stroke="#334155" />
                    <text x="608" y="198" fill="#FBBF24" fontSize="10" fontWeight="700">IT Rules Takedown</text>
                    <text x="608" y="216" fill="#94A3B8" fontSize="9.5">Platform escalation</text>

                    <path d="M744 156 L766 156" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="766,151 776,156 766,161" fill="#DC2626" />

                    {/* Stage 5 */}
                    <rect x="776" y="58" width="120" height="196" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <circle cx="800" cy="84" r="13" fill="#10B981" />
                    <text x="800" y="88" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">05</text>
                    <text x="820" y="88" fill="#F8FAFC" fontSize="12" fontWeight="700">Forum</text>
                    <text x="788" y="116" fill="#CBD5E1" fontSize="10.5">Order 37 RO Suit</text>
                    <text x="788" y="134" fill="#CBD5E1" fontSize="10.5">MSEFC 3x / 43B(h)</text>
                    <text x="788" y="152" fill="#CBD5E1" fontSize="10.5">HC IP Injunction</text>
                    <rect x="788" y="178" width="96" height="58" rx="6" fill="#0F172A" stroke="#334155" />
                    <text x="794" y="198" fill="#34D399" fontSize="10" fontWeight="700">Recovery Won</text>
                    <text x="794" y="216" fill="#94A3B8" fontSize="9.5">Fee + IP Royalties</text>

                    <text x="24" y="286" fill="#94A3B8" fontSize="10">
                      Every notice preserves Bar Council standards, Section 63 BSA evidence logs, and multi-entity Representees isolation across agency subsidiaries.
                    </text>
                  </svg>
                </div>

                {/* Mobile Stacked Cards */}
                <div className="md:hidden space-y-3">
                  {[
                    {
                      num: "01",
                      title: "Proof Vault & BSA s.63 Certification",
                      desc: "Lock signed SOWs, Release Orders, Ad Library links, geo-tagged OOH photos, and live event WhatsApp approvals.",
                    },
                    {
                      num: "02",
                      title: "Dual-Weapon Monetary + IP Demand",
                      desc: "Combine overdue invoice/RO reimbursement with Copyright Act s.19/s.51 license revocation and INS credit-embargo hooks.",
                    },
                    {
                      num: "03",
                      title: "Tri-Channel Executive Dispatch",
                      desc: "Serve Brand CMOs, CFOs, General Counsel, and intermediaries via Zoho Email, WATI WhatsApp, and Speed Post RPAD.",
                    },
                    {
                      num: "04",
                      title: "Reply Triage & 7-Day Platform Strike",
                      desc: "Rebut low-ROAS or minor-snag excuses and escalate unpaid live ads to Meta, YouTube, Google, and Shopify IP portals.",
                    },
                    {
                      num: "05",
                      title: "Order 37, MSEFC & IP Injunction",
                      desc: "Convert non-compliance into Order XXXVII summary suits, MSEFC 3x interest awards, or Commercial Division injunctions.",
                    },
                  ].map((stage) => (
                    <div
                      key={stage.num}
                      className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800 flex items-start gap-3"
                    >
                      <span className="w-7 h-7 rounded-lg bg-[#DC2626] text-white font-black text-xs flex items-center justify-center shrink-0">
                        {stage.num}
                      </span>
                      <div>
                        <p className="text-sm font-bold text-white">{stage.title}</p>
                        <p className="text-xs text-slate-300 mt-1 leading-relaxed">{stage.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 4: Interactive 4-Tab Scenario Explorer */}
              <section
                id="heading-scenario-playbooks"
                aria-labelledby="heading-scenario-playbooks-title"
                className="scroll-mt-28 space-y-5"
              >
                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5">
                  <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                      4
                    </span>
                    <div>
                      <h2
                        id="heading-scenario-playbooks-title"
                        className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                      >
                        Interactive Sector Playbooks: Digital, Media, Events &amp; Film
                      </h2>
                      <p className="text-xs font-semibold text-slate-500 mt-1">
                        Select Your Agency or Production Vertical to Inspect Bottlenecks, Statutory Levers &amp; 3-Step Execution
                      </p>
                    </div>
                  </div>
                  <AgencyMediaHubScenarioTabs />
                </div>
              </section>

              {/* Section 5: Multi-Client Ledger & Dual-Track CTA */}
              <section
                id="heading-ledger-engine"
                aria-labelledby="heading-ledger-engine-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    5
                  </span>
                  <div>
                    <h2
                      id="heading-ledger-engine-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Multi-Client Retainer, RO &amp; Representee Dispatch Infrastructure
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Built for Independent Agencies, Holding-Group Finance Desks, OOH Concessionaires &amp; Talent Firms
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                      1. Multi-Invoice &amp; RO Bundling (invoices[])
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      Retainers, Media Outlays &amp; Overruns Together
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Consolidate monthly retainers, notice-period fees, signed Release Orders, and shoot-overrun debit notes into one chronological statutory demand schedule instead of piecemeal follow-up mails.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                      2. Agency &amp; Production Banner Isolation
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      Separate Entities Inside Representees
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Operating separate Creative, Media Buying, PR, and Production LLPs? Manage every sister banner cleanly inside the{" "}
                      <Link href="/user/representees" className="text-[#DC2626] font-semibold underline">
                        Representees workspace
                      </Link>{" "}
                      with dedicated Udyam numbers and signatories.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                      3. Joint Brand + Intermediary Addressing
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      Terminate &lsquo;Back-to-Back&rsquo; Blame Games
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      When a media agency or lead event house stalls an OOH vendor or production house claiming &ldquo;the brand hasn&apos;t paid us yet,&rdquo; serve joint notices referencing{" "}
                      <Link href="/cheque-bounce-case-against-company-directors" className="text-[#DC2626] font-semibold underline">
                        director liability under Section 141
                      </Link>{" "}
                      and direct privity under your PO.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626]">
                      4. Tri-Channel Executive Service
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      CMO, CFO &amp; General Counsel Visibility
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Marketing managers often bury reminder emails. LegalRecovery dispatches simultaneously to registered-office Speed Post RPAD, corporate finance email, and executive WhatsApp with BSA s.63 logs.
                    </p>
                  </div>
                </div>

                <div id="heading-cta-block" className="scroll-mt-28 pt-2">
                  <AgencyMediaHubCTA />
                </div>
              </section>

              {/* Section 6: Binding Copyright, Contract & INS Rules */}
              <section
                id="heading-statutory-precedents"
                aria-labelledby="heading-statutory-precedents-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    6
                  </span>
                  <div>
                    <h2
                      id="heading-statutory-precedents-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Binding Copyright, Contract &amp; INS Rules for Agency Creditors
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Verified Statutory Provisions &amp; Judicial Precedents Deployed in Every Creative &amp; Media Notice
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {BINDING_MANDATES.map((item) => (
                    <article
                      key={item.parties}
                      className="relative pl-5 pr-4 py-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2"
                    >
                      <span className="absolute left-0 top-3 bottom-3 w-1.5 rounded-r bg-[#DC2626]" aria-hidden="true" />
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626]">
                          {item.citation}
                        </span>
                        <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full self-start sm:self-auto">
                          Creditor Precedent
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">{item.title}</h3>
                      <p className="text-xs font-semibold text-slate-600">{item.parties}</p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{item.holding}</p>
                      <p className="text-xs font-bold text-slate-900 pt-1">
                        Operational Impact: <span className="font-medium text-slate-700">{item.impact}</span>
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 7: Worked Claim Math */}
              <section
                id="heading-worked-economics"
                aria-labelledby="heading-worked-economics-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    7
                  </span>
                  <div>
                    <h2
                      id="heading-worked-economics-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Worked Claim Math: &rupee;18L Media-Spend RO vs &rupee;6L Retainer &amp; IP
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Illustrative Recovery Quantification for Media-Buying Credit Advances &amp; MSME Retainer Defaults
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Agency finance directors must separate third-party media outlays from agency fee margins and quantify statutory interest accurately before issuing demand notices. Compare two high-frequency IND-12 recovery profiles:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 sm:p-5 rounded-xl border border-emerald-200 bg-emerald-50/50 space-y-2.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                      Case A: &rupee;18,00,000 Media Spend + 6% Fee (Contract s.222 + Order 37)
                    </p>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc list-inside">
                      <li>Agency fronted <strong>&rupee;18,00,000</strong> to Meta &amp; Google on its agency credit line against a signed client RO; agency commission is 6% (<strong>&rupee;1,08,000</strong>), total principal <strong>&rupee;19,08,000</strong> (+ GST).</li>
                      <li>Notice invokes <strong>Contract Act s.222 indemnity</strong> + INS/media-credit default reporting + 18% p.a. commercial interest on card carry cost.</li>
                      <li>Signed RO + platform invoices convert into a liquidated <strong>Order XXXVII CPC</strong> claim, blocking speculative ROAS set-offs.</li>
                    </ul>
                  </div>

                  <div className="p-4 sm:p-5 rounded-xl border border-amber-200 bg-amber-50/60 space-y-2.5">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-amber-800">
                      Case B: &rupee;6,00,000 Unpaid Retainer (MSMED s.16 + Copyright s.51)
                    </p>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc list-inside">
                      <li>Udyam Micro performance agency holds 2 unpaid monthly retainer invoices of &rupee;3,00,000 each (<strong>&rupee;6,00,000</strong> total) delayed 120 days past the 45-day MSMED cap.</li>
                      <li>Statutory interest under <strong>MSMED s.16</strong> (3x RBI Bank Rate, illustrative 19.5% p.a. compounded monthly) adds roughly &rupee;39,000+ in 4 months and triggers <strong>Section 43B(h)</strong> tax disallowance for the client.</li>
                      <li>Simultaneous <strong>7-day Meta/YouTube creative takedown warning</strong> freezes live client acquisition funnels until paid.</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-900 text-slate-100 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="text-xs sm:text-sm">
                    <strong className="text-white block">Compute MSME 3x Interest or Check Limitation Dates Before Dispatch</strong>
                    <span className="text-slate-300">
                      Quantify exact Section 16 compound interest and 3-year civil suit limitation windows in seconds.
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 shrink-0">
                    <Link
                      href="/tools/msme-delayed-payment-interest-calculator"
                      className="px-3.5 py-2 rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold text-center transition-colors"
                    >
                      MSME 3x Calculator &rarr;
                    </Link>
                    <Link
                      href="/tools/limitation-period-calculator"
                      className="px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold text-center transition-colors border border-white/15"
                    >
                      Limitation Calculator &rarr;
                    </Link>
                  </div>
                </div>
              </section>

              {/* Section 8: Complete 10-Spoke IND-12 Directory */}
              <section
                id="heading-spokes-directory"
                aria-labelledby="heading-spokes-directory-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    8
                  </span>
                  <div>
                    <h2
                      id="heading-spokes-directory-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Complete IND-12 Directory: All 10 Spokes &amp; Takedown Notice
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Full Hub-and-Spoke Map Covering B2B-147 Through B2B-156 Across Retainers, Media ROs, Events, Film &amp; IP
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  {SPOKE_TRACKS.map((trackGroup) => {
                    const items = IND_12_SPOKES.filter((s) => s.track === trackGroup.key);
                    return (
                      <div key={trackGroup.key} className="space-y-3.5">
                        <h3 className="text-sm sm:text-base font-extrabold text-slate-900 border-l-4 border-[#DC2626] pl-3">
                          {trackGroup.heading}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                          {items.map((spoke) => (
                            <Link
                              key={spoke.id}
                              href={spoke.url}
                              className="group p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-[#DC2626]/60 hover:shadow-sm transition-all flex flex-col justify-between gap-2.5"
                            >
                              <div>
                                <div className="flex items-center justify-between gap-2 mb-2">
                                  <span
                                    className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full border ${trackGroup.badgeClass}`}
                                  >
                                    {spoke.archetypeLabel}
                                  </span>
                                  <span className="text-[10px] font-mono text-slate-400">{spoke.id}</span>
                                </div>
                                <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors leading-snug">
                                  {spoke.title}
                                </p>
                                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                                  {spoke.summary}
                                </p>
                              </div>
                              <div className="pt-2 border-t border-slate-200/70 flex items-center justify-between gap-2 text-[11px]">
                                <span className="font-semibold text-slate-500 truncate">{spoke.statute}</span>
                                <span className="font-bold text-[#DC2626] shrink-0">Open &rarr;</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Section 9: Live Seed Guides & Bulk Solutions */}
              <section
                id="heading-seed-resources"
                aria-labelledby="heading-seed-resources-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    9
                  </span>
                  <div>
                    <h2
                      id="heading-seed-resources-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Live Copyright, Freelancer &amp; Commercial Invoice Recovery Guides
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Live Statutory Playbooks, MSME Rules, Templates &amp; Bulk Dispatch Portals Ready Now on LegalRecovery.in
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {[
                    {
                      title: "Copyright Not Transferred Until Paid (Creative & IP Law)",
                      href: "/copyright-not-transferred-until-paid-freelancer",
                      tag: "IND-12 Seed Guide",
                      desc: "Section 19 & Section 51 Copyright Act rules blocking clients from using unpaid designs, videos, or code.",
                    },
                    {
                      title: "Send Legal Notice for Business to Recover Unpaid Dues",
                      href: "/send-a-legal-notice/for-business-to-recover-their-unpaid-dues",
                      tag: "B2B Notice Portal",
                      desc: "Advocate-drafted corporate recovery notice covering retainers, SOW milestones, and interest.",
                    },
                    {
                      title: "Pending Project Payment Recovery Guide",
                      href: "/recovery/pending-project-payment",
                      tag: "IND-12 Seed Guide",
                      desc: "Step-by-step recovery for stalled milestone sign-offs, scope creep, and post-launch client defaults.",
                    },
                    {
                      title: "Bulk Recovery Cases: All-in-One Institutional Solutions",
                      href: "/bulk-recovery-cases-all-in-one-affordable-solutions",
                      tag: "CSV Batch Desk",
                      desc: "Onboard 10 to 10,000+ overdue brand advertisers, exhibitors, or agency debtors in one batch.",
                    },
                    {
                      title: "Bulk Notice via Email, WhatsApp & Speed Post RPAD",
                      href: "/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution",
                      tag: "Tri-Channel Engine",
                      desc: "Automated Email, WATI WhatsApp, and India Post RPAD dispatch with Section 63 BSA delivery logs.",
                    },
                    {
                      title: "Section 43B(h): The MSME 45-Day Payment Rule for Buyers",
                      href: "/law/section-43bh-msme-payment-rule",
                      tag: "Tax Leverage",
                      desc: "Use March 31 income-tax disallowance pressure to recover unpaid invoices for Udyam-registered agencies.",
                    },
                    {
                      title: "Order 37 Summary Suit for Liquidated Commercial Claims",
                      href: "/law/order-37-summary-suit-money-recovery",
                      tag: "Order 37 CPC",
                      desc: "Enforce signed Release Orders, sponsorship letters, and confirmed invoices without lengthy trials.",
                    },
                    {
                      title: "MSME Delayed Payment Demand Notice Format (Template)",
                      href: "/templates/msme-delayed-payment-demand-notice",
                      tag: "Live P1 Template",
                      desc: "Ready Udyam demand notice format citing MSMED Sections 15–16 and Section 43B(h) tax impact.",
                    },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group p-4 rounded-xl border border-slate-200 hover:border-[#DC2626]/60 bg-slate-50/40 hover:bg-white transition-all flex flex-col justify-between gap-2"
                    >
                      <div>
                        <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-[#DC2626] bg-red-50 px-2 py-0.5 rounded-full mb-1.5">
                          {item.tag}
                        </span>
                        <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors">
                          {item.title}
                        </p>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                      <span className="text-xs font-bold text-slate-800 group-hover:text-[#DC2626]">
                        Read Live Resource &rarr;
                      </span>
                    </Link>
                  ))}
                </div>
              </section>

              {/* Section 10: FAQs */}
              <section
                id="heading-faqs"
                aria-labelledby="heading-faqs-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    10
                  </span>
                  <div>
                    <h2
                      id="heading-faqs-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      FAQs: Ad Agency, Media Buying, PR, Film &amp; Event Dues Recovery
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Direct Statutory Answers for Agency Founders, Media CFOs, Film Producers &amp; Event Directors
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq) => (
                    <details
                      key={faq.question}
                      className="group rounded-xl border border-slate-200 bg-slate-50/50 open:bg-white p-4 sm:p-5 transition-all"
                    >
                      <summary className="font-bold text-slate-900 text-xs sm:text-sm md:text-base cursor-pointer flex justify-between items-start gap-3 list-none select-none">
                        <span>{faq.question}</span>
                        <span className="text-slate-400 group-open:rotate-180 transition-transform duration-200 font-black text-base shrink-0">
                          &darr;
                        </span>
                      </summary>
                      <p className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 11: Statutory Acts & Portals */}
              <section
                id="heading-sources"
                aria-labelledby="heading-sources-title"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-4"
              >
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-[#404447] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    11
                  </span>
                  <div>
                    <h2
                      id="heading-sources-title"
                      className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight"
                    >
                      Copyright Act, INS Rules, MSMED &amp; Commercial Court References
                    </h2>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      Primary Bare Acts, Digital Intermediary Rules &amp; Official Statutory Portals Referenced
                    </p>
                  </div>
                </div>

                <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-700">
                  {PRIMARY_SOURCES.map((source) => (
                    <li key={source.url} className="leading-relaxed break-words">
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-blue-700 hover:text-blue-900 underline font-medium"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </section>
            </div>
          </div>
        </main>

        {/* Footer Cross-Links */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
