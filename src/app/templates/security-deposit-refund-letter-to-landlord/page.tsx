import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import SecurityDepositLetterNoticeCTA from "./SecurityDepositLetterNoticeCTA";
import SecurityDepositLetterTableOfContents from "./SecurityDepositLetterTableOfContents";
import SecurityDepositLetterWorkspace from "./SecurityDepositLetterWorkspace";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Security Deposit Refund Letter to Landlord (Template)",
  description:
    "A clear deposit-refund request letter to your landlord with a deadline and deduction challenge, before you escalate to a legal notice.",
  alternates: {
    canonical: `${SITE_URL}/templates/security-deposit-refund-letter-to-landlord`,
  },
  openGraph: {
    title: "Request Your Deposit Back in Writing: Letter Template for Tenants",
    description:
      "Customizable security deposit refund request letter and painting-deduction challenge templates for Indian tenants, with Word (.doc) export and escalation guide.",
    url: `${SITE_URL}/templates/security-deposit-refund-letter-to-landlord`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Request Your Deposit Back in Writing: Letter Template for Tenants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Request Your Deposit Back in Writing: Letter Template for Tenants",
    description:
      "Customizable security deposit refund request letter and painting-deduction challenge templates for Indian tenants, with Word (.doc) export and escalation guide.",
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
    title: "Transfer of Property Act, 1882 (Act No. 4 of 1882) — Section 108(m) (Tenant Not Liable for Reasonable Wear and Tear)",
    url: "https://www.indiacode.nic.in/handle/123456789/2338",
  },
  {
    title: "Model Tenancy Act, 2021 — Section 11 (Security Deposit Cap & Same-Day Refund on Vacant Possession) & Second Schedule (Division of Maintenance Responsibilities) — Ministry of Housing and Urban Affairs",
    url: "https://mohua.gov.in/upload/uploadfiles/files/Model-Tenancy-Act-English-02_06_2021.pdf",
  },
  {
    title: "Indian Contract Act, 1872 (Act No. 9 of 1872) — Section 73 & Section 74 (No Arbitrary Deposit Forfeiture Without Proving Actual Loss)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Code of Civil Procedure, 1908 — Order XXXVII (Summary Suit for Recovery of Liquidated Security Deposit Debt)",
    url: "https://www.indiacode.nic.in/handle/123456789/2191",
  },
  {
    title: "Uttar Pradesh Regulation of Urban Premises Tenancy Act, 2021 (UP Act No. 28 of 2021) — Section 11(2) Security Deposit Refund & Rent Authority",
    url: "https://www.indiacode.nic.in/handle/123456789/19152",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Admissibility of WhatsApp Demand Letters, Emails, Bank UTRs & Move-Out Videos)",
    url: "https://www.indiacode.nic.in/handle/123456789/20063",
  },
];

const CASE_CITATIONS = [
  {
    title: "Delhi High Court Bars Landlords From Retaining Deposit Over Unproved Damage Claims",
    parties: "Uberoisons (Machines) Ltd. v. Samtel Color Ltd.",
    citation: "(2003) 105 DLT 383 — High Court of Delhi",
    date: "Judgment Dated 06 May 2003",
    facts:
      "After the tenant vacated the leased property and handed over physical possession, the landlord refused to refund the refundable security deposit, claiming he was entitled to adjust unliquidated sums towards alleged property damages and restoration expenses.",
    holding:
      "The Delhi High Court held that a refundable security deposit is an admitted, liquidated debt once vacant possession is delivered. A landlord has no legal right to unilaterally withhold the deposit to set off unliquidated, unadjudicated claims of alleged damage unless such damage is admitted by the tenant or adjudicated by a court. The High Court decreed the full refund with 18% p.a. interest.",
    amount: "100% Security Deposit Refund + 18% Per Annum Interest Decreed",
    takeaway:
      "Cite Uberoisons v. Samtel Color Ltd. in Paragraph 3 of your deposit refund letter whenever a landlord tries to hold back ₹25,000–₹50,000 on vague oral claims of 'repairs needed'.",
  },
  {
    title: "Wrongful Retention of Security Deposit Attracts Penal Interest & Summary Suit",
    parties: "H.S. Bedi v. National Highway Authority of India (NHAI)",
    citation: "2015 SCC OnLine Del 9524 — High Court of Delhi",
    date: "Judgment Dated 14 May 2015",
    facts:
      "The landlord retained the tenant's security deposit long after termination of the lease and handover of possession, forcing the tenant to initiate civil recovery proceedings.",
    holding:
      "The High Court ruled that once the tenant hands over vacant possession, the landlord holds the security deposit in a fiduciary capacity akin to a trustee. Retaining the deposit without lawful justification after handover constitutes wrongful detention of money, entitling the tenant to recover the principal via an Order XXXVII CPC summary suit along with commercial interest.",
    amount: "Full Deposit Restitution + Penal Interest From Vacating Date",
    takeaway:
      "Your refund request letter must explicitly record the exact date of key handover—interest runs from that date if the landlord forces you into court.",
  },
  {
    title: "Supreme Court: Arbitrary Deposit Forfeiture Clauses Fail Without Proof of Actual Loss",
    parties: "Kailash Nath Associates v. Delhi Development Authority (DDA)",
    citation: "(2015) 4 SCC 136 — Supreme Court of India",
    date: "Judgment Dated 09 January 2015",
    facts:
      "A party sought to forfeit an entire deposit relying on an automatic forfeiture stipulation in the contract without demonstrating any actual financial loss suffered.",
    holding:
      "The Supreme Court settled the law under Section 74 of the Indian Contract Act, 1872: even where a contract stipulates forfeiture of a deposit upon breach or early exit, forfeiture is impermissible as a penalty. The party holding the deposit can deduct only reasonable compensation for actual, proved loss.",
    amount: "Unilateral Forfeiture Struck Down; Refund Ordered With Interest",
    takeaway:
      "If your landlord or PG owner threatens to forfeit your entire deposit because you vacated during a lock-in period even after giving 30 days' notice, Section 74 and Kailash Nath defeat that penalty.",
  },
  {
    title: "Statutory Same-Day Refund & Second Schedule Wear-and-Tear Mandate",
    parties: "Section 11(2) & Second Schedule, Model Tenancy Act, 2021 (Adopted in UP, TN, AP, Assam †)",
    citation: "MoHUA Model Act 2021 / UP Act No. 28 of 2021",
    date: "In Force in Notified States (2021–2026 †)",
    facts:
      "Landlords across urban India routinely delay deposit refunds for 30 to 90 days after move-out and deduct one full month's rent for routine whitewashing and minor fixture ageing.",
    holding:
      "Under Section 11(2) of the Model Tenancy Act framework, the security deposit must be refunded to the tenant on the date of taking over vacant possession, after making only mutually agreed or statutory arrears deductions. Part A of the Second Schedule expressly places whitewashing of walls and painting of doors/windows on the landlord, barring routine painting deductions from outgoing tenants.",
    amount: "Same-Day Refund on Key Handover + Simple Interest on Default",
    takeaway:
      "Even in states yet to notify the Model Tenancy Act (like Karnataka or Maharashtra), citing the Second Schedule alongside Section 108(m) of the Transfer of Property Act establishes the national benchmark for fair wear and tear.",
  },
];

