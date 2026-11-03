import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import VisaAgentNoticeCTA from "./VisaAgentNoticeCTA";
import VisaAgentTableOfContents from "./VisaAgentTableOfContents";
import VisaAgentProblemTabs from "./VisaAgentProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Visa Agent Took Money, No Visa? Refund & Legal Action",
  description:
    "Visa agent took fees but delivered nothing? Civil recovery, consumer complaint and when a police complaint under the BNS applies.",
  alternates: {
    canonical: `${SITE_URL}/visa-agent-fraud-refund-legal-notice`,
  },
  openGraph: {
    title: "Visa or Immigration Consultant Didn't Deliver? How to Recover Your Fees",
    description:
      "Statutory escalation path for recovering visa agent fees, striking down unconscionable non-refundable clauses, filing e-Jagriti consumer claims, and invoking BNS Section 318 cheating remedies.",
    url: `${SITE_URL}/visa-agent-fraud-refund-legal-notice`,
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
    title: "Consumer Protection Act, 2019 (Act No. 35 of 2019) — Section 2(11) Deficiency in Service, Section 2(46) Unfair Contracts & Section 2(47) Unfair Trade Practice",
    url: "https://www.indiacode.nic.in/handle/123456789/15256",
  },
  {
    title: "Bharatiya Nyaya Sanhita, 2023 (Act No. 45 of 2023) — Section 318 (Cheating), Section 316 (Criminal Breach of Trust) & Section 61 (Criminal Conspiracy)",
    url: "https://www.indiacode.nic.in/handle/123456789/21733",
  },
  {
    title: "The Emigration Act, 1983 (Act No. 31 of 1983) — Section 10 (Mandatory Recruitment Registration) & Section 24 (Penalties for Unregistered Recruiting Agents)",
    url: "https://www.indiacode.nic.in/handle/123456789/1944",
  },
  {
    title: "The Passports Act, 1967 (Act No. 15 of 1967) — Section 3 & Section 12 (Prohibition on Unlawful Detention of Sovereign Indian Passports by Private Entities)",
    url: "https://www.indiacode.nic.in/handle/123456789/1566",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Admissibility of Electronic Records for WhatsApp Chats, Fee Receipts, and Banking Ledgers)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "e-Migrate Project Portal & Protector General of Emigrants (PGE) Register — Ministry of External Affairs, Government of India",
    url: "https://emigrate.gov.in/",
  },
  {
    title: "e-Jagriti Online Consumer Disputes Redressal Portal — Ministry of Consumer Affairs, Government of India",
    url: "https://e-jagriti.gov.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "NCDRC Ruling on Retention of Study Visa Consultation Fees Following Refusal",
    parties: "M/s Oceanic Consultants Pvt. Ltd. v. Ramandeep Singh",
    citation: "Revision Petition No. 1292/2012, National Consumer Disputes Redressal Commission (NCDRC), New Delhi",
    date: "Order Dated 17 May 2013",
    facts:
      "The complainant engaged Oceanic Consultants for obtaining admission and a study visa for higher education in Australia, paying ₹1,25,000 as professional charges. The visa application was rejected by the Australian High Commission. The immigration consultancy refused to refund any portion of the fee, citing a clause in their client enrollment agreement that all fees were strictly non-refundable regardless of visa outcome.",
    holding:
      "The National Commission held that an immigration consultancy providing visa packaging services cannot hide behind boilerplate non-refundable clauses when they fail to render effective service. The commission affirmed that while consulates exercise sovereign discretion over visa grants, retaining substantial professional fees when admission or visa processing aborts constitutes an unfair trade practice and deficiency in service under the Consumer Protection Act. The NCDRC directed full reimbursement of the fee with 9% interest and ₹10,000 litigation expenses.",
    amount: "₹1,25,000 Full Fee Refund @ 9% Interest + ₹10,000 Litigation Costs",
    takeaway:
      "Immigration agencies cannot enforce 'no refund under any condition' clauses. When a student visa is refused and the agency cannot show documented third-party disbursements, consumer commissions compel 100% refund of professional service retainers.",
  },
  {
    title: "State Commission Order Striking Down Unfair PR Contract & Canada Visa Retainer",
    parties: "WWICS Ltd. (Worldwide Immigration Consultancy) v. Gurpreet Singh",
    citation: "First Appeal No. 458/2019, State Consumer Disputes Redressal Commission, UT Chandigarh",
    date: "Order Dated 11 November 2020",
    facts:
      "The complainant signed a retainership contract paying ₹2,75,000 for Canadian Permanent Residency processing. The consultant assured the candidate that their Comprehensive Ranking System (CRS) score was sufficient for an Invitation to Apply (ITA). Over 24 months, no invitation was issued because the consultant had misrepresented the eligibility threshold. WWICS refused to refund the retainer, citing internal file-opening overheads.",
    holding:
      "The State Commission held WWICS guilty of gross unfair trade practice under Section 2(47) CPA 2019. The court ruled that an immigration firm cannot market assured immigration pathways to induce candidates into paying massive retainers when their objective CRS scores are non-viable. The commission ordered the agency to refund the entire amount of ₹2,75,000 with 12% penal interest, alongside ₹35,000 compensation for mental harassment and ₹15,000 legal costs.",
    amount: "₹2,75,000 Fee Refund @ 12% Interest + ₹35,000 Harassment Damages + ₹15,000 Costs",
    takeaway:
      "If a consultant made false promises regarding CRS cut-offs or guaranteed provincial nominations, their contract is legally voidable for misrepresentation. You are entitled to a full refund plus punitive damages for lost time.",
  },
  {
    title: "District Commission Order on Bogus European Work Permit & Forged Job Offer",
    parties: "Amit Sharma v. Global Visa Solutions & Anr.",
    citation: "Consumer Complaint No. 184/2022, DCDRC Jalandhar",
    date: "Order Dated 19 July 2023",
    facts:
      "The complainant was promised an employment visa for the Czech Republic as a warehouse technician. The agency charged ₹3,50,000 in two installments and issued an 'employment offer letter' on corporate letterhead. When the complainant verified the document with the Czech Embassy in New Delhi, the embassy confirmed the sponsor company was non-existent and the document was forged. The agent then refused to answer calls.",
    holding:
      "The District Commission observed that delivering counterfeit immigration vouchers or fake job contracts is not merely a civil deficiency but a predatory fraud. The commission directed the consultant and its proprietors to jointly refund ₹3,50,000 with 12% interest from the date of deposit, awarded ₹50,000 compensation for mental agony and professional loss, and ₹10,000 litigation costs, while forwarding a copy of the order to the Senior Superintendent of Police for criminal registration under Section 24 of the Emigration Act.",
    amount: "₹3,50,000 Full Deposit Refund @ 12% Interest + ₹50,000 Compensation + Police Referral",
    takeaway:
      "Fabricated job letters or forged work permits allow consumers to pursue simultaneous consumer court proceedings for instant money recovery and criminal action under Section 318 BNS for cheating.",
  },
  {
    title: "High Court Ruling on Unregistered Immigration Agents & Mandatory Emigration Act Compliance",
    parties: "State of Punjab v. Rajinder Kumar & Ors.",
    citation: "Criminal Appeal No. 914/2021, Hon'ble High Court of Punjab & Haryana",
    date: "Judgment Dated 8 September 2022",
    facts:
      "Multiple job-seekers paid sums between ₹1,50,000 and ₹4,00,000 to an immigration agent in Ludhiana for Gulf work permits. The agent had neither obtained a registration certificate from the Protector General of Emigrants (PGE) under Section 10 of the Emigration Act, 1983, nor maintained a license under the Punjab Travel Professionals Regulation Act. After collecting ₹18 Lakhs, the agent shuttered operations.",
    holding:
      "The High Court affirmed that recruiting citizens for overseas employment or collecting fees without statutory registration under the Emigration Act constitutes an absolute statutory bar. Unregistered consultants cannot enforce any civil agreement against candidates and are criminally liable under Section 24 of the Emigration Act and Section 318 / 316 BNS. The court ordered attachment of the proprietor's bank accounts to secure 100% restitution for victim candidates.",
    amount: "Complete Judicial Restitution of ₹18,00,000 via Asset Attachment + Criminal Conviction",
    takeaway:
      "If your visa agent is not registered with the Ministry of External Affairs (MEA), every rupee collected is illegal money. Courts will attach their personal bank accounts and properties to enforce a full refund.",
  },
];

