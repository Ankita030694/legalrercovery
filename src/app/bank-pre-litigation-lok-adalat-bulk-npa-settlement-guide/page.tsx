import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import BankLokAdalatTableOfContents from "./BankLokAdalatTableOfContents";
import BankLokAdalatScenarioTabs from "./BankLokAdalatScenarioTabs";
import BankLokAdalatCTA from "./BankLokAdalatCTA";

export const revalidate = 86400;

const PAGE_URL = "/bank-pre-litigation-lok-adalat-bulk-npa-settlement-guide";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;

const EXACT_H1 =
  "Scaling Bank NPA Recovery via National Lok Adalats: Bulk Pre-Litigation Notice & Decree Playbook";

const META_TITLE =
  "Bank Pre-Litigation Lok Adalat Bulk NPA Settlement Playbook";

const META_DESCRIPTION =
  "Turn quarterly National Lok Adalats into high-conversion NPA recovery drives. Bulk DLSA referral formatting, OTS pre-alignment notices & decree execution.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
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
        alt: formatAltText(META_TITLE),
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

const WORKFLOW_STAGES = [
  {
    stage: "Stage 1 · T-45 to T-35",
    title: "CBS NPA Filtering & Board OTS Slab Tagging",
    detail:
      "Extract sub-₹20 Lakh retail, Mudra, KCC, education, and written-off accounts from CBS. Exclude fraud-flagged/wilful defaulters, strip compounded penal interest per RBI Penal Charges norms, and assign pre-approved Board OTS waiver bands (20%–55% interest/ledger relief) per aging bucket.",
  },
  {
    stage: "Stage 2 · T-35 to T-25",
    title: "Bulk DLSA / TLSC Pre-Litigation Referral Filing",
    detail:
      "Submit clean, deduplicated Section 20(2) pre-litigation case CSVs and batch authorization letters to District Legal Services Authorities (DLSA) and Taluka Legal Services Committees (TLSC) across the zone so official PLC (Pre-Litigation Case) numbers are allotted early.",
  },
  {
    stage: "Stage 3 · T-30 to T-5",
    title: "Tri-Channel WhatsApp + Email + RPAD OTS Priming",
    detail:
      "Dispatch Fact-verified bilingual OTS Invitation-cum-Lok Adalat Pre-Intimation Notices showing the exact PLC number, court venue, pre-calculated OTS payoff amount, zero-court-fee waiver deadline, and a dynamic UPI/NEFT token-deposit link (10% upfront booking).",
  },
  {
    stage: "Stage 4 · T-0 Sitting Day",
    title: "Pre-Consented Bench Execution & Section 21 Decree",
    detail:
      "Present pre-signed Joint Compromise Memos before the National Lok Adalat Bench (Judicial Officer + Member) with a clear default-acceleration clause so every settled account receives a non-appealable Civil Court Decree under Section 21 on sitting day.",
  },
  {
    stage: "Stage 5 · T+1 to T+90",
    title: "Installment Tracking & Order XXI Direct Execution",
    detail:
      "Monitor post-award settlement tranches. Where a borrower pays the 10% sitting-day token and defaults on balance installments, issue a 7-day Advocate Execution Warning and file an Execution Petition directly under CPC Order XXI (Rules 30, 41, 48)—bypassing civil trial completely.",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Lok Adalat Award Has Binding Status of Civil Court Decree — No Regular Appeal Lies",
    parties: "State of Punjab & Anr. v. Jalour Singh & Ors.",
    citation: "(2008) 2 SCC 660 — Supreme Court of India (3-Judge Bench)",
    date: "Judgment Dated 18 January 2008",
    facts:
      "A dispute was disposed of by a Lok Adalat bench and subsequently challenged via regular civil appeal on merits before a Division Bench. The Supreme Court examined the statutory limits of Lok Adalat jurisdiction and finality under Sections 19 to 22 of the Legal Services Authorities Act, 1987.",
    holding:
      "The Supreme Court held that a Lok Adalat performs a purely conciliatory function based on party consent, and once an Award is validly signed by the parties and bench under Section 21, it is deemed a Civil Court Decree, is final and binding on all parties, and no appeal lies to any court against the Award. Any challenge can only be mounted on narrow grounds of fraud or lack of consent via a Writ Petition under Articles 226/227.",
    impact: "Absolute Appellate Insulation for Bank Consent Awards",
    takeaway:
      "Once a defaulting borrower signs a pre-aligned OTS memo before the National Lok Adalat bench, they cannot drag the bank through District Judge or High Court civil appeals to stall recovery.",
  },
  {
    title: "Section 138 Cheque Bounce Compromise in Lok Adalat Is Directly Executable as a Civil Decree",
    parties: "K.N. Govindan Kutty Menon v. C.D. Shaji",
    citation: "(2012) 2 SCC 31 — Supreme Court of India",
    date: "Judgment Dated 28 November 2011",
    facts:
      "A criminal complaint filed under Section 138 of the Negotiable Instruments Act, 1881 was referred to a Lok Adalat, where the accused signed a compromise Award agreeing to pay the debt in installments, and later defaulted. The lower court declined civil execution, holding the underlying proceeding was criminal.",
    holding:
      "The Supreme Court overturned the lower court and held that by virtue of Section 21 of the Legal Services Authorities Act, 1987, even when a criminal complaint under Section 138 NI Act is referred by a Magistrate and settled in a Lok Adalat, the resulting Award is statutorily deemed a decree of a Civil Court and is directly executable under Order XXI CPC.",
    impact: "Converts Stalled s.138 Criminal Dockets Into Instant Civil Decrees",
    takeaway:
      "Banks should aggressively bundle pending Section 138 NI Act and Section 25 PSS Act e-NACH matters into quarterly National Lok Adalats—transforming slow criminal warrants into direct Order XXI salary and bank-account attachment decrees.",
  },
  {
    title: "Challenge to Lok Adalat Award Restricted Strictly to Article 226/227 Writ Jurisdiction",
    parties: "Bhargavi Constructions & Anr. v. Kothakapu Muthyam Reddy & Ors.",
    citation: "(2018) 13 SCC 480 — Supreme Court of India",
    date: "Judgment Dated 07 September 2017",
    facts:
      "Following a settlement passed by a Lok Adalat, a party instituted a fresh regular civil suit before a trial court seeking to declare the Lok Adalat Award null and void on grounds of alleged misrepresentation.",
    holding:
      "Affirming Jalour Singh, the Supreme Court held that a separate civil suit to set aside a Lok Adalat Award is barred in law under Order VII Rule 11(d) CPC. The sole narrow remedy available to an aggrieved party is invoking the extraordinary writ jurisdiction of the High Court under Articles 226 or 227.",
    impact: "Blocks Borrowers From Filing Dilatory Counter-Suits Post-Award",
    takeaway:
      "When banks record clean bilingual consent terms and verified signatures on sitting day, borrowers cannot stall Order XXI execution by filing fresh injunction suits in lower civil courts.",
  },
];

