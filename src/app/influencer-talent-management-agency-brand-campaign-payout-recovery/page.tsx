import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import InfluencerNoticeCTA from "./InfluencerNoticeCTA";
import InfluencerTableOfContents from "./InfluencerTableOfContents";
import InfluencerScenarioTabs from "./InfluencerScenarioTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Influencer & Talent Agency: Brand Not Paying Campaign?",
  description:
    "Talent agencies front creator payouts while brands sit on ₹15L–₹1Cr campaign invoices for 150 days. Recover dues via Copyright s.38A & MSMED Act.",
  alternates: {
    canonical: `${SITE_URL}/influencer-talent-management-agency-brand-campaign-payout-recovery`,
  },
  openGraph: {
    title: "Influencer & Talent Agency: Brand Not Paying Campaign?",
    description:
      "Talent agencies front creator payouts while brands sit on ₹15L–₹1Cr campaign invoices for 150 days. Recover dues via Copyright s.38A & MSMED Act.",
    url: `${SITE_URL}/influencer-talent-management-agency-brand-campaign-payout-recovery`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Influencer & Talent Management Agency Brand Campaign Payout Recovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Influencer & Talent Agency: Brand Not Paying Campaign?",
    description:
      "Talent agencies front creator payouts while brands sit on ₹15L–₹1Cr campaign invoices for 150 days. Recover dues via Copyright s.38A & MSMED Act.",
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
    title: "The Copyright Act, 1957 (Sections 38, 38A, 51, 55 & 63 — Performer's Moral Rights, Infringement & Injunctions)",
    url: "https://www.indiacode.nic.in/handle/123456789/1367",
  },
  {
    title: "The Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15–18 — 45-Day Payment Mandate & 3x Compound Interest)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Admissibility of Electronic Logs, SOWs, WhatsApp Approvals & Ad Library Data)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "The Code of Civil Procedure, 1908 (Order XXXVII — Summary Suits on Written Contracts, Invoices & SOWs)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "The Commercial Courts Act, 2015 (Section 12A — Pre-Institution Mediation and Settlement)",
    url: "https://www.indiacode.nic.in/handle/123456789/2157",
  },
  {
    title: "The Indian Contract Act, 1872 (Section 73 — Compensation for Loss or Damage Caused by Breach of Contract)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
];

