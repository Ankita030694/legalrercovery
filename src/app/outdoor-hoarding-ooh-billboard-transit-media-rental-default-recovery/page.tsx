import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import OOHHoardingTableOfContents from "./OOHHoardingTableOfContents";
import OOHHoardingScenarioTabs from "./OOHHoardingScenarioTabs";
import OOHHoardingNoticeCTA from "./OOHHoardingNoticeCTA";

export const revalidate = 86400;

const PAGE_URL = "/outdoor-hoarding-ooh-billboard-transit-media-rental-default-recovery";
const EXACT_H1 =
  "OOH Hoarding, DOOH & Airport/Metro Media Owners: Recovering Overdue Campaign Display Rentals Using Geo-Tagged Monitoring Proof";
const META_TITLE = "OOH Hoarding, Billboard & Transit Media Unpaid Rental Recovery";
const META_DESCRIPTION =
  "OOH media owners pay fixed municipal concession fees monthly! Recover overdue billboard rentals using BSA s.63 geo-tagged logs and Order 37 Summary Suits.";

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
        alt: formatAltText("OOH Billboard Hoarding Transit Media Rental Default Recovery Playbook"),
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
    title: "The Code of Civil Procedure, 1908 (Order XXXVII — Summary Procedure upon Bills of Exchange, Hundis & Written Contracts)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility, Geo-Tagged Photographic Hashes & Section 104)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "The Commercial Courts Act, 2015 (Section 2(1)(c)(xviii) — Mercantile Agency Contracts & Section 12A Pre-Institution Mediation)",
    url: "https://www.indiacode.nic.in/handle/123456789/2146",
  },
  {
    title: "The Indian Contract Act, 1872 (Section 70 — Obligation to Pay for Non-Gratuitous Act & Section 73 — Breach Damages and Mitigation)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 (Sections 15 & 16 — Mandatory 45-Day Payment & Compound Interest)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "The Negotiable Instruments Act, 1881 (Section 138 — Dishonour of Cheque for Insufficiency of Funds & Section 141 Vicarious Liability)",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Electronic Geo-Tagged Photographs and Certificate Requirements for Proving Outdoor Display",
    parties: "Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal",
    citation: "(2020) 7 SCC 1, 3-Judge Bench, Supreme Court of India",
    date: "Judgment Dated 14 July 2020",
    facts:
      "A dispute arose regarding the admissibility of digital video recordings and electronic server records without contemporaneous production of physical capture hardware. The Supreme Court settled the interpretation of electronic evidence certificates (now embodied under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023).",
    holding:
      "The Supreme Court clarified that production of electronic records stored in servers, computers, or optical media is fully admissible in commercial trials when accompanied by a statutory certificate executed by the person in lawful management or operational control of the device or system. In OOH advertising disputes, geo-tagged date-and-time stamped photographs uploaded to cloud monitoring portals satisfy statutory admissibility when accompanied by the operational head's Section 63 BSA certificate, precluding debtors from concocting sham denials of display.",
    amount: "Doctrine of Electronic Proof & Certification Established",
    takeaway:
      "Debtors cannot deny outdoor hoarding display if daily date-stamped geo-tagged logs with camera EXIF metadata are authenticated under Section 63 BSA.",
  },
  {
    title: "Order XXXVII CPC Summary Suit Maintainable on Signed Release Orders and Invoices",
    parties: "IDBI Trusteeship Services Ltd. v. Hubtown Ltd.",
    citation: "(2017) 1 SCC 568, Supreme Court of India",
    date: "Judgment Dated 15 November 2016",
    facts:
      "A commercial creditor filed an Order XXXVII CPC summary recovery action based on corporate guarantees and executed debt covenants. The debtor sought unconditional leave to defend by raising illusory disputes regarding business downturn and market disruptions.",
    holding:
      "The Supreme Court laid down definitive principles governing leave to defend under Order 37 Rule 3 CPC: If the defendant has no substantial defense and raises moonshine or sham pleas, the plaintiff is entitled to immediate final judgment. If the defendant raises a triable issue, leave to defend can only be granted upon condition of substantial pre-deposit of the admitted debt in court. For OOH media owners, signed Media Release Orders, accompanied by tax invoices and accepted delivery proofs, constitute written contracts for liquidated debts under Order 37 Rule 1(2)(b)(i).",
    amount: "Mandatory Pre-Deposit Slabs for Summary Suit Leave to Defend",
    takeaway:
      "When advertisers sign Release Orders and accept geo-tagged monitoring photos without raising prompt written objections, their defenses are deemed 'moonshine', entitling the concessionaire to immediate summary judgment or a 100% pre-deposit order.",
  },
  {
    title: "Doctrine of Commercial Restitution (Quantum Meruit) on Executed Campaigns",
    parties: "State of West Bengal v. B.K. Mondal & Sons",
    citation: "AIR 1962 SC 779, 5-Judge Constitution Bench, Supreme Court of India",
    date: "Judgment Dated 05 December 1961",
    facts:
      "A party provided civil infrastructure and commercial services which were put to public and commercial use. The defendant accepted and enjoyed the benefit of the works but subsequently refused to pay, arguing technical contractual defects in execution formalities.",
    holding:
      "The 5-Judge Constitution Bench ruled that under Section 70 of the Indian Contract Act, 1872, where a person lawfully does something for another, not intending to do so gratuitously, and the other person enjoys the benefit thereof, the recipient is bound to make compensation in money. Advertisers and brands whose hoardings were physically illuminated and displayed to the public cannot accept commercial brand exposure and then plead technical paperwork lapses to dodge rental payouts.",
    amount: "Doctrine of Quantum Meruit under Section 70 Indian Contract Act",
    takeaway:
      "Public brand exposure from high-impact OOH hoarding displays is an undeniable commercial benefit; clients cannot enjoy public visibility and then refuse payment under Section 70.",
  },
  {
    title: "Strict Commercial Enforcement of MSME 45-Day Payment Timelines & Triple Interest",
    parties: "Silpi Industries v. Kerala State Road Transport Corporation",
    citation: "2021 SCC OnLine SC 439, Supreme Court of India",
    date: "Judgment Dated 29 June 2021",
    facts:
      "A registered small enterprise supplier sought delayed payment compensation and compound interest under the MSMED Act. The debtor contested the applicability of statutory interest where supply contracts had non-statutory credit periods.",
    holding:
      "The Supreme Court held that the provisions of the MSMED Act, 2006 override any contrary contractual clauses. Once an enterprise is registered under Udyam prior to the contract, the statutory 45-day payment window under Section 15 is sacrosanct, and failure to pay attracts compound interest with monthly rests at three times the RBI Bank Rate under Section 16, which cannot be waived by any court or arbitral tribunal.",
    amount: "MSMED Act Sections 15 & 16 Strict Primacy Confirmed",
    takeaway:
      "OOH media owners and concessionaires registered under Udyam can invoke MSME Samadhaan to compel defaulting advertisers to pay 3x RBI compounding interest from Day 46.",
  },
];

