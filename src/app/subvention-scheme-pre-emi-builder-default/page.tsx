import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import SubventionNoticeCTA from "./SubventionNoticeCTA";
import SubventionTableOfContents from "./SubventionTableOfContents";
import SubventionScenarioTabs from "./SubventionScenarioTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Builder Stopped Paying Pre-EMI Under Subvention Scheme?",
  description:
    "Builder stopped paying pre-EMIs under a subvention scheme? Tripartite agreement rights, the bank's role and recovery steps.",
  alternates: {
    canonical: `${SITE_URL}/subvention-scheme-pre-emi-builder-default`,
  },
  openGraph: {
    title: "Subvention Scheme Gone Wrong: Builder Defaulted on Your Pre-EMIs",
    description:
      "Statutory remedies when a builder defaults on subvented Pre-EMIs: Tripartite Agreement liability, RBI upfront-disbursal circular violations, Supreme Court CIBIL shields, and RERA Section 18 recovery.",
    url: `${SITE_URL}/subvention-scheme-pre-emi-builder-default`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Subvention Scheme Gone Wrong: Builder Defaulted on Your Pre-EMIs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subvention Scheme Gone Wrong: Builder Defaulted on Your Pre-EMIs",
    description:
      "Statutory remedies when a builder defaults on subvented Pre-EMIs: Tripartite Agreement liability, RBI upfront-disbursal circular violations, Supreme Court CIBIL shields, and RERA Section 18 recovery.",
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
    title: "Real Estate (Regulation and Development) Act, 2016 (RERA) — Section 11(4)(a) (Promoter Obligations), Section 18 (Return of Amount & Interest), Section 31 (Complaints) & Section 40 (Recovery as Arrears of Land Revenue)",
    url: "https://www.indiacode.nic.in/handle/123456789/2158",
  },
  {
    title: "Reserve Bank of India (RBI) Circular DBOD.BP.BC.No.51/08.12.015/2013-14 (Dated 03 September 2013) — Housing Sector: Innovative Housing Loan Products – Upfront Disbursal of Housing Loans Must Be Linked to Stages of Construction",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=8349",
  },
  {
    title: "National Housing Bank (NHB) Policy Circular No. 88 — NHB(ND)/DRS/Policy Circular No.88/2018-19 (Dated 19 July 2019) — Restraint on Subvention Schemes & Mandatory Stage-Linked Disbursal by HFCs",
    url: "https://nhb.org.in/",
  },
  {
    title: "Bikram Chatterji & Ors. v. Union of India & Ors., (2019) 19 SCC 161 (Supreme Court Amrapali Judgment) — Bank Liability for Upfront Disbursal Violating RBI Guidelines",
    url: "https://indiankanoon.org/doc/127517806/",
  },
  {
    title: "Newtech Promoters and Developers Pvt. Ltd. v. State of UP & Ors., (2021) 18 SCC 1 (Supreme Court 3-Judge Bench) — Unconditional Statutory Right of Allottee to Refund With Interest Under Section 18 RERA",
    url: "https://main.sci.gov.in/supremecourt/2021/16957/16957_2021_4_1501_31312_Judgement_11-Nov-2021.pdf",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Admissibility of Tripartite Emails, NACH Logs, CIBIL Reports & RERA Portal Records)",
    url: "https://www.indiacode.nic.in/handle/123456789/20063",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Halts Coercive Bank Recovery, Section 138/SARFAESI & CIBIL Downgrade in Subvention Defaults",
    parties: "Himanshu Singh & Ors. v. Union of India & Ors.",
    citation: "SLP (C) No. 7649 of 2023 (Batch of 170+ Petitions), Supreme Court of India",
    date: "Orders Dated 2024–2025 (Justices Surya Kant & N. Kotiswar Singh)",
    facts:
      "Over 1,200 homebuyers across Noida, Greater Noida, and Gurugram booked residential apartments under 80:20 and 75:25 subvention schemes (" +
      "'No EMI Till Offer of Possession') backed by Tripartite Agreements between the homebuyer, developer (including Supertech and other NCR builders), and commercial banks/HFCs. Banks disbursed 70% to 90% of the sanctioned loan upfront directly to the builders without checking construction progress. When builders defaulted on Pre-EMIs and abandoned projects, banks initiated Section 138 NI Act / Section 25 PSS Act prosecutions, SARFAESI notices, and ruined buyers' CIBIL scores.",
    holding:
      "The Supreme Court observed a prima facie 'unholy nexus' between builders and banks/financial institutions that released massive loan amounts upfront in brazen violation of the RBI Circular dated 03.09.2013 and NHB Circular dated 19.07.2019. The Court directed a CBI probe into the builder-bank nexus and granted interim protection restraining banks and HFCs from taking any coercive recovery steps, prosecuting buyers for cheque/ECS bounces, or downgrading CIBIL credit scores for builder subvention defaults.",
    amount: "Blanket Interim Shield Against Bank Coercion + CIBIL Restoration + CBI Investigation Ordered",
    takeaway:
      "If your bank released the loan upfront to the builder without linking tranches to actual construction stages, the bank violated mandatory RBI regulations. You can legally challenge coercive recovery, Section 138/25 notices, and CIBIL reporting by putting the bank's regulatory breach on formal record.",
  },
  {
    title: "Banks Violating RBI Construction-Linked Disbursal Norms Cannot Recover From Trapped Homebuyers",
    parties: "Bikram Chatterji & Ors. v. Union of India & Ors. (Amrapali Group Matter)",
    citation: "Writ Petition (C) No. 940 of 2017, (2019) 19 SCC 161 (Supreme Court)",
    date: "Judgment Dated 23 July 2019",
    facts:
      "Thousands of homebuyers booked flats in Amrapali projects under subvention and bank-financed plans. Banks disbursed substantial housing loan tranches directly to the builder without monitoring site construction milestones or verifying diversion of funds, leaving projects unfinished for nearly a decade while banks demanded EMI servicing from buyers.",
    holding:
      "The Supreme Court cancelled the builder's RERA registration, appointed NBCC to complete the projects, and held that banks and financial institutions committed gross negligence and breach of public trust by disbursing home loans upfront in violation of RBI guidelines requiring construction-linked releases. The Court restrained banks from recovering EMIs or interest from innocent homebuyers until possession of their apartments was delivered.",
    amount: "RERA Registration Cancelled; Bank Recovery Against Homebuyers Restrained",
    takeaway:
      "Financial institutions are not passive spectators in a Tripartite Agreement. When a bank disburses your sanctioned loan directly into a builder's account without verifying stage-wise construction, its conduct constitutes deficiency in service and regulatory violation.",
  },
  {
    title: "Homebuyer's Right to Full Refund + Interest ( Including Subvented Pre-EMIs) Under Section 18 RERA Is Unconditional",
    parties: "Newtech Promoters and Developers Pvt. Ltd. v. State of Uttar Pradesh & Ors.",
    citation: "Civil Appeal Nos. 6745–6749 of 2021, (2021) 18 SCC 1 (3-Judge Bench, Supreme Court)",
    date: "Judgment Dated 11 November 2021",
    facts:
      "Homebuyers sought complete refund of their principal booking amounts, paid EMIs, and statutory interest under Section 18(1) of RERA 2016 after the builder failed to deliver possession within the stipulated timeframe. The builder challenged RERA's jurisdiction to order an unconditional refund and questioned the single-member delegation and Section 40 recovery certificate powers.",
    holding:
      "A 3-Judge Bench of the Supreme Court held that if a promoter fails to give possession of an apartment in accordance with the terms of the agreement, the allottee's right under Section 18(1) to demand a 100% refund of the amount paid along with prescribed interest (SBI MCLR + 2%) is an unqualified, absolute statutory right. The Court also upheld Section 40(1) RERA, empowering the authority to recover unpaid refund and interest orders from the builder as arrears of land revenue.",
    amount: "100% Refund + SBI MCLR + 2% Annual Interest + Section 40 Recovery Certificate Upheld",
    takeaway:
      "When a subvention project is delayed past its possession date, you do not have to stay trapped in the project. Under Section 18 RERA, you can cancel the allotment and obtain an order directing the builder to refund your down payment with interest AND clear the entire outstanding bank loan.",
  },
  {
    title: "One-Sided Builder-Buyer & Tripartite Clauses Are Unfair Trade Practices; RERA, Consumer Court & IBC Are Concurrent",
    parties: "Pioneer Urban Land & Infrastructure Ltd. v. Govindan Raghavan",
    citation: "Civil Appeal No. 12238 of 2018, (2019) 5 SCC 725 (Supreme Court)",
    date: "Judgment Dated 02 April 2019",
    facts:
      "The developer delayed possession by over 2 years beyond the grace period and relied on one-sided clauses in the Builder-Buyer Agreement that penalized the buyer heavily for payment delays while capping the builder's delay liability at a paltry sum per square foot, and argued that the buyer could not reject late possession.",
    holding:
      "The Supreme Court held that a buyer cannot be compelled to wait indefinitely for possession of a flat. Contractual terms in a standard-form builder agreement that are wholly one-sided, unreasonable, and tilted against the homebuyer constitute an 'unfair trade practice' under the Consumer Protection Act and are legally unenforceable. The Court affirmed full refund with 10.7% p.a. interest.",
    amount: "Full Principal Refund + 10.7% Interest; One-Sided Forfeiture Clauses Struck Down",
    takeaway:
      "Builders and banks often point to fine-print clauses in the Tripartite Agreement claiming 'buyer remains liable even if builder defaults on Pre-EMI.' Where the builder and bank acted in concert to disburse funds upfront and stall construction, consumer forums and RERA strike down unfair indemnification traps.",
  },
];

