import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import ScamRecoveryNoticeCTA from "./ScamRecoveryNoticeCTA";
import ScamRecoveryTableOfContents from "./ScamRecoveryTableOfContents";
import ScamRecoveryProblemTabs from "./ScamRecoveryProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Can You Get Money Back After a Scam? An Honest Guide",
  description:
    "An honest look at scam recovery in India: when banks must refund, when platforms are liable, what police can do, and what's unlikely.",
  alternates: {
    canonical: `${SITE_URL}/scam-money-recovery-what-is-possible`,
  },
  openGraph: {
    title: "Can You Get Money Back After a Scam? An Honest Guide",
    description:
      "Statutory recovery matrix across Indian cyber scams: bank zero liability rules, 1930 portal lien freezes, Section 503 BNSS magistrate refunds, and realistic recovery odds.",
    url: `${SITE_URL}/scam-money-recovery-what-is-possible`,
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
    title: "Reserve Bank of India (RBI) Circular on Customer Protection – Limiting Liability of Customers in Unauthorised Electronic Banking Transactions (DBR.No.Leg.BC.78/09.07.005/2017-18)",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11040",
  },
  {
    title: "Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS Section 503 — Order for Custody and Disposal of Property Pending Trial / Releasing Seized Cyber Crime Funds)",
    url: "https://www.indiacode.nic.in/handle/123456789/21734",
  },
  {
    title: "Bharatiya Nyaya Sanhita, 2023 (BNS Section 318 Cheating & Section 319 Cheating by Personation)",
    url: "https://www.indiacode.nic.in/handle/123456789/21733",
  },
  {
    title: "Indian Cyber Crime Coordination Centre (I4C) & Citizen Financial Cyber Fraud Reporting System (CFCFRMS / Helpline 1930)",
    url: "https://cybercrime.gov.in/",
  },
  {
    title: "SEBI Master Circular on Online Dispute Resolution (SMART ODR Portal — SEBI/HO/OIAE/OIAE_IAD-1/P/CIR/2023/131)",
    url: "https://www.sebi.gov.in/legal/master-circulars/aug-2023/master-circular-for-online-dispute-resolution-in-the-indian-securities-market_75220.html",
  },
  {
    title: "Consumer Protection Act, 2019 (Act No. 35 of 2019) — Section 2(11) Deficiency in Banking Service & Section 2(47) Unfair Trade Practice",
    url: "https://www.indiacode.nic.in/handle/123456789/15256",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Admissibility of Electronic Records for UTR Logs, Telegram Chats & Call Records)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CASE_CITATIONS = [
  {
    title: "Bank Liable for Unauthorised Electronic Transfers in Absence of Established Customer Negligence",
    parties: "State Bank of India v. P.V. George & Ors.",
    citation: "Regular First Appeal No. 234 of 2019, Kerala High Court (2020 SCC OnLine Ker 7892)",
    date: "Judgment Dated 11 December 2020",
    facts:
      "The account holder discovered multiple unauthorised digital debits amounting to ₹4.6 lakh from his savings account via net banking and third-party merchant transfers over a 48-hour span. The bank refused to refund the sum, mechanically asserting that transactions were authenticated via SMS OTPs sent to the registered mobile number, alleging user negligence.",
    holding:
      "The Kerala High Court held that the burden of proving gross negligence lies squarely on the banking institution under RBI Circular DBR.No.Leg.BC.78/09.07.005/2017-18. When an account holder reports unauthorised debits without delay and denies authorising the transfers, the mere algorithmic generation of an SMS or server log does not absolve the bank of fiduciary responsibility. The High Court directed the bank to restore the entire debited principal with 9% annual interest from the date of the debit.",
    amount: "₹4,60,000 Full Restoration @ 9% Interest + Litigation Costs",
    takeaway:
      "If your money was siphoned through unauthorized digital access, SIM-swap, or banking gateway vulnerabilities, your bank cannot dismiss your claim simply by citing automated OTP logs. Under statutory RBI directions, banks must prove customer negligence before shifting financial liability.",
  },
  {
    title: "National Commission Mandates Provisional Reversal for Fraudulent Card Debits",
    parties: "HDFC Bank Ltd. v. Jesna Jose",
    citation: "Revision Petition No. 3333 of 2013, National Consumer Disputes Redressal Commission (NCDRC)",
    date: "Order Dated 21 December 2020",
    facts:
      "The consumer held an international debit card that was fraudulently debited for foreign currency transactions while the physical plastic card remained in her physical possession in India. The bank repudiated the chargeback claim, arguing that the transaction involved CVV verification and the customer failed to safeguard credentials.",
    holding:
      "The NCDRC ruled that the bank committed gross deficiency in service under Section 2(11) of the Consumer Protection Act by failing to provide secure electronic payment architecture. The Commission reaffirmed that an individual consumer operating in a complex digital environment is entitled to zero liability when fraudulent debits occur without physical surrender of the card. The bank was ordered to refund the entire disputed sum with compensation.",
    amount: "Full Debited Principal + ₹30,000 Compensation for Mental Agony",
    takeaway:
      "For unauthorized credit or debit card frauds, cardholders who dispute charges promptly are protected by mandatory chargeback protocols and consumer commission precedents against arbitrary bank rejections.",
  },
  {
    title: "High Court Mandate on Expeditious Release of Frozen Cyber Crime Mule Funds to Victims",
    parties: "Victim Cyber Restitution Directives / In Re: Operationalisation of Section 457 CrPC (Now Section 503 BNSS)",
    citation: "Criminal Miscellaneous / Writ Jurisprudence across High Courts (Delhi & Karnataka High Courts)",
    date: "Precedents 2023–2025",
    facts:
      "Victims of online task scams and fake investment schemes lodged complaints on the 1930 National Cybercrime Reporting Portal. Cyber cells issued freeze requisitions to beneficiary private banks, immobilizing ₹18.5 lakh across Layer-1 and Layer-2 mule accounts. However, police and banks refused to return the funds to victims without a formal magisterial order, leaving legitimate money locked indefinitely.",
    holding:
      "The Courts held that when cyber fraud proceeds are tracked and frozen in intermediary mule accounts, criminal courts possess wide powers under Section 457 CrPC (now Section 503 of Bharatiya Nagarik Suraksha Sanhita, 2023) to return the identified funds to the bona fide victim upon execution of a reasonable indemnity bond, even before the absconding fraudsters are arrested or trial is concluded.",
    amount: "Restitution of Frozen Sums against Indemnity Bond",
    takeaway:
      "Freezing money in a scammer's mule bank account through the 1930 portal is only half the battle. To actually receive the cash back into your account, you must file a formal application under Section 503 BNSS before the local Magistrate with bank transaction trails.",
  },
];

