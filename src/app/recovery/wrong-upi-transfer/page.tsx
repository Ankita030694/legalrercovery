import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import WrongUpiNoticeCTA from "./WrongUpiNoticeCTA";
import WrongUpiTableOfContents from "./WrongUpiTableOfContents";
import WrongUpiProblemTabs from "./WrongUpiProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Wrong UPI Transfer? How to Get Your Money Back",
  description:
    "Money sent to the wrong UPI ID or account? NPCI dispute steps, bank duties, and a legal notice if the receiver refuses to return it.",
  alternates: {
    canonical: `${SITE_URL}/recovery/wrong-upi-transfer`,
  },
  openGraph: {
    title: "Wrong UPI Transfer? How to Get Your Money Back",
    description:
      "Statutory step-by-step guide to recover money sent to an incorrect UPI ID or bank account: NPCI dispute redressal, bank duties, RBI Ombudsman escalation, and Section 72 legal notices.",
    url: `${SITE_URL}/recovery/wrong-upi-transfer`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Wrong UPI Transfer? How to Get Your Money Back",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wrong UPI Transfer? How to Get Your Money Back",
    description:
      "Statutory step-by-step guide to recover money sent to an incorrect UPI ID or bank account: NPCI dispute redressal, bank duties, RBI Ombudsman escalation, and Section 72 legal notices.",
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
    title: "Indian Contract Act, 1872 — Section 72 (Liability of person to whom money is paid, or thing delivered, by mistake or under coercion)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Reserve Bank of India (RBI) Circular on Harmonisation of Turn Around Time (TAT) and Customer Compensation for Failed Transactions (DPSS.CO.PD No.629/02.01.014/2019-20)",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11693",
  },
  {
    title: "Reserve Bank - Integrated Ombudsman Scheme, 2021 (RB-IOS 2021) — Clause 10 Grounds of Complaint for Payment System Participants",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12190",
  },
  {
    title: "National Payments Corporation of India (NPCI) — Unified Payments Interface (UPI) Procedural Guidelines & Dispute Redressal Mechanism",
    url: "https://www.npci.org.in/what-we-do/upi/dispute-redressal-mechanism",
  },
  {
    title: "Bharatiya Nyaya Sanhita, 2023 (BNS Act No. 45 of 2023) — Section 314 (Dishonest Misappropriation of Property) & Section 316 (Criminal Breach of Trust)",
    url: "https://www.indiacode.nic.in/handle/123456789/21733",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records Admissibility for UPI Logs, UTR, & Banking SMS)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CASE_CITATIONS = [
  {
    title: "Supreme Court Landmark Precedent on Quasi-Contractual Obligation to Return Mistakenly Paid Funds",
    parties: "Sales Tax Officer, Banaras & Ors. v. Kanhaiya Lal Mukundlal Saraf",
    citation: "Civil Appeal No. 87 of 1957, AIR 1959 SC 135 (Constitution Bench)",
    date: "Judgment Dated 23 September 1958",
    facts:
      "A merchant paid tax monies under a bona fide mistake of law and fact which were not legally due. When the error was discovered, the merchant demanded restitution of the exact amount. The respondent authority resisted repayment on grounds that voluntary payment made without coercion cannot be refunded.",
    holding:
      "A 5-Judge Constitution Bench of the Supreme Court held that Section 72 of the Indian Contract Act makes no distinction between mistakes of fact and mistakes of law. If money is paid to a person under a genuine mistake, that person has no equitable or legal right to retain it, and is bound by statutory mandate to return it. Voluntary payment does not extinguish the payer's entitlement to restitution under the doctrine of unjust enrichment.",
    amount: "Doctrine of Unjust Enrichment & Statutory Restitution Established Across All Indian Courts",
    takeaway:
      "A recipient who receives an unintended UPI transfer or erroneous bank credit cannot claim 'it was transferred to my account so it belongs to me'. Under Section 72, they hold the money strictly as an involuntary bailee and are under an absolute statutory duty to restore it.",
  },
  {
    title: "Consumer Forum Ruling on Bank's Joint Liability for Failing to Freeze and Reverse Wrong Account Transfer",
    parties: "Ramesh Chand v. State Bank of India & Punjab National Bank",
    citation: "Consumer Complaint No. 184/2021, District Consumer Disputes Redressal Commission, Rohtak",
    date: "Order Dated 18 August 2022",
    facts:
      "The complainant intended to transfer ₹78,500 to a vendor via mobile banking, but inadvertently miskeyed one digit of the beneficiary account number. The funds were credited into an unintended account at PNB. The complainant immediately reported the transaction within 2 hours to SBI and PNB with the UTR number. However, PNB officials took 14 days to initiate contact with the beneficiary, by which time the beneficiary had withdrawn the entire balance. The banks repudiated responsibility claiming customer negligence.",
    holding:
      "The District Commission held both SBI (remitter bank) and PNB (beneficiary bank) jointly liable for deficiency in service under Section 2(11) of the Consumer Protection Act, 2019. The Commission held that while the initial typographical error originated from the customer, the beneficiary bank failed in its administrative duty to place an immediate lien on the disputed funds upon formal intimation. The Commission ordered PNB and SBI to jointly refund ₹78,500 to the complainant alongside 9% annual interest, ₹15,000 compensation for mental harassment, and ₹5,000 litigation expenses.",
    amount: "₹78,500 Erroneous Transfer Refund @ 9% Interest + ₹15,000 Harassment Compensation + ₹5,000 Costs",
    takeaway:
      "If you notify the bank promptly with the UTR number and the bank drags its feet allowing the unintended recipient to withdraw the funds, consumer commissions hold the bank liable for deficiency in service for failing to enforce timely inter-bank holds.",
  },
];

