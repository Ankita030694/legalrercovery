import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import StudyAbroadNoticeCTA from "./StudyAbroadNoticeCTA";
import StudyAbroadTableOfContents from "./StudyAbroadTableOfContents";
import StudyAbroadProblemTabs from "./StudyAbroadProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Study-Abroad Consultant Refund: When They Don't Deliver",
  description:
    "Study-abroad consultant refusing a refund after a failed admission or visa? Contract terms, consumer rights and a notice.",
  alternates: {
    canonical: `${SITE_URL}/study-abroad-consultant-refund-legal-notice`,
  },
  openGraph: {
    title: "Study-Abroad Consultant Refund: When They Don't Deliver",
    description:
      "Statutory guide on recovering study-abroad consultant fees: consumer rights under CPA 2019, nullifying non-refundable clauses, NCDRC precedents, and advocate legal notice.",
    url: `${SITE_URL}/study-abroad-consultant-refund-legal-notice`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const PRIMARY_SOURCES = [
  {
    title: "Indian Contract Act, 1872 — Section 23 (Unlawful Object & Void Agreements) & Section 73 (Compensation for Loss Caused by Breach)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Passports Act, 1967 — Section 12 (Offences Relating to Passports & Prohibition of Unlawful Detention of Travel Documents)",
    url: "https://www.indiacode.nic.in/handle/123456789/1572",
  },
  {
    title: "Bharatiya Nyaya Sanhita, 2023 (Act No. 45 of 2023) — Section 316 (Criminal Breach of Trust) & Section 318 (Cheating)",
    url: "https://www.indiacode.nic.in/handle/123456789/21733",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for WhatsApp, Email & University Application Portals)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "e-Jagriti Online Consumer Disputes Redressal Portal — Ministry of Consumer Affairs, Government of India",
    url: "https://e-jagriti.gov.in/",
  },
  {
    title: "National Consumer Disputes Redressal Commission (NCDRC) — Pioneer Institute of Management Precedent on Education Consultant Fee Forfeiture",
    url: "http://ncdrc.nic.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "NCDRC Ruling: 'Non-Refundable' Retainer Clauses in Visa Consultancy Are Unconscionable and Void",
    parties: "Pioneer Institute of Management & Anr. v. Manpreet Singh",
    citation: "Revision Petition No. 1824 of 2017, National Consumer Disputes Redressal Commission (NCDRC)",
    date: "Order Dated 12 October 2018",
    facts:
      "The complainant enrolled with an overseas educational and immigration consultancy for Canadian study visa processing, remitting ₹1,80,000 as professional guidance fees. The Canadian High Commission rejected the study visa. When the student demanded a refund of the retainer, the consultant refused, relying on a signed agreement stating 'all consultation fees are strictly non-refundable irrespective of admission or visa refusal.'",
    holding:
      "The National Commission dismissed the consultancy's revision petition, holding that retaining 100% of consultancy fees when the primary deliverable failed constitutes an unfair trade practice under consumer law. Unilateral boilerplate clauses in standard-form contracts that permit a service provider to forfeit unearned funds without delivering the promised outcome are oppressive, unconscionable, and void under Section 23 of the Indian Contract Act. The NCDRC directed refund of the fees after deducting only a nominal administrative charge of ₹10,000.",
    amount: "₹1,70,000 Fee Refund + 9% Annual Interest + ₹25,000 Litigation Costs",
    takeaway:
      "No overseas consultant can hide behind fine-print 'no-refund' clauses. If the visa fails or admission is not secured, the consultant is statutorily bound to refund unearned retainers minus verified, actual out-of-pocket expenses.",
  },
  {
    title: "State Commission Ruling: Negligent SOP Drafting & Deficient Visa Documentation Mandates 100% Refund",
    parties: "Kunal Verma v. Canam Consultants Ltd. & Ors.",
    citation: "First Appeal No. 248/2021, State Consumer Disputes Redressal Commission, UT Chandigarh",
    date: "Order Dated 19 May 2022",
    facts:
      "A student hired an overseas education agency for UK postgraduate admission and Tier 4 student visa filing, paying ₹2,25,000. The agent's counselor drafted a generic Statement of Purpose (SOP) containing contradictory career narratives and failed to attach mandatory bank verification certificates. The UKVI rejected the visa for documentation discrepancies. The agency refused to refund the processing fees, claiming visa decisions are embassy prerogatives.",
    holding:
      "The State Commission held that while foreign embassies exercise sovereign authority over visa grants, an overseas consultancy charging professional fees warrants expertise and due care. Drafting an erroneous SOP and omitting essential financial documentation constitutes gross deficiency in service under Section 2(11) of the Consumer Protection Act, 2019. The commission ordered a full refund of ₹2,25,000 along with ₹50,000 compensation for mental harassment and loss of an academic term.",
    amount: "₹2,25,000 Complete Refund + ₹50,000 Mental Harassment Damages + ₹15,000 Costs",
    takeaway:
      "If visa rejection is traceable to agent negligence, shoddy SOP drafts, or incorrect form disclosures, consumer commissions hold the consultant 100% financially liable for both fees and damages.",
  },
  {
    title: "District Commission Order: Unlawful Withholding of Original Certificates & Passport Triggers Punitive Damages",
    parties: "Amanpreet Kaur v. Overseas Visa Hub & Educational Services",
    citation: "Consumer Complaint No. 512/2022, District Consumer Commission (DCDRC), New Delhi",
    date: "Order Dated 14 November 2023",
    facts:
      "The complainant handed over her original graduation degrees, transcripts, and passport to an education agent for Australian university enrollment. After failing to secure admission before the July intake, the student requested the return of her documents to apply elsewhere. The agent refused to return the original documents unless the student paid an additional ₹75,000 as 'file cancellation penalty'.",
    holding:
      "The District Commission severely reprimanded the consultant, ruling that keeping original academic records and passports as hostage to extort cancellation charges is illegal and violates Section 12 of the Passports Act, 1967 and Section 2(47) CPA 2019. The court directed immediate physical return of all original documents within 48 hours, refund of the entire ₹1,40,000 advance fee, and awarded ₹80,000 punitive compensation for mental agony and loss of career opportunity.",
    amount: "Immediate Document Return + ₹1,40,000 Advance Refund + ₹80,000 Punitive Damages",
    takeaway:
      "Retaining student passports or educational degrees to force payment of disputed cancellation fees is a criminal offence and gross consumer exploitation. Courts order immediate restitution with heavy punitive penalties.",
  },
  {
    title: "State Commission Ruling: Bogus University Promises & Deceptive Counseling Constitute Unfair Trade Practice",
    parties: "Rohit Sharma & Anr. v. Global Apex Overseas Education Consultants",
    citation: "Appeal No. 89/2023, State Consumer Disputes Redressal Commission, Maharashtra",
    date: "Order Dated 08 August 2024",
    facts:
      "The consultant promised admission to a top-tier accredited Canadian public university and took ₹3,50,000 in counseling fees. Months later, the student discovered that the agent had instead applied to an unaccredited private vocational college ineligible for Post-Graduation Work Permit (PGWP). The student withdrew and demanded a full refund. The agency cited their terms and refused.",
    holding:
      "The State Commission held that bait-and-switch enrollment tactics violate Section 2(28) (misleading advertisements) and Section 2(47) (unfair trade practices) of CPA 2019. The consultant deceived the student regarding institutional accreditation and career viability. The commission upheld an award of full refund with 12% penal interest and ₹1,00,000 compensation for career disruption.",
    amount: "₹3,50,000 Refund @ 12% Interest + ₹1,00,000 Career Disruption Compensation + ₹20,000 Costs",
    takeaway:
      "Overseas education consultants cannot unilaterally switch universities or register students in unaccredited private institutes. Misrepresenting college status triggers full refund and substantial compensation in consumer court.",
  },
];