const FAQS = [
  {
    question:
      "Why do Indian banks see less than 8% borrower turnout at quarterly National Lok Adalats?",
    answer:
      "Turnout collapses below 8% for three operational reasons: first, bank branches submit raw CBS lists to District Legal Services Authorities (DLSA) too late (often T-10 to T-7), causing bare-bones DLSA postcards to arrive 2–4 days before—or even after—the Saturday sitting. Second, official DLSA notices use dense legal phrasing without telling the borrower what One-Time Settlement (OTS) discount is available. Third, borrowers receive no advance WhatsApp or vernacular advocate notice allowing them to arrange funds or pre-book their OTS slab before sitting day.",
  },
  {
    question:
      "Is there any pecuniary ceiling for banks referring pre-litigation NPAs under Section 20(2) of the Legal Services Authorities Act?",
    answer:
      "No. Unlike Debt Recovery Tribunals (which impose a ₹20 Lakh minimum floor under the RDB Act) or Permanent Lok Adalats for Public Utility Services (which carry a ₹1 Crore pecuniary cap under Section 22C), regular Pre-Litigation Lok Adalats organized under Section 19 read with Section 20(2) of the Legal Services Authorities Act, 1987 have no statutory upper or lower pecuniary limit. They are the premier zero-court-fee resolution channel for sub-₹20 Lakh retail, personal, Mudra, education, credit card, and KCC NPAs.",
  },
  {
    question:
      "Can banks enforce a National Lok Adalat Award if the borrower defaults after paying the 10% sitting-day token?",
    answer:
      "Yes. Under Section 21(1) of the Legal Services Authorities Act, 1987, every Lok Adalat Award is deemed to be a decree of a Civil Court and is final and binding on all parties with zero right of regular appeal. Provided the Joint Compromise Memo contains an express default-revival clause (stating that failure to pay balance installments revives the full ledger outstanding less amounts paid), the bank does not file a fresh civil suit—it files an Execution Petition directly under Order XXI CPC for salary attachment (Rule 48), asset disclosure (Rule 41), or bank garnishee freeze.",
  },
  {
    question:
      "Can Kisan Credit Card (KCC) and agricultural NPAs barred under SARFAESI Section 31(i) be settled in National Lok Adalats?",
    answer:
      "Yes. Section 31(i) of the SARFAESI Act prohibits banks from taking possession of agricultural land without court intervention, leaving PSU and Regional Rural Banks (RRBs) stuck with slow State Revenue Recovery Certificates (RRCs). Referring KCC and crop-loan NPAs to pre-litigation National Lok Adalats under Section 20(2) offers a state-backed, non-adversarial conciliation forum presided over by Judicial Officers. When timed post-harvest with vernacular OTS priming notices, Lok Adalats deliver binding Section 21 decrees without triggering rural law-and-order friction.",
  },
  {
    question:
      "Does settling a pending Civil Suit or Section 138 NI Act case in a National Lok Adalat refund the bank's court fees?",
    answer:
      "Yes. Under Section 16 of the Court Fees Act, 1870 (and corresponding State Court Fees statutes) read with Section 21(1) of the Legal Services Authorities Act, 1987, whenever a pending civil recovery suit is settled in a Lok Adalat, the plaintiff bank is statutorily entitled to a 100% refund of the full court fee paid at filing. Additionally, under Supreme Court K.N. Govindan Kutty Menon v. C.D. Shaji (2012), settling a pending Section 138 NI Act cheque bounce case in Lok Adalat converts the settlement into an executable civil decree.",
  },
  {
    question:
      "How does RBI's June 2023 Compromise Settlement Framework affect Bank OTS offers at National Lok Adalats?",
    answer:
      "Under the RBI Framework for Compromise Settlements and Technical Write-offs (June 8, 2023), banks must execute settlements strictly in accordance with a Board-approved policy defining delegation of powers, minimum sacrifice thresholds, cooling periods (minimum 12 months for non-farm exposures), and explicit treatment of wilful defaulters or fraud accounts. Pre-tagging eligible NPA accounts against Board OTS slabs at T-45 ensures Nodal Officers and panel advocates never breach audit delegation limits on Lok Adalat sitting day.",
  },
  {
    question:
      "What electronic dispatch evidence under BSA 2023 Section 63 should banks preserve for pre-Lok-Adalat priming notices?",
    answer:
      "To establish clean regulatory audit trails and support future Order XXI or civil proceedings if a borrower ignores the Lok Adalat notice, banks should archive: (1) fact-verified notice PDFs with unique PLC & loan reference numbers; (2) verified WhatsApp API delivery/read receipts and SMTP email delivery logs certified under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023; (3) India Post Speed Post RPAD booking receipts and tracking proofs invoking General Clauses Act Section 27 deemed service; and (4) certified Bankers' Books Evidence Act ledgers separating principal from uncompounded penal charges.",
  },
];

