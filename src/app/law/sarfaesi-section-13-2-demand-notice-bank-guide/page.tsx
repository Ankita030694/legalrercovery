import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import SarfaesiSection13NoticeTableOfContents from "./SarfaesiSection13NoticeTableOfContents";
import SarfaesiSection13NoticeScenarioTabs from "./SarfaesiSection13NoticeScenarioTabs";
import SarfaesiSection13NoticeCTA from "./SarfaesiSection13NoticeCTA";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "SARFAESI Section 13(2) & 13(3A) Bank Compliance Checklist",
  description:
    "Prevent DRT SA quashing. Bank checklist for SARFAESI Section 13(2) itemized breakup, NPA date, Rule 3 service & Section 13(3A) replies within 15 days.",
  alternates: {
    canonical: `${SITE_URL}/law/sarfaesi-section-13-2-demand-notice-bank-guide`,
  },
  openGraph: {
    title: "SARFAESI Section 13(2) & 13(3A) Bank Compliance Checklist",
    description:
      "Prevent DRT SA quashing. Bank checklist for SARFAESI Section 13(2) itemized breakup, NPA date, Rule 3 service & Section 13(3A) replies within 15 days.",
    url: `${SITE_URL}/law/sarfaesi-section-13-2-demand-notice-bank-guide`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "SARFAESI Section 13 2 Demand Notice Bank Compliance Checklist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SARFAESI Section 13(2) & 13(3A) Bank Compliance Checklist",
    description:
      "Prevent DRT SA quashing. Bank checklist for SARFAESI Section 13(2) itemized breakup, NPA date, Rule 3 service & Section 13(3A) replies within 15 days.",
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
    title: "Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 (SARFAESI Act — Sections 13(2), 13(3), 13(3A), 13(4), 13(8), 13(9), 14, 17, 31 & 34)",
    url: "https://www.indiacode.nic.in/handle/123456789/2006",
  },
  {
    title: "Security Interest (Enforcement) Rules, 2002 (Rule 2(a) Authorized Officer, Rule 3 Demand Notice Service, Rule 3A Representation Disposal & Rule 8 Possession)",
    url: "https://www.indiacode.nic.in/handle/123456789/2006",
  },
  {
    title: "Reserve Bank of India (Prudential Norms on Income Recognition, Asset Classification and Provisioning pertaining to Advances — NPA 90-Day Norms)",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=12165",
  },
  {
    title: "Reserve Bank of India (Fair Practices Code for Lenders & Guidelines on Penal Charges in Loan Accounts — Circular DoR.MCS.REC.28/01.01.001/2023-24)",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12527&Mode=0",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Notice Dispatch & Speed Post Manifests)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Recovery of Debts and Bankruptcy Act, 1993 (RDB Act — Section 19 Original Application Concurrent Jurisdiction)",
    url: "https://www.indiacode.nic.in/handle/123456789/1987",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "Supreme Court on Mandatory Duty of Secured Creditor to Consider Borrower Representation with Meaningful Reasons",
    parties: "Mardia Chemicals Ltd. & Ors. v. Union of India & Ors.",
    citation: "(2004) 4 SCC 311, Supreme Court of India",
    date: "Judgment Dated 08 April 2004",
    facts:
      "Borrowers challenged the constitutional validity of Section 13 of the SARFAESI Act, 2002 on grounds of arbitrary power conferred on banks to seize secured properties without pre-adjudication. Borrowers argued that lack of opportunity to contest arbitrary claims violated natural justice.",
    holding:
      "The Supreme Court upheld the constitutional validity of the Act but read in an indispensable statutory safeguard: before taking any coercive measures under Section 13(4), the secured creditor has a mandatory statutory obligation to consider any representation or objection raised by the borrower and communicate reasons for non-acceptance within the prescribed statutory period. This ruling led directly to Parliament introducing Section 13(3A) by amendment in 2004.",
    amount: "Doctrine of Fairness Established — Section 13(3A) Compliance is Mandatory and Non-Derogable",
    takeaway:
      "An Authorized Officer cannot disregard or mechanically rubber-stamp a borrower's Section 13(3A) representation. The bank must demonstrate applied mind and dispatch reasoned communication before proceeding to Section 13(4) possession.",
  },
  {
    title: "Supreme Court on Mandatory Nature of Section 13(3A) and When Subsequent Action is Vitiated",
    parties: "ITC Limited v. Blue Coast Hotels Ltd. & Ors.",
    citation: "(2018) 15 SCC 99, Supreme Court of India",
    date: "Judgment Dated 19 March 2018",
    facts:
      "The corporate borrower raised objections to a Section 13(2) demand notice and sought an extension of time to discharge liabilities. The secured creditor did not formally communicate a reasoned rejection under Section 13(3A) but subsequently proceeded to take symbolic possession under Section 13(4). The High Court set aside the possession proceedings.",
    holding:
      "The Supreme Court affirmed that the requirement of Section 13(3A) to consider objections and communicate reasons is mandatory. However, on the facts, since the debtor had repeatedly admitted liability and sought time to pay, the underlying purpose of Section 13(3A) stood fulfilled, and the debtor was estopped from claiming invalidity. The Court clarified that as a general rule, failure to respond to Section 13(3A) objections vitiates subsequent Section 13(4) action.",
    amount: "Substantive Compliance Standard — Admission of Debt May Cure Failure, but SOP Mandates Strict Written Reply",
    takeaway:
      "Bank legal panels must treat Section 13(3A) replies as an essential jurisdictional step. Never assume borrower admissions will rescue an omission in DRT proceedings under Section 17.",
  },
  {
    title: "DRAT & High Court Jurisprudence on Itemized Breakup Under Section 13(3)",
    parties: "Punjab National Bank v. Imperial Motor Co. & Anr.",
    citation: "2018 SCC OnLine DRAT Del 44 / (2018) III BC 119",
    date: "Order Dated 14 September 2018",
    facts:
      "The bank issued a Section 13(2) notice demanding a composite lump-sum amount of ₹8.42 Crores without providing an itemized bifurcation between principal outstanding, accrued regular interest, penal interest, and incidental legal charges. The borrower filed a Securitisation Application (SA) under Section 17 before the DRT.",
    holding:
      "The DRT quashed the Section 13(2) notice, and the Debts Recovery Appellate Tribunal (DRAT) affirmed the dismissal. The Tribunal held that Section 13(3) mandatorily requires the notice of demand to give details of the amount payable by the borrower as well as the secured assets intended to be enforced. A lump-sum figure deprives the debtor of the statutory opportunity to discharge exact admitted dues or reconcile interest calculations.",
    amount: "Notice Quashed for Non-Compliance with Section 13(3) Sub-Clause Specificity",
    takeaway:
      "Authorized Officers must append a clear tabular ledger to every Section 13(2) notice specifying principal outstanding, contractual interest rate, unapplied interest, penal charges (segregated per RBI circulars), and expenses.",
  },
  {
    title: "Supreme Court on Simultaneous Remedy: DRT Original Application & SARFAESI Enforcement",
    parties: "Transcore v. Union of India & Anr.",
    citation: "(2008) 1 SCC 125, Supreme Court of India",
    date: "Judgment Dated 29 November 2006",
    facts:
      "Borrowers argued that once a bank files an Original Application (OA) under Section 19 of the Recovery of Debts Due to Banks and Financial Institutions Act, 1993 (RDB Act), it cannot invoke SARFAESI Section 13 without first withdrawing the DRT application.",
    holding:
      "The Supreme Court held that the Doctrine of Election does not apply to simultaneous proceedings under the RDB Act and SARFAESI Act. SARFAESI is an additional, non-derogatory enforcement mechanism designed for speedy recovery without judicial intervention. A bank is entitled to prosecute its DRT OA while simultaneously issuing Section 13(2) notices and taking physical possession under Section 13(4) and Section 14.",
    amount: "Concurrent Recovery Tracks Upheld — No Election Estoppel on Secured Creditors",
    takeaway:
      "Banks can aggressively enforce mortgage securities under SARFAESI while keeping their money claim and attachment prayers alive in DRT under Section 19 of the RDB Act.",
  },
  {
    title: "Supreme Court on Statutory Extinguishment of Borrower's Right of Redemption Under Section 13(8)",
    parties: "Celir LLP v. Bafna Motors (Mumbai) Pvt. Ltd. & Ors.",
    citation: "(2024) 2 SCC 1, Supreme Court of India",
    date: "Judgment Dated 21 September 2023",
    facts:
      "The borrower attempted to tender outstanding dues after the bank published the e-auction sale notice for the mortgaged industrial property, claiming an equitable right of redemption under Section 60 of the Transfer of Property Act, 1882.",
    holding:
      "The Supreme Court ruled that following the 2016 statutory amendment to Section 13(8) of the SARFAESI Act, the borrower's right of redemption stands extinguished on the date of publication of the notice for public auction or invite for tender. The general provisions of the Transfer of Property Act yield to the special statutory mandate of SARFAESI, providing commercial finality to bank auction sales.",
    amount: "Finality of SARFAESI Actions Secured — Post-Publication Tenders Cannot Derail Auctions",
    takeaway:
      "When borrowers seek to stall auctions via late OTS proposals after auction publication, bank Authorized Officers can rely on Celir LLP to reject belated redemption claims and proceed with sale certificate issuance.",
  },
];

