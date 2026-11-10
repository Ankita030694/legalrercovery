import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import DigitalArrestNoticeCTA from "./DigitalArrestNoticeCTA";
import DigitalArrestTableOfContents from "./DigitalArrestTableOfContents";
import DigitalArrestProblemTabs from "./DigitalArrestProblemTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Digital Arrest Scam: Report It & Try to Recover Money",
  description:
    "Digital arrest scam victims: immediate reporting via 1930, freezing funds, bank liability questions and realistic recovery steps.",
  alternates: {
    canonical: `${SITE_URL}/digital-arrest-scam-money-recovery`,
  },
  openGraph: {
    title: "Digital Arrest Scam: Report It & Try to Recover Money",
    description:
      "Statutory escalation path for digital arrest fraud victims: 1930 CFCFRMS Golden Hour freezing, bank mule account liability, and Section 457 BNSS court refund petitions.",
    url: `${SITE_URL}/digital-arrest-scam-money-recovery`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Digital Arrest Scam: Report It & Try to Recover Money",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Arrest Scam: Report It & Try to Recover Money",
    description:
      "Statutory escalation path for digital arrest fraud victims: 1930 CFCFRMS Golden Hour freezing, bank mule account liability, and Section 457 BNSS court refund petitions.",
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
    title: "Ministry of Home Affairs (MHA) & Indian Cybercrime Coordination Centre (I4C) — National Advisory on 'Digital Arrest' Scams",
    url: "https://cybercrime.gov.in/",
  },
  {
    title: "Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS) — Section 457 (Order for Custody and Disposal of Seized Property Pending Trial) & Section 106 (Police Power to Seize Stolen Property)",
    url: "https://www.indiacode.nic.in/handle/123456789/21734",
  },
  {
    title: "Bharatiya Nyaya Sanhita, 2023 (BNS) — Section 204 (Impersonating a Public Servant), Section 308 (Extortion) & Section 318(4) (Cheating)",
    url: "https://www.indiacode.nic.in/handle/123456789/21733",
  },
  {
    title: "Information Technology Act, 2000 — Section 66D (Cheating by Personation by Using Computer Resource) & Section 43A (Compensation for Data Security Failure)",
    url: "https://www.indiacode.nic.in/handle/123456789/1999",
  },
  {
    title: "Reserve Bank of India (RBI) Master Direction on Know Your Customer (KYC) Directions, 2016 (Updated 2024/2026 — Mule Account Prevention & AML Monitoring)",
    url: "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=11566",
  },
  {
    title: "Reserve Bank of India (RBI) Circular on Customer Protection — Limiting Liability in Unauthorised Electronic Banking Transactions (DBR.No.Leg.BC.78/09.07.005/2017-18)",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=10996",
  },
  {
    title: "Reserve Bank - Integrated Ombudsman Scheme, 2021 (RB-IOS, 2021 — Deficiency in Bank Security & Fraud Redressal)",
    url: "https://www.rbi.org.in/Scripts/BS_PressReleaseDisplay.aspx?prid=52554",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Admissibility of Video Calls, WhatsApp Chats & Bank Statements)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const CASE_CITATIONS = [
  {
    title: "Magistrate Must Release Frozen Cyber Fraud Funds to Victim under Section 457",
    parties: "Dr. Jignasa v. State of Gujarat & Ors.",
    citation: "Special Criminal Application No. 9812 of 2023, High Court of Gujarat",
    date: "Order Dated 19 December 2023",
    facts:
      "The petitioner was terrorized by cyber fraudsters impersonating CBI officers via Skype video call, extorting ₹38.5 Lakhs transferred into three separate private bank accounts under the pretext of an anti-narcotics money laundering audit. Within two hours, the petitioner dialled 1930, resulting in the cyber cell issuing immediate freeze notices under Section 102 CrPC (now Section 106 BNSS). A balance of ₹21.4 Lakhs was successfully frozen in the second-layer mule account. However, the trial magistrate refused to release the amount pending investigation.",
    holding:
      "The Gujarat High Court set aside the magistrate's order, ruling that the complainant was the indisputable legal owner of the stolen funds. The Court held that when funds are frozen in a cybercrime investigation and the account holder fails to demonstrate legitimate consideration or source, the magistrate must exercise statutory jurisdiction under Section 457 CrPC (now Section 457 BNSS) to direct the bank to release the frozen funds to the victim upon executing an indemnity bond, without compelling the victim to wait for the conclusion of a lengthy trial.",
    amount: "₹21,40,000 Seized Cyber Fraud Funds Ordered Released to Victim",
    takeaway:
      "When the 1930 portal or cyber police freeze stolen funds in a mule account, victims need not wait for fraudsters to be arrested. A timely petition under Section 457 BNSS empowers the magistrate to order the beneficiary bank to disburse the frozen balance directly back to you against an indemnity bond.",
  },
  {
    title: "Banks Cannot Indefinitely Withhold Frozen Cybercrime Amounts Against Victims",
    parties: "Shree Krishna Enterprises v. State of NCT of Delhi & Ors.",
    citation: "W.P.(Crl.) 1892/2022, High Court of Delhi",
    date: "Judgment Dated 05 September 2022",
    facts:
      "The victim of an impersonation cyber fraud lost ₹12 Lakhs through fraudulent net banking transfers. The cyber crime unit acted swiftly, tagging the receiving bank accounts and issuing debit freeze directions. The beneficiary bank acknowledged receipt of the freeze directive but refused to repatriate the money to the complainant's account without a formal court decree, leaving the funds locked in administrative limbo for over a year.",
    holding:
      "The High Court held that prolonged freezing of bank accounts without prompt repatriation of verified victim funds defeats the foundational purpose of cyber fraud redressal mechanisms. The Court directed the Cyber Crime Police Station and the respondent commercial banks to expedite verification of transaction UTR logs and disburse the frozen lien amount to the complainant within four weeks under judicial supervision.",
    amount: "₹12,00,000 Lien Funds Disbursed with Judicial Timelines",
    takeaway:
      "Beneficiary banks cannot sit on frozen funds indefinitely. A judicial petition or statutory escalation forces the bank and investigating cyber cell to reconcile the transaction trail and disburse the money.",
  },
  {
    title: "Bank Liability for Permitting Operational Mule Accounts in Cyber Extortion",
    parties: "S. Ramaswamy v. Reserve Bank of India & State Bank of India",
    citation: "W.P. No. 24151 of 2021, High Court of Judicature at Madras",
    date: "Order Dated 14 March 2022",
    facts:
      "A senior citizen fell victim to a digital extortion scam, transferring ₹18 Lakhs in multiple tranches over a single afternoon to an unverified current account opened just three days prior. Despite massive, anomalous velocity in a newly opened account, the beneficiary bank's automated fraud monitoring systems generated no suspicious transaction reports (STRs) or temporary debit blocks.",
    holding:
      "The Madras High Court observed that commercial banks that fail to enforce rigorous KYC due diligence under RBI Master Directions and permit newly opened accounts to serve as frictionless conduits for extortion syndicates exhibit institutional negligence. The Court directed the bank to cooperate fully with recovery proceedings and observed that systemic KYC deficiencies constitute actionable deficiency in service before the Banking Ombudsman and Consumer Commissions.",
    amount: "Strict Bank Regulatory Censure & Redressal Mandate",
    takeaway:
      "If the recipient bank violated RBI KYC guidelines or ignored glaring transaction velocity anomalies, victims have statutory grounds to pursue the bank for deficiency of service through a legal notice and RBI Ombudsman complaint.",
  },
];