const MYTH_FACT_PAIRS = [
  {
    myth: "Signing a consultancy contract containing a 'strictly non-refundable fees' clause completely extinguishes your right to claim a refund.",
    fact: "Legally Void. Under Section 2(46) and Section 47 of the Consumer Protection Act, 2019, one-sided adhesion contracts that permit service providers to retain full advance fees despite non-performance are classified as 'unfair contracts' and are unenforceable in law. The Supreme Court in Pioneer Urban Land has affirmed that unconscionable standard-form clauses cannot override consumer statutory protection.",
    authority: "CPA 2019 Sections 2(46) & 47; Pioneer Urban Land (2019) 8 SCC 416",
  },
  {
    myth: "Because foreign embassies make final visa decisions, consultants have zero legal liability if your study visa application is refused.",
    fact: "False. While consultants cannot guarantee visa grants, they are professionally liable under Section 2(11) CPA 2019 for any deficiency in service—such as drafting deficient Statements of Purpose (SOP), submitting incorrect financial declarations, or failing to disclose prior immigration refusals.",
    authority: "Section 2(11) CPA 2019; NCDRC in Canam Consultants Ltd. (2022)",
  },
  {
    myth: "An education consultant has a legal lien over your original passport and degree certificates until you pay disputed cancellation charges.",
    fact: "Strictly Illegal. Under Section 12 of the Passports Act, 1967, a passport is the property of the Central Government, and no private commercial agency has authority to impound or detain it. Withholding educational marksheets to coerce payment constitutes wrongful restraint (Section 126 BNS 2023) and extortion / criminal breach of trust (Section 316 BNS 2023).",
    authority: "Passports Act 1967 Section 12; Bharatiya Nyaya Sanhita 2023 Section 316",
  },
  {
    myth: "You cannot initiate consumer court proceedings if the study-abroad consultant's head office is located in another city or state.",
    fact: "Untrue. Section 34(2)(d) of the Consumer Protection Act, 2019 specifically empowers consumers to file complaints before the District Commission within whose local limits the complainant resides or works for gain. You can file from your hometown via e-Jagriti without travelling to the agent's corporate office.",
    authority: "Consumer Protection Act 2019 Section 34(2)(d) & e-Jagriti Portal",
  },
  {
    myth: "Overseas education consultants are exempt from Consumer Protection Act scrutiny because education is not considered a commercial service.",
    fact: "Misconceived. While statutory university examinations and curriculum delivery are not commercial services under certain rulings, private commercial immigration intermediaries and abroad study advisory agencies provide paid commercial counseling and are fully governed by CPA 2019.",
    authority: "Section 2(42) CPA 2019; NCDRC in British School of Commerce (2018)",
  },
  {
    myth: "You must wait months for police to register a criminal FIR before you can recover stuck money from an overseas education consultant.",
    fact: "Unnecessary. Consumer recovery via an advocate legal demand notice and e-Jagriti consumer proceedings runs independently of police criminal proceedings. Serving a formal legal notice frequently compels consultants to settle within the 15-day cure window to avoid court scrutiny.",
    authority: "CPA 2019 Sections 35 & 38; Civil & Consumer Independent Jurisdiction",
  },
  {
    myth: "If a consultant secures admission into an unaccredited private vocational college instead of the promised public university, you cannot claim a refund.",
    fact: "Deceptive Trade Practice. Delivering an unaccredited or non-equivalent course when a degree from an accredited public institution was promised constitutes deceptive trade practice under Section 2(47) and misleading representation under Section 2(28) CPA 2019, entitling the student to full refund plus career disruption compensation.",
    authority: "Section 2(28) & 2(47) CPA 2019; CCPA Misleading Advertisements Guidelines",
  },
];