const PRIMARY_SOURCES = [
  {
    title:
      "The Legal Services Authorities Act, 1987 (Act No. 39 of 1987) — Sections 19, 20(1), 20(2), 21 & 22 (Organization, Pre-Litigation Cognizance & Deemed Decree Status)",
    url: "https://www.indiacode.nic.in/handle/123456789/1944",
  },
  {
    title:
      "National Legal Services Authority (NALSA) — National Lok Adalat Calendar & NALSA (Lok Adalats) Regulations, 2009",
    url: "https://nalsa.gov.in/",
  },
  {
    title:
      "Reserve Bank of India (RBI) — Framework for Compromise Settlements and Technical Write-offs (Circular dated June 8, 2023)",
    url: "https://www.rbi.org.in/",
  },
  {
    title:
      "The Code of Civil Procedure, 1908 — Order XXI (Execution of Decrees: Rules 30, 41, 48 & 54) & Section 89",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "The Court Fees Act, 1870 — Section 16 (100% Refund of Court Fee on Settlement via Lok Adalat)",
    url: "https://www.indiacode.nic.in/handle/123456789/2293",
  },
  {
    title:
      "Bharatiya Sakshya Adhiniyam (BSA), 2023 — Section 63 (Electronic Evidence Certification for Tri-Channel Notices & CBS Ledgers)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title:
      "The Bankers' Books Evidence Act, 1891 — Certified Ledger Admissibility for Banking Recovery & Execution Proceedings",
    url: "https://www.indiacode.nic.in/handle/123456789/2315",
  },
];

