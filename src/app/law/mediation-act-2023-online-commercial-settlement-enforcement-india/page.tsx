import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import MediationActTableOfContents from "./MediationActTableOfContents";
import MediationActScenarioTabs from "./MediationActScenarioTabs";
import MediationActCTA from "./MediationActCTA";

export const revalidate = 86400;

const PAGE_PATH = "/law/mediation-act-2023-online-commercial-settlement-enforcement-india";
const META_TITLE = "Mediation Act 2023: Online Settlement = Court Decree";
const META_DESCRIPTION =
  "Avoid informal MOUs for debtor installments! Record an Online Mediated Settlement Agreement under Mediation Act 2023 s.27 & s.30—executable as a Decree.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText("Mediation Act 2023 Section 27 and 30 Online Commercial Settlement Decree Guide"),
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
      "The Mediation Act, 2023 (Act No. 32 of 2023 — Sections 18, 19, 20, 22, 27, 28, 29, 30, 33–42 & Sixth Schedule)",
    url: "https://www.indiacode.nic.in/handle/123456789/20183",
  },
  {
    title:
      "The Commercial Courts Act, 2015 (Section 12A — Mandatory Pre-Institution Mediation & Settlement)",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title:
      "The Code of Civil Procedure, 1908 (Order XXI — Execution of Decrees and Orders; Order XXXVII — Summary Suits)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "Supreme Court of India: Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd., (2022) 10 SCC 1 (Mandatory s.12A Compliance)",
    url: "https://main.sci.gov.in/",
  },
  {
    title:
      "Supreme Court of India: Yamini Manohar v. T.K.D. Keerthi, (2024) 5 SCC 815 (Urgent Interim Relief Exception to s.12A)",
    url: "https://main.sci.gov.in/",
  },
  {
    title:
      "The Information Technology Act, 2000 (Sections 3A & 5 — Legal Recognition of Electronic Signatures) & Bharatiya Sakshya Adhiniyam, 2023 (Section 63)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const PRECEDENT_CARDS = [
  {
    title: "Supreme Court on Mandatory Pre-Institution Mediation & Settlement Finality",
    parties: "Patil Automation Private Limited v. Rakheja Engineers Private Limited",
    citation: "(2022) 10 SCC 1, Supreme Court of India",
    date: "Judgment Dated 17 August 2022",
    facts:
      "A commercial suit was instituted without exhausting mandatory pre-institution mediation under Section 12A of the Commercial Courts Act, 2015, even though no urgent interim relief was sought. The defendants sought rejection of the plaint under Order VII Rule 11 CPC.",
    holding:
      "The Supreme Court declared Section 12A mandatory in nature: any commercial suit above the ₹3 Lakh specified value filed without exhausting pre-institution mediation (and without a genuine urgent interim relief plea) is liable to be rejected under Order VII Rule 11 CPC. Crucially, a settlement arrived at in such mediation carries the force of an arbitral award / court decree.",
    amount: "Mandatory Mediation Gatekeeper — Converts Settlement into Statutory Decree",
    takeaway:
      "General Counsel should treat pre-litigation mediation as a strategic weapon: if the debtor settles, you obtain a Section 27 executable decree without paying ad-valorem court fees; if the debtor defaults or no-shows, you secure a clean Non-Starter Report for Commercial Court.",
  },
  {
    title: "Supreme Court on Urgent Interim Relief & Sham Mediation Bypass",
    parties: "Yamini Manohar v. T.K.D. Keerthi",
    citation: "(2024) 5 SCC 815, Supreme Court of India",
    date: "Judgment Dated 13 October 2023",
    facts:
      "A commercial plaintiff sought to bypass Section 12A mediation by filing a routine injunction application alongside the money recovery plaint, raising the question of whether mere pleading of interim relief automatically exempts a creditor from mediation.",
    holding:
      "The Supreme Court clarified that while the Commercial Court must examine whether the plaint genuinely contemplates urgent interim relief (such as Order XXXVIII Rule 5 asset attachment against a fleeing debtor), creditors cannot use camouflaged or artificial interim prayers merely to evade statutory mediation.",
    amount: "Bona Fide Asset-Freeze Exception Preserved; Routine Suits Routed to Mediation",
    takeaway:
      "When a debtor is actively liquidating machinery or siphoning bank balances, file for urgent Order XXXVIII Rule 5 attachment. For cooperative debtors requesting 3–6 installments, lock them into a Section 30 Online MSA immediately.",
  },
  {
    title: "Sixth Schedule Reform: Unifying Commercial Conciliation Under the Mediation Act, 2023",
    parties: "Statutory Amendment to Arbitration & Conciliation Act, 1996 (Sections 61–81)",
    citation: "Sixth Schedule, Mediation Act, 2023 (Act No. 32 of 2023)",
    date: "Enacted 14 September 2023",
    facts:
      "Prior to 2023, B2B creditors relied on Part III (Sections 61–81) of the Arbitration and Conciliation Act, 1996 to convert negotiated payment plans into Section 74 Conciliation Settlement Agreements—often facing fragmented procedural rules and uncertainty around online sessions.",
    holding:
      "The Sixth Schedule of the Mediation Act, 2023 substitutes Section 61 of the 1996 Act so that any conciliation/mediation settlement outside pending arbitral proceedings is governed by the unified Mediation Act, 2023, giving B2B creditors explicit statutory backing for Section 30 Online Mediation and Section 27 decree enforcement.",
    amount: "Unified ODR Statute — Eliminates Legacy 1996 Act Online Ambiguities",
    takeaway:
      "Update all enterprise credit policies, Master Services Agreements (MSAs), and demand notice templates to reference the Mediation Act, 2023 (Sections 27 & 30) rather than repealed Part III conciliation clauses.",
  },
];