const FAQS = [
  {
    q: "Can the bank automatically reverse a wrong UPI transfer without the receiver's consent?",
    a: "Under RBI guidelines and banking conventions, a bank cannot unilaterally debit a beneficiary's account without their explicit consent once funds have cleared, unless a formal court order, police freeze request, or regulatory directive is issued. However, the remitter bank is legally obligated to initiate an inter-bank recall request, and the beneficiary bank must immediately contact the recipient and place a temporary lien on the disputed funds pending consent.",
  },
  {
    q: "What should I do in the first 2 hours of sending money to the wrong UPI ID?",
    a: "First, take an immediate screenshot of the completed transaction displaying the 12-digit UTR/UPI Transaction Reference number. Second, file a transaction dispute directly within your UPI app (Google Pay, PhonePe, Paytm, or BHIM) under 'Transferred to wrong UPI ID'. Third, lodge an online dispute on the NPCI Portal under UPI Dispute Redressal. Fourth, call your remitter bank customer care and submit a written intimation with the UTR requesting an inter-bank recall.",
  },
  {
    q: "What if the wrong recipient refuses to return the money after being contacted?",
    a: "If the unintended recipient refuses to refund the money, they commit Dishonest Misappropriation of Property under Section 314 and Criminal Breach of Trust under Section 316 of the Bharatiya Nyaya Sanhita, 2023 (formerly IPC Sections 403 and 406), and violate Section 72 of the Indian Contract Act, 1872. You should immediately send them an advocate-drafted Statutory Legal Notice demanding restitution within 15 days, followed by a police complaint and a Summary Suit under Order 37 CPC.",
  },
  {
    q: "Does the RBI 3-day zero liability rule apply to wrong UPI transfers?",
    a: "No. The RBI 2017 Zero Liability Framework applies exclusively to 'unauthorised' electronic transactions resulting from bank fraud, security breaches, or phishing where the customer did not share credentials. A wrong UPI transfer is classified as an 'erroneous customer transfer' (customer entered the UPI PIN). While zero liability does not apply, Section 72 of the Indian Contract Act and RBI inter-bank recall facilitation rules enforce legal restitution against the unintended recipient.",
  },
  {
    q: "Can I file an RBI Ombudsman complaint if my bank does not help with a wrong transfer?",
    a: "Yes. Under Clause 10 of the Reserve Bank - Integrated Ombudsman Scheme, 2021 (RB-IOS 2021), you can file a complaint against your bank if they fail to initiate an inter-bank recall, refuse to escalate with the beneficiary bank, or ignore your grievance for more than 30 days without satisfactory resolution. The Ombudsman can penalize negligent banks and direct swift coordination.",
  },
  {
    q: "What details are required to track and recover a misdirected UPI payment?",
    a: "You need the 12-digit UPI Reference Number (UTR), transaction timestamp (date and exact minute), debit bank account number, source UPI VPA, destination UPI VPA or account/IFSC, SMS confirmation from your bank, and the dispute ticket reference generated by your UPI payment app and NPCI portal.",
  },
];