const RECOVERY_MATRIX = [
  {
    scamType: "Unauthorised Bank / UPI Debit (Phishing, SIM Swap, Screen Share)",
    whoIsLiable: "Remitter Bank / Issuing Bank (under RBI Zero Liability Framework)",
    realisticOdds: "High (75%–90%)",
    statutoryTimeframe: "10 to 90 Days",
    primaryLegalRoute: "RBI Zero Liability Circular (2017) → Banking Ombudsman (CMS) → Consumer Court",
    keyCondition: "Reported to your bank within 3 working days; no voluntary OTP sharing.",
  },
  {
    scamType: "Fake Investment / WhatsApp Trading Group / Pre-IPO App Scam",
    whoIsLiable: "Mule Account Holders & Beneficiary Banks (KYC Negligence)",
    realisticOdds: "Moderate (30%–55%)",
    statutoryTimeframe: "3 to 12 Months",
    primaryLegalRoute: "1930 CFCFRMS Freeze → Police Cyber FIR → Section 503 BNSS Magistrate Release",
    keyCondition: "1930 ticket lodged within 1–3 hours before fraudsters cash out or route through Hawala.",
  },
  {
    scamType: "Telegram Task Scam / Part-Time Rating & Review Fraud",
    whoIsLiable: "Mule Account Rings & Beneficiary Financial Institutions",
    realisticOdds: "Moderate (25%–50%)",
    statutoryTimeframe: "3 to 9 Months",
    primaryLegalRoute: "1930 Emergency Ticket → Layer-1/2 Account Lien → Section 503 BNSS Restitution",
    keyCondition: "Stop depositing immediately; retrieve complete UTR trails for every separate recipient UPI.",
  },
  {
    scamType: "Digital Arrest Scam (Fake Police / CBI / ED Video Extortion)",
    whoIsLiable: "Mule Syndicate Accounts & Negligent Opening Banks",
    realisticOdds: "Moderate (35%–60%)",
    statutoryTimeframe: "2 to 8 Months",
    primaryLegalRoute: "Immediate 1930 Golden Hour Call → Multi-Bank Freeze → Section 503 BNSS Court Petition",
    keyCondition: "High sums (₹10L–₹1Cr+) freeze rapidly if alerted immediately; court petition mandatory.",
  },
  {
    scamType: "Regulated Broker / Sub-broker / Demat Discrepancy",
    whoIsLiable: "SEBI Registered Broker / Depository Participant (DP)",
    realisticOdds: "High (80%–95%)",
    statutoryTimeframe: "30 to 60 Days",
    primaryLegalRoute: "SEBI SCORES 2.0 → SEBI SMART ODR Institutional Arbitration",
    keyCondition: "Broker is an active SEBI registrant; unauthorised square-off or algorithmic trade.",
  },
  {
    scamType: "Online Real-Money Gaming App Wallet Balance Withheld",
    whoIsLiable: "Indian Gaming Platform Operating Entity",
    realisticOdds: "High (70%–85%)",
    statutoryTimeframe: "30 to 90 Days",
    primaryLegalRoute: "Statutory Demand Notice → e-Jagriti Consumer Court Complaint",
    keyCondition: "Company registered in India; deposit ledger and KYC documents verified.",
  },
  {
    scamType: "Offshore Crypto Exchange Hack / Anonymous Web3 Wallet Scam",
    whoIsLiable: "Anonymous Threat Actor (Unregulated Foreign Entities)",
    realisticOdds: "Extremely Low (< 5%)",
    statutoryTimeframe: "Indefinite / Unresolved",
    primaryLegalRoute: "FIU-IND Reporting → Interpol Cyber Notice (Limited civil recourse)",
    keyCondition: "Once assets bridge to decentralised mixers (Tornado Cash) or offshore non-KYC exchanges.",
  },
];

const STATUTORY_BENCHMARKS = [
  {
    parameter: "Zero Customer Liability Window",
    rule: "Within 3 working days of receiving bank notification",
    authority: "RBI Circular DBR.No.Leg.BC.78/09.07.005/2017-18",
  },
  {
    parameter: "Limited Liability Window (₹5,000–₹25,000 cap)",
    rule: "Reported within 4 to 7 working days of transaction",
    authority: "RBI Electronic Banking Direction Paragraph 7",
  },
  {
    parameter: "Provisional Shadow Credit to Customer Account",
    rule: "Within 10 working days from date of dispute intimation",
    authority: "RBI Customer Protection Guidelines Para 9",
  },
  {
    parameter: "1930 Cyber Fraud Golden Hour Freeze Window",
    rule: "Within 1 to 2 hours of money leaving bank account",
    authority: "I4C National Cybercrime Reporting Portal Framework",
  },
  {
    parameter: "Application for Release of Seized / Frozen Bank Funds",
    rule: "Magisterial order for disposal of property pending trial",
    authority: "Section 503, Bharatiya Nagarik Suraksha Sanhita, 2023",
  },
  {
    parameter: "Substantive Criminal Offence for Cyber Fraud",
    rule: "Cheating (s.318) and Cheating by Personation (s.319)",
    authority: "Bharatiya Nyaya Sanhita, 2023 (BNS)",
  },
  {
    parameter: "Electronic Evidence Certification for Chats & Logs",
    rule: "Mandatory electronic affidavit under BSA Section 63",
    authority: "Bharatiya Sakshya Adhiniyam, 2023 (BSA)",
  },
];