const COMPARISON_ROWS = [
  {
    criterion: "Legal Status on Debtor Default",
    informalMou: "Merely a fresh private contract; NOT executable",
    legacyConciliation: "Arbitral award on agreed terms (A&C Act s.74)",
    mediationActMsa: "Directly executable as a Court Judgment / Decree (s.27)",
  },
  {
    criterion: "Remedy When Installment #2 Bounces",
    informalMou: "Must file a fresh 2–3 year civil/commercial suit from scratch",
    legacyConciliation: "Execution under CPC Order XXI (subject to 1996 Act challenges)",
    mediationActMsa: "Direct Order XXI CPC Execution (bank/asset attachment)",
  },
  {
    criterion: "Online / Video / ODR Validity",
    informalMou: "Email chains face authenticity & authority objections",
    legacyConciliation: "No dedicated statutory ODR chapter in 1996 Act",
    mediationActMsa: "Explicitly validated under Section 30 (IT Act e-Sign)",
  },
  {
    criterion: "Statutory Completion Cap",
    informalMou: "None — debtors drag informal talks for months",
    legacyConciliation: "No hard statutory day limit",
    mediationActMsa: "120 days from first appearance (+60 days max extension) (s.18)",
  },
  {
    criterion: "Limitation Period Protection",
    informalMou: "Clock keeps ticking; talks can time-bar your claim",
    legacyConciliation: "Limited protection unless Section 18 acknowledgment signed",
    mediationActMsa: "Mediation duration excluded from Limitation Act (s.29)",
  },
  {
    criterion: "Grounds for Debtor Challenge",
    informalMou: "Open to full merits trial, rate disputes & set-offs",
    legacyConciliation: "Section 34-style award challenges",
    mediationActMsa: "Strictly Fraud, Corruption, Impersonation, or s.6 Bar within 90d (s.28)",
  },
  {
    criterion: "Confidentiality Shield",
    informalMou: "Haircut offers often cited against creditor in court",
    legacyConciliation: "Protected under Section 75",
    mediationActMsa: "Strict statutory inadmissibility & privilege (s.22 & s.23)",
  },
];

const PREEMPTION_ROWS = [
  {
    challenge: "1. 'No Valid Signature / Electronic Execution Disputed'",
    statute: "Mediation Act s.19 & s.30; IT Act s.3A; BSA s.63",
    preemption:
      "Execute every Online MSA using Aadhaar eSign, DSC, or verified OTP-logged electronic signatures through an Institutional MSP, and preserve the platform's BSA 2023 Section 63 audit trail.",
  },
  {
    challenge: "2. 'Coercion or Economic Duress During Negotiation' (s.28)",
    statute: "Mediation Act s.28(2)(a) (Fraud, Corruption, Impersonation)",
    preemption:
      "Note that Section 28 limits challenges strictly to fraud, corruption, impersonation, or non-mediable disputes—economic pressure to pay an admitted overdue debt is NOT fraud. Record party representation and voluntary consent in the Mediator's attendance log.",
  },
  {
    challenge: "3. 'Signatory Lacked Corporate Authority'",
    statute: "Companies Act / Board Resolution; MSA Authentication s.19",
    preemption:
      "Require the debtor's Director, CFO, or Authorized Signatory to upload a Board Resolution / Authorization Letter (or verify MCA DIN status) before the Mediator authenticates the Section 19 MSA.",
  },
  {
    challenge: "4. 'Challenge Filed After 90 Days to Stall Execution'",
    statute: "Mediation Act s.28(3) (90-Day Statutory Limitation)",
    preemption:
      "Any Section 28 challenge must be filed within 90 days of receiving the authenticated MSA (extendable by at most 90 days on sufficient cause). Serve the authenticated MSA immediately via email and Speed Post to start the 90-day clock.",
  },
  {
    challenge: "5. 'Insufficient Stamp Duty Objection at Execution Stage'",
    statute: "Indian Stamp Act, 1899 / State Stamp Acts",
    preemption:
      "While Section 27 confers decree status, state stamp duty rules apply to settlement instruments. Execute on appropriate e-Stamp paper (or pay nominal state-specific settlement stamp duty) before filing Order XXI execution.",
  },
];