const FAQS = [
  {
    question: "What legal proof is required in an Indian court to prove an OOH hoarding was actually displayed?",
    answer:
      "Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (which replaced Section 65B of the Indian Evidence Act), electronic records are fully admissible when accompanied by a statutory certificate. To prove hoarding display, the OOH media owner must tender: (1) date-and-time-stamped photographs showing the illuminated flex with readable EXIF metadata, (2) GPS latitude and longitude coordinates matching the municipal unipolar/gantry permit, (3) automated server transmission logs showing delivery of daily/weekly monitoring reports to the client's email or WhatsApp, and (4) an affidavit signed by the OOH operational manager certifying that the capture device and server operated in lawful, un-tampered custody throughout the campaign.",
  },
  {
    question: "Can an advertising agency refuse to pay billboard rentals claiming their end-client hasn't paid them?",
    answer:
      "No. Unless the media concessionaire expressly executed a tripartite agreement containing an enforceable 'pay-if-paid' covenant, the agency acts as an independent contractor or principal under Section 230 of the Indian Contract Act, 1872. The Media Display Order / Release Order (RO) issued by the agency establishes direct contractual privity between the agency and the media owner. The agency's internal payment delays with its brand client are legally irrelevant and cannot be pleaded as a defense in an Order XXXVII CPC Summary Suit or MSME proceeding.",
  },
  {
    question: "Can an OOH media concessionaire pull down the advertiser's flex if rental payments are defaulted mid-tenure?",
    answer:
      "Yes, provided the concessionaire serves a formal Cure Period Default Notice (typically 7 days) citing anticipatory repudiation under Section 39 of the Indian Contract Act, 1872. The notice must specify that continued non-payment constitutes material breach, and that the media owner is exercising its right to mitigate damages under the Explanation to Section 73 of the Contract Act by dismantling the flex and re-leasing the site. Media owners must document the dismantling with geo-tagged video evidence and store the vinyl flex safely under statutory lien.",
  },
  {
    question: "How does an OOH media owner recover fixed municipal or airport concession fees paid upfront?",
    answer:
      "OOH concessionaires pay fixed annual or monthly concession license fees to Municipal Corporations, Metro Rail Corporations (e.g., DMRC, MMRDA), or Airport Authorities (e.g., AAI, private airport operators) irrespective of advertiser occupancy. Under Section 73 of the Indian Contract Act, 1872, the media owner is entitled to recover the entire agreed display rental as direct expectation loss, together with interest. Furthermore, if a client defaults mid-campaign, the media owner can claim the holding cost of the idle vacancy period until a replacement client is commercially secured.",
  },
  {
    question: "What is the best legal forum for recovering unpaid billboard rentals of ₹25 Lakh to ₹2 Crore?",
    answer:
      "The most effective forum depends on your corporate structure and contract terms: (1) If you are registered as a Micro or Small Enterprise on Udyam, file an online application before the MSME Facilitation Council (MSEFC) to claim principal plus compound monthly interest at 3x the RBI Bank Rate under MSMED Act Sections 15–18. (2) If your Media Release Order has a liquidated sum and clear payment terms, institute an Order XXXVII CPC Summary Suit in the designated Commercial Court under the Commercial Courts Act, 2015. (3) If the contract contains an arbitration clause, invoke Section 21 of the Arbitration and Conciliation Act, 1996 for fast-track sole arbitrator appointment.",
  },
  {
    question: "What happens if a political candidate or election committee defaults on outdoor campaign hoardings?",
    answer:
      "If payments were secured with post-dated cheques that dishonoured, immediately issue a statutory 30-day demand notice under Section 138 of the Negotiable Instruments Act, 1881, followed by a criminal complaint against the authorized signatory and committee office bearers under Section 141. Simultaneously, subpoena the candidate's mandatory statutory election expenditure returns filed with the Election Commission of India (ECI) through the District Election Officer (DEO). If the candidate declared your hoardings in their poll expenditure account, that filing constitutes an incontrovertible admission of liability under Section 58 of BSA 2023.",
  },
  {
    question: "Can an OOH company file an insolvency petition under IBC against a defaulting corporate advertiser?",
    answer:
      "Under Section 4 of the Insolvency and Bankruptcy Code, 2016 (IBC), the minimum default threshold for initiating Corporate Insolvency Resolution Process (CIRP) is ₹1 Crore. If an operational debt arising from unpaid billboard displays exceeds ₹1 Crore and is owed by a corporate entity (Pvt Ltd or Ltd company), and there is zero pre-existing dispute raised before receipt of the demand notice, the media owner can issue a statutory 10-day Form 3 Demand Notice under Section 8 of the IBC, followed by a Section 9 petition before the NCLT.",
  },
];