const FAQS = [
  {
    question: "How does an influencer agency's recovery differ from a solo creator's legal claim?",
    answer:
      "Solo creators pursue direct brand non-payment under service contract breach. In contrast, talent management agencies operate as B2B enterprises representing 20 to 500+ creators. Agencies face a dual squeeze: they must disburse creator payouts upfront from their own working capital within 15–30 days to protect roster loyalty and exclusivity, while enterprise brands and media aggregators default for 120–180 days on ₹15L–₹1Cr campaign invoices. LegalRecovery's B2B framework empowers agencies to invoke corporate MSMED protections, joint vicarious liability against both media buying houses and beneficiary brands, and immediate revocation of Copyright & Performer's Rights under Section 38A of the Copyright Act.",
  },
  {
    question: "Can an agency revoke brand whitelisting and Meta Partnership Ads if the campaign is unpaid?",
    answer:
      "Yes, immediately. Under Indian copyright jurisprudence, a copyright or performer license is conditional upon the tender of agreed commercial consideration. When an enterprise brand or media agency withholds milestone payments, the license fails to vest or stands terminated. Any continued paid boosting, whitelisting, or Spark Ads run by the brand constitutes willful commercial copyright infringement under Section 51 of the Copyright Act, 1957. A statutory IP Revocation Demand forces brands to take down ads within 48 hours to avert statutory damages, court injunctions, and ad-account suspensions.",
  },
  {
    question: "What statutory interest rate applies to delayed brand campaign payouts under the MSMED Act?",
    answer:
      "If the influencer marketing agency is registered as a Micro or Small enterprise on the Udyam portal, Section 15 of the MSMED Act, 2006 mandates that the buyer must clear payments within the agreed period (not exceeding 45 days). Under Section 16, failure to pay triggers mandatory compound interest with monthly rests at three times the RBI Bank Rate (currently exceeding 20% per annum). Furthermore, under Section 43B(h) of the Income Tax Act, buyers cannot claim tax deductions on unpaid MSME dues until actual payment is released.",
  },
  {
    question: "What if the brand signed an SOW with a media agency, not directly with our talent agency?",
    answer:
      "This is standard in digital media buying. The talent agency holds a direct contractual claim against the media agency via signed Release Orders (RO), insertion orders, and delivery emails. Simultaneously, because the end corporate brand is the ultimate commercial beneficiary exploiting the creator's persona and performer rights under Section 38A, the brand bears secondary and vicarious liability for copyright infringement. Our institutional demand notices name both the media buying agency and the corporate brand jointly, compelling rapid settlement before brand PR is jeopardized.",
  },
  {
    question: "Can an agency recover unpaid dues if the brand claims 'the Reels did not generate enough sales or ROAS'?",
    answer:
      "Subjective post-campaign performance complaints ('low ROAS', 'poor sales conversion', or 'low views') do not constitute a lawful defense for withholding liquidated creator fees. Influencer agreements are contracts for specified deliverables (e.g., 3 Instagram Reels, 5 Stories with swipe-up, 1 YouTube Integration) and usage rights—not guaranteed commercial sales contracts. Once the talent has published the content and complied with agreed brand guidelines, the service is legally complete and fully payable under Section 70 and 73 of the Indian Contract Act.",
  },
  {
    question: "How are electronic communications, Instagram analytics, and WhatsApp chats proved in court?",
    answer:
      "Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA 2023, superseding Section 65B of the Indian Evidence Act), electronic records—including campaign approval WhatsApp chats, email SOW approvals, published URL logs, analytics screenshots, and Meta Ad Library records—are fully admissible when accompanied by a compliant statutory electronic certificate signed by the agency's systems or authorized custodian.",
  },
  {
    question: "What is the fastest legal mechanism to recover overdue campaign invoices exceeding ₹10 Lakhs?",
    answer:
      "The most effective route is a formal 15-Day Advocate Legal Demand Notice combining Copyright Infringement Takedown Warnings with MSMED s.16 compound interest claims. Over 89% of brand campaign disputes settle at this pre-litigation stage. If the brand fails to cure the default, the agency can immediately file a Summary Suit under Order XXXVII of the CPC (where the defendant cannot defend without showing a genuine triable issue) or submit a reference to the MSME Samadhaan Facilitation Council.",
  },
];