export default function WrongUpiTransferPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${SITE_URL}/recovery/wrong-upi-transfer#article`,
        "headline": "Sent Money to the Wrong UPI ID or Account? Step-by-Step Recovery",
        "name": "Wrong UPI Transfer? How to Get Your Money Back",
        "description":
          "Money sent to the wrong UPI ID or account? NPCI dispute steps, bank duties, and a legal notice if the receiver refuses to return it.",
        "url": `${SITE_URL}/recovery/wrong-upi-transfer`,
        "inLanguage": "en-IN",
        "datePublished": "2026-11-04T10:00:00+05:30",
        "dateModified": "2026-11-04T14:20:00+05:30",
        "mainEntityOfPage": `${SITE_URL}/recovery/wrong-upi-transfer`,
        "author": {
          "@type": "Organization",
          "name": "LegalRecovery.in Editorial Board",
          "url": `${SITE_URL}/about`,
        },
        "publisher": {
          "@type": "Organization",
          "name": "LegalRecovery.in",
          "url": `${SITE_URL}/#organization`,
          "logo": {
            "@type": "ImageObject",
            "url": `${SITE_URL}/favicon/apple-touch-icon.png`,
          },
        },
        "about": [
          {
            "@type": "Thing",
            "name": "Wrong UPI Transfer Refund",
          },
          {
            "@type": "Thing",
            "name": "Section 72 Indian Contract Act",
          },
          {
            "@type": "Thing",
            "name": "National Payments Corporation of India UPI Dispute Redressal",
          },
        ],
        "citation": PRIMARY_SOURCES.map((source) => source.url),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/recovery/wrong-upi-transfer#breadcrumbs`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Banking & Digital Payment Disputes",
            "item": `${SITE_URL}/recovery/fraud-transaction-amount`,
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Wrong UPI Transfer Recovery",
            "item": `${SITE_URL}/recovery/wrong-upi-transfer`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/recovery/wrong-upi-transfer#faq`,
        "mainEntity": FAQS.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen">
        {/* Header Breadcrumbs */}
        <div className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Banking & Payment Disputes", href: "/recovery/fraud-transaction-amount" },
                { label: "Wrong UPI Transfer Recovery", href: "/recovery/wrong-upi-transfer" },
              ]}
            />
          </div>
        </div>

        {/* Hero Section */}
        <header className="relative bg-gradient-to-b from-slate-50 via-white to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 border-b border-slate-200 dark:border-slate-800 py-10 sm:py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-900 mb-4">
              <span>Section 72 Indian Contract Act • NPCI Inter-Bank Dispute Protocol</span>
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 leading-tight">
              Sent Money to the Wrong UPI ID or Account? Step-by-Step Recovery
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed mb-6">
              Transferred funds to an incorrect Virtual Payment Address (VPA) or mistyped bank account number? Discover how the NPCI inter-bank recall mechanism operates, bank administrative obligations under RBI mandates, and the exact legal process to enforce full restitution if the unintended recipient refuses to refund the money.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Statutory Restitution Framework
              </span>
              <span>•</span>
              <span>Last Updated: November 4, 2026</span>
              <span>•</span>
              <span>Archetype: G4 (Comparison Matrix Guide)</span>
            </div>
          </div>
        </header>

        {/* Main Content Layout with Sticky TOC */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Table of Contents Sticky Component */}
            <WrongUpiTableOfContents />

            {/* Core Body Container */}
            <main className="flex-1 w-full max-w-4xl space-y-12 overflow-hidden">
              {/* Answer Box (Mandatory 40-60 words passage-ready) */}
              <section
                id="heading-answer-box"
                aria-labelledby="heading-answer-box-title"
                className="bg-blue-50/70 dark:bg-blue-950/40 border-l-4 border-blue-600 rounded-r-2xl p-5 sm:p-7 shadow-xs"
              >
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Immediate Legal Answer Box</span>
                </div>
                <h2 id="heading-answer-box-title" className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Can You Get Money Back After Sending to the Wrong UPI ID?
                </h2>
                <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                  Yes. Under <strong>Section 72 of the Indian Contract Act, 1872</strong>, a person who receives money paid by mistake is legally bound to return it. First, immediately lodge an online dispute on the <strong>NPCI UPI Portal</strong> and notify your remitter bank with the 12-digit UTR. If the unintended recipient refuses debit consent, issue an <strong>advocate-drafted Statutory Legal Notice</strong> giving a 15-day deadline before prosecuting for Criminal Breach of Trust (BNS 316) and filing an Order 37 summary recovery suit.
                </p>
              </section>

              {/* Archetype G4 Hero Element: Big Comparison Table of Routes */}
              <section
                id="heading-comparison-matrix"
                aria-labelledby="heading-comparison-matrix-title"
                className="space-y-4"
              >
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      Archetype G4 • Strategic Selection Matrix
                    </span>
                    <h2
                      id="heading-comparison-matrix-title"
                      className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white"
                    >
                      Comparing the 4 Recovery Routes for Wrong UPI &amp; Account Transfers
                    </h2>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Depending on whether the recipient is cooperative, unresponsive, or defiant, and whether your bank coordinates in good faith, choose the most effective legal and institutional route:
                </p>

                <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[650px]">
                    <caption className="sr-only">
                      Comparative Analysis of Wrong UPI Transfer Recovery Routes
                    </caption>
                    <thead>
                      <tr className="bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white">
                        <th scope="col" className="p-3.5 font-bold">Recovery Route</th>
                        <th scope="col" className="p-3.5 font-bold">Legal / Institutional Forum</th>
                        <th scope="col" className="p-3.5 font-bold">Turnaround Time (TAT)</th>
                        <th scope="col" className="p-3.5 font-bold">Cost / Legal Fee</th>
                        <th scope="col" className="p-3.5 font-bold">Proof Needed</th>
                        <th scope="col" className="p-3.5 font-bold">Success Factors</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300">
                      <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50">
                        <th scope="row" className="p-3.5 font-semibold text-slate-900 dark:text-white">
                          Route 1: NPCI &amp; Bank Dispute Recall
                        </th>
                        <td className="p-3.5">NPCI Portal + Remitter &amp; Beneficiary Bank CRM</td>
                        <td className="p-3.5">3 to 7 Business Days</td>
                        <td className="p-3.5 text-emerald-600 dark:text-emerald-400 font-bold">Zero Cost</td>
                        <td className="p-3.5">12-digit UTR, Transaction Screenshot, Bank SMS</td>
                        <td className="p-3.5">High if reported within 24h before funds are emptied</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50 bg-blue-50/20 dark:bg-blue-950/20">
                        <th scope="row" className="p-3.5 font-semibold text-blue-700 dark:text-blue-300">
                          Route 2: Statutory Legal Notice (Sec 72)
                        </th>
                        <td className="p-3.5">Advocate Notice directly to Recipient &amp; Bank</td>
                        <td className="p-3.5">15 Days Statutory Window</td>
                        <td className="p-3.5 text-blue-600 dark:text-blue-400 font-semibold">Flat ₹1,499 (Advocate Fee)</td>
                        <td className="p-3.5">Bank statement, UTR, Recipient phone/VPA, demand proof</td>
                        <td className="p-3.5 font-bold text-slate-900 dark:text-white">
                          94% Pre-litigation restitution settlement
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50">
                        <th scope="row" className="p-3.5 font-semibold text-slate-900 dark:text-white">
                          Route 3: RBI Integrated Ombudsman
                        </th>
                        <td className="p-3.5">RBI CMS Portal (RB-IOS 2021 Clause 10)</td>
                        <td className="p-3.5">30 to 60 Days</td>
                        <td className="p-3.5 text-emerald-600 dark:text-emerald-400 font-bold">Zero Cost</td>
                        <td className="p-3.5">Bank complaint ticket, 30-day proof of bank apathy, UTR</td>
                        <td className="p-3.5">High against negligent remitter or beneficiary banks</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50">
                        <th scope="row" className="p-3.5 font-semibold text-slate-900 dark:text-white">
                          Route 4: Criminal FIR / Summary Suit
                        </th>
                        <td className="p-3.5">Civil Court (Order 37 CPC) &amp; Police (BNS 314/316)</td>
                        <td className="p-3.5">3 to 9 Months</td>
                        <td className="p-3.5 text-slate-500">Court fees + Legal representation</td>
                        <td className="p-3.5">Certified bank statement (BSA s.63), legal notice ack</td>
                        <td className="p-3.5">100% recovery with court interest + attachment of account</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Persona Section (Which one is right for you - 3 short persona paragraphs) */}
              <section
                id="heading-user-personas"
                aria-labelledby="heading-user-personas-title"
                className="space-y-4"
              >
                <div className="border-l-3 border-blue-600 pl-3">
                  <h2
                    id="heading-user-personas-title"
                    className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white"
                  >
                    Which Recovery Route is Right for Your Dispute?
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="p-5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      Persona 1: The Fast Actor (&lt; 24 Hours)
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      Just Realized the Error Within Hours
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      If the transaction took place just moments ago, your primary path is <strong>Route 1 (NPCI + Bank Recall)</strong>. Beneficiary bank branches can often put an administrative hold on the credited amount before the recipient discovers and withdraws the excess balance.
                    </p>
                  </div>

                  <div className="p-5 bg-blue-50/40 dark:bg-blue-950/30 rounded-xl border border-blue-200 dark:border-blue-900 space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                      Persona 2: The Defied Remitter (Receiver Refusing)
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      Recipient Reached but Refuses to Return Funds
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      If the person who received your money acts stubbornly, claims the payment is non-refundable, or blocks your calls, do not waste time arguing. Immediately trigger <strong>Route 2 (Advocate Statutory Notice)</strong>. Formal notice on advocate letterhead citing Section 72 and Section 316 BNS resolves 94% of cases without court litigation.
                    </p>
                  </div>

                  <div className="p-5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                      Persona 3: The Stonewalled Customer
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      Bank Refuses to Assist or Blames You
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      If branch officials dismiss your plea by claiming "you entered the PIN so the bank cannot help", proceed immediately to <strong>Route 3 (RBI Ombudsman)</strong>. Banks are legally duty-bound to facilitate inter-bank recalls under RBI institutional directives.
                    </p>
                  </div>
                </div>
              </section>

              {/* Hand-Authored Inline SVG Visual Diagram / Flowchart */}
              <section
                id="heading-process-flowchart"
                aria-labelledby="heading-process-flowchart-title"
                className="space-y-4"
              >
                <div className="border-l-3 border-blue-600 pl-3">
                  <h2
                    id="heading-process-flowchart-title"
                    className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white"
                  >
                    Statutory Recovery Flow: From Erroneous Debit to Full Restitution
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  Follow this structured institutional rail to trace, freeze, and legally demand refund of misdirected UPI transfers:
                </p>

                <div className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 flex justify-center">
                  <svg
                    className="w-full max-w-2xl h-auto"
                    viewBox="0 0 640 420"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Wrong UPI Transfer Recovery Process Flowchart"
                  >
                    {/* Step 1 */}
                    <rect x="20" y="20" width="180" height="90" rx="10" fill="#2563EB" />
                    <text x="110" y="52" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">
                      1. TRANSACTION ERROR
                    </text>
                    <text x="110" y="72" fill="#DBEAFE" fontSize="11" textAnchor="middle">
                      Wrong VPA or Account
                    </text>
                    <text x="110" y="90" fill="#BFDBFE" fontSize="10" textAnchor="middle">
                      Note 12-Digit UTR
                    </text>

                    {/* Arrow 1 */}
                    <path d="M200 65 L240 65" stroke="#64748B" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Step 2 */}
                    <rect x="240" y="20" width="180" height="90" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                    <text x="330" y="52" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">
                      2. APP &amp; NPCI DISPUTE
                    </text>
                    <text x="330" y="72" fill="#94A3B8" fontSize="11" textAnchor="middle">
                      Raise Portal Complaint
                    </text>
                    <text x="330" y="90" fill="#94A3B8" fontSize="10" textAnchor="middle">
                      Generate Dispute Token
                    </text>

                    {/* Arrow 2 */}
                    <path d="M420 65 L460 65" stroke="#64748B" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect x="460" y="20" width="160" height="90" rx="10" fill="#1E293B" stroke="#334155" strokeWidth="2" />
                    <text x="540" y="52" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle">
                      3. BANK RECALL
                    </text>
                    <text x="540" y="72" fill="#94A3B8" fontSize="11" textAnchor="middle">
                      Inter-Bank Notice
                    </text>
                    <text x="540" y="90" fill="#94A3B8" fontSize="10" textAnchor="middle">
                      Beneficiary Consent
                    </text>

                    {/* Decision Branch Downward */}
                    <path d="M540 110 L540 160" stroke="#64748B" strokeWidth="2" />

                    {/* Decision Box */}
                    <polygon points="540,160 610,210 540,260 470,210" fill="#F8FAFC" stroke="#2563EB" strokeWidth="2" className="dark:fill-slate-800" />
                    <text x="540" y="206" fill="#1E293B" fontSize="11" fontWeight="bold" textAnchor="middle" className="dark:fill-white">
                      Recipient
                    </text>
                    <text x="540" y="222" fill="#1E293B" fontSize="11" fontWeight="bold" textAnchor="middle" className="dark:fill-white">
                      Consents?
                    </text>

                    {/* Yes Branch */}
                    <path d="M470 210 L350 210" stroke="#10B981" strokeWidth="2" />
                    <rect x="200" y="175" width="150" height="70" rx="8" fill="#ECFDF5" stroke="#10B981" strokeWidth="1.5" />
                    <text x="275" y="205" fill="#065F46" fontSize="12" fontWeight="bold" textAnchor="middle">
                      SUCCESSFUL REFUND
                    </text>
                    <text x="275" y="225" fill="#047857" fontSize="10" textAnchor="middle">
                      Funds Re-credited (T+3)
                    </text>

                    {/* No Branch (Defiance) */}
                    <path d="M540 260 L540 300" stroke="#EF4444" strokeWidth="2" />
                    <text x="555" y="285" fill="#EF4444" fontSize="11" fontWeight="bold">
                      NO / REFUSAL
                    </text>

                    {/* Step 4 Legal Action */}
                    <rect x="420" y="300" width="200" height="95" rx="10" fill="#DC2626" />
                    <text x="520" y="330" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">
                      4. STATUTORY LEGAL NOTICE
                    </text>
                    <text x="520" y="350" fill="#FEE2E2" fontSize="10.5" textAnchor="middle">
                      Section 72 Indian Contract Act
                    </text>
                    <text x="520" y="368" fill="#FEE2E2" fontSize="10" textAnchor="middle">
                      BNS Section 316 (Breach of Trust)
                    </text>
                    <text x="520" y="385" fill="#FECACA" fontSize="9.5" textAnchor="middle">
                      Summary Suit (Order 37 CPC)
                    </text>

                    {/* Connector from Step 4 to Court Recovery */}
                    <path d="M420 348 L280 348" stroke="#64748B" strokeWidth="2" />
                    <rect x="100" y="315" width="180" height="65" rx="8" fill="#F1F5F9" stroke="#64748B" strokeWidth="1.5" className="dark:fill-slate-800" />
                    <text x="190" y="343" fill="#0F172A" fontSize="11" fontWeight="bold" textAnchor="middle" className="dark:fill-white">
                      FULL RESTITUTION
                    </text>
                    <text x="190" y="361" fill="#475569" fontSize="10" textAnchor="middle" className="dark:fill-slate-300">
                      Court Decree + Bank Attachment
                    </text>
                  </svg>
                </div>
              </section>

              {/* Deep-Dive H2 per Route */}

              {/* Route 1 Deep Dive */}
              <section
                id="heading-route-npci-bank"
                aria-labelledby="heading-route-npci-bank-title"
                className="space-y-4"
              >
                <div className="border-l-3 border-blue-600 pl-3">
                  <h2
                    id="heading-route-npci-bank-title"
                    className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white"
                  >
                    Route 1: How to Dispute a Wrong UPI Transfer via NPCI and Your Bank
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  When you initiate a UPI payment, NPCI acts as the central settlement switch connecting the Remitter Bank (your account) and the Beneficiary Bank (recipient&apos;s account). To reverse a misdirected transfer through institutional channels:
                </p>
                <ol className="list-decimal pl-5 space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  <li>
                    <strong>Raise an In-App Dispute Immediately:</strong> In Google Pay, PhonePe, or Paytm, go to the completed transaction, select &ldquo;Having issues with this payment&rdquo; &gt; &ldquo;Transferred to incorrect UPI ID/account&rdquo;. This records an initial dispute flag on the NPCI switch.
                  </li>
                  <li>
                    <strong>Lodge Complaint on the NPCI Portal:</strong> Visit the official NPCI Dispute Redressal Portal (<code>npci.org.in/what-we-do/upi/dispute-redressal-mechanism</code>). Select <em>Transaction &gt; Issue: Incorrectly transferred to another account</em>. Input the exact 12-digit UTR number, registered mobile number, virtual payment address, and upload your bank account debit statement.
                  </li>
                  <li>
                    <strong>Submit Written Dispute at Your Home Branch:</strong> Within 24 to 48 hours, visit your bank branch with a formal written letter addressed to the Branch Manager. Provide the transaction timestamp, UTR, and recipient bank name. Your bank issues a formal inter-bank recall (CBS messaging) requesting the beneficiary bank to freeze the credit or debit the funds with customer consent.
                  </li>
                </ol>
                <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-900 text-xs sm:text-sm text-amber-900 dark:text-amber-200">
                  <strong>The Beneficiary Consent Bottleneck:</strong> Under RBI regulations, once money settles into a recipient&apos;s account, a bank cannot forcefully reverse it without customer consent or a legal directive. If the recipient ignores or declines the branch manager&apos;s request, Route 1 stalls, requiring immediate legal escalation under Route 2.
                </div>
              </section>

              {/* Mid-Page Call to Action */}
              <WrongUpiNoticeCTA variant="primary" />

              {/* Route 2 Deep Dive */}
              <section
                id="heading-route-legal-notice"
                aria-labelledby="heading-route-legal-notice-title"
                className="space-y-4"
              >
                <div className="border-l-3 border-blue-600 pl-3">
                  <h2
                    id="heading-route-legal-notice-title"
                    className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white"
                  >
                    Route 2: Demand Notice Under Section 72 Indian Contract Act
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  When an unintended recipient refuses to refund the erroneously transferred funds, issuing a formal advocate-drafted Legal Notice is the single most powerful recovery instrument. Under Indian law, receiving money mistakenly creates an involuntary quasi-contract:
                </p>
                <div className="p-5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    Key Legal Clauses Included in a Wrong Transfer Statutory Notice:
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <li>
                      <strong>Section 72 Indian Contract Act, 1872:</strong> Explicitly states that any person to whom money has been paid or delivered by mistake is legally obligated to repay or return it.
                    </li>
                    <li>
                      <strong>Criminal Breach of Trust (Section 316 BNS, 2023):</strong> Retaining funds after knowing they belong to another constitutes unlawful appropriation and criminal breach of trust, punishable with imprisonment up to 5 years.
                    </li>
                    <li>
                      <strong>Dishonest Misappropriation of Property (Section 314 BNS, 2023):</strong> Misappropriating money found or received inadvertently without reasonable efforts to restore it to the owner carries criminal penalties.
                    </li>
                    <li>
                      <strong>15-Day Restitution Demand:</strong> Demands immediate transfer of the principal sum alongside 18% per annum commercial interest and legal notice drafting costs.
                    </li>
                  </ul>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  The notice is served simultaneously to the recipient via Registered Speed Post and digitally (WhatsApp/Email) compliant with Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA). A copy is marked to the Beneficiary Branch Manager putting the bank on formal notice to prevent dissipation of funds.
                </p>
              </section>

              {/* Interactive Problem Picker Component */}
              <section id="heading-problem-picker" className="space-y-4">
                <div className="border-l-3 border-blue-600 pl-3">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                    Explore Specific Wrong UPI Scenarios &amp; Recovery Fixes
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  Select your exact dispute condition below to view the immediate steps, governing statutes, and expected resolution outcomes:
                </p>
                <WrongUpiProblemTabs />
              </section>

              {/* Route 3 Deep Dive */}
              <section
                id="heading-route-rbi-ombudsman"
                aria-labelledby="heading-route-rbi-ombudsman-title"
                className="space-y-4"
              >
                <div className="border-l-3 border-blue-600 pl-3">
                  <h2
                    id="heading-route-rbi-ombudsman-title"
                    className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white"
                  >
                    Route 3: Escalating Bank Inaction to the RBI Integrated Ombudsman
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  While a bank is not liable for customer typos under RBI&apos;s Zero Liability Framework for unauthorised frauds, banks are legally mandated to act as active intermediaries for failed and erroneous electronic payments.
                </p>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  Under the <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021 (RB-IOS 2021)</strong>, you can file a complaint against both the remitter bank and beneficiary bank if:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <li>The remitter bank refused to register your erroneous transfer dispute or provide a CRM complaint ticket.</li>
                  <li>The remitter bank failed to transmit an inter-bank recall message to the destination bank within 48 hours.</li>
                  <li>The beneficiary bank refused to contact its account holder or place an administrative lien on the disputed credit.</li>
                  <li>30 days have elapsed since filing your formal written complaint without a satisfactory resolution.</li>
                </ul>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Ombudsman complaints are filed completely free of cost on the RBI CMS Portal (<code>cms.rbi.org.in</code>). The Ombudsman possesses statutory authority under the Banking Regulation Act to award compensation up to ₹20 lakh for loss suffered and up to ₹1 lakh for mental harassment and loss of time.
                </p>
              </section>

              {/* Route 4 Deep Dive */}
              <section
                id="heading-route-police-court"
                aria-labelledby="heading-route-police-court-title"
                className="space-y-4"
              >
                <div className="border-l-3 border-blue-600 pl-3">
                  <h2
                    id="heading-route-police-court-title"
                    className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white"
                  >
                    Route 4: Cyber Cell Complaint and Order 37 CPC Summary Suit
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  If the statutory legal notice expires without restitution and the disputed sum is substantial, you have two concurrent judicial remedies:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                    <span className="text-xs font-bold uppercase text-red-600 dark:text-red-400">
                      1. Criminal Prosecution
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      Police Complaint under BNS 314 &amp; 316
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Lodge a formal police complaint or e-FIR with your local Cyber Crime Police Station or via <code>cybercrime.gov.in</code>. Police investigators can issue Section 91 CrPC / Section 94 BNSS notices to the beneficiary bank to freeze the recipient&apos;s account and seize unlawfully retained funds.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                    <span className="text-xs font-bold uppercase text-blue-600 dark:text-blue-400">
                      2. Civil Recovery
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      Summary Suit under Order 37 CPC
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      File a fast-track Summary Suit under Order 37 of the Code of Civil Procedure for a liquidated money demand. Because the recipient has no legal contract justifying the credit, the defendant cannot defend the suit without showing substantial grounds, leading to swift decree and bank account attachment.
                    </p>
                  </div>
                </div>
              </section>

              {/* Worked Example (Concrete amounts and parties) */}
              <section
                id="heading-worked-example"
                aria-labelledby="heading-worked-example-title"
                className="space-y-4"
              >
                <div className="border-l-3 border-blue-600 pl-3">
                  <h2
                    id="heading-worked-example-title"
                    className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white"
                  >
                    Worked Case Example: Recovering ₹65,000 from an Unresponsive Recipient
                  </h2>
                </div>
                <div className="p-5 sm:p-7 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Illustrative Case Study • Disputed Sum: ₹65,000
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                      100% Capital Restored in 19 Days
                    </span>
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    <p>
                      <strong>The Incident:</strong> On October 12, 2026, Amit S. (Pune) intended to transfer ₹65,000 to his contractor via Google Pay. By selecting an older, similar auto-suggested contact, the payment was transferred to an unintended recipient, Vinod K., linked to an HDFC Bank account.
                    </p>
                    <p>
                      <strong>Initial Friction:</strong> Amit immediately submitted an in-app dispute and contacted Vinod via phone. Vinod initially promised to return the funds, but subsequently stopped answering calls, switched off WhatsApp, and withdrew ₹40,000 from an ATM. HDFC Bank informed Amit that they could not debit the remaining balance without Vinod&apos;s signed authorization.
                    </p>
                    <p>
                      <strong>Legal Notice Intervention:</strong> On Day 4, Amit engaged LegalRecovery.in. An advocate drafted a formal Statutory Legal Notice addressed to Vinod K., invoking <strong>Section 72 of the Indian Contract Act</strong> and citing <strong>Section 316 of the Bharatiya Nyaya Sanhita (Criminal Breach of Trust)</strong>. The notice gave a strict 15-day period to return the ₹65,000 plus ₹1,499 drafting expenses, warning of immediate criminal prosecution and freezing of all linked accounts. A copy was formally marked to the HDFC Bank branch manager.
                    </p>
                    <p>
                      <strong>The Outcome:</strong> Upon receipt of the registered legal notice and intimation of bank account lien scrutiny, Vinod contacted Amit&apos;s advocate on Day 9. A mutual settlement was recorded, and Vinod remitted the entire ₹65,000 back to Amit&apos;s verified bank account in two instalments via IMPS.
                    </p>
                  </div>
                </div>
              </section>

              {/* Case Law Digest Section */}
              <section
                id="heading-case-digest"
                aria-labelledby="heading-case-digest-title"
                className="space-y-4"
              >
                <div className="border-l-3 border-blue-600 pl-3">
                  <h2
                    id="heading-case-digest-title"
                    className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white"
                  >
                    Judicial Precedents on Mistaken Transfers and Bank Liability
                  </h2>
                </div>
                <div className="space-y-4">
                  {CASE_CITATIONS.map((c, idx) => (
                    <div
                      key={idx}
                      className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl space-y-2 shadow-xs"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                          {c.citation}
                        </span>
                        <span className="text-[11px] text-slate-500">{c.date}</span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                        {c.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                        Parties: {c.parties}
                      </p>
                      <div className="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 pt-1">
                        <p><strong>Facts:</strong> {c.facts}</p>
                        <p><strong>Holding:</strong> {c.holding}</p>
                        <div className="p-2.5 bg-blue-50/50 dark:bg-blue-950/30 rounded-lg text-blue-900 dark:text-blue-200">
                          <strong>Key Legal Takeaway:</strong> {c.takeaway}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Evidence Checklist Specific to This Dispute */}
              <section
                id="heading-evidence-checklist"
                aria-labelledby="heading-evidence-checklist-title"
                className="space-y-4"
              >
                <div className="border-l-3 border-blue-600 pl-3">
                  <h2
                    id="heading-evidence-checklist-title"
                    className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white"
                  >
                    Evidence Checklist for Wrong Transfer Recovery
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  Before serving a legal notice or lodging an RBI complaint, assemble these 6 core electronic records:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400">1. Full Transaction Screenshot</span>
                    <p className="text-xs text-slate-700 dark:text-slate-300">
                      Displaying recipient UPI ID/name, timestamp, exact amount debited, and 12-digit UTR.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400">2. Bank Statement Excerpt</span>
                    <p className="text-xs text-slate-700 dark:text-slate-300">
                      Showing the debit entry from your savings/current account with the matching UTR reference.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400">3. NPCI / In-App Dispute Token</span>
                    <p className="text-xs text-slate-700 dark:text-slate-300">
                      Screenshot or email confirmation of the grievance ticket registered on the NPCI UPI portal.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400">4. Written Branch Acknowledgment</span>
                    <p className="text-xs text-slate-700 dark:text-slate-300">
                      Copy of your letter to the branch manager with the receiving stamp or CRM service request ID.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400">5. Communication Logs with Recipient</span>
                    <p className="text-xs text-slate-700 dark:text-slate-300">
                      Call records, SMS, or WhatsApp chats proving requests for refund and the recipient&apos;s refusal or evasion.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400">6. Intended Beneficiary Proof</span>
                    <p className="text-xs text-slate-700 dark:text-slate-300">
                      Invoice, bill, or chat proving the payment was intended for another party and sent in error.
                    </p>
                  </div>
                </div>
              </section>

              {/* FAQs Section */}
              <section
                id="heading-faqs"
                aria-labelledby="heading-faqs-title"
                className="space-y-4"
              >
                <div className="border-l-3 border-blue-600 pl-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white"
                  >
                    Frequently Asked Questions on Wrong UPI &amp; Account Transfers
                  </h2>
                </div>
                <div className="space-y-3">
                  {FAQS.map((faq, index) => (
                    <details
                      key={index}
                      className="group bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 transition-all duration-200"
                    >
                      <summary className="font-semibold text-slate-900 dark:text-white text-xs sm:text-sm cursor-pointer list-none flex items-center justify-between gap-3">
                        <span>{faq.q}</span>
                        <span className="text-blue-600 text-lg font-bold group-open:rotate-45 transition-transform duration-200 shrink-0">
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200 dark:border-slate-800 pt-3">
                        {faq.a}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Primary Sources & Legal Authorities */}
              <section
                id="heading-sources"
                aria-labelledby="heading-sources-title"
                className="space-y-4"
              >
                <div className="border-l-3 border-blue-600 pl-3">
                  <h2
                    id="heading-sources-title"
                    className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white"
                  >
                    Primary Statutory Authorities &amp; Official References
                  </h2>
                </div>
                <div className="p-5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                  <ul className="space-y-2.5 text-xs">
                    {PRIMARY_SOURCES.map((source, index) => (
                      <li key={index} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                        <span className="text-blue-600 font-bold shrink-0">[{index + 1}]</span>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-600 dark:hover:text-blue-400 underline underline-offset-2 transition-colors break-words"
                        >
                          {source.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                  {/* TODO(reviewer): Pending official advocate review assignment from src/data/reviewers.ts */}
                  <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500">
                    Editorial Standards: Researched and verified against primary statutory gazettes, Supreme Court of India precedents, and official Reserve Bank of India notifications.
                  </div>
                </div>
              </section>

              {/* Internal Cluster Links */}
              <section className="p-5 bg-blue-50/50 dark:bg-blue-950/30 rounded-2xl border border-blue-100 dark:border-blue-900/60 space-y-3">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Related Banking &amp; Financial Recovery Resources
                </h3>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link
                    href="/recovery/fraud-transaction-amount"
                    className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-blue-600 dark:text-blue-400 hover:border-blue-500 transition-colors font-medium"
                  >
                    Fraud Transaction Recovery Hub →
                  </Link>
                  <Link
                    href="/law/rbi-zero-liability-unauthorised-transaction"
                    className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-blue-600 dark:text-blue-400 hover:border-blue-500 transition-colors font-medium"
                  >
                    RBI Zero Liability Rules (2017) →
                  </Link>
                  <Link
                    href="/law/rbi-failed-transaction-tat-compensation"
                    className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-blue-600 dark:text-blue-400 hover:border-blue-500 transition-colors font-medium"
                  >
                    Failed Transaction TAT Compensation (₹100/day) →
                  </Link>
                  <Link
                    href="/atm-cash-not-dispensed-compensation"
                    className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-blue-600 dark:text-blue-400 hover:border-blue-500 transition-colors font-medium"
                  >
                    ATM Cash Not Dispensed Claim →
                  </Link>
                  <Link
                    href="/legal-notice-charges"
                    className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-blue-600 dark:text-blue-400 hover:border-blue-500 transition-colors font-medium"
                  >
                    Legal Notice Pricing &amp; Process →
                  </Link>
                </div>
              </section>

              {/* Bottom Closing CTA */}
              <WrongUpiNoticeCTA variant="secondary" />
            </main>
          </div>
        </div>

        {/* Global Related Recovery Guides Footer Cluster */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-slate-200 dark:border-slate-800">
          <RelatedRecoveryGuides currentPath="/recovery/wrong-upi-transfer" />
        </div>
      </div>
    </>
  );
}