const CHECKLIST_ITEMS = [
  {
    id: "chk-1",
    title: "1. Neutral Institutional MSP Selection",
    description:
      "Conduct the session under a recognized Institutional Mediation Service Provider (MSP) with an independent empanelled mediator.",
  },
  {
    id: "chk-2",
    title: "2. Explicit Section 30 ODR Consent",
    description:
      "Record both parties' written consent to Online Mediation under Section 30 in the opening session minutes and the MSA preamble.",
  },
  {
    id: "chk-3",
    title: "3. Verified Signatory & Board Authority",
    description:
      "Verify the debtor representative's PAN/DIN and attach Board Resolution or LLP Authority before finalizing settlement terms.",
  },
  {
    id: "chk-4",
    title: "4. Unequivocal Admission of Original Debt",
    description:
      "State the exact unpaid invoice numbers, principal, GST ITC confirmation, and waiver of all prior quality/rate objections.",
  },
  {
    id: "chk-5",
    title: "5. Exact Installment Dates & Bank Coordinates",
    description:
      "Specify every tranche amount, calendar due date, and designated creditor RTGS/NEFT account—never leave dates 'tentative'.",
  },
  {
    id: "chk-6",
    title: "6. Default Acceleration & Haircut Clawback",
    description:
      "Include an automatic acceleration clause: a single missed tranche voids any interest waiver and makes 100% of the balance due immediately.",
  },
  {
    id: "chk-7",
    title: "7. Section 19 Mediator Authentication",
    description:
      "Ensure the MSA is reduced to writing, signed by all parties, and formally authenticated by the Mediator under Section 19.",
  },
  {
    id: "chk-8",
    title: "8. Stamp Duty & Immovable Property Check",
    description:
      "Affix applicable state e-Stamp duty; if the MSA creates a charge on immovable property, complete Registration Act formalities.",
  },
  {
    id: "chk-9",
    title: "9. Immediate Delivery to Start 90-Day Clock",
    description:
      "Obtain the Mediator-authenticated copy and serve it formally on the debtor to trigger the Section 28(3) 90-day challenge window.",
  },
  {
    id: "chk-10",
    title: "10. Parallel BSA s.63 Audit Archive",
    description:
      "Download the ODR video attendance log, e-Sign hash, and IP timestamp packet for frictionless Order XXI execution if default recurs.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Can an Online Mediated Settlement Agreement (MSA) really be enforced like a Court Decree?",
    answer:
      "Yes. Under Section 27 of the Mediation Act, 2023, a Mediated Settlement Agreement resulting from mediation—including Online Mediation conducted under Section 30—is final and binding on the parties and is enforceable in accordance with the provisions of the Code of Civil Procedure, 1908, in the same manner as if it were a judgment or decree passed by a Court.",
  },
  {
    question: "Why is an informal email or plain-paper MOU dangerous when a debtor asks for 4 installments?",
    answer:
      "An informal email confirmation or plain-paper MOU signed bilaterally without a Mediator is only a fresh private contract. If the debtor pays Installment #1 and defaults on Installment #2, you cannot directly attach their bank accounts—you must still file a full civil or commercial suit, pay court fees, and wait 2–3 years for a decree. Recording the exact same 4-installment plan as a Section 19/27 Online MSA skips the trial entirely.",
  },
  {
    question: "What is the maximum timeline to complete mediation under the Mediation Act, 2023?",
    answer:
      "Under Section 18 of the Mediation Act, 2023, mediation must be completed within 120 days from the date fixed for the first appearance before the mediator. This period may be extended by a further period not exceeding 60 days only with the written consent of the parties (a hard statutory ceiling of 180 days).",
  },
  {
    question: "What happens to my 3-year limitation period if the debtor stalls during mediation?",
    answer:
      "Section 29 of the Mediation Act, 2023 protects creditors against limitation traps: in computing the period of limitation for any suit or proceeding relating to a dispute under mediation, the entire period from the date of commencement of mediation until the receipt of the non-settlement report or termination is excluded.",
  },
  {
    question: "On what grounds can a debtor challenge a Section 27 Mediated Settlement Agreement?",
    answer:
      "Under Section 28(2) of the Mediation Act, 2023, an MSA can be challenged ONLY on four narrow grounds: (a) fraud, (b) corruption, (c) impersonation, or (d) that the mediation was conducted in disputes not fit for mediation under Section 6. The challenge must be filed within 90 days of receiving the MSA (extendable by at most 90 days for sufficient cause). The debtor cannot re-open invoice quality or rate merits.",
  },
  {
    question: "How does the Mediation Act, 2023 differ from Conciliation under the Arbitration Act, 1996?",
    answer:
      "Previously, B2B creditors used Part III (Sections 61–81) of the Arbitration and Conciliation Act, 1996 to give settlements arbitral-award status under Section 74. The Sixth Schedule of the Mediation Act, 2023 amends Section 61 of the 1996 Act, migrating standalone commercial conciliation into the unified Mediation Act framework—which adds explicit Section 30 Online Mediation validity, 120-day statutory caps, and institutional MSP governance.",
  },
  {
    question: "Does a Section 27 MSA require registration under Section 20 to be executable?",
    answer:
      "Section 20 provides an optional mechanism to register non-court-annexed MSAs within 180 days with a notified authority for record-keeping. However, Section 27 enforceability as a decree flows from valid execution and Mediator authentication under Section 19 (subject to standard Stamp Act and Registration Act rules if immovable property rights are created).",
  },
];