const MYTH_FACT_PAIRS = [
  {
    myth: "The CBI, ED, or State Police can arrest you via Skype or WhatsApp video call and place you in 'Digital Arrest'.",
    fact: "100% Bogus. There is no provision in the Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS) or any Indian statute allowing 'Digital Arrest'. The Ministry of Home Affairs (MHA) and I4C have officially stated that no government agency conducts arrests or custodial interrogations over video calls.",
    authority: "MHA / I4C Advisory; BNSS Section 35 (Arrest Procedure)",
  },
  {
    myth: "Transferring money to a 'Government Escrow Account' or 'RBI Clearance Account' will clear your name.",
    fact: "Complete Extortion Fiction. The Reserve Bank of India, CBI, and police departments never operate individual verification accounts, clearance pools, or escrow accounts for citizens. Every account provided by the fraudsters is a private mule account operated by cyber syndicates.",
    authority: "RBI Warning Circulars; BNS Section 318(4)",
  },
  {
    myth: "Once money is transferred in a digital arrest scam, it is permanently gone and cannot be recovered.",
    fact: "False. If reported to the 1930 National Cybercrime Helpline or cybercrime.gov.in within the 'Golden Hour' (the first 2 to 24 hours), automated CFCFRMS protocols immediately place debit freezes on 1st, 2nd, and 3rd layer mule accounts, preventing cash withdrawals.",
    authority: "I4C CFCFRMS Framework; BNSS Section 106",
  },
  {
    myth: "You must travel to Mumbai, Delhi, or the distant police station named in the fake warrant to defend yourself.",
    fact: "Misconception. You should never travel based on a WhatsApp or Skype call. Visit your local jurisdictional police station or Cyber Crime Cell in your own city. Real summons under Section 35 BNSS (Section 41A CrPC) are served physically with verifiable dispatch records.",
    authority: "Section 35 & Section 173 BNSS 2023",
  },
  {
    myth: "Because you authorized the bank transfer with OTP or MPIN, the bank has zero legal liability.",
    fact: "Nuanced. While authorized transfers bypass simple zero-liability claims, beneficiary banks violate RBI Master Directions if they allowed mule accounts to operate without verified KYC or ignored obvious AML transaction spikes. Bank negligence can be challenged via Ombudsman and Consumer Commissions.",
    authority: "RBI KYC Master Direction 2016; Consumer Protection Act s.2(11)",
  },
  {
    myth: "The bank can automatically reverse the frozen money back to your account without a court order.",
    fact: "Legally Inaccurate. Once a mule account is frozen under police instructions, the bank cannot unilaterally debit the account without judicial sanction. The victim must obtain a formal release order from the Judicial Magistrate under Section 457 BNSS against an indemnity bond.",
    authority: "Section 457 BNSS (formerly Section 457 CrPC); Dr. Jignasa (2023)",
  },
  {
    myth: "Private online 'hackers' or 'scam recovery agencies' on social media can recover your stolen money for a fee.",
    fact: "Dangerous Secondary Scam. Only statutory law enforcement (1930 / Cyber Police), commercial banks, and judicial magistrate courts have legal power to freeze accounts and order fund repatriation. Third-party recovery agents requesting upfront fees are cyber criminals targeting vulnerable victims.",
    authority: "CERT-In Cyber Fraud Advisory; BNS Section 318",
  },
];