export default function BankPreLitigationLokAdalatGuidePage() {
  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: META_DESCRIPTION,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": CANONICAL_URL,
    },
    datePublished: "2026-11-19T00:00:00+05:30",
    dateModified: "2026-11-19T00:00:00+05:30",
    author: {
      "@type": "Person",
      name: "Anuj Anand Malik",
      jobTitle: "Advocate & Founder, AMA Legal Solutions",
    },
    reviewedBy: {
      "@type": "Person",
      name: "Anuj Anand Malik",
      jobTitle: "Advocate & Founder, AMA Legal Solutions",
    },
    publisher: {
      "@type": "Organization",
      name: "LegalRecovery.in",
      url: SITE_URL,
    },
    image: `${SITE_URL}/blog_money_recovery.png`,
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Banks Scale Pre-Litigation NPA Recovery via Quarterly National Lok Adalats",
    description:
      "5-stage institutional SOP for Regional Recovery Managers and PSU/Gramin Bank Nodal Officers covering CBS OTS slab tagging, bulk DLSA referral formatting, T-30 WhatsApp+RPAD priming, Section 21 consent awards, and Order XXI execution.",
    step: WORKFLOW_STAGES.map((s, idx) => ({
      "@type": "HowToStep",
      position: idx + 1,
      name: `${s.stage}: ${s.title}`,
      text: s.detail,
    })),
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
        name: "Indian Banks Loan & NPA Legal Recovery Hub",
        item: `${SITE_URL}/industries/banks-loan-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Bank Pre-Litigation Lok Adalat Bulk NPA Settlement Playbook",
        item: CANONICAL_URL,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* Structured Data (Article + HowTo + FAQPage + BreadcrumbList) */}
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

      {/* Dark Gradient Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>
              IND-01 Bank Recovery Playbook &middot; National Lok Adalat Bulk NPA SOP
            </span>
          </div>

          {/* Single Page H1 (Exact Verbatim Match to Article Schema Headline) */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* Executive Creditor Statutory Answer (40–60 words + Parent Hub Link) */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer &middot; LSA Act 1987 ss.19, 20(2) &amp; 21
            </span>
            Under Sections 19, 20(2), and 21 of the Legal Services Authorities Act, 1987, scheduled commercial, rural, and cooperative banks can convert bulk sub-₹20 Lakh retail, Mudra, and KCC NPAs into binding, non-appealable Civil Court Decrees at zero court fee. Within the{" "}
            <Link
              href="/industries/banks-loan-recovery"
              className="text-red-300 underline font-semibold hover:text-white transition-colors"
            >
              IND-01 Bank Loan &amp; NPA Recovery Framework
            </Link>
            , pairing early DLSA filings with T-30 vernacular WhatsApp + Speed Post RPAD OTS priming notices multiplies borrower turnout beyond the industry&apos;s sub-8% baseline.
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-2 sm:p-3">
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">
                Pre-Litigation Filing Fee
              </span>
              <p className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">
                ₹0 Court Fee
              </p>
              <span className="text-[10px] text-slate-400 block mt-0.5">
                +100% Refund on Pending Suits
              </span>
            </div>
            <div className="p-2 sm:p-3">
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">
                Unprimed Turnout Floor
              </span>
              <p className="text-xl sm:text-2xl font-black text-red-400 font-mono">
                &lt; 8% Avg
              </p>
              <span className="text-[10px] text-slate-400 block mt-0.5">
                Late DLSA Paper Summons
              </span>
            </div>
            <div className="p-2 sm:p-3">
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">
                Priming Cadence Window
              </span>
              <p className="text-xl sm:text-2xl font-black text-amber-400 font-mono">
                T-30 to T-5
              </p>
              <span className="text-[10px] text-slate-400 block mt-0.5">
                WhatsApp + Email + RPAD OTS
              </span>
            </div>
            <div className="p-2 sm:p-3">
              <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">
                Section 21 Award Force
              </span>
              <p className="text-xl sm:text-2xl font-black text-slate-100 font-mono">
                Civil Decree
              </p>
              <span className="text-[10px] text-slate-400 block mt-0.5">
                Direct Order XXI Execution
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Indian Banks Loan & NPA Recovery",
                href: "/industries/banks-loan-recovery",
              },
              {
                label: "Bank Pre-Litigation Lok Adalat Bulk NPA Playbook",
                href: PAGE_URL,
              },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <BankLokAdalatTableOfContents />

          {/* Right Main Editorial Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Turnout Bottleneck */}
            <section
              id="heading-turnout-bottleneck"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Institutional Diagnosis &middot; PSU, RRB &amp; SFB Recovery Desks
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Why Bank National Lok Adalat Turnout Stalls Below 8%
              </h2>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  Every quarter, Public Sector Banks (PSUs), Regional Rural Banks (RRBs), Small Finance Banks (SFBs), and Urban Cooperative Banks refer lakhs of sub-₹20 Lakh retail, Mudra, education, tractor, and Kisan Credit Card (KCC) Non-Performing Assets to NALSA&apos;s quarterly National Lok Adalats. On paper, the forum is unbeatable for a creditor: zero court fee under Section 20(2) of the Legal Services Authorities Act, 1987, no mandatory lawyer appearances per account, and an immediate non-appealable Civil Court Decree under Section 21.
                </p>
                <p>
                  Yet Regional Recovery Managers and Zonal Nodal Officers confront the same frustrating scorecard quarter after quarter: <strong>over 92% of referred NPA borrowers never show up at the DLSA or Taluka court bench</strong>. While our individual consumer guide on{" "}
                  <Link
                    href="/law/lok-adalat-pre-litigation-money-recovery"
                    className="text-[#DC2626] font-semibold hover:underline"
                  >
                    Pre-Litigation Lok Adalat Money Recovery
                  </Link>{" "}
                  explains the general statutory mechanics for private claimants, institutional bank drives fail because of a severe last-mile communication and OTS-alignment breakdown:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                  <div className="p-4 bg-red-50/70 border-l-4 border-[#DC2626] rounded-r-xl">
                    <p className="font-bold text-slate-900 text-sm mb-1.5">
                      1. Late DLSA Postcard Delivery
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Branches hand over raw Excel dumps to the DLSA office barely 10–12 days before the Saturday sitting. Manual court-process servers or ordinary post deliver summons 48 hours before—or days after—the sitting, leaving borrowers zero time to mobilize settlement cash.
                    </p>
                  </div>
                  <div className="p-4 bg-amber-50/70 border-l-4 border-amber-500 rounded-r-xl">
                    <p className="font-bold text-slate-900 text-sm mb-1.5">
                      2. Zero Pre-Negotiated OTS Slabs
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Standard DLSA summons quote the inflated full CBS ledger balance (including unapplied penal charges) without revealing the bank&apos;s Board-approved One-Time Settlement (OTS) discount. Terrified of arrest or full-balance pressure, rural and salaried borrowers stay away.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-100 border-l-4 border-slate-700 rounded-r-xl">
                    <p className="font-bold text-slate-900 text-sm mb-1.5">
                      3. Sitting-Day Queue Chaos
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Without pre-consented compromise memos or digital token collection ahead of sitting day, branch managers waste hours haggling over waiver authority at crowded court tables—and fail to insert default-revival clauses into signed Awards.
                    </p>
                  </div>
                </div>

                <p>
                  Solving sub-8% attendance does not require higher waiver sacrifices. It requires shifting the settlement conversation <strong>30 days upstream of the National Lok Adalat sitting</strong> through fact-verified bilingual WhatsApp, Email, and Speed Post RPAD priming notices synchronized with pre-approved Board OTS slabs and immediate Section 21 decree drafting.
                </p>
              </div>
            </section>

            {/* Section 2: T-45 to T+30 Workflow + Decision Tree SVG */}
            <section
              id="heading-lok-adalat-workflow"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  End-to-End Quarterly Campaign Calendar
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                T-45 to T+30 National Lok Adalat Bulk Recovery Workflow
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed mb-6">
                High-performing PSU Zonal Offices and Small Finance Bank collection verticals treat every quarterly NALSA National Lok Adalat (typically scheduled in March, May, September, and December) as a structured 75-day operational pipeline—never a last-week branch scramble.
              </p>

              {/* Desktop SVG Decision Tree Flowchart */}
              <div className="hidden md:block w-full overflow-x-auto bg-slate-950 rounded-2xl p-5 border border-slate-800 mb-6">
                <svg
                  viewBox="0 0 920 250"
                  width={920}
                  height={250}
                  role="img"
                  aria-label="5-Stage National Lok Adalat Bank Bulk NPA Recovery Decision Tree from T-45 CBS Filtering to Order XXI Execution"
                  className="w-full h-auto"
                >
                  <defs>
                    <marker
                      id="arrowRed"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#DC2626" />
                    </marker>
                    <marker
                      id="arrowEmerald"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#10B981" />
                    </marker>
                    <marker
                      id="arrowAmber"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#F59E0B" />
                    </marker>
                  </defs>

                  {/* Node 1 */}
                  <rect x="12" y="24" width="160" height="104" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <rect x="12" y="24" width="160" height="24" rx="12" fill="#DC2626" />
                  <text x="92" y="40" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="700">STAGE 1 · T-45</text>
                  <text x="92" y="68" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontWeight="700">CBS NPA Scrub</text>
                  <text x="92" y="85" textAnchor="middle" fill="#CBD5E1" fontSize="9.5">&lt;₹20L / Mudra / KCC</text>
                  <text x="92" y="101" textAnchor="middle" fill="#CBD5E1" fontSize="9.5">Board OTS Slab Tag</text>
                  <text x="92" y="117" textAnchor="middle" fill="#94A3B8" fontSize="9">Strip Penal Interest</text>

                  <line x1="172" y1="76" x2="198" y2="76" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrowRed)" />

                  {/* Node 2 */}
                  <rect x="200" y="24" width="160" height="104" rx="12" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <rect x="200" y="24" width="160" height="24" rx="12" fill="#DC2626" />
                  <text x="280" y="40" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="700">STAGE 2 · T-35</text>
                  <text x="280" y="68" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontWeight="700">Bulk DLSA Filing</text>
                  <text x="280" y="85" textAnchor="middle" fill="#CBD5E1" fontSize="9.5">LSA Act s.20(2) CSV</text>
                  <text x="280" y="101" textAnchor="middle" fill="#CBD5E1" fontSize="9.5">Obtain PLC Numbers</text>
                  <text x="280" y="117" textAnchor="middle" fill="#10B981" fontSize="9" fontWeight="700">₹0 Court Fee Filing</text>

                  <line x1="360" y1="76" x2="386" y2="76" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrowRed)" />

                  {/* Node 3 */}
                  <rect x="388" y="24" width="166" height="104" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <rect x="388" y="24" width="166" height="24" rx="12" fill="#DC2626" />
                  <text x="471" y="40" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="700">STAGE 3 · T-30 TO T-5</text>
                  <text x="471" y="68" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontWeight="700">Tri-Channel Priming</text>
                  <text x="471" y="85" textAnchor="middle" fill="#CBD5E1" fontSize="9.5">WhatsApp + Email + RPAD</text>
                  <text x="471" y="101" textAnchor="middle" fill="#FDE68A" fontSize="9.5" fontWeight="700">Vernacular OTS Slab</text>
                  <text x="471" y="117" textAnchor="middle" fill="#CBD5E1" fontSize="9">10% UPI Token Link</text>

                  <line x1="554" y1="76" x2="580" y2="76" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrowRed)" />

                  {/* Node 4 */}
                  <rect x="582" y="24" width="150" height="104" rx="12" fill="#1E293B" stroke="#10B981" strokeWidth="1.5" />
                  <rect x="582" y="24" width="150" height="24" rx="12" fill="#059669" />
                  <text x="657" y="40" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="700">STAGE 4 · T-0 DAY</text>
                  <text x="657" y="68" textAnchor="middle" fill="#F8FAFC" fontSize="11" fontWeight="700">Bench Consent</text>
                  <text x="657" y="85" textAnchor="middle" fill="#CBD5E1" fontSize="9.5">Signed Compromise</text>
                  <text x="657" y="101" textAnchor="middle" fill="#10B981" fontSize="9.5" fontWeight="700">s.21 Civil Decree</text>
                  <text x="657" y="117" textAnchor="middle" fill="#CBD5E1" fontSize="9">Default Revival Clause</text>

                  {/* Split Branches from Stage 4 */}
                  <line x1="732" y1="58" x2="758" y2="58" stroke="#10B981" strokeWidth="2" markerEnd="url(#arrowEmerald)" />
                  <line x1="657" y1="128" x2="657" y2="184" stroke="#F59E0B" strokeWidth="2" />
                  <line x1="657" y1="184" x2="758" y2="184" stroke="#F59E0B" strokeWidth="2" markerEnd="url(#arrowAmber)" />

                  {/* Outcome A: Paid */}
                  <rect x="760" y="20" width="148" height="78" rx="12" fill="#064E3B" stroke="#10B981" strokeWidth="1.5" />
                  <text x="834" y="44" textAnchor="middle" fill="#6EE7B7" fontSize="10" fontWeight="700">PAID ON SCHEDULE</text>
                  <text x="834" y="63" textAnchor="middle" fill="#FFFFFF" fontSize="10.5" fontWeight="700">NOC &amp; NPA Upgrade</text>
                  <text x="834" y="80" textAnchor="middle" fill="#A7F3D0" fontSize="9">CIBIL Settlement Update</text>

                  {/* Outcome B: Post-Award Default */}
                  <rect x="760" y="144" width="148" height="84" rx="12" fill="#451A03" stroke="#F59E0B" strokeWidth="1.5" />
                  <text x="834" y="167" textAnchor="middle" fill="#FCD34D" fontSize="10" fontWeight="700">POST-AWARD DEFAULT</text>
                  <text x="834" y="186" textAnchor="middle" fill="#FFFFFF" fontSize="10.5" fontWeight="700">Order XXI Execution</text>
                  <text x="834" y="203" textAnchor="middle" fill="#FDE68A" fontSize="9">Salary / Bank Garnishee</text>
                  <text x="834" y="218" textAnchor="middle" fill="#FDE68A" fontSize="9">Zero Fresh Civil Trial</text>

                  {/* No-Show Fallback from Stage 3 */}
                  <line x1="471" y1="128" x2="471" y2="184" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="4 4" />
                  <rect x="330" y="158" width="282" height="62" rx="10" fill="#0F172A" stroke="#475569" strokeWidth="1.2" />
                  <text x="471" y="180" textAnchor="middle" fill="#F87171" fontSize="10" fontWeight="700">NO-SHOW FALLBACK (BSA s.63 RECORD PRESERVED)</text>
                  <text x="471" y="198" textAnchor="middle" fill="#CBD5E1" fontSize="9.5">Escalate to s.25 PSS / s.138 NI / Batch ODR Arbitration / Order 37</text>
                  <text x="471" y="212" textAnchor="middle" fill="#94A3B8" fontSize="9">Zero wasted filing cost — notice serves as pre-suit statutory proof</text>
                </svg>
              </div>

              {/* Mobile & Detailed Stage Cards */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                {WORKFLOW_STAGES.map((item, idx) => (
                  <div
                    key={item.stage}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626]">
                          {item.stage}
                        </span>
                      </div>
                      <p className="text-xs font-bold text-slate-900 mb-1.5 leading-snug">
                        {item.title}
                      </p>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Statutory Matrix (Dark Slate-900 Header Table) */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Statutory Architecture &middot; Creditor-Side Bare Act Matrix
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Section 19, 20(2) &amp; 21 Legal Services Authorities Matrix
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed mb-5">
                Every Zonal Legal Officer and panel advocate managing quarterly bank drives must anchor their bulk DLSA filings, consent memos, and execution petitions in seven interlocking statutory provisions:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="py-3.5 px-4 font-bold uppercase tracking-wider text-[11px]">
                        Statute &amp; Section
                      </th>
                      <th className="py-3.5 px-4 font-bold uppercase tracking-wider text-[11px]">
                        Operational Power for Banks
                      </th>
                      <th className="py-3.5 px-4 font-bold uppercase tracking-wider text-[11px]">
                        Institutional Compliance Guardrail
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        LSA Act 1987 s.19(5)(ii)
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Grants Lok Adalat full pre-litigation jurisdiction over any bank recovery dispute not yet filed before any court, with no upper or lower pecuniary cap.
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        Cannot adjudicate non-compoundable criminal offences (e.g., BNS fraud/forgery cases); restrict batches to civil NPAs &amp; compoundable s.138/s.25 matters.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        LSA Act 1987 s.20(2)
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Authorizes the DLSA/TLSC to take cognizance of bulk pre-litigation bank applications upon unilateral bank referral and issue formal sitting notices to borrowers.
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        DLSA must afford a reasonable opportunity of hearing to the borrower before referring; submit referrals by T-35 so notice service is unimpeachable.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        LSA Act 1987 s.21(1)–(2)
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Deems every signed Lok Adalat Award a binding Civil Court Decree. Strictly final—zero regular civil appeal lies to District or High Courts.
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        Award MUST be signed by borrower, authorized bank officer, and bench members; always embed an explicit full-dues revival clause upon installment default.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Court Fees Act s.16
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Mandates 100% refund of ad-valorem civil court fees whenever a pending sub-₹20L money suit is referred under s.20(1) and settled in Lok Adalat.
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        Ensure the Lok Adalat bench records an express direction issuing the Court Fee Refund Certificate on sitting day to prevent registry delays.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        CPC Order XXI (R.30, 41, 48)
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Enables direct execution of broken Lok Adalat Awards through borrower asset-disclosure affidavits, employer salary attachment, and bank garnishee orders.
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        File Execution Petition within 12 years (Limitation Act Art. 136) directly in the local Civil Court having territorial jurisdiction over the debtor&apos;s assets.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        RBI OTS Framework (Jun 2023)
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        Permits Board-approved compromise settlements and technical write-off recovery drives, including regulated treatment of stressed retail/agri books.
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        Maintain strict adherence to Board-delegated OTS matrices, penal-charge uncompounding norms, and documented non-discriminatory slab criteria.
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
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Interactive Portfolio Recovery Desk
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-3">
                4 High-Volume Bank NPA Lok Adalat Playbooks (Interactive)
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed mb-6">
                Select a delinquent bank portfolio segment below to inspect the exact statutory hook, pre-sitting OTS priming controls, and Nodal Officer SOP:
              </p>

              <BankLokAdalatScenarioTabs />
            </section>

            {/* Section 5: Core Gap Filler — Pre-Lok-Adalat WhatsApp + RPAD OTS Priming Architecture */}
            <section
              id="heading-ots-priming"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Conversion Engine &middot; Solving the Last-Mile Attendance Gap
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Pre-Lok-Adalat WhatsApp + RPAD OTS Priming Architecture
              </h2>

              <div className="prose prose-slate max-w-none text-xs sm:text-sm md:text-base leading-relaxed text-slate-700 space-y-4">
                <p>
                  A generic court-clerk postcard reading <em>&ldquo;Appear before DLSA Bench No. 4 on Saturday&rdquo;</em> triggers avoidance—not repayment. Borrowers assume they will be berated in front of a judge for an impossible sum. To lift sitting attendance from under 8% into the 24%–35% bracket, banks must deploy a structured <strong>Fact-Verified OTS Invitation-cum-Lok Adalat Pre-Intimation Notice</strong> across three synchronized touchpoints ahead of sitting day:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5">
                  <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-950 text-red-400 border border-red-800 mb-2">
                      Wave 1 &middot; T-30 Days
                    </span>
                    <p className="font-bold text-sm text-white mb-1.5">
                      Bilingual Advocate RPAD + Email + WhatsApp Notice
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Served on Advocate letterhead in English + State vernacular (Hindi, Marathi, Tamil, Telugu, Kannada, Gujarati, Bengali). Quotes the exact DLSA PLC number, full ledger overdue, and the <strong>Special National Lok Adalat OTS Payoff Figure</strong> valid strictly until sitting day.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-950 text-amber-400 border border-amber-800 mb-2">
                      Wave 2 &middot; T-14 Days
                    </span>
                    <p className="font-bold text-sm text-white mb-1.5">
                      WhatsApp Interactive Slab Confirmation &amp; 10% Token Lock
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Borrowers tap a verified bank-domain WhatsApp reply (&ldquo;Confirm OTS&rdquo; / &ldquo;Request 2-Tranche Plan&rdquo;) and remit a 10% upfront token via bank-linked NEFT/UPI escrow. Pre-confirmed borrowers skip sitting-day queues via an express green-channel desk.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-800 mb-2">
                      Wave 3 &middot; T-4 Days
                    </span>
                    <p className="font-bold text-sm text-white mb-1.5">
                      Final Bench Pin, Venue Map &amp; Consequences Alert
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Sends Google Maps pin of the District/Taluka Court Complex, bench number, Nodal Officer desk contact, and a polite statutory reminder that post-Lok-Adalat non-settlement moves the file to adversarial recovery (Order XXXVII / s.25 PSS / Arbitration).
                    </p>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 sm:p-5">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-amber-800 mb-1.5">
                    Critical Drafting Rule: Mandatory Default-Revival Clause in Every Lok Adalat Memo
                  </p>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                    Never sign a flat Lok Adalat compromise award stating only the discounted OTS figure without a forfeiture/revival trigger. Include a clear clause: <em>&ldquo;In the event the Respondent defaults in paying any installment on its due date, the concession/waiver granted under this Award shall automatically stand withdrawn, and the Applicant Bank shall be entitled to execute this Award under Order XXI CPC for the entire original ledger claim of ₹[X] together with future simple interest at [Y]% p.a., less amounts actually realized.&rdquo;</em>
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Worked Zonal Economics Financial Ledger */}
            <section
              id="heading-worked-economics"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Worked Institutional Unit Economics &middot; Zonal CFO Ledger
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Worked Zone Economics: 2,500 Sub-₹20L NPAs at Zero Court Fee
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed mb-5">
                Consider a typical PSU Bank Regional Office or Small Finance Bank Zone holding a batch of <strong>2,500 sub-₹20 Lakh retail, Mudra, and KCC NPAs</strong> (average ledger outstanding ₹2.80 Lakh; total stressed pool <strong>₹70.00 Crore</strong>). Because every account sits below the ₹20 Lakh DRT threshold, the bank cannot use e-DRT (compare forum thresholds using our{" "}
                <Link
                  href="/tools/sarfaesi-drt-bank-recovery-forum-calculator"
                  className="text-[#DC2626] font-semibold hover:underline"
                >
                  SARFAESI &amp; DRT Bank Recovery Forum Calculator
                </Link>
                ). Here is the side-by-side institutional cost-recovery ledger:
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-lg mb-5">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-700">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 block">
                      Illustrative Regional Portfolio Simulation (2,500 NPAs &middot; ₹70.00 Cr Pool)
                    </span>
                    <p className="text-base sm:text-lg font-black text-white">
                      Civil Suits vs. Unprimed DLSA Dump vs. Primed Bulk National Lok Adalat
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-700 text-xs font-bold">
                    Avg OTS Realization: 62% of Ledger
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-slate-700 text-slate-300">
                        <th className="py-2.5 pr-4 font-bold">Financial / Operational Metric</th>
                        <th className="py-2.5 px-3 font-bold">Track A: Civil Suits (CPC)</th>
                        <th className="py-2.5 px-3 font-bold">Track B: Unprimed DLSA</th>
                        <th className="py-2.5 pl-3 font-bold text-emerald-400">
                          Track C: Primed Bulk Lok Adalat
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 text-slate-200">
                      <tr>
                        <td className="py-3 pr-4 font-semibold text-white">Statutory Court Fee Outgo</td>
                        <td className="py-3 px-3 text-red-400 font-mono">₹4.20 Cr (~6% avg)</td>
                        <td className="py-3 px-3 text-emerald-400 font-mono">₹0</td>
                        <td className="py-3 pl-3 text-emerald-400 font-mono font-bold">₹0</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-semibold text-white">
                          Pre-Sitting Legal &amp; Dispatch Cost
                        </td>
                        <td className="py-3 px-3 font-mono">₹3.75 Cr (₹15K/suit)</td>
                        <td className="py-3 px-3 font-mono">₹2.50 Lakh (admin)</td>
                        <td className="py-3 pl-3 font-mono text-amber-300">
                          ₹12.50 Lakh (Bulk CSV Desk)
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-semibold text-white">
                          Borrower Sitting Attendance
                        </td>
                        <td className="py-3 px-3 font-mono">N/A (3–6 yr trial)</td>
                        <td className="py-3 px-3 text-red-400 font-mono">6.5% (162 borrowers)</td>
                        <td className="py-3 pl-3 text-emerald-400 font-mono font-bold">
                          26.0% (650 borrowers)
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-semibold text-white">
                          Binding s.21 Decrees Signed
                        </td>
                        <td className="py-3 px-3 font-mono">Deferred 36+ months</td>
                        <td className="py-3 px-3 font-mono">118 Awards</td>
                        <td className="py-3 pl-3 text-emerald-400 font-mono font-bold">
                          510 Awards (Single Sitting)
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-semibold text-white">
                          Gross Cash Settled (62% OTS)
                        </td>
                        <td className="py-3 px-3 font-mono">Delayed / High Erosion</td>
                        <td className="py-3 px-3 font-mono">₹2.05 Cr</td>
                        <td className="py-3 pl-3 text-emerald-400 font-mono font-bold">
                          ₹8.85 Cr (90-Day Cycle)
                        </td>
                      </tr>
                      <tr className="bg-emerald-950/40">
                        <td className="py-3 pr-4 font-bold text-white">
                          Net Cost-to-Recovery Ratio
                        </td>
                        <td className="py-3 px-3 text-red-400 font-mono">&gt; 11.3% upfront burn</td>
                        <td className="py-3 px-3 font-mono">Low volume / missed KPI</td>
                        <td className="py-3 pl-3 text-emerald-300 font-mono font-black">
                          1.41% Cost-to-Cash (70.8x ROI)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-[11px] text-slate-400 mt-4 leading-relaxed">
                  *Illustrative Zonal model assuming ₹2.80L average ledger balance, 62% average OTS realization across settled accounts, and flat-rate institutional bulk tri-channel priming. Actual conversion varies by borrower contactability, aging bucket, and state-level OTS policy.
                </p>
              </div>
            </section>

            {/* Section 7: DLSA CSV Schema & BSA 2023 s.63 Checklist */}
            <section
              id="heading-dlsa-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Data Hygiene &amp; Evidentiary Compliance
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                DLSA Referral CSV Schema &amp; BSA 2023 s.63 Evidence Checklist
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed mb-5">
                District Legal Services Authority registries routinely reject or stall bulk bank files when borrower pin codes, jurisdictional talukas, or bifurcated ledger figures are missing. Standardize your CBS export to this 10-column institutional schema before T-35 submission:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                    Mandatory 10-Column DLSA Pre-Litigation CSV
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="font-mono font-bold text-[#DC2626]">01.</span>
                      <span><strong>Branch Sol ID &amp; IFSC + Loan Account No.</strong> (unique primary key).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-mono font-bold text-[#DC2626]">02.</span>
                      <span><strong>Borrower &amp; Co-Obligor / Guarantor Full Names</strong> (with Father/Spouse name for rural identity verification).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-mono font-bold text-[#DC2626]">03.</span>
                      <span><strong>Verified Postal Address + District + Taluka + 6-Digit PIN</strong> (maps precisely to DLSA vs. TLSC bench).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-mono font-bold text-[#DC2626]">04.</span>
                      <span><strong>Active Mobile (WhatsApp-enabled) &amp; Registered Email</strong> for T-30 digital priming.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-mono font-bold text-[#DC2626]">05.</span>
                      <span><strong>Sanction Date, NPA Date &amp; Facility Type</strong> (KCC / Mudra / Personal / Vehicle / Education / MSME).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-mono font-bold text-[#DC2626]">06.</span>
                      <span><strong>Bifurcated Claim:</strong> Principal Outstanding + Simple Accrued Interest + Uncompounded Penal Charges (RBI compliant).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-mono font-bold text-[#DC2626]">07.</span>
                      <span><strong>Pre-Approved Board OTS Offer Amount &amp; Minimum Upfront Token (10%–25%)</strong>.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-mono font-bold text-[#DC2626]">08.</span>
                      <span><strong>Pending Court CNR Number</strong> (blank for fresh s.20(2) pre-litigation; populated for s.20(1) pending s.138/civil referrals).</span>
                    </li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-emerald-50/50 border border-emerald-200">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-900 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    BSA 2023 Section 63 &amp; Audit-Proof Evidence Pack
                  </p>
                  <ul className="space-y-2.5 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-700 font-bold">✓</span>
                      <span><strong>Certified Bankers&apos; Books Ledger:</strong> Extract certified under Section 2A of the Bankers&apos; Books Evidence Act, 1891 proving no illegal compounding of penal charges post-April 2024 RBI directions.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-700 font-bold">✓</span>
                      <span><strong>BSA 2023 s.63 Electronic Certificate:</strong> Batch cryptographic log &amp; hash certificate covering every WhatsApp Business API delivery receipt, read timestamp, and SMTP email bounce/delivery report.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-700 font-bold">✓</span>
                      <span><strong>India Post Speed Post RPAD Proof:</strong> Bulk barcode manifest + POD tracking proving deemed service under Section 27 of the General Clauses Act, 1897—crucial if no-show accounts escalate to Order XXXVII or Arbitration.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-700 font-bold">✓</span>
                      <span><strong>Nodal Authority &amp; OTS Policy Memo:</strong> Zonal Manager authorization letter empowering attending officers/advocates to sign Section 21 consent memos within pre-defined sacrifice slabs.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 8: Supreme Court Precedents */}
            <section
              id="heading-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Verified Judicial Authorities &middot; Execution Finality
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-5">
                Supreme Court Precedents on Lok Adalat Award Finality
              </h2>

              <div className="space-y-5">
                {COURT_PRECEDENTS.map((item) => (
                  <div
                    key={item.parties}
                    className="relative pl-5 border-l-4 border-[#DC2626] bg-slate-50 rounded-r-2xl p-5 border-y border-r border-slate-200"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-black uppercase tracking-wider text-[#DC2626]">
                        {item.citation}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-500">
                        {item.date}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                      {item.parties}
                    </h3>
                    <p className="text-xs font-semibold text-slate-600 mb-3">
                      {item.title}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                      <strong>Core Holding:</strong> {item.holding}
                    </p>
                    <div className="mt-3 pt-3 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                        <span className="w-2 h-2 rounded-full bg-emerald-600" />
                        {item.impact}
                      </span>
                      <span className="text-xs text-slate-600 italic">
                        {item.takeaway}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 9: Dual-Track Institutional CTA */}
            <section
              id="heading-dual-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Dual-Track Bank Recovery Infrastructure
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-3">
                Launch a Single OTS Priming Notice or 10,000-Account Drive
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed mb-6">
                Whether your branch wants to pilot a single sticky NPA account before the next quarterly sitting or your Regional Office needs an end-to-end bulk CSV Lok Adalat priming &amp; Order XXI desk, choose your deployment track below:
              </p>

              <BankLokAdalatCTA />
            </section>

            {/* Section 10: IND-01 Banking Recovery Network (All Verified Live Routes) */}
            <section
              id="heading-bank-network"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Connected Banking Legal Stack &middot; IND-01 Ecosystem
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                IND-01 Bank Recovery Hub, Calculators &amp; Bulk Portals
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link
                  href="/industries/banks-loan-recovery"
                  className="group p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 hover:bg-white transition-all"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#DC2626]">
                    Parent Industry Hub
                  </span>
                  <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mt-1">
                    Indian Banks Loan &amp; NPA Recovery Hub
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    Complete multi-track banking escalation matrix across SARFAESI, DRT, Lok Adalat &amp; PSS Act s.25.
                  </p>
                </Link>

                <Link
                  href="/tools/sarfaesi-drt-bank-recovery-forum-calculator"
                  className="group p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 hover:bg-white transition-all"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                    Interactive T1 Calculator
                  </span>
                  <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mt-1">
                    SARFAESI, DRT Fee &amp; Bank Forum Calculator
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    Verify sub-₹20L DRT cutoffs, SARFAESI s.31(i) agri bars &amp; exact Rule 7 OA filing fees.
                  </p>
                </Link>

                <Link
                  href="/templates/bank-loan-recall-cum-guarantee-invocation-notice"
                  className="group p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 hover:bg-white transition-all"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700">
                    Advocate P1 Template
                  </span>
                  <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mt-1">
                    Loan Recall &amp; Guarantee Invocation Notice
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    RBI Penal-Charge compliant recall template for accounts that skip Lok Adalat &amp; escalate to DRT/suit.
                  </p>
                </Link>

                <Link
                  href="/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues"
                  className="group p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 hover:bg-white transition-all"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
                    Bank Notice Desk
                  </span>
                  <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mt-1">
                    Send Bank Legal Notice for Unpaid Dues
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    Fact-verified demand and pre-litigation notices for overdue personal, MSME, and agri loans.
                  </p>
                </Link>

                <Link
                  href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                  className="group p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 hover:bg-white transition-all"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
                    Enterprise Bulk CSV
                  </span>
                  <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mt-1">
                    Bulk Recovery Solutions (10–10,000+ Cases)
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    Automated WhatsApp + Email + Speed Post RPAD campaigns with centralized Zonal reply triage.
                  </p>
                </Link>

                <Link
                  href="/arbitration-personal-loan-defaults-bank-recovery-mechanism"
                  className="group p-4 rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50 hover:bg-white transition-all"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
                    No-Show Escalation Track
                  </span>
                  <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] mt-1">
                    Institutional Arbitration for Personal Loan Defaults
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    Convert Lok Adalat no-show unsecured borrowers into fast-track Section 29B/36 arbitral decrees.
                  </p>
                </Link>
              </div>
            </section>

            {/* Section 11: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Nodal Officer &amp; Zonal Counsel Q&amp;A
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-5">
                FAQs: Bank Pre-Litigation Lok Adalat &amp; Bulk NPA Drives
              </h2>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 open:bg-white open:border-slate-300 transition-colors"
                  >
                    <summary className="flex items-center justify-between gap-3 cursor-pointer list-none font-bold text-xs sm:text-sm md:text-base text-slate-900">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] font-mono text-lg shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 pt-3 border-t border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 12: Primary Statutes & Official Portals */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-[#DC2626]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Authoritative Legal &amp; Regulatory Citations
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Primary Statutes, NALSA Regulations &amp; Official Portals
              </h2>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {PRIMARY_SOURCES.map((source) => (
                  <li
                    key={source.url + source.title}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200"
                  >
                    <span className="text-[#DC2626] font-bold shrink-0">&rarr;</span>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-800 hover:text-[#DC2626] font-medium hover:underline break-words"
                    >
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-5 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-slate-500">
                <p>
                  <strong>Authored &amp; Legally Reviewed by:</strong> Anuj Anand Malik, Advocate &amp; Founder, AMA Legal Solutions (LegalRecovery.in Institutional Banking Desk)
                </p>
                <span>Updated: November 19, 2026</span>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Contextual Related Guides Footer */}
      <RelatedRecoveryGuides currentPath={PAGE_URL} />
    </div>
  );
}
