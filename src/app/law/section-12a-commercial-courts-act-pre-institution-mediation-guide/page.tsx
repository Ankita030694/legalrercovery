import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import Section12aTableOfContents from "./Section12aTableOfContents";
import Section12aScenarioTabs from "./Section12aScenarioTabs";
import Section12aCTA from "./Section12aCTA";

export const revalidate = 86400;

const PAGE_PATH = "/law/section-12a-commercial-courts-act-pre-institution-mediation-guide";
const META_TITLE = "Section 12A Commercial Courts Act: Mediation (₹3L+) Guide";
const META_DESCRIPTION =
  "Skip Section 12A mediation on a ₹3L+ suit and courts reject your plaint suo motu. Master Form-1 DLSA filing, ₹1,000 fee & arbitral-award settlement.";

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
        alt: formatAltText("Section 12A Commercial Courts Act Pre-Institution Mediation Guide"),
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
      "Commercial Courts Act, 2015 (Sections 2(1)(c), 2(1)(i), 12 & 12A — Commercial Disputes, Specified Value ₹3 Lakh & Mandatory Pre-Institution Mediation)",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title:
      "Commercial Courts (Pre-Institution Mediation and Settlement) Rules, 2018 (G.S.R. 606(E) — Form-1 Application, Form-2 Notice, Form-3 Non-Starter Report & ₹1,000 Fee)",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title:
      "Arbitration and Conciliation Act, 1996 (Section 30(4) & Section 36 — Enforceability of Mediated Settlement as an Arbitral Award)",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title:
      "Code of Civil Procedure, 1908 (Order VII Rule 11 Rejection of Plaint & Order XXXVIII Rule 5 Attachment Before Judgment)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title:
      "National Legal Services Authority (NALSA) & Supreme Court of India Official Portal (SLSA/DLSA Mediation Cell Framework)",
    url: "https://nalsa.gov.in/",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Supreme Court Declares Section 12A Mandatory & Orders Suo Motu Rejection",
    parties: "Patil Automation Private Limited & Ors. v. Rakheja Engineers Private Limited",
    citation: "(2022) 10 SCC 1, Supreme Court of India",
    date: "Judgment Dated 17 August 2022 (Prospective w.e.f. 20 August 2022)",
    facts:
      "Commercial suits valued at ₹3 Lakh and above were instituted directly before Commercial Courts without invoking pre-institution mediation under Section 12A and without seeking urgent interim relief. The plaintiffs argued Section 12A was merely procedural and directory.",
    holding:
      "The Supreme Court authoritatively overruled High Court decisions treating Section 12A as directory and held that Section 12A is mandatory. Any commercial suit instituted after 20 August 2022 without exhausting pre-institution mediation (where no urgent interim relief is contemplated) MUST be rejected under Order VII Rule 11 CPC—and the court is duty-bound to exercise this power suo motu even if the defendant does not object.",
    amount: "Mandatory Statutory Gate — Suo Motu Order VII Rule 11 Rejection",
    takeaway:
      "Never file a ₹3L+ recovery suit directly without either a certified Form-3 Non-Starter Report from the DLSA/SLSA or a bona fide, evidence-backed urgent interim relief application.",
  },
  {
    title: "Supreme Court Clarifies 'Contemplates Urgent Interim Relief' Standard",
    parties: "Yamini Manohar v. T.K.D. Keerthi",
    citation: "(2024) 5 SCC 815 / 2023 SCC OnLine SC 1382, Supreme Court of India",
    date: "Judgment Dated 13 October 2023",
    facts:
      "A plaintiff filed a commercial suit seeking permanent and interim injunction without undergoing Section 12A mediation. The defendant sought Order VII Rule 11 rejection arguing that the interim relief prayer was merely a tactic to bypass Patil Automation.",
    holding:
      "The Supreme Court held that a plaintiff cannot bypass Section 12A through a 'camouflage' or sham prayer for interim relief. However, the plaint need not be rejected merely because the court ultimately declines interim relief; the Commercial Court must examine the plaint, documents, and facts from the plaintiff's standpoint to verify whether urgent interim relief is genuinely contemplated without subterfuge.",
    amount: "Anti-Camouflage Test — Genuine Urgency Survives Even if Interim Stay Is Refused",
    takeaway:
      "If you bypass Section 12A using Order XXXVIII Rule 5 attachment or Order XXXIX injunction, attach contemporaneous asset-stripping or IP-infringement proof so your urgency survives scrutiny.",
  },
  {
    title: "Supreme Court Threshold for Order XXXVIII Rule 5 Urgent Attachment",
    parties: "Raman Tech. & Process Engg. Co. & Anr. v. Solanki Traders",
    citation: "(2008) 2 SCC 302, Supreme Court of India",
    date: "Judgment Dated 20 November 2007",
    facts:
      "A supplier obtained an attachment before judgment solely on an affidavit alleging the defendant had unpaid dues, without concrete evidence of intent to dispose of or remove property from court jurisdiction.",
    holding:
      "The Supreme Court held that power under Order XXXVIII Rule 5 CPC is drastic and extraordinary and cannot be used mechanically merely to convert an unsecured debt into a secured debt. The plaintiff must establish a prima facie case plus specific, credible facts showing the defendant is about to dispose of or remove assets to obstruct execution.",
    amount: "Evidentiary Floor for Urgent Relief — Protects Against Yamini Manohar Rejection",
    takeaway:
      "Before claiming a Section 12A urgent-relief exemption for asset attachment, assemble verifiable dissipation proof (MCA charge filings, GST suspension, or warehouse clearance) rather than boilerplate fears.",
  },
];