export default function MediationAct2023EnforcementPage() {
  const pageUrl = `${SITE_URL}${PAGE_PATH}`;
  const pageTitle =
    "Turning B2B Payment Plans Into Directly Executable Court Decrees Under Section 27 & 30 of the Mediation Act, 2023";

  const breadcrumbItems = [
    { label: "B2B Debt Recovery", href: "/b2b-debt-recovery-india" },
    { label: "Mediation Act 2023 s.27 & s.30", href: PAGE_PATH },
  ];

  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: pageTitle,
    description: META_DESCRIPTION,
    url: pageUrl,
    datePublished: "2026-11-20",
    dateModified: "2026-11-20",
    image: `${SITE_URL}/blog_money_recovery.png`,
    author: {
      "@type": "Person",
      name: "Anuj Anand Malik",
      jobTitle: "Advocate & Founder",
      worksFor: {
        "@type": "Organization",
        name: "AMA Legal Solutions",
      },
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
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
  };

  const FAQ_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
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
        name: "B2B Debt Recovery India",
        item: `${SITE_URL}/b2b-debt-recovery-india`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Mediation Act 2023 s.27 & s.30",
        item: pageUrl,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
        {/* Dark Gradient Hero */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>Mediation Act, 2023</span>
              <span className="text-slate-500">&bull;</span>
              <span>Sections 27 &amp; 30</span>
              <span className="text-slate-500">&bull;</span>
              <span>CORE-26 B2B Creditor Statute</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {pageTitle}
            </h1>

            {/* Executive Statutory Summary Box (40–60 words + Parent Hub link in first 250 words) */}
            <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Summary
              </span>
              Never accept an informal email MOU when a debtor asks for 4 installments. Under{" "}
              <strong>Section 27 &amp; Section 30 of the Mediation Act, 2023</strong>, recording that same payment plan as an authenticated Online Mediated Settlement Agreement (MSA) converts it into a{" "}
              <strong>directly executable Court Decree</strong> under Order XXI CPC—eliminating 3-year civil trials on{" "}
              <Link href="/b2b-debt-recovery-india" className="text-red-300 underline hover:text-white font-semibold">
                B2B debt recovery in India
              </Link>.
            </div>

            {/* Hero 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-lg sm:text-2xl font-black text-emerald-400">Section 27</p>
                <p className="text-[10px] sm:text-xs text-slate-400 font-medium mt-0.5">
                  Enforced as Court Decree
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-slate-100">Section 30</p>
                <p className="text-[10px] sm:text-xs text-slate-400 font-medium mt-0.5">
                  100% Online ODR &amp; e-Sign
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-amber-400">120 + 60 Days</p>
                <p className="text-[10px] sm:text-xs text-slate-400 font-medium mt-0.5">
                  Hard Statutory Cap (s.18)
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-2xl font-black text-red-400">90-Day Bar</p>
                <p className="text-[10px] sm:text-xs text-slate-400 font-medium mt-0.5">
                  Fraud-Only Challenge (s.28)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Layout */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Left Sticky Sidebar TOC */}
            <MediationActTableOfContents />

            {/* Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: Why Informal Email MOUs Fail B2B Creditors */}
              <section
                id="heading-informal-mou-trap"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    1
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Why Informal Debtor Installment MOUs Fail B2B Creditors
                  </h2>
                </div>

                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    Across enterprise credit desks, NBFC collections, and commercial supply chains, the most expensive legal mistake happens right after a demand notice is served. The debtor&apos;s Finance Controller calls or emails: <em>&ldquo;We admit the ₹48 Lakh balance, please don&apos;t sue—let us pay in 4 monthly tranches of ₹12 Lakhs.&rdquo;</em> Relieved to see cash movement, the creditor&apos;s sales or legal team signs a bilateral Memorandum of Understanding (MOU) or exchanges confirmation emails.
                  </p>
                  <p>
                    Three weeks later, Installment #1 clears—and Installment #2 bounces. Under Indian civil procedure, that bilateral MOU is <strong>merely a fresh private contract, not an executable decree</strong>. The creditor cannot walk into an Executing Court to attach the debtor&apos;s bank account or plant machinery. Instead, the creditor must start a{" "}
                    <Link href="/recovery-of-unpaid-dues-for-my-business" className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]">
                      commercial money recovery suit
                    </Link>{" "}
                    from scratch, pay ad-valorem court fees, survive written-statement delays, and wait 24 to 36 months for a judgment—by which time the debtor may have siphoned assets or entered insolvency.
                  </p>
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs sm:text-sm text-red-950">
                    <strong className="text-[#DC2626] uppercase tracking-wider text-[11px] block mb-1">
                      The Statutory Fix: Section 27 + Section 30 Conversion
                    </strong>
                    Instead of signing a bilateral MOU, route the debtor&apos;s 4-installment proposal into a 45-minute <strong>Online Mediation session under Section 30 of the Mediation Act, 2023</strong>. When the exact same installment schedule is authenticated by an independent Mediator under Section 19, <strong>Section 27 elevates it to a Court Judgment/Decree</strong>. Default on Installment #2 triggers immediate Order XXI CPC execution.
                  </div>
                </div>
              </section>

              {/* Section 2: Sections 27 & 30 Statutory Architecture */}
              <section
                id="heading-section-27-30-framework"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    2
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Sections 27 &amp; 30 Explained: Online MSA as a Court Decree
                  </h2>
                </div>

                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    Enacted in September 2023 (Act No. 32 of 2023), the Mediation Act creates a self-contained, pan-India statutory framework for institutional and pre-litigation commercial settlements. For General Counsel and NBFC ODR Heads, four interlocking provisions form the enforcement backbone:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                    <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/60">
                      <h3 className="font-bold text-slate-900 text-sm mb-1.5">
                        Section 27: Finality &amp; Decree Enforcement
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        A Mediated Settlement Agreement (MSA) executed under Section 19 is <strong>final and binding</strong> on the parties and persons claiming under them, and is enforceable under the Code of Civil Procedure, 1908 <strong>as if it were a judgment or decree passed by a Court</strong>.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                      <h3 className="font-bold text-slate-900 text-sm mb-1.5">
                        Section 30: Online Mediation Validity
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        Mediation—including pre-litigation commercial mediation—may be conducted <strong>wholly online</strong> via video-conferencing, electronic communication, or ODR platforms, with electronic signatures recognized under the Information Technology Act, 2000.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                      <h3 className="font-bold text-slate-900 text-sm mb-1.5">
                        Section 19: Formal Authentication
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        The settlement must be reduced to writing, signed by all parties (physically or via valid e-Sign), and <strong>authenticated by the Mediator</strong>. Where administered by an institutional Mediation Service Provider (MSP), the MSP forwards copies to both parties.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/60">
                      <h3 className="font-bold text-slate-900 text-sm mb-1.5">
                        Section 20: Optional Registration Nuance
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        Section 20 permits optional registration of non-court-annexed MSAs within 180 days with a notified authority. Non-registration under s.20 does not defeat s.27 decree status, though Registration Act, 1908 rules still apply if immovable property title is transferred.
                      </p>
                    </div>
                  </div>

                  <p>
                    Crucially, because a Section 27 MSA bypasses the trial stage, creditors save both <strong>ad-valorem Commercial Court fees</strong> and 2–3 years of discovery/evidence hearings. Our{" "}
                    <Link href="/reports/legal-notice-outcomes-study" className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]">
                      empirical legal notice outcomes study
                    </Link>{" "}
                    shows that structured pre-litigation escalation dramatically improves voluntary settlement compliance when paired with an immediate execution consequence.
                  </p>
                </div>
              </section>

              {/* Section 3: 120-Day Completion Timeline & Section 29 Limitation Shield */}
              <section
                id="heading-120-day-timeline"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    3
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    120-Day Completion Clock (s.18) &amp; Limitation Freeze (s.29)
                  </h2>
                </div>

                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    Corporate debtors frequently feign settlement interest merely to run out the 3-year Limitation Act clock on unpaid invoices. The Mediation Act, 2023 closes this loophole through two strict time-governance mechanisms:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-red-400 mb-1">
                        Section 18(1)
                      </p>
                      <p className="text-2xl font-black mb-1">120 Days</p>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Hard statutory limit from the date fixed for first appearance before the mediator to conclude mediation.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-1">
                        Section 18(2)
                      </p>
                      <p className="text-2xl font-black mb-1">+60 Days Max</p>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Extendable once by up to 60 days ONLY with express written consent of both parties—never unilateral debtor stalling.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-1">
                        Section 29
                      </p>
                      <p className="text-2xl font-black mb-1">Clock Paused</p>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Entire duration from mediation commencement to non-settlement report is excluded from Limitation Act computation.
                      </p>
                    </div>
                  </div>

                  <p>
                    In addition, <strong>Sections 22 and 23</strong> impose strict statutory confidentiality and inadmissibility: any &ldquo;without prejudice&rdquo; haircut or interest waiver discussed during mediation cannot be introduced as an admission against the creditor in subsequent{" "}
                    <Link href="/law/ibc-section-8-demand-notice-form-3-form-4-operational-creditor" className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]">
                      IBC Section 8 demand notice
                    </Link>{" "}
                    or Commercial Court proceedings if the debtor walks away. Before initiating talks on aging ledgers, always verify remaining statutory days using our{" "}
                    <Link href="/tools/limitation-period-calculator" className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]">
                      B2B Limitation Period Calculator
                    </Link>.
                  </p>
                </div>
              </section>

              {/* Section 4: Comparison Matrix (Informal MOU vs 1996 Conciliation vs Mediation Act 2023 MSA) */}
              <section
                id="heading-msa-vs-mou-conciliation"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    4
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Informal MOU vs. 1996 Conciliation vs. Mediation Act 2023 MSA
                  </h2>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-5">
                  Prior to 2023, enterprise counsel relied on Part III (Sections 61–81) of the Arbitration and Conciliation Act, 1996 to obtain Section 74 settlement awards. The <strong>Sixth Schedule of the Mediation Act, 2023</strong> amends Section 61 of the 1996 Act, consolidating standalone commercial conciliation into the unified Mediation Act regime:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[680px]">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3.5 sm:p-4 font-bold uppercase tracking-wider text-[11px] w-[22%]">
                          Evaluation Criterion
                        </th>
                        <th className="p-3.5 sm:p-4 font-bold uppercase tracking-wider text-[11px] w-[25%] text-red-300">
                          Informal Email / Paper MOU
                        </th>
                        <th className="p-3.5 sm:p-4 font-bold uppercase tracking-wider text-[11px] w-[25%] text-slate-300">
                          Legacy Conciliation (1996 Act)
                        </th>
                        <th className="p-3.5 sm:p-4 font-bold uppercase tracking-wider text-[11px] w-[28%] text-emerald-300">
                          Online MSA (Mediation Act 2023)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white text-slate-800">
                      {COMPARISON_ROWS.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-3.5 sm:p-4 font-semibold text-slate-900 align-top">
                            {row.criterion}
                          </td>
                          <td className="p-3.5 sm:p-4 text-slate-600 align-top">{row.informalMou}</td>
                          <td className="p-3.5 sm:p-4 text-slate-600 align-top">
                            {row.legacyConciliation}
                          </td>
                          <td className="p-3.5 sm:p-4 font-medium text-emerald-900 bg-emerald-50/30 align-top">
                            {row.mediationActMsa}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 5: Online ODR Workflow SVG + Mobile Cards */}
              <section
                id="heading-online-odr-workflow"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    5
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    4-Step Workflow: From Installment Email to Order XXI Decree
                  </h2>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                  Institutional creditors—especially NBFC ODR desks and B2B SaaS/manufacturing finance teams—can operationalize Section 30 Online Mediation in under 72 hours using an empanelled Mediation Service Provider (MSP) under Sections 33–42:
                </p>

                {/* Desktop SVG Flowchart */}
                <div className="hidden md:block bg-slate-50 border border-slate-200 rounded-xl p-5 mb-4">
                  <svg
                    viewBox="0 0 880 190"
                    width={880}
                    height={190}
                    role="img"
                    aria-label="4-step workflow converting B2B installment plan into Section 27 executable decree"
                    className="w-full h-auto"
                  >
                    {/* Step 1 */}
                    <rect x="10" y="25" width="190" height="140" rx="12" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
                    <rect x="10" y="25" width="190" height="32" rx="10" fill="#111827" />
                    <text x="105" y="46" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">STEP 1: NOTICE &amp; OFFER</text>
                    <text x="105" y="82" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="bold">Debtor Requests</text>
                    <text x="105" y="100" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="bold">4 Installments</text>
                    <text x="105" y="126" textAnchor="middle" fill="#475569" fontSize="10">Reject informal MOU;</text>
                    <text x="105" y="140" textAnchor="middle" fill="#475569" fontSize="10">send s.30 ODR invite</text>

                    {/* Arrow 1 */}
                    <line x1="200" y1="95" x2="230" y2="95" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="230,90 240,95 230,100" fill="#DC2626" />

                    {/* Step 2 */}
                    <rect x="240" y="25" width="190" height="140" rx="12" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
                    <rect x="240" y="25" width="190" height="32" rx="10" fill="#111827" />
                    <text x="335" y="46" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">STEP 2: SEC 30 ODR</text>
                    <text x="335" y="82" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="bold">45-Min Online Session</text>
                    <text x="335" y="100" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="bold">Via Institutional MSP</text>
                    <text x="335" y="126" textAnchor="middle" fill="#475569" fontSize="10">s.29 pauses limitation;</text>
                    <text x="335" y="140" textAnchor="middle" fill="#475569" fontSize="10">s.22 protects confidentiality</text>

                    {/* Arrow 2 */}
                    <line x1="430" y1="95" x2="460" y2="95" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="460,90 470,95 460,100" fill="#DC2626" />

                    {/* Step 3 */}
                    <rect x="470" y="25" width="190" height="140" rx="12" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
                    <rect x="470" y="25" width="190" height="32" rx="10" fill="#111827" />
                    <text x="565" y="46" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="bold">STEP 3: SEC 19 MSA</text>
                    <text x="565" y="82" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="bold">e-Sign + Mediator</text>
                    <text x="565" y="100" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="bold">Authentication</text>
                    <text x="565" y="126" textAnchor="middle" fill="#475569" fontSize="10">Includes acceleration clause</text>
                    <text x="565" y="140" textAnchor="middle" fill="#475569" fontSize="10">&amp; s.27 decree status</text>

                    {/* Arrow 3 */}
                    <line x1="660" y1="95" x2="690" y2="95" stroke="#DC2626" strokeWidth="2.5" />
                    <polygon points="690,90 700,95 690,100" fill="#DC2626" />

                    {/* Step 4 */}
                    <rect x="700" y="25" width="170" height="140" rx="12" fill="#ECFDF5" stroke="#10B981" strokeWidth="2" />
                    <rect x="700" y="25" width="170" height="32" rx="10" fill="#065F46" />
                    <text x="785" y="46" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">STEP 4: EXECUTION</text>
                    <text x="785" y="82" textAnchor="middle" fill="#064E3B" fontSize="12" fontWeight="bold">Direct Order XXI</text>
                    <text x="785" y="100" textAnchor="middle" fill="#064E3B" fontSize="12" fontWeight="bold">CPC Attachment</text>
                    <text x="785" y="126" textAnchor="middle" fill="#047857" fontSize="10">On Installment #2 bounce,</text>
                    <text x="785" y="140" textAnchor="middle" fill="#047857" fontSize="10">attach bank/assets directly</text>
                  </svg>
                </div>

                {/* Mobile Stacked Cards */}
                <div className="grid grid-cols-1 gap-3 md:hidden">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-bold uppercase text-[#DC2626]">Step 1: Notice &amp; Offer</span>
                    <p className="font-bold text-sm text-slate-900">Reject Informal MOU; Invite to Section 30 ODR</p>
                    <p className="text-xs text-slate-600 mt-1">Dispatch multi-channel notice via Email, WhatsApp &amp; Speed Post RPAD.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-bold uppercase text-[#DC2626]">Step 2: Section 30 Session</span>
                    <p className="font-bold text-sm text-slate-900">45-Minute Video Mediation via Institutional MSP</p>
                    <p className="text-xs text-slate-600 mt-1">Section 29 pauses limitation; Section 22 shields concession offers.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-bold uppercase text-emerald-700">Step 3: Section 19 Execution</span>
                    <p className="font-bold text-sm text-slate-900">e-Sign + Mediator Authentication + Acceleration</p>
                    <p className="text-xs text-slate-600 mt-1">Converts 4-installment plan into a binding Section 27 decree.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                    <span className="text-[10px] font-bold uppercase text-emerald-800">Step 4: Order XXI Execution</span>
                    <p className="font-bold text-sm text-emerald-950">Direct Bank &amp; Asset Attachment on Default</p>
                    <p className="text-xs text-emerald-800 mt-1">Zero fresh civil trial—file execution directly upon tranche #2 bounce.</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mt-4">
                  Need to serve standardized mediation invitations across hundreds of overdue accounts simultaneously? Use our{" "}
                  <Link href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution" className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]">
                    bulk Email, WhatsApp &amp; Speed Post notice engine
                  </Link>{" "}
                  or test a single account using our{" "}
                  <Link href="/templates/legal-notice-reply-format" className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]">
                    commercial notice &amp; reply workspace
                  </Link>.
                </p>
              </section>

              {/* Section 6: Interactive 4-Tab Creditor Scenarios */}
              <section id="heading-scenario-tabs" className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    6
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    4 Commercial Recovery Scenarios Under Mediation Act, 2023
                  </h2>
                </div>
                <MediationActScenarioTabs />
              </section>

              {/* Section 7: Supreme Court Precedents & Commercial Courts Act s.12A */}
              <section
                id="heading-precedents-and-12a"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    7
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Binding Precedents &amp; Commercial Courts Act Section 12A Synergy
                  </h2>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                  General Counsel must align Mediation Act, 2023 workflows with mandatory{" "}
                  <Link href="/law/section-12a-commercial-courts-act-pre-institution-mediation-guide" className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]">
                    Section 12A Commercial Courts Act pre-institution mediation
                  </Link>{" "}
                  and urgent{" "}
                  <Link href="/order-38-rule-5-attachment-before-judgment-b2b-commodity-recovery" className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]">
                    Order XXXVIII Rule 5 asset attachment
                  </Link>{" "}
                  rulings. For MSME suppliers, also verify statutory 3x RBI compound interest leverage using our{" "}
                  <Link href="/tools/msme-delayed-payment-interest-calculator" className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]">
                    MSME Delayed Payment Interest Calculator
                  </Link>.
                </p>

                <div className="space-y-5">
                  {PRECEDENT_CARDS.map((card, idx) => (
                    <article
                      key={idx}
                      className="relative bg-slate-50 border border-slate-200 rounded-xl p-5 pl-6 overflow-hidden"
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]" />
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626]">
                          {card.citation}
                        </span>
                        <span className="text-[11px] font-medium text-slate-500">{card.date}</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-1">
                        {card.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-600 mb-3">{card.parties}</p>
                      <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <p>
                          <strong>Facts:</strong> {card.facts}
                        </p>
                        <p>
                          <strong>Holding:</strong> {card.holding}
                        </p>
                        <div className="pt-2 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <span className="inline-block px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
                            {card.amount}
                          </span>
                          <span className="text-xs text-slate-600 italic">{card.takeaway}</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 8: Pre-Empting Section 28 Debtor Challenges */}
              <section
                id="heading-sec28-preemption"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    8
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Pre-Empting Section 28 Debtor Challenges at Execution
                  </h2>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-5">
                  Unlike arbitral awards or civil decrees that face broad appellate scrutiny, <strong>Section 28 of the Mediation Act, 2023</strong> restricts challenges to four narrow grounds—fraud, corruption, impersonation, or non-mediable disputes under Section 6—within a strict 90-day window. Inoculate your Online MSA against execution-stage objections with these 5 safeguards:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[640px]">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3.5 sm:p-4 font-bold uppercase tracking-wider text-[11px] w-[28%]">
                          Debtor Objection at Execution
                        </th>
                        <th className="p-3.5 sm:p-4 font-bold uppercase tracking-wider text-[11px] w-[24%]">
                          Governing Provision
                        </th>
                        <th className="p-3.5 sm:p-4 font-bold uppercase tracking-wider text-[11px] w-[48%]">
                          Creditor Pre-Emption Protocol
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white text-slate-800">
                      {PREEMPTION_ROWS.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-3.5 sm:p-4 font-semibold text-slate-900 align-top">
                            {row.challenge}
                          </td>
                          <td className="p-3.5 sm:p-4 font-mono text-[11px] text-[#DC2626] align-top">
                            {row.statute}
                          </td>
                          <td className="p-3.5 sm:p-4 text-slate-700 leading-relaxed align-top">
                            {row.preemption}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 9: 10-Point Section 27/30 MSA Drafting & Execution Checklist */}
              <section
                id="heading-msa-checklist"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    9
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    10-Point Section 27 &amp; 30 Online MSA Execution Checklist
                  </h2>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                  Before signing off on any commercial restructuring or installment plan, General Counsel and Credit Risk VPs should verify all 10 statutory checkpoints:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {CHECKLIST_ITEMS.map((chk) => (
                    <div
                      key={chk.id}
                      className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-300 transition-all"
                    >
                      <h3 className="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-black shrink-0">
                          &check;
                        </span>
                        {chk.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{chk.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 10: Dual B2B CTA Action Desk */}
              <section id="heading-action-desk" className="scroll-mt-28">
                <MediationActCTA />
              </section>

              {/* Section 11: FAQs */}
              <section
                id="heading-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    10
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Frequently Asked Questions: Mediation Act 2023 s.27 &amp; s.30
                  </h2>
                </div>

                <div className="space-y-4">
                  {FAQ_ITEMS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group border border-slate-200 rounded-xl bg-slate-50/50 p-4 transition-all duration-200 open:bg-white open:shadow-sm"
                    >
                      <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer list-none flex items-center justify-between gap-3 select-none">
                        <span>{faq.question}</span>
                        <span className="shrink-0 text-slate-400 group-open:rotate-180 transition-transform">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </span>
                      </summary>
                      <div className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed pt-2 border-t border-slate-200">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 12: Primary Statutory Sources */}
              <section
                id="heading-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    11
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Primary Statutory Citations &amp; Supreme Court Authorities
                  </h2>
                </div>

                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-4">
                  All statutory commentary, execution workflows, and Section 28 challenge safeguards in this guide are derived from primary Indian legislation and Supreme Court precedents:
                </p>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#DC2626] font-bold mt-0.5">&bull;</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-slate-800 hover:text-[#DC2626] font-medium underline underline-offset-2 transition-colors"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-3">
                  <span>
                    Authored &amp; Vetted by: <strong>Anuj Anand Malik</strong>, Advocate &amp; Founder, AMA Legal Solutions
                  </span>
                  <span>Last Verified: November 2026 &bull; CORE-26 Enterprise B2B Recovery</span>
                </div>
              </section>
            </div>
          </div>
        </main>

        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