const PREEMPTION_ROWS = [
  {
    challenge: "NPA classification date omitted, vague, or non-compliant with RBI 90-day overdue rules",
    statute: "SARFAESI s.13(2) & RBI Prudential Norms",
    preemption:
      "State exact calendar date of NPA classification in paragraph 2 of the notice. Verify CBS 90 DPD trigger and attach sanction letter covenant confirming default definition.",
  },
  {
    challenge: "Composite lump-sum demand without principal, interest, and penal charge itemization",
    statute: "SARFAESI s.13(3) & RBI Penal Charge Directions",
    preemption:
      "Include a detailed tabular Schedule setting out: (1) Disbursed Facility, (2) Principal Balance, (3) Normal Contractual Interest, (4) Separate Non-Compounded Penal Charges, and (5) Incidental Costs.",
  },
  {
    challenge: "Notice signed by Assistant Manager / Chief Manager without valid Authorized Officer delegation",
    statute: "SARFAESI Rule 2(a) Security Interest Rules",
    preemption:
      "Ensure the signing officer holds the substantive rank of Chief Manager or above, or has a specific Board Resolution / Power of Attorney notifying them as Authorized Officer under Rule 2(a).",
  },
  {
    challenge: "Failure to communicate reasoned reply to Section 13(3A) representation within 15 days",
    statute: "SARFAESI s.13(3A) & Mardia Chemicals",
    preemption:
      "Implement automated 10-day escalation for borrower objections. Issue paragraph-by-paragraph reasoned rejection signed by the AO and dispatch via Speed Post RPAD within 15 calendar days.",
  },
  {
    challenge: "Security asset description ambiguous, boundary mismatch, or wrong CTS / Survey / Khasra number",
    statute: "SARFAESI s.13(3) & CERSAI Security Filing",
    preemption:
      "Cross-check Schedule 'A' against original title deed recital, registered memorandum of deposit of title deeds (MODTD), and attach latest CERSAI security interest registration report.",
  },
  {
    challenge: "Failure to independently serve Guarantors, Mortgagors, or Legal Heirs of deceased borrower",
    statute: "Security Interest Rules Rule 3(1)",
    preemption:
      "Serve separate individual notices via Speed Post RPAD to each borrower, co-borrower, corporate guarantor, and third-party mortgagor at both registered office and permanent residential addresses.",
  },
  {
    challenge: "Postal remark 'Door Locked' or 'Unclaimed' treated as service without Rule 3(2) substitute publication",
    statute: "Security Interest Rules Rule 3(2) & 3(3)",
    preemption:
      "Upon return of postal packet, immediately execute field affixture with two independent witnesses followed by simultaneous publication in two leading newspapers (one in vernacular language).",
  },
];

