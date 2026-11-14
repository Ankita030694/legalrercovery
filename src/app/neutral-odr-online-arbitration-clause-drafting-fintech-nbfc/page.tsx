import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import OdrClauseTableOfContents from "./OdrClauseTableOfContents";
import OdrClauseScenarioTabs from "./OdrClauseScenarioTabs";
import OdrClauseCTA from "./OdrClauseCTA";

export const revalidate = 86400;

const PAGE_PATH = "/neutral-odr-online-arbitration-clause-drafting-fintech-nbfc";
const CANONICAL_URL = `${SITE_URL}${PAGE_PATH}`;
const EXACT_H1 =
  "Drafting Enforceable Online Arbitration (ODR) Clauses in NBFC & Fintech Loan Agreements After the 5-Judge Supreme Court Ruling";
const META_TITLE = "Valid ODR & Arbitration Clauses for NBFCs Post-SC Ruling";
const META_DESCRIPTION =
  "Why legacy NBFC arbitration clauses fail post-CORE (5-Judge Bench), and how to draft neutral ODR clauses that survive Section 34/36 scrutiny.";

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
        alt: formatAltText("Neutral ODR and online arbitration clause drafting for NBFCs post-CORE"),
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

// TODO(reviewer): src/data/reviewers.ts is absent in this repository
const REVIEWER_INFO = {
  name: "Anuj Anand Malik",
  role: "Advocate & Founder, AMA Legal Solutions",
};

const FAQS = [
  {
    q: "Are unilateral arbitrator appointment clauses in existing NBFC loan agreements void after the Nov 2024 Supreme Court ruling?",
    a: "Yes. In Central Organisation for Railway Electrification v. ECI SPIC SMO MCML (JV) (5-Judge Constitution Bench, November 2024), the Supreme Court held that clauses granting one party the unilateral power to appoint a sole arbitrator, or restricting the counterparty to a curated panel maintained by the interested lender, violate Section 12(5) of the Arbitration and Conciliation Act, 1996 and the constitutional mandate of equal treatment under Article 14 and Section 18. Awards passed under such clauses are liable to be set aside under Section 34 and refused enforcement under Section 36.",
  },
  {
    q: "Can an NBFC still use a 3-arbitrator curated panel if the borrower chooses one name from the NBFC's list?",
    a: "No. The 5-Judge Constitution Bench in CORE (2024) specifically struck down asymmetric curated-panel clauses where the lender compiles a restricted roster and asks the borrower to pick from it. To survive Section 34 and Section 36 scrutiny, appointment authority must rest with an independent, neutral Arbitral or ODR Institution applying an open, non-exclusive roster—not an in-house or lender-curated panel.",
  },
  {
    q: "How can an NBFC enforce an NPA loan whose legacy agreement contains a defective unilateral clause?",
    a: "Do not proceed with an ex-parte unilateral appointment. Instead, serve an Advocate-drafted Section 21 notice proposing reference to an independent institutional ODR provider or seeking the borrower's express written waiver under the proviso to Section 12(5). If the borrower refuses or fails to respond within 30 days, file a Section 11(6) application before the High Court for appointment of a neutral arbitrator, or pursue parallel remedies under Section 25 of the Payment and Settlement Systems Act, 2007 (e-NACH bounce) and Order XXXVII CPC.",
  },
  {
    q: "What is the difference between 'Seat' and 'Venue' in an online arbitration (ODR) clause for digital lending?",
    a: "Under BGS SGS Soma JV v. NHPC Ltd. (2020) 4 SCC 234, the 'Seat' of arbitration determines the exclusive supervisory court under Sections 9, 11, 29A, and 34, whereas the 'Venue' is merely the physical or virtual mode of conducting hearings. Every digital lending ODR clause must designate a specific Indian city (such as Mumbai, New Delhi, or Bengaluru) as the juridical Seat while expressly permitting virtual hearings and electronic filings on the ODR platform.",
  },
  {
    q: "Are click-wrap and Aadhaar e-Sign arbitration clauses valid under Section 7 of the Arbitration Act?",
    a: "Yes. Section 7(4)(b) of the Arbitration and Conciliation Act, 1996 read with Section 10A of the Information Technology Act, 2000 recognizes arbitration agreements executed via electronic records, OTP verification, and click-wrap consent. Additionally, the 7-Judge Supreme Court Bench in In Re: Interplay between Arbitration Agreements and the Indian Stamp Act, 1899 (December 2023) clarified that deficient stamping is a curable defect before the arbitral tribunal under Section 16 and does not stall arbitral inception.",
  },
  {
    q: "What evidence must a fintech or NBFC attach to prove electronic service of Section 21 and ODR notices?",
    a: "Under Section 3 of the Arbitration Act and Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), the lender must produce timestamped electronic records—including KYC-verified email dispatch headers, WhatsApp Business API delivery receipts, and India Post Speed Post RPAD tracking—accompanied by a signed Section 63 BSA certificate from the authorized officer or dispatch platform.",
  },
];