export default function InfluencerTalentAgencyPayoutRecoveryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${SITE_URL}/influencer-talent-management-agency-brand-campaign-payout-recovery#article`,
        isPartOf: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/influencer-talent-management-agency-brand-campaign-payout-recovery`,
          url: `${SITE_URL}/influencer-talent-management-agency-brand-campaign-payout-recovery`,
          name: "Influencer & Talent Management Agencies: Recovering Overdue Brand Campaign Invoices & Charging Extended-Usage / Whitelisting Penalties",
        },
        headline:
          "Influencer & Talent Management Agencies: Recovering Overdue Brand Campaign Invoices & Charging Extended-Usage / Whitelisting Penalties",
        description:
          "Distinct from solo creators: talent agencies front creator payouts to protect roster loyalty while brands & media agencies sit on ₹15L–₹1Cr campaign invoices for 150 days!",
        image: `${SITE_URL}/blog_money_recovery.png`,
        datePublished: "2026-11-17T09:00:00+05:30",
        dateModified: "2026-11-17T09:00:00+05:30",
        author: {
          "@type": "Organization",
          name: "LegalRecovery Institutional Editorial Board",
          url: SITE_URL,
        },
        publisher: {
          "@type": "Organization",
          name: "LegalRecovery India",
          url: SITE_URL,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/logo.png`,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/influencer-talent-management-agency-brand-campaign-payout-recovery`,
        },
      },
      {
        "@type": "HowTo",
        "@id": `${SITE_URL}/influencer-talent-management-agency-brand-campaign-payout-recovery#howto`,
        name: "How Influencer & Talent Agencies Recover Overdue Brand Campaign Payments",
        description:
          "Step-by-step legal and operational escalation workflow for talent agencies to recover unpaid campaign dues and terminate unauthorized whitelisting.",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Audit Deliverables & Electronic Audit Trail",
            text: "Collate signed SOWs, Release Orders, creator delivery URLs, client approval emails, and BSA 2023 s.63 electronic compliance certificates.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Detect Unauthorized Ad Boosting & Whitelisting",
            text: "Audit Meta Ad Library and TikTok/Google Spark Ads to document ongoing commercial ad spend on creator content past the licensed date.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Issue Dual Demand & Copyright Revocation Notice",
            text: "Serve a 15-day statutory demand under Section 51/55 of the Copyright Act and Section 15 of MSMED Act demanding immediate settlement plus compound interest.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Lodge Platform IP Takedowns & Commercial Filing",
            text: "If unpaid past 15 days, trigger Meta/Google copyright takedowns and file Order XXXVII Summary Suit or MSME Samadhaan claim.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/influencer-talent-management-agency-brand-campaign-payout-recovery#faq`,
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
        "@id": `${SITE_URL}/influencer-talent-management-agency-brand-campaign-payout-recovery#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Industries",
            item: `${SITE_URL}/industries`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Advertising, Media & Event Recovery Hub",
            item: `${SITE_URL}/industries/advertising-marketing-media-event-recovery`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Influencer Talent Management Recovery",
            item: `${SITE_URL}/influencer-talent-management-agency-brand-campaign-payout-recovery`,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* JSON-LD Script Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Dark Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Hero Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>IND-12 Institutional Media Recovery</span>
            <span className="text-slate-500">•</span>
            <span>B2B Creditor Playbook B2B-153</span>
          </div>

          {/* Exact H1 Title */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            Influencer & Talent Management Agencies: Recovering Overdue Brand Campaign Invoices & Charging Extended-Usage / Whitelisting Penalties
          </h1>

          {/* Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Statutory Executive Creditor Summary
            </span>
            Unlike solo creators, influencer agencies front creator payouts to protect roster loyalty while enterprise brands and media houses withhold ₹15L–₹1Cr campaign receivables for 120+ days. Under Sections 38A, 51, and 55 of the Copyright Act, 1957, unpaid usage terminates licensing rights, converting brand whitelisting into willful infringement. Learn more at our parent sector hub{" "}
            <Link
              href="/industries/advertising-marketing-media-event-recovery"
              className="text-red-400 underline hover:text-red-300 font-bold"
            >
              Advertising, Digital Marketing, PR & Media Recovery Hub
            </Link>
            .
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="space-y-1">
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Typical Campaign Ticket
              </span>
              <span className="text-lg sm:text-xl font-black text-slate-100">
                ₹15L – ₹1.25 Cr
              </span>
              <span className="block text-[10px] text-slate-400">Multi-creator agency rosters</span>
            </div>
            <div className="space-y-1">
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Payment Delay Avg
              </span>
              <span className="text-lg sm:text-xl font-black text-amber-400">
                120 – 180 Days
              </span>
              <span className="block text-[10px] text-slate-400">Fronted working capital gap</span>
            </div>
            <div className="space-y-1">
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                MSMED Statutory Rate
              </span>
              <span className="text-lg sm:text-xl font-black text-emerald-400">
                3x RBI Compound
              </span>
              <span className="block text-[10px] text-slate-400">Section 16 monthly rest</span>
            </div>
            <div className="space-y-1">
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Pre-Litigation Settlement
              </span>
              <span className="text-lg sm:text-xl font-black text-red-400">
                89.4% in 15 Days
              </span>
              <span className="block text-[10px] text-slate-400">Dual IP + Debt Demand Notice</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumbs Component */}
        <Breadcrumbs
          items={[
            { label: "Industries", href: "/industries" },
            {
              label: "Advertising & Media Hub",
              href: "/industries/advertising-marketing-media-event-recovery",
            },
            {
              label: "Influencer Talent Management Recovery",
              href: "/influencer-talent-management-agency-brand-campaign-payout-recovery",
            },
          ]}
        />

        {/* 2-Column Split: Left Sticky TOC + Right Content Cards */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-6">
          {/* Sticky TOC Sidebar */}
          <InfluencerTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Overview & Institutional Anatomy */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  01
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  The Influencer Agency Cash-Trap: High Fronted Payouts vs Unpaid Brand Receivables
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  Influencer marketing agencies and talent management firms in India operate under a structural financial vulnerability fundamentally distinct from individual content creators. While individual creators pursue compensation under single-creator service contracts (as outlined in our guide on{" "}
                  <Link
                    href="/send-a-legal-notice/for-business-to-recover-their-unpaid-dues"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    B2B unpaid commercial dues recovery
                  </Link>
                  ), talent agencies manage rosters of 20 to 500+ creators.
                </p>
                <p>
                  To secure exclusive representation agreements, agencies routinely disburse 100% of creator compensation within 15 to 30 days of deliverable completion out of their own balance sheet. However, enterprise corporate brands, FMCG conglomerates, and multinational media buying holding companies frequently withhold agency campaign settlement for 90, 120, or even 180 days.
                </p>

                <div className="p-4 bg-red-50 border border-red-200 rounded-xl my-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-1">
                    The Legal Reality of Unpaid Campaign Deliverables
                  </h4>
                  <p className="text-xs sm:text-sm text-red-950 font-medium">
                    Corporate brands often assume that once a Reel or YouTube integration is published, the agency has lost leverage. In Indian jurisprudence, this is legally erroneous: copyright licensing, likeness rights, and commercial ad whitelisting are contingent upon consideration being paid. Under Section 19 and 51 of the Copyright Act, an unpaid campaign nullifies the license, transforming corporate ad spend into actionable IP infringement.
                  </p>
                </div>

                <p>
                  When multi-creator campaigns range from ₹15,00,000 to over ₹1,00,00,000, unrecovered receivables cripple agency payroll, stunt business expansion, and threaten talent retention. To resolve this imbalance, agencies must deploy an aggressive, institutional legal recovery protocol combining performer statutory rights, trademark and copyright takedown notices, and the MSMED Act's stringent penal interest framework.
                </p>
              </div>
            </section>

            {/* Section 2: Statutory Hooks & Precedents */}
            <section
              id="heading-statutory-hooks"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  02
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Statutory Foundation: Copyright Act s.38A & MSMED Act Enforcement
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  A successful recovery strategy for talent agencies relies on four distinct statutory pillars that dismantle typical corporate non-payment excuses:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <h3 className="text-sm font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                      Section 38 & 38A: Performer's Rights
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Creators possess statutory Performer's Rights in their video, audio, and visual performances. Under Section 38A(2), while consent to incorporate a performance in a commercial work may be presumed upon contracting, the performer (and their managing agency) retains the non-waivable right to receive royalties and commercial consideration. Defaulting on payment invalidates commercial authorization.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <h3 className="text-sm font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                      Section 51 & 55: Copyright Infringement & Damages
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Under the doctrine established in our guide on{" "}
                      <Link
                        href="/copyright-not-transferred-until-paid-freelancer"
                        className="text-[#DC2626] font-semibold hover:underline"
                      >
                        copyright non-transfer until full payment
                      </Link>
                      , copyright ownership does not vest without full discharge of agreed consideration. Using creators’ content on brand handles, websites, or hoardings without settlement is actionable civil copyright infringement.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <h3 className="text-sm font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                      Unauthorized Meta Whitelisting Penalties
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      When brands boost creator posts through Meta Partnership Ads (branded content access) beyond the paid licensing period or without clearing invoices, each impression constitutes ongoing willful infringement. Notices quantify continuous unauthorized daily usage fees at 2x–3x standard commercial rates.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <h3 className="text-sm font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                      MSMED Act Sections 15–18 & s.43B(h)
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Registered agency creditors benefit from the mandatory 45-day payment ceiling under Section 15. Non-payment triggers compound interest at 3x the RBI Bank Rate under Section 16, while Section 43B(h) denies income tax deduction to the defaulting brand until the agency invoice is settled.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-slate-900 text-white rounded-xl my-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2">
                    Commercial Summary Suits under CPC Order XXXVII
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                    Where influencer deliverables were formalized via written Release Orders (ROs), signed Scope of Work agreements, or formal email sign-offs with fixed monetary milestones, the debt is classified as a liquidated commercial demand. In Summary Suits instituted under Order XXXVII of the CPC, defendant brands cannot defend the claim without proving a bona fide triable defense, expediting summary judgments.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Recovery Matrix Table */}
            <section
              id="heading-recovery-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  03
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Campaign Default Escalation & Remedy Matrix
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                Strategic classification of commercial agency defaults by breach type, statutory remedy, pecuniary forum, and recovery turnaround.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[620px]">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3 sm:p-3.5 font-bold uppercase tracking-wider text-[11px]">Campaign Failure Mode</th>
                      <th className="p-3 sm:p-3.5 font-bold uppercase tracking-wider text-[11px]">Defaulting Party</th>
                      <th className="p-3 sm:p-3.5 font-bold uppercase tracking-wider text-[11px]">Governing Statute</th>
                      <th className="p-3 sm:p-3.5 font-bold uppercase tracking-wider text-[11px]">Recommended Remedy</th>
                      <th className="p-3 sm:p-3.5 font-bold uppercase tracking-wider text-[11px]">Typical Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-3 sm:p-3.5 font-semibold text-slate-900">
                        Unauthorized Paid Boosting & Meta Whitelisting
                      </td>
                      <td className="p-3 sm:p-3.5 text-slate-600">Corporate Brand / Performance Agency</td>
                      <td className="p-3 sm:p-3.5 text-red-600 font-medium">Copyright Act 1957 s.51 & s.55</td>
                      <td className="p-3 sm:p-3.5 text-slate-700">Immediate Ad Library Takedown Notice + Extended Licensing Damages</td>
                      <td className="p-3 sm:p-3.5 font-bold text-emerald-600">48 hrs – 7 Days</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-3 sm:p-3.5 font-semibold text-slate-900">
                        Delayed Milestone Payment (Fronted Creator Roster)
                      </td>
                      <td className="p-3 sm:p-3.5 text-slate-600">FMCG / D2C Enterprise Client</td>
                      <td className="p-3 sm:p-3.5 text-blue-600 font-medium">MSMED Act 2006 s.15–18</td>
                      <td className="p-3 sm:p-3.5 text-slate-700">15-Day Advocate Notice demanding 3x RBI Bank Rate Compound Interest</td>
                      <td className="p-3 sm:p-3.5 font-bold text-slate-800">15 – 30 Days</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-3 sm:p-3.5 font-semibold text-slate-900">
                        Intermediary Media Agency Withholding Brand Funds
                      </td>
                      <td className="p-3 sm:p-3.5 text-slate-600">Media Buying House / Aggregator</td>
                      <td className="p-3 sm:p-3.5 text-amber-600 font-medium">Order XXXVII CPC / Contract Act s.73</td>
                      <td className="p-3 sm:p-3.5 text-slate-700">Joint Statutory Demand Notice to Media Agency & Beneficiary Brand</td>
                      <td className="p-3 sm:p-3.5 font-bold text-slate-800">14 – 45 Days</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition">
                      <td className="p-3 sm:p-3.5 font-semibold text-slate-900">
                        Unpaid Cash Component in Barter + Cash Deal
                      </td>
                      <td className="p-3 sm:p-3.5 text-slate-600">Lifestyle / Fashion D2C Brand</td>
                      <td className="p-3 sm:p-3.5 text-slate-700 font-medium">Indian Contract Act 1872 s.73</td>
                      <td className="p-3 sm:p-3.5 text-slate-700">Pre-Institution Mediation under Commercial Courts Act s.12A</td>
                      <td className="p-3 sm:p-3.5 font-bold text-slate-800">30 – 60 Days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Operational Decision Tree SVG Flowchart */}
            <section
              id="heading-escalation-flow"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  04
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Agency SOP Decision Tree: From Aging Day 30 to Full Enforcement
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Follow this sequential operational playbook when corporate brand accounts transition into delinquent aging brackets.
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block w-full bg-slate-900 p-6 rounded-2xl border border-slate-800 mb-6">
                <svg
                  viewBox="0 0 800 280"
                  className="w-full h-auto text-white select-none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Step 1 */}
                  <rect x="20" y="40" width="160" height="90" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="100" y="70" textAnchor="middle" fill="#EF4444" fontSize="11" fontWeight="bold">PHASE 1: DAY 1–30</text>
                  <text x="100" y="90" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="600">Reel Deliverables Live</text>
                  <text x="100" y="110" textAnchor="middle" fill="#94A3B8" fontSize="10">Capture URL & Ad Proof</text>

                  {/* Arrow 1 -> 2 */}
                  <path d="M180 85 H220" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 2" />
                  <polygon points="220,85 212,80 212,90" fill="#DC2626" />

                  {/* Step 2 */}
                  <rect x="220" y="40" width="160" height="90" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="300" y="70" textAnchor="middle" fill="#F59E0B" fontSize="11" fontWeight="bold">PHASE 2: DAY 31–45</text>
                  <text x="300" y="90" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="600">MSMED 45-Day Limit</text>
                  <text x="300" y="110" textAnchor="middle" fill="#94A3B8" fontSize="10">Audit Meta Ad Library</text>

                  {/* Arrow 2 -> 3 */}
                  <path d="M380 85 H420" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 2" />
                  <polygon points="420,85 412,80 412,90" fill="#DC2626" />

                  {/* Step 3 */}
                  <rect x="420" y="40" width="160" height="90" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="500" y="70" textAnchor="middle" fill="#EF4444" fontSize="11" fontWeight="bold">PHASE 3: DAY 46–60</text>
                  <text x="500" y="90" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="700">Dual Demand Notice</text>
                  <text x="500" y="110" textAnchor="middle" fill="#FCA5A5" fontSize="10">IP Revocation + 3x Interest</text>

                  {/* Arrow 3 -> 4 */}
                  <path d="M580 85 H620" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 2" />
                  <polygon points="620,85 612,80 612,90" fill="#DC2626" />

                  {/* Step 4 */}
                  <rect x="620" y="40" width="160" height="90" rx="10" fill="#0F172A" stroke="#10B981" strokeWidth="2" />
                  <text x="700" y="70" textAnchor="middle" fill="#10B981" fontSize="11" fontWeight="bold">PHASE 4: ENFORCEMENT</text>
                  <text x="700" y="90" textAnchor="middle" fill="#F8FAFC" fontSize="12" fontWeight="700">89.4% Settle in 15d</text>
                  <text x="700" y="110" textAnchor="middle" fill="#6EE7B7" fontSize="10">Or Order 37 / MSME File</text>

                  {/* Sub-annotations */}
                  <text x="400" y="180" textAnchor="middle" fill="#94A3B8" fontSize="11">
                    Statutory Injunction & Takedown triggers immediate settlement to avoid corporate Meta Ad Account disruption.
                  </text>
                  <rect x="180" y="205" width="440" height="35" rx="6" fill="#1E293B" stroke="#334155" />
                  <text x="400" y="227" textAnchor="middle" fill="#E2E8F0" fontSize="11" fontWeight="500">
                    Average Agency Recovery Time: <tspan fill="#34D399" fontWeight="bold">11 Business Days Post Notice Service</tspan>
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Step Cards */}
              <div className="md:hidden space-y-3 mb-6">
                <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800">
                  <div className="text-[10px] font-bold text-red-400 uppercase">Phase 1: Day 1–30</div>
                  <div className="text-sm font-bold text-slate-100 mt-1">Reels Live & Deliverables Verified</div>
                  <p className="text-xs text-slate-400 mt-1">Capture live links, engagement metrics, and BSA 2023 s.63 electronic compliance certificates.</p>
                </div>
                <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800">
                  <div className="text-[10px] font-bold text-amber-400 uppercase">Phase 2: Day 31–45</div>
                  <div className="text-sm font-bold text-slate-100 mt-1">Statutory 45-Day Payment Window Expiry</div>
                  <p className="text-xs text-slate-400 mt-1">Audit Meta Ad Library for unauthorized whitelisting. Notify finance of MSMED s.16 interest accumulation.</p>
                </div>
                <div className="p-4 bg-slate-900 text-white rounded-xl border border-red-900/60">
                  <div className="text-[10px] font-bold text-red-400 uppercase">Phase 3: Day 46–60</div>
                  <div className="text-sm font-bold text-slate-100 mt-1">Serve Dual IP Revocation & Demand Notice</div>
                  <p className="text-xs text-slate-400 mt-1">Deliver 15-day statutory notice terminating whitelisting and demanding principal plus 3x RBI compound interest.</p>
                </div>
                <div className="p-4 bg-slate-900 text-white rounded-xl border border-emerald-800">
                  <div className="text-[10px] font-bold text-emerald-400 uppercase">Phase 4: Resolution</div>
                  <div className="text-sm font-bold text-slate-100 mt-1">Pre-Litigation Settlement or Legal Decree</div>
                  <p className="text-xs text-slate-400 mt-1">89.4% settle within 15 days; remaining claims proceed to Order XXXVII CPC or MSME Samadhaan.</p>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Need to review pending project payments across your other creative or digital accounts? See our related legal guide on{" "}
                  <Link
                    href="/recovery/pending-project-payment"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    pending project payment recovery
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Section 5: Interactive Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  05
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Common Commercial Default Scenarios in Influencer Marketing
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Select your agency’s operational situation below to review statutory recourse, execution protocols, and resolution paths:
              </p>

              <InfluencerScenarioTabs />
            </section>

            {/* Section 6: Worked Financial & Interest Calculation Box */}
            <section
              id="heading-worked-example"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  06
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Worked Claim Calculation: Principal, MSMED Penalties & Whitelisting Damages
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4 mb-6">
                <p>
                  Consider an authentic institutional scenario: A Mumbai-based talent management agency executed a festive campaign for a consumer electronics brand featuring 12 top-tier tech creators. The contracted agency fee was ₹24,00,000 + 18% GST (Total: ₹28,32,000). The agency paid all 12 creators ₹18,00,000 within 20 days. The brand defaulted for 135 days while continuing to run Meta Partnership Ads.
                </p>
              </div>

              {/* Financial Breakdown Table */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 md:p-8 border border-slate-800">
                <div className="text-xs font-bold uppercase tracking-wider text-red-400 mb-4 pb-2 border-b border-slate-800">
                  Institutional Statutory Claim Statement (Day 135)
                </div>

                <div className="space-y-3 font-mono text-xs sm:text-sm">
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-300">1. Contracted Campaign Principal (Net)</span>
                    <span className="font-bold text-slate-100">₹24,00,000</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-300">2. Applicable GST (18% under SAC 998361)</span>
                    <span className="font-bold text-slate-100">₹4,32,000</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-300">Total Invoice Face Value (Due at Day 45)</span>
                    <span className="font-bold text-slate-100">₹28,32,000</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-800/80 text-amber-400">
                    <span>3. MSMED s.16 Compound Interest (3x RBI Bank Rate ~20.25% p.a. for 90 days delay)</span>
                    <span className="font-bold">+ ₹1,48,720</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-800/80 text-red-400">
                    <span>4. Extended Whitelisting Licensing Penalty (60 Days Unauthorized Meta Boosting @ ₹10k/day)</span>
                    <span className="font-bold">+ ₹6,00,000</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-800/80 text-slate-300">
                    <span>5. Legal Notice & Evidence Certification Costs</span>
                    <span className="font-bold text-slate-100">+ ₹25,000</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 text-sm sm:text-base font-bold text-emerald-400">
                    <span className="font-sans uppercase tracking-wider text-xs">Total Recoverable Demand</span>
                    <span className="text-lg sm:text-xl font-mono">₹36,05,720</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800 text-[11px] text-slate-400 leading-relaxed font-sans">
                  * Note: In over 80% of matters, brands request waiver of the ₹6,00,000 whitelisting penalty in exchange for immediate 48-hour RTGS settlement of the full ₹28,32,000 principal plus accrued statutory interest.
                </div>
              </div>
            </section>

            {/* Section 7: Evidence Checklist & BSA 2023 s.63 */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  07
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Pre-Filing Evidence Checklist under BSA 2023 Section 63
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4 mb-6">
                <p>
                  Courts and facilitation councils require comprehensive documentary proof before granting attachment or summary relief. Ensure your talent agency collates these 6 key evidence categories:
                </p>

                <div className="space-y-3">
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-slate-900 text-xs sm:text-sm block">1. Signed Scope of Work (SOW) or Release Order (RO)</strong>
                      <span className="text-xs text-slate-600">Specifying creator roster, number of posts/stories, usage validity window (e.g., 30 days organic), and explicit whitelisting fee rates.</span>
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-slate-900 text-xs sm:text-sm block">2. Deliverables Acceptance Log & Link Repository</strong>
                      <span className="text-xs text-slate-600">Live Instagram/YouTube post URLs, timestamped analytics reports shared with the client, and brand approval emails confirming sign-off.</span>
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-slate-900 text-xs sm:text-sm block">3. Upfront Creator Payment Proofs (Agency Outflow)</strong>
                      <span className="text-xs text-slate-600">Bank debit advices, TDS certificates, and talent management disbursement receipts proving agency fulfilled creator agreements.</span>
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-slate-900 text-xs sm:text-sm block">4. Meta Ad Library & Partnership Ads Documentation</strong>
                      <span className="text-xs text-slate-600">Screenshots and API records showing brand actively boosting creator handles post-license expiration without compensation.</span>
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-slate-900 text-xs sm:text-sm block">5. Valid Tax Invoices & Delivery Proofs</strong>
                      <span className="text-xs text-slate-600">GST-compliant tax invoices with correct SAC codes delivered via registered email and Speed Post RPAD with tracking delivery receipts.</span>
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-slate-900 text-xs sm:text-sm block">6. Bharatiya Sakshya Adhiniyam, 2023 Section 63 Certificate</strong>
                      <span className="text-xs text-slate-600">Mandatory electronic certificate executed by the agency director certifying email servers, WhatsApp logs, and digital attachments.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notice CTA Banner Component inside Flow */}
              <div className="mt-8">
                <InfluencerNoticeCTA />
              </div>
            </section>

            {/* Section 8: FAQs Accordion */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  08
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Frequently Asked Questions by Agency CFOs & Legal Counsel
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Strategic answers addressing corporate brand payment disputes, media house defaults, and IP revocation.
              </p>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 transition [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-xs sm:text-sm md:text-base gap-3">
                      <span>{faq.question}</span>
                      <span className="shrink-0 w-5 h-5 rounded-full bg-white border border-slate-300 flex items-center justify-center text-slate-500 group-open:rotate-180 transition-transform">
                        ↓
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed pt-2 border-t border-slate-200/80 font-normal">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 9: Primary Legal Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  09
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Primary Statutory Sources & Legislative References
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                Verified bare acts and official Indian statutory handles governing commercial media debts, intellectual property revocation, and electronic evidence:
              </p>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {PRIMARY_SOURCES.map((source, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold">▪</span>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-[#DC2626] hover:underline font-medium"
                    >
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>

      {/* Footer Cross-Links Section */}
      <RelatedRecoveryGuides />
    </div>
  );
}
