import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import BanquetTableOfContents from "./BanquetTableOfContents";
import BanquetScenarioTabs from "./BanquetScenarioTabs";
import BanquetNoticeCTA from "./BanquetNoticeCTA";
import {
  ShieldAlert,
  AlertTriangle,
  FileCheck2,
  Scale,
  Clock,
  Building2,
  ArrowRight,
  HelpCircle,
  ExternalLink,
  CheckCircle2,
  Wine,
  IndianRupee,
  Calculator,
  FileText,
} from "lucide-react";

export const revalidate = 86400;

const PAGE_URL = "/banquet-hall-destination-wedding-post-event-balance-cheque-bounce";
const H1_TITLE =
  "Wedding Over, Guests Gone—and the Host Issued 'Stop Payment' on the ₹12 Lakh Extra-Pax & Bar Balance Cheque! Venue Recovery Playbook";
const META_TITLE = "Wedding Host Stopped Payment on Banquet / Resort Bill? Fix";
const META_DESCRIPTION =
  "Wedding host blocked your banquet or resort balance cheque? Recover extra-pax & bar dues under NI Act s.138, s.143A & Contract Act s.74 fast.";

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
        alt: formatAltText("Banquet Hall and Destination Wedding Balance Cheque Bounce Recovery"),
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
    title: "Negotiable Instruments Act, 1881 (Sections 138, 139, 142 & 143A — Cheque Dishonour & 20% Interim Compensation)",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title: "The Indian Contract Act, 1872 (Sections 70 & 74 — Non-Gratuitous Services & Liquidated Damages for Min-Pax)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Admissibility of CCTV, POS KOTs & Electronic Records)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Code of Civil Procedure, 1908 (Order XXXVII — Summary Suits on Signed Banquet Contracts & Dishonoured Cheques)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15–18 — Compound Interest at 3x RBI Bank Rate)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
];

const PRECEDENTS = [
  {
    caseName: "MMTC Ltd. v. Medchl Chemicals & Pharma (P) Ltd.",
    citation: "(2002) 1 SCC 234",
    court: "Supreme Court of India",
    year: "2002",
    summary:
      "Held that even when a cheque is dishonoured on account of 'Stop Payment' instructions issued by the drawer, Section 138 NI Act is squarely attracted. The burden lies entirely on the accused host to prove at trial that there was sufficient balance and that the stop-payment instruction was issued for a valid, bona fide reason showing no existing debt.",
  },
  {
    caseName: "Bir Singh v. Mukesh Kumar",
    citation: "(2019) 4 SCC 197",
    court: "Supreme Court of India",
    year: "2019",
    summary:
      "Reaffirmed that if a signed cheque—including a post-dated or blank-amount checkout cheque handed over by a host for final folio reconciliation—is voluntarily delivered, the statutory presumption under Section 139 NI Act applies in full force against the drawer.",
  },
  {
    caseName: "Rangappa v. Sri Mohan",
    citation: "(2010) 11 SCC 441",
    court: "Supreme Court of India",
    year: "2010",
    summary:
      "Authoritatively settled that the presumption mandated by Section 139 NI Act includes a presumption that there exists a legally enforceable debt or liability. Post-event allegations of 'cold food' or 'poor service' cannot displace this statutory presumption without contemporaneous proof.",
  },
];

