import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import TdsatJurisdictionTableOfContents from "./TdsatJurisdictionTableOfContents";
import TdsatJurisdictionScenarioTabs from "./TdsatJurisdictionScenarioTabs";
import TdsatJurisdictionCTA from "./TdsatJurisdictionCTA";

export const revalidate = 86400;

const PAGE_PATH = "/tdsat-vs-commercial-court-jurisdiction-telecom-isp-broadcasting-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_PATH}`;

const EXACT_H1 =
  "TDSAT (Section 14 TRAI Act) vs Commercial Court: The Exact Jurisdiction Map for Telcos, ISPs, Broadcasters & Cable MSOs";

// Tightened from 70ch PDF draft to 55ch for Screaming Frog 30-60ch compliance
const META_TITLE = "TDSAT vs Commercial Court: Telecom & ISP Recovery Forum";

// Tightened from 177ch PDF draft to 152ch for Screaming Frog 120-155ch compliance
const META_DESCRIPTION =
  "MSO–LCO & Telco interconnect disputes go to TDSAT under TRAI Act s.14/15; ISP vs enterprise subscriber debt goes to Commercial Court. Avoid 2-yr dismissal.";

const OG_IMAGE_ALT = formatAltText(
  "TDSAT Section 14 TRAI Act vs Commercial Court Jurisdiction Map for Telecom and ISPs"
);

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: [
    "tdsat vs civil commercial court jurisdiction telecom isp recovery",
    "section 14 trai act licensor licensee service provider dispute",
    "mso vs local cable operator lco subscription arrears tdsat",
    "isp vs enterprise subscriber commercial court not tdsat",
    "broadcaster carriage placement fee recovery tdsat",
    "pre tdsat demand disconnection notice trai regulations",
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
        alt: OG_IMAGE_ALT,
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

const STATUTORY_TIMELINES = [
  {
    window: "Day 0 – Day 15",
    milestone: "Pre-Litigation Cure & Forum Classification Audit",
    statute: "TRAI Act 1997 s.2(1)(j) / Commercial Courts Act s.2(1)(c)",
    action:
      "Verify DoT Unified License, ISP License, or MSO/LCO registration status of both parties before issuing any statutory notice. Route inter-operator claims to TRAI Regulation notice and enterprise subscriber claims to Order XXXVII / Contract Act s.74 notice.",
  },
  {
    window: "21 Days (Broadcasting)",
    milestone: "Mandatory TRAI Pre-Disconnection Notice (MSO–LCO / Broadcaster)",
    statute: "Telecommunication (Broadcasting & Cable) Interconnection Regulations",
    action:
      "MSOs and Broadcasters must serve a 21-day written disconnection notice specifying unpaid subscription/carriage invoices before switching off signals or filing a Section 14(a)(ii) recovery petition in TDSAT.",
  },
  {
    window: "30 – 60 Days (Commercial Court)",
    milestone: "Pre-Institution Mediation & Urgent Interim Relief",
    statute: "Commercial Courts Act 2015 s.12A (Patil Automation / Yamini Manohar)",
    action:
      "For enterprise ILL, MPLS, colocation, or CPaaS subscriber claims above ₹3 Lakh without an arbitration clause, complete mandatory Section 12A mediation unless urgent asset/CPE preservation under Order XXXIX / Order XXXVIII Rule 5 applies.",
  },
  {
    window: "Within 3 Years",
    milestone: "Statutory Limitation Cutoff (No Condonation for Original Suits)",
    statute: "Limitation Act 1963 Art. 14 & Art. 55 / TRAI Act s.14",
    action:
      "Original money-recovery petitions before TDSAT and Commercial Courts are governed by the 3-year limitation period from each unpaid invoice due date or last written acknowledgment under Section 18 Limitation Act. Section 14 Limitation Act exclusion for wrong-forum time is narrow and discretionary.",
  },
  {
    window: "Post-Decree",
    milestone: "Execution of TDSAT Orders as Civil Court Decrees",
    statute: "TRAI Act 1997 s.19 & Code of Civil Procedure, 1908 Order XXI",
    action:
      "A final money order passed by TDSAT is executable as a decree of a Civil Court under Section 19 TRAI Act, enabling bank account garnishee attachment and asset execution through the jurisdictional District/High Court.",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "TDSAT Holds Wide Exclusive Jurisdiction Over Inter-Licensee Recovery & Section 15 Bars Civil Courts",
    parties: "Union of India v. Tata Teleservices (Maharashtra) Ltd.",
    citation: "(2007) 7 SCC 517, Supreme Court of India",
    date: "Judgment Dated 20 August 2007",
    facts:
      "Disputes arose over demand notices for license fees and recovery of dues arising out of telecom license agreements. The scope of TDSAT's original jurisdiction under Section 14(a) versus ordinary Civil Court jurisdiction under Section 15 was challenged.",
    holding:
      "The Supreme Court held that Section 14(a) of the TRAI Act confers wide and exclusive jurisdiction on TDSAT to adjudicate any dispute between a licensor and a licensee, or between two or more service providers, including claims for recovery of money and counterclaims. Correspondingly, Section 15 bars Civil Courts from entertaining any suit or proceeding in respect of any matter TDSAT is empowered to determine.",
    amount: "Section 14(a) Exclusive Jurisdiction + Section 15 Civil Court Ouster Confirmed",
    takeaway:
      "Any MSO-vs-LCO subscription recovery suit, broadcaster carriage claim, or telco interconnect suit filed in a District Court or Commercial Court is liable to outright rejection under Order VII Rule 11 CPC as barred by Section 15 TRAI Act.",
  },
  {
    title: "Section 12A Pre-Institution Mediation Is Mandatory in Commercial Courts—Except Urgent Interim Relief",
    parties: "Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd.",
    citation: "(2022) 10 SCC 1, Supreme Court of India",
    date: "Judgment Dated 17 August 2022",
    facts:
      "Commercial suits valued at ₹3 Lakh and above were instituted directly before Commercial Courts without exhausting pre-institution mediation under Section 12A of the Commercial Courts Act, 2015.",
    holding:
      "The Supreme Court declared Section 12A mandatory in all commercial suits that do not contemplate urgent interim relief. Any non-urgent commercial recovery suit filed without a Section 12A Non-Starter Report must be rejected under Order VII Rule 11 CPC.",
    amount: "Mandatory s.12A Mediation Gatekeeping for Enterprise ISP / Data Center Suits >= ₹3 Lakh",
    takeaway:
      "Enterprise ISPs, Data Centers, and CPaaS providers suing corporate subscribers in Commercial Courts must complete the 2–3 month Section 12A mediation step (or plead genuine urgent interim CPE/asset relief) before filing Order XXXVII suits.",
  },
  {
    title: "Strict Scrutiny of 'Urgent Interim Relief' Exception to Section 12A Mediation",
    parties: "Yamini Manohar v. T.K.D. Keerthi",
    citation: "(2024) 5 SCC 815, Supreme Court of India",
    date: "Judgment Dated 13 October 2023",
    facts:
      "Plaintiffs attempted to bypass Section 12A Commercial Courts mediation by attaching pro-forma interim injunction applications to ordinary money recovery plaints.",
    holding:
      "The Supreme Court ruled that Commercial Courts must independently examine the plaint and documents to verify whether the suit genuinely contemplates urgent interim relief—such as preventing imminent dissipation of leased hardware or bank balances—rather than serving as a camouflage to evade Section 12A.",
    amount: "Plaint-Level Bona Fide Urgency Test for Commercial Court Exemption",
    takeaway:
      "When an ISP or MSP seeks urgent attachment before judgment or injunction against unauthorized resale of leased Cisco/Fortinet CPE, the plaint must annex concrete BNS s.316/telemetry evidence proving imminent asset dissipation.",
  },
  {
    title: "Section 74 Contract Act Standard for Enterprise ILL / MPLS Lock-In Damages",
    parties: "Kailash Nath Associates v. Delhi Development Authority",
    citation: "(2015) 4 SCC 136, Supreme Court of India",
    date: "Judgment Dated 09 January 2015",
    facts:
      "A contracting party sought to forfeit/recover a fixed sum upon premature termination without demonstrating actual loss or a genuine pre-estimate of damages under Section 74 of the Indian Contract Act, 1872.",
    holding:
      "The Supreme Court held that under Section 74, a party complaining of breach is entitled to reasonable compensation not exceeding the named amount, provided actual loss or a genuine pre-estimate of sunk expenditure is proved where feasible.",
    amount: "Genuine Pre-Estimate Required for Lock-In & Early Termination Recovery",
    takeaway:
      "In Commercial Court or Arbitration claims against enterprise ILL/MPLS customers, ISPs must plead waived installation OTCs and unamortized last-mile fiber CapEx rather than bare punitive lock-in multipliers.",
  },
];

const DEFENSE_PREEMPTION_ROWS = [
  {
    objection: "\"Civil / Commercial Court has no jurisdiction — TRAI Act s.15 bars this suit!\"",
    raisedBy: "Enterprise ILL / MPLS / Cloud Subscriber in Commercial Court",
    rebuttal:
      "Produce the Customer Application Form (CAF) and MCA master data showing the defendant is an end-user corporate consumer, NOT a DoT-licensed 'service provider' under s.2(1)(j) TRAI Act. Under s.14(a)(ii), TDSAT has zero jurisdiction over service-provider vs. individual/enterprise subscriber debt.",
  },
  {
    objection: "\"TDSAT cannot hear this — our LCO / Interconnect Agreement has an Arbitration Clause!\"",
    raisedBy: "Defaulting LCO, MSO, or Licensed Interconnect Partner before TDSAT",
    rebuttal:
      "Cite Section 14 read with Section 15 TRAI Act and Supreme Court precedent holding that statutory TDSAT jurisdiction over disputes between two service providers cannot be ousted by a private arbitration clause where regulatory/interconnect obligations are implicated.",
  },
  {
    objection: "\"We never received the 21-day TRAI Disconnection Notice — petition is premature!\"",
    raisedBy: "Defaulting LCO or Broadcaster in TDSAT",
    rebuttal:
      "Attach BSA 2023 Section 63 certified email headers, WhatsApp delivery receipts, and India Post Speed Post RPAD tracking logs proving 21-day advance service at the registered address and regulatory email ID.",
  },
  {
    objection: "\"Suit is barred by Section 12A Commercial Courts Act (no pre-institution mediation)!\"",
    raisedBy: "Defaulting Corporate Subscriber in Order XXXVII / Commercial Suit",
    rebuttal:
      "Either attach the District Legal Services Authority (DLSA) Section 12A Non-Starter Report (if mediation failed/defaulted) OR plead concrete Yamini Manohar urgency backed by proof of imminent CPE hardware removal or corporate closure.",
  },
];

const FAQS = [
  {
    q: "Can an enterprise ISP file a recovery petition in TDSAT against a corporate customer that defaults on ILL or MPLS bills?",
    a: "No. TDSAT's original jurisdiction under Section 14(a)(ii) of the TRAI Act, 1997 applies strictly to disputes between 'two or more service providers' (or licensor vs. licensee). An enterprise corporate customer consuming internet bandwidth or MPLS connectivity for its own business is a subscriber/consumer, not a DoT-licensed service provider. Filing against an enterprise subscriber in TDSAT will result in dismissal for lack of jurisdiction. Such claims must be filed in the Commercial Court (if ₹3 Lakh or above), Civil Court (Order XXXVII CPC), or Arbitration.",
  },
  {
    q: "Why does Section 15 of the TRAI Act bar District and Commercial Courts from hearing MSO vs LCO recovery suits?",
    a: "Under Section 2(1)(j) and Section 2(1)(k) of the TRAI Act, 1997 (as amended by the 2004 Broadcasting Notification), both Multi-System Operators (MSOs) and Local Cable Operators (LCOs) are statutory 'service providers'. Because Section 14(a)(ii) vests exclusive jurisdiction over disputes between service providers in TDSAT, Section 15 expressly bars every Civil Court (including Commercial Courts) from entertaining any suit on that subject matter. A District Judge will reject an MSO-vs-LCO plaint under Order VII Rule 11 CPC.",
  },
  {
    q: "How does a cable MSO or broadcaster enforce a money decree passed by TDSAT?",
    a: "Under Section 19 of the TRAI Act, 1997, an order passed by TDSAT is executable as a decree of a Civil Court. Once TDSAT quantifies the unpaid subscription, placement, or carriage arrears and passes a final money order, the creditor can initiate execution proceedings (including Order XXI CPC attachment of bank accounts, immovable assets, and garnishee orders) or seek a execution transfer certificate to the jurisdictional Civil Court where the defaulter's assets are located.",
  },
  {
    q: "What happens if an ISP or MSO loses 1–2 years in the wrong forum—is the limitation period automatically saved?",
    a: "Not automatically. While Section 14 of the Limitation Act, 1963 allows exclusion of time spent prosecuting a proceeding in good faith before a court lacking jurisdiction, the creditor bears a heavy burden to prove 'due diligence and good faith'. Courts frequently deny Section 14 exclusion where statutory ouster (like Section 15 TRAI Act) was plain on the face of the statute, leaving the underlying invoices time-barred after 3 years.",
  },
  {
    q: "Where do unlicensed passive infrastructure, OFC trenching, or tower civil contractors file for unpaid bills?",
    a: "Unlicensed civil contractors (OFC trenching, civil foundation, DG maintenance, or non-licensed IT hardware/MSP vendors) are NOT 'service providers' under the TRAI Act. Their unpaid RA bills and retention money disputes cannot go to TDSAT. Instead, they must be routed to Commercial Courts (after Section 12A mediation), Institutional Arbitration, Order XXXVII CPC Summary Suits, or the MSME Facilitation Council (MSEFC) under Section 18 of the MSMED Act, 2006.",
  },
  {
    q: "Does TDSAT or Commercial Court require Section 63 BSA 2023 certificates for billing logs and CDRs?",
    a: "Yes. Whether proving LCO subscriber-base logs and STB activation reports before TDSAT, or proving NOC MRTG bandwidth graphs, smart-PDU kWh logs, and email/WhatsApp notice delivery before a Commercial Court, electronic records must be accompanied by a Section 63 Bharatiya Sakshya Adhiniyam (BSA), 2023 certificate (replacing Section 65B Evidence Act) signed by the system administrator or authorized officer.",
  },
  {
    q: "How can a telecom operator, ISP, or MSO handle 50 to 5,000+ overdue accounts split across TDSAT and Commercial Courts?",
    a: "Institutional telecom and broadband creditors use an automated pre-litigation triage workflow: every account is tagged by counterparty status (DoT/MIB Licensee vs. Enterprise/Retail Subscriber), ticket size (above or below ₹3 Lakh Commercial Court threshold), and arbitration clause presence. Fact-verified notices (21-day TRAI Disconnection Notices for LCOs; 15-day Order XXXVII / Contract Act s.74 notices for enterprise clients) can be dispatched in bulk via CSV upload through a dedicated Representees desk.",
  },
];

const PRIMARY_SOURCES = [
  {
    title:
      "The Telecom Regulatory Authority of India (TRAI) Act, 1997 (Sections 2, 14, 15 & 19 — TDSAT Exclusive Jurisdiction & Civil Court Bar)",
    url: "https://www.indiacode.nic.in/handle/123456789/1970",
  },
  {
    title:
      "Telecom Disputes Settlement and Appellate Tribunal (TDSAT) — Official Filing Portal, Cause Lists & Procedures",
    url: "https://tdsat.gov.in/",
  },
  {
    title:
      "The Commercial Courts Act, 2015 (Sections 2(1)(c) & 12A — Specified Value & Pre-Institution Mediation)",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title:
      "The Code of Civil Procedure, 1908 (Order VII Rule 11, Order XXI Execution & Order XXXVII Summary Suits)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Admissibility of Electronic Records, CDRs & MRTG Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "Telecom Regulatory Authority of India (TRAI) — Broadcasting & Cable Interconnection Regulations",
    url: "https://www.trai.gov.in/",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: EXACT_H1,
  description: META_DESCRIPTION,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": CANONICAL_URL,
  },
  image: [`${SITE_URL}/blog_money_recovery.png`],
  datePublished: "2026-11-18T12:50:00+05:30",
  dateModified: "2026-11-18T12:50:00+05:30",
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    jobTitle: "Advocate & Founder, AMA Legal Solutions",
    url: `${SITE_URL}/about`,
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
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
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
      name: "Telecom, ISP & Data Center Recovery",
      item: `${SITE_URL}/industries/telecom-isp-datacenter-msp-recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "TDSAT vs Commercial Court Jurisdiction",
      item: CANONICAL_URL,
    },
  ],
};

export default function TdsatVsCommercialCourtJurisdictionPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
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
            <span>IND-18 Telecom &amp; Broadcasting Statute</span>
            <span className="text-red-500">&bull;</span>
            <span>TRAI Act 1997 s.14 &amp; s.15</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40-60 Word Executive Statutory Summary Box + Parent Hub Link */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            Under Section 14(a)(ii) and Section 15 of the TRAI Act, 1997, disputes between two
            licensed service providers (MSO vs LCO, Telco vs Telco, Broadcaster vs DTH) belong
            exclusively in TDSAT—Civil Courts are barred. Conversely, ISP or data center claims
            against enterprise subscribers go to Commercial Court or Arbitration. Explore our{" "}
            <Link
              href="/industries/telecom-isp-datacenter-msp-recovery"
              className="text-red-300 hover:text-white underline underline-offset-2 font-bold"
            >
              Telecom, Enterprise ISP &amp; Data Center Recovery Hub
            </Link>{" "}
            for full sector workflows.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div>
              <p className="text-lg sm:text-2xl font-black text-slate-100">s.14(a)(ii)</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                TDSAT: Service-Provider vs Service-Provider
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-red-400">s.15 Bar</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Civil Courts Ousted on TDSAT Matters
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">
                &#8377;3 Lakh+
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Commercial Court Floor (Enterprise ILL)
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-black text-amber-400">3 Years</p>
              <p className="text-[10px] sm:text-xs text-slate-400">
                Limitation Cutoff (Wrong Forum Risk)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <Breadcrumbs
          items={[
            {
              label: "Telecom, ISP & Data Center Recovery",
              href: "/industries/telecom-isp-datacenter-msp-recovery",
            },
            {
              label: "TDSAT vs Commercial Court Jurisdiction",
              href: PAGE_PATH,
            },
          ]}
        />

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0 mt-4">
          {/* Left Sticky Sidebar TOC */}
          <TdsatJurisdictionTableOfContents />

          {/* Main Content Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Statutory Split */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Why Section 14 vs Section 15 TRAI Act Splits Telecom Recovery
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Filing a telecom, ISP, or broadcasting recovery claim in the wrong adjudicatory
                  forum is the single most expensive procedural blunder in the Indian communications
                  sector. Every year, general commercial litigators unfamiliar with the{" "}
                  <strong>Telecom Regulatory Authority of India (TRAI) Act, 1997</strong> commit
                  one of two opposite mistakes—both ending in summary dismissal after 12 to 24
                  months of wasted litigation and mounting limitation risk:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#DC2626] mb-1.5">
                      Error 1: Inter-Operator Suit in District / Commercial Court
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      A Cable MSO sues a defaulting Local Cable Operator (LCO) for ₹35 Lakh in
                      subscription arrears and unreturned Set-Top Boxes before a District Civil
                      Judge. The LCO moves an application under <strong>Order VII Rule 11 CPC</strong>{" "}
                      citing <strong>Section 15 TRAI Act</strong>, and the plaint is rejected
                      outright because both parties are statutory &ldquo;service providers&rdquo;.
                    </p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-1.5">
                      Error 2: Enterprise Subscriber Suit in TDSAT
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      A Class-A Enterprise ISP files a TDSAT petition to recover ₹18 Lakh in unpaid
                      dedicated ILL bandwidth and lock-in CapEx from a corporate IT/ITES customer.
                      TDSAT dismisses the petition at the threshold because the corporate buyer is an{" "}
                      <strong>end-user subscriber</strong>—not a DoT-licensed service provider under{" "}
                      <strong>Section 2(1)(j)</strong>.
                    </p>
                  </div>
                </div>

                <p>
                  The statutory dividing line rests on a strict two-question test:{" "}
                  <strong>(a)</strong> Are <em>both</em> the claimant and the respondent
                  DoT-licensed or MIB-registered &ldquo;service providers&rdquo; (or licensor and
                  licensee)? and <strong>(b)</strong> Does the debt arise out of a regulated
                  telecommunication, interconnect, or broadcasting/cable service? When the answer to
                  both is <strong>Yes</strong>, Section 14(a) vests exclusive original jurisdiction
                  in TDSAT and Section 15 ousts every Civil and Commercial Court. When the debtor is
                  an enterprise end-customer, colocation tenant, or unlicensed civil contractor,
                  TDSAT has zero jurisdiction and recovery proceeds via{" "}
                  <Link
                    href="/law/order-37-summary-suit-money-recovery"
                    className="text-[#DC2626] font-semibold underline underline-offset-2"
                  >
                    Order XXXVII CPC Summary Suits
                  </Link>{" "}
                  in the Commercial Court or Institutional Arbitration.
                </p>
              </div>
            </section>

            {/* Section 2: Decision Tree SVG + Mobile Cards */}
            <section
              id="heading-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Forum Routing Decision Tree: TDSAT vs Commercial Court
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-6">
                General Counsel and collections teams must apply this statutory counterparty filter
                before dispatching a pre-litigation demand notice or paying court/tribunal fees:
              </p>

              {/* Desktop SVG Decision Tree */}
              <div className="hidden md:block w-full overflow-x-auto bg-slate-900 rounded-2xl p-6 border border-slate-800">
                <svg
                  viewBox="0 0 820 340"
                  width={820}
                  height={340}
                  className="w-full h-auto"
                  role="img"
                  aria-label="TDSAT vs Commercial Court jurisdiction routing decision tree"
                >
                  {/* Root Node */}
                  <rect x="235" y="16" width="350" height="54" rx="10" fill="#DC2626" />
                  <text
                    x="410"
                    y="39"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="13"
                    fontWeight="bold"
                  >
                    WHO IS THE DEFAULTING COUNTERPARTY?
                  </text>
                  <text x="410" y="57" textAnchor="middle" fill="#FEE2E2" fontSize="11">
                    Check DoT / MIB License &amp; TRAI Act s.2(1)(j) Status
                  </text>

                  {/* Connector Lines */}
                  <line x1="410" y1="70" x2="410" y2="105" stroke="#64748B" strokeWidth="2" />
                  <line x1="195" y1="105" x2="625" y2="105" stroke="#64748B" strokeWidth="2" />
                  <line x1="195" y1="105" x2="195" y2="135" stroke="#64748B" strokeWidth="2" />
                  <line x1="625" y1="105" x2="625" y2="135" stroke="#64748B" strokeWidth="2" />

                  {/* Left Branch: Licensed Service Provider */}
                  <rect
                    x="35"
                    y="135"
                    width="320"
                    height="72"
                    rx="10"
                    fill="#1E293B"
                    stroke="#38BDF8"
                    strokeWidth="1.5"
                  />
                  <text
                    x="195"
                    y="158"
                    textAnchor="middle"
                    fill="#38BDF8"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    LICENSED SERVICE PROVIDER / MSO / LCO
                  </text>
                  <text x="195" y="176" textAnchor="middle" fill="#E2E8F0" fontSize="11">
                    Telco-Interconnect, Broadcaster-DTH, MSO-LCO,
                  </text>
                  <text x="195" y="192" textAnchor="middle" fill="#E2E8F0" fontSize="11">
                    Unified Licensee, or IP-1 Registered Sharing
                  </text>

                  {/* Right Branch: Subscriber / Unlicensed */}
                  <rect
                    x="465"
                    y="135"
                    width="320"
                    height="72"
                    rx="10"
                    fill="#1E293B"
                    stroke="#34D399"
                    strokeWidth="1.5"
                  />
                  <text
                    x="625"
                    y="158"
                    textAnchor="middle"
                    fill="#34D399"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    ENTERPRISE SUBSCRIBER / UNLICENSED VENDOR
                  </text>
                  <text x="625" y="176" textAnchor="middle" fill="#E2E8F0" fontSize="11">
                    Corporate ILL/MPLS Client, Colocation Tenant,
                  </text>
                  <text x="625" y="192" textAnchor="middle" fill="#E2E8F0" fontSize="11">
                    CPaaS Buyer, or Civil OFC Trenching Contractor
                  </text>

                  {/* Verticals to Outcome */}
                  <line x1="195" y1="207" x2="195" y2="242" stroke="#38BDF8" strokeWidth="2" />
                  <line x1="625" y1="207" x2="625" y2="242" stroke="#34D399" strokeWidth="2" />

                  {/* Left Outcome */}
                  <rect x="35" y="242" width="320" height="78" rx="10" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
                  <text
                    x="195"
                    y="266"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="13"
                    fontWeight="bold"
                  >
                    EXCLUSIVE FORUM: TDSAT (New Delhi)
                  </text>
                  <text x="195" y="285" textAnchor="middle" fill="#CBD5E1" fontSize="11">
                    TRAI Act s.14(a)(ii) Petition &bull; Civil Courts Barred (s.15)
                  </text>
                  <text x="195" y="303" textAnchor="middle" fill="#94A3B8" fontSize="10.5">
                    21-Day TRAI Disconnection Notice &rarr; s.19 Decree Execution
                  </text>

                  {/* Right Outcome */}
                  <rect x="465" y="242" width="320" height="78" rx="10" fill="#0F172A" stroke="#34D399" strokeWidth="1.5" />
                  <text
                    x="625"
                    y="266"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="13"
                    fontWeight="bold"
                  >
                    COMMERCIAL COURT / ARBITRATION
                  </text>
                  <text x="625" y="285" textAnchor="middle" fill="#CBD5E1" fontSize="11">
                    Order XXXVII CPC (&ge; &#8377;3L) &bull; TDSAT Has Zero Power
                  </text>
                  <text x="625" y="303" textAnchor="middle" fill="#94A3B8" fontSize="10.5">
                    15-Day Cure Notice &rarr; s.12A Mediation / s.21 Arbitration
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="md:hidden space-y-3">
                <div className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800">
                  <p className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-1">
                    Track A &bull; Licensed Service Provider / MSO / LCO / Broadcaster
                  </p>
                  <p className="text-sm font-bold mb-1">Exclusive Forum: TDSAT (Section 14)</p>
                  <p className="text-xs text-slate-300">
                    Civil &amp; Commercial Courts are barred under Section 15 TRAI Act. Serve 21-day
                    TRAI Disconnection Notice, file Section 14(a)(ii) Petition, and execute under
                    Section 19.
                  </p>
                </div>
                <div className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800">
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
                    Track B &bull; Enterprise Subscriber / Colocation Tenant / Civil Contractor
                  </p>
                  <p className="text-sm font-bold mb-1">
                    Forum: Commercial Court (Order XXXVII) / Arbitration / MSEFC
                  </p>
                  <p className="text-xs text-slate-300">
                    TDSAT lacks jurisdiction over subscriber or non-licensee vendor debt. Serve
                    15-day Fact-Verified Notice, clear Section 12A mediation (for &#8377;3L+), and file
                    Order XXXVII Summary Suit.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Comparison Matrix */}
            <section
              id="heading-forum-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Side-by-Side Matrix: TDSAT, Commercial Court &amp; Arbitration
                </h2>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3 sm:p-4 font-bold">Jurisdictional Criterion</th>
                      <th className="p-3 sm:p-4 font-bold">TDSAT (New Delhi)</th>
                      <th className="p-3 sm:p-4 font-bold">Commercial Court (Order XXXVII)</th>
                      <th className="p-3 sm:p-4 font-bold">Institutional Arbitration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3 sm:p-4 font-bold text-slate-900">Governing Statute</td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        TRAI Act, 1997 s.14(a) &amp; s.15 (Civil Bar)
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Commercial Courts Act, 2015 s.2(1)(c) &amp; CPC Order XXXVII
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Arbitration &amp; Conciliation Act, 1996 (s.7, s.21, s.29A)
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">Eligible Parties</td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Licensor–Licensee; Telco–Telco; MSO–LCO; Broadcaster–DTH
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        ISP vs Enterprise Customer; Data Center vs Tenant; SI/Vendor
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Any commercial parties with a valid written Section 7 clause
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 font-bold text-slate-900">Pecuniary Floor</td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        No minimum floor (any inter-operator arrears)
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Specified Value &ge; &#8377;3,00,000 (below &#8377;3L goes to Civil Judge)
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        No statutory floor (economical &ge; &#8377;5L or batch desk)
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        Mandatory Pre-Step
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        21-Day TRAI Disconnection / Cure Notice (Broadcasting)
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Section 12A Mediation (unless urgent interim relief proved)
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Section 21 Notice Invoking Arbitration (stops limitation)
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 font-bold text-slate-900">Court / Filing Fee</td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Modest fixed TDSAT petition fee (&#8377;5,000–&#8377;10,000 typical)
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Ad valorem State Court Fee (1%–3.5% of claim value)
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Fourth Schedule / Institutional Arbitrator fee schedule
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        Interim Asset Relief
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Signal swap restraint, STB inventory freeze &amp; interim deposit
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Order XXXVIII Rule 5 attachment before judgment / Order XXXIX
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Section 9 (Court) or Section 17 (Tribunal) interim freeze
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        Decree Execution
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Executable as Civil Court decree via Section 19 TRAI Act
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Direct Order XXI CPC execution (bank garnishee / attachment)
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Section 36 award enforcement after 90-day s.34 window
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Statutory Timelines */}
            <section
              id="heading-timelines"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Statutory Timelines: Pre-TDSAT Notices &amp; Limitation Stops
                </h2>
              </div>

              <div className="space-y-4">
                {STATUTORY_TIMELINES.map((item) => (
                  <div
                    key={item.milestone}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-5 p-4 rounded-xl bg-slate-50 border border-slate-200"
                  >
                    <div className="sm:w-44 shrink-0">
                      <span className="inline-block px-2.5 py-1 rounded-lg bg-[#DC2626] text-white text-xs font-bold">
                        {item.window}
                      </span>
                      <p className="text-[11px] font-semibold text-slate-500 mt-1.5">
                        {item.statute}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                        {item.milestone}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {item.action}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: Binding Supreme Court Precedents */}
            <section
              id="heading-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Binding Supreme Court &amp; TDSAT Jurisdiction Precedents
                </h2>
              </div>

              <div className="space-y-5">
                {COURT_PRECEDENTS.map((item) => (
                  <div
                    key={item.parties}
                    className="relative pl-5 border-l-4 border-[#DC2626] bg-slate-50 rounded-r-xl p-4 sm:p-5 border-t border-r border-b border-slate-200"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626]">
                        {item.citation}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-500">{item.date}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 mb-1">
                      {item.parties}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mb-3">{item.title}</p>
                    <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <p>
                        <strong>Facts:</strong> {item.facts}
                      </p>
                      <p>
                        <strong>Holding:</strong> {item.holding}
                      </p>
                      <div className="mt-2 pt-2 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg">
                          {item.amount}
                        </span>
                      </div>
                      <p className="text-xs text-slate-800 font-medium bg-white p-3 rounded-lg border border-slate-200 mt-2">
                        <strong>Creditor Takeaway:</strong> {item.takeaway}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 6: Interactive Scenario Tabs */}
            <section
              id="heading-scenario-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  4 Telecom, ISP &amp; Broadcasting Forum Scenarios (GC Playbooks)
                </h2>
              </div>

              <TdsatJurisdictionScenarioTabs />
            </section>

            {/* Section 7: Worked Forum & Cost Comparison */}
            <section
              id="heading-worked-comparison"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Worked Forum &amp; Cost Comparison: &#8377;42L MSO vs Enterprise ILL
                </h2>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed mb-5">
                Consider two telecom creditors each holding <strong>&#8377;42,00,000</strong> in
                overdue receivables (&#8377;30L principal arrears + &#8377;12L contractual
                interest/equipment value). Statutory routing changes both cost and recovery speed:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800">
                  <span className="inline-block px-2.5 py-1 rounded text-[11px] font-bold uppercase tracking-wider bg-sky-950 text-sky-300 border border-sky-800 mb-3">
                    Case A &bull; Cable MSO vs Defaulting LCO (TDSAT)
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    <li>
                      <strong className="text-white">Claim Value:</strong> &#8377;42,00,000
                      (Subscription feed + 1,200 unreturned STBs)
                    </li>
                    <li>
                      <strong className="text-white">Mandatory Pre-Step:</strong> 21-Day TRAI
                      Disconnection Notice via Email + RPAD
                    </li>
                    <li>
                      <strong className="text-white">Correct Forum:</strong> TDSAT s.14(a)(ii)
                      Petition (District Court barred by s.15)
                    </li>
                    <li>
                      <strong className="text-white">Statutory Filing Fee:</strong> Fixed TDSAT
                      petition fee (~&#8377;5,000–&#8377;10,000, no ad valorem 2% court fee)
                    </li>
                    <li className="text-emerald-400 font-bold pt-1">
                      Outcome: Interim signal-swap restraint + Section 19 executable money decree
                    </li>
                  </ul>
                </div>

                <div className="bg-emerald-50 text-slate-900 rounded-2xl p-5 border border-emerald-200">
                  <span className="inline-block px-2.5 py-1 rounded text-[11px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300 mb-3">
                    Case B &bull; Class-A ISP vs Corporate ILL Client (Commercial Court)
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li>
                      <strong className="text-slate-900">Claim Value:</strong> &#8377;42,00,000
                      (Consumed MRC + waived fiber OTC lock-in + Cisco CPE)
                    </li>
                    <li>
                      <strong className="text-slate-900">Mandatory Pre-Step:</strong> 15-Day
                      Advocate Cure Notice + s.12A Mediation (or s.21 Arbitration)
                    </li>
                    <li>
                      <strong className="text-slate-900">Correct Forum:</strong> Commercial Court
                      Order XXXVII Summary Suit (TDSAT has zero power)
                    </li>
                    <li>
                      <strong className="text-slate-900">Statutory Filing Fee:</strong> State ad
                      valorem court fee (refundable in full upon s.12A settlement)
                    </li>
                    <li className="text-emerald-800 font-bold pt-1">
                      Outcome: Summary decree unless defendant proves triable defense + CPE
                      recovery
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 8: Defense Pre-Emption Table */}
            <section
              id="heading-defense-preemption"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Pre-Empting Jurisdiction &amp; Section 15 Bar Objections
                </h2>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3 sm:p-4 font-bold">Debtor Procedural Objection</th>
                      <th className="p-3 sm:p-4 font-bold">Typical Defaulter</th>
                      <th className="p-3 sm:p-4 font-bold">Creditor Statutory Pre-Emption</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {DEFENSE_PREEMPTION_ROWS.map((row) => (
                      <tr key={row.objection}>
                        <td className="p-3 sm:p-4 font-bold text-[#DC2626]">{row.objection}</td>
                        <td className="p-3 sm:p-4 text-slate-700 font-medium">{row.raisedBy}</td>
                        <td className="p-3 sm:p-4 text-slate-700">{row.rebuttal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 9: BSA s.63 Evidence Checklist & Ecosystem Links */}
            <section
              id="heading-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  TRAI License, CAF &amp; BSA s.63 Admissibility Checklist
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    title: "1. Counterparty License / Registration Proof",
                    desc: "Download active DoT Unified/ISP License or MIB MSO/LCO registration records to establish s.2(1)(j) status (or prove non-licensee corporate subscriber status).",
                  },
                  {
                    title: "2. Signed CAF / Interconnect Agreement",
                    desc: "Preserve stamped or click-wrap Customer Application Forms, RIO schedules, and lock-in CapEx addenda for Order XXXVII or TDSAT maintainability.",
                  },
                  {
                    title: "3. 21-Day TRAI / 15-Day Cure Dispatch Logs",
                    desc: "Retain Email SMTP headers, WhatsApp business delivery receipts, and India Post Speed Post RPAD acknowledgments.",
                  },
                  {
                    title: "4. BSA 2023 s.63 Telemetry & Billing Certificate",
                    desc: "Execute a Section 63 BSA 2023 certificate covering NOC MRTG bandwidth graphs, CAS/SMS subscriber logs, CDRs, and GST e-invoices.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200"
                  >
                    <h3 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Mandatory Internal Cross-Links (Hub, Calculators, Templates, Sibling Spokes, Seed Assets) */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-red-400 mb-3">
                  Connected IND-18 Telecom Guides, Calculators &amp; Templates
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <Link
                    href="/industries/telecom-isp-datacenter-msp-recovery"
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                  >
                    <span className="font-bold text-white block">
                      Telecom, ISP &amp; Data Center Recovery Hub &rarr;
                    </span>
                    <span className="text-slate-400 text-xs">
                      Complete IND-18 pillar playbooks &amp; sector directory
                    </span>
                  </Link>
                  <Link
                    href="/enterprise-leased-line-ill-mpls-sdwan-lock-in-breach-recovery-isp"
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                  >
                    <span className="font-bold text-white block">
                      Enterprise ILL / MPLS Lock-In Breach Recovery &rarr;
                    </span>
                    <span className="text-slate-400 text-xs">
                      Contract Act s.74 unamortized fiber CapEx &amp; CPE recovery
                    </span>
                  </Link>
                  <Link
                    href="/data-center-colocation-bare-metal-hosting-default-suspension-lien-law"
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                  >
                    <span className="font-bold text-white block">
                      Data Center Server Lien &amp; DPDP Suspension Law &rarr;
                    </span>
                    <span className="text-slate-400 text-xs">
                      Contract Act s.170/171 rack lien &amp; 7-day data-export window
                    </span>
                  </Link>
                  <Link
                    href="/tools/limitation-period-calculator"
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                  >
                    <span className="font-bold text-white block">
                      Limitation Period Calculator (3-Year Cutoff) &rarr;
                    </span>
                    <span className="text-slate-400 text-xs">
                      Check invoice expiry &amp; s.18 acknowledgment resets
                    </span>
                  </Link>
                  <Link
                    href="/tools/msme-delayed-payment-interest-calculator"
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                  >
                    <span className="font-bold text-white block">
                      MSME Delayed Payment Interest Calculator &rarr;
                    </span>
                    <span className="text-slate-400 text-xs">
                      3x RBI Bank Rate compounding for MSME ISPs &amp; MSPs
                    </span>
                  </Link>
                  <Link
                    href="/templates/it-software-saas-msa-payment-default-legal-notice"
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                  >
                    <span className="font-bold text-white block">
                      B2B MSA Payment Default Legal Notice Template &rarr;
                    </span>
                    <span className="text-slate-400 text-xs">
                      Interactive Commercial Court / Order XXXVII notice builder
                    </span>
                  </Link>
                  <Link
                    href="/services/vendor-and-invoice-recoveries"
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                  >
                    <span className="font-bold text-white block">
                      B2B Vendor &amp; Invoice Recovery Services &rarr;
                    </span>
                    <span className="text-slate-400 text-xs">
                      Advocate-managed commercial invoice escalation desk
                    </span>
                  </Link>
                  <Link
                    href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                  >
                    <span className="font-bold text-white block">
                      Bulk CSV Recovery Desk (10–10,000+ Cases) &rarr;
                    </span>
                    <span className="text-slate-400 text-xs">
                      Batch notice &amp; forum triage for telco &amp; MSO portfolios
                    </span>
                  </Link>
                </div>
              </div>
            </section>

            {/* Dual-Track B2B Conversion CTA */}
            <TdsatJurisdictionCTA />

            {/* Section 10: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Frequently Asked Questions: TDSAT vs Commercial Court
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((item) => (
                  <details
                    key={item.q}
                    className="group rounded-xl border border-slate-200 bg-slate-50 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="cursor-pointer list-none p-4 font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-4">
                      <span>{item.q}</span>
                      <span className="text-[#DC2626] font-black text-lg shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <div className="px-4 pb-4 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 11: Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Statutory Bare Acts &amp; Official Telecom Portals
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {PRIMARY_SOURCES.map((src) => (
                  <li key={src.url} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold mt-0.5">&bull;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline underline-offset-2 font-medium"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Advocate Attribution */}
              {/* TODO(reviewer): src/data/reviewers.ts is absent in this repository */}
              <div className="mt-6 pt-5 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500">
                <p>
                  <strong className="text-slate-800">Legal Review &amp; Statutory Author:</strong>{" "}
                  Anuj Anand Malik, Advocate &amp; Founder, AMA Legal Solutions
                </p>
                <p>Last Updated: 18 November 2026</p>
              </div>
            </section>
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