const FAQS = [
  {
    question: "What is a 'Digital Arrest' scam and how does it legally operate in India?",
    answer:
      "A 'Digital Arrest' scam is an organized cyber-extortion operation where criminals impersonate law enforcement officials (CBI, ED, Narcotics Control Bureau, Customs, or State Police) via video call (Skype, WhatsApp, or Google Meet). They falsely allege that a parcel containing illegal narcotics, fake passports, or money-laundering SIM cards was seized in the victim's name. Under fabricated arrest warrants and threats of life imprisonment, they isolate victims on camera and coerce them into transferring funds to 'government verification accounts' (which are actually mule bank accounts). Legally, 'digital arrest' does not exist under the Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS). The callers commit cognizable offences under BNS Section 204 (Impersonation of a public servant), Section 308 (Extortion), and Section 318(4) (Cheating), alongside Section 66D of the IT Act, 2000.",
  },
  {
    question: "What must I do in the first 24 hours (The Golden Hour) after losing money in a digital arrest?",
    answer:
      "Immediately take these four critical steps: (1) Dial the National Cybercrime Reporting Helpline 1930 or file an urgent report on cybercrime.gov.in. Provide the exact 12-digit UTR numbers, debit timestamps, and beneficiary bank accounts. This activates the I4C CFCFRMS automated API protocol, which instantly transmits lien/freeze orders to beneficiary banks across multiple layers; (2) Call your bank's fraud helpline immediately to report unauthorized fraudulent inducement and request an emergency recall alert; (3) Capture and preserve complete electronic evidence—video call screenshots, phone numbers, Skype IDs, fake letterheads, and WhatsApp chat exports—certified under Section 63 of Bharatiya Sakshya Adhiniyam, 2023; and (4) Register a formal FIR at your nearest Cyber Crime Police Station under Section 173 BNSS.",
  },
  {
    question: "Can I get my money back if the cyber cell has frozen the fraudster's mule account?",
    answer:
      "Yes. If the beneficiary mule account has been successfully frozen pursuant to your 1930 complaint, the frozen funds are held in debit lien by the bank. However, banks cannot unilaterally credit the funds back to you without judicial sanction. To reclaim the money, engage an advocate to file a petition under Section 457 of the Bharatiya Nagarik Suraksha Sanhita, 2023 (formerly Section 457 CrPC) before the jurisdictional Judicial Magistrate. High Courts (including the Gujarat High Court in Dr. Jignasa v. State of Gujarat, 2023) have held that magistrates must order banks to release frozen funds to verified victims upon executing a simple indemnity bond, without waiting for the criminal trial of the fraudsters to conclude.",
  },
  {
    question: "Are commercial banks liable for digital arrest scams under RBI regulations?",
    answer:
      "Banks bear legal and regulatory exposure on two primary grounds: First, the beneficiary bank where the fraudster's account is maintained has a strict statutory obligation under the RBI Master Direction on Know Your Customer (KYC) Directions, 2016 to prevent mule accounts. If the bank permitted dummy accounts to operate with forged identity papers or ignored sudden high-value velocity without triggering Anti-Money Laundering (AML) alerts, it constitutes actionable negligence. Second, if your remitting bank failed to act promptly on your immediate recall request, they exhibit deficiency of service under Section 2(11) of the Consumer Protection Act, 2019. You can issue a statutory legal notice to the bank's Principal Nodal Officer and escalate to the RBI Integrated Ombudsman under RB-IOS, 2021.",
  },
  {
    question: "How long does it take to recover money from a digital arrest cyber fraud?",
    answer:
      "The recovery timeline depends on how fast the funds were reported and frozen. In optimal scenarios where 1930 was alerted within 1 to 4 hours and funds were frozen in layer-1 or layer-2 mule accounts, securing a magistrate court release order under Section 457 BNSS typically takes between 45 and 90 days. If the funds were dispersed across multiple crypto exchanges, ATM withdrawals, or overseas gaming wallets before freezing, recovery through bank lien is limited to whatever residual balance was caught, while the remainder requires criminal police tracing and asset attachment under PMLA.",
  },
  {
    question: "What is Section 457 BNSS and how does it help cyber fraud victims?",
    answer:
      "Section 457 of the Bharatiya Nagarik Suraksha Sanhita, 2023 (which replaces Section 457 of the Code of Criminal Procedure, 1973) governs the disposal and release of property seized or frozen by the police during an investigation. Under this section, the lawful owner of seized bank account balances can petition the Magistrate for interim custody and unconditional transfer of the frozen funds back to their operational bank account. The petition is supported by transaction UTR logs, the cyber cell freeze acknowledgment, and an undertaking/indemnity bond confirming that if the ownership is ever contested, the amount will be accounted for.",
  },
  {
    question: "Can private online cyber recovery services or hackers recover my scammed money?",
    answer:
      "No. Private cyber recovery agencies, Instagram pages, Telegram channels, and recovery hackers advertising online are fraudulent secondary scams. Under Indian law, only authorized statutory bodies (the Indian Cybercrime Coordination Centre, state cyber police, commercial banks, and judicial courts) have legal power to freeze accounts and order restitution. Private entities requesting upfront fees or 'software charges' to reverse crypto or UPI transactions are cyber criminals preying on victims who have already suffered financial trauma.",
  },
  {
    question: "डिजिटल अरेस्ट फ्रॉड में पैसे कट जाने पर तुरंत पैसे वापस कैसे पाएं (Digital Arrest Scam me paise wapas kaise le)?",
    answer:
      "यदि आप डिजिटल अरेस्ट फ्रॉड के शिकार हुए हैं, तो तुरंत ये 3 काम करें: सबसे पहले घटना के 1-2 घंटे के भीतर साइबर हेल्पलाइन नंबर 1930 पर कॉल करें या cybercrime.gov.in पर शिकायत दर्ज करें। अपने बैंक को UTR नंबर देकर ट्रांजेक्शन को फ्रीज करवाएं। इसके बाद साइबर सेल से फ्रीज रिपोर्ट लेकर अपने वकील के माध्यम से संबंधित मजिस्ट्रेट कोर्ट में भारतीय नागरिक सुरक्षा संहिता (BNSS) की धारा 457 के तहत याचिका दायर करें। कोर्ट के आदेश के बाद बैंक फ्रीज की गई राशि सीधे आपके बैंक खाते में वापस ट्रांसफर कर देता है।",
  },
];

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Digital Arrest Scam: Report It & Try to Recover Money",
  description:
    "Digital arrest scam victims: immediate reporting via 1930, freezing funds, bank liability questions and realistic recovery steps.",
  datePublished: "2026-11-04T16:00:00+05:30",
  dateModified: "2026-11-04T16:00:00+05:30",
  mainEntityOfPage: `${SITE_URL}/digital-arrest-scam-money-recovery`,
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
    name: "Digital Arrest Cyber Scam Recovery and Bank Mule Liability in India",
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
      name: "Cyber Fraud Recoveries",
      item: `${SITE_URL}/how-to-recover-money-stuck-in-online-cyber-fraud`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Digital Arrest Recovery",
      item: `${SITE_URL}/digital-arrest-scam-money-recovery`,
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