const SPECIFIED_VALUE_RULES = [
  {
    clause: "Section 12(1)(a) — Recovery of Money",
    basis: "Principal sum claimed + accrued interest computed up to the date of filing the suit.",
    b2bExample: "₹2.65L unpaid invoices + ₹55,000 contractual interest = ₹3.20L Specified Value (Commercial Court mandatory).",
  },
  {
    clause: "Section 12(1)(b) — Movable Property / Goods",
    basis: "Market value of the movable property (e.g., retained machinery, cylinders, or leased equipment) as on suit filing date.",
    b2bExample: "Unreturned industrial gas cylinders or CNC tooling valued at ₹4.80L falls within Commercial Court jurisdiction.",
  },
  {
    clause: "Section 12(1)(c) — Immovable Property",
    basis: "Market value of the commercial immovable property as on the date of filing the suit.",
    b2bExample: "Commercial warehouse lease-rent or possession disputes valued at ₹3L+.",
  },
  {
    clause: "Section 12(1)(d) — Intangible Rights / IP / Licenses",
    basis: "Market value of the intangible right as estimated by the plaintiff.",
    b2bExample: "Franchise royalty, SaaS licensing, or trademark infringement claims estimated at ₹3L+.",
  },
];

const FORM_COMPARISON_ROWS = [
  {
    parameter: "Governing Rule & Purpose",
    nonStarter: "Rule 3(6) & Form-3 of PIMS Rules, 2018 — Issued when opposite party fails to appear or refuses mediation.",
    settlement: "Section 12A(4)-(5) & Form-4 — Executed when both parties agree on principal, interest, or tranche schedule.",
  },
  {
    parameter: "Legal Status",
    nonStarter: "Mandatory statutory prerequisite ('passport') to file a regular Commercial Suit in Commercial Court.",
    settlement: "Carries the same status and effect as an Arbitral Award on agreed terms u/s 30(4) of the Arbitration Act, 1996.",
  },
  {
    parameter: "Enforceability on Default",
    nonStarter: "Enables institution of Order XXXVII summary suit or regular commercial suit without Order VII Rule 11 bar.",
    settlement: "Directly executable as a court decree u/s 36 Arbitration Act & Order XXI CPC—no fresh suit or trial needed.",
  },
  {
    parameter: "Authority & Mediator Fee Impact",
    nonStarter: "Only ₹1,000 Form-1 filing fee spent; Schedule II mediator fee is NOT triggered if debtor never appears.",
    settlement: "One-time Schedule II mediator fee shared equally by both parties (far cheaper than ad valorem court fee on suit).",
  },
  {
    parameter: "Limitation Protection",
    nonStarter: "Entire period from Form-1 filing to Form-3 issuance is excluded under the proviso to Section 12A(3).",
    settlement: "Original invoice limitation merges into the enforceable arbitral-award settlement (12-year execution window).",
  },
];