const FAQS = [
  {
    q: "Does a 'Stop Payment' instruction by the wedding host escape Section 138 NI Act liability?",
    a: "No. In MMTC Ltd. v. Medchl Chemicals & Pharma (P) Ltd. (2002) 1 SCC 234, the Supreme Court categorically held that dishonour due to 'Stop Payment' attracts Section 138 NI Act just like 'Insufficient Funds'. To escape criminal liability, the wedding host must prove that sufficient funds existed in the account AND that no legally enforceable debt was owed on the presentation date.",
  },
  {
    q: "The host alleges 'cold food' or 'bad AC' the morning after the wedding to justify stopping the cheque. Will a court accept this?",
    a: "Courts treat uncorroborated post-event quality complaints raised only after cheque dishonour as an afterthought or moonshine defense. If the host signed the Banquet Event Order (BEO), accepted service through the pheras and reception without logging a contemporaneous written objection, and handed over a checkout cheque, signed Event Captain extra-pax slips and POS KOTs defeat the 'cold food' excuse.",
  },
  {
    q: "What is the strict statutory deadline to send the Section 138 legal notice after bank dishonour?",
    a: "Under Section 138(b) of the Negotiable Instruments Act, the banquet venue or resort must dispatch a written statutory demand notice within strictly 30 days from the date of receipt of the Bank Return Memo. The host then gets 15 days from receipt of the notice to clear the ₹12 Lakh balance; if unpaid, you have 30 days thereafter to file the criminal complaint.",
  },
  {
    q: "Can a destination wedding resort claim 20% interim compensation immediately while the case is pending?",
    a: "Yes. Under Section 143A of the NI Act (inserted by the 2018 Amendment), the Magistrate can order the accused wedding host to pay interim compensation up to 20% of the dishonoured cheque amount within 60 days (extendable by 30 days) once the accused pleads not guilty. On a ₹12 Lakh cheque, that means ₹2.40 Lakh upfront relief.",
  },
  {
    q: "What if the host only gave a guarantee cheque before the wedding and our accounts team filled the extra-pax total at checkout?",
    a: "Under Section 20 of the NI Act and Bir Singh v. Mukesh Kumar (2019) 4 SCC 197, handing over a signed blank or security cheque authorizes the payee to fill in the crystallized liability amount (extra plates, bar tally, room extras) as per the signed Banquet Event Order. The Section 139 presumption still protects the venue.",
  },
  {
    q: "Can we recover Minimum Pax Guarantee shortfalls and resort buyout damages alongside the bounced cheque?",
    a: "Yes. While NI Act Section 138 enforces the exact dishonoured cheque amount with criminal leverage (up to 2 years imprisonment and fine up to twice the cheque amount), you can concurrently file an Order XXXVII CPC Summary Suit or Commercial Suit invoking Contract Act Section 74 (liquidated damages for minimum-pax attrition) and Section 70 (quantum meruit for extra rooms/bar).",
  },
];