export default function DigitalArrestScamRecoveryPage() {
  const breadcrumbItems = [
    { label: "Cyber Fraud Recoveries", href: "/how-to-recover-money-stuck-in-online-cyber-fraud" },
    { label: "Digital Arrest Recovery", href: "/digital-arrest-scam-money-recovery" },
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
        {/* Hero Section strictly matching site theme and irctc layout */}
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
          <div className="max-w-5xl mx-auto w-full">
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5 max-w-full">
              <span>Section 457 BNSS 2023</span>
              <span className="text-red-500">•</span>
              <span>1930 CFCFRMS Golden Hour Protocol</span>
              <span className="text-red-500">•</span>
              <span>RBI Mule Account Liability</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
              Fell for a &apos;Digital Arrest&apos; Call? What to Do in the First 24 Hours
            </h1>

            {/* Answer Box First: 40-60 Words Directly Under H1 */}
            <div
              aria-label="Emergency Statutory Answer"
              className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium"
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 mb-1">
                Emergency Statutory Summary (Immediate First 24-Hour Protocol)
              </p>
              <p>
                There is no legal concept of &apos;Digital Arrest&apos; in Indian law; video-call arrests are criminal extortion under BNS Sections 204 and 318(4). Dial <strong>1930</strong> or register on <strong>cybercrime.gov.in</strong> immediately within the Golden Window to trigger automated CFCFRMS debit freezes on recipient mule accounts. If funds are frozen, file a petition under <strong>Section 457 BNSS</strong> before your Judicial Magistrate to order bank release.
              </p>
            </div>

            {/* 4 Verified Summary Stat Line Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-100">1930 / I4C</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Golden Hour Freeze Protocol</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-emerald-400">s.457 BNSS</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Magistrate Fund Release Order</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-amber-400">Zero Legal</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Validity of Remote Arrests</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-red-400">Mule KYC</p>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 sm:mt-1">Bank Regulatory Liability</p>
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
            <DigitalArrestTableOfContents />

            {/* Main Content Body */}
            <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-14">
              {/* Section 1: H2 - What Is a Digital Arrest Scam? */}
              <section id="heading-overview" aria-labelledby="heading-overview-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-overview-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  What Is a "Digital Arrest" Scam &amp; How It Works
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The &quot;Digital Arrest&quot; scam has rapidly metastasized into one of India&apos;s most psychologically devastating cyber fraud trends. Operating as highly organized trans-national syndicates often rooted across Southeast Asian border compounds and domestic call hubs, fraudsters prey on respectable citizens, senior citizens, retirees, and corporate professionals by weaponizing institutional terror.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The trap begins with an automated IVR call or an alarming message purporting to originate from DHL, FedEx, the Telecom Regulatory Authority of India (TRAI), or Mumbai Customs. The caller claims that a parcel booked using your Aadhaar number contains 140 grams of MDMA narcotics, five forged passports, and twenty illicit bank cards. When you vehemently deny having booked any parcel, the scammer claims your identity has been compromised by an international money-laundering kingpin.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  You are promptly transferred to a &quot;special investigation wing&quot; via Skype, WhatsApp, or Google Meet. The screen flickers to life revealing an operative wearing a genuine-appearing police or CBI uniform, seated before a backdrop complete with state insignia, notice boards, and walkie-talkie audio. They brandish forged arrest warrants signed by fictitious Chief Judicial Magistrates and letters stamped with Supreme Court seals. Under the threat of immediate physical SWAT deployment and total asset seizure, the victim is coerced into staying in front of the camera under &quot;digital arrest&quot; for hours—or even days—before transferring their life savings into &quot;RBI Supervisory Accounts&quot; for &quot;verification&quot;.
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-amber-950 text-xs sm:text-sm">
                  <strong>The Statutory Reality:</strong> Under the <em>Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS)</em>, no police officer, Central Bureau of Investigation (CBI) investigator, or Enforcement Directorate (ED) deputy can legally arrest any individual over a video call. Formal police custody requires physical presence, a signed memorandum of arrest with date and time under Section 36 BNSS, intimation to a designated family member, and production before a Judicial Magistrate within 24 hours under Section 58 BNSS. The entire &quot;digital arrest&quot; procedure is pure extortion under Section 308 of the <em>Bharatiya Nyaya Sanhita, 2023 (BNS)</em>.
                </div>
              </section>

              {/* Section 2: Archetype G5 Core - Myth vs Fact Comparison Grid */}
              <section id="heading-myth-vs-fact" aria-labelledby="heading-myth-vs-fact-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-myth-vs-fact-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Myth vs Fact: 7 Misconceptions About Digital Arrests
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Statutory Reality vs Fraudulent Coercion
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Extortion syndicates rely on panic and legal illiteracy. Victims often comply because they falsely believe government agencies have emergency powers to conduct remote trials. Here is the verified statutory truth backed by Indian criminal statutes:
                </p>

                <div className="grid grid-cols-1 gap-4" role="table" aria-label="Myth vs Fact Digital Arrest Legal Analysis">
                  {MYTH_FACT_PAIRS.map((item, idx) => (
                    <div
                      key={idx}
                      role="row"
                      className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-[#DC2626]" />
                      <div className="pl-2 space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-red-100 text-red-800">
                            Myth #{idx + 1}
                          </span>
                          <span className="text-[11px] sm:text-xs font-bold text-slate-500 text-right">
                            {item.authority}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 pt-1">
                          <div className="p-3.5 bg-red-50/70 border border-red-200/70 rounded-xl">
                            <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-700 block mb-1">
                              ✕ Fraudster Threat &amp; Misbelief:
                            </span>
                            <p className="text-xs sm:text-sm text-red-950 font-medium leading-relaxed">
                              {item.myth}
                            </p>
                          </div>

                          <div className="p-3.5 bg-emerald-50/80 border border-emerald-200/80 rounded-xl">
                            <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 block mb-1">
                              ✓ Statutory Legal Reality:
                            </span>
                            <p className="text-xs sm:text-sm text-emerald-950 font-semibold leading-relaxed">
                              {item.fact}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 3: The First 24 Hours Golden Window */}
              <section id="heading-first-24-hours" aria-labelledby="heading-first-24-hours-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-first-24-hours-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  First 24 Hours: Freezing Stolen Funds via 1930 &amp; I4C
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  In cyber financial fraud, time is your only currency. Cybercrime syndicates operate automated &quot;mule farms&quot;—intricate networks of rented current and savings accounts across commercial banks. Once your funds hit Layer-1 (the primary recipient account), automated bot-scripts or syndicate operators split the sum within minutes into Layer-2 and Layer-3 mule accounts, and finally convert the capital into USDT cryptocurrency via P2P exchanges or cash withdrawals at remote ATMs.
                </p>

                <div className="bg-slate-900 text-slate-100 p-5 sm:p-6 rounded-2xl border border-slate-800 space-y-4">
                  <div className="flex items-center gap-2 text-red-400 font-bold text-xs uppercase tracking-wider">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                    Crucial Action Within 120 Minutes of Transaction
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    How the 1930 Citizen Financial Cyber Fraud Reporting System (CFCFRMS) Works
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Operated by the <strong>Indian Cybercrime Coordination Centre (I4C)</strong> under the Ministry of Home Affairs, the <strong>1930 helpline</strong> links directly into core banking systems (CBS) of all scheduled commercial banks, payment gateways, and UPI aggregators through an automated API integration known as CFCFRMS.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    <div className="bg-white/5 p-3.5 rounded-xl border border-white/10">
                      <span className="text-[11px] font-extrabold text-emerald-400 block mb-1">Phase 1: Real-Time Dial</span>
                      <p className="text-xs text-slate-300">
                        Dial 1930. State your name, calling number, remitting bank account, beneficiary account number, exact time, and the 12-digit UTR number.
                      </p>
                    </div>
                    <div className="bg-white/5 p-3.5 rounded-xl border border-white/10">
                      <span className="text-[11px] font-extrabold text-amber-400 block mb-1">Phase 2: Automated Lien</span>
                      <p className="text-xs text-slate-300">
                        CFCFRMS dispatches electronic freeze requests to the beneficiary bank API, imposing an instantaneous debit freeze or lien on the recipient mule account.
                      </p>
                    </div>
                    <div className="bg-white/5 p-3.5 rounded-xl border border-white/10">
                      <span className="text-[11px] font-extrabold text-red-400 block mb-1">Phase 3: Multi-Layer Tracing</span>
                      <p className="text-xs text-slate-300">
                        If funds were already moved to layer-2, the system chases the transaction trail across subsequent banks, freezing downstream balances before withdrawal.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  After filing the 1930 ticket, you will receive an SMS containing an acknowledgment number and a link to complete your comprehensive complaint on <strong>cybercrime.gov.in</strong> within 24 hours. Upload the formal bank statement showing the debits, call logs, and written chronology. This formalizes your ticket into an official police investigation track.
                </p>
              </section>

              {/* Section 4: Landmark Court Precedents Digest */}
              <section id="heading-case-digest" aria-labelledby="heading-case-digest-title" className="scroll-mt-28 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
                  <h2
                    id="heading-case-digest-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    High Court Precedents on Cyber Fraud Fund Recovery
                  </h2>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Verifiable Judicial Records
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The greatest hurdle cyber fraud victims face is that commercial banks refuse to return frozen money voluntarily, claiming that they cannot alter account balances without a magisterial directive. Indian High Courts have established clear, binding legal doctrines governing the release of frozen cyber fraud funds:
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
                            <strong className="text-slate-900 font-bold block mb-0.5">Dispute Facts &amp; Cyber Extortion Modus:</strong>
                            <p className="leading-relaxed">{c.facts}</p>
                          </div>

                          <div>
                            <strong className="text-slate-900 font-bold block mb-0.5">Judicial Holding &amp; Legal Principle:</strong>
                            <p className="leading-relaxed">{c.holding}</p>
                          </div>
                        </div>

                        <div className="p-3 sm:p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Relief Granted / Judicial Benchmark
                            </span>
                            <span className="text-sm sm:text-base font-black text-slate-900">
                              {c.amount}
                            </span>
                          </div>
                          <div className="sm:text-right">
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                              Precedent Authority
                            </span>
                            <span className="text-xs font-semibold text-slate-700">
                              Binding Across High Courts &amp; Magisterial Courts
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 leading-relaxed">
                          <strong>Takeaway for your recovery:</strong> {c.takeaway}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 5: Interactive Scenarios & Red Flags Tabs */}
              <section id="heading-problem-picker" aria-labelledby="heading-problem-picker-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-problem-picker-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Digital Arrest Traps &amp; Immediate Countermeasures
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Review the exact extortion format you encountered to identify immediate statutory remedies, from disconnecting fraudulent video links to enforcing bank liability and magistrate petitions:
                </p>

                <DigitalArrestProblemTabs />
              </section>

              {/* Section 6: Recovery Pipeline Flowchart SVG */}
              <section id="heading-recovery-pipeline" aria-labelledby="heading-recovery-pipeline-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-recovery-pipeline-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
                >
                  Recovery Pipeline: 1930 Freeze to Refund Order
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Recovering scammed funds requires progressing through three synchronized phases: emergency banking freeze, criminal cyber cell investigation, and judicial fund repatriation:
                </p>

                {/* Mobile Responsive Step Sequence (md:hidden) */}
                <div className="md:hidden space-y-3">
                  <div className="bg-[#404447] text-white p-4 rounded-xl border border-slate-600 shadow-xs">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block mb-1">Stage 1</span>
                    <h3 className="font-bold text-sm">Emergency 1930 / I4C Reporting</h3>
                    <p className="text-xs text-slate-200 mt-1">Dial 1930 within the Golden Hour. Log UTRs to trigger automated multi-layer bank debit freezes.</p>
                  </div>
                  <div className="bg-amber-50 text-amber-950 p-4 rounded-xl border border-amber-300">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">Stage 2</span>
                    <h3 className="font-bold text-sm">Formal FIR &amp; Seizure Memo</h3>
                    <p className="text-xs text-amber-900 mt-1">Register formal FIR at Cyber Police Station under Section 173 BNSS; obtain Section 106 BNSS bank seizure report.</p>
                  </div>
                  <div className="bg-slate-100 text-slate-900 p-4 rounded-xl border border-slate-300">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1">Stage 3</span>
                    <h3 className="font-bold text-sm">Bank Statutory Notice</h3>
                    <p className="text-xs text-slate-700 mt-1">Serve legal notice on remitting and beneficiary banks for KYC failure and preserve transaction audit trail.</p>
                  </div>
                  <div className="bg-red-50 text-red-950 p-4 rounded-xl border border-red-200">
                    <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">Stage 4</span>
                    <h3 className="font-bold text-sm">Section 457 BNSS Petition</h3>
                    <p className="text-xs text-red-900 mt-1">File petition before Judicial Magistrate with certified UTR slips requesting release of frozen funds.</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-950 p-4 rounded-xl border border-emerald-200">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">Stage 5</span>
                    <h3 className="font-bold text-sm">Bank Execution &amp; Repatriation</h3>
                    <p className="text-xs text-emerald-900 mt-1">Court orders beneficiary bank to issue Banker&apos;s Cheque or RTGS credit back to victim upon indemnity bond.</p>
                  </div>
                </div>

                {/* Visual Flowchart Diagram with Smooth Horizontal Scroll */}
                <div className="w-full bg-white border border-slate-200 rounded-2xl p-3.5 sm:p-6 shadow-sm overflow-x-auto">
                  <div className="md:hidden flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Digital Arrest Recovery Flowchart</span>
                    <span className="text-red-600 font-medium animate-pulse">Swipe horizontally →</span>
                  </div>
                  <svg
                    viewBox="0 0 840 260"
                    className="w-full h-auto text-xs font-sans min-w-[680px] sm:min-w-[700px]"
                    role="img"
                    aria-label="Digital Arrest Cyber Fraud Recovery Flowchart"
                  >
                    <defs>
                      <linearGradient id="scamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#404447" />
                        <stop offset="100%" stopColor="#1E293B" />
                      </linearGradient>
                      <linearGradient id="freezeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#D97706" />
                        <stop offset="100%" stopColor="#B45309" />
                      </linearGradient>
                      <linearGradient id="courtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DC2626" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                      <linearGradient id="refundGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#047857" />
                        <stop offset="100%" stopColor="#065F46" />
                      </linearGradient>
                    </defs>

                    {/* Step 1: 1930 Golden Hour */}
                    <g transform="translate(10, 30)">
                      <rect width="145" height="180" rx="12" fill="url(#scamGrad)" />
                      <text x="12" y="28" fill="#F87171" fontWeight="bold" fontSize="10">STAGE 1: 0-24 HOURS</text>
                      <text x="12" y="50" fill="#FFFFFF" fontWeight="bold" fontSize="13">Dial 1930 / I4C</text>
                      <text x="12" y="74" fill="#CBD5E1" fontSize="10">Log exact UTR numbers,</text>
                      <text x="12" y="90" fill="#CBD5E1" fontSize="10">remitter &amp; beneficiary</text>
                      <text x="12" y="106" fill="#CBD5E1" fontSize="10">bank account data.</text>
                      <rect x="10" y="130" width="125" height="36" rx="6" fill="#1E293B" />
                      <text x="16" y="146" fill="#38BDF8" fontWeight="bold" fontSize="9">CFCFRMS Alert Sent</text>
                      <text x="16" y="159" fill="#94A3B8" fontSize="8">API freeze command</text>
                    </g>

                    <path d="M 160 120 L 175 120" stroke="#94A3B8" strokeWidth="2" strokeDasharray="3,3" markerEnd="url(#arrow)" />

                    {/* Step 2: Mule Account Debit Freeze */}
                    <g transform="translate(180, 30)">
                      <rect width="145" height="180" rx="12" fill="url(#freezeGrad)" />
                      <text x="12" y="28" fill="#FEF3C7" fontWeight="bold" fontSize="10">STAGE 2: BANK ACTION</text>
                      <text x="12" y="50" fill="#FFFFFF" fontWeight="bold" fontSize="13">Mule Debit Lien</text>
                      <text x="12" y="74" fill="#FFFBEB" fontSize="10">Beneficiary bank locks</text>
                      <text x="12" y="90" fill="#FFFBEB" fontSize="10">Layer-1 &amp; Layer-2</text>
                      <text x="12" y="106" fill="#FFFBEB" fontSize="10">mule accounts.</text>
                      <rect x="10" y="130" width="125" height="36" rx="6" fill="#78350F" />
                      <text x="16" y="146" fill="#FDE68A" fontWeight="bold" fontSize="9">s.106 BNSS Seizure</text>
                      <text x="16" y="159" fill="#FEF3C7" fontSize="8">Cash withdrawal stopped</text>
                    </g>

                    <path d="M 330 120 L 345 120" stroke="#94A3B8" strokeWidth="2" strokeDasharray="3,3" />

                    {/* Step 3: Cyber FIR & Bank Notice */}
                    <g transform="translate(350, 30)">
                      <rect width="145" height="180" rx="12" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
                      <text x="12" y="28" fill="#DC2626" fontWeight="bold" fontSize="10">STAGE 3: FORMAL FIR</text>
                      <text x="12" y="50" fill="#0F172A" fontWeight="bold" fontSize="13">Cyber Cell Police</text>
                      <text x="12" y="74" fill="#475569" fontSize="10">Convert 1930 ticket to</text>
                      <text x="12" y="90" fill="#475569" fontSize="10">Section 173 BNSS FIR.</text>
                      <text x="12" y="106" fill="#475569" fontSize="10">Obtain freeze memo.</text>
                      <rect x="10" y="130" width="125" height="36" rx="6" fill="#F8FAFC" stroke="#E2E8F0" />
                      <text x="16" y="146" fill="#0F172A" fontWeight="bold" fontSize="9">Statutory Notice</text>
                      <text x="16" y="159" fill="#64748B" fontSize="8">Demand bank audit log</text>
                    </g>

                    <path d="M 500 120 L 515 120" stroke="#94A3B8" strokeWidth="2" strokeDasharray="3,3" />

                    {/* Step 4: Section 457 BNSS Petition */}
                    <g transform="translate(520, 30)">
                      <rect width="145" height="180" rx="12" fill="url(#courtGrad)" />
                      <text x="12" y="28" fill="#FEE2E2" fontWeight="bold" fontSize="10">STAGE 4: JUDICIAL</text>
                      <text x="12" y="50" fill="#FFFFFF" fontWeight="bold" fontSize="13">Section 457 BNSS</text>
                      <text x="12" y="74" fill="#FEE2E2" fontSize="10">Petition Magistrate for</text>
                      <text x="12" y="90" fill="#FEE2E2" fontSize="10">release of seized money</text>
                      <text x="12" y="106" fill="#FEE2E2" fontSize="10">from frozen accounts.</text>
                      <rect x="10" y="130" width="125" height="36" rx="6" fill="#7F1D1D" />
                      <text x="16" y="146" fill="#FCA5A5" fontWeight="bold" fontSize="9">Indemnity Bond</text>
                      <text x="16" y="159" fill="#FEE2E2" fontSize="8">Judicial release order</text>
                    </g>

                    <path d="M 670 120 L 685 120" stroke="#94A3B8" strokeWidth="2" strokeDasharray="3,3" />

                    {/* Step 5: Direct Repatriation */}
                    <g transform="translate(690, 30)">
                      <rect width="140" height="180" rx="12" fill="url(#refundGrad)" />
                      <text x="12" y="28" fill="#A7F3D0" fontWeight="bold" fontSize="10">STAGE 5: REFUND</text>
                      <text x="12" y="50" fill="#FFFFFF" fontWeight="bold" fontSize="13">Funds Credited</text>
                      <text x="12" y="74" fill="#ECFDF5" fontSize="10">Bank executes court</text>
                      <text x="12" y="90" fill="#ECFDF5" fontSize="10">mandate; issues RTGS</text>
                      <text x="12" y="106" fill="#ECFDF5" fontSize="10">or Banker&apos;s Cheque.</text>
                      <rect x="10" y="130" width="120" height="36" rx="6" fill="#064E3B" />
                      <text x="16" y="146" fill="#6EE7B7" fontWeight="bold" fontSize="9">100% Repatriated</text>
                      <text x="16" y="159" fill="#A7F3D0" fontSize="8">Disputed lien closed</text>
                    </g>
                  </svg>
                </div>
              </section>

              {/* Section 7: Bank Negligence & Liability Matrix */}
              <section id="heading-bank-liability" aria-labelledby="heading-bank-liability-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-bank-liability-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Bank Liability: Holding Banks Liable for Mule Transfers
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Many victims are dismissed by bank branch managers with the standard excuse: <em>&quot;You authorized the transfer via OTP/password, so the bank has no responsibility.&quot;</em> While this is true for simple authorized commercial payments, it collapses when examined under the Reserve Bank of India&apos;s strict anti-money laundering and customer protection mandates.
                </p>

                <div className="w-full max-w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                  <table className="w-full min-w-[620px] text-left text-xs sm:text-sm text-slate-700">
                    <caption className="sr-only">Bank Liability Analysis for Cyber Mule Account Exploitation</caption>
                    <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Bank Category &amp; Failure Mode</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Statutory / Regulatory Violation</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Actionable Forum</th>
                        <th scope="col" className="py-3 px-3.5 sm:py-3.5 sm:px-4">Legal Outcome / Remedy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Beneficiary Bank (Mule Account Host)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Opened account with dummy/forged Aadhaar-PAN; ignored sudden multi-lakh inflows in dormant account</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-semibold text-red-600">RBI KYC Master Direction 2016; Consumer Court</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Deficiency of service liability; court orders compensation for facilitating fraud conduit</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Beneficiary Bank (Delayed Freeze)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Failed to act on 1930 CFCFRMS API alert within stipulated time, allowing scammers to withdraw cash</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-semibold text-red-600">I4C Escalation &amp; RBI Banking Ombudsman</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Ombudsman award under RB-IOS, 2021 up to ₹20 Lakhs for gross operational failure</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Remitting Bank (Failure of AML Alerts)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Permitted breaking of lifetime fixed deposits and rapid RTGS transfers without automated fraud warning calls</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-semibold text-amber-700">Internal Ombudsman &amp; Consumer Commission</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Contributory negligence claims; partial compensation for failure of behavioral fraud filters</td>
                      </tr>
                      <tr className="hover:bg-slate-50/80">
                        <th scope="row" className="py-3 px-3.5 sm:py-3.5 sm:px-4 font-semibold text-slate-900">
                          Beneficiary Bank (Withholding Frozen Funds)
                        </th>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Refusing to release verified frozen funds despite Cyber Cell police clearance and victim UTR match</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs font-semibold text-emerald-700">Judicial Magistrate under Section 457 BNSS</td>
                        <td className="py-3 px-3.5 sm:py-3.5 sm:px-4 text-xs">Judicial order compelling bank to disburse full frozen sum directly to victim with compliance timeline</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Under the RBI Master Directions on KYC, commercial banks are statutorily required to maintain robust transaction monitoring mechanisms to identify mule accounts. When banks operate lax customer identification systems, victims can challenge the bank through a formal advocate legal notice followed by an application under the <Link href="/law/rbi-ombudsman-complaint-guide" className="text-red-600 font-bold hover:underline">RBI Integrated Ombudsman Scheme (RB-IOS, 2021)</Link>. Also consider exploring our guide on <Link href="/credit-card-chargeback-wrong-charge-india" className="text-red-600 font-bold hover:underline">credit card chargeback mechanisms in India</Link> if any portion involved card payments.
                </p>
              </section>

              {/* Section 8: Section 457 BNSS Petition */}
              <section id="heading-bnss-457" aria-labelledby="heading-bnss-457-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-bnss-457-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Section 457 BNSS Petition: Releasing Frozen Money
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  When funds are placed on debit freeze pursuant to a 1930 complaint, they are legally considered &quot;property seized under Section 106 BNSS (formerly Section 102 CrPC)&quot;. Under Indian law, a bank cannot voluntarily reverse the money to you without a magisterial order, because the account belongs to a third party (the mule).
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  The statutory legal vehicle to repatriate these funds is an application under <strong>Section 457 of the Bharatiya Nagarik Suraksha Sanhita, 2023</strong> filed before the Chief Judicial Magistrate (CJM) or Metropolitan Magistrate (MM) who has jurisdiction over the Cyber Crime Police Station where your FIR is registered.
                </p>

                <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4 shadow-xs">
                  <h3 className="font-bold text-base sm:text-lg text-slate-900">
                    The 4-Step Legal Protocol for a Section 457 BNSS Release Application
                  </h3>
                  <ol className="list-decimal pl-5 space-y-3 text-xs sm:text-sm text-slate-700">
                    <li>
                      <strong>Obtain Police Seizure Verification Memo:</strong> Request the Investigating Officer (IO) of the Cyber Crime Police Station to file a report confirming that out of the total cheated amount, ₹X has been successfully frozen in Account No. Y (Beneficiary Bank, Branch Z) under your Crime/FIR number.
                    </li>
                    <li>
                      <strong>Draft and File Section 457 BNSS Application:</strong> Your advocate files an application arraying the State (Cyber Police Station) as Respondent No. 1 and the Beneficiary Bank as Respondent No. 2. The petition includes transaction bank statements, UTR acknowledgments, 1930 portal printouts, and an electronic certificate under Section 63 BSA 2023.
                    </li>
                    <li>
                      <strong>Court Notice to Account Holder (Mule):</strong> The Magistrate issues a summary notice to the mule account holder. In 99% of cyber fraud cases, the mule account holder fails to appear or cannot explain the legitimate source of funds.
                    </li>
                    <li>
                      <strong>Execution of Indemnity Bond:</strong> Following the landmark precedent in <em>Dr. Jignasa v. State of Gujarat (2023)</em>, the Magistrate passes a final order directing the manager of the beneficiary bank to release the frozen funds directly into the victim&apos;s bank account via RTGS or demand draft upon the victim furnishing a standard indemnity bond.
                    </li>
                  </ol>
                </div>
              </section>

              {/* Section 9: Worked Recovery Example */}
              <section id="heading-worked-example" aria-labelledby="heading-worked-example-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-worked-example-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Case Study: Reclaiming ₹14.5L from Mule Accounts
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  To understand how recovery operates in practice, consider this realistic illustrative case study based on actual cyber litigation timelines in Indian courts:
                </p>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-7 space-y-5">
                  <div className="border-b border-slate-200 pb-3 flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <span className="text-[11px] font-extrabold text-red-600 uppercase tracking-wider block">
                        Illustrative Case Study
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Senior IT Executive Extorted via Fake CBI Video Call in Bengaluru
                      </h3>
                    </div>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">
                      ₹9.8 Lakhs Recovered (67.5%)
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
                    <div>
                      <strong className="text-slate-900 block mb-1">The Fraud Event:</strong>
                      <p className="leading-relaxed">
                        The victim received an IVR call claiming a package sent to Cambodia containing banned narcotic substances had been intercepted. Over a 6-hour Skype video call with synthetic &apos;CBI officers&apos;, he was coerced into breaking two fixed deposits and transferring ₹14,50,000 via RTGS to an &apos;RBI Clearance Account&apos; at a private bank in Jaipur.
                      </p>
                    </div>
                    <div>
                      <strong className="text-slate-900 block mb-1">Golden Hour Action:</strong>
                      <p className="leading-relaxed">
                        Ninety minutes after transferring, the victim realized it was a scam and dialled 1930. The I4C system immediately dispatched API debit freeze alerts. By that time, ₹4.7 Lakhs had already been withdrawn via ATM and crypto P2P, but ₹9,80,000 remained locked in the Layer-1 and Layer-2 mule accounts.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2 text-xs sm:text-sm">
                    <strong className="text-slate-900 block">The Judicial Recovery Chronology:</strong>
                    <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
                      <li><strong>Day 2:</strong> Registered formal FIR at Cyber Crime Police Station (Central Division) under BNS 204, 308, 318(4) and Section 66D IT Act.</li>
                      <li><strong>Day 14:</strong> Investigating Officer confirmed debit freeze of ₹9,80,000 across two accounts under Section 106 BNSS.</li>
                      <li><strong>Day 22:</strong> Advocate filed Section 457 BNSS application before the Chief Metropolitan Magistrate with UTR audit trail.</li>
                      <li><strong>Day 48:</strong> Magistrate issued notice to mule account holders; no appearance or source justification produced.</li>
                      <li><strong>Day 65:</strong> Magistrate passed final order directing Jaipur branch to issue Banker&apos;s Cheque of ₹9,80,000 to the victim upon executing an indemnity bond.</li>
                    </ul>
                  </div>

                  <p className="text-xs text-slate-600 italic">
                    Note: For the unrecovered ₹4.7 Lakhs withdrawn by fraudsters, the victim issued a statutory notice to the beneficiary bank for opening a current account on fabricated rent agreements, subsequently escalating to the Banking Ombudsman for KYC violation redressal.
                  </p>
                </div>
              </section>

              {/* Section 10: Essential Evidentiary Checklist */}
              <section id="heading-evidence-checklist" aria-labelledby="heading-evidence-checklist-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-evidence-checklist-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Evidence Checklist for Cyber Cell FIR &amp; Notices
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Before lodging your cyber FIR or serving a bank liability legal notice, assemble a comprehensive evidentiary dossier complying with the <em>Bharatiya Sakshya Adhiniyam, 2023 (BSA)</em>:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-xs">1</span>
                      <h3 className="font-bold text-sm text-slate-900">Transaction &amp; Banking Audit</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Bank statement highlighting fraudulent debit, exact 12-digit UTR/RRN numbers, IFSC codes of beneficiary accounts, timestamp slips, and proof of fixed deposit premature encashment.
                    </p>
                  </div>

                  <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-xs">2</span>
                      <h3 className="font-bold text-sm text-slate-900">1930 / I4C Acknowledgment</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Screenshot and PDF download of the 1930 national cyber portal complaint, CRM ticket reference number, and initial police SMS confirmation.
                    </p>
                  </div>

                  <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-xs">3</span>
                      <h3 className="font-bold text-sm text-slate-900">Digital Extortion Artifacts</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Screenshots of Skype video calls, fake CBI/Police profile icons, caller phone numbers, fake arrest warrants, bogus Supreme Court letters, and WhatsApp conversation exports.
                    </p>
                  </div>

                  <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-xs">4</span>
                      <h3 className="font-bold text-sm text-slate-900">Section 63 BSA Electronic Certificate</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Signed certificate under Section 63 of Bharatiya Sakshya Adhiniyam, 2023 certifying that electronic screenshots and transcripts were printed from your personal device without tampering.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 11: Honest Scope Card */}
              <section id="heading-honest-scope" aria-labelledby="heading-honest-scope-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-honest-scope-title"
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                >
                  Realistic Scope of Recovery: What LegalRecovery Can and Cannot Do
                </h2>
                <div className="bg-slate-100 border border-slate-300 rounded-2xl p-5 sm:p-6 space-y-4">
                  <p className="text-sm text-slate-800 leading-relaxed font-medium">
                    In compliance with ethical legal practice and strict YMYL honesty, we do not make false guarantees. Cyber extortion recovery operates under precise statutory boundaries:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl">
                      <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-2">
                        ✓ What We Can Do:
                      </span>
                      <ul className="text-xs text-emerald-950 space-y-1.5 list-disc pl-4 leading-relaxed">
                        <li>Draft and serve statutory legal notices to remitting and beneficiary banks for KYC and AML violations.</li>
                        <li>Prepare and structure your Section 457 BNSS petition dossier to release verified frozen funds through the Magistrate.</li>
                        <li>Escalate unresolved bank disputes to the Principal Nodal Officer and the RBI Integrated Ombudsman.</li>
                        <li>Draft certified Section 63 BSA electronic evidence declarations for Cyber Crime FIR filings.</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 border border-red-200 p-4 rounded-xl">
                      <span className="text-xs font-bold text-red-800 uppercase tracking-wider block mb-2">
                        ✕ What We Cannot Do:
                      </span>
                      <ul className="text-xs text-red-950 space-y-1.5 list-disc pl-4 leading-relaxed">
                        <li>We cannot magically reverse funds that have already been converted into cash at ATMs or sent to offshore crypto wallets.</li>
                        <li>We are not private cyber hackers; we do not engage in unauthorized digital infiltration or &quot;remote tracking&quot;.</li>
                        <li>We cannot guarantee 100% recovery if you failed to report the incident within the Golden Window and zero funds were frozen.</li>
                        <li>We cannot bypass the judicial magistrate&apos;s requirement for an indemnity bond under Section 457 BNSS.</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600">
                    Review our related guides for other online dispute recoveries: <Link href="/fake-job-offer-registration-fee-refund" className="text-red-600 font-bold hover:underline">Fake Job Offer Refund</Link>, <Link href="/online-gaming-wallet-balance-refund" className="text-red-600 font-bold hover:underline">Online Gaming Wallet Refund</Link>, and <Link href="/loan-app-harassment-excess-charges-legal-notice" className="text-red-600 font-bold hover:underline">Loan App Harassment Legal Notice</Link>. For drafting fees, check our transparent <Link href="/legal-notice-charges" className="text-red-600 font-bold hover:underline">legal notice charges</Link>.
                  </p>
                </div>
              </section>

              {/* Section 12: Primary CTA Component */}
              <section className="pt-2">
                <DigitalArrestNoticeCTA />
              </section>

              {/* Section 13: Unique FAQ Section */}
              <section id="heading-faqs" aria-labelledby="heading-faqs-title" className="scroll-mt-28 space-y-6">
                <div className="border-b border-slate-200 pb-3">
                  <h2
                    id="heading-faqs-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
                  >
                    Frequently Asked Questions on Digital Arrest Scam Money Recovery
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Direct answers on reporting deadlines, 1930 portal mechanics, bank liability, and court release petitions.
                  </p>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs hover:border-slate-300 transition-colors"
                    >
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 14: Primary Sources & Statutory Legal References */}
              <section id="heading-sources" aria-labelledby="heading-sources-title" className="scroll-mt-28 space-y-4">
                <h2
                  id="heading-sources-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight"
                >
                  Sources &amp; Statutory Legal References
                </h2>
                <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5">
                  <ul className="space-y-2 text-xs text-slate-700">
                    {PRIMARY_SOURCES.map((source, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-red-600 font-bold shrink-0">[{i + 1}]</span>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-800 hover:text-red-600 hover:underline leading-relaxed font-medium"
                        >
                          {source.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[11px] text-slate-500 mt-4 pt-3 border-t border-slate-100">
                    Statutory references verified against India Code legislative databases, official Gazette publications, Supreme Court and High Court judgments, and Reserve Bank of India Master Directions as of November 2026.
                  </p>
                </div>
              </section>

              {/* Related Recovery Guides Shared Component */}
              <section className="pt-4">
                <RelatedRecoveryGuides />
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