const AUDIT_CHECKLIST = [
  {
    id: "chk-1",
    title: "1. 90-Day CBS NPA Classification Validation",
    description:
      "Verify that the borrower's account has continuously remained overdue for 90+ days in Core Banking Solution (CBS) in strict conformity with RBI Prudential Norms, and that the exact date of NPA classification is recorded without ambiguity.",
  },
  {
    id: "chk-2",
    title: "2. Authorized Officer Notification & Scale Check",
    description:
      "Confirm that the signatory is an officer not below the rank of Chief Manager (or equivalent scale specified under Rule 2(a) of the Security Interest Rules, 2002) holding an active Board authorization or Power of Attorney.",
  },
  {
    id: "chk-3",
    title: "3. Itemized Principal vs Interest Schedule (s.13(3))",
    description:
      "Append a comprehensive tabular statement itemizing principal outstanding, contractual interest rates, unapplied interest from NPA date, incidental expenses, and segregated non-compounded penal charges in compliance with RBI Master Directions.",
  },
  {
    id: "chk-4",
    title: "4. Precise Cadastral & Encumbrance Description (Schedule 'A')",
    description:
      "Verify that the property boundaries (North, South, East, West), CTS/Survey/Khasra numbers, municipal assessment numbers, and undivided share (UDS) match the registered Title Deed and MODTD verbatim.",
  },
  {
    id: "chk-5",
    title: "5. Active CERSAI Registration Certificate Attachment",
    description:
      "Extract and annex the latest CERSAI Search Report demonstrating valid creation and modification of security interest within the statutory 30-day window under Section 23 of the SARFAESI Act.",
  },
  {
    id: "chk-6",
    title: "6. Agricultural Land Exemption Screening (s.31(i))",
    description:
      "Obtain Sub-Registrar / Tahsildar land use certificate and geotagged field inspection photographs confirming that the mortgaged property is put to commercial, industrial, or residential usage and is not agricultural land exempt under Section 31(i).",
  },
  {
    id: "chk-7",
    title: "7. Independent Notice Service to All Guarantors & Mortgagors",
    description:
      "Dispatch individual Section 13(2) notices to the primary borrower, co-borrowers, corporate guarantor, personal guarantors, and third-party mortgagors at all known business, registered, and residential addresses.",
  },
  {
    id: "chk-8",
    title: "8. Multi-Channel Dispatch: RPAD, Email & WhatsApp with BSA s.63 Proof",
    description:
      "Execute dispatch via India Post Speed Post RPAD alongside authenticated electronic delivery (Zoho Mail / WATI WhatsApp) and preserve electronic dispatch logs with hash verification certified under Section 63 of Bharatiya Sakshya Adhiniyam, 2023.",
  },
  {
    id: "chk-9",
    title: "9. Evasion SOP: Affixture & Two-Newspaper Publication (Rule 3(2))",
    description:
      "If any postal packet returns unserved ('Left', 'Refused', 'Door Locked'), execute physical affixture with panchanama witnessed by two independent persons and publish the statutory notice in two newspapers (one in vernacular).",
  },
  {
    id: "chk-10",
    title: "10. Mandatory 60-Day Full Calendar Calculation",
    description:
      "Calculate 60 clear days starting from the date of receipt of notice by the last served debtor, excluding the date of delivery, ensuring zero Section 13(4) possession steps are taken prior to the 61st day.",
  },
  {
    id: "chk-11",
    title: "11. 15-Day Representation Monitoring System (s.13(3A))",
    description:
      "Maintain a dedicated branch register for incoming representations. Ensure any objection or representation is placed before the Authorized Officer within 24 hours to guarantee reasoned disposal within 15 calendar days.",
  },
  {
    id: "chk-12",
    title: "12. Reasoned Rejection Communication Protocol",
    description:
      "Draft a speaking order addressing each point raised by the borrower. The letter must state explicit factual grounds for non-acceptance and be dispatched under the signature of the Authorized Officer via registered post.",
  },
  {
    id: "chk-13",
    title: "13. Consortium 60% Value Mandate Verification (s.13(9))",
    description:
      "In consortium or multiple banking arrangements, ensure written consent representing at least 60% in value of the total secured outstanding debt is recorded and formally cited in the notice.",
  },
  {
    id: "chk-14",
    title: "14. Post-Notice Statutory Injunction Warning (s.13(13))",
    description:
      "Explicitly cite Section 13(13) in the notice text, warning the borrower and guarantors that any transfer, sale, lease, or disposal of the secured assets after receipt of notice without bank consent is a statutory violation and penal offence.",
  },
];

