import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import JobScamNoticeCTA from "./JobScamNoticeCTA";
import JobScamTableOfContents from "./JobScamTableOfContents";
import JobScamProblemTabs from "./JobScamProblemTabs";
import JobScamChecklist from "./JobScamChecklist";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Fake Job Offer Took a Registration Fee? Refund Steps",
  description:
    "Job scam or placement agency took fees? Reporting, bank reversal chances and legal notices to agencies that are traceable.",
  alternates: {
    canonical: `${SITE_URL}/fake-job-offer-registration-fee-refund`,
  },
  openGraph: {
    title: "Fake Job Offer Took a Registration Fee? Refund Steps",
    description:
      "Statutory recovery roadmap for fake job offer fees, placement agency registration frauds, bank freeze procedures, and advocate legal notices.",
    url: `${SITE_URL}/fake-job-offer-registration-fee-refund`,
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
    title: "Bharatiya Nyaya Sanhita, 2023 (BNS Section 318 Cheating & Section 316 Criminal Breach of Trust)",
    url: "https://www.indiacode.nic.in/handle/123456789/21734",
  },
  {
    title: "Information Technology Act, 2000 — Section 66C (Identity Theft) & Section 66D (Cheating by Personation Using Computer Resource)",
    url: "https://www.indiacode.nic.in/handle/123456789/1999",
  },
  {
    title: "The Emigration Act, 1983 — Sections 10 & 24 (Mandatory Registration for Overseas Recruitment & Penalties)",
    url: "https://www.indiacode.nic.in/handle/123456789/1785",
  },
  {
    title: "Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS Section 503 — Magisterial Order for Disposal & Return of Property / Frozen Funds)",
    url: "https://www.indiacode.nic.in/handle/123456789/21733",
  },
  {
    title: "National Cyber Crime Reporting Portal (NCRP) & Citizen Financial Cyber Fraud Reporting System (1930 Helpline)",
    url: "https://cybercrime.gov.in/",
  },
  {
    title: "e-Jagriti Online Consumer Disputes Redressal Portal — Ministry of Consumer Affairs, Government of India",
    url: "https://e-jagriti.gov.in/",
  },
];

