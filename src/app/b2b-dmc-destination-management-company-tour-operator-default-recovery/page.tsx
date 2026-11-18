import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import DmcNoticeCTA from "./DmcNoticeCTA";
import DmcTableOfContents from "./DmcTableOfContents";
import DmcScenarioTabs from "./DmcScenarioTabs";

export const revalidate = 86400;

const PAGE_PATH = "/b2b-dmc-destination-management-company-tour-operator-default-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_PATH}`;

const EXACT_H1 =
  "Retail Travel Agent Sent a Fake NEFT/SWIFT Screenshot on Arrival Morning—and Never Paid Your DMC Land Package? Legal Recovery Guide";

const META_TITLE = "B2B DMC & Tour Operator Travel Agent Debt Recovery";
const META_DESCRIPTION =
  "Retail agents send fake UTR/SWIFT PDFs on arrival morning, leaving DMCs unpaid. Recover via BNS s.318/336/340 FIR, NI Act s.138 & Order 37 CPC.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "b2b dmc tour operator travel agent unpaid land package recovery",
    "retail travel agent collected full tour money from pax defaulted dmc",
    "fake swift screenshot last minute arrival dmc fraud",
    "inbound foreign tour operator unpaid indian dmc invoice",
    "tafi taai iato trade complaint vs legal notice",
    "bns 318 fake remittance screenshot travel trade",
  ],
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
        alt: formatAltText(
          "B2B DMC Destination Management Company Travel Agent Default Recovery Guide"
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

const PRIMARY_SOURCES = [
  {
    title:
      "Bharatiya Nyaya Sanhita (BNS), 2023 — Sections 316, 318, 336 & 340 (Cheating, Criminal Breach of Trust & Forgery of Electronic Records) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/20062",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam (BSA), 2023 — Section 63 (Admissibility of WhatsApp Screenshots, SWIFT PDFs & Booking Vouchers) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "The Code of Civil Procedure, 1908 — Order XXXVII (Summary Suits) & Section 44A (Foreign Reciprocating Decrees) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "The Negotiable Instruments Act, 1881 — Sections 138, 141 & 143A (Dishonoured Security Cheques & 20% Interim Compensation) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/2189",
  },
  {
    title:
      "The Micro, Small and Medium Enterprises Development Act, 2006 (Sections 15–18) — Ministry of MSME Samadhaan Portal",
    url: "https://samadhaan.msme.gov.in/",
  },
];

const FAQS = [
  {
    question:
      "Can a DMC file a criminal FIR if a retail travel agent sends an edited NEFT, RTGS, or SWIFT screenshot?",
    answer:
      "Yes. Fabricating or altering a bank transfer screenshot, UTR advice, or SWIFT MT103 PDF to induce a DMC to release hotel rooms and coaches is a cognizable offence under Sections 336 and 340 of the Bharatiya Nyaya Sanhita (BNS), 2023 (forgery of electronic records and using a forged document as genuine, punishable with up to 7 years imprisonment) read with Section 318 BNS (cheating). Obtaining written non-credit confirmation from your bank immediately turns a stalled civil receivable into an urgent criminal-civil recovery matter.",
  },
  {
    question:
      "What if the retail agent already collected 100% of the tour money from the passengers?",
    answer:
      "When a retail agent collects full package funds from tourists specifically for hotel, transport, and sightseeing services delivered by your DMC and diverts those funds elsewhere, it attracts Criminal Breach of Trust under Section 316 BNS, 2023 in addition to civil liability under Order XXXVII CPC. Your Advocate Demand Notice should explicitly place the proprietor, partners, or directors on notice for both Section 316 BNS misappropriation and summary civil recovery.",
  },
  {
    question:
      "Should my DMC file a TAFI, TAAI, or IATO trade complaint first, or send a statutory legal notice?",
    answer:
      "Do not wait weeks for trade association mediation alone. While TAFI, TAAI, and IATO circulars create reputational pressure within the travel trade, associations lack statutory power to freeze bank accounts, impose criminal liability, or issue executable decrees. The fastest recovery strategy is serving a 7-day Advocate Statutory Demand Notice citing BNS s.318/336/340, NI Act s.138, and Order XXXVII CPC in parallel with your trade-body escalation.",
  },
  {
    question:
      "How does an Indian inbound DMC recover unpaid land invoices from a Foreign Tour Operator (FTO) in the UK, Europe, or UAE?",
    answer:
      "First, anchor your claim on the signed DMC-FTO Operator Agreement, hotel check-in folios, signed tour-leader feedback sheets, and SWIFT proforma invoices. Under Section 44A of the Code of Civil Procedure, 1908, a final Indian Commercial Court decree under Order XXXVII CPC can be executed directly in reciprocating territories such as the UK, UAE, and Singapore without re-litigating the merits of the debt.",
  },
  {
    question:
      "What if a post-dated security cheque given by the travel agent bounces after the tour returns?",
    answer:
      "A dishonoured security cheque issued against a confirmed tour ledger is fully enforceable under Section 138 of the Negotiable Instruments Act, 1881. You must dispatch a statutory 15-day written demand notice within 30 days of receiving the bank return memo. Upon filing the complaint, Section 143A empowers the Magistrate to direct the defaulting agent to pay up to 20% of the cheque amount as interim compensation.",
  },
  {
    question:
      "Can an MSME-registered DMC claim compound interest on overdue sub-agent or corporate group invoices?",
    answer:
      "Yes. If your Destination Management Company holds an active Udyam Registration Certificate (Micro or Small Enterprise), Section 15 and Section 16 of the MSMED Act, 2006 mandate payment within 45 days and entitle you to compound interest at three times the RBI bank rate with monthly rests. Furthermore, Section 43B(h) of the Income Tax Act disallows tax deductions for corporate buyers who leave MSME DMC invoices unpaid beyond 45 days.",
  },
  {
    question:
      "What digital evidence do we need under BSA 2023 Section 63 to prove a fake UTR or WhatsApp booking?",
    answer:
      "Preserve the original WhatsApp chat export (.txt and media files) containing the edited UTR/SWIFT image, your bank's official non-credit letter for that UTR number, the confirmed itinerary emails, hotel check-in vouchers, coach duty slips, and GST B2B tax invoices. Pair these electronic records with a signed Section 63 Bharatiya Sakshya Adhiniyam (BSA), 2023 certificate so they are immediately admissible in both Criminal and Commercial Courts.",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  mainEntityOfPage: CANONICAL_URL,
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
  name: "5-Stage Arrival-Morning Escalation Protocol for DMC Land Package Defaults",
  description:
    "Step-by-step statutory recovery workflow for inbound and outbound DMCs facing fake NEFT/SWIFT UTR screenshots and unpaid tour operator ledgers.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Obtain Bank Non-Credit Confirmation & Lock Tour Vouchers (Hour 1–4)",
      text: "Request written confirmation from your relationship bank that the quoted UTR/SWIFT reference was never credited, while preserving hotel check-in folios and coach duty slips.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Certify WhatsApp UTR File & Booking Trail Under BSA 2023 s.63 (Day 1)",
      text: "Export the uncropped WhatsApp/email thread containing the forged remittance PDF and execute a Section 63 BSA 2023 electronic evidence certificate.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Serve 48-Hour BNS s.318 & s.336/340 Statutory Demand Notice (Day 1–2)",
      text: "Dispatch an Advocate demand notice via WhatsApp, email, and Speed Post RPAD citing electronic forgery under BNS s.336/340, cheating under s.318, and Order XXXVII CPC.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Present Security PDC & Trigger Trade-Body Escalation (Day 3–15)",
      text: "Deposit any post-dated security cheque for NI Act s.138 prosecution within 30 days of return memo while filing a parallel TAFI/TAAI/IATO default alert.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "File Criminal Forgery Complaint + Order XXXVII Summary Suit (Day 16+)",
      text: "Initiate an FIR under BNS s.336/340 alongside an Order XXXVII CPC Summary Suit or MSME Samadhaan claim for principal plus 3x RBI compound interest.",
    },
  ],
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
      name: "Hotels, Banquets & Corporate Travel",
      item: `${SITE_URL}/industries/hotels-banquets-corporate-travel-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "DMC & Tour Operator Default Recovery",
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

export default function B2bDmcDefaultRecoveryPage() {
  const breadcrumbItems = [
    {
      label: "Hotels, Banquets & Corporate Travel",
      href: "/industries/hotels-banquets-corporate-travel-recovery",
    },
    {
      label: "DMC & Tour Operator Default Recovery",
      href: PAGE_PATH,
    },
  ];

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
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>IND-16 &bull; Inbound &amp; Outbound DMC Recovery</span>
              <span className="text-red-500">&bull;</span>
              <span>BNS 2023 s.318 &amp; s.336/340 Forgery</span>
              <span className="text-red-500">&bull;</span>
              <span>Order XXXVII CPC &amp; NI s.138</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {EXACT_H1}
            </h1>

            {/* Executive Statutory Summary Box (40–60 words + inline parent Hub link) */}
            <div
              aria-label="Executive Creditor Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer (DMC &amp; Land Package Protection)
              </span>
              <p>
                Under our{" "}
                <Link
                  href="/industries/hotels-banquets-corporate-travel-recovery"
                  className="text-red-300 underline decoration-red-400/60 hover:text-white font-semibold"
                >
                  Hotels, Banquets &amp; Corporate Travel Recovery Hub
                </Link>
                , Destination Management Companies defrauded by edited NEFT/SWIFT UTR screenshots
                can trigger criminal forgery action under BNS 2023 Sections 336/340 (up to 7 years
                imprisonment) and Section 318—paired with NI Act s.138 and Order XXXVII CPC summary
                recovery.
              </p>
            </div>

            {/* Hero 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl font-black text-red-400">Up to 7 Yrs</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  BNS s.336/340 Electronic Forgery Penalty
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-amber-400">30 Days</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  NI Act s.138 Notice Window on Cheque Bounce
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-emerald-400">3x RBI Rate</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  MSMED s.16 Compound Interest (Monthly Rests)
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-slate-100">&rupee;999</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  Advocate Demand Notice (Single or Bulk CSV)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Container */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Left Sticky Sidebar TOC */}
            <DmcTableOfContents />

            {/* Right Main Editorial Column */}
            <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1 */}
              <section
                id="heading-friday-utr-scam"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    1
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    The &ldquo;Friday 6 PM Edited UTR Screenshot&rdquo; Scam Facing DMCs
                  </h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    Every inbound and outbound Destination Management Company (DMC) operating across
                    Goa, Kerala, Rajasthan, Kashmir, Himachal, Dubai, Thailand, or Europe recognizes
                    the exact same arrival-morning trap. A retail travel agent or sub-agent books a
                    high-value family or corporate group land package—hotels, houseboats, Volvo
                    coaches, desert camps, and excursion tickets—with final balance payment due
                    before check-in.
                  </p>
                  <p>
                    At 6:00 PM on Friday, or at 7:30 AM while the passengers are already clearing
                    airport immigration or standing inside the resort lobby, the retail agent sends a
                    WhatsApp screenshot or cropped PDF of an NEFT, RTGS, or international SWIFT
                    MT103 transfer. To avoid stranding guests and damaging your hotelier
                    relationships, your DMC operations desk honours the check-in and dispatches the
                    fleet. By Monday afternoon, the funds still have not arrived, your bank confirms
                    the UTR reference does not exist, and the retail agent stops answering calls.
                  </p>

                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 sm:p-5 text-xs sm:text-sm text-slate-800">
                    <p className="font-bold text-[#DC2626] mb-1">
                      Why Treating a Fake UTR as a &ldquo;Civil Payment Delay&rdquo; Fails
                    </p>
                    <p>
                      Most DMCs make the fatal mistake of sending polite WhatsApp reminders for 60
                      days or waiting for trade-body mediation while the defaulting agent spends the
                      passengers&apos; tour money elsewhere. Under the{" "}
                      <strong>Bharatiya Nyaya Sanhita (BNS), 2023</strong>, fabricating an
                      electronic bank receipt is a serious criminal offence under{" "}
                      <strong>Sections 336 and 340</strong> (Forgery of Electronic Record &amp;
                      Using Forged Document as Genuine, carrying up to 7 years imprisonment) read
                      with <strong>Section 318</strong> (Cheating). Putting the agent on formal
                      statutory notice of these exact criminal sections produces rapid RTGS
                      settlement.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: Statutory Matrix */}
              <section
                id="heading-dmc-statutory-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    2
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Statutory Recovery Matrix for DMC Land Package Defaults
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                  Depending on whether the travel agent sent a forged remittance slip, bounced a
                  post-dated security cheque, or defaulted as a foreign tour operator (FTO), your
                  DMC can deploy a coordinated criminal-civil recovery stack:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3.5 font-bold">Statute &amp; Section</th>
                        <th className="p-3.5 font-bold">DMC Trigger Scenario</th>
                        <th className="p-3.5 font-bold">Statutory Leverage &amp; Timeline</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      <tr>
                        <td className="p-3.5 font-bold text-slate-900">
                          BNS 2023 s.336 &amp; s.340
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Edited NEFT/RTGS UTR screenshot or fake SWIFT MT103 PDF sent on arrival
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Non-bailable forgery of electronic record; up to 7 years imprisonment +
                          Cyber/EOW police complaint
                        </td>
                      </tr>
                      <tr className="bg-slate-50/70">
                        <td className="p-3.5 font-bold text-slate-900">
                          BNS 2023 s.316 &amp; s.318
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Agent collected 100% tour money from pax &amp; misappropriated DMC share
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Criminal Breach of Trust &amp; Cheating; personal liability on proprietor
                          or company directors
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-slate-900">
                          NI Act 1881 s.138 &amp; s.143A
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Security PDC or post-tour settlement cheque dishonoured
                        </td>
                        <td className="p-3.5 text-slate-700">
                          15-day notice within 30 days of return memo; up to 20% interim
                          compensation under s.143A
                        </td>
                      </tr>
                      <tr className="bg-slate-50/70">
                        <td className="p-3.5 font-bold text-slate-900">
                          Order XXXVII CPC &amp; s.44A
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Confirmed tour vouchers, GST invoices, or unpaid inbound FTO ledger
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Summary suit (10-day appearance); s.44A reciprocal execution in UK, UAE
                          &amp; Singapore
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-slate-900">
                          MSMED Act s.15–18 &amp; s.43B(h)
                        </td>
                        <td className="p-3.5 text-slate-700">
                          Udyam-registered DMC unpaid beyond 45 days by corporate/agency buyer
                        </td>
                        <td className="p-3.5 text-slate-700">
                          3x RBI compound interest + 75% pre-deposit for buyer appeal + Income Tax
                          disallowance
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3: 5-Stage Decision Tree SVG + Mobile Stack */}
              <section
                id="heading-arrival-escalation-tree"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    3
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    5-Stage Arrival-Morning Escalation Protocol for DMCs
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  When a remittance fails to hit your beneficiary bank account after check-in, follow
                  this exact 5-stage operational and legal sequence so you preserve evidence before
                  the agent deletes chats or drains accounts:
                </p>

                {/* Desktop SVG Flowchart */}
                <div className="hidden md:block w-full overflow-x-auto bg-slate-900 rounded-2xl p-5 border border-slate-800">
                  <svg
                    viewBox="0 0 880 230"
                    width="880"
                    height="230"
                    className="w-full h-auto"
                    role="img"
                    aria-label="5-Stage DMC Arrival-Morning Default Escalation Flowchart"
                  >
                    {/* Stage 1 */}
                    <rect x="10" y="30" width="150" height="150" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                    <circle cx="35" cy="55" r="12" fill="#DC2626" />
                    <text x="35" y="59" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">1</text>
                    <text x="25" y="88" fill="#F8FAFC" fontSize="12" fontWeight="bold">Bank Non-Credit</text>
                    <text x="25" y="105" fill="#F8FAFC" fontSize="12" fontWeight="bold">Confirmation</text>
                    <text x="25" y="128" fill="#94A3B8" fontSize="10">Hour 1–4: Written</text>
                    <text x="25" y="142" fill="#94A3B8" fontSize="10">bank UTR check +</text>
                    <text x="25" y="156" fill="#94A3B8" fontSize="10">lock hotel folios</text>

                    <line x1="160" y1="105" x2="185" y2="105" stroke="#DC2626" strokeWidth="2" />
                    <polygon points="185,100 193,105 185,110" fill="#DC2626" />

                    {/* Stage 2 */}
                    <rect x="193" y="30" width="150" height="150" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                    <circle cx="218" cy="55" r="12" fill="#DC2626" />
                    <text x="218" y="59" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">2</text>
                    <text x="208" y="88" fill="#F8FAFC" fontSize="12" fontWeight="bold">BSA s.63 Digital</text>
                    <text x="208" y="105" fill="#F8FAFC" fontSize="12" fontWeight="bold">Evidence Lock</text>
                    <text x="208" y="128" fill="#94A3B8" fontSize="10">Day 1: Export raw</text>
                    <text x="208" y="142" fill="#94A3B8" fontSize="10">WhatsApp UTR PDF</text>
                    <text x="208" y="156" fill="#94A3B8" fontSize="10">&amp; check-in proofs</text>

                    <line x1="343" y1="105" x2="368" y2="105" stroke="#DC2626" strokeWidth="2" />
                    <polygon points="368,100 376,105 368,110" fill="#DC2626" />

                    {/* Stage 3 */}
                    <rect x="376" y="30" width="150" height="150" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                    <circle cx="401" cy="55" r="12" fill="#DC2626" />
                    <text x="401" y="59" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">3</text>
                    <text x="391" y="88" fill="#F8FAFC" fontSize="12" fontWeight="bold">48-Hr BNS s.336</text>
                    <text x="391" y="105" fill="#F8FAFC" fontSize="12" fontWeight="bold">Advocate Notice</text>
                    <text x="391" y="128" fill="#FCA5A5" fontSize="10">Day 1–2: RPAD +</text>
                    <text x="391" y="142" fill="#FCA5A5" fontSize="10">WhatsApp + Email</text>
                    <text x="391" y="156" fill="#FCA5A5" fontSize="10">citing 7-yr forgery</text>

                    <line x1="526" y1="105" x2="551" y2="105" stroke="#DC2626" strokeWidth="2" />
                    <polygon points="551,100 559,105 551,110" fill="#DC2626" />

                    {/* Stage 4 */}
                    <rect x="559" y="30" width="150" height="150" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                    <circle cx="584" cy="55" r="12" fill="#DC2626" />
                    <text x="584" y="59" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">4</text>
                    <text x="574" y="88" fill="#F8FAFC" fontSize="12" fontWeight="bold">PDC Bounce &amp;</text>
                    <text x="574" y="105" fill="#F8FAFC" fontSize="12" fontWeight="bold">Trade Alert</text>
                    <text x="574" y="128" fill="#94A3B8" fontSize="10">Day 3–15: NI s.138</text>
                    <text x="574" y="142" fill="#94A3B8" fontSize="10">notice + TAFI/TAAI</text>
                    <text x="574" y="156" fill="#94A3B8" fontSize="10">/IATO circular</text>

                    <line x1="709" y1="105" x2="734" y2="105" stroke="#DC2626" strokeWidth="2" />
                    <polygon points="734,100 742,105 734,110" fill="#DC2626" />

                    {/* Stage 5 */}
                    <rect x="742" y="30" width="128" height="150" rx="12" fill="#064E3B" stroke="#10B981" strokeWidth="1.5" />
                    <circle cx="767" cy="55" r="12" fill="#10B981" />
                    <text x="767" y="59" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">5</text>
                    <text x="757" y="88" fill="#ECFDF5" fontSize="12" fontWeight="bold">FIR + Order 37</text>
                    <text x="757" y="105" fill="#ECFDF5" fontSize="12" fontWeight="bold">Summary Suit</text>
                    <text x="757" y="128" fill="#A7F3D0" fontSize="10">Day 16+: Criminal</text>
                    <text x="757" y="142" fill="#A7F3D0" fontSize="10">FIR + 3x RBI</text>
                    <text x="757" y="156" fill="#A7F3D0" fontSize="10">interest decree</text>
                  </svg>
                </div>

                {/* Mobile Stacked Cards */}
                <div className="grid grid-cols-1 gap-3 md:hidden">
                  {[
                    {
                      n: "1",
                      title: "Bank Non-Credit Confirmation (Hour 1–4)",
                      desc: "Obtain written confirmation from your bank that the UTR/SWIFT reference never cleared, and lock signed hotel check-in folios.",
                    },
                    {
                      n: "2",
                      title: "BSA s.63 Digital Evidence Lock (Day 1)",
                      desc: "Export the raw WhatsApp/email thread containing the edited UTR screenshot and execute a Section 63 BSA 2023 certificate.",
                    },
                    {
                      n: "3",
                      title: "48-Hour BNS s.336/340 Advocate Notice (Day 1–2)",
                      desc: "Serve an Advocate demand notice via WhatsApp, email, and Speed Post RPAD citing non-bailable electronic forgery and cheating.",
                    },
                    {
                      n: "4",
                      title: "PDC Bounce & Trade-Body Alert (Day 3–15)",
                      desc: "Present any security cheque for NI Act s.138 prosecution while filing a parallel TAFI/TAAI/IATO default alert.",
                    },
                    {
                      n: "5",
                      title: "Criminal FIR + Order XXXVII Summary Suit (Day 16+)",
                      desc: "File the BNS s.336/340 FIR alongside an Order XXXVII CPC summary suit or MSME Samadhaan claim.",
                    },
                  ].map((item) => (
                    <div
                      key={item.n}
                      className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800"
                    >
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                          {item.n}
                        </span>
                        <p className="text-sm font-bold">{item.title}</p>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 4: Interactive Scenario Tabs */}
              <section
                id="heading-dmc-scenario-tabs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    4
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    4 DMC Default Failure Modes &amp; Tactical Responses
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                  Select your exact commercial failure mode below to view the applicable statutory
                  hook and 3-step recovery sequence:
                </p>

                <DmcScenarioTabs />
              </section>

              {/* Inline Dual-Track CTA */}
              <DmcNoticeCTA />

              {/* Section 5: Worked Ledger */}
              <section
                id="heading-dmc-worked-ledger"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    5
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Worked &rupee;18.50 Lakh Land Package Default &amp; Interest Ledger
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                  Consider a realistic 6-night, 28-pax Kerala-Munnar-Alleppey group land package
                  operated by a Kochi-based Udyam-registered DMC for a Delhi retail travel agency.
                  The retail agent sent a forged NEFT UTR screenshot on Friday at 6:15 PM for the
                  final balance, leaving &rupee;18,50,000 unpaid for 120 days:
                </p>

                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-slate-800 pb-4">
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-slate-400">
                        Unpaid Land Principal
                      </p>
                      <p className="text-xl sm:text-2xl font-black text-white">
                        &rupee;18,50,000
                      </p>
                      <p className="text-[11px] text-slate-400">
                        Hotels, Houseboats, Volvo Coach &amp; Guides
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-slate-400">
                        MSMED s.16 Interest (120 Days)
                      </p>
                      <p className="text-xl sm:text-2xl font-black text-emerald-400">
                        +&rupee;1,21,849
                      </p>
                      <p className="text-[11px] text-slate-400">
                        Illustrative 19.50% p.a. (3x 6.5% RBI Rate)
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-slate-400">
                        Total Statutory Claim
                      </p>
                      <p className="text-xl sm:text-2xl font-black text-amber-400">
                        &rupee;19,71,849
                      </p>
                      <p className="text-[11px] text-slate-400">
                        Plus BNS s.336/340 Criminal Forgery Notice
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    To compute exact monthly-compounded statutory interest on your own overdue DMC
                    invoices from the 45-day MSME due date, run your figures through our{" "}
                    <Link
                      href="/tools/msme-delayed-payment-interest-calculator"
                      className="text-red-400 underline hover:text-red-300 font-semibold"
                    >
                      MSME Delayed Payment Interest Calculator
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Section 6: Fake UTR Forensics & BSA 2023 s.63 Checklist */}
              <section
                id="heading-utr-bsa-evidence"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    6
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Fake UTR Forensics &amp; BSA 2023 Section 63 Checklist
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                  Whether your case proceeds to a Cyber/EOW police station under BNS s.336/340 or a
                  Commercial Court under Order XXXVII CPC, electronic evidence must satisfy{" "}
                  <strong>Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023</strong>:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      title: "1. Bank Non-Credit Confirmation Letter",
                      detail:
                        "Official email or stamped letter from your beneficiary bank confirming that the exact 16-digit NEFT/RTGS UTR or SWIFT UETR was never received.",
                    },
                    {
                      title: "2. Original WhatsApp / Email UTR File",
                      detail:
                        "Do not forward-compress the image. Export the original WhatsApp chat (.txt + media) or raw .eml file showing the sender's phone number and timestamp.",
                    },
                    {
                      title: "3. Signed Hotel Folios & Coach Duty Slips",
                      detail:
                        "Resort check-in registration cards, houseboat boarding manifests, and driver logbooks proving the retail agent's passengers consumed 100% of the land package.",
                    },
                    {
                      title: "4. GST B2B e-Invoice & GSTR-2B Trail",
                      detail:
                        "Tax invoices carrying IRN/QR codes uploaded to the GST portal against the retail agency's GSTIN, establishing undisputed commercial acceptance.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="bg-slate-50 rounded-xl p-4 border border-slate-200"
                    >
                      <p className="text-sm font-bold text-slate-900 mb-1">{item.title}</p>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 7: TAFI / TAAI / IATO vs Statutory Legal Action + Cross-Links */}
              <section
                id="heading-tafi-taai-iato"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    7
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    TAFI, TAAI &amp; IATO Trade Complaints vs. Statutory Legal Action
                  </h2>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    Trade bodies such as <strong>IATO</strong> (Indian Association of Tour Operators),{" "}
                    <strong>TAAI</strong>, and <strong>TAFI</strong> provide valuable peer-pressure
                    circulars when a member agency defaults. However, many fly-by-night retail
                    agencies are either non-members or simply ignore association conciliation
                    emails while continuing to collect passenger advances under a sister company
                    name.
                  </p>
                  <p>
                    The highest-yield strategy is to file your trade-body grievance{" "}
                    <em>alongside</em> an{" "}
                    <Link
                      href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                      className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                    >
                      Email, WhatsApp &amp; Speed Post RPAD Advocate Notice
                    </Link>{" "}
                    and, where a security cheque was dishonoured, initiate{" "}
                    <Link
                      href="/cheque-bounce-notice-timeline-section-138"
                      className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                    >
                      Section 138 NI Act cheque bounce proceedings
                    </Link>
                    . For broader commercial receivables across your agency, also review our{" "}
                    <Link
                      href="/recovery/business-dues"
                      className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                    >
                      B2B Business Dues Recovery Desk
                    </Link>
                    .
                  </p>

                  {/* Sibling IND-16 Spokes */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 mt-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                      Related Hospitality &amp; Travel Trade Recovery Guides (IND-16)
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm">
                      <li>
                        <Link
                          href="/hotel-btc-bill-to-company-corporate-credit-account-default-recovery"
                          className="text-slate-900 font-semibold hover:text-[#DC2626] underline decoration-slate-300"
                        >
                          Hotel &lsquo;Bill-to-Company&rsquo; (BTC) Corporate Credit Default Recovery &rarr;
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/iata-corporate-travel-agent-tmc-flight-ticket-credit-default-recovery"
                          className="text-slate-900 font-semibold hover:text-[#DC2626] underline decoration-slate-300"
                        >
                          IATA Corporate Travel Agent (TMC) Flight Ticket Credit Default Recovery &rarr;
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/banquet-hall-destination-wedding-post-event-balance-cheque-bounce"
                          className="text-slate-900 font-semibold hover:text-[#DC2626] underline decoration-slate-300"
                        >
                          Banquet Hall &amp; Destination Wedding Post-Event Balance Cheque Bounce &rarr;
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 8: FAQs */}
              <section
                id="heading-dmc-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    8
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Frequently Asked Questions: DMC &amp; Tour Operator Recovery
                  </h2>
                </div>

                <div className="space-y-3">
                  {FAQS.map((faq) => (
                    <details
                      key={faq.question}
                      className="group bg-slate-50 border border-slate-200 rounded-xl p-4 open:bg-white open:shadow-xs transition-all"
                    >
                      <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer list-none flex items-center justify-between gap-3">
                        <span>{faq.question}</span>
                        <span className="text-[#DC2626] font-black text-lg shrink-0 group-open:rotate-45 transition-transform">
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Bottom Dual-Track CTA */}
              <DmcNoticeCTA />

              {/* Section 9: Primary Statutory Sources */}
              <section
                id="heading-dmc-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#404447] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    9
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Primary Statutory Authorities &amp; Official Portals
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
                        className="text-slate-700 hover:text-[#DC2626] underline decoration-slate-300"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>

                <p className="mt-5 pt-4 border-t border-slate-100 text-[11px] sm:text-xs text-slate-500">
                  Legal Review Attribution: Reviewed by{" "}
                  <span className="font-semibold text-slate-700">Anuj Anand Malik</span>, Advocate
                  &amp; Founder, AMA Legal Solutions. Updated 2026-11-18.
                </p>
              </section>
            </article>
          </div>
        </main>

        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