const DEFENSE_PREEMPTION_ROWS = [
  {
    defense: "1. 'No Section 12A Mediation Done' (Order VII Rule 11)",
    tactic: "Debtor moves to dismiss plaint citing Patil Automation after suit is filed.",
    preemption: "Annex certified Form-3 Non-Starter Report as Document No. 1, or plead concrete Yamini Manohar urgent relief facts.",
  },
  {
    defense: "2. 'Urgent Relief Prayer Is a Sham Camouflage'",
    tactic: "Debtor argues interim injunction/attachment was added solely to skip DLSA mediation.",
    preemption: "File contemporaneous asset-stripping proof (MCA filings, GST cancellation, site photos) under Order XXXVIII Rule 5.",
  },
  {
    defense: "3. 'Form-2 Notice Was Never Served at Correct Address'",
    tactic: "Debtor claims Non-Starter Report is invalid because DLSA sent notice to an old address.",
    preemption: "Pull fresh MCA Master Data & GSTIN Principal Place of Business before Form-1 filing; serve email + Speed Post.",
  },
  {
    defense: "4. 'Suit Is Time-Barred by 3-Year Limitation'",
    tactic: "Debtor adds the 2–3 months spent at DLSA to argue the plaint crossed 36 months.",
    preemption: "Invoke the statutory proviso to Section 12A(3) excluding mediation duration + attach Form-1 and Form-3 dates.",
  },
  {
    defense: "5. 'Mediation Admissions Prove Liability/Waiver'",
    tactic: "Debtor tries to cite without-prejudice discount offers made during mediation.",
    preemption: "Invoke Rule 7 confidentiality bar of PIMS Rules, 2018—mediation proposals are inadmissible in subsequent trial.",
  },
];

const COMPLIANCE_CHECKLIST = [
  {
    id: "s12a-1",
    title: "1. Commercial Dispute Qualification u/s 2(1)(c)",
    description:
      "Confirm the B2B transaction falls within the 22 sub-clauses of Section 2(1)(c) (merchant supply, services, construction, licensing, etc.).",
  },
  {
    id: "s12a-2",
    title: "2. Specified Value >= ₹3,00,000 u/s 12",
    description:
      "Compute principal + contractual interest up to filing date; ensure total Specified Value crosses ₹3 Lakh.",
  },
  {
    id: "s12a-3",
    title: "3. Urgent Interim Relief Triage",
    description:
      "Decide upfront: genuine Order XXXVIII Rule 5 asset-freeze urgency (Yamini Manohar) vs mandatory Form-1 DLSA filing.",
  },
  {
    id: "s12a-4",
    title: "4. Jurisdictional DLSA / SLSA Selection",
    description:
      "Identify the District Legal Services Authority attached to the Commercial Court having territorial and pecuniary jurisdiction.",
  },
  {
    id: "s12a-5",
    title: "5. MCA & GSTIN Address Verification",
    description:
      "Verify current Registered Office and Director email IDs on MCA so Form-2 notices cannot be returned 'left/insufficient address'.",
  },
  {
    id: "s12a-6",
    title: "6. ₹1,000 Form-1 Fee & Particulars",
    description:
      "Complete PIMS Rules Form-1 with concise dispute summary, invoice schedule, and pay the ₹1,000 authority filing fee.",
  },
  {
    id: "s12a-7",
    title: "7. Board Resolution / Authorization",
    description:
      "Attach certified Board Resolution or Partnership Authority empowering the signatory/advocate to attend mediation and sign settlements.",
  },
  {
    id: "s12a-8",
    title: "8. BSA 2023 s.63 Ledger Readiness",
    description:
      "Keep GST tax invoices, e-Way Bills, POs, and ERP ledger certified u/s 63 BSA 2023 ready to demonstrate ironclad liability at session 1.",
  },
  {
    id: "s12a-9",
    title: "9. Form-3 Non-Starter Report Custody",
    description:
      "If the debtor defaults on both 10-day notices or refuses settlement, collect the signed Form-3 Non-Starter Report with exact dates.",
  },
  {
    id: "s12a-10",
    title: "10. Default-Acceleration Clause in Form-4",
    description:
      "If settling in tranches, draft an explicit default-acceleration clause so the Section 12A(5) Arbitral Award is immediately executable.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Is Section 12A Pre-Institution Mediation mandatory for all B2B recovery suits?",
    answer:
      "Yes, for every commercial suit valued at ₹3 Lakh or above that does not contemplate urgent interim relief. Following the Supreme Court's ruling in Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd. (2022) 10 SCC 1, any plaint filed without exhausting Section 12A mediation (and without genuine urgent interim relief) must be rejected suo motu under Order VII Rule 11 CPC.",
  },
  {
    question: "How much is the Form-1 filing fee for Section 12A mediation at DLSA?",
    answer:
      "Under the Commercial Courts (Pre-Institution Mediation and Settlement) Rules, 2018, the plaintiff pays a nominal ₹1,000 authority fee when submitting the Form-1 application before the jurisdictional DLSA or SLSA. A separate one-time mediator fee (slabbed under Schedule II by Specified Value) is payable—and shared equally by both parties—only if the opposite party appears and mediation actually commences.",
  },
  {
    question: "What happens if the debtor ignores the DLSA Section 12A mediation notice?",
    answer:
      "Under Rule 3 of the PIMS Rules, 2018, the DLSA/SLSA issues a Form-2 notice giving the opposite party 10 days to appear, followed by a final 10-day notice if there is no response. If the debtor still fails to appear or refuses to participate, the Authority closes the proceeding as a non-starter and issues a Form-3 Non-Starter Report, clearing the way for your regular Commercial Suit.",
  },
  {
    question: "How is the ₹3 Lakh 'Specified Value' calculated under the Commercial Courts Act?",
    answer:
      "Under Section 12(1)(a) of the Commercial Courts Act, 2015, for money recovery suits, the Specified Value is the aggregate principal amount plus accrued interest claimed up to the date of filing the suit. If unpaid invoices of ₹2.60 Lakh plus contractual delayed-payment interest of ₹55,000 total ₹3.15 Lakh, the suit crosses the ₹3 Lakh threshold and triggers Commercial Court jurisdiction and Section 12A.",
  },
  {
    question: "When can a creditor bypass Section 12A under the 'urgent interim relief' exception?",
    answer:
      "Under Section 12A(1) as interpreted in Yamini Manohar v. T.K.D. Keerthi (2023), a creditor can file directly without mediation only if the plaint and documents genuinely contemplate urgent interim relief—such as an Order XXXVIII Rule 5 attachment before judgment against active asset stripping or an Order XXXIX injunction. Cosmetic or sham interim prayers added just to avoid mediation will result in rejection of the plaint.",
  },
  {
    question: "Does Section 12A mediation pause the 3-year Limitation Act clock?",
    answer:
      "Yes. The proviso to Section 12A(3) of the Commercial Courts Act explicitly mandates that the period during which the parties remained occupied with pre-institution mediation (from Form-1 filing until the Form-3 Non-Starter Report or settlement failure) shall not be computed for the purpose of limitation under the Limitation Act, 1963.",
  },
  {
    question: "What legal force does a signed Section 12A settlement agreement have?",
    answer:
      "Under Section 12A(4) and Section 12A(5), a written settlement signed by the parties and the mediator has the exact same status and effect as an Arbitral Award on agreed terms under Section 30(4) of the Arbitration and Conciliation Act, 1996. If the debtor defaults on any agreed installment, you can execute it directly as a court decree without filing a fresh suit.",
  },
];