export default function BanquetChequeBounceRecoveryPage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: H1_TITLE,
    description: META_DESCRIPTION,
    image: `${SITE_URL}/blog_money_recovery.png`,
    author: {
      "@type": "Person",
      name: "Anuj Anand Malik",
      jobTitle: "Advocate & Founder, AMA Legal Solutions",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "LegalRecovery.in",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    datePublished: "2026-11-18T09:45:00+05:30",
    dateModified: "2026-11-18T09:45:00+05:30",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${PAGE_URL}`,
    },
  };

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Banquet Halls & Wedding Resorts Recover Stopped Post-Event Balance Cheques",
    description:
      "Operational 72-hour evidence preservation and Section 138 NI Act recovery playbook for venues facing post-wedding cheque stop-payments.",
    step: [
      {
        "@type": "HowToStep",
        name: "Step 1: Secure Original Bank Return Memo & Preserve CCTV/POS Evidence",
        text: "Collect the stamped Bank Return Memo ('Payment Stopped by Drawer') and export entrance CCTV, wristband/plate-counter logs, and bar POS KOTs with a BSA 2023 s.63 certificate before NVR auto-overwrite.",
      },
      {
        "@type": "HowToStep",
        name: "Step 2: Lock Extra-Pax & Bar Consumption Audit Trail",
        text: "Collate the signed Banquet Event Order (BEO), Event Captain extra-pax slips, countersigned bar bottle-count tallies, and checkout WhatsApp confirmations.",
      },
      {
        "@type": "HowToStep",
        name: "Step 3: Serve Mandatory 15-Day Statutory Notice under NI Act s.138",
        text: "Within 30 days of the Return Memo, dispatch an Advocate-drafted demand notice via Speed Post RPAD, Email, and WhatsApp invoking NI Act s.138, s.143A, and Contract Act s.74.",
      },
      {
        "@type": "HowToStep",
        name: "Step 4: File Dual Criminal (s.138) + Civil (Order XXXVII CPC) Action",
        text: "If unpaid after 15 days of service, initiate s.138 prosecution seeking 20% interim compensation under s.143A alongside an Order XXXVII Summary Suit for interest and buyout damages.",
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

  const jsonLdBreadcrumb = {
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
        name: "Hotels, Banquets & Corporate Travel Recovery",
        item: `${SITE_URL}/industries/hotels-banquets-corporate-travel-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Banquet & Destination Wedding Balance Cheque Bounce Recovery",
        item: `${SITE_URL}${PAGE_URL}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* JSON-LD Schemas */}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <Wine className="w-3.5 h-3.5" /> IND-16 Hospitality &amp; Venue Recovery · NI Act s.138 &amp; s.143A
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {H1_TITLE}
          </h1>

          {/* Executive Statutory Summary Box (40-60 words + inline parent Hub link) */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Under our{" "}
            <Link
              href="/industries/hotels-banquets-corporate-travel-recovery"
              className="text-red-400 underline hover:text-red-300 font-bold"
            >
              IND-16 Hotels, Banquets &amp; Corporate Travel Recovery Playbook
            </Link>
            , a wedding host&apos;s &quot;Stop Payment&quot; instruction on a post-event balance cheque is legally identical to cheque bounce under NI Act s.138. Signed Event Captain extra-pax slips, bar KOTs, and CCTV logs destroy next-morning &quot;cold food&quot; excuses and unlock 20% interim compensation under s.143A.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <div className="text-lg sm:text-2xl font-black text-red-400">30 Days</div>
              <div className="text-[10px] sm:text-xs text-slate-400">
                Strict s.138 Notice Window from Bank Return Memo
              </div>
            </div>
            <div>
              <div className="text-lg sm:text-2xl font-black text-emerald-400">20% Upfront</div>
              <div className="text-[10px] sm:text-xs text-slate-400">
                Interim Compensation via NI Act s.143A Motion
              </div>
            </div>
            <div>
              <div className="text-lg sm:text-2xl font-black text-amber-400">2x Fine + 2 Yr</div>
              <div className="text-[10px] sm:text-xs text-slate-400">
                Maximum Penal Exposure on Stopped Venue Cheque
              </div>
            </div>
            <div>
              <div className="text-lg sm:text-2xl font-black text-slate-100">BSA s.63</div>
              <div className="text-[10px] sm:text-xs text-slate-400">
                CCTV, POS KOTs &amp; Plate Logs Admissibility Shield
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Hotels, Banquets & Travel Recovery",
                href: "/industries/hotels-banquets-corporate-travel-recovery",
              },
              {
                label: "Banquet & Wedding Balance Cheque Bounce",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        {/* 2-Column Split */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <BanquetTableOfContents />

          {/* Main Editorial Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1 */}
            <section
              id="stop-payment-law"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Why &quot;Stop Payment&quot; After Pheras Is Criminal Dishonour
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                Every peak shaadi season across Udaipur, Jaipur, Goa, Jim Corbett, and metro convention halls, destination wedding resorts and luxury caterers face the exact same ambush. The host family books a 350-pax package, begs the Banquet Manager during the baraat and pheras to accommodate 150 unannounced guests, opens extra live chaat and imported liquor counters, and signs a 3:00 AM checkout folio with a post-event balance cheque—often ₹10 Lakh to ₹25 Lakh.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                By 10:00 AM the next morning, once the wedding party and gifts have checked out, the host instructs their bank to mark the cheque <strong>&quot;Payment Stopped by Drawer&quot;</strong> and fires off a WhatsApp message alleging &quot;cold starters,&quot; &quot;slow service,&quot; or &quot;inflated headcount.&quot; Many venue promoters mistakenly assume a stop-payment dispute is purely civil and settle for a 40% haircut.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Indian criminal jurisprudence shuts that tactic down completely. Unlike consumer cancellation claims (for example, families seeking booking refunds under{" "}
                <Link
                  href="/marriage-hall-banquet-booking-cancellation-refund"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  cancellation refund rules
                </Link>
                ), here the venue has already delivered the venue buyout, F&amp;B plates, and bar stock in full. Under Section 138 of the Negotiable Instruments Act, 1881, a &quot;Stop Payment&quot; return memo triggers criminal prosecution identically to &quot;Insufficient Funds,&quot; shifting the evidentiary burden onto the host under Section 139.
              </p>

              <div className="bg-slate-900 text-slate-100 rounded-xl p-5 flex items-start gap-3">
                <Scale className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm leading-relaxed">
                  <strong className="text-white block mb-1">
                    Creditor Rule of Thumb (Section 139 NI Act):
                  </strong>
                  Once the host&apos;s signature on the checkout cheque is admitted, the court presumes a legally enforceable debt of ₹12 Lakh existed. A belated &quot;cold food&quot; WhatsApp sent after checkout cannot rebut that presumption without contemporaneous event-night complaint records.
                </div>
              </div>
            </section>

            {/* Section 2: Decision Tree SVG + Mobile Cards */}
            <section
              id="decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  72-Hour Venue Recovery Decision Tree &amp; s.138 Escalation
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Speed determines whether your venue recovers 100% of the balance cheque or gets dragged into a 3-year civil suit. Follow this exact escalation sequence from the moment the bank returns the cheque.
              </p>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block overflow-x-auto bg-slate-950 rounded-2xl p-5 border border-slate-800 mb-4">
                <svg
                  width={840}
                  height={310}
                  viewBox="0 0 840 310"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Banquet Hall Stop Payment Cheque Recovery Decision Tree"
                  className="w-full h-auto"
                >
                  {/* Node 1 */}
                  <rect x="20" y="25" width="180" height="82" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="110" y="50" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">STAGE 1 (HOUR 0–24)</text>
                  <text x="110" y="70" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Bank Return Memo:</text>
                  <text x="110" y="88" textAnchor="middle" fill="#CBD5E1" fontSize="11">&quot;Payment Stopped&quot;</text>

                  <path d="M200 66 L235 66" stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow)" />

                  {/* Node 2 */}
                  <rect x="235" y="25" width="185" height="82" rx="12" fill="#1E293B" stroke="#F59E0B" strokeWidth="2" />
                  <text x="327" y="50" textAnchor="middle" fill="#FBBF24" fontSize="11" fontWeight="bold">STAGE 2 (HOUR 24–72)</text>
                  <text x="327" y="70" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Freeze Digital Proof</text>
                  <text x="327" y="88" textAnchor="middle" fill="#CBD5E1" fontSize="11">CCTV + POS KOT + BSA s.63</text>

                  <path d="M420 66 L455 66" stroke="#94A3B8" strokeWidth="2" />

                  {/* Node 3 */}
                  <rect x="455" y="25" width="180" height="82" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="545" y="50" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">STAGE 3 (WITHIN 30 DAYS)</text>
                  <text x="545" y="70" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Serve s.138 Notice</text>
                  <text x="545" y="88" textAnchor="middle" fill="#CBD5E1" fontSize="11">RPAD + Email + WhatsApp</text>

                  <path d="M635 66 L670 66" stroke="#94A3B8" strokeWidth="2" />

                  {/* Node 4 */}
                  <rect x="670" y="25" width="150" height="82" rx="12" fill="#064E3B" stroke="#10B981" strokeWidth="2" />
                  <text x="745" y="50" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="bold">15-DAY CURE WINDOW</text>
                  <text x="745" y="70" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Host Pays Full</text>
                  <text x="745" y="88" textAnchor="middle" fill="#A7F3D0" fontSize="11">Balance + Costs</text>

                  {/* Downward branch from Stage 4 if unpaid */}
                  <path d="M745 107 L745 165 L545 165 L545 190" stroke="#EF4444" strokeWidth="2" />
                  <text x="650" y="155" textAnchor="middle" fill="#FCA5A5" fontSize="11" fontWeight="bold">UNPAID AFTER 15 DAYS</text>

                  {/* Track A: Criminal */}
                  <rect x="110" y="190" width="300" height="92" rx="12" fill="#450A0A" stroke="#DC2626" strokeWidth="2" />
                  <text x="260" y="216" textAnchor="middle" fill="#FCA5A5" fontSize="11" fontWeight="bold">TRACK A: CRIMINAL PROSECUTION</text>
                  <text x="260" y="236" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">NI Act s.138 Complaint + s.143A</text>
                  <text x="260" y="256" textAnchor="middle" fill="#FECACA" fontSize="11">20% Interim Order + Summons / NBW</text>
                  <text x="260" y="272" textAnchor="middle" fill="#FECACA" fontSize="10">File within 30 days of 15-day expiry</text>

                  {/* Track B: Civil */}
                  <rect x="440" y="190" width="340" height="92" rx="12" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" />
                  <text x="610" y="216" textAnchor="middle" fill="#7DD3FC" fontSize="11" fontWeight="bold">TRACK B: PARALLEL CIVIL RECOVERY</text>
                  <text x="610" y="236" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Order XXXVII CPC Summary Suit</text>
                  <text x="610" y="256" textAnchor="middle" fill="#BAE6FD" fontSize="11">Enforce Min-Pax (s.74) + Damages + 18% Int.</text>
                  <text x="610" y="272" textAnchor="middle" fill="#BAE6FD" fontSize="10">No leave to defend without triable proof</text>
                </svg>
              </div>

              {/* Mobile Stacked Flow Cards */}
              <div className="md:hidden space-y-3">
                {[
                  {
                    step: "Hour 0–24",
                    title: "Collect Bank Return Memo ('Payment Stopped')",
                    desc: "Verify cheque date, presentation date, and bank stamp. Never accept verbal promises to 're-present next week' without written acknowledgement.",
                  },
                  {
                    step: "Hour 24–72",
                    title: "Freeze CCTV, Plate Logs & Bar KOTs (BSA s.63)",
                    desc: "Export main gate CCTV, guest wristband count, and POS bar/kitchen KOTs before NVR 7-day auto-deletion.",
                  },
                  {
                    step: "Within 30 Days",
                    title: "Dispatch Mandatory NI Act s.138 Legal Notice",
                    desc: "Serve Advocate demand notice via Speed Post RPAD, Email, and WhatsApp. Refer to our Section 138 notice timeline guide.",
                  },
                  {
                    step: "Post 15-Day Expiry",
                    title: "Dual Filing: s.138 + s.143A & Order XXXVII CPC",
                    desc: "Claim 20% interim compensation immediately in Magistrate court while suing for min-pax shortfalls and property damage.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">
                      {item.step}
                    </span>
                    <h3 className="text-sm font-bold text-white mt-0.5 mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mt-4">
                Need exact statutory day-counting rules? Review our{" "}
                <Link
                  href="/cheque-bounce-notice-timeline-section-138"
                  className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                >
                  Section 138 Cheque Bounce Notice Timeline (30 + 15 Day Rule)
                </Link>
                .
              </p>
            </section>

            {/* Section 3: Statutory Matrix & Precedents */}
            <section
              id="statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Statutory &amp; Judicial Precedent Matrix for Wedding Venues
                </h2>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200 mb-8">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold">Statute / Provision</th>
                      <th className="p-3.5 font-bold">Hospitality Application</th>
                      <th className="p-3.5 font-bold">Statutory Timeline / Relief</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">NI Act, 1881 — s.138</td>
                      <td className="p-3.5 text-slate-700">
                        Stopped post-event extra-pax, bar, or buyout balance cheque
                      </td>
                      <td className="p-3.5 text-slate-700">
                        30d notice; 15d cure; up to 2 yrs jail + 2x cheque fine
                      </td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">NI Act, 1881 — s.143A</td>
                      <td className="p-3.5 text-slate-700">
                        Immediate cashflow relief when host pleads &quot;cold food&quot; at trial
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        Up to 20% interim compensation payable within 60–90 days
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Contract Act — s.74</td>
                      <td className="p-3.5 text-slate-700">
                        Enforcing Minimum Guaranteed Pax &amp; Room Block Attrition clauses
                      </td>
                      <td className="p-3.5 text-slate-700">
                        Reasonable liquidated damages up to contracted BEO slab
                      </td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">CPC Order XXXVII</td>
                      <td className="p-3.5 text-slate-700">
                        Summary Suit on signed BEO, checkout folio &amp; dishonoured cheque
                      </td>
                      <td className="p-3.5 text-slate-700">
                        10-day appearance rule; host cannot defend without court leave
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">MSMED Act — s.15–18</td>
                      <td className="p-3.5 text-slate-700">
                        Udyam-registered boutique resorts, caterers &amp; banquet operators
                      </td>
                      <td className="p-3.5 text-emerald-700 font-semibold">
                        45-day payment cap + 3x RBI Bank Rate compound interest
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-4">
                Binding Supreme Court Precedents Protecting Venues
              </h3>
              <div className="space-y-4">
                {PRECEDENTS.map((p) => (
                  <div
                    key={p.caseName}
                    className="border border-slate-200 rounded-xl p-4 sm:p-5 bg-slate-50 relative overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]" />
                    <div className="pl-3">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                        <h4 className="text-sm sm:text-base font-extrabold text-slate-900">
                          {p.caseName}
                        </h4>
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-800">
                          {p.citation} · {p.court}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {p.summary}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Interactive Scenario Tabs */}
            <section
              id="failure-modes"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  4 Post-Wedding Dispute Modes &amp; How Venue Proof Wins
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Select your exact wedding billing failure mode below to inspect the statutory hook and immediate operational counter-move.
              </p>

              <BanquetScenarioTabs />
            </section>

            {/* Section 5: BSA 2023 s.63 Evidence Checklist */}
            <section
              id="evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Banquet Evidence &amp; BSA 2023 s.63 Digital Proof SOP
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Most resort NVR systems overwrite CCTV footage every 7 to 14 days. Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), digital headcount and POS records are admissible only when backed by a signed Section 63 certificate from your IT/Banquet Operations Manager. Lock these 6 items immediately:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "1. Signed Banquet Event Order (BEO) & Master Folio",
                    detail:
                      "Must show guaranteed minimum pax, per-plate extra slab rate, corkage/IMFL terms, and host's checkout signature.",
                  },
                  {
                    step: "2",
                    title: "2. Event Captain Extra-Pax & Live Counter Slips",
                    detail:
                      "Time-stamped kitchen release slips countersigned during the reception by the host's family coordinator or wedding planner.",
                  },
                  {
                    title: "3. CCTV Entrance & Buffet Plate-Counter Footage",
                    detail:
                      "Export raw MP4 clips of baraat entry, dining hall occupancy, and plate-stack counts onto immutable storage with SHA-256 hash.",
                  },
                  {
                    title: "4. Wristband / QR Entry & Bar POS KOT Logs",
                    detail:
                      "RFID/wristband scan tallies, bar empty-bottle closing sheets, and excise stock deduction registers.",
                  },
                  {
                    title: "5. Original Cheque & Stamped Bank Return Memo",
                    detail:
                      "Preserve the physical dishonoured cheque and bank memo stating 'Payment Stopped by Drawer'—essential for s.138 filing.",
                  },
                  {
                    title: "6. WhatsApp / Email Approvals + BSA s.63 Certificate",
                    detail:
                      "Export full WhatsApp chat threads approving extra rooms/liquor along with a BSA s.63 electronic record certificate.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50"
                  >
                    <FileCheck2 className="w-5 h-5 text-[#DC2626] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 6: Worked Financial Calculation */}
            <section
              id="financial-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Worked Recovery Ledger: ₹12 Lakh Stopped Wedding Cheque
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Here is the exact financial leverage a destination wedding resort or banquet venue commands when enforcing a ₹12,00,000 stopped checkout cheque through parallel NI Act s.138 + Order XXXVII / MSMED remedies:
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                    Claim Component
                  </span>
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                    Statutory Entitlement (₹)
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-slate-300">
                    Extra-Pax (150 plates @ ₹4,200) + Bar &amp; Incidentals Cheque
                  </span>
                  <span className="font-bold text-white">₹12,00,000</span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-slate-300">
                    NI Act s.143A Interim Compensation (20% upfront within 60–90 days)
                  </span>
                  <span className="font-bold text-emerald-400">₹2,40,000</span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-slate-300">
                    Contractual / Order XXXVII Interest @ 18% p.a. (for 12 months)
                  </span>
                  <span className="font-bold text-amber-400">₹2,16,000</span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm border-t border-slate-700 pt-3">
                  <span className="font-bold text-red-400">
                    Maximum NI Act s.138 Fine Exposure (Up to 2x Cheque Value)
                  </span>
                  <span className="font-black text-red-400 text-base">₹24,00,000</span>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/tools/msme-delayed-payment-interest-calculator"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold transition-colors border border-slate-200"
                >
                  <Calculator className="w-4 h-4 text-[#DC2626]" />
                  Calculate Udyam / MSME Compound Interest (3x RBI Rate)
                </Link>
                <Link
                  href="/templates/legal-notice-reply-format"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold transition-colors border border-slate-200"
                >
                  <FileText className="w-4 h-4 text-[#DC2626]" />
                  Inspect Commercial Notice &amp; Reply Clauses
                </Link>
              </div>
            </section>

            {/* Section 7: Dual-Track CTA */}
            <section id="dual-cta" className="scroll-mt-28">
              <BanquetNoticeCTA />
            </section>

            {/* Section 8: IND-16 Hub & Cross-Links */}
            <section
              id="hub-network"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  IND-16 Hospitality &amp; Commercial Recovery Network
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Explore our connected B2B recovery playbooks for hotels, convention venues, and multi-property hospitality chains:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "IND-16 Pillar Hub: Hotels, Banquets & Corporate Travel",
                    href: "/industries/hotels-banquets-corporate-travel-recovery",
                    desc: "Master recovery architecture for BTC corporate ledgers, IATA BSP defaults, OTA chargebacks, and banquet dues.",
                  },
                  {
                    title: "Section 138 Cheque Bounce Notice Timeline",
                    href: "/cheque-bounce-notice-timeline-section-138",
                    desc: "Exact 30-day notice, 15-day cure, and Magistrate jurisdiction rules for dishonoured business cheques.",
                  },
                  {
                    title: "B2B Business Dues & Commercial Recovery",
                    href: "/recovery/business-dues",
                    desc: "Summary suits under Order XXXVII CPC and commercial demand notices for unpaid B2B hospitality invoices.",
                  },
                  {
                    title: "Multi-Channel Notice Dispatch (Email + WhatsApp + RPAD)",
                    href: "/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution",
                    desc: "Simultaneous statutory service across Speed Post RPAD, WhatsApp, and Email with BSA s.63 delivery proofs.",
                  },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 hover:bg-white transition-all flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mb-1 flex items-center justify-between gap-2">
                        {link.title}
                        <ArrowRight className="w-4 h-4 shrink-0" />
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{link.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Section 9: FAQs */}
            <section
              id="faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Frequently Asked Questions: Wedding Cheque Stop-Payment
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.q}
                    className="group border border-slate-200 rounded-xl bg-slate-50 open:bg-white transition-colors"
                  >
                    <summary className="cursor-pointer list-none p-4 font-bold text-xs sm:text-sm text-slate-900 flex items-center justify-between gap-3">
                      <span className="flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-[#DC2626] shrink-0" />
                        {faq.q}
                      </span>
                      <span className="text-slate-400 group-open:rotate-45 transition-transform text-lg leading-none">
                        +
                      </span>
                    </summary>
                    <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 10: Primary Sources & Advocate Attribution */}
            <section
              id="primary-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Statutory Authorities &amp; Official Bare Acts
                </h2>
              </div>

              <ul className="space-y-2.5 mb-6">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.url} className="flex items-start gap-2 text-xs sm:text-sm">
                    <ExternalLink className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>

              {/* TODO(reviewer): src/data/reviewers.ts is absent in this repository */}
              <div className="bg-slate-100 border border-slate-200 rounded-xl p-4 text-xs text-slate-600 leading-relaxed">
                <strong className="text-slate-900 block mb-1">
                  Legal Review &amp; Editorial Attribution
                </strong>
                Reviewed by <strong>Anuj Anand Malik</strong>, Advocate &amp; Founder, AMA Legal Solutions. This operational guide is designed for commercial hospitality creditors (banquet halls, destination wedding resorts, and luxury caterers) and does not constitute individual legal representation until a formal vakalatnama or notice engagement is executed.
              </div>
            </section>
          </article>
        </div>
      </main>

      {/* Footer Cross-Links */}
      <RelatedRecoveryGuides />
    </div>
  );
}