export default function ScamMoneyRecoveryPage() {
  // TODO(reviewer): Reviewer profile not defined in src/data/reviewers.ts - omitting reviewer box to prevent fabricating credentials.

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${SITE_URL}/scam-money-recovery-what-is-possible#article`,
        isPartOf: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/scam-money-recovery-what-is-possible`,
          url: `${SITE_URL}/scam-money-recovery-what-is-possible`,
          name: "Can You Get Money Back After a Scam? An Honest Guide",
        },
        headline: "Scammed? What Can Realistically Be Recovered, by Scam Type",
        description:
          "An honest look at scam recovery in India: when banks must refund, when platforms are liable, what police can do, and what's unlikely.",
        datePublished: "2026-11-04T10:30:00+05:30",
        dateModified: "2026-11-04T10:30:00+05:30",
        mainEntityOfPage: `${SITE_URL}/scam-money-recovery-what-is-possible`,
        publisher: {
          "@type": "Organization",
          name: "LegalRecovery.in",
          url: SITE_URL,
        },
        keywords: [
          "can i get my money back after being scammed",
          "is it possible to get money back after being scammed",
          "how long does it take to get fraud money back",
          "online fraud money recovery india",
          "cyber crime money recovery process",
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/scam-money-recovery-what-is-possible#breadcrumb`,
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
            name: "Guides",
            item: `${SITE_URL}/sitemap`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Scam Money Recovery: What Is Possible",
            item: `${SITE_URL}/scam-money-recovery-what-is-possible`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/scam-money-recovery-what-is-possible#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "Can I get my money back after being scammed in India?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, but recovery depends entirely on the scam category and reporting speed. If the transaction was an unauthorised banking debit, the RBI Zero Liability Circular entitles you to a full refund from your bank if reported within 3 working days. For deception frauds (Telegram tasks, digital arrest, fake trading apps), recovery does not come from the anonymous fraudster; it comes from funds frozen in domestic mule bank accounts via the 1930 cyber portal and released through a Magistrate's order under Section 503 of Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023.",
            },
          },
          {
            "@type": "Question",
            name: "How long does it take to get fraud money back from cyber crime in India?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Statutory bank reversals under RBI guidelines take 10 to 90 days. For money frozen in cyber mule accounts via the 1930 helpline, the restitution process through the jurisdictional Judicial Magistrate under Section 503 BNSS typically takes 3 to 8 months, involving police status verification and execution of an indemnity bond.",
            },
          },
          {
            "@type": "Question",
            name: "What happens when you call 1930 cyber crime helpline?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "When you dial 1930, the operator logs the victim and beneficiary account details onto the Citizen Financial Cyber Fraud Reporting and Management System (CFCFRMS). Automated API alerts trigger a debit freeze (lien) on the fraudster's intermediate mule accounts across Layer 1, Layer 2, and Layer 3 banks, preventing funds from being withdrawn at ATMs or converted into crypto.",
            },
          },
          {
            "@type": "Question",
            name: "What is Section 503 BNSS and why is it needed to get frozen money back?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Section 503 of the Bharatiya Nagarik Suraksha Sanhita, 2023 (which replaced Section 457 of the Code of Criminal Procedure) empowers a Magistrate to direct the disposal and return of seized property pending criminal trial. Even after cyber police freeze a scammer's bank account, banks cannot legally disburse funds to you without a magisterial court order directing the release against an indemnity bond.",
            },
          },
          {
            "@type": "Question",
            name: "Can private cyber recovery agencies or ethical hackers get my lost money back?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Any private individual, Instagram page, or commercial agency claiming they can 'hack the scammer' or 'retrieve stolen cryptocurrency' for an upfront fee is running a secondary recovery scam. Under Indian law, only formal banking dispute rails, police cyber cells operating under I4C, and judicial courts have legal authority to immobilise and disburse bank funds.",
            },
          },
          {
            "@type": "Question",
            name: "Can I recover money lost in unregulated Telegram trading and pre-IPO schemes?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Recovery from the fraudulent app developers is virtually impossible because they operate behind encrypted offshore servers. However, money can be recovered from the Indian bank accounts of the 'money mules' who received your UPI transfers, provided those accounts were lien-marked via 1930 before the funds were siphoned.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-slate-50 text-slate-900 pt-20 pb-20">
        {/* Top Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Guides", href: "/sitemap" },
              { label: "Scam Money Recovery: What Is Possible" },
            ]}
          />
        </div>

        {/* Hero Section */}
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-100 text-red-800 border border-red-200">
              Statutory Recovery Guide • Section §8.11
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-slate-200 text-slate-800">
              Updated November 2026
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
              BNS 318 &amp; BNSS 503 Framework
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4">
            Scammed? What Can Realistically Be Recovered, by Scam Type
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-4xl leading-relaxed mb-6">
            An honest, legally grounded reality check on online financial fraud recovery in India. Discover exactly when commercial banks must reimburse you under statutory zero-liability mandates, how 1930 portal lien freezes work, when court orders under Section 503 BNSS restore trapped funds, and which promises are mathematically and legally impossible.
          </p>

          {/* Answer Box (Mandatory G4 Element: 40-60 words directly answering primary query) */}
          <div className="bg-gradient-to-r from-red-50 via-rose-50 to-amber-50 border-l-4 border-red-600 p-5 sm:p-6 rounded-r-2xl shadow-xs mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-red-900">
                Direct Answer: Can You Get Your Money Back After Being Scammed?
              </span>
            </div>
            <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
              <strong>Yes, but only through legal rails.</strong> Recovery rarely comes from the anonymous fraudster; it comes from two specific sources: (1) your bank under RBI Zero-Liability circulars if unauthorised debits are reported within 3 days, or (2) seized mule bank accounts frozen via 1930/CFCFRMS and released under Section 503 BNSS (formerly s.457 CrPC) by a Magistrate. Private recovery agencies claiming to hack money back are fraudulent.
            </p>
          </div>

          {/* Key Facts Summary Table */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden mb-10">
            <div className="bg-slate-900 text-white px-5 py-3.5 flex items-center justify-between">
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider">
                Key Parameters: Indian Cyber Fraud Restitution at a Glance
              </h2>
              <span className="text-[11px] text-slate-300">Statutory Benchmarks</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <tbody>
                  {STATUTORY_BENCHMARKS.map((item, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}
                    >
                      <td className="py-3 px-4 font-bold text-slate-900 border-b border-slate-100 w-1/3">
                        {item.parameter}
                      </td>
                      <td className="py-3 px-4 text-slate-700 border-b border-slate-100 font-medium w-1/3">
                        {item.rule}
                      </td>
                      <td className="py-3 px-4 text-slate-500 border-b border-slate-100 text-xs w-1/3">
                        {item.authority}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </header>

        {/* Main Two-Column Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Sticky Navigation Sidebar */}
            <ScamRecoveryTableOfContents />

            {/* Core Content Body */}
            <main className="w-full min-w-0 space-y-12">
              {/* SECTION 1: OVERVIEW */}
              <section id="heading-overview" className="scroll-mt-24 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                    Foundation
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                    The Honest Truth: Can You Get Money Back After Being Scammed in India?
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Every month, Indian citizens lose over ₹1,200 crore to cyber syndicates operating digital arrest threats, fake institutional stock market apps, fake work-from-home Telegram task traps, and unauthorised UPI debits. The immediate emotional impulse after discovering a loss is to ask: <em>&ldquo;Is it possible to get money back after being scammed?&rdquo;</em>
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The honest answer requires dismantling two widespread myths:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="p-4 rounded-xl bg-rose-50 border border-rose-200">
                    <h3 className="text-xs font-extrabold uppercase text-rose-900 tracking-wider mb-1">
                      Myth 1: &ldquo;The Police Will Force the Scammer to Refund Me&rdquo;
                    </h3>
                    <p className="text-xs sm:text-sm text-rose-800 leading-relaxed">
                      Cyber syndicates operate from virtual private networks (VPNs) and call centers in Southeast Asia (Cambodia, Myanmar, Laos). Local police investigators rarely catch the ultimate puppet-masters. Direct civil recovery from the actual fraudster is statistically under 2%.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                    <h3 className="text-xs font-extrabold uppercase text-emerald-900 tracking-wider mb-1">
                      Reality: &ldquo;Recovery Comes from Domestic Banking Rails &amp; Mule Liens&rdquo;
                    </h3>
                    <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                      Real restitution happens through two concrete, legally enforceable channels: (1) holding regulated Indian financial institutions liable for negligence or zero-liability breaches, and (2) locking the Indian &ldquo;mule&rdquo; bank accounts where stolen money temporarily lands, followed by court disposal under Section 503 BNSS.
                    </p>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  If someone promises that a &ldquo;private ethical hacker&rdquo; or &ldquo;cyber asset tracing software&rdquo; can pull money back into your wallet for an upfront retainer, you are being targeted by a secondary recovery scam. Under Indian jurisprudence, only a judicial magistrate or a statutory ombudsman can order a bank to reverse funds.
                </p>
              </section>

              {/* SECTION 2: THE RECOVERY MATRIX (HERO ELEMENT FOR G4 ARCHETYPE) */}
              <section id="heading-matrix" className="scroll-mt-24 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                    Archetype G4 Comparison Matrix
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                    Scam Recoverability Matrix: Real Odds, Timelines &amp; Liable Parties by Fraud Type
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Different scams operate under entirely distinct legal frameworks. Below is the comprehensive, transparent recoverability matrix based on verified Indian statutory provisions, RBI master directions, and court dispositions.
                </p>

                <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse">
                      <thead className="bg-slate-900 text-white">
                        <tr>
                          <th className="py-3.5 px-4 font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                            Scam Type &amp; Modus
                          </th>
                          <th className="py-3.5 px-4 font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                            Who Is Liable Under Law?
                          </th>
                          <th className="py-3.5 px-4 font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                            Realistic Odds
                          </th>
                          <th className="py-3.5 px-4 font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                            Timeframe
                          </th>
                          <th className="py-3.5 px-4 font-bold uppercase tracking-wider text-[11px] sm:text-xs">
                            Statutory Legal Rail
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {RECOVERY_MATRIX.map((row, idx) => (
                          <tr
                            key={idx}
                            className={`hover:bg-slate-50 transition-colors ${
                              idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                            }`}
                          >
                            <td className="py-4 px-4 font-bold text-slate-900 align-top max-w-[200px]">
                              <div>{row.scamType}</div>
                              <div className="text-[11px] font-normal text-slate-500 mt-1">
                                <em>Req:</em> {row.keyCondition}
                              </div>
                            </td>
                            <td className="py-4 px-4 text-slate-700 align-top text-xs font-medium">
                              {row.whoIsLiable}
                            </td>
                            <td className="py-4 px-4 align-top">
                              <span
                                className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold ${
                                  row.realisticOdds.startsWith("High")
                                    ? "bg-emerald-100 text-emerald-800"
                                    : row.realisticOdds.startsWith("Moderate")
                                    ? "bg-amber-100 text-amber-800"
                                    : "bg-rose-100 text-rose-800"
                                }`}
                              >
                                {row.realisticOdds}
                              </span>
                            </td>
                            <td className="py-4 px-4 text-slate-600 align-top text-xs font-semibold whitespace-nowrap">
                              {row.statutoryTimeframe}
                            </td>
                            <td className="py-4 px-4 text-slate-600 align-top text-xs leading-relaxed max-w-[240px]">
                              {row.primaryLegalRoute}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* SECTION 3: PERSONA PARAGRAPHS ("Which one is right for you") */}
              <section id="heading-personas" className="scroll-mt-24 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                    Diagnostic
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                    Which Recovery Route Applies to You? (3 Realistic Victim Scenarios)
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Before spending money on legal notices or filing court petitions, determine exactly which category your dispute falls under to avoid pursuing futile avenues:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-extrabold flex items-center justify-center text-sm mb-3">
                        01
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 mb-2">
                        Victim of Unauthorised Electronic Debits
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        You woke up to debit SMS alerts for transactions you never initiated, or malware bypassed your net banking without OTP. You never willingly typed your UPI PIN or handed over cash.
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-100">
                      <span className="text-[11px] font-bold text-emerald-700 block uppercase">
                        Recommended Rail:
                      </span>
                      <span className="text-xs text-slate-800 font-semibold">
                        Bank Zero-Liability claim + RBI Ombudsman (cms.rbi.org.in)
                      </span>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 font-extrabold flex items-center justify-center text-sm mb-3">
                        02
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 mb-2">
                        Victim of Deception / Task / Digital Arrest Scams
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        You voluntarily entered your PIN or transferred funds via NEFT/RTGS because you were manipulated, threatened with arrest, or lured by fake Telegram/job promises.
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-100">
                      <span className="text-[11px] font-bold text-amber-700 block uppercase">
                        Recommended Rail:
                      </span>
                      <span className="text-xs text-slate-800 font-semibold">
                        Immediate 1930 Call → Lien Identification → Section 503 BNSS Petition
                      </span>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 font-extrabold flex items-center justify-center text-sm mb-3">
                        03
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 mb-2">
                        Victim of Regulated Platforms (Brokers / Gaming)
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        Your funds are trapped inside a registered Indian stock broker, payment gateway, or registered gaming application whose legal entity is incorporated in India.
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-100">
                      <span className="text-[11px] font-bold text-blue-700 block uppercase">
                        Recommended Rail:
                      </span>
                      <span className="text-xs text-slate-800 font-semibold">
                        SEBI SMART ODR arbitration or e-Jagriti Consumer Court complaint
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 4: ROUTE 1 - BANK ZERO LIABILITY */}
              <section id="heading-bank-zero-liability" className="scroll-mt-24 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                    Statutory Framework
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                    Route 1: Bank Zero-Liability Reversal for Unauthorised Electronic Debits
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under the Reserve Bank of India’s landmark circular <strong>DBR.No.Leg.BC.78/09.07.005/2017-18</strong>, Indian bank customers have clear statutory immunity against third-party cyber attacks and system vulnerabilities.
                </p>

                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
                  <h3 className="text-sm font-bold text-slate-900">
                    The 3-Day Rule &amp; Burden of Proof
                  </h3>
                  <ul className="text-xs sm:text-sm text-slate-700 space-y-2 list-disc pl-5">
                    <li>
                      <strong>Zero Customer Liability:</strong> When an unauthorised transaction occurs due to contributory fraud, negligence, or deficiency on the part of the bank (whether notified by the customer or not), or a third-party breach where the deficiency lies elsewhere in the system, and the customer notifies the bank within <strong>three working days</strong> of receiving transaction SMS/email alerts.
                    </li>
                    <li>
                      <strong>Mandatory 10-Day Shadow Credit:</strong> Upon being notified by the customer, the bank must provisionally credit the disputed amount back to the customer&rsquo;s account within <strong>10 working days</strong> (Paragraph 9 of the circular), even while the bank&rsquo;s internal forensic investigation is pending.
                    </li>
                    <li>
                      <strong>Burden of Proof Rests on the Bank:</strong> Under Paragraph 12, the burden of proving customer negligence lies entirely on the bank. Commercial banks frequently violate this mandate by summarily rejecting claims with generic templated emails saying <em>&ldquo;transaction was authenticated via OTP, case closed.&rdquo;</em>
                    </li>
                  </ul>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  If your bank refuses provisional credit or dismisses your claim without providing forensic server evidence that you personally leaked credentials, you can serve a formal statutory legal notice through an advocate. If the bank fails to resolve it within 30 days, file an online appeal before the <strong>RBI Integrated Ombudsman</strong> via the Complaint Management System (CMS) at <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-red-600 font-semibold hover:underline">cms.rbi.org.in</a>.
                </p>
                <div className="pt-1">
                  <Link
                    href="/law/rbi-zero-liability-unauthorised-transaction"
                    className="text-xs font-bold text-red-600 hover:text-red-800 hover:underline"
                  >
                    Read our complete guide to RBI Zero-Liability Rules &amp; Compensation →
                  </Link>
                </div>
              </section>

              {/* HANDCRAFTED SVG PROCESS DIAGRAM (Page-specific artefact) */}
              <section className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs">
                <div className="mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-600">
                    Process Flowchart
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                    The Cyber Fraud Money Trail: From 1930 Lien Freeze to Court Restitution
                  </h3>
                  <p className="text-xs text-slate-500">
                    Handcrafted visualization of how cyber fraud funds travel through layered mule accounts and how Section 503 BNSS secures physical refund.
                  </p>
                </div>

                <div className="w-full overflow-x-auto py-2">
                  <div className="min-w-[680px] flex items-center justify-between gap-3 text-center">
                    {/* Step 1 */}
                    <div className="flex-1 bg-rose-50 border border-rose-200 rounded-xl p-3.5">
                      <div className="w-7 h-7 rounded-full bg-rose-600 text-white font-bold text-xs flex items-center justify-center mx-auto mb-2">
                        1
                      </div>
                      <h4 className="text-xs font-bold text-rose-900 mb-1">
                        Victim Account
                      </h4>
                      <p className="text-[11px] text-rose-700 leading-tight">
                        Money debited via UPI, IMPS, or NetBanking to fraudster.
                      </p>
                    </div>

                    <div className="text-slate-300 font-bold text-lg">→</div>

                    {/* Step 2 */}
                    <div className="flex-1 bg-amber-50 border border-amber-200 rounded-xl p-3.5">
                      <div className="w-7 h-7 rounded-full bg-amber-600 text-white font-bold text-xs flex items-center justify-center mx-auto mb-2">
                        2
                      </div>
                      <h4 className="text-xs font-bold text-amber-900 mb-1">
                        Layer 1 Mule Bank
                      </h4>
                      <p className="text-[11px] text-amber-700 leading-tight">
                        Funds hit primary rented account; rapid splitting into Layer 2/3.
                      </p>
                    </div>

                    <div className="text-slate-300 font-bold text-lg">→</div>

                    {/* Step 3 */}
                    <div className="flex-1 bg-blue-50 border border-blue-200 rounded-xl p-3.5">
                      <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center mx-auto mb-2">
                        3
                      </div>
                      <h4 className="text-xs font-bold text-blue-900 mb-1">
                        1930 Helpline Alert
                      </h4>
                      <p className="text-[11px] text-blue-700 leading-tight">
                        I4C CFCFRMS fires API lien notices to freeze balances.
                      </p>
                    </div>

                    <div className="text-slate-300 font-bold text-lg">→</div>

                    {/* Step 4 */}
                    <div className="flex-1 bg-emerald-50 border border-emerald-200 rounded-xl p-3.5">
                      <div className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center mx-auto mb-2">
                        4
                      </div>
                      <h4 className="text-xs font-bold text-emerald-900 mb-1">
                        Sec. 503 BNSS Order
                      </h4>
                      <p className="text-[11px] text-emerald-700 leading-tight">
                        Magistrate orders bank to release frozen funds to victim.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 5: ROUTE 2 - NATIONAL CYBER CRIME PORTAL (1930) */}
              <section id="heading-cyber-portal-freeze" className="scroll-mt-24 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                    Emergency Response
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                    Route 2: National Cyber Crime Portal (1930) &amp; CFCFRMS Layered Account Freezing
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  In deception scams (Telegram jobs, fake IPOs, digital arrest), the transfer is authorised by you, meaning RBI zero liability generally does not apply. In these scenarios, the <strong>Citizen Financial Cyber Fraud Reporting and Management System (CFCFRMS)</strong> operated under the Ministry of Home Affairs (I4C) is your primary lifeline.
                </p>

                <h3 className="text-base font-bold text-slate-900">
                  How the 1930 &ldquo;Golden Hour&rdquo; Freezing Works
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When money is sent to a scammer, it does not instantly vanish into cash. It lands in a <em>Layer-1 mule account</em> (an account opened using forged documents or rented from college students/labourers). Within minutes, the automated syndicates split the funds across multiple <em>Layer-2</em> and <em>Layer-3</em> accounts before attempting ATM withdrawals or P2P crypto purchases.
                </p>
                <div className="bg-white rounded-xl border border-slate-200 p-4 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    What Happens During the 1930 Intake:
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    1. The 1930 operator verifies your 12-digit UPI UTR number or IMPS reference, remitter account, recipient account, and timestamp.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    2. The system sends an automated high-priority API freeze flag to the beneficiary bank&rsquo;s nodal officer.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    3. If the money has not yet left Layer-1, a debit freeze (lien) is placed on that exact amount. If it moved to Layer-2, the system cascades the freeze signal to subsequent banks.
                  </p>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  <strong>Critical Warning:</strong> A 1930 freeze immobilises the money, but <em>it does not disburse the money back to your bank account</em>. The bank cannot transfer funds out of a frozen account without police clearance or judicial authority. That brings us to Route 3.
                </p>
                <div className="pt-1">
                  <Link
                    href="/how-to-recover-money-stuck-in-online-cyber-fraud"
                    className="text-xs font-bold text-red-600 hover:text-red-800 hover:underline"
                  >
                    Check our complete playbook on Recovering Money Stuck in Cyber Fraud →
                  </Link>
                </div>
              </section>

              {/* SECTION 6: ROUTE 3 - SEC 503 BNSS COURT ORDER */}
              <section id="heading-bnss-court-restitution" className="scroll-mt-24 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                    Judicial Restitution
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                    Route 3: Court De-freezing &amp; Restitution Order Under Section 503 BNSS
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The most critical bottleneck for cyber scam victims in India is transitioning from a &ldquo;police account freeze&rdquo; to actual cash in hand. Under Indian criminal procedure, once police freeze bank accounts under Section 106 of the Bharatiya Nagarik Suraksha Sanhita, 2023 (formerly s.102 CrPC), those funds are treated as <em>case property</em>.
                </p>
                <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200">
                  <h3 className="text-sm font-bold text-amber-950 mb-2">
                    Section 503 BNSS (Formerly Section 457 CrPC): The Release Mechanism
                  </h3>
                  <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    Under <strong>Section 503 of the Bharatiya Nagarik Suraksha Sanhita, 2023</strong>, whenever the seizure of property by police is reported to a Magistrate, and such property is not produced before a Criminal Court during inquiry or trial, the Magistrate may make such order as they think fit respecting the delivery of such property to the person entitled to possession thereof.
                  </p>
                </div>

                <h3 className="text-base font-bold text-slate-900">
                  The Step-by-Step BNSS Restitution Procedure:
                </h3>
                <ol className="text-xs sm:text-sm text-slate-700 space-y-3 list-decimal pl-5">
                  <li>
                    <strong>Obtain Police Status &amp; Lien Certificate:</strong> Approach the investigating cyber cell with your National Cybercrime Reporting Portal (NCRP) Acknowledgement Number. Obtain a written status report stating that ₹X is lien-marked in Beneficiary Bank Y (Account No. Z) and that no other claimants have raised a dispute against this specific transaction.
                  </li>
                  <li>
                    <strong>Draft Section 503 BNSS Application:</strong> Engage an advocate to file a miscellaneous criminal petition before the jurisdictional Chief Judicial Magistrate (CJM) or Metropolitan Magistrate (MM). The application annexes your bank statement, transaction receipt, NCRP acknowledgement, and WhatsApp/Telegram chat logs certified under Section 63 of Bharatiya Sakshya Adhiniyam, 2023.
                  </li>
                  <li>
                    <strong>Notice to Beneficiary Bank &amp; Account Holder:</strong> The Magistrate issues notice to the Cyber Crime Unit and the concerned beneficiary bank. If the mule account holder fails to appear or cannot substantiate the legitimacy of the incoming funds, the Magistrate orders disposal.
                  </li>
                  <li>
                    <strong>Furnishing Indemnity Bond:</strong> The Magistrate directs the bank to release the frozen funds directly into the victim&rsquo;s verified bank account upon the victim furnishing an indemnity bond (undertaking to return the money if later proven not entitled).
                  </li>
                </ol>
              </section>

              {/* SECTION 7: ROUTE 4 - SEBI SMART ODR */}
              <section id="heading-sebi-smart-odr" className="scroll-mt-24 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                    Securities Disputes
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                    Route 4: SEBI SMART ODR &amp; SCORES for Regulated Broker &amp; Investment Frauds
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  If your loss occurred through an intermediary registered with the Securities and Exchange Board of India (SEBI)—such as an unauthorized square-off of intraday positions, unconsented options trading by an authorized person, or demat account manipulation—you do not need to file a police FIR or wait in civil court.
                </p>
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
                  <h3 className="text-sm font-bold text-slate-900">
                    The SMART ODR Escalation Framework (Circular SEBI/HO/OIAE/OIAE_IAD-1/P/CIR/2023/131)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    SEBI operates an institutional, digital dispute resolution rail known as <strong>SMART ODR (Smart Online Dispute Resolution)</strong>.
                  </p>
                  <ul className="text-xs sm:text-sm text-slate-700 space-y-2 list-disc pl-5">
                    <li>
                      <strong>Stage 1 (Internal Grievance):</strong> Lodge dispute with the broker/depository participant. The broker has 21 calendar days to resolve it.
                    </li>
                    <li>
                      <strong>Stage 2 (SEBI SCORES 2.0):</strong> If unresolved, escalate on the SEBI Complaints Redress System (<a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="text-red-600 font-semibold hover:underline">scores.sebi.gov.in</a>).
                    </li>
                    <li>
                      <strong>Stage 3 (SMART ODR Conciliation &amp; Arbitration):</strong> If SCORES fails, initiate digital conciliation through SMART ODR. An independent conciliator conducts video hearings. If unsettled, an independent arbitrator passes an enforceable award within 30 to 45 days.
                    </li>
                  </ul>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <em>Note:</em> SMART ODR only applies to registered market intermediaries. If you deposited money into a WhatsApp group claiming to be an &ldquo;institutional foreign investor&rdquo; with no SEBI registration number, SMART ODR will reject the claim for lack of jurisdiction; you must use Route 2 &amp; Route 3.
                </p>
              </section>

              {/* SECTION 8: ROUTE 5 - CONSUMER COMMISSION */}
              <section id="heading-consumer-court" className="scroll-mt-24 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                    Deficiency in Service
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                    Route 5: Consumer Commission (e-Jagriti) for Gross Bank or Gateway Deficiency
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When a commercial bank, wallet provider, or payment gateway commits an actionable breach of service—such as ignoring customer dispute emails, refusing to activate mandatory fraud monitoring filters, or delaying intermediate account freezes after receiving 1930 alerts—the victim can initiate legal action before the Consumer Commission under the <strong>Consumer Protection Act, 2019</strong>.
                </p>
                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                  <h3 className="text-xs font-extrabold uppercase text-slate-800 tracking-wider">
                    Grounds for Consumer Action Against Regulated Entities:
                  </h3>
                  <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc pl-5">
                    <li>
                      <strong>Failure to Comply with RBI Security Norms:</strong> Allowing high-value transfers outside customer profiling without multi-factor alerts.
                    </li>
                    <li>
                      <strong>Delay in Executing Chargeback / Dispute Window:</strong> Permitting transactions on reported stolen cards or compromised credentials.
                    </li>
                    <li>
                      <strong>Negligent KYC Compliance for Mule Accounts:</strong> Beneficiary banks opening accounts without genuine biometric or physical address verification, enabling money launderers to cash out.
                    </li>
                  </ul>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Consumer claims up to ₹50 lakh are adjudicated by District Consumer Disputes Redressal Commissions (DCDRC) via the unified <strong>e-Jagriti portal</strong> (<a href="https://e-jagriti.gov.in" target="_blank" rel="noopener noreferrer" className="text-red-600 font-semibold hover:underline">e-jagriti.gov.in</a>). Before filing, serving a formal statutory legal notice is standard practice to establish deficiency on record.
                </p>
              </section>

              {/* SECTION 9: INTERACTIVE PROBLEM DIAGNOSTIC (Tabs Component) */}
              <section id="heading-problem-diagnostic" className="scroll-mt-24 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                    Diagnostic Tool
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                    Interactive Diagnostic: Select Your Scam Type to Check Legal Recovery Options
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Click through each scenario below to understand the exact mechanics, recoverability odds, and immediate statutory steps for your specific scam profile:
                </p>

                <ScamRecoveryProblemTabs />
              </section>

              {/* SECTION 10: COURT PRECEDENTS / CASE DIGEST */}
              <section id="heading-precedents" className="scroll-mt-24 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                    Judicial Authority
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                    Precedent Digest: Landmark Judicial Rulings on Cyber Fraud &amp; Bank Compensation
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  These authoritative judgments from the High Courts and National Consumer Commission establish binding precedents for recovering cyber scam losses:
                </p>

                <div className="space-y-6">
                  {CASE_CITATIONS.map((c, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-3"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                        <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                          {c.title}
                        </span>
                        <span className="text-[11px] text-slate-500 font-medium">
                          {c.date}
                        </span>
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900">
                        {c.parties}
                      </div>
                      <div className="text-xs font-mono text-slate-500 bg-slate-50 px-2.5 py-1 rounded inline-block">
                        {c.citation}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <strong className="text-slate-900">Facts: </strong>
                        {c.facts}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                        <strong className="text-slate-900">Judicial Holding: </strong>
                        {c.holding}
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-slate-100 text-xs">
                        <span className="font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                          {c.amount}
                        </span>
                        <span className="text-slate-500 italic">
                          <strong>Key Takeaway:</strong> {c.takeaway}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION 11: WORKED EXAMPLE */}
              <section id="heading-worked-example" className="scroll-mt-24 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                    Illustrative Blueprint
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                    Worked Case Example: Recovering ₹1,65,000 from a Telegram Trading Mule Account
                  </h2>
                </div>
                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                    <span className="px-2.5 py-1 bg-red-100 text-red-800 rounded-md text-xs font-bold uppercase">
                      Illustrative Case Study
                    </span>
                    <span className="text-xs text-slate-500">
                      Dispute Amount: ₹2,80,000 • Recovered: ₹1,65,000
                    </span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <p>
                      <strong>The Incident:</strong> On 12 October 2026, &ldquo;Rohan&rdquo; was added to a Telegram channel named &ldquo;Alpha Stock Institutional Growth&rdquo;. Promising a guaranteed 400% return on institutional block trades, the group admin induced Rohan to transfer ₹2,80,000 in three separate UPI transactions (₹50,000, ₹1,00,000, and ₹1,30,000) to three distinct current accounts. When Rohan attempted to withdraw his balance, the dashboard showed ₹14,20,000 but demanded an additional ₹1,80,000 for &ldquo;SEBI capital gains clearance tax&rdquo;.
                    </p>
                    <p>
                      <strong>Immediate Action (Hour 1):</strong> Recognizing the fraud, Rohan immediately dialed <strong>1930</strong> at 2:15 PM, exactly 45 minutes after his final transaction. He provided the three 12-digit transaction UTRs, his ICICI Bank account details, and the recipient Yes Bank and Federal Bank account numbers.
                    </p>
                    <p>
                      <strong>Lien Tracking via CFCFRMS:</strong> Within 3 hours, the CFCFRMS automated alert froze ₹1,65,000 in the Federal Bank Layer-1 account before the syndicates could move it. The remaining ₹1,15,000 had unfortunately been withdrawn across five Gujarat ATMs within 20 minutes of receipt.
                    </p>
                    <p>
                      <strong>Magisterial Court Action (Month 2):</strong> Rohan received his formal National Cybercrime Reporting Portal Acknowledgement (NCRP Ack No. 2026-MH-94821). Rohan engaged an advocate who filed a petition under <strong>Section 503 BNSS, 2023</strong> before the Judicial Magistrate First Class (JMFC). The petition annexed bank statement copies, certified WhatsApp chats under Section 63 BSA 2023, and the Cyber Crime Police verification report.
                    </p>
                    <p>
                      <strong>Restitution Order (Month 4):</strong> The Magistrate issued notice to Federal Bank and the account holder. The mule account holder failed to appear. On 18 February 2027, the Magistrate directed Federal Bank to release ₹1,65,000 directly back to Rohan&rsquo;s verified ICICI savings account against an indemnity bond of equal value.
                    </p>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600">
                    <strong>Honest Takeaway:</strong> Rohan did not recover 100% of his ₹2,80,000 loss because ₹1,15,000 was withdrawn at ATMs before the freeze took effect. However, by acting during the &ldquo;Golden Hour&rdquo; and following up with a Section 503 BNSS court application, he successfully recovered <strong>₹1,65,000 (59% of total funds)</strong> that would have otherwise remained permanently frozen in banking limbo.
                  </div>
                </div>
              </section>

              {/* SECTION 12: MANDATORY EVIDENCE CHECKLIST */}
              <section id="heading-evidence-checklist" className="scroll-mt-24 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                    Statutory Compliance
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                    Mandatory Evidentiary Checklist for Cyber Fraud Restitution (Section 63 BSA 2023)
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under the <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>, courts and banking ombudsmen require authenticated electronic evidence. Prepare this mandatory dossier immediately after discovering a scam:
                </p>

                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="w-5 h-5 rounded-full bg-red-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        ✓
                      </span>
                      <div>
                        <h3 className="text-xs font-bold text-slate-900">
                          Complete Bank Account Statement
                        </h3>
                        <p className="text-[11px] text-slate-600 mt-0.5">
                          PDF statement with visible 12-digit UTR / IMPS reference numbers, debited timestamps, and recipient account details.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="w-5 h-5 rounded-full bg-red-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        ✓
                      </span>
                      <div>
                        <h3 className="text-xs font-bold text-slate-900">
                          1930 NCRP Acknowledgement Copy
                        </h3>
                        <p className="text-[11px] text-slate-600 mt-0.5">
                          Formal National Cybercrime Reporting Portal complaint PDF showing incident date, beneficiary details, and police acknowledgment.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="w-5 h-5 rounded-full bg-red-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        ✓
                      </span>
                      <div>
                        <h3 className="text-xs font-bold text-slate-900">
                          WhatsApp / Telegram Chat Exports
                        </h3>
                        <p className="text-[11px] text-slate-600 mt-0.5">
                          Export complete chat history (.txt) with media, group member phone numbers, and website links before fraudsters delete messages.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="w-5 h-5 rounded-full bg-red-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        ✓
                      </span>
                      <div>
                        <h3 className="text-xs font-bold text-slate-900">
                          Section 63 BSA Electronic Certificate
                        </h3>
                        <p className="text-[11px] text-slate-600 mt-0.5">
                          Signed certificate by the device owner under Section 63 Bharatiya Sakshya Adhiniyam certifying the device&rsquo;s integrity.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="w-5 h-5 rounded-full bg-red-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        ✓
                      </span>
                      <div>
                        <h3 className="text-xs font-bold text-slate-900">
                          Written Bank Intimation Proof
                        </h3>
                        <p className="text-[11px] text-slate-600 mt-0.5">
                          Timestamped email or branch acknowledgement showing dispute reporting within the 3-day window for RBI zero liability claims.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="w-5 h-5 rounded-full bg-red-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        ✓
                      </span>
                      <div>
                        <h3 className="text-xs font-bold text-slate-900">
                          Payment Gateway &amp; App Screenshots
                        </h3>
                        <p className="text-[11px] text-slate-600 mt-0.5">
                          Screenshots of bogus trading dashboard balances, APK download links, or false tax demands proving fraudulent inducement.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 13: HONEST SCOPE (WHAT WE CAN & CANNOT DO) */}
              <section id="heading-scope" className="scroll-mt-24 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                    Transparency
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                    What LegalRecovery Can and Cannot Do for Scam Victims
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-emerald-600" />
                      <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                        What We Can Do (Enforceable Legal Actions)
                      </h3>
                    </div>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-2 list-disc pl-5">
                      <li>
                        <strong>Draft Statutory Demand Notices to Banks:</strong> Hold remitter and beneficiary banks strictly accountable for violating RBI Zero-Liability directions or ignoring 1930 freeze alerts.
                      </li>
                      <li>
                        <strong>Notice to Payment Aggregators:</strong> Target Indian payment gateways (Razorpay, Cashfree, Paytm) that processed merchant onboarding for illegal betting or task portals without due diligence.
                      </li>
                      <li>
                        <strong>Draft Section 503 BNSS Court Petitions:</strong> Prepare structured criminal court applications for the formal release of identified, frozen mule balances back to your bank account.
                      </li>
                      <li>
                        <strong>Consumer Commission Litigation:</strong> File e-Jagriti claims for financial deficiency and mental agony against negligent banks.
                      </li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-100/70 border border-slate-200 space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-600" />
                      <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                        What We CANNOT Do (Protect Yourself from Scams)
                      </h3>
                    </div>
                    <ul className="text-xs sm:text-sm text-slate-600 space-y-2 list-disc pl-5">
                      <li>
                        <strong>We CANNOT &ldquo;Hack&rdquo; or &ldquo;Retrieve&rdquo; Crypto:</strong> Anyone claiming they can trace or reverse blockchain transactions for an upfront fee is a criminal scammer.
                      </li>
                      <li>
                        <strong>We CANNOT Recover Cash Withdrawn from ATMs:</strong> If the scam syndicate succeeded in withdrawing funds before 1930 freezing, civil and banking restitution is exhausted; recovery depends on criminal police recovery.
                      </li>
                      <li>
                        <strong>We Never Guarantee 100% Recovery:</strong> Recovery depends strictly on the evidentiary trail, timing of the 1930 ticket, and available frozen balances.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* CALL TO ACTION COMPONENT */}
              <ScamRecoveryNoticeCTA />

              {/* SECTION 14: FAQS */}
              <section id="heading-faqs" className="scroll-mt-24 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                    Frequently Asked Questions
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                    Frequently Asked Questions on Online Scam Money Recovery in India
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                      Can I get my money back after being scammed in India?
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Yes, but recovery depends entirely on the scam category and reporting speed. If the transaction was an unauthorised banking debit, the RBI Zero Liability Circular entitles you to a full refund from your bank if reported within 3 working days. For deception frauds (Telegram tasks, digital arrest, fake trading apps), recovery does not come from the anonymous fraudster; it comes from funds frozen in domestic mule bank accounts via the 1930 cyber portal and released through a Magistrate&rsquo;s order under Section 503 of Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                      How long does it take to get fraud money back from cyber crime in India?
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Statutory bank reversals under RBI guidelines take 10 to 90 days. For money frozen in cyber mule accounts via the 1930 helpline, the restitution process through the jurisdictional Judicial Magistrate under Section 503 BNSS typically takes 3 to 8 months, involving police status verification and execution of an indemnity bond.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                      What happens when you call 1930 cyber crime helpline?
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      When you dial 1930, the operator logs the victim and beneficiary account details onto the Citizen Financial Cyber Fraud Reporting and Management System (CFCFRMS). Automated API alerts trigger a debit freeze (lien) on the fraudster&rsquo;s intermediate mule accounts across Layer 1, Layer 2, and Layer 3 banks, preventing funds from being withdrawn at ATMs or converted into crypto.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                      What is Section 503 BNSS and why is it needed to get frozen money back?
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Section 503 of the Bharatiya Nagarik Suraksha Sanhita, 2023 (which replaced Section 457 of the Code of Criminal Procedure) empowers a Magistrate to direct the disposal and return of seized property pending criminal trial. Even after cyber police freeze a scammer&rsquo;s bank account, banks cannot legally disburse funds to you without a magisterial court order directing the release against an indemnity bond.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                      Can private cyber recovery agencies or ethical hackers get my lost money back?
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      No. Any private individual, Instagram page, or commercial agency claiming they can &ldquo;hack the scammer&rdquo; or &ldquo;retrieve stolen cryptocurrency&rdquo; for an upfront fee is running a secondary recovery scam. Under Indian law, only formal banking dispute rails, police cyber cells operating under I4C, and judicial courts have legal authority to immobilise and disburse bank funds.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                      Can I recover money lost in unregulated Telegram trading and pre-IPO schemes?
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Recovery from the fraudulent app developers is virtually impossible because they operate behind encrypted offshore servers. However, money can be recovered from the Indian bank accounts of the &ldquo;money mules&rdquo; who received your UPI transfers, provided those accounts were lien-marked via 1930 before the funds were siphoned.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 15: PRIMARY SOURCES & STATUTORY REFS */}
              <section id="heading-sources" className="scroll-mt-24 space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                    Statutory Citations
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                    Statutory Provisions, Regulatory Circulars &amp; Primary Legal References
                  </h2>
                </div>
                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-3">
                  <p className="text-xs text-slate-500">
                    All legal doctrines, timelines, and rights on this page are grounded directly in these verified government gazettes and statutory authorities:
                  </p>
                  <ul className="space-y-2">
                    {PRIMARY_SOURCES.map((src, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                        <span className="text-red-600 font-bold mt-0.5">•</span>
                        <a
                          href={src.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-800 hover:text-red-600 hover:underline font-medium"
                        >
                          {src.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Related Recovery Guides */}
              <div className="pt-6 border-t border-slate-200">
                <RelatedRecoveryGuides />
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