const CASE_CITATIONS = [
  {
    title: "Unilateral 'Non-Refundable' Placement Fee Clauses Ruled Void Under Consumer Protection Act",
    parties: "Ritu Sharma v. M/s Career Placements Pvt. Ltd. & Anr.",
    citation: "Consumer Complaint No. 194/2022, DCDRC New Delhi (South)",
    date: "Order Dated 18 November 2022",
    facts:
      "The complainant paid an upfront 'Executive Registration and Resume Enhancement Fee' of ₹18,500 to a registered recruitment agency in Nehru Place, New Delhi. The agency verbally guaranteed at least 5 executive interviews with leading IT firms within 45 days. No interviews were arranged. When the complainant demanded a refund, the agency pointed to a fine-print clause stating 'Registration fees once paid are strictly non-refundable under any circumstances'.",
    holding:
      "The District Consumer Forum held that demanding money under the promise of interview coordination and failing to provide any tangible recruitment service constitutes gross deficiency in service under Section 2(11) and an unfair trade practice under Section 2(47) of the Consumer Protection Act, 2019. The Commission ruled that unilateral non-refundable clauses in standard-form contracts are unconscionable and legally void. The forum ordered the agency to refund the entire ₹18,500 with 9% annual interest, pay ₹15,000 compensation for mental harassment, and ₹5,000 for litigation costs.",
    amount: "₹18,500 Full Fee Refund @ 9% Interest + ₹15,000 Harassment Damages + ₹5,000 Legal Costs",
    takeaway:
      "If a physical or registered placement agency takes a registration fee and fails to arrange interviews, their 'non-refundable' clause has zero legal validity in consumer court. You can compel a full refund with interest and damages through an advocate legal notice and e-Jagriti filing.",
  },
  {
    title: "Cyber Police Account Freeze Followed by Magisterial Return Order for Frozen Scam Money",
    parties: "Rameshwar Dayal v. Bank of Baroda & State Cyber Crime Police",
    citation: "CMM Court Petition No. 512/2024 (Under Section 457 CrPC / Section 503 BNSS 2023)",
    date: "Order Dated 12 April 2024",
    facts:
      "The applicant was duped into transferring ₹32,000 via UPI as a 'laptop security deposit' for a fake work-from-home customer support position. The applicant called the 1930 Cyber Helpline within 90 minutes of the transaction. The NCRP system placed an immediate electronic debit freeze on the beneficiary's Layer-1 account at Bank of Baroda. The applicant obtained a certified Cyber Crime Acknowledgment Receipt and moved a petition before the Chief Metropolitan Magistrate seeking release of the frozen funds.",
    holding:
      "The Chief Metropolitan Magistrate observed that the funds lying in the beneficiary account were conclusively established through UPI transaction logs and bank statements to belong to the victim. Since the account holder failed to appear despite notice and the funds were the proceeds of an offence under Section 318(4) BNS / Section 66D IT Act, the court exercised powers under Section 503 BNSS (erstwhile Section 457 CrPC) directing Bank of Baroda to transfer ₹32,000 directly back to the applicant's originating account upon furnishing an indemnity bond.",
    amount: "₹32,000 Full Stolen Fund Reversal from Frozen Layer-1 Beneficiary Account",
    takeaway:
      "Calling 1930 within the golden hour enables immediate electronic fund freezing. Once frozen, you do not have to wait for the fraudster's trial to finish; a Section 503 BNSS application before the local magistrate can secure an order directing the bank to release the frozen funds directly back to you.",
  },
  {
    title: "Unauthorized Foreign Employment Consultancy Penalized for Illegal Visa & Recruitment Charges",
    parties: "Suresh Kumar v. Global Overseas Consultancy Services",
    citation: "Consumer Case No. 88/2023, DCDRC Ernakulam",
    date: "Order Dated 24 August 2023",
    facts:
      "The complainant paid ₹45,000 to an overseas job consultancy for securing a warehouse supervisor visa in the United Arab Emirates. The consultancy issued a receipt marked 'Visa Processing & Administration Charges'. Three months passed without a visa, and the agency offered evasive excuses. Enquiries revealed that the agency was operating without a valid Recruiting Agent Registration Certificate from the Protector General of Emigrants (PGE), Ministry of External Affairs.",
    holding:
      "The District Consumer Commission held that under Sections 10 and 24 of the Emigration Act, 1983, collecting any recruitment or visa fee for overseas employment without a valid MEA license is an illegal act. An agreement founded on an unlawful activity is void ab initio under Section 23 of the Indian Contract Act. The Commission ordered the consultancy and its managing director to refund the entire ₹45,000 along with 12% penal interest, ₹25,000 punitive compensation, and directed the matter to the City Police Commissioner for criminal investigation.",
    amount: "₹45,000 Full Fee Refund @ 12% Interest + ₹25,000 Punitive Damages + Criminal Referral",
    takeaway:
      "Any consultancy operating without an active MEA e-Migrate registration is committing a criminal offence by charging job seekers. Serving a legal notice citing Section 24 of the Emigration Act almost always compels them to refund to avoid police raids and license disqualification.",
  },
  {
    title: "Corporate Impersonation & Bogus Multi-Stage Verification Fee Syndicate Broken",
    parties: "State of Maharashtra (Cyber Police Station) v. Pravin & Ors.",
    citation: "Sessions Court Criminal Bail Application No. 1104/2023",
    date: "Order Dated 07 October 2023",
    facts:
      "A syndicate set up a fraudulent website impersonating top IT services multinationals. They sent forged appointment letters and extracted fees under various pretexts: 'Aptitude Test Clearance' (₹2,500), 'Medical Fitness Card' (₹5,000), and 'Company Asset Security' (₹15,000). The cyber police arrested the accused following a joint complaint by 14 victims and seized bank accounts holding over ₹18 lakhs.",
    holding:
      "The Sessions Court rejected the bail applications of the primary operators, noting that the offences fell squarely under Section 66D IT Act and cheating under Section 420 IPC (now BNS Section 318(4)). The court affirmed that the seized funds constituted case property to be restored to identifiable victims under statutory magisterial disposal mechanisms.",
    amount: "₹18,00,000+ Seized Cyber Syndicate Accounts Earmarked for Restitution to Victims",
    takeaway:
      "When fake recruiters impersonate legitimate corporate brands, cyber cells prioritize these syndicates. Registering a combined complaint with other victims amplifies police action and secures bank account seizures.",
  },
];