const FAQ_ITEMS = [
  {
    question: "What are the mandatory statutory contents of a SARFAESI Section 13(2) demand notice?",
    answer:
      "Under Section 13(2) and Section 13(3) of the SARFAESI Act, 2002, a valid demand notice must contain: (1) The exact calendar date on which the borrower's account was classified as a Non-Performing Asset (NPA) under RBI Prudential Norms; (2) An itemized breakup of the aggregate debt showing principal outstanding, contractual interest, unapplied interest, and segregated non-compounded penal charges; (3) A precise cadastral description of the mortgaged properties or hypothecated assets with boundaries and CERSAI security ID; (4) A clear demand to discharge the entire liability within 60 calendar days from the date of receipt; and (5) A statutory injunction warning under Section 13(13) prohibiting any sale, lease, or transfer of the secured assets without the prior written consent of the secured creditor.",
  },
  {
    question: "Why do Debts Recovery Tribunals (DRT) quash Section 13(2) notices for lump-sum demands?",
    answer:
      "Section 13(3) of the Act mandatorily provides that the notice of demand shall give details of the amount payable by the borrower as well as the secured assets intended to be enforced. Appellate tribunals and High Courts (including DRAT Delhi in Punjab National Bank v. Imperial Motor Co.) have consistently held that stating a single consolidated lump-sum figure without separating principal from interest and penal charges deprives the borrower of the statutory right to verify calculations, discharge admitted dues, or point out accounting errors. Notices containing composite figures without tabular schedules are routinely quashed in Securitisation Applications under Section 17.",
  },
  {
    question: "What is the exact timeline and procedure for replying to a borrower representation under Section 13(3A)?",
    answer:
      "Under Section 13(3A) (introduced following the Supreme Court's ruling in Mardia Chemicals), if the borrower makes any representation or raises any objection upon receiving the Section 13(2) notice, the Authorized Officer must consider the representation. If the bank finds the objection non-acceptable, the reasons for non-acceptance must be communicated in writing to the borrower within 15 calendar days from the date of receipt of such representation. Failure to communicate reasons within 15 days is an incurable statutory defect that renders subsequent Section 13(4) possession proceedings liable to be quashed by the DRT under Section 17.",
  },
  {
    question: "Does disposing of a borrower's Section 13(3A) representation reset the 60-day demand notice period?",
    answer:
      "No. The statutory 60-day demand notice period under Section 13(2) does not reset or restart upon receipt or disposal of a Section 13(3A) representation. The 60-day clock continues to run from the original date of service of the Section 13(2) notice. However, the Authorized Officer cannot initiate Section 13(4) possession measures on Day 61 unless the 15-day communication of reasons for rejecting the borrower's objection has been completed prior to or concurrently with the expiration of the 60 days.",
  },
  {
    question: "How should a bank prove valid service under Rule 3 of the Security Interest (Enforcement) Rules if the debtor evades Speed Post?",
    answer:
      "Under Rule 3(1), service can be effected by registered post with acknowledgement due, speed post, courier, fax, or electronic mail. If the postal packet is returned with remarks such as 'Refused', 'Unclaimed', or 'Door Locked', the bank must execute substitute service: (1) Rule 3(2) allows personal delivery by bank officers, and if the debtor refuses, obtaining signatures of two witnesses; (2) Rule 3(3) mandates affixing a copy of the notice on the outer door or a conspicuous part of the debtor's premises; and (3) Publishing the notice in two leading newspapers circulating in the locality, of which at least one must be in the vernacular language. Combining India Post tracking with BSA 2023 s.63 electronic certificates creates conclusive legal proof of service.",
  },
  {
    question: "Can an Authorized Officer issue a Section 13(2) notice if an Original Application (OA) is already pending before DRT?",
    answer:
      "Yes. The Supreme Court in Transcore v. Union of India (2008) 1 SCC 125 conclusively established that the Doctrine of Election does not apply to simultaneous proceedings under the Recovery of Debts and Bankruptcy Act, 1993 (RDB Act) and the SARFAESI Act, 2002. A bank does not need permission from the DRT or withdrawal of its pending Section 19 Original Application to issue a Section 13(2) demand notice, take symbolic possession under Section 13(4), or apply to the District Magistrate under Section 14.",
  },
  {
    question: "What is the rank and qualification required for an officer to act as an Authorized Officer under Rule 2(a)?",
    answer:
      "Under Rule 2(a) of the Security Interest (Enforcement) Rules, 2002, an 'Authorized Officer' means an officer not less than the rank of a Chief Manager of a public sector bank or equivalent scale, or any other officer specified by the Board of Directors or governing body of the secured creditor to exercise the powers conferred under the Act. Any Section 13(2) notice signed by an Assistant Manager or Branch Manager without a documented Board delegation or designated notification is void ab initio for want of statutory competence.",
  },
  {
    question: "How does the Section 13(13) statutory restriction prevent borrowers from alienating mortgaged properties?",
    answer:
      "Section 13(13) of the SARFAESI Act creates an automatic statutory injunction once the Section 13(2) notice is served. It explicitly prohibits any borrower, co-borrower, or mortgagor from transferring by way of sale, lease, mortgage, or otherwise any of the secured assets referred to in the notice without the prior written consent of the secured creditor. Any third-party transaction executed after receipt of the notice is void in law, and transferring assets in violation of Section 13(13) constitutes an offence punishable under Section 29 of the Act.",
  },
];