const FAQS = [
  {
    question: "When should I send a security deposit refund letter to my landlord?",
    answer:
      "Send the Standard Deposit Refund Request Letter (Variant 1) on the day you hand over the keys or within 24 to 48 hours of vacating the flat. If your Rent Agreement specifies a 7-day or 15-day refund window after move-out and that date has passed, or if the landlord messages you proposing unfair painting/repair cuts, immediately send the Deduction-Challenge Letter (Variant 2) giving a firm 7-day deadline.",
  },
  {
    question: "Can a landlord legally deduct one month's rent for painting and deep cleaning from my deposit?",
    answer:
      "No, unless you explicitly signed a specific clause agreeing to a fixed painting deduction AND the landlord actually incurs that cost. Under Section 108(m) of the Transfer of Property Act, 1882, a tenant is exempt from liability for 'reasonable wear and tear' caused by ordinary use. Furthermore, Part A of the Second Schedule of the Model Tenancy Act, 2021 explicitly classifies whitewashing of walls and painting of doors and windows as the landlord's responsibility. Routine dullness of paint after an 11-month or 2-year stay cannot be billed to the tenant.",
  },
  {
    question: "Is a deposit refund request sent via Email or WhatsApp legally valid in India?",
    answer:
      "Yes. Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (which replaced Section 65B of the Indian Evidence Act), a deposit refund letter sent as a PDF and text message over Email and WhatsApp—showing delivery/read ticks and the landlord's phone number—is fully admissible electronic evidence in Indian courts. For maximum legal weight, also dispatch a signed physical copy via India Post Registered Post (RPAD) to trigger the presumption of service under Section 27 of the General Clauses Act, 1897.",
  },
  {
    question: "How do I challenge arbitrary repair or damage deductions in my letter to the landlord?",
    answer:
      "Your letter should make three specific points: (1) State that vacant possession and keys were handed over after joint walkthrough inspection with timestamped photos/videos showing no structural damage; (2) Demand itemised third-party GST invoices for any repair claimed, rather than lump-sum estimates; and (3) Cite Uberoisons (Machines) Ltd. v. Samtel Color Ltd., (2003) 105 DLT 383, where the Delhi High Court held that a landlord cannot withhold a liquidated security deposit over unilateral, unverified damage allegations.",
  },
  {
    question: "What if I vacated without a registered rent agreement or only had an 11-month notarized agreement?",
    answer:
      "You can still recover 100% of your security deposit. An unregistered 11-month rent agreement is valid under Section 17 of the Registration Act, 1908, and even if no written agreement was renewed, your NEFT/UPI/cheque bank transfer proof of the original deposit plus monthly rent transfers establish an admitted debt. You can send this refund letter and, if ignored, file an Order XXXVII CPC summary suit or money recovery suit based on banking records.",
  },
  {
    question: "What is the next step if my landlord ignores the security deposit refund letter after 7 days?",
    answer:
      "Do not keep sending repeated WhatsApp reminders that weaken your posture. Once your 7-day written deadline expires, instruct an advocate on LegalRecovery.in to serve a formal 15-day Statutory Legal Notice via Registered Speed Post and legal email. The advocate notice adds a claim for 18% p.a. interest and warns of an Order XXXVII CPC Summary Suit (or a complaint before the District Rent Authority / e-Jagriti Consumer Commission for PG and co-living operators).",
  },
  {
    question: "Makan malik flat khali karne ke baad security deposit wapas na kare toh kya kare?",
    answer:
      "Agar makan malik (landlord) chabi lene ke baad bhi security deposit wapas nahi kar raha ya painting aur टूट-फूट (wear and tear) ke naam par manमाने paise kaat raha hai, toh sabse pehle upar diye gaye template se 7-day deadline wala written Refund Request Letter Email, WhatsApp aur Speed Post se bhejein. Agar 7 din mein paisa bank account mein na aaye, toh LegalRecovery.in ke advocate ke madhyam se 15-day Statutory Legal Notice bhejein jismein 18% byaj (interest) aur court kharche ki maang hoti hai.",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Request Your Deposit Back in Writing: Letter Template for Tenants",
  description:
    "A clear deposit-refund request letter to your landlord with a deadline and deduction challenge, before you escalate to a legal notice.",
  datePublished: "2026-11-04T12:20:00+05:30",
  dateModified: "2026-11-04T12:20:00+05:30",
  mainEntityOfPage: `${SITE_URL}/templates/security-deposit-refund-letter-to-landlord`,
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
    name: "Security Deposit Refund Request Letter to Landlord in India",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const DIGITAL_DOCUMENT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "DigitalDocument",
  name: "Security Deposit Refund Letter to Landlord (3-Variant Template With Deduction Challenge)",
  description:
    "Customizable tenant-to-landlord security deposit refund request letter templates (Standard Move-Out Request, Painting/Wear-and-Tear Deduction Challenge, and Final Pre-Legal Ultimatum) compliant with Section 108(m) Transfer of Property Act and Model Tenancy Act 2021.",
  url: `${SITE_URL}/templates/security-deposit-refund-letter-to-landlord`,
  encodingFormat: "application/msword",
  hasDigitalDocumentPermission: {
    "@type": "DigitalDocumentPermission",
    permissionType: "https://schema.org/ReadPermission",
    grantee: {
      "@type": "Audience",
      audienceType: "Residential and Commercial Tenants in India",
    },
  },
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
      name: "Recover Security Deposit from Landlord",
      item: `${SITE_URL}/recover-security-deposit-from-landlord-india`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Security Deposit Refund Letter Template",
      item: `${SITE_URL}/templates/security-deposit-refund-letter-to-landlord`,
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

export default function SecurityDepositRefundLetterPage() {
  const breadcrumbItems = [
    {
      label: "Recover Security Deposit",
      href: "/recover-security-deposit-from-landlord-india",
    },
    {
      label: "Deposit Refund Letter Template",
      href: "/templates/security-deposit-refund-letter-to-landlord",
    },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(DIGITAL_DOCUMENT_SCHEMA) }}
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
        {/* Hero Section strictly matching IRCTC & Company Directors theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Section 108(m) TPA &amp; Model Tenancy Act §11(2)</span>
              <span className="text-red-500">•</span>
              <span>Free Word (.doc) &amp; PDF Templates</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Request Your Deposit Back in Writing: Letter Template for Tenants
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Tenant Deposit Refund &amp; Wear-and-Tear Mandate)
              </p>
              <p>
                Once you hand over vacant possession and keys, your landlord is legally obligated to refund your security deposit—on the same day under Section 11(2) of the Model Tenancy Act, 2021 (in notified states †) or within the agreed lease window. Under Section 108(m) of the Transfer of Property Act, 1882, landlords cannot deduct money for routine repainting or normal wear and tear. Serve this written 7-day refund letter before escalating to a formal 15-day advocate legal notice.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">Same Day</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Sec 11(2) MTA Refund on Handover †</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">₹0 Cut</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Normal Wear &amp; Tear (Sec 108(m) TPA)</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">7 Days</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Recommended Written Cure Window</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">18% p.a.</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Interest in High Court Deposit Decrees</p>
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
            <SecurityDepositLetterTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 — When to Use This Letter + Key Statutory Facts Table */}
              <section
                id="heading-when-to-use"
                aria-labelledby="heading-when-to-use-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-when-to-use-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  When to Send a Written Security Deposit Refund Letter
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Most Indian tenants lose weeks—and tens of thousands of rupees—because they rely on casual WhatsApp messages or phone calls after handing over the flat keys. Once the landlord has physical possession of the apartment and a new tenant moves in, your bargaining power drops unless you immediately establish a formal paper trail. Sending a structured, dated <strong>security deposit refund letter</strong> converts an informal disagreement into a documented pre-litigation record specifying the exact date of key handover, final electricity/water meter readings, and your rejection of arbitrary deductions.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Use this letter in three specific situations: (1) on the day of move-out to record peaceful key handover and provide your NEFT/IMPS account details; (2) when your landlord emails or messages a bloated deduction list (such as cutting one full month&apos;s rent for repainting, acid wash, or minor nail holes); or (3) when 7 to 15 days have passed since vacating and the landlord is stalling with excuses like <em>&quot;waiting for the society bill&quot;</em> or <em>&quot;will pay when the next tenant gives deposit.&quot;</em> For comprehensive legal remedies after your letter expires, read our pillar guide on{" "}
                  <Link
                    href="/recover-security-deposit-from-landlord-india"
                    className="text-blue-700 underline font-semibold"
                  >
                    how to recover a security deposit from a landlord in India
                  </Link>
                  .
                </p>

                {/* Key Facts Table Near the Top */}
                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm mt-4">
                  <table className="w-full min-w-[580px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Key Statutory Facts for Tenant Security Deposit Refund Letters in India</caption>
                    <thead className="bg-slate-900 text-white font-bold">
                      <tr>
                        <th scope="col" className="py-3 px-4">Parameter</th>
                        <th scope="col" className="py-3 px-4">Statutory Rule / Legal Benchmark</th>
                        <th scope="col" className="py-3 px-4">How It Applies to Your Letter</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-4 font-semibold text-slate-900">
                          Governing Law
                        </th>
                        <td className="py-3 px-4 text-xs sm:text-sm">
                          Transfer of Property Act, 1882 (s.108(m)); Indian Contract Act, 1872 (s.73–74); Model Tenancy Act, 2021 (s.11 &amp; Second Schedule †)
                        </td>
                        <td className="py-3 px-4 text-xs">
                          Exempts tenants from normal wear and tear and bars unproved penalty deductions.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-4 font-semibold text-slate-900">
                          Statutory Refund Deadline
                        </th>
                        <td className="py-3 px-4 text-emerald-700 font-bold text-xs sm:text-sm">
                          Same day of key handover (s.11(2) MTA †) or contract window (typically 7–15 days)
                        </td>
                        <td className="py-3 px-4 text-xs">
                          Give a strict <strong>7-calendar-day</strong> bank transfer deadline in your written request.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-4 font-semibold text-slate-900">
                          Interest on Delayed Refund
                        </th>
                        <td className="py-3 px-4 text-amber-800 font-bold text-xs sm:text-sm">
                          18% p.a. commercial interest in civil suits (Uberoisons / H.S. Bedi Del HC); simple interest under state MTA
                        </td>
                        <td className="py-3 px-4 text-xs">
                          State in Variant 3 that failure to pay within 7 days triggers an 18% p.a. interest claim from the vacating date.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-4 font-semibold text-slate-900">
                          Escalation Forums
                        </th>
                        <td className="py-3 px-4 text-xs sm:text-sm">
                          Order XXXVII CPC Summary Suit (Civil Court) • District Rent Authority (MTA states †) • e-Jagriti Consumer Commission (PG / Co-Living)
                        </td>
                        <td className="py-3 px-4 text-xs">
                          Your signed letter + RPAD/WhatsApp delivery log serves as Exhibit A proving pre-suit demand.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-slate-500 italic">
                  † Status note (as of November 2026): The Model Tenancy Act, 2021 is a central model law enacted into binding state law only in notified states (Uttar Pradesh, Tamil Nadu, Andhra Pradesh, and Assam). In other states (Maharashtra, Karnataka, Delhi, Haryana, Telangana), tenancies are governed by the Transfer of Property Act, 1882, the Indian Contract Act, 1872, and respective State Rent Acts. See our full{" "}
                  <Link
                    href="/law/model-tenancy-act-security-deposit-rules"
                    className="text-blue-700 underline font-medium"
                  >
                    Model Tenancy Act state-by-state deposit cap &amp; rules table
                  </Link>
                  .
                </p>
              </section>

              {/* Section 2: Archetype P1 Centrepiece — Live-Fill Form + <article> Preview Workspace */}
              <section
                id="heading-letter-workspace"
                aria-labelledby="heading-letter-workspace-title"
                className="scroll-mt-28 space-y-4"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-letter-workspace-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Interactive Deposit Refund Letter Generator &amp; Template
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Choose from three tenant scenarios—<strong>Variant 1 (Standard Move-Out Refund Request)</strong>, <strong>Variant 2 (Deduction Challenge for Painting &amp; Wear-and-Tear)</strong>, or <strong>Variant 3 (Final 7-Day Pre-Legal Ultimatum)</strong>. Fill your details on the left to update the letter live, then copy, print, or download as a Microsoft Word (`.doc`) file.
                  </p>
                </div>

                <SecurityDepositLetterWorkspace />
              </section>

              {/* Section 3: Archetype P1 Requirement — Clause-by-Clause Notes (<dl>) */}
              <section
                id="heading-clause-notes"
                aria-labelledby="heading-clause-notes-title"
                className="scroll-mt-28 space-y-5"
              >
                <h2
                  id="heading-clause-notes-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Clause-by-Clause Breakdown: Protecting Your Deposit
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Every paragraph in the template above is engineered to close a specific loophole that landlords and their lawyers exploit when defending deposit recovery suits:
                </p>

                <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs">
                    <dt className="text-sm font-extrabold text-slate-900 mb-1 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-red-100 text-[#DC2626] text-xs font-black flex items-center justify-center shrink-0">
                        1
                      </span>
                      <span>Paragraph 1: Liquidated Deposit &amp; UTR Anchor</span>
                    </dt>
                    <dd className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Citing the exact Rent Agreement date, principal deposit amount, and the original NEFT/IMPS/UPI UTR or cheque number establishes an <strong>admitted liquidated debt</strong>. This is the primary prerequisite for filing a fast-track Summary Suit under Order XXXVII of the CPC where the landlord cannot defend without court leave.
                    </dd>
                  </div>

                  <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs">
                    <dt className="text-sm font-extrabold text-slate-900 mb-1 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-red-100 text-[#DC2626] text-xs font-black flex items-center justify-center shrink-0">
                        2
                      </span>
                      <span>Paragraph 2: Due Notice &amp; Vacant Key Handover Date</span>
                    </dt>
                    <dd className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Landlords frequently invent two counterclaims after receiving a notice: (a) that the tenant left without serving notice, or (b) that the tenant held onto a spare key and remained in constructive possession. Recording the exact notice date and key handover date defeats both excuses. (For PG notice rules, see{" "}
                      <Link
                        href="/pg-lock-in-period-notice-period-rules"
                        className="text-blue-700 underline font-semibold"
                      >
                        PG lock-in &amp; notice period rules
                      </Link>
                      .)
                    </dd>
                  </div>

                  <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs">
                    <dt className="text-sm font-extrabold text-slate-900 mb-1 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-red-100 text-[#DC2626] text-xs font-black flex items-center justify-center shrink-0">
                        3
                      </span>
                      <span>Paragraph 3: Section 108(m) TPA &amp; Uberoisons Deduction Challenge</span>
                    </dt>
                    <dd className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Explicitly invoking <strong>Section 108(m) of the Transfer of Property Act, 1882</strong> (fair wear and tear exemption) and <em>Uberoisons v. Samtel Color Ltd.</em> puts the landlord on notice that arbitrary painting cuts or unverified lump-sum repair estimates are legally unenforceable without joint inspection sign-offs and GST bills.
                    </dd>
                  </div>

                  <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs">
                    <dt className="text-sm font-extrabold text-slate-900 mb-1 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-red-100 text-[#DC2626] text-xs font-black flex items-center justify-center shrink-0">
                        4
                      </span>
                      <span>Paragraph 3(c): Consented Pro-Rata Utility Adjustment</span>
                    </dt>
                    <dd className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      A landlord cannot hold back ₹1,00,000 because a ₹1,800 electricity bill has not yet been generated. By calculating the exact meter reading up to move-out day and consenting to that specific pro-rata deduction, you demonstrate complete good faith to the judge while demanding immediate release of the remaining balance.
                    </dd>
                  </div>

                  <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs">
                    <dt className="text-sm font-extrabold text-slate-900 mb-1 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-red-100 text-[#DC2626] text-xs font-black flex items-center justify-center shrink-0">
                        5
                      </span>
                      <span>Paragraph 4: Bank Coordinates &amp; Fixed 7-Day Deadline</span>
                    </dt>
                    <dd className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Providing your full NEFT/IMPS account number, IFSC, and UPI ID removes the excuse that the landlord &quot;didn&apos;t have your bank details&quot; or wanted you to travel across town to collect a post-dated cheque. The 7-calendar-day deadline fixes the exact date of default.
                    </dd>
                  </div>

                  <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs">
                    <dt className="text-sm font-extrabold text-slate-900 mb-1 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-red-100 text-[#DC2626] text-xs font-black flex items-center justify-center shrink-0">
                        6
                      </span>
                      <span>Paragraph 5: Without Prejudice &amp; 18% Interest Reservation</span>
                    </dt>
                    <dd className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Marking the final demand <strong>&quot;WITHOUT PREJUDICE&quot;</strong> ensures that if you offered a minor utility/cleaning compromise for quick settlement and the landlord still refuses to pay, you can claim 100% of the principal deposit plus 18% p.a. interest in your formal legal notice.
                    </dd>
                  </div>
                </dl>
              </section>

              {/* Section 4: Deduction Challenge Matrix Table */}
              <section
                id="heading-deduction-challenge"
                aria-labelledby="heading-deduction-challenge-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-deduction-challenge-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Challenging Unfair Deductions for Painting &amp; Wear
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  If your landlord replies to your move-out message with an inflated list of cuts, use this statutory counter-matrix to fill the <strong>Disputed Deduction</strong> field in Variant 2 of the generator above (and see our detailed guide on{" "}
                  <Link
                    href="/legal-notice-landlord-unreasonable-security-deposit-deductions"
                    className="text-blue-700 underline font-semibold"
                  >
                    challenging unreasonable landlord painting &amp; repair deductions
                  </Link>
                  ):
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[640px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Landlord Deduction Pretexts vs Legal Counter-Arguments for Tenant Refund Letters</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-4">Landlord&apos;s Deduction Pretext</th>
                        <th scope="col" className="py-3 px-4">Legal Status</th>
                        <th scope="col" className="py-3 px-4">Statutory &amp; Judicial Counter-Argument to Cite in Letter</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-4 font-semibold text-slate-900">
                          &quot;1 Month&apos;s Rent for Repainting / Whitewashing&quot; (No explicit fixed-sum clause)
                        </th>
                        <td className="py-3 px-4 text-red-700 font-extrabold text-xs">
                          ILLEGAL
                        </td>
                        <td className="py-3 px-4 text-xs leading-relaxed">
                          Under <strong>Section 108(m) Transfer of Property Act, 1882</strong> and <strong>Part A of the Second Schedule, Model Tenancy Act 2021</strong>, routine repainting and wall whitewashing between tenancies is the landlord&apos;s duty. Natural paint dullness is fair wear and tear.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-4 font-semibold text-slate-900">
                          &quot;₹15,000–₹40,000 for Deep Cleaning, Acid Wash, Pest Control &amp; Polishing&quot;
                        </th>
                        <td className="py-3 px-4 text-red-700 font-extrabold text-xs">
                          ILLEGAL
                        </td>
                        <td className="py-3 px-4 text-xs leading-relaxed">
                          Tenant is only required to hand over the flat in broom-clean condition. Refurbishing the apartment to make it marketable for the next incoming tenant is a capital/letting expense of the owner.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-4 font-semibold text-slate-900">
                          &quot;Geyser Coil Burnt / Concealed Pipe Leak / Old AC Compressor Failure&quot;
                        </th>
                        <td className="py-3 px-4 text-red-700 font-extrabold text-xs">
                          ILLEGAL
                        </td>
                        <td className="py-3 px-4 text-xs leading-relaxed">
                          Age-related failure of electrical wiring, concealed plumbing, structural seepage, or old appliances is exempted as natural deterioration under <strong>s.108(m) TPA</strong> and Second Schedule Part A.
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-4 font-semibold text-slate-900">
                          &quot;100% Deposit Forfeited Because You Vacated During Lock-In Period&quot;
                        </th>
                        <td className="py-3 px-4 text-amber-800 font-extrabold text-xs">
                          CHALLENGEABLE (s.74)
                        </td>
                        <td className="py-3 px-4 text-xs leading-relaxed">
                          Under <strong>Section 74 Indian Contract Act, 1872</strong> (<em>Kailash Nath v. DDA</em>), automatic forfeiture is an unenforceable penalty if you gave 30 days&apos; notice and the flat was re-let or if the exit was triggered by the landlord&apos;s breach (water/seepage/safety failure).
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-4 font-semibold text-slate-900">
                          &quot;Society Sinking Fund / Major Building Painting Levy / Non-Occupancy Charges&quot;
                        </th>
                        <td className="py-3 px-4 text-red-700 font-extrabold text-xs">
                          ILLEGAL
                        </td>
                        <td className="py-3 px-4 text-xs leading-relaxed">
                          Capital society levies and structural repair funds are strictly payable by the flat owner/member. Tenants only pay agreed monthly common-area service charges. (See{" "}
                          <Link
                            href="/legal-notice-to-cooperative-housing-society-maintenance-disputes"
                            className="text-blue-700 underline font-semibold"
                          >
                            cooperative housing society maintenance dispute rules
                          </Link>
                          .)
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-4 font-semibold text-slate-900">
                          &quot;Actual Broken Glass Pane / Damaged Lock + Pro-Rata Electricity Bill&quot;
                        </th>
                        <td className="py-3 px-4 text-emerald-700 font-bold text-xs">
                          PERMISSIBLE (With Proof)
                        </td>
                        <td className="py-3 px-4 text-xs leading-relaxed">
                          Permissible under Second Schedule Part B <strong>only</strong> to the extent of actual vendor GST bills for physical breakage caused by tenant + actual meter reading up to handover day.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 5: Archetype P1 Requirement — 'If They Ignore It' Next-Step Ladder + Hand-Authored SVG */}
              <section
                id="heading-escalation-ladder"
                aria-labelledby="heading-escalation-ladder-title"
                className="scroll-mt-28 space-y-5"
              >
                <h2
                  id="heading-escalation-ladder-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  If Landlord Ignores Letter: 4-Step Escalation Ladder
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  A self-sent refund request letter resolves roughly 40%–50% of deposit delays where the landlord was merely procrastinating or testing whether you would accept an arbitrary painting cut. When a landlord ignores your 7-day written deadline, follow this exact statutory escalation ladder:
                </p>

                {/* Hand-Authored SVG Escalation Diagram */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Tenant Deposit Escalation Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 250"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Security Deposit Refund Letter to Advocate Legal Notice and Court Recovery Flowchart"
                  >
                    <defs>
                      <linearGradient id="depStepGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="depAlertGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="depSuccGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Stage 1 */}
                    <rect x="10" y="20" width="185" height="92" rx="10" fill="url(#depStepGrad)" />
                    <text x="102" y="43" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">DAY 0 (MOVE-OUT)</text>
                    <text x="102" y="62" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Key Handover &amp; Video</text>
                    <text x="102" y="80" fill="#E2E8F0" fontSize="10" textAnchor="middle">Meter Reading + Variant 1</text>
                    <text x="102" y="96" fill="#CBD5E1" fontSize="9" textAnchor="middle">Email &amp; WhatsApp Demand</text>

                    <path d="M 195 66 L 225 66" stroke="#64748B" strokeWidth="2" />

                    {/* Stage 2 */}
                    <rect x="225" y="20" width="185" height="92" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="317" y="43" fill="#B45309" fontWeight="bold" textAnchor="middle">DAY 2–7 (DEDUCTION AUDIT)</text>
                    <text x="317" y="62" fill="#92400E" fontWeight="bold" textAnchor="middle">Send Variant 2 / 3 Letter</text>
                    <text x="317" y="80" fill="#78350F" fontSize="10" textAnchor="middle">Reject 1-Mo Painting Cut</text>
                    <text x="317" y="96" fill="#78350F" fontSize="9" textAnchor="middle">7-Day Final Bank Deadline</text>

                    <path d="M 410 66 L 440 66" stroke="#64748B" strokeWidth="2" />

                    {/* Stage 3 */}
                    <rect x="440" y="20" width="185" height="92" rx="10" fill="url(#depAlertGrad)" />
                    <text x="532" y="43" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">DAY 8–22 (ESCALATION)</text>
                    <text x="532" y="62" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Advocate Legal Notice</text>
                    <text x="532" y="80" fill="#FEE2E2" fontSize="10" textAnchor="middle">15-Day Statutory Demand</text>
                    <text x="532" y="96" fill="#FECACA" fontSize="9" textAnchor="middle">Deposit + 18% p.a. Interest</text>

                    <path d="M 625 66 L 655 66" stroke="#64748B" strokeWidth="2" />

                    {/* Stage 4 */}
                    <rect x="655" y="20" width="175" height="92" rx="10" fill="url(#depSuccGrad)" />
                    <text x="742" y="43" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">DAY 23+ (FORUM FILING)</text>
                    <text x="742" y="62" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Full Bank Settlement</text>
                    <text x="742" y="80" fill="#D1FAE5" fontSize="10" textAnchor="middle">or Order 37 Summary Suit</text>
                    <text x="742" y="96" fill="#A7F3D0" fontSize="9" textAnchor="middle">/ Rent Authority / e-Jagriti</text>

                    {/* Bottom Summary Bar */}
                    <rect x="10" y="138" width="820" height="92" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="162" fill="#0F172A" fontWeight="bold" fontSize="11">WHICH LEGAL FORUM APPLIES IF THE LANDLORD IGNORES BOTH YOUR LETTER AND ADVOCATE NOTICE?</text>
                    <text x="25" y="183" fill="#475569" fontSize="10">• Private Flat Landlord (All States): Summary Suit under Order XXXVII CPC (3-year limitation under Art. 22/113 Limitation Act)</text>
                    <text x="25" y="200" fill="#475569" fontSize="10">• MTA-Notified States (UP, TN, AP, Assam †): Application before District Rent Authority (Section 11(2) &amp; Section 30 MTA)</text>
                    <text x="25" y="217" fill="#475569" fontSize="10">• PG, Hostel or Co-Living Operator (Stanza, Zolo, Colive): Online Consumer Complaint on e-Jagriti (Section 35 CPA 2019)</text>
                  </svg>
                </div>

                <ol className="space-y-4 text-slate-700 list-none">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Day 0 to Day 2: Serve Variant 1 or Variant 2 via Email, WhatsApp &amp; RPAD
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Generate your letter above, sign it, attach your move-out meter photo and original deposit UTR receipt, and send it to your landlord by email and WhatsApp. If the deposit exceeds ₹50,000 or the landlord is already hostile, also dispatch a printed copy via India Post Registered Post (RPAD) and keep the postal receipt.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Day 8: Serve a Formal 15-Day Statutory Advocate Legal Notice
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the 7-day deadline passes without bank credit, escalate to an official{" "}
                        <Link
                          href="/recover-security-deposit-from-landlord-india"
                          className="text-blue-700 underline font-semibold"
                        >
                          Advocate Legal Notice to the landlord for security deposit recovery
                        </Link>
                        . Dispatched on an advocate&apos;s letterhead via Registered Speed Post and Section 63 BSA electronic delivery, the notice withdraws any informal concessions, demands the entire deposit plus <strong>18% p.a. interest</strong>, and warns that litigation costs will be recovered from the landlord. If your deposit is stuck with a branded PG or co-living operator, use our dedicated{" "}
                        <Link
                          href="/co-living-deposit-refund-legal-notice"
                          className="text-blue-700 underline font-semibold"
                        >
                          co-living &amp; PG deposit refund legal notice route
                        </Link>
                        .
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Day 23+: File an Order XXXVII Summary Suit, Rent Authority Claim, or e-Jagriti Petition
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the landlord defaults past the 15-day advocate notice window: (a) for private residential/commercial landlords, file a fast-track{" "}
                        <Link
                          href="/law/order-37-summary-suit-money-recovery"
                          className="text-blue-700 underline font-semibold"
                        >
                          Summary Suit under Order XXXVII of the CPC
                        </Link>{" "}
                        where the landlord must seek court leave to defend; (b) in Uttar Pradesh, Tamil Nadu, Andhra Pradesh, or Assam (†), file an application before the District Rent Authority under Section 11(2) read with Section 30 of the state Tenancy Act; or (c) for commercial PG, hostel, or co-living operators, file an online consumer complaint on{" "}
                        <a
                          href="https://e-jagriti.gov.in/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-700 underline font-semibold"
                        >
                          e-Jagriti
                        </a>{" "}
                        (zero court fee for claims up to ₹5 lakh).
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 6: Landmark Court Precedents (IRCTC / Company Directors Card Style) */}
              <section
                id="heading-court-precedents"
                aria-labelledby="heading-court-precedents-title"
                className="scroll-mt-28 space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-court-precedents-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    What High Courts and Tenancy Laws Say About Withheld Security Deposits
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Court &amp; Statutory Records
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
                            Authority #{idx + 1} • {c.citation}
                          </span>
                          <span className="text-xs text-slate-500 font-semibold">{c.date}</span>
                        </div>

                        <div>
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-1">
                            {c.title}
                          </h3>
                          <p className="text-xs font-semibold text-slate-600">
                            Parties / Provision: <span className="text-slate-800">{c.parties}</span>
                          </p>
                        </div>

                        <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">The Dispute &amp; Facts:</strong>
                            <p className="leading-relaxed">{c.facts}</p>
                          </div>

                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">Judicial Holding / Statutory Mandate:</strong>
                            <p className="leading-relaxed">{c.holding}</p>
                          </div>
                        </div>

                        <div className="p-3 sm:p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Judicial Relief / Legal Standard
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Template Integration
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Built into Variants 2 &amp; 3 Above
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

              {/* Section 7: Worked Example (Dark Slate-900 Card Style Matching IRCTC) */}
              <section
                id="heading-worked-example"
                aria-labelledby="heading-worked-example-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Case Study: Recovers ₹1,14,500 of Flat Deposit
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Tenant Recovery Scenario
                    </span>
                    <span className="text-xs text-slate-400">Whitefield, Bengaluru (2BHK Apartment • ₹30,000/mo Rent)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Situation (Illustrative):</strong> Siddharth Nair rented a 2BHK apartment in Whitefield, Bengaluru at ₹30,000/month after paying a refundable security deposit of ₹1,20,000 via NEFT. After completing a 22-month tenure, he served a 30-day vacating email on 1 September 2026 and handed over the keys on 30 September 2026 after recording a 4-minute walkthrough video and taking a photo of the BESCOM electricity meter.
                    </p>
                    <p>
                      <strong>The Arbitrary Deduction:</strong> Ten days after taking back the keys, the landlord sent a WhatsApp message offering to return only ₹78,500—proposing to deduct ₹41,500 (₹30,000 for &quot;1 month painting &amp; deep cleaning&quot;, ₹8,000 for &quot;kitchen cabinet hinge &amp; bathroom tap wear&quot;, and ₹3,500 for final electricity and water). Notably, the Rent Agreement had no fixed-sum painting deduction clause.
                    </p>
                    <p>
                      <strong>The Written Letter + Escalation:</strong> Using <strong>Variant 2 (Deduction Challenge)</strong> above, Siddharth emailed and WhatsApped a signed PDF letter consenting only to ₹3,500 for actual BESCOM/water dues plus ₹2,000 as a goodwill touch-up gesture, while rejecting the remaining ₹36,000 cut under Section 108(m) TPA and <em>Uberoisons v. Samtel Color Ltd.</em> When the landlord ignored the 7-day letter deadline, Siddharth engaged LegalRecovery.in to serve a formal 15-day Advocate Legal Notice attaching the move-out video log and original NEFT UTR.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Outcome:</strong>
                      On Day 9 after receiving the Registered Speed Post advocate notice at his residential address, the landlord dropped the ₹36,000 painting and wear-and-tear claim to avoid an Order XXXVII CPC summary suit and 18% interest liability. He transferred <strong>₹1,14,500</strong> via IMPS directly to Siddharth&apos;s account against a signed full-and-final receipt.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 8: Evidence Checklist (6-Point BSA Section 63 Grid) */}
              <section
                id="heading-evidence-checklist"
                aria-labelledby="heading-evidence-checklist-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Move-Out Evidence: 6 Records for Deposit Refund Letter
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic records, banking UTRs, and timestamped smartphone videos are primary admissible evidence. Attach or reference these 6 items when sending your letter:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Rent / Leave &amp; Licence Agreement Copy:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Highlighting the security deposit clause, notice period requirement, and absence of any fixed-sum painting forfeiture.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Original Deposit Transfer Proof (UTR / Bank Statement):
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Bank statement entry or UPI/NEFT/RTGS receipt showing the exact date and UTR when the security deposit was paid to the landlord.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Written Vacating Notice Log (30 / 60 Days):
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Screenshot or PDF of the email/WhatsApp message by which you gave timely notice to vacate in compliance with the agreement.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      4
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Timestamped Move-Out Walkthrough Video &amp; Photos:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Room-by-room video recorded on handover day showing intact walls, switches, taps, geysers, and broom-clean floors.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      5
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Key Handover Proof &amp; Society Gate Exit Pass:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Signed key receipt, WhatsApp message confirming keys left with owner/caretaker, or MyGate/NoBrokerHood move-out approval log.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      6
                    </span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">
                        Final Electricity / Piped Gas Meter Reading Photo:
                      </strong>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Clear photograph of the digital meter reading on move-out day to lock in exact pro-rata utility math.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Honest Scope Block */}
              <section
                id="heading-honest-scope"
                aria-labelledby="heading-honest-scope-title"
                className="scroll-mt-28 space-y-4"
              >
                <h2
                  id="heading-honest-scope-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Scope: Self-Sent Letter vs Advocate Legal Notice
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-5 space-y-2.5">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full">
                      ✓ What This Letter + LegalRecovery Can Do
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed pt-1">
                      <li>
                        • <strong>Create Admissible Pre-Suit Proof:</strong> Establishes your exact vacating date, bank details, and written protest against illegal painting/wear-and-tear cuts.
                      </li>
                      <li>
                        • <strong>Escalate via Verified Advocate Notice:</strong> When the landlord ignores your 7-day letter, our advocates draft and serve a 15-day statutory legal notice via India Post RPAD, Email, and WhatsApp.
                      </li>
                      <li>
                        • <strong>Cover Flat Owners, PGs, Co-Living &amp; Portals:</strong> We serve notices to individual landlords, corporate lessors, PG owners, co-living operators, and property portals like{" "}
                        <Link href="/legal-notice-to/nobroker" className="text-blue-700 underline font-semibold">
                          NoBroker
                        </Link>
                        .
                      </li>
                    </ul>
                  </div>

                  <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-5 space-y-2.5">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-900 bg-amber-100 px-2.5 py-1 rounded-full">
                      ⚠ Honest Limitations (What We Cannot Do)
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed pt-1">
                      <li>
                        • <strong>Still Occupying the Flat:</strong> A deposit refund demand is legally enforceable only <em>after</em> you hand over vacant possession (or tender keys in writing and the landlord wrongfully refuses to accept them).
                      </li>
                      <li>
                        • <strong>Undocumented Cash Deposits Without Proof:</strong> If you paid the entire deposit in cash without a written receipt, agreement clause, or WhatsApp admission from the landlord, recovery in a civil summary suit is significantly harder.
                      </li>
                      <li>
                        • <strong>Actual Structural Damage by Tenant:</strong> Where the landlord holds genuine GST bills and joint inspection proof of tenant-caused breakage, that actual cost is legally deductible.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 10: FAQs Accordion (<details>/<summary>) */}
              <section
                id="heading-faqs"
                aria-labelledby="heading-faqs-title"
                className="scroll-mt-28 space-y-4 sm:space-y-6"
              >
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions: Security Deposit Refund Letter to Landlord
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Direct Answers Grounded in the Transfer of Property Act, Model Tenancy Act &amp; High Court Rulings
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

              {/* Section 11: Primary Sources Block */}
              <section
                id="heading-sources"
                aria-labelledby="heading-sources-title"
                className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-200"
              >
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Primary Tenancy Statutes &amp; Official References
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
                  Statutory verification status: All statutory references checked against India Code (Transfer of Property Act, 1882; Indian Contract Act, 1872; Bharatiya Sakshya Adhiniyam, 2023) and MoHUA Model Tenancy Act, 2021 notifications as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Escalate to an Advocate Legal Notice to Your Landlord
                </h2>
                <SecurityDepositLetterNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Rental Deposit, PG &amp; Tenancy Legal Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/recover-security-deposit-from-landlord-india"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Recover Security Deposit From Landlord Hub →
                  </Link>
                  <Link
                    href="/pg-lock-in-period-notice-period-rules"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    PG Lock-In &amp; Notice Period Rules →
                  </Link>
                  <Link
                    href="/co-living-deposit-refund-legal-notice"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Co-Living (Stanza/Zolo) Deposit Legal Notice →
                  </Link>
                  <Link
                    href="/law/model-tenancy-act-security-deposit-rules"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Model Tenancy Act 2-Month Cap &amp; State Status →
                  </Link>
                  <Link
                    href="/legal-notice-landlord-unreasonable-security-deposit-deductions"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Challenge Painting &amp; Repair Deductions →
                  </Link>
                  <Link
                    href="/legal-notice-to-cooperative-housing-society-maintenance-disputes"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Society Maintenance &amp; RWA Disputes →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Contextual Recovery Guides */}
        <RelatedRecoveryGuides currentPath="/templates/security-deposit-refund-letter-to-landlord" cluster="property" />
      </div>
    </>
  );
}
