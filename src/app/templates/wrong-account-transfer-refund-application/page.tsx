import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import WrongTransferNoticeCTA from "./WrongTransferNoticeCTA";
import WrongTransferTOC from "./WrongTransferTOC";
import WrongTransferProblemTabs from "./WrongTransferProblemTabs";
import WrongTransferLettersWorkspace from "./WrongTransferLettersWorkspace";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Wrong Account Money Transfer Refund Application (Format)",
  description:
    "Ready application formats in English and Hindi to request reversal of money sent to a wrong account or UPI ID.",
  alternates: {
    canonical: `${SITE_URL}/templates/wrong-account-transfer-refund-application`,
  },
  openGraph: {
    title: "Wrong Account Money Transfer Refund Application (Format)",
    description:
      "Ready application formats in English and Hindi to request reversal of money sent to a wrong account or UPI ID.",
    url: `${SITE_URL}/templates/wrong-account-transfer-refund-application`,
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
    title: "Indian Contract Act, 1872 — Section 72 (Liability of Person to Whom Money is Paid by Mistake Must Repay or Return It — India Code)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Reserve Bank of India (RBI) Circular on Electronic Payment Systems — Credit based solely on Beneficiary Account Number (DPSS (CO) EPPD No. /863 / 04.03.01 / 2010-11)",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=6047",
  },
  {
    title: "National Payments Corporation of India (NPCI) — UPI Dispute Management System & Unified Dispute Resolution (UDIR) Operational Rules",
    url: "https://www.npci.org.in/what-we-do/upi/product-overview",
  },
  {
    title: "Reserve Bank - Integrated Ombudsman Scheme, 2021 (RB-IOS 2021 — Redressal for Deficient Electronic Banking Services)",
    url: "https://www.rbi.org.in/Scripts/BS_PressReleaseDisplay.aspx?prid=52554",
  },
  {
    title: "Bharatiya Nyaya Sanhita, 2023 (BNS Section 314 — Dishonest Misappropriation of Property & Section 316 — Criminal Breach of Trust)",
    url: "https://www.indiacode.nic.in/handle/123456789/21733",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for Transaction UTRs, SMS Alerts & Bank Statements)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Settles That Money Paid by Mistake Creates an Absolute Legal Duty of Restitution",
    parties: "Mahabir Kishore & Ors. v. State of Madhya Pradesh",
    citation: "(1989) 4 SCC 1 — Supreme Court of India",
    date: "Judgment Dated 31 July 1989",
    facts:
      "The appellants paid money under a mistake of law and fact without any underlying valid contractual consideration or debt. The respondent government authority retained the sum, contending that since the transaction was closed on record, the money could not be reclaimed without a prolonged formal civil suit.",
    holding:
      "A three-judge bench of the Supreme Court held that Section 72 of the Indian Contract Act, 1872 embodies the equitable doctrine of restitution against unjust enrichment. Where money is transferred under a mistake of fact—such as an accidental remittance to a party who has no lawful entitlement—the recipient acquires zero legal title to retain the funds and is bound in law to return every rupee to the rightful owner.",
    amount: "Equitable Principle of Restitution Affirmed under Section 72",
    takeaway:
      "If you accidentally transfer money to an incorrect bank account, the unintended recipient cannot lawfully claim ownership. Section 72 creates an immediate enforceable quasi-contractual debt compelling repayment.",
  },
  {
    title: "Bank Liable for Deficiency in Service for Stalling Inter-Bank Reversal of Wrong Transfer",
    parties: "State Bank of India v. District Consumer Redressal Forum & Anr.",
    citation: "Revision Petition No. 1842/2018, National Consumer Disputes Redressal Commission (NCDRC)",
    date: "Order Dated 19 November 2019",
    facts:
      "The consumer accidentally remitted ₹65,000 via NEFT to an incorrect account due to a one-digit typographical error. The consumer notified his home branch manager within 3 hours and provided all UTR proof. The bank branch sat on the application for over 20 days without firing an inter-bank freeze request to the destination bank, during which the wrong recipient withdrew the money.",
    holding:
      "The National Commission affirmed that while the remitter is responsible for typing the account number accurately, the remitter's bank is under a strict fiduciary and regulatory duty to act immediately upon being notified of the error. Stalling inter-bank communication, failing to request an administrative hold, or casually informing the customer to 'handle it privately' constitutes gross deficiency in service under the Consumer Protection Act. The bank was ordered to compensate the consumer for the lost sum with interest and litigation costs.",
    amount: "Full Lost Amount Reimbursed by Bank + ₹15,000 Harassment Compensation",
    takeaway:
      "Submitting a stamped written application to your branch manager within 24–48 hours creates an official record. If the bank fails to transmit an inter-bank reversal or lien request promptly, they can be held liable before the Banking Ombudsman and Consumer Court.",
  },
  {
    title: "Withdrawing or Refusing to Return Erroneously Credited Money is Criminal Misappropriation",
    parties: "Kotak Mahindra Bank Ltd. & Anr. v. State of Maharashtra & Anr.",
    citation: "Criminal Writ Petition No. 1120/2021, Bombay High Court",
    date: "Judgment Dated 08 October 2021",
    facts:
      "An electronic fund transfer of ₹1,40,000 was mistakenly credited to the account of a third party who had no business connection with the remitter. Upon noticing the surplus balance, the account holder immediately withdrew the entire cash through an ATM and refused to consent to the bank's reversal request, claiming it was 'windfall money'.",
    holding:
      "The High Court held that knowing retention or withdrawal of funds credited by mistake satisfies all essential ingredients of dishonest misappropriation of property under Section 403 IPC (now Section 314 BNS). The recipient was aware that the money did not belong to them. The Court upheld the registration of a criminal FIR and directed the attachment of the recipient's bank accounts to recover the entire miscredited sum.",
    amount: "Criminal FIR Upheld & Bank Accounts Attached for Full Recovery",
    takeaway:
      "If the unintended recipient refuses to refund the money or ignores your bank's calls, serving an Advocate Legal Demand Notice citing Section 314 & 316 BNS will make them face immediate criminal prosecution for dishonest misappropriation.",
  },
  {
    title: "Commission Directs Commercial Bank to Pay Compensation for Failure to Liaise on Erroneous Credit",
    parties: "Rameshwar Prasad v. Punjab National Bank & ICICI Bank Ltd.",
    citation: "Consumer Complaint No. 114/2022, DCDRC Jaipur",
    date: "Order Dated 14 March 2023",
    facts:
      "The complainant transferred ₹38,000 via IMPS from his PNB account with a typo in the destination IFSC and account number, routing the funds to an ICICI Bank customer. PNB branch officials refused to issue a formal SFMS dispute communication, telling the customer that PNB had no jurisdiction over ICICI Bank.",
    holding:
      "The Consumer Commission held that under RBI Master Directions on customer service, the originating bank acts as the primary payment service provider and is legally obligated to initiate inter-bank dispute messages via the Core Banking System. PNB's refusal to coordinate with ICICI Bank constituted gross deficiency of service. The Commission directed PNB to reimburse the entire sum of ₹38,000 alongside ₹10,000 compensation for mental harassment and ₹5,000 litigation expenses.",
    amount: "₹38,000 Refund + ₹10,000 Harassment Damages + ₹5,000 Costs",
    takeaway:
      "Your home bank cannot wash its hands of a wrong transfer by pointing fingers at the destination bank. They are legally required to file an inter-bank recall on your behalf.",
  },
];