export default function SarfaesiSection13DemandNoticePage() {
  const pageUrl = `${SITE_URL}/law/sarfaesi-section-13-2-demand-notice-bank-guide`;
  const pageTitle =
    "Bulletproof SARFAESI Section 13(2) Demand Notices: Authorized Officer Compliance & 13(3A) Reply Guide";

  // Breadcrumb items for UI and Schema
  const breadcrumbItems = [
    { label: "Banks & Lenders", href: "/industries/banks-loan-recovery" },
    {
      label: "SARFAESI Section 13(2) Bank Guide",
      href: "/law/sarfaesi-section-13-2-demand-notice-bank-guide",
    },
  ];

  // TODO(reviewer): src/data/reviewers.ts is absent in this repository
  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: pageTitle,
    description:
      "Prevent DRT Securitisation Application (SA) quashing. Complete bank checklist for Section 13(2) itemized breakup, NPA date, Rule 3 service & 13(3A) replies.",
    url: pageUrl,
    inLanguage: "en-IN",
    image: `${SITE_URL}/blog_money_recovery.png`,
    datePublished: "2026-11-19T00:00:00+05:30",
    dateModified: "2026-11-19T00:00:00+05:30",
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
        name: "Banks & Lenders",
        item: `${SITE_URL}/industries/banks-loan-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "SARFAESI Section 13(2) Bank Guide",
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      {/* Structured Data Scripts */}
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
            {/* Hero Eyebrow Badge */}
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
              <span>SARFAESI ACT 2002 &bull; s.13(2), s.13(3), s.13(3A)</span>
              <span>&bull;</span>
              <span>RULE 3 SERVICE SOP</span>
              <span>&bull;</span>
              <span>BANK AUTHORIZED OFFICER AUDIT</span>
            </div>

            {/* Single H1 Tag */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              {pageTitle}
            </h1>

            {/* Executive Statutory Summary Box */}
            <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
                Statutory Summary &amp; Creditor Mandate
              </span>
              Under Section 13(2) of the SARFAESI Act, 2002, a secured creditor initiates statutory debt enforcement by demanding discharge of liability within 60 days following NPA classification. For{" "}
              <Link
                href="/industries/banks-loan-recovery"
                className="text-red-400 font-semibold underline underline-offset-2 hover:text-red-300 transition-colors"
              >
                Scheduled Commercial Banks, Small Finance Banks &amp; Cooperative Lenders
              </Link>
              , over 30% of mortgage enforcement actions get stayed before the Debts Recovery Tribunal (DRT) due to avoidable technical errors: omitting itemized interest breakup under Section 13(3), improper service under Rule 3, or failing to communicate reasoned Section 13(3A) representation replies within 15 days. This guide provides Bank Authorized Officers and Legal Panels with a defect-free drafting, service, and objection-rebuttal audit protocol.
            </div>

            {/* Hero 4-Card Key Metrics Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Demand Period
                </span>
                <span className="text-xl sm:text-2xl font-black text-slate-100 mt-1 block">
                  60 Days
                </span>
                <span className="text-[10px] text-slate-400 mt-0.5 block">
                  Clear statutory window under s.13(2)
                </span>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Objection TAT
                </span>
                <span className="text-xl sm:text-2xl font-black text-emerald-400 mt-1 block">
                  15 Days
                </span>
                <span className="text-[10px] text-slate-400 mt-0.5 block">
                  Strict s.13(3A) reasoned reply deadline
                </span>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Breakup Rule
                </span>
                <span className="text-xl sm:text-2xl font-black text-amber-400 mt-1 block">
                  s.13(3)
                </span>
                <span className="text-[10px] text-slate-400 mt-0.5 block">
                  Itemized principal, interest &amp; charges
                </span>
              </div>
              <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                <span className="block text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Service Rule
                </span>
                <span className="text-xl sm:text-2xl font-black text-red-400 mt-1 block">
                  Rule 3(1)-(4)
                </span>
                <span className="text-[10px] text-slate-400 mt-0.5 block">
                  RPAD + Affixture + 2-Paper Pub
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Layout */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          {/* Breadcrumbs */}
          <div className="mb-6 sm:mb-8">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Table of Contents Sticky Sidebar */}
            <SarfaesiSection13NoticeTableOfContents />

            {/* Main Content Column */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
              {/* Section 1: Statutory Mandate & Judicial Foundations */}
              <section
                id="heading-statutory-mandate"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    1
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Section 13(2) &amp; 13(3) Statutory Framework for Banks
                  </h2>
                </div>

                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    The Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 (SARFAESI Act) equips secured creditors with extra-judicial powers to enforce mortgaged assets without the intervention of a civil court. However, this extraordinary statutory power is conditional upon strict compliance with the notice architecture laid down in Section 13(2) and Section 13(3).
                  </p>
                  <p>
                    Under Section 13(2), where any borrower who is under a liability to a secured creditor under a security agreement makes any default in repayment of secured debt or any installment thereof, and his account in respect of such debt is classified by the secured creditor as a <strong>Non-Performing Asset (NPA)</strong> in accordance with RBI Prudential Norms, the secured creditor may require the borrower by notice in writing to discharge in full his liabilities to the secured creditor within <strong>60 days</strong> from the date of notice.
                  </p>

                  <div className="bg-slate-50 border-l-4 border-slate-900 p-4 rounded-r-xl my-4 text-xs sm:text-sm">
                    <p className="font-semibold text-slate-900 mb-1">
                      Bare Act Provision &mdash; Section 13(3) Mandatory Specificity:
                    </p>
                    <p className="italic text-slate-700">
                      &ldquo;The notice referred to in sub-section (2) shall give details of the amount payable by the borrower and the secured assets intended to be enforced by the secured creditor in the event of non-payment of secured debts by the borrower.&rdquo;
                    </p>
                  </div>

                  <p>
                    Authorized Officers (Chief Manager scale and above) must recognize that a Section 13(2) notice is not a routine civil reminder; it is the <strong>jurisdictional foundation</strong> of all subsequent recovery actions under Section 13(4) (symbolic possession, taking over management, appointment of receiver) and Section 14 (physical possession through the District Magistrate or Chief Metropolitan Magistrate). Any fatal drafting or service flaw at this threshold stage infects all subsequent measures, leaving the bank vulnerable to stay orders and asset restoration in Securitisation Applications filed by debtors under Section 17 before the Debts Recovery Tribunal (DRT).
                  </p>

                  <div className="bg-slate-900 text-white p-4 sm:p-5 rounded-xl border border-slate-800 my-4 text-xs sm:text-sm">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 block mb-1">
                      Statutory Pre-Condition &mdash; Mandatory CERSAI Registration (Section 26D)
                    </span>
                    <p className="text-slate-300 leading-relaxed">
                      Following the 2016 statutory amendments, Section 26D of the SARFAESI Act explicitly provides that no secured creditor shall be entitled to exercise any rights of enforcement under Chapter III (encompassing Section 13 demand notices and possession) unless the security interest created in its favour has been registered with the Central Registry (CERSAI). Prior to issuing the Section 13(2) demand notice, the Authorized Officer must download and cross-verify the active CERSAI registration search report. Failing to record the CERSAI Security Interest ID in the notice preamble provides the debtor with an immediate jurisdictional ground to have SARFAESI proceedings stayed before the DRT.
                    </p>
                  </div>

                  <p>
                    Additionally, under Section 2(1)(zb) and 2(1)(zc), the debt must arise under an enforceable &ldquo;security agreement&rdquo;. For equitable mortgages created by deposit of title deeds, the bank must ensure that original title documents, chain deeds for 30 years, and the registered Memorandum of Deposit of Title Deeds (MODTD) or formal entry in the Bank Mortgage Register are verified. Any variance between the cadastral boundaries recorded in the MODTD and the description in Schedule &lsquo;A&rsquo; of the Section 13(2) notice will be aggressively exploited by the debtor under Section 17.
                  </p>
                </div>
              </section>

              {/* Section 2: Bare-Act Section Timelines & Limitation Stops */}
              <section
                id="heading-bare-act-timelines"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    2
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Statutory Timelines: 60-Day Notice &amp; 15-Day Reply Stops
                  </h2>
                </div>

                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    SARFAESI proceedings operate on rigid statutory countdowns. The Authorized Officer must meticulously track calendar dates to prevent allegations of premature possession or delayed disposal of debtor objections.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                    <div className="bg-red-50/60 border border-red-200 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-red-700">
                          Day 0 &rarr; Day 60
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-100 text-red-800 font-bold">
                          s.13(2)
                        </span>
                      </div>
                      <p className="text-sm font-bold text-slate-900 mb-1">
                        60-Day Demand Window
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Starts on the date of actual receipt of notice by the borrower. The bank cannot take any Section 13(4) measures before the 61st day. Debtors are barred under s.13(13) from transferring or alienating assets.
                      </p>
                    </div>

                    <div className="bg-amber-50/60 border border-amber-200 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                          15 Calendar Days
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold">
                          s.13(3A)
                        </span>
                      </div>
                      <p className="text-sm font-bold text-slate-900 mb-1">
                        Objection Disposal TAT
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        If the borrower files an objection or representation under Section 13(3A), the AO must consider and communicate reasoned acceptance or rejection within 15 calendar days from receipt.
                      </p>
                    </div>

                    <div className="bg-emerald-50/60 border border-emerald-200 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                          45 Calendar Days
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                          s.17(1)
                        </span>
                      </div>
                      <p className="text-sm font-bold text-slate-900 mb-1">
                        Borrower DRT SA Window
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        A borrower or aggrieved party can file a Securitisation Application before DRT within 45 days from the date on which any measure under Section 13(4) (possession notice) is taken.
                      </p>
                    </div>
                  </div>

                  <p>
                    Crucially, <strong>Section 13(3A) does not extend the 60-day demand window</strong>. If an objection is received on Day 45 and rejected with reasoned dispatch on Day 55, the bank remains fully entitled to enforce Section 13(4) possession immediately on Day 61. However, if an objection is received on Day 58 and reasons are dispatched on Day 70, Section 13(4) measures must wait until Day 71.
                  </p>
                </div>
              </section>

              {/* Section 3: Landmark Precedents */}
              <section
                id="heading-landmark-precedents"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    3
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Landmark Supreme Court &amp; DRAT Precedents for Secured Lenders
                  </h2>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                  Every paragraph of a SARFAESI demand notice must be drafted in alignment with verified judicial holdings. The Supreme Court and Debts Recovery Appellate Tribunals have established strict parameters governing procedural fairness, itemized demands, and concurrent recovery rights:
                </p>

                <div className="space-y-6">
                  {COURT_PRECEDENTS.map((item, idx) => (
                    <div
                      key={idx}
                      className="border border-slate-200 rounded-xl p-5 bg-white shadow-sm relative overflow-hidden"
                    >
                      {/* Crimson Left Accent Bar */}
                      <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#DC2626]" />

                      <div className="pl-3">
                        <span className="inline-block px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 mb-2">
                          {item.amount}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-[#DC2626] mb-1">
                          {item.parties} &mdash; <span className="text-slate-600 font-normal">{item.citation}</span>
                        </p>
                        <p className="text-[11px] text-slate-500 mb-3">{item.date}</p>

                        <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                          <p>
                            <strong>Factual Matrix:</strong> {item.facts}
                          </p>
                          <p>
                            <strong>Judicial Holding:</strong> {item.holding}
                          </p>
                          <div className="bg-red-50/50 border border-red-200 p-3 rounded-lg text-xs font-medium text-slate-800 mt-2">
                            <span className="font-bold text-[#DC2626]">Bank AO Compliance Takeaway: </span>
                            {item.takeaway}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 4: Itemized Debt Breakup vs Lump-Sum Demand */}
              <section
                id="heading-itemized-breakup"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    4
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Section 13(3) Itemized Debt vs Lump-Sum Demand Pitfalls
                  </h2>
                </div>

                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    The single most frequent fatal drafting defect in bank Section 13(2) notices is stating a composite aggregate figure without segregating principal, contractual interest, unapplied interest, and incidental costs. Under Section 13(3), the statutory mandate to give &ldquo;details of the amount payable&rdquo; is strict and non-negotiable.
                  </p>
                  <p>
                    Furthermore, following the Reserve Bank of India’s Fair Lending Practice Directions on Penal Charges in Loan Accounts (Circular DoR.MCS.REC.28/01.01.001/2023-24), banks are legally prohibited from capitalizing or compounding penal charges into the principal balance. Any demand notice that conceals penal charges inside the principal or applies compound interest on penal dues will be instantly stayed by the DRT.
                  </p>
                  <p>
                    A critical accounting nuance that Authorized Officers must manage is the treatment of <strong>unapplied interest</strong>. Once an account is classified as NPA under RBI Prudential Norms, the bank ceases recognizing income on an accrual basis in its profit and loss account. However, contractual interest continues to accrue in a separate memorandum account. In the Section 13(2) notice, the Authorized Officer must explicitly disclose the contractual interest accrued post-NPA up to the cut-off date, accompanied by an explicit recital: <em>&ldquo;Accrued unapplied contractual interest from the date of NPA [Date] to [Cut-Off Date] calculated at [X]% p.a. with [monthly/quarterly] rest, as per Sanction Letter terms.&rdquo;</em> Failing to clarify this distinction leads debtors to allege before DRT that the bank is making unverified claims outside its CBS statements.
                  </p>

                  {/* Dark-Header Tabular Statement Structure */}
                  <div className="overflow-x-auto my-6 rounded-xl border border-slate-200">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-slate-900 text-white font-bold uppercase tracking-wider text-[11px]">
                        <tr>
                          <th className="p-3.5 sm:p-4">Facility &amp; Account No.</th>
                          <th className="p-3.5 sm:p-4">Disbursed Limit</th>
                          <th className="p-3.5 sm:p-4">Principal O/S</th>
                          <th className="p-3.5 sm:p-4">Contractual Interest</th>
                          <th className="p-3.5 sm:p-4">Penal Charges (Uncompounded)</th>
                          <th className="p-3.5 sm:p-4">Total Liquidated Dues</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white text-slate-800">
                        <tr className="hover:bg-slate-50">
                          <td className="p-3.5 sm:p-4 font-semibold">Cash Credit (CC) Facility</td>
                          <td className="p-3.5 sm:p-4">&rupee;2,50,00,000</td>
                          <td className="p-3.5 sm:p-4">&rupee;2,48,20,410</td>
                          <td className="p-3.5 sm:p-4">&rupee;18,45,620</td>
                          <td className="p-3.5 sm:p-4">&rupee;1,12,000</td>
                          <td className="p-3.5 sm:p-4 font-bold text-red-600">&rupee;2,67,78,030</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="p-3.5 sm:p-4 font-semibold">Term Loan (TL) Facility</td>
                          <td className="p-3.5 sm:p-4">&rupee;5,00,00,000</td>
                          <td className="p-3.5 sm:p-4">&rupee;3,84,50,000</td>
                          <td className="p-3.5 sm:p-4">&rupee;29,80,110</td>
                          <td className="p-3.5 sm:p-4">&rupee;1,85,500</td>
                          <td className="p-3.5 sm:p-4 font-bold text-red-600">&rupee;4,16,15,610</td>
                        </tr>
                        <tr className="bg-slate-50 font-bold text-slate-900">
                          <td className="p-3.5 sm:p-4" colSpan={2}>Aggregate Enforceable Debt:</td>
                          <td className="p-3.5 sm:p-4">&rupee;6,32,70,410</td>
                          <td className="p-3.5 sm:p-4">&rupee;48,25,730</td>
                          <td className="p-3.5 sm:p-4">&rupee;2,97,500</td>
                          <td className="p-3.5 sm:p-4 text-[#DC2626] font-black text-base">&rupee;6,83,93,640</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-xs text-slate-500">
                    *Note: All future interest must be demanded at the agreed contractual rate with applicable rest, explicitly mentioning &ldquo;together with further interest and incidental charges accrued from [Cut-Off Date] until actual date of realization&rdquo;. For MSME borrowers, verify interest calculations against our{" "}
                    <Link
                      href="/tools/msme-delayed-payment-interest-calculator"
                      className="text-[#DC2626] font-semibold underline hover:text-red-700"
                    >
                      MSME Delayed Payment Interest Calculator
                    </Link>{" "}
                    to prevent rate dispute objections.
                  </p>
                </div>
              </section>

              {/* Section 5: Security Interest Rule 3 Service, Affixture & Publication */}
              <section
                id="heading-rule-3-service"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    5
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Security Interest Rule 3: Service, Affixture &amp; Publication
                  </h2>
                </div>

                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    Valid service of the Section 13(2) notice is a statutory condition precedent. If service is legally deficient, every subsequent action &mdash; including Section 13(4) possession and Section 14 magistrate orders &mdash; collapses automatically. Security Interest (Enforcement) Rules, 2002 Rule 3 provides an exhaustive multi-tier mechanism for service:
                  </p>

                  <div className="space-y-3 my-4">
                    <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                        a
                      </span>
                      <div>
                        <h3 className="font-bold text-slate-900 text-sm">
                          Rule 3(1) &mdash; Primary Service via Registered Post RPAD, Speed Post &amp; Electronic Mail
                        </h3>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          Notice must be dispatched to the borrower and every guarantor at the place where they reside or carry on business. Electronic service via email and WhatsApp is permissible but must be supported by an electronic delivery certificate generated under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA).
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                        b
                      </span>
                      <div>
                        <h3 className="font-bold text-slate-900 text-sm">
                          Rule 3(2) &mdash; Personal Hand Delivery with Panchanama Endorsement
                        </h3>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          Where personal delivery is attempted by bank officials and the borrower or agent refuses to accept or acknowledge delivery, the delivering officer must record an endorsement on the counterfoil attested by two independent local witnesses.
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                        c
                      </span>
                      <div>
                        <h3 className="font-bold text-slate-900 text-sm">
                          Rule 3(3) &mdash; Outer Door Affixture (Substituted Physical Service)
                        </h3>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          Where the debtor avoids service or premises are found locked, a copy of the demand notice must be affixed to the outer door or other conspicuous part of the house or building where the debtor ordinarily resides or carries on business. Take geotagged photographs with time-stamp metadata.
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                        d
                      </span>
                      <div>
                        <h3 className="font-bold text-slate-900 text-sm">
                          Rule 3(4) &mdash; Two-Newspaper Publication (English + Vernacular Language)
                        </h3>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          Where service cannot be effected through ordinary modes, the Authorized Officer must publish the notice in two leading newspapers circulating in the district &mdash; one in the English language and one in the vernacular language having wide circulation. Retain original newspaper tear-sheets for the DRT record.
                        </p>
                      </div>
                    </div>
                  </div>

                  <p>
                    For institutional lenders managing hundreds of NPA accounts across branches, dispatching physical notices manually leads to lost postal receipts and missing track records. Through our{" "}
                    <Link
                      href="/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues"
                      className="text-[#DC2626] font-semibold underline hover:text-red-700"
                    >
                      Bank Loan Recovery Legal Notice Infrastructure
                    </Link>
                    , banks execute multi-channel dispatch (Speed Post RPAD + Email + WhatsApp) with automated postal manifest logging and BSA Section 63 electronic certification.
                  </p>
                </div>
              </section>

              {/* Section 6: Section 13(3A) 15-Day Representation & Reasoned Reply SOP */}
              <section
                id="heading-section-13-3a"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    6
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Section 13(3A) 15-Day Representation &amp; Reasoned Reply SOP
                  </h2>
                </div>

                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    Inserted by statutory amendment pursuant to the Supreme Court ruling in <em>Mardia Chemicals</em>, Section 13(3A) provides that if on receipt of the notice under sub-section (2), the borrower makes any representation or raises any objection, the secured creditor shall consider such representation or objection.
                  </p>

                  <div className="p-4 sm:p-5 bg-red-950/90 text-white rounded-xl border border-red-800 shadow-lg my-4">
                    <span className="block text-xs uppercase font-bold text-red-400 tracking-wider mb-1.5">
                      The Section 13(3A) Reasoned Disposal Mandate
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-mono">
                      &ldquo;If the secured creditor comes to the conclusion that such representation or objection is not acceptable or tenable, he shall communicate within fifteen days of receipt of such representation or objection the reasons for non-acceptance to the borrower.&rdquo;
                    </p>
                  </div>

                  <p>
                    Bank legal departments frequently make the mistake of treating borrower objections as casual communications or waiting until the end of the 60-day demand window to respond. A delay beyond 15 days is an <strong>incurable jurisdictional defect</strong>. If challenged under Section 17, DRTs will quash subsequent Section 13(4) possession notices and restore physical possession to the debtor.
                  </p>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-4 mb-2">
                    Authorized Officer Section 13(3A) Rebuttal Checklist:
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 list-disc pl-5">
                    <li>
                      <strong>Paragraph-by-Paragraph Traversal:</strong> Formally rebut each factual allegation (e.g., wrongful interest compounding, uncredited subsidy, delayed sanction, non-disbursement of restructuring tranche).
                    </li>
                    <li>
                      <strong>Citation of Primary Contracts:</strong> Reference specific clause numbers in Sanction Letters, Loan Agreements, Hypothecation Deeds, and Guarantee covenants.
                    </li>
                    <li>
                      <strong>CBS Ledger Annexure:</strong> Attach an up-to-date certified statement of account under Bankers Books Evidence Act, 1891 / Section 63 BSA 2023 showing the exact credit entries and interest application.
                    </li>
                    <li>
                      <strong>Proviso Disclaimer:</strong> End the communication with the statutory disclaimer: <em>&ldquo;This communication of reasons does not confer upon you any right to prefer an application before the Debts Recovery Tribunal under Section 17 at this stage, as no measures under Section 13(4) have yet been initiated.&rdquo;</em>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 7: Interactive Scenario Tabs Component */}
              <section id="heading-scenario-tabs" className="scroll-mt-28">
                <SarfaesiSection13NoticeScenarioTabs />
              </section>

              {/* Section 8: Debtor Defense Pre-Emption Table */}
              <section
                id="heading-preemption-table"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    7
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Debtor Defense Pre-Emption Table: DRT Section 17 Challenges
                  </h2>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                  Borrower defense advocates employ standard playbooks before the DRT to secure interim stay orders against bank auction sales. Bank Authorized Officers must audit every Section 13(2) notice against this pre-emption table prior to dispatch:
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-900 text-white font-bold uppercase tracking-wider text-[11px]">
                      <tr>
                        <th className="p-3.5 sm:p-4 w-1/4">Borrower DRT SA Challenge</th>
                        <th className="p-3.5 sm:p-4 w-1/4">Statutory Basis</th>
                        <th className="p-3.5 sm:p-4 w-1/2">Bank Pre-Emption &amp; Defense SOP</th>
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

                <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                  <p>
                    <strong>Alternative Recovery Route for Sub-&rupee;20 Lakh Loans:</strong> If your secured loan portfolio contains defaulted exposures below the &rupee;20 Lakh DRT threshold where SARFAESI action is contested, explore our specialized guide on{" "}
                    <Link
                      href="/bank-loan-recovery-below-20-lakhs-drt-threshold-options"
                      className="text-[#DC2626] font-semibold underline hover:text-red-700"
                    >
                      Bank Loan Recovery Below 20 Lakhs DRT Threshold Options
                    </Link>{" "}
                    or refer cases to{" "}
                    <Link
                      href="/law/lok-adalat-pre-litigation-money-recovery"
                      className="text-[#DC2626] font-semibold underline hover:text-red-700"
                    >
                      Pre-Litigation Lok Adalat for Money Recovery
                    </Link>{" "}
                    for binding zero-court-fee consent awards.
                  </p>
                </div>
              </section>

              {/* Section 9: 14-Point Authorized Officer Pre-Issuance Audit Checklist */}
              <section
                id="heading-statutory-checklist"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    8
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    14-Point Authorized Officer Pre-Issuance Audit Checklist
                  </h2>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                  Before affixing their signature to a Section 13(2) notice, the Authorized Officer must certify compliance with all 14 statutory control points to ensure absolute immunity from DRT stay orders:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {AUDIT_CHECKLIST.map((chk) => (
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

                <div className="mt-6 p-4 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-white">
                      Need Physical Possession After Expiry of the 60-Day Notice?
                    </h3>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Read our comprehensive operational SOP for filing 9-point affidavits before the District Magistrate.
                    </p>
                  </div>
                  <Link
                    href="/sarfaesi-section-14-dm-cmm-physical-possession-workflow"
                    className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 transition-colors shrink-0"
                  >
                    View Section 14 DM Possession Guide &rarr;
                  </Link>
                </div>
              </section>

              {/* Section 10: Dual B2B CTA Action Desk */}
              <section id="heading-action-desk" className="scroll-mt-28">
                <SarfaesiSection13NoticeCTA />
              </section>

              {/* Section 11: Frequently Asked Questions */}
              <section
                id="heading-faqs"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    9
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Frequently Asked Questions: SARFAESI Section 13(2) &amp; 13(3A)
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

              {/* Section 12: Primary Statutory Sources & Citations */}
              <section
                id="heading-sources"
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-bold flex items-center justify-center text-xs shrink-0">
                    10
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                    Primary Statutory Citations &amp; Official Enforcement Rules
                  </h2>
                </div>

                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-4">
                  All commentary, precedent takeaways, and procedural workflows in this bank operational guide are derived from primary gazette statutes, verified Supreme Court rulings, and regulatory directives. Access verified statutory texts below:
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
                  <span>Last Verified: November 2026 &bull; Published under IND-01 Banking Playbook</span>
                </div>
              </section>
            </div>
          </div>
        </main>

        {/* Footer Cross-Links Component */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