export default function OutdoorHoardingOOHRecoveryPage() {
  const breadcrumbItems = [
    { label: "B2B Recovery", href: "/industries/advertising-marketing-media-event-recovery" },
    {
      label: "Advertising & Media Recovery Hub",
      href: "/industries/advertising-marketing-media-event-recovery",
    },
    {
      label: "OOH Hoarding & Transit Media Recovery",
      href: PAGE_URL,
    },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    name: META_TITLE,
    description: META_DESCRIPTION,
    url: `${SITE_URL}${PAGE_URL}`,
    datePublished: "2026-11-17T12:00:00+05:30",
    dateModified: "2026-11-17T12:00:00+05:30",
    inLanguage: "en-IN",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${PAGE_URL}`,
    },
    author: {
      "@type": "Person",
      name: LEGAL_REVIEWER.name,
      jobTitle: LEGAL_REVIEWER.role,
      url: `${SITE_URL}/about-us`,
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
    image: `${SITE_URL}/blog_money_recovery.png`,
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How OOH Media Concessionaires Recover Overdue Campaign Rentals",
    description:
      "A 5-step statutory recovery procedure for billboard, unipolar, metro pillar, and airport DOOH concessionaires to recover unpaid campaign display dues in India.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Compile Electronic Geo-Tagged Display Logs",
        text: "Extract daily time-stamped, GPS-tagged digital monitoring photographs of the illuminated hoardings and generate the statutory Section 63 BSA electronic evidence certificate.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Reconcile Release Orders & Upfront Concession Fees",
        text: "Match executed Release Orders (ROs) or Media Display Agreements against municipal/airport authority license fees paid upfront to quantify direct operational damages under Contract Act s.73.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Issue 15-Day Fact-Verified Demand Notice under Order 37 CPC",
        text: "Dispatch a formal legal notice via Speed Post RPAD, WhatsApp, and registered corporate email setting out liquidated display rentals, municipal holding losses, and interest.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Serve 7-Day Cure Notice for Flex Removal & Loss Mitigation",
        text: "If payment remains unpaid mid-tenure, serve a statutory default notice reserving the legal right to pull down vinyl flex and re-lease the billboard to mitigate municipal damages under Section 73 ICA.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Institute Commercial Summary Suit or MSME Samadhaan Claim",
        text: "File an Order XXXVII CPC Summary Suit in Commercial Court or lodge an MSME Samadhaan petition for compounding monthly interest at 3x RBI Bank Rate.",
      },
    ],
  };

  const faqSchema = {
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

  const breadcrumbSchema = {
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
        name: "Advertising & Media Recovery",
        item: `${SITE_URL}/industries/advertising-marketing-media-event-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "OOH Hoarding & Transit Media Recovery",
        item: `${SITE_URL}${PAGE_URL}`,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Hero Section */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            {/* Eyebrow Badge */}
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>IND-12 Creditor Guide</span>
              <span className="text-slate-500">&bull;</span>
              <span>OOH, DOOH &amp; Transit Concessionaires</span>
              <span className="text-slate-500">&bull;</span>
              <span>Order XXXVII CPC &amp; BSA s.63</span>
            </div>

            {/* Main H1 Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {EXACT_H1}
            </h1>

            {/* Executive Statutory Summary Box */}
            <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer &amp; Concessionaire Protection Rule
              </span>
              Outdoor media owners and transit concessionaires operate under relentless cashflow traps: municipal corporations (MCGM, BBMP, MCD), metro rail corporations, and airport concessionaires demand non-negotiable monthly license fees regardless of whether advertisers pay. When real estate developers, jewelry chains, coaching institutes, or political campaigns default on 30-to-90-day campaign bursts, concessionaires must enforce their claims through{" "}
              <Link
                href="/industries/advertising-marketing-media-event-recovery"
                className="text-red-400 hover:text-red-300 font-semibold underline decoration-red-400/50 underline-offset-2"
              >
                advertising industry legal recovery mechanisms
              </Link>{" "}
              by coupling signed Media Release Orders with time-stamped, geo-tagged monitoring logs authenticated under Section 63 of Bharatiya Sakshya Adhiniyam, 2023. This enables immediate summary recovery under Order XXXVII CPC, MSMED Act 3x compound interest, or pre-judgment asset attachment under Order 38 Rule 5 CPC.
            </div>

            {/* 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="text-[10px] sm:text-xs text-slate-400 block mb-1">
                  Municipal Concession Fee
                </span>
                <span className="text-base sm:text-xl font-black text-red-400 block">
                  100% Fixed
                </span>
                <span className="text-[10px] text-slate-400">
                  Paid upfront whether client pays or stalls
                </span>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="text-[10px] sm:text-xs text-slate-400 block mb-1">
                  Electronic Proof Standard
                </span>
                <span className="text-base sm:text-xl font-black text-emerald-400 block">
                  BSA s.63
                </span>
                <span className="text-[10px] text-slate-400">
                  Geo-tagged EXIF photos admissible in court
                </span>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="text-[10px] sm:text-xs text-slate-400 block mb-1">
                  Summary Recovery Rail
                </span>
                <span className="text-base sm:text-xl font-black text-amber-400 block">
                  Order 37 CPC
                </span>
                <span className="text-[10px] text-slate-400">
                  Liquidated claim on signed Release Orders
                </span>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="text-[10px] sm:text-xs text-slate-400 block mb-1">
                  MSME Statutory Interest
                </span>
                <span className="text-base sm:text-xl font-black text-slate-100 block">
                  3x RBI Rate
                </span>
                <span className="text-[10px] text-slate-400">
                  Compounding monthly under MSMED s.16
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Layout */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-6">
            {/* Left Sticky Sidebar Table of Contents */}
            <OOHHoardingTableOfContents />

            {/* Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* SECTION 1: OOH Concessionaire Crisis */}
              <section
                id="heading-ooh-concessionaire-crisis"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs">
                    01
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                    Industry Structural Dilemma
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  The OOH Concessionaire Cashflow Trap: Upfront Municipal License Dues vs. Post-Campaign Client Defaults
                </h2>
                <div className="space-y-4 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  <p>
                    Out-of-Home (OOH), Digital Out-of-Home (DOOH), and transit media concessionaires shoulder an economic model unlike any other sector in the marketing industry. To secure exclusive advertising rights over highway unipolar billboards, airport terminal luggage carousels, metro station pillars, or municipal bus-queue shelters (BQS), media owners must tender crores in advance. They pay fixed monthly concession fees to municipal authorities (such as MCGM Mumbai, BBMP Bengaluru, or MCD Delhi), airport operators, and metro rail corporations.
                  </p>
                  <p>
                    These statutory and contractual concession fees are <strong>unconditional and non-negotiable</strong>. If a municipal fee falls overdue by even 15 days, the urban local body slaps penal interest, forfeits bank guarantees, or threatens to bulldoze the unipolar structure.
                  </p>
                  <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
                    <p className="text-xs sm:text-sm font-semibold text-amber-900 mb-1">
                      The Asymmetric Risk Asymmetry:
                    </p>
                    <p className="text-xs sm:text-sm text-amber-800 leading-normal">
                      While the concessionaire must pay 100% of municipal overheads on Day 1, corporate advertisers—including real estate developers launching luxury townships, retail jewelry chains, coaching institutes, and regional political outfits—frequently book high-octane 30-to-90-day campaign bursts on deferred 30-day credit terms. Once the campaign ends and the physical flex comes down, the client vanishes or stalls payment for 12 to 18 months, leaving the media concessionaire in a severe liquidity squeeze.
                    </p>
                  </div>
                  <p>
                    When media concessionaires attempt informal collection calls, defaulting clients weaponize flimsy defenses: claiming the flex was torn by monsoon winds, illumination was turned off during night hours, or that the media buying agency never received funds from the parent brand. Without a rigorous statutory enforcement playbook, media owners end up absorbing massive operational losses.
                  </p>
                </div>
              </section>

              {/* SECTION 2: Geo-Tagged Monitoring Proof under BSA s.63 */}
              <section
                id="heading-geo-tagged-monitoring-proof"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs">
                    02
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                    Evidentiary Admissibility Standard
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  BSA Section 63 &amp; EXIF Metadata: Proving Campaign Display in Commercial Court
                </h2>
                <div className="space-y-4 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  <p>
                    The number one objection raised by defaulting advertisers in court is: <em>&ldquo;You never proved that our advertisement was actually displayed for the contracted duration.&rdquo;</em> Because billboard flexes are dismounted at campaign conclusion, traditional oral testimony is insufficient. Creditors must present electronic evidence complying with Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA).
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-2">
                        Mandatory Digital EXIF Parameters
                      </span>
                      <ul className="space-y-2 text-xs text-slate-300">
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-400 font-bold">&check;</span>
                          <span><strong>GPS Coordinates:</strong> Exact latitude and longitude embedded in image EXIF tags matching the registered municipal unipolar site ID.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-400 font-bold">&check;</span>
                          <span><strong>Time-Stamps (Day &amp; Night):</strong> Dual photographs captured at 11:00 AM (visibility) and 8:30 PM (proving functional illumination).</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-400 font-bold">&check;</span>
                          <span><strong>Cryptographic Hash:</strong> SHA-256 hash generated upon camera upload to prevent claims of Photoshop manipulation.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-4 bg-slate-900 text-white rounded-xl border border-slate-800">
                      <span className="text-xs font-bold uppercase tracking-wider text-red-400 block mb-2">
                        Section 63 BSA Statutory Certificate
                      </span>
                      <ul className="space-y-2 text-xs text-slate-300">
                        <li className="flex items-start gap-2">
                          <span className="text-red-400 font-bold">&check;</span>
                          <span><strong>Device Custody:</strong> Attestation by the operations supervisor identifying the camera/smartphone model and software portal.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400 font-bold">&check;</span>
                          <span><strong>Contemporaneous Transmission:</strong> Server logs proving weekly monitoring PDFs were delivered to client email/WhatsApp during live display.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400 font-bold">&check;</span>
                          <span><strong>Absence of Protest:</strong> Proof that the client received monitoring reports without lodging written deficiency complaints within 48 hours.</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <p>
                    Under the landmark 3-Judge Bench ruling in <em>Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal (2020) 7 SCC 1</em>, contemporaneous electronic logs accompanied by the statutory managerial certificate establish conclusive proof of performance. If a client failed to object in writing during the campaign, their retroactive defense of non-display is dismissed by Commercial Courts as an afterthought.
                  </p>
                </div>
              </section>

              {/* SECTION 3: Statutory Recovery Matrix */}
              <section
                id="heading-statutory-enforcement-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs">
                    03
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                    Statutory Forum Comparison
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Multi-Track Statutory Matrix: Summary Suits, MSMED Compound Interest &amp; IBC Form 3
                </h2>
                <div className="space-y-4 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed mb-6">
                  <p>
                    Depending on the contractual documentation, debtor corporate entity, and claim quantum, OOH concessionaires have four primary statutory recovery tracks in India:
                  </p>
                </div>

                {/* Comparison Table */}
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[640px]">
                    <thead>
                      <tr className="bg-slate-900 text-white border-b border-slate-800">
                        <th className="py-3 px-4 font-bold">Enforcement Track</th>
                        <th className="py-3 px-4 font-bold">Pecuniary Threshold</th>
                        <th className="py-3 px-4 font-bold">Governing Statute</th>
                        <th className="py-3 px-4 font-bold">Key Tactical Advantage</th>
                        <th className="py-3 px-4 font-bold">Typical Timeline</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-900">
                          Order XXXVII Summary Suit
                        </td>
                        <td className="py-3 px-4">₹3 Lakh to ₹5+ Crore</td>
                        <td className="py-3 px-4">Order 37 CPC + Commercial Courts Act 2015</td>
                        <td className="py-3 px-4 text-emerald-700 font-medium">
                          No automatic right to defend; debtor must pre-deposit debt in court
                        </td>
                        <td className="py-3 px-4 font-semibold">6 to 12 Months</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-900">
                          MSME Samadhaan (MSEFC)
                        </td>
                        <td className="py-3 px-4">No minimum ceiling</td>
                        <td className="py-3 px-4">MSMED Act 2006 (Sections 15–18)</td>
                        <td className="py-3 px-4 text-emerald-700 font-medium">
                          Compounding interest at 3x RBI Bank Rate; 75% pre-deposit to appeal
                        </td>
                        <td className="py-3 px-4 font-semibold">4 to 9 Months</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-900">
                          Section 138 NI Act Action
                        </td>
                        <td className="py-3 px-4">Cheque dishonor amount</td>
                        <td className="py-3 px-4">Negotiable Instruments Act 1881 s.138/141</td>
                        <td className="py-3 px-4 text-red-700 font-medium">
                          Criminal liability for directors/signatories + 20% interim compensation (s.143A)
                        </td>
                        <td className="py-3 px-4 font-semibold">6 to 18 Months</td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-900">
                          NCLT Corporate Insolvency (IBC)
                        </td>
                        <td className="py-3 px-4">₹1 Crore and above</td>
                        <td className="py-3 px-4">Insolvency &amp; Bankruptcy Code 2016 s.8/9</td>
                        <td className="py-3 px-4 text-amber-700 font-medium">
                          Corporate survival risk; prompts immediate board-level settlement
                        </td>
                        <td className="py-3 px-4 font-semibold">3 to 8 Months (Pre-Admission)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 text-xs text-slate-500">
                  * Note: MSME Samadhaan benefits apply if the OOH agency holds a valid Udyam registration prior to executing the Media Release Order. For claims below ₹1 Crore against non-corporate entities (proprietorships/partnerships), Order 37 Summary Suits in the Commercial Court provide the fastest judicial debt enforcement.
                </div>
              </section>

              {/* SECTION 4: Operational Decision Tree & Flex Pull-Down */}
              <section
                id="heading-operational-decision-tree"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs">
                    04
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                    Operational Escalation SOP
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Operational Decision Tree: When and How to Legally Dismantle Defaulting Flexes
                </h2>
                <div className="space-y-4 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed mb-6">
                  <p>
                    One of the most delicate decisions confronting an OOH CFO is deciding when to take down a defaulting advertiser&apos;s vinyl flex. Pulling down the flex prematurely without written notice may expose the media owner to counter-claims for contractual breach. Continuing to display the flex for free burns municipal license fees while giving the defaulter free brand visibility.
                  </p>
                </div>

                {/* Flowchart Diagram (Desktop SVG + Mobile Cards) */}
                <div className="hidden md:block bg-slate-900 rounded-xl p-6 border border-slate-800 text-white my-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-red-400 block mb-4">
                    Statutory Escalation Workflow: Days 1 to 60
                  </span>
                  <div className="grid grid-cols-5 gap-3 relative text-center">
                    <div className="bg-slate-800 p-3 rounded-xl border border-slate-700 flex flex-col items-center justify-between">
                      <span className="text-[10px] uppercase font-bold text-slate-400">Day 1–30</span>
                      <p className="text-xs font-bold text-white mt-1">Campaign Live &amp; Geo-Logging</p>
                      <span className="text-[10px] text-slate-400 mt-2">Daily GPS photos dispatched via server</span>
                    </div>

                    <div className="bg-slate-800 p-3 rounded-xl border border-slate-700 flex flex-col items-center justify-between">
                      <span className="text-[10px] uppercase font-bold text-amber-400">Day 31–45</span>
                      <p className="text-xs font-bold text-white mt-1">Invoice Due &amp; Soft Reminder</p>
                      <span className="text-[10px] text-slate-400 mt-2">Formal invoice maturity; payment request</span>
                    </div>

                    <div className="bg-slate-800 p-3 rounded-xl border border-amber-600/60 flex flex-col items-center justify-between">
                      <span className="text-[10px] uppercase font-bold text-amber-400">Day 46–52</span>
                      <p className="text-xs font-bold text-white mt-1">7-Day Cure Notice (ICA s.39)</p>
                      <span className="text-[10px] text-amber-300 mt-2">Notice of dismantling &amp; municipal loss</span>
                    </div>

                    <div className="bg-slate-800 p-3 rounded-xl border border-red-600/60 flex flex-col items-center justify-between">
                      <span className="text-[10px] uppercase font-bold text-red-400">Day 53</span>
                      <p className="text-xs font-bold text-white mt-1">Flex Dismantling &amp; Video Log</p>
                      <span className="text-[10px] text-red-300 mt-2">Mitigate losses under Contract Act s.73</span>
                    </div>

                    <div className="bg-slate-800 p-3 rounded-xl border border-emerald-600/60 flex flex-col items-center justify-between">
                      <span className="text-[10px] uppercase font-bold text-emerald-400">Day 60+</span>
                      <p className="text-xs font-bold text-white mt-1">Order 37 / MSME Suit</p>
                      <span className="text-[10px] text-emerald-300 mt-2">Claim display dues + vacancy damages</span>
                    </div>
                  </div>
                </div>

                {/* Mobile Flow Cards */}
                <div className="md:hidden space-y-3 my-4">
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-white">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Stage 1 (Days 1–30)</span>
                    <p className="text-xs font-bold text-white">Campaign Live &amp; Geo-Logging</p>
                    <p className="text-[11px] text-slate-300 mt-1">Capture daily date/time-stamped GPS photos; transmit weekly logs to client.</p>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-white">
                    <span className="text-[10px] uppercase font-bold text-amber-400 block">Stage 2 (Days 31–45)</span>
                    <p className="text-xs font-bold text-white">Invoice Maturity &amp; Ledger Reconciliation</p>
                    <p className="text-[11px] text-slate-300 mt-1">Generate certified statement of accounts; issue formal 7-day cure warning.</p>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-xl border border-red-800 text-white">
                    <span className="text-[10px] uppercase font-bold text-red-400 block">Stage 3 (Day 53)</span>
                    <p className="text-xs font-bold text-white">Flex Dismantling &amp; Loss Mitigation</p>
                    <p className="text-[11px] text-slate-300 mt-1">Dismantle vinyl flex with video record under ICA s.73 to mitigate ongoing municipal fees.</p>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-xl border border-emerald-800 text-white">
                    <span className="text-[10px] uppercase font-bold text-emerald-400 block">Stage 4 (Day 60+)</span>
                    <p className="text-xs font-bold text-white">Commercial Litigation / MSME Recovery</p>
                    <p className="text-[11px] text-slate-300 mt-1">Institute Order 37 Summary Suit or MSME claim for unpaid display rentals plus vacancy holding losses.</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  <p>
                    <strong>The Legal Right to Dismantle (ICA Section 39 &amp; 73):</strong> When an advertiser fails to honor progressive rental installments, their non-payment constitutes anticipatory repudiation under Section 39 of the Indian Contract Act, 1872. The media owner is legally required to mitigate losses under the Explanation to Section 73. Continuing to incur municipal concession fees without re-leasing the site violates the doctrine of mitigation. Serving a 7-day cure notice and taking down the flex insulates the media owner from all breach liability.
                  </p>
                </div>
              </section>

              {/* SECTION 5: Default Scenarios Interactive Tabs */}
              <section
                id="heading-commercial-scenarios"
                className="scroll-mt-28 space-y-4"
              >
                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs">
                      05
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                      Case Studies &amp; Failure Modes
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2">
                    Commercial Default Scenarios: Agency Stalls, Builder Bursts &amp; Political Vanishing Acts
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base text-slate-600 mb-6">
                    Select a default archetype below to inspect the debtor&apos;s typical modus operandi, governing contractual doctrine, and step-by-step litigation response:
                  </p>

                  <OOHHoardingScenarioTabs />
                </div>
              </section>

              {/* SECTION 6: Worked Financial & Interest Calculation Box */}
              <section
                id="heading-worked-financial-ledger"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs">
                    06
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                    Financial Claim Audit
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Worked Financial &amp; Statutory Interest Calculation: A Real-World ₹45 Lakh OOH Dispute
                </h2>
                <div className="space-y-4 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed mb-6">
                  <p>
                    Below is an itemized litigation claim ledger for a 90-day arterial highway billboard cluster booked by a real estate builder in Mumbai/Bengaluru where the advertiser defaulted after paying only the booking token:
                  </p>
                </div>

                {/* Ledger Box */}
                <div className="bg-slate-900 rounded-xl p-5 sm:p-6 border border-slate-800 text-white shadow-md">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      Dispute Particulars: 3x Prime Arterial Gantries (90-Day Burst)
                    </span>
                    <span className="text-xs text-slate-400">Currency: INR (₹)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="flex justify-between items-center py-1.5 border-b border-slate-800/80">
                      <span className="text-slate-300">Contracted Media Display Rental (3 Hoardings x 3 Months):</span>
                      <span className="font-bold text-white">₹45,00,000</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-slate-800/80">
                      <span className="text-slate-300">Printing, Mounting &amp; Illumination Charges:</span>
                      <span className="font-bold text-white">₹3,50,000</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-slate-800/80">
                      <span className="text-slate-300">Applicable GST @ 18%:</span>
                      <span className="font-bold text-white">₹8,73,000</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-slate-800/80">
                      <span className="text-slate-300">Less: Advance Booking Token Received:</span>
                      <span className="font-bold text-emerald-400">(-) ₹10,00,000</span>
                    </div>
                    <div className="flex justify-between items-center py-2 bg-slate-800/60 px-3 rounded-lg">
                      <span className="font-bold text-white">Net Liquidated Principal Debt:</span>
                      <span className="font-black text-amber-400 text-base">₹47,23,000</span>
                    </div>

                    <div className="pt-2">
                      <span className="text-xs font-bold text-red-400 uppercase tracking-wider block mb-2">
                        Statutory Interest Compounding under MSMED Act (Section 16):
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800">
                          <span className="text-slate-400 block mb-1">RBI Bank Rate (Reference):</span>
                          <span className="font-bold text-white">6.50% p.a.</span>
                        </div>
                        <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800">
                          <span className="text-slate-400 block mb-1">MSME Statutory Interest (3x Bank Rate):</span>
                          <span className="font-bold text-emerald-400">19.50% p.a. (Compounded Monthly)</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center py-2 mt-3 bg-red-950/50 border border-red-900/60 px-3 rounded-lg">
                        <span className="font-bold text-red-200">Accrued Compound Interest (12 Months Default):</span>
                        <span className="font-black text-red-400 text-base">₹10,08,187</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center py-3 bg-gradient-to-r from-red-950/80 to-slate-800 px-4 rounded-xl border border-red-700/60 mt-4">
                      <span className="text-sm font-black text-white uppercase tracking-wider">
                        Total Enforceable Commercial Demand:
                      </span>
                      <span className="text-lg sm:text-xl font-black text-emerald-400">
                        ₹57,31,187
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <p>
                    By framing the demand notice with this exact statutory interest ledger, corporate debtors realize that every additional month of stalling inflates their liability by nearly ₹80,000 in non-deductible MSME interest under Section 23 of the MSMED Act.
                  </p>
                </div>
              </section>

              {/* SECTION 7: Court Precedents */}
              <section
                id="heading-court-precedents"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs">
                    07
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                    Judicial Authority &amp; Case Law
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Binding Supreme Court Precedents Shielding OOH Media Concessionaires
                </h2>
                <div className="space-y-6">
                  {COURT_PRECEDENTS.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl bg-slate-50 border-l-4 border-[#DC2626] border-y border-r border-slate-200 space-y-3"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <span className="text-xs font-black text-slate-900 uppercase tracking-wide">
                          {item.title}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-500">
                          {item.date}
                        </span>
                      </div>
                      <div className="text-xs font-bold text-red-600">
                        {item.parties} &bull; <span className="text-slate-600">{item.citation}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <strong>Facts &amp; Holding:</strong> {item.holding}
                      </p>
                      <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs font-medium text-slate-800">
                        <span className="text-[#DC2626] font-bold">Creditor Takeaway: </span>
                        {item.takeaway}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* PRIMARY SOURCES STRIP */}
              <div className="bg-slate-100 rounded-xl p-4 border border-slate-200">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Verified Statutory References &amp; Official Bare Acts:
                </span>
                <div className="flex flex-wrap gap-2 text-xs">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <a
                      key={idx}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="px-2.5 py-1 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 rounded-md transition-colors"
                    >
                      {source.title.split("(")[0].trim()} &rarr;
                    </a>
                  ))}
                </div>
              </div>

              {/* SECTION 8: Frequently Asked Questions */}
              <section
                id="heading-frequently-asked-questions"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs">
                    08
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                    Institutional Counsel FAQs
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                  Frequently Asked Questions on OOH Billboard &amp; Transit Media Debt Recovery
                </h2>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group border border-slate-200 rounded-xl bg-slate-50 overflow-hidden [&_summary::-webkit-details-marker]:hidden"
                    >
                      <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4 sm:p-5 text-slate-900 font-bold text-xs sm:text-sm hover:bg-slate-100 transition-colors">
                        <span className="flex items-center gap-2">
                          <span className="text-red-600 font-black">Q{idx + 1}.</span>
                          <span>{faq.question}</span>
                        </span>
                        <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                          <svg
                            className="w-4 h-4 text-slate-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </span>
                      </summary>
                      <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200/60 bg-white">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Notice CTA Component */}
              <OOHHoardingNoticeCTA />

              {/* Dual B2B Onboarding Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-slate-100 border border-slate-200">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-900 block">
                    Individual Overdue Hoarding Invoices?
                  </span>
                  <p className="text-xs text-slate-600">
                    Draft and serve a fact-verified statutory demand notice via Speed Post RPAD &amp; Email with full Section 63 BSA compliance.
                  </p>
                  <a
                    href="/user/new-recovery"
                    className="inline-block text-xs font-bold text-[#DC2626] hover:text-[#B91C1C] underline"
                  >
                    Send Single Demand Notice (₹999) &rarr;
                  </a>
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-900 block">
                    Network-Wide Campaign Portfolio (10–10,000+ Sites)?
                  </span>
                  <p className="text-xs text-slate-600">
                    Upload your master debtor CSV ledger. We dispatch automated multi-channel notices and initiate simultaneous Commercial Court actions.
                  </p>
                  <Link
                    href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                    className="inline-block text-xs font-bold text-slate-900 hover:text-slate-700 underline"
                  >
                    Enterprise CSV Bulk Recovery &rarr;
                  </Link>
                </div>
              </div>

              {/* Internal Cross-Linking Navigation */}
              <div className="pt-6 border-t border-slate-200 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Related Advertising &amp; Commercial Media Recovery Guides:
                </span>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link
                    href="/industries/advertising-marketing-media-event-recovery"
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-red-400 hover:text-red-600 transition-colors font-medium"
                  >
                    &larr; Advertising &amp; Media Recovery Industry Hub
                  </Link>
                  <Link
                    href="/copyright-not-transferred-until-paid-freelancer"
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-red-400 hover:text-red-600 transition-colors font-medium"
                  >
                    Creative Copyright Transfer Retention
                  </Link>
                  <Link
                    href="/send-a-legal-notice/for-business-to-recover-their-unpaid-dues"
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-red-400 hover:text-red-600 transition-colors font-medium"
                  >
                    B2B Business Unpaid Dues Notice
                  </Link>
                  <Link
                    href="/recovery/pending-project-payment"
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-red-400 hover:text-red-600 transition-colors font-medium"
                  >
                    Pending Project Payment Recovery
                  </Link>
                  <Link
                    href="/media-buying-agency-google-meta-tv-ooh-ad-spend-reimbursement-recovery"
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-red-400 hover:text-red-600 transition-colors font-medium"
                  >
                    Media Buying Ad-Spend Reimbursement
                  </Link>
                  <Link
                    href="/event-management-exhibition-stall-fabricator-post-event-balance-recovery"
                    className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-red-400 hover:text-red-600 transition-colors font-medium"
                  >
                    Exhibition Stall Post-Event Balance Recovery
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer Cross-Links */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