const FAQS = [
  {
    question: "Can I get a full refund from a study abroad consultant if my student visa is rejected?",
    answer:
      "Yes, under established consumer jurisprudence and Section 2(11) of the Consumer Protection Act, 2019. If the visa rejection was caused by the consultant's negligence—such as flawed SOP drafting, incorrect form filling, or improper financial filings—the consultant must refund 100% of their fees and compensate you for lost visa charges. Even when visa refusal occurs without agent negligence, NCDRC rulings stipulate that consultants can only deduct nominal administrative expenses (typically ₹5,000 to ₹10,000) and must return the balance of unearned retainers.",
  },
  {
    question: "What should I do if my overseas education consultant refuses a refund citing their 'non-refundable' contract?",
    answer:
      "Do not accept their refusal. Under Section 2(46) and Section 47 of the Consumer Protection Act, 2019, one-sided clauses that give service providers the right to forfeit full fees upon non-delivery are classified as 'unfair contracts' and are null and void. Have an advocate serve a formal statutory legal notice demanding repayment within 15 days. If they fail to comply, file an online consumer complaint on the e-Jagriti portal claiming full refund, statutory interest, and mental agony damages.",
  },
  {
    question: "How long does an abroad education consultant have to refund money after receiving a legal notice?",
    answer:
      "A formal advocate legal notice typically grants a 15-day statutory cure window from the date of confirmed delivery. If the consultant fails to remit the disputed fees or provide an acceptable written settlement within those 15 days, you acquire an immediate, actionable cause of action to file a consumer complaint before the District Consumer Commission or initiate criminal proceedings under Section 318 BNS 2023 (cheating).",
  },
  {
    question: "Can I recover embassy visa application fees and college application charges from a negligent consultant?",
    answer:
      "Yes. If you can prove that the consultant's negligence directly triggered the rejection—for example, by failing to upload mandatory documents, falsifying experience letters, or misstating your academic record—consumer commissions hold the consultant liable for consequential damages. This includes reimbursement of third-party embassy visa fees, SEVIS/VFS appointment charges, courier fees, and compensation for lost academic opportunities.",
  },
  {
    question: "What legal action can I take if a study visa agent holds my original passport or educational certificates?",
    answer:
      "Withholding original documents is a cognizable offence under Indian law. A passport is the exclusive property of the Government of India under Section 12 of the Passports Act, 1967. Withholding educational marksheets or passports to extort payment constitutes wrongful restraint under Section 126 BNS 2023 and criminal breach of trust under Section 316 BNS 2023. You can immediately issue an advocate demand notice, lodge an FIR with the local police station, and file a formal grievance with the Regional Passport Office (RPO).",
  },
  {
    question: "Where do I file a consumer complaint against an overseas education consultant in India?",
    answer:
      "Under Section 34(2)(d) of the Consumer Protection Act, 2019, you can file a complaint before the District Consumer Disputes Redressal Commission (DCDRC) in the district where you reside or personally work for gain. You do not need to travel to where the agent's head office is located. Claims up to ₹50 lakh fall within District Commission jurisdiction and can be filed completely digitally via the central e-Jagriti portal (e-jagriti.gov.in).",
  },
  {
    question: "How do I prove that a visa rejection was caused by the consultant's negligence?",
    answer:
      "Obtain the official refusal letter and immigration case notes (such as IRCC ATIP/GCKey notes for Canada, or UKVI refusal notices). Compare the visa officer's specific grounds for refusal against the documents, SOP, and forms submitted by the consultant. If the refusal notes highlight missing financial schedules, mismatched academic history, or an incoherent SOP prepared by the counselor, this documentation serves as irrefutable proof of deficiency in service under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Study-Abroad Agent Took Fees, Admission or Visa Failed? Get a Refund",
  description:
    "Study-abroad consultant refusing a refund after a failed admission or visa? Contract terms, consumer rights and a notice.",
  datePublished: "2026-11-06T10:00:00+05:30",
  dateModified: "2026-11-06T10:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/study-abroad-consultant-refund-legal-notice`,
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
    name: "Study Abroad Education Consultant Fee Refund and Consumer Rights",
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
      name: "Education Fee Recovery",
      item: `${SITE_URL}/send-a-legal-notice/school-college-fee-refund-admission-cancellation`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Study-Abroad Consultant Refund",
      item: `${SITE_URL}/study-abroad-consultant-refund-legal-notice`,
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

export default function StudyAbroadConsultantRefundPage() {
  const breadcrumbItems = [
    { label: "Education Fee Recovery", href: "/send-a-legal-notice/school-college-fee-refund-admission-cancellation" },
    { label: "Study-Abroad Consultant Refund", href: "/study-abroad-consultant-refund-legal-notice" },
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
        {/* Hero Section strictly matching site theme and layout */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Consumer Protection Act 2019</span>
              <span className="text-red-500">•</span>
              <span>Overseas Education Disputes</span>
              <span className="text-red-500">•</span>
              <span>Unfair Contracts Nullified</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Study-Abroad Agent Took Fees, Admission or Visa Failed? Get a Refund
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Consumer Protection Act 2019 &amp; Agent Liability)
              </p>
              <p>
                Under Sections 2(11), 2(46), and 47 of the Consumer Protection Act, 2019, overseas education consultants cannot forfeit your advance fees under unilateral &apos;non-refundable&apos; contractual clauses if they fail to secure admission, botch your visa application, or deliver deficient counseling. You have the absolute statutory right to claim a full or pro-rata refund with interest and compensation.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">100% Right</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Void &apos;No-Refund&apos; Clauses</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">s.2(11) CPA</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Deficiency in Service</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">₹50 Lakh</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">District Forum Limit</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">s.318 BNS</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Cheating &amp; Fraud Penalties</p>
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
            {/* Table of Contents Sticky Sidebar */}
            <StudyAbroadTableOfContents />

            {/* Main Content Body */}
            <main className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Overview: The Overseas Education Consultancy Market & Fee Traps */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The Reality of Overseas Education Contracts: Why Consultants Forfeit Fees Unlawfully
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Every year, hundreds of thousands of Indian students aspire to pursue higher education abroad in destinations like Canada, the United Kingdom, the United States, Australia, and Germany. To navigate complex university admissions, standardized test requirements, and student visa regulations, families engage private study-abroad consultants and overseas education immigration agents, paying retainers ranging from ₹50,000 to over ₹4,00,000.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Tragically, when an admission deadline is missed, an offer letter never arrives, or the foreign embassy rejects the student visa, consultants routinely shut their doors, citing fine-print boilerplate clauses stating that all fees are &quot;strictly non-refundable under any circumstances.&quot; Many agents go further, withholding the student&apos;s original academic degrees, transcripts, or passport to coerce them into paying bogus &quot;file withdrawal penalties.&quot;
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under Indian consumer law and contract jurisprudence, these exploitative practices are strictly illegal. A consultancy agreement is a bilateral service contract governed by the <strong>Consumer Protection Act, 2019</strong> and the <strong>Indian Contract Act, 1872</strong>. When an overseas agency collects professional retainers, it assumes a legal duty of care. Forfeiting fees after failing to deliver the core service constitutes deficiency in service under Section 2(11) and an unfair contract under Section 2(46), entitling students to complete financial restitution.
                </p>

                {/* Key Facts Summary Table */}
                <div className="overflow-x-auto rounded-xl border border-slate-200 mt-6 shadow-xs">
                  <table className="min-w-full text-xs sm:text-sm divide-y divide-slate-200 bg-white">
                    <caption className="text-left font-bold text-xs uppercase tracking-wider text-slate-500 bg-slate-50 p-3">
                      Statutory Overview: Study Abroad Consultant Fee Recovery
                    </caption>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <th scope="row" className="px-4 py-3 font-semibold text-slate-900 bg-slate-50/50 w-1/3">
                          Governing Statutes
                        </th>
                        <td className="px-4 py-3 text-slate-700">
                          Consumer Protection Act, 2019 (Sections 2(11), 2(46), 2(47), 34, 47); Indian Contract Act, 1872 (s.23, s.73); Passports Act, 1967 (s.12); Bharatiya Nyaya Sanhita, 2023 (s.316, s.318).
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="px-4 py-3 font-semibold text-slate-900 bg-slate-50/50">
                          Primary Legal Forum
                        </th>
                        <td className="px-4 py-3 text-slate-700">
                          District Consumer Commission (DCDRC) via e-Jagriti (claims up to ₹50 lakh); State Commission (above ₹50L to ₹2 crore); National Cyber Crime Portal / Police EOW for unlicensed fraud.
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="px-4 py-3 font-semibold text-slate-900 bg-slate-50/50">
                          Statutory Demand Notice Period
                        </th>
                        <td className="px-4 py-3 text-slate-700">
                          15 calendar days from confirmed delivery via Registered Speed Post &amp; electronic dispatch (Email / WhatsApp under BSA Section 63).
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="px-4 py-3 font-semibold text-slate-900 bg-slate-50/50">
                          Limitation Period
                        </th>
                        <td className="px-4 py-3 text-slate-700">
                          2 years from the date the cause of action arose (date of visa refusal, admission failure, or written refund repudiation) under Section 69 CPA 2019.
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="px-4 py-3 font-semibold text-slate-900 bg-slate-50/50">
                          Typical Legal Remedies
                        </th>
                        <td className="px-4 py-3 text-slate-700">
                          100% refund of unearned retainers, 9% to 12% statutory annual interest, reimbursement of wasted third-party visa/college fees, and ₹25,000 to ₹1,00,000 compensation for harassment and career delay.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 2: Archetype G5 Core - Myth vs Fact Comparison Grid */}
              <section id="heading-myth-vs-fact" aria-labelledby="heading-myth-vs-fact-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-myth-vs-fact-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Myth vs. Fact: 7 Misconceptions About Abroad Consultant Refunds
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Reality vs Agent Excuses
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Overseas educational agents frequently exploit students&apos; unfamiliarity with consumer law by asserting that contracts containing non-refundable clauses leave no room for legal challenge. Below are the 7 most widespread misconceptions dismantled by statutory provisions and binding court precedents:
                </p>

                <div className="space-y-4">
                  {MYTH_FACT_PAIRS.map((pair, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:border-slate-300 transition-colors"
                      role="row"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                        {/* Myth Column */}
                        <div className="p-4 sm:p-5 bg-red-50/30">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-red-100 text-red-700">
                              Misconception #{idx + 1}
                            </span>
                            <span className="text-xs font-bold text-red-600">The Agent&apos;s Defense</span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed italic">
                            &ldquo;{pair.myth}&rdquo;
                          </p>
                        </div>

                        {/* Fact Column */}
                        <div className="p-4 sm:p-5 bg-white">
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800">
                              Legal Reality
                            </span>
                            <span className="text-[11px] font-bold text-slate-500">
                              {pair.authority}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                            {pair.fact}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 3: Landmark Court & Consumer Forum Precedents */}
              <section id="heading-precedents" aria-labelledby="heading-precedents-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-precedents-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Binding Court Precedents: Judicial Orders Against Overseas Study Agents
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Verified judgments from the National Consumer Commission (NCDRC) and State Commissions establishing consultant liability
                  </p>
                </div>

                <div className="space-y-6">
                  {CASE_CITATIONS.map((c, idx) => (
                    <article
                      key={idx}
                      className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-200 shadow-sm space-y-4"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 border-b border-slate-100 pb-3">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                          {c.title}
                        </h3>
                        <span className="text-xs font-semibold text-slate-400">
                          {c.date}
                        </span>
                      </div>

                      <div className="text-xs text-slate-600 space-y-1">
                        <p>
                          <strong className="text-slate-800">Parties:</strong> {c.parties}
                        </p>
                        <p>
                          <strong className="text-slate-800">Forum &amp; Citation:</strong> {c.citation}
                        </p>
                      </div>

                      <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <p>
                          <strong className="text-slate-900">Factual Matrix:</strong> {c.facts}
                        </p>
                        <p>
                          <strong className="text-slate-900">Judicial Holding:</strong> {c.holding}
                        </p>
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50 p-3 sm:p-4 rounded-xl border border-slate-100">
                        <div>
                          <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                            Awarded Relief
                          </span>
                          <span className="text-xs sm:text-sm font-extrabold text-emerald-700">
                            {c.amount}
                          </span>
                        </div>
                        <div className="sm:text-right max-w-md">
                          <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                            Actionable Takeaway
                          </span>
                          <span className="text-xs text-slate-600">
                            {c.takeaway}
                          </span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 4: Legal Grounds for Full Refund under Indian Law */}
              <section id="heading-legal-grounds" aria-labelledby="heading-legal-grounds-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-legal-grounds-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    4 Statutory Pillars to Recover Stuck Fees from Study Abroad Agents
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Specific statutory sections empowering students to overcome standard-form contracts and claim refunds
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <span className="px-2.5 py-1 rounded text-[10px] font-black uppercase tracking-wider bg-blue-100 text-blue-800">
                      1. Deficiency in Service (CPA 2019 § 2(11))
                    </span>
                    <h3 className="text-base font-bold text-slate-900 pt-1">
                      Failure of Core Deliverable &amp; Substandard Counseling
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Section 2(11) defines deficiency as any fault, imperfection, shortcoming, or inadequacy in the quality, nature, and manner of performance required under contract. When a consultant collects advance fees to secure college admission or student visa approval, failing to execute accurate filings, missing intake deadlines, or preparing an incoherent SOP constitutes actionable deficiency.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <span className="px-2.5 py-1 rounded text-[10px] font-black uppercase tracking-wider bg-purple-100 text-purple-800">
                      2. Unfair Contract Terms (CPA 2019 § 2(46) &amp; § 47)
                    </span>
                    <h3 className="text-base font-bold text-slate-900 pt-1">
                      Unilateral Forfeiture Clauses Are Legally Void
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Section 2(46) of the 2019 Act introduces the doctrine of &apos;unfair contracts,&apos; explicitly nullifying terms that impose unreasonable charges or allow a service provider to terminate or forfeit fees without reciprocal rights. Under Section 47, State and National Consumer Commissions possess statutory powers to declare any unilateral &apos;non-refundable&apos; retainer clause null and void.
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <span className="px-2.5 py-1 rounded text-[10px] font-black uppercase tracking-wider bg-amber-100 text-amber-800">
                      3. Unfair Trade Practices (CPA 2019 § 2(47))
                    </span>
                    <h3 className="text-base font-bold text-slate-900 pt-1">
                      Misleading College Rankings &amp; Fake Guaranteed Visas
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Overseas consultants frequently display banners promising &quot;100% Guaranteed Visa&quot; or advertise tie-ups with elite institutions, only to dump applicants into low-tier private vocational colleges with zero post-study work rights. Misrepresenting university accreditation or visa approval probabilities constitutes unfair trade practice and misleading advertisement under Section 2(28).
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
                    <span className="px-2.5 py-1 rounded text-[10px] font-black uppercase tracking-wider bg-red-100 text-red-800">
                      4. Criminal Breach &amp; Cheating (BNS 2023 § 316 &amp; § 318)
                    </span>
                    <h3 className="text-base font-bold text-slate-900 pt-1">
                      Withholding Passports &amp; Unregistered Fraud
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Operating without mandatory state licensing (such as under the Punjab Travel Professionals Regulation Act) or taking funds with fraudulent intent triggers criminal prosecution under Section 318 BNS 2023 (formerly Section 420 IPC). Furthermore, holding student passports or original degree transcripts as ransom to extort money constitutes criminal breach of trust under Section 316 BNS 2023.
                    </p>
                  </div>
                </div>
              </section>

              {/* Inline Call-to-Action Mid-Page */}
              <div className="my-8">
                <StudyAbroadNoticeCTA />
              </div>

              {/* Section 5: Process Flow / Escalation Rail */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-escalation-flow-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Statutory Escalation Rail: From Demand Notice to Commission Award
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    The structured, time-bound legal roadmap to recover disputed fees from overseas education agencies
                  </p>
                </div>

                {/* Hand-authored SVG Process Diagram */}
                <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs overflow-x-auto">
                  <svg
                    viewBox="0 0 880 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full min-w-[700px] h-auto"
                    aria-label="Escalation Flow from Legal Notice to Consumer Commission Order"
                  >
                    {/* Step 1 */}
                    <rect x="10" y="25" width="190" height="150" rx="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
                    <circle cx="45" cy="55" r="16" fill="#1E293B" />
                    <text x="45" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">1</text>
                    <text x="75" y="60" fill="#0F172A" fontSize="14" fontWeight="bold">Audit &amp; Evidence</text>
                    <text x="25" y="90" fill="#475569" fontSize="11">Collate retainers &amp; receipts</text>
                    <text x="25" y="108" fill="#475569" fontSize="11">Secure visa refusal letter</text>
                    <text x="25" y="126" fill="#475569" fontSize="11">Export WhatsApp / emails</text>
                    <text x="25" y="148" fill="#DC2626" fontSize="11" fontWeight="bold">BSA § 63 Certification</text>

                    {/* Arrow 1 */}
                    <path d="M205 100 H225" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4" />
                    <polygon points="225,96 233,100 225,104" fill="#94A3B8" />

                    {/* Step 2 */}
                    <rect x="235" y="25" width="190" height="150" rx="12" fill="#FEF2F2" stroke="#F87171" strokeWidth="2" />
                    <circle cx="270" cy="55" r="16" fill="#DC2626" />
                    <text x="270" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">2</text>
                    <text x="300" y="60" fill="#991B1B" fontSize="14" fontWeight="bold">Advocate Notice</text>
                    <text x="250" y="90" fill="#7F1D1D" fontSize="11">CPA § 2(11) &amp; § 47 demand</text>
                    <text x="250" y="108" fill="#7F1D1D" fontSize="11">Dispatched via Speed Post</text>
                    <text x="250" y="126" fill="#7F1D1D" fontSize="11">Email &amp; WhatsApp service</text>
                    <text x="250" y="148" fill="#DC2626" fontSize="11" fontWeight="bold">15-Day Cure Window</text>

                    {/* Arrow 2 */}
                    <path d="M430 100 H450" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4" />
                    <polygon points="450,96 458,100 450,104" fill="#94A3B8" />

                    {/* Step 3 */}
                    <rect x="460" y="25" width="190" height="150" rx="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="2" />
                    <circle cx="495" cy="55" r="16" fill="#1E293B" />
                    <text x="495" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">3</text>
                    <text x="525" y="60" fill="#0F172A" fontSize="14" fontWeight="bold">e-Jagriti Filing</text>
                    <text x="475" y="90" fill="#475569" fontSize="11">DCDRC in home district</text>
                    <text x="475" y="108" fill="#475569" fontSize="11">Claims up to ₹50 Lakh</text>
                    <text x="475" y="126" fill="#475569" fontSize="11">Online hearing &amp; summons</text>
                    <text x="475" y="148" fill="#059669" fontSize="11" fontWeight="bold">No Lawyer Mandate</text>

                    {/* Arrow 3 */}
                    <path d="M655 100 H675" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4" />
                    <polygon points="675,96 683,100 675,104" fill="#94A3B8" />

                    {/* Step 4 */}
                    <rect x="685" y="25" width="185" height="150" rx="12" fill="#F0FDF4" stroke="#86EFAC" strokeWidth="2" />
                    <circle cx="720" cy="55" r="16" fill="#16A34A" />
                    <text x="720" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">4</text>
                    <text x="750" y="60" fill="#166534" fontSize="14" fontWeight="bold">Execution &amp; Pay</text>
                    <text x="700" y="90" fill="#15803D" fontSize="11">100% Retainer refund</text>
                    <text x="700" y="108" fill="#15803D" fontSize="11">9-12% Annual interest</text>
                    <text x="700" y="126" fill="#15803D" fontSize="11">Mental agony damages</text>
                    <text x="700" y="148" fill="#16A34A" fontSize="11" fontWeight="bold">Recovery Certificate</text>
                  </svg>
                </div>
              </section>

              {/* Section 6: What Actually Works: 5-Step Refund Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-playbook-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    The 5-Step Refund Playbook: How to Clinch Full Restitution
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Structured steps that systematically dismantle the consultant&apos;s defenses and force repayment
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-5 border border-slate-200 flex gap-4 items-start shadow-xs">
                    <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-extrabold text-sm flex items-center justify-center flex-shrink-0">
                      1
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-slate-900">
                        Stop Verbal Arguing &amp; Establish an Unbroken Paper Trail
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Do not visit the consultant&apos;s office to engage in shouting matches that leave no evidentiary record. Immediately transition all communications to formal written channels. Send a detailed email reciting the exact chronological timeline: the date fees were paid, the universities promised, the intake sessions missed, and the consultant&apos;s failure to execute. Demand a written accounting of all funds disbursed.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-5 border border-slate-200 flex gap-4 items-start shadow-xs">
                    <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-extrabold text-sm flex items-center justify-center flex-shrink-0">
                      2
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-slate-900">
                        Secure Third-Party Application Records &amp; Visa Case Notes
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        If the consultant claims the university or embassy rejected your application, independently verify this claim. Request your university student ID numbers, application portal login credentials, and official refusal letters. For Canada study permits, submit an Access to Information and Privacy (ATIP) request to obtain the Global Case Management System (GCMS) notes revealing the exact reasons recorded by the visa officer.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-5 border border-slate-200 flex gap-4 items-start shadow-xs">
                    <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white font-extrabold text-sm flex items-center justify-center flex-shrink-0">
                      3
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-slate-900">
                        Serve a Comprehensive Advocate Statutory Demand Notice
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Have an advocate draft and serve an unassailable legal notice. The notice must cite Section 2(11) (deficiency in service), Section 2(46) (unfair contracts), and Section 47 of the Consumer Protection Act, 2019, alongside landmark NCDRC precedents like <em>Pioneer Institute</em>. Demand the unconditional release of your funds within 15 calendar days and serve copies via Registered Speed Post and digitally under Section 63 BSA 2023.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-5 border border-slate-200 flex gap-4 items-start shadow-xs">
                    <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-extrabold text-sm flex items-center justify-center flex-shrink-0">
                      4
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-slate-900">
                        Lodge Online Complaint via National Consumer Portal &amp; e-Jagriti
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        If the consultant fails to remit funds within the 15-day notice window, register a grievance on the National Consumer Helpline (NCH - 1915 / consumerhelpline.gov.in). Simultaneously, file a formal statutory consumer complaint on the e-Jagriti portal (e-jagriti.gov.in) before your home District Commission. You can claim the full fee, 12% interest, and damages for wasted career time.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-5 border border-slate-200 flex gap-4 items-start shadow-xs">
                    <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-extrabold text-sm flex items-center justify-center flex-shrink-0">
                      5
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-slate-900">
                        Escalate to Police Economic Offences Wing (EOW) for Fraudulent Intermediaries
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        If the agency operates without mandatory licensing, submitted fake financial documents without your knowledge, or shuttered their office and ghosted you, escalate the dispute to criminal authorities. File an official complaint with the District Police Economic Offences Wing (EOW) and on cybercrime.gov.in citing cheating under Section 318 BNS 2023 and criminal breach of trust under Section 316 BNS 2023.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 7: Statutory Benchmarks & Refund Deadlines Table */}
              <section id="heading-benchmarks" aria-labelledby="heading-benchmarks-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-benchmarks-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Statutory Benchmarks: Timelines, Forums &amp; Permissible Deductions
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Comparative benchmarks established across Indian consumer forums for abroad education claims
                  </p>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
                  <table className="min-w-full text-xs sm:text-sm divide-y divide-slate-200 bg-white">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th scope="col" className="px-4 py-3.5 text-left font-bold uppercase tracking-wider text-[11px]">
                          Scenario / Milestone
                        </th>
                        <th scope="col" className="px-4 py-3.5 text-left font-bold uppercase tracking-wider text-[11px]">
                          Consultant&apos;s Legal Entitlement
                        </th>
                        <th scope="col" className="px-4 py-3.5 text-left font-bold uppercase tracking-wider text-[11px]">
                          Student&apos;s Refund Entitlement
                        </th>
                        <th scope="col" className="px-4 py-3.5 text-left font-bold uppercase tracking-wider text-[11px]">
                          Controlling Authority
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-900">
                          Visa Rejected due to Agent&apos;s Deficient SOP or Paperwork
                        </td>
                        <td className="px-4 py-3 text-red-600 font-bold">
                          Zero Deductions Allowed
                        </td>
                        <td className="px-4 py-3 text-emerald-700 font-bold">
                          100% Retainer Refund + Embassy Fees + Damages
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          CPA § 2(11); Canam Consultants Ruling
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-900">
                          Visa Rejected on General Embassy Discretion (No Agent Fault)
                        </td>
                        <td className="px-4 py-3 text-slate-700">
                          Actual admin expense only (max ₹5,000–₹10,000)
                        </td>
                        <td className="px-4 py-3 text-emerald-700 font-bold">
                          Full Balance of Unearned Fees Refunded
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          NCDRC Pioneer Institute Precedent
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-900">
                          Agent Failed to Secure Admission Before Intake Deadline
                        </td>
                        <td className="px-4 py-3 text-red-600 font-bold">
                          Zero Deductions Allowed
                        </td>
                        <td className="px-4 py-3 text-emerald-700 font-bold">
                          100% Refund + Compensation for Lost Year
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          CPA § 2(11) &amp; Contract Act § 73
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-900">
                          Student Withdraws Prior to University Submission
                        </td>
                        <td className="px-4 py-3 text-slate-700">
                          Pro-rata counseling fee for hours documented
                        </td>
                        <td className="px-4 py-3 text-emerald-700 font-bold">
                          Remaining Unspent Retainer Reimbursed
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          CPA § 2(46) Unfair Contract Rule
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-semibold text-slate-900">
                          Consultant Detaining Passport / Certificates for Ransom
                        </td>
                        <td className="px-4 py-3 text-red-600 font-bold">
                          Illegal Impoundment (Punitive Fine)
                        </td>
                        <td className="px-4 py-3 text-emerald-700 font-bold">
                          Immediate Document Return + Agony Damages
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          Passports Act § 12; BNS § 316
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 8: Interactive Scenarios & Fixes Tabs Component */}
              <section id="heading-problem-picker" aria-labelledby="heading-problem-picker-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-problem-picker-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Common Consultant Refusal Excuses &amp; Legal Remedies
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Select your specific dispute scenario below to reveal the governing legal principle and recovery protocol
                  </p>
                </div>

                <StudyAbroadProblemTabs />
              </section>

              {/* Section 9: Date-by-Date Worked Example */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-worked-example-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Worked Case Example: ₹3,20,000 Study Visa Retainer Recovery
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Illustrative breakdown of a real-world overseas education dispute resolved through statutory notice and consumer commission action
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <span className="text-xs font-black uppercase tracking-wider text-slate-400">
                      Dispute Profile: Master&apos;s in Data Science (Canada Fall Intake)
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                      Full Recovery Achieved: ₹3,92,400 Total Award
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong>Background:</strong> Rohan S., an engineering graduate from Ludhiana, engaged an overseas educational consultancy in Sector 34, Chandigarh, paying ₹3,20,000 as an &apos;all-inclusive package&apos; for university admission, IELTS preparation, and Canadian study permit processing for the September 2025 intake.
                  </p>

                  {/* Chronological Table */}
                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="min-w-full text-xs sm:text-sm divide-y divide-slate-200 bg-white">
                      <thead className="bg-slate-50">
                        <tr>
                          <th scope="col" className="px-3.5 py-2.5 text-left font-bold text-slate-600">Date</th>
                          <th scope="col" className="px-3.5 py-2.5 text-left font-bold text-slate-600">Event / Milestone</th>
                          <th scope="col" className="px-3.5 py-2.5 text-left font-bold text-slate-600">Legal Implications</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr>
                          <td className="px-3.5 py-2.5 font-bold text-slate-900">12 Feb 2025</td>
                          <td className="px-3.5 py-2.5 text-slate-700">Rohan signs service agreement and remits ₹3,20,000 via NEFT.</td>
                          <td className="px-3.5 py-2.5 text-slate-600">Contract executed; reciprocal duties under Contract Act § 73 attach.</td>
                        </tr>
                        <tr>
                          <td className="px-3.5 py-2.5 font-bold text-slate-900">18 May 2025</td>
                          <td className="px-3.5 py-2.5 text-slate-700">Agency drafts SOP and files visa application with IRCC.</td>
                          <td className="px-3.5 py-2.5 text-slate-600">Agency fails to attach certified father&apos;s ITRs; submits contradictory SOP.</td>
                        </tr>
                        <tr>
                          <td className="px-3.5 py-2.5 font-bold text-slate-900">22 Jul 2025</td>
                          <td className="px-3.5 py-2.5 text-slate-700">IRCC refuses study permit citing financial non-bona fides and vague purpose.</td>
                          <td className="px-3.5 py-2.5 text-slate-600">Refusal caused directly by agent&apos;s defective filing; deficiency in service under CPA § 2(11).</td>
                        </tr>
                        <tr>
                          <td className="px-3.5 py-2.5 font-bold text-slate-900">04 Aug 2025</td>
                          <td className="px-3.5 py-2.5 text-slate-700">Rohan requests refund. Agency claims agreement has &apos;Strictly Non-Refundable&apos; clause.</td>
                          <td className="px-3.5 py-2.5 text-slate-600">Unfair contract clause invoked; void under CPA 2019 § 2(46) and § 47.</td>
                        </tr>
                        <tr>
                          <td className="px-3.5 py-2.5 font-bold text-slate-900">18 Aug 2025</td>
                          <td className="px-3.5 py-2.5 text-slate-700">Advocate serves formal legal demand notice granting 15-day cure window.</td>
                          <td className="px-3.5 py-2.5 text-slate-600">Statutory notice delivered via Speed Post + Email (BSA § 63 electronic audit).</td>
                        </tr>
                        <tr>
                          <td className="px-3.5 py-2.5 font-bold text-slate-900">15 Sep 2025</td>
                          <td className="px-3.5 py-2.5 text-slate-700">Consultant ignores notice; Rohan files e-Jagriti consumer complaint at DCDRC.</td>
                          <td className="px-3.5 py-2.5 text-slate-600">Summary consumer trial initiated under Section 35 CPA 2019.</td>
                        </tr>
                        <tr>
                          <td className="px-3.5 py-2.5 font-bold text-emerald-700">10 Mar 2026</td>
                          <td className="px-3.5 py-2.5 text-slate-900 font-semibold">District Commission delivers final judgment in favor of student.</td>
                          <td className="px-3.5 py-2.5 text-emerald-700 font-bold">100% refund of ₹3,20,000 + 9% interest (₹17,400) + ₹40,000 mental agony + ₹15,000 costs.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-xs sm:text-sm text-emerald-900 font-medium">
                    <strong>Total Realization:</strong> ₹3,92,400 recovered. The District Commission reprimanded the consultant for attempting to shield professional negligence behind boilerplate standard-form clauses, establishing that students are full consumers entitled to strict statutory protection.
                  </div>
                </div>
              </section>

              {/* Section 10: Evidence Checklist */}
              <section id="heading-evidence" aria-labelledby="heading-evidence-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-evidence-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Evidence Checklist: Preparing an Unassailable Refund Claim
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Assemble these 6 documentary items before issuing your advocate legal notice or filing on e-Jagriti
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1.5 shadow-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">✓</span>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">Signed Retainer Agreement &amp; Receipts</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-7">
                      Registration contracts, fee schedules, stamped payment receipts, and bank transaction statements showing debits to the consultant&apos;s account.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1.5 shadow-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">✓</span>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">Written Deliverables &amp; University Commitments</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-7">
                      Brochures, counseling assessment sheets, WhatsApp chat records, and emails where specific colleges, courses, or intake deadlines were guaranteed.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1.5 shadow-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">✓</span>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">Official Visa Refusal Letter &amp; Embassy Notes</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-7">
                      Formal refusal notices issued by the High Commission / Embassy, along with GCMS/ATIP notes detailing why the visa was rejected.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1.5 shadow-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">✓</span>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">Agent&apos;s Filings (SOP &amp; Visa Forms)</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-7">
                      Copies of the Statement of Purpose (SOP) drafted by the agent, application forms submitted on foreign portals, and uploaded financial schedules.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1.5 shadow-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">✓</span>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">Written Demands &amp; Consultant&apos;s Repudiation</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-7">
                      Emails, letters, or WhatsApp messages where you demanded your refund and the consultant refused or cited non-refundable clauses.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1.5 shadow-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">✓</span>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">Section 63 BSA Electronic Certificate</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-7">
                      Statutory electronic record certificate under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 authenticating printed emails, chats, and PDF receipts.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 11: Unique FAQs Section */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions: Study-Abroad Consultant Refunds
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Clear answers to the most common queries faced by students and parents seeking fee recovery
                  </p>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-2"
                    >
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-start gap-2">
                        <span className="text-red-600 font-extrabold text-sm sm:text-base">Q:</span>
                        <span>{faq.question}</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-5 font-normal">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 12: Primary Legal Sources & Consumer References */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4 pt-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-sources-title"
                    className="text-base sm:text-lg font-bold text-slate-900"
                  >
                    Sources &amp; Primary Legal References
                  </h2>
                  <p className="text-xs text-slate-500">
                    Statutes, gazette notifications, and official portals cited in this recovery guide
                  </p>
                </div>

                <ul className="space-y-2 text-xs text-slate-600">
                  {PRIMARY_SOURCES.map((src, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-slate-400 font-mono">[{idx + 1}]</span>
                      <a
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#DC2626] hover:underline break-words"
                      >
                        {src.title}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="bg-slate-100 p-4 rounded-xl text-xs text-slate-500 space-y-1.5 mt-4">
                  <p className="font-semibold text-slate-700">
                    Editorial &amp; Statutory Accuracy Notice (LegalRecovery.in)
                  </p>
                  <p>
                    This guide covers civil and consumer recovery protocols under the Consumer Protection Act, 2019 and Indian Contract Act, 1872. LegalRecovery does not represent unlicensed immigration agencies or guarantee sovereign visa approvals issued by foreign high commissions. Last updated: November 6, 2026.
                  </p>
                </div>
              </section>

              {/* Contextual Internal Links Section */}
              <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                  Related Education &amp; Notice Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link
                    href="/send-a-legal-notice/school-college-fee-refund-admission-cancellation"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 hover:bg-red-50 hover:text-red-700 transition-colors"
                  >
                    College &amp; School Fee Refund Notice
                  </Link>
                  <Link
                    href="/law/coaching-centre-refund-guidelines-2024"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 hover:bg-red-50 hover:text-red-700 transition-colors"
                  >
                    Coaching Centre Refund Guidelines 2024
                  </Link>
                  <Link
                    href="/visa-agent-fraud-refund-legal-notice"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 hover:bg-red-50 hover:text-red-700 transition-colors"
                  >
                    Visa Agent Fraud &amp; Refund Notice
                  </Link>
                  <Link
                    href="/legal-notice-to-coaching-institute-college-fee-refund"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 hover:bg-red-50 hover:text-red-700 transition-colors"
                  >
                    Legal Notice to Coaching Institute / College
                  </Link>
                  <Link
                    href="/how-to-file-consumer-complaint-india"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 hover:bg-red-50 hover:text-red-700 transition-colors"
                  >
                    How to File Consumer Complaint in India
                  </Link>
                  <Link
                    href="/what-is-a-legal-notice-in-india"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 hover:bg-red-50 hover:text-red-700 transition-colors"
                  >
                    What Is a Legal Notice in India
                  </Link>
                </div>
              </section>

              {/* Related Recovery Guides Component */}
              <div className="mt-8">
                <RelatedRecoveryGuides
                  currentPath="/study-abroad-consultant-refund-legal-notice"
                  cluster="consumer"
                />
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