const FAQS = [
  {
    question: "Who is legally liable to pay Pre-EMIs if the builder defaults under a subvention scheme?",
    answer:
      "Under the Tripartite Agreement and Section 11(4)(a) of the Real Estate (Regulation and Development) Act, 2016 (RERA), the builder is contractually and statutorily bound to pay all Pre-EMI interest to the bank until the promised date of possession (or until actual handover, depending on the subvention clause). While banks routinely cite the retail loan agreement to treat the homebuyer as the primary borrower, the Supreme Court in Himanshu Singh v. Union of India (SLP (C) No. 7649/2023) and Bikram Chatterji v. Union of India (2019) held that where banks disbursed loans upfront to builders in violation of RBI Circular DBOD.BP.BC.No.51/08.12.015/2013-14 without verifying construction stages, banks cannot coercively recover subvented Pre-EMIs from homebuyers.",
  },
  {
    question: "Can the bank ruin my CIBIL score when the builder stops paying Pre-EMI under a tripartite agreement?",
    answer:
      "Banks automatically report overdue subvention accounts to credit bureaus (TransUnion CIBIL, Experian, Equifax), causing 100–200 point drops. However, in the Supreme Court subvention batch rulings (Himanshu Singh v. UOI, 2024–2025), the Court restrained banks from downgrading homebuyers' credit scores or classifying subvention accounts as NPAs where the builder defaulted after upfront bank disbursal. You should immediately serve a formal legal notice on the bank's Principal Nodal Officer and raise an official dispute with CIBIL under Section 21 of the Credit Information Companies (Regulation) Act, 2005 attaching your Tripartite Agreement and proof of builder default.",
  },
  {
    question: "What did the RBI and NHB circulars say about builder subvention schemes and upfront loan disbursal?",
    answer:
      "On 3 September 2013, the Reserve Bank of India issued Circular DBOD.BP.BC.No.51/08.12.015/2013-14 warning all scheduled commercial banks that upfront lump-sum disbursal of individual housing loans under 80:20 or 75:25 subvention schemes without linking disbursals to verified stages of construction is strictly prohibited. Subsequently, on 19 July 2019, the National Housing Bank (NHB) issued Policy Circular No. 88 directing all Housing Finance Companies (HFCs) to completely desist from offering loan products where builders service loan dues on behalf of borrowers. If your bank or HFC released 70%–90% of the loan before the structure was built, that disbursal is an actionable regulatory violation.",
  },
  {
    question: "Should I stop paying EMIs to the bank if the builder has abandoned the project and stopped paying Pre-EMIs?",
    answer:
      "Never stop NACH/ECS payments silently without creating a formal legal paper trail first. If you simply let auto-debits bounce without putting the bank on notice, the bank will mechanically file a criminal complaint under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and Settlement Systems Act, 2007. Before halting payments, have an advocate serve a composite Legal Notice on both the Builder and the Bank documenting the RBI upfront-disbursal violation, revoking NACH for disputed subvented interest, and file a RERA Section 31/36 or Consumer Court petition seeking an interim stay on bank recovery.",
  },
  {
    question: "Can I cancel my flat booking under RERA Section 18 and force the builder to close the bank loan?",
    answer:
      "Yes. Under Section 18(1) of RERA 2016 and the Supreme Court 3-Judge Bench ruling in Newtech Promoters v. State of UP (2021) 18 SCC 1, once the possession date mentioned in your Builder-Buyer Agreement passes without a valid Occupancy Certificate (OC), your right to cancel and demand a full refund with interest (SBI MCLR + 2%) is unconditional. State RERA authorities routinely pass composite decrees ordering the builder to: (1) refund 100% of your down payment and any EMIs you paid with interest, (2) pay off the bank's entire outstanding loan principal and Pre-EMI arrears directly, and (3) obtain a No-Dues Certificate (NDC) for you.",
  },
  {
    question: "What happens if RERA orders the builder to pay my Pre-EMIs and refund my money, but the builder ignores the order?",
    answer:
      "If the builder fails to comply with a RERA refund or Pre-EMI indemnification order within the stipulated 45-day window, you must file an execution application under Section 40(1) of RERA 2016. RERA will issue a Recovery Certificate (RC) to the District Magistrate / Collector, empowering revenue authorities to attach and auction the builder's bank accounts, unsold inventory, and corporate assets as arrears of land revenue.",
  },
  {
    question: "Subvention scheme mein builder Pre-EMI nahi bhar raha aur bank mujhe notice bhej raha hai, toh legal notice kaise bheje?",
    answer:
      "Agar aapne 'No EMI till possession' (80:20 ya 75:25 subvention scheme) mein flat book kiya tha aur builder ne Pre-EMI dena band kar diya hai, toh turant Builder aur Bank dono ko ek formal Advocate Legal Notice bhejna zaroori hai. LegalRecovery.in par verified real-estate advocate Tripartite Agreement, RERA Section 18, aur RBI ke 03.09.2013 circular (upfront loan disbursal violation) ke tehat Builder se 100% refund + Pre-EMI harjana maangte hain aur Bank ko CIBIL kharab karne ya coercive action lene se rokte hain.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Subvention Scheme Gone Wrong: Builder Defaulted on Your Pre-EMIs",
  description:
    "Builder stopped paying pre-EMIs under a subvention scheme? Tripartite agreement rights, the bank's role and recovery steps.",
  datePublished: "2026-11-04T12:30:00+05:30",
  dateModified: "2026-11-04T12:30:00+05:30",
  mainEntityOfPage: `${SITE_URL}/subvention-scheme-pre-emi-builder-default`,
  author: {
    "@type": "Person",
    name: "Anuj Anand Malik",
    url: `${SITE_URL}/authors/anuj-anand-malik`,
  },
  publisher: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: `${SITE_URL}/#organization`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
  },
  inLanguage: "en-IN",
  about: {
    "@type": "Thing",
    name: "Subvention Scheme Pre-EMI Builder Default & Tripartite Agreement Recovery",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
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
      name: "Builder & RERA Disputes",
      item: `${SITE_URL}/builder-booking-cancellation-refund-legal-notice`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Subvention Scheme Pre-EMI Builder Default",
      item: `${SITE_URL}/subvention-scheme-pre-emi-builder-default`,
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

// TODO(reviewer): src/data/reviewers.ts is absent in this repository. Omitted reviewer box per Section 7 guidelines.

export default function SubventionSchemeBuilderDefaultPage() {
  const breadcrumbItems = [
    { label: "Builder & RERA Disputes", href: "/builder-booking-cancellation-refund-legal-notice" },
    { label: "Subvention Pre-EMI Default", href: "/subvention-scheme-pre-emi-builder-default" },
  ];

  return (
    <>
      {/* Server-Side Rendered JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="w-full min-h-screen bg-slate-50 text-slate-900">
        {/* Hero Section strictly matching irctc & cheque-bounce-case-against-company-directors theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>RERA Section 18 &amp; 40 • RBI Circular 2013 / NHB 2019</span>
              <span className="text-red-500">•</span>
              <span>Tripartite Subvention Dispute Guide</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Subvention Scheme Gone Wrong: Builder Defaulted on Your Pre-EMIs
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Tripartite Liability, RBI Upfront-Disbursal Rule &amp; RERA Sec 18)
              </p>
              <p>
                Under a subvention Tripartite Agreement and Section 11(4)(a) of RERA 2016, the builder is legally bound to pay Pre-EMIs until possession. Where banks disbursed loans upfront without verifying construction stages in violation of RBI Circular DBOD.BP.BC.No.51/2013-14, the Supreme Court (<em>Himanshu Singh v. UOI</em>) bars coercive bank recovery and CIBIL downgrades. Serve a joint legal notice to the builder and bank, and file under Section 18 RERA for 100% refund with SBI MCLR + 2% interest.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">Sec 18 RERA</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">100% Refund + Loan Closure</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">MCLR + 2%</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Statutory Interest (~10.9%–11.1%)</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">RBI 2013 Rule</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Upfront Bank Release Illegal</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">SC Shield</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">No Coercive Action / CIBIL Drop</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Layout with Table of Contents Sidebar */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
          {/* Breadcrumb Navigation Above Content Grid */}
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
            {/* Table of Contents Sticky Sidebar (Archetype G6) */}
            <SubventionTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - How Subvention Schemes Trap Homebuyers */}
              <section id="heading-how-subvention-traps" aria-labelledby="heading-how-subvention-traps-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-how-subvention-traps-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  How Subvention Schemes Trap Homebuyers Under Agreements
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under a real-estate subvention scheme—commonly marketed across Noida, Greater Noida, Gurugram, Mumbai MMR, Pune, and Bengaluru as <strong>&quot;10:80:10&quot;</strong>, <strong>&quot;20:80&quot;</strong>, or <strong>&quot;Pay 10% Now, Nothing Till Possession&quot;</strong>—three parties execute a <strong>Tripartite Agreement</strong> alongside the Builder-Buyer Agreement (BBA): (1) the Homebuyer (Allottee), (2) the Promoter (Builder/Developer), and (3) the Lending Bank or Housing Finance Company (HFC). Under this contractual arrangement, the homebuyer pays an initial 10% to 20% booking margin, the bank sanctions a home loan for 75% to 80% of the flat&apos;s value in the buyer&apos;s name, and the builder contractually undertakes to pay the monthly <strong>Pre-EMI interest</strong> directly to the bank during the construction period until possession is offered.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The trap springs when the builder stops paying the Pre-EMIs midway and halts construction on site. Instead of disbursing the loan in strict construction-linked tranches as mandated by the Reserve Bank of India (RBI), the lending bank or HFC has often already released 70% to 90% of the loan upfront directly into the builder&apos;s account right after agreement execution. Once the builder defaults, the bank turns around and invokes a standard borrower-liability clause in the loan agreement—demanding ₹35,000 to ₹90,000 per month in EMIs from a homebuyer who has neither a completed flat nor the money that the bank handed straight to the developer.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs">
                    <span className="text-[11px] font-black uppercase tracking-wider text-red-600 block mb-1">
                      Stage 1: The Lure
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                      10%–20% Down Payment &amp; Tripartite Signing
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Buyer pays 10%–20% upfront. Builder promises zero EMI burden until possession (or 24–36 months) via a signed subvention clause in the BBA and Tripartite Agreement.
                    </p>
                  </div>

                  <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs">
                    <span className="text-[11px] font-black uppercase tracking-wider text-amber-600 block mb-1">
                      Stage 2: The Regulatory Breach
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                      Illegal Upfront Bank Disbursal to Builder
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Bypassing RBI Circular DBOD.BP.BC.No.51/2013-14, the bank disburses 75%–90% of the loan upfront to the builder before super-structure slabs are even cast.
                    </p>
                  </div>

                  <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs">
                    <span className="text-[11px] font-black uppercase tracking-wider text-slate-700 block mb-1">
                      Stage 3: The Double Whammy
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                      Builder Stops Pre-EMI; Bank Chases Buyer
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Builder defaults on Pre-EMIs and stalls the tower. Bank hits buyer&apos;s NACH mandate, threatens Section 138/SARFAESI, and tanks buyer&apos;s CIBIL score.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2: H2 - Tripartite Liability Matrix Table */}
              <section id="heading-liability-matrix" aria-labelledby="heading-liability-matrix-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-liability-matrix-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Who Is Liable When Builder Stops Paying Pre-EMIs?
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory &amp; Judicial Allocation
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Whether the bank can legally force you to pay EMIs—or whether liability shifts back to the builder and the bank itself—depends on the exact wording of your Tripartite Agreement and how the bank disbursed the loan tranches. Here is how Indian courts, RERA authorities, and RBI circulars allocate liability across five subvention breakdown scenarios:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[660px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Tripartite Subvention Scheme Liability Matrix</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Subvention Breakdown Scenario</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Primary Liable Party</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Governing Statute / Circular</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Homebuyer&apos;s Immediate Legal Remedy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Bank disbursed 75%–90% upfront without stage-wise construction progress
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-600 font-extrabold">
                          Builder + Lending Bank / HFC
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          RBI Circular DBOD.BP.BC.No.51/2013-14; NHB Circular No. 88 (2019); <em>Himanshu Singh v. UOI</em> (SC)
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Serve dual legal notice on Builder &amp; Bank; seek restraint against coercive recovery &amp; CIBIL downgrade
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Tripartite Agreement says &quot;No EMI Till Offer of Possession&quot; &amp; project is delayed
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-600 font-extrabold">
                          Builder (100% Pre-EMI Liability)
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Section 11(4)(a) &amp; Section 18 RERA 2016; Section 73 Contract Act, 1872
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Demand Pre-EMI indemnification from builder or file RERA Sec 18 refund + bank loan closure complaint
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Fixed-tenure subvention (e.g., 24 or 36 months) expired, but possession not delivered
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-amber-700 font-bold">
                          Builder (Delay Interest &amp; Refund Liability)
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Section 18(1) RERA 2016; <em>Newtech Promoters</em> (2021) 18 SCC 1
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Cancel booking under RERA Sec 18 to force builder to liquidate loan + refund down payment at MCLR + 2%
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Buyer cancels booking &amp; Tripartite Clause requires Builder to refund loan directly to Bank
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-600 font-extrabold">
                          Builder (Direct Liability to Bank)
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Tripartite Cancellation Clause; <em>Bikram Chatterji</em> (2019) 19 SCC 161
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Notify bank of cancellation under Tripartite clause; compel bank to recover disbursed principal from builder
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Bank debits buyer&apos;s account via NACH after written revocation &amp; dispute notice
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">
                          Lending Bank / HFC (Deficiency in Service)
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          RBI NACH Mandate Rules; Section 2(11) Consumer Protection Act, 2019
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Serve unauthorized ECS/NACH reversal notice &amp; escalate to RBI Ombudsman (cms.rbi.org.in)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 3: H2 - Hand-Authored SVG Figure (Archetype G6 Requirement) */}
              <section id="heading-money-flow-svg" aria-labelledby="heading-money-flow-svg-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-money-flow-svg-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Subvention Loan Disbursal &amp; Escalation Architecture
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  This diagram illustrates how the three-cornered subvention arrangement breaks down when a bank releases funds upfront, and the 5-stage legal counter-offensive that shifts liability back onto the builder and lender:
                </p>

                {/* Mobile Responsive Step Cards (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Stage 1</span>
                    <h3 className="font-bold text-sm">Tripartite &amp; Upfront Release</h3>
                    <p className="text-xs text-slate-200 mt-1">Buyer pays 10%–20%; Bank releases 80% upfront to Builder violating RBI 2013 rule.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Stage 2</span>
                    <h3 className="font-bold text-sm">Builder Default &amp; Bank Demand</h3>
                    <p className="text-xs text-amber-900 mt-1">Builder stops Pre-EMIs &amp; stalls tower; Bank hits Buyer NACH &amp; CIBIL.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Stage 3</span>
                    <h3 className="font-bold text-sm">Audit Disbursal &amp; Freeze Trap</h3>
                    <p className="text-xs text-slate-700 mt-1">Extract bank tranche ledger &amp; site photos proving unlinked upfront release.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Stage 4</span>
                    <h3 className="font-bold text-sm">Joint Advocate Legal Notice</h3>
                    <p className="text-xs text-red-900 mt-1">Serve 15-day statutory demand on Builder (RERA s.18) &amp; Bank (RBI breach).</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Stage 5</span>
                    <h3 className="font-bold text-sm">RERA Sec 18/40 &amp; SC Shield</h3>
                    <p className="text-xs text-emerald-900 mt-1">100% refund + MCLR+2% interest, loan closure &amp; CIBIL protection.</p>
                  </div>
                </div>

                {/* Archetype G6 <figure> with Inline SVG Diagram */}
                <figure className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Subvention Escalation Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 265"
                    width="840"
                    height="265"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Subvention Scheme Pre-EMI Builder Default Money Flow and Legal Escalation Diagram"
                  >
                    <defs>
                      <linearGradient id="subvGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="subvAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="subvSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Box 1 */}
                    <rect x="10" y="20" width="140" height="92" rx="10" fill="url(#subvGrad)" />
                    <text x="80" y="44" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STAGE 1</text>
                    <text x="80" y="64" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Upfront Release</text>
                    <text x="80" y="81" fill="#E2E8F0" fontSize="10" textAnchor="middle">Bank Pays Builder 80%</text>
                    <text x="80" y="97" fill="#FCA5A5" fontSize="9" textAnchor="middle">Violates RBI 2013 Rule</text>

                    {/* Arrow 1 */}
                    <path d="M 150 66 L 180 66" stroke="#64748B" strokeWidth="2" />

                    {/* Box 2 */}
                    <rect x="180" y="20" width="140" height="92" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="44" fill="#B45309" fontWeight="bold" textAnchor="middle">STAGE 2</text>
                    <text x="250" y="64" fill="#92400E" fontWeight="bold" textAnchor="middle">Pre-EMI Default</text>
                    <text x="250" y="81" fill="#78350F" fontSize="10" textAnchor="middle">Builder Stops Paying</text>
                    <text x="250" y="97" fill="#78350F" fontSize="9" textAnchor="middle">Bank Hits Buyer NACH</text>

                    {/* Arrow 2 */}
                    <path d="M 320 66 L 350 66" stroke="#64748B" strokeWidth="2" />

                    {/* Box 3 */}
                    <rect x="350" y="20" width="140" height="92" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="420" y="44" fill="#404447" fontWeight="bold" textAnchor="middle">STAGE 3</text>
                    <text x="420" y="64" fill="#0F172A" fontWeight="bold" textAnchor="middle">Disbursal Audit</text>
                    <text x="420" y="81" fill="#334155" fontSize="10" textAnchor="middle">Demand Loan Ledger</text>
                    <text x="420" y="97" fill="#475569" fontSize="9" textAnchor="middle">Prove Unlinked Release</text>

                    {/* Arrow 3 */}
                    <path d="M 490 66 L 520 66" stroke="#64748B" strokeWidth="2" />

                    {/* Box 4 */}
                    <rect x="520" y="20" width="140" height="92" rx="10" fill="url(#subvAlert)" />
                    <text x="590" y="44" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STAGE 4</text>
                    <text x="590" y="64" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Dual Legal Notice</text>
                    <text x="590" y="81" fill="#FEE2E2" fontSize="10" textAnchor="middle">To Builder &amp; Bank</text>
                    <text x="590" y="97" fill="#FECACA" fontSize="9" textAnchor="middle">15-Day Cure + CIBIL Freeze</text>

                    {/* Arrow 4 */}
                    <path d="M 660 66 L 690 66" stroke="#64748B" strokeWidth="2" />

                    {/* Box 5 */}
                    <rect x="690" y="20" width="140" height="92" rx="10" fill="url(#subvSucc)" />
                    <text x="760" y="44" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STAGE 5</text>
                    <text x="760" y="64" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">RERA / Court Relief</text>
                    <text x="760" y="81" fill="#D1FAE5" fontSize="10" textAnchor="middle">100% Refund + MCLR+2%</text>
                    <text x="760" y="97" fill="#A7F3D0" fontSize="9" textAnchor="middle">Builder Closes Bank Loan</text>

                    {/* Bottom Regulatory Bar */}
                    <rect x="10" y="140" width="820" height="105" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="165" fill="#0F172A" fontWeight="bold" fontSize="11">THREE STATUTORY PILLARS PROTECTING SUBVENTION HOMEBUYERS IN 2026:</text>
                    <text x="25" y="187" fill="#475569" fontSize="10">1. RBI Circular DBOD.BP.BC.No.51/08.12.015/2013-14 &amp; NHB Circular No. 88 (2019): Prohibit upfront unlinked disbursal to builders.</text>
                    <text x="25" y="205" fill="#475569" fontSize="10">2. Supreme Court in Himanshu Singh v. UOI (SLP (C) 7649/2023): Restrains coercive recovery, Sec 138/25 &amp; CIBIL downgrade where banks colluded.</text>
                    <text x="25" y="223" fill="#475569" fontSize="10">3. RERA 2016 Section 18 &amp; Section 40 (Newtech Promoters SC): Unconditional refund with SBI MCLR+2% interest &amp; District Collector RC attachment.</text>
                  </svg>
                  <figcaption className="text-[11px] sm:text-xs text-slate-500 mt-3 text-center">
                    Figure 1: Subvention scheme money flow showing how illegal upfront bank disbursal creates joint builder-bank culpability and how homebuyers enforce RERA Section 18 and Supreme Court protections.
                  </figcaption>
                </figure>
              </section>

              {/* Section 4: H2 - Landmark Supreme Court & High Court Rulings */}
              <section id="heading-court-precedents" aria-labelledby="heading-court-precedents-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-court-precedents-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Supreme Court Rulings on Subvention Scheme Defaults
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Judicial Precedents
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  For years, banks argued that a home loan agreement is an independent bilateral contract and that the bank has nothing to do with the builder&apos;s delay or Pre-EMI default. While single benches of the Delhi High Court in 2023 declined to adjudicate disputed tripartite facts in writ jurisdiction (directing buyers to statutory forums like RERA and Consumer Courts), the <strong>Supreme Court of India</strong> stepped in decisively in <em>Himanshu Singh &amp; Ors. v. Union of India</em> (SLP (C) No. 7649/2023), shielding homebuyers from coercive bank actions and ordering a CBI investigation into the builder-bank nexus:
                </p>

                <div className="grid grid-cols-1 gap-5 sm:gap-6">
                  {CASE_CITATIONS.map((c, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden w-full"
                    >
                      <div className="absolute top-0 left-0 w-2 h-full bg-[#DC2626]" />
                      <div className="pl-2 space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-[11px] sm:text-xs font-extrabold px-3 py-1 bg-red-50 text-[#DC2626] rounded-full uppercase tracking-wider">
                            Precedent #{idx + 1} • {c.citation}
                          </span>
                          <span className="text-xs text-slate-500 font-semibold">{c.date}</span>
                        </div>

                        <div>
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1">
                            {c.title}
                          </h3>
                          <p className="text-xs font-semibold text-slate-600">
                            Parties: <span className="text-slate-800">{c.parties}</span>
                          </p>
                        </div>

                        <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">The Dispute &amp; Facts:</strong>
                            <p className="leading-relaxed">{c.facts}</p>
                          </div>

                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">Judicial Holding:</strong>
                            <p className="leading-relaxed">{c.holding}</p>
                          </div>
                        </div>

                        <div className="p-3 sm:p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Judicial Relief / Binding Rule
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Forum Applicability
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Enforceable Before RERA, Consumer Courts &amp; Banks
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>What this means for your recovery:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 5: H2 - Can the Bank Ruin Your CIBIL Score or File Section 138 / SARFAESI Cases? */}
              <section id="heading-bank-cibil-shield" aria-labelledby="heading-bank-cibil-shield-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-bank-cibil-shield-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Can Banks Ruin CIBIL or File SARFAESI for Defaults?
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The most painful weapon banks deploy against trapped subvention homebuyers is not a civil recovery suit—it is automated <strong>CIBIL credit score destruction</strong> combined with criminal intimidation under <strong>Section 138 of the Negotiable Instruments Act, 1881</strong> (for security cheques taken at loan sanction) or <strong>Section 25 of the Payment and Settlement Systems Act, 2007</strong> (for dishonoured NACH/ECS mandates).
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Here is how the law protects you across each pressure tactic used by banks and HFCs:
                </p>

                <div className="space-y-3.5">
                  <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                      1. Challenging Upfront Disbursal Under RBI Circular DBOD.BP.BC.No.51/08.12.015/2013-14
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Under the RBI Circular dated 3 September 2013 and NHB Policy Circular No. 88 dated 19 July 2019, banks and HFCs are forbidden from disbursing housing loans upfront without tying each tranche to verified stages of construction certified by an independent architect. If your bank released 80% of the loan when the tower was only at the foundation stage, the bank breached a binding statutory direction issued under Sections 21 and 35A of the Banking Regulation Act, 1949.
                    </p>
                  </div>

                  <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                      2. Defeating Section 138 NI Act &amp; Section 25 PSS Act Notices for Subvented Pre-EMIs
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      To sustain a prosecution under Section 138 NI Act or Section 25 PSS Act, the bank must prove that the cheque or NACH instruction was presented for a <em>&quot;legally enforceable debt or other liability&quot;</em> currently owed by the drawer. When your Tripartite Agreement explicitly states that the Builder is liable to service Pre-EMI interest until offer of possession, the unmatured Pre-EMI is the contractual debt of the Builder during the subvention period. Replying within 15 days to any bank statutory notice with the Tripartite Agreement and RBI breach record is vital—and if the bank still debits your account without authorization, see our guide on{" "}
                      <Link href="/legal-notice-to-bank-unauthorized-ecs-nach-debit-reversal" className="text-blue-700 underline font-semibold">
                        serving a legal notice to the bank for unauthorized ECS / NACH debit reversal
                      </Link>.
                    </p>
                  </div>

                  <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                      3. Disputing Wrongful CIBIL Reporting Under Section 21 of CICRA, 2005
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Under the Credit Information Companies (Regulation) Act, 2005 and RBI Master Directions on Credit Information Reporting, a borrower has the statutory right to have disputed or inaccurate default reporting rectified within 30 days. By serving a formal legal notice on the bank&apos;s Nodal Officer and filing a dispute with TransUnion CIBIL attaching the Tripartite Agreement, RERA complaint number, and the Supreme Court&apos;s protective orders in <em>Himanshu Singh v. Union of India</em>, you establish that the default is attributable to the builder&apos;s subvention breach and illegal upfront disbursal.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6: H2 - The 5-Step Legal Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  5-Step Playbook: Stop Bank Harassment &amp; Recover Money
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Do not wait until the bank declares your account a Non-Performing Asset (NPA) or the builder slips into NCLT insolvency. Follow this 5-step statutory sequence immediately when the first Pre-EMI default occurs:
                </p>

                <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Extract the Loan Disbursal Statement &amp; Verify RERA QPR Construction Status
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Download your complete home loan account statement showing the exact dates and amounts disbursed by the bank to the builder. Next, check the project&apos;s Quarterly Progress Reports (QPR) on your State RERA portal (e.g., UP RERA, HRERA, MahaRERA, K-RERA) and take date-stamped photographs of the actual construction site. If the bank disbursed 75%–90% of the loan while physical construction is below 30%–40%, you have ironclad documentary proof that the bank violated RBI Circular DBOD.BP.BC.No.51/08.12.015/2013-14.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Serve a Joint Statutory Legal Notice on Both the Builder and the Lending Bank / HFC
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Have an advocate dispatch a formal 15-day statutory notice via Registered Speed Post and email to: (a) the <strong>Builder&apos;s Directors and Registered Office</strong>, invoking the Tripartite Agreement and Section 18 of RERA 2016 to demand immediate clearance of all overdue Pre-EMIs plus penal interest, or a 100% booking cancellation refund with SBI MCLR + 2% interest; and (b) the <strong>Bank&apos;s Branch Manager and Principal Nodal Officer</strong>, putting them on notice of their illegal upfront disbursal, revoking consent for NACH auto-debits toward builder-subvented interest, and warning against CIBIL degradation under <em>Himanshu Singh v. UOI</em>. For flat cancellation rules, see our{" "}
                        <Link href="/builder-booking-cancellation-refund-legal-notice" className="text-blue-700 underline font-semibold">
                          builder booking cancellation refund legal notice guide
                        </Link>.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        File an Official Regulatory Complaint on the RBI CMS Portal &amp; NHB GRIDS
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the lender is a commercial bank or NBFC, lodge a complaint on the <strong>RBI Complaint Management System (cms.rbi.org.in)</strong> citing violation of RBI Circular DBOD.BP.BC.No.51/08.12.015/2013-14. If the lender is a Housing Finance Company (such as PNB Housing, LIC Housing Finance, Bajaj Housing, or Indiabulls/Sammaan), lodge a simultaneous grievance on the <strong>NHB GRIDS portal (grids.nhbonline.org.in)</strong> citing NHB Policy Circular No. 88 (2019). Attach your advocate legal notice and the loan disbursal ledger.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        File a Section 31 Complaint Before State RERA (or e-Jagriti Consumer Court) Naming Both Parties
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        File an online complaint under Section 31 read with Section 18 of RERA 2016 (or before the Consumer Commission on <strong>e-Jagriti</strong> under Section 35 of the Consumer Protection Act, 2019), arraying the Builder as Respondent No. 1 and the Bank/HFC as Respondent No. 2. Include an application for interim relief under <strong>Section 36 of RERA</strong> (or Section 38(8) CPA 2019) directing the builder to service current Pre-EMIs and restraining the bank from taking coercive recovery action during pendency. For delayed possession specifics, read our{" "}
                        <Link href="/legal-notice-to-builder-for-delayed-possession-refund" className="text-blue-700 underline font-semibold">
                          legal notice to builder for delayed possession refund guide
                        </Link>.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Execute the Refund Order via Section 40 RERA Recovery Certificate (Arrears of Land Revenue)
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Once RERA decrees that the builder must refund your down payment with interest and discharge the bank&apos;s subvented loan, the builder has 45 days to comply. Calculate your exact statutory interest claim using our{" "}
                        <Link href="/tools/rera-refund-interest-calculator" className="text-blue-700 underline font-semibold">
                          RERA refund interest calculator (SBI MCLR + 2%)
                        </Link>
                        . If the builder defaults on the RERA decree, file an execution petition under <strong>Section 40(1) of RERA 2016</strong> (see our step-by-step guide on{" "}
                        <Link href="/rera-refund-order-not-paid-recovery-certificate" className="text-blue-700 underline font-semibold">
                          enforcing an unpaid RERA refund order via Recovery Certificate
                        </Link>
                        ). RERA will issue a <strong>Recovery Certificate (RC)</strong> to the District Collector, who attaches the builder&apos;s RERA escrow accounts, corporate bank accounts, and unsold flats to recover the money as arrears of land revenue.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 7: H2 - Forum Comparison Table */}
              <section id="heading-forum-comparison" aria-labelledby="heading-forum-comparison-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-forum-comparison-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Forum Comparison: RERA vs Consumer Court vs Ombudsman
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under the Supreme Court&apos;s rulings in <em>Imperia Structures Ltd. v. Anil Patni</em> (2020) 10 SCC 783 and <em>Pioneer Urban Land</em> (2019), a homebuyer trapped in a subvention default has concurrent statutory remedies. Use this comparison table to choose the right forum (or combination of forums) after your 15-day advocate legal notice expires:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[640px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Subvention Scheme Legal Forum Comparison Table</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Forum / Portal</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Provision</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">What Relief It Can Order</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Filing Fee &amp; Typical Timeline</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Joint Advocate Legal Notice (Pre-Litigation)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Sec 18 RERA + RBI Circular 2013 + Sec 73 Contract Act
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Demands immediate Pre-EMI payment/indemnity from builder &amp; freezes bank NACH/CIBIL action
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">
                          15-Day Cure Window (Fastest First Step)
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          State RERA Authority &amp; Adjudicating Officer
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Sections 18, 31, 36 &amp; 40 RERA Act, 2016
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          100% refund + SBI MCLR + 2% interest, direction to builder to pay Pre-EMIs/close bank loan, Sec 40 RC attachment
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-semibold">
                          ₹1,000–₹5,000 state fee • 4 to 9 months
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Consumer Commission (e-Jagriti Online Portal)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Sections 2(11), 2(46), 35 &amp; 38(8) CPA, 2019
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Jointly binds Builder AND Bank for deficiency in service; awards 9%–12% interest + mental harassment damages + CIBIL rectification
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-semibold">
                          ₹0 up to ₹5L (graded above) • 6 to 12 months
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          RBI Integrated Ombudsman / NHB GRIDS
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          RBI-IOS 2021 + Circular DBOD.BP.BC.No.51/2013-14
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Penalizes bank for upfront unlinked disbursal, reverses unauthorized NACH bounce fees, and corrects CIBIL reporting
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-semibold">
                          ₹0 Free Online Filing • 30 to 60 days
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          NCLT (Insolvency &amp; Bankruptcy Code)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Section 7 &amp; Section 5(8)(f) IBC, 2016
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">
                          Homebuyers file Form CA as Financial Creditors if builder is already in CIRP (or threshold group of 100 allottees / 10% initiates CIRP)
                        </td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-semibold">
                          Form CA Filing • Resolution-plan timeline
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 8: H2 - Interactive Scenario Picker Tabs */}
              <section id="heading-scenario-picker" aria-labelledby="heading-scenario-picker-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-scenario-picker-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Subvention Dispute Scenarios &amp; 3-Step Remedies
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Choose Your Exact Builder-Bank Subvention Predicament Below to See the Statutory Remedy
                  </p>
                </div>

                <SubventionScenarioTabs />
              </section>

              {/* Section 9: H2 - Worked Case Study */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Case Study: Homebuyer Recovers ₹14.2L Down Payment
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Subvention Recovery Case Study
                    </span>
                    <span className="text-xs text-slate-400">Noida Extension / Greater Noida West (10:80:10 Scheme)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Subvention Booking:</strong> In March 2022, Siddharth Khanna, an IT architect in Noida, booked a 3BHK apartment priced at ₹78,00,000 in Greater Noida West under a 10:80:10 subvention scheme (&quot;No EMI Till Offer of Possession&quot;). Siddharth paid ₹9,80,000 as booking down payment plus GST/stamp charges. A Tripartite Agreement was signed between Siddharth, the builder, and a private housing finance company (HFC), which sanctioned a ₹62,40,000 loan. Within 45 days of agreement execution, the HFC disbursed ₹54,00,000 (86.5% of the loan) straight to the builder even though only basement excavation was completed.
                    </p>
                    <p>
                      <strong>The Default &amp; Bank Harassment:</strong> The builder paid Pre-EMIs for 18 months and then abruptly stopped in October 2024 while the tower stood frozen at the 4th-floor slab. The HFC immediately began hitting Siddharth&apos;s salary account via NACH for ₹48,500/month. Siddharth paid for 9 months under fear of CIBIL damage (totalling ₹4,36,500 out of pocket) before realizing construction was completely dead.
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> Siddharth engaged LegalRecovery.in. Our advocate first obtained the HFC&apos;s loan disbursement ledger and UP RERA QPR filings proving that 86.5% of the loan had been released upfront at 15% physical construction in violation of RBI Circular DBOD.BP.BC.No.51/08.12.015/2013-14 and NHB Circular No. 88. A dual statutory legal notice was served via Registered Speed Post and email to the Builder and the HFC&apos;s Principal Nodal Officer, demanding: (1) immediate cancellation of the allotment under Section 18(1) RERA, (2) refund of ₹14,16,500 (₹9,80,000 down payment + ₹4,36,500 forced EMIs) with SBI MCLR + 2% interest, and (3) a freeze on NACH presentation and CIBIL reporting citing <em>Himanshu Singh v. Union of India</em>.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Outcome:</strong>
                      Confronted with the NHB GRIDS escalation on the upfront disbursal violation and a Section 31 UP RERA complaint with a Section 36 interim stay application, the HFC suspended coercive recovery against Siddharth and froze adverse CIBIL reporting. Facing imminent RERA Section 40 attachment of its unsold inventory in an adjacent completed tower, the builder executed a tripartite settlement deed: foreclosing the HFC&apos;s ₹54,00,000 loan directly and refunding Siddharth ₹14,16,500 principal plus ₹2,95,000 accrued interest via RTGS.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: H2 - Evidence Checklist & Archetype G6 Key Takeaways (<aside>) */}
              <section id="heading-evidence-takeaways" aria-labelledby="heading-evidence-takeaways-title" className="scroll-mt-28 space-y-6">
                <div className="space-y-4">
                  <h2
                    id="heading-evidence-takeaways-title"
                    className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                  >
                    Evidence Checklist for Trapped Subvention Homebuyers
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), compile these 6 essential records before serving your joint legal notice to the builder and the bank:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                      <div>
                        <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Signed Tripartite Agreement &amp; Subvention Addendum:</strong>
                        <p className="text-xs text-slate-600 mt-0.5">Highlighting the clause where the builder undertakes to pay Pre-EMI interest until offer of possession and the cancellation refund clause.</p>
                      </div>
                    </div>

                    <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                      <div>
                        <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Builder-Buyer Agreement (BBA) &amp; Brochure:</strong>
                        <p className="text-xs text-slate-600 mt-0.5">Showing the committed possession date, RERA registration number, and marketing brochure advertising &quot;No EMI Till Possession&quot;.</p>
                      </div>
                    </div>

                    <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                      <div>
                        <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Bank Loan Sanction Letter &amp; Disbursal Ledger:</strong>
                        <p className="text-xs text-slate-600 mt-0.5">Complete loan account statement proving the exact dates and percentages released upfront by the bank to the builder.</p>
                      </div>
                    </div>

                    <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                      <div>
                        <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Down Payment Receipts &amp; Forced EMI Bank Debits:</strong>
                        <p className="text-xs text-slate-600 mt-0.5">Builder receipts for your 10%–20% booking contribution plus savings bank statements showing any NACH Pre-EMIs debited from you.</p>
                      </div>
                    </div>

                    <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                      <div>
                        <strong className="text-xs sm:text-sm text-slate-900 font-bold block">State RERA QPR Filings &amp; Geo-Tagged Site Photos:</strong>
                        <p className="text-xs text-slate-600 mt-0.5">Screenshots from the State RERA portal and recent site photographs proving that physical construction does not match loan disbursal.</p>
                      </div>
                    </div>

                    <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                      <div>
                        <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Bank Overdue Notices, NACH Logs &amp; CIBIL Report:</strong>
                        <p className="text-xs text-slate-600 mt-0.5">Copies of bank demand emails, Section 138/25 notices, and your latest CIBIL report showing the disputed housing loan entry.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Archetype G6 Mandatory Key Takeaways Box (<aside>) */}
                <aside
                  aria-label="Key Takeaways for Subvention Homebuyers"
                  className="bg-amber-50/90 border-l-4 border-amber-600 rounded-r-2xl p-5 sm:p-6 shadow-xs space-y-3"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-black uppercase tracking-wider text-amber-900">
                      Key Takeaways &amp; Honest Scope of Recovery
                    </span>
                    <span className="text-[11px] font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full">
                      RERA &amp; RBI Summary
                    </span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-amber-950 leading-relaxed list-disc list-inside">
                    <li>
                      <strong>Upfront Disbursal Is Your Strongest Shield:</strong> If your bank or HFC released 70%–90% of the loan upfront without linking tranches to construction stages, it violated RBI Circular DBOD.BP.BC.No.51/2013-14 and NHB Circular No. 88 (2019).
                    </li>
                    <li>
                      <strong>Never Stop NACH Silently:</strong> Always put the bank and builder on formal legal notice first; halting auto-debits without a written dispute trail invites mechanical Section 138 NI Act / Section 25 PSS Act complaints.
                    </li>
                    <li>
                      <strong>RERA Section 18 Refund Is Unconditional:</strong> Once the agreement possession date passes, you can demand 100% refund of your down payment + paid EMIs with SBI MCLR + 2% interest AND a direction forcing the builder to close the bank loan.
                    </li>
                    <li>
                      <strong>Honest Scope — What LegalRecovery Can &amp; Cannot Do:</strong> LegalRecovery.in drafts and dispatches advocate-verified statutory legal notices to both the defaulting builder and the lending bank/HFC, and prepares your pre-litigation RBI Ombudsman and RERA documentation. If a builder is already undergoing corporate insolvency (CIRP) before NCLT with zero attachable assets outside moratorium, a legal notice alone will not produce an instant cash payout—you must also file Form CA before the Resolution Professional while using our notice to contest the bank&apos;s coercive recovery.
                    </li>
                  </ul>
                </aside>
              </section>

              {/* Section 11: H2 - FAQs (≤ 1 Accordion per Archetype G6) */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-4 sm:space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    FAQs: Subvention Scheme Builder Defaults &amp; Rights
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Verified Legal Answers Based on RERA 2016, RBI Housing Finance Circulars &amp; Supreme Court Rulings
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {FAQS.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm open:shadow-md transition-all"
                    >
                      <summary className="font-bold text-slate-900 text-sm sm:text-base md:text-lg cursor-pointer flex justify-between items-start gap-3 list-none select-none">
                        <span>{faq.question}</span>
                        <span className="text-slate-400 group-open:rotate-180 transition-transform duration-200 font-black text-lg shrink-0 mt-0.5">
                          ↓
                        </span>
                      </summary>
                      <div className="mt-3 sm:mt-4 pt-3 border-t border-slate-100 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Section 12: H2 - Primary Sources Block */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Primary Statutes, RBI / NHB Circulars &amp; Supreme Court References
                </h2>
                <ol className="sources list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-600">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="leading-relaxed break-words">
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-blue-900 underline font-medium"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ol>
                <p className="text-xs text-slate-500 italic mt-2">
                  Last updated: 4 November 2026. All statutory provisions, RBI/NHB circulars, and Supreme Court orders verified against India Code, rbi.org.in, and Supreme Court records as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Send a Joint Legal Notice to the Defaulting Builder and Bank
                </h2>
                <SubventionNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Builder Refund, RERA &amp; Banking Dispute Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/builder-booking-cancellation-refund-legal-notice"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Flat Booking Cancellation Refund Legal Notice (RERA) →
                  </Link>
                  <Link
                    href="/tools/rera-refund-interest-calculator"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    RERA Refund Interest Calculator (SBI MCLR + 2%) →
                  </Link>
                  <Link
                    href="/rera-refund-order-not-paid-recovery-certificate"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Enforce Unpaid RERA Order (Sec 40 Recovery Certificate) →
                  </Link>
                  <Link
                    href="/legal-notice-to-builder-for-delayed-possession-refund"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice to Builder for Delayed Possession Refund →
                  </Link>
                  <Link
                    href="/token-money-refund-property-deal"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Token &amp; Bayana Money Refund Rules in Property Deals →
                  </Link>
                  <Link
                    href="/legal-notice-to-bank-unauthorized-ecs-nach-debit-reversal"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Stop Unauthorized Bank ECS / NACH Auto-Debits →
                  </Link>
                  <Link
                    href="/services/property-and-builder-disputes"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Property &amp; Builder Dispute Recovery Services →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Contextual Recovery Guides */}
        <RelatedRecoveryGuides />
      </div>
    </>
  );
}