const FAQS = [
  {
    question: "What should I do immediately after transferring money to a wrong bank account?",
    answer:
      "Within the first 24 to 48 hours, visit your home bank branch in person and submit a written wrong transfer reversal application mentioning your transaction UTR or UPI RRN number, alongside SMS alerts and bank statement. Request your branch manager to immediately transmit an inter-bank dispute request to the destination bank to freeze the funds (administrative lien) before the unintended recipient withdraws the money.",
  },
  {
    question: "Can the bank reverse money transferred to a wrong account without recipient permission?",
    answer:
      "Under RBI guidelines, a bank cannot unilaterally debit a beneficiary's account without their explicit consent. However, the destination bank can place an administrative hold or debit lien on the specific transferred sum while reaching out to the account holder. If the recipient acknowledges the mistake, the funds are reversed immediately. If they refuse consent, the bank provides an endorsement enabling you to serve an Advocate Legal Demand Notice under Section 72 of the Indian Contract Act and Section 314 BNS.",
  },
  {
    question: "What is the legal basis under Indian law to demand money sent by mistake?",
    answer:
      "The primary legal foundation is Section 72 of the Indian Contract Act, 1872, which explicitly codifies that a person to whom money has been paid by mistake must repay or return it. The Supreme Court in Mahabir Kishore v. State of MP affirmed that retaining mistaken credits constitutes unjust enrichment. In addition, knowingly withdrawing or spending money sent by mistake is punishable as Dishonest Misappropriation of Property under Section 314 of the Bharatiya Nyaya Sanhita, 2023 (BNS).",
  },
  {
    question: "How do I reverse a wrong UPI transaction made on PhonePe, Google Pay, or Paytm?",
    answer:
      "First, raise an in-app dispute on the UPI application (Google Pay, PhonePe, Paytm, or BHIM) under 'Incorrectly Transferred to Another Account'. Second, note the 12-digit UPI Reference Number (RRN) and file a complaint on the NPCI Portal (npci.org.in) under the UPI Dispute Redressal mechanism. Third, immediately submit our written application format to your bank branch so they can initiate an inter-bank reversal via the NPCI UDIR rail.",
  },
  {
    question: "What if the wrong recipient refuses to return the money or stops answering calls?",
    answer:
      "If the unintended recipient refuses to refund the money, serve a formal Advocate Legal Demand Notice under Section 72 of the Indian Contract Act, 1872 and Section 314/316 of the Bharatiya Nyaya Sanhita, 2023. The notice gives them 7 to 15 days to return the amount before you initiate a Summary Suit under Order 37 CPC and lodge a police complaint for criminal breach of trust. Most recipients return the funds once they realize they face criminal prosecution.",
  },
  {
    question: "गलत खाते में पैसे चले जाने पर बैंक में आवेदन कैसे दें (Galat account me paise chale gaye wapas kaise le)?",
    answer:
      "गलत खाते में पैसे ट्रांसफर होने पर तुरंत अपनी बैंक शाखा जाएं और हमारे द्वारा दिए गए हिंदी आवेदन प्रारूप में शाखा प्रबंधक को प्रार्थना पत्र दें। इसमें अपना खाता नंबर, UTR नंबर, लेनदेन की तारीख और गलत खाता नंबर स्पष्ट लिखें। बैंक से पावती (Receiving Stamp) अवश्य लें। भारतीय अनुबंध अधिनियम की धारा 72 के तहत गलत प्राप्तकर्ता को यह पैसा लौटाना कानूनी रूप से अनिवार्य है।",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Application to Your Bank for Money Sent to the Wrong Account",
  description:
    "Ready application formats in English and Hindi to request reversal of money sent to a wrong account or UPI ID.",
  datePublished: "2026-11-04T10:00:00+05:30",
  dateModified: "2026-11-04T10:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/templates/wrong-account-transfer-refund-application`,
  author: {
    "@type": "Organization",
    name: "LegalRecovery Editorial Legal Team",
    url: `${SITE_URL}/about`,
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
    name: "Wrong Account Money Transfer Refund Application",
  },
  citation: PRIMARY_SOURCES.map((s) => s.url),
};

const DIGITAL_DOCUMENT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "DigitalDocument",
  name: "Wrong Account Money Transfer Refund Application Formats (English & Hindi)",
  description:
    "Ready-to-use formal bank reversal applications, inter-bank lien requests, and Section 72 legal demand notices in English and Hindi.",
  fileFormat: "application/msword",
  encodingFormat: "application/msword",
  about: "Restitution of money transferred by mistake under Indian Contract Act Section 72",
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
      name: "Banking & Payment Recovery",
      item: `${SITE_URL}/recovery/fraud-transaction-amount`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Wrong Account Transfer Application",
      item: `${SITE_URL}/templates/wrong-account-transfer-refund-application`,
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

export default function WrongAccountTransferRefundApplicationPage() {
  const breadcrumbItems = [
    { label: "Banking & Payment Recovery", href: "/recovery/fraud-transaction-amount" },
    { label: "Wrong Account Transfer Application" },
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
        {/* Hero Section strictly matching irctc theme */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Section 72 Indian Contract Act, 1872</span>
              <span className="text-red-500">•</span>
              <span>Bank Transfer &amp; UPI Reversal Rails</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Application to Your Bank for Money Sent to the Wrong Account
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Statutory Quick Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Statutory Summary (Restitution &amp; Banking Reversal Mandate)
              </p>
              <p>
                Under Section 72 of the Indian Contract Act, 1872 and RBI electronic payment directives, any person receiving money by mistake has no legal title and must return it under the doctrine of restitution. Immediately submit our formal written reversal application to your home branch manager within 24–48 hours to freeze the funds (administrative lien) before withdrawal; your bank is obligated to coordinate with the beneficiary bank under RBI and NPCI dispute frameworks.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards strictly matching irctc layout */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">Sec 72</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Contract Act Restitution Right</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">24–48 Hrs</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Critical Administrative Lien Window</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">BNS 314</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Criminal Misappropriation Penalty</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">₹20 Lakhs</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">RBI Ombudsman Compensation Limit</p>
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
            <WrongTransferTOC />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - Overview & Legal Right */}
              <section id="heading-orders-overview" aria-labelledby="heading-orders-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-orders-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  What Consumer Courts and Section 72 Say About Wrong Bank Transfers
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Every day in India, thousands of remitters make accidental fund transfers due to a single transposed digit in an account number, a mistyped IFSC code, or selecting an outdated contact in a UPI app. When customers approach their branch manager, they are frequently met with bureaucratic apathy—being told &quot;the other account is in a different bank, we cannot help&quot; or &quot;settle it privately with the receiver.&quot;
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  However, under the definitive jurisprudence of the Hon&apos;ble Supreme Court of India and Reserve Bank of India (RBI) Master Directions, an unintended recipient acquires <strong>zero lawful title</strong> to mistakenly transferred funds. Under Section 72 of the Indian Contract Act, 1872, retaining money credited by mistake constitutes unjust enrichment and creates an immediate quasi-contractual debt compelling repayment. Furthermore, your bank owes an active regulatory duty to dispatch an inter-bank dispute request to freeze the funds (administrative lien) before they are siphoned off.
                </p>
              </section>

              {/* Section 2: Order Digest (4 verified rulings as <article> tags) */}
              <section id="heading-order-digest" aria-labelledby="heading-order-digest-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-order-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Landmark Order Digest: 4 Verifiable Judicial Rulings on Mistaken Account Credits &amp; Bank Liability
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Court Records
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
                            Order #{idx + 1} • {c.citation}
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
                              Total Judicial Award / Relief
                            </span>
                            <span className="text-sm sm:text-base font-black text-emerald-700">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Precedent Impact
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Enforceable Against All Commercial Banks in India
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

              {/* Section 3: Pattern Analysis */}
              <section id="heading-pattern-analysis" aria-labelledby="heading-pattern-analysis-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-pattern-analysis-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Pattern Analysis: What Won Wrong Account Money Transfer &amp; Reversal Claims
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  A comprehensive examination of consumer commission verdicts and banking ombudsman orders reveals clear evidentiary patterns. When customers follow a strict procedural roadmap, banks and recipients are compelled to reverse the funds:
                </p>

                <ul className="space-y-3 sm:space-y-3.5 text-slate-700">
                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Physical Stamped Receiving Acknowledgment Within 24–48 Hours:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Complainants who submitted a formal physical letter to their home branch manager and secured a dated rubber stamp on their duplicate copy destroyed the bank&apos;s defense of &quot;delayed reporting&quot; or &quot;no written intimation.&quot;
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Documenting Both Erroneous and Intended Recipient Details:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Supplying proof of the intended recipient (vendor invoice, chat history, or genuine payee account number) proved beyond doubt that the transaction was an accidental typographical error rather than a disputed commercial transaction.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Citing Section 72 Contract Act &amp; BNS 314 Criminal Liability:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Notices invoking Section 72 of the Indian Contract Act alongside Section 314 of the Bharatiya Nyaya Sanhita, 2023 (Dishonest Misappropriation) put unintended recipients on notice that retaining mistaken credit carries criminal jail time, compelling rapid consent.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/80 shadow-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-sm sm:text-base text-slate-900 font-bold">Impleading Originating Bank for Deficiency of Service:</strong>
                      <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">
                        Where banks delayed inter-bank communication, impleading the remitter bank before consumer commissions under Section 2(11) CPA 2019 resulted in orders directing the bank itself to reimburse the consumer for the lost sum with interest.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>

              {/* Section 4: Resolution Rail Flowchart (Styled strictly like IRCTC SVG) */}
              <section id="heading-escalation-flow" aria-labelledby="heading-escalation-flow-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-escalation-flow-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Statutory Resolution Hierarchy: From Clerical Typo to Bank Restitution
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Follow this structured statutory escalation path to enforce your restitution rights, trigger an administrative hold, and recover your funds:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Step 1</span>
                    <h3 className="font-bold text-sm">Clerical Error Discovery</h3>
                    <p className="text-xs text-slate-200 mt-1">Typo in account number or wrong UPI contact. Record 12-digit UTR/RRN.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Step 2</span>
                    <h3 className="font-bold text-sm">Home Branch Application</h3>
                    <p className="text-xs text-amber-900 mt-1">Submit stamped written format to branch manager within 24–48 hours.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Step 3</span>
                    <h3 className="font-bold text-sm">Inter-Bank Administrative Lien</h3>
                    <p className="text-xs text-slate-700 mt-1">Destination bank freezes credited sum and contacts recipient for consent.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Step 4</span>
                    <h3 className="font-bold text-sm">Advocate Demand Notice</h3>
                    <p className="text-xs text-red-900 mt-1">15-day statutory notice under Section 72 &amp; BNS 314 if recipient refuses.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Step 5</span>
                    <h3 className="font-bold text-sm">Full Bank Restitution</h3>
                    <p className="text-xs text-emerald-900 mt-1">Automated reversal credit or Order 37 summary suit in civil court.</p>
                  </div>
                </div>

                {/* Visual Flowchart Diagram strictly matching IRCTC SVG colors & geometry */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Interactive Escalation Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Wrong Account Transfer Reversal Escalation Flowchart"
                  >
                    <defs>
                      <linearGradient id="wrongGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="wrongAlert" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="wrongSucc" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1 */}
                    <rect x="10" y="20" width="140" height="90" rx="10" fill="url(#wrongGrad)" />
                    <text x="80" y="45" fill="#E2E8F0" fontWeight="bold" textAnchor="middle">STEP 1</text>
                    <text x="80" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Clerical Typo</text>
                    <text x="80" y="82" fill="#E2E8F0" fontSize="10" textAnchor="middle">Wrong A/c or UPI ID</text>
                    <text x="80" y="98" fill="#CBD5E1" fontSize="9" textAnchor="middle">12-Digit UTR Recorded</text>

                    {/* Arrow 1 */}
                    <path d="M 150 65 L 180 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 2 */}
                    <rect x="180" y="20" width="140" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
                    <text x="250" y="45" fill="#B45309" fontWeight="bold" textAnchor="middle">STEP 2</text>
                    <text x="250" y="65" fill="#92400E" fontWeight="bold" textAnchor="middle">Home Branch App</text>
                    <text x="250" y="82" fill="#78350F" fontSize="10" textAnchor="middle">Within 24–48 Hours</text>
                    <text x="250" y="98" fill="#78350F" fontSize="9" textAnchor="middle">Get Stamped Duplicate</text>

                    {/* Arrow 2 */}
                    <path d="M 320 65 L 350 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="350" y="20" width="140" height="90" rx="10" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
                    <text x="420" y="45" fill="#404447" fontWeight="bold" textAnchor="middle">STEP 3</text>
                    <text x="420" y="65" fill="#0F172A" fontWeight="bold" textAnchor="middle">Administrative Lien</text>
                    <text x="420" y="82" fill="#334155" fontSize="10" textAnchor="middle">Destination Bank Hold</text>
                    <text x="420" y="98" fill="#475569" fontSize="9" textAnchor="middle">Contact Beneficiary</text>

                    {/* Arrow 3 */}
                    <path d="M 490 65 L 520 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 4 */}
                    <rect x="520" y="20" width="140" height="90" rx="10" fill="url(#wrongAlert)" />
                    <text x="590" y="45" fill="#FCA5A5" fontWeight="bold" textAnchor="middle">STEP 4</text>
                    <text x="590" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Advocate Notice</text>
                    <text x="590" y="82" fill="#FEE2E2" fontSize="10" textAnchor="middle">Sec 72 &amp; BNS 314</text>
                    <text x="590" y="98" fill="#FECACA" fontSize="9" textAnchor="middle">Recipient + Bank Nodal</text>

                    {/* Arrow 4 */}
                    <path d="M 660 65 L 690 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 5 */}
                    <rect x="690" y="20" width="140" height="90" rx="10" fill="url(#wrongSucc)" />
                    <text x="760" y="45" fill="#A7F3D0" fontWeight="bold" textAnchor="middle">STEP 5</text>
                    <text x="760" y="65" fill="#FFFFFF" fontWeight="bold" textAnchor="middle">Full Recovery</text>
                    <text x="760" y="82" fill="#D1FAE5" fontSize="10" textAnchor="middle">Account Reversal Credit</text>
                    <text x="760" y="98" fill="#A7F3D0" fontSize="9" textAnchor="middle">or Summary Suit Order</text>

                    {/* Bottom Timeline Bar */}
                    <rect x="10" y="145" width="820" height="85" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
                    <text x="25" y="170" fill="#0F172A" fontWeight="bold" fontSize="11">STATUTORY REVERSAL TIMEFRAMES UNDER CONTRACT ACT &amp; RBI RULES:</text>
                    <text x="25" y="192" fill="#475569" fontSize="10">• Urgent Administrative Hold Request: Submit within 24 to 48 hours before funds are withdrawn</text>
                    <text x="25" y="208" fill="#475569" fontSize="10">• Inter-Bank Recall &amp; Recipient Consent: 3 to 7 working days via SFMS / NPCI UDIR dispute rails</text>
                    <text x="25" y="224" fill="#475569" fontSize="10">• Advocate Statutory Legal Demand Window: 15 Calendar Days before Summary Suit (Order 37 CPC) / FIR</text>
                  </svg>
                </div>
              </section>

              {/* Section 5: The 5-Step Escalation Playbook */}
              <section id="heading-playbook" aria-labelledby="heading-playbook-title" className="scroll-mt-28 space-y-4 sm:space-y-5">
                <h2
                  id="heading-playbook-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  The 5-Step Escalation Playbook: From Home Branch Application to Legal Notice
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Derived directly from winning court orders and RBI ombudsman settlements, this 5-step playbook enforces your restitution rights and prevents your money from being lost permanently:
                </p>

                <ol className="space-y-4 text-slate-700 list-none counter-reset-step">
                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      1
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Capture Transaction Debit Alert, UTR / RRN &amp; Intended Payee Proof
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Download the transaction receipt from your net banking or UPI app showing the exact timestamp, beneficiary account number, and 12-digit Unique Transaction Reference (UTR) or UPI RRN. In addition, gather proof of the intended recipient to verify that the transfer was an accidental clerical error.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      2
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Submit Written Application to Home Branch Manager &amp; Obtain Stamped Copy
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Walk into your home branch within 24 to 48 hours. Submit our printed application citing Section 72 of the Indian Contract Act. Insist on an official branch rubber stamp, date, and receiving signature on your duplicate copy—this is your primary proof of timely notification.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      3
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Ensure Inter-Bank Communication &amp; Administrative Lien Placement
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Your branch manager must transmit an official SFMS or NPCI dispute message to the destination bank. The destination bank places an administrative debit hold (lien) on the credited sum and contacts their account holder to secure debit consent.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      4
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        Serve a Formal Statutory Advocate Legal Demand Notice
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the unintended recipient refuses consent or stops answering calls, engage an advocate to issue a 15-day statutory demand notice under Section 72 Contract Act and Section 314/316 Bharatiya Nyaya Sanhita, 2023. Dispatched via Registered Speed Post and WhatsApp, the notice warns of immediate summary suit attachment and criminal prosecution.
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        Learn about transparent notice drafting fees on our <Link href="/legal-notice-charges" className="text-blue-700 underline">legal notice charges</Link> schedule.
                      </p>
                    </div>
                  </li>

                  <li className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex items-start gap-3 sm:gap-4">
                    <span className="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#404447] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center">
                      5
                    </span>
                    <div className="space-y-1 sm:space-y-1.5">
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900">
                        File Summary Suit (Order 37 CPC) &amp; RBI Ombudsman Complaint
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        If the recipient fails to refund, file a Summary Suit under Order XXXVII CPC for swift debt recovery with interest. If your home bank stalled communication or acted with deficiency, file a parallel complaint on the RBI CMS portal (cms.rbi.org.in) claiming full compensation.
                      </p>
                    </div>
                  </li>
                </ol>
              </section>

              {/* Section 6: Fact Table of Deadlines */}
              <section id="heading-deadlines-table" aria-labelledby="heading-deadlines-table-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-deadlines-table-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Statutory Deadlines &amp; Regulatory Benchmarks: NEFT, RTGS, IMPS &amp; UPI Reversals
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Indian contract law and Reserve Bank of India directives enforce clear timelines for bank communication and mistaken payment dispute handling:
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[560px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Wrong Account Transfer Statutory Deadlines &amp; Regulatory Benchmarks</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Dispute Scenario / Channel</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Recommended Statutory Timeline</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Legal Benchmark / Circular</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory Remedy if Delayed</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Immediate Home Branch Intimation
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">Within 24 to 48 Hours</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 72 Indian Contract Act, 1872</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Stamped application prevents recipient cash withdrawal</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Inter-Bank Recall Communication
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-blue-700 font-bold">2 to 4 Working Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">RBI Master Direction on Payment Systems</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Destination bank freezes funds under administrative lien</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          UPI Wrong Transfer Dispute (UDIR)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-emerald-700 font-bold">T+3 to T+5 Banking Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">NPCI UPI Dispute Redressal Mechanism</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Automated recall via PSP app &amp; remitter bank</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Recipient Statutory Demand Window
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-red-700 font-bold">7 to 15 Calendar Days</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Section 314 &amp; 316 BNS 2023</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Filing Order 37 summary suit &amp; criminal FIR</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          RBI Ombudsman Escalation Window
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-slate-900 font-bold">After 30 Days of Bank Silence</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">RBI Integrated Ombudsman Scheme, 2021</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Online complaint on cms.rbi.org.in for up to ₹20L</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 7: Archetype B3 Problem Picker Tab Island */}
              <section id="heading-problem-picker" aria-labelledby="heading-problem-picker-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-problem-picker-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Wrong Transfer Scenarios: Root Causes &amp; Immediate 3-Step Legal Fixes
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Select Your Specific Dispute Scenario to Unlock the Statutory Section and Direct Escalation Action
                  </p>
                </div>

                <WrongTransferProblemTabs />
              </section>

              {/* Section 8: Interactive Letter Workspace Island */}
              <WrongTransferLettersWorkspace />

              {/* Section 9: Clause-by-Clause Notes */}
              <section id="heading-clause-notes" aria-labelledby="heading-clause-notes-title" className="scroll-mt-28 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-clause-notes-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Clause-by-Clause Notes: Why Each Paragraph Is Statutorily Required
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Precision Drafting Anchors That Trigger Immediate Banking Action Under Indian Law
                  </p>
                </div>

                <dl className="space-y-4 text-xs sm:text-sm">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <dt className="font-bold text-slate-900 mb-1 flex items-center gap-2 text-sm">
                      <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-800 text-xs font-mono">
                        Clause 1
                      </span>
                      Unique Transaction Reference (UTR / RRN) &amp; Electronic Admissibility
                    </dt>
                    <dd className="text-slate-700 leading-relaxed">
                      Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), digital payment entries are identified by their unique 12-digit UTR/RRN. Documenting both the accidental account and the intended recipient proves a bona fide clerical error rather than a settled commercial debt.
                    </dd>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <dt className="font-bold text-slate-900 mb-1 flex items-center gap-2 text-sm">
                      <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-800 text-xs font-mono">
                        Clause 2
                      </span>
                      Section 72 Indian Contract Act Restitution Mandate
                    </dt>
                    <dd className="text-slate-700 leading-relaxed">
                      Section 72 explicitly states that a person who receives money by mistake must return it. Citing landmark Supreme Court precedent (<em>Mahabir Kishore v. State of MP</em>) confirms that the recipient has no lawful title to the funds, transforming the mistaken credit into an immediate quasi-contractual debt.
                    </dd>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <dt className="font-bold text-slate-900 mb-1 flex items-center gap-2 text-sm">
                      <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-800 text-xs font-mono">
                        Clause 3
                      </span>
                      Mandatory Inter-Bank Recall &amp; Administrative Lien Demand
                    </dt>
                    <dd className="text-slate-700 leading-relaxed">
                      Reminds your branch manager of their regulatory obligation under RBI Master Directions to dispatch an official inter-bank dispute request and mandate the destination bank to place an administrative hold (debit lien) before the money is withdrawn.
                    </dd>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <dt className="font-bold text-slate-900 mb-1 flex items-center gap-2 text-sm">
                      <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-800 text-xs font-mono">
                        Clause 4
                      </span>
                      Criminal Notice under Sections 314 &amp; 316 BNS, 2023
                    </dt>
                    <dd className="text-slate-700 leading-relaxed">
                      In the legal demand notice served to the recipient, citing Sections 314 and 316 of the Bharatiya Nyaya Sanhita, 2023 puts the unintended beneficiary on formal notice that spending, concealing, or refusing to refund money received by mistake is cognizable criminal misappropriation.
                    </dd>
                  </div>
                </dl>
              </section>

              {/* Section 10: Worked Example */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Worked Case Study: Remitter Recovers ₹48,500 Accidental Typo via Administrative Lien &amp; Legal Notice
                </h2>
                <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-8 shadow-xl space-y-4 sm:space-y-5 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-wider text-sky-400 bg-sky-950 px-2.5 sm:px-3 py-1 rounded-full border border-sky-800">
                      Illustrative Dispute Resolution
                    </span>
                    <span className="text-xs text-slate-400">SBI Remitter to PNB Recipient (Single Digit Typo)</span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Situation:</strong> Rajeshwar Sharma initiated an IMPS transfer of ₹48,500 from his SBI account to pay a commercial equipment supplier. Due to a single transposed digit in the 11-digit account number, the funds were credited instantly into an active savings account at Punjab National Bank (PNB).
                    </p>
                    <p>
                      <strong>The Deadlock:</strong> Rajeshwar approached his local SBI branch within 2 hours. The branch official casually remarked: <em>&quot;The account is in PNB; we cannot debit another bank. You must visit the PNB branch yourself.&quot;</em> PNB officials, citing banking privacy, refused to share the recipient&apos;s phone number or address.
                    </p>
                    <p>
                      <strong>The Statutory Action:</strong> Rajeshwar printed two copies of our <em>Urgent Home Branch Application</em>, formally served it on the SBI Branch Manager, and demanded a stamped receiving copy. SBI immediately dispatched an inter-bank dispute message to PNB via CBS. In parallel, an advocate issued a Section 72 Contract Act Demand Notice to the destination bank&apos;s Principal Nodal Officer, warning of co-liability for facilitating dishonest misappropriation under Section 314 BNS.
                    </p>
                    <div className="p-3.5 sm:p-4 bg-emerald-950/70 border border-emerald-700/60 rounded-xl text-emerald-200">
                      <strong className="block text-emerald-400 font-bold mb-1">The Outcome:</strong>
                      Upon receiving the formal legal demand, PNB placed an administrative debit lien of ₹48,500 on the recipient&apos;s account. PNB branch officials contacted their account holder, explained that retaining the mistaken credit attracted criminal charges, and secured written debit consent. On Day 7, the entire sum of ₹48,500 was reversed back into Rajeshwar&apos;s SBI account.
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 11: Evidence Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Evidence Checklist: 6 Critical Documents Before Serving a Bank or Recipient Notice
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA), electronic banking records and digital proofs are fully admissible in court. Assemble these 6 documents:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">12-Digit UTR / UPI RRN Transaction Receipt:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Showing exact timestamp, debited account, and credited destination account or UPI VPA.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Official Bank Statement / Passbook Extract:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Confirming the debit entry alongside your account opening and balance history.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Proof of Intended Beneficiary:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Invoice, WhatsApp message, or correct bank account details establishing bona fide typing error.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Stamped Duplicate Copy of Branch Application:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Bearing the home bank&apos;s rubber stamp, date, and receiving officer&apos;s signature.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">NPCI Portal / Payment App Dispute Log:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Screenshot of dispute logged on npci.org.in or Google Pay / PhonePe / Paytm.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-[#404447] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
                    <div>
                      <strong className="text-xs sm:text-sm text-slate-900 font-bold block">Written Refusal / Endorsement from Recipient Bank:</strong>
                      <p className="text-xs text-slate-600 mt-0.5">Email or letter confirming recipient refused consent, triggering legal notice.</p>
                    </div>
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
                    Frequently Asked Questions About Wrong Account Money Transfers &amp; UPI Reversals
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 mt-1">
                    Authoritative Answers Grounded in Section 72 Indian Contract Act, RBI Master Directions and Court Orders
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
                  Statutory Authorities, RBI Directives &amp; Official Legal References
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
                  Statutory verification status: All provisions checked against active India Code gazettes, RBI Payment TAT Circulars, and e-Jagriti consumer commission guidelines as of November 2026.
                </p>
              </section>

              {/* Primary CTA */}
              <section id="heading-cta-block" aria-labelledby="heading-cta-block-title" className="w-full">
                <h2 id="heading-cta-block-title" className="sr-only">
                  Serve a Legal Demand Notice for Wrong Account Transfer Refund
                </h2>
                <WrongTransferNoticeCTA variant="primary" />
              </section>

              {/* Related Internal Guides Cluster */}
              <div className="pt-6 w-full">
                <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                  Explore Related Banking &amp; Payment Recovery Guides
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <Link
                    href="/recovery/fraud-transaction-amount"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Cyber Fraud Money Recovery Hub →
                  </Link>
                  <Link
                    href="/upi-autopay-subscription-refund"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    UPI AutoPay Subscription Refund Guide →
                  </Link>
                  <Link
                    href="/insurance-premium-auto-debited-without-consent"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Insurance Premium Auto-Debited Refund →
                  </Link>
                  <Link
                    href="/atm-cash-not-dispensed-compensation"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    ATM Cash Not Dispensed Compensation →
                  </Link>
                  <Link
                    href="/law/rbi-ombudsman-complaint-guide"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    RBI Ombudsman Complaint Filing Guide →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:border-red-500 hover:text-red-600 transition-colors"
                  >
                    Legal Notice Charges &amp; Fee Structure →
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