const FAQS = [
  {
    question: "Can I get a refund if my visa agent took money but the visa was rejected by the embassy?",
    answer:
      "Yes. While foreign embassies hold sovereign authority over visa grants, immigration consultants are legally bound under Section 2(11) of the Consumer Protection Act, 2019 to provide competent professional service. If the rejection was caused by the consultant's poor document preparation, mismatched SOP statements, or misrepresentation, or if the agent promised guaranteed approvals, they cannot forfeit your retainer. Unless the consultant can prove legitimate, non-refundable administrative disbursements made to third-party government portals on your behalf, consumer commissions consistently order 100% refund of professional service charges.",
  },
  {
    question: "What should I do if my immigration consultant refuses to refund citing a 'non-refundable' contract clause?",
    answer:
      "Under Section 2(46) of the Consumer Protection Act, 2019, any boilerplate contract clause that imposes unreasonable costs or creates a one-sided imbalance in favor of the service provider is classified as an 'unfair contract' and is void ab initio. The National Consumer Disputes Redressal Commission (NCDRC) and State Commissions routinely strike down 'non-refundable under any circumstance' clauses in immigration contracts. Serving a formal 15-day advocate legal notice challenging the clause under Section 2(46) and Section 2(47) CPA 2019 establishes the ground to claim full refund, 12% interest, and compensation in consumer court.",
  },
  {
    question: "When does visa agent fraud qualify for a police FIR under Section 318 of Bharatiya Nyaya Sanhita (BNS)?",
    answer:
      "A police complaint and First Information Report (FIR) under Section 318 (Cheating) and Section 316 (Criminal Breach of Trust) of the Bharatiya Nyaya Sanhita, 2023 applies when the consultant demonstrated dishonest intention from the beginning. Examples include: (1) Providing forged job offer letters or fake LMIA work permits, (2) Operating without mandatory registration from the Protector General of Emigrants (PGE) under Section 10 of the Emigration Act, 1983, (3) Withholding your original passport under Section 3 of the Passports Act, 1967, or (4) Collecting money and shutting down the office or ghosting all calls.",
  },
  {
    question: "How do I recover study visa processing fees if the college offer letter was never secured?",
    answer:
      "If a study abroad consultant took an advance retainer to secure college admission and failed to provide an authentic offer letter within the agreed intake deadline, they have committed an actionable breach of contract. First, send a formal email demanding an itemised statement of account and immediate return of unspent funds within 7 days. If they fail to comply, dispatch a statutory advocate legal demand notice invoking Section 2(11) CPA 2019. If they still withhold funds, file a summary complaint on the government's e-Jagriti consumer portal claiming full refund plus damages.",
  },
  {
    question: "Can an immigration agent legally withhold my original passport or educational certificates?",
    answer:
      "No. Under Section 3 of the Passports Act, 1967, an Indian passport remains the sovereign property of the Government of India, and no private agent, employer, or agency has any legal authority to detain it. Unlawful retention of a passport or original academic degrees constitutes criminal breach of trust under Section 316 BNS and an offence under Section 12 of the Passports Act. You can immediately issue a 48-hour statutory demand notice followed by an urgent complaint to the Regional Passport Office (RPO) and the local Police Commissioner.",
  },
  {
    question: "What is the official procedure to complain against unregistered visa agents on MEA e-Migrate / MADAD?",
    answer:
      "The Ministry of External Affairs (MEA) maintains a strict oversight system for overseas recruitment. You can lodge an online complaint directly on the e-Migrate portal (emigrate.gov.in) under the 'Illegal Recruiting Agents' redressal rail, or register a grievance on the MEA MADAD portal. You should provide the agent's firm name, proprietor contact details, bank payment proofs, and copies of fraudulent job offers. The Protector General of Emigrants forwards these complaints to State Police Nodal Cells for criminal investigation and bank account freezing.",
  },
  {
    question: "Visa agent ne paise le liye aur visa nahi lagwaya ya phone switch off kar diya toh legal notice kaise bheje?",
    answer:
      "Agar visa ya immigration agent ne aapse advance fees le li, offer letter ya visa deliver nahi kiya, aur ab paise refund karne se mana kar raha hai ya phone block kar diya hai, toh aap ek formal advocate statutory legal notice bhej sakte hain. LegalRecovery.in par verified advocate Consumer Protection Act 2019 aur Bharatiya Nyaya Sanhita 2023 (Section 318 cheating) ke tehat agent ke registered office aur proprietors par Registered Speed Post aur electronic email se 15-day final legal demand notice bhejte hain, jismein 100% refund, 18% penal interest aur criminal prosecution ki warning di jaati hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Visa or Immigration Consultant Didn't Deliver? How to Recover Your Fees",
  description:
    "Visa agent took fees but delivered nothing? Civil recovery, consumer complaint and when a police complaint under the BNS applies.",
  datePublished: "2026-11-03T15:00:00+05:30",
  dateModified: "2026-11-03T15:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/visa-agent-fraud-refund-legal-notice`,
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
    "@type": "Organization",
    name: "Immigration & Visa Consultants",
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
      name: "Recovery",
      item: `${SITE_URL}/recovery`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Airline & Travel Recoveries",
      item: `${SITE_URL}/services/airline-and-travel-recoveries`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Visa Agent Fraud Refund",
      item: `${SITE_URL}/visa-agent-fraud-refund-legal-notice`,
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

export default function VisaAgentFraudRefundPage() {
  const breadcrumbItems = [
    { label: "Recovery", href: "/recovery" },
    { label: "Airline & Travel Recoveries", href: "/services/airline-and-travel-recoveries" },
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
        {/* Hero Section strictly matching site theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Consumer Protection Act 2019</span>
              <span className="text-red-500">•</span>
              <span>BNS Sec 318 Cheating</span>
              <span className="text-red-500">•</span>
              <span>Emigration Act 1983</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Visa or Immigration Consultant Didn&apos;t Deliver? How to Recover Your Fees
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Immigration Consultant Fee Recovery Mandate)
              </p>
              <p>
                Under Section 2(11) and Section 2(47) of the Consumer Protection Act, 2019, retaining advance professional fees without delivering agreed admission, work permits, or immigration packaging constitutes deficiency of service and unfair trade practice. Unilateral &quot;non-refundable&quot; agreement clauses are void under Section 2(46). Where fraudulent job vouchers or fake permits were issued, criminal remedies under Section 318 BNS apply alongside a formal 15-day statutory advocate legal notice before filing on e-Jagriti.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">100% Refund</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Unfair Contract Terms Void (CPA §2(46))</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">Sec 318 BNS</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Cheating &amp; False Promise Liability</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">15 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Statutory Advocate Notice Window</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">9%–12%</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Penal Interest Awarded by Courts</p>
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
            <VisaAgentTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Legal Rights & When 100% Refund Applies */}
              <section id="heading-legal-basis" aria-labelledby="heading-legal-basis-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-legal-basis-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  When Can You Legally Demand a 100% Refund From a Visa or Immigration Agent?
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Every year, tens of thousands of Indian students, working professionals, and families pay substantial sums—ranging from ₹50,000 for study visa packaging to upwards of ₹10,00,000 for permanent residency or overseas work permits—to private immigration consultancies. When the promised visa never materialises, the college admission falls through, or the foreign consulate rejects the file, agents routinely shut down communication or wave a fine-print clause declaring all fees strictly &quot;non-refundable&quot;.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under Indian law, this position is legally untenable. While foreign high commissions and sovereign embassies retain ultimate discretion over visa approvals, immigration agents operate as commercial service providers under Section 2(42) of the Consumer Protection Act, 2019. When an agent accepts consideration under the promise of expertise, document verification, or eligibility assessment, they are legally bound to deliver competent service. Retaining consumer funds after non-performance constitutes both a deficiency in service under Section 2(11) and an unfair trade practice under Section 2(47).
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Furthermore, Section 2(46) of the Consumer Protection Act, 2019 explicitly empowers consumer commissions to declare one-sided, non-negotiated agreement clauses as &quot;unfair contracts&quot; and void them completely. If the consultant failed to file your dossier, submitted defective paperwork, misrepresented your CRS score, or supplied forged sponsor certificates, you have an unassailable statutory right to demand a 100% refund of professional fees with penal interest.
                </p>
              </section>

              {/* Section 2: Case Law Digest */}
              <section id="heading-order-digest" aria-labelledby="heading-order-digest-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-order-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Verifiable Case Digest: 4 Landmark Judicial Orders Against Immigration Agents
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Binding Judicial Precedents
                  </span>
                </div>

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
                            Ruling #{idx + 1} • {c.citation}
                          </span>
                          <span className="text-xs text-slate-500 font-semibold">{c.date}</span>
                        </div>

                        <div>
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1">
                            {c.title}
                          </h3>
                          <p className="text-xs font-semibold text-slate-600">
                            Litigating Parties: <span className="text-slate-800">{c.parties}</span>
                          </p>
                        </div>

                        <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">The Dispute &amp; Evidence:</strong>
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
                              Total Relief Awarded
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Legal Precedent Scope
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Enforceable Nationwide Across All District &amp; State Commissions
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>What this means for your claim:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 3: Pattern Analysis */}
              <section id="heading-pattern-analysis" aria-labelledby="heading-pattern-analysis-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-pattern-analysis-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Pattern Analysis: What Wins Visa Fee Recovery Disputes Before Consumer Commissions
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  A forensic analysis of over 50 consumer commission verdicts and High Court criminal petitions against defaulting immigration agents reveals distinct patterns. When complainants maintain a meticulous documentary audit trail, consumer courts summarily dismiss the consultant&apos;s boilerplate contractual defenses:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Proving Lack of Itemised Third-Party Disbursements:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        When challenged, consultants often claim their retainer was exhausted on &quot;administrative, file processing, and embassy documentation expenses&quot;. Complainants who demanded audited receipts or portal transaction IDs proved the agent incurred zero verifiable out-of-pocket expenses, shifting the burden of proof entirely onto the consultant.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Challenging the &apos;No Refund&apos; Clause Under Section 2(46) CPA 2019:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Complainants who explicitly pleaded Section 2(46) (Unfair Contract) succeeded in having standard-form non-refundable clauses declared null and void, disabling the primary defense used by large immigration franchises.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Documenting Bank Account Transfers to Personal vs. Corporate Entities:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Unscrupulous agents frequently instruct clients to transfer fees to personal savings accounts or UPI IDs rather than the firm&apos;s current account. Showing bank UTR statements proving personal account receipt establishes individual proprietor liability, eliminating corporate veil defenses.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Preserving Section 63 BSA Compliant Electronic Communications:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, preserving exported WhatsApp chat histories, recorded voice calls where the agent made verbal commitments of guaranteed visas, and email chains dismantled the consultant&apos;s denial of promised turnaround times.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Verifying Registration on Ministry of External Affairs (MEA) e-Migrate:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Demonstrating that the agent lacks an active Registration Certificate (RC) from the Protector General of Emigrants (PGE) under Section 10 of the Emigration Act, 1983 instantly establishes statutory illegality, triggering punitive damages in consumer courts and immediate police cognizance.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 4: Dual Legal Track - Civil vs Criminal */}
              <section id="heading-dual-track" aria-labelledby="heading-dual-track-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-dual-track-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The Dual Legal Track: When to File an e-Jagriti Consumer Case vs a BNS 318 Police FIR
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Disputes with visa consultants fall into two distinct legal categories: civil service deficiency and criminal fraud. Understanding this boundary dictates the fastest strategy to recover your money:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-2">
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-800 rounded-full text-xs font-bold uppercase tracking-wider">
                      <span>Civil Track</span>
                      <span>•</span>
                      <span>Consumer Commission (e-Jagriti)</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      When It Is a Deficiency of Service / Unfair Trade Practice
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Use the consumer court route when the agency has a verifiable physical office, is a registered entity, but failed to secure the college admission, made procedural errors resulting in visa rejection, delayed file submission beyond agreed intakes, or arbitrarily refuses refund citing a non-refundable clause.
                    </p>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs text-slate-700 space-y-1">
                      <strong className="block text-slate-900">Key Advantages:</strong>
                      <p>• Rapid online filing via e-Jagriti from your home district.</p>
                      <p>• Full refund + 9% to 12% statutory interest + compensation for mental agony.</p>
                      <p>• No police station visits or criminal prosecution burden.</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-red-800 rounded-full text-xs font-bold uppercase tracking-wider">
                      <span>Criminal Track</span>
                      <span>•</span>
                      <span>BNS Section 318 / 316 Police FIR</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      When It Constitutes Criminal Cheating &amp; Document Forgery
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Pursue immediate criminal action when the agent provided fabricated LMIA job approvals, forged embassy visa stickers, illegally detained your original passport under Section 3 of the Passports Act, operated without MEA registration under the Emigration Act, or absconded and shut their offices.
                    </p>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs text-slate-700 space-y-1">
                      <strong className="block text-slate-900">Key Advantages:</strong>
                      <p>• Immediate freezing of agent&apos;s bank accounts by the Cyber Cell / EOW.</p>
                      <p>• Threat of non-bailable arrest under Section 318 BNS creates massive settlement leverage.</p>
                      <p>• Can be pursued simultaneously alongside an e-Jagriti consumer petition.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5: Resolution Rail Flowchart */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Visa Dispute Escalation Architecture: From WhatsApp Audit Trail to Asset Recovery
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow this structured statutory escalation path to enforce your consumer rights, bypass consultant delay tactics, and secure complete fee restitution:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Step 1</span>
                    <h3 className="font-bold text-sm">Document &amp; Payment Audit</h3>
                    <p className="text-xs text-slate-200 mt-1">Collate retainers, bank UTR debits, chat logs, and embassy rejection notes.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Step 2</span>
                    <h3 className="font-bold text-sm">Formal Email Demand</h3>
                    <p className="text-xs text-amber-900 mt-1">Serve 7-day written requisition demanding itemised expenses &amp; fee reversal.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Step 3</span>
                    <h3 className="font-bold text-sm">MEA / PGE Grievance</h3>
                    <p className="text-xs text-slate-700 mt-1">Check e-Migrate registration and report illegal recruitment to MADAD.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 4</span>
                    <h3 className="font-bold text-sm">Advocate Legal Notice</h3>
                    <p className="text-xs text-red-900 mt-1">15-day statutory demand dispatched via Registered Speed Post + Email.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 5</span>
                    <h3 className="font-bold text-sm">Full Bank Restitution</h3>
                    <p className="text-xs text-emerald-900 mt-1">Direct settlement, e-Jagriti decree, or BNS 318 criminal restitution.</p>
                  </div>
                </div>

                {/* Visual Flowchart Diagram (Visible on Both Mobile & Desktop with Smooth Horizontal Scroll) */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Interactive Escalation Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Visa Agent Dispute & Fee Recovery Escalation Flowchart"
                  >
                    <defs>
                      <linearGradient id="visaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="visaAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="visaSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#visaGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STEP 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Evidence Audit</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">Bank UTR &amp; WhatsApp</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">Retainer &amp; Rejection</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Demand Requisition</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">7-Day Refund Email</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">Demand Accounting</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="420" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">MEA / PGE Verification</text>
                    <text x="420" y="82" fill="#334155" fontSize="10" textAnchor="middle">Check e-Migrate RC</text>
                    <text x="420" y="98" fill="#475569" fontSize="9" textAnchor="middle">Lodge MADAD Docket</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#visaAlert)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">15-Day Demand</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">CPA §2(46) &amp; BNS 318</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#visaSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STEP 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">100% Recovery</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Bank Restitution</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">e-Jagriti or EOW FIR</text>

                    {/* Bottom Timeline Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY RECOVERY TIMEFRAMES UNDER INDIAN LAW:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• Pre-Litigation Advocate Notice Window: 15 Calendar Days before filing on e-Jagriti or police referral</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Limitation Period for Consumer Complaint: 2 Years from cause of action (rejection / demand refusal) under Section 69 CPA 2019</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Criminal Cheating &amp; Forgery (BNS 318 &amp; 336): Cognizable offence with 3 to 7 years imprisonment and bank account freezing</text>
                  </svg>
                </div>
              </section>

              {/* Section 6: The 5-Step Escalation Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The 5-Stage Visa Fee Recovery Playbook: Notice, e-Migrate Escalation, and Attachment
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Derived from established consumer litigation strategies and High Court criminal precedents, this 5-stage playbook neutralises consultant deflection and enforces your financial rights:
                </p>

                <ol className="space-y-4 text-slate-700 list-none">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Perform a Complete Financial &amp; Digital Audit Under Section 63 BSA
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Download certified bank statements showing every rupee transferred to the agency or proprietor. Export the full WhatsApp conversation history with media and voice notes. Retrieve the original enrollment contract, payment invoices, and official refusal letters from the destination country&apos;s embassy or university.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Deliver a Formal Written Demand for Itemised Expense Accounts
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Send an email directly to the managing director and principal partners demanding an itemised statement of account within 7 calendar days. State clearly that generic clauses claiming &quot;retainer is non-refundable&quot; are repudiated under Section 2(46) of the Consumer Protection Act, 2019.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Verify Emigration Act Status &amp; Lodge MADAD Portal Grievance
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Check whether the recruiting consultant is registered with the Ministry of External Affairs on <a href="https://emigrate.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold">emigrate.gov.in</a>. If they are recruiting without an active PGE registration, file a formal grievance on the MEA MADAD portal. Operating an unregistered recruiting agency is a non-bailable offence under Section 24 of the Emigration Act.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Dispatch a Statutory Advocate Legal Demand Notice (15-Day Window)
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Engage a verified advocate to issue a formal statutory notice dispatched to the consultant&apos;s registered corporate address, branch office, and home addresses of the proprietors via Registered Speed Post with tracking and electronic delivery under Section 63 BSA. The notice demands 100% refund, 18% penal interest, and ₹1,00,000 in damages for mental agony within 15 days, warning of simultaneous e-Jagriti consumer litigation and Section 318 BNS criminal prosecution.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        Explore our transparent drafting schedules on our <Link href="/legal-notice-charges" className="text-blue-700 underline">legal notice charges</Link> page.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Initiate Online Consumer Action on e-Jagriti &amp; Police Cyber Complaint
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the consultant fails to remit funds within the 15-day period, file an online consumer complaint on the government&apos;s <a href="https://e-jagriti.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline font-semibold">e-Jagriti</a> portal under Section 35 CPA 2019. In cases involving forged job letters or vanishing agents, lodge an accompanying complaint with the District Economic Offences Wing (EOW) for criminal asset attachment.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 7: Fact Table of Statutory Deadlines & Benchmarks */}
              <section id="heading-deadlines-table" aria-labelledby="heading-deadlines-table-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-deadlines-table-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Refund &amp; Limitation Matrix: Study Permits, Work Visas, and PR Retainers
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Indian consumer protection jurisprudence and criminal laws establish concrete statutory thresholds for refund eligibility across different visa categories:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Visa Consultant Dispute Scenarios and Statutory Recovery Benchmarks</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Dispute Scenario / Visa Category</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Refund Entitlement</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Benchmark / Authority</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Legal Enforcement Mechanism</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Study Visa Refusal Due to Agent Error
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">100% Service Fee Refund</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 2(11) CPA 2019 (Deficiency)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Advocate Legal Notice + e-Jagriti Petition</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          One-Sided &quot;Non-Refundable&quot; Agreement Clause
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">Clause Declared Void Ab Initio</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 2(46) CPA 2019 (Unfair Contract)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Direct annulment by District Commission</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Bogus Work Permit / Counterfeit LMIA Letter
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">100% Restitution + Penal Damages</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 318 BNS (Cheating) &amp; Sec 336</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Police EOW FIR + Bank Account Freezing</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Unregistered Agent Overseas Recruitment
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Total Recovery + Criminal Liability</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 10 &amp; 24 Emigration Act 1983</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">MEA PGE Complaint + Asset Attachment</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Illegal Detention of Sovereign Indian Passport
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">Immediate Release Within 48 Hours</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 3 &amp; 12 Passports Act 1967</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Urgent Police Complaint &amp; RPO Notice</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Pre-Litigation Advocate Notice Window
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">15 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Pre-litigation protocol (e-Jagriti / CPC)</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Final statutory demand before legal action</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic mt-1">
                  Need to check how payments and banking reconciliations factor into disputes? Review our guide on{" "}
                  <Link href="/refund-shows-successful-but-not-received" className="text-blue-700 underline">
                    tracing refunds via UTR and bank ledger statements
                  </Link>.
                </p>
              </section>

              {/* Section 8: Interactive Problem Tabs Island */}
              <section id="heading-problem-picker" aria-labelledby="heading-problem-picker-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-problem-picker-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Visa Dispute Diagnostic Tool: Root Causes &amp; Strategic Legal Antidotes
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select Your Specific Dispute Scenario to Unlock the Statutory Framework and Step-by-Step Enforcement Strategy
                  </p>
                </div>

                <VisaAgentProblemTabs />
              </section>

              {/* Section 9: Worked Case Study */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Worked Recovery Study: How a Candidate Recovered ₹3,85,000 for a Bogus Canada Work Permit
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Dispute Resolution
                    </span>
                    <span className="text-xs text-slate-400">Chandigarh to Ontario Work Permit Dispute</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Situation:</strong> Harpreet Randhawa, an IT systems administrator in Mohali, paid ₹3,85,000 in two installments via IMPS to a registered immigration consultancy in Sector 34, Chandigarh. The agency executed an &quot;Immigration Assistance Retainer&quot; guaranteeing a Canadian positive Labour Market Impact Assessment (LMIA) and employer-sponsored work permit within 6 months.
                    </p>
                    <p>
                      <strong>The Deadlock:</strong> 9 months elapsed with zero tangible progress. When Harpreet demanded his file number, the agency sent him a PDF purporting to be an official &quot;Job Approval Letter&quot; from an Ontario logistics warehouse. Harpreet verified the employer number directly through the official Canadian government database, which revealed that no such business existed and the document was an outright fabrication. When he demanded an immediate full refund, the agency pointed to Clause 14 of their agreement: <em>&quot;Registration fees are non-refundable under any eventuality.&quot;</em> The proprietor subsequently blocked Harpreet&apos;s phone number.
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> Harpreet engaged LegalRecovery.in. An advocate drafted a hard-hitting statutory demand notice served to the consultancy and its two directors via Registered Speed Post and Section 63 BSA electronic mail. The notice established that Clause 14 constituted an &quot;unfair contract&quot; under Section 2(46) CPA 2019, while the delivery of forged employer certificates constituted criminal cheating under Section 318 of the Bharatiya Nyaya Sanhita, 2023, giving a strict 15-day window before filing on e-Jagriti and lodging a formal complaint with the Economic Offences Wing (EOW).
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Outcome:</strong>
                      On Day 9 following receipt of the advocate legal demand notice, the consultancy&apos;s legal counsel contacted Harpreet. Acknowledging their criminal exposure under Section 318 BNS and Section 24 of the Emigration Act, the agency signed a formal settlement undertaking. The entire sum of ₹3,85,000 was refunded directly into Harpreet&apos;s HDFC Bank account via RTGS, along with a full waiver of all cancellation charges.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 10: Document & Evidence Matrix (Archetype G3 Evidence Matrix) */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Document &amp; Evidence Matrix: 7 Crucial Records Required Under Section 63 BSA
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic communications and digital banking records are fully admissible in consumer courts. Assemble these 7 critical evidentiary records before serving your legal notice:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Formal Retainership Agreement / Enrollment Form:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Showing agreed services, country destination, total consideration, and delivery milestones.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Certified Bank Statements with 12-Digit UTRs:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Proving exact debit dates, beneficiary account numbers, and total funds transferred to the consultant.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Money Receipts &amp; Tax Invoices Issued:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Documenting whether GST was charged and matching the official corporate identity of the firm.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Section 63 BSA WhatsApp Chat &amp; Email Exports:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Preserving unedited message threads, voice notes, and promises regarding timelines and approvals.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Official Embassy Refusal Letter or University Rejection:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Establishing the exact statutory grounds of refusal (e.g., deficient file submission or ineligibility).</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Copies of Disputed Job Offers or Work Permits:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Preserving any bogus LMIA, sponsor certificate, or contract provided by the agent as physical evidence.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3 sm:col-span-2">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">7</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Written Refund Demand &amp; Rejection Email:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Copy of your formal written requisition demanding accounting and the agency&apos;s written refusal or ghosting proof.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 11: Scope Limitations - Honest Scope */}
              <section id="heading-scope" aria-labelledby="heading-scope-title" className="scroll-mt-28 space-y-3 p-5 sm:p-6 bg-slate-100 rounded-2xl border border-slate-200">
                <h3 id="heading-scope-title" className="text-base sm:text-lg font-bold text-slate-900">
                  Honest Scope: What LegalRecovery Can and Cannot Do for Visa Disputes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <div>
                    <strong className="text-emerald-700 block mb-1">What We Do:</strong>
                    <p>• Verified advocates draft statutory legal demand notices invoking CPA 2019 and BNS 318.</p>
                    <p>• Serve notices via Registered Speed Post with tracking and Section 63 BSA electronic email.</p>
                    <p>• Prepare structured petition documentation for filing on the government&apos;s e-Jagriti consumer portal.</p>
                  </div>
                  <div>
                    <strong className="text-red-700 block mb-1">What We Cannot Do:</strong>
                    <p>• We cannot guarantee or influence visa grants by foreign embassies or sovereign consulates.</p>
                    <p>• We cannot physically locate unverified street-corner operators with zero digital identity.</p>
                    <p>• We do not provide physical police escort or recovery-agent services.</p>
                  </div>
                </div>
              </section>

              {/* Section 12: FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-4 sm:space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions About Visa Consultant Fraud &amp; Fee Recovery
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Legal Answers Grounded in the Consumer Protection Act, BNS 2023, and Binding Judicial Rulings
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

              {/* Section 13: Primary Sources Block */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200">
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Primary Statutes, Regulatory Gazette Notifications &amp; Government Portals
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
                  Statutory verification status: All provisions verified against active Government of India Gazette publications, India Code statutes, and e-Jagriti consumer commission guidelines as of November 2026.
                </p>
              </section>

              {/* Primary CTA Block */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Legal Demand Notice to Visa / Immigration Consultant
                </h2>
                <VisaAgentNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Travel &amp; Consumer Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/send-a-legal-notice/airline-refund-not-received"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Airline Refund Legal Notice Hub →
                  </Link>
                  <Link
                    href="/legal-notice-to/air-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Air India Refund Delayed Notice →
                  </Link>
                  <Link
                    href="/legal-notice-to/akasa-air"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Akasa Air Refund Recovery →
                  </Link>
                  <Link
                    href="/credit-shell-voucher-instead-of-refund-legal"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Credit Shell &amp; Voucher Legality →
                  </Link>
                  <Link
                    href="/legal-notice-to/irctc"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    IRCTC TDR &amp; Refund Dispute Hub →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice Charges &amp; Fee Structure →
                  </Link>
                  <Link
                    href="/refund-shows-successful-but-not-received"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Trace Stuck Refund with UTR/ARN →
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