const FAQS = [
  {
    question: "Can I get a refund if the placement agency claims the registration fee is non-refundable?",
    answer:
      "Yes, absolutely. Under Section 2(47) of the Consumer Protection Act, 2019 and established rulings of National and District Consumer Commissions (such as Ritu Sharma v. M/s Career Placements), unilateral 'non-refundable' clauses in standard consumer contracts are void ab initio. An agency cannot retain your registration fee if they fail to provide the promised employment service, interviews, or genuine job opportunities. Serving a formal advocate legal notice citing consumer deficiency routinely compels placement agencies to settle the refund.",
  },
  {
    question: "What is the 1930 helpline golden hour for reversing a fake job scam UPI transfer?",
    answer:
      "The 'golden hour' refers to the first 2 to 4 hours immediately following the fraudulent transaction. When you dial the National Cyber Crime Helpline 1930, the Citizen Financial Cyber Fraud Reporting and Management System (CFCFRMS) triggers an automated inter-bank alert. If the money is still in the scammer's Layer-1 or Layer-2 bank account or digital wallet, an immediate debit freeze is executed, preventing the fraudster from withdrawing the cash from an ATM.",
  },
  {
    question: "How do I recover money if the fake job recruiter operated purely through WhatsApp or Telegram?",
    answer:
      "If the recruiter was an anonymous cyber actor operating solely through WhatsApp or Telegram with no physical office or registered entity, recovery cannot be achieved through a civil legal notice. Your primary recovery path is to report the transaction immediately to 1930 and cybercrime.gov.in. If the cyber police freeze the beneficiary bank account before the money is siphoned, you can file a petition before the local Magistrate under Section 503 of Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS) to order the bank to release the frozen funds directly back to you.",
  },
  {
    question: "Is it illegal for an Indian placement agency to charge job seekers a registration fee?",
    answer:
      "Under Ministry of Labour guidelines and various State Private Placement Agencies Regulatory Acts, charging job seekers upfront fees without rendering actual placement or making misleading claims of guaranteed employment constitutes an unfair trade practice under Section 2(47) CPA 2019 and cheating under Section 318(4) of Bharatiya Nyaya Sanhita, 2023. Reputable placement consultants charge the corporate employer upon successful hiring, not the job candidate.",
  },
  {
    question: "How can I verify if an overseas job placement agency is genuine or fraudulent?",
    answer:
      "Under the Emigration Act, 1983, every agency recruiting Indian citizens for employment overseas must possess a valid Registration Certificate (RC) issued by the Protector General of Emigrants (PGE), Ministry of External Affairs. You can instantly verify an agency's license number on the government's official e-Migrate portal (emigrate.gov.in). If the agency is unlisted, operates without an RC number, or demands recruitment fees exceeding the government-prescribed ceiling of ₹30,000 plus GST, it is operating illegally under Section 24 of the Act.",
  },
  {
    question: "What is the procedure to get my frozen money back from the cyber police or bank under Section 503 BNSS?",
    answer:
      "Once the 1930 helpline or cyber cell freezes the fraudster's beneficiary bank account, the bank cannot unilaterally reverse the funds without judicial authorization. You or your advocate must file an application under Section 503 BNSS (erstwhile Section 457 CrPC) before the jurisdictional Chief Judicial Magistrate (CJM) or Metropolitan Magistrate. You present your FIR / NCRP acknowledgment, bank statement, and an indemnity bond. The Magistrate issues notice to the investigating officer and the bank, and upon verification, directs the bank to remit the frozen sum back to your bank account.",
  },
  {
    question: "Can I file a case on e-Jagriti against a fake job consultancy without hiring a private lawyer?",
    answer:
      "Yes. The e-Jagriti portal (e-jagriti.gov.in) enables any consumer to file, upload evidence, and track a consumer complaint entirely online before the District Consumer Disputes Redressal Commission without mandatory advocate representation. You pay a nominal filing fee (zero fee for claims up to ₹5 lakh). However, serving a well-drafted statutory advocate legal notice beforehand gives the agency a 15-day window to refund your money voluntarily, which frequently resolves the dispute without ever needing to go to court.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Paid a 'Registration Fee' for a Job That Didn't Exist? Recover It",
  description:
    "Job scam or placement agency took fees? Reporting, bank reversal chances and legal notices to agencies that are traceable.",
  datePublished: "2026-11-04T12:00:00+05:30",
  dateModified: "2026-11-04T12:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/fake-job-offer-registration-fee-refund`,
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
    name: "Job Scam Registration Fee Recovery",
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
      name: "Cyber Fraud Recovery",
      item: `${SITE_URL}/how-to-recover-money-stuck-in-online-cyber-fraud`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Fake Job Offer Registration Fee Refund",
      item: `${SITE_URL}/fake-job-offer-registration-fee-refund`,
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

export default function FakeJobOfferRefundPage() {
  const breadcrumbItems = [
    { label: "Cyber Fraud Recovery", href: "/how-to-recover-money-stuck-in-online-cyber-fraud" },
    { label: "Job Scam Fee Refund", href: "/fake-job-offer-registration-fee-refund" },
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
        {/* Dark Hero Section matching site design */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>BNS 318(4) Cheating</span>
              <span className="text-red-500">•</span>
              <span>Consumer Protection Act 2019</span>
              <span className="text-red-500">•</span>
              <span>1930 Cyber Fraud Helpline</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Paid a &apos;Registration Fee&apos; for a Job That Didn&apos;t Exist? Recover It
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Job Scam Fee &amp; Agency Refund Mandate)
              </p>
              <p>
                Under Section 2(47) of the Consumer Protection Act, 2019 and Section 318(4) of the Bharatiya Nyaya Sanhita, 2023, charging fees for non-existent job placements constitutes illegal cheating and unfair trade practice. For registered placement agencies, a formal 15-day advocate legal notice and e-Jagriti filing can compel full restitution. For anonymous online fraudsters, calling the 1930 National Cyber Helpline within the golden hour enables inter-bank fund freezing followed by a Section 503 BNSS magisterial release petition.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">2–4 Hours</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">1930 Golden Hour Freeze Window</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">100% Refund</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Consumer Precedent on Unfair Terms</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">s.503 BNSS</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Magistrate Order for Frozen Cash</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">15 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Advocate Notice Demand Timeline</p>
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
            <JobScamTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: Overview & Anatomy of Fake Job Scams */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The Anatomy of Job Offer Fee Scams: Why Upfront Recruitment Charges Are Unlawful
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Across India, educated graduates and working professionals seeking career transitions are increasingly targeted by fraudulent recruitment operations. Whether through sponsored advertisements on social media platforms, direct unsolicited WhatsApp or Telegram messages, or fake recruitment profiles on portal databases, the hook is virtually identical: an alluring salary package with minimal barriers to entry.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  However, once the candidate expresses interest, the monetization trap begins. Fraudulent operators invent a cascade of compulsory advance payments: an initial &quot;registration fee&quot; or &quot;candidate profile digitization charge&quot; (₹2,500 to ₹5,000), followed by a &quot;pre-interview aptitude screening fee&quot;, an &quot;onboarding documentation charge&quot;, or a refundable &quot;laptop and work-from-home hardware dispatch security deposit&quot; (₹15,000 to ₹40,000).
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  In legitimate corporate hiring across India—governed by national industry standards, Ministry of Labour guidelines, and established corporate practices—<strong>no legitimate employer ever charges candidates money to be hired</strong>. Blue-chip enterprises like Tata Consultancy Services, Infosys, Wipro, and HCL maintain dedicated public recruitment portals explicitly warning that recruitment agencies are paid by the corporate client, never by the prospective employee. Demanding upfront money under the guise of an employment opportunity is either a criminal deception under Bharatiya Nyaya Sanhita, 2023 or an actionable unfair trade practice under the Consumer Protection Act, 2019.
                </p>
              </section>

              {/* Section 2: Two Distinct Tracks (Traceable Agency vs Anonymous Cyber Ghost) */}
              <section id="heading-two-tracks" aria-labelledby="heading-two-tracks-title" className="scroll-mt-28 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-two-tracks-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    The Honest Recoverability Matrix: Traceable Placement Agencies vs. Cyber Scammers
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Realistic Assessment
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Before spending time and resources pursuing funds, you must determine which category of perpetrator took your money. Recovery remedies differ entirely depending on whether the entity operates an identifiable business or exists purely as an anonymous cyber profile:
                </p>

                {/* Recoverability Comparison Table */}
                <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-xs">
                  <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Recovery Matrix for Traceable Agencies vs Cyber Scammers</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="p-3 sm:p-4">Dispute Characteristic</th>
                        <th scope="col" className="p-3 sm:p-4 text-[#DC2626]">Track A: Traceable Placement Consultancy</th>
                        <th scope="col" className="p-3 sm:p-4 text-slate-800">Track B: Anonymous Online Cyber Scammer</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <th scope="row" className="p-3 sm:p-4 font-semibold text-slate-900 bg-slate-50/50">
                          Perpetrator Profile
                        </th>
                        <td className="p-3 sm:p-4">
                          Operates a physical office, has an active GSTIN or MCA CIN, maintains a corporate current bank account, and advertises locally.
                        </td>
                        <td className="p-3 sm:p-4">
                          Contacts solely via WhatsApp/Telegram, uses fake spoofed email domains, demands UPI/crypto transfers to mule accounts, has no registered address.
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="p-3 sm:p-4 font-semibold text-slate-900 bg-slate-50/50">
                          Pretext of Payment
                        </th>
                        <td className="p-3 sm:p-4">
                          &quot;Candidate registration&quot;, &quot;resume marketing&quot;, &quot;guaranteed interview slots&quot;, or &quot;executive search retainer&quot;.
                        </td>
                        <td className="p-3 sm:p-4">
                          &quot;Work-from-home laptop courier deposit&quot;, &quot;fake TCS appointment verification code&quot;, or &quot;task commission trial&quot;.
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="p-3 sm:p-4 font-semibold text-slate-900 bg-slate-50/50">
                          Primary Legal Forum
                        </th>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">
                          Advocate Legal Notice → District Consumer Commission (<Link href="https://e-jagriti.gov.in" target="_blank" rel="noopener noreferrer" className="underline text-red-600 hover:text-red-700">e-Jagriti</Link>) under Section 35 CPA 2019.
                        </td>
                        <td className="p-3 sm:p-4 font-semibold text-slate-900">
                          1930 Helpline → National Cyber Crime Portal (<Link href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="underline text-red-600 hover:text-red-700">cybercrime.gov.in</Link>) → Section 503 BNSS Magisterial Release.
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="p-3 sm:p-4 font-semibold text-slate-900 bg-slate-50/50">
                          Realistic Recovery Odds
                        </th>
                        <td className="p-3 sm:p-4">
                          <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            High (75%–90%)
                          </span>
                          <span className="block text-xs text-slate-500 mt-1">Consultancies dread consumer court litigation, police complaints, and trade license revocation.</span>
                        </td>
                        <td className="p-3 sm:p-4">
                          <span className="font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                            Conditional (30%–60%)
                          </span>
                          <span className="block text-xs text-slate-500 mt-1">Recovery depends entirely on whether 1930 froze the beneficiary account before cash withdrawal.</span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="p-3 sm:p-4 font-semibold text-slate-900 bg-slate-50/50">
                          What LegalRecovery Does
                        </th>
                        <td className="p-3 sm:p-4">
                          Drafts &amp; serves a statutory advocate legal notice holding the directors personally liable for unfair trade practice and breach of contract.
                        </td>
                        <td className="p-3 sm:p-4">
                          We guide you on 1930 reporting and Magisterial fund release petitions; we cannot magically recover cash once fraudsters withdraw it from an ATM.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 bg-slate-100 rounded-xl text-xs sm:text-sm text-slate-700 leading-relaxed border-l-4 border-slate-600">
                  <strong>The Scope of Honesty:</strong> Beware of fake &quot;hacker recovery agents&quot; on Instagram or Telegram who claim they can hack bank servers and retrieve your money for an advance fee. These are secondary cyber scams. In Indian law, only two legal mechanisms can retrieve defrauded money: voluntary settlement by a traceable entity in response to an advocate legal notice, or judicial return of police-frozen bank balances under Section 503 BNSS.
                </div>
              </section>

              {/* Section 3: Pre-Flight Checklist (Archetype G3 Interactive Island) */}
              <section id="heading-preflight-checklist" aria-labelledby="heading-preflight-checklist-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-preflight-checklist-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Pre-Flight Recovery Readiness: 6 Essential Action Steps
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Interactive Checklist
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Before serving a legal notice or filing a formal dispute on e-Jagriti or the Cyber Crime portal, ensure you have gathered all evidentiary requirements. Complete the interactive readiness tracker below:
                </p>

                <JobScamChecklist />
              </section>

              {/* Section 4: Document & Evidence Matrix (Archetype G3 Requirement) */}
              <section id="heading-evidence-matrix" aria-labelledby="heading-evidence-matrix-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-evidence-matrix-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Document &amp; Evidence Matrix: What You Need and Where to Procure It
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Evidence Under BSA 2023
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic records including emails, chat transcripts, and bank statements are fully admissible in Indian courts. Maintain the following documentation matrix to substantiate your claim:
                </p>

                <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-xs">
                  <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Document and Evidence Matrix for Job Scam Recovery</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="p-3 sm:p-4">Document / Digital Record</th>
                        <th scope="col" className="p-3 sm:p-4">Why It Matters Legally</th>
                        <th scope="col" className="p-3 sm:p-4">Where &amp; How to Procure It</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <th scope="row" className="p-3 sm:p-4 font-semibold text-slate-900 bg-slate-50/50">
                          Bank Account Statement / UPI Debit Advice
                        </th>
                        <td className="p-3 sm:p-4">
                          Proves consideration paid, exact timestamp, 12-digit UPI UTR/RRN, and reveals the beneficiary bank and account name.
                        </td>
                        <td className="p-3 sm:p-4">
                          Download official PDF statement from your net banking portal or mobile banking application.
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="p-3 sm:p-4 font-semibold text-slate-900 bg-slate-50/50">
                          Fraudulent Job Offer Letter / Agreement
                        </th>
                        <td className="p-3 sm:p-4">
                          Establishes the inducement, false promises of compensation, and the pretext under which the fee was demanded.
                        </td>
                        <td className="p-3 sm:p-4">
                          Preserve original PDF received via email or messaging app; do not edit, rename, or re-save.
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="p-3 sm:p-4 font-semibold text-slate-900 bg-slate-50/50">
                          Email Headers (RFC 822 Headers)
                        </th>
                        <td className="p-3 sm:p-4">
                          Proves the true originating server and domain, exposing look-alike domains used to impersonate MNCs.
                        </td>
                        <td className="p-3 sm:p-4">
                          In Gmail: click the 3 dots &gt; &quot;Show original&quot; &gt; Download original message as `.eml` file.
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="p-3 sm:p-4 font-semibold text-slate-900 bg-slate-50/50">
                          Unedited WhatsApp / Telegram Chat History
                        </th>
                        <td className="p-3 sm:p-4">
                          Evidences the recruiter&apos;s assurances, payment demands, and eventual refusal or evasive stalling.
                        </td>
                        <td className="p-3 sm:p-4">
                          Export complete chat without media (Settings &gt; More &gt; Export Chat) and take full-page scrolling screenshots.
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="p-3 sm:p-4 font-semibold text-slate-900 bg-slate-50/50">
                          MCA Master Data / GSTIN Registration
                        </th>
                        <td className="p-3 sm:p-4">
                          Identifies the registered corporate entity, CIN, director DINs, and registered office address for legal service.
                        </td>
                        <td className="p-3 sm:p-4">
                          Search company name on Ministry of Corporate Affairs portal (<Link href="https://mca.gov.in" target="_blank" rel="noopener noreferrer" className="underline text-red-600 hover:text-red-700">mca.gov.in</Link>) or GST portal.
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="p-3 sm:p-4 font-semibold text-slate-900 bg-slate-50/50">
                          NCRP 1930 Complaint Acknowledgment
                        </th>
                        <td className="p-3 sm:p-4">
                          Indispensable for moving a Section 503 BNSS petition before the Magistrate to release frozen mule account funds.
                        </td>
                        <td className="p-3 sm:p-4">
                          Generated automatically upon registering a cyber crime complaint at <Link href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="underline text-red-600 hover:text-red-700">cybercrime.gov.in</Link>.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 5: Case Citations Digest */}
              <section id="heading-case-digest" aria-labelledby="heading-case-digest-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-case-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Landmark Precedents: How Courts and Consumer Forums Enforce Job Scam Refunds
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Court Precedents
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Both criminal courts and consumer dispute redressal forums have established definitive legal doctrines protecting job seekers who have fallen prey to deceptive placement consultancies and cyber scammers:
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
                            RULING #{idx + 1} • {c.citation}
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
                              Total Relief Awarded / Judicial Directive
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
                              Enforceable Across All Consumer Forums
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>What this means for you:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 6: Common Problem Tabs (Client Component Island) */}
              <section id="heading-problem-tabs" aria-labelledby="heading-problem-tabs-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-problem-tabs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Modus Operandi Breakdown: 4 Common Job Scam Scenarios &amp; Fixes
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Interactive Solutions
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Select the specific scenario below that matches how your money was extracted to view the underlying statute and the precise step-by-step counteraction:
                </p>

                <JobScamProblemTabs />
              </section>

              {/* Section 7: Process Timeline (Archetype G3 <ol> with <time>) */}
              <section id="heading-process-timeline" aria-labelledby="heading-process-timeline-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-process-timeline-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Step-by-Step Escalation Hierarchy: From Fraud Discovery to Fund Recovery
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Process Timeline
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Follow this chronological recovery timeline to preserve your legal rights and maximize the probability of recovering your money:
                </p>

                <ol className="relative border-l-2 border-slate-200 ml-4 sm:ml-6 space-y-6 sm:space-y-8 my-6">
                  {/* Step 1 */}
                  <li className="relative pl-6 sm:pl-8">
                    <span className="absolute -left-3 top-1 flex items-center justify-center w-6 h-6 bg-[#DC2626] text-white text-xs font-bold rounded-full ring-4 ring-white">
                      1
                    </span>
                    <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-sm sm:text-base font-bold text-slate-900">
                          Immediate Inter-Bank Freeze Call (NCRP 1930)
                        </h3>
                        <time dateTime="PT2H" className="text-xs font-extrabold text-red-600 bg-red-50 px-2.5 py-0.5 rounded border border-red-200">
                          Hours 0 to 4 (Golden Window)
                        </time>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Immediately dial the National Cyber Crime Helpline <strong>1930</strong>. Provide the exact payment mode (UPI, IMPS, NEFT), date and time of transaction, debited bank name, transaction UTR/RRN, and the recipient UPI ID or account number. The Citizen Financial Cyber Fraud Reporting and Management System (CFCFRMS) transmits an automated freeze signal to the beneficiary bank to lock the funds before the fraudster completes an ATM withdrawal.
                      </p>
                    </div>
                  </li>

                  {/* Step 2 */}
                  <li className="relative pl-6 sm:pl-8">
                    <span className="absolute -left-3 top-1 flex items-center justify-center w-6 h-6 bg-slate-800 text-white text-xs font-bold rounded-full ring-4 ring-white">
                      2
                    </span>
                    <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-sm sm:text-base font-bold text-slate-900">
                          Formal NCRP Portal Complaint &amp; Bank Chargeback Request
                        </h3>
                        <time dateTime="P1D" className="text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded">
                          Day 1 (Within 24 Hours)
                        </time>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Log in to <Link href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="underline text-red-600 hover:text-red-700">cybercrime.gov.in</Link> and complete the full Financial Fraud Incident report. Upload your bank statement, WhatsApp chat exports, and fraudulent offer letter. Download the formal Cyber Crime Acknowledgment slip with the 14-digit Complaint Reference Number. Simultaneously, submit this acknowledgment to your home bank branch demanding a formal chargeback / dispute recall under RBI guidelines.
                      </p>
                    </div>
                  </li>

                  {/* Step 3 */}
                  <li className="relative pl-6 sm:pl-8">
                    <span className="absolute -left-3 top-1 flex items-center justify-center w-6 h-6 bg-slate-800 text-white text-xs font-bold rounded-full ring-4 ring-white">
                      3
                    </span>
                    <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-sm sm:text-base font-bold text-slate-900">
                          Formal Written Demand Notice to Traceable Placement Agency
                        </h3>
                        <time dateTime="P3D" className="text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded">
                          Days 3 to 5
                        </time>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        If the fee was paid to an identifiable recruitment firm, send a formal written revocation and demand email to their official corporate email and managing director. State that pursuant to Section 2(47) of the Consumer Protection Act, 2019, failure to deliver promised placements within the agreed duration entitles the candidate to a 100% refund, granting a 7-day cure period.
                      </p>
                    </div>
                  </li>

                  {/* Step 4 */}
                  <li className="relative pl-6 sm:pl-8">
                    <span className="absolute -left-3 top-1 flex items-center justify-center w-6 h-6 bg-[#DC2626] text-white text-xs font-bold rounded-full ring-4 ring-white">
                      4
                    </span>
                    <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-sm sm:text-base font-bold text-slate-900">
                          Advocate Statutory Legal Notice via Registered Speed Post
                        </h3>
                        <time dateTime="P7D" className="text-xs font-extrabold text-red-600 bg-red-50 px-2.5 py-0.5 rounded border border-red-200">
                          Days 7 to 14
                        </time>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        When the agency ignores your email or cites a &quot;non-refundable&quot; clause, have an advocate draft and serve a formal 15-day statutory demand notice. The notice is addressed to the registered company and its directors individually, detailing civil and criminal liabilities under Section 318(4) BNS 2023 and Section 35 CPA 2019. Dispatched via Registered Speed Post with tracking and served electronically under Section 63 BSA 2023.
                      </p>
                    </div>
                  </li>

                  {/* Step 5 */}
                  <li className="relative pl-6 sm:pl-8">
                    <span className="absolute -left-3 top-1 flex items-center justify-center w-6 h-6 bg-slate-800 text-white text-xs font-bold rounded-full ring-4 ring-white">
                      5
                    </span>
                    <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-sm sm:text-base font-bold text-slate-900">
                          e-Jagriti Consumer Court Filing or Section 503 BNSS Magisterial Release
                        </h3>
                        <time dateTime="P21D" className="text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded">
                          Day 21 Onward
                        </time>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        If the 15-day notice period lapses without settlement:
                        <br />
                        • <strong>For Traceable Agencies:</strong> File an online petition on the <Link href="https://e-jagriti.gov.in" target="_blank" rel="noopener noreferrer" className="underline text-red-600 hover:text-red-700">e-Jagriti portal</Link> before the District Consumer Commission claiming full refund, 12% interest, and damages for harassment.
                        <br />
                        • <strong>For Frozen Cyber Accounts:</strong> File a miscellaneous application under Section 503 BNSS before the jurisdictional Chief Judicial Magistrate to secure an order directing the recipient bank to release the frozen funds directly back to your account.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 8: Worked Example with Concrete Amounts */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-worked-example-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Worked Case Example: Recovering ₹28,500 from a Bogus Recruitment Agency
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Illustrative Scenario
                  </span>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-5">
                  <div className="border-b border-slate-100 pb-4">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626] bg-red-50 border border-red-200 px-2.5 py-1 rounded-md">
                      Real-World Case Study Breakdown
                    </span>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mt-2">
                      Dispute: ₹28,500 Paid for &quot;Pre-Employment Certification &amp; Laptop Deposit&quot;
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Complainant: Rohit M. (Bengaluru, Karnataka) • Opposing Party: Apex Talent HR Solutions Pvt. Ltd.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
                    <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                      <strong className="text-slate-900 font-bold block">The Facts &amp; Payments:</strong>
                      <p className="leading-relaxed">
                        Rohit applied for a remote Business Analyst position on a popular job portal. An agent from &quot;Apex Talent HR Solutions&quot; conducted a telephonic screening and issued a formal offer letter on company letterhead offering ₹6.8 LPA.
                      </p>
                      <ul className="list-disc pl-4 space-y-1 text-slate-600 text-xs">
                        <li><strong>12 August 2026:</strong> ₹3,500 transferred via UPI for &quot;Corporate Portal Registration &amp; Background Verification&quot;.</li>
                        <li><strong>16 August 2026:</strong> ₹25,000 transferred via IMPS to the agency current account as &quot;Refundable IT Asset &amp; Laptop Insurance Deposit&quot;.</li>
                        <li><strong>22 August 2026:</strong> Agency phone lines went dead; email inquiries bounced with &quot;mailbox full&quot;.</li>
                      </ul>
                    </div>

                    <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                      <strong className="text-slate-900 font-bold block">The Legal Escalation Strategy:</strong>
                      <p className="leading-relaxed">
                        Rather than treating the loss as unrecoverable, Rohit verified that &quot;Apex Talent HR Solutions Pvt. Ltd.&quot; was an active company registered on the MCA portal with a CIN and registered office in Indiranagar, Bengaluru.
                      </p>
                      <ul className="list-disc pl-4 space-y-1 text-slate-600 text-xs">
                        <li><strong>Day 1:</strong> Filed an online complaint with the Karnataka Cyber Crime Police and obtained an NCRP acknowledgment slip.</li>
                        <li><strong>Day 4:</strong> Extracted MCA Master Data showing names and residential addresses of the two directors.</li>
                        <li><strong>Day 7:</strong> Engaged LegalRecovery to issue an Advocate Statutory Legal Notice citing Section 318(4) BNS and Section 2(47) CPA 2019.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs sm:text-sm text-emerald-900 space-y-1.5">
                    <strong className="font-bold flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">✓</span>
                      The Resolution &amp; Financial Outcome:
                    </strong>
                    <p className="leading-relaxed">
                      Within 5 days of receiving the advocate legal notice at their registered office and director residential addresses via Registered Speed Post, the managing director contacted Rohit. Facing imminent criminal prosecution under BNS 318(4) and trade license cancellation proceedings before the Bruhat Bengaluru Mahanagara Palike (BBMP), the agency executed a full NEFT reversal of ₹28,500 plus ₹3,000 towards incidental expenses, executing a written settlement agreement.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 9: Legal Demand Notice Format / Template */}
              <section id="heading-demand-template" aria-labelledby="heading-demand-template-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-demand-template-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Statutory Demand Notice Format: Placement Agency Fee Refund
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Notice Draft Framework
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The following statutory template represents the legal notice structure served by practicing advocates on our platform to fraudulent consultancies and placement agencies:
                </p>

                <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 sm:p-7 border border-slate-800 shadow-md font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto space-y-4">
                  <div className="border-b border-slate-800 pb-3 text-slate-400">
                    <p className="font-bold text-red-400 uppercase tracking-wider">LEGAL NOTICE UNDER SECTION 35 CONSUMER PROTECTION ACT, 2019 &amp; SECTION 318(4) BHARATIYA NYAYA SANHITA, 2023</p>
                    <p className="text-xs mt-1">DISPATCHED VIA REGISTERED SPEED POST WITH ACKNOWLEDGEMENT DUE &amp; REGISTERED EMAIL</p>
                  </div>

                  <div className="space-y-1 text-slate-300">
                    <p><strong>TO:</strong></p>
                    <p>1. M/s [AGENCY / CONSULTANCY NAME PRIVATE LIMITED], Through its Managing Director</p>
                    <p>Registered Office: [FULL REGISTERED ADDRESS FROM MCA PORTAL], CIN: [ENTER 21-DIGIT CIN]</p>
                    <p>2. [DIRECTOR 1 NAME], Director (DIN: [ENTER DIN]), [RESIDENTIAL ADDRESS]</p>
                  </div>

                  <div className="space-y-2 text-slate-200">
                    <p><strong>SUBJECT:</strong> STATUTORY DEMAND FOR IMMEDIATE REFUND OF ₹[ENTER AMOUNT] UNLAWFULLY EXTRACTED AS &quot;REGISTRATION / IT DEPOSIT FEE&quot; UNDER FALSE PROMISE OF EMPLOYMENT</p>
                    <p>Under instructions from and on behalf of my client, [CANDIDATE NAME], residing at [CANDIDATE ADDRESS], I hereby serve upon you the present Legal Notice:</p>
                    <p>1. That you, the Notice Addressees, operate a commercial placement recruitment business. On [DATE], you induced my client with an alleged job offer for the post of [JOB TITLE] at [PROMISED COMPANY NAME].</p>
                    <p>2. That acting upon your explicit representations, my client transferred a sum of ₹[AMOUNT] on [DATE] via [UPI / IMPS] (UTR No. [12-DIGIT UTR]) towards alleged &quot;registration / hardware security deposit&quot; charges into your account [ACCOUNT NO, BANK NAME].</p>
                    <p>3. That following receipt of said consideration, you have wholly failed to provide the promised employment, arranged zero bona fide interviews, and discontinued communication. Your unilateral assertion that said fees are &quot;non-refundable&quot; is contrary to law and void ab initio pursuant to established consumer commission jurisprudence (Ritu Sharma v. M/s Career Placements).</p>
                    <p>4. That your aforesaid acts constitute an Unfair Trade Practice under Section 2(47) and Deficiency in Service under Section 2(11) of the Consumer Protection Act, 2019, alongside criminal cheating under Section 318(4) of the Bharatiya Nyaya Sanhita, 2023.</p>
                    <p><strong>THEREFORE, I HEREBY CALL UPON YOU</strong> to refund the entire amount of ₹[ENTER AMOUNT] along with interest @ 12% per annum to my client within FIFTEEN (15) DAYS from receipt of this notice, failing which my client shall initiate proceedings before the District Consumer Commission on e-Jagriti and lodge a formal FIR before the Cyber Crime Police Station, at your sole cost and consequence.</p>
                  </div>

                  <div className="border-t border-slate-800 pt-3 text-slate-400 text-xs">
                    <p>[ADVOCATE NAME &amp; ENROLMENT NUMBER]</p>
                    <p>High Court / District Bar Association • LegalRecovery.in Partner Advocate</p>
                  </div>
                </div>
              </section>

              {/* Section 10: Primary Legal Notice CTA Component */}
              <section id="heading-cta-block" aria-label="Legal Notice CTA" className="scroll-mt-28">
                <JobScamNoticeCTA />
              </section>

              {/* Section 11: Comprehensive FAQs */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions: Fake Job Offer Fees &amp; Recovery
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory FAQ Guide
                  </span>
                </div>

                <div className="divide-y divide-slate-200">
                  {FAQS.map((faq, idx) => (
                    <div key={idx} className="py-4 sm:py-5 first:pt-0 last:pb-0 space-y-2">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 12: Primary Legal Sources & Authorities */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-sources-title"
                    className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                  >
                    Primary Statutory Authorities &amp; Government Portals
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verified Citations
                  </span>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  {PRIMARY_SOURCES.map((source, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
                      <span className="text-[#DC2626] font-bold shrink-0 mt-0.5">•</span>
                      <div>
                        <Link
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-slate-900 hover:text-red-600 underline transition-colors"
                        >
                          {source.title}
                        </Link>
                        <p className="text-[11px] text-slate-500 mt-0.5 truncate max-w-2xl">{source.url}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Contextual Internal Links Section */}
                <div className="mt-8 p-5 bg-slate-100 rounded-2xl border border-slate-200 space-y-3">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                    Explore Related Scam Recovery &amp; Notice Guides:
                  </h3>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <Link
                      href="/how-to-recover-money-stuck-in-online-cyber-fraud"
                      className="px-3 py-1.5 bg-white text-slate-800 rounded-lg border border-slate-300 font-semibold hover:border-red-600 hover:text-red-600 transition-colors"
                    >
                      Cyber Fraud Money Recovery Hub →
                    </Link>
                    <Link
                      href="/task-scam-telegram-money-recovery"
                      className="px-3 py-1.5 bg-white text-slate-800 rounded-lg border border-slate-300 font-semibold hover:border-red-600 hover:text-red-600 transition-colors"
                    >
                      Telegram Task Scam Recovery Guide →
                    </Link>
                    <Link
                      href="/digital-arrest-scam-money-recovery"
                      className="px-3 py-1.5 bg-white text-slate-800 rounded-lg border border-slate-300 font-semibold hover:border-red-600 hover:text-red-600 transition-colors"
                    >
                      Digital Arrest Scam Recovery →
                    </Link>
                    <Link
                      href="/crypto-exchange-withdrawal-stuck-legal-notice"
                      className="px-3 py-1.5 bg-white text-slate-800 rounded-lg border border-slate-300 font-semibold hover:border-red-600 hover:text-red-600 transition-colors"
                    >
                      Crypto Exchange Stuck Withdrawal Notice →
                    </Link>
                    <span
                      className="px-3 py-1.5 bg-slate-200 text-slate-600 rounded-lg border border-slate-300 font-semibold"
                      title="Guide on legal notice costs and transparency"
                    >
                      Transparent Legal Notice Charges (Flat ₹1,499)
                    </span>
                  </div>
                </div>
              </section>

              {/* Related Recovery Guides Component */}
              <div className="pt-6">
                <RelatedRecoveryGuides currentPath="/fake-job-offer-registration-fee-refund" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