export default function Section12aMediationGuidePage() {
  const pageUrl = `${SITE_URL}${PAGE_PATH}`;
  const headlineText =
    "Mandatory Pre-Institution Mediation Under Section 12A of the Commercial Courts Act (₹3 Lakh+): Form-1 Filing, Non-Starter Reports & Patil Automation";

  const breadcrumbItems = [
    { label: "B2B Debt Recovery", href: "/b2b-debt-recovery-india" },
    { label: "Section 12A Commercial Mediation", href: PAGE_PATH },
  ];

  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: headlineText,
    description: META_DESCRIPTION,
    url: pageUrl,
    datePublished: "2026-11-20",
    dateModified: "2026-11-20",
    image: `${SITE_URL}/blog_money_recovery.png`,
    author: {
      "@type": "Person",
      name: "Anuj Anand Malik",
      jobTitle: "Advocate & Founder",
      affiliation: {
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
        name: "B2B Debt Recovery",
        item: `${SITE_URL}/b2b-debt-recovery-india`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Section 12A Commercial Mediation",
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
        {/* Dark Hero Section */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>COMMERCIAL COURTS ACT, 2015 &bull; S.12A</span>
              <span>&bull;</span>
              <span>PIMS RULES 2018 FORM-1</span>
              <span>&bull;</span>
              <span>₹3 LAKH+ B2B SUIT GATE</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Mandatory Pre-Institution Mediation Under Section 12A of the Commercial Courts Act (₹3 Lakh+): Form-1 Filing, Non-Starter Reports &amp;{" "}
              <em>Patil Automation</em>
            </h1>

            <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Executive Creditor Answer &amp; Statutory Summary
              </span>
              Under Section 12A of the Commercial Courts Act, 2015 and the Supreme Court&apos;s binding ruling in <em>Patil Automation</em> (2022), every{" "}
              <Link
                href="/b2b-debt-recovery-india"
                className="text-red-400 font-semibold underline underline-offset-2 hover:text-red-300 transition-colors"
              >
                B2B commercial recovery suit
              </Link>{" "}
              valued at ₹3 Lakh or above—without genuine urgent interim relief—must first undergo DLSA/SLSA Pre-Institution Mediation via Form-1 (₹1,000 fee), or face suo motu plaint rejection under Order VII Rule 11 CPC.
            </div>

            {/* Hero 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Specified Value
                </span>
                <span className="text-xl sm:text-2xl font-black text-slate-100 mt-1 block">
                  &ge; ₹3 Lakh
                </span>
                <span className="text-[10px] text-slate-400 mt-0.5 block">
                  Principal + interest u/s 12(1)(a)
                </span>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Form-1 DLSA Fee
                </span>
                <span className="text-xl sm:text-2xl font-black text-emerald-400 mt-1 block">
                  ₹1,000
                </span>
                <span className="text-[10px] text-slate-400 mt-0.5 block">
                  Non-refundable authority filing fee
                </span>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Statutory Clock
                </span>
                <span className="text-xl sm:text-2xl font-black text-amber-400 mt-1 block">
                  3 + 2 Mos
                </span>
                <span className="text-[10px] text-slate-400 mt-0.5 block">
                  Limitation paused u/s 12A(3) proviso
                </span>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Settlement Force
                </span>
                <span className="text-xl sm:text-2xl font-black text-red-400 mt-1 block">
                  Arbitral Award
                </span>
                <span className="text-[10px] text-slate-400 mt-0.5 block">
                  Executable decree u/s 30(4) Arb. Act
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Left Sticky Sidebar TOC */}
            <Section12aTableOfContents />

            {/* Right Main Editorial Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: Mandatory Gate */}
              <section
                id="heading-mandatory-gate"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    1
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Why Section 12A Is a Mandatory Gate for ₹3 Lakh+ Suits
                  </h2>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                  For Corporate Legal Heads, CFOs, and Commercial Litigators, skipping Section 12A of the Commercial Courts Act, 2015 is no longer a curable procedural irregularity—it is an instant fatal defect. Inserted by the 2018 Amendment Act, Section 12A(1) mandates that a commercial suit which does not contemplate any urgent interim relief shall not be instituted unless the plaintiff exhausts the remedy of pre-institution mediation in the manner prescribed by the Central Government.
                </p>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                  When a{" "}
                  <Link
                    href="/recovery-of-unpaid-dues-for-my-business"
                    className="text-[#DC2626] font-semibold underline underline-offset-2 hover:text-[#B91C1C]"
                  >
                    business recovery claim
                  </Link>{" "}
                  meets the ₹3 Lakh Specified Value floor, filing directly in Commercial Court without a Form-3 Non-Starter Report invites suo motu rejection under Order VII Rule 11 CPC—wasting ad valorem court fees and months of litigation momentum. Conversely, using Section 12A strategically gives creditors an enforceable Arbitral Award status u/s 30(4) of the Arbitration Act for just a ₹1,000 DLSA authority fee, or locks in a rapid Non-Starter Report to clear the path for an Order XXXVII summary suit. As documented in our{" "}
                  <Link
                    href="/reports/legal-notice-outcomes-study"
                    className="text-[#DC2626] font-semibold underline underline-offset-2 hover:text-[#B91C1C]"
                  >
                    Legal Notice Outcomes Study
                  </Link>
                  , pairing a pre-suit demand notice with formal statutory escalation sharply accelerates board-level debtor settlements.
                </p>

                {/* Desktop SVG Workflow Diagram */}
                <div className="hidden md:block bg-slate-900 rounded-2xl p-6 border border-slate-800 overflow-x-auto">
                  <p className="text-xs font-bold uppercase tracking-widest text-red-400 mb-4">
                    Statutory Escalation Workflow: Section 12A PIMS Rules, 2018
                  </p>
                  <svg
                    width="820"
                    height="150"
                    viewBox="0 0 820 150"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto"
                    role="img"
                    aria-label="5-stage Section 12A Pre-Institution Mediation workflow from Form-1 filing to Arbitral Award or Non-Starter Report"
                  >
                    <rect x="10" y="25" width="140" height="95" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <text x="80" y="52" textAnchor="middle" fill="#F87171" fontSize="11" fontWeight="bold">STAGE 1</text>
                    <text x="80" y="72" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Form-1 at DLSA</text>
                    <text x="80" y="92" textAnchor="middle" fill="#94A3B8" fontSize="10">₹1,000 Fee Paid</text>

                    <path d="M155 72 L180 72" stroke="#DC2626" strokeWidth="2.5" markerEnd="url(#arrow)" />

                    <rect x="185" y="25" width="145" height="95" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <text x="257" y="52" textAnchor="middle" fill="#FBBF24" fontSize="11" fontWeight="bold">STAGE 2</text>
                    <text x="257" y="72" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Form-2 Notice</text>
                    <text x="257" y="92" textAnchor="middle" fill="#94A3B8" fontSize="10">10d + 10d Final Notice</text>

                    <path d="M335 72 L360 72" stroke="#DC2626" strokeWidth="2.5" />

                    <rect x="365" y="25" width="145" height="95" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                    <text x="437" y="52" textAnchor="middle" fill="#34D399" fontSize="11" fontWeight="bold">STAGE 3</text>
                    <text x="437" y="72" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">Triage Gate</text>
                    <text x="437" y="92" textAnchor="middle" fill="#94A3B8" fontSize="10">Appear vs Default</text>

                    <path d="M515 50 L545 40" stroke="#34D399" strokeWidth="2" />
                    <path d="M515 95 L545 105" stroke="#F87171" strokeWidth="2" />

                    <rect x="550" y="10" width="255" height="58" rx="10" fill="#064E3B" stroke="#10B981" strokeWidth="1.5" />
                    <text x="677" y="33" textAnchor="middle" fill="#6EE7B7" fontSize="11" fontWeight="bold">PATH A: MEDIATION SETTLEMENT</text>
                    <text x="677" y="51" textAnchor="middle" fill="#ECFDF5" fontSize="11">Form-4 Award u/s 30(4) Arb. Act</text>

                    <rect x="550" y="80" width="255" height="58" rx="10" fill="#450A0A" stroke="#EF4444" strokeWidth="1.5" />
                    <text x="677" y="103" textAnchor="middle" fill="#FCA5A5" fontSize="11" fontWeight="bold">PATH B: DEBTOR NO-SHOW / REFUSAL</text>
                    <text x="677" y="121" textAnchor="middle" fill="#FEF2F2" fontSize="11">Form-3 Non-Starter &rarr; Suit</text>
                  </svg>
                </div>

                {/* Mobile Stacked Cards */}
                <div className="md:hidden grid grid-cols-1 gap-3 mt-4">
                  <div className="p-3.5 rounded-xl bg-slate-900 text-white border border-slate-800">
                    <span className="text-[10px] font-bold text-red-400 uppercase">Stage 1 &bull; Form-1 Filing</span>
                    <p className="text-xs text-slate-200 mt-1">Submit Form-1 at jurisdictional DLSA/SLSA with ₹1,000 authority fee.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900 text-white border border-slate-800">
                    <span className="text-[10px] font-bold text-amber-400 uppercase">Stage 2 &bull; Form-2 Notices</span>
                    <p className="text-xs text-slate-200 mt-1">Authority serves 10-day initial notice + 10-day final notice on debtor.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-emerald-950 text-white border border-emerald-800">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase">Path A &bull; Settlement</span>
                    <p className="text-xs text-emerald-100 mt-1">Signed Form-4 Settlement carries Arbitral Award decree force u/s 30(4).</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-red-950 text-white border border-red-800">
                    <span className="text-[10px] font-bold text-red-300 uppercase">Path B &bull; Non-Starter</span>
                    <p className="text-xs text-red-100 mt-1">Form-3 Non-Starter Report unlocks Commercial Court suit without O.VII R.11 bar.</p>
                  </div>
                </div>
              </section>

              {/* Section 2: Specified Value */}
              <section
                id="heading-specified-value"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    2
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Specified Value Under Section 12: Crossing the ₹3 Lakh Floor
                  </h2>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-5">
                  Following the 2018 amendment to Section 2(1)(i) of the Commercial Courts Act, 2015, the pecuniary threshold for Commercial Courts across India was lowered from ₹1 Crore to <strong>₹3,00,000 (₹3 Lakh)</strong>. If your dispute qualifies as a &ldquo;commercial dispute&rdquo; under Section 2(1)(c) and its Specified Value under Section 12 reaches ₹3 Lakh, ordinary Civil Courts lack jurisdiction—you must enter the Commercial Court track and satisfy Section 12A.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3.5 font-bold">Section 12 Sub-Clause</th>
                        <th className="p-3.5 font-bold">Valuation Basis</th>
                        <th className="p-3.5 font-bold">B2B Creditor Illustration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {SPECIFIED_VALUE_RULES.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-3.5 font-bold text-slate-900">{row.clause}</td>
                          <td className="p-3.5 text-slate-700">{row.basis}</td>
                          <td className="p-3.5 text-slate-700">{row.b2bExample}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Worked Specified Value Box */}
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
                  <h3 className="text-sm sm:text-base font-black text-emerald-950 mb-2">
                    Worked Ledger: How Accrued Interest Triggers Section 12A Above ₹3 Lakh
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed mb-3">
                    Suppose a supplier holds three unpaid tax invoices totaling <strong>₹2,65,000</strong> in principal (below ₹3L). Because the accepted PO/invoice stipulates 18% p.a. delayed-payment interest for 14 months (<strong>₹55,650</strong>), the aggregate Specified Value under Section 12(1)(a) on the date of filing is <strong>₹3,20,650</strong>. That ₹20,650 excess over ₹3 Lakh shifts the matter into Commercial Court jurisdiction—making Form-1 Section 12A mediation mandatory. Registered Micro &amp; Small Enterprises can compute statutory compound interest using our{" "}
                    <Link
                      href="/tools/msme-delayed-payment-interest-calculator"
                      className="text-emerald-950 font-bold underline underline-offset-2"
                    >
                      MSME Delayed Payment Interest Calculator
                    </Link>
                    .
                  </p>
                </div>
              </section>

              {/* Section 3: Form-1 DLSA Process */}
              <section
                id="heading-form1-dlsa-sop"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    3
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Form-1 Filing at DLSA/SLSA: Step-by-Step PIMS Rules 2018 SOP
                  </h2>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-5">
                  The procedural mechanics of Section 12A are governed by the Commercial Courts (Pre-Institution Mediation and Settlement) Rules, 2018 (PIMS Rules). Before filing Form-1, smart creditors first serve a formal{" "}
                  <Link
                    href="/templates/coal-scrap-commodity-supply-and-gas-cylinder-recovery-notice"
                    className="text-[#DC2626] font-semibold underline underline-offset-2 hover:text-[#B91C1C]"
                  >
                    B2B statutory demand notice
                  </Link>{" "}
                  or run{" "}
                  <Link
                    href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                    className="text-[#DC2626] font-semibold underline underline-offset-2 hover:text-[#B91C1C]"
                  >
                    tri-channel Email + WhatsApp + Speed Post dispatch
                  </Link>{" "}
                  to lock in delivery proof and recover undisputed balances without court intervention.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626]">
                      Step 1 &bull; Form-1 &amp; ₹1,000 Fee
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm mt-1 mb-1.5">
                      Submit Application to Jurisdictional Authority
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      File Form-1 (Schedule I) before the DLSA/SLSA having jurisdiction over the Commercial Court where the suit would lie, enclosing the ₹1,000 authority fee receipt, brief statement of claim, and party addresses.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626]">
                      Step 2 &bull; Form-2 Service (10 + 10 Days)
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm mt-1 mb-1.5">
                      Authority Issues Two Statutory Notices
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Under Rule 3(2)–(4), the Authority issues Form-2 notice granting 10 days to appear. If the debtor does not respond, a final notice granting another 10 days is issued.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626]">
                      Step 3 &bull; Mediator Fee Trigger
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm mt-1 mb-1.5">
                      One-Time Fee Payable Only Upon Commencement
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Only if the opposite party consents to mediate does the Schedule II one-time mediator fee become payable—shared equally by both parties unless agreed otherwise.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626]">
                      Step 4 &bull; Form-3 or Form-4 Closure
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm mt-1 mb-1.5">
                      Non-Starter Report or Arbitral Award
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      If the debtor defaults or mediation fails, the Authority issues Form-3 (Non-Starter Report). If settled, parties execute Form-4 carrying Arbitral Award finality u/s 30(4).
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: Timelines & Limitation */}
              <section
                id="heading-timelines-limitation"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    4
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    3-Month Clock, +2 Month Extension &amp; Limitation Exclusion
                  </h2>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                  Under Section 12A(3) of the Commercial Courts Act, 2015, the mediation process must be completed within <strong>3 months</strong> from the date of application made by the plaintiff. This 3-month statutory window may be extended for a further period of <strong>2 months</strong> with the mutual consent of both parties—capping the entire pre-institution mediation lifecycle at 5 months.
                </p>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm text-amber-950 leading-relaxed">
                  <strong className="font-extrabold block mb-1">
                    Critical Limitation Safeguard (Proviso to Section 12A(3)):
                  </strong>
                  In computing the period of limitation for any suit under the Limitation Act, 1963, the period during which the parties remained occupied with pre-institution mediation under Section 12A <strong>shall not be counted</strong>. Always preserve the timestamped Form-1 filing receipt and dated Form-3 Non-Starter Report to claim this statutory exclusion in your plaint&apos;s limitation paragraph.
                </div>
              </section>

              {/* Section 5: Verified Precedents */}
              <section
                id="heading-sc-precedents"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    5
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Patil Automation &amp; Yamini Manohar: Verified SC Precedents
                  </h2>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                  Commercial Courts enforce Section 12A strictly through three controlling Supreme Court decisions. Every General Counsel must screen pleadings against these holdings before filing:
                </p>

                <div className="space-y-5">
                  {COURT_PRECEDENTS.map((prec, idx) => (
                    <article
                      key={idx}
                      className="relative pl-5 pr-4 py-4 rounded-xl border border-slate-200 bg-slate-50/70"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-xl bg-[#DC2626]"
                      />
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626]">
                          {prec.citation}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-500">
                          {prec.date}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-black text-slate-900 mb-1">
                        {prec.parties}
                      </h3>
                      <p className="text-xs font-bold text-slate-700 mb-2">{prec.title}</p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                        <strong>Facts &amp; Holding:</strong> {prec.facts} {prec.holding}
                      </p>
                      <div className="mt-2 pt-2 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                        <span className="font-bold text-slate-900">{prec.amount}</span>
                        <span className="text-slate-600">
                          <strong>Creditor Takeaway:</strong> {prec.takeaway}
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 6: Interactive 4 Scenarios */}
              <section
                id="heading-scenario-tabs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    6
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    4 Commercial Mediation &amp; Urgent Relief Scenarios
                  </h2>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-5">
                  Select your debtor&apos;s current posture below to review the exact statutory SOP, timeline impact, and Order VII Rule 11 safeguards. For genuine asset-stripping emergencies, also review our dedicated{" "}
                  <Link
                    href="/order-38-rule-5-attachment-before-judgment-b2b-commodity-recovery"
                    className="text-[#DC2626] font-semibold underline underline-offset-2 hover:text-[#B91C1C]"
                  >
                    Order XXXVIII Rule 5 Attachment Before Judgment guide
                  </Link>
                  .
                </p>

                <Section12aScenarioTabs />
              </section>

              {/* Section 7: Non-Starter vs Arbitral Award */}
              <section
                id="heading-nonstarter-vs-award"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    7
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Form-3 Non-Starter Report vs Arbitral Award u/s 30(4)
                  </h2>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-5">
                  Whether your debtor ignores Form-2 notices or agrees to settle in installments, Section 12A produces one of two high-leverage statutory instruments:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3.5 font-bold">Parameter</th>
                        <th className="p-3.5 font-bold">Form-3 Non-Starter Report</th>
                        <th className="p-3.5 font-bold">Form-4 Settlement (u/s 30(4))</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {FORM_COMPARISON_ROWS.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-3.5 font-bold text-slate-900">{row.parameter}</td>
                          <td className="p-3.5 text-slate-700">{row.nonStarter}</td>
                          <td className="p-3.5 text-slate-700">{row.settlement}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed">
                  Note on Forum Selection: If your undisputed corporate debtor claim exceeds ₹1 Crore, evaluate parallel or alternative escalation under{" "}
                  <Link
                    href="/law/ibc-section-8-demand-notice-form-3-form-4-operational-creditor"
                    className="text-[#DC2626] font-semibold underline underline-offset-2 hover:text-[#B91C1C]"
                  >
                    IBC Section 8 Demand Notice (Form 3 vs Form 4)
                  </Link>{" "}
                  where Section 12A mediation does not apply to NCLT insolvency petitions.
                </p>
              </section>

              {/* Section 8: Defense Pre-Emption Matrix */}
              <section
                id="heading-preemption-matrix"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    8
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Debtor Defense Pre-Emption Matrix (Order VII Rule 11)
                  </h2>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="p-3.5 font-bold">Debtor Objection</th>
                        <th className="p-3.5 font-bold">Litigation Tactic</th>
                        <th className="p-3.5 font-bold">Creditor Pre-Emption</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {DEFENSE_PREEMPTION_ROWS.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-3.5 font-bold text-slate-900">{row.defense}</td>
                          <td className="p-3.5 text-slate-700">{row.tactic}</td>
                          <td className="p-3.5 text-slate-700">{row.preemption}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 9: 10-Point Compliance Checklist */}
              <section
                id="heading-compliance-checklist"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    9
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    10-Point Pre-Filing Section 12A Compliance Checklist
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {COMPLIANCE_CHECKLIST.map((chk) => (
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

              {/* Dual-Track B2B CTA Action Desk */}
              <section id="heading-action-desk" className="scroll-mt-28">
                <Section12aCTA />
              </section>

              {/* Section 10: FAQs */}
              <section
                id="heading-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    10
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    FAQs: Section 12A Pre-Institution Mediation &amp; Form-1
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

              {/* Section 11: Primary Statutory Sources */}
              <section
                id="heading-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    11
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Primary Statutory Authorities &amp; Official Portals
                  </h2>
                </div>

                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-4">
                  All statutory timelines, Form-1/Form-3 procedures, and Order VII Rule 11 compliance protocols in this guide are derived from primary Indian statutes, PIMS Rules, 2018, and verified Supreme Court decisions:
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