const STATUTORY_SOURCES = [
  {
    title: "The Arbitration and Conciliation Act, 1996 (Sections 3, 7, 11, 12(5), 16, 18, 21, 29B, 34 & 36) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1978",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 — Admissibility of Electronic Records) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Information Technology Act, 2000 (Section 10A — Validity of Electronic Contracts) — India Code",
    url: "https://www.indiacode.nic.in/handle/123456789/1999",
  },
  {
    title: "Supreme Court of India — Official Judgments Portal (CORE 5-Judge Constitution Bench, Nov 2024)",
    url: "https://www.sci.gov.in/",
  },
  {
    title: "Reserve Bank of India — Master Direction on Digital Lending & Fair Practices Code for NBFCs",
    url: "https://www.rbi.org.in/",
  },
];

const COURT_PRECEDENTS = [
  {
    title: "5-Judge Constitution Bench Invalidates Unilateral & Curated-Panel Clauses",
    parties: "Central Organisation for Railway Electrification v. ECI SPIC SMO MCML (JV)",
    citation: "2024 INSC 857 (5-Judge Constitution Bench, Supreme Court of India)",
    date: "Judgment Dated 08 November 2024",
    holding:
      "Held that unilateral appointment clauses and asymmetric 'curated panel' mechanisms—where one party restricts the counterparty to choosing from a pre-selected roster maintained by the interested entity—violate Section 12(5), Section 18 (equal treatment), and Article 14 of the Constitution. Even in standard-form commercial or public-private contracts, independence and impartiality in arbitrator selection cannot be waived ex ante.",
    impact:
      "Every NBFC and fintech sanction letter that empowers the lender's MD, CEO, Legal Head, or an internal curated panel to nominate the sole arbitrator is legally vulnerable to Section 34 annulment and Section 36 execution refusal.",
  },
  {
    title: "Interested Party Barred From Unilateral Sole Arbitrator Nomination",
    parties: "Perkins Eastman Architects DPC & Anr. v. HSCC (India) Ltd.",
    citation: "(2020) 20 SCC 760, Supreme Court of India",
    date: "Judgment Dated 26 November 2019",
    holding:
      "Extended TRF Ltd. to hold that a person having an interest in the outcome of the dispute is statutorily ineligible under Section 12(5) read with the Seventh Schedule to unilaterally appoint a sole arbitrator. Neutrality requires either bilateral consent after the dispute arises or independent institutional appointment.",
    impact:
      "Forms the foundational rule that prompted High Courts nationwide to set aside ex-parte NBFC awards passed by lender-nominated sole arbitrators.",
  },
  {
    title: "Ineligible Appointor Cannot Delegate Nomination Power",
    parties: "TRF Ltd. v. Energo Engineering Projects Ltd.",
    citation: "(2017) 8 SCC 377, Supreme Court of India",
    date: "Judgment Dated 03 July 2017",
    holding:
      "Once a named authority (such as a Managing Director or Chief Legal Officer) becomes statutorily ineligible to act as arbitrator under Section 12(5), that authority also loses all competence to nominate another person as arbitrator—qui facit per alium facit per se.",
    impact:
      "Closes the loophole where NBFC agreements replaced 'MD shall be arbitrator' with 'MD shall nominate an independent advocate as arbitrator.'",
  },
  {
    title: "Unstamped Digital Loan Agreements Remain Valid at Section 11 Inception",
    parties: "In Re: Interplay between Arbitration Agreements and the Indian Stamp Act, 1899",
    citation: "Curative Petition (C) No. 44 of 2023 (7-Judge Constitution Bench)",
    date: "Judgment Dated 13 December 2023",
    holding:
      "Overturned N.N. Global and held that non-stamping or insufficient stamping of an underlying loan agreement does not render the arbitration agreement void ab initio. Objections on stamp duty are curable under Section 16 before the arbitral tribunal.",
    impact:
      "Protects digital lenders and BNPL platforms from borrower delay tactics alleging deficient state stamp duty on click-wrap loan contracts.",
  },
  {
    title: "Juridical 'Seat' Fixes Exclusive Court Jurisdiction Over Virtual Venues",
    parties: "BGS SGS Soma JV v. NHPC Ltd.",
    citation: "(2020) 4 SCC 234, Supreme Court of India",
    date: "Judgment Dated 10 December 2019",
    holding:
      "Clarified that the designated 'seat' of arbitration acts as an exclusive jurisdiction clause anchoring supervisory courts under Sections 9, 11, and 34, irrespective of where hearings ('venue') are physically or virtually conducted.",
    impact:
      "Essential for pan-India ODR clauses: naming a fixed Indian Seat (e.g., Mumbai or Delhi) prevents borrowers across 28 states from filing fragmented Section 34 challenges in local district courts.",
  },
];

export default function NeutralOdrClauseDraftingPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: META_DESCRIPTION,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": CANONICAL_URL,
    },
    author: {
      "@type": "Person",
      name: REVIEWER_INFO.name,
      jobTitle: REVIEWER_INFO.role,
    },
    publisher: {
      "@type": "Organization",
      name: "LegalRecovery.in",
      url: SITE_URL,
    },
    datePublished: "2026-11-14",
    dateModified: "2026-11-14",
    inLanguage: "en-IN",
    about: [
      "Online Dispute Resolution (ODR)",
      "Arbitration and Conciliation Act 1996",
      "NBFC Loan Agreement Drafting",
      "Section 12(5) Unilateral Appointment",
    ],
  };

  const faqSchema = {
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
        name: "NBFC & Fintech Loan Recovery",
        item: `${SITE_URL}/industries/nbfc-fintech-loan-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Neutral ODR & Online Arbitration Clause Drafting",
        item: CANONICAL_URL,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Dark Gradient Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-02 NBFC &amp; Fintech Law</span>
            <span>&bull;</span>
            <span>Arbitration Act s.11 / s.12(5)</span>
            <span>&bull;</span>
            <span>Post-CORE 5-Judge Bench</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40-60 word Executive Statutory Summary with parent Hub link */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Summary &mdash; Reviewed by {REVIEWER_INFO.name} ({REVIEWER_INFO.role})
            </span>
            After the Supreme Court&apos;s 5-Judge Constitution Bench ruling in{" "}
            <em>Central Organisation for Railway Electrification</em> (Nov 2024), unilateral
            arbitrator appointments and lender-curated panels are void under Section 12(5). Part of our{" "}
            <Link
              href="/industries/nbfc-fintech-loan-recovery"
              className="text-red-300 underline hover:text-white font-semibold"
            >
              NBFC &amp; Fintech Loan Recovery Hub
            </Link>
            , this guide gives General Counsels an enforceable neutral ODR clause architecture that
            survives Section 34 and Section 36 scrutiny.
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="p-2 sm:p-3">
              <div className="text-lg sm:text-2xl font-black text-red-400">Nov 2024</div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-1">
                5-Judge SC CORE Bench Ruling
              </div>
            </div>
            <div className="p-2 sm:p-3">
              <div className="text-lg sm:text-2xl font-black text-amber-400">30 Days</div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-1">
                s.11 / s.21 Notice Response Window
              </div>
            </div>
            <div className="p-2 sm:p-3">
              <div className="text-lg sm:text-2xl font-black text-emerald-400">6 Months</div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-1">
                s.29B Fast-Track ODR Award Cap
              </div>
            </div>
            <div className="p-2 sm:p-3">
              <div className="text-lg sm:text-2xl font-black text-slate-100">90 Days</div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-1">
                s.34(3) Award Challenge Limitation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { label: "NBFC & Fintech Recovery", href: "/industries/nbfc-fintech-loan-recovery" },
              { label: "Neutral ODR Clause Drafting" },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky TOC */}
          <OdrClauseTableOfContents />

          {/* Main Content Column */}
          <article className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Post-CORE Ruling */}
            <section
              id="heading-core-ruling"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Why Legacy NBFC Arbitration Clauses Fail After CORE (2024)
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  For over a decade, Indian Non-Banking Financial Companies (NBFCs), Housing Finance
                  Companies (HFCs), and digital lending fintechs relied on standard-form sanction
                  letters containing one-sided arbitration clauses. Typically, these clauses empowered
                  the lender&apos;s Managing Director, Chief Legal Officer, or an internal
                  &ldquo;approved panel&rdquo; to nominate a sole arbitrator whenever a borrower
                  defaulted. While earlier Supreme Court decisions in <em>TRF Ltd.</em> (2017) and{" "}
                  <em>Perkins Eastman</em> (2020) curtailed direct unilateral appointments, many
                  lenders pivoted to a workaround: maintaining a curated roster of 5 to 15
                  arbitrators and asking the borrower to select one name, or routing disputes to an
                  in-house ODR desk.
                </p>
                <p>
                  On 08 November 2024, a 5-Judge Constitution Bench of the Supreme Court of India in{" "}
                  <em>
                    Central Organisation for Railway Electrification v. ECI SPIC SMO MCML (JV)
                  </em>{" "}
                  (2024 INSC 857) closed that workaround permanently. The Constitution Bench held
                  that unilateral appointment clauses—and asymmetric curated-panel clauses where one
                  party controls the pool of eligible arbitrators—violate Section 12(5) read with
                  Section 18 (equal treatment of parties) of the Arbitration and Conciliation Act,
                  1996, as well as Article 14 of the Constitution of India.
                </p>
                <p>
                  For NBFC General Counsels, the operational risk is acute: an ex-parte award
                  obtained under a defective unilateral or curated-panel clause is a{" "}
                  <strong>nullity in law</strong>. Executing courts routinely dismiss Section 36
                  execution petitions on the ground of inherent lack of jurisdiction, even if the
                  borrower never appeared before the arbitrator or missed the 90-day Section 34
                  challenge window. Migrating sanction templates to{" "}
                  <Link
                    href="/online-dispute-resolution-india"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    neutral institutional Online Dispute Resolution (ODR)
                  </Link>{" "}
                  is no longer optional—it is the baseline requirement for enforceable retail and SME
                  debt recovery.
                </p>
              </div>
            </section>

            {/* Section 2: Statutory Timelines */}
            <section
              id="heading-statutory-timelines"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Statutory Timelines: Section 21 Notice to Section 36 Execution
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Every stage of an ODR-backed loan recovery lifecycle is governed by strict
                bare-act timelines under the Arbitration and Conciliation Act, 1996, the
                Information Technology Act, 2000, and the Bharatiya Sakshya Adhiniyam, 2023 (BSA).
                Missing a statutory notice window or failing to prove electronic delivery under
                Section 3 gives defaulting borrowers a ready-made Section 34(2)(a)(iii) ground to
                set aside the award.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3 sm:p-4 font-bold">Statutory Stage</th>
                      <th className="p-3 sm:p-4 font-bold">Governing Provision</th>
                      <th className="p-3 sm:p-4 font-bold">Hard Deadline / Stop</th>
                      <th className="p-3 sm:p-4 font-bold">Creditor Compliance Rule</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        Digital Contract Formation
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Arbitration Act s.7(4)(b) &amp; IT Act s.10A
                      </td>
                      <td className="p-3 sm:p-4 font-semibold text-emerald-700">
                        Valid at Disbursal
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Retain OTP/Aadhaar e-Sign hash, IP log, and PDF checksum with BSA s.63
                        certificate.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        Limitation Stop &amp; Invocation
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Arbitration Act s.21 &amp; s.43
                      </td>
                      <td className="p-3 sm:p-4 font-semibold text-amber-700">
                        Within 3 Years of Default
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Arbitration commences on the date the borrower receives the s.21 notice,
                        freezing limitation.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        Institutional Appointment Window
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Arbitration Act s.11(4)–(6)
                      </td>
                      <td className="p-3 sm:p-4 font-semibold text-[#DC2626]">30 Days</td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        If institutional ODR is named, the institution appoints directly; if ad-hoc
                        s.21 fails after 30 days, move High Court under s.11(6).
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        Independence Disclosure
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        s.12(1) &amp; Sixth Schedule
                      </td>
                      <td className="p-3 sm:p-4 font-semibold text-slate-900">
                        Before 1st Hearing
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Sole arbitrator must disclose any prior NBFC engagements in the past 3 years
                        under Fifth/Sixth Schedule.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        Fast-Track ODR Award
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Arbitration Act s.29B &amp; s.25(b)
                      </td>
                      <td className="p-3 sm:p-4 font-semibold text-emerald-700">
                        6 Months (Written Pleadings)
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Written-pleading fast-track without oral hearings unless requested; ex-parte
                        award permitted on default under s.25(b).
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        Award Challenge &amp; Execution
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        s.34(3) &amp; s.36 / Order 21 CPC
                      </td>
                      <td className="p-3 sm:p-4 font-semibold text-[#DC2626]">
                        90 Days (+30 Days Max)
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Serve signed award via Speed Post + Email; after 90 days (or absent stay),
                        execute as a civil decree under s.36.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: Supreme Court Precedents */}
            <section
              id="heading-precedents"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  3
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Supreme Court Precedents Governing Neutral ODR Clauses
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Five binding Supreme Court rulings define the exact constitutional and statutory
                boundaries within which NBFCs and digital lenders must draft their ODR clauses.
              </p>

              <div className="space-y-4">
                {COURT_PRECEDENTS.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 pl-6 overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]" />
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626]">
                        {item.citation}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-500">{item.date}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                      {item.parties}
                    </h3>
                    <p className="text-xs font-semibold text-slate-600 mb-2">{item.title}</p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                      <strong>Holding:</strong> {item.holding}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-800 bg-white border border-slate-200 rounded-lg p-3">
                      <strong className="text-[#DC2626]">GC Takeaway:</strong> {item.impact}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: 6-Part Model Institutional ODR Clause */}
            <section
              id="heading-clause-architecture"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  4
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  6-Part Model Institutional ODR Clause for NBFC Sanction Letters
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                To insulate new loan originations from Section 12(5) and Section 34 challenges,
                General Counsels should structure the dispute resolution clause into six discrete
                sub-clauses, separating <strong>institutional neutrality</strong> from{" "}
                <strong>juridical seat</strong> and <strong>virtual ODR procedure</strong>.
              </p>

              {/* Desktop SVG Architecture Diagram */}
              <div className="hidden md:block mb-6 bg-slate-900 rounded-2xl p-5 border border-slate-800">
                <svg
                  viewBox="0 0 760 220"
                  width={760}
                  height={220}
                  className="w-full h-auto"
                  role="img"
                  aria-label="6-part neutral institutional ODR clause architecture for NBFC loan agreements"
                >
                  <rect x="10" y="15" width="230" height="82" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="1.5" />
                  <text x="24" y="40" fill="#F87171" fontSize="11" fontWeight="700">1. INSTITUTIONAL REFERENCE</text>
                  <text x="24" y="58" fill="#F1F5F9" fontSize="11">Named neutral ODR Institution</text>
                  <text x="24" y="75" fill="#94A3B8" fontSize="10">Eliminates unilateral NBFC bias</text>

                  <rect x="265" y="15" width="230" height="82" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="279" y="40" fill="#34D399" fontSize="11" fontWeight="700">2. OPEN ROSTER APPOINTMENT</text>
                  <text x="279" y="58" fill="#F1F5F9" fontSize="11">Secretariat appoints Sole Arbitrator</text>
                  <text x="279" y="75" fill="#94A3B8" fontSize="10">s.12(1) Sixth Schedule disclosure</text>

                  <rect x="520" y="15" width="230" height="82" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="534" y="40" fill="#FBBF24" fontSize="11" fontWeight="700">3. SEAT VS. VIRTUAL VENUE</text>
                  <text x="534" y="58" fill="#F1F5F9" fontSize="11">Fixed Indian City as Juridical Seat</text>
                  <text x="534" y="75" fill="#94A3B8" fontSize="10">Online hearings under BGS SGS Soma</text>

                  <rect x="10" y="122" width="230" height="82" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="24" y="147" fill="#34D399" fontSize="11" fontWeight="700">4. S.29B FAST-TRACK ODR</text>
                  <text x="24" y="165" fill="#F1F5F9" fontSize="11">Written pleadings &amp; 6-month cap</text>
                  <text x="24" y="182" fill="#94A3B8" fontSize="10">Document-only retail adjudication</text>

                  <rect x="265" y="122" width="230" height="82" rx="10" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                  <text x="279" y="147" fill="#F87171" fontSize="11" fontWeight="700">5. S.3 &amp; BSA S.63 SERVICE</text>
                  <text x="279" y="165" fill="#F1F5F9" fontSize="11">KYC Email + WhatsApp + RPAD</text>
                  <text x="279" y="182" fill="#94A3B8" fontSize="10">Deemed service on last known address</text>

                  <rect x="520" y="122" width="230" height="82" rx="10" fill="#1E293B" stroke="#DC2626" strokeWidth="1.5" />
                  <text x="534" y="147" fill="#FBBF24" fontSize="11" fontWeight="700">6. S.31A COST ALLOCATION</text>
                  <text x="534" y="165" fill="#F1F5F9" fontSize="11">Reasonable ODR fee schedule</text>
                  <text x="534" y="182" fill="#94A3B8" fontSize="10">Recoverable under s.36 decree</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:hidden mb-6">
                {[
                  ["1. Institutional Reference", "Named neutral ODR Institution removes unilateral bias."],
                  ["2. Open Roster Appointment", "Secretariat appoints Sole Arbitrator with s.12(1) disclosure."],
                  ["3. Seat vs. Virtual Venue", "Fixed Indian City Seat + virtual video hearings."],
                  ["4. s.29B Fast-Track ODR", "Written-pleading fast-track capped at 6 months."],
                  ["5. s.3 & BSA s.63 Service", "KYC Email + WhatsApp + Speed Post RPAD deemed service."],
                  ["6. s.31A Cost Allocation", "Transparent institutional fee recoverable in s.36 execution."],
                ].map(([title, desc], i) => (
                  <div key={i} className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800">
                    <p className="text-xs font-bold text-red-400 mb-1">{title}</p>
                    <p className="text-xs text-slate-300">{desc}</p>
                  </div>
                ))}
              </div>

              {/* Model Clause Text */}
              <div className="bg-slate-50 border border-slate-300 rounded-xl p-4 sm:p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  Annotated Model Clause Blueprint (For Counsel Review)
                </p>
                <p className="text-xs sm:text-sm font-mono text-slate-800 leading-relaxed whitespace-pre-line">
                  &ldquo;All disputes, claims, or defaults arising out of or in connection with this
                  Loan Agreement shall be referred to and finally resolved by arbitration
                  administered by [Name of Independent ODR / Arbitral Institution] in accordance
                  with its published Institutional Rules. The Tribunal shall consist of a Sole
                  Arbitrator appointed independently by the Institution from its open neutral panel,
                  subject to mandatory independence disclosures under Section 12(1) and the Sixth
                  Schedule of the Arbitration and Conciliation Act, 1996. The parties expressly
                  agree to fast-track procedure under Section 29B of the Act, conducted
                  electronically via Online Dispute Resolution (ODR) video-conferencing and digital
                  filings. The juridical seat of arbitration shall be [Mumbai / New Delhi /
                  Bengaluru], India, and the courts at [City] alone shall have exclusive supervisory
                  jurisdiction. All notices under Section 3 and Section 21 served at the
                  Borrower&apos;s KYC-verified email, registered mobile/WhatsApp, or last known
                  postal address shall constitute valid service.&rdquo;
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mt-4">
                Pair your updated ODR clause with a compliant pre-arbitration demand using our{" "}
                <Link
                  href="/templates/bank-loan-recall-cum-guarantee-invocation-notice"
                  className="text-[#DC2626] font-semibold underline"
                >
                  Loan Recall cum Guarantee Invocation Notice Template
                </Link>{" "}
                or dispatch{" "}
                <Link
                  href="/send-a-legal-notice/for-nbfc-to-recover-their-unpaid-dues"
                  className="text-[#DC2626] font-semibold underline"
                >
                  NBFC recovery legal notices
                </Link>{" "}
                before invoking Section 21.
              </p>
            </section>

            {/* Section 5: Interactive Scenario Tabs */}
            <section
              id="heading-scenarios"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  5
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Interactive Playbook: 4 NBFC ODR &amp; Clause Failure Scenarios
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Select a scenario below to inspect how General Counsels handle legacy unilateral
                clauses, curated panels, seat challenges, and click-wrap consent objections.
              </p>

              <OdrClauseScenarioTabs />
            </section>

            {/* Section 6: Pre-Empting S.34 / S.36 Defenses */}
            <section
              id="heading-defense-preemption"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  6
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Pre-Empting Borrower Defenses Under Sections 16, 34 &amp; 36
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Defaulting borrowers and defense counsel routinely raise five standardized
                objections to stall Section 36 execution. Pre-empting each objection at the
                drafting and Section 21 notice stage eliminates post-award annulment risk.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3 sm:p-4 font-bold">Borrower Objection</th>
                      <th className="p-3 sm:p-4 font-bold">Statutory / Case Ground</th>
                      <th className="p-3 sm:p-4 font-bold">Creditor Pre-Emption Control</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        &ldquo;Arbitrator was unilaterally picked by NBFC&rdquo;
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        s.12(5) + <em>CORE</em> (2024) + <em>Perkins</em>
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Name an independent ODR Institution with open roster appointment and file
                        signed Sixth Schedule disclosure.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        &ldquo;Never signed a physical arbitration agreement&rdquo;
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        s.7(4)(b) + IT Act s.10A + BSA s.63
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Produce timestamped OTP/Aadhaar e-Sign audit trail with signed Section 63
                        BSA electronic evidence certificate.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        &ldquo;Digital loan contract is unstamped&rdquo;
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        <em>In Re: Interplay</em> (7-Judge Bench, 2023)
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Attach NeSL/SHCIL e-stamp receipt; if deficient, cure duty before the
                        arbitrator under s.16 without halting proceedings.
                      </td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        &ldquo;Never received Section 21 or hearing notice&rdquo;
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        s.3 + s.34(2)(a)(iii) Arbitration Act
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Deploy{" "}
                        <Link
                          href="/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution"
                          className="text-[#DC2626] font-semibold underline"
                        >
                          tri-channel Email + WhatsApp + Speed Post RPAD
                        </Link>{" "}
                        with tracking and delivery logs.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 font-bold text-slate-900">
                        &ldquo;Online ODR court lacks territorial jurisdiction&rdquo;
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        <em>BGS SGS Soma</em> (2020) 4 SCC 234
                      </td>
                      <td className="p-3 sm:p-4 text-slate-700">
                        Specify a single Indian city as the juridical Seat while defining ODR
                        video-conferencing solely as the virtual mode/venue.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 7: Portfolio Migration & Economics */}
            <section
              id="heading-portfolio-impact"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  7
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Migrating Live NBFC Loan Templates &amp; Legacy NPA Books
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  A practical General Counsel remediation plan splits the loan book into two cohorts:
                  (1) <strong>Prospective Originations</strong> in the Loan Origination System
                  (LOS), and (2) <strong>Legacy NPA Accounts</strong> originated under pre-2024
                  unilateral clauses. For prospective originations, updating the digital sanction
                  letter and Master Loan Agreement (MLA) takes effect immediately across new
                  disbursals, ensuring every future default qualifies for Section 29B fast-track
                  institutional ODR.
                </p>
                <p>
                  For legacy NPA accounts, never waste legal budget obtaining voidable ex-parte
                  awards under a unilateral clause. Instead, pair{" "}
                  <Link
                    href="/rbi-recovery-agent-guidelines-compliant-legal-escalation-nbfc"
                    className="text-[#DC2626] font-semibold underline"
                  >
                    RBI-compliant legal escalation notices
                  </Link>{" "}
                  with unit-positive{" "}
                  <Link
                    href="/small-ticket-digital-personal-loan-bnpl-recovery-economics"
                    className="text-[#DC2626] font-semibold underline"
                  >
                    small-ticket digital loan &amp; BNPL recovery economics
                  </Link>
                  , or evaluate forum selection using our{" "}
                  <Link
                    href="/tools/sarfaesi-drt-bank-recovery-forum-calculator"
                    className="text-[#DC2626] font-semibold underline"
                  >
                    Recovery Forum Calculator
                  </Link>{" "}
                  to route high-ticket claims through Section 11(6) High Court appointment,
                  SARFAESI, or Order XXXVII summary suits.
                </p>
              </div>
            </section>

            {/* Section 8: Dual-Track CTA */}
            <section
              id="heading-cta"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  8
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Deploy Post-CORE Compliant ODR &amp; Recovery Notices
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                Test a single overdue account with an Advocate-drafted Section 21 / Recall notice,
                or onboard your NBFC&apos;s CSV portfolio for bulk tri-channel dispatch and
                reply triage.
              </p>

              <OdrClauseCTA />
            </section>

            {/* Section 9: FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  9
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  FAQs: Post-CORE ODR Clause Drafting for NBFCs &amp; Fintechs
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((item, idx) => (
                  <details
                    key={idx}
                    className="group bg-slate-50 border border-slate-200 rounded-xl p-4 open:bg-white open:shadow-sm transition-all"
                  >
                    <summary className="font-bold text-sm sm:text-base text-slate-900 cursor-pointer list-none flex items-center justify-between gap-3">
                      <span>{item.q}</span>
                      <span className="text-[#DC2626] font-black text-lg shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 10: Primary Statutory Sources */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black flex items-center justify-center shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Primary Statutes, Supreme Court Rulings &amp; Official Portals
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {STATUTORY_SOURCES.map((src, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold mt-0.5">&rarr;</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline font-medium"
                    >
                      {src.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </div>
      </main>

      <RelatedRecoveryGuides />
    </div>
  );
}
